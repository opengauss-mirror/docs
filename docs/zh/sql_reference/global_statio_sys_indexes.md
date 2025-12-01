# GLOBAL\_STATIO\_SYS\_INDEXES

GLOBAL\_STATIO\_SYS\_INDEXES视图显示各节点的命名空间中所有系统表索引的IO状态信息。

**表 1**  GLOBAL\_STATIO\_SYS\_INDEXES字段

<a name="zh-cn_topic_0237122683_table11920165110198"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122683_row162175217194"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122683_p92185211916"><a name="zh-cn_topic_0237122683_p92185211916"></a><a name="zh-cn_topic_0237122683_p92185211916"></a><strong id="zh-cn_topic_0237122683_b3205215194"><a name="zh-cn_topic_0237122683_b3205215194"></a><a name="zh-cn_topic_0237122683_b3205215194"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122683_p3245211911"><a name="zh-cn_topic_0237122683_p3245211911"></a><a name="zh-cn_topic_0237122683_p3245211911"></a><strong id="zh-cn_topic_0237122683_b9214526191"><a name="zh-cn_topic_0237122683_b9214526191"></a><a name="zh-cn_topic_0237122683_b9214526191"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122683_p14213527196"><a name="zh-cn_topic_0237122683_p14213527196"></a><a name="zh-cn_topic_0237122683_p14213527196"></a><strong id="zh-cn_topic_0237122683_b1921652181913"><a name="zh-cn_topic_0237122683_b1921652181913"></a><a name="zh-cn_topic_0237122683_b1921652181913"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122683_row142452121912"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p621952131910"><a name="zh-cn_topic_0237122683_p621952131910"></a><a name="zh-cn_topic_0237122683_p621952131910"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p92145213196"><a name="zh-cn_topic_0237122683_p92145213196"></a><a name="zh-cn_topic_0237122683_p92145213196"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p33155218196"><a name="zh-cn_topic_0237122683_p33155218196"></a><a name="zh-cn_topic_0237122683_p33155218196"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row2031852151919"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p133175215191"><a name="zh-cn_topic_0237122683_p133175215191"></a><a name="zh-cn_topic_0237122683_p133175215191"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p1631352171915"><a name="zh-cn_topic_0237122683_p1631352171915"></a><a name="zh-cn_topic_0237122683_p1631352171915"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p1305281913"><a name="zh-cn_topic_0237122683_p1305281913"></a><a name="zh-cn_topic_0237122683_p1305281913"></a>索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row73195218190"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p533524195"><a name="zh-cn_topic_0237122683_p533524195"></a><a name="zh-cn_topic_0237122683_p533524195"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p1438527197"><a name="zh-cn_topic_0237122683_p1438527197"></a><a name="zh-cn_topic_0237122683_p1438527197"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p242052161915"><a name="zh-cn_topic_0237122683_p242052161915"></a><a name="zh-cn_topic_0237122683_p242052161915"></a>该索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row184125213197"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p164252191916"><a name="zh-cn_topic_0237122683_p164252191916"></a><a name="zh-cn_topic_0237122683_p164252191916"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p7485221915"><a name="zh-cn_topic_0237122683_p7485221915"></a><a name="zh-cn_topic_0237122683_p7485221915"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p164652161918"><a name="zh-cn_topic_0237122683_p164652161918"></a><a name="zh-cn_topic_0237122683_p164652161918"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row85135215196"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p45552131912"><a name="zh-cn_topic_0237122683_p45552131912"></a><a name="zh-cn_topic_0237122683_p45552131912"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p95052181913"><a name="zh-cn_topic_0237122683_p95052181913"></a><a name="zh-cn_topic_0237122683_p95052181913"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p185052191917"><a name="zh-cn_topic_0237122683_p185052191917"></a><a name="zh-cn_topic_0237122683_p185052191917"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row1551752131917"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p1251052121914"><a name="zh-cn_topic_0237122683_p1251052121914"></a><a name="zh-cn_topic_0237122683_p1251052121914"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p17525281914"><a name="zh-cn_topic_0237122683_p17525281914"></a><a name="zh-cn_topic_0237122683_p17525281914"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p0585212195"><a name="zh-cn_topic_0237122683_p0585212195"></a><a name="zh-cn_topic_0237122683_p0585212195"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row9516522191"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p86135211915"><a name="zh-cn_topic_0237122683_p86135211915"></a><a name="zh-cn_topic_0237122683_p86135211915"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p196205219190"><a name="zh-cn_topic_0237122683_p196205219190"></a><a name="zh-cn_topic_0237122683_p196205219190"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p156155211912"><a name="zh-cn_topic_0237122683_p156155211912"></a><a name="zh-cn_topic_0237122683_p156155211912"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122683_row1561752131919"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122683_p261952171918"><a name="zh-cn_topic_0237122683_p261952171918"></a><a name="zh-cn_topic_0237122683_p261952171918"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122683_p1064528199"><a name="zh-cn_topic_0237122683_p1064528199"></a><a name="zh-cn_topic_0237122683_p1064528199"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122683_p969527199"><a name="zh-cn_topic_0237122683_p969527199"></a><a name="zh-cn_topic_0237122683_p969527199"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>

