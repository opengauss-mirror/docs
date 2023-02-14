# GLOBAL\_STAT\_USER\_INDEXES

得到各节点数据库中用户自定义普通表的索引状态信息。

**表 1**  GLOBAL\_STAT\_USER\_INDEXES字段

<a name="zh-cn_topic_0237122581_table1614475173815"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122581_row82332513381"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122581_p1723317511388"><a name="zh-cn_topic_0237122581_p1723317511388"></a><a name="zh-cn_topic_0237122581_p1723317511388"></a><strong id="zh-cn_topic_0237122581_b13234175117381"><a name="zh-cn_topic_0237122581_b13234175117381"></a><a name="zh-cn_topic_0237122581_b13234175117381"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122581_p13234651143810"><a name="zh-cn_topic_0237122581_p13234651143810"></a><a name="zh-cn_topic_0237122581_p13234651143810"></a><strong id="zh-cn_topic_0237122581_b223419514384"><a name="zh-cn_topic_0237122581_b223419514384"></a><a name="zh-cn_topic_0237122581_b223419514384"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122581_p11234851133811"><a name="zh-cn_topic_0237122581_p11234851133811"></a><a name="zh-cn_topic_0237122581_p11234851133811"></a><strong id="zh-cn_topic_0237122581_b923495163817"><a name="zh-cn_topic_0237122581_b923495163817"></a><a name="zh-cn_topic_0237122581_b923495163817"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122581_row11234165112382"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p32343517389"><a name="zh-cn_topic_0237122581_p32343517389"></a><a name="zh-cn_topic_0237122581_p32343517389"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p16234251183814"><a name="zh-cn_topic_0237122581_p16234251183814"></a><a name="zh-cn_topic_0237122581_p16234251183814"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p4234135193817"><a name="zh-cn_topic_0237122581_p4234135193817"></a><a name="zh-cn_topic_0237122581_p4234135193817"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row1123415103819"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p17235551113817"><a name="zh-cn_topic_0237122581_p17235551113817"></a><a name="zh-cn_topic_0237122581_p17235551113817"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p1423595114382"><a name="zh-cn_topic_0237122581_p1423595114382"></a><a name="zh-cn_topic_0237122581_p1423595114382"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p823585153817"><a name="zh-cn_topic_0237122581_p823585153817"></a><a name="zh-cn_topic_0237122581_p823585153817"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row16235951123817"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p1123535116389"><a name="zh-cn_topic_0237122581_p1123535116389"></a><a name="zh-cn_topic_0237122581_p1123535116389"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p3235651123810"><a name="zh-cn_topic_0237122581_p3235651123810"></a><a name="zh-cn_topic_0237122581_p3235651123810"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p11235165114383"><a name="zh-cn_topic_0237122581_p11235165114383"></a><a name="zh-cn_topic_0237122581_p11235165114383"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row1235185123818"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p1223513519386"><a name="zh-cn_topic_0237122581_p1223513519386"></a><a name="zh-cn_topic_0237122581_p1223513519386"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p1523517517385"><a name="zh-cn_topic_0237122581_p1523517517385"></a><a name="zh-cn_topic_0237122581_p1523517517385"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p17236165113811"><a name="zh-cn_topic_0237122581_p17236165113811"></a><a name="zh-cn_topic_0237122581_p17236165113811"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row13236105103819"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p17236105193813"><a name="zh-cn_topic_0237122581_p17236105193813"></a><a name="zh-cn_topic_0237122581_p17236105193813"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p7236145183816"><a name="zh-cn_topic_0237122581_p7236145183816"></a><a name="zh-cn_topic_0237122581_p7236145183816"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p7236155119389"><a name="zh-cn_topic_0237122581_p7236155119389"></a><a name="zh-cn_topic_0237122581_p7236155119389"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row72362518384"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p6236251193811"><a name="zh-cn_topic_0237122581_p6236251193811"></a><a name="zh-cn_topic_0237122581_p6236251193811"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p1823618516380"><a name="zh-cn_topic_0237122581_p1823618516380"></a><a name="zh-cn_topic_0237122581_p1823618516380"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p14236125123818"><a name="zh-cn_topic_0237122581_p14236125123818"></a><a name="zh-cn_topic_0237122581_p14236125123818"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row182361151113816"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p023665163815"><a name="zh-cn_topic_0237122581_p023665163815"></a><a name="zh-cn_topic_0237122581_p023665163815"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p1123718510381"><a name="zh-cn_topic_0237122581_p1123718510381"></a><a name="zh-cn_topic_0237122581_p1123718510381"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p1023775113815"><a name="zh-cn_topic_0237122581_p1023775113815"></a><a name="zh-cn_topic_0237122581_p1023775113815"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row102371351123818"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p1523710514389"><a name="zh-cn_topic_0237122581_p1523710514389"></a><a name="zh-cn_topic_0237122581_p1523710514389"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p15237115118389"><a name="zh-cn_topic_0237122581_p15237115118389"></a><a name="zh-cn_topic_0237122581_p15237115118389"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p123710517386"><a name="zh-cn_topic_0237122581_p123710517386"></a><a name="zh-cn_topic_0237122581_p123710517386"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122581_row523715114386"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122581_p223719511387"><a name="zh-cn_topic_0237122581_p223719511387"></a><a name="zh-cn_topic_0237122581_p223719511387"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122581_p1623720513389"><a name="zh-cn_topic_0237122581_p1623720513389"></a><a name="zh-cn_topic_0237122581_p1623720513389"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122581_p123755117385"><a name="zh-cn_topic_0237122581_p123755117385"></a><a name="zh-cn_topic_0237122581_p123755117385"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>
