# STAT\_USER\_TABLES<a name="EN-US_TOPIC_0245374680"></a>

**STAT\_USER\_TABLES**  displays the status information about user-defined ordinary tables in all namespaces on the current node.

**Table  1**  STAT\_USER\_TABLES columns

<a name="en-us_topic_0237122576_table85697355239"></a>
<table><thead align="left"><tr id="en-us_topic_0237122576_row57731335112317"><th class="cellrowborder" valign="top" width="20.150000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122576_p577411351232"><a name="en-us_topic_0237122576_p577411351232"></a><a name="en-us_topic_0237122576_p577411351232"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="30.61%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122576_p2077493562313"><a name="en-us_topic_0237122576_p2077493562313"></a><a name="en-us_topic_0237122576_p2077493562313"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="49.24%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122576_p1277493542313"><a name="en-us_topic_0237122576_p1277493542313"></a><a name="en-us_topic_0237122576_p1277493542313"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122576_row17746359231"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p1177443592316"><a name="en-us_topic_0237122576_p1177443592316"></a><a name="en-us_topic_0237122576_p1177443592316"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p15775183514230"><a name="en-us_topic_0237122576_p15775183514230"></a><a name="en-us_topic_0237122576_p15775183514230"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p57759351230"><a name="en-us_topic_0237122576_p57759351230"></a><a name="en-us_topic_0237122576_p57759351230"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row18775735132320"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p67757356238"><a name="en-us_topic_0237122576_p67757356238"></a><a name="en-us_topic_0237122576_p67757356238"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p14775143552315"><a name="en-us_topic_0237122576_p14775143552315"></a><a name="en-us_topic_0237122576_p14775143552315"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p2775183520237"><a name="en-us_topic_0237122576_p2775183520237"></a><a name="en-us_topic_0237122576_p2775183520237"></a>Name of the schema that the table is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row197751935162314"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p1277663562314"><a name="en-us_topic_0237122576_p1277663562314"></a><a name="en-us_topic_0237122576_p1277663562314"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p18776193542310"><a name="en-us_topic_0237122576_p18776193542310"></a><a name="en-us_topic_0237122576_p18776193542310"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p6776183552311"><a name="en-us_topic_0237122576_p6776183552311"></a><a name="en-us_topic_0237122576_p6776183552311"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row3776143516237"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p1377633513239"><a name="en-us_topic_0237122576_p1377633513239"></a><a name="en-us_topic_0237122576_p1377633513239"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p187761735122319"><a name="en-us_topic_0237122576_p187761735122319"></a><a name="en-us_topic_0237122576_p187761735122319"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p107761235162311"><a name="en-us_topic_0237122576_p107761235162311"></a><a name="en-us_topic_0237122576_p107761235162311"></a>Number of sequential scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row777613572317"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p117761735162315"><a name="en-us_topic_0237122576_p117761735162315"></a><a name="en-us_topic_0237122576_p117761735162315"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p107774359234"><a name="en-us_topic_0237122576_p107774359234"></a><a name="en-us_topic_0237122576_p107774359234"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p677793552320"><a name="en-us_topic_0237122576_p677793552320"></a><a name="en-us_topic_0237122576_p677793552320"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row167771235122312"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p17771352235"><a name="en-us_topic_0237122576_p17771352235"></a><a name="en-us_topic_0237122576_p17771352235"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p1377723511233"><a name="en-us_topic_0237122576_p1377723511233"></a><a name="en-us_topic_0237122576_p1377723511233"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p18778163592315"><a name="en-us_topic_0237122576_p18778163592315"></a><a name="en-us_topic_0237122576_p18778163592315"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row277913513231"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p37790359238"><a name="en-us_topic_0237122576_p37790359238"></a><a name="en-us_topic_0237122576_p37790359238"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p1577923513231"><a name="en-us_topic_0237122576_p1577923513231"></a><a name="en-us_topic_0237122576_p1577923513231"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p19779183532313"><a name="en-us_topic_0237122576_p19779183532313"></a><a name="en-us_topic_0237122576_p19779183532313"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row117794351231"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p11779035152318"><a name="en-us_topic_0237122576_p11779035152318"></a><a name="en-us_topic_0237122576_p11779035152318"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p1878053511239"><a name="en-us_topic_0237122576_p1878053511239"></a><a name="en-us_topic_0237122576_p1878053511239"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p1078003522314"><a name="en-us_topic_0237122576_p1078003522314"></a><a name="en-us_topic_0237122576_p1078003522314"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row1578053552318"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p1378023562319"><a name="en-us_topic_0237122576_p1378023562319"></a><a name="en-us_topic_0237122576_p1378023562319"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p1178023552318"><a name="en-us_topic_0237122576_p1178023552318"></a><a name="en-us_topic_0237122576_p1178023552318"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p6780183512233"><a name="en-us_topic_0237122576_p6780183512233"></a><a name="en-us_topic_0237122576_p6780183512233"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row19780173519233"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p5780163513231"><a name="en-us_topic_0237122576_p5780163513231"></a><a name="en-us_topic_0237122576_p5780163513231"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p37806356236"><a name="en-us_topic_0237122576_p37806356236"></a><a name="en-us_topic_0237122576_p37806356236"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p77801535132318"><a name="en-us_topic_0237122576_p77801535132318"></a><a name="en-us_topic_0237122576_p77801535132318"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row177811535152310"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p10781435182312"><a name="en-us_topic_0237122576_p10781435182312"></a><a name="en-us_topic_0237122576_p10781435182312"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p1781153532314"><a name="en-us_topic_0237122576_p1781153532314"></a><a name="en-us_topic_0237122576_p1781153532314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p178183519235"><a name="en-us_topic_0237122576_p178183519235"></a><a name="en-us_topic_0237122576_p178183519235"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row14781935182315"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p3781153572314"><a name="en-us_topic_0237122576_p3781153572314"></a><a name="en-us_topic_0237122576_p3781153572314"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p1878119354235"><a name="en-us_topic_0237122576_p1878119354235"></a><a name="en-us_topic_0237122576_p1878119354235"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p97811535152312"><a name="en-us_topic_0237122576_p97811535152312"></a><a name="en-us_topic_0237122576_p97811535152312"></a>Estimated number of live rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row47811235102310"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p1978143514233"><a name="en-us_topic_0237122576_p1978143514233"></a><a name="en-us_topic_0237122576_p1978143514233"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p478253572318"><a name="en-us_topic_0237122576_p478253572318"></a><a name="en-us_topic_0237122576_p478253572318"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p157827353234"><a name="en-us_topic_0237122576_p157827353234"></a><a name="en-us_topic_0237122576_p157827353234"></a>Estimated number of dead rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row77821635202315"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p57821135142317"><a name="en-us_topic_0237122576_p57821135142317"></a><a name="en-us_topic_0237122576_p57821135142317"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p17825351234"><a name="en-us_topic_0237122576_p17825351234"></a><a name="en-us_topic_0237122576_p17825351234"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p1678213502313"><a name="en-us_topic_0237122576_p1678213502313"></a><a name="en-us_topic_0237122576_p1678213502313"></a>Last time at which this table was manually vacuumed (not counting <strong id="b398415154224"><a name="b398415154224"></a><a name="b398415154224"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row20782183510235"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p107822355237"><a name="en-us_topic_0237122576_p107822355237"></a><a name="en-us_topic_0237122576_p107822355237"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p57821335152316"><a name="en-us_topic_0237122576_p57821335152316"></a><a name="en-us_topic_0237122576_p57821335152316"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p117821535102314"><a name="en-us_topic_0237122576_p117821535102314"></a><a name="en-us_topic_0237122576_p117821535102314"></a>Last time at which this table was vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row47831635102317"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p177831235122312"><a name="en-us_topic_0237122576_p177831235122312"></a><a name="en-us_topic_0237122576_p177831235122312"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p10783133572317"><a name="en-us_topic_0237122576_p10783133572317"></a><a name="en-us_topic_0237122576_p10783133572317"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p1478313350232"><a name="en-us_topic_0237122576_p1478313350232"></a><a name="en-us_topic_0237122576_p1478313350232"></a>Last time at which the table was manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row157836356238"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p14783123515230"><a name="en-us_topic_0237122576_p14783123515230"></a><a name="en-us_topic_0237122576_p14783123515230"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p47831635162316"><a name="en-us_topic_0237122576_p47831635162316"></a><a name="en-us_topic_0237122576_p47831635162316"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p17784635182315"><a name="en-us_topic_0237122576_p17784635182315"></a><a name="en-us_topic_0237122576_p17784635182315"></a>Last time at which this table was analyzed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row5784203502315"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p1078463510234"><a name="en-us_topic_0237122576_p1078463510234"></a><a name="en-us_topic_0237122576_p1078463510234"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p20784203516236"><a name="en-us_topic_0237122576_p20784203516236"></a><a name="en-us_topic_0237122576_p20784203516236"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p9784535152312"><a name="en-us_topic_0237122576_p9784535152312"></a><a name="en-us_topic_0237122576_p9784535152312"></a>Number of times the table has been manually vacuumed (not counting <strong id="b2345182622217"><a name="b2345182622217"></a><a name="b2345182622217"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row27841135142319"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p6784173512317"><a name="en-us_topic_0237122576_p6784173512317"></a><a name="en-us_topic_0237122576_p6784173512317"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p207841335102310"><a name="en-us_topic_0237122576_p207841335102310"></a><a name="en-us_topic_0237122576_p207841335102310"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p678410351233"><a name="en-us_topic_0237122576_p678410351233"></a><a name="en-us_topic_0237122576_p678410351233"></a>Number of times this table has been vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row178423512319"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p878410355239"><a name="en-us_topic_0237122576_p878410355239"></a><a name="en-us_topic_0237122576_p878410355239"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p107851835102314"><a name="en-us_topic_0237122576_p107851835102314"></a><a name="en-us_topic_0237122576_p107851835102314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p117851435172314"><a name="en-us_topic_0237122576_p117851435172314"></a><a name="en-us_topic_0237122576_p117851435172314"></a>Number of times the table has been manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122576_row478513552317"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122576_p16785103542317"><a name="en-us_topic_0237122576_p16785103542317"></a><a name="en-us_topic_0237122576_p16785103542317"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122576_p17853357234"><a name="en-us_topic_0237122576_p17853357234"></a><a name="en-us_topic_0237122576_p17853357234"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.24%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122576_p17785835182311"><a name="en-us_topic_0237122576_p17785835182311"></a><a name="en-us_topic_0237122576_p17785835182311"></a>Number of times the table has been analyzed by the autovacuum daemon</p>
</td>
</tr>
</tbody>
</table>

