# STAT\_SYS\_INDEXES<a name="ZH-CN_TOPIC_0245374689"></a>

显示pg\_catalog、information\_schema以及pg\_toast模式中所有系统表的索引状态信息。

**表 1**  STAT\_SYS\_INDEXES字段

<a name="zh-cn_topic_0237122585_table1314414132439"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122585_row1124518137437"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122585_p4245613184310"><a name="zh-cn_topic_0237122585_p4245613184310"></a><a name="zh-cn_topic_0237122585_p4245613184310"></a><strong id="zh-cn_topic_0237122585_b142451713184310"><a name="zh-cn_topic_0237122585_b142451713184310"></a><a name="zh-cn_topic_0237122585_b142451713184310"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122585_p72451113194313"><a name="zh-cn_topic_0237122585_p72451113194313"></a><a name="zh-cn_topic_0237122585_p72451113194313"></a><strong id="zh-cn_topic_0237122585_b6245111312434"><a name="zh-cn_topic_0237122585_b6245111312434"></a><a name="zh-cn_topic_0237122585_b6245111312434"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122585_p182461613184310"><a name="zh-cn_topic_0237122585_p182461613184310"></a><a name="zh-cn_topic_0237122585_p182461613184310"></a><strong id="zh-cn_topic_0237122585_b112461713204313"><a name="zh-cn_topic_0237122585_b112461713204313"></a><a name="zh-cn_topic_0237122585_b112461713204313"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122585_row19246161354320"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p3246131324313"><a name="zh-cn_topic_0237122585_p3246131324313"></a><a name="zh-cn_topic_0237122585_p3246131324313"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p3246113104314"><a name="zh-cn_topic_0237122585_p3246113104314"></a><a name="zh-cn_topic_0237122585_p3246113104314"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p024611131439"><a name="zh-cn_topic_0237122585_p024611131439"></a><a name="zh-cn_topic_0237122585_p024611131439"></a>此索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row8247213204312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p17247151344310"><a name="zh-cn_topic_0237122585_p17247151344310"></a><a name="zh-cn_topic_0237122585_p17247151344310"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p19247111318439"><a name="zh-cn_topic_0237122585_p19247111318439"></a><a name="zh-cn_topic_0237122585_p19247111318439"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p9247121319434"><a name="zh-cn_topic_0237122585_p9247121319434"></a><a name="zh-cn_topic_0237122585_p9247121319434"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row524791354317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p15247121318432"><a name="zh-cn_topic_0237122585_p15247121318432"></a><a name="zh-cn_topic_0237122585_p15247121318432"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p024716139439"><a name="zh-cn_topic_0237122585_p024716139439"></a><a name="zh-cn_topic_0237122585_p024716139439"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p52471913194313"><a name="zh-cn_topic_0237122585_p52471913194313"></a><a name="zh-cn_topic_0237122585_p52471913194313"></a>索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row624751315437"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p9247161364312"><a name="zh-cn_topic_0237122585_p9247161364312"></a><a name="zh-cn_topic_0237122585_p9247161364312"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p024891394316"><a name="zh-cn_topic_0237122585_p024891394316"></a><a name="zh-cn_topic_0237122585_p024891394316"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p3248113164320"><a name="zh-cn_topic_0237122585_p3248113164320"></a><a name="zh-cn_topic_0237122585_p3248113164320"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row10248913114320"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p424841374316"><a name="zh-cn_topic_0237122585_p424841374316"></a><a name="zh-cn_topic_0237122585_p424841374316"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p824811137439"><a name="zh-cn_topic_0237122585_p824811137439"></a><a name="zh-cn_topic_0237122585_p824811137439"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p224819138432"><a name="zh-cn_topic_0237122585_p224819138432"></a><a name="zh-cn_topic_0237122585_p224819138432"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row72481413144317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p0248181315437"><a name="zh-cn_topic_0237122585_p0248181315437"></a><a name="zh-cn_topic_0237122585_p0248181315437"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p9248161354317"><a name="zh-cn_topic_0237122585_p9248161354317"></a><a name="zh-cn_topic_0237122585_p9248161354317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p1224801314315"><a name="zh-cn_topic_0237122585_p1224801314315"></a><a name="zh-cn_topic_0237122585_p1224801314315"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row17248513154312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p524941374314"><a name="zh-cn_topic_0237122585_p524941374314"></a><a name="zh-cn_topic_0237122585_p524941374314"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p19249513144320"><a name="zh-cn_topic_0237122585_p19249513144320"></a><a name="zh-cn_topic_0237122585_p19249513144320"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p024912138433"><a name="zh-cn_topic_0237122585_p024912138433"></a><a name="zh-cn_topic_0237122585_p024912138433"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122585_row6249101317436"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122585_p32491113194313"><a name="zh-cn_topic_0237122585_p32491113194313"></a><a name="zh-cn_topic_0237122585_p32491113194313"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122585_p15249813154316"><a name="zh-cn_topic_0237122585_p15249813154316"></a><a name="zh-cn_topic_0237122585_p15249813154316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122585_p624913132436"><a name="zh-cn_topic_0237122585_p624913132436"></a><a name="zh-cn_topic_0237122585_p624913132436"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>
