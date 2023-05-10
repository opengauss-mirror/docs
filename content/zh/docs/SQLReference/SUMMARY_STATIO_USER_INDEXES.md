# SUMMARY\_STATIO\_USER\_INDEXES

SUMMARY\_STATIO\_USER\_INDEXES视图显示openGauss内汇聚的命名空间中所有用户关系表索引的IO状态信息。

**表 1**  SUMMARY\_STATIO\_USER\_INDEXES字段

<a name="zh-cn_topic_0237122673_table19320173713816"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122673_row153793379810"><th class="cellrowborder" valign="top" width="18.78%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122673_p183791437783"><a name="zh-cn_topic_0237122673_p183791437783"></a><a name="zh-cn_topic_0237122673_p183791437783"></a><strong id="zh-cn_topic_0237122673_b2037933713816"><a name="zh-cn_topic_0237122673_b2037933713816"></a><a name="zh-cn_topic_0237122673_b2037933713816"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122673_p12380163712813"><a name="zh-cn_topic_0237122673_p12380163712813"></a><a name="zh-cn_topic_0237122673_p12380163712813"></a><strong id="zh-cn_topic_0237122673_b43802371582"><a name="zh-cn_topic_0237122673_b43802371582"></a><a name="zh-cn_topic_0237122673_b43802371582"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.83%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122673_p163802371881"><a name="zh-cn_topic_0237122673_p163802371881"></a><a name="zh-cn_topic_0237122673_p163802371881"></a><strong id="zh-cn_topic_0237122673_b338033711816"><a name="zh-cn_topic_0237122673_b338033711816"></a><a name="zh-cn_topic_0237122673_b338033711816"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122673_row43802037185"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122673_p1738020376816"><a name="zh-cn_topic_0237122673_p1738020376816"></a><a name="zh-cn_topic_0237122673_p1738020376816"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122673_p12381113714814"><a name="zh-cn_topic_0237122673_p12381113714814"></a><a name="zh-cn_topic_0237122673_p12381113714814"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122673_p12381937386"><a name="zh-cn_topic_0237122673_p12381937386"></a><a name="zh-cn_topic_0237122673_p12381937386"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122673_row203817379811"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122673_p83814375810"><a name="zh-cn_topic_0237122673_p83814375810"></a><a name="zh-cn_topic_0237122673_p83814375810"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122673_p538110371818"><a name="zh-cn_topic_0237122673_p538110371818"></a><a name="zh-cn_topic_0237122673_p538110371818"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122673_p0381937386"><a name="zh-cn_topic_0237122673_p0381937386"></a><a name="zh-cn_topic_0237122673_p0381937386"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122673_row23811737381"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122673_p938273711817"><a name="zh-cn_topic_0237122673_p938273711817"></a><a name="zh-cn_topic_0237122673_p938273711817"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122673_p1138283720814"><a name="zh-cn_topic_0237122673_p1138283720814"></a><a name="zh-cn_topic_0237122673_p1138283720814"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122673_p13821237684"><a name="zh-cn_topic_0237122673_p13821237684"></a><a name="zh-cn_topic_0237122673_p13821237684"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122673_row638273717815"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122673_p18382537481"><a name="zh-cn_topic_0237122673_p18382537481"></a><a name="zh-cn_topic_0237122673_p18382537481"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122673_p123831337981"><a name="zh-cn_topic_0237122673_p123831337981"></a><a name="zh-cn_topic_0237122673_p123831337981"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122673_p33831637380"><a name="zh-cn_topic_0237122673_p33831637380"></a><a name="zh-cn_topic_0237122673_p33831637380"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122673_row18383143715811"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122673_p123830371787"><a name="zh-cn_topic_0237122673_p123830371787"></a><a name="zh-cn_topic_0237122673_p123830371787"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122673_p03833371586"><a name="zh-cn_topic_0237122673_p03833371586"></a><a name="zh-cn_topic_0237122673_p03833371586"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122673_p133835376815"><a name="zh-cn_topic_0237122673_p133835376815"></a><a name="zh-cn_topic_0237122673_p133835376815"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>

