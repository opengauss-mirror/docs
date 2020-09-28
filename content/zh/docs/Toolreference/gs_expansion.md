# gs\_expansion

## 背景信息

openGauss提供了gs\_expansion工具对数据库的备机进行扩容。支持从单机或者一主多备最多扩容到一主四备。

## 注意事项

从单机扩容到主备模式时，需要将单机数据库以Primary的方式启动，因此会对数据库进程进行重启操作。单机扩容时请规划好运行中的业务。


## 前提条件

-   数据库主机上存在openGauss软件包。
-   在新增的扩容备机上创建好与主机上相同的用户和用户组。
-   已存在的数据库节点和新增的扩容节点之间建立好root用户和数据库管理用户的互信。
-   配置xml文件，在已安装数据库配置文件的基础上，添加需要扩容的备机信息。
-   只能使用root用户执行gs_expansion命令。
-   执行扩容命令前需要通过source命令导入主机数据库的环境变量。如果当前数据库集群是分离环境变量方式安装，则source导入分离的环境变量。如果未进行分离，则需要source导入子用户的.bashrc配置文件。一般该文件路径为：/home/<user>/.bashrc
-   扩容备机的操作系统与主机保持一致。


## 语法

-   备机扩容

    ```
    gs_expansion –U USER –G GROUP –X XMLFILE –h hostlist [-L]  
    ```

-   显示帮助信息

    ```
    gs_expansion -? | --help
    ```

-   显示版本号信息

    ```
    gs_expansion -V | --version
    ```


## 参数说明

-   -U

    运行openGauss的操作系统用户名。

    新增扩容的备机用户名必须与已安装数据库的主机保持一致，且要提前创建好。

-   -G

    运行openGauss的操作系统用户组。

    新增扩容的备机用户组必须与已安装数据库的主机保持一致。

-   -X

    openGauss配置文件路径。

    取值范围：xml文件的存储路径。xml文件里面需要包含已安装的数据库以及新增扩容数据库所有节点配置信息。


-   -h

    指定扩容备机的IP地址。

    取值与xml配置文件里面的backip保持一致。如果有多个节点，节点之间以逗号分隔。

-   -L

    如果要扩容的节点已经安装了单机版的数据库，扩容时候添加 –L 参数可以跳过在新扩容备机上安装数据库的步骤，直接建立主备关系。

    需要注意：
    1. 主备机器安装的数据库需要使用相同的用户和用户组，分离环境变量路径也需要保持一样
    2. 主备机器安装时候xml配置里面的gaussdbAppPath、gaussdbLogPath、gaussdbToolPath、corePath地址需要保持一致
    3. 扩容备机上的数据必须使用om方式安装，使用编译方式启动的数据库不支持与主机扩容。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例

使用gs\_expansion扩容步骤

```
# ./gs_expansion -U zxb -G zxb -X /opt/zxb/instance4.xml -h 90.90.44.165
Start to preinstall database on the new standby nodes.
Successfully preinstall database on the new standby nodes.

Start to install database on the new standby nodes.

installing database on node 90.90.44.165:
Please enter the password of user [zxb] on node [90.90.44.165]:
Parsing the configuration file.
Check preinstall on every node.
Successfully checked preinstall on every node.
Creating the backup directory.
Successfully created the backup directory.
begin deploy..
Installing the cluster.
begin prepare Install Cluster..
Checking the installation environment on all nodes.
begin install Cluster..
Installing applications on all nodes.
Successfully installed APP.
begin init Instance..
encrypt cipher and rand files for database.
Please enter password for database:
Please repeat for database:
begin to create CA cert files
The sslcert will be generated in /usr1/zxb/opengauss/gaussdb/app/share/sslcert/om
Cluster installation is completed.
Configuring.
Deleting instances from all nodes.
Successfully deleted instances from all nodes.
Checking node configuration on all nodes.
Initializing instances on all nodes.
Updating instance configuration on all nodes.
Check consistence of memCheck and coresCheck on database nodes.
Configuring pg_hba on all nodes.
Configuration is completed.
Successfully started cluster.
Successfully installed application.
end deploy..

Successfully install database on node ['90.90.44.165']

Database on standby nodes installed finished. Start to establish the primary-standby relationship.

Success to expansion standby nodes.
```

## 相关命令

[gs\_preinstall](gs_preinstall.md)，[gs\_install](gs_install.md)，[gs\_ctl](gs_ctl.md)

