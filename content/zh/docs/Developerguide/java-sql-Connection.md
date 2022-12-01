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
<tbody><tr id="row159621201259"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p209638042510"><a name="p209638042510"></a><a name="p209638042510"></a>abort(Executor executor)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p2963804256"><a name="p2963804256"></a><a name="p2963804256"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p396317018257"><a name="p396317018257"></a><a name="p396317018257"></a>Yes</p>
</td>
</tr>
<tr id="row1016101811262"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p141631892616"><a name="p141631892616"></a><a name="p141631892616"></a>clearWarnings()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p181691820267"><a name="p181691820267"></a><a name="p181691820267"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p16165188268"><a name="p16165188268"></a><a name="p16165188268"></a>Yes</p>
</td>
</tr>
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
<tr id="row981320433428"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p88131143154216"><a name="p88131143154216"></a><a name="p88131143154216"></a>createArrayOf​(String typeName, Object[] elements)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p1981324324213"><a name="p1981324324213"></a><a name="p1981324324213"></a>Array</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p9813144384214"><a name="p9813144384214"></a><a name="p9813144384214"></a>Yes</p>
</td>
</tr>
<tr id="row263611418431"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p13636643436"><a name="p13636643436"></a><a name="p13636643436"></a>createBlob()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p176361434314"><a name="p176361434314"></a><a name="p176361434314"></a>Blob</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p196365416431"><a name="p196365416431"></a><a name="p196365416431"></a>Yes</p>
</td>
</tr>
<tr id="row149271920439"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p6492619174311"><a name="p6492619174311"></a><a name="p6492619174311"></a>createClob()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p449211924313"><a name="p449211924313"></a><a name="p449211924313"></a>Clob</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p049271964318"><a name="p049271964318"></a><a name="p049271964318"></a>Yes</p>
</td>
</tr>
<tr id="row86841442144319"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p16684194274320"><a name="p16684194274320"></a><a name="p16684194274320"></a>createSQLXML()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p126841042104313"><a name="p126841042104313"></a><a name="p126841042104313"></a>SQLXML</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p12684134220431"><a name="p12684134220431"></a><a name="p12684134220431"></a>Yes</p>
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
<tr id="row680714571003"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p1807145710013"><a name="p1807145710013"></a><a name="p1807145710013"></a>getMetaData()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p4807757401"><a name="p4807757401"></a><a name="p4807757401"></a>DatabaseMetaData</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p980720571508"><a name="p980720571508"></a><a name="p980720571508"></a>Yes</p>
</td>
</tr>
<tr id="row147754141219"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p18775181411119"><a name="p18775181411119"></a><a name="p18775181411119"></a>getNetworkTimeout()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p577531414112"><a name="p577531414112"></a><a name="p577531414112"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p977519149115"><a name="p977519149115"></a><a name="p977519149115"></a>Yes</p>
</td>
</tr>
<tr id="row555812191518"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p2559181910118"><a name="p2559181910118"></a><a name="p2559181910118"></a>getSchema()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p65591196116"><a name="p65591196116"></a><a name="p65591196116"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p2055971911112"><a name="p2055971911112"></a><a name="p2055971911112"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row51944401"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p8362188"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p8362188"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p8362188"></a>getTransactionIsolation()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p61512789"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p61512789"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p61512789"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54416005"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54416005"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p54416005"></a>Yes</p>
</td>
</tr>
<tr id="row202805561537"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p0281165616310"><a name="p0281165616310"></a><a name="p0281165616310"></a>getTypeMap()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p4281115617311"><a name="p4281115617311"></a><a name="p4281115617311"></a>Map&lt;String,​Class&lt;?&gt;&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p16281175617311"><a name="p16281175617311"></a><a name="p16281175617311"></a>Yes</p>
</td>
</tr>
<tr id="row8584671942"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p18585771743"><a name="p18585771743"></a><a name="p18585771743"></a>getWarnings()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p4585197341"><a name="p4585197341"></a><a name="p4585197341"></a>SQLWarning</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p135851578416"><a name="p135851578416"></a><a name="p135851578416"></a>Yes</p>
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
<tr id="row548913125513"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p16489171214519"><a name="p16489171214519"></a><a name="p16489171214519"></a>nativeSQL​(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p5489112054"><a name="p5489112054"></a><a name="p5489112054"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p1848916121655"><a name="p1848916121655"></a><a name="p1848916121655"></a>Yes</p>
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
<tr id="row1751410014115"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p45140015113"><a name="p45140015113"></a><a name="p45140015113"></a>releaseSavepoint​(Savepoint savepoint)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p1251412015112"><a name="p1251412015112"></a><a name="p1251412015112"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p1951416014114"><a name="p1951416014114"></a><a name="p1951416014114"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row54724596"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p9420114"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p9420114"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p9420114"></a>rollback()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51509410"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51509410"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p51509410"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52133832"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52133832"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p52133832"></a>Yes</p>
</td>
</tr>
<tr id="row587620205115"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p1787682081120"><a name="p1787682081120"></a><a name="p1787682081120"></a>rollback​(Savepoint savepoint)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p487613207115"><a name="p487613207115"></a><a name="p487613207115"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p15876120101119"><a name="p15876120101119"></a><a name="p15876120101119"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row33255911"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p34730127"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p34730127"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p34730127"></a>setAutoCommit(boolean autoCommit)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65773207"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65773207"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p65773207"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11063043"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11063043"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p11063043"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row48009195"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p19413500"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p19413500"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p19413500"></a>setClientInfo(Properties properties)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p40405489"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p40405489"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p40405489"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29668431"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29668431"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p29668431"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_row49399872"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p16556343"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p16556343"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p16556343"></a>setClientInfo(String name,String value)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p58968000"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p58968000"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p58968000"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p20387308"><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p20387308"></a><a name="zh-cn_topic_0237120391_zh-cn_topic_0213179157_zh-cn_topic_0189251860_zh-cn_topic_0059778938_zh-cn_topic_0058965163_p20387308"></a>Yes</p>
</td>
</tr>
<tr id="row94161512126"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p2041915131217"><a name="p2041915131217"></a><a name="p2041915131217"></a>setHoldability​(int holdability)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p441111581219"><a name="p441111581219"></a><a name="p441111581219"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p12411815191215"><a name="p12411815191215"></a><a name="p12411815191215"></a>Yes</p>
</td>
</tr>
<tr id="row1744172011211"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p15441420181212"><a name="p15441420181212"></a><a name="p15441420181212"></a>setNetworkTimeout​(Executor executor, int milliseconds)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p1944117204127"><a name="p1944117204127"></a><a name="p1944117204127"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p134411720151214"><a name="p134411720151214"></a><a name="p134411720151214"></a>Yes</p>
</td>
</tr>
<tr id="row945855312124"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p184582539126"><a name="p184582539126"></a><a name="p184582539126"></a>setReadOnly​(boolean readOnly)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p19458185331213"><a name="p19458185331213"></a><a name="p19458185331213"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p15459125320122"><a name="p15459125320122"></a><a name="p15459125320122"></a>Yes</p>
</td>
</tr>
<tr id="row68731459191214"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p18873165991213"><a name="p18873165991213"></a><a name="p18873165991213"></a>setSavepoint()</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p11873459121218"><a name="p11873459121218"></a><a name="p11873459121218"></a>Savepoint</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p118743593122"><a name="p118743593122"></a><a name="p118743593122"></a>Yes</p>
</td>
</tr>
<tr id="row917911121319"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p6179191119132"><a name="p6179191119132"></a><a name="p6179191119132"></a>setSavepoint​(String name)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p18179161115136"><a name="p18179161115136"></a><a name="p18179161115136"></a>Savepoint</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p141799117139"><a name="p141799117139"></a><a name="p141799117139"></a>Yes</p>
</td>
</tr>
<tr id="row206301946101219"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p66311046161216"><a name="p66311046161216"></a><a name="p66311046161216"></a>setSchema​(String schema)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p156311446201217"><a name="p156311446201217"></a><a name="p156311446201217"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p12631104681219"><a name="p12631104681219"></a><a name="p12631104681219"></a>Yes</p>
</td>
</tr>
<tr id="row174221941201213"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p842364121212"><a name="p842364121212"></a><a name="p842364121212"></a>setTransactionIsolation​(int level)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p042334116128"><a name="p042334116128"></a><a name="p042334116128"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p1942304116127"><a name="p1942304116127"></a><a name="p1942304116127"></a>Yes</p>
</td>
</tr>
<tr id="row22853121216"><td class="cellrowborder" valign="top" width="37.86%" headers="mcps1.2.4.1.1 "><p id="p8281131131210"><a name="p8281131131210"></a><a name="p8281131131210"></a>setTypeMap​(Map&lt;String,​Class&lt;?&gt;&gt; map)</p>
</td>
<td class="cellrowborder" valign="top" width="32.29%" headers="mcps1.2.4.1.2 "><p id="p132823151219"><a name="p132823151219"></a><a name="p132823151219"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.849999999999998%" headers="mcps1.2.4.1.3 "><p id="p16281931181214"><a name="p16281931181214"></a><a name="p16281931181214"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.png) **须知：**
>接口内部默认使用自动提交模式，若通过setAutoCommit\(false\)关闭自动提交，将会导致后面执行的语句都受到显式事务包裹，数据库中不支持事务中执行的语句不能在此模式下执行。
