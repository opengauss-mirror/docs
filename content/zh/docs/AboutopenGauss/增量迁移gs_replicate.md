# 增量迁移gs_replicate

## 可获得性<a name="section56086982"></a>

本特性自openGauss 5.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

增量迁移gs_replicate是指将mysql数据迁移期间（包括全量和增量迁移）产生的增量数据迁移至openGauss端。

## 客户价值<a name="section46751668"></a>

通过使用gs_replicate工具，可完成增量数据从MySQL搬迁至openGauss数据库。

## 特性描述<a name="section18111828"></a>

debezium mysql connector的source端，监控mysql数据库的binlog日志，并将数据（DDL和DML操作）以AVRO格式写入到kafka；debezium mysql connector的sink端，从kafka读取AVRO格式数据（DDL和DML操作），并组装为事务，在openGauss端按照事务粒度并行回放，从而完成数据（DDL和DML操作）从mysql在线迁移至openGauss端。

由于该方案严格保证事务的顺序性，因此将DDL和DML路由在kafka的一个topic下，且该topic的分区数只能为1(参数num.partitions=1)，从而保证source端推送到kafka，和sink端从kafka拉取数据都是严格保序的。

## 特性增强<a name="section28788730"></a>

- 增量迁移支持迁移进度与回放失败的SQL语句实时上报。

## 特性约束<a name="section06531946143616"></a>

- 当前支持MySQL IUD操作（insert、update、delete）产生的增量数据迁移至openGauss。

- 支持迁移openGauss数据库兼容的MySQL DDL语句，对于不兼容的DDL，迁移时会报错处理（openGauss在完善对DDL的兼容性）。

- 为保证事务的顺序和一致性，不支持skip\_event, limit\_table, skip\_table等设置。

- MySQL需要5.7及以上版本。

- MySQL参数设置要求为：log\_bin=ON, binlog\_format=ROW, binlog\_row\_image=FULL, gtid\_mode = ON。若gtid_mode为off，则sink端按照事务顺序串行回放，会降低在线迁移性能。

- 先进行全量迁移，再进行增量迁移，全量迁移可基于[gs_mysync](https://gitee.com/opengauss/openGauss-tools-chameleon)工具完成。

- Kafka中以AVRO格式存储数据，AVRO字段名称[命名规则](https://gitee.com/link?target=https%3A%2F%2Favro.apache.org%2Fdocs%2F1.11.1%2Fspecification%2F%23names)为：

  ```
  - 以[A-Za-z_]开头
  - 随后仅包含[A-Za-z0-9_]
  ```

  因此，对于MySQL中的标识符命名，包括表名、列名等，需满足上述命名规范，否则在线迁移会报错。
- 目前仅支持MySQL参数gtid_mode=on时的迁移进度上报。

## 依赖关系<a name="section57771982"></a>

gs_replicate工具依赖MySQL一键式迁移工具gs_rep_portal。

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-migration-portal/tree/master

详细参考文档： [README.md](https://gitee.com/opengauss/openGauss-migration-portal/blob/master/README.md) 

增量迁移社区地址：https://gitee.com/opengauss/debezium/tree/master 

详细参考文档 [README.md](https://gitee.com/opengauss/debezium/blob/master/README.md) 