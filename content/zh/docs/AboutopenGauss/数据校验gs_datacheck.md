# 数据校验 gs_datacheck 

## 可获得性<a name="section56086982"></a>

本特性自openGauss 3.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

gs_datacheck 工具是一个基于JDK11 + Springboot2.6.7 框架实现openGauss/MySQL之间的同构与异构之间的数据校验。该工具提供了全量数据的校验以及增量数据的实时校验能力，可实现数据一致性校验。

## 客户价值<a name="section46751668"></a>

通过使用gs_datacheck工具，可完成数据从openGauss/MySQL之间的同构与异构之间的数据库数据一致性检查。

## 特性描述<a name="section18111828"></a>

gs_datacheck工具提供数据全量和增量校验功能，可以对openGauss/MySQL之间的同构与异构之间的数据库的数据进行一致性校验。

- 全量校验：

  在全量数据迁移完成后，由extract服务对源端和目标端数据通过JDBC方式进行数据抽取然后规整计算，并将计算后的中间数据推送到kafka中。最后由check服务提取kafka中的中间数据，构建默克尔树，通过默克尔树比对实现表数据校验且输出校验结果。

- 增量校验：

  由debezium服务侦听源端MySQL数据库的增量数据，到指定topic。再由源端extract服务处理该topic增量数据，触发check增量校验。


## 特性增强<a name="section28788730"></a>

- 自openGauss 6.0.0-RC1版本 数据校验工具支持源端是openGauss/MySQL的校验，包括全量校验与增量校验。
- 自openGauss 6.0.0-RC1版本 数据校验实现大表分片校验，提升抽取校验整体性能。具体参数配置参考《校验工具使用指导》( **https://gitcode.com/opengauss/openGauss-tools-datachecker-performance/blob/master/%E6%A0%A1%E9%AA%8C%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AF%BC.md**）中7.4章节的数据校验调优配置。
- 自openGauss 5.1.0版本 数据校验工具支持源端是openGauss的校验，包括全量校验与增量校验。
- 自openGauss 5.1.0版本 表记录抽取任务分片规则进行优化，实现抽取校验性能的提升。（ 在50张表每张表1千万记录场景下，校验性能使用sysbench模型以及t_datacheck_templete模型，校验速率达到20万条/秒，其中使用t_datacheck_templete模型可以达到（150+M/s） ）（具体模型参考 **https://gitcode.com/opengauss/openGauss-tools-datachecker-performance**中《校验工具使用指导.md 》7.1章节，表设计）

## 特性约束<a name="section06531946143616"></a>

-   JDK版本要求JDK11+
-   当前版本仅支持对源端openGauss/MySQL，目标端openGauss/MySQL数据校验
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

开源社区地址： [gs_rep_portal](https://gitcode.com/opengauss/openGauss-migration-portal/tree/5.1.0/)

详细参考文档： <a href="https://gitcode.com/opengauss/openGauss-migration-portal/blob/5.1.0/README.md ">README.md</a>

数据校验社区地址：[gs_datacheck](https://gitcode.com/opengauss/openGauss-tools-datachecker-performance/tree/5.1.0/)

详细参考文档： <a href="https://gitcode.com/opengauss/openGauss-tools-datachecker-performance/blob/5.1.0/%E6%A0%A1%E9%AA%8C%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AF%BC.md ">校验工具使用指导.md</a> 

