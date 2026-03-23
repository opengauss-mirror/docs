# spqplugin_v2概述与安装

## 概述

spqplugin_v2是基于openGauss的轻量级的分布式数据库扩展插件，自openGauss 7.0.0-RC2版本开始引入。基于1个CN节点和若干个DN节点构建成数据库集群，支持将大数据量表分片存储，实现并行查询与横向扩展。

## 限制

- 仅支持在A模式数据库创建。
- 安装插件需要先配置shared_preload_libraries，再执行create extension。
- 不支持删除插件。
- 不支持分布式表相关的复杂查询，包括：JOIN，子查询，CTE，window function等。
- 不支持分区表。
- 不支持Mysql兼容性插件，线程池，PBE优化。

## 安装

openGauss打包编译时默认已经包含了spqplugin_v2，使用步骤如下：

1.postgresql.conf添加如下配置

```
shared_preload_libraries = 'spq'
```

2.创建数据库并连接数据库开始使用

```
openGauss=# create extension spq;
CREATE EXTENSION
```
