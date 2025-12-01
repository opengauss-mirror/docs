# Anomaly detection<a name="ZH-CN_TOPIC_0000002259758176"></a>

## 概述<a name="ZH-CN_TOPIC_0000002294398321"></a>

Anomaly detection异常检测模块的主要功能是基于统计方法来发现时序数据中可能存在的异常情况。该模块框架解耦，可以实现不同异常检测算法的灵活替换，而且该模块功能可以根据时序数据的不同特征来自动选择算法，支持异常值检测、阈值检测、箱型图检测、梯度检测、增长率检测、波动率检测和状态转换检测。

在异常检测的基础上，DBMind支持对关键指标异常的根因分析功能，其分析模型来源于大量现网场景总结，通过对指标发生异常时其他指标进行关联，输出可能的根因。

当前DBMind默认启动的检测器如[表1](#zh-cn_topic_0000001666869780_table179461740869)所示：

**表 1**  检测器列表

<a name="zh-cn_topic_0000001666869780_table179461740869"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001666869780_row766184119615"><th class="cellrowborder" valign="top" width="6.68%" id="mcps1.2.7.1.1"><p id="zh-cn_topic_0000001666869780_p106616411661"><a name="zh-cn_topic_0000001666869780_p106616411661"></a><a name="zh-cn_topic_0000001666869780_p106616411661"></a>分类</p>
</th>
<th class="cellrowborder" valign="top" width="18.6%" id="mcps1.2.7.1.2"><p id="zh-cn_topic_0000001666869780_p176615411068"><a name="zh-cn_topic_0000001666869780_p176615411068"></a><a name="zh-cn_topic_0000001666869780_p176615411068"></a>检测器</p>
</th>
<th class="cellrowborder" valign="top" width="8.42%" id="mcps1.2.7.1.3"><p id="zh-cn_topic_0000001666869780_p186610414618"><a name="zh-cn_topic_0000001666869780_p186610414618"></a><a name="zh-cn_topic_0000001666869780_p186610414618"></a>告警级别</p>
</th>
<th class="cellrowborder" valign="top" width="30.2%" id="mcps1.2.7.1.4"><p id="zh-cn_topic_0000001666869780_p18663412611"><a name="zh-cn_topic_0000001666869780_p18663412611"></a><a name="zh-cn_topic_0000001666869780_p18663412611"></a>默认检测逻辑</p>
</th>
<th class="cellrowborder" valign="top" width="10.94%" id="mcps1.2.7.1.5"><p id="zh-cn_topic_0000001666869780_p106613413614"><a name="zh-cn_topic_0000001666869780_p106613413614"></a><a name="zh-cn_topic_0000001666869780_p106613413614"></a>是否支持诊断</p>
</th>
<th class="cellrowborder" valign="top" width="25.16%" id="mcps1.2.7.1.6"><p id="zh-cn_topic_0000001666869780_p136614411967"><a name="zh-cn_topic_0000001666869780_p136614411967"></a><a name="zh-cn_topic_0000001666869780_p136614411967"></a>处理措施</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001666869780_row10663411567"><td class="cellrowborder" rowspan="3" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p76617412066"><a name="zh-cn_topic_0000001666869780_p76617412066"></a><a name="zh-cn_topic_0000001666869780_p76617412066"></a>磁盘</p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p7664411965"><a name="zh-cn_topic_0000001666869780_p7664411965"></a><a name="zh-cn_topic_0000001666869780_p7664411965"></a>high_disk_usage_detector（磁盘高占用检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p9661341668"><a name="zh-cn_topic_0000001666869780_p9661341668"></a><a name="zh-cn_topic_0000001666869780_p9661341668"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p10170410152510"><a name="zh-cn_topic_0000001666869780_p10170410152510"></a><a name="zh-cn_topic_0000001666869780_p10170410152510"></a>磁盘占用超过80%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p206610411164"><a name="zh-cn_topic_0000001666869780_p206610411164"></a><a name="zh-cn_topic_0000001666869780_p206610411164"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p10665415612"><a name="zh-cn_topic_0000001666869780_p10665415612"></a><a name="zh-cn_topic_0000001666869780_p10665415612"></a>•场景5：磁盘空间占用高异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row26712411361"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p3675411868"><a name="zh-cn_topic_0000001666869780_p3675411868"></a><a name="zh-cn_topic_0000001666869780_p3675411868"></a>high_db_disk_usage_detector（数据库磁盘高占用检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p166734110614"><a name="zh-cn_topic_0000001666869780_p166734110614"></a><a name="zh-cn_topic_0000001666869780_p166734110614"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p717019103255"><a name="zh-cn_topic_0000001666869780_p717019103255"></a><a name="zh-cn_topic_0000001666869780_p717019103255"></a>数据盘占用超过80%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p10675412069"><a name="zh-cn_topic_0000001666869780_p10675412069"></a><a name="zh-cn_topic_0000001666869780_p10675412069"></a>是</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p4670418617"><a name="zh-cn_topic_0000001666869780_p4670418617"></a><a name="zh-cn_topic_0000001666869780_p4670418617"></a>•场景5：磁盘空间占用高异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row26719417615"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p867174110618"><a name="zh-cn_topic_0000001666869780_p867174110618"></a><a name="zh-cn_topic_0000001666869780_p867174110618"></a>high_xlog_count_detector（Xlog堆积检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p367174117619"><a name="zh-cn_topic_0000001666869780_p367174117619"></a><a name="zh-cn_topic_0000001666869780_p367174117619"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p31701410142510"><a name="zh-cn_topic_0000001666869780_p31701410142510"></a><a name="zh-cn_topic_0000001666869780_p31701410142510"></a>Xlog数量减去checkpoint_segments * 2 + wal_keep_segments + 3的结果大于0（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p136714411061"><a name="zh-cn_topic_0000001666869780_p136714411061"></a><a name="zh-cn_topic_0000001666869780_p136714411061"></a>是</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1567134112617"><a name="zh-cn_topic_0000001666869780_p1567134112617"></a><a name="zh-cn_topic_0000001666869780_p1567134112617"></a>•场景4：xLog堆积</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row15671641464"><td class="cellrowborder" rowspan="5" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p46718411264"><a name="zh-cn_topic_0000001666869780_p46718411264"></a><a name="zh-cn_topic_0000001666869780_p46718411264"></a>内存</p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p9672414616"><a name="zh-cn_topic_0000001666869780_p9672414616"></a><a name="zh-cn_topic_0000001666869780_p9672414616"></a>high_mem_usage_detector（系统内存高占用检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p10674411369"><a name="zh-cn_topic_0000001666869780_p10674411369"></a><a name="zh-cn_topic_0000001666869780_p10674411369"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p2017021062516"><a name="zh-cn_topic_0000001666869780_p2017021062516"></a><a name="zh-cn_topic_0000001666869780_p2017021062516"></a>系统内存使用率连续10分钟（阈值可配置）超过80%（阈值可配置）的数据的采样率超过80%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p86714418612"><a name="zh-cn_topic_0000001666869780_p86714418612"></a><a name="zh-cn_topic_0000001666869780_p86714418612"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p46711415614"><a name="zh-cn_topic_0000001666869780_p46711415614"></a><a name="zh-cn_topic_0000001666869780_p46711415614"></a>•场景3：动态内存使用率异常</p>
<p id="zh-cn_topic_0000001666869780_p997710324247"><a name="zh-cn_topic_0000001666869780_p997710324247"></a><a name="zh-cn_topic_0000001666869780_p997710324247"></a>、•场景4：共享内存使用率异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row26704115614"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p1867194115612"><a name="zh-cn_topic_0000001666869780_p1867194115612"></a><a name="zh-cn_topic_0000001666869780_p1867194115612"></a>mem_leak_detector（系统内存泄露检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p9671641169"><a name="zh-cn_topic_0000001666869780_p9671641169"></a><a name="zh-cn_topic_0000001666869780_p9671641169"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p121700100256"><a name="zh-cn_topic_0000001666869780_p121700100256"></a><a name="zh-cn_topic_0000001666869780_p121700100256"></a>系统内存在7-30天的时间范围内持续上涨。检测所需要的最短数据长度是7天，数据长度超过30天之后总是对最近30天的内存进行检测。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p106715411612"><a name="zh-cn_topic_0000001666869780_p106715411612"></a><a name="zh-cn_topic_0000001666869780_p106715411612"></a>是</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p7671241563"><a name="zh-cn_topic_0000001666869780_p7671241563"></a><a name="zh-cn_topic_0000001666869780_p7671241563"></a>•场景2：内存泄漏监测</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row13676419619"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p151711777585"><a name="zh-cn_topic_0000001666869780_p151711777585"></a><a name="zh-cn_topic_0000001666869780_p151711777585"></a>session_mem_increase_detector（会话内存泄露检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p76713413612"><a name="zh-cn_topic_0000001666869780_p76713413612"></a><a name="zh-cn_topic_0000001666869780_p76713413612"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p1217010107251"><a name="zh-cn_topic_0000001666869780_p1217010107251"></a><a name="zh-cn_topic_0000001666869780_p1217010107251"></a>contextname粒度的会话内存在2小时（阈值可配置）内的数据持续上涨，且该上下文占总会话内存比例超过5%（阈值可配置）的采样率超过80%（阈值可配置），且动态内存使用率超过80%（阈值可配置）的数据的采样率超过80%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p186718415610"><a name="zh-cn_topic_0000001666869780_p186718415610"></a><a name="zh-cn_topic_0000001666869780_p186718415610"></a>否</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p968114112612"><a name="zh-cn_topic_0000001666869780_p968114112612"></a><a name="zh-cn_topic_0000001666869780_p968114112612"></a>在异常信息中通过标签信息获取具体故障的节点和上下文信息，可联系内核运维人员进一步定位。</p>
<div class="note" id="zh-cn_topic_0000001666869780_note1998219145511"><a name="zh-cn_topic_0000001666869780_note1998219145511"></a><a name="zh-cn_topic_0000001666869780_note1998219145511"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0000001666869780_p1431417536524"><a name="zh-cn_topic_0000001666869780_p1431417536524"></a><a name="zh-cn_topic_0000001666869780_p1431417536524"></a>对于多线程使用的内存上下文，会被汇总在某一个上下文之下，计算的是该类上下文的总和，而不对单个线程进行分析。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row116854114610"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p186812416611"><a name="zh-cn_topic_0000001666869780_p186812416611"></a><a name="zh-cn_topic_0000001666869780_p186812416611"></a>shared_mem_increase_detector（共享内存泄露检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p46815417615"><a name="zh-cn_topic_0000001666869780_p46815417615"></a><a name="zh-cn_topic_0000001666869780_p46815417615"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p14170010182518"><a name="zh-cn_topic_0000001666869780_p14170010182518"></a><a name="zh-cn_topic_0000001666869780_p14170010182518"></a>contextname粒度的共享内存在2小时（可配置）内的数据持续上涨，且该上下文占总共享内存比例超过5%（可配置）的采样率超过80%（可配置），且动态内存使用率超过80%（可配置）的数据的采样率超过80%（可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p9685411365"><a name="zh-cn_topic_0000001666869780_p9685411365"></a><a name="zh-cn_topic_0000001666869780_p9685411365"></a>否</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p36817418620"><a name="zh-cn_topic_0000001666869780_p36817418620"></a><a name="zh-cn_topic_0000001666869780_p36817418620"></a>在异常信息中通过标签信息获取具体故障的节点和上下文信息，可联系内核运维人员进一步定位。</p>
<div class="note" id="zh-cn_topic_0000001666869780_note13607132219559"><a name="zh-cn_topic_0000001666869780_note13607132219559"></a><a name="zh-cn_topic_0000001666869780_note13607132219559"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0000001666869780_p856325145516"><a name="zh-cn_topic_0000001666869780_p856325145516"></a><a name="zh-cn_topic_0000001666869780_p856325145516"></a>对于多线程使用的内存上下文，会被汇总在某一个上下文之下，计算的是该类上下文的总和，而不对单个线程进行分析。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row968241966"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p7681041666"><a name="zh-cn_topic_0000001666869780_p7681041666"></a><a name="zh-cn_topic_0000001666869780_p7681041666"></a>other_mem_increase_detector（三方组件内存泄露检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p186818411364"><a name="zh-cn_topic_0000001666869780_p186818411364"></a><a name="zh-cn_topic_0000001666869780_p186818411364"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p181701010102510"><a name="zh-cn_topic_0000001666869780_p181701010102510"></a><a name="zh-cn_topic_0000001666869780_p181701010102510"></a>三方组件内存在30分钟（阈值可配置）内的数据持续上涨，且系统内存使用率连续10分钟（阈值可配置）超过80%（阈值可配置）的数据的采样率超过80%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p4684418616"><a name="zh-cn_topic_0000001666869780_p4684418616"></a><a name="zh-cn_topic_0000001666869780_p4684418616"></a>否</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p36817411365"><a name="zh-cn_topic_0000001666869780_p36817411365"></a><a name="zh-cn_topic_0000001666869780_p36817411365"></a>在异常信息中通过标签信息获取具体故障信息，可联系内核运维人员进一步定位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row36820417615"><td class="cellrowborder" rowspan="2" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p4685418613"><a name="zh-cn_topic_0000001666869780_p4685418613"></a><a name="zh-cn_topic_0000001666869780_p4685418613"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p168641669"><a name="zh-cn_topic_0000001666869780_p168641669"></a><a name="zh-cn_topic_0000001666869780_p168641669"></a>high_cpu_usage_detector（CPU高使用率检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p9686415619"><a name="zh-cn_topic_0000001666869780_p9686415619"></a><a name="zh-cn_topic_0000001666869780_p9686415619"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p81709108257"><a name="zh-cn_topic_0000001666869780_p81709108257"></a><a name="zh-cn_topic_0000001666869780_p81709108257"></a>CPU使用率最近10分钟（阈值可配置）的数据超过80%（阈值可配置）的数据的采样率超过80%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1368241669"><a name="zh-cn_topic_0000001666869780_p1368241669"></a><a name="zh-cn_topic_0000001666869780_p1368241669"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p268141965"><a name="zh-cn_topic_0000001666869780_p268141965"></a><a name="zh-cn_topic_0000001666869780_p268141965"></a>•场景1：用户CPU使用率异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row6686413610"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p1682418616"><a name="zh-cn_topic_0000001666869780_p1682418616"></a><a name="zh-cn_topic_0000001666869780_p1682418616"></a>high_thread_pool_rate_detector（线程池高使用率检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p1568194119612"><a name="zh-cn_topic_0000001666869780_p1568194119612"></a><a name="zh-cn_topic_0000001666869780_p1568194119612"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p17170171015259"><a name="zh-cn_topic_0000001666869780_p17170171015259"></a><a name="zh-cn_topic_0000001666869780_p17170171015259"></a>线程池使用率超过95%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p13680411569"><a name="zh-cn_topic_0000001666869780_p13680411569"></a><a name="zh-cn_topic_0000001666869780_p13680411569"></a>是</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1368241864"><a name="zh-cn_topic_0000001666869780_p1368241864"></a><a name="zh-cn_topic_0000001666869780_p1368241864"></a>•场景2：线程池使用率异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row156854115613"><td class="cellrowborder" rowspan="3" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p56819415618"><a name="zh-cn_topic_0000001666869780_p56819415618"></a><a name="zh-cn_topic_0000001666869780_p56819415618"></a>磁盘I/O</p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p11682410616"><a name="zh-cn_topic_0000001666869780_p11682410616"></a><a name="zh-cn_topic_0000001666869780_p11682410616"></a>high_io_delay_detector（I/O延迟检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p2687411615"><a name="zh-cn_topic_0000001666869780_p2687411615"></a><a name="zh-cn_topic_0000001666869780_p2687411615"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p617051062518"><a name="zh-cn_topic_0000001666869780_p617051062518"></a><a name="zh-cn_topic_0000001666869780_p617051062518"></a>os_disk_await最近10分钟（阈值可配置）的数据中超过30毫秒（阈值可配置）的数据的采样率超过50%（阈值可配置）且超过90毫秒（阈值可配置）的数据的采样率超过10%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p3692414611"><a name="zh-cn_topic_0000001666869780_p3692414611"></a><a name="zh-cn_topic_0000001666869780_p3692414611"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p869641663"><a name="zh-cn_topic_0000001666869780_p869641663"></a><a name="zh-cn_topic_0000001666869780_p869641663"></a>•场景6：磁盘IO读取时延异常</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row7698418618"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p16691241566"><a name="zh-cn_topic_0000001666869780_p16691241566"></a><a name="zh-cn_topic_0000001666869780_p16691241566"></a>slow_disk_detector（慢盘检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p11691541161"><a name="zh-cn_topic_0000001666869780_p11691541161"></a><a name="zh-cn_topic_0000001666869780_p11691541161"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p1017081019251"><a name="zh-cn_topic_0000001666869780_p1017081019251"></a><a name="zh-cn_topic_0000001666869780_p1017081019251"></a>await time超过15毫秒（阈值可配置）的os_disk_await数据超过25%（阈值可配置）且 os_disk_await在7天-30天的数据持续上涨，检测所需要的最短数据长度是7天，数据长度超过30天之后总是对最近30天的内存进行检测。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p19693418613"><a name="zh-cn_topic_0000001666869780_p19693418613"></a><a name="zh-cn_topic_0000001666869780_p19693418613"></a>是</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1469174119615"><a name="zh-cn_topic_0000001666869780_p1469174119615"></a><a name="zh-cn_topic_0000001666869780_p1469174119615"></a>•场景1：潜在慢盘监测</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row19691341462"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p169184110614"><a name="zh-cn_topic_0000001666869780_p169184110614"></a><a name="zh-cn_topic_0000001666869780_p169184110614"></a>disk_io_jam_detector（I/O阻塞检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p156974118610"><a name="zh-cn_topic_0000001666869780_p156974118610"></a><a name="zh-cn_topic_0000001666869780_p156974118610"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p317014104257"><a name="zh-cn_topic_0000001666869780_p317014104257"></a><a name="zh-cn_topic_0000001666869780_p317014104257"></a>os_disk_io_queue_length大于0（阈值可配置）且 os_disk_ioutils大于99%（阈值可配置）且 os_disk_await数据中超过30毫秒（阈值可配置）的数据的采样率超过50%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p2699411769"><a name="zh-cn_topic_0000001666869780_p2699411769"></a><a name="zh-cn_topic_0000001666869780_p2699411769"></a>否</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p46912418610"><a name="zh-cn_topic_0000001666869780_p46912418610"></a><a name="zh-cn_topic_0000001666869780_p46912418610"></a>在异常信息中通过标签信息获取具体故障的节点和硬盘信息，可联系内核运维人员进一步定位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row18693411766"><td class="cellrowborder" rowspan="2" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p196914411267"><a name="zh-cn_topic_0000001666869780_p196914411267"></a><a name="zh-cn_topic_0000001666869780_p196914411267"></a>网络</p>
<p id="zh-cn_topic_0000001666869780_p619355864812"><a name="zh-cn_topic_0000001666869780_p619355864812"></a><a name="zh-cn_topic_0000001666869780_p619355864812"></a></p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p3691541761"><a name="zh-cn_topic_0000001666869780_p3691541761"></a><a name="zh-cn_topic_0000001666869780_p3691541761"></a>lag_detector（来自或去往主DN的网络延迟检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p86944116615"><a name="zh-cn_topic_0000001666869780_p86944116615"></a><a name="zh-cn_topic_0000001666869780_p86944116615"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p51702104255"><a name="zh-cn_topic_0000001666869780_p51702104255"></a><a name="zh-cn_topic_0000001666869780_p51702104255"></a>ping_lag最近10分钟（阈值可配置）的数据超过50毫秒（阈值可配置）的数据的采样率超过50%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p4696411268"><a name="zh-cn_topic_0000001666869780_p4696411268"></a><a name="zh-cn_topic_0000001666869780_p4696411268"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p669194118611"><a name="zh-cn_topic_0000001666869780_p669194118611"></a><a name="zh-cn_topic_0000001666869780_p669194118611"></a>检查是否为主备切换引起的网络条件变化，如果不是请联系现场运维人员进一步排查。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row10697411967"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p206924115611"><a name="zh-cn_topic_0000001666869780_p206924115611"></a><a name="zh-cn_topic_0000001666869780_p206924115611"></a>packet_loss_detector（来自或去往主DN的网络丢包率检测器）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p17695416616"><a name="zh-cn_topic_0000001666869780_p17695416616"></a><a name="zh-cn_topic_0000001666869780_p17695416616"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p10170171015258"><a name="zh-cn_topic_0000001666869780_p10170171015258"></a><a name="zh-cn_topic_0000001666869780_p10170171015258"></a>ping_packet_rate最近10分钟（阈值可配置）的数据得包率低于90%（阈值可配置）的数据的采样率超过20%（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p769174113610"><a name="zh-cn_topic_0000001666869780_p769174113610"></a><a name="zh-cn_topic_0000001666869780_p769174113610"></a>否</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p669641464"><a name="zh-cn_topic_0000001666869780_p669641464"></a><a name="zh-cn_topic_0000001666869780_p669641464"></a>检查是否为主备切换引起的网络条件变化，如果不是请联系现场运维人员进一步排查。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row269141964"><td class="cellrowborder" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p156964116616"><a name="zh-cn_topic_0000001666869780_p156964116616"></a><a name="zh-cn_topic_0000001666869780_p156964116616"></a>文件句柄</p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p770211115910"><a name="zh-cn_topic_0000001666869780_p770211115910"></a><a name="zh-cn_topic_0000001666869780_p770211115910"></a>leaked_fd_detector（文件句柄泄露检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p8706414618"><a name="zh-cn_topic_0000001666869780_p8706414618"></a><a name="zh-cn_topic_0000001666869780_p8706414618"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p131701510172518"><a name="zh-cn_topic_0000001666869780_p131701510172518"></a><a name="zh-cn_topic_0000001666869780_p131701510172518"></a>数据库进程未释放的文件句柄数process_leaked_fds超过5个（阈值可配置）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1870241562"><a name="zh-cn_topic_0000001666869780_p1870241562"></a><a name="zh-cn_topic_0000001666869780_p1870241562"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p177004114610"><a name="zh-cn_topic_0000001666869780_p177004114610"></a><a name="zh-cn_topic_0000001666869780_p177004114610"></a>如需进一步分析文件句柄泄露异常，可以根据标签中的pid，在数据库节点上使用以下命令进行分析 ls -l /proc/{pid}/fd | grep '(deleted)' 可以获取到泄露的文件路径，联系运维人员进一步排查。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001666869780_row670941861"><td class="cellrowborder" valign="top" width="6.68%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001666869780_p17017411617"><a name="zh-cn_topic_0000001666869780_p17017411617"></a><a name="zh-cn_topic_0000001666869780_p17017411617"></a>长事务</p>
</td>
<td class="cellrowborder" valign="top" width="18.6%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001666869780_p47054115610"><a name="zh-cn_topic_0000001666869780_p47054115610"></a><a name="zh-cn_topic_0000001666869780_p47054115610"></a>slow_sql_detector（长事务检测器）</p>
</td>
<td class="cellrowborder" valign="top" width="8.42%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001666869780_p17074112614"><a name="zh-cn_topic_0000001666869780_p17074112614"></a><a name="zh-cn_topic_0000001666869780_p17074112614"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" width="30.2%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001666869780_p7701941962"><a name="zh-cn_topic_0000001666869780_p7701941962"></a><a name="zh-cn_topic_0000001666869780_p7701941962"></a>存在处于active或者idle in transaction状态且运行时间超过1个小时（3600秒，阈值可配置）的事务。</p>
<div class="note" id="zh-cn_topic_0000001666869780_note46281552185115"><a name="zh-cn_topic_0000001666869780_note46281552185115"></a><a name="zh-cn_topic_0000001666869780_note46281552185115"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0000001666869780_p1862815525519"><a name="zh-cn_topic_0000001666869780_p1862815525519"></a><a name="zh-cn_topic_0000001666869780_p1862815525519"></a>由于目标指标pg_long_transaction_count只采集时长超过3600秒以上的事务，所以即使设置的阈值低于3600秒，可以检测的长事务仍然是3600秒以上的长事务。</p>
<p id="zh-cn_topic_0000001666869780_p169864917505"><a name="zh-cn_topic_0000001666869780_p169864917505"></a><a name="zh-cn_topic_0000001666869780_p169864917505"></a>修改slow_sql_detector的阈值时会一并修改长事务的根因分析对于长事务的判断逻辑，保证两侧的判断逻辑一致。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="10.94%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p207011416610"><a name="zh-cn_topic_0000001666869780_p207011416610"></a><a name="zh-cn_topic_0000001666869780_p207011416610"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p17064120610"><a name="zh-cn_topic_0000001666869780_p17064120610"></a><a name="zh-cn_topic_0000001666869780_p17064120610"></a>•场景5：长事务</p>
</td>
</tr>
</tbody>
</table>

>[!TIP]须知 
>
>- 异常检测器的落盘存储依赖于元数据库，请勿在元数据库中对异常检测器相关的数据进行手动修改。
>- 当前版本仅在主备切换、扩容和节点剔除的场景下，支持对同一集群的检测器配置参数的继承和保留，其他场景均不支持。
>- 长事务检测器由长事务整体触发异常，但是计算异常个数的时候会实际计算长事务中超时之后执行的每个SQL。
>- 对于网络异常检测器，当延迟超过1000ms时，网络延迟相关指标的采集会开始出现数据丢失现象，无法保证网络数据的完整性，可能会对网络检测器的检测结果产生影响，此时应该通过集群诊断的断网检测功能上报异常。
>- 当前的异常检测器有部分检测项和智能巡检功能的某些检测项比较相似，如：CPU使用率、磁盘使用率、内存使用率、磁盘I/O使用率和线程池使用率检测等。由于智能巡检的设计目的和时间跨度与异常检测在设计上有所不同，检测阈值和条件也有所区别，所以某些相似检测项可能出现不一致的结果，这些属于正常现象。
>- 会话内存上下文指标pg\_session\_memory\_detail\_rate和共享内存上下文指标pg\_shared\_memory\_detail\_rate的超时时长为10秒，在查询内存视图耗时很长的情况下，指标所标注的时间会相应滞后。
>- 延迟和丢包率检测是通过并发多个ping命令检测起点到终点之间的连通性，通过多个ping命令返回的平均延迟和成功率来采集数据。

## 使用指导<a name="ZH-CN_TOPIC_0000002294471389"></a>

假设指标采集系统运行正常，并且用户已经初始化了配置文件目录confpath，则可以通过下述命令实现本特性的功能：

### 异常检测功能<a name="zh-cn_topic_0000001666869584_section6687101013527"></a>

仅启动异常检测功能：

```
gs_dbmind service start --conf confpath --only-run anomaly_detection
```

对于某一指标，在全部节点上，从timestamps1到timestamps2时间段内的数据进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2
```

对于某一指标，在特定节点上，从timestamps1到timestamps2时间段内的数据进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address 
```

对于某一指标，在全部节点上，从timestamps1到timestamps2时间段内的数据，以特定异常检测方式进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --anomaly anomaly_type
```

对于某一指标，在特定节点，从timestamps1到timestamps2时间段内的数据，以特定异常检测方式进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

对于某一指标，在特定节点，从timestamps1到timestamps2时间段内的数据，以特定异常检测方式进行可视化展示：

```
gs_dbmind component anomaly_detection --conf confpath --action plot --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

运行异常诊断后台任务：

```
参考[Slow Query Diagnosis](zh-cn_topic_0000001667029332.md)中的方法，其对应定时任务为：anomaly_detection
```

### 指标异常分析功能<a name="zh-cn_topic_0000001666869584_section10292919165214"></a>

指标异常根因分析接口调用：

```
curl -X 'GET' http://127.0.0.1:8080/v1/api/app/metric-diagnosis/?metric_name=os_cpu_user_usage&metric_filter={"from_instance":"127.0.0.1","from_job":"node_exporter","instance":"127.0.0.1:8181","job":"reprocessing_exporter"}&alarm_cause=["high_cpu_usage"]&start=1691482728000&end=1691482728000 -H 'accept: application/json' -H 'Content-Type: application/json' -H "Authorization: bearer xxx"
```

如果使用HTTPS协议，则查询示例为：

```
curl -X 'GET' 'https://127.0.0.1:8080/v1/api/app/metric-diagnosis/?metric_name=os_cpu_user_usage&metric_filter={"from_instance":"127.0.0.1","from_job":"node_exporter","instance":"127.0.0.1:8181","job":"reprocessing_exporter"}&alarm_cause=["high_cpu_usage"]&start=1691482728000&end=1691482728000' -H 'accept: application/json' -H 'Content-Type: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
```

如果DBMind以微服务模式启动，则查询示例为：

```
curl -X 'POST' 'https://127.0.0.1:8080/v2/api/app/metric-diagnosis/?metric_name=os_cpu_user_usage&metric_filter={"from_instance":"127.0.0.1","from_job":"node_exporter","instance":"127.0.0.1:8181","job":"reprocessing_exporter"}&alarm_cause=["high_cpu_usage"]&start=1691482728000&end=1691482728000' -H 'accept: application/json' -H 'Content-Type: application/json' --cacert xx.crt --key xx.key --cert xx.crt
```

返回结果格式参考：

```
{"data":{[{'reason1': 0.0, 'reason2': 1.0}, 'conclusion', 'advice']},"success":true}
```

停止已启动的服务：

```
gs_dbmind service stop --conf confpath
```

指标异常分析支持的场景详细情况如下：

- **场景1：用户CPU使用率异常**

    异常判断标准：用户CPU使用率10分钟内持续高于80%。

    可能的异常根因：

    - 业务压力增大导致

        现象：TPS、网络读写速率、CPU使用率和内存使用率均存在一定程度的上涨。

        分析：通过与相关指标进行相关性比对。

        建议：根据业务量评估CPU、内存等资源是否满足业务需求，是否需要扩容。

    - iowait延时高导致

        现象：数据库磁盘的读时延和写时延变长。

        建议：增加I/O吞吐量，排查可以降低I/O的进程。

    分析时提供的信息：

    - 提供pg\_stat\_activity每个unique\_sql\_id的总运行时间的快照信息。

- **场景2：线程池使用率异常**

    异常判断标准：默认的异常检测规则是线程池使用率10分钟内持续高于80%。

    可能的异常根因：

    - 业务压力增大导致

        现象：TPS、网络读写速率、内存使用率和线程池使用率基本存在一定程度的关联。

        分析：通过与相关指标进行相关性比对。

        建议：根据业务量评估CPU、内存等资源是否满足业务需求，是否需要扩容。

    - 磁盘读写时延过高导致

        现象：数据库磁盘读写时延增高，导致线程池使用率超过配置的阈值。

        分析：查看产生报警的节点的线程池使用率与数据盘I/O平均读写时长的相关性。

        建议：若发现数据库磁盘读写时延频繁过高或者有明显劣化趋势，则继续定位是否磁盘硬件故障。

    - 工作负载上升导致

        现象：QPS、CPU使用率和系统内存持续上涨。

        分析：根据算法对QPS、CPU使用率和系统内存持续上涨进行判断。

        建议：数据库负载上升，考虑采用限流措施。

- **场景3：动态内存使用率异常**

    异常判断标准：系统内存超过阈值（默认10分钟连续超过80%），再进行动态内存使用率异常分析。

    可能的异常根因：

    - 会话数上涨导致

        现象：在线会话数量指标随内存上涨的同时上涨。

        分析：查看同一时间段内会话数量和内存上涨之间的关系，通过皮尔逊计算相关系数，绝对值超过阈值的指标会被认为是相关异常。

        建议：停止变更。

    - 动态内存泄露导致

        现象：动态内存持续上涨。

        分析：查看内存占用较大的上下文数量，如未发生很大变化则可能是内存泄露。

        建议：通过pg\_terminate\_session终止会话或重启DN进程。

    - 非数据库内存泄露导致

        现象：非数据库内存持续上涨。

        分析：查看非数据库内存占用。

        建议：分析系统内存占用，终止节点上其他占用内存较高的进程。

    分析时提供的信息：

    - 提供session\_memory\_detail的快照信息。

- **场景4：共享内存使用率异常**

    异常判断标准：系统内存超过阈值（默认10分钟连续超过80%），再进行共享内存使用率异常分析。

    可能的异常根因：

    - 未落盘脏页数过高导致

        现象：INSERT或UPDATE操作比例突然增大。

        分析：分析INSERT或UPDATE操作比例突然增大与共享内存的相关性，通过皮尔逊计算相关系数，绝对值超过阈值的指标会被认为是相关异常。

        建议：考虑降低pagewriter\_sleep参数，加速脏页落盘的速度；考虑降低dirty\_page\_percent\_max参数，降低刷页阈值上限。

    - 共享内存泄露导致

        现象：共享内存持续上涨。

        分析：查看系统内存占用，确认是否有除了openGuass进程外占用大量内存的进程。

        建议：手动清理，执行“ipcrm -m shmid”（此命令操作危险，请谨慎操作）。

    分析时提供的信息：

    - 提供shared\_memory\_detail的快照信息。

- **场景5：磁盘空间占用高异常**

    异常判断标准：磁盘空间占用超过阈值（默认80%）。

    可能的异常根因：

    - 数据库表空间膨胀导致

        现象：数据库磁盘占用快速上升。

        分析：分析INSERT或UPDATE操作比例和磁盘I/O读写情况来确定脏数据是否增加过快。

        建议：临时情况，无需处理。

    - Xlog堆积导致

        现象：Xlog路径占用空间过大。

        分析：分析Xlog数量是否超过wal\_keep\_segments + checkpoint\_segments \* 2+1。

        建议：查看是否有未推进的逻辑复制槽阻塞Xlog回收。

    分析时提供的信息：

    - 提供实时表空间信息。
    - 提供临时文件信息，包括线程和会话信息。

- **场景6：磁盘I/O读取时延异常**

    异常判断标准：数据库磁盘I/O使用率超过阈值（默认99%）。

    可能的异常根因：

    - 数据磁盘读写I/O使用率超阈值导致

        现象：数据库磁盘读写I/O使用率接近100%。

        分析：分析数据库磁盘读写I/O使用率和时延之间的关系。

        建议：降低I/O压力，提高磁盘的I/O限制。

- **场景7：扫描攻击**

    异常判断标准：SQL执行错误率和用户越权率加权得分超过阈值（默认阈值：提示0.2，告警0.6，严重0.8）。

    可能的异常根因：

    - SQL执行错误率和用户越权率增高导致

        现象：SQL执行错误率和用户越权率增高。

        分析：用户使用自动化工具扫描目标网络或系统的漏洞，利用这些漏洞获取未经授权的访问权限，窃取敏感数据或破坏系统目标。

        建议：及时更新数据库软件和安全补丁，以修复已知漏洞，减少攻击面。

- **场景8：暴力登录**

    异常判断标准：用户无效登录率和用户锁定率指标加权得分超过阈值（默认阈值：提示0.1，告警0.3，严重0.4）。

    可能的异常根因：

    - 用户无效登录率和用户锁定率增高导致

        现象：用户无效登录率和用户锁定率增高。

        分析：攻击者猜测用户名和密码进行暴力登录，导致账户锁定及其他拒绝服务问题。

        建议：根据告警信息，及时检查登录日志、采取相应措施。

- **场景9：违规操作**
- 异常判断标准：用户越权率指标超过阈值（默认阈值：提示0.2，告警0.6，严重0.8）。

    可能的异常根因：

    - 用户越权率增高导致

        现象：用户越权率增高。

        分析：攻击者使用用户凭证进行违规操作。

        建议：对于敏感数据，限制访问权限。

>[!NOTE]说明 
>其中，场景7\~9的约束如下：
>
>- 用户需要有Monitor admin和Audit admin权限，如果没有Audit admin权限，会导致审计指标数据全为0，诊断结果不可用。
>- 需要开启audit\_enabled、audit\_login\_logout、audit\_user\_locked和audit\_user\_violation参数。
>- 审计总开关GUC参数audit\_enabled支持动态加载。在数据库运行期间修改该配置项的值会立即生效，无需重启数据库。默认值为on，表示开启审计功能。
>- 审计项audit\_login\_logout：默认值为7，表示开启用户登录、退出的审计功能。设置为0表示关闭用户登录、退出的审计功能。
>- 审计项audit\_user\_locked：默认值为1，表示开启审计用户锁定和解锁功能。
>- 审计项audit\_user\_violation：默认值为0，表示关闭用户越权操作审计功能。可通过命令 gs\_guc reload -Z datanode -N all -I all -c "audit\_user\_violation=1" 开启。
>- 如未开启审计相关参数，则只能处理扫描攻击场景。

### 亚健康诊断功能<a name="zh-cn_topic_0000001666869584_section375817515117"></a>

亚健康状态是系统介于健康状态和故障状态之间的一种状态，系统仍在运行且功能正常但处于降级模式的一种情况，它的存在会造成系统性能严重低于预期。

亚健康诊断支持的场景如下：

- **场景1：潜在慢盘监测**

    DBMind默认初始化"slow\_disk\_detector"检测器，在每一次触发异常检测定时，任务时对潜在慢盘进行监测。

    - 现象：“慢盘”现象普遍存在于存储架构之中，由于硬盘体质或者频繁读写的原因，部分硬盘会出现性能故障，I/O负载过高等情况进而导致延时变大，读写变慢的现象。
    - 检测逻辑：在最近的过去7天\~30天（收集的数据小于7天不进行检测），其磁盘I/O平均读写时间长期在30ms以上并呈现出上升趋势，则认为其发生潜在慢盘。

- **场景2：内存泄漏监测**

    DBMind默认初始化"mem\_leak\_detector"检测器，在每一次触发异常检测定时任务时对内存泄漏进行监测。

    - 现象：程序中已动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。内存泄漏缺陷具有隐蔽性、积累性的特征，比其他内存非法访问错误更难检测。
    - 检测逻辑：最近的过去7天\~30天（收集的数据小于7天不进行检测），其内存占用呈现出上升趋势，则认为其发生内存泄漏。

    可能的异常根因：

    - 动态内存泄露导致

        现象：动态内存持续上涨。

        分析：查看内存占用较大的上下文数量，如未发生很大变化则可能是内存泄露。

        建议：通过pg\_terminate\_session终止会话或重启DN进程。

    - 共享内存泄露导致

        现象：共享内存持续上涨。

        分析：查看系统内存占用，确认是否有除了openGuass进程外占用大量内存的进程。

        建议：手动清理，ipcrm -m shmid（此命令操作危险，请谨慎操作）。

    - 第三方软件内存增高导致

        现象：other\_used\_memory持续上涨。

        分析：第三方软件内存泄露。

        建议：排查第三方软件的内存占用。

    - 非数据库内存泄露导致

        现象：非数据库内存持续上涨。

        分析：查看非数据库内存占用。

        建议：分析系统内存占用，终止节点上其他占用内存较高的进程。

    - 用户无效登录过高导致

        现象：用户无效登录数超阈值。

        分析：用户无效登录日志过多，存在大量连接失败。

        建议：请联系管理员。

    分析时提供的信息：

    - 提供session\_memory\_detail的快照信息。
    - 提供shared\_memory\_detail的快照信息。

- **场景3：锁冲突监测**

    DBMind默认初始化"deadlock\_detector"检测器，在每一次触发异常检测定时任务时对锁冲突进行监测。

    - 现象：当发生锁冲突时，日志中会记录锁冲突的详细信息。
    - 检测逻辑：当内核日志记录到死锁日志时，则认为其发生锁冲突，并对死锁信息进行收集。

- **场景4：Xlog堆积**

    异常判断标准：Xlog数量超过wal\_keep\_segments + checkpoint\_segments \* 2。

    可能的异常根因：

    - 逻辑复制槽阻塞Xlog回收

        现象：存在未推进的逻辑复制槽。

        分析：存在未推进的逻辑复制槽。

        建议：可能存在阻塞Xlog回收的逻辑复制槽，请联系管理员。

    - Xlog归档失败

        现象：Xlog的最小lsn小于归档日志的lsn。

        分析：Xlog的最小lsn小于归档日志的lsn，表示归档进程没有成功回收Xlog。

        建议：Xlog归档失败问题请联系管理员。

    - 备机build阻塞Xlog回收

        现象：发现recycle\_build日志或者发现recycle\_full\_build日志或者发现recycle\_quorum\_required日志。

        分析：发现recycle\_build日志或者发现recycle\_full\_build日志或者发现recycle\_quorum\_required日志。

        建议：备机build阻塞Xlog回收问题请联系管理员。

    - dcf阻塞Xlog回收

        现象：发现recycle\_dcf日志。

        分析：发现recycle\_dcf日志。

        建议：dcf阻塞Xlog回收问题请联系管理员。

    - dummy standby场景阻塞Xlog回收

        现象：发现recycle\_dummy\_standby日志。

        分析：发现recycle\_dummy\_standby日志。

        建议：dummy standby场景阻塞Xlog回收问题请联系管理员。

    - 增备阻塞Xlog回收

        现象：发现recycle\_cbm日志。

        分析：发现recycle\_cbm日志。

        建议：增备阻塞Xlog回收问题请联系管理员。

    - 备份槽阻塞Xlog回收

        现象：发现recycle\_standby\_backup日志。

        分析：发现recycle\_standby\_backup日志。

        建议：备份槽阻塞Xlog回收问题请联系管理员。

    - 极致rto阻塞Xlog回收

        现象：发现recycle\_extro\_read日志。

        分析：发现recycle\_extro\_read日志。

        建议：极致rto阻塞Xlog回收问题请联系管理员。

    - 参数设置不当

        现象：磁盘空间小于\(wal\_keep\_segments + checkpoint\_segments \* 2\) \* wal\_segment\_size。

        分析：磁盘空间小于\(wal\_keep\_segments + checkpoint\_segments \* 2\) \* wal\_segment\_size。

        建议：磁盘空间过小，guc参数设置不当。

    - Xlog回收进程失效

        现象：回收日志长期不更新。

        分析：回收日志长期不更新。

        建议：Xlog回收进程失效问题请联系管理员。

- **场景5：长事务**

    异常判断标准：存在处于active或者idle in transaction状态且运行时间超过1个小时的事务。

    可能的异常根因：

    - 存在大量长事务

        现象：长事务数量超过1个。

        分析：存在未提交的长事务。

        建议：如果P80、P95持续高，CPU使用率也一直保持很高，线程池使用率反复超过阈值，没有恢复迹象，则需要联系相关人员进行进一步定位分析。

    分析时提供的信息：

    - 提供长事务发生时其session\_id对应的session\_memory\_detail的快照信息。
    - 提供当前未结束的长事务的详细信息。

>[!NOTE]说明 
>
>- 异常检测器的落盘存储依赖于元数据库，请勿在元数据库中对异常检测器进行手动修改。
>- 当前版本仅支持，在主备切换、扩容和剔除节点的场景下，同一集群的检测器配置参数会被继承与保留，其他场景均不支持。
>- 在输入anomaly detection的参数时，start-time设置时间至少要早于end-time设置时间30秒以上。
>- 异常检测功能依赖于异常检测器，可以通过异常检测器的查询接口/v1/api/app/anomaly-detection/detectors/\{name\}查看当前已添加的全部异常检测器。
>- 根因分析的某些功能依赖opengauss-exporter的指标采集，当数据库处于高负载状况下，由于opengauss-exporter设置了SQL的超时机制来保护业务，可能会导致某些复杂的查询语句超时，进而导致采集的数据为空，当发生采集失败时，可以查询opengauss-exporter的日志来进行进一步的定位。
>- 添加检测器或更改检测器参数会将检测器状态变为启用。
>- 对于初始化时默认的长期指标检测器（如slow\_disk\_detector和mem\_leak\_detector），其检测器的监测时间窗口长度是固定的，不支持修改，对于其duration参数的修改是无效的。
>- 对于长期指标检测器，当收集到的数据低于7天时，不会进行检测。当数据超过一小时以上没有更新时，不会进行检测。
>- 对Xlog堆积问题的根因分析依赖于Xlog日志的DFX功能，该功能仅在503.2版本及其后续版本中提供支持。

## 获取帮助<a name="ZH-CN_TOPIC_0000002259861278"></a>

异常检测模块命令行说明：

```
gs_dbmind component anomaly_detection --help
```

显示如下帮助信息：

```
usage: [-h] --action {overview,plot} -c CONF -m METRIC -s START_TIME -e END_TIME [-H HOST] [-a {level_shift,spike,seasonal,volatility_shift}]

Workload Anomaly detection: Anomaly detection of monitored metric.

optional arguments:
  -h, --help            show this help message and exit
  --action {overview,plot}
                        choose a functionality to perform
  -c CONF, --conf CONF  set the directory of configuration files
  -m METRIC, --metric METRIC
                        set the metric name you want to retrieve
  -s START_TIME, --start-time START_TIME
                        set the start time of for retrieving in ms, supporting UNIX-timestamp with microsecond or datetime format
  -e END_TIME, --end-time END_TIME
                        set the end time of for retrieving in ms, supporting UNIX-timestamp with microsecond or datetime format
  -H HOST, --host HOST  set a host of the metric, ip only or ip and port.
  -a {level_shift,spike,seasonal,volatility_shift}, --anomaly {level_shift,spike,seasonal,volatility_shift}
                        set a anomaly detector of the metric from: "level_shift", "spike", "seasonal", "volatility_shift"
```

## 命令参考<a name="ZH-CN_TOPIC_0000002259758180"></a>

**表 1**  异常检测命令行参数说明

<a name="zh-cn_topic_0000001667029336_table1342813795619"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001667029336_row045719711563"><th class="cellrowborder" valign="top" width="28.85858585858586%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001667029336_p1245710711563"><a name="zh-cn_topic_0000001667029336_p1245710711563"></a><a name="zh-cn_topic_0000001667029336_p1245710711563"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="37.80808080808081%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001667029336_p184571871566"><a name="zh-cn_topic_0000001667029336_p184571871566"></a><a name="zh-cn_topic_0000001667029336_p184571871566"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001667029336_p9457678569"><a name="zh-cn_topic_0000001667029336_p9457678569"></a><a name="zh-cn_topic_0000001667029336_p9457678569"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001667029336_row845747175610"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p945713712568"><a name="zh-cn_topic_0000001667029336_p945713712568"></a><a name="zh-cn_topic_0000001667029336_p945713712568"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p174574715614"><a name="zh-cn_topic_0000001667029336_p174574715614"></a><a name="zh-cn_topic_0000001667029336_p174574715614"></a>帮助命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p18457187195615"><a name="zh-cn_topic_0000001667029336_p18457187195615"></a><a name="zh-cn_topic_0000001667029336_p18457187195615"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row12457167155617"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p745718714569"><a name="zh-cn_topic_0000001667029336_p745718714569"></a><a name="zh-cn_topic_0000001667029336_p745718714569"></a>--action</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p74571470565"><a name="zh-cn_topic_0000001667029336_p74571470565"></a><a name="zh-cn_topic_0000001667029336_p74571470565"></a>动作参数。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0000001667029336_ul14758104155813"></a><a name="zh-cn_topic_0000001667029336_ul14758104155813"></a><ul id="zh-cn_topic_0000001667029336_ul14758104155813"><li>overview：概览。</li><li>plot：可视化。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row1145717795616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p945718755617"><a name="zh-cn_topic_0000001667029336_p945718755617"></a><a name="zh-cn_topic_0000001667029336_p945718755617"></a>-c，--conf</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p184576712561"><a name="zh-cn_topic_0000001667029336_p184576712561"></a><a name="zh-cn_topic_0000001667029336_p184576712561"></a>配置文件目录。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p3457157205619"><a name="zh-cn_topic_0000001667029336_p3457157205619"></a><a name="zh-cn_topic_0000001667029336_p3457157205619"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row6457127115618"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p18457779562"><a name="zh-cn_topic_0000001667029336_p18457779562"></a><a name="zh-cn_topic_0000001667029336_p18457779562"></a>-m，--metric</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p124572079561"><a name="zh-cn_topic_0000001667029336_p124572079561"></a><a name="zh-cn_topic_0000001667029336_p124572079561"></a>指定显示指标名。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p1345718775612"><a name="zh-cn_topic_0000001667029336_p1345718775612"></a><a name="zh-cn_topic_0000001667029336_p1345718775612"></a>任意能采集到的指标，例如os_mem_usage、os_disk_usage等。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row124571720564"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p124571719563"><a name="zh-cn_topic_0000001667029336_p124571719563"></a><a name="zh-cn_topic_0000001667029336_p124571719563"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p345827195611"><a name="zh-cn_topic_0000001667029336_p345827195611"></a><a name="zh-cn_topic_0000001667029336_p345827195611"></a>指定数据来源地址信息，通过地址信息进行过滤。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p1545818725617"><a name="zh-cn_topic_0000001667029336_p1545818725617"></a><a name="zh-cn_topic_0000001667029336_p1545818725617"></a>IP地址或者IP地址加端口号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row1645819735616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p2458157195617"><a name="zh-cn_topic_0000001667029336_p2458157195617"></a><a name="zh-cn_topic_0000001667029336_p2458157195617"></a>-a, --anomaly</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p1645811720569"><a name="zh-cn_topic_0000001667029336_p1645811720569"></a><a name="zh-cn_topic_0000001667029336_p1645811720569"></a>指定异常检测方式，用于过滤。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p3458178565"><a name="zh-cn_topic_0000001667029336_p3458178565"></a><a name="zh-cn_topic_0000001667029336_p3458178565"></a>level_shift、spike、seasonal、volatility_shift。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row19458157125616"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p1845816711568"><a name="zh-cn_topic_0000001667029336_p1845816711568"></a><a name="zh-cn_topic_0000001667029336_p1845816711568"></a>-s, --start-time</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p1544145713182"><a name="zh-cn_topic_0000001667029336_p1544145713182"></a><a name="zh-cn_topic_0000001667029336_p1544145713182"></a>显示开始时间的时间戳，单位毫秒；或日期时间，格式为%Y-%m-%d %H:%M:%S。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p1095712011916"><a name="zh-cn_topic_0000001667029336_p1095712011916"></a><a name="zh-cn_topic_0000001667029336_p1095712011916"></a>正整数或日期时间格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row14581773565"><td class="cellrowborder" valign="top" width="28.85858585858586%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029336_p84583710563"><a name="zh-cn_topic_0000001667029336_p84583710563"></a><a name="zh-cn_topic_0000001667029336_p84583710563"></a>-e, --end-time</p>
</td>
<td class="cellrowborder" valign="top" width="37.80808080808081%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029336_p026554719114"><a name="zh-cn_topic_0000001667029336_p026554719114"></a><a name="zh-cn_topic_0000001667029336_p026554719114"></a>显示结束时间的时间戳，单位毫秒；或日期时间，格式为%Y-%m-%d %H:%M:%S。</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029336_p52656471113"><a name="zh-cn_topic_0000001667029336_p52656471113"></a><a name="zh-cn_topic_0000001667029336_p52656471113"></a>正整数或日期时间格式。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  指标异常分析接口

<a name="zh-cn_topic_0000001667029336_table1543834313208"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001667029336_row10438143172012"><th class="cellrowborder" valign="top" width="20.22202220222022%" id="mcps1.2.7.1.1"><p id="zh-cn_topic_0000001667029336_p11438144312203"><a name="zh-cn_topic_0000001667029336_p11438144312203"></a><a name="zh-cn_topic_0000001667029336_p11438144312203"></a>API</p>
</th>
<th class="cellrowborder" valign="top" width="12.1012101210121%" id="mcps1.2.7.1.2"><p id="zh-cn_topic_0000001667029336_p18438143102020"><a name="zh-cn_topic_0000001667029336_p18438143102020"></a><a name="zh-cn_topic_0000001667029336_p18438143102020"></a>请求方法</p>
</th>
<th class="cellrowborder" valign="top" width="19.14191419141914%" id="mcps1.2.7.1.3"><p id="zh-cn_topic_0000001667029336_p9322183414219"><a name="zh-cn_topic_0000001667029336_p9322183414219"></a><a name="zh-cn_topic_0000001667029336_p9322183414219"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="10.061006100610062%" id="mcps1.2.7.1.4"><p id="zh-cn_topic_0000001667029336_p15474048172319"><a name="zh-cn_topic_0000001667029336_p15474048172319"></a><a name="zh-cn_topic_0000001667029336_p15474048172319"></a>参数类型</p>
</th>
<th class="cellrowborder" valign="top" width="19.541954195419542%" id="mcps1.2.7.1.5"><p id="zh-cn_topic_0000001667029336_p198051116142312"><a name="zh-cn_topic_0000001667029336_p198051116142312"></a><a name="zh-cn_topic_0000001667029336_p198051116142312"></a>参数范围</p>
</th>
<th class="cellrowborder" valign="top" width="18.93189318931893%" id="mcps1.2.7.1.6"><p id="zh-cn_topic_0000001667029336_p17438164311205"><a name="zh-cn_topic_0000001667029336_p17438164311205"></a><a name="zh-cn_topic_0000001667029336_p17438164311205"></a>功能描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001667029336_row94389431203"><td class="cellrowborder" rowspan="5" valign="top" width="20.22202220222022%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p1743810431201"><a name="zh-cn_topic_0000001667029336_p1743810431201"></a><a name="zh-cn_topic_0000001667029336_p1743810431201"></a>/v1/api/app/metric-diagnosis</p>
<p id="zh-cn_topic_0000001667029336_p9554174618243"><a name="zh-cn_topic_0000001667029336_p9554174618243"></a><a name="zh-cn_topic_0000001667029336_p9554174618243"></a></p>
<p id="zh-cn_topic_0000001667029336_p418635510242"><a name="zh-cn_topic_0000001667029336_p418635510242"></a><a name="zh-cn_topic_0000001667029336_p418635510242"></a></p>
<p id="zh-cn_topic_0000001667029336_p185665162413"><a name="zh-cn_topic_0000001667029336_p185665162413"></a><a name="zh-cn_topic_0000001667029336_p185665162413"></a></p>
<p id="zh-cn_topic_0000001667029336_p18477171772513"><a name="zh-cn_topic_0000001667029336_p18477171772513"></a><a name="zh-cn_topic_0000001667029336_p18477171772513"></a></p>
</td>
<td class="cellrowborder" rowspan="5" valign="top" width="12.1012101210121%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p143815434206"><a name="zh-cn_topic_0000001667029336_p143815434206"></a><a name="zh-cn_topic_0000001667029336_p143815434206"></a>GET</p>
<p id="zh-cn_topic_0000001667029336_p1555412468241"><a name="zh-cn_topic_0000001667029336_p1555412468241"></a><a name="zh-cn_topic_0000001667029336_p1555412468241"></a></p>
<p id="zh-cn_topic_0000001667029336_p13186165592418"><a name="zh-cn_topic_0000001667029336_p13186165592418"></a><a name="zh-cn_topic_0000001667029336_p13186165592418"></a></p>
<p id="zh-cn_topic_0000001667029336_p7561513247"><a name="zh-cn_topic_0000001667029336_p7561513247"></a><a name="zh-cn_topic_0000001667029336_p7561513247"></a></p>
<p id="zh-cn_topic_0000001667029336_p15477017132511"><a name="zh-cn_topic_0000001667029336_p15477017132511"></a><a name="zh-cn_topic_0000001667029336_p15477017132511"></a></p>
</td>
<td class="cellrowborder" valign="top" width="19.14191419141914%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p53221234142116"><a name="zh-cn_topic_0000001667029336_p53221234142116"></a><a name="zh-cn_topic_0000001667029336_p53221234142116"></a>metric_name：指标名称，必选项。</p>
<p id="zh-cn_topic_0000001667029336_p11530125312221"><a name="zh-cn_topic_0000001667029336_p11530125312221"></a><a name="zh-cn_topic_0000001667029336_p11530125312221"></a></p>
</td>
<td class="cellrowborder" valign="top" width="10.061006100610062%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029336_p11474648112314"><a name="zh-cn_topic_0000001667029336_p11474648112314"></a><a name="zh-cn_topic_0000001667029336_p11474648112314"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="19.541954195419542%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029336_p138051816202317"><a name="zh-cn_topic_0000001667029336_p138051816202317"></a><a name="zh-cn_topic_0000001667029336_p138051816202317"></a>os_cpu_user_usage，pg_thread_pool_rate，os_mem_usage，os_disk_usage，os_disk_io_read_delay</p>
</td>
<td class="cellrowborder" rowspan="5" valign="top" width="18.93189318931893%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029336_p8438164332010"><a name="zh-cn_topic_0000001667029336_p8438164332010"></a><a name="zh-cn_topic_0000001667029336_p8438164332010"></a>执行指标异常检测。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row145543468248"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p155474632417"><a name="zh-cn_topic_0000001667029336_p155474632417"></a><a name="zh-cn_topic_0000001667029336_p155474632417"></a>metric_filter：筛选指标。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p11554154662415"><a name="zh-cn_topic_0000001667029336_p11554154662415"></a><a name="zh-cn_topic_0000001667029336_p11554154662415"></a>string</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p755474611243"><a name="zh-cn_topic_0000001667029336_p755474611243"></a><a name="zh-cn_topic_0000001667029336_p755474611243"></a>不涉及</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row2186135532419"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p318615559241"><a name="zh-cn_topic_0000001667029336_p318615559241"></a><a name="zh-cn_topic_0000001667029336_p318615559241"></a>alarm_cause：选择分析方法。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p16186185522410"><a name="zh-cn_topic_0000001667029336_p16186185522410"></a><a name="zh-cn_topic_0000001667029336_p16186185522410"></a>string</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p15186145522417"><a name="zh-cn_topic_0000001667029336_p15186145522417"></a><a name="zh-cn_topic_0000001667029336_p15186145522417"></a>high_cpu_usage,  high_thread_pool_rate,  high_dynamic_mem_usage,  high_shared_mem_usage,  high_disk_usage, high_io_delay</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row956195113245"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p556051112410"><a name="zh-cn_topic_0000001667029336_p556051112410"></a><a name="zh-cn_topic_0000001667029336_p556051112410"></a>start_time：分析指标开始时间戳。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p165665118244"><a name="zh-cn_topic_0000001667029336_p165665118244"></a><a name="zh-cn_topic_0000001667029336_p165665118244"></a>时间戳（毫秒）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p1356251192414"><a name="zh-cn_topic_0000001667029336_p1356251192414"></a><a name="zh-cn_topic_0000001667029336_p1356251192414"></a>不涉及</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row747741719257"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p14477111713253"><a name="zh-cn_topic_0000001667029336_p14477111713253"></a><a name="zh-cn_topic_0000001667029336_p14477111713253"></a>end_time：分析指标结束时间戳。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p54771217102513"><a name="zh-cn_topic_0000001667029336_p54771217102513"></a><a name="zh-cn_topic_0000001667029336_p54771217102513"></a>时间戳（毫秒）</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p147718175259"><a name="zh-cn_topic_0000001667029336_p147718175259"></a><a name="zh-cn_topic_0000001667029336_p147718175259"></a>不涉及</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row257615234616"><td class="cellrowborder" valign="top" width="20.22202220222022%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p1576172124617"><a name="zh-cn_topic_0000001667029336_p1576172124617"></a><a name="zh-cn_topic_0000001667029336_p1576172124617"></a>/v1/api/security/scenarios</p>
</td>
<td class="cellrowborder" valign="top" width="12.1012101210121%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p165761223467"><a name="zh-cn_topic_0000001667029336_p165761223467"></a><a name="zh-cn_topic_0000001667029336_p165761223467"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" width="19.14191419141914%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p115761724466"><a name="zh-cn_topic_0000001667029336_p115761724466"></a><a name="zh-cn_topic_0000001667029336_p115761724466"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="10.061006100610062%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029336_p155763274618"><a name="zh-cn_topic_0000001667029336_p155763274618"></a><a name="zh-cn_topic_0000001667029336_p155763274618"></a>不涉及</p>
</td>
<td class="cellrowborder" valign="top" width="19.541954195419542%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029336_p185766244615"><a name="zh-cn_topic_0000001667029336_p185766244615"></a><a name="zh-cn_topic_0000001667029336_p185766244615"></a>不涉及</p>
</td>
<td class="cellrowborder" valign="top" width="18.93189318931893%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029336_p1657611274614"><a name="zh-cn_topic_0000001667029336_p1657611274614"></a><a name="zh-cn_topic_0000001667029336_p1657611274614"></a>获取所有安全异常类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029336_row20601402312"><td class="cellrowborder" valign="top" width="20.22202220222022%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001667029336_p11609012319"><a name="zh-cn_topic_0000001667029336_p11609012319"></a><a name="zh-cn_topic_0000001667029336_p11609012319"></a>/v1/api/security/scenarios/{name}</p>
</td>
<td class="cellrowborder" valign="top" width="12.1012101210121%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001667029336_p186011083113"><a name="zh-cn_topic_0000001667029336_p186011083113"></a><a name="zh-cn_topic_0000001667029336_p186011083113"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" width="19.14191419141914%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001667029336_p17602043117"><a name="zh-cn_topic_0000001667029336_p17602043117"></a><a name="zh-cn_topic_0000001667029336_p17602043117"></a>name：场景名称。</p>
</td>
<td class="cellrowborder" valign="top" width="10.061006100610062%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001667029336_p66017083111"><a name="zh-cn_topic_0000001667029336_p66017083111"></a><a name="zh-cn_topic_0000001667029336_p66017083111"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="19.541954195419542%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001667029336_p186040153119"><a name="zh-cn_topic_0000001667029336_p186040153119"></a><a name="zh-cn_topic_0000001667029336_p186040153119"></a>scanning_attack, brute_force_login_attack, user_violation_attack</p>
</td>
<td class="cellrowborder" valign="top" width="18.93189318931893%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001667029336_p1160190173117"><a name="zh-cn_topic_0000001667029336_p1160190173117"></a><a name="zh-cn_topic_0000001667029336_p1160190173117"></a>获取指定安全异常场景的校准状态。</p>
</td>
</tr>
</tbody>
</table>

## 常见问题处理<a name="ZH-CN_TOPIC_0000002294398325"></a>

- 概览场景失败：
    1. 请检查配置文件路径是否正确。
    2. 配置文件信息是否完整。
    3. 检查指标名称是否准确。
    4. 检查host地址是否正确。
    5. 检查异常检测类型是否准确。
    6. 检查起止时间内指标是否存在对应数据。

- 可视化场景失败：
    1. 请检查配置文件路径是否正确。
    2. 配置文件信息是否完整。
    3. 检查指标名称是否准确。
    4. 检查host地址是否正确。
    5. 检查异常检测类型是否准确。
    6. 检查起止时间内指标是否存在对应数据。
