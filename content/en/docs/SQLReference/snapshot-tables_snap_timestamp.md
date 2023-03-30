# SNAPSHOT.TABLES\_SNAP\_TIMESTAMP<a name="EN-US_TOPIC_0245374865"></a>

**TABLES\_SNAP\_TIMESTAMP**  records the start time and end time of data collection, as well as corresponding databases, and table objects for all stored WDR snapshots.

**Table  1**  TABLES\_SNAP\_TIMESTAMP attributes

<a name="en-us_topic_0237122761_table1849198112610"></a>
<table><thead align="left"><tr id="en-us_topic_0237122761_row1049111811261"><th class="cellrowborder" valign="top" width="17.16171617161716%" id="mcps1.2.5.1.1"><p id="en-us_topic_0237122761_p124917872618"><a name="en-us_topic_0237122761_p124917872618"></a><a name="en-us_topic_0237122761_p124917872618"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.831483148314831%" id="mcps1.2.5.1.2"><p id="en-us_topic_0237122761_p1742412117418"><a name="en-us_topic_0237122761_p1742412117418"></a><a name="en-us_topic_0237122761_p1742412117418"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="31.863186318631865%" id="mcps1.2.5.1.3"><p id="en-us_topic_0237122761_p36483315516"><a name="en-us_topic_0237122761_p36483315516"></a><a name="en-us_topic_0237122761_p36483315516"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="36.14361436143614%" id="mcps1.2.5.1.4"><p id="en-us_topic_0237122761_p349117862618"><a name="en-us_topic_0237122761_p349117862618"></a><a name="en-us_topic_0237122761_p349117862618"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122761_row549114817269"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122761_p184911988263"><a name="en-us_topic_0237122761_p184911988263"></a><a name="en-us_topic_0237122761_p184911988263"></a>snapshot_id</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122761_p1342513113418"><a name="en-us_topic_0237122761_p1342513113418"></a><a name="en-us_topic_0237122761_p1342513113418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122761_p76481311059"><a name="en-us_topic_0237122761_p76481311059"></a><a name="en-us_topic_0237122761_p76481311059"></a>WDR snapshot ID</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122761_p749112892611"><a name="en-us_topic_0237122761_p749112892611"></a><a name="en-us_topic_0237122761_p749112892611"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0237122761_row1749268132613"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122761_p4492118192619"><a name="en-us_topic_0237122761_p4492118192619"></a><a name="en-us_topic_0237122761_p4492118192619"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122761_p204256118415"><a name="en-us_topic_0237122761_p204256118415"></a><a name="en-us_topic_0237122761_p204256118415"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122761_p96484311356"><a name="en-us_topic_0237122761_p96484311356"></a><a name="en-us_topic_0237122761_p96484311356"></a>Database corresponding to a WDR snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122761_p7492148142613"><a name="en-us_topic_0237122761_p7492148142613"></a><a name="en-us_topic_0237122761_p7492148142613"></a>tpcc1000</p>
</td>
</tr>
<tr id="en-us_topic_0237122761_row1749210872610"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122761_p249248152612"><a name="en-us_topic_0237122761_p249248152612"></a><a name="en-us_topic_0237122761_p249248152612"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122761_p194251111646"><a name="en-us_topic_0237122761_p194251111646"></a><a name="en-us_topic_0237122761_p194251111646"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122761_p76480311155"><a name="en-us_topic_0237122761_p76480311155"></a><a name="en-us_topic_0237122761_p76480311155"></a>Table corresponding to a WDR snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122761_p10492108162618"><a name="en-us_topic_0237122761_p10492108162618"></a><a name="en-us_topic_0237122761_p10492108162618"></a>snap_xc_statio_all_indexes</p>
</td>
</tr>
<tr id="en-us_topic_0237122761_row10492282267"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122761_p1149211817260"><a name="en-us_topic_0237122761_p1149211817260"></a><a name="en-us_topic_0237122761_p1149211817260"></a>start_ts</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122761_p04251911743"><a name="en-us_topic_0237122761_p04251911743"></a><a name="en-us_topic_0237122761_p04251911743"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122761_p564817311453"><a name="en-us_topic_0237122761_p564817311453"></a><a name="en-us_topic_0237122761_p564817311453"></a>Start time of a WDR snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122761_p24923842612"><a name="en-us_topic_0237122761_p24923842612"></a><a name="en-us_topic_0237122761_p24923842612"></a>2019-12-28 17:11:27.425849+08</p>
</td>
</tr>
<tr id="en-us_topic_0237122761_row114928817262"><td class="cellrowborder" valign="top" width="17.16171617161716%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122761_p12492686261"><a name="en-us_topic_0237122761_p12492686261"></a><a name="en-us_topic_0237122761_p12492686261"></a>end_ts</p>
</td>
<td class="cellrowborder" valign="top" width="14.831483148314831%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122761_p204251918412"><a name="en-us_topic_0237122761_p204251918412"></a><a name="en-us_topic_0237122761_p204251918412"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.863186318631865%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122761_p1064811311252"><a name="en-us_topic_0237122761_p1064811311252"></a><a name="en-us_topic_0237122761_p1064811311252"></a>End time of a WDR snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="36.14361436143614%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122761_p349218812262"><a name="en-us_topic_0237122761_p349218812262"></a><a name="en-us_topic_0237122761_p349218812262"></a>2019-12-28 17:11:27.707398+08</p>
</td>
</tr>
</tbody>
</table>
