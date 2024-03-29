# 数据校验 gs_datacheck 

## 可获得性<a name="section56086982"></a>

本特性自openGauss 5.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

gs_datacheck 工具是一个基于JDK11 + Springboot2.6.7 框架实现MySQL到openGauss的数据校验工具。该工具提供了全量数据的校验以及增量数据的实时校验能力，可实现数据MySQL至openGauss数据一致性校验。

## 客户价值<a name="section46751668"></a>

通过使用gs_datacheck工具，可完成数据从MySQL至openGauss数据库数据一致性检查。

## 特性描述<a name="section18111828"></a>

gs_datacheck工具提供数据全量和增量校验功能，可以对MySQL至openGauss数据库的数据进行一致性校验。

- 全量校验：

  在全量数据迁移完成后，由extract服务对MySQL源端和openGauss目标端数据通过JDBC方式进行数据抽取然后规整计算，并将计算后的中间数据推送到kafka中。最后由check服务提取kafka中的中间数据，构建默克尔树，通过默克尔树比对实现表数据校验且输出校验结果。

- 增量校验：

  由debezium服务侦听源端MySQL数据库的增量数据，到指定topic。再由源端extract服务处理该topic增量数据，触发check增量校验。


## 特性增强<a name="section28788730"></a>

无。

## 特性约束<a name="section06531946143616"></a>

-   JDK版本要求JDK11+
-   当前版本仅支持对源端MySQL，目标端openGauss数据校验
-   当前版本仅支持数据校验，不支持表对象校验
-   MYSQL需要5.7+版本
-   当前版本不支持地理位置几何图形数据校验
-   数据校验行级过滤规则配置，只支持[offset,count]指定范围内抽取，不支持排除[offset,count]范围之内的数据过滤。
-   行过滤规则抽取中间范围内数据（例如：[10,100]），如果源端在该范围之前的数据[0,10]发生删除操作，则会导致该表在指定范围内数据发生偏移，从而导致数据校验结果产生差异。此时需要扩大前置下标范围,以及增加相应的抽取数量。即[3,107]。
-   当对主键的update语句没有通过增量迁移同步到目的端 或 主键同步发生错误的时候，进行数据校验，源端update后的新数据和目标端的旧数据是两条独立的数据，对校验差异进行处理时，会生成两条语句，即对旧数据进行删除，对新数据做插入。此场景会将一条主键update语句拆分为两条语句（insert+delete）来执行，且分解到两个事务中执行，无法保证原子性。
-   增量校验不支持表级规则
-   增量校验不支持行级规则
-   增量校验目前只支持数据增删改校验，暂时不支持表结构（对象）校验（包括多表少表）

## 依赖关系<a name="section57771982"></a>

无。

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-migration-portal/tree/master

详细参考文档： [README.md](https://gitee.com/opengauss/openGauss-migration-portal/blob/master/README.md) 

数据校验社区地址：https://gitee.com/opengauss/openGauss-tools-datachecker-performance

详细参考文档： [校验工具使用指导.md](https://gitee.com/opengauss/openGauss-tools-datachecker-performance/blob/master/校验工具使用指导.md) 