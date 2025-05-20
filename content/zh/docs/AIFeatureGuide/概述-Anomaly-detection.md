# 概述<a name="ZH-CN_TOPIC_0000002294398321"></a>

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
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p10665415612"><a name="zh-cn_topic_0000001666869780_p10665415612"></a><a name="zh-cn_topic_0000001666869780_p10665415612"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li7864147111117">•场景5：磁盘空间占用高异常</a></p>
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
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p4670418617"><a name="zh-cn_topic_0000001666869780_p4670418617"></a><a name="zh-cn_topic_0000001666869780_p4670418617"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li7864147111117">•场景5：磁盘空间占用高异常</a></p>
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
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1567134112617"><a name="zh-cn_topic_0000001666869780_p1567134112617"></a><a name="zh-cn_topic_0000001666869780_p1567134112617"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li2497131817710">•场景4：xLog堆积</a></p>
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
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p46711415614"><a name="zh-cn_topic_0000001666869780_p46711415614"></a><a name="zh-cn_topic_0000001666869780_p46711415614"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li1086364719117">•场景3：动态内存使用率异常</a>；</p>
<p id="zh-cn_topic_0000001666869780_p997710324247"><a name="zh-cn_topic_0000001666869780_p997710324247"></a><a name="zh-cn_topic_0000001666869780_p997710324247"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li14864347141113">•场景4：共享内存使用率异常</a></p>
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
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p7671241563"><a name="zh-cn_topic_0000001666869780_p7671241563"></a><a name="zh-cn_topic_0000001666869780_p7671241563"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li10701619131318">•场景2：内存泄漏监测</a></p>
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
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p268141965"><a name="zh-cn_topic_0000001666869780_p268141965"></a><a name="zh-cn_topic_0000001666869780_p268141965"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li12862174711118">•场景1：用户CPU使用率异常</a></p>
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
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1368241864"><a name="zh-cn_topic_0000001666869780_p1368241864"></a><a name="zh-cn_topic_0000001666869780_p1368241864"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li13863154781117">•场景2：线程池使用率异常</a></p>
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
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p869641663"><a name="zh-cn_topic_0000001666869780_p869641663"></a><a name="zh-cn_topic_0000001666869780_p869641663"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li48641147191115">•场景6：磁盘IO读取时延异常</a></p>
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
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001666869780_p1469174119615"><a name="zh-cn_topic_0000001666869780_p1469174119615"></a><a name="zh-cn_topic_0000001666869780_p1469174119615"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li1270001916133">•场景1：潜在慢盘监测</a></p>
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
<td class="cellrowborder" valign="top" width="25.16%" headers="mcps1.2.7.1.6 "><p id="zh-cn_topic_0000001666869780_p17064120610"><a name="zh-cn_topic_0000001666869780_p17064120610"></a><a name="zh-cn_topic_0000001666869780_p17064120610"></a><a href="使用指导-20.md#zh-cn_topic_0000001666869584_li106181751192116">•场景5：长事务</a></p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **须知：** 
>-   异常检测器的落盘存储依赖于元数据库，请勿在元数据库中对异常检测器相关的数据进行手动修改。
>-   当前版本仅在主备切换、扩容和节点剔除的场景下，支持对同一集群的检测器配置参数的继承和保留，其他场景均不支持。
>-   长事务检测器由长事务整体触发异常，但是计算异常个数的时候会实际计算长事务中超时之后执行的每个SQL。
>-   对于网络异常检测器，当延迟超过1000ms时，网络延迟相关指标的采集会开始出现数据丢失现象，无法保证网络数据的完整性，可能会对网络检测器的检测结果产生影响，此时应该通过集群诊断的断网检测功能上报异常。
>-   当前的异常检测器有部分检测项和智能巡检功能的某些检测项比较相似，如：CPU使用率、磁盘使用率、内存使用率、磁盘I/O使用率和线程池使用率检测等。由于智能巡检的设计目的和时间跨度与异常检测在设计上有所不同，检测阈值和条件也有所区别，所以某些相似检测项可能出现不一致的结果，这些属于正常现象。
>-   会话内存上下文指标pg\_session\_memory\_detail\_rate和共享内存上下文指标pg\_shared\_memory\_detail\_rate的超时时长为10秒，在查询内存视图耗时很长的情况下，指标所标注的时间会相应滞后。
>-   延迟和丢包率检测是通过并发多个ping命令检测起点到终点之间的连通性，通过多个ping命令返回的平均延迟和成功率来采集数据。

