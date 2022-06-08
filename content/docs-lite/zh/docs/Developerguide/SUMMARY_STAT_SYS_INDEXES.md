# SUMMARY\_STAT\_SYS\_INDEXES<a name="ZH-CN_TOPIC_0289900625"></a>

openGauss内汇聚pg\_catalog、information\_schema以及pg\_toast模式中所有系统表的索引状态信息。

**表 1**  SUMMARY\_STAT\_SYS\_INDEXES字段

<a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_table9684257144317"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row1977695711431"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p3776195764317"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p3776195764317"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p3776195764317"></a><strong id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b127761557194312"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b127761557194312"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b127761557194312"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10776357134310"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10776357134310"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10776357134310"></a><strong id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b15776145711436"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b15776145711436"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b15776145711436"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p127761257104318"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p127761257104318"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p127761257104318"></a><strong id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b167761357124314"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b167761357124314"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_b167761357124314"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row1577665734312"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18776857184311"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18776857184311"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18776857184311"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p67761572432"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p67761572432"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p67761572432"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10777195724314"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10777195724314"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10777195724314"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row277795764314"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p7777657174319"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p7777657174319"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p7777657174319"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p877715570432"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p877715570432"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p877715570432"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p9777195754318"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p9777195754318"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p9777195754318"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row16777165754312"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18777185719438"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18777185719438"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18777185719438"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1977717573430"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1977717573430"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1977717573430"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p37771457184316"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p37771457184316"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p37771457184316"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row127771257174311"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p77771657114314"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p77771657114314"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p77771657114314"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1277775718434"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1277775718434"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1277775718434"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p12778135774315"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p12778135774315"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p12778135774315"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row7778185724313"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10778185744317"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10778185744317"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p10778185744317"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p677825711437"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p677825711437"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p677825711437"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p157781157144318"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p157781157144318"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p157781157144318"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_row877845714439"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p777945754314"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p777945754314"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p777945754314"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18779105754316"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18779105754316"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p18779105754316"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1077935734311"><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1077935734311"></a><a name="zh-cn_topic_0283136685_zh-cn_topic_0237122586_p1077935734311"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>

