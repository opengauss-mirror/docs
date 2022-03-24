# 系统KPI辅助诊断<a name="ZH-CN_TOPIC_0000001105395252"></a>

## 可获得性<a name="section6414518829"></a>

本特性自openGauss 1.0.0 版本开始引入。

## 特性简介<a name="section78747231823"></a>

KPI是内核组件或者整体性能关键指标的视图呈现，基于这些指标，用户可以了解到系统运行的实时或者历史状态。

## 客户价值<a name="section14646163010212"></a>

-   系统负载概要诊断

    系统负载异常（过载、失速、业务SLA）精准告警，系统负载精准画像。

-   系统时间模型概要诊断

    Instance和Query级别时间模型细分，诊断Instance和Query性能问题根因。

-   Query性能诊断

    数据库级Query概要信息，TopSQL，SQL CPU，IO消耗，执行计划，硬解析过多。

-   磁盘IO、索引、buffer性能问题
-   连接池，线程池异常
-   Checkpoint，Redo（RTO）性能问题
-   系统I/O、LWLock、Waits性能问题诊断

    诊断60+模块，240+关键操作性能问题。

-   函数级性能看护诊断（GSTRACE），功能诊断

    50+存储和执行层函数trace。


## 特性描述<a name="section1503163616210"></a>

openGauss提供涵盖11大类，26个子类的KPI，包括：Instance、File、Object、Workload、Communication、Session、Thread、Cache IO、Lock、Wait Event、Cluster。

KPI指标内核的分布如[图1](#fig20286741318)所示。

**图 1**  KPI指标内核分布<a name="fig20286741318"></a>  
![](figures/KPI指标内核分布.png "KPI指标内核分布")

## 特性增强<a name="section161567423211"></a>

无。

## 特性约束<a name="section1956417145819"></a>

-   对于utility语句不支持归一化，主要体现为非DML语句，比如：create/drop/copy/vacuum等语句。
-   当前归一化SQL仅记录顶层SQL，对于存储过程语句，不对存储过程内部的SQL进行归一化处理，只记录调用存储过程的SQL。

## 依赖关系<a name="section15876411599"></a>

无。

