# LOCKS<a name="EN-US_TOPIC_0289899932"></a>

**LOCKS**  displays information about locks held by each open transaction.

**Table  1**  LOCKS columns

<a name="en-us_topic_0283137639_en-us_topic_0237122726_table1854117176252"></a>
<table><thead align="left"><tr id="en-us_topic_0283137639_en-us_topic_0237122726_row2849917132514"><th class="cellrowborder" valign="top" width="23.189999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1184951782518"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1184951782518"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1184951782518"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.54%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137639_en-us_topic_0237122726_p484917174258"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p484917174258"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p484917174258"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="60.27%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137639_en-us_topic_0237122726_p98499178259"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p98499178259"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p98499178259"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137639_en-us_topic_0237122726_row7850117132515"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p168501017202516"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p168501017202516"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p168501017202516"></a>locktype</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p118501317182511"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p118501317182511"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p118501317182511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1985018176258"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1985018176258"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1985018176258"></a>Type of the locked object: <strong id="en-us_topic_0237122726_b510074623210"><a name="en-us_topic_0237122726_b510074623210"></a><a name="en-us_topic_0237122726_b510074623210"></a>relation</strong>, <strong id="en-us_topic_0237122726_b1310554611327"><a name="en-us_topic_0237122726_b1310554611327"></a><a name="en-us_topic_0237122726_b1310554611327"></a>extend</strong>, <strong id="en-us_topic_0237122726_b171061846163216"><a name="en-us_topic_0237122726_b171061846163216"></a><a name="en-us_topic_0237122726_b171061846163216"></a>page</strong>, <strong id="en-us_topic_0237122726_b910618460327"><a name="en-us_topic_0237122726_b910618460327"></a><a name="en-us_topic_0237122726_b910618460327"></a>tuple</strong>, <strong id="en-us_topic_0237122726_b01071468320"><a name="en-us_topic_0237122726_b01071468320"></a><a name="en-us_topic_0237122726_b01071468320"></a>transactionid</strong>, <strong id="en-us_topic_0237122726_b14107134619320"><a name="en-us_topic_0237122726_b14107134619320"></a><a name="en-us_topic_0237122726_b14107134619320"></a>virtualxid</strong>, <strong id="en-us_topic_0237122726_b11088464325"><a name="en-us_topic_0237122726_b11088464325"></a><a name="en-us_topic_0237122726_b11088464325"></a>object</strong>, <strong id="en-us_topic_0237122726_b17108124614324"><a name="en-us_topic_0237122726_b17108124614324"></a><a name="en-us_topic_0237122726_b17108124614324"></a>userlock</strong>, or <strong id="en-us_topic_0237122726_b1010844611329"><a name="en-us_topic_0237122726_b1010844611329"></a><a name="en-us_topic_0237122726_b1010844611329"></a>advisory</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row20850161722511"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p885010178256"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p885010178256"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p885010178256"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p10850217172516"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p10850217172516"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p10850217172516"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137639_en-us_topic_0237122726_p12850151716253"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p12850151716253"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p12850151716253"></a>OID of the database in which the locked object exists.<a name="en-us_topic_0283137639_en-us_topic_0237122726_ul1085011177254"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_ul1085011177254"></a><ul id="en-us_topic_0283137639_en-us_topic_0237122726_ul1085011177254"><li>The OID is <strong id="en-us_topic_0237122726_b15489165463210"><a name="en-us_topic_0237122726_b15489165463210"></a><a name="en-us_topic_0237122726_b15489165463210"></a>0</strong> if the object is a shared object.</li><li>The OID is <strong id="en-us_topic_0237122726_b13110752165611"><a name="en-us_topic_0237122726_b13110752165611"></a><a name="en-us_topic_0237122726_b13110752165611"></a>NULL</strong> if the object is a transaction ID.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row1185191712252"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p885131710252"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p885131710252"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p885131710252"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p13851717192511"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13851717192511"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13851717192511"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p38514176250"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p38514176250"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p38514176250"></a>OID of the relationship targeted by the lock. The value is <strong id="en-us_topic_0237122726_b1016232716299"><a name="en-us_topic_0237122726_b1016232716299"></a><a name="en-us_topic_0237122726_b1016232716299"></a>NULL</strong> if the object is not a relationship or part of a relationship.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row1285220179255"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p185251710251"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p185251710251"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p185251710251"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1285215174257"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1285215174257"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1285215174257"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p17852161717257"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p17852161717257"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p17852161717257"></a>Page number targeted by the lock within the relationship. The value is <strong id="en-us_topic_0237122726_b10242203018298"><a name="en-us_topic_0237122726_b10242203018298"></a><a name="en-us_topic_0237122726_b10242203018298"></a>NULL</strong> if the object is not a relationship page or row page.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row98525173259"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1385220170258"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1385220170258"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1385220170258"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p38531417112515"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p38531417112515"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p38531417112515"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p58531172255"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p58531172255"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p58531172255"></a>Row number targeted by the lock within the page. The value is <strong id="en-us_topic_0237122726_b1013963619612"><a name="en-us_topic_0237122726_b1013963619612"></a><a name="en-us_topic_0237122726_b1013963619612"></a>NULL</strong> if the object is not a row.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row19673183417586"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p11673834155813"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p11673834155813"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p11673834155813"></a>bucket</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p4673163485819"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p4673163485819"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p4673163485819"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p56731534145813"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p56731534145813"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p56731534145813"></a>Hash bucket ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row38536175254"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p28531217162515"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p28531217162515"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p28531217162515"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p15853191713259"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p15853191713259"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p15853191713259"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p2085341710254"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p2085341710254"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p2085341710254"></a>Virtual ID of the transaction targeted by the lock. The value is <strong id="en-us_topic_0237122726_b1486565916616"><a name="en-us_topic_0237122726_b1486565916616"></a><a name="en-us_topic_0237122726_b1486565916616"></a>NULL</strong> if the object is not a virtual transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row1985391702516"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p13853131716255"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13853131716255"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13853131716255"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1385331710258"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1385331710258"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1385331710258"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p485416179251"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p485416179251"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p485416179251"></a>ID of the transaction targeted by the lock. The value is <strong id="en-us_topic_0237122726_b83845591686"><a name="en-us_topic_0237122726_b83845591686"></a><a name="en-us_topic_0237122726_b83845591686"></a>NULL</strong> if the object is not a transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row285415171253"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p20854131752516"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p20854131752516"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p20854131752516"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p14854121722514"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p14854121722514"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p14854121722514"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p16854131716254"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p16854131716254"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p16854131716254"></a>OID of the system catalog that contains the object. The value is <strong id="en-us_topic_0237122726_b34221381194"><a name="en-us_topic_0237122726_b34221381194"></a><a name="en-us_topic_0237122726_b34221381194"></a>NULL</strong> if the object is not a general database object.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row15854817192516"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1085431715251"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1085431715251"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1085431715251"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1885541752510"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1885541752510"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1885541752510"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p16855131792520"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p16855131792520"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p16855131792520"></a>OID of the locked object within its system catalog. The value is <strong id="en-us_topic_0237122726_b681517171490"><a name="en-us_topic_0237122726_b681517171490"></a><a name="en-us_topic_0237122726_b681517171490"></a>NULL</strong> if the object is not a general database object.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row48551217152518"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p0855151722518"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p0855151722518"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p0855151722518"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p16855131719258"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p16855131719258"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p16855131719258"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p48550174257"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p48550174257"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p48550174257"></a>Column number for a column in the table (<strong id="b1344710445118"><a name="b1344710445118"></a><a name="b1344710445118"></a>0</strong> if the object is of other object type and <strong id="b94482405119"><a name="b94482405119"></a><a name="b94482405119"></a>NULL</strong> if the object is not a general database object)</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row3855171714259"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p385541742511"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p385541742511"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p385541742511"></a>virtualtransaction</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p285611772510"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p285611772510"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p285611772510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p18561417102516"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18561417102516"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18561417102516"></a>Virtual ID of the transaction holding or awaiting this lock</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row188561817162517"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p13856121772514"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13856121772514"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13856121772514"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p685671742512"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p685671742512"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p685671742512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p085641713252"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p085641713252"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p085641713252"></a>Logical ID of the server thread holding or awaiting this lock. The value is <strong id="en-us_topic_0237122726_b134441635145711"><a name="en-us_topic_0237122726_b134441635145711"></a><a name="en-us_topic_0237122726_b134441635145711"></a>NULL</strong> if the lock is held by a prepared transaction.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row18856617192518"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p118563170251"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p118563170251"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p118563170251"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1385601714251"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1385601714251"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1385601714251"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p18857817132513"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18857817132513"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18857817132513"></a>ID of the session holding or awaiting this lock The value is <strong id="en-us_topic_0237122726_b169301739175718"><a name="en-us_topic_0237122726_b169301739175718"></a><a name="en-us_topic_0237122726_b169301739175718"></a>NULL</strong> if the lock is held by a prepared transaction.</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row9857617102513"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p13857917152514"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13857917152514"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p13857917152514"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p585711714258"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p585711714258"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p585711714258"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p20857101717255"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p20857101717255"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p20857101717255"></a>Lock mode held or desired by this thread</p>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row1085791702510"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p7857121752511"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p7857121752511"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p7857121752511"></a>granted</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p7857181718250"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p7857181718250"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p7857181718250"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137639_en-us_topic_0237122726_ul1685715177250"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_ul1685715177250"></a><ul id="en-us_topic_0283137639_en-us_topic_0237122726_ul1685715177250"><li>The value is <strong id="en-us_topic_0237122726_b01701836347"><a name="en-us_topic_0237122726_b01701836347"></a><a name="en-us_topic_0237122726_b01701836347"></a>TRUE</strong> if the lock is a held lock.</li><li>The value is <strong id="en-us_topic_0237122726_b145061644343"><a name="en-us_topic_0237122726_b145061644343"></a><a name="en-us_topic_0237122726_b145061644343"></a>FALSE</strong> if the lock is an awaited lock.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137639_en-us_topic_0237122726_row78583170252"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p18858181782517"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18858181782517"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18858181782517"></a>fastpath</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p1485818178251"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1485818178251"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p1485818178251"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137639_en-us_topic_0237122726_p18858151713255"><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18858151713255"></a><a name="en-us_topic_0283137639_en-us_topic_0237122726_p18858151713255"></a>The value is <strong id="en-us_topic_0237122726_b89871179378"><a name="en-us_topic_0237122726_b89871179378"></a><a name="en-us_topic_0237122726_b89871179378"></a>TRUE</strong> if the lock is obtained through <strong id="en-us_topic_0237122726_b1175923415377"><a name="en-us_topic_0237122726_b1175923415377"></a><a name="en-us_topic_0237122726_b1175923415377"></a>fast-path</strong>, and is <strong id="en-us_topic_0237122726_b199694427376"><a name="en-us_topic_0237122726_b199694427376"></a><a name="en-us_topic_0237122726_b199694427376"></a>FALSE</strong> if the lock is obtained through the main lock table.</p>
</td>
</tr>
<tr id="row9359184517344"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="p336074593414"><a name="p336074593414"></a><a name="p336074593414"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="p1236074543419"><a name="p1236074543419"></a><a name="p1236074543419"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="p2360545123418"><a name="p2360545123418"></a><a name="p2360545123418"></a>Lock information that the session waits for. It can be parsed using the <strong id="b767518931912"><a name="b767518931912"></a><a name="b767518931912"></a>locktag_decode() </strong>function.</p>
</td>
</tr>
<tr id="row199922421358"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="p10993134216355"><a name="p10993134216355"></a><a name="p10993134216355"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="p899304203519"><a name="p899304203519"></a><a name="p899304203519"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="p13993104214354"><a name="p13993104214354"></a><a name="p13993104214354"></a>Global session ID</p>
</td>
</tr>
</tbody>
</table>

