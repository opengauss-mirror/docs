# spqplugin

## 概述

openGauss提供spqpluign Extension（版本为spqplugin-1.0.0）。SPQ(SharedEverything Parallel Query)是在openGauss开源数据库上的一个多机并行查询框架，该框架部署在资源池化场景内，该场景下集群部署的为一写多读架构，集群下存在一个写/读节点和多个读节点，目前的集群只存在同时一个读节点查询的能力，集群的查询性能非常受限。
SPQ基于的是sharedEverything分布式架构，所有节点都共享集群内的资源，通过执行计划的split和执行、汇聚等实现所有读节点并行查询，充分发挥集群的OLAP能力。使资源池化同时具备较强的TP和AP能力。

## 限制

- 暂时仅支持[shared_preload_libraries](../database_reference/kernel_resource_usage.md)方式加载插件。如通过[CREATE Extension](../sql_reference/create_extension.md)方式加载，将无法删除插件。
- 插件依赖xerces-c 3.0及以上版本
- 磁盘预留空间不够时，会导致执行语句失败。

## 安装

插件自动安装，无须手动安装。如果需要手动编译加载插件，步骤如下：

### 编译安装

1. [编译安装openGauss](https://gitcode.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 将[spqplugin源码](https://gitcode.com/opengauss/Plugin/tree/master/contrib/spq_plugin)拷贝到openGauss-server源码的contrib目录下。

3. 进入spq_plugin目录执行make install。

### OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件： spqplugin.so 路径： app/lib/postgresql/。 spqplugin.control和spqplugin--1.0.sql 路径 app/share/postgresql/extension。

## 使用参考

### 加载插件

多机查询特性默认是关闭的，需要新增以下GUC配置参数使能插件：

node1:

```
port = 12300
pgxc_node_name = 'node1'
comm_sctp_port = 12330
comm_control_port = 12340
shared_preload_libraries = 'spqplugin'
spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
spqplugin.enable_spq = on
```

node2:

```
port = 12300
pgxc_node_name = 'node2'
comm_sctp_port = 12330
comm_control_port = 12340
shared_preload_libraries = 'spqplugin'
spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
spqplugin.enable_spq = on
```

### 使用插件

多机并行功能目前支持部分DQL、DDL、DML，详情参考：

[SELECT](spqplugin-SELECT.md)

[CREATE INDEX](spqplugin-CREATE-INDEX.md)

[INSERT](spqplugin-INSERT.md)

[DELETE](spqplugin-DELETE.md)

[UPDATE](spqplugin-UPDATE.md)

## SQL参考

- **[SQL](spqplugin-SQL.md)**  
