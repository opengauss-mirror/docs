# PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID<a name="EN-US_TOPIC_0289900808"></a>

**PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID**  displays resource usage of all users. Only administrators can query this view. This view is valid only when  [use\_workload\_manager](en-us_topic_0289900033.md#en-us_topic_0283137479_en-us_topic_0237124729_en-us_topic_0059777791_s9608d330c6a14d2cbd6ae75493437820)  is set to  **on**.

**Table  1**  PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID columns

<a name="en-us_topic_0283136771_en-us_topic_0237122540_table159891089334"></a>
<table><thead align="left"><tr id="en-us_topic_0283136771_en-us_topic_0237122540_row161929919332"><th class="cellrowborder" valign="top" width="21.494949494949495%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136771_en-us_topic_0237122540_p81928915336"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p81928915336"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p81928915336"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="22.67676767676768%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136771_en-us_topic_0237122540_p17192149133315"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p17192149133315"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p17192149133315"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="55.82828282828282%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136771_en-us_topic_0237122540_p3193179153319"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p3193179153319"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p3193179153319"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136771_en-us_topic_0237122540_row2019310973312"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p219314943319"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p219314943319"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p219314943319"></a>userid</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p15193119113310"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p15193119113310"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p15193119113310"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p0193129173318"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p0193129173318"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p0193129173318"></a>User ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row201931890334"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p419317910337"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p419317910337"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p419317910337"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p1119319163318"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1119319163318"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1119319163318"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p81934983311"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p81934983311"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p81934983311"></a>Used memory, in MB</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row191936913332"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p101931398337"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p101931398337"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p101931398337"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p1519409183319"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1519409183319"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1519409183319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p1819412903318"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1819412903318"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1819412903318"></a>Available memory, in MB. The value <strong id="en-us_topic_0283136771_en-us_topic_0237122540_b1111715335516"><a name="en-us_topic_0283136771_en-us_topic_0237122540_b1111715335516"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_b1111715335516"></a>0</strong> indicates that the available memory is not limited and depends on the maximum memory available in the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row131949914331"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p719469153316"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p719469153316"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p719469153316"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p2356262115"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p2356262115"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p2356262115"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p2194129103315"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p2194129103315"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p2194129103315"></a>Number of CPU cores in use</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row16194394338"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p111941993334"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p111941993334"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p111941993334"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p31941090334"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p31941090334"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p31941090334"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p11941298333"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p11941298333"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p11941298333"></a>Total number of CPU cores of the Cgroup associated with the user on the node</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row31941095334"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p14195196331"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p14195196331"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p14195196331"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p319517993315"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p319517993315"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p319517993315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p181955918331"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p181955918331"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p181955918331"></a>Used storage space, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row1195109143315"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p121954917336"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p121954917336"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p121954917336"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p119549173318"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p119549173318"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p119549173318"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p21951892337"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p21951892337"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p21951892337"></a>Available storage space, in KB. The value <strong id="en-us_topic_0283136771_en-us_topic_0237122540_b11216365518"><a name="en-us_topic_0283136771_en-us_topic_0237122540_b11216365518"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_b11216365518"></a>-1</strong> indicates that the space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row3195894337"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p181951791334"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p181951791334"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p181951791334"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p21954919338"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p21954919338"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p21954919338"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p61951093331"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p61951093331"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p61951093331"></a>Used temporary storage space, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row1519616963319"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p119610911330"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p119610911330"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p119610911330"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p1319649123316"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1319649123316"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1319649123316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p319659103319"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p319659103319"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p319659103319"></a>Total available temporary space, in KB. The value <strong id="en-us_topic_0283136771_en-us_topic_0237122540_b17212198104116"><a name="en-us_topic_0283136771_en-us_topic_0237122540_b17212198104116"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_b17212198104116"></a>-1</strong> indicates that the space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row181968983316"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p121966903314"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p121966903314"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p121966903314"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p1919620914333"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1919620914333"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p1919620914333"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p171961953314"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p171961953314"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p171961953314"></a>Used disk space for spilling, in KB</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_en-us_topic_0237122540_row18196199153319"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p619679173318"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p619679173318"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p619679173318"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p6196092338"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p6196092338"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p6196092338"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_en-us_topic_0237122540_p719718919330"><a name="en-us_topic_0283136771_en-us_topic_0237122540_p719718919330"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_p719718919330"></a>Total available disk space for spilling, in KB. The value <strong id="en-us_topic_0283136771_en-us_topic_0237122540_b1830362815410"><a name="en-us_topic_0283136771_en-us_topic_0237122540_b1830362815410"></a><a name="en-us_topic_0283136771_en-us_topic_0237122540_b1830362815410"></a>-1</strong> indicates that the space is not limited.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_row131113597514"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p663834113223"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p663834113223"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p663834113223"></a>read_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p863819418229"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p863819418229"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p863819418229"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_p18761561877"><a name="en-us_topic_0283136771_p18761561877"></a><a name="en-us_topic_0283136771_p18761561877"></a>Number of bytes read during the monitoring interval, in kilobytes/s.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_row1215111115615"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p1158617212276"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p1158617212276"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p1158617212276"></a>write_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p115861421192712"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p115861421192712"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p115861421192712"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_p127912299714"><a name="en-us_topic_0283136771_p127912299714"></a><a name="en-us_topic_0283136771_p127912299714"></a>Number of bytes written during the monitoring interval, in kilobytes/s.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_row11753411469"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p42019182917"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p42019182917"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p42019182917"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p6201181172920"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p6201181172920"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p6201181172920"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_p557694815615"><a name="en-us_topic_0283136771_p557694815615"></a><a name="en-us_topic_0283136771_p557694815615"></a>Number of read times during the monitoring interval.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_row6458171310612"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p16460125819296"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p16460125819296"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p16460125819296"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p1046085882917"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p1046085882917"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p1046085882917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_p44281511585"><a name="en-us_topic_0283136771_p44281511585"></a><a name="en-us_topic_0283136771_p44281511585"></a>Number of write times during the monitoring interval.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_row144211242612"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p1722844173115"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p1722844173115"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p1722844173115"></a>read_speed</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p322844153110"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p322844153110"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p322844153110"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_p194971353561"><a name="en-us_topic_0283136771_p194971353561"></a><a name="en-us_topic_0283136771_p194971353561"></a>Read speed, in bytes/s.</p>
</td>
</tr>
<tr id="en-us_topic_0283136771_row1128118713615"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p4910083314"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p4910083314"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p4910083314"></a>write_speed</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136771_en-us_topic_0237122471_p995073313"><a name="en-us_topic_0283136771_en-us_topic_0237122471_p995073313"></a><a name="en-us_topic_0283136771_en-us_topic_0237122471_p995073313"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136771_p1081554014816"><a name="en-us_topic_0283136771_p1081554014816"></a><a name="en-us_topic_0283136771_p1081554014816"></a>Write speed, in bytes/s.</p>
</td>
</tr>
</tbody>
</table>

