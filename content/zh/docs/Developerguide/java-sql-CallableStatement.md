# java.sql.CallableStatement<a name="ZH-CN_TOPIC_0289900773"></a>

java.sql.CallableStatement是存储过程执行接口。

**表 1**  对java.sql.CallableStatement的支持情况

<a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_table3828870"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_row36987648"><th class="cellrowborder" valign="top" width="38.33%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p43209511"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p43209511"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p43209511"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="30.330000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p10309494"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p10309494"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p10309494"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="31.34%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p61969327"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p61969327"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p61969327"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="row12430336205012"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p1543019364504"><a name="p1543019364504"></a><a name="p1543019364504"></a>getArray(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p143016364508"><a name="p143016364508"></a><a name="p143016364508"></a>Array</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p7430103617507"><a name="p7430103617507"></a><a name="p7430103617507"></a>Yes</p>
</td>
</tr>
<tr id="row1321975917113"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p2219125918117"><a name="p2219125918117"></a><a name="p2219125918117"></a>getBigDecimal(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1021965910111"><a name="p1021965910111"></a><a name="p1021965910111"></a>BigDecimal</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1321920594111"><a name="p1321920594111"></a><a name="p1321920594111"></a>Yes</p>
</td>
</tr>
<tr id="row7856581647"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p4869582419"><a name="p4869582419"></a><a name="p4869582419"></a>getBlob(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p11864580412"><a name="p11864580412"></a><a name="p11864580412"></a>Blob</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p5864589415"><a name="p5864589415"></a><a name="p5864589415"></a>Yes</p>
</td>
</tr>
<tr id="row1744091961"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p144418919616"><a name="p144418919616"></a><a name="p144418919616"></a>getBoolean(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p244149464"><a name="p244149464"></a><a name="p244149464"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p3441991560"><a name="p3441991560"></a><a name="p3441991560"></a>Yes</p>
</td>
</tr>
<tr id="row99816261715"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p10981162612715"><a name="p10981162612715"></a><a name="p10981162612715"></a>getByte(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p129811226472"><a name="p129811226472"></a><a name="p129811226472"></a>byte</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p59818265711"><a name="p59818265711"></a><a name="p59818265711"></a>Yes</p>
</td>
</tr>
<tr id="row4966514681"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p696716141283"><a name="p696716141283"></a><a name="p696716141283"></a>getBytes(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p189679141189"><a name="p189679141189"></a><a name="p189679141189"></a>byte[]</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p49678146815"><a name="p49678146815"></a><a name="p49678146815"></a>Yes</p>
</td>
</tr>
<tr id="row1710458491"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p191052081693"><a name="p191052081693"></a><a name="p191052081693"></a>getClob(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1810510814918"><a name="p1810510814918"></a><a name="p1810510814918"></a>Clob</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1210548794"><a name="p1210548794"></a><a name="p1210548794"></a>Yes</p>
</td>
</tr>
<tr id="row1292275217101"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p3922105291017"><a name="p3922105291017"></a><a name="p3922105291017"></a>getDate(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p11922185231020"><a name="p11922185231020"></a><a name="p11922185231020"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p692265281020"><a name="p692265281020"></a><a name="p692265281020"></a>Yes</p>
</td>
</tr>
<tr id="row4574257171015"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p8574105751014"><a name="p8574105751014"></a><a name="p8574105751014"></a>getDate(int parameterIndex, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p19574135710108"><a name="p19574135710108"></a><a name="p19574135710108"></a>Date</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p20574145719104"><a name="p20574145719104"></a><a name="p20574145719104"></a>Yes</p>
</td>
</tr>
<tr id="row1376665914115"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p10766859111119"><a name="p10766859111119"></a><a name="p10766859111119"></a>getDouble(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p9766105911111"><a name="p9766105911111"></a><a name="p9766105911111"></a>double</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1976611593113"><a name="p1976611593113"></a><a name="p1976611593113"></a>Yes</p>
</td>
</tr>
<tr id="row18905124315010"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p5905144345018"><a name="p5905144345018"></a><a name="p5905144345018"></a>getFloat(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p69065438503"><a name="p69065438503"></a><a name="p69065438503"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1390617434501"><a name="p1390617434501"></a><a name="p1390617434501"></a>Yes</p>
</td>
</tr>
<tr id="row171601565117"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p1016165195117"><a name="p1016165195117"></a><a name="p1016165195117"></a>getInt(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p4161155145112"><a name="p4161155145112"></a><a name="p4161155145112"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p11161457515"><a name="p11161457515"></a><a name="p11161457515"></a>Yes</p>
</td>
</tr>
<tr id="row17392621155114"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p1639222125117"><a name="p1639222125117"></a><a name="p1639222125117"></a>getLong(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p193921021175111"><a name="p193921021175111"></a><a name="p193921021175111"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p339292114517"><a name="p339292114517"></a><a name="p339292114517"></a>Yes</p>
</td>
</tr>
<tr id="row18307115014517"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p143071650195115"><a name="p143071650195115"></a><a name="p143071650195115"></a>getObject(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p43071550145117"><a name="p43071550145117"></a><a name="p43071550145117"></a>Object</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p16307550105116"><a name="p16307550105116"></a><a name="p16307550105116"></a>Yes</p>
</td>
</tr>
<tr id="row20865131146"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p118651718413"><a name="p118651718413"></a><a name="p118651718413"></a>getObject(int parameterIndex, Class&lt;T&gt; type)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p20865211418"><a name="p20865211418"></a><a name="p20865211418"></a>Object</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1986516112413"><a name="p1986516112413"></a><a name="p1986516112413"></a>Yes</p>
</td>
</tr>
<tr id="row185973072815"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p1786083018284"><a name="p1786083018284"></a><a name="p1786083018284"></a>getShort(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1986093012818"><a name="p1986093012818"></a><a name="p1986093012818"></a>short</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p686073019284"><a name="p686073019284"></a><a name="p686073019284"></a>Yes</p>
</td>
</tr>
<tr id="row8447174373815"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p13448343163812"><a name="p13448343163812"></a><a name="p13448343163812"></a>getSQLXML(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1448114333818"><a name="p1448114333818"></a><a name="p1448114333818"></a>SQLXML</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p5448164383819"><a name="p5448164383819"></a><a name="p5448164383819"></a>Yes</p>
</td>
</tr>
<tr id="row1184941493911"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p128505140394"><a name="p128505140394"></a><a name="p128505140394"></a>getString(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1385015148393"><a name="p1385015148393"></a><a name="p1385015148393"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1385091417395"><a name="p1385091417395"></a><a name="p1385091417395"></a>Yes</p>
</td>
</tr>
 <tr id="row1184941493911"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p128505140394"><a name="p128505140394"></a><a name="p128505140394"></a>getNString(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1385015148393"><a name="p1385015148393"></a><a name="p1385015148393"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1385091417395"><a name="p1385091417395"></a><a name="p1385091417395"></a>Yes</p>
</td>
</tr>  
<tr id="row18341192584512"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p934120254458"><a name="p934120254458"></a><a name="p934120254458"></a>getTime(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p1534119257455"><a name="p1534119257455"></a><a name="p1534119257455"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1534102504518"><a name="p1534102504518"></a><a name="p1534102504518"></a>Yes</p>
</td>
</tr>
<tr id="row175291112194718"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p75296122477"><a name="p75296122477"></a><a name="p75296122477"></a>getTime(int parameterIndex, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p352951204715"><a name="p352951204715"></a><a name="p352951204715"></a>Time</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p1152991274716"><a name="p1152991274716"></a><a name="p1152991274716"></a>Yes</p>
</td>
</tr>
<tr id="row3233394714"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p62163312475"><a name="p62163312475"></a><a name="p62163312475"></a>getTimestamp(int parameterIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p102533114717"><a name="p102533114717"></a><a name="p102533114717"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p192173316476"><a name="p192173316476"></a><a name="p192173316476"></a>Yes</p>
</td>
</tr>
<tr id="row16554175264716"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="p1255545211476"><a name="p1255545211476"></a><a name="p1255545211476"></a>getTimestamp(int parameterIndex, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="p165551952174715"><a name="p165551952174715"></a><a name="p165551952174715"></a>Timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="p11555155215476"><a name="p11555155215476"></a><a name="p11555155215476"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_row53459560"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p39399037"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p39399037"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p39399037"></a>registerOutParameter(int parameterIndex, int type)</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p58131666"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p58131666"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p58131666"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p53950512"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p53950512"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p53950512"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_row15792565"><td class="cellrowborder" valign="top" width="38.33%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p23672536"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p23672536"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p23672536"></a>wasNull()</p>
</td>
<td class="cellrowborder" valign="top" width="30.330000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p59980828"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p59980828"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p59980828"></a><span id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_text13995396495"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_text13995396495"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_text13995396495"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="31.34%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p12114571"><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p12114571"></a><a name="zh-cn_topic_0237120392_zh-cn_topic_0213179158_zh-cn_topic_0189250822_zh-cn_topic_0059778741_zh-cn_topic_0058965232_p12114571"></a>Yes</p>
</td>
</tr>
</tbody>
</table>


>![](public_sys-resources/icon-note.png) **说明：**   
>
>-   不允许含有OUT参数的语句执行批量操作。
>
>-   以下方法是从java.sql.Statement继承而来：close、execute、executeQuery、executeUpdate、getConnection、getResultSet、getUpdateCount、isClosed、setMaxRows 、 setFetchSize。
>
>-   以下方法是从java.sql.PreparedStatement继承而来：addBatch、clearParameters、execute、executeQuery、executeUpdate、getMetaData、setBigDecimal、setBoolean、setByte、setBytes、setDate、setDouble、setFloat、setInt、setLong、setNull、setObject、setString、setTime、setTimestamp。

