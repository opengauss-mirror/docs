# SUMMARY\_STATIO\_ALL\_INDEXES

SUMMARY\_STATIO\_ALL\_INDEXES视图包含openGauss内汇聚的数据库中的每个索引行， 显示特定索引的I/O的统计。

<a name="zh-cn_topic_0237122691_table9322152172514"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122691_row10388102119256"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122691_p6389121162512"><a name="zh-cn_topic_0237122691_p6389121162512"></a><a name="zh-cn_topic_0237122691_p6389121162512"></a><strong id="zh-cn_topic_0237122691_b5389182115253"><a name="zh-cn_topic_0237122691_b5389182115253"></a><a name="zh-cn_topic_0237122691_b5389182115253"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122691_p5389122162514"><a name="zh-cn_topic_0237122691_p5389122162514"></a><a name="zh-cn_topic_0237122691_p5389122162514"></a><strong id="zh-cn_topic_0237122691_b1538992142514"><a name="zh-cn_topic_0237122691_b1538992142514"></a><a name="zh-cn_topic_0237122691_b1538992142514"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122691_p12389521192515"><a name="zh-cn_topic_0237122691_p12389521192515"></a><a name="zh-cn_topic_0237122691_p12389521192515"></a><strong id="zh-cn_topic_0237122691_b19389721202513"><a name="zh-cn_topic_0237122691_b19389721202513"></a><a name="zh-cn_topic_0237122691_b19389721202513"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122691_row10389162122514"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122691_p9389721172518"><a name="zh-cn_topic_0237122691_p9389721172518"></a><a name="zh-cn_topic_0237122691_p9389721172518"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122691_p93900215258"><a name="zh-cn_topic_0237122691_p93900215258"></a><a name="zh-cn_topic_0237122691_p93900215258"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122691_p139042111253"><a name="zh-cn_topic_0237122691_p139042111253"></a><a name="zh-cn_topic_0237122691_p139042111253"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122691_row12390102132518"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122691_p339017219251"><a name="zh-cn_topic_0237122691_p339017219251"></a><a name="zh-cn_topic_0237122691_p339017219251"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122691_p1239011219251"><a name="zh-cn_topic_0237122691_p1239011219251"></a><a name="zh-cn_topic_0237122691_p1239011219251"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122691_p1839022112511"><a name="zh-cn_topic_0237122691_p1839022112511"></a><a name="zh-cn_topic_0237122691_p1839022112511"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122691_row6390721192519"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122691_p163909213254"><a name="zh-cn_topic_0237122691_p163909213254"></a><a name="zh-cn_topic_0237122691_p163909213254"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122691_p2039122111255"><a name="zh-cn_topic_0237122691_p2039122111255"></a><a name="zh-cn_topic_0237122691_p2039122111255"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122691_p3391321112514"><a name="zh-cn_topic_0237122691_p3391321112514"></a><a name="zh-cn_topic_0237122691_p3391321112514"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122691_row18391102162513"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122691_p1539112110259"><a name="zh-cn_topic_0237122691_p1539112110259"></a><a name="zh-cn_topic_0237122691_p1539112110259"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122691_p439132114259"><a name="zh-cn_topic_0237122691_p439132114259"></a><a name="zh-cn_topic_0237122691_p439132114259"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122691_p339152119251"><a name="zh-cn_topic_0237122691_p339152119251"></a><a name="zh-cn_topic_0237122691_p339152119251"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122691_row19391142102513"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122691_p83911021132520"><a name="zh-cn_topic_0237122691_p83911021132520"></a><a name="zh-cn_topic_0237122691_p83911021132520"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122691_p143911021162515"><a name="zh-cn_topic_0237122691_p143911021162515"></a><a name="zh-cn_topic_0237122691_p143911021162515"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122691_p2039111211255"><a name="zh-cn_topic_0237122691_p2039111211255"></a><a name="zh-cn_topic_0237122691_p2039111211255"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>

