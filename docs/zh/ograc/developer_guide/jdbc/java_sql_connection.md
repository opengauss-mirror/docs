# java.sql.Connection<a name="ZH-CN_TOPIC_0289900351"></a>

java.sql.Connection是数据库连接接口。

**表 1**  对java.sql.Connection接口的支持情况

<a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_table56041880"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row64319280"><th class="cellrowborder" valign="top" width="37.86%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p49162418"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p49162418"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p49162418"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="32.29%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p25856461"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p25856461"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p25856461"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="29.849999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11019236"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11019236"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11019236"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row49833243"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p5824408"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p5824408"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p5824408"></a>close()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p56073550"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p56073550"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p56073550"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p46495264"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p46495264"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p46495264"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row2293285"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54065009"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54065009"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54065009"></a>commit()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52508754"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52508754"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52508754"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p13213809"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p13213809"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p13213809"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row53591231"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p805204"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p805204"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p805204"></a>createStatement()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p38434662"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p38434662"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p38434662"></a>Statement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p60478035"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p60478035"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p60478035"></a>Yes</p>
</td>
</tr>
<tr id="row2550145865614"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p855116588563"><a name="p855116588563"></a><a name="p855116588563"></a>createStatement​(int resultSetType, int resultSetConcurrency)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p19551115810565"><a name="p19551115810565"></a><a name="p19551115810565"></a>Statement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p195511658205614"><a name="p195511658205614"></a><a name="p195511658205614"></a>Yes</p>
</td>
</tr>
<tr id="row1539325576"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p1531632145715"><a name="p1531632145715"></a><a name="p1531632145715"></a>createStatement​(int resultSetType, int resultSetConcurrency, int resultSetHoldability)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p153153265711"><a name="p153153265711"></a><a name="p153153265711"></a>Statement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p55303225710"><a name="p55303225710"></a><a name="p55303225710"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row38758186"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p24985799"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p24985799"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p24985799"></a>getAutoCommit()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p42420874"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p42420874"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p42420874"></a><span id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text266314207499"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text266314207499"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text266314207499"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p31478278"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p31478278"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p31478278"></a>Yes</p>
</td>
</tr>
<tr id="row12319335115918"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p6320203512591"><a name="p6320203512591"></a><a name="p6320203512591"></a>getCatalog()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p63201535155914"><a name="p63201535155914"></a><a name="p63201535155914"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p4320335155916"><a name="p4320335155916"></a><a name="p4320335155916"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row32822182"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p17881338"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p17881338"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p17881338"></a>getClientInfo()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p26976702"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p26976702"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p26976702"></a>Properties</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11498954"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11498954"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11498954"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row9234547"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p31103963"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p31103963"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p31103963"></a>getClientInfo(String name)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p22768898"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p22768898"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p22768898"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p53453791"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p53453791"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p53453791"></a>Yes</p>
</td>
</tr>
<tr id="row69496515015"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p994995117015"><a name="p994995117015"></a><a name="p994995117015"></a>getHoldability()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p194955110012"><a name="p194955110012"></a><a name="p194955110012"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p49498511502"><a name="p49498511502"></a><a name="p49498511502"></a>Yes</p>
</td>
</tr>
<tr id="row147754141219"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p18775181411119"><a name="p18775181411119"></a><a name="p18775181411119"></a>getNetworkTimeout()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p577531414112"><a name="p577531414112"></a><a name="p577531414112"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p977519149115"><a name="p977519149115"></a><a name="p977519149115"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row51944401"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p8362188"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p8362188"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p8362188"></a>getTransactionIsolation()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p61512789"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p61512789"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p61512789"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54416005"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54416005"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54416005"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row47379456"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p14422647"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p14422647"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p14422647"></a>isClosed()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29691442"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29691442"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29691442"></a><span id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text037125611567"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text037125611567"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text037125611567"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51578877"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51578877"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51578877"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row64292673"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p48962590"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p48962590"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p48962590"></a>isReadOnly()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29186904"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29186904"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29186904"></a><span id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text1187083414915"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text1187083414915"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_text1187083414915"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65231493"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65231493"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65231493"></a>Yes</p>
</td>
</tr>
<tr id="row75131479510"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p115131971520"><a name="p115131971520"></a><a name="p115131971520"></a>isValid​(int timeout)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p145148718519"><a name="p145148718519"></a><a name="p145148718519"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p1514472054"><a name="p1514472054"></a><a name="p1514472054"></a>Yes</p>
</td>
</tr>
<tr id="row1547372117519"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p247322118513"><a name="p247322118513"></a><a name="p247322118513"></a>prepareCall​(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p104735211650"><a name="p104735211650"></a><a name="p104735211650"></a>CallableStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p134730211753"><a name="p134730211753"></a><a name="p134730211753"></a>Yes</p>
</td>
</tr>
<tr id="row128813577212"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p5899571525"><a name="p5899571525"></a><a name="p5899571525"></a>prepareCall​(String sql, int resultSetType, int resultSetConcurrency)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p138935715210"><a name="p138935715210"></a><a name="p138935715210"></a>CallableStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p108912571429"><a name="p108912571429"></a><a name="p108912571429"></a>Yes</p>
</td>
</tr>
<tr id="row18175471138"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p11751971039"><a name="p11751971039"></a><a name="p11751971039"></a>prepareCall​(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p111751179311"><a name="p111751179311"></a><a name="p111751179311"></a>CallableStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p41751270310"><a name="p41751270310"></a><a name="p41751270310"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row12188626"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p37308651"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p37308651"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p37308651"></a>prepareStatement(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p66997511"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p66997511"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p66997511"></a>PreparedStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p25620574"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p25620574"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p25620574"></a>Yes</p>
</td>
</tr>
<tr id="row5628502717"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p063250773"><a name="p063250773"></a><a name="p063250773"></a>prepareStatement​(String sql, int autoGeneratedKeys)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p1263175019710"><a name="p1263175019710"></a><a name="p1263175019710"></a>PreparedStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p12631950572"><a name="p12631950572"></a><a name="p12631950572"></a>Yes</p>
</td>
</tr>
<tr id="row18862175712719"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p786217571978"><a name="p786217571978"></a><a name="p786217571978"></a>prepareStatement​(String sql, int[] columnIndexes)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p168621657573"><a name="p168621657573"></a><a name="p168621657573"></a>PreparedStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p118621657674"><a name="p118621657674"></a><a name="p118621657674"></a>Yes</p>
</td>
</tr>
<tr id="row183651531587"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p163651231081"><a name="p163651231081"></a><a name="p163651231081"></a>prepareStatement​(String sql, int resultSetType, int resultSetConcurrency)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p13651131488"><a name="p13651131488"></a><a name="p13651131488"></a>PreparedStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p163658316818"><a name="p163658316818"></a><a name="p163658316818"></a>Yes</p>
</td>
</tr>
<tr id="row16695710781"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p169619101689"><a name="p169619101689"></a><a name="p169619101689"></a>prepareStatement​(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p3696131016815"><a name="p3696131016815"></a><a name="p3696131016815"></a>PreparedStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p1696910785"><a name="p1696910785"></a><a name="p1696910785"></a>Yes</p>
</td>
</tr>
<tr id="row4691181987"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p1269101816819"><a name="p1269101816819"></a><a name="p1269101816819"></a>prepareStatement​(String sql, String[] columnNames)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p76941816810"><a name="p76941816810"></a><a name="p76941816810"></a>PreparedStatement</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p569218187"><a name="p569218187"></a><a name="p569218187"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row54724596"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p9420114"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p9420114"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p9420114"></a>rollback()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51509410"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51509410"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51509410"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52133832"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52133832"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52133832"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row33255911"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p34730127"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p34730127"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p34730127"></a>setAutoCommit(boolean autoCommit)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65773207"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65773207"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65773207"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11063043"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11063043"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11063043"></a>Yes</p>
</td>
</tr>
<tr id="row945855312124"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p184582539126"><a name="p184582539126"></a><a name="p184582539126"></a>setReadOnly​(boolean readOnly)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p19458185331213"><a name="p19458185331213"></a><a name="p19458185331213"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p15459125320122"><a name="p15459125320122"></a><a name="p15459125320122"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

>[!TIP]须知
>
>接口内部默认使用自动提交模式，若通过setAutoCommit\(false\)关闭自动提交，将会导致后面执行的语句都受到显式事务包裹，数据库中不支持事务中执行的语句不能在此模式下执行。
