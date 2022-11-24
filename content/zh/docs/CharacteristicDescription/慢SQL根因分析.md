# 慢SQL根因分析<a name="ZH-CN_TOPIC_0000001263251657"></a>

## 可获得性<a name="section17365142913365"></a>

本特性自openGauss 3.0.0开始引入。

## 特性简介<a name="section168782058113611"></a>

慢SQL一直是数据运维中的痛点问题，如何有效诊断慢SQL根因是当前一大难题，工具结合openGauss自身特点融合了现网DBA慢SQL诊断经验，该工具可以支持慢SQL根因15+，能同时按照可能性大小输出多个根因并提供针对性的建议。

## 客户价值<a name="section11716103034018"></a>

为客户提供快速可靠的慢SQL发现及根因分析功能，极大简化了运维人员的工作。

## 特性描述<a name="section611314434114"></a>

基于Prometheus数据采集方案，收集慢SQL根因分析需要的数据，包括系统资源信息（cpu usage、memory usage、IO）、负载信息（QPS）、大进程信息（包括外部大进程和数据库定时任务）、慢SQL文本信息、慢SQL开始执行时间和结束执行时间、慢SQL执行计划，临时文件信息等信息，而后，本功能根据AI算法计算最匹配的慢SQL根因，并给出对应的建议和置信度。

## 特性增强<a name="section65821918104310"></a>

无

## 特性约束<a name="section163509419432"></a>

-   数据库状态正常、客户端能够正常连接；
-   具备Python3.6+的环境；
-   其中慢SQL的信息通过WDR报告获取，数据库WDR报告中会标记SQL是否是慢SQL，其相关GUC参数track\_stmt\_stat\_level默认打开，否则需要用户手动打开，一般设置为track\_stmt\_stat\_level=’off, L0’，更高级别对性能会有一定的影响。数据采集部分由Prometheus方案实现，故需要用户配置Prometheus数据采集平台，本功能只专注于算法并从Prometheus中获取指标的序列信息；

## 依赖关系<a name="section10471835443"></a>

无
