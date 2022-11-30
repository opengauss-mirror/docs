# SNAPSHOT.SNAPSHOT<a name="ZH-CN_TOPIC_0245374864"></a>

SNAPSHOT表记录当前系统中存储的WDR快照数据的索引信息、开始时间和结束时间。只能在系统库中查询到结果，在用户库中无法查询。

**表 1**  SNAPSHOT表属性

<a name="zh-cn_topic_0237122760_table1849198112610"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122760_row1049111811261"><th class="cellrowborder" valign="top" width="17.16171617161716%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0237122760_p124917872618"><a name="zh-cn_topic_0237122760_p124917872618"></a><a name="zh-cn_topic_0237122760_p124917872618"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.831483148314831%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0237122760_p1742412117418"><a name="zh-cn_topic_0237122760_p1742412117418"></a><a name="zh-cn_topic_0237122760_p1742412117418"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="31.863186318631865%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0237122760_p36483315516"><a name="zh-cn_topic_0237122760_p36483315516"></a><a name="zh-cn_topic_0237122760_p36483315516"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="36.14361436143614%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0237122760_p349117862618"><a name="zh-cn_topic_0237122760_p349117862618"></a><a name="zh-cn_topic_0237122760_p349117862618"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122760_row549114817269"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237122760_p19772193013920"><a name="zh-cn_topic_0237122760_p19772193013920"></a><a name="zh-cn_topic_0237122760_p19772193013920"></a>snapshot_id</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237122760_p1342513113418"><a name="zh-cn_topic_0237122760_p1342513113418"></a><a name="zh-cn_topic_0237122760_p1342513113418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237122760_p76481311059"><a name="zh-cn_topic_0237122760_p76481311059"></a><a name="zh-cn_topic_0237122760_p76481311059"></a>WDR快照序号。</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237122760_p69119379920"><a name="zh-cn_topic_0237122760_p69119379920"></a><a name="zh-cn_topic_0237122760_p69119379920"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122760_row1749268132613"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237122760_p167721330999"><a name="zh-cn_topic_0237122760_p167721330999"></a><a name="zh-cn_topic_0237122760_p167721330999"></a>start_ts</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237122760_p204256118415"><a name="zh-cn_topic_0237122760_p204256118415"></a><a name="zh-cn_topic_0237122760_p204256118415"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237122760_p96484311356"><a name="zh-cn_topic_0237122760_p96484311356"></a><a name="zh-cn_topic_0237122760_p96484311356"></a>WDR快照的开始时间。</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237122760_p891119376918"><a name="zh-cn_topic_0237122760_p891119376918"></a><a name="zh-cn_topic_0237122760_p891119376918"></a>2019-12-28 17:11:27.423742+08</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122760_row1749210872610"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237122760_p197729301894"><a name="zh-cn_topic_0237122760_p197729301894"></a><a name="zh-cn_topic_0237122760_p197729301894"></a>end_ts</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237122760_p194251111646"><a name="zh-cn_topic_0237122760_p194251111646"></a><a name="zh-cn_topic_0237122760_p194251111646"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237122760_p76480311155"><a name="zh-cn_topic_0237122760_p76480311155"></a><a name="zh-cn_topic_0237122760_p76480311155"></a>WDR快照的结束时间。</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237122760_p99113371791"><a name="zh-cn_topic_0237122760_p99113371791"></a><a name="zh-cn_topic_0237122760_p99113371791"></a>2019-12-28 17:11:43.67726+08</p>
</td>
</tr>
</tbody>
</table>
