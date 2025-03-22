# Postgresql-\>openGauss迁移工具debezium-connector-postgres

## 可获得性<a name="section56086982"></a>

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介<a name="section35020791"></a>

debezium-connector-postgres工具是一个基于Java语言的Postgresql到openGauss的复制工具。该工具提供了初始全量数据及对象（视图、触发器、函数、存储过程）的复制能力，可实现数据及对象从Postgresql迁移至openGauss。对于数据的全量迁移，支持Postgresql中各种数据类型的迁移，同时对于Postgresql中的浮点数据类型，包括decimal、numeric、double precision、real数据类型，可保证迁移后数据精度不丢失。

## 客户价值<a name="section46751668"></a>

通过使用debezium-connector-postgres工具，可完成数据从Postgresql搬迁至openGauss数据库。基于sysbench测试模型，2路鲲鹏920 CPU、openEuler操作系统下，Postgresql数据库20张表（无索引）单表数据量在500万以上时，gs_mysync使用20并发迁移数据至openGauss，整体全量迁移性能可达300M/s以上。

## 特性描述<a name="section18111828"></a>

debezium-connector-postgres工具提供数据全量复制功能，使得数据可以从Postgresql迁移至openGauss数据库。对于数据的全量迁移，debezium-connector-postgres工具中存储了Postgresql数据类型与openGauss数据类型之间的映射关系，可支持Postgresql中各种数据类型的迁移。

debezium-connector-postgres工具支持在指定版本和架构的系统（包括CentOS7、openEuler20.03、openEuler22.03系统版本，x86_64和aarch64架构）上进行离线安装，无需连接外部网络。

debezium-connector-postgres工具采用debezium connector结构，source端使用pgjdbc驱动查询postgresql数据库并导出数据至csv文件中，sink端使用ogjdbc驱动将csv文件导入至openGauss数据库。数据复制过程中，debezium-connector-postgres工具会针对不同的类型进行相应的转换。


## 特性约束<a name="section06531946143616"></a>

-   支持postgresql 9.4以上版本。

## 依赖关系<a name="section57771982"></a>

debezium-connector-postgres工具依赖kafka、zookeeper和schema-registry三方组件。

## 参考文档<a name="section57771982"></a>

debezium-connector-postgres详细说明和使用文档参考：<a href="https://gitee.com/opengauss/debezium/blob/master/README.md#debezium-postgres-connector ">debezium-connector-postgres.md</a>


