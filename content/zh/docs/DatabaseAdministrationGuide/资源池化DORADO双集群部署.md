# 资源池化DORADO双集群部署

## 内容简介

openGauss资源池化是openGauss推出的一种新型的集群架构.通过DMS和DSS组件,实现集群中多个节点的底层存储数据共享和节点间的内存实时共享，达到节省底层存储资源以及集群内部支持一写多读且可以实时一致性读的目的。
本文主要介绍基于日志合一的资源池化部署同城双中心。


  - 在社区上正式发布的企业版安装包中, 如果需要搭建资源池化同城双中心, 在硬件上需要准备磁阵, 服务器和光交换机，且需要部署CM和OM组件。

  - 当前版本只支持资源池化本地xlog日志和远程同步复制xlog日志共存的实现下部署资源池化主备双集群容灾。


## 手动部署同城双中心示例<a name="section188071153201818"></a>
资源池化部署通过om管理工具部署两个资源池化单集群，再配置容灾参数，从而搭建同城双中心。

>![](public_sys-resources/icon-note.png) **说明：** 
>此处的手动安装是指工程编译之后，可通过om管理工具执行相关命令进行资源池化集群安装部署，openGauss常规安装请参照《安装指南》。

-   前置条件
    -   工程已完成代码编译，编译请参见[软件安装编译](../CompilationGuide/版本编译.md)。
    -   主备存储已经挂载磁阵LUN设备，并且已经安装ultrapath多路径软件，磁阵设备可用。

-   限制条件
    -   两套正常的dorado存储，需要搭建两套资源池化集群。
    -   为了支持日志合一，需要将集群内xlog日志全部存放在一个卷上。

-   组网方式
    
    <table>
    <tbody>
    <tr>
        <td rowspan='2'>生产中心</td>
        <td rowspan='2'>主端</td>
        <td>业务计算节点0</td>
        <td>10.0.0.10</td>
        <td rowspan='2'>主存储</td>
        <td rowspan='2'>Dorado1</td>
    </tr>
        <td>业务计算节点1</td>
        <td>10.0.0.20</td>
    <tr>
        <td rowspan='2'>容灾中心</td>
        <td rowspan='2'>备端</td>
        <td>业务计算节点0</td>
        <td>20.0.0.10</td>
        <td rowspan='2'>备存储</td>
        <td rowspan='2'>Dorado2</td>
    </tr>
        <td>业务计算节点1</td>
        <td>20.0.0.20</td>
    </tbody>
    </table>

-   操作步骤

    第一步： 在主存储上创建资源池化需要的lun，以及远程同步复制xlog卷对应的lun，并且所有lun全部映射到业务计算节点上
    -   需要保证同一个Dorado lun在一个集群内多台机器上映射的盘符一致，若不一致可以通过建立软链接的方法，使其对openGauss暴露的盘符一致即可。
    -   例如wwn为00000000000001的盘在主集群0节点的盘符为sd0，在主集群1节点的盘符为sd1，我们可以通过
        ```
        ll /dev/disk/by-id             // 查看lun对应的wwn来确定具体的盘符
        ln -s /dev/sd0 /dev/data      // 在0节点执行 [建议四块盘符均创建一个软链接]
        ln -s /dev/sd1 /dev/data      // 在1节点执行 [建议四块盘符均创建一个软链接]
        ```
        然后将/dev/data作为我们可用的盘

        <table>
        <tbody>
        <tr>
            <td rowspan='1'>lun</td>
            <td rowspan='1'>盘符</td>
        </tr>
        <tr>
            <td rowspan='1'>data</td>
            <td rowspan='1'>/dev/sda</td>
        </tr>
        <tr>
            <td rowspan='1'>xlog</td>
            <td rowspan='1'>/dev/sdb</td>
        </tr>
        <tr>
            <td rowspan='1'>votingDiskPath</td>
            <td rowspan='1'>/dev/sdc</td>
        </tr>
        <tr>
            <td rowspan='1'>shareDiskDir</td>
            <td rowspan='1'>/dev/sdd</td>
        </tr>
        </tbody>
        </table>

-   磁阵操作步骤

    >![](public_sys-resources/icon-note.png) **说明：**
    >
    >- DeviceManager是在有了存储设备后自行配置的一个用于管理存储设备的网页。
    >- 取消从资源保护在主集群和备集群DeviceManager中都可以执行，执行效果一样，需要先更改关系为分裂，才可以执行取消从资源保护。
    >- 在第一次扫描、查询盘符时，如果查找不到，则可以使用iscsiadm -m node --logoutall=all和iscsiadm -m node -p ip -l来断开连接并重新登录连接，注意该操作会影响所有连接的存储设备，可能会影响其他用户，请谨慎操作。这里的ip是存储设备的ip地址，可以使用iscsiadm -m node来查询。

    1. 登录主集群DeviceManager，选择**服务->LUN组->创建** 来创建主集群LUN组；

    2. 登录主集群DeviceManager，选择**数据保护->LUN->远程复制Pair->创建** 为xlog卷创建远程复制Pair，执行完成后DeviceManager会在对端自动创建一个与本端xlog卷有同步复制关系的卷；

    3. 点击创建好的远程复制Pair，通过**操作->分裂** 将上一步建立的远程复制Pair分裂，此步骤是为了先分别拉起主备集群。

    4. 登录备集群DeviceManager，执行相同的创建LUN的操作，在创建的LUN组中点击**成员LUN->增加**，然后选择主集群上已经创建的xlog卷，添加xlog盘，并在备集群存储创建并映射剩余的3个lun。

    5. 在备集群DeviceManager中选择**数据保护->LUN->远程复制Pair**，然后搜索已经创建的远程复制Pair，通过**操作->取消从资源保护**使从端可读写。

    6. 在**服务->LUN组->LUN**中搜索刚才创建的LUN名称，查询本端WWN，用来在服务器上映射到对应的盘符。在服务器root用户下，执行rescan-scsi-bus.sh脚本扫描创建的LUN组，执行 ll /dev/disk/by-id | grep xxx 查询对应的盘符。



    第二步： 主存储上准备xml文件。
    
    在[创建XML配置文件](../InstallationGuide/创建XML配置文件.md)中的配置数据库名称及各项目录里有配置说明。
    
    根据配置说明准备资源池化集群需要的xml文件，以一主一备举例：
    
        <?xml version="1.0" encoding="UTF-8"?>
        <ROOT>
            <!-- openGauss整体信息 -->
            <CLUSTER>
                <!-- 数据库名称 -->
                <PARAM name="clusterName" value="cluster" />
                <!-- 数据库节点名称(hostname) -->
                <PARAM name="nodeNames" value="node1,node2" />
                <!-- 数据库安装目录-->
                <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
                <!-- 日志目录-->
                <PARAM name="gaussdbLogPath" value="/opt/huawei/install/log" />
                <!-- 临时文件目录-->
                <PARAM name="tmphuaweidbPath" value="/opt/huawei/install/tmp"/>
                <!-- 数据库工具目录-->
                <PARAM name="gaussdbToolPath" value="/opt/huawei/install/tool" />
                <!-- 数据库core文件目录-->
                <PARAM name="corePath" value="/opt/huawei/install/corefile"/>
                <!-- 节点IP，与数据库节点名称列表一一对应 -->
                <PARAM name="backIp1s" value="10.0.0.10,10.0.0.20"/>
                <PARAM name="clusterType" value="single-inst"/>
                <PARAM name="enable_dss" value="on"/>
                <PARAM name="dss_home" value="/opt/huawei/install/dss_home"/>
                <PARAM name="dss_vg_info" value="data:/dev/sda,log0:/dev/sdb"/>
                <PARAM name="votingDiskPath" value="/dev/sdc"/>
                <PARAM name="shareDiskDir" value="/dev/sdd"/>
                <PARAM name="ss_dss_vg_name" value="data"/>
                <PARAM name="dss_ssl_enable" value="on"/>
            </CLUSTER>
            <!-- 每台服务器上的节点部署信息 -->
            <DEVICELIST>
                <!-- 节点1上的部署信息 其中“name”的值配置为主机名称(hostname) -->
                <DEVICE sn="node1">
                    <PARAM name="name" value="node1"/>
                    <PARAM name="azName" value="AZ1"/>
                    <PARAM name="azPriority" value="1"/>
                    <PARAM name="backIp1" value="10.0.0.10"/>
                    <PARAM name="sshIp1" value="10.0.0.10"/>
    
                    <PARAM name="cmDir" value="/opt/huawei/install/cm"/>
                    <PARAM name="cmsNum" value="1"/>
                    <PARAM name="cmServerPortBase" value="27000"/>
                    <PARAM name="cmServerListenIp1" value="10.0.0.10,10.0.0.20"/>
                    <PARAM name="cmServerlevel" value="1"/>
                    <PARAM name="cmServerRelation" value="node1,node2"/>
    
                    <PARAM name="dataNum" value="1"/>
                    <PARAM name="dataPortBase" value="25400"/>
                    <PARAM name="dataNode1" value="/opt/huawei/install/data/dn,node2,/opt/huawei/install/data/dn"/>
                </DEVICE>
    
                <!-- 节点2上的节点部署信息，其中“name”的值配置为主机名称(hostname) -->
                <DEVICE sn="node2">
                    <PARAM name="name" value="node2"/>
                    <PARAM name="azName" value="AZ1"/>
                    <PARAM name="azPriority" value="1"/>
                    <PARAM name="backIp1" value="10.0.0.20"/>
                    <PARAM name="sshIp1" value="10.0.0.20"/>
                    <PARAM name="cmDir" value="/opt/huawei/install/cm"/>
                </DEVICE>
            </DEVICELIST>
        </ROOT>
    
    将xml保存在/opt/software/openGauss/cluster_config.xml中
    
    `Tips`: 用户需要修改节点名称、节点IP、目录、盘符、端口号
    
    第三步：  在主存储上执行如下操作安装部署主集群，安装用户omm。
    
    执行《文档->安装指南->企业版安装->安装openGauss->初始化安装环境》中的步骤, https://docs.opengauss.org/zh/docs/5.0.0/docs/InstallationGuide/%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83.html
    
    简化步骤如下：
    
        su - root 
        mkdir -p /opt/software/openGauss
        chmod 755 -R /opt/software
        将下载的安装包放置/opt/software/openGauss目录下
    
        cd /opt/software/openGauss
        tar -zxvf openGauss-All-x.x.x-openEuler20.03-x86_64.tar.gz
        tar -zxvf openGauss-OM-x.x.x-openEuler20.03-x86_64.tar.gz
    
        cd /opt/software/openGauss/script
        ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --sep-env-file=/home/omm/env
    
        su - omm
        source /home/omm/env
        gs_install -X /opt/software/openGauss/cluster_config.xml


    参数解释：
    + sep-env-file           分离环境变量，参数取值是一个安装用户omm可以访问到的文件目录
    + omm                    操作系统用户
    + dbgrp                  操作系统用户属组
    
    第四步： 查询主集群状态。
    
    建立容灾关系之后就是主集群，未建立容灾关系之前还是资源池化单集群。
    
        [huawei@node1 dn_6001]$ cm_ctl query -Cvidp
        [  CMServer State   ]
    
        node           node_ip         instance                           state
        -------------------------------------------------------------------------
        1  node1 10.0.0.10   1    /opt/huawei/install/cm/cm_server Primary
        2  node2 10.0.0.20   2    /opt/huawei/install/cm/cm_server Standby


        [ Defined Resource State ]
    
        node           node_ip         res_name instance  state
        ---------------------------------------------------------
        1  node1 10.0.0.10   dms_res  6001      OnLine
        2  node2 10.0.0.20   dms_res  6002      OnLine
        1  node1 10.0.0.10   dss      20001     OnLine
        2  node2 10.0.0.20   dss      20002     OnLine
    
        [   Cluster State   ]
    
        cluster_state   : Normal
        redistributing  : No
        balanced        : Yes
        current_az      : AZ_ALL
    
        [  Datanode State   ]
    
        node           node_ip         instance                             state            | node           node_ip         instance                             state
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        1  node1 10.0.0.10   6001 25400  /opt/huawei/install/data/dn P Primary Normal | 2  node2 10.0.0.20   6002 25400  /opt/huawei/install/data/dn S Standby Normal
    
    第五步：  在备存储上准备lun和xml文件。同第1步和第2步一样。
    
    `Tips`: 用户需要修改节点名称、节点IP、目录、盘符、端口号
    
    第六步：  在备存储上集群(建立容灾关系之后就是备集群)上执行如下操作安装部署备集群,安装用户omm。
    
    简化步骤如下：
    
        su - root 
        mkdir -p /opt/software/openGauss
        chmod 755 -R /opt/software
        将下载的安装包放置/opt/software/openGauss目录下
    
        cd /opt/software/openGauss
        tar -zxvf openGauss-All-x.x.x-openEuler20.03-x86_64.tar.gz
        tar -zxvf openGauss-OM-x.x.x-openEuler20.03-x86_64.tar.gz
    
        cd /opt/software/openGauss/script
        gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --sep-env-file=/home/omm/env
    
        su - omm
        gs_install -X /opt/software/openGauss/cluster_config.xml
    
    第七步：  查询备存储上集群(建立容灾关系之后就是备集群)状态。
    
        建立容灾关系之后就是备集群，未建立容灾关系之前还是资源池化单集群。
        [omm@node1 dn_6001]$ cm_ctl query -Cvidp
        [  CMServer State   ]
    
        node           node_ip         instance                           state
        -------------------------------------------------------------------------
        1  node1 20.0.0.10   1    /opt/huawei/install/cm/cm_server Primary
        2  node2 20.0.0.20   2    /opt/huawei/install/cm/cm_server Standby


        [ Defined Resource State ]
    
        node           node_ip         res_name instance  state
        ---------------------------------------------------------
        1  node1 20.0.0.10   dms_res  6001      OnLine
        2  node2 20.0.0.20   dms_res  6002      OnLine
        1  node1 20.0.0.10   dss      20001     OnLine
        2  node2 20.0.0.20   dss      20002     OnLine
    
        [   Cluster State   ]
    
        cluster_state   : Normal
        redistributing  : No
        balanced        : Yes
        current_az      : AZ_ALL
    
        [  Datanode State   ]
    
        node           node_ip         instance                             state            | node           node_ip         instance                             state
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        1  node1 20.0.0.10   6001 25400  /opt/huawei/install/data/dn P Primary Normal | 2  node2 20.0.0.20   6002 25400  /opt/huawei/install/data/dn S Standby Normal
    
    第八步： 停止主集群，配置容灾参数，重新拉起主集群
    
        cm_ctl stop
    
        主节点
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "application_name = 'dn_master_0'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=10.0.0.10 localport=25400 remotehost=20.0.0.10 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=10.0.0.10 localport=25400 remotehost=20.0.0.20 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"
    
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.10/32        trust"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.20/32        trust"

        在$DSS_HOME/cfg/dss_inst.ini文件中修改
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID
    
        备节点
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "application_name = 'dn_master_1'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=10.0.0.20 localport=25400 remotehost=20.0.0.10 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=10.0.0.20 localport=25400 remotehost=20.0.0.20 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"
    
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.10/32        trust"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             20.0.0.20/32        trust"

        在$DSS_HOME/cfg/dss_inst.ini文件中修改
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID
    
        设置主集群cm参数
        cm_ctl set --param --agent -k ss_double_cluster_mode=1
        cm_ctl set --param --server -k ss_double_cluster_mode=1
    
        启动主集群
        cm_ctl start
        
    参数解释：
    + cross_cluster_replconninfo     主备集群建立连接信息，localport为数据库HA端口(上述示例用的xml里的dataPortBase，当开启线程池enable_thread_pool时，需配置为实际HAPort)
    
    `Tips`: gs_guc为openGauss提供的修改配置文件工具，也可以通过直接打开/opt/huawei/install/data/dn($PGDATA)下的postgresql.conf与pg_hba.conf文件将上面双引号中的内容手动写入文件中。
    
    第九步： 停止备存储上的资源池化单集群(建立容灾关系之后就是备集群)，配置容灾参数
    
        cm_ctl stop
    
        主节点
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "application_name = 'dn_standby_0'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=20.0.0.10 localport=25400 remotehost=10.0.0.10 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=20.0.0.10 localport=25400 remotehost=10.0.0.20 remoteport=25400'"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"
    
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.10/32        trust"
        gs_guc set -N node1 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.20/32        trust"

        在$DSS_HOME/cfg/dss_inst.ini文件中修改
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID

        备节点
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "application_name = 'dn_standby_1'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ss_disaster_mode = dorado"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo1='localhost=20.0.0.20 localport=25400 remotehost=10.0.0.10 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "cross_cluster_replconninfo2='localhost=20.0.0.20 localport=25400 remotehost=10.0.0.20 remoteport=25400'"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -c "ha_module_debug = off"
    
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.10/32        trust"
        gs_guc set -N node2 -D /opt/mpp/install/data/dn -h "host    all             all             10.0.0.20/32        trust"

        在$DSS_HOME/cfg/dss_inst.ini文件中修改
        STORAGE_MODE=SHARE_DISK --> STORAGE_MODE=CLUSTER_RAID
       
    第十步： 拉起首备dssserver，执行build
    
        export DSS_MAINTAIN=TRUE                                                        // 打开dss手动模式
        dssserver -D /opt/huawei/install/dss_home &                                     // 拉起dssserver，-D 指定$DSS_HOME
        gs_ctl build -D /opt/huawei/install/data/dn -b cross_cluster_full -q
        dsscmd stopdss                                                                  // 停止手动模式的dssserver
        export DSS_MAINTAIN=FALSE
    
        `Tips`: build必须需要加-q，指build成功后不拉起数据库。
    
    第十一步： 配置备集群cm参数，重新拉起备集群
    
        cm_ctl set --param --agent -k ss_double_cluster_mode=2
        cm_ctl set --param --server -k ss_double_cluster_mode=2
        在$DSS_HOME/cfg/dss_inst.ini文件中增加一行（备集群所有节点都需要修改，dsscmd setcfg需要dssserver在线，所以这里手动修改）
        CLUSTER_RUN_MODE=cluster_standby
    
        切换同步复制关系 分裂改为同步(非常关键)
    
        cm_ctl start

    补充说明：
    + 这里的切换同步复制关系步骤是非常关键的，这一步需要登录主集群DeviceManager去进行，选择**数据保护->LUN->远程复制Pair**，点击之前创建好的远程复制Pair，通过**操作->同步**将同步复制关系改为同步。
    
    第十二步： 查询集群状态
    
        主集群使用cm_ctl query -Cvidp查询出来同第七步一样
        备集群查询结果如下，备集群节点0从没有建立容灾关系时的primary变成建立容灾关系之后的Main Standby
    
        [mpp@node2 dn_6002]$ cm_ctl query -Cvidp
        [  CMServer State   ]
    
        node           node_ip         instance                           state
        -------------------------------------------------------------------------
        1  node1 20.0.0.10   1    /opt/huawei/install/cm/cm_server Primary
        2  node2 20.0.0.20   2    /opt/huawei/install/cm/cm_server Standby


        [ Defined Resource State ]
    
        node           node_ip         res_name instance  state
        ---------------------------------------------------------
        1  node1 20.0.0.10   dms_res  6001      OnLine
        2  node2 20.0.0.20   dms_res  6002      OnLine
        1  node1 20.0.0.10   dss      20001     OnLine
        2  node2 20.0.0.20   dss      20002     OnLine
    
        [   Cluster State   ]
    
        cluster_state   : Normal
        redistributing  : No
        balanced        : Yes
        current_az      : AZ_ALL
    
        [  Datanode State   ]
    
        node           node_ip         instance                             state            | node           node_ip         instance                             state
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        1  node1 20.0.0.10   6001 25400  /opt/huawei/install/data/dn P Main Standby Normal | 2  node2 20.0.0.20   6002 25400  /opt/huawei/install/data/dn S Standby Normal
    
    第十三步： 在主集群主机和备集群首备执行查询，可观察到流复制信息
    
        主集群主节点0
        [omm@node1 dn]$ gs_ctl query -D /opt/huawei/install/data/dn
        [2023-04-18 09:38:34.397][1498175][][gs_ctl]: gs_ctl query ,datadir is /opt/huawei/install/data/dn
        HA state:
                local_role                     : Primary
                static_connections             : 2
                db_state                       : Normal
                detail_information             : Normal
    
        Senders info:
                sender_pid                     : 1456376
                local_role                     : Primary
                peer_role                      : StandbyCluster_Standby
                peer_state                     : Normal
                state                          : Streaming
                sender_sent_location           : 2/5C8
                sender_write_location          : 2/5C8
                sender_flush_location          : 2/5C8
                sender_replay_location         : 2/5C8
                receiver_received_location     : 2/5C8
                receiver_write_location        : 2/5C8
                receiver_flush_location        : 2/5C8
                receiver_replay_location       : 2/5C8
                sync_percent                   : 100%
                sync_state                     : Async
                sync_priority                  : 0
                sync_most_available            : Off
                channel                        : 10.0.0.10:25400-->20.0.0.10:43350
    
        Receiver info:
        No information
    
        备集群首备节点0
        [omm@nodename pg_log]$ gs_ctl query -D /opt/huawei/install/data/dn
        [2023-04-18 11:33:09.288][2760315][][gs_ctl]: gs_ctl query ,datadir is /opt/huawei/install/data/dn
        HA state:
                local_role                     : Main Standby
                static_connections             : 2
                db_state                       : Normal
                detail_information             : Normal
    
        Senders info:
        No information
        Receiver info:
                receiver_pid                   : 1901181
                local_role                     : Standby
                peer_role                      : Primary
                peer_state                     : Normal
                state                          : Normal 
                sender_sent_location           : 2/5C8
                sender_write_location          : 2/5C8
                sender_flush_location          : 2/5C8
                sender_replay_location         : 2/5C8
                receiver_received_location     : 2/5C8
                receiver_write_location        : 2/5C8
                receiver_flush_location        : 2/5C8
                receiver_replay_location       : 2/5C8
                sync_percent                   : 100%
                channel                        : 20.0.0.10:43350<--10.0.0.10:25400


    第十四步：集群如何切换主备关系

        1. 停止主集群（如果无法停止则跳过这一步）

        2. 在deveice manage上调整同步pair：1.分裂，2.取消从资源保护，3.反转同步方向

        3. 在原备集群修改dss参数与cm参数
        dsscmd setcfg -n CLUSTER_RUN_MODE -v cluster_primary（所有节点）
        cm_ctl set --param --agent -k ss_double_cluster_mode=1
        cm_ctl set --param --server -k ss_double_cluster_mode=1
        cm_ctl reload --param --agent
        cm_ctl reload --param --server

        4. 在原备集群首备节点执行
        gs_ctl failover [-D $PGDATA]

        5. 等待升主完成后可以利用cm_ctl query -Cvipd查询新主集群状态（若原主集群已损坏，至此结束）

        6. 在原主集群全量build（预期内切换可跳过）
        export DSS_MAINTAIN=TRUE
        dssserver -D /opt/huawei/install/dss_home & 
        gs_ctl build -b cross_cluster_full -q
        dsscmd stopdss
        export DSS_MAINTAIN=FALSE       

        7. 在原主集群修改dss与cm参数
        在$DSS_HOME/cfg/dss_inst.ini文件中调整（所有节点）
        CLUSTER_RUN_MODE=cluster_standby
        设置cm参数
        cm_ctl set --param --agent -k ss_double_cluster_mode=2
        cm_ctl set --param --server -k ss_double_cluster_mode=2

        8. 在deveice manage上调整同步pair：1.启用从资源保护，2.同步

        9. 启动新备集群
        cm_ctl start

## 常见问题

   一. 双集群如何扩容

   数据盘可以直接通过dsscmd adv扩容，xlog盘需要通过以下步骤：
   1. 停止备集群
   2. 同时在主备集群准备一块同样大小的lun建立远程同步关系，并使其对数据库暴露的盘符一致，详见本文档第一步
   3. 将原本的xlog pair与我们新增的pair分裂，取消从资源保护
   4. 主集群通过在线dsscmd adv扩容
   5. 备集群通过离线dsscmd adv扩容
   6. 将两个pair都进行同步，均同步完成后启动备集群即可

   二. 双集群如何容灾解除、容灾搭建

   需要使用gs_ddr工具来进行，相关具体操作命令请参考[gs_ddr](./../ToolandCommandReference/gs_ddr.md)

   三. 双集群如何卸载

   主集群、备集群均执行gs_uninstall --delete-data命令即可，具体操作命令详情请参考[gs_uninstall](./../ToolandCommandReference/gs_uninstall.md)