# java.sql.ResultSetMetaData

java.sql.ResultSetMetaData是对ResultSet对象相关信息的具体描述。

**表 1**  对java.sql.ResultSetMetaData的支持情况

<a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_table43790439"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_row48017451"><th class="cellrowborder" valign="top" width="38.330000000000005%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p56747370"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p56747370"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p56747370"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="30.92%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p24979458"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p24979458"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p24979458"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="30.750000000000004%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p9323005"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p9323005"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p9323005"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="row1973320341038"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p0733203411313"><a name="p0733203411313"></a><a name="p0733203411313"></a>getCatalogName​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p57332342312"><a name="p57332342312"></a><a name="p57332342312"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p1373312341233"><a name="p1373312341233"></a><a name="p1373312341233"></a>Yes</p>
</td>
</tr>
<tr id="row1696612458614"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p496619453616"><a name="p496619453616"></a><a name="p496619453616"></a>getColumnClassName​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p10966245161"><a name="p10966245161"></a><a name="p10966245161"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p149668451613"><a name="p149668451613"></a><a name="p149668451613"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_row15866543"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p64178108"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p64178108"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p64178108"></a>getColumnCount()</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p17968003"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p17968003"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p17968003"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p2812255"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p2812255"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p2812255"></a>Yes</p>
</td>
</tr>
<tr id="row317316124714"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p117319125718"><a name="p117319125718"></a><a name="p117319125718"></a>getColumnDisplaySize​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p2173191214717"><a name="p2173191214717"></a><a name="p2173191214717"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p1417316121974"><a name="p1417316121974"></a><a name="p1417316121974"></a>Yes</p>
</td>
</tr>
<tr id="row11421344710"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p16438341874"><a name="p16438341874"></a><a name="p16438341874"></a>getColumnLabel​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p44313416716"><a name="p44313416716"></a><a name="p44313416716"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p10436341276"><a name="p10436341276"></a><a name="p10436341276"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_row14831818"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p29590292"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p29590292"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p29590292"></a>getColumnName(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65715787"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65715787"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65715787"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8701847"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8701847"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8701847"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_row58544752"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8024095"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8024095"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8024095"></a>getColumnType(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8472465"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8472465"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p8472465"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65774377"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65774377"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65774377"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_row63489940"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p7550778"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p7550778"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p7550778"></a>getColumnTypeName(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65166555"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65166555"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p65166555"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p29343262"><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p29343262"></a><a name="zh-cn_topic_0237120397_zh-cn_topic_0213179163_zh-cn_topic_0189251827_zh-cn_topic_0059777732_zh-cn_topic_0058965234_p29343262"></a>Yes</p>
</td>
</tr>
<tr id="row165464171280"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p0212525898"><a name="p0212525898"></a><a name="p0212525898"></a>getPrecision​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p5668164312911"><a name="p5668164312911"></a><a name="p5668164312911"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p35465171886"><a name="p35465171886"></a><a name="p35465171886"></a>Yes</p>
</td>
</tr>
<tr id="row91081621682"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p421262514910"><a name="p421262514910"></a><a name="p421262514910"></a>getScale​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p16682431097"><a name="p16682431097"></a><a name="p16682431097"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p15108112118819"><a name="p15108112118819"></a><a name="p15108112118819"></a>Yes</p>
</td>
</tr>
<tr id="row1824345815820"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p4212162512919"><a name="p4212162512919"></a><a name="p4212162512919"></a>getSchemaName​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p17668134310913"><a name="p17668134310913"></a><a name="p17668134310913"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p624355818810"><a name="p624355818810"></a><a name="p624355818810"></a>Yes</p>
</td>
</tr>
<tr id="row191411218919"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p3212172512915"><a name="p3212172512915"></a><a name="p3212172512915"></a>getTableName​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p56686431699"><a name="p56686431699"></a><a name="p56686431699"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p414211120911"><a name="p414211120911"></a><a name="p414211120911"></a>Yes</p>
</td>
</tr>
<tr id="row68292511815"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p11212162510912"><a name="p11212162510912"></a><a name="p11212162510912"></a>isAutoIncrement​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p4668343198"><a name="p4668343198"></a><a name="p4668343198"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p68216257820"><a name="p68216257820"></a><a name="p68216257820"></a>Yes</p>
</td>
</tr>
<tr id="row32832554819"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p142121425394"><a name="p142121425394"></a><a name="p142121425394"></a>isCaseSensitive​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p466894314918"><a name="p466894314918"></a><a name="p466894314918"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p62848554817"><a name="p62848554817"></a><a name="p62848554817"></a>Yes</p>
</td>
</tr>
<tr id="row990218284812"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p621222513912"><a name="p621222513912"></a><a name="p621222513912"></a>isCurrency​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p1066810431918"><a name="p1066810431918"></a><a name="p1066810431918"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p19037286813"><a name="p19037286813"></a><a name="p19037286813"></a>Yes</p>
</td>
</tr>
<tr id="row513754819812"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p12128251194"><a name="p12128251194"></a><a name="p12128251194"></a>isDefinitelyWritable​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p7668134313919"><a name="p7668134313919"></a><a name="p7668134313919"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p18137154820813"><a name="p18137154820813"></a><a name="p18137154820813"></a>Yes</p>
</td>
</tr>
<tr id="row963635119817"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p72127254917"><a name="p72127254917"></a><a name="p72127254917"></a>isNullable​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p13668114312918"><a name="p13668114312918"></a><a name="p13668114312918"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p4636195111819"><a name="p4636195111819"></a><a name="p4636195111819"></a>Yes</p>
</td>
</tr>
<tr id="row385683211818"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p521210251293"><a name="p521210251293"></a><a name="p521210251293"></a>isReadOnly​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p12668743991"><a name="p12668743991"></a><a name="p12668743991"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p128561832984"><a name="p128561832984"></a><a name="p128561832984"></a>Yes</p>
</td>
</tr>
<tr id="row64284362081"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p1321202510910"><a name="p1321202510910"></a><a name="p1321202510910"></a>isSearchable​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p06689436910"><a name="p06689436910"></a><a name="p06689436910"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p742913617810"><a name="p742913617810"></a><a name="p742913617810"></a>Yes</p>
</td>
</tr>
<tr id="row2573194318819"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p202124259919"><a name="p202124259919"></a><a name="p202124259919"></a>isSigned​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p1966910431097"><a name="p1966910431097"></a><a name="p1966910431097"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p0573943584"><a name="p0573943584"></a><a name="p0573943584"></a>Yes</p>
</td>
</tr>
<tr id="row1487134010816"><td class="cellrowborder" valign="top" width="38.330000000000005%" headers="mcps1.2.4.1.1 "><p id="p1521219251795"><a name="p1521219251795"></a><a name="p1521219251795"></a>isWritable​(int column)</p>
</td>
<td class="cellrowborder" valign="top" width="30.92%" headers="mcps1.2.4.1.2 "><p id="p066994316918"><a name="p066994316918"></a><a name="p066994316918"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="30.750000000000004%" headers="mcps1.2.4.1.3 "><p id="p138716401382"><a name="p138716401382"></a><a name="p138716401382"></a>Yes</p>
</td>
</tr>
</tbody>
</table>
