# gs\_dropnode

## 背景信息

openGauss提供了gs\_dropnode工具从一主多备的集群中移除不需要的备机，最多可以删除到只剩下单机。

## 注意事项

-   从主备集群中移除当前仍可连通的备机时，会自动停止目标备机上正在运行的数据库服务，但是不会删除备机上的应用。
-   如果删除后集群中只剩下一个主机时，会提示建议重启当前主机，此时建议用户根据当前业务运行环境重启主机。
-   如果目标备机在执行操作前处于不可连通的状态，需要用户在目标备机恢复后手动停止或删除目标备机的数据库服务。
-   仅支持使用om方式安装的主备集群中移除备机，不支持使用编译方式安装组建的主备集群


## 前提条件

-   删除备节点的操作只能在主节点上执行。
-   操作过程中不允许同时在其他备节点上执行主备倒换或者故障倒换的操作。
-   执行删除操作前，需要确保主节点和备节点之间建立好omm用户(数据库管理用户)的互信。
-   执行命令前需要通过source命令导入主机数据库的环境变量。如果当前数据库集群是分离环境变量方式安装，则source导入分离的环境变量。如果未进行分离，则需要source导入子用户的.bashrc配置文件。一般该文件路径为：/home/[user]/.bashrc


## 语法

-   移除备机

    ```
    ./gs_dropnode -U USER -G GROUP -h hostlist  
    ```

-   显示帮助信息

    ```
    ./gs_dropnode -? | --help
    ```

-   显示版本号信息

    ```
    ./gs_dropnode -V | --version
    ```


## 参数说明

-   -U

    运行openGauss的操作系统用户名。

-   -G

    运行openGauss的操作系统用户组。

-   -h

    指定需要移除的备机的IP地址。如果有多个节点，节点之间以逗号分隔。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


## 示例

使用gs\_dropnode扩容步骤。

```
# ./gs_dropnode -U omm -G dbgrp -h 10.11.12.13
[gs_dropnode]Start to drop nodes of the cluster.
[gs_dropnode]Start to stop the target node StandbyNode3.
[gs_dropnode]End of stop the target node StandbyNode3.
[gs_dropnode]Start to backup parameter config file on PrimaryNode.
[gs_dropnode]End to backup parameter config file on PrimaryNode.
[gs_dropnode]The backup file of PrimaryNode is /tmp/gs_dropnode_backup20201119205019/parameter_PrimaryNode.tar
[gs_dropnode]Start to parse parameter config file on PrimaryNode.
[gs_dropnode]End to parse parameter config file on PrimaryNode.
[gs_dropnode]Start to parse backup parameter config file on PrimaryNode.
[gs_dropnode]End to parse backup parameter config file on PrimaryNode.
[gs_dropnode]Start to set postgresql config file on PrimaryNode.
[gs_dropnode]End of set postgresql config file on PrimaryNode.
[gs_dropnode]Start to backup parameter config file on StandbyNode2.
[gs_dropnode]End to backup parameter config file on StandbyNode2.
[gs_dropnode]The backup file of StandbyNode2 is /tmp/gs_dropnode_backup20201119205019/parameter_StandbyNode2.tar
[gs_dropnode]Start to parse parameter config file on StandbyNode2.
[gs_dropnode]End to parse parameter config file on StandbyNode2.
[gs_dropnode]Start to parse backup parameter config file on StandbyNode2.
[gs_dropnode]End to parse backup parameter config file on StandbyNode2.
[gs_dropnode]Start to set postgresql config file on StandbyNode2.
[gs_dropnode]End of set postgresql config file on StandbyNode2.
[gs_dropnode]Start to get repl slot on PrimaryNode.
[gs_dropnode]Start to set repl slot on PrimaryNode.
[gs_dropnode]End of set repl slot on PrimaryNode.
[gs_dropnode]Start to set pg_hba config file on PrimaryNode.
[gs_dropnode]End of set pg_hba config file on PrimaryNode.
[gs_dropnode]Start to modify the cluster static conf.
[gs_dropnode]End of modify the cluster static conf. 
[gs_dropnode]Success to drop the target nodes.

```

## 相关命令

[gs\_expansion](gs_expansion.md)，[gs\_ctl](gs_ctl.md)

