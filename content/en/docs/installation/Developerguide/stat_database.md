# STAT\_DATABASE<a name="EN-US_TOPIC_0245374698"></a>

**STAT\_DATABASE**  contains statistics for each database on this node.

**Table  1**  STAT\_DATABASE columns

<a name="en-us_topic_0237122594_table1984711557512"></a>
<table><thead align="left"><tr id="en-us_topic_0237122594_row438656135111"><th class="cellrowborder" valign="top" width="17.270000000000003%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122594_p63820563515"><a name="en-us_topic_0237122594_p63820563515"></a><a name="en-us_topic_0237122594_p63820563515"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="25.830000000000002%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122594_p12381956185118"><a name="en-us_topic_0237122594_p12381956185118"></a><a name="en-us_topic_0237122594_p12381956185118"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.900000000000006%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122594_p1239356135115"><a name="en-us_topic_0237122594_p1239356135115"></a><a name="en-us_topic_0237122594_p1239356135115"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122594_row10391656175113"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p13935635118"><a name="en-us_topic_0237122594_p13935635118"></a><a name="en-us_topic_0237122594_p13935635118"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p163985605115"><a name="en-us_topic_0237122594_p163985605115"></a><a name="en-us_topic_0237122594_p163985605115"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p1139156155111"><a name="en-us_topic_0237122594_p1139156155111"></a><a name="en-us_topic_0237122594_p1139156155111"></a>OID of a database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row1140155645117"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p84045655117"><a name="en-us_topic_0237122594_p84045655117"></a><a name="en-us_topic_0237122594_p84045655117"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p740175620510"><a name="en-us_topic_0237122594_p740175620510"></a><a name="en-us_topic_0237122594_p740175620510"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p12403569514"><a name="en-us_topic_0237122594_p12403569514"></a><a name="en-us_topic_0237122594_p12403569514"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row240165616517"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p16405564519"><a name="en-us_topic_0237122594_p16405564519"></a><a name="en-us_topic_0237122594_p16405564519"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p0404569513"><a name="en-us_topic_0237122594_p0404569513"></a><a name="en-us_topic_0237122594_p0404569513"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p440956185113"><a name="en-us_topic_0237122594_p440956185113"></a><a name="en-us_topic_0237122594_p440956185113"></a>Number of backends currently connected to this database. This is the only column in this view that returns a value reflecting the current state; all other columns return the accumulated values since the last reset.</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row184010560516"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p4401556115111"><a name="en-us_topic_0237122594_p4401556115111"></a><a name="en-us_topic_0237122594_p4401556115111"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p1740105605114"><a name="en-us_topic_0237122594_p1740105605114"></a><a name="en-us_topic_0237122594_p1740105605114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p154175611519"><a name="en-us_topic_0237122594_p154175611519"></a><a name="en-us_topic_0237122594_p154175611519"></a>Number of transactions in this database that have been committed</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row144185645115"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p11411756175119"><a name="en-us_topic_0237122594_p11411756175119"></a><a name="en-us_topic_0237122594_p11411756175119"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p041135615114"><a name="en-us_topic_0237122594_p041135615114"></a><a name="en-us_topic_0237122594_p041135615114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p19418563519"><a name="en-us_topic_0237122594_p19418563519"></a><a name="en-us_topic_0237122594_p19418563519"></a>Number of transactions in this database that have been rolled back</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row134118564517"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p1341205685113"><a name="en-us_topic_0237122594_p1341205685113"></a><a name="en-us_topic_0237122594_p1341205685113"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p12412056125118"><a name="en-us_topic_0237122594_p12412056125118"></a><a name="en-us_topic_0237122594_p12412056125118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p14175616516"><a name="en-us_topic_0237122594_p14175616516"></a><a name="en-us_topic_0237122594_p14175616516"></a>Number of disk blocks read in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row541115695118"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p84245611511"><a name="en-us_topic_0237122594_p84245611511"></a><a name="en-us_topic_0237122594_p84245611511"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p1042256195119"><a name="en-us_topic_0237122594_p1042256195119"></a><a name="en-us_topic_0237122594_p1042256195119"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p24211562513"><a name="en-us_topic_0237122594_p24211562513"></a><a name="en-us_topic_0237122594_p24211562513"></a>Number of times disk blocks were found in the buffer cache (unnecessary as the number includes only hits in the PostgreSQL buffer cache)</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row942195620511"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p9425566512"><a name="en-us_topic_0237122594_p9425566512"></a><a name="en-us_topic_0237122594_p9425566512"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p842205616511"><a name="en-us_topic_0237122594_p842205616511"></a><a name="en-us_topic_0237122594_p842205616511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p1343105619512"><a name="en-us_topic_0237122594_p1343105619512"></a><a name="en-us_topic_0237122594_p1343105619512"></a>Number of rows returned by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row12431456145116"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p643175665117"><a name="en-us_topic_0237122594_p643175665117"></a><a name="en-us_topic_0237122594_p643175665117"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p143556115112"><a name="en-us_topic_0237122594_p143556115112"></a><a name="en-us_topic_0237122594_p143556115112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p1443256185117"><a name="en-us_topic_0237122594_p1443256185117"></a><a name="en-us_topic_0237122594_p1443256185117"></a>Number of rows fetched by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row144056105111"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p644185665117"><a name="en-us_topic_0237122594_p644185665117"></a><a name="en-us_topic_0237122594_p644185665117"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p84417568517"><a name="en-us_topic_0237122594_p84417568517"></a><a name="en-us_topic_0237122594_p84417568517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p1441856185110"><a name="en-us_topic_0237122594_p1441856185110"></a><a name="en-us_topic_0237122594_p1441856185110"></a>Number of rows inserted by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row5440567511"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p2441456125110"><a name="en-us_topic_0237122594_p2441456125110"></a><a name="en-us_topic_0237122594_p2441456125110"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p184485645113"><a name="en-us_topic_0237122594_p184485645113"></a><a name="en-us_topic_0237122594_p184485645113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p10451656185113"><a name="en-us_topic_0237122594_p10451656185113"></a><a name="en-us_topic_0237122594_p10451656185113"></a>Number of rows updated by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row1145956105117"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p194515562512"><a name="en-us_topic_0237122594_p194515562512"></a><a name="en-us_topic_0237122594_p194515562512"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p114512561516"><a name="en-us_topic_0237122594_p114512561516"></a><a name="en-us_topic_0237122594_p114512561516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p845656135120"><a name="en-us_topic_0237122594_p845656135120"></a><a name="en-us_topic_0237122594_p845656135120"></a>Number of rows deleted by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row2045656195119"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p1145356145111"><a name="en-us_topic_0237122594_p1145356145111"></a><a name="en-us_topic_0237122594_p1145356145111"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p194620565518"><a name="en-us_topic_0237122594_p194620565518"></a><a name="en-us_topic_0237122594_p194620565518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p44619562518"><a name="en-us_topic_0237122594_p44619562518"></a><a name="en-us_topic_0237122594_p44619562518"></a>Number of queries canceled due to database recovery conflicts (conflicts occurring only on the standby server). For details, see <a href="stat_database_conflicts.md">STAT_DATABASE_CONFLICTS</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row12467561514"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p1746856105116"><a name="en-us_topic_0237122594_p1746856105116"></a><a name="en-us_topic_0237122594_p1746856105116"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p1646185675113"><a name="en-us_topic_0237122594_p1646185675113"></a><a name="en-us_topic_0237122594_p1646185675113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p146145617514"><a name="en-us_topic_0237122594_p146145617514"></a><a name="en-us_topic_0237122594_p146145617514"></a>Number of temporary files created by queries in this database. All temporary files are counted, regardless of why the temporary file was created (for example, sorting or hashing), and regardless of the <strong id="en-us_topic_0237122594_b13177144872112"><a name="en-us_topic_0237122594_b13177144872112"></a><a name="en-us_topic_0237122594_b13177144872112"></a>log_temp_files</strong> setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row114655614518"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p15472569517"><a name="en-us_topic_0237122594_p15472569517"></a><a name="en-us_topic_0237122594_p15472569517"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p12471556195113"><a name="en-us_topic_0237122594_p12471556195113"></a><a name="en-us_topic_0237122594_p12471556195113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p17478565516"><a name="en-us_topic_0237122594_p17478565516"></a><a name="en-us_topic_0237122594_p17478565516"></a>Total amount of data written to temporary files by queries in this database. All temporary files are counted, regardless of why the temporary file was created, and regardless of the <strong id="en-us_topic_0237122594_b068882512474"><a name="en-us_topic_0237122594_b068882512474"></a><a name="en-us_topic_0237122594_b068882512474"></a>log_temp_files</strong> setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row74715619513"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p947135625113"><a name="en-us_topic_0237122594_p947135625113"></a><a name="en-us_topic_0237122594_p947135625113"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p147656105110"><a name="en-us_topic_0237122594_p147656105110"></a><a name="en-us_topic_0237122594_p147656105110"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p13471556155114"><a name="en-us_topic_0237122594_p13471556155114"></a><a name="en-us_topic_0237122594_p13471556155114"></a>Number of deadlocks detected in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row447165613515"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p174716569511"><a name="en-us_topic_0237122594_p174716569511"></a><a name="en-us_topic_0237122594_p174716569511"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p2047115605115"><a name="en-us_topic_0237122594_p2047115605115"></a><a name="en-us_topic_0237122594_p2047115605115"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p548256145118"><a name="en-us_topic_0237122594_p548256145118"></a><a name="en-us_topic_0237122594_p548256145118"></a>Time spent reading data file blocks by backends in this database (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row54816568514"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p17481456185117"><a name="en-us_topic_0237122594_p17481456185117"></a><a name="en-us_topic_0237122594_p17481456185117"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p248125665114"><a name="en-us_topic_0237122594_p248125665114"></a><a name="en-us_topic_0237122594_p248125665114"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p1248195611517"><a name="en-us_topic_0237122594_p1248195611517"></a><a name="en-us_topic_0237122594_p1248195611517"></a>Time spent reading data file blocks by backends in this database (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122594_row24813564513"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122594_p45025617518"><a name="en-us_topic_0237122594_p45025617518"></a><a name="en-us_topic_0237122594_p45025617518"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122594_p350145616519"><a name="en-us_topic_0237122594_p350145616519"></a><a name="en-us_topic_0237122594_p350145616519"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122594_p95045675112"><a name="en-us_topic_0237122594_p95045675112"></a><a name="en-us_topic_0237122594_p95045675112"></a>Time at which the current statistics were reset</p>
</td>
</tr>
</tbody>
</table>

