# gs_expansion

## 背景信息

openGauss提供了gs_expansion工具对数据库的备机进行扩容。支持从单机或者一主多备最多扩容到一主八备。

## 注意事项

-   扩容后不会自动更新synchronous_standby_names参数。如果需要为该参数增加扩容的机器，请在扩容完成后手动更新。
-   当待扩容的级联备GUC参数enable_availablezone开启时，扩容级联备之前要确保原集群中有处于同一AZ（Available Zone）且状态正常的备机，或扩容级联备的同时也扩容了处于同AZ的备机。
-   对数据库集群进行扩容前，需要关注主机及新扩容节点CPU、IO、网络等情况，不建议在硬件压力较大时执行扩容，否则可能导致扩容耗时较长甚至扩容失败。
-   当原集群数据量较大时，在进行扩容操作前应当在主机上先执行checkpoint，否则可能导致扩容耗时较长甚至扩容失败。
-   在单节点扩容时，如果节点hot_standby被关闭过，则需要在每个备节点上也按照如下流程修改：
    1. 备节点需要先修改wal_level大于等于hot_standby后重启。
    2. 然后再修改hot_standby为on重启，之后主机扩容才能成功。否则扩容时备机会启动失败。
-   使用流式容灾功能时，不支持此工具。


## 前提条件

- 数据库主机上存在openGauss镜像包，解压镜像包后，在script目录下执行./gs_expansion命令进行扩容。

- 在新增的扩容备机上创建好与主机上相同的用户和用户组。

- 执行扩容工具中添加了-X参数，那么需要正确配置xml文件，在已安装数据库配置文件的基础上，添加需要扩容的备机信息；如果没有-X参数，那么不需要配置xml文件，扩容工具会自动生成xml文件，生成的xml在子用户的home目录，文件名是xml_file_xxx.xml，xxx是时间戳。

- 使用root或普通用户执行gs_expansion命令。

- 如果使用普通用户执行gs_expansion命令，需要手动将节点的映射关系写入/etc/hosts文件中，所有节点都得写入（也可以使用om提供的gs_sshexkey工具，只有在root用户下才会将映射关系写入到/etc/hosts文件中）。

- 不允许同时在主节点上执行gs_dropnode命令删除其他备机。

- 执行扩容命令前需要通过source命令导入主机数据库的环境变量。如果当前数据库是分离环境变量方式安装，则source导入分离的环境变量。如果未进行分离，则需要source导入子用户的.bashrc配置文件。一般该文件路径为：/home/[user]/.bashrc。

- 扩容备机的操作系统与主机保持一致。

- 操作过程中不允许同时在其他备节点上执行主备倒换或者故障倒换的操作。

- 不允许同时执行2次相同的gs_expansion命令。

- 扩容备节点的操作只能在主节点上执行。

- 扩容带有cm的集群，如果该集群中有vip功能，扩容的时候需要用户自己完成xml的配置。

  >![](public_sys-resources/icon-note.png) **说明：** 
  >出于安全考虑，企业版安装方式下，gaussdbToolPath目录下该工具前置完成后会自动删除。


## 语法

-   备机扩容

    ```
    ./gs_expansion -U USER -G GROUP [-X XMLFILE] -h hostlist [-L]  
    ```

-   显示帮助信息

    ```
    ./gs_expansion -? | --help
    ```

-   显示版本号信息

    ```
    ./gs_expansion -V | --version
    ```


## 参数说明

-   -U

    运行openGauss的操作系统用户名。

    新增扩容的备机用户名必须与已安装数据库的主机保持一致，且要提前创建好。

-   -G

    运行openGauss的操作系统用户组。

    新增扩容的备机用户组必须与已安装数据库的主机保持一致。

-   -X

    如果配置了该参数，那么扩容备机时会使用该参数指定的xml文件；如果没有配置该参数，那么在扩容的时候会自动生成对应的xml文件，生成的xml文件在子用户的家目录下，文件名是xml_output_xxx.xml，xxx是时间戳。

    取值范围：xml文件的存储路径。xml文件里面需要包含已安装的数据库以及新增扩容数据库所有节点配置信息。


-   -h

    指定扩容备机的IP地址。

    取值与xml配置文件里面的backip保持一致。如果有多个节点，节点之间以逗号分隔。

-   -L

    如果要扩容的节点已经安装了单机版的数据库，扩容时候添加 –L 参数可以跳过在新扩容备机上安装数据库的步骤，直接建立主备关系。

    需要注意：
    1. 主备机器安装的数据库需要使用相同的用户和用户组，分离环境变量路径也需要保持一样。
    2. 主备机器安装时候xml配置里面的gaussdbAppPath、gaussdbLogPath、gaussdbToolPath、corePath地址需要保持一致。
    3. 扩容备机上的数据必须使用om方式安装，使用编译方式启动的数据库不支持与主机扩容。
    4. 新增扩容节点的数据库版本需要与主库保持一致。
   
- --time-out=SECS

  指定在扩容时候传输软件包的超时时间，对于网络性能较差的情况下，可以适当增加超时时间，避免发送软件包超时。

  默认值：300s。

  单位：s。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例

使用gs_expansion扩容步骤。

扩容工具带-X参数

```
plat1:/opt/software/openGauss/script # ./gs_expansion -U omm -G dbgrp -X /home/omm/cluster_config.xml -h 192.168.0.1
Start expansion without cluster manager component.
Start to preinstall database on new nodes.
Start to send soft to each standby nodes.
End to send soft to each standby nodes.
Start to preinstall database step.
Preinstall 192.168.0.1 success
End to preinstall database step.
End to preinstall database on new nodes.

Start to install database on new nodes.
192.168.0.1 install success.
Finish to install database on all nodes.
Database on standby nodes installed finished.

Checking gaussdb and gs_om version.
End to check gaussdb and gs_om version.

Start to establish the relationship.
Start to build standby 192.168.0.1.
Build standby 192.168.0.1 success.
Start to generate and send cluster static file.
End to generate and send cluster static file.

Expansion results:
192.168.0.1:   Success
Expansion Finish.
```

扩容工具不带-X参数
```
./gs_expansion -U omm -G dbgrp -h 192.168.0.1
Start generate xml
Successfully generate xml, the xml file is /home/omm/xml_output_20240207105448.xml
The cluster no need create ssh trust
Start expansion with cluster manager component.
Start to send soft to each standby nodes.
End to send soft to each standby nodes.
Success to send XML to new nodes
Start to perform perinstall on nodes: ['yc-0003']
Preinstall command is: /tmp/gs_expansion_2024-02-07_10_54_50_690269/pkg/script/gs_preinstall -U lh -G lh -X /home/omm/xml_output_20240207105448.xml -L --sep-env-file=/data/omm/env/env10 --non-interactive 2>&1
Success to perform perinstall on nodes ['yc-0003']
Installing applications on all new nodes.
Install on new node output: [SUCCESS] yc-0003:
Using omm:dbgrp to install database.
Using installation program path : /data/omm/openGauss/app
Command for creating symbolic link: ln -snf /data/omm/openGauss/app_452e573e /data/omm/openGauss/app.
Decompressing bin file.
Decompress CM package command: export LD_LIBRARY_PATH=$GPHOME/script/gspylib/clib:$LD_LIBRARY_PATH && tar -zxf "/data/omm/openGauss/tool/script/os_platform/./../../openGauss-x.x.x-CentOS-64bit-cm.tar.gz" -C "/data/omm/openGauss/app"
Decompress CM package successfully.
Successfully decompressed bin file.
Modifying Alarm configuration.
Modifying user's environmental variable $GAUSS_ENV.
Successfully modified user's environmental variable $GAUSS_ENV.
Fixing file permission.
Set Cgroup config file to appPath.
Successfully Set Cgroup.

Successfully installed APP on nodes ['yc-0003'].
success to send all CA file.
Success to init instance on nodes ['yc-0003']
Start to generate and send cluster static file.
End to generate and send cluster static file.
The current cluster does not support VIP.
Ready to perform command on node [yc-0003]. Command is : source /data/omm/env/env10;gs_guc set -D /data/omm/openGauss/data/dn1 -h 'host    all    lh    192.168.0.1/32    trust' -h 'host    all    all    192.168.0.1/32    sha256'
Successfully set hba on all nodes.
Remove dynamic_config_file and CM metadata directory on all nodes.
Expansion results:
192.168.0.1:  Success
```

>![](public_sys-resources/icon-notice.png) **须知：**
>
>-   对数据库集群进行扩容前，需要关注主机及新扩容节点cpu、io、网络等情况，不建议在硬件压力较大时执行扩容，否则可能导致扩容耗时较长甚至扩容失败。
>
>-   当原集群数据量较大时，在进行扩容操作前应当在主机上先执行checkpoint，否则可能导致扩容耗时较长甚至扩容失败。

## 相关命令

[gs_preinstall](gs_preinstall.md)，[gs_dropnode](gs_dropnode.md)，[gs_install](gs_install.md)，[gs_ctl](gs_ctl.md)

