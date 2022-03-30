# java.sql.Statement<a name="ZH-CN_TOPIC_0289900015"></a>

java.sql.Statement是SQL语句接口。

**表 1**  对java.sql.Statement的支持情况

<a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_table29004196"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row609630"><th class="cellrowborder" valign="top" width="32.22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p1185663"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p1185663"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p1185663"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="35.18%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p27392696"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p27392696"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p27392696"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="32.6%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25146373"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25146373"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25146373"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="row1940543416342"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p640523423416"><a name="p640523423416"></a><a name="p640523423416"></a>addBatch​(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p540512346348"><a name="p540512346348"></a><a name="p540512346348"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p440673403415"><a name="p440673403415"></a><a name="p440673403415"></a>Yes</p>
</td>
</tr>
<tr id="row191321120183514"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1613210202354"><a name="p1613210202354"></a><a name="p1613210202354"></a>clearBatch()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p181329200354"><a name="p181329200354"></a><a name="p181329200354"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p16132112015350"><a name="p16132112015350"></a><a name="p16132112015350"></a>Yes</p>
</td>
</tr>
<tr id="row5284032103510"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p428493293511"><a name="p428493293511"></a><a name="p428493293511"></a>clearWarnings()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1528423233512"><a name="p1528423233512"></a><a name="p1528423233512"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1628473218353"><a name="p1628473218353"></a><a name="p1628473218353"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row37638936"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p24508923"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p24508923"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p24508923"></a>close()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p21120241"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p21120241"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p21120241"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p42500988"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p42500988"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p42500988"></a>Yes</p>
</td>
</tr>
<tr id="row847713073613"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p13477133073618"><a name="p13477133073618"></a><a name="p13477133073618"></a>closeOnCompletion()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p94772030133610"><a name="p94772030133610"></a><a name="p94772030133610"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p124771930103611"><a name="p124771930103611"></a><a name="p124771930103611"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row37959876"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p16000688"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p16000688"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p16000688"></a>execute(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p61133019"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p61133019"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p61133019"></a><span id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_text8662312165011"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_text8662312165011"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_text8662312165011"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p23615318"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p23615318"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p23615318"></a>Yes</p>
</td>
</tr>
<tr id="row1690211123385"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p4902112173814"><a name="p4902112173814"></a><a name="p4902112173814"></a>execute​(String sql, int autoGeneratedKeys)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1290211128387"><a name="p1290211128387"></a><a name="p1290211128387"></a><span id="text9800162923817"><a name="text9800162923817"></a><a name="text9800162923817"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p11902121213815"><a name="p11902121213815"></a><a name="p11902121213815"></a>Yes</p>
</td>
</tr>
<tr id="row16314163933820"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p331413923819"><a name="p331413923819"></a><a name="p331413923819"></a>execute​(String sql, int[] columnIndexes)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p9314839203818"><a name="p9314839203818"></a><a name="p9314839203818"></a><span id="text334154973819"><a name="text334154973819"></a><a name="text334154973819"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p163147397386"><a name="p163147397386"></a><a name="p163147397386"></a>Yes</p>
</td>
</tr>
<tr id="row267415216383"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p106741552103810"><a name="p106741552103810"></a><a name="p106741552103810"></a>execute​(String sql, String[] columnNames)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1067410528388"><a name="p1067410528388"></a><a name="p1067410528388"></a><span id="text1766515053910"><a name="text1766515053910"></a><a name="text1766515053910"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1467445243820"><a name="p1467445243820"></a><a name="p1467445243820"></a>Yes</p>
</td>
</tr>
<tr id="row147485103913"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p97495133918"><a name="p97495133918"></a><a name="p97495133918"></a>executeBatch()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p197410563915"><a name="p197410563915"></a><a name="p197410563915"></a><span id="text12823334203913"><a name="text12823334203913"></a><a name="text12823334203913"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p177419543916"><a name="p177419543916"></a><a name="p177419543916"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row43652314"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p58916306"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p58916306"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p58916306"></a>executeQuery(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p33934608"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p33934608"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p33934608"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p39492775"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p39492775"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p39492775"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row12742307"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p59468506"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p59468506"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p59468506"></a>executeUpdate(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p51032441"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p51032441"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p51032441"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25652689"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25652689"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25652689"></a>Yes</p>
</td>
</tr>
<tr id="row1276495816395"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p117648584396"><a name="p117648584396"></a><a name="p117648584396"></a>executeUpdate​(String sql, int autoGeneratedKeys)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1076413584397"><a name="p1076413584397"></a><a name="p1076413584397"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p177641658143910"><a name="p177641658143910"></a><a name="p177641658143910"></a>Yes</p>
</td>
</tr>
<tr id="row12111348134017"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p191274813407"><a name="p191274813407"></a><a name="p191274813407"></a>executeUpdate​(String sql, int[] columnIndexes)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p191224814018"><a name="p191224814018"></a><a name="p191224814018"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p141224834015"><a name="p141224834015"></a><a name="p141224834015"></a>Yes</p>
</td>
</tr>
<tr id="row12396181111416"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p43961211174111"><a name="p43961211174111"></a><a name="p43961211174111"></a>executeUpdate​(String sql, String[] columnNames)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p10396131154111"><a name="p10396131154111"></a><a name="p10396131154111"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1839651194111"><a name="p1839651194111"></a><a name="p1839651194111"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row17415287"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p32431541"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p32431541"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p32431541"></a>getConnection()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p29842167"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p29842167"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p29842167"></a>Connection</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p3770917"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p3770917"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p3770917"></a>Yes</p>
</td>
</tr>
<tr id="row17536174710412"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p4536134711413"><a name="p4536134711413"></a><a name="p4536134711413"></a>getFetchDirection()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1053694717419"><a name="p1053694717419"></a><a name="p1053694717419"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p155362471419"><a name="p155362471419"></a><a name="p155362471419"></a>Yes</p>
</td>
</tr>
<tr id="row1455316813421"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p255319812424"><a name="p255319812424"></a><a name="p255319812424"></a>getFetchSize()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p135538884211"><a name="p135538884211"></a><a name="p135538884211"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p155368194213"><a name="p155368194213"></a><a name="p155368194213"></a>Yes</p>
</td>
</tr>
<tr id="row17436142416421"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p143632418421"><a name="p143632418421"></a><a name="p143632418421"></a>getGeneratedKeys()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p5436202419423"><a name="p5436202419423"></a><a name="p5436202419423"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1143614244421"><a name="p1143614244421"></a><a name="p1143614244421"></a>Yes</p>
</td>
</tr>
<tr id="row1063114444219"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p363134464215"><a name="p363134464215"></a><a name="p363134464215"></a>getMaxFieldSize()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p56317447426"><a name="p56317447426"></a><a name="p56317447426"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p563744134215"><a name="p563744134215"></a><a name="p563744134215"></a>Yes</p>
</td>
</tr>
<tr id="row14501131124313"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p2700103516431"><a name="p2700103516431"></a><a name="p2700103516431"></a>getMaxRows()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p19841957114314"><a name="p19841957114314"></a><a name="p19841957114314"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p13501116437"><a name="p13501116437"></a><a name="p13501116437"></a>Yes</p>
</td>
</tr>
<tr id="row175816190430"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1270013516438"><a name="p1270013516438"></a><a name="p1270013516438"></a>getMoreResults()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p085135713431"><a name="p085135713431"></a><a name="p085135713431"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p358419194310"><a name="p358419194310"></a><a name="p358419194310"></a>Yes</p>
</td>
</tr>
<tr id="row1559682664313"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1701635124314"><a name="p1701635124314"></a><a name="p1701635124314"></a>getMoreResults​(int current)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p128515572430"><a name="p128515572430"></a><a name="p128515572430"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1559632610438"><a name="p1559632610438"></a><a name="p1559632610438"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row65640894"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p8880240"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p8880240"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p8880240"></a>getResultSet()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p30949584"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p30949584"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p30949584"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p15409505"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p15409505"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p15409505"></a>Yes</p>
</td>
</tr>
<tr id="row122941237174513"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p10261556204516"><a name="p10261556204516"></a><a name="p10261556204516"></a>getResultSetConcurrency()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p9804220466"><a name="p9804220466"></a><a name="p9804220466"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p17294737154517"><a name="p17294737154517"></a><a name="p17294737154517"></a>Yes</p>
</td>
</tr>
<tr id="row978116405453"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p6261756104515"><a name="p6261756104515"></a><a name="p6261756104515"></a>getResultSetHoldability()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p68041828463"><a name="p68041828463"></a><a name="p68041828463"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p15781640194512"><a name="p15781640194512"></a><a name="p15781640194512"></a>Yes</p>
</td>
</tr>
<tr id="row47071349174517"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p192665654510"><a name="p192665654510"></a><a name="p192665654510"></a>getResultSetType()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p158046214616"><a name="p158046214616"></a><a name="p158046214616"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p370744924512"><a name="p370744924512"></a><a name="p370744924512"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row6055731"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p44295845"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p44295845"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p44295845"></a>getQueryTimeout()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p53884282"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p53884282"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p53884282"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p66416078"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p66416078"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p66416078"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row11397445"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p18756861"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p18756861"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p18756861"></a>getUpdateCount()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p35141355"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p35141355"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p35141355"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p6666636"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p6666636"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p6666636"></a>Yes</p>
</td>
</tr>
<tr id="row450715293468"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1450702954610"><a name="p1450702954610"></a><a name="p1450702954610"></a>getWarnings()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p12507329104612"><a name="p12507329104612"></a><a name="p12507329104612"></a>SQLWarning</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p15071929174611"><a name="p15071929174611"></a><a name="p15071929174611"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row17787427"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25778201"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25778201"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p25778201"></a>isClosed()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p24733930"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p24733930"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p24733930"></a><span id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_text14830113155012"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_text14830113155012"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_text14830113155012"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p1527124"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p1527124"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p1527124"></a>Yes</p>
</td>
</tr>
<tr id="row253118458461"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p195316453468"><a name="p195316453468"></a><a name="p195316453468"></a>isCloseOnCompletion()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p153112456466"><a name="p153112456466"></a><a name="p153112456466"></a><span id="text1831754124613"><a name="text1831754124613"></a><a name="text1831754124613"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p153184518467"><a name="p153184518467"></a><a name="p153184518467"></a>Yes</p>
</td>
</tr>
<tr id="row98591459478"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p138594519471"><a name="p138594519471"></a><a name="p138594519471"></a>isPoolable()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1285915544718"><a name="p1285915544718"></a><a name="p1285915544718"></a><span id="text26481612134715"><a name="text26481612134715"></a><a name="text26481612134715"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1385915164716"><a name="p1385915164716"></a><a name="p1385915164716"></a>Yes</p>
</td>
</tr>
<tr id="row137104331481"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1271133314483"><a name="p1271133314483"></a><a name="p1271133314483"></a>setCursorName​(String name)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p12711533174812"><a name="p12711533174812"></a><a name="p12711533174812"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p3711193311485"><a name="p3711193311485"></a><a name="p3711193311485"></a>Yes</p>
</td>
</tr>
<tr id="row16208124684816"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1520884615486"><a name="p1520884615486"></a><a name="p1520884615486"></a>setEscapeProcessing​(boolean enable)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p720819462482"><a name="p720819462482"></a><a name="p720819462482"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p182081646144811"><a name="p182081646144811"></a><a name="p182081646144811"></a>Yes</p>
</td>
</tr>
<tr id="row192759918494"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p1327518944920"><a name="p1327518944920"></a><a name="p1327518944920"></a>setFetchDirection​(int direction)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1927509124911"><a name="p1927509124911"></a><a name="p1927509124911"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p162752954910"><a name="p162752954910"></a><a name="p162752954910"></a>Yes</p>
</td>
</tr>
<tr id="row3513182912497"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p101408016504"><a name="p101408016504"></a><a name="p101408016504"></a>setMaxFieldSize​(int max)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1651322911497"><a name="p1651322911497"></a><a name="p1651322911497"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1951315292499"><a name="p1951315292499"></a><a name="p1951315292499"></a>Yes</p>
</td>
</tr>
<tr id="row0737812155017"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p673721225010"><a name="p673721225010"></a><a name="p673721225010"></a>setMaxRows​(int max)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p173721255010"><a name="p173721255010"></a><a name="p173721255010"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p1373751215503"><a name="p1373751215503"></a><a name="p1373751215503"></a>Yes</p>
</td>
</tr>
<tr id="row163871948135216"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p10387124820520"><a name="p10387124820520"></a><a name="p10387124820520"></a>setPoolable​(boolean poolable)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p9387348205211"><a name="p9387348205211"></a><a name="p9387348205211"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p143875486522"><a name="p143875486522"></a><a name="p143875486522"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_row18856521"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p43132848"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p43132848"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p43132848"></a>setQueryTimeout(int seconds)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p12991834"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p12991834"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p12991834"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p37346808"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p37346808"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_zh-cn_topic_0058965266_p37346808"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_row38611207145243"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p40500042145243"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p40500042145243"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p40500042145243"></a>setFetchSize(int rows)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p59277941145243"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p59277941145243"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p59277941145243"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p36783921145243"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p36783921145243"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_p36783921145243"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_r1827afa9d2134344a186a023d0e33bc7"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_af6cbc3a0b3ff452d863c7b081ee4d653"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_af6cbc3a0b3ff452d863c7b081ee4d653"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_af6cbc3a0b3ff452d863c7b081ee4d653"></a>cancel()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_a233738808bb94ae884b017c0b91c8f57"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_a233738808bb94ae884b017c0b91c8f57"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_a233738808bb94ae884b017c0b91c8f57"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_a7733e8a283e94ce9b05f62edcb60533f"><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_a7733e8a283e94ce9b05f62edcb60533f"></a><a name="zh-cn_topic_0237120398_zh-cn_topic_0213179164_zh-cn_topic_0189250755_zh-cn_topic_0059777679_a7733e8a283e94ce9b05f62edcb60533f"></a>Yes</p>
</td>
</tr>
<tr id="row37088558211"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p97081555172119"><a name="p97081555172119"></a><a name="p97081555172119"></a>executeLargeUpdate(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1670810558211"><a name="p1670810558211"></a><a name="p1670810558211"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p7708455172110"><a name="p7708455172110"></a><a name="p7708455172110"></a>No</p>
</td>
</tr>
<tr id="row11331123122213"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p143311135221"><a name="p143311135221"></a><a name="p143311135221"></a>getLargeUpdateCount()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1933110317222"><a name="p1933110317222"></a><a name="p1933110317222"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p23312372219"><a name="p23312372219"></a><a name="p23312372219"></a>No</p>
</td>
</tr>
<tr id="row16355792219"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p186358712212"><a name="p186358712212"></a><a name="p186358712212"></a>executeLargeBatch()</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p56358710226"><a name="p56358710226"></a><a name="p56358710226"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p263527152214"><a name="p263527152214"></a><a name="p263527152214"></a>No</p>
</td>
</tr>
<tr id="row1070771211226"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p19707141213224"><a name="p19707141213224"></a><a name="p19707141213224"></a>executeLargeUpdate(String sql, int autoGeneratedKeys)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p1707131218221"><a name="p1707131218221"></a><a name="p1707131218221"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p4707161218223"><a name="p4707161218223"></a><a name="p4707161218223"></a>No</p>
</td>
</tr>
<tr id="row6971116102213"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p0971916122219"><a name="p0971916122219"></a><a name="p0971916122219"></a>executeLargeUpdate(String sql, int[] columnIndexes)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p19971216182212"><a name="p19971216182212"></a><a name="p19971216182212"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p2971916152217"><a name="p2971916152217"></a><a name="p2971916152217"></a>No</p>
</td>
</tr>
<tr id="row0846142252213"><td class="cellrowborder" valign="top" width="32.22%" headers="mcps1.2.4.1.1 "><p id="p6847122212219"><a name="p6847122212219"></a><a name="p6847122212219"></a>executeLargeUpdate(String sql, String[] columnNames)</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p9847192211225"><a name="p9847192211225"></a><a name="p9847192211225"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="32.6%" headers="mcps1.2.4.1.3 "><p id="p784712223228"><a name="p784712223228"></a><a name="p784712223228"></a>No</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>-   通过setFetchSize可以减少结果集在客户端的内存占用情况。它的原理是通过将结果集打包成游标，然后分段处理，所以会加大数据库与客户端的通信量，会有性能损耗。
>-   由于数据库游标是事务内有效，所以，在设置setFetchSize的同时，需要将连接设置为非自动提交模式，setAutoCommit\(false\)。同时在业务数据需要持久化到数据库中时，在连接上执行提交操作。
>-   LargeUpdate相关方法必须在JDBC4.2及以上使用。

