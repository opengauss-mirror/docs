# SQLServer-\>openGauss迁移工具oG_datasync_full_migration

## 可获得性<a name="section56086982"></a>

本特性自openGauss 7.0.0-RC2版本开始引入。

## 特性简介<a name="section35020791"></a>

oG_datasync_full_migration工具是一个基于Java语言的数据复制工具，该工具提供了初始全量数据及对象（视图、触发器、函数、存储过程、序列）的复制能力，可实现数据及对象从SQLServer、Postgres和openGauss迁移至openGauss。

## 客户价值<a name="section46751668"></a>

通过使用oG_datasync_full_migration工具，可完成数据从SQLServer搬迁至openGauss数据库。

## 特性描述<a name="section18111828"></a>

oG_datasync_full_migration工具提供数据全量复制功能，使得数据可以从SQLServer迁移至openGauss数据库，数据类型映射见参考文档。

oG_datasync_full_migration 是一款基于Java开发的工具，支持在指定版本的CentOS 7及openEuler 20.03/22.03/24.03系统（x86_64与aarch64架构）上完成纯离线安装部署，无需任何外部网络连接。

oG_datasync_full_migration工具采用生产者-消费者结构，全量迁移时，生产者查询SQLServer数据库中指定schema的表结构并导出表数据至csv文件中，消费者根据表结构创建在openGauss中创建表并将csv文件导入至openGauss数据库。

## 特性约束<a name="section06531946143616"></a>

支持SQLServer2016以上版本。

## 依赖关系<a name="section57771982"></a>

oG_datasync_full_migration工具需要jdk11及以上。

## 参考文档<a name="section57771982"></a>

oG_datasync_full_migration详细说明和使用文档参考[SqlServer全量迁移指南](https://gitcode.com/opengauss/debezium/blob/master/migration-tool/README.md)。
