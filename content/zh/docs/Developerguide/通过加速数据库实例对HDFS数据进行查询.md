# 通过加速数据库实例对HDFS数据进行查询<a name="ZH-CN_TOPIC_0311524277"></a>

## 背景信息<a name="section88355275018"></a>

在openGauss的场景中，由于数据保存在DN本地，而且经过精心设计后，比如采用分区、列存等数据保存的形式，会在执行计划的规划和执行过程中优化掉大量的数据扫描工作，因此IO时间在查询的整体执行时间中占比较小。但对于HDFS外表场景会有很大的不同，分布方式和数据保存位置会显著增加IO时间在查询整体执行时间中的占比。

openGauss数据库实例只拥有固定数量的执行节点（DN），在对大量数据扫描时，有限的DN数量也会导致IO时间变长。为了降低甚至消除这些因素对性能的影响，将部分操作（scan、agg等）下推到计算资源池，可以通过大量节点的并发操作来降低IO时间的占比。

此场景下存在两套数据库实例，分别为客户数据库实例和加速数据库实例。客户端数据库实例将部分计算任务发给加速数据库实例，加速数据库实例将中间结果返回给客户端数据库实例，两套数据库实例配合完成一个查询任务。

## 前提条件<a name="section1373120381810"></a>

使用加速数据库实例提升HDFS外表的查询性能，需要先部署一个大规模的openGauss数据库实例作为加速数据库实例，该数据库实例和HDFS数据库实例部署在同一套物理服务器上。

## 客户端数据库实例配置<a name="section152213321570"></a>

1.  根据[使用前的对接配置](使用前的对接配置.md)在客户端数据库实例配置访问远端Hadoop数据库实例。
2.  [使用gsql连接](使用gsql连接.md)数据库。
3.  在DN上配置通过计算资源池进行加速。

    ```
    openGauss=# set acceleration_with_compute_pool = on;
    ```

4.  创建dummy server用于保存计算资源池的连接信息。

    客户端数据库实例需要在使用计算资源池的数据库中创建dummy server，以便提供访问加速数据库实例的各种信息。

    ```
    openGauss=# CREATE SERVER dummy_server FOREIGN DATA WRAPPER DFS_FDW OPTIONS (address 'xx.xx.178.243:61600', username 'omm', password 'Gauss@123', dbname 'accedb', remoteservername 'acceserver', type 'dummy');
    ```

    address：加速数据库实例的连接地址，如果加速数据库实例配置了LVS，则IP为LVS的IP地址，否则为加速数据库实例某个DN的IP地址；

    username/password：在加速数据库实例中创建，并提供给dummy server保存并用于连接加速数据库实例的认证；

    dbname/remoteservername：在加速数据库实例中创建，并提供给dummy server保存并用于下推的执行计划的运行环境。

5.  创建HDFS SERVER用于直接访问远端Hadoop数据库实例。

    ```
    openGauss=# CREATE SERVER orc_server FOREIGN DATA WRAPPER DFS_FDW OPTIONS (address 'xx.xx.185.201:25000,xx.xx.185.203:25000',hdfscfgpath 'hdfs_cfg', type 'hdfs');
    ```

    上面例子中，假设在步骤1中将HDFS客户端配置文件存储在了客户端数据库实例物理服务器的/home/config路径下。因此将hdfscfgpath的值设置成了hdfs\_cfg，具体请根据实际的配置值进行修改。

    address为HDFS数据库实例的主备节点所在的IP地址以及端口；

    可创建HDFS外表，确认客户端数据库实例远程读HDFS是否配置成功。


## 加速数据库实例配置<a name="section17347161610814"></a>

加速数据库实例DN参数配置：

1.  以操作系统用户omm登录数据库主节点。
2.  打开加速数据库实例功能。

    ```
    gs_guc set -Z datanode -N all -I all -c "use_workload_manager=on"
    ```

    ```
    gs_guc set -Z datanode -N all -I all -c "enable_dynamic_workload=on"
    ```

    ```
    gs_guc set -Z datanode -N all -I all -c "enable_acceleration_cluster_wlm=on"
    ```

3.  根据数据库实例硬件规模设置max\_active\_statements为正值。

    ```
    gs_guc reload -Z datanode -N all -I all -c "max_active_statements=10"
    ```

4.  [使用gsql连接](使用gsql连接.md)数据库。
5.  设置query\_dop为1，由动态资源管理决定客户端请求在加速数据库实例上的并发度。

    ```
    openGauss=# SET query_dop = 1;
    ```

6.  [session\_timeout](安全和认证_postgresql-conf.md)，[statement\_timeout](语句行为.md)设置为0，避免长时间查询的连接断掉。

    ```
    openGauss=# SET session_timeout = 0;
    openGauss=# SET statement_timeout = 0;
    ```


其它配置：

1.  LVS配置。

    LVS用于将客户端数据库实例的请求分发到计算资源池不同的DN上，避免请求集中在同一个DN上。LVS配置请参考“软件安装\>配置负载均衡软件”章节。

2.  创建用户名和密码。

    客户端数据库实例访问计算资源池需要用户名和密码进行认证，因此需要预先在计算资源池端创建好用户名和密码，并赋予该用户查询权限。

3.  配置HDFS SERVER。

    根据[使用前的对接配置](使用前的对接配置.md)配置加速数据库实例访问远端Hadoop数据库实例。这些配置用于在加速数据库实例中建立数据库和HDFS SERVER以便下发到加速数据库实例的请求使用。

    例子如下：

    ```
    openGauss=# CREATE DATABASE accedb;
    ```

    ```
    openGauss=# \c accedb
    ```

    ```
    openGauss=# CREATE SERVER acceserver FOREIGN DATA WRAPPER DFS_FDW OPTIONS (address 'xx.xx.178.239:25000,xx.xx.178.241:25000', hdfscfgpath 'hdfs_cfg', type 'hdfs');
    ```

    上面的例子里，在加速数据库实例中物理服务器的hdfs\_cfg保存着存取HDFS系统的配置信息。因此将hdfscfgpath的值设置成了hdfs\_cfg，具体请根据实际的配置值进行修改。

    address为HDFS数据库实例的主备节点所在的IP地址以及端口。

    accedb和acceserver在客户端数据库实例创建dummy server时体现，用于存取HDFS时的相关信息。

4.  配置DN接收连接的范围。

    在加速数据库实例DN的pg\_hba.conf文件中，加如下内容以便客户端数据库实例的DN可以访问加速数据库实例的DN。例子如下：

    ```
    gs_guc set -Z datanode -N all -I all -h "host all all 0.0.0.0/0 sha256"
    gs_guc set -Z datanode -N all -I all -h "host all all 10.0.0.0/8 sha256"
    gs_guc set -Z datanode -N all -I all -h "host all all 192.168.0.0/16 sha256"
    gs_guc set -Z datanode -N all -I all -h "host all all 10.185.181.0/24 sha256"
    ```
