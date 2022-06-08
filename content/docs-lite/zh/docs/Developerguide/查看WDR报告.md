# 查看WDR报告<a name="ZH-CN_TOPIC_0000001215195224"></a>

openGauss数据库WDR报表主要内容如下表所示。

**表 1**  WDR报表主要内容

<a name="table393925013136"></a>
<table><thead align="left"><tr id="row993915015139"><th class="cellrowborder" valign="top" width="25.130000000000003%" id="mcps1.2.3.1.1"><p id="p95769156115"><a name="p95769156115"></a><a name="p95769156115"></a>项目</p>
</th>
<th class="cellrowborder" valign="top" width="74.87%" id="mcps1.2.3.1.2"><p id="p11576141512113"><a name="p11576141512113"></a><a name="p11576141512113"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row493910504134"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p135718501312"><a name="p135718501312"></a><a name="p135718501312"></a><a href="Database-Stat.md">Database Stat</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul1390984091817"></a><a name="ul1390984091817"></a><ul id="ul1390984091817"><li>数据库维度性能统计信息：事务，读写，行活动，写冲突，死锁等。</li><li>数据库范围报表，仅cluster模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row2093975011311"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p135731021"><a name="p135731021"></a><a name="p135731021"></a><a href="Load-Profile.md">Load Profile</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul18207141181919"></a><a name="ul18207141181919"></a><ul id="ul18207141181919"><li>数据库维度的性能统计信息：CPU时间，DB时间，逻辑读/物理读，IO性能，登入登出，负载强度，负载性能表现等。</li><li>数据库范围报表，仅cluster模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row14939450101319"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p13524917629"><a name="p13524917629"></a><a name="p13524917629"></a><a href="Instance-Efficiency-Percentages.md">Instance Efficiency Percentages</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul16824181471911"></a><a name="ul16824181471911"></a><ul id="ul16824181471911"><li>数据库级或者节点缓冲命中率。</li><li>数据库、节点范围报表，cluster模式和node模式下均可查看此报表。</li></ul>
</td>
</tr>
<tr id="row7187450143319"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p177481629821"><a name="p177481629821"></a><a name="p177481629821"></a><a href="Top-10-Events-by-Total-Wait-Time.md">Top 10 Events by Total Wait Time</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul12361168192018"></a><a name="ul12361168192018"></a><ul id="ul12361168192018"><li>最消耗时间的事件。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row8940250181315"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p898917481218"><a name="p898917481218"></a><a name="p898917481218"></a><a href="Wait-Classes-by-Total-Wait-Time.md">Wait Classes by Total Wait Time</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul9162210192018"></a><a name="ul9162210192018"></a><ul id="ul9162210192018"><li>最消耗时间的等待时间分类。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row159402050151318"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p6930825312"><a name="p6930825312"></a><a name="p6930825312"></a><a href="Host-CPU.md">Host CPU</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul6732512112017"></a><a name="ul6732512112017"></a><ul id="ul6732512112017"><li>主机CPU消耗。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row17551185391511"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p1315310231485"><a name="p1315310231485"></a><a name="p1315310231485"></a><a href="IO-Profile.md">IO Profile</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul101821751121920"></a><a name="ul101821751121920"></a><ul id="ul101821751121920"><li>数据库或者节点维度的IO的使用情况。</li><li>数据库、节点范围报表，cluster模式和node模式下均可查看此报表。</li></ul>
</td>
</tr>
<tr id="row1212013312166"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p7991716336"><a name="p7991716336"></a><a name="p7991716336"></a><a href="Memory-Statistics.md">Memory Statistics</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul4459131414205"></a><a name="ul4459131414205"></a><ul id="ul4459131414205"><li>内核内存使用分布。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row1213317120167"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p1316142615558"><a name="p1316142615558"></a><a name="p1316142615558"></a><a href="Time-Model.md">Time Model</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul16141716192014"></a><a name="ul16141716192014"></a><ul id="ul16141716192014"><li>节点范围的语句的时间分布信息。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row849110591151"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p148180593320"><a name="p148180593320"></a><a name="p148180593320"></a><a href="SQL-Statistics.md">SQL Statistics</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul275315279205"></a><a name="ul275315279205"></a><ul id="ul275315279205"><li>SQL语句各个维度性能统计：端到端时间，行活动，缓存命中，CPU消耗，时间消耗细分。</li><li>数据库、节点范围报表，cluster模式和node模式下均可查看此报表。</li></ul>
</td>
</tr>
<tr id="row25971658162"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p469710321319"><a name="p469710321319"></a><a name="p469710321319"></a><a href="Wait-Events-26.md">Wait Events</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul16467171762013"></a><a name="ul16467171762013"></a><ul id="ul16467171762013"><li>节点级别的等待事件的统计信息。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row84391355171517"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p4217934665"><a name="p4217934665"></a><a name="p4217934665"></a><a href="Cache-IO-Stats.md">Cache IO Stats</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul1952991992018"></a><a name="ul1952991992018"></a><ul id="ul1952991992018"><li>用户的表、索引的IO的统计信息。</li><li>数据库、节点范围报表，cluster模式和node模式下均可查看此报表。</li></ul>
</td>
</tr>
<tr id="row206181557111517"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p136841836962"><a name="p136841836962"></a><a name="p136841836962"></a><a href="Utility-status.md">Utility status</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul08921320182014"></a><a name="ul08921320182014"></a><ul id="ul08921320182014"><li>复制槽和后台checkpoint的状态信息。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row156411451131512"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p12651331239"><a name="p12651331239"></a><a name="p12651331239"></a><a href="Object-stats.md">Object stats</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul8257222112020"></a><a name="ul8257222112020"></a><ul id="ul8257222112020"><li>表、索引维度的性能统计信息。</li><li>数据库、节点范围报表，cluster模式和node模式下均可查看此报表。</li></ul>
</td>
</tr>
<tr id="row8845174912158"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p14537204613311"><a name="p14537204613311"></a><a name="p14537204613311"></a><a href="Configuration-settings.md">Configuration settings</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul168342610201"></a><a name="ul168342610201"></a><ul id="ul168342610201"><li>节点配置。</li><li>节点范围报表，仅node模式下可查看此报表。</li></ul>
</td>
</tr>
<tr id="row4940165081318"><td class="cellrowborder" valign="top" width="25.130000000000003%" headers="mcps1.2.3.1.1 "><p id="p15283141442"><a name="p15283141442"></a><a name="p15283141442"></a><a href="SQL-Detail.md">SQL Detail</a></p>
</td>
<td class="cellrowborder" valign="top" width="74.87%" headers="mcps1.2.3.1.2 "><a name="ul0524829142012"></a><a name="ul0524829142012"></a><ul id="ul0524829142012"><li>SQL语句文本详情。</li><li>数据库、节点范围报表，cluster模式和node模式下均可查看此报表。</li></ul>
</td>
</tr>
</tbody>
</table>

-   **[Database Stat](Database-Stat.md)**  

-   **[Load Profile](Load-Profile.md)**  

-   **[Instance Efficiency Percentages](Instance-Efficiency-Percentages.md)**  

-   **[Top 10 Events by Total Wait Time](Top-10-Events-by-Total-Wait-Time.md)**  

-   **[Wait Classes by Total Wait Time](Wait-Classes-by-Total-Wait-Time.md)**  

-   **[Host CPU](Host-CPU.md)**  

-   **[IO Profile](IO-Profile.md)**  

-   **[Memory Statistics](Memory-Statistics.md)**  

-   **[Time Model](Time-Model.md)**  

-   **[SQL Statistics](SQL-Statistics.md)**  

-   **[Wait Events](Wait-Events-26.md)**  

-   **[Cache IO Stats](Cache-IO-Stats.md)**  

-   **[Utility status](Utility-status.md)**  

-   **[Object stats](Object-stats.md)**  

-   **[Configuration settings](Configuration-settings.md)**  

-   **[SQL Detail](SQL-Detail.md)**  


