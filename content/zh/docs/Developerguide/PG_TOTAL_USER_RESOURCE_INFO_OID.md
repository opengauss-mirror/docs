# PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID<a name="ZH-CN_TOPIC_0242386067"></a>

PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID视图显示所有用户资源使用情况，需要使用管理员用户进行查询。此视图在参数[use\_workload\_manager](负载管理.md#zh-cn_topic_0237124729_zh-cn_topic_0059777791_s9608d330c6a14d2cbd6ae75493437820)为on时才有效。

**表 1**  PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID字段

<a name="zh-cn_topic_0237122540_table159891089334"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122540_row161929919332"><th class="cellrowborder" valign="top" width="21.494949494949495%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122540_p81928915336"><a name="zh-cn_topic_0237122540_p81928915336"></a><a name="zh-cn_topic_0237122540_p81928915336"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="22.67676767676768%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122540_p17192149133315"><a name="zh-cn_topic_0237122540_p17192149133315"></a><a name="zh-cn_topic_0237122540_p17192149133315"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="55.82828282828282%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122540_p3193179153319"><a name="zh-cn_topic_0237122540_p3193179153319"></a><a name="zh-cn_topic_0237122540_p3193179153319"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122540_row2019310973312"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p219314943319"><a name="zh-cn_topic_0237122540_p219314943319"></a><a name="zh-cn_topic_0237122540_p219314943319"></a>userid</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p15193119113310"><a name="zh-cn_topic_0237122540_p15193119113310"></a><a name="zh-cn_topic_0237122540_p15193119113310"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p0193129173318"><a name="zh-cn_topic_0237122540_p0193129173318"></a><a name="zh-cn_topic_0237122540_p0193129173318"></a>用户ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row201931890334"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p419317910337"><a name="zh-cn_topic_0237122540_p419317910337"></a><a name="zh-cn_topic_0237122540_p419317910337"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p1119319163318"><a name="zh-cn_topic_0237122540_p1119319163318"></a><a name="zh-cn_topic_0237122540_p1119319163318"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p81934983311"><a name="zh-cn_topic_0237122540_p81934983311"></a><a name="zh-cn_topic_0237122540_p81934983311"></a>正在使用的内存大小，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row191936913332"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p101931398337"><a name="zh-cn_topic_0237122540_p101931398337"></a><a name="zh-cn_topic_0237122540_p101931398337"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p1519409183319"><a name="zh-cn_topic_0237122540_p1519409183319"></a><a name="zh-cn_topic_0237122540_p1519409183319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p1819412903318"><a name="zh-cn_topic_0237122540_p1819412903318"></a><a name="zh-cn_topic_0237122540_p1819412903318"></a>可以使用的内存大小，单位MB。值为0表示未限制最大可用内存，其限制取决于数据库最大可用内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row131949914331"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p719469153316"><a name="zh-cn_topic_0237122540_p719469153316"></a><a name="zh-cn_topic_0237122540_p719469153316"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p2356262115"><a name="zh-cn_topic_0237122540_p2356262115"></a><a name="zh-cn_topic_0237122540_p2356262115"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p2194129103315"><a name="zh-cn_topic_0237122540_p2194129103315"></a><a name="zh-cn_topic_0237122540_p2194129103315"></a>正在使用的CPU核数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row16194394338"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p111941993334"><a name="zh-cn_topic_0237122540_p111941993334"></a><a name="zh-cn_topic_0237122540_p111941993334"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p31941090334"><a name="zh-cn_topic_0237122540_p31941090334"></a><a name="zh-cn_topic_0237122540_p31941090334"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p11941298333"><a name="zh-cn_topic_0237122540_p11941298333"></a><a name="zh-cn_topic_0237122540_p11941298333"></a>在该机器节点上，用户关联控制组的CPU核数总和。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row31941095334"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p14195196331"><a name="zh-cn_topic_0237122540_p14195196331"></a><a name="zh-cn_topic_0237122540_p14195196331"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p319517993315"><a name="zh-cn_topic_0237122540_p319517993315"></a><a name="zh-cn_topic_0237122540_p319517993315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p181955918331"><a name="zh-cn_topic_0237122540_p181955918331"></a><a name="zh-cn_topic_0237122540_p181955918331"></a>已使用的存储空间大小，单位KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row1195109143315"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p121954917336"><a name="zh-cn_topic_0237122540_p121954917336"></a><a name="zh-cn_topic_0237122540_p121954917336"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p119549173318"><a name="zh-cn_topic_0237122540_p119549173318"></a><a name="zh-cn_topic_0237122540_p119549173318"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p21951892337"><a name="zh-cn_topic_0237122540_p21951892337"></a><a name="zh-cn_topic_0237122540_p21951892337"></a>可使用的存储空间大小，单位KB，值为-1表示未限制最大存储空间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row3195894337"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p181951791334"><a name="zh-cn_topic_0237122540_p181951791334"></a><a name="zh-cn_topic_0237122540_p181951791334"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p21954919338"><a name="zh-cn_topic_0237122540_p21954919338"></a><a name="zh-cn_topic_0237122540_p21954919338"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p61951093331"><a name="zh-cn_topic_0237122540_p61951093331"></a><a name="zh-cn_topic_0237122540_p61951093331"></a>已使用的临时空间大小，单位KB</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row1519616963319"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p119610911330"><a name="zh-cn_topic_0237122540_p119610911330"></a><a name="zh-cn_topic_0237122540_p119610911330"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p1319649123316"><a name="zh-cn_topic_0237122540_p1319649123316"></a><a name="zh-cn_topic_0237122540_p1319649123316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p319659103319"><a name="zh-cn_topic_0237122540_p319659103319"></a><a name="zh-cn_topic_0237122540_p319659103319"></a>可使用的临时空间总大小，单位KB，值为-1表示未限制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row181968983316"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p121966903314"><a name="zh-cn_topic_0237122540_p121966903314"></a><a name="zh-cn_topic_0237122540_p121966903314"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p1919620914333"><a name="zh-cn_topic_0237122540_p1919620914333"></a><a name="zh-cn_topic_0237122540_p1919620914333"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p171961953314"><a name="zh-cn_topic_0237122540_p171961953314"></a><a name="zh-cn_topic_0237122540_p171961953314"></a>已使用的下盘空间大小。单位KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122540_row18196199153319"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122540_p619679173318"><a name="zh-cn_topic_0237122540_p619679173318"></a><a name="zh-cn_topic_0237122540_p619679173318"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122540_p6196092338"><a name="zh-cn_topic_0237122540_p6196092338"></a><a name="zh-cn_topic_0237122540_p6196092338"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122540_p719718919330"><a name="zh-cn_topic_0237122540_p719718919330"></a><a name="zh-cn_topic_0237122540_p719718919330"></a>可使用的下盘空间总大小，单位KB，值为-1表示未限制。</p>
</td>
</tr>
</tbody>
</table>

