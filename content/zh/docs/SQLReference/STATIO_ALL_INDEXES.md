# STATIO\_ALL\_INDEXES

STATIO\_ALL\_INDEXES视图包含数据库中的每个索引行，显示特定索引的I/O的统计。

**表 1**  STATIO\_ALL\_INDEXES字段

<a name="zh-cn_topic_0237122690_table47917368242"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122690_row88781236172410"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122690_p1387819368249"><a name="zh-cn_topic_0237122690_p1387819368249"></a><a name="zh-cn_topic_0237122690_p1387819368249"></a><strong id="zh-cn_topic_0237122690_b11878173622417"><a name="zh-cn_topic_0237122690_b11878173622417"></a><a name="zh-cn_topic_0237122690_b11878173622417"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122690_p887853622413"><a name="zh-cn_topic_0237122690_p887853622413"></a><a name="zh-cn_topic_0237122690_p887853622413"></a><strong id="zh-cn_topic_0237122690_b158783363240"><a name="zh-cn_topic_0237122690_b158783363240"></a><a name="zh-cn_topic_0237122690_b158783363240"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122690_p118789364247"><a name="zh-cn_topic_0237122690_p118789364247"></a><a name="zh-cn_topic_0237122690_p118789364247"></a><strong id="zh-cn_topic_0237122690_b128791367244"><a name="zh-cn_topic_0237122690_b128791367244"></a><a name="zh-cn_topic_0237122690_b128791367244"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122690_row1587953613248"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p68791836142410"><a name="zh-cn_topic_0237122690_p68791836142410"></a><a name="zh-cn_topic_0237122690_p68791836142410"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p1287919366243"><a name="zh-cn_topic_0237122690_p1287919366243"></a><a name="zh-cn_topic_0237122690_p1287919366243"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p168794368245"><a name="zh-cn_topic_0237122690_p168794368245"></a><a name="zh-cn_topic_0237122690_p168794368245"></a>索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122690_row687912366247"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p128801536152420"><a name="zh-cn_topic_0237122690_p128801536152420"></a><a name="zh-cn_topic_0237122690_p128801536152420"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p14880173611248"><a name="zh-cn_topic_0237122690_p14880173611248"></a><a name="zh-cn_topic_0237122690_p14880173611248"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p8880113692410"><a name="zh-cn_topic_0237122690_p8880113692410"></a><a name="zh-cn_topic_0237122690_p8880113692410"></a>该索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122690_row178807367247"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p0880113611246"><a name="zh-cn_topic_0237122690_p0880113611246"></a><a name="zh-cn_topic_0237122690_p0880113611246"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p1188003617241"><a name="zh-cn_topic_0237122690_p1188003617241"></a><a name="zh-cn_topic_0237122690_p1188003617241"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p98811336182419"><a name="zh-cn_topic_0237122690_p98811336182419"></a><a name="zh-cn_topic_0237122690_p98811336182419"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122690_row3881183642412"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p188103652417"><a name="zh-cn_topic_0237122690_p188103652417"></a><a name="zh-cn_topic_0237122690_p188103652417"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p8881236142417"><a name="zh-cn_topic_0237122690_p8881236142417"></a><a name="zh-cn_topic_0237122690_p8881236142417"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p1788153619243"><a name="zh-cn_topic_0237122690_p1788153619243"></a><a name="zh-cn_topic_0237122690_p1788153619243"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122690_row6881133642412"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p1288113610249"><a name="zh-cn_topic_0237122690_p1288113610249"></a><a name="zh-cn_topic_0237122690_p1288113610249"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p3881193614247"><a name="zh-cn_topic_0237122690_p3881193614247"></a><a name="zh-cn_topic_0237122690_p3881193614247"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p12881123602413"><a name="zh-cn_topic_0237122690_p12881123602413"></a><a name="zh-cn_topic_0237122690_p12881123602413"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122690_row10881163619244"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p1988220363240"><a name="zh-cn_topic_0237122690_p1988220363240"></a><a name="zh-cn_topic_0237122690_p1988220363240"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p0882236112414"><a name="zh-cn_topic_0237122690_p0882236112414"></a><a name="zh-cn_topic_0237122690_p0882236112414"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p7882136112415"><a name="zh-cn_topic_0237122690_p7882136112415"></a><a name="zh-cn_topic_0237122690_p7882136112415"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122690_row19882536112410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122690_p488233616243"><a name="zh-cn_topic_0237122690_p488233616243"></a><a name="zh-cn_topic_0237122690_p488233616243"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122690_p88821936202418"><a name="zh-cn_topic_0237122690_p88821936202418"></a><a name="zh-cn_topic_0237122690_p88821936202418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122690_p188218369244"><a name="zh-cn_topic_0237122690_p188218369244"></a><a name="zh-cn_topic_0237122690_p188218369244"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>

