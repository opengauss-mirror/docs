# STAT\_XACT\_ALL\_TABLES<a name="EN-US_TOPIC_0289900464"></a>

**STAT\_XACT\_ALL\_TABLES**  displays transaction status information about all ordinary tables and TOAST tables in the current namespace.

**Table  1**  STAT\_XACT\_ALL\_TABLES columns

<a name="en-us_topic_0283137631_en-us_topic_0237122600_table94771040185819"></a>
<table><thead align="left"><tr id="en-us_topic_0283137631_en-us_topic_0237122600_row196011340155813"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137631_en-us_topic_0237122600_p16601104013588"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16601104013588"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16601104013588"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1460244020588"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1460244020588"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1460244020588"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137631_en-us_topic_0237122600_p660234019587"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p660234019587"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p660234019587"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137631_en-us_topic_0237122600_row1860254075814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p11603340125817"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p11603340125817"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p11603340125817"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p460344016583"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p460344016583"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p460344016583"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p3603114005815"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p3603114005815"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p3603114005815"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row16031340185817"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p46031940195818"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p46031940195818"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p46031940195818"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p9603154010587"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p9603154010587"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p9603154010587"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p960413406586"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p960413406586"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p960413406586"></a>Name of the schema that the table is in</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row860417407581"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p56042402580"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p56042402580"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p56042402580"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p56041840195815"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p56041840195815"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p56041840195815"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p166041440115815"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p166041440115815"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p166041440115815"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row16604940175819"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1660444025820"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1660444025820"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1660444025820"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p560510406582"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p560510406582"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p560510406582"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1360564011586"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1360564011586"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1360564011586"></a>Number of sequential scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row2605540105816"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p16605240155819"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16605240155819"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16605240155819"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p2605940205813"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p2605940205813"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p2605940205813"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p660517401584"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p660517401584"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p660517401584"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row18605740145819"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1460520401582"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1460520401582"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1460520401582"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p17606164017587"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p17606164017587"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p17606164017587"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1160684025813"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1160684025813"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1160684025813"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row9606114055813"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p160619402588"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p160619402588"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p160619402588"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p06069408582"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p06069408582"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p06069408582"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p196062040115819"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p196062040115819"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p196062040115819"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row20606154015817"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p16606204014587"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16606204014587"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16606204014587"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p4606154025818"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p4606154025818"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p4606154025818"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p186079408584"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p186079408584"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p186079408584"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row13607940105811"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p860704085812"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p860704085812"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p860704085812"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1607174045812"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1607174045812"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1607174045812"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p196071440105814"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p196071440105814"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p196071440105814"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row106089404588"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1960824025818"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1960824025818"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1960824025818"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p760894013588"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p760894013588"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p760894013588"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p360834018583"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p360834018583"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p360834018583"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0283137631_en-us_topic_0237122600_row16608740175817"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p16081740145819"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16081740145819"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p16081740145819"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p160913405588"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p160913405588"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p160913405588"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137631_en-us_topic_0237122600_p1060994010581"><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1060994010581"></a><a name="en-us_topic_0283137631_en-us_topic_0237122600_p1060994010581"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
</tbody>
</table>

