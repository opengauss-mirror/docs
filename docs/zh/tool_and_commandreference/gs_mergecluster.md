# gs_mergecluster

## 背景信息

openGauss提供了gs_mergecluster工具，将多个简化安装的节点通过该工具合并为一个集群，且该集群支持使用OM工具即扩缩节点、升级、部署CM等一系列操作。

## 注意事项

- 在部署的用户（omm）下执行该命令，该命令需要建立节点间omm用户互信，如果提前建好则会跳过，没有创建则在执行过程中提示输入密码创建互信。
-   
- 执行过程中，会基于配置的xml路径进行部署om工具，另外会对实例重启，对备机做全量数据拉取。请执行前关注下数据。
-
- 当前仅支持IPV4部署方式。

## 前提条件

- 需要手动配置好xml文件，包含需要合并到同一个集群所有节点。

- 几个节点需要是相同的系统和架构。

- xml 里面的路径，需要omm用户有读写权限。

## 语法

- 合并多几个节点到一个集群

    ```
    ./gs_mergecluster -X <XMLFILE>
    ```

- 显示帮助信息

    ```
    ./gs_mergecluster -h | --help
    ```

## 参数说明

- -X
    
    集群的xml配置文件。

    xml里面的数据目录保持现有的不需要修改， 其他目录按照实际分配。确保分配的目录omm用户有读写权限。
    
- -h, --help

    显示帮助信息。

## 示例

使用gs_expansion扩容步骤。

扩容工具带-X参数

```
[omm@openGauss54 script]$ ./gs_mergecluster -X /usr1/pkg/cluster_config_3ins.xml 
Parse parameters.
Begin to install package on local node
End to install package on local node
Begin to check and build trust
Ssh Trust test ok...
Begin to install package on remote node
End to install package on remote node
Begin to config instance parameters.
End to config instance parameters.
Begin to build standby instance.
Build host [20.20.20.213] success.
Build host [20.20.20.215] success.
Begin to generate cluster config file.
End to generate cluster config file.
Merge cluster finished. Cluster status info:
[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
current_az      : AZ_ALL

[  Datanode State   ]

    node        node_ip         port      instance                         state
------------------------------------------------------------------------------------------------
1  openGauss54  20.20.20.54     9000       6001 /usr1/omm/openGauss/data   P Primary Normal
2  openGauss213 20.20.20.213    9000       6002 /usr1/omm/openGauss/data   S Standby Normal
3  openGauss215 20.20.20.215    9000       6003 /usr1/omm/openGauss/data   S Standby Normal

```
