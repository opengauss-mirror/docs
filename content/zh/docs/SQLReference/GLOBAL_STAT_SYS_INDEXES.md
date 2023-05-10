# GLOBAL\_STAT\_SYS\_INDEXES

得到各节点pg\_catalog、information\_schema以及pg\_toast模式中所有系统表的索引状态信息。

**表 1**  GLOBAL\_STAT\_SYS\_INDEXES字段

<a name="zh-cn_topic_0237122587_table7641183314448"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122587_row1739153319447"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122587_p8739633144412"><a name="zh-cn_topic_0237122587_p8739633144412"></a><a name="zh-cn_topic_0237122587_p8739633144412"></a><strong id="zh-cn_topic_0237122587_b5739143344416"><a name="zh-cn_topic_0237122587_b5739143344416"></a><a name="zh-cn_topic_0237122587_b5739143344416"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122587_p4739153344418"><a name="zh-cn_topic_0237122587_p4739153344418"></a><a name="zh-cn_topic_0237122587_p4739153344418"></a><strong id="zh-cn_topic_0237122587_b1273973374415"><a name="zh-cn_topic_0237122587_b1273973374415"></a><a name="zh-cn_topic_0237122587_b1273973374415"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122587_p8739123374411"><a name="zh-cn_topic_0237122587_p8739123374411"></a><a name="zh-cn_topic_0237122587_p8739123374411"></a><strong id="zh-cn_topic_0237122587_b137397337440"><a name="zh-cn_topic_0237122587_b137397337440"></a><a name="zh-cn_topic_0237122587_b137397337440"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122587_row9739163314445"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p1573933318440"><a name="zh-cn_topic_0237122587_p1573933318440"></a><a name="zh-cn_topic_0237122587_p1573933318440"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p12739173310443"><a name="zh-cn_topic_0237122587_p12739173310443"></a><a name="zh-cn_topic_0237122587_p12739173310443"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p19740113394418"><a name="zh-cn_topic_0237122587_p19740113394418"></a><a name="zh-cn_topic_0237122587_p19740113394418"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row1874011335443"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p8740113311446"><a name="zh-cn_topic_0237122587_p8740113311446"></a><a name="zh-cn_topic_0237122587_p8740113311446"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p7740123318449"><a name="zh-cn_topic_0237122587_p7740123318449"></a><a name="zh-cn_topic_0237122587_p7740123318449"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p14740153384417"><a name="zh-cn_topic_0237122587_p14740153384417"></a><a name="zh-cn_topic_0237122587_p14740153384417"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row19740103364416"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p6740173344413"><a name="zh-cn_topic_0237122587_p6740173344413"></a><a name="zh-cn_topic_0237122587_p6740173344413"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p1974033324419"><a name="zh-cn_topic_0237122587_p1974033324419"></a><a name="zh-cn_topic_0237122587_p1974033324419"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p57401833134410"><a name="zh-cn_topic_0237122587_p57401833134410"></a><a name="zh-cn_topic_0237122587_p57401833134410"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row4740143311446"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p19740173394413"><a name="zh-cn_topic_0237122587_p19740173394413"></a><a name="zh-cn_topic_0237122587_p19740173394413"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p27411333114411"><a name="zh-cn_topic_0237122587_p27411333114411"></a><a name="zh-cn_topic_0237122587_p27411333114411"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p3741163314419"><a name="zh-cn_topic_0237122587_p3741163314419"></a><a name="zh-cn_topic_0237122587_p3741163314419"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row1874110337440"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p1274183394416"><a name="zh-cn_topic_0237122587_p1274183394416"></a><a name="zh-cn_topic_0237122587_p1274183394416"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p8741193317445"><a name="zh-cn_topic_0237122587_p8741193317445"></a><a name="zh-cn_topic_0237122587_p8741193317445"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p117413339449"><a name="zh-cn_topic_0237122587_p117413339449"></a><a name="zh-cn_topic_0237122587_p117413339449"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row17741143324418"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p67411833194416"><a name="zh-cn_topic_0237122587_p67411833194416"></a><a name="zh-cn_topic_0237122587_p67411833194416"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p574233314443"><a name="zh-cn_topic_0237122587_p574233314443"></a><a name="zh-cn_topic_0237122587_p574233314443"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p37438334449"><a name="zh-cn_topic_0237122587_p37438334449"></a><a name="zh-cn_topic_0237122587_p37438334449"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row57438333444"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p87436335443"><a name="zh-cn_topic_0237122587_p87436335443"></a><a name="zh-cn_topic_0237122587_p87436335443"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p15743173314413"><a name="zh-cn_topic_0237122587_p15743173314413"></a><a name="zh-cn_topic_0237122587_p15743173314413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p7743163314449"><a name="zh-cn_topic_0237122587_p7743163314449"></a><a name="zh-cn_topic_0237122587_p7743163314449"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row14743203334418"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p1743193394411"><a name="zh-cn_topic_0237122587_p1743193394411"></a><a name="zh-cn_topic_0237122587_p1743193394411"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p4744033104413"><a name="zh-cn_topic_0237122587_p4744033104413"></a><a name="zh-cn_topic_0237122587_p4744033104413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p9744333124419"><a name="zh-cn_topic_0237122587_p9744333124419"></a><a name="zh-cn_topic_0237122587_p9744333124419"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122587_row574423364413"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122587_p17441339441"><a name="zh-cn_topic_0237122587_p17441339441"></a><a name="zh-cn_topic_0237122587_p17441339441"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122587_p874512331441"><a name="zh-cn_topic_0237122587_p874512331441"></a><a name="zh-cn_topic_0237122587_p874512331441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122587_p1774563394417"><a name="zh-cn_topic_0237122587_p1774563394417"></a><a name="zh-cn_topic_0237122587_p1774563394417"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>

