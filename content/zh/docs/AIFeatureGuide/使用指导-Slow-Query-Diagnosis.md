# 使用指导<a name="ZH-CN_TOPIC_0000002259758152"></a>

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

-   仅启动慢SQL诊断功能（慢SQL诊断根因数量由算法运行结果决定，数量不固定），启动命令如下（更多用法参考对service子命令的说明）：

    ```
    gs_dbmind service start -c confpath --only-run slow_query_diagnosis
    ```

-   用户查询慢SQL诊断历史，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis show -c confpath --instance instance --query SQL --start-time timestamps0 --end-time timestamps1
    ```

-   用户交互式诊断慢SQL，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis diagnosis -c confpath --database dbname --schema schema_name --query SQL
    ```

-   启用慢SQL诊断后台任务，首先将opengauss-exporter下的pg\_sql\_statement\_history开启，具体步骤如下：

    ```
    1、停止opengauss-exporter进程；
    2、进入dbmind/components/opengauss_exporter/yamls/statements.yml中，将该指标的status设置为enable；
    3、重启opengauss-exporter进程；
    4、将slow_query_diagnosis加入到配置文件dbmind.conf下TIMED_TASK的task中，任务之间用逗号隔离，同时该任务运行间隔由配置文件dbmind.conf下TIMED_TASK的slow_query_diagnosis_interval控制，默认120秒，该参数支持用户修改；
    5、运行 gs_dbmind service reload -c confpath 命令，启动慢SQL诊断后台任务；
    ```

-   用户手动清理历史预测结果，命令如下：

    ```
    gs_dbmind component slow_query_diagnosis clean -c confpath --retention-days DAYS
    ```

-   停止已启动的服务，命令如下：

    ```
    gs_dbmind service stop -c confpath
    ```

