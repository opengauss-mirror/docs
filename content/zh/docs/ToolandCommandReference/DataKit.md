# DataKit

## 功能介绍

openGauss的开发运维涉及到很多复杂操作，DataKit提供了一个可视化操作的运维界面，可以帮助用户管理，安装，监控运维自己的openGauss数据库以及对应的物理机资源。

DataKit是一个以资源（物理机，数据库）为底座的开发运维工具，将上层的开发运维工具插件化，各插件之间相互独立，方便用户按需引入。各插件围绕DataKit的资源中心进行扩展开，完成数据库的运维，监控，迁移，开发，建模等复杂的操作。

## 原理简介

DataKit是基于spring-brick开发的插件化的工具，前台使用vue，后台使用spring-boot技术栈。DataKit基座提供资源管理，安全中心，日志中心等基础的公共能力，具体的数据库安装，运维，监控，数据迁移等能力是基于spring-brick开发的插件工具，可以灵活的在基座上面安装卸载，方便客户按需使用。

## 特性优势

本项目是基于Web的openGauss的可视化的一体化工具：DataKit，目的是方便客户使用和管理openGauss可视化工具，可以为客户降低openGauss数据库安装使用门槛，做到安全中心管理，插件管理，以及其它功能包括一键化部署、卸载、组件化安装、多版本升级和日常运维。

## 环境准备

X86/ARM+openEuler 20.03 或 X86+CentOS 5.7。

## 操作步骤

1. 解压安装包

   通过官网获取安装包`Datakit-6.0.0.tar.gz`，解压安装包至`datakit`安装目录下，例如安装目录为`/path/datakit_server`时，解压命令如下:

   ```shell
   $ tar -zxvf Datakit-6.0.0.tar.gz -C /path/datakit_server
   ```
2. 创建新目录

   在`datakit`安装目录下，创建新的目录`config`, `files`, `ssl`, `logs`
   ```shell
   $ cd /path/datakit_server
   mkdir config files ssl logs
   ```
3. 更改配置文件 - 修改工作目录

   修改`datakit`安装目录下的`application-temp.yml`文件，文件中的`/ops`默认工作目录路径统一修改为实际`datakit`安装目录的路径`/path/datakit_server`，而第二步创建的目录就是为了此处统一使用的
   ```shell
   $ vim application-temp.yml
   system.defaultStoragePath: /ops/files
   server.ssl.key-store: /ops/ssl/keystore.p12
   logging.file.path: /ops/logs
   ```
4. 更改配置文件 - 配置数据库

   平台默认使用`openGauss`作为后台数据库，需要正确配置`openGauss`的连接信息，包括url中的ip、port、database以及username和password。配置内容如下：

   ```yaml
   # For openGauss
   driver-class-name: org.opengauss.Driver
   url: jdbc:opengauss://ip:port/database?currentSchema=public&batchMode=off
   username: dbuser
   password: dbpassword
   ```
   
   配置文件更改完成后，保存并退出文件编辑，然后执行如下命令，将`application-temp.yml`文件移动到第二步创建的`config`目录下

   ```shell
   mv application-temp.yml config
   ```
   
   *注意*：需要提前对`openGauss`数据库做一些参数配置，详细步骤请参考下方目录[**openGauss参数配置**](#openGauss参数配置)

5. 生成密钥信息

   修改并执行如下命令生成密钥信息。修改`-storepass`参数值与`application.yml`配置文件中的`key-store-password`值保持一致，默认时两者均为`123456`；修改`-keystore`路径值与配置文件中的`key-store`路径值保持一致，即第三步中修改`/ops`后的路径。
   ```shell
   keytool -genkey -noprompt -dname "CN=opengauss, OU=opengauss, O=opengauss, L=Beijing, S=Beijing, C=CN" -alias opengauss -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore /ops/ssl/keystore.p12 -validity 3650 -storepass 123456
   ```
   *注意*：此处为一条完整命令。

6. 启动与日常运维

   启动应用：
   ```shell
   sh ./run.sh start
   ```
   停止应用：
   ```shell
   sh ./run.sh stop
   ```
   重启应用：
   ```shell
   sh ./run.sh restart
   ```
   检查应用状态：
   ```shell
   sh ./run.sh status
   ```
7. 访问服务

   启动成功后，通过浏览器输入如下地址：`https://ip:9494/` 访问`datakit`服务，这里的`ip`为`datakit`服务安装在的主机`ip`，`9494`为`datakit`服务默认端口，如有修改请根据实际情况替换。初始用户为`admin`，初始密码为`admin123`，首次登录需修改初始密码。

## openGauss参数配置

1. 安装`openGauss`数据库

   `openGauss`数据库的下载及安装请参考官网教程，这里不做赘述，下载地址：https://opengauss.org/zh/download/

2. 切换数据库安装用户，并加载环境变量

   成功安装`openGauss`数据库后，主机切换到数据库安装用户，如`omm`用户。然后`source`环境变量文件，来加载`openGauss`的环境变量，如`omm`用户环境变量文件`~/.bashrc`。注意此环境变量文件为`openGauss`数据库环境变量所在文件，请根据实际情况替换。
   ```shell
   source ~/.bashrc
   ```
3. 参数配置

   修改并执行如下命令，设置配置文件`pg_hba.conf`相关参数
   ```shell
   gs_guc set -D /opt/software/openGauss/data/single_node -h "host all all 0.0.0.0/0 sha256"
   ```
   修改并执行如下命令，配置文件`postgresql.conf`相关参数
   ```shell
   gs_guc set -D /opt/software/openGauss/data/single_node -c "listen_addresses = '*'"
   ```
   上述命令中的`/opt/software/openGauss/data/single_node`为数据库节点的安装目录路径，此目录下包含有上述两个文件，请根据数据库的实际情况替换。此处参数配置的目的是使得数据库接受来自任意`ip`地址的连接请求，以便在外部服务器可以成功连接到数据库。

4. 重启数据库

   执行如下命令重新启动数据库，使参数配置生效。此处的`/opt/software/openGauss/data/single_node`请按第三步的方法替换为实际路径
   ```shell
   gs_ctl restart -D /opt/software/openGauss/data/single_node
   ```
5. 连接数据库

   执行如下命令连接数据库，此处`5432`为`openGauss`数据库默认端口，请根据实际情况替换
   ```shell
   gsql -d postgres -p 5432 -r
   ```
6. 创建用户及数据库

   成功连接数据库后，依次执行如下三条命令，分别进行创建用户，赋予用户管理员权限，创建数据库的操作。
   ```shell
   create user opengauss_test with password '*********';
   grant all privileges to opengauss_test;
   create database db_datakit;
   ```
   由于`openGauss`数据库不支持通过初始用户进行远程连接，因此此处创建新的用户供`datakit`远程连接时使用。同时，由于`datakit`需要拥有管理员权限对数据库进行操作，因此需要赋予连接用户管理员权限。此处新建`db_datakit`数据库作为`datakit`平台的底层数据库使用，不用做任何操作，`datakit`成功连接后会自动初始化数据。

7. 所有配置完成，保持`openGauss`数据库服务启动

## 卸载工具

DataKit工具是Jar包启动的，删除对应的Jar包即可卸载该工具。

## DataKit源码链接和使用说明

源码：https://gitee.com/opengauss/openGauss-workbench/tree/master

使用说明： <a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/openGauss-datakit/README.md ">README.md</a>

## 插件说明

<a name="table1652718018281"></a>
<table><tbody>
<tr id="row14118151122812"><td class="cellrowborder" valign="top" width="20%"><p id="p10118181152814"><a name="p10118181152814"></a><a name="p10118181152814"></a><strong id="b1711814115287"><a name="b1711814115287"></a><a name="b1711814115287"></a><span>插件名称</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="40%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>介绍</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>源码</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>文档</span></strong></p>
</td>
</tr>
<tr> 
<td>基础运维插件</td>
<td>实现数据库集群的基础管理能力，包括安装、导入、启停、备份恢复、升级等操作；也支持websell、安装包管理等能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/base-ops">base-ops</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/base-ops/README.md ">base-ops使用说明</a></td>
</tr>
<tr> 
<td>数据迁移插件</td>
<td>实现其他数据库到openGauss一站式迁移方案（当前支持MySQL）</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/data-migration">data-migration</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/data-migration/README.md ">data-migration使用说明</a></td>
</tr>
<tr> 
<td>告警监控插件</td>
<td>为openGauss提供告警和通知能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/alert-monitor">alert-monitor</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/alert-monitor/README.md ">alert-monitor使用说明</a></td>
</tr>
<tr> 
<td>业务开发插件</td>
<td>业务开发是一个基于 Browser/Server 的通用集成开发环境， 帮助数据库开发人员便捷地构建应用程序，以图形化界面形式提供数据库关键特性。业务开发支持的主要功能点包括：创建和管理数据库对象（表、视图、序列、同义词等）、执行 SQL 语句、 编译和执行 PL/SQL语句。</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/data-studio">data-studio</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/data-studio/readme.md ">data-studio使用说明</a></td>
</tr>
<tr> 
<td>实例监控插件</td>
<td>提供实例、集群等监控能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/observability-instance">observability-instance</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/observability-instance/README.md ">observability-instance使用说明</a></td>
</tr>
<tr> 
<td>日志检索插件</td>
<td>提供日志检索能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/observability-log-search">observability-log-search</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/observability-log-search/README.md ">observability-log-search使用说明</a></td>
</tr>
<tr> 
<td>智能诊断插件</td>
<td>提供SQL诊断能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/observability-sql-diagnosis">observability-sql-diagnosis</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/observability-sql-diagnosis/README.md ">observability-sql-diagnosis使用说明</a></td>
</tr>
<tr> 
<td>openGauss数据库监控插件</td>
<td>openGauss通用的监控插件生成工具，支持Prometheus、Zabbix以及Nagios平台</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/openGauss-tools-monitor">openGauss-tools-monitor</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/openGauss-tools-monitor/README.md ">openGauss-tools-monitor使用说明</a></td>
</tr>
</tbody>
</table>
