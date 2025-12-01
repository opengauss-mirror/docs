# STAT\_ALL\_TABLES<a name="EN-US_TOPIC_0245374692"></a>

**STAT\_ALL\_TABLES**  displays statistics about one row for each table \(including TOAST tables\) in databases on this node.

**Table  1**  STAT\_ALL\_TABLES columns

<a name="en-us_topic_0237122588_table81151723114516"></a>
<table><thead align="left"><tr id="en-us_topic_0237122588_row16340142315451"><th class="cellrowborder" valign="top" width="20.150000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122588_p103408232451"><a name="en-us_topic_0237122588_p103408232451"></a><a name="en-us_topic_0237122588_p103408232451"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="27.12%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122588_p4340623134519"><a name="en-us_topic_0237122588_p4340623134519"></a><a name="en-us_topic_0237122588_p4340623134519"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="52.73%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122588_p16340823184519"><a name="en-us_topic_0237122588_p16340823184519"></a><a name="en-us_topic_0237122588_p16340823184519"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122588_row3341723164517"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p1634117237452"><a name="en-us_topic_0237122588_p1634117237452"></a><a name="en-us_topic_0237122588_p1634117237452"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p3341172334511"><a name="en-us_topic_0237122588_p3341172334511"></a><a name="en-us_topic_0237122588_p3341172334511"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p134152314511"><a name="en-us_topic_0237122588_p134152314511"></a><a name="en-us_topic_0237122588_p134152314511"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row1334152313456"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p10341323204517"><a name="en-us_topic_0237122588_p10341323204517"></a><a name="en-us_topic_0237122588_p10341323204517"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p1934112315453"><a name="en-us_topic_0237122588_p1934112315453"></a><a name="en-us_topic_0237122588_p1934112315453"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p93411923194513"><a name="en-us_topic_0237122588_p93411923194513"></a><a name="en-us_topic_0237122588_p93411923194513"></a>Name of the schema that the table is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row634192334518"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p834152311458"><a name="en-us_topic_0237122588_p834152311458"></a><a name="en-us_topic_0237122588_p834152311458"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p134215235455"><a name="en-us_topic_0237122588_p134215235455"></a><a name="en-us_topic_0237122588_p134215235455"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p1342182311451"><a name="en-us_topic_0237122588_p1342182311451"></a><a name="en-us_topic_0237122588_p1342182311451"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row0342223124519"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p83421623184516"><a name="en-us_topic_0237122588_p83421623184516"></a><a name="en-us_topic_0237122588_p83421623184516"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p73421123134513"><a name="en-us_topic_0237122588_p73421123134513"></a><a name="en-us_topic_0237122588_p73421123134513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p13342182394510"><a name="en-us_topic_0237122588_p13342182394510"></a><a name="en-us_topic_0237122588_p13342182394510"></a>Number of sequential scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row53421233458"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p4342132314510"><a name="en-us_topic_0237122588_p4342132314510"></a><a name="en-us_topic_0237122588_p4342132314510"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p43421323104518"><a name="en-us_topic_0237122588_p43421323104518"></a><a name="en-us_topic_0237122588_p43421323104518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p9342323104517"><a name="en-us_topic_0237122588_p9342323104517"></a><a name="en-us_topic_0237122588_p9342323104517"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row153421823194515"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p8343152312452"><a name="en-us_topic_0237122588_p8343152312452"></a><a name="en-us_topic_0237122588_p8343152312452"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p83431523124520"><a name="en-us_topic_0237122588_p83431523124520"></a><a name="en-us_topic_0237122588_p83431523124520"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p434318237453"><a name="en-us_topic_0237122588_p434318237453"></a><a name="en-us_topic_0237122588_p434318237453"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row7343132374513"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p6343923124511"><a name="en-us_topic_0237122588_p6343923124511"></a><a name="en-us_topic_0237122588_p6343923124511"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p83431723104515"><a name="en-us_topic_0237122588_p83431723104515"></a><a name="en-us_topic_0237122588_p83431723104515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p1634317232458"><a name="en-us_topic_0237122588_p1634317232458"></a><a name="en-us_topic_0237122588_p1634317232458"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row4343192318455"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p9343923134514"><a name="en-us_topic_0237122588_p9343923134514"></a><a name="en-us_topic_0237122588_p9343923134514"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p1734332313457"><a name="en-us_topic_0237122588_p1734332313457"></a><a name="en-us_topic_0237122588_p1734332313457"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p33431223174510"><a name="en-us_topic_0237122588_p33431223174510"></a><a name="en-us_topic_0237122588_p33431223174510"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row1334402320454"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p123441923204512"><a name="en-us_topic_0237122588_p123441923204512"></a><a name="en-us_topic_0237122588_p123441923204512"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p93448236457"><a name="en-us_topic_0237122588_p93448236457"></a><a name="en-us_topic_0237122588_p93448236457"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p1434462315458"><a name="en-us_topic_0237122588_p1434462315458"></a><a name="en-us_topic_0237122588_p1434462315458"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row3344132384510"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p43441523184511"><a name="en-us_topic_0237122588_p43441523184511"></a><a name="en-us_topic_0237122588_p43441523184511"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p434442312458"><a name="en-us_topic_0237122588_p434442312458"></a><a name="en-us_topic_0237122588_p434442312458"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p5344102374512"><a name="en-us_topic_0237122588_p5344102374512"></a><a name="en-us_topic_0237122588_p5344102374512"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row20344823134513"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p16344132324514"><a name="en-us_topic_0237122588_p16344132324514"></a><a name="en-us_topic_0237122588_p16344132324514"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p18344182364518"><a name="en-us_topic_0237122588_p18344182364518"></a><a name="en-us_topic_0237122588_p18344182364518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p153454237458"><a name="en-us_topic_0237122588_p153454237458"></a><a name="en-us_topic_0237122588_p153454237458"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row193451423194515"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p7345102315451"><a name="en-us_topic_0237122588_p7345102315451"></a><a name="en-us_topic_0237122588_p7345102315451"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p834582316457"><a name="en-us_topic_0237122588_p834582316457"></a><a name="en-us_topic_0237122588_p834582316457"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p0345152314516"><a name="en-us_topic_0237122588_p0345152314516"></a><a name="en-us_topic_0237122588_p0345152314516"></a>Estimated number of live rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row153453232451"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p1334514232455"><a name="en-us_topic_0237122588_p1334514232455"></a><a name="en-us_topic_0237122588_p1334514232455"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p03457238453"><a name="en-us_topic_0237122588_p03457238453"></a><a name="en-us_topic_0237122588_p03457238453"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p63458236452"><a name="en-us_topic_0237122588_p63458236452"></a><a name="en-us_topic_0237122588_p63458236452"></a>Estimated number of dead rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row1234572344516"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p1234517236454"><a name="en-us_topic_0237122588_p1234517236454"></a><a name="en-us_topic_0237122588_p1234517236454"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p18346823134517"><a name="en-us_topic_0237122588_p18346823134517"></a><a name="en-us_topic_0237122588_p18346823134517"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p9346623134514"><a name="en-us_topic_0237122588_p9346623134514"></a><a name="en-us_topic_0237122588_p9346623134514"></a>Last time at which this table was manually vacuumed (not counting <strong id="b14714024112719"><a name="b14714024112719"></a><a name="b14714024112719"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row8346112314515"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p3346112317459"><a name="en-us_topic_0237122588_p3346112317459"></a><a name="en-us_topic_0237122588_p3346112317459"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p183461423124514"><a name="en-us_topic_0237122588_p183461423124514"></a><a name="en-us_topic_0237122588_p183461423124514"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p534672315453"><a name="en-us_topic_0237122588_p534672315453"></a><a name="en-us_topic_0237122588_p534672315453"></a>Last time at which this table was vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row43464237455"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p11346162394518"><a name="en-us_topic_0237122588_p11346162394518"></a><a name="en-us_topic_0237122588_p11346162394518"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p734652316459"><a name="en-us_topic_0237122588_p734652316459"></a><a name="en-us_topic_0237122588_p734652316459"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p1034611239450"><a name="en-us_topic_0237122588_p1034611239450"></a><a name="en-us_topic_0237122588_p1034611239450"></a>Last time at which the table was manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row14346122310456"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p23465232452"><a name="en-us_topic_0237122588_p23465232452"></a><a name="en-us_topic_0237122588_p23465232452"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p1534722319455"><a name="en-us_topic_0237122588_p1534722319455"></a><a name="en-us_topic_0237122588_p1534722319455"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p8347162317450"><a name="en-us_topic_0237122588_p8347162317450"></a><a name="en-us_topic_0237122588_p8347162317450"></a>Last time at which this table was analyzed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row1134722311459"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p1434732317454"><a name="en-us_topic_0237122588_p1434732317454"></a><a name="en-us_topic_0237122588_p1434732317454"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p73471723114513"><a name="en-us_topic_0237122588_p73471723114513"></a><a name="en-us_topic_0237122588_p73471723114513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p434762334514"><a name="en-us_topic_0237122588_p434762334514"></a><a name="en-us_topic_0237122588_p434762334514"></a>Number of times the table has been manually vacuumed (not counting <strong id="b325014285278"><a name="b325014285278"></a><a name="b325014285278"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row93471723184520"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p103471223154519"><a name="en-us_topic_0237122588_p103471223154519"></a><a name="en-us_topic_0237122588_p103471223154519"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p034792315454"><a name="en-us_topic_0237122588_p034792315454"></a><a name="en-us_topic_0237122588_p034792315454"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p5347202384519"><a name="en-us_topic_0237122588_p5347202384519"></a><a name="en-us_topic_0237122588_p5347202384519"></a>Number of times this table has been vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row6347132316459"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p1234812235451"><a name="en-us_topic_0237122588_p1234812235451"></a><a name="en-us_topic_0237122588_p1234812235451"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p18348523104517"><a name="en-us_topic_0237122588_p18348523104517"></a><a name="en-us_topic_0237122588_p18348523104517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p19348182314515"><a name="en-us_topic_0237122588_p19348182314515"></a><a name="en-us_topic_0237122588_p19348182314515"></a>Number of times the table has been manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122588_row15348923144520"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122588_p73481823104511"><a name="en-us_topic_0237122588_p73481823104511"></a><a name="en-us_topic_0237122588_p73481823104511"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122588_p1034892320451"><a name="en-us_topic_0237122588_p1034892320451"></a><a name="en-us_topic_0237122588_p1034892320451"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122588_p1334882317453"><a name="en-us_topic_0237122588_p1334882317453"></a><a name="en-us_topic_0237122588_p1334882317453"></a>Number of times the table has been analyzed by the autovacuum daemon</p>
</td>
</tr>
</tbody>
</table>

