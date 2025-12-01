# GLOBAL\_LOCKS<a name="EN-US_TOPIC_0289899983"></a>

**GLOBAL\_LOCKS**  displays information about locks held by open transactions on each node.

**Table  1**  GLOBAL\_LOCKS columns

<a name="en-us_topic_0283136461_en-us_topic_0237122727_table13636812194016"></a>
<table><thead align="left"><tr id="en-us_topic_0283136461_en-us_topic_0237122727_row99071212164011"><th class="cellrowborder" valign="top" width="23.189999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136461_en-us_topic_0237122727_p49075122402"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p49075122402"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p49075122402"></a><strong id="b1152161235810"><a name="b1152161235810"></a><a name="b1152161235810"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.54%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136461_en-us_topic_0237122727_p390816129402"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p390816129402"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p390816129402"></a><strong id="b68391316125813"><a name="b68391316125813"></a><a name="b68391316125813"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="60.27%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136461_en-us_topic_0237122727_p159081712164010"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p159081712164010"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p159081712164010"></a><strong id="b382413178585"><a name="b382413178585"></a><a name="b382413178585"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136461_en-us_topic_0237122727_row39081612124018"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1090801210405"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1090801210405"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1090801210405"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p790831212405"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p790831212405"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p790831212405"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p9908912134010"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p9908912134010"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p9908912134010"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row14909212144012"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1590941264016"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1590941264016"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1590941264016"></a>locktype</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1390941214409"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1390941214409"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1390941214409"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p2090981215405"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p2090981215405"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p2090981215405"></a>Type of the locked object: <strong id="b8291120185815"><a name="b8291120185815"></a><a name="b8291120185815"></a>relation</strong>, <strong id="b20293122016587"><a name="b20293122016587"></a><a name="b20293122016587"></a>extend</strong>, <strong id="b1429492055817"><a name="b1429492055817"></a><a name="b1429492055817"></a>page</strong>, <strong id="b102951620175819"><a name="b102951620175819"></a><a name="b102951620175819"></a>tuple</strong>, <strong id="b12961202588"><a name="b12961202588"></a><a name="b12961202588"></a>transactionid</strong>, <strong id="b4297162045820"><a name="b4297162045820"></a><a name="b4297162045820"></a>virtualxid</strong>, <strong id="b12981420135814"><a name="b12981420135814"></a><a name="b12981420135814"></a>object</strong>, <strong id="b6299142085812"><a name="b6299142085812"></a><a name="b6299142085812"></a>userlock</strong>, or <strong id="b103001720105817"><a name="b103001720105817"></a><a name="b103001720105817"></a>advisory</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row18909112194018"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p16909112184011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p16909112184011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p16909112184011"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p109094129404"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p109094129404"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p109094129404"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283136461_en-us_topic_0237122727_p09091012134019"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p09091012134019"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p09091012134019"></a>OID of the database in which the locked object exists.<a name="en-us_topic_0283136461_en-us_topic_0237122727_ul690917127402"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_ul690917127402"></a><ul id="en-us_topic_0283136461_en-us_topic_0237122727_ul690917127402"><li>The OID is <strong id="b67267384580"><a name="b67267384580"></a><a name="b67267384580"></a>0</strong> if the object is a shared object.</li><li>The OID is <strong id="b14440135516452"><a name="b14440135516452"></a><a name="b14440135516452"></a>NULL</strong> if the object is a transaction ID.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row1591015124405"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p109103126409"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p109103126409"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p109103126409"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p29101812154012"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p29101812154012"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p29101812154012"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p9910121214401"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p9910121214401"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p9910121214401"></a>OID of the relationship targeted by the lock. The value is <strong id="b16961115295816"><a name="b16961115295816"></a><a name="b16961115295816"></a>NULL</strong> if the object is not a relationship or part of a relationship.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row49101512154012"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p69101112104011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p69101112104011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p69101112104011"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1910201210408"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1910201210408"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1910201210408"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p19101412124017"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p19101412124017"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p19101412124017"></a>Page number targeted by the lock within the relationship. The value is <strong id="b8442039175911"><a name="b8442039175911"></a><a name="b8442039175911"></a>NULL</strong> if the object is not a relationship page or row page.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row691001294017"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p191011254018"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p191011254018"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p191011254018"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p17911161212406"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p17911161212406"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p17911161212406"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p11911191212409"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p11911191212409"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p11911191212409"></a>Row number targeted by the lock within the page. The value is <strong id="b0691145175911"><a name="b0691145175911"></a><a name="b0691145175911"></a>NULL</strong> if the object is not a row.</p>
</td>
</tr>
<tr id="row19722133910405"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="p1772317396404"><a name="p1772317396404"></a><a name="p1772317396404"></a>bucket</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="p1972343910401"><a name="p1972343910401"></a><a name="p1972343910401"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="p16723183915403"><a name="p16723183915403"></a><a name="p16723183915403"></a>Hash bucket ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row129111512154016"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p149111612194019"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p149111612194019"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p149111612194019"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p16911191217408"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p16911191217408"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p16911191217408"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p7911111264011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p7911111264011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p7911111264011"></a>Virtual ID of the transaction targeted by the lock. The value is <strong id="b12887351145913"><a name="b12887351145913"></a><a name="b12887351145913"></a>NULL</strong> if the object is not a virtual transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row1491112128409"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p0911181211402"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p0911181211402"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p0911181211402"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p291151210405"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p291151210405"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p291151210405"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p189111812174020"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p189111812174020"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p189111812174020"></a>ID of the transaction targeted by the lock. The value is <strong id="b2464181609"><a name="b2464181609"></a><a name="b2464181609"></a>NULL</strong> if the object is not a transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row139121212174017"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p7912141294011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p7912141294011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p7912141294011"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p691261213407"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p691261213407"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p691261213407"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1791241219409"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1791241219409"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1791241219409"></a>OID of the system catalog that contains the object. The value is <strong id="b563512419017"><a name="b563512419017"></a><a name="b563512419017"></a>NULL</strong> if the object is not a general database object.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row1912012104011"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1391201214401"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1391201214401"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1391201214401"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p2912912154018"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p2912912154018"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p2912912154018"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p491211254012"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p491211254012"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p491211254012"></a>OID of the locked object within its system catalog. The value is <strong id="b390313486019"><a name="b390313486019"></a><a name="b390313486019"></a>NULL</strong> if the object is not a general database object.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row391211254016"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p9912612194014"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p9912612194014"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p9912612194014"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p891271274010"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p891271274010"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p891271274010"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p3913112134015"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p3913112134015"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p3913112134015"></a>Column number for a column in the table (<strong id="b257121844612"><a name="b257121844612"></a><a name="b257121844612"></a>0</strong> if the target is of other object type and <strong id="b116611824617"><a name="b116611824617"></a><a name="b116611824617"></a>NULL</strong> if the object is not a general database object)</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row291351216406"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p7913171215409"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p7913171215409"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p7913171215409"></a>virtualtransaction</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p691315125407"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p691315125407"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p691315125407"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p149131312154011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p149131312154011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p149131312154011"></a>Virtual ID of the transaction holding or awaiting this lock</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row491321284010"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1091316123401"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1091316123401"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1091316123401"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p19913121234010"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p19913121234010"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p19913121234010"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p591361214014"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p591361214014"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p591361214014"></a>Logical ID of the server thread holding or awaiting this lock The value is <strong id="b25341146119"><a name="b25341146119"></a><a name="b25341146119"></a>NULL</strong> if the lock is held by a prepared transaction.</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row199133122400"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p19913012124015"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p19913012124015"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p19913012124015"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p991311124407"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p991311124407"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p991311124407"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1491451254015"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1491451254015"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1491451254015"></a>Lock mode held or desired by this thread</p>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row091417124407"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p15914181274011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p15914181274011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p15914181274011"></a>granted</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1291461254019"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1291461254019"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1291461254019"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136461_en-us_topic_0237122727_ul179143129405"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_ul179143129405"></a><ul id="en-us_topic_0283136461_en-us_topic_0237122727_ul179143129405"><li>The value is <strong id="b1664605211"><a name="b1664605211"></a><a name="b1664605211"></a>TRUE</strong> if the lock is a held lock.</li><li>The value is <strong id="b1635183123"><a name="b1635183123"></a><a name="b1635183123"></a>FALSE</strong> if the lock is an awaited lock.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136461_en-us_topic_0237122727_row19914412184019"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p149141112194013"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p149141112194013"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p149141112194013"></a>fastpath</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1091461294011"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1091461294011"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1091461294011"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136461_en-us_topic_0237122727_p1291512121407"><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1291512121407"></a><a name="en-us_topic_0283136461_en-us_topic_0237122727_p1291512121407"></a>The value is <strong id="b15832761727"><a name="b15832761727"></a><a name="b15832761727"></a>TRUE</strong> if the lock is obtained through <strong id="b483918615214"><a name="b483918615214"></a><a name="b483918615214"></a>fast-path</strong>, and is <strong id="b16841061327"><a name="b16841061327"></a><a name="b16841061327"></a>FALSE</strong> if the lock is obtained through the main lock table.</p>
</td>
</tr>
</tbody>
</table>

