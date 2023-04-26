# java.sql.ResultSet<a name="ZH-CN_TOPIC_0289900530"></a>

java.sql.ResultSet是执行结果集接口。

**表 1**  对java.sql.ResultSet的支持情况

<a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_table12296685"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row36736640"><th class="cellrowborder" valign="top" width="34.483448344834486%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p46079472"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p46079472"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p46079472"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="32.78327832783278%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p52852976"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p52852976"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p52852976"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="32.73327332733273%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p9715514"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p9715514"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p9715514"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="row152646771411"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1430120402141"><a name="p1430120402141"></a><a name="p1430120402141"></a>absolute​(int row)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p2078616479148"><a name="p2078616479148"></a><a name="p2078616479148"></a><span id="text1965152417154"><a name="text1965152417154"></a><a name="text1965152417154"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p5265107141417"><a name="p5265107141417"></a><a name="p5265107141417"></a>Yes</p>
</td>
</tr>
<tr id="row1129551311142"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p8301940141420"><a name="p8301940141420"></a><a name="p8301940141420"></a>afterLast()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p117866475141"><a name="p117866475141"></a><a name="p117866475141"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p5295161311144"><a name="p5295161311144"></a><a name="p5295161311144"></a>Yes</p>
</td>
</tr>
<tr id="row865618166140"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p18301134051412"><a name="p18301134051412"></a><a name="p18301134051412"></a>beforeFirst()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p157868474144"><a name="p157868474144"></a><a name="p157868474144"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1465631615144"><a name="p1465631615144"></a><a name="p1465631615144"></a>Yes</p>
</td>
</tr>
<tr id="row4776111920146"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p530154071410"><a name="p530154071410"></a><a name="p530154071410"></a>cancelRowUpdates()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1078611471144"><a name="p1078611471144"></a><a name="p1078611471144"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p277611192141"><a name="p277611192141"></a><a name="p277611192141"></a>Yes</p>
</td>
</tr>
<tr id="row7350102314149"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1030114041414"><a name="p1030114041414"></a><a name="p1030114041414"></a>clearWarnings()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p12786164710149"><a name="p12786164710149"></a><a name="p12786164710149"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p3350823161419"><a name="p3350823161419"></a><a name="p3350823161419"></a>Yes</p>
</td>
</tr>
<tr id="row19721152919145"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p17301840181418"><a name="p17301840181418"></a><a name="p17301840181418"></a>close()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p5786194761411"><a name="p5786194761411"></a><a name="p5786194761411"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p57211329111420"><a name="p57211329111420"></a><a name="p57211329111420"></a>Yes</p>
</td>
</tr>
<tr id="row180015321147"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p4302144021412"><a name="p4302144021412"></a><a name="p4302144021412"></a>deleteRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p878674718148"><a name="p878674718148"></a><a name="p878674718148"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p14800123241415"><a name="p14800123241415"></a><a name="p14800123241415"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row44681535"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13259981"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13259981"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13259981"></a>findColumn(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p19090795"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p19090795"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p19090795"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13027646"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13027646"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13027646"></a>Yes</p>
</td>
</tr>
<tr id="row111382317154"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p61388319156"><a name="p61388319156"></a><a name="p61388319156"></a>first()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p131387317153"><a name="p131387317153"></a><a name="p131387317153"></a><span id="text3120112715155"><a name="text3120112715155"></a><a name="text3120112715155"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p913810341511"><a name="p913810341511"></a><a name="p913810341511"></a>Yes</p>
</td>
</tr>
<tr id="row83441847181514"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p174271059168"><a name="p174271059168"></a><a name="p174271059168"></a>getArray​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1385991215162"><a name="p1385991215162"></a><a name="p1385991215162"></a>Array</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p19344104741512"><a name="p19344104741512"></a><a name="p19344104741512"></a>Yes</p>
</td>
</tr>
<tr id="row132278513159"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p12427257162"><a name="p12427257162"></a><a name="p12427257162"></a>getArray​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1385981251619"><a name="p1385981251619"></a><a name="p1385981251619"></a>Array</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p152272515155"><a name="p152272515155"></a><a name="p152272515155"></a>Yes</p>
</td>
</tr>
<tr id="row73627574157"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p154271512163"><a name="p154271512163"></a><a name="p154271512163"></a>getAsciiStream​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1585981216161"><a name="p1585981216161"></a><a name="p1585981216161"></a>InputStream</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p33622571157"><a name="p33622571157"></a><a name="p33622571157"></a>Yes</p>
</td>
</tr>
<tr id="row5547141141611"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p2042711518163"><a name="p2042711518163"></a><a name="p2042711518163"></a>getAsciiStream​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p685971213166"><a name="p685971213166"></a><a name="p685971213166"></a>InputStream</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p105479131611"><a name="p105479131611"></a><a name="p105479131611"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row19376598"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p2184096"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p2184096"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p2184096"></a>getBigDecimal(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15519014"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15519014"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15519014"></a>BigDecimal</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p53858078"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p53858078"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p53858078"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row35905866"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14213353"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14213353"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14213353"></a>getBigDecimal(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51229066"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51229066"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51229066"></a>BigDecimal</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42656026"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42656026"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42656026"></a>Yes</p>
</td>
</tr>
<tr id="row710815365164"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p171689446166"><a name="p171689446166"></a><a name="p171689446166"></a>getBinaryStream​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p510853618167"><a name="p510853618167"></a><a name="p510853618167"></a>InputStream</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1910803617160"><a name="p1910803617160"></a><a name="p1910803617160"></a>Yes</p>
</td>
</tr>
<tr id="row1575010407166"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p2016804416164"><a name="p2016804416164"></a><a name="p2016804416164"></a>getBinaryStream​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p77501440111617"><a name="p77501440111617"></a><a name="p77501440111617"></a>InputStream</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p775013408165"><a name="p775013408165"></a><a name="p775013408165"></a>Yes</p>
</td>
</tr>
<tr id="row43571211111719"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p195181918131714"><a name="p195181918131714"></a><a name="p195181918131714"></a>getBlob​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p16357161113177"><a name="p16357161113177"></a><a name="p16357161113177"></a>Blob</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p10357121119179"><a name="p10357121119179"></a><a name="p10357121119179"></a>Yes</p>
</td>
</tr>
<tr id="row29141517173"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p951812182176"><a name="p951812182176"></a><a name="p951812182176"></a>getBlob​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p13911154174"><a name="p13911154174"></a><a name="p13911154174"></a>Blob</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p6911415131715"><a name="p6911415131715"></a><a name="p6911415131715"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row46176897"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51595471"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51595471"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51595471"></a>getBoolean(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51942220"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51942220"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p51942220"></a><span id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text184608485011"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text184608485011"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text184608485011"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p7846126"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p7846126"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p7846126"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row13191539"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p52260763"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p52260763"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p52260763"></a>getBoolean(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22049124"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22049124"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22049124"></a><span id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text1520320765014"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text1520320765014"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text1520320765014"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p36207180"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p36207180"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p36207180"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row39932371"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6209464"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6209464"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6209464"></a>getByte(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38126282"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38126282"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38126282"></a>byte</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p48777981"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p48777981"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p48777981"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row35096191"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p59065583"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p59065583"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p59065583"></a>getBytes(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p44335481"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p44335481"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p44335481"></a>byte[]</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p45425113"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p45425113"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p45425113"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row58720777"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p34734000"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p34734000"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p34734000"></a>getByte(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15190328"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15190328"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15190328"></a>byte</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62497992"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62497992"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62497992"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row24059269"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49230547"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49230547"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49230547"></a>getBytes(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p29210329"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p29210329"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p29210329"></a>byte[]</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p29365015"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p29365015"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p29365015"></a>Yes</p>
</td>
</tr>
<tr id="row62786274181"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p10166125231817"><a name="p10166125231817"></a><a name="p10166125231817"></a>getCharacterStream​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p20601165991818"><a name="p20601165991818"></a><a name="p20601165991818"></a>Reader</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1427913274185"><a name="p1427913274185"></a><a name="p1427913274185"></a>Yes</p>
</td>
</tr>
<tr id="row3483103218187"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1616615522183"><a name="p1616615522183"></a><a name="p1616615522183"></a>getCharacterStream​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p13601125941814"><a name="p13601125941814"></a><a name="p13601125941814"></a>Reader</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1348313217186"><a name="p1348313217186"></a><a name="p1348313217186"></a>Yes</p>
</td>
</tr>
<tr id="row36441835111818"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p15166135201818"><a name="p15166135201818"></a><a name="p15166135201818"></a>getClob​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p176016592189"><a name="p176016592189"></a><a name="p176016592189"></a>Clob</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p26457351189"><a name="p26457351189"></a><a name="p26457351189"></a>Yes</p>
</td>
</tr>
<tr id="row118881538131812"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p21661652121819"><a name="p21661652121819"></a><a name="p21661652121819"></a>getClob​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p4601175911188"><a name="p4601175911188"></a><a name="p4601175911188"></a>Clob</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p888815382187"><a name="p888815382187"></a><a name="p888815382187"></a>Yes</p>
</td>
</tr>
<tr id="row15982447131817"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p916785261818"><a name="p916785261818"></a><a name="p916785261818"></a>getConcurrency()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p7601135941820"><a name="p7601135941820"></a><a name="p7601135941820"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p69821347151817"><a name="p69821347151817"></a><a name="p69821347151817"></a>Yes</p>
</td>
</tr>
<tr id="row6964105081812"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p14167252201818"><a name="p14167252201818"></a><a name="p14167252201818"></a>getCursorName()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p8601195916187"><a name="p8601195916187"></a><a name="p8601195916187"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1796418502181"><a name="p1796418502181"></a><a name="p1796418502181"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row12841969"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14236385"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14236385"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14236385"></a>getDate(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16603339"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16603339"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16603339"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62997085"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62997085"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62997085"></a>Yes</p>
</td>
</tr>
<tr id="row1468282820355"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p56832028113520"><a name="p56832028113520"></a><a name="p56832028113520"></a>getDate​(int columnIndex, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p26831028163517"><a name="p26831028163517"></a><a name="p26831028163517"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p136831228183513"><a name="p136831228183513"></a><a name="p136831228183513"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row50511209"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p11161676"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p11161676"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p11161676"></a>getDate(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15103007"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15103007"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p15103007"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14184749"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14184749"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p14184749"></a>Yes</p>
</td>
</tr>
<tr id="row38911415359"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p489154123519"><a name="p489154123519"></a><a name="p489154123519"></a>getDate​(String columnLabel, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1891241123517"><a name="p1891241123517"></a><a name="p1891241123517"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p989541113516"><a name="p989541113516"></a><a name="p989541113516"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row13594217"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13527273"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13527273"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p13527273"></a>getDouble(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p28026220"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p28026220"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p28026220"></a>double</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41300955"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41300955"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41300955"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row41466979"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p11054894"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p11054894"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p11054894"></a>getDouble(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6743552"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6743552"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6743552"></a>double</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p9000080"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p9000080"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p9000080"></a>Yes</p>
</td>
</tr>
<tr id="row38201214123612"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p559391115380"><a name="p559391115380"></a><a name="p559391115380"></a>getFetchDirection()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p182001415363"><a name="p182001415363"></a><a name="p182001415363"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p14820131413364"><a name="p14820131413364"></a><a name="p14820131413364"></a>Yes</p>
</td>
</tr>
<tr id="row20817417103611"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p65931711153817"><a name="p65931711153817"></a><a name="p65931711153817"></a>getFetchSize()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p108171217103613"><a name="p108171217103613"></a><a name="p108171217103613"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p148171317193613"><a name="p148171317193613"></a><a name="p148171317193613"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row7242208"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p37197239"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p37197239"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p37197239"></a>getFloat(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p43585013"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p43585013"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p43585013"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p48085230"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p48085230"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p48085230"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row65489272"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p24611107"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p24611107"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p24611107"></a>getFloat(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p31344718"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p31344718"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p31344718"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p7867526"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p7867526"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p7867526"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row14325715"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p32627271"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p32627271"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p32627271"></a>getInt(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22443184"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22443184"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22443184"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6955094"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6955094"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6955094"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row33075710"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p18341312"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p18341312"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p18341312"></a>getInt(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62026255"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62026255"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62026255"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22410405"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22410405"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p22410405"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row46900816"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49431493"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49431493"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49431493"></a>getLong(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41141453"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41141453"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41141453"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p3722081"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p3722081"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p3722081"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row63052572"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41897484"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41897484"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p41897484"></a>getLong(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62935451"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62935451"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62935451"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16006740"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16006740"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16006740"></a>Yes</p>
</td>
</tr>
<tr id="row026984415386"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p192695449384"><a name="p192695449384"></a><a name="p192695449384"></a>getMetaData()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p826910449380"><a name="p826910449380"></a><a name="p826910449380"></a>ResultSetMetaData</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p226944463814"><a name="p226944463814"></a><a name="p226944463814"></a>Yes</p>
</td>
</tr>
<tr id="row1823014634014"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p11210142734018"><a name="p11210142734018"></a><a name="p11210142734018"></a>getObject​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1115163716407"><a name="p1115163716407"></a><a name="p1115163716407"></a>Object</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p323011604013"><a name="p323011604013"></a><a name="p323011604013"></a>Yes</p>
</td>
</tr>
<tr id="row158525814016"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p15210627154013"><a name="p15210627154013"></a><a name="p15210627154013"></a>getObject​(int columnIndex, Class&lt;T&gt; type)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1715173719406"><a name="p1715173719406"></a><a name="p1715173719406"></a>&lt;T&gt; T</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p2853108114010"><a name="p2853108114010"></a><a name="p2853108114010"></a>Yes</p>
</td>
</tr>
<tr id="row7675131112404"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p7211627144017"><a name="p7211627144017"></a><a name="p7211627144017"></a>getObject​(int columnIndex, Map&lt;String,​Class&lt;?&gt;&gt; map)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p151511737134018"><a name="p151511737134018"></a><a name="p151511737134018"></a>Object</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p12676151184012"><a name="p12676151184012"></a><a name="p12676151184012"></a>Yes</p>
</td>
</tr>
<tr id="row181722014184019"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p8211152716408"><a name="p8211152716408"></a><a name="p8211152716408"></a>getObject​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p615111378408"><a name="p615111378408"></a><a name="p615111378408"></a>Object</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p14173201484016"><a name="p14173201484016"></a><a name="p14173201484016"></a>Yes</p>
</td>
</tr>
<tr id="row769541684013"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p8211142713401"><a name="p8211142713401"></a><a name="p8211142713401"></a>getObject​(String columnLabel, Class&lt;T&gt; type)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p6152113754017"><a name="p6152113754017"></a><a name="p6152113754017"></a>&lt;T&gt; T</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p12695181620402"><a name="p12695181620402"></a><a name="p12695181620402"></a>Yes</p>
</td>
</tr>
<tr id="row1285412200400"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1121111278409"><a name="p1121111278409"></a><a name="p1121111278409"></a>getObject​(String columnLabel, Map&lt;String,​Class&lt;?&gt;&gt; map)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p715216373404"><a name="p715216373404"></a><a name="p715216373404"></a>Object</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1485462011408"><a name="p1485462011408"></a><a name="p1485462011408"></a>Yes</p>
</td>
</tr>
<tr id="row1732816944320"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p43283910431"><a name="p43283910431"></a><a name="p43283910431"></a>getRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p23281394432"><a name="p23281394432"></a><a name="p23281394432"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p15328694436"><a name="p15328694436"></a><a name="p15328694436"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row43050870"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p50546749"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p50546749"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p50546749"></a>getShort(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p66261712"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p66261712"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p66261712"></a>short</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p66925931"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p66925931"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p66925931"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row57413447"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38029368"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38029368"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38029368"></a>getShort(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p3257083"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p3257083"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p3257083"></a>short</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p4001352"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p4001352"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p4001352"></a>Yes</p>
</td>
</tr>
<tr id="row0336132711448"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1716163714449"><a name="p1716163714449"></a><a name="p1716163714449"></a>getSQLXML​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p11537124434414"><a name="p11537124434414"></a><a name="p11537124434414"></a>SQLXML</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p7336162754414"><a name="p7336162754414"></a><a name="p7336162754414"></a>Yes</p>
</td>
</tr>
<tr id="row26671131164420"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p11716143713447"><a name="p11716143713447"></a><a name="p11716143713447"></a>getSQLXML​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p195371044134414"><a name="p195371044134414"></a><a name="p195371044134414"></a>SQLXML</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p8667331174411"><a name="p8667331174411"></a><a name="p8667331174411"></a>Yes</p>
</td>
</tr>
<tr id="row19830334114417"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p197161937144413"><a name="p197161937144413"></a><a name="p197161937144413"></a>getStatement()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1753724413449"><a name="p1753724413449"></a><a name="p1753724413449"></a>Statement</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p208301434124411"><a name="p208301434124411"></a><a name="p208301434124411"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row10745073"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16787348"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16787348"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16787348"></a>getString(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6437320"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6437320"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6437320"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25157476"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25157476"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25157476"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row58277829"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p56787308"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p56787308"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p56787308"></a>getString(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p27847433"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p27847433"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p27847433"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p23219719"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p23219719"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p23219719"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row10745073"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16787348"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16787348"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p16787348"></a>getNString(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6437320"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6437320"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p6437320"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25157476"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25157476"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25157476"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row58277829"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p56787308"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p56787308"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p56787308"></a>getNString(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p27847433"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p27847433"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p27847433"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p23219719"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p23219719"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p23219719"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row22685569"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62447280"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62447280"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p62447280"></a>getTime(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p10819926"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p10819926"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p10819926"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p2686793"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p2686793"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p2686793"></a>Yes</p>
</td>
</tr>
<tr id="row891213819459"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p12912683459"><a name="p12912683459"></a><a name="p12912683459"></a>getTime​(int columnIndex, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p69121987454"><a name="p69121987454"></a><a name="p69121987454"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p119124844517"><a name="p119124844517"></a><a name="p119124844517"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row8182316"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p26396584"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p26396584"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p26396584"></a>getTime(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p30479634"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p30479634"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p30479634"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p58167655"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p58167655"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p58167655"></a>Yes</p>
</td>
</tr>
<tr id="row1915315134518"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1915141514453"><a name="p1915141514453"></a><a name="p1915141514453"></a>getTime​(String columnLabel, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p79151215184515"><a name="p79151215184515"></a><a name="p79151215184515"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p17915515174511"><a name="p17915515174511"></a><a name="p17915515174511"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row62986868"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p32953584"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p32953584"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p32953584"></a>getTimestamp(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p59403975"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p59403975"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p59403975"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p64476072"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p64476072"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p64476072"></a>Yes</p>
</td>
</tr>
<tr id="row1248652164510"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p9491652174516"><a name="p9491652174516"></a><a name="p9491652174516"></a>getTimestamp​(int columnIndex, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p14915524451"><a name="p14915524451"></a><a name="p14915524451"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p124914523451"><a name="p124914523451"></a><a name="p124914523451"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row61788643"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p39694886"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p39694886"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p39694886"></a>getTimestamp(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p26795991"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p26795991"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p26795991"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p53047311"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p53047311"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p53047311"></a>Yes</p>
</td>
</tr>
<tr id="row1376355574514"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1776385564517"><a name="p1776385564517"></a><a name="p1776385564517"></a>getTimestamp​(String columnLabel, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1976315519457"><a name="p1976315519457"></a><a name="p1976315519457"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p17636558456"><a name="p17636558456"></a><a name="p17636558456"></a>Yes</p>
</td>
</tr>
<tr id="row17116431154619"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p7116203114464"><a name="p7116203114464"></a><a name="p7116203114464"></a>getType()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1611793144610"><a name="p1611793144610"></a><a name="p1611793144610"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1011715311464"><a name="p1011715311464"></a><a name="p1011715311464"></a>Yes</p>
</td>
</tr>
<tr id="row22274564466"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p157291500476"><a name="p157291500476"></a><a name="p157291500476"></a>getWarnings()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p2524271470"><a name="p2524271470"></a><a name="p2524271470"></a>SQLWarning</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p6227056184611"><a name="p6227056184611"></a><a name="p6227056184611"></a>Yes</p>
</td>
</tr>
<tr id="row57154598465"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1073017014718"><a name="p1073017014718"></a><a name="p1073017014718"></a>insertRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1524187164715"><a name="p1524187164715"></a><a name="p1524187164715"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p11715059184619"><a name="p11715059184619"></a><a name="p11715059184619"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row60044070"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42820400"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42820400"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42820400"></a>isAfterLast()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p50021150"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p50021150"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p50021150"></a><span id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text1184748175018"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text1184748175018"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text1184748175018"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25721631"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25721631"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p25721631"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row21069215"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42424630"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42424630"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p42424630"></a>isBeforeFirst()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49246401"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49246401"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p49246401"></a><span id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text859069205016"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text859069205016"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text859069205016"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p60404468"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p60404468"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p60404468"></a>Yes</p>
</td>
</tr>
<tr id="row165391523174713"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p135391823124715"><a name="p135391823124715"></a><a name="p135391823124715"></a>isClosed()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p18539152313476"><a name="p18539152313476"></a><a name="p18539152313476"></a><span id="text3668112015513"><a name="text3668112015513"></a><a name="text3668112015513"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p19539723104719"><a name="p19539723104719"></a><a name="p19539723104719"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row47320199"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p1987806"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p1987806"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p1987806"></a>isFirst()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p40429173"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p40429173"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p40429173"></a><span id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text632871065014"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text632871065014"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text632871065014"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p21180381"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p21180381"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p21180381"></a>Yes</p>
</td>
</tr>
<tr id="row4997165713477"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p15712974816"><a name="p15712974816"></a><a name="p15712974816"></a>isLast()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p599855724717"><a name="p599855724717"></a><a name="p599855724717"></a><span id="text67761176485"><a name="text67761176485"></a><a name="text67761176485"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p19998165724717"><a name="p19998165724717"></a><a name="p19998165724717"></a>Yes</p>
</td>
</tr>
<tr id="row17300417484"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p67169194810"><a name="p67169194810"></a><a name="p67169194810"></a>last()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p123016115480"><a name="p123016115480"></a><a name="p123016115480"></a><span id="text116181326144817"><a name="text116181326144817"></a><a name="text116181326144817"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p4301141164812"><a name="p4301141164812"></a><a name="p4301141164812"></a>Yes</p>
</td>
</tr>
<tr id="row188573411481"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p17712092484"><a name="p17712092484"></a><a name="p17712092484"></a>moveToCurrentRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p18857946480"><a name="p18857946480"></a><a name="p18857946480"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p198571848480"><a name="p198571848480"></a><a name="p198571848480"></a>Yes</p>
</td>
</tr>
<tr id="row2822271481"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p47119944811"><a name="p47119944811"></a><a name="p47119944811"></a>moveToInsertRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p882317714813"><a name="p882317714813"></a><a name="p882317714813"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p17823074486"><a name="p17823074486"></a><a name="p17823074486"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_row48818406"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p28866273"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p28866273"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p28866273"></a>next()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38480723"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38480723"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p38480723"></a><span id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text161164115501"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text161164115501"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_text161164115501"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p30717404"><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p30717404"></a><a name="zh-cn_topic_0237120396_zh-cn_topic_0213179162_zh-cn_topic_0189249914_zh-cn_topic_0059779124_zh-cn_topic_0058965250_p30717404"></a>Yes</p>
</td>
</tr>
<tr id="row212262417544"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p11568182965919"><a name="p11568182965919"></a><a name="p11568182965919"></a>previous()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p22405918599"><a name="p22405918599"></a><a name="p22405918599"></a><span id="text136141741584"><a name="text136141741584"></a><a name="text136141741584"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p41221724175412"><a name="p41221724175412"></a><a name="p41221724175412"></a>Yes</p>
</td>
</tr>
<tr id="row94417281541"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p20568162911593"><a name="p20568162911593"></a><a name="p20568162911593"></a>refreshRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p424195917596"><a name="p424195917596"></a><a name="p424195917596"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p84592885417"><a name="p84592885417"></a><a name="p84592885417"></a>Yes</p>
</td>
</tr>
<tr id="row39731830115417"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p55682293594"><a name="p55682293594"></a><a name="p55682293594"></a>relative​(int rows)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p2024759165918"><a name="p2024759165918"></a><a name="p2024759165918"></a><span id="text085365285"><a name="text085365285"></a><a name="text085365285"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p0973530125415"><a name="p0973530125415"></a><a name="p0973530125415"></a>Yes</p>
</td>
</tr>
<tr id="row1719163414546"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p2568122910596"><a name="p2568122910596"></a><a name="p2568122910596"></a>rowDeleted()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p7247592598"><a name="p7247592598"></a><a name="p7247592598"></a><span id="text117231264810"><a name="text117231264810"></a><a name="text117231264810"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p15191133445412"><a name="p15191133445412"></a><a name="p15191133445412"></a>Yes</p>
</td>
</tr>
<tr id="row18187183725411"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p356812298594"><a name="p356812298594"></a><a name="p356812298594"></a>rowInserted()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p182495985918"><a name="p182495985918"></a><a name="p182495985918"></a><span id="text176741585819"><a name="text176741585819"></a><a name="text176741585819"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p151871637145413"><a name="p151871637145413"></a><a name="p151871637145413"></a>Yes</p>
</td>
</tr>
<tr id="row15142194019543"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p5568329175914"><a name="p5568329175914"></a><a name="p5568329175914"></a>rowUpdated()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p92455919593"><a name="p92455919593"></a><a name="p92455919593"></a><span id="text11470791688"><a name="text11470791688"></a><a name="text11470791688"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p614217401548"><a name="p614217401548"></a><a name="p614217401548"></a>Yes</p>
</td>
</tr>
<tr id="row15515154395413"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1956862920595"><a name="p1956862920595"></a><a name="p1956862920595"></a>setFetchDirection​(int direction)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1624145995911"><a name="p1624145995911"></a><a name="p1624145995911"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p3516443185414"><a name="p3516443185414"></a><a name="p3516443185414"></a>Yes</p>
</td>
</tr>
<tr id="row462964685414"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p12568929165910"><a name="p12568929165910"></a><a name="p12568929165910"></a>setFetchSize​(int rows)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p17249591596"><a name="p17249591596"></a><a name="p17249591596"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p56294469544"><a name="p56294469544"></a><a name="p56294469544"></a>Yes</p>
</td>
</tr>
<tr id="row5725164905418"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p155681729105915"><a name="p155681729105915"></a><a name="p155681729105915"></a>updateArray​(int columnIndex, Array x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p12248595595"><a name="p12248595595"></a><a name="p12248595595"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p3725154915542"><a name="p3725154915542"></a><a name="p3725154915542"></a>Yes</p>
</td>
</tr>
<tr id="row3122185375414"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1456852914595"><a name="p1456852914595"></a><a name="p1456852914595"></a>updateArray​(String columnLabel, Array x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p162465910594"><a name="p162465910594"></a><a name="p162465910594"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p171221453115413"><a name="p171221453115413"></a><a name="p171221453115413"></a>Yes</p>
</td>
</tr>
<tr id="row26201523559"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p25681129165918"><a name="p25681129165918"></a><a name="p25681129165918"></a>updateAsciiStream​(int columnIndex, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p724155914595"><a name="p724155914595"></a><a name="p724155914595"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p20620152145517"><a name="p20620152145517"></a><a name="p20620152145517"></a>Yes</p>
</td>
</tr>
<tr id="row197631137551"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p856852925920"><a name="p856852925920"></a><a name="p856852925920"></a>updateAsciiStream​(String columnLabel, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p22418592593"><a name="p22418592593"></a><a name="p22418592593"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p576310137552"><a name="p576310137552"></a><a name="p576310137552"></a>Yes</p>
</td>
</tr>
<tr id="row1128914232556"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1356813291594"><a name="p1356813291594"></a><a name="p1356813291594"></a>updateBigDecimal​(int columnIndex, BigDecimal x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p224155918598"><a name="p224155918598"></a><a name="p224155918598"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1828912375516"><a name="p1828912375516"></a><a name="p1828912375516"></a>Yes</p>
</td>
</tr>
<tr id="row821422645510"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1956812915598"><a name="p1956812915598"></a><a name="p1956812915598"></a>updateBigDecimal​(String columnLabel, BigDecimal x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p19241759155918"><a name="p19241759155918"></a><a name="p19241759155918"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p92141326185520"><a name="p92141326185520"></a><a name="p92141326185520"></a>Yes</p>
</td>
</tr>
<tr id="row88836385620"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p55681429115918"><a name="p55681429115918"></a><a name="p55681429115918"></a>updateBinaryStream​(int columnIndex, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1925105920591"><a name="p1925105920591"></a><a name="p1925105920591"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p108832395615"><a name="p108832395615"></a><a name="p108832395615"></a>Yes</p>
</td>
</tr>
<tr id="row19124111995913"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p656882925913"><a name="p656882925913"></a><a name="p656882925913"></a>updateBinaryStream​(String columnLabel, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p12525935920"><a name="p12525935920"></a><a name="p12525935920"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p12124131985916"><a name="p12124131985916"></a><a name="p12124131985916"></a>Yes</p>
</td>
</tr>
<tr id="row37331309591"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p9569112915594"><a name="p9569112915594"></a><a name="p9569112915594"></a>updateBoolean​(int columnIndex, boolean x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p13258590592"><a name="p13258590592"></a><a name="p13258590592"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1073300155912"><a name="p1073300155912"></a><a name="p1073300155912"></a>Yes</p>
</td>
</tr>
<tr id="row551075714588"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p856915295590"><a name="p856915295590"></a><a name="p856915295590"></a>updateBoolean​(String columnLabel, boolean x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p625159165910"><a name="p625159165910"></a><a name="p625159165910"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p2051165718588"><a name="p2051165718588"></a><a name="p2051165718588"></a>Yes</p>
</td>
</tr>
<tr id="row1534425595814"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1056942912593"><a name="p1056942912593"></a><a name="p1056942912593"></a>updateByte​(int columnIndex, byte x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p825115911591"><a name="p825115911591"></a><a name="p825115911591"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1534475520585"><a name="p1534475520585"></a><a name="p1534475520585"></a>Yes</p>
</td>
</tr>
<tr id="row743175325816"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1656952919598"><a name="p1656952919598"></a><a name="p1656952919598"></a>updateByte​(String columnLabel, byte x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1525175917593"><a name="p1525175917593"></a><a name="p1525175917593"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p19432532583"><a name="p19432532583"></a><a name="p19432532583"></a>Yes</p>
</td>
</tr>
<tr id="row1191319507589"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p20569162915595"><a name="p20569162915595"></a><a name="p20569162915595"></a>updateBytes​(int columnIndex, byte[] x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p32575935917"><a name="p32575935917"></a><a name="p32575935917"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1913550185817"><a name="p1913550185817"></a><a name="p1913550185817"></a>Yes</p>
</td>
</tr>
<tr id="row12723948195819"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p256932965917"><a name="p256932965917"></a><a name="p256932965917"></a>updateBytes​(String columnLabel, byte[] x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1225145912592"><a name="p1225145912592"></a><a name="p1225145912592"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1772354825812"><a name="p1772354825812"></a><a name="p1772354825812"></a>Yes</p>
</td>
</tr>
<tr id="row47611449585"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1156915296597"><a name="p1156915296597"></a><a name="p1156915296597"></a>updateCharacterStream​(int columnIndex, Reader x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p3257598598"><a name="p3257598598"></a><a name="p3257598598"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p177784485811"><a name="p177784485811"></a><a name="p177784485811"></a>Yes</p>
</td>
</tr>
<tr id="row11951811185812"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p13569112945914"><a name="p13569112945914"></a><a name="p13569112945914"></a>updateCharacterStream​(String columnLabel, Reader reader, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p182565910599"><a name="p182565910599"></a><a name="p182565910599"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p2195141117583"><a name="p2195141117583"></a><a name="p2195141117583"></a>Yes</p>
</td>
</tr>
<tr id="row19289125325719"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p4569129155910"><a name="p4569129155910"></a><a name="p4569129155910"></a>updateDate​(int columnIndex, Date x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p132655925913"><a name="p132655925913"></a><a name="p132655925913"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p82901532578"><a name="p82901532578"></a><a name="p82901532578"></a>Yes</p>
</td>
</tr>
<tr id="row0085115718"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p0569102945920"><a name="p0569102945920"></a><a name="p0569102945920"></a>updateDate​(String columnLabel, Date x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p22695914598"><a name="p22695914598"></a><a name="p22695914598"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p160651145712"><a name="p160651145712"></a><a name="p160651145712"></a>Yes</p>
</td>
</tr>
<tr id="row12507194845720"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p19569112905916"><a name="p19569112905916"></a><a name="p19569112905916"></a>updateDouble​(int columnIndex, double x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1926175945914"><a name="p1926175945914"></a><a name="p1926175945914"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p9507204875719"><a name="p9507204875719"></a><a name="p9507204875719"></a>Yes</p>
</td>
</tr>
<tr id="row9935104512576"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1457018298594"><a name="p1457018298594"></a><a name="p1457018298594"></a>updateDouble​(String columnLabel, double x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p13261359155911"><a name="p13261359155911"></a><a name="p13261359155911"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p179351745165711"><a name="p179351745165711"></a><a name="p179351745165711"></a>Yes</p>
</td>
</tr>
<tr id="row12736432579"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p25703293598"><a name="p25703293598"></a><a name="p25703293598"></a>updateFloat​(int columnIndex, float x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1026135916596"><a name="p1026135916596"></a><a name="p1026135916596"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p11274243185716"><a name="p11274243185716"></a><a name="p11274243185716"></a>Yes</p>
</td>
</tr>
<tr id="row368518329573"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p175700297592"><a name="p175700297592"></a><a name="p175700297592"></a>updateFloat​(String columnLabel, float x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1262594597"><a name="p1262594597"></a><a name="p1262594597"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p7685193235710"><a name="p7685193235710"></a><a name="p7685193235710"></a>Yes</p>
</td>
</tr>
<tr id="row4854124010572"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p19570182925917"><a name="p19570182925917"></a><a name="p19570182925917"></a>updateInt​(int columnIndex, int x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p626155955912"><a name="p626155955912"></a><a name="p626155955912"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p8855184065720"><a name="p8855184065720"></a><a name="p8855184065720"></a>Yes</p>
</td>
</tr>
<tr id="row17196123545720"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p85701329155913"><a name="p85701329155913"></a><a name="p85701329155913"></a>updateInt​(String columnLabel, int x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p2269592590"><a name="p2269592590"></a><a name="p2269592590"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1319653565710"><a name="p1319653565710"></a><a name="p1319653565710"></a>Yes</p>
</td>
</tr>
<tr id="row31481222195711"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p757062917595"><a name="p757062917595"></a><a name="p757062917595"></a>updateLong​(int columnIndex, long x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p15262059135919"><a name="p15262059135919"></a><a name="p15262059135919"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p16148132295715"><a name="p16148132295715"></a><a name="p16148132295715"></a>Yes</p>
</td>
</tr>
<tr id="row4446930135712"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1057002935912"><a name="p1057002935912"></a><a name="p1057002935912"></a>updateLong​(String columnLabel, long x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p18262059145920"><a name="p18262059145920"></a><a name="p18262059145920"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p24469302576"><a name="p24469302576"></a><a name="p24469302576"></a>Yes</p>
</td>
</tr>
<tr id="row1615104412569"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p10570132975914"><a name="p10570132975914"></a><a name="p10570132975914"></a>updateNull​(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p526165935911"><a name="p526165935911"></a><a name="p526165935911"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p19161644125619"><a name="p19161644125619"></a><a name="p19161644125619"></a>Yes</p>
</td>
</tr>
<tr id="row867694112568"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p5570132911592"><a name="p5570132911592"></a><a name="p5570132911592"></a>updateNull​(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1227115925911"><a name="p1227115925911"></a><a name="p1227115925911"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1067711410562"><a name="p1067711410562"></a><a name="p1067711410562"></a>Yes</p>
</td>
</tr>
<tr id="row1385223645615"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p7570192915914"><a name="p7570192915914"></a><a name="p7570192915914"></a>updateObject​(int columnIndex, Object x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p727059145917"><a name="p727059145917"></a><a name="p727059145917"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p118526364565"><a name="p118526364565"></a><a name="p118526364565"></a>Yes</p>
</td>
</tr>
<tr id="row16212141217561"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p15570122911598"><a name="p15570122911598"></a><a name="p15570122911598"></a>updateObject​(int columnIndex, Object x, int scaleOrLength)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p127135955916"><a name="p127135955916"></a><a name="p127135955916"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p721221216563"><a name="p721221216563"></a><a name="p721221216563"></a>Yes</p>
</td>
</tr>
<tr id="row1585222805619"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p17570192985913"><a name="p17570192985913"></a><a name="p17570192985913"></a>updateObject​(String columnLabel, Object x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p7276598599"><a name="p7276598599"></a><a name="p7276598599"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p48525284567"><a name="p48525284567"></a><a name="p48525284567"></a>Yes</p>
</td>
</tr>
<tr id="row1668223314567"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p165701529205912"><a name="p165701529205912"></a><a name="p165701529205912"></a>updateObject​(String columnLabel, Object x, int scaleOrLength)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p6272594591"><a name="p6272594591"></a><a name="p6272594591"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p4682193317564"><a name="p4682193317564"></a><a name="p4682193317564"></a>Yes</p>
</td>
</tr>
<tr id="row12370624145618"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p9571229155912"><a name="p9571229155912"></a><a name="p9571229155912"></a>updateRow()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p122765955919"><a name="p122765955919"></a><a name="p122765955919"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p137019242560"><a name="p137019242560"></a><a name="p137019242560"></a>Yes</p>
</td>
</tr>
<tr id="row1684201717563"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p125711729165913"><a name="p125711729165913"></a><a name="p125711729165913"></a>updateShort​(int columnIndex, short x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p727159125910"><a name="p727159125910"></a><a name="p727159125910"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p784917145615"><a name="p784917145615"></a><a name="p784917145615"></a>Yes</p>
</td>
</tr>
<tr id="row17584161425617"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1557162914592"><a name="p1557162914592"></a><a name="p1557162914592"></a>updateShort​(String columnLabel, short x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1271359135914"><a name="p1271359135914"></a><a name="p1271359135914"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p20584214155617"><a name="p20584214155617"></a><a name="p20584214155617"></a>Yes</p>
</td>
</tr>
<tr id="row1582315910562"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p657152919592"><a name="p657152919592"></a><a name="p657152919592"></a>updateSQLXML​(int columnIndex, SQLXML xmlObject)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p327135911597"><a name="p327135911597"></a><a name="p327135911597"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1582318917567"><a name="p1582318917567"></a><a name="p1582318917567"></a>Yes</p>
</td>
</tr>
<tr id="row716043335510"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p14571152914595"><a name="p14571152914595"></a><a name="p14571152914595"></a>updateSQLXML​(String columnLabel, SQLXML xmlObject)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1427135914590"><a name="p1427135914590"></a><a name="p1427135914590"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p1816073315551"><a name="p1816073315551"></a><a name="p1816073315551"></a>Yes</p>
</td>
</tr>
<tr id="row135309368553"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p757119293596"><a name="p757119293596"></a><a name="p757119293596"></a>updateString​(int columnIndex, String x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1027145955914"><a name="p1027145955914"></a><a name="p1027145955914"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p135314366552"><a name="p135314366552"></a><a name="p135314366552"></a>Yes</p>
</td>
</tr>
<tr id="row9673104017553"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p8571829145915"><a name="p8571829145915"></a><a name="p8571829145915"></a>updateString​(String columnLabel, String x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p627135925918"><a name="p627135925918"></a><a name="p627135925918"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p176731340185510"><a name="p176731340185510"></a><a name="p176731340185510"></a>Yes</p>
</td>
</tr>
<tr id="row168724375514"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p55710295592"><a name="p55710295592"></a><a name="p55710295592"></a>updateTime​(int columnIndex, Time x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p927125965920"><a name="p927125965920"></a><a name="p927125965920"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p7687743145516"><a name="p7687743145516"></a><a name="p7687743145516"></a>Yes</p>
</td>
</tr>
<tr id="row1955494645512"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p1857122914595"><a name="p1857122914595"></a><a name="p1857122914595"></a>updateTime​(String columnLabel, Time x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1627195913598"><a name="p1627195913598"></a><a name="p1627195913598"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p14554046125512"><a name="p14554046125512"></a><a name="p14554046125512"></a>Yes</p>
</td>
</tr>
<tr id="row128744915515"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p10571329155913"><a name="p10571329155913"></a><a name="p10571329155913"></a>updateTimestamp​(int columnIndex, Timestamp x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p1627155917592"><a name="p1627155917592"></a><a name="p1627155917592"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p12871049135513"><a name="p12871049135513"></a><a name="p12871049135513"></a>Yes</p>
</td>
</tr>
<tr id="row599852165510"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p17571122920596"><a name="p17571122920596"></a><a name="p17571122920596"></a>updateTimestamp​(String columnLabel, Timestamp x)</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p42715598591"><a name="p42715598591"></a><a name="p42715598591"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p199152125512"><a name="p199152125512"></a><a name="p199152125512"></a>Yes</p>
</td>
</tr>
<tr id="row14138557125510"><td class="cellrowborder" valign="top" width="34.483448344834486%" headers="mcps1.2.4.1.1 "><p id="p9571729145918"><a name="p9571729145918"></a><a name="p9571729145918"></a>wasNull()</p>
</td>
<td class="cellrowborder" valign="top" width="32.78327832783278%" headers="mcps1.2.4.1.2 "><p id="p102735985917"><a name="p102735985917"></a><a name="p102735985917"></a><span id="text145904221181"><a name="text145904221181"></a><a name="text145904221181"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.73327332733273%" headers="mcps1.2.4.1.3 "><p id="p113816578557"><a name="p113816578557"></a><a name="p113816578557"></a>Yes</p>
</td>
</tr>
</tbody>
</table>


>![](public_sys-resources/icon-note.png) **说明：** 
>
>-   一个Statement不能有多个处于“open”状态的ResultSet。

>-   用于遍历结果集（ResultSet）的游标（Cursor）在被提交后不能保持“open”的状态。

