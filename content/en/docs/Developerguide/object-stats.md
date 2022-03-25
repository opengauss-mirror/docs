# Object stats<a name="EN-US_TOPIC_0000001260195075"></a>

Object stats contains three tables: User Tables stats, User index stats, and Bad lock stats. Columns in the tables are described as follows:

## User Tables stats<a name="section155172118496"></a>

**Table  1**  Columns in the User Tables stats report

<a name="table6474183811552"></a>
<table><thead align="left"><tr id="row124748385551"><th class="cellrowborder" valign="top" width="19.91%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="80.08999999999999%" id="mcps1.2.3.1.2"><p id="p184752380558"><a name="p184752380558"></a><a name="p184752380558"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row10475838135511"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p93851054318"><a name="p93851054318"></a><a name="p93851054318"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1138514541319"><a name="p1138514541319"></a><a name="p1138514541319"></a>Database name.</p>
</td>
</tr>
<tr id="row347583817550"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p13385754818"><a name="p13385754818"></a><a name="p13385754818"></a>Schema</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p14385145415114"><a name="p14385145415114"></a><a name="p14385145415114"></a>Schema name.</p>
</td>
</tr>
<tr id="row1147518389557"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p11385654216"><a name="p11385654216"></a><a name="p11385654216"></a>Relname</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p133851854313"><a name="p133851854313"></a><a name="p133851854313"></a>Relation name.</p>
</td>
</tr>
<tr id="row20475638165513"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p438513542011"><a name="p438513542011"></a><a name="p438513542011"></a>Seq Scan</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1838525418116"><a name="p1838525418116"></a><a name="p1838525418116"></a>Number of sequential scans initiated on this table.</p>
</td>
</tr>
<tr id="row1747593815517"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p173858541113"><a name="p173858541113"></a><a name="p173858541113"></a>Seq Tup Read</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1738517541017"><a name="p1738517541017"></a><a name="p1738517541017"></a>Number of live rows fetched by sequential scans.</p>
</td>
</tr>
<tr id="row2047517386558"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p3385145414118"><a name="p3385145414118"></a><a name="p3385145414118"></a>Index Scan</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p838545416118"><a name="p838545416118"></a><a name="p838545416118"></a>Number of index scans initiated on the table.</p>
</td>
</tr>
<tr id="row184750389553"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p73856542015"><a name="p73856542015"></a><a name="p73856542015"></a>Index Tup Fetch</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p8385105413120"><a name="p8385105413120"></a><a name="p8385105413120"></a>Number of live rows fetched by index scans.</p>
</td>
</tr>
<tr id="row15475538175510"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p1038511541613"><a name="p1038511541613"></a><a name="p1038511541613"></a>Tuple Insert</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p123852541615"><a name="p123852541615"></a><a name="p123852541615"></a>Number of rows inserted.</p>
</td>
</tr>
<tr id="row6475138155513"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p738516540116"><a name="p738516540116"></a><a name="p738516540116"></a>Tuple Update</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p538511546114"><a name="p538511546114"></a><a name="p538511546114"></a>Number of rows updated.</p>
</td>
</tr>
<tr id="row15475538175517"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p19385115417115"><a name="p19385115417115"></a><a name="p19385115417115"></a>Tuple Delete</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1738514541215"><a name="p1738514541215"></a><a name="p1738514541215"></a>Number of rows deleted.</p>
</td>
</tr>
<tr id="row647593865514"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p1038516542111"><a name="p1038516542111"></a><a name="p1038516542111"></a>Tuple Hot Update</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p63851954110"><a name="p63851954110"></a><a name="p63851954110"></a>Number of rows HOT updated (with no separate index updated).</p>
</td>
</tr>
<tr id="row184704210217"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p984864220215"><a name="p984864220215"></a><a name="p984864220215"></a>Live Tuple</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p11848144216220"><a name="p11848144216220"></a><a name="p11848144216220"></a>Estimated number of live rows.</p>
</td>
</tr>
<tr id="row29064401626"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p090716409214"><a name="p090716409214"></a><a name="p090716409214"></a>Dead Tuple</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p133861654812"><a name="p133861654812"></a><a name="p133861654812"></a>Estimated number of dead rows.</p>
</td>
</tr>
<tr id="row1375515188217"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p45241916238"><a name="p45241916238"></a><a name="p45241916238"></a>Last Vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1952491617313"><a name="p1952491617313"></a><a name="p1952491617313"></a>Last time at which this table was manually vacuumed (not counting <strong id="b1706936543111639"><a name="b1706936543111639"></a><a name="b1706936543111639"></a>VACUUM FULL</strong>).</p>
</td>
</tr>
<tr id="row92996371222"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p115241316438"><a name="p115241316438"></a><a name="p115241316438"></a>Last Autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p55242161833"><a name="p55242161833"></a><a name="p55242161833"></a>Last time at which this table was vacuumed by the autovacuum daemon.</p>
</td>
</tr>
<tr id="row1050616335211"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p175243161037"><a name="p175243161037"></a><a name="p175243161037"></a>Last Analyze</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p652411161939"><a name="p652411161939"></a><a name="p652411161939"></a>Last time at which this table was manually analyzed.</p>
</td>
</tr>
<tr id="row84527353219"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p145247161732"><a name="p145247161732"></a><a name="p145247161732"></a>Last Autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p25242161835"><a name="p25242161835"></a><a name="p25242161835"></a>Last time at which this table was analyzed by the autovacuum daemon.</p>
</td>
</tr>
<tr id="row13981931425"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p165249164313"><a name="p165249164313"></a><a name="p165249164313"></a>Vacuum Count</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1152417161134"><a name="p1152417161134"></a><a name="p1152417161134"></a>Number of times the table has been manually vacuumed (not counting <strong id="b1542795369111639"><a name="b1542795369111639"></a><a name="b1542795369111639"></a>VACUUM FULL</strong>).</p>
</td>
</tr>
<tr id="row1164832912214"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p11524416038"><a name="p11524416038"></a><a name="p11524416038"></a>Autovacuum Count</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p952491619316"><a name="p952491619316"></a><a name="p952491619316"></a>Number of times the table has been vacuumed by the autovacuum daemon.</p>
</td>
</tr>
<tr id="row1573718265211"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p13525121615311"><a name="p13525121615311"></a><a name="p13525121615311"></a>Analyze Count</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p752551619310"><a name="p752551619310"></a><a name="p752551619310"></a>Number of times the table has been manually analyzed.</p>
</td>
</tr>
<tr id="row1072582418220"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p14525161614317"><a name="p14525161614317"></a><a name="p14525161614317"></a>Autoanalyze Count</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p1852514161331"><a name="p1852514161331"></a><a name="p1852514161331"></a>Number of times the table has been analyzed by the autovacuum daemon.</p>
</td>
</tr>
</tbody>
</table>

## User index stats<a name="section43781039115513"></a>

**Table  2**  Columns in the User index stats report

<a name="table4378939145511"></a>
<table><thead align="left"><tr id="row8379539165515"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p53791439185511"><a name="p53791439185511"></a><a name="p53791439185511"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1637943914552"><a name="p1637943914552"></a><a name="p1637943914552"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row337923910558"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p106704461036"><a name="p106704461036"></a><a name="p106704461036"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p9670124615312"><a name="p9670124615312"></a><a name="p9670124615312"></a>Database name.</p>
</td>
</tr>
<tr id="row1379133965515"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12670164613320"><a name="p12670164613320"></a><a name="p12670164613320"></a>Schema</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p9670104616311"><a name="p9670104616311"></a><a name="p9670104616311"></a>Schema name.</p>
</td>
</tr>
<tr id="row18379123915556"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1067014468318"><a name="p1067014468318"></a><a name="p1067014468318"></a>Relname</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p86705463314"><a name="p86705463314"></a><a name="p86705463314"></a>Relation name.</p>
</td>
</tr>
<tr id="row63799394551"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1367084616318"><a name="p1367084616318"></a><a name="p1367084616318"></a>Index Relname</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p167011461735"><a name="p167011461735"></a><a name="p167011461735"></a>Index name.</p>
</td>
</tr>
<tr id="row23791839195514"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1967010466318"><a name="p1967010466318"></a><a name="p1967010466318"></a>Index Scan</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p667064617317"><a name="p667064617317"></a><a name="p667064617317"></a>Number of index scans initiated on the index.</p>
</td>
</tr>
<tr id="row5379183935513"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1567154613319"><a name="p1567154613319"></a><a name="p1567154613319"></a>Index Tuple Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p20671246431"><a name="p20671246431"></a><a name="p20671246431"></a>Number of index entries returned by scans on the index.</p>
</td>
</tr>
<tr id="row16379439185518"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1671446035"><a name="p1671446035"></a><a name="p1671446035"></a>Index Tuple Fetch</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6671184619317"><a name="p6671184619317"></a><a name="p6671184619317"></a>Number of live table rows fetched by simple index scans using the index.</p>
</td>
</tr>
</tbody>
</table>

## Bad lock stats<a name="section372174016550"></a>

**Table  3**  Columns in the Bad lock stats report

<a name="table107213403552"></a>
<table><thead align="left"><tr id="row117211740195514"><th class="cellrowborder" valign="top" width="25.88%" id="mcps1.2.3.1.1"><p id="p10721184010556"><a name="p10721184010556"></a><a name="p10721184010556"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="74.11999999999999%" id="mcps1.2.3.1.2"><p id="p117225407557"><a name="p117225407557"></a><a name="p117225407557"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row87229402558"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p1185130944"><a name="p1185130944"></a><a name="p1185130944"></a>DB Id</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p1718517013417"><a name="p1718517013417"></a><a name="p1718517013417"></a>OID of the database.</p>
</td>
</tr>
<tr id="row17226406559"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p51861304414"><a name="p51861304414"></a><a name="p51861304414"></a>Tablespace Id</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p418616017413"><a name="p418616017413"></a><a name="p418616017413"></a>Tablespace OID.</p>
</td>
</tr>
<tr id="row572211406556"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p2018617014412"><a name="p2018617014412"></a><a name="p2018617014412"></a>Relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p71863013411"><a name="p71863013411"></a><a name="p71863013411"></a>File object ID.</p>
</td>
</tr>
<tr id="row172294005517"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p111861007412"><a name="p111861007412"></a><a name="p111861007412"></a>Fork Number</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p11861703410"><a name="p11861703410"></a><a name="p11861703410"></a>File type.</p>
</td>
</tr>
<tr id="row07220407553"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p9186200415"><a name="p9186200415"></a><a name="p9186200415"></a>Error Count</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p618660442"><a name="p618660442"></a><a name="p618660442"></a>Number of failures.</p>
</td>
</tr>
<tr id="row1772264035512"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p17186701947"><a name="p17186701947"></a><a name="p17186701947"></a>First Time</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p31861907411"><a name="p31861907411"></a><a name="p31861907411"></a>First occurrence time.</p>
</td>
</tr>
<tr id="row8722124045513"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p17186001445"><a name="p17186001445"></a><a name="p17186001445"></a>Last Time</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p13186201943"><a name="p13186201943"></a><a name="p13186201943"></a>Last occurrence time.</p>
</td>
</tr>
</tbody>
</table>

