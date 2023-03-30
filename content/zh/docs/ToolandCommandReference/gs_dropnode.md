# gs\_dropnode

## 背景信息

openGauss提供了gs\_dropnode工具从一主多备的数据库中移除不需要的备机，最多可以删除到只剩下单机。

## 注意事项

- 从主备数据库实例中移除当前仍可连通的备机时，会自动停止目标备机上正在运行的数据库服务，并删除备机上的GRPC证书（证书位置：$GAUSSHOME/share/sslcert/grpc/），但是不会删除备机上的应用。

- 如果删除后数据库实例中只剩下一个主机时，会提示建议重启当前主机，此时建议用户根据当前业务运行环境重启主机。

- 如果目标备机在执行操作前处于不可连通的状态，需要用户在目标备机恢复后手动停止或删除目标备机的数据库服务，并删除备机上的GRPC证书（证书位置：$GAUSSHOME/share/sslcert/grpc/）。

- 仅支持使用om方式安装的主备数据库实例中移除备机，不支持使用编译方式安装组建的主备数据库。

- 当移除的备机处于同步复制模式时，如果执行删除命令的同时主机上存在事务操作，事务提交时会出现短暂卡顿，删除完成后事务处理可继续。

- 当目标备机被移除后，如果暂时不确定是否需要目标备机，可以选择如下方法拒绝从目标备机的远程ssh连接，避免在目标备机上的误操作。

  方式一：在当前主机上使用root用户修改/etc/ssh/sshd_config文件，添加如下记录（如果已存在DenyUsers记录，请在后面追加）

  ​                `DenyUsers omm@10.11.12.13`

  ​                修改后需要重启ssh服务使其生效，修改后限制从目标备机不能使用omm用户远程到该主机。

  方式二：在当前主机上将目标备机加入到/etc/hosts.deny文件中（例如：sshd:10.11.12.13:deny），拒绝从目标备机的远程ssh连接（对所有用户生效），此方法需要系统sshd服务绑定到libwrap库。

-   当目标备机被移除后，如果不再需要目标备机，请在目标备机上使用**gs\_uninstall --delete-data -L**命令单点卸载，请注意务必添加-L选项。

-   当目标备机被移除后，如果需要以单机方式使用目标备机且保留原数据，请在目标备机上先执行**gs\_guc set -D _/gaussdb/data/dbnode_ -c “replconninfo*X*”** 其中 _/gaussdb/data/dbnode_ 表示数据目录，_replconninfoX_ 表示主备集群中的除本节点外的其他节点，比如一主一备则需要配置 _replconninfo1_, 一主两备需要配置 _replconninfo1_ 和 _replconninfo2_, 以此类推；如果无需保留原数据，请先执行**gs\_uninstall --delete-data -L**命令卸载后重新安装。

- 当目标备机被移除后，如果需要以备机方式使用目标备机，请参考[gs\_expansion](gs_expansion.md)命令重新将目标备机添加到集群中。

-   使用流式容灾功能时，不支持此工具。
## 前提条件

-   删除备节点的操作只能在主节点上执行。
-   操作过程中不允许同时在其他备节点上执行主备倒换或者故障倒换的操作。
-   不允许同时在主节点上执行gs_expansion命令进行扩容。
-   不允许同时执行2次相同的gs_dropnode命令。
-   执行删除操作前，需要确保主节点和备节点之间建立好omm用户（数据库管理用户）的互信。
-   需要使用数据库管理用户（比如omm）执行该命令。
-   执行命令前需要通过source命令导入主机数据库的环境变量。如果当前数据库是分离环境变量方式安装，则source导入分离的环境变量。如果未进行分离，则需要source导入子用户的.bashrc配置文件。一般该文件路径为：/home/[user]/.bashrc。


## 语法

-   移除备机

    ```
    gs_dropnode -U USER -G GROUP -h hostlist  
    ```

-   显示帮助信息

    ```
    gs_dropnode -? | --help
    ```

-   显示版本号信息

    ```
    gs_dropnode -V | --version
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

使用gs\_dropnode移除步骤。

```
$ gs_dropnode -U omm -G dbgrp -h 10.11.12.13
The target node to be dropped is (['StandbyNode1'])
Do you want to continue to drop the target node (yes/no)? yes
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

