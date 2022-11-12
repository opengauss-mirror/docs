# java.sql.PreparedStatement<a name="ZH-CN_TOPIC_0289899873"></a>

java.sql.PreparedStatement是预处理语句接口。

**表 1**  对java.sql.PreparedStatement的支持情况

<a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_table46208586"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row60929707"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p40954461"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p40954461"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p40954461"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p64667854"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p64667854"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p64667854"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p66901896"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p66901896"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p66901896"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row22607410"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33182403"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33182403"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33182403"></a>clearParameters()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p7178614"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p7178614"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p7178614"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p56657584"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p56657584"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p56657584"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row50061955"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p60797463"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p60797463"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p60797463"></a>execute()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p58961300"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p58961300"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p58961300"></a><span id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_text114611592497"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_text114611592497"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_text114611592497"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20266667"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20266667"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20266667"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row391576"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48400698"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48400698"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48400698"></a>executeQuery()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61964598"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61964598"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61964598"></a>ResultSet</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p39030867"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p39030867"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p39030867"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row55370035"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p12431114"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p12431114"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p12431114"></a>excuteUpdate()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p46517201"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p46517201"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p46517201"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p41662813"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p41662813"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p41662813"></a>Yes</p>
</td>
</tr>
<tr id="row1673514431915"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p173613445191"><a name="p173613445191"></a><a name="p173613445191"></a><span id="ph5619165016319"><a name="ph5619165016319"></a><a name="ph5619165016319"></a>executeLargeUpdate()</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9736104421919"><a name="p9736104421919"></a><a name="p9736104421919"></a><span id="ph102620317411"><a name="ph102620317411"></a><a name="ph102620317411"></a>long</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p77361944171918"><a name="p77361944171918"></a><a name="p77361944171918"></a><span id="ph1655913018410"><a name="ph1655913018410"></a><a name="ph1655913018410"></a>No</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row60645442"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p28911818"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p28911818"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p28911818"></a>getMetaData()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p56795880"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p56795880"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p56795880"></a>ResultSetMetaData</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p9801746"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p9801746"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p9801746"></a>Yes</p>
</td>
</tr>
<tr id="row53707702212"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p337112720224"><a name="p337112720224"></a><a name="p337112720224"></a>getParameterMetaData()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p237177202214"><a name="p237177202214"></a><a name="p237177202214"></a>ParameterMetaData</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p9371157112210"><a name="p9371157112210"></a><a name="p9371157112210"></a>Yes</p>
</td>
</tr>
<tr id="row11173192413234"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p121732249239"><a name="p121732249239"></a><a name="p121732249239"></a>setArray​(int parameterIndex, Array x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9173132432316"><a name="p9173132432316"></a><a name="p9173132432316"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p817302414234"><a name="p817302414234"></a><a name="p817302414234"></a>Yes</p>
</td>
</tr>
<tr id="row65634711252"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p185637710250"><a name="p185637710250"></a><a name="p185637710250"></a>setAsciiStream​(int parameterIndex, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1956411712513"><a name="p1956411712513"></a><a name="p1956411712513"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p65643719252"><a name="p65643719252"></a><a name="p65643719252"></a>Yes</p>
</td>
</tr>
<tr id="row3981656133310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p129813568336"><a name="p129813568336"></a><a name="p129813568336"></a>setBinaryStream​(int parameterIndex, InputStream x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p199811956203319"><a name="p199811956203319"></a><a name="p199811956203319"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10981195619332"><a name="p10981195619332"></a><a name="p10981195619332"></a>Yes</p>
</td>
</tr>
<tr id="row1290120213345"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p990102119347"><a name="p990102119347"></a><a name="p990102119347"></a>setBinaryStream​(int parameterIndex, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4901121153410"><a name="p4901121153410"></a><a name="p4901121153410"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p49011021153419"><a name="p49011021153419"></a><a name="p49011021153419"></a>Yes</p>
</td>
</tr>
<tr id="row1749173523418"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44911635113419"><a name="p44911635113419"></a><a name="p44911635113419"></a>setBinaryStream​(int parameterIndex, InputStream x, long length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p949113523417"><a name="p949113523417"></a><a name="p949113523417"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p194911335113417"><a name="p194911335113417"></a><a name="p194911335113417"></a>Yes</p>
</td>
</tr>
<tr id="row14283155133410"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1428315113347"><a name="p1428315113347"></a><a name="p1428315113347"></a>setBlob​(int parameterIndex, InputStream inputStream)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p162843518348"><a name="p162843518348"></a><a name="p162843518348"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p62841551173415"><a name="p62841551173415"></a><a name="p62841551173415"></a>Yes</p>
</td>
</tr>
<tr id="row22276579343"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p162272575349"><a name="p162272575349"></a><a name="p162272575349"></a>setBlob​(int parameterIndex, InputStream inputStream, long length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1227115714347"><a name="p1227115714347"></a><a name="p1227115714347"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p222725743411"><a name="p222725743411"></a><a name="p222725743411"></a>Yes</p>
</td>
</tr>
<tr id="row13419390356"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p241919919355"><a name="p241919919355"></a><a name="p241919919355"></a>setBlob​(int parameterIndex, Blob x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p64208923520"><a name="p64208923520"></a><a name="p64208923520"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18420793356"><a name="p18420793356"></a><a name="p18420793356"></a>Yes</p>
</td>
</tr>
<tr id="row109631338163517"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7963638123518"><a name="p7963638123518"></a><a name="p7963638123518"></a>setCharacterStream​(int parameterIndex, Reader reader)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p89631338143513"><a name="p89631338143513"></a><a name="p89631338143513"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2963183816351"><a name="p2963183816351"></a><a name="p2963183816351"></a>Yes</p>
</td>
</tr>
<tr id="row8740114517353"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8740114593510"><a name="p8740114593510"></a><a name="p8740114593510"></a>setCharacterStream​(int parameterIndex, Reader reader, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p57401845103516"><a name="p57401845103516"></a><a name="p57401845103516"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18740045143517"><a name="p18740045143517"></a><a name="p18740045143517"></a>Yes</p>
</td>
</tr>
<tr id="row2020417719366"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p82047783616"><a name="p82047783616"></a><a name="p82047783616"></a>setClob​(int parameterIndex, Reader reader)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1220467123612"><a name="p1220467123612"></a><a name="p1220467123612"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1120510733615"><a name="p1120510733615"></a><a name="p1120510733615"></a>Yes</p>
</td>
</tr>
<tr id="row5652619103619"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19652181973614"><a name="p19652181973614"></a><a name="p19652181973614"></a>setClob​(int parameterIndex, Reader reader, long length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1865219191368"><a name="p1865219191368"></a><a name="p1865219191368"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p465291933620"><a name="p465291933620"></a><a name="p465291933620"></a>Yes</p>
</td>
</tr>
<tr id="row72831933163618"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p192833335367"><a name="p192833335367"></a><a name="p192833335367"></a>setClob​(int parameterIndex, Clob x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p182841733193612"><a name="p182841733193612"></a><a name="p182841733193612"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1928414330364"><a name="p1928414330364"></a><a name="p1928414330364"></a>Yes</p>
</td>
</tr>
<tr id="row731820153713"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1831814093716"><a name="p1831814093716"></a><a name="p1831814093716"></a>setDate​(int parameterIndex, Date x, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p531860183719"><a name="p531860183719"></a><a name="p531860183719"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1631880133719"><a name="p1631880133719"></a><a name="p1631880133719"></a>Yes</p>
</td>
</tr>
<tr id="row10401914371"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2512190373"><a name="p2512190373"></a><a name="p2512190373"></a>setNull​(int parameterIndex, int sqlType)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p958195376"><a name="p958195376"></a><a name="p958195376"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p65101910372"><a name="p65101910372"></a><a name="p65101910372"></a>Yes</p>
</td>
</tr>
<tr id="row5669193313711"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5669153312374"><a name="p5669153312374"></a><a name="p5669153312374"></a>setNull​(int parameterIndex, int sqlType, String typeName)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p366913323712"><a name="p366913323712"></a><a name="p366913323712"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p666933373714"><a name="p666933373714"></a><a name="p666933373714"></a>Yes</p>
</td>
</tr>
<tr id="row1413345163719"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11134105111376"><a name="p11134105111376"></a><a name="p11134105111376"></a>setObject​(int parameterIndex, Object x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1313411512377"><a name="p1313411512377"></a><a name="p1313411512377"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p813412519377"><a name="p813412519377"></a><a name="p813412519377"></a>Yes</p>
</td>
</tr>
<tr id="row11317293814"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p33112153810"><a name="p33112153810"></a><a name="p33112153810"></a>setObject​(int parameterIndex, Object x, int targetSqlType)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p153111214386"><a name="p153111214386"></a><a name="p153111214386"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15311427382"><a name="p15311427382"></a><a name="p15311427382"></a>Yes</p>
</td>
</tr>
<tr id="row1511918163389"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1411901663817"><a name="p1411901663817"></a><a name="p1411901663817"></a>setObject​(int parameterIndex, Object x, int targetSqlType, int scaleOrLength)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1911917163381"><a name="p1911917163381"></a><a name="p1911917163381"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p191198162384"><a name="p191198162384"></a><a name="p191198162384"></a>Yes</p>
</td>
</tr>
<tr id="row18855131711392"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16855617183914"><a name="p16855617183914"></a><a name="p16855617183914"></a>setSQLXML​(int parameterIndex, SQLXML xmlObject)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15855317103912"><a name="p15855317103912"></a><a name="p15855317103912"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1485517174392"><a name="p1485517174392"></a><a name="p1485517174392"></a>Yes</p>
</td>
</tr>
<tr id="row7559172910397"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16559529163917"><a name="p16559529163917"></a><a name="p16559529163917"></a>setTime​(int parameterIndex, Time x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15592029193917"><a name="p15592029193917"></a><a name="p15592029193917"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2559182915392"><a name="p2559182915392"></a><a name="p2559182915392"></a>Yes</p>
</td>
</tr>
<tr id="row13487124463912"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p184871443393"><a name="p184871443393"></a><a name="p184871443393"></a>setTime​(int parameterIndex, Time x, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p448734453913"><a name="p448734453913"></a><a name="p448734453913"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14487844123916"><a name="p14487844123916"></a><a name="p14487844123916"></a>Yes</p>
</td>
</tr>
<tr id="row18167109124019"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0167997404"><a name="p0167997404"></a><a name="p0167997404"></a>setTimestamp​(int parameterIndex, Timestamp x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1616710924013"><a name="p1616710924013"></a><a name="p1616710924013"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7167109154010"><a name="p7167109154010"></a><a name="p7167109154010"></a>Yes</p>
</td>
</tr>
<tr id="row10872151216405"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14872111204017"><a name="p14872111204017"></a><a name="p14872111204017"></a>setTimestamp​(int parameterIndex, Timestamp x, Calendar cal)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p188725123404"><a name="p188725123404"></a><a name="p188725123404"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14872812174016"><a name="p14872812174016"></a><a name="p14872812174016"></a>Yes</p>
</td>
</tr>
<tr id="row105369395405"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p353623913408"><a name="p353623913408"></a><a name="p353623913408"></a>setUnicodeStream(int parameterIndex, InputStream x, int length)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3536123914403"><a name="p3536123914403"></a><a name="p3536123914403"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8536133904012"><a name="p8536133904012"></a><a name="p8536133904012"></a>Yes</p>
</td>
</tr>
<tr id="row1182305034018"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1082315084020"><a name="p1082315084020"></a><a name="p1082315084020"></a>setURL(int parameterIndex, URL x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p38231050154018"><a name="p38231050154018"></a><a name="p38231050154018"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1682313506401"><a name="p1682313506401"></a><a name="p1682313506401"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row49730492"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p30189155"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p30189155"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p30189155"></a>setBoolean(int parameterIndex, boolean x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p45414736"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p45414736"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p45414736"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61418399"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61418399"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61418399"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row33949694"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p25540165"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p25540165"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p25540165"></a>setBigDecimal(int parameterIndex, BigDecimal x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61472855"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61472855"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p61472855"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p5011195"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p5011195"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p5011195"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row64266757"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33976250"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33976250"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33976250"></a>setByte(int parameterIndex, byte x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p36902989"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p36902989"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p36902989"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p45568408"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p45568408"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p45568408"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row66315435"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p4003140"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p4003140"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p4003140"></a>setBytes(int parameterIndex, byte[] x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14475352"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14475352"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14475352"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p64152108"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p64152108"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p64152108"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row44618562"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14882605"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14882605"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14882605"></a>setDate(int parameterIndex, Date x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p22112045"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p22112045"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p22112045"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48551103"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48551103"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48551103"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row23071670"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p6604294"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p6604294"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p6604294"></a>setDouble(int parameterIndex, double x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p62816784"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p62816784"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p62816784"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p44430932"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p44430932"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p44430932"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row6029180"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p60140651"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p60140651"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p60140651"></a>setFloat(int parameterIndex, float x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p34389676"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p34389676"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p34389676"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p19778905"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p19778905"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p19778905"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row41649053"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p37438028"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p37438028"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p37438028"></a>setInt(int parameterIndex, int x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p27658456"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p27658456"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p27658456"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48987952"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48987952"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p48987952"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row46224646"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p11080110"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p11080110"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p11080110"></a>setLong(int parameterIndex, long x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p41116133"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p41116133"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p41116133"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p37083133"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p37083133"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p37083133"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row16486919"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p32230039"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p32230039"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p32230039"></a>setShort(int parameterIndex, short x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33490601"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33490601"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p33490601"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p25304847"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p25304847"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p25304847"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row66088519"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20844712"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20844712"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20844712"></a>setString(int parameterIndex, String x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p55246051"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p55246051"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p55246051"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p54983245"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p54983245"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p54983245"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row66088519"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20844712"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20844712"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p20844712"></a>setNString(int parameterIndex, String x)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p55246051"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p55246051"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p55246051"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p54983245"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p54983245"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p54983245"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row28430838"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p9676836"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p9676836"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p9676836"></a>addBatch()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p19873808"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p19873808"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p19873808"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14071879"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14071879"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p14071879"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_row7612119"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p1122455"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p1122455"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p1122455"></a>executeBatch()</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p15007047"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p15007047"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p15007047"></a>int[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p52370137"><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p52370137"></a><a name="zh-cn_topic_0237120395_zh-cn_topic_0213179161_zh-cn_topic_0189250583_zh-cn_topic_0059777515_zh-cn_topic_0058965185_p52370137"></a>Yes</p>
</td>
</tbody>
</table>



>![](public_sys-resources/icon-note.png) **说明：** 
>
>-   addBatch\(\)、execute\(\)必须在clearBatch\(\)之后才能执行。

>-   调用executeBatch\(\)方法并不会清除batch。用户必须显式使用clearBatch\(\)清除 。

>-   在添加了一个batch的绑定变量后，用户若想重用这些值（再次添加一个batch），无需再次使用set\*\(\)方法 。

>-   以下方法是从java.sql.Statement继承而来：close、execute、executeQuery、executeUpdate、getConnection、getResultSet、getUpdateCount、isClosed、setMaxRows、setFetchSize。

>-   executeLargeUpdate\(\)方法必须在JDBC4.2及以上使用。

