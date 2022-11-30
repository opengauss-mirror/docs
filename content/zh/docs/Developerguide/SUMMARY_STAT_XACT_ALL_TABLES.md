# SUMMARY\_STAT\_XACT\_ALL\_TABLES<a name="ZH-CN_TOPIC_0245374705"></a>

显示openGauss内汇聚的命名空间中所有普通表和toast表的事务状态信息。

**表 1**  SUMMARY\_STAT\_XACT\_ALL\_TABLES字段

<a name="zh-cn_topic_0237122601_table15289132975914"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122601_row18397102925915"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122601_p939742905911"><a name="zh-cn_topic_0237122601_p939742905911"></a><a name="zh-cn_topic_0237122601_p939742905911"></a><strong id="zh-cn_topic_0237122601_b93971029175910"><a name="zh-cn_topic_0237122601_b93971029175910"></a><a name="zh-cn_topic_0237122601_b93971029175910"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122601_p3398172955910"><a name="zh-cn_topic_0237122601_p3398172955910"></a><a name="zh-cn_topic_0237122601_p3398172955910"></a><strong id="zh-cn_topic_0237122601_b14398329115910"><a name="zh-cn_topic_0237122601_b14398329115910"></a><a name="zh-cn_topic_0237122601_b14398329115910"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122601_p10398729135918"><a name="zh-cn_topic_0237122601_p10398729135918"></a><a name="zh-cn_topic_0237122601_p10398729135918"></a><strong id="zh-cn_topic_0237122601_b2039852975916"><a name="zh-cn_topic_0237122601_b2039852975916"></a><a name="zh-cn_topic_0237122601_b2039852975916"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122601_row16398122965911"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p93981029145917"><a name="zh-cn_topic_0237122601_p93981029145917"></a><a name="zh-cn_topic_0237122601_p93981029145917"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p43981429155913"><a name="zh-cn_topic_0237122601_p43981429155913"></a><a name="zh-cn_topic_0237122601_p43981429155913"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p1239912913597"><a name="zh-cn_topic_0237122601_p1239912913597"></a><a name="zh-cn_topic_0237122601_p1239912913597"></a>此表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row1939912975918"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p339992905913"><a name="zh-cn_topic_0237122601_p339992905913"></a><a name="zh-cn_topic_0237122601_p339992905913"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p8399629185915"><a name="zh-cn_topic_0237122601_p8399629185915"></a><a name="zh-cn_topic_0237122601_p8399629185915"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p1939942975918"><a name="zh-cn_topic_0237122601_p1939942975918"></a><a name="zh-cn_topic_0237122601_p1939942975918"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row7399152985912"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p1539982955912"><a name="zh-cn_topic_0237122601_p1539982955912"></a><a name="zh-cn_topic_0237122601_p1539982955912"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p63994293591"><a name="zh-cn_topic_0237122601_p63994293591"></a><a name="zh-cn_topic_0237122601_p63994293591"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p93991929165915"><a name="zh-cn_topic_0237122601_p93991929165915"></a><a name="zh-cn_topic_0237122601_p93991929165915"></a>此表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row1039919293593"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p739910295597"><a name="zh-cn_topic_0237122601_p739910295597"></a><a name="zh-cn_topic_0237122601_p739910295597"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p14001529195918"><a name="zh-cn_topic_0237122601_p14001529195918"></a><a name="zh-cn_topic_0237122601_p14001529195918"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p9400182919594"><a name="zh-cn_topic_0237122601_p9400182919594"></a><a name="zh-cn_topic_0237122601_p9400182919594"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row240092985911"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p14400142919596"><a name="zh-cn_topic_0237122601_p14400142919596"></a><a name="zh-cn_topic_0237122601_p14400142919596"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p16400192905915"><a name="zh-cn_topic_0237122601_p16400192905915"></a><a name="zh-cn_topic_0237122601_p16400192905915"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p5400162913596"><a name="zh-cn_topic_0237122601_p5400162913596"></a><a name="zh-cn_topic_0237122601_p5400162913596"></a>此表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row7400629105917"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p54001529195912"><a name="zh-cn_topic_0237122601_p54001529195912"></a><a name="zh-cn_topic_0237122601_p54001529195912"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p8400162910598"><a name="zh-cn_topic_0237122601_p8400162910598"></a><a name="zh-cn_topic_0237122601_p8400162910598"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p540032915914"><a name="zh-cn_topic_0237122601_p540032915914"></a><a name="zh-cn_topic_0237122601_p540032915914"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row144002299595"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p340132916592"><a name="zh-cn_topic_0237122601_p340132916592"></a><a name="zh-cn_topic_0237122601_p340132916592"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p1240142918592"><a name="zh-cn_topic_0237122601_p1240142918592"></a><a name="zh-cn_topic_0237122601_p1240142918592"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p144015292594"><a name="zh-cn_topic_0237122601_p144015292594"></a><a name="zh-cn_topic_0237122601_p144015292594"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row144014299599"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p194011829165913"><a name="zh-cn_topic_0237122601_p194011829165913"></a><a name="zh-cn_topic_0237122601_p194011829165913"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p134014295597"><a name="zh-cn_topic_0237122601_p134014295597"></a><a name="zh-cn_topic_0237122601_p134014295597"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p1240162917597"><a name="zh-cn_topic_0237122601_p1240162917597"></a><a name="zh-cn_topic_0237122601_p1240162917597"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row1401182915597"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p1402142935918"><a name="zh-cn_topic_0237122601_p1402142935918"></a><a name="zh-cn_topic_0237122601_p1402142935918"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p18402112918597"><a name="zh-cn_topic_0237122601_p18402112918597"></a><a name="zh-cn_topic_0237122601_p18402112918597"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p18402152935919"><a name="zh-cn_topic_0237122601_p18402152935919"></a><a name="zh-cn_topic_0237122601_p18402152935919"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122601_row040214295591"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122601_p13402112985914"><a name="zh-cn_topic_0237122601_p13402112985914"></a><a name="zh-cn_topic_0237122601_p13402112985914"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122601_p13402129205917"><a name="zh-cn_topic_0237122601_p13402129205917"></a><a name="zh-cn_topic_0237122601_p13402129205917"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122601_p24027291598"><a name="zh-cn_topic_0237122601_p24027291598"></a><a name="zh-cn_topic_0237122601_p24027291598"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
</tbody>
</table>
