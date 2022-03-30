# GS\_RECYCLEBIN<a name="EN-US_TOPIC_0000001151309157"></a>

**gs\_recyclebin**  describes details about objects in the recycle bin.

**Table  1**  gs\_recyclebin columns

<a name="table165293775215"></a>
<table><thead align="left"><tr id="row12247437185219"><th class="cellrowborder" valign="top" width="20.3%" id="mcps1.2.4.1.1"><p id="p12475373526"><a name="p12475373526"></a><a name="p12475373526"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.8%" id="mcps1.2.4.1.2"><p id="p6247183715525"><a name="p6247183715525"></a><a name="p6247183715525"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="61.9%" id="mcps1.2.4.1.3"><p id="p6247113785216"><a name="p6247113785216"></a><a name="p6247113785216"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1924713375522"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p72471237105219"><a name="p72471237105219"></a><a name="p72471237105219"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p3247837105214"><a name="p3247837105214"></a><a name="p3247837105214"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p11247143711529"><a name="p11247143711529"></a><a name="p11247143711529"></a>System column</p>
</td>
</tr>
<tr id="row172471137155215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p9248143785217"><a name="p9248143785217"></a><a name="p9248143785217"></a>rcybaseid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p62481537205220"><a name="p62481537205220"></a><a name="p62481537205220"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p8248133710526"><a name="p8248133710526"></a><a name="p8248133710526"></a>Base table object ID, which references <strong id="b822204616559"><a name="b822204616559"></a><a name="b822204616559"></a>gs_recyclebin.oid</strong></p>
</td>
</tr>
<tr id="row20248193725219"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p32481037145214"><a name="p32481037145214"></a><a name="p32481037145214"></a>rcydbid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p2024810376522"><a name="p2024810376522"></a><a name="p2024810376522"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p17248837195214"><a name="p17248837195214"></a><a name="p17248837195214"></a>OID of the database to which the current object belongs</p>
</td>
</tr>
<tr id="row1999202511419"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1754716331041"><a name="p1754716331041"></a><a name="p1754716331041"></a>rcyrelid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p15476331845"><a name="p15476331845"></a><a name="p15476331845"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p6548143310410"><a name="p6548143310410"></a><a name="p6548143310410"></a>OID of the current object</p>
</td>
</tr>
<tr id="row92481137155216"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p152481437175210"><a name="p152481437175210"></a><a name="p152481437175210"></a>rcyname</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p13248123785218"><a name="p13248123785218"></a><a name="p13248123785218"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p224843710527"><a name="p224843710527"></a><a name="p224843710527"></a>Name of the object in the recycle bin. The format is BIN<em id="i1874614716567"><a name="i1874614716567"></a><a name="i1874614716567"></a>$unique_id$oid$</em>0. <em id="i471515474167"><a name="i471515474167"></a><a name="i471515474167"></a>unique_id</em> indicates the unique identifier with a maximum of 16 characters, and <em id="i381105714162"><a name="i381105714162"></a><a name="i381105714162"></a>oid</em> indicates the OID.</p>
</td>
</tr>
<tr id="row12248173735215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1424873710529"><a name="p1424873710529"></a><a name="p1424873710529"></a>rcyoriginname</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p1524853711521"><a name="p1524853711521"></a><a name="p1524853711521"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p19248337145218"><a name="p19248337145218"></a><a name="p19248337145218"></a>Original object name</p>
</td>
</tr>
<tr id="row192483377521"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p162480379527"><a name="p162480379527"></a><a name="p162480379527"></a>rcyoperation</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p0248173712522"><a name="p0248173712522"></a><a name="p0248173712522"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p124833719522"><a name="p124833719522"></a><a name="p124833719522"></a>Operation type</p>
<a name="ul9248537185214"></a><a name="ul9248537185214"></a><ul id="ul9248537185214"><li><strong id="b13717195552720"><a name="b13717195552720"></a><a name="b13717195552720"></a>d</strong>: drop</li><li><strong id="b10511728284"><a name="b10511728284"></a><a name="b10511728284"></a>t</strong>: truncate</li></ul>
</td>
</tr>
<tr id="row15249143716526"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p162491437205212"><a name="p162491437205212"></a><a name="p162491437205212"></a>rcytype</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p824923713529"><a name="p824923713529"></a><a name="p824923713529"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p72496378525"><a name="p72496378525"></a><a name="p72496378525"></a>Object type</p>
<a name="ul182491437115217"></a><a name="ul182491437115217"></a><ul id="ul182491437115217"><li><strong id="b12844104142819"><a name="b12844104142819"></a><a name="b12844104142819"></a>0</strong>: table</li><li><strong id="b12646174511281"><a name="b12646174511281"></a><a name="b12646174511281"></a>1</strong>: index</li><li><strong id="b106873497281"><a name="b106873497281"></a><a name="b106873497281"></a>2</strong>: TOAST table</li><li><strong id="b10101135511286"><a name="b10101135511286"></a><a name="b10101135511286"></a>3</strong>: TOAST index</li><li><strong id="b18935203132919"><a name="b18935203132919"></a><a name="b18935203132919"></a>4</strong>: sequence, indicating the sequence object that is automatically associated with the serial, bigserial, smallserial, and largeserial types.</li><li><strong id="b109903397352"><a name="b109903397352"></a><a name="b109903397352"></a>5</strong>: partition.</li><li><strong id="b9590542123511"><a name="b9590542123511"></a><a name="b9590542123511"></a>6</strong>: global index.</li></ul>
</td>
</tr>
<tr id="row172491037175215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p10249123715213"><a name="p10249123715213"></a><a name="p10249123715213"></a>rcyrecyclecsn</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p15249163715219"><a name="p15249163715219"></a><a name="p15249163715219"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1249133714525"><a name="p1249133714525"></a><a name="p1249133714525"></a>CSN when an object is dropped or truncated</p>
</td>
</tr>
<tr id="row202491937195219"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1024933775212"><a name="p1024933775212"></a><a name="p1024933775212"></a>rcyrecycletime</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p132491137195213"><a name="p132491137195213"></a><a name="p132491137195213"></a>timestamptz</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p32491237135212"><a name="p32491237135212"></a><a name="p32491237135212"></a>Time when an object is dropped or truncated</p>
</td>
</tr>
<tr id="row1624915373526"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p9250737165218"><a name="p9250737165218"></a><a name="p9250737165218"></a>rcycreatecsn</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p1025015379526"><a name="p1025015379526"></a><a name="p1025015379526"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1425043718525"><a name="p1425043718525"></a><a name="p1425043718525"></a>CSN when an object is created</p>
</td>
</tr>
<tr id="row12250237155218"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p8250337115219"><a name="p8250337115219"></a><a name="p8250337115219"></a>rcychangecsn</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p6250337115210"><a name="p6250337115210"></a><a name="p6250337115210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1250173719522"><a name="p1250173719522"></a><a name="p1250173719522"></a>SCN when an object definition is modified</p>
</td>
</tr>
<tr id="row1725083755217"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p172501037105217"><a name="p172501037105217"></a><a name="p172501037105217"></a>rcynamespace</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p925093720524"><a name="p925093720524"></a><a name="p925093720524"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p725012375525"><a name="p725012375525"></a><a name="p725012375525"></a>OID of the namespace that contains this relationship</p>
</td>
</tr>
<tr id="row1725013755218"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p5250037155213"><a name="p5250037155213"></a><a name="p5250037155213"></a>rcyowner</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p172504373522"><a name="p172504373522"></a><a name="p172504373522"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p32507375523"><a name="p32507375523"></a><a name="p32507375523"></a>Relationship owner</p>
</td>
</tr>
<tr id="row525015378522"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p225013710523"><a name="p225013710523"></a><a name="p225013710523"></a>rcytablespace</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p82507377523"><a name="p82507377523"></a><a name="p82507377523"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p92501737125218"><a name="p92501737125218"></a><a name="p92501737125218"></a>Tablespace where the relationship is stored. If the value is <strong id="b5714832103315"><a name="b5714832103315"></a><a name="b5714832103315"></a>0</strong>, the default tablespace of the database is used. This column is meaningless if the relationship has no on-disk file.</p>
</td>
</tr>
<tr id="row15250103713521"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1525015375521"><a name="p1525015375521"></a><a name="p1525015375521"></a>rcyrelfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p11251737125217"><a name="p11251737125217"></a><a name="p11251737125217"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1525163717524"><a name="p1525163717524"></a><a name="p1525163717524"></a>File name of the recycle bin object on a disk, or <strong id="b1686417444393"><a name="b1686417444393"></a><a name="b1686417444393"></a>0</strong> if none, used to restore the texture file when the <strong id="b265152075818"><a name="b265152075818"></a><a name="b265152075818"></a>TRUNCATE</strong> object is restored.</p>
</td>
</tr>
<tr id="row162519377527"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p13251203735215"><a name="p13251203735215"></a><a name="p13251203735215"></a>rcycanrestore</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p525118377528"><a name="p525118377528"></a><a name="p525118377528"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p2025111370521"><a name="p2025111370521"></a><a name="p2025111370521"></a>Whether flashback can be performed separately</p>
</td>
</tr>
<tr id="row625163717521"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p192511437145219"><a name="p192511437145219"></a><a name="p192511437145219"></a>rcycanpurge</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p1251103711523"><a name="p1251103711523"></a><a name="p1251103711523"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p5251937135212"><a name="p5251937135212"></a><a name="p5251937135212"></a>Whether the purge operation can be performed independently</p>
</td>
</tr>
<tr id="row202511537125215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p425113714529"><a name="p425113714529"></a><a name="p425113714529"></a>rcyfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p925113735219"><a name="p925113735219"></a><a name="p925113735219"></a>xid32</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p42511237175211"><a name="p42511237175211"></a><a name="p42511237175211"></a>All transaction IDs before this one have been replaced with a permanent (frozen) transaction ID in the table.</p>
</td>
</tr>
<tr id="row11251937175218"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p3251163755213"><a name="p3251163755213"></a><a name="p3251163755213"></a>rcyfrozenxid64</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p132519372521"><a name="p132519372521"></a><a name="p132519372521"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p5251103710528"><a name="p5251103710528"></a><a name="p5251103710528"></a>All transaction IDs before this one have been replaced with a permanent (frozen) transaction ID in the table.</p>
</td>
</tr>
</tbody>
</table>

