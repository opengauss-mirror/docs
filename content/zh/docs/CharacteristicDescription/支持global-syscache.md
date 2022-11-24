# 支持Global SysCache<a name="ZH-CN_TOPIC_0000001220767350"></a>

## 可获得性<a name="section15406143204715"></a>

本特性自openGauss 3.0.0版本开始引入。

## 特性简介<a name="section740615433477"></a>

全局系统缓存（Global SysCache）是系统表数据的全局缓存和本地缓存。原理如[图1](#fig15658164619166)所示。

**图 1**  Global SysCache原理图<a name="fig15658164619166"></a>
![](figures/Global-SysCache-SCH.png "Global-SysCache原理图")

## 客户价值<a name="section13406743164715"></a>

全局系统缓存特性可以降低数据库进程的缓存内存占用，提升数据库的并发扩展能力。

## 特性描述<a name="section16406154310471"></a>

全局系统缓存特性指将系统缓存与会话解耦，绑定到线程上，结合线程池特性达到降低内存占用的目的，同时结合全局缓存，提升缓存命中率，保持性能稳定。

## 特性增强<a name="section1340684315478"></a>

支持更高的并发查询。

## 特性约束<a name="section06531946143616"></a>

-   设置enable\_global\_syscache为on。建议设置enable\_thread\_pool参数为on。
-   当DB数较多，且阈值global\_syscache\_threshold较小时，内存控制无法正常工作，性能会劣化。
-   不支持分布式时序相关的任务，这些任务的内存控制与性能不受GSC特性的影响。
-   wal\_level设置为minimal或者archive时，备机的查询性能会下降，会退化为短连接。

## 依赖关系<a name="section8406643144716"></a>

该特性降内存能力依赖于线程池特性。
