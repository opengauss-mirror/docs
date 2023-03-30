# SUMMARY\_STAT\_USER\_INDEXES<a name="ZH-CN_TOPIC_0289900242"></a>

openGauss内汇聚所有数据库中用户自定义普通表的索引状态信息。

**表 1**  SUMMARY\_STAT\_USER\_INDEXES字段

<a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_table678818542376"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row11886135414379"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p488735417378"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p488735417378"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p488735417378"></a><strong id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b1588718544375"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b1588718544375"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b1588718544375"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p178877548375"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p178877548375"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p178877548375"></a><strong id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b48873540372"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b48873540372"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b48873540372"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p13887954103714"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p13887954103714"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p13887954103714"></a><strong id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b1188818549371"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b1188818549371"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_b1188818549371"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row388885403710"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p888816545372"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p888816545372"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p888816545372"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p188882054193716"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p188882054193716"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p188882054193716"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p148891554173719"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p148891554173719"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p148891554173719"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row7889165415376"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p17889175420378"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p17889175420378"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p17889175420378"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p128891546374"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p128891546374"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p128891546374"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p19889105443718"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p19889105443718"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p19889105443718"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row089045417370"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p14890854133716"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p14890854133716"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p14890854133716"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p8890145433717"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p8890145433717"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p8890145433717"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1189012543373"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1189012543373"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1189012543373"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row7890754173711"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p9891185415372"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p9891185415372"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p9891185415372"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p138912054113715"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p138912054113715"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p138912054113715"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1689115433718"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1689115433718"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1689115433718"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row1389155410372"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1389255483717"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1389255483717"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1389255483717"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p178923542370"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p178923542370"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p178923542370"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1589215540373"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1589215540373"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1589215540373"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_row18892165493718"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1589213549372"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1589213549372"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p1589213549372"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p12892454193711"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p12892454193711"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p12892454193711"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p198931254183718"><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p198931254183718"></a><a name="zh-cn_topic_0283137430_zh-cn_topic_0237122580_p198931254183718"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>

