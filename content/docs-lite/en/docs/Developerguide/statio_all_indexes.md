# STATIO\_ALL\_INDEXES<a name="EN-US_TOPIC_0289899828"></a>

**STATIO\_ALL\_INDEXES**  contains one row for each index in the current database, showing I/O statistics about specific indexes.

**Table  1**  STATIO\_ALL\_INDEXES columns

<a name="en-us_topic_0283137576_en-us_topic_0237122690_table47917368242"></a>
<table><thead align="left"><tr id="en-us_topic_0283137576_en-us_topic_0237122690_row88781236172410"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137576_en-us_topic_0237122690_p1387819368249"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1387819368249"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1387819368249"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137576_en-us_topic_0237122690_p887853622413"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p887853622413"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p887853622413"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137576_en-us_topic_0237122690_p118789364247"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p118789364247"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p118789364247"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137576_en-us_topic_0237122690_row1587953613248"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p68791836142410"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p68791836142410"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p68791836142410"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p1287919366243"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1287919366243"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1287919366243"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p168794368245"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p168794368245"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p168794368245"></a>OID of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0283137576_en-us_topic_0237122690_row687912366247"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p128801536152420"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p128801536152420"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p128801536152420"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p14880173611248"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p14880173611248"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p14880173611248"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p8880113692410"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p8880113692410"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p8880113692410"></a>OID of the index</p>
</td>
</tr>
<tr id="en-us_topic_0283137576_en-us_topic_0237122690_row178807367247"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p0880113611246"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p0880113611246"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p0880113611246"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p1188003617241"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1188003617241"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1188003617241"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p98811336182419"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p98811336182419"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p98811336182419"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0283137576_en-us_topic_0237122690_row3881183642412"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p188103652417"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p188103652417"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p188103652417"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p8881236142417"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p8881236142417"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p8881236142417"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p1788153619243"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1788153619243"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1788153619243"></a>Name of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0283137576_en-us_topic_0237122690_row6881133642412"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p1288113610249"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1288113610249"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1288113610249"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p3881193614247"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p3881193614247"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p3881193614247"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p12881123602413"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p12881123602413"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p12881123602413"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0283137576_en-us_topic_0237122690_row10881163619244"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p1988220363240"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1988220363240"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p1988220363240"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p0882236112414"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p0882236112414"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p0882236112414"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p7882136112415"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p7882136112415"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p7882136112415"></a>Number of disk blocks read from the index</p>
</td>
</tr>
<tr id="en-us_topic_0283137576_en-us_topic_0237122690_row19882536112410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p488233616243"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p488233616243"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p488233616243"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p88821936202418"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p88821936202418"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p88821936202418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137576_en-us_topic_0237122690_p188218369244"><a name="en-us_topic_0283137576_en-us_topic_0237122690_p188218369244"></a><a name="en-us_topic_0283137576_en-us_topic_0237122690_p188218369244"></a>Number of cache hits in the index</p>
</td>
</tr>
</tbody>
</table>

