# SUMMARY\_STAT\_DATABASE<a name="EN-US_TOPIC_0245374699"></a>

**SUMMARY\_STAT\_DATABASE**  contains every row of each database in the cluster, showing database-wide statistics. 

**Table  1**  SUMMARY\_STAT\_DATABASE

<a name="en-us_topic_0237122595_table15180120145411"></a>
<table><thead align="left"><tr id="en-us_topic_0237122595_row9380102549"><th class="cellrowborder" valign="top" width="18.921892189218923%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122595_p1238010018540"><a name="en-us_topic_0237122595_p1238010018540"></a><a name="en-us_topic_0237122595_p1238010018540"></a><strong id="b175214314380"><a name="b175214314380"></a><a name="b175214314380"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.602760276027606%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122595_p538014014544"><a name="en-us_topic_0237122595_p538014014544"></a><a name="en-us_topic_0237122595_p538014014544"></a><strong id="b8791739386"><a name="b8791739386"></a><a name="b8791739386"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.47534753475347%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122595_p1038090195412"><a name="en-us_topic_0237122595_p1038090195412"></a><a name="en-us_topic_0237122595_p1038090195412"></a><strong id="b7524563815"><a name="b7524563815"></a><a name="b7524563815"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122595_row03804017544"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p238114018542"><a name="en-us_topic_0237122595_p238114018542"></a><a name="en-us_topic_0237122595_p238114018542"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p16381120175412"><a name="en-us_topic_0237122595_p16381120175412"></a><a name="en-us_topic_0237122595_p16381120175412"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p143814095420"><a name="en-us_topic_0237122595_p143814095420"></a><a name="en-us_topic_0237122595_p143814095420"></a>Name of the database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row203817011541"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p1538112015547"><a name="en-us_topic_0237122595_p1538112015547"></a><a name="en-us_topic_0237122595_p1538112015547"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p038118015418"><a name="en-us_topic_0237122595_p038118015418"></a><a name="en-us_topic_0237122595_p038118015418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p638113014542"><a name="en-us_topic_0237122595_p638113014542"></a><a name="en-us_topic_0237122595_p638113014542"></a>Number of backends currently connected to this database. This is the only column in this view that returns a value reflecting the current state; all other columns return the accumulated values since the last reset.</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row23819075418"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p17381140135420"><a name="en-us_topic_0237122595_p17381140135420"></a><a name="en-us_topic_0237122595_p17381140135420"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p93821603543"><a name="en-us_topic_0237122595_p93821603543"></a><a name="en-us_topic_0237122595_p93821603543"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p1838217075419"><a name="en-us_topic_0237122595_p1838217075419"></a><a name="en-us_topic_0237122595_p1838217075419"></a>Number of transactions in this database that have been committed</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row33821002540"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p1382100135414"><a name="en-us_topic_0237122595_p1382100135414"></a><a name="en-us_topic_0237122595_p1382100135414"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p63828065410"><a name="en-us_topic_0237122595_p63828065410"></a><a name="en-us_topic_0237122595_p63828065410"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p153821307541"><a name="en-us_topic_0237122595_p153821307541"></a><a name="en-us_topic_0237122595_p153821307541"></a>Number of transactions in this database that have been rolled back</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row6382607549"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p038212015541"><a name="en-us_topic_0237122595_p038212015541"></a><a name="en-us_topic_0237122595_p038212015541"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p14382603540"><a name="en-us_topic_0237122595_p14382603540"></a><a name="en-us_topic_0237122595_p14382603540"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p183821604544"><a name="en-us_topic_0237122595_p183821604544"></a><a name="en-us_topic_0237122595_p183821604544"></a>Number of disk blocks read in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row238216020547"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p183833014545"><a name="en-us_topic_0237122595_p183833014545"></a><a name="en-us_topic_0237122595_p183833014545"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p738390125411"><a name="en-us_topic_0237122595_p738390125411"></a><a name="en-us_topic_0237122595_p738390125411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p113834017549"><a name="en-us_topic_0237122595_p113834017549"></a><a name="en-us_topic_0237122595_p113834017549"></a>Number of times disk blocks were found in the buffer cache (unnecessary as the number includes only hits in the PostgreSQL buffer cache)</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row1238318025415"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p11383140125411"><a name="en-us_topic_0237122595_p11383140125411"></a><a name="en-us_topic_0237122595_p11383140125411"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p19383190135419"><a name="en-us_topic_0237122595_p19383190135419"></a><a name="en-us_topic_0237122595_p19383190135419"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p19383100115411"><a name="en-us_topic_0237122595_p19383100115411"></a><a name="en-us_topic_0237122595_p19383100115411"></a>Number of rows returned by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row13383170115414"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p938313075411"><a name="en-us_topic_0237122595_p938313075411"></a><a name="en-us_topic_0237122595_p938313075411"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p113837015412"><a name="en-us_topic_0237122595_p113837015412"></a><a name="en-us_topic_0237122595_p113837015412"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p638317045416"><a name="en-us_topic_0237122595_p638317045416"></a><a name="en-us_topic_0237122595_p638317045416"></a>Number of rows fetched by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row3384170135414"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p9384170155419"><a name="en-us_topic_0237122595_p9384170155419"></a><a name="en-us_topic_0237122595_p9384170155419"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p1538419095419"><a name="en-us_topic_0237122595_p1538419095419"></a><a name="en-us_topic_0237122595_p1538419095419"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p1138416017549"><a name="en-us_topic_0237122595_p1138416017549"></a><a name="en-us_topic_0237122595_p1138416017549"></a>Number of rows inserted by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row16384160195416"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p173840075413"><a name="en-us_topic_0237122595_p173840075413"></a><a name="en-us_topic_0237122595_p173840075413"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p43843011548"><a name="en-us_topic_0237122595_p43843011548"></a><a name="en-us_topic_0237122595_p43843011548"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p1438411011547"><a name="en-us_topic_0237122595_p1438411011547"></a><a name="en-us_topic_0237122595_p1438411011547"></a>Number of rows updated by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row193845013546"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p938412035414"><a name="en-us_topic_0237122595_p938412035414"></a><a name="en-us_topic_0237122595_p938412035414"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p103845017546"><a name="en-us_topic_0237122595_p103845017546"></a><a name="en-us_topic_0237122595_p103845017546"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p17385100145414"><a name="en-us_topic_0237122595_p17385100145414"></a><a name="en-us_topic_0237122595_p17385100145414"></a>Number of rows deleted by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row83851601549"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p12385104548"><a name="en-us_topic_0237122595_p12385104548"></a><a name="en-us_topic_0237122595_p12385104548"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p163851207541"><a name="en-us_topic_0237122595_p163851207541"></a><a name="en-us_topic_0237122595_p163851207541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p53851903545"><a name="en-us_topic_0237122595_p53851903545"></a><a name="en-us_topic_0237122595_p53851903545"></a>Number of queries canceled due to database recovery conflicts (conflicts occurring only on the standby server). For details, see <a href="stat_database_conflicts.md">STAT_DATABASE_CONFLICTS</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row14385140165412"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p1738513095411"><a name="en-us_topic_0237122595_p1738513095411"></a><a name="en-us_topic_0237122595_p1738513095411"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p7385402546"><a name="en-us_topic_0237122595_p7385402546"></a><a name="en-us_topic_0237122595_p7385402546"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p18385180145413"><a name="en-us_topic_0237122595_p18385180145413"></a><a name="en-us_topic_0237122595_p18385180145413"></a>Number of temporary files created by queries in this database. All temporary files are counted, regardless of why the temporary file was created (for example, sorting or hashing), and regardless of the <strong id="b1032291315418"><a name="b1032291315418"></a><a name="b1032291315418"></a>log_temp_files</strong> setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row138610065411"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p23866012543"><a name="en-us_topic_0237122595_p23866012543"></a><a name="en-us_topic_0237122595_p23866012543"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p163863075411"><a name="en-us_topic_0237122595_p163863075411"></a><a name="en-us_topic_0237122595_p163863075411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p638670155417"><a name="en-us_topic_0237122595_p638670155417"></a><a name="en-us_topic_0237122595_p638670155417"></a>Total amount of data written to temporary files by queries in this database. All temporary files are counted, regardless of why the temporary file was created, and regardless of the <strong id="b5328115654016"><a name="b5328115654016"></a><a name="b5328115654016"></a>log_temp_files</strong> setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row1538618055418"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p23868010542"><a name="en-us_topic_0237122595_p23868010542"></a><a name="en-us_topic_0237122595_p23868010542"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p638610105415"><a name="en-us_topic_0237122595_p638610105415"></a><a name="en-us_topic_0237122595_p638610105415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p138612017542"><a name="en-us_topic_0237122595_p138612017542"></a><a name="en-us_topic_0237122595_p138612017542"></a>Number of deadlocks detected in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row53861500546"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p53861201549"><a name="en-us_topic_0237122595_p53861201549"></a><a name="en-us_topic_0237122595_p53861201549"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p183864075412"><a name="en-us_topic_0237122595_p183864075412"></a><a name="en-us_topic_0237122595_p183864075412"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p13878015412"><a name="en-us_topic_0237122595_p13878015412"></a><a name="en-us_topic_0237122595_p13878015412"></a>Time spent reading data file blocks by backends in this database (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row538790155417"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p10387160105410"><a name="en-us_topic_0237122595_p10387160105410"></a><a name="en-us_topic_0237122595_p10387160105410"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p738760125420"><a name="en-us_topic_0237122595_p738760125420"></a><a name="en-us_topic_0237122595_p738760125420"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p143874016547"><a name="en-us_topic_0237122595_p143874016547"></a><a name="en-us_topic_0237122595_p143874016547"></a>Time spent writing into data file blocks by backends in this database (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122595_row5387004547"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122595_p838719014549"><a name="en-us_topic_0237122595_p838719014549"></a><a name="en-us_topic_0237122595_p838719014549"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122595_p18387100155411"><a name="en-us_topic_0237122595_p18387100155411"></a><a name="en-us_topic_0237122595_p18387100155411"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122595_p11387190115411"><a name="en-us_topic_0237122595_p11387190115411"></a><a name="en-us_topic_0237122595_p11387190115411"></a>Time at which the current statistics were reset</p>
</td>
</tr>
</tbody>
</table>

