# SNAPSHOT.SNAPSHOT<a name="EN-US_TOPIC_0289900058"></a>

**SNAPSHOT**  records the index information, start time, and end time of WDR snapshots stored in the current system. The result can be queried only in the system database but cannot be queried in the user database.

**Table  1**  SNAPSHOT attributes

<a name="en-us_topic_0283137461_en-us_topic_0237122760_table1849198112610"></a>
<table><thead align="left"><tr id="en-us_topic_0283137461_en-us_topic_0237122760_row1049111811261"><th class="cellrowborder" valign="top" width="17.16171617161716%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137461_en-us_topic_0237122760_p124917872618"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p124917872618"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p124917872618"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.831483148314831%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137461_en-us_topic_0237122760_p1742412117418"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p1742412117418"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p1742412117418"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="31.863186318631865%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137461_en-us_topic_0237122760_p36483315516"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p36483315516"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p36483315516"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="36.14361436143614%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137461_en-us_topic_0237122760_p349117862618"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p349117862618"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p349117862618"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137461_en-us_topic_0237122760_row549114817269"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p19772193013920"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p19772193013920"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p19772193013920"></a>snapshot_id</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p1342513113418"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p1342513113418"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p1342513113418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p76481311059"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p76481311059"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p76481311059"></a>WDR snapshot ID</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p69119379920"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p69119379920"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p69119379920"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0283137461_en-us_topic_0237122760_row1749268132613"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p167721330999"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p167721330999"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p167721330999"></a>start_ts</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p204256118415"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p204256118415"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p204256118415"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p96484311356"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p96484311356"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p96484311356"></a>Start time of a WDR snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p891119376918"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p891119376918"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p891119376918"></a>2019-12-28 17:11:27.423742+08</p>
</td>
</tr>
<tr id="en-us_topic_0283137461_en-us_topic_0237122760_row1749210872610"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p197729301894"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p197729301894"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p197729301894"></a>end_ts</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p194251111646"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p194251111646"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p194251111646"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p76480311155"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p76480311155"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p76480311155"></a>End time of a WDR snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137461_en-us_topic_0237122760_p99113371791"><a name="en-us_topic_0283137461_en-us_topic_0237122760_p99113371791"></a><a name="en-us_topic_0283137461_en-us_topic_0237122760_p99113371791"></a>2019-12-28 17:11:43.67726+08</p>
</td>
</tr>
</tbody>
</table>

