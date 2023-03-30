# GLOBAL\_STAT\_DATABASE<a name="EN-US_TOPIC_0245374700"></a>

**GLOBAL\_STAT\_DATABASE**  contains every row of each database on each node in openGauss, showing database-wide statistics. 

**Table  1**  GLOBAL\_STAT\_DATABASE columns

<a name="en-us_topic_0237122596_table46552469546"></a>
<table><thead align="left"><tr id="en-us_topic_0237122596_row988418461545"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122596_p9884124615548"><a name="en-us_topic_0237122596_p9884124615548"></a><a name="en-us_topic_0237122596_p9884124615548"></a><strong id="b54141148448"><a name="b54141148448"></a><a name="b54141148448"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="28.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122596_p1888464625411"><a name="en-us_topic_0237122596_p1888464625411"></a><a name="en-us_topic_0237122596_p1888464625411"></a><strong id="b164499664418"><a name="b164499664418"></a><a name="b164499664418"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="54%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122596_p88849464549"><a name="en-us_topic_0237122596_p88849464549"></a><a name="en-us_topic_0237122596_p88849464549"></a><strong id="b18501479446"><a name="b18501479446"></a><a name="b18501479446"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122596_row188841546175420"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p7885144614541"><a name="en-us_topic_0237122596_p7885144614541"></a><a name="en-us_topic_0237122596_p7885144614541"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p688520468546"><a name="en-us_topic_0237122596_p688520468546"></a><a name="en-us_topic_0237122596_p688520468546"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p198861465548"><a name="en-us_topic_0237122596_p198861465548"></a><a name="en-us_topic_0237122596_p198861465548"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row148866462545"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p588644675416"><a name="en-us_topic_0237122596_p588644675416"></a><a name="en-us_topic_0237122596_p588644675416"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p9886114620544"><a name="en-us_topic_0237122596_p9886114620544"></a><a name="en-us_topic_0237122596_p9886114620544"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p11886446195413"><a name="en-us_topic_0237122596_p11886446195413"></a><a name="en-us_topic_0237122596_p11886446195413"></a>OID of the database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row78861446145419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p1688619463546"><a name="en-us_topic_0237122596_p1688619463546"></a><a name="en-us_topic_0237122596_p1688619463546"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p148861146125413"><a name="en-us_topic_0237122596_p148861146125413"></a><a name="en-us_topic_0237122596_p148861146125413"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p10886846165411"><a name="en-us_topic_0237122596_p10886846165411"></a><a name="en-us_topic_0237122596_p10886846165411"></a>Name of the database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row18886144665420"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p13886154675418"><a name="en-us_topic_0237122596_p13886154675418"></a><a name="en-us_topic_0237122596_p13886154675418"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p9887124613546"><a name="en-us_topic_0237122596_p9887124613546"></a><a name="en-us_topic_0237122596_p9887124613546"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p1988774616547"><a name="en-us_topic_0237122596_p1988774616547"></a><a name="en-us_topic_0237122596_p1988774616547"></a>Number of backends currently connected to this database. This is the only column in this view that returns a value reflecting the current state; all other columns return the accumulated values since the last reset.</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row1887946105416"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p4887114618546"><a name="en-us_topic_0237122596_p4887114618546"></a><a name="en-us_topic_0237122596_p4887114618546"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p1887144655418"><a name="en-us_topic_0237122596_p1887144655418"></a><a name="en-us_topic_0237122596_p1887144655418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p1188794619544"><a name="en-us_topic_0237122596_p1188794619544"></a><a name="en-us_topic_0237122596_p1188794619544"></a>Number of transactions in this database that have been committed</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row5887154619542"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p14888174611543"><a name="en-us_topic_0237122596_p14888174611543"></a><a name="en-us_topic_0237122596_p14888174611543"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p488864616541"><a name="en-us_topic_0237122596_p488864616541"></a><a name="en-us_topic_0237122596_p488864616541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p11888164616549"><a name="en-us_topic_0237122596_p11888164616549"></a><a name="en-us_topic_0237122596_p11888164616549"></a>Number of transactions in this database that have been rolled back</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row17888144613540"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p38881461543"><a name="en-us_topic_0237122596_p38881461543"></a><a name="en-us_topic_0237122596_p38881461543"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p1188813460541"><a name="en-us_topic_0237122596_p1188813460541"></a><a name="en-us_topic_0237122596_p1188813460541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p9889104625418"><a name="en-us_topic_0237122596_p9889104625418"></a><a name="en-us_topic_0237122596_p9889104625418"></a>Number of disk blocks read in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row688904615414"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p4889174675413"><a name="en-us_topic_0237122596_p4889174675413"></a><a name="en-us_topic_0237122596_p4889174675413"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p488918464548"><a name="en-us_topic_0237122596_p488918464548"></a><a name="en-us_topic_0237122596_p488918464548"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p1588944613547"><a name="en-us_topic_0237122596_p1588944613547"></a><a name="en-us_topic_0237122596_p1588944613547"></a>Number of times disk blocks were found in the buffer cache (unnecessary as the number includes only hits in the database kernel buffer cache)</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row20889194615419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p9889134611548"><a name="en-us_topic_0237122596_p9889134611548"></a><a name="en-us_topic_0237122596_p9889134611548"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p7890164619542"><a name="en-us_topic_0237122596_p7890164619542"></a><a name="en-us_topic_0237122596_p7890164619542"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p178901046155417"><a name="en-us_topic_0237122596_p178901046155417"></a><a name="en-us_topic_0237122596_p178901046155417"></a>Number of rows returned by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row15890164620545"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p7890164615417"><a name="en-us_topic_0237122596_p7890164615417"></a><a name="en-us_topic_0237122596_p7890164615417"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p11891184645415"><a name="en-us_topic_0237122596_p11891184645415"></a><a name="en-us_topic_0237122596_p11891184645415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p1891104615414"><a name="en-us_topic_0237122596_p1891104615414"></a><a name="en-us_topic_0237122596_p1891104615414"></a>Number of rows fetched by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row78911946195416"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p18891184618545"><a name="en-us_topic_0237122596_p18891184618545"></a><a name="en-us_topic_0237122596_p18891184618545"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p789104616544"><a name="en-us_topic_0237122596_p789104616544"></a><a name="en-us_topic_0237122596_p789104616544"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p6891134625414"><a name="en-us_topic_0237122596_p6891134625414"></a><a name="en-us_topic_0237122596_p6891134625414"></a>Number of rows inserted by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row1089194645417"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p5892946115412"><a name="en-us_topic_0237122596_p5892946115412"></a><a name="en-us_topic_0237122596_p5892946115412"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p98925465542"><a name="en-us_topic_0237122596_p98925465542"></a><a name="en-us_topic_0237122596_p98925465542"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p689217463545"><a name="en-us_topic_0237122596_p689217463545"></a><a name="en-us_topic_0237122596_p689217463545"></a>Number of rows updated by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row1889216467548"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p7892114618540"><a name="en-us_topic_0237122596_p7892114618540"></a><a name="en-us_topic_0237122596_p7892114618540"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p9892046165418"><a name="en-us_topic_0237122596_p9892046165418"></a><a name="en-us_topic_0237122596_p9892046165418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p108931446115414"><a name="en-us_topic_0237122596_p108931446115414"></a><a name="en-us_topic_0237122596_p108931446115414"></a>Number of rows deleted by queries in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row9893154611543"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p10893174675411"><a name="en-us_topic_0237122596_p10893174675411"></a><a name="en-us_topic_0237122596_p10893174675411"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p13893134618547"><a name="en-us_topic_0237122596_p13893134618547"></a><a name="en-us_topic_0237122596_p13893134618547"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p6893646205413"><a name="en-us_topic_0237122596_p6893646205413"></a><a name="en-us_topic_0237122596_p6893646205413"></a>Number of queries canceled due to database recovery conflicts (conflicts occurring only on the standby server). For details, see <a href="stat_database_conflicts.md">STAT_DATABASE_CONFLICTS</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row2893446125410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p15894154625415"><a name="en-us_topic_0237122596_p15894154625415"></a><a name="en-us_topic_0237122596_p15894154625415"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p1894204617541"><a name="en-us_topic_0237122596_p1894204617541"></a><a name="en-us_topic_0237122596_p1894204617541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p5894104645420"><a name="en-us_topic_0237122596_p5894104645420"></a><a name="en-us_topic_0237122596_p5894104645420"></a>Number of temporary files created by queries in this database. All temporary files are counted, regardless of why the temporary file was created (for example, sorting or hashing), and regardless of the <strong id="b201861247124410"><a name="b201861247124410"></a><a name="b201861247124410"></a>log_temp_files</strong> setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row13894446105413"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p389424665419"><a name="en-us_topic_0237122596_p389424665419"></a><a name="en-us_topic_0237122596_p389424665419"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p6894144612547"><a name="en-us_topic_0237122596_p6894144612547"></a><a name="en-us_topic_0237122596_p6894144612547"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p889524612545"><a name="en-us_topic_0237122596_p889524612545"></a><a name="en-us_topic_0237122596_p889524612545"></a>Total amount of data written to temporary files by queries in this database. All temporary files are counted, regardless of why the temporary file was created, and regardless of the <strong id="b242714541443"><a name="b242714541443"></a><a name="b242714541443"></a>log_temp_files</strong> setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row58959462541"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p4895154675418"><a name="en-us_topic_0237122596_p4895154675418"></a><a name="en-us_topic_0237122596_p4895154675418"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p1589504635414"><a name="en-us_topic_0237122596_p1589504635414"></a><a name="en-us_topic_0237122596_p1589504635414"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p6895124619546"><a name="en-us_topic_0237122596_p6895124619546"></a><a name="en-us_topic_0237122596_p6895124619546"></a>Number of deadlocks detected in this database</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row98951546205412"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p1089574615545"><a name="en-us_topic_0237122596_p1089574615545"></a><a name="en-us_topic_0237122596_p1089574615545"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p178951046105411"><a name="en-us_topic_0237122596_p178951046105411"></a><a name="en-us_topic_0237122596_p178951046105411"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p16895746125416"><a name="en-us_topic_0237122596_p16895746125416"></a><a name="en-us_topic_0237122596_p16895746125416"></a>Time spent reading data file blocks by backends in this database (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row289644605410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p489619462549"><a name="en-us_topic_0237122596_p489619462549"></a><a name="en-us_topic_0237122596_p489619462549"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p14896646125416"><a name="en-us_topic_0237122596_p14896646125416"></a><a name="en-us_topic_0237122596_p14896646125416"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p089614468545"><a name="en-us_topic_0237122596_p089614468545"></a><a name="en-us_topic_0237122596_p089614468545"></a>Time spent writing into data file blocks by backends in this database (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122596_row1896164685419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122596_p16896144618546"><a name="en-us_topic_0237122596_p16896144618546"></a><a name="en-us_topic_0237122596_p16896144618546"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122596_p168961646195410"><a name="en-us_topic_0237122596_p168961646195410"></a><a name="en-us_topic_0237122596_p168961646195410"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122596_p1389618467541"><a name="en-us_topic_0237122596_p1389618467541"></a><a name="en-us_topic_0237122596_p1389618467541"></a>Time at which the current statistics were reset</p>
</td>
</tr>
</tbody>
</table>

