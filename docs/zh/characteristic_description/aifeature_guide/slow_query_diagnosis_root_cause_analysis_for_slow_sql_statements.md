# Slow Query Diagnosis<a name="ZH-CN_TOPIC_0000002294398257"></a>

## 概述<a name="ZH-CN_TOPIC_0000002294471361"></a>

在数据运维工作中，慢SQL一直是个痛点问题。如何准确诊断出慢SQL的根本原因，是当下数据运维领域面临的一大挑战。

本工具结合openGauss自身特点，同时融入了DBA在现网中的慢SQL诊断方面的经验，从而具备了强大的慢SQL根因分析能力。它能够依据可能性的高低，同时给出多个慢SQL的根本原因，并针对每个原因提供具体的解决方案建议 。

## 环境部署<a name="ZH-CN_TOPIC_0000002259861250"></a>

- 数据库运行正常。
- 指标采集系统运行正常。

## 使用指导<a name="ZH-CN_TOPIC_0000002259758152"></a>

当前版本支持的慢SQL根因如[表1](#zh-cn_topic_0000001667029292_table17449477176)所示。

**表 1**  慢SQL根因列表

<a name="zh-cn_topic_0000001667029292_table17449477176"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001667029292_row1144987191719"><th class="cellrowborder" valign="top" width="6.838608831574835%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0000001667029292_p1244912761715"><a name="zh-cn_topic_0000001667029292_p1244912761715"></a><a name="zh-cn_topic_0000001667029292_p1244912761715"></a>序号</p>
</th>
<th class="cellrowborder" valign="top" width="28.99570144587729%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0000001667029292_p184498720179"><a name="zh-cn_topic_0000001667029292_p184498720179"></a><a name="zh-cn_topic_0000001667029292_p184498720179"></a>根因</p>
</th>
<th class="cellrowborder" valign="top" width="19.33372411098085%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0000001667029292_p047516371173"><a name="zh-cn_topic_0000001667029292_p047516371173"></a><a name="zh-cn_topic_0000001667029292_p047516371173"></a>根因解释</p>
</th>
<th class="cellrowborder" valign="top" width="44.831965611567014%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0000001667029292_p14901332239"><a name="zh-cn_topic_0000001667029292_p14901332239"></a><a name="zh-cn_topic_0000001667029292_p14901332239"></a>补充说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001667029292_row244957121711"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p154491677179"><a name="zh-cn_topic_0000001667029292_p154491677179"></a><a name="zh-cn_topic_0000001667029292_p154491677179"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p2034917587187"><a name="zh-cn_topic_0000001667029292_p2034917587187"></a><a name="zh-cn_topic_0000001667029292_p2034917587187"></a>LOCK_CONTENTION</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p644918719170"><a name="zh-cn_topic_0000001667029292_p644918719170"></a><a name="zh-cn_topic_0000001667029292_p644918719170"></a>锁竞争。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p18490133102314"><a name="zh-cn_topic_0000001667029292_p18490133102314"></a><a name="zh-cn_topic_0000001667029292_p18490133102314"></a>语句执行期间被锁阻塞，导致单SQL执行较慢。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row94491279174"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p14449117171711"><a name="zh-cn_topic_0000001667029292_p14449117171711"></a><a name="zh-cn_topic_0000001667029292_p14449117171711"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p13492058191815"><a name="zh-cn_topic_0000001667029292_p13492058191815"></a><a name="zh-cn_topic_0000001667029292_p13492058191815"></a>MANY_DEAD_TUPLES</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p10711103852218"><a name="zh-cn_topic_0000001667029292_p10711103852218"></a><a name="zh-cn_topic_0000001667029292_p10711103852218"></a>废弃元组数量较多。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p1149023352316"><a name="zh-cn_topic_0000001667029292_p1149023352316"></a><a name="zh-cn_topic_0000001667029292_p1149023352316"></a>表中废弃元组占比超过设定阈值会降低查询效率，导致单SQL执行较慢。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row944917719172"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p7449207141716"><a name="zh-cn_topic_0000001667029292_p7449207141716"></a><a name="zh-cn_topic_0000001667029292_p7449207141716"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p1034910584180"><a name="zh-cn_topic_0000001667029292_p1034910584180"></a><a name="zh-cn_topic_0000001667029292_p1034910584180"></a>HEAVY_SCAN_OPERATOR</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p18449107121711"><a name="zh-cn_topic_0000001667029292_p18449107121711"></a><a name="zh-cn_topic_0000001667029292_p18449107121711"></a>扫描算子代价较大。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p1749023311231"><a name="zh-cn_topic_0000001667029292_p1749023311231"></a><a name="zh-cn_topic_0000001667029292_p1749023311231"></a>执行计划中扫描算子代价较大，导致单SQL执行较慢。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1144967151710"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p6449187161716"><a name="zh-cn_topic_0000001667029292_p6449187161716"></a><a name="zh-cn_topic_0000001667029292_p6449187161716"></a>4</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p1234915586187"><a name="zh-cn_topic_0000001667029292_p1234915586187"></a><a name="zh-cn_topic_0000001667029292_p1234915586187"></a>ABNORMAL_PLAN_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p16450107111716"><a name="zh-cn_topic_0000001667029292_p16450107111716"></a><a name="zh-cn_topic_0000001667029292_p16450107111716"></a>异常执行计划生成时间。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p1549043320231"><a name="zh-cn_topic_0000001667029292_p1549043320231"></a><a name="zh-cn_topic_0000001667029292_p1549043320231"></a>SQL生成执行计划时间较长。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1745017181712"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p14501876172"><a name="zh-cn_topic_0000001667029292_p14501876172"></a><a name="zh-cn_topic_0000001667029292_p14501876172"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p18349185810188"><a name="zh-cn_topic_0000001667029292_p18349185810188"></a><a name="zh-cn_topic_0000001667029292_p18349185810188"></a>UNUSED_AND_REDUNDANT_INDEX</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p7450157131715"><a name="zh-cn_topic_0000001667029292_p7450157131715"></a><a name="zh-cn_topic_0000001667029292_p7450157131715"></a>无用/冗余索引。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p204901733192312"><a name="zh-cn_topic_0000001667029292_p204901733192312"></a><a name="zh-cn_topic_0000001667029292_p204901733192312"></a>表中存在无用/冗余索引，影响插入更新语句性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1145017141718"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p12450770179"><a name="zh-cn_topic_0000001667029292_p12450770179"></a><a name="zh-cn_topic_0000001667029292_p12450770179"></a>6</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p153495588182"><a name="zh-cn_topic_0000001667029292_p153495588182"></a><a name="zh-cn_topic_0000001667029292_p153495588182"></a>UPDATE_LARGE_DATA</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p185168254114"><a name="zh-cn_topic_0000001667029292_p185168254114"></a><a name="zh-cn_topic_0000001667029292_p185168254114"></a>更新大量元组。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p152181915312"><a name="zh-cn_topic_0000001667029292_p152181915312"></a><a name="zh-cn_topic_0000001667029292_p152181915312"></a>批量更新大量元组，导致单SQL语句性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row10450177111713"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p13450197161714"><a name="zh-cn_topic_0000001667029292_p13450197161714"></a><a name="zh-cn_topic_0000001667029292_p13450197161714"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p1634995817183"><a name="zh-cn_topic_0000001667029292_p1634995817183"></a><a name="zh-cn_topic_0000001667029292_p1634995817183"></a>INSERT_LARGE_DATA</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p14505710178"><a name="zh-cn_topic_0000001667029292_p14505710178"></a><a name="zh-cn_topic_0000001667029292_p14505710178"></a>插入大量元组。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p3490203316234"><a name="zh-cn_topic_0000001667029292_p3490203316234"></a><a name="zh-cn_topic_0000001667029292_p3490203316234"></a>批量插入大量元组，导致单SQL语句性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1845087111714"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p245011720170"><a name="zh-cn_topic_0000001667029292_p245011720170"></a><a name="zh-cn_topic_0000001667029292_p245011720170"></a>8</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p173491158111813"><a name="zh-cn_topic_0000001667029292_p173491158111813"></a><a name="zh-cn_topic_0000001667029292_p173491158111813"></a>DELETE_LARGE_DATA</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p945017141710"><a name="zh-cn_topic_0000001667029292_p945017141710"></a><a name="zh-cn_topic_0000001667029292_p945017141710"></a>删除大量元组。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p114907333232"><a name="zh-cn_topic_0000001667029292_p114907333232"></a><a name="zh-cn_topic_0000001667029292_p114907333232"></a>批量删除大量元组，导致单SQL语句性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row194506710174"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p1045016716171"><a name="zh-cn_topic_0000001667029292_p1045016716171"></a><a name="zh-cn_topic_0000001667029292_p1045016716171"></a>9</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p73491458121818"><a name="zh-cn_topic_0000001667029292_p73491458121818"></a><a name="zh-cn_topic_0000001667029292_p73491458121818"></a>TOO_MANY_INDEX</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p15450147151717"><a name="zh-cn_topic_0000001667029292_p15450147151717"></a><a name="zh-cn_topic_0000001667029292_p15450147151717"></a>表中存在太多索引。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p18490033102311"><a name="zh-cn_topic_0000001667029292_p18490033102311"></a><a name="zh-cn_topic_0000001667029292_p18490033102311"></a>表中存在大量索引，影响插入更新语句性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1445016721718"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p114502711172"><a name="zh-cn_topic_0000001667029292_p114502711172"></a><a name="zh-cn_topic_0000001667029292_p114502711172"></a>10</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p6349105819187"><a name="zh-cn_topic_0000001667029292_p6349105819187"></a><a name="zh-cn_topic_0000001667029292_p6349105819187"></a>DISK_SPILL</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p1245017721719"><a name="zh-cn_topic_0000001667029292_p1245017721719"></a><a name="zh-cn_topic_0000001667029292_p1245017721719"></a>磁盘溢出。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p4490103362318"><a name="zh-cn_topic_0000001667029292_p4490103362318"></a><a name="zh-cn_topic_0000001667029292_p4490103362318"></a>由于GUC参数设置不当等原因导致SQL执行期间发生落盘现象。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row174511710174"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p1745167151714"><a name="zh-cn_topic_0000001667029292_p1745167151714"></a><a name="zh-cn_topic_0000001667029292_p1745167151714"></a>13</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p1434995813181"><a name="zh-cn_topic_0000001667029292_p1434995813181"></a><a name="zh-cn_topic_0000001667029292_p1434995813181"></a>WORKLOAD_CONTENTION</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p1479614124212"><a name="zh-cn_topic_0000001667029292_p1479614124212"></a><a name="zh-cn_topic_0000001667029292_p1479614124212"></a>数据库负载集中。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p1249013311232"><a name="zh-cn_topic_0000001667029292_p1249013311232"></a><a name="zh-cn_topic_0000001667029292_p1249013311232"></a>数据库负载集中导致实例整体执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row14451676179"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p0451579173"><a name="zh-cn_topic_0000001667029292_p0451579173"></a><a name="zh-cn_topic_0000001667029292_p0451579173"></a>14</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p63491058131817"><a name="zh-cn_topic_0000001667029292_p63491058131817"></a><a name="zh-cn_topic_0000001667029292_p63491058131817"></a>CPU_RESOURCE_CONTENTION</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p645137101711"><a name="zh-cn_topic_0000001667029292_p645137101711"></a><a name="zh-cn_topic_0000001667029292_p645137101711"></a>系统CPU负载集中。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p194901033192316"><a name="zh-cn_topic_0000001667029292_p194901033192316"></a><a name="zh-cn_topic_0000001667029292_p194901033192316"></a>由于外部进程等其他原因导致CPU资源紧张，实例整体SQL执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row8451676173"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p17451187131718"><a name="zh-cn_topic_0000001667029292_p17451187131718"></a><a name="zh-cn_topic_0000001667029292_p17451187131718"></a>15</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p134910587189"><a name="zh-cn_topic_0000001667029292_p134910587189"></a><a name="zh-cn_topic_0000001667029292_p134910587189"></a>IO_RESOURCE_CONTENTION</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p94511791713"><a name="zh-cn_topic_0000001667029292_p94511791713"></a><a name="zh-cn_topic_0000001667029292_p94511791713"></a>系统IO资源集中。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p5334152510820"><a name="zh-cn_topic_0000001667029292_p5334152510820"></a><a name="zh-cn_topic_0000001667029292_p5334152510820"></a>由于外部进程等其他原因导致IO资源紧张，实例整体SQL执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row34515715173"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p13451147131716"><a name="zh-cn_topic_0000001667029292_p13451147131716"></a><a name="zh-cn_topic_0000001667029292_p13451147131716"></a>16</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p11349205861819"><a name="zh-cn_topic_0000001667029292_p11349205861819"></a><a name="zh-cn_topic_0000001667029292_p11349205861819"></a>MEMORY_RESOURCE_CONTENTION</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p174518716175"><a name="zh-cn_topic_0000001667029292_p174518716175"></a><a name="zh-cn_topic_0000001667029292_p174518716175"></a>系统内存资源集中。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p1680813298813"><a name="zh-cn_topic_0000001667029292_p1680813298813"></a><a name="zh-cn_topic_0000001667029292_p1680813298813"></a>由于外部进程等其他原因导致内存资源紧张，实例整体SQL执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1745118791714"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p1945119711175"><a name="zh-cn_topic_0000001667029292_p1945119711175"></a><a name="zh-cn_topic_0000001667029292_p1945119711175"></a>17</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p12350105821819"><a name="zh-cn_topic_0000001667029292_p12350105821819"></a><a name="zh-cn_topic_0000001667029292_p12350105821819"></a>ABNORMAL_NETWORK_STATUS</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p445112718175"><a name="zh-cn_topic_0000001667029292_p445112718175"></a><a name="zh-cn_topic_0000001667029292_p445112718175"></a>异常网络状态。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p14912033102314"><a name="zh-cn_topic_0000001667029292_p14912033102314"></a><a name="zh-cn_topic_0000001667029292_p14912033102314"></a>网络异常，导致SQL执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row17451271178"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p12451571171"><a name="zh-cn_topic_0000001667029292_p12451571171"></a><a name="zh-cn_topic_0000001667029292_p12451571171"></a>18</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p73501358121816"><a name="zh-cn_topic_0000001667029292_p73501358121816"></a><a name="zh-cn_topic_0000001667029292_p73501358121816"></a>OS_RESOURCE_CONTENTION</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p18451187131712"><a name="zh-cn_topic_0000001667029292_p18451187131712"></a><a name="zh-cn_topic_0000001667029292_p18451187131712"></a>句柄资源紧张。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p114911334235"><a name="zh-cn_topic_0000001667029292_p114911334235"></a><a name="zh-cn_topic_0000001667029292_p114911334235"></a>系统句柄资源紧张影响整体执行性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row9451127181718"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p104521075176"><a name="zh-cn_topic_0000001667029292_p104521075176"></a><a name="zh-cn_topic_0000001667029292_p104521075176"></a>19</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p103502058131820"><a name="zh-cn_topic_0000001667029292_p103502058131820"></a><a name="zh-cn_topic_0000001667029292_p103502058131820"></a>WAIT_EVENT</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p1745219717172"><a name="zh-cn_topic_0000001667029292_p1745219717172"></a><a name="zh-cn_topic_0000001667029292_p1745219717172"></a>等待事件。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p204913332237"><a name="zh-cn_topic_0000001667029292_p204913332237"></a><a name="zh-cn_topic_0000001667029292_p204913332237"></a>SQL执行期间的等待事件影响执行性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1945213721716"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p1645212711716"><a name="zh-cn_topic_0000001667029292_p1645212711716"></a><a name="zh-cn_topic_0000001667029292_p1645212711716"></a>20</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p535019586182"><a name="zh-cn_topic_0000001667029292_p535019586182"></a><a name="zh-cn_topic_0000001667029292_p535019586182"></a>LACK_STATISTIC_INFO</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p174520751718"><a name="zh-cn_topic_0000001667029292_p174520751718"></a><a name="zh-cn_topic_0000001667029292_p174520751718"></a>统计信息缺失。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p17212055591"><a name="zh-cn_topic_0000001667029292_p17212055591"></a><a name="zh-cn_topic_0000001667029292_p17212055591"></a>没有及时更新表统计信息，可能导致执行计划不优进而影响SQL执行性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row144521177170"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p144522713171"><a name="zh-cn_topic_0000001667029292_p144522713171"></a><a name="zh-cn_topic_0000001667029292_p144522713171"></a>21</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p835055841814"><a name="zh-cn_topic_0000001667029292_p835055841814"></a><a name="zh-cn_topic_0000001667029292_p835055841814"></a>MISSING_INDEXES</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p84529701713"><a name="zh-cn_topic_0000001667029292_p84529701713"></a><a name="zh-cn_topic_0000001667029292_p84529701713"></a>缺少索引。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p15491633202310"><a name="zh-cn_topic_0000001667029292_p15491633202310"></a><a name="zh-cn_topic_0000001667029292_p15491633202310"></a>缺失索引导致单SQL执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row44521178171"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p104521170172"><a name="zh-cn_topic_0000001667029292_p104521170172"></a><a name="zh-cn_topic_0000001667029292_p104521170172"></a>22</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p143502058151811"><a name="zh-cn_topic_0000001667029292_p143502058151811"></a><a name="zh-cn_topic_0000001667029292_p143502058151811"></a>POOR_JOIN_PERFORMANCE</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p184521471178"><a name="zh-cn_topic_0000001667029292_p184521471178"></a><a name="zh-cn_topic_0000001667029292_p184521471178"></a>JOIN代价较大。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p5491103316239"><a name="zh-cn_topic_0000001667029292_p5491103316239"></a><a name="zh-cn_topic_0000001667029292_p5491103316239"></a>JOIN算子代价较大，影响SQL语句执行性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row2452157191718"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p045210713177"><a name="zh-cn_topic_0000001667029292_p045210713177"></a><a name="zh-cn_topic_0000001667029292_p045210713177"></a>23</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p3350105816185"><a name="zh-cn_topic_0000001667029292_p3350105816185"></a><a name="zh-cn_topic_0000001667029292_p3350105816185"></a>COMPLEX_BOOLEAN_EXPRESSIONS</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p1945211716177"><a name="zh-cn_topic_0000001667029292_p1945211716177"></a><a name="zh-cn_topic_0000001667029292_p1945211716177"></a>复杂的布尔表达式。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p949110338230"><a name="zh-cn_topic_0000001667029292_p949110338230"></a><a name="zh-cn_topic_0000001667029292_p949110338230"></a>主要针对not in (item1, item2, ...)情况，如果元素数量太多可能会导致执行计划较差，从而影响SQL的性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row44526715172"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p1045212701713"><a name="zh-cn_topic_0000001667029292_p1045212701713"></a><a name="zh-cn_topic_0000001667029292_p1045212701713"></a>24</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p1135017586180"><a name="zh-cn_topic_0000001667029292_p1135017586180"></a><a name="zh-cn_topic_0000001667029292_p1135017586180"></a>STRING_MATCHING</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p1245217781716"><a name="zh-cn_topic_0000001667029292_p1245217781716"></a><a name="zh-cn_topic_0000001667029292_p1245217781716"></a>字符串匹配。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p64911336239"><a name="zh-cn_topic_0000001667029292_p64911336239"></a><a name="zh-cn_topic_0000001667029292_p64911336239"></a>由于不恰当使用函数等原因导致索引失效，进而影响SQL性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row1045216791720"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p19452147171719"><a name="zh-cn_topic_0000001667029292_p19452147171719"></a><a name="zh-cn_topic_0000001667029292_p19452147171719"></a>25</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p11350135814182"><a name="zh-cn_topic_0000001667029292_p11350135814182"></a><a name="zh-cn_topic_0000001667029292_p11350135814182"></a>COMPLEX_EXECUTION_PLAN</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p184529741712"><a name="zh-cn_topic_0000001667029292_p184529741712"></a><a name="zh-cn_topic_0000001667029292_p184529741712"></a>复杂的执行计划。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p12491153342318"><a name="zh-cn_topic_0000001667029292_p12491153342318"></a><a name="zh-cn_topic_0000001667029292_p12491153342318"></a>执行计划较复杂，执行时间较长。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row94529751719"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p1545387111713"><a name="zh-cn_topic_0000001667029292_p1545387111713"></a><a name="zh-cn_topic_0000001667029292_p1545387111713"></a>26</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p8350165881820"><a name="zh-cn_topic_0000001667029292_p8350165881820"></a><a name="zh-cn_topic_0000001667029292_p8350165881820"></a>CORRELATED_SUBQUERY</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p6453178176"><a name="zh-cn_topic_0000001667029292_p6453178176"></a><a name="zh-cn_topic_0000001667029292_p6453178176"></a>关联子查询。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p1782483613165"><a name="zh-cn_topic_0000001667029292_p1782483613165"></a><a name="zh-cn_topic_0000001667029292_p1782483613165"></a>有相关子查询导致执行性能较差。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row445312712172"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p154531476171"><a name="zh-cn_topic_0000001667029292_p154531476171"></a><a name="zh-cn_topic_0000001667029292_p154531476171"></a>27</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p735020580184"><a name="zh-cn_topic_0000001667029292_p735020580184"></a><a name="zh-cn_topic_0000001667029292_p735020580184"></a>POOR_AGGREGATION_PERFORMANCE</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p1945319731714"><a name="zh-cn_topic_0000001667029292_p1945319731714"></a><a name="zh-cn_topic_0000001667029292_p1945319731714"></a>聚合代价较大。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p14491183312313"><a name="zh-cn_topic_0000001667029292_p14491183312313"></a><a name="zh-cn_topic_0000001667029292_p14491183312313"></a>聚合性能较差进而影响SQL执行性能。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row245312713172"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p174532711173"><a name="zh-cn_topic_0000001667029292_p174532711173"></a><a name="zh-cn_topic_0000001667029292_p174532711173"></a>31</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p845317710174"><a name="zh-cn_topic_0000001667029292_p845317710174"></a><a name="zh-cn_topic_0000001667029292_p845317710174"></a>DATABASE_VIEW</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p10453167141716"><a name="zh-cn_topic_0000001667029292_p10453167141716"></a><a name="zh-cn_topic_0000001667029292_p10453167141716"></a>系统视图。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p74911333192316"><a name="zh-cn_topic_0000001667029292_p74911333192316"></a><a name="zh-cn_topic_0000001667029292_p74911333192316"></a>当前不对系统视图相关的慢SQL进行诊断，统一返回此根因。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029292_row8530948194715"><td class="cellrowborder" valign="top" width="6.838608831574835%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0000001667029292_p55301148114715"><a name="zh-cn_topic_0000001667029292_p55301148114715"></a><a name="zh-cn_topic_0000001667029292_p55301148114715"></a>32</p>
</td>
<td class="cellrowborder" valign="top" width="28.99570144587729%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0000001667029292_p253094814713"><a name="zh-cn_topic_0000001667029292_p253094814713"></a><a name="zh-cn_topic_0000001667029292_p253094814713"></a>NO_ROOT_CAUSE_FOUND</p>
</td>
<td class="cellrowborder" valign="top" width="19.33372411098085%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0000001667029292_p15531114894716"><a name="zh-cn_topic_0000001667029292_p15531114894716"></a><a name="zh-cn_topic_0000001667029292_p15531114894716"></a>没有发现根因。</p>
</td>
<td class="cellrowborder" valign="top" width="44.831965611567014%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0000001667029292_p20531148194718"><a name="zh-cn_topic_0000001667029292_p20531148194718"></a><a name="zh-cn_topic_0000001667029292_p20531148194718"></a>没有发现当前慢SQL的根因。</p>
</td>
</tr>
</tbody>
</table>

假设用户已经初始化配置文件目录confpath，则可以通过下述命令实现本特性的功能：

- 仅启动慢SQL诊断功能（慢SQL诊断根因数量由算法运行结果决定，数量不固定），启动命令如下（更多用法参考对service子命令的说明）：

    ```
    gs_dbmind service start -c confpath --only-run slow_query_diagnosis
    ```

- 用户查询慢SQL诊断历史，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis show -c confpath --instance instance --query SQL --start-time timestamps0 --end-time timestamps1
    ```

- 用户交互式诊断慢SQL，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis diagnosis -c confpath --database dbname --schema schema_name --query SQL
    ```

- 启用慢SQL诊断后台任务，首先将opengauss-exporter下的pg\_sql\_statement\_history开启，具体步骤如下：

    ```
    1、停止opengauss-exporter进程；
    2、进入dbmind/components/opengauss_exporter/yamls/statements.yml中，将该指标的status设置为enable；
    3、重启opengauss-exporter进程；
    4、将slow_query_diagnosis加入到配置文件dbmind.conf下TIMED_TASK的task中，任务之间用逗号隔离，同时该任务运行间隔由配置文件dbmind.conf下TIMED_TASK的slow_query_diagnosis_interval控制，默认120秒，该参数支持用户修改；
    5、运行 gs_dbmind service reload -c confpath 命令，启动慢SQL诊断后台任务；
    ```

- 用户手动清理历史预测结果，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis clean -c confpath --retention-days DAYS
    ```

- 停止已启动的服务，命令如下：

    ```
    gs_dbmind service stop -c confpath
    ```

## 获取帮助<a name="ZH-CN_TOPIC_0000002294398297"></a>

**模块命令行说明：**

使用如下命令查看帮助信息

```
gs_dbmind component slow_query_diagnosis --help

usage:  [-h] -c DIRECTORY [--instance INSTANCE] [--database DATABASE] [--schema SCHEMA]
        [--query SLOW_QUERY] [--start-time TIMESTAMP_IN_MICROSECONDS]
        [--end-time TIMESTAMP_IN_MICROSECONDS] [--retention-days DAYS]
        {show,clean,diagnosis}

Slow Query Diagnosis: Analyse the root cause of slow query

positional arguments:
  {show,clean,diagnosis}
                        choose a functionality to perform

optional arguments:
  -h, --help            show this help message and exit
  -c DIRECTORY, --conf DIRECTORY
                        set the directory of configuration files  
  --instance INSTANCE   Set the instance of slow query. Using in show.
  --database DATABASE   name of database
  --schema SCHEMA       schema of database
  --query SLOW_QUERY    set a slow query you want to retrieve
  --start-time TIMESTAMP_IN_MICROSECONDS
                        set the start time of a slow SQL diagnosis result to
                        be retrieved
  --end-time TIMESTAMP_IN_MICROSECONDS
                        set the end time of a slow SQL diagnosis result to be
                        retrieved
  --retention-days DAYS
                        clear historical diagnosis results and set the maximum
                        number of days to retain data
```

## 命令参考<a name="ZH-CN_TOPIC_0000002294471365"></a>

**表 1**  gs\_dbmind component slow\_query\_diagnosis 命令行说明

<a name="zh-cn_topic_0000001714948813_table99309405415"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948813_row1693034011419"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714948813_p893012401447"><a name="zh-cn_topic_0000001714948813_p893012401447"></a><a name="zh-cn_topic_0000001714948813_p893012401447"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714948813_p129305403416"><a name="zh-cn_topic_0000001714948813_p129305403416"></a><a name="zh-cn_topic_0000001714948813_p129305403416"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714948813_p693018405410"><a name="zh-cn_topic_0000001714948813_p693018405410"></a><a name="zh-cn_topic_0000001714948813_p693018405410"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948813_row5930174015412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p149307406411"><a name="zh-cn_topic_0000001714948813_p149307406411"></a><a name="zh-cn_topic_0000001714948813_p149307406411"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p179309401845"><a name="zh-cn_topic_0000001714948813_p179309401845"></a><a name="zh-cn_topic_0000001714948813_p179309401845"></a>（可选）帮助命令。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p39301240440"><a name="zh-cn_topic_0000001714948813_p39301240440"></a><a name="zh-cn_topic_0000001714948813_p39301240440"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row11910554101219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p1133111208135"><a name="zh-cn_topic_0000001714948813_p1133111208135"></a><a name="zh-cn_topic_0000001714948813_p1133111208135"></a>-c，--conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p18143163410134"><a name="zh-cn_topic_0000001714948813_p18143163410134"></a><a name="zh-cn_topic_0000001714948813_p18143163410134"></a>配置目录。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p1616065113189"><a name="zh-cn_topic_0000001714948813_p1616065113189"></a><a name="zh-cn_topic_0000001714948813_p1616065113189"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row691203544017"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p13888143916408"><a name="zh-cn_topic_0000001714948813_p13888143916408"></a><a name="zh-cn_topic_0000001714948813_p13888143916408"></a>--instance</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p4888739164010"><a name="zh-cn_topic_0000001714948813_p4888739164010"></a><a name="zh-cn_topic_0000001714948813_p4888739164010"></a>（可选）慢SQL所属实例。action为show时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p4888639154012"><a name="zh-cn_topic_0000001714948813_p4888639154012"></a><a name="zh-cn_topic_0000001714948813_p4888639154012"></a>格式为IP:PORT。样例：127.0.0.1:5432。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row10751163816401"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p128881439104017"><a name="zh-cn_topic_0000001714948813_p128881439104017"></a><a name="zh-cn_topic_0000001714948813_p128881439104017"></a>--database</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p128881839144019"><a name="zh-cn_topic_0000001714948813_p128881839144019"></a><a name="zh-cn_topic_0000001714948813_p128881839144019"></a>（可选）慢SQL关联的数据库。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p3888123911405"><a name="zh-cn_topic_0000001714948813_p3888123911405"></a><a name="zh-cn_topic_0000001714948813_p3888123911405"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row1027272717408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p12888133916405"><a name="zh-cn_topic_0000001714948813_p12888133916405"></a><a name="zh-cn_topic_0000001714948813_p12888133916405"></a>--schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p1988811395404"><a name="zh-cn_topic_0000001714948813_p1988811395404"></a><a name="zh-cn_topic_0000001714948813_p1988811395404"></a>（可选）慢SQL关联的schema，默认为public。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p3888639124014"><a name="zh-cn_topic_0000001714948813_p3888639124014"></a><a name="zh-cn_topic_0000001714948813_p3888639124014"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row1293018401245"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p5441135310139"><a name="zh-cn_topic_0000001714948813_p5441135310139"></a><a name="zh-cn_topic_0000001714948813_p5441135310139"></a>--query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p159301401846"><a name="zh-cn_topic_0000001714948813_p159301401846"></a><a name="zh-cn_topic_0000001714948813_p159301401846"></a>（可选）慢SQL文本。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p2620105261812"><a name="zh-cn_topic_0000001714948813_p2620105261812"></a><a name="zh-cn_topic_0000001714948813_p2620105261812"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p192811539157"><a name="zh-cn_topic_0000001714948813_p192811539157"></a><a name="zh-cn_topic_0000001714948813_p192811539157"></a>--start-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p1544145713182"><a name="zh-cn_topic_0000001714948813_p1544145713182"></a><a name="zh-cn_topic_0000001714948813_p1544145713182"></a>（可选）显示开始时间的时间戳，单位毫秒；或格式为 %Y-%m-%d %H:%M:%S 的日期时间。action为show时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p1095712011916"><a name="zh-cn_topic_0000001714948813_p1095712011916"></a><a name="zh-cn_topic_0000001714948813_p1095712011916"></a>正整数或日期时间格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row81421205167"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p1114219081616"><a name="zh-cn_topic_0000001714948813_p1114219081616"></a><a name="zh-cn_topic_0000001714948813_p1114219081616"></a>--end-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p32119591900"><a name="zh-cn_topic_0000001714948813_p32119591900"></a><a name="zh-cn_topic_0000001714948813_p32119591900"></a>（可选）显示结束时间的时间戳，单位毫秒；或格式为 %Y-%m-%d %H:%M:%S 的日期时间。action为show时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p4217596010"><a name="zh-cn_topic_0000001714948813_p4217596010"></a><a name="zh-cn_topic_0000001714948813_p4217596010"></a>正整数或日期时间格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p9930640443"><a name="zh-cn_topic_0000001714948813_p9930640443"></a><a name="zh-cn_topic_0000001714948813_p9930640443"></a>--retention-days</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p7930154013410"><a name="zh-cn_topic_0000001714948813_p7930154013410"></a><a name="zh-cn_topic_0000001714948813_p7930154013410"></a>（可选）清理天数及结果。action为clean时使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714948813_p1595617014197"><a name="zh-cn_topic_0000001714948813_p1595617014197"></a><a name="zh-cn_topic_0000001714948813_p1595617014197"></a>实数（当其小于等于0时，会将结果全部删除）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948813_row4360409379"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714948813_p54467115370"><a name="zh-cn_topic_0000001714948813_p54467115370"></a><a name="zh-cn_topic_0000001714948813_p54467115370"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714948813_p144462133714"><a name="zh-cn_topic_0000001714948813_p144462133714"></a><a name="zh-cn_topic_0000001714948813_p144462133714"></a>动作参数。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0000001714948813_ul13446151133719"></a><a name="zh-cn_topic_0000001714948813_ul13446151133719"></a><ul id="zh-cn_topic_0000001714948813_ul13446151133719"><li>show：结果展示。</li><li>clean：清理结果。</li><li>diagnosis：交互诊断。</li></ul>
</td>
</tr>
</tbody>
</table>

## 注意事项说明<a name="ZH-CN_TOPIC_0000002259861258"></a>

DBMind当前支持三种模式的慢SQL诊断能力，分别是：后台定时任务、命令行交互和API调用，下面对这三种方式的注意事项进行说明。

>[!NOTE]说明 
>如果没有特别指出具体使用模式，则表示该项三种模式都适用。

- 当前慢SQL诊断定时任务依赖opengauss-exporter指标采集慢SQL流水，该指标默认关闭，如果不启用该指标采集，则慢SQL诊断功能无法正常运行。启动慢SQL采集的方法是先手动将opengauss\_exporter/yamls/statements.yaml中pg\_sql\_statement\_history指标的status设置成enable，再重启opengauss-exporter进程。
- 慢SQL诊断定时任务间隔支持用户自行配置，用户需要修改配置文件dbmind.conf中TIMED\_TASK的slow\_query\_diagnosis\_interval，然后执行reload操作才能生效，命令参考[service子命令](service.md)。
- 慢SQL诊断定时任务依赖dbe\_perf.statement\_history视图，当其数据量较大时可能会查询超时，此时慢SQL后台诊断任务不会生成新的诊断结果。用户可以根据数据库状况设置该指标的超时时间timeout，以免超时时间太小不能采集到指标，具体的修改方法可以参见[Prometheus Exporter组件](prometheus_exporter_overview.md)。
- 在慢SQL诊断定时任务中，由于慢SQL流水数据源dbe\_perf.statement\_history视图中的query字段可能会出现截断，导致query不完整，此时如果没有提供执行计划则不能进行诊断。
- 慢SQL诊断定时任务的采集基于opengauss-exporter实现，服务运行时不能保证全量采集，可能会遗漏部分慢SQL数据。
- 使用慢SQL交互诊断功能时，工具基于RPC和数据采集服务获取必要的数据，因此如果RPC和数据采集服务未启动则无法诊断。
- 使用慢SQL交互诊断功能时，工具会对传入的数据库名和schema进行检测，如果数据库或schema不存在则会进行提示，不能正常进行诊断。
- 使用慢SQL诊断功能时，工具会对传入的数据库名和schema进行检测，如果其中包含非法字符则会进行提示并拒绝诊断。
- 慢SQL诊断过程需要获取诊断语句的执行计划，在调用慢SQL诊断API接口时建议传递执行计划（对应query\_plan参数），如果前端没有传递执行计划，那么工具会主动获取执行计划内容，此时需要确保执行诊断的用户具有获取query执行计划的权限。另外，在获取执行计划过程中，如果SQL属于归一化SQL，那么工具会基于PBE方式获取执行计划，获取过程中如果由于语法结构不支持、SQL截断等原因导致获取失败则会诊断失败；如果SQL不属于归一化SQL，那么SQL截断时也不能正常诊断。
- 使用慢SQL诊断API接口时，如果用户传入的db\_name不存在则无法诊断，另外当工具在传入的schema\_name下获取执行计划失败时会自动在其他schema下尝试获取执行计划直到成功获取为止，否则诊断失败。
- 当DBMind纳管多个实例时，使用慢SQL交互诊断功能时会提示用户选择哪一个实例，然后再进行诊断动作。
- 当前慢SQL诊断只支持DML语句。
- 慢SQL诊断每次只能诊断一条语句，如果输入多条则只会对第一条进行诊断。
- 当前不对系统视图根因进行诊断，根因统一为DATABASE\_VIEW。
- 慢SQL诊断过程中，如果用户不传schema信息，则schema默认为public。
- 由于reprocessing-exporter在采集磁盘占用率时只支持EXT和XFS文件系统，因此当非上述文件系统磁盘超过阈值时不会出现磁盘空间不足的根因。
- 如果需要诊断LOCK\_CONTENTION或WAIT\_EVENT根因，需要使用API调用的方式，并传入debug\_query\_id参数。
