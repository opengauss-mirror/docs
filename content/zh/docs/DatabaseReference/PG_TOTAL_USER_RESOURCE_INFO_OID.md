# PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID<a name="ZH-CN_TOPIC_0289901019"></a>

PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID视图显示所有用户资源使用情况，需要使用管理员用户进行查询。此视图在参数[use\_workload\_manager](负载管理.md)为on时才有效。

**表 1**  PG\_TOTAL\_USER\_RESOURCE\_INFO\_OID字段

<a name="table159891089334"></a>
<table><thead align="left"><tr id="row161929919332"><th class="cellrowborder" valign="top" width="21.494949494949495%" id="mcps1.2.4.1.1"><p id="p81928915336"><a name="p81928915336"></a><a name="p81928915336"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="22.67676767676768%" id="mcps1.2.4.1.2"><p id="p17192149133315"><a name="p17192149133315"></a><a name="p17192149133315"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="55.82828282828282%" id="mcps1.2.4.1.3"><p id="p3193179153319"><a name="p3193179153319"></a><a name="p3193179153319"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row2019310973312"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p219314943319"><a name="p219314943319"></a><a name="p219314943319"></a>userid</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p15193119113310"><a name="p15193119113310"></a><a name="p15193119113310"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p0193129173318"><a name="p0193129173318"></a><a name="p0193129173318"></a>用户ID。</p>
</td>
</tr>
<tr id="row201931890334"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p419317910337"><a name="p419317910337"></a><a name="p419317910337"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p1119319163318"><a name="p1119319163318"></a><a name="p1119319163318"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p81934983311"><a name="p81934983311"></a><a name="p81934983311"></a>正在使用的内存大小，单位MB。</p>
</td>
</tr>
<tr id="row191936913332"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p101931398337"><a name="p101931398337"></a><a name="p101931398337"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p1519409183319"><a name="p1519409183319"></a><a name="p1519409183319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p1819412903318"><a name="p1819412903318"></a><a name="p1819412903318"></a>可以使用的内存大小，单位MB。值为0表示未限制最大可用内存，其限制取决于数据库最大可用内存。</p>
</td>
</tr>
<tr id="row131949914331"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p719469153316"><a name="p719469153316"></a><a name="p719469153316"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p2356262115"><a name="p2356262115"></a><a name="p2356262115"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p2194129103315"><a name="p2194129103315"></a><a name="p2194129103315"></a>正在使用的CPU核数。</p>
</td>
</tr>
<tr id="row16194394338"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p111941993334"><a name="p111941993334"></a><a name="p111941993334"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p31941090334"><a name="p31941090334"></a><a name="p31941090334"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p11941298333"><a name="p11941298333"></a><a name="p11941298333"></a>在该机器节点上，用户关联控制组的CPU核数总和。</p>
</td>
</tr>
<tr id="row31941095334"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p14195196331"><a name="p14195196331"></a><a name="p14195196331"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p319517993315"><a name="p319517993315"></a><a name="p319517993315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p181955918331"><a name="p181955918331"></a><a name="p181955918331"></a>已使用的存储空间大小，单位KB。</p>
</td>
</tr>
<tr id="row1195109143315"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p121954917336"><a name="p121954917336"></a><a name="p121954917336"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p119549173318"><a name="p119549173318"></a><a name="p119549173318"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p21951892337"><a name="p21951892337"></a><a name="p21951892337"></a>可使用的存储空间大小，单位KB，值为-1表示未限制最大存储空间。</p>
</td>
</tr>
<tr id="row3195894337"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p181951791334"><a name="p181951791334"></a><a name="p181951791334"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p21954919338"><a name="p21954919338"></a><a name="p21954919338"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p61951093331"><a name="p61951093331"></a><a name="p61951093331"></a>已使用的临时空间大小，单位KB。</p>
</td>
</tr>
<tr id="row1519616963319"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p119610911330"><a name="p119610911330"></a><a name="p119610911330"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p1319649123316"><a name="p1319649123316"></a><a name="p1319649123316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p319659103319"><a name="p319659103319"></a><a name="p319659103319"></a>可使用的临时空间总大小，单位KB，值为-1表示未限制。</p>
</td>
</tr>
<tr id="row181968983316"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p121966903314"><a name="p121966903314"></a><a name="p121966903314"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p1919620914333"><a name="p1919620914333"></a><a name="p1919620914333"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p171961953314"><a name="p171961953314"></a><a name="p171961953314"></a>已使用的下盘空间大小。单位KB。</p>
</td>
</tr>
<tr id="row18196199153319"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p619679173318"><a name="p619679173318"></a><a name="p619679173318"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p6196092338"><a name="p6196092338"></a><a name="p6196092338"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p719718919330"><a name="p719718919330"></a><a name="p719718919330"></a>可使用的下盘空间总大小，单位KB，值为-1表示未限制。</p>
</td>
</tr>
<tr id="row175431830163011"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p10543730143016"><a name="p10543730143016"></a><a name="p10543730143016"></a>read_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p13544430133011"><a name="p13544430133011"></a><a name="p13544430133011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p7544830133013"><a name="p7544830133013"></a><a name="p7544830133013"></a>读磁盘数据量，单位KB。</p>
</td>
</tr>
<tr id="row883843716301"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p1583853723013"><a name="p1583853723013"></a><a name="p1583853723013"></a>write_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p12838203711302"><a name="p12838203711302"></a><a name="p12838203711302"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p188387371303"><a name="p188387371303"></a><a name="p188387371303"></a>写磁盘数据量，单位KB。</p>
</td>
</tr>
<tr id="row0854134803012"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p12854194893016"><a name="p12854194893016"></a><a name="p12854194893016"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p198546481301"><a name="p198546481301"></a><a name="p198546481301"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p16854174853011"><a name="p16854174853011"></a><a name="p16854174853011"></a>读磁盘次数。</p>
</td>
</tr>
<tr id="row17710351103015"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p117101251103015"><a name="p117101251103015"></a><a name="p117101251103015"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p5710851193016"><a name="p5710851193016"></a><a name="p5710851193016"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p1071085118307"><a name="p1071085118307"></a><a name="p1071085118307"></a>写磁盘次数。</p>
</td>
</tr>
<tr id="row244712417302"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p10447134133015"><a name="p10447134133015"></a><a name="p10447134133015"></a>read_speed</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p2044714163010"><a name="p2044714163010"></a><a name="p2044714163010"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p644724116305"><a name="p644724116305"></a><a name="p644724116305"></a>读磁盘速率，单位B/ms。</p>
</td>
</tr>
<tr id="row1340219340305"><td class="cellrowborder" valign="top" width="21.494949494949495%" headers="mcps1.2.4.1.1 "><p id="p24020341309"><a name="p24020341309"></a><a name="p24020341309"></a>write_speed</p>
</td>
<td class="cellrowborder" valign="top" width="22.67676767676768%" headers="mcps1.2.4.1.2 "><p id="p64027349303"><a name="p64027349303"></a><a name="p64027349303"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="55.82828282828282%" headers="mcps1.2.4.1.3 "><p id="p1040217346305"><a name="p1040217346305"></a><a name="p1040217346305"></a>写磁盘速率，单位B/ms。</p>
</td>
</tr>
</tbody>
</table>
