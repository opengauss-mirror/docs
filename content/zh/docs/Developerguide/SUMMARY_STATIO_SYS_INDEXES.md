# SUMMARY\_STATIO\_SYS\_INDEXES<a name="ZH-CN_TOPIC_0245374786"></a>

SUMMARY\_STATIO\_SYS\_INDEXES视图显示openGauss内汇聚的命名空间中所有系统表索引的IO状态信息。

**表 1**  SUMMARY\_STATIO\_SYS\_INDEXES字段

<a name="zh-cn_topic_0237122682_table181039577167"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122682_row51634575163"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122682_p11163175712162"><a name="zh-cn_topic_0237122682_p11163175712162"></a><a name="zh-cn_topic_0237122682_p11163175712162"></a><strong id="zh-cn_topic_0237122682_b6163205712166"><a name="zh-cn_topic_0237122682_b6163205712166"></a><a name="zh-cn_topic_0237122682_b6163205712166"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122682_p12163105791620"><a name="zh-cn_topic_0237122682_p12163105791620"></a><a name="zh-cn_topic_0237122682_p12163105791620"></a><strong id="zh-cn_topic_0237122682_b0163185701612"><a name="zh-cn_topic_0237122682_b0163185701612"></a><a name="zh-cn_topic_0237122682_b0163185701612"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122682_p61648578165"><a name="zh-cn_topic_0237122682_p61648578165"></a><a name="zh-cn_topic_0237122682_p61648578165"></a><strong id="zh-cn_topic_0237122682_b5164155761619"><a name="zh-cn_topic_0237122682_b5164155761619"></a><a name="zh-cn_topic_0237122682_b5164155761619"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122682_row1416415572167"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122682_p31642572163"><a name="zh-cn_topic_0237122682_p31642572163"></a><a name="zh-cn_topic_0237122682_p31642572163"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122682_p1416419574162"><a name="zh-cn_topic_0237122682_p1416419574162"></a><a name="zh-cn_topic_0237122682_p1416419574162"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122682_p1316418570168"><a name="zh-cn_topic_0237122682_p1316418570168"></a><a name="zh-cn_topic_0237122682_p1316418570168"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122682_row1416415715167"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122682_p916411579164"><a name="zh-cn_topic_0237122682_p916411579164"></a><a name="zh-cn_topic_0237122682_p916411579164"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122682_p10164115713163"><a name="zh-cn_topic_0237122682_p10164115713163"></a><a name="zh-cn_topic_0237122682_p10164115713163"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122682_p1616495711615"><a name="zh-cn_topic_0237122682_p1616495711615"></a><a name="zh-cn_topic_0237122682_p1616495711615"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122682_row816445721612"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122682_p4165457131613"><a name="zh-cn_topic_0237122682_p4165457131613"></a><a name="zh-cn_topic_0237122682_p4165457131613"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122682_p111659578166"><a name="zh-cn_topic_0237122682_p111659578166"></a><a name="zh-cn_topic_0237122682_p111659578166"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122682_p161652572164"><a name="zh-cn_topic_0237122682_p161652572164"></a><a name="zh-cn_topic_0237122682_p161652572164"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122682_row41659578161"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122682_p116545718167"><a name="zh-cn_topic_0237122682_p116545718167"></a><a name="zh-cn_topic_0237122682_p116545718167"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122682_p11651957161616"><a name="zh-cn_topic_0237122682_p11651957161616"></a><a name="zh-cn_topic_0237122682_p11651957161616"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122682_p151651457181611"><a name="zh-cn_topic_0237122682_p151651457181611"></a><a name="zh-cn_topic_0237122682_p151651457181611"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122682_row91651657171615"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122682_p1116517579163"><a name="zh-cn_topic_0237122682_p1116517579163"></a><a name="zh-cn_topic_0237122682_p1116517579163"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122682_p6165157191611"><a name="zh-cn_topic_0237122682_p6165157191611"></a><a name="zh-cn_topic_0237122682_p6165157191611"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122682_p10166145771620"><a name="zh-cn_topic_0237122682_p10166145771620"></a><a name="zh-cn_topic_0237122682_p10166145771620"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>

