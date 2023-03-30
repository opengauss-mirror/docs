# SUMMARY\_STAT\_ALL\_TABLES<a name="EN-US_TOPIC_0245374693"></a>

**SUMMARY\_STAT\_ALL\_TABLES**  displays statistics about one row for each table \(including TOAST tables\) in databases in openGauss. 

**Table  1**  SUMMARY\_STAT\_ALL\_TABLES columns

<a name="en-us_topic_0237122589_table94001310104614"></a>
<table><thead align="left"><tr id="en-us_topic_0237122589_row1761211108466"><th class="cellrowborder" valign="top" width="23.05%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122589_p26121310184610"><a name="en-us_topic_0237122589_p26121310184610"></a><a name="en-us_topic_0237122589_p26121310184610"></a><strong id="b191701774135"><a name="b191701774135"></a><a name="b191701774135"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.04%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122589_p13612151019460"><a name="en-us_topic_0237122589_p13612151019460"></a><a name="en-us_topic_0237122589_p13612151019460"></a><strong id="b2867137111319"><a name="b2867137111319"></a><a name="b2867137111319"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="49.91%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122589_p26120107465"><a name="en-us_topic_0237122589_p26120107465"></a><a name="en-us_topic_0237122589_p26120107465"></a><strong id="b887811816133"><a name="b887811816133"></a><a name="b887811816133"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122589_row961311084618"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p13613111018467"><a name="en-us_topic_0237122589_p13613111018467"></a><a name="en-us_topic_0237122589_p13613111018467"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p1761312109467"><a name="en-us_topic_0237122589_p1761312109467"></a><a name="en-us_topic_0237122589_p1761312109467"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p3613171044616"><a name="en-us_topic_0237122589_p3613171044616"></a><a name="en-us_topic_0237122589_p3613171044616"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row18613710114613"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p16131510144615"><a name="en-us_topic_0237122589_p16131510144615"></a><a name="en-us_topic_0237122589_p16131510144615"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p196131310144610"><a name="en-us_topic_0237122589_p196131310144610"></a><a name="en-us_topic_0237122589_p196131310144610"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p8613191064610"><a name="en-us_topic_0237122589_p8613191064610"></a><a name="en-us_topic_0237122589_p8613191064610"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row1361391015466"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p461321014618"><a name="en-us_topic_0237122589_p461321014618"></a><a name="en-us_topic_0237122589_p461321014618"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p16141510194612"><a name="en-us_topic_0237122589_p16141510194612"></a><a name="en-us_topic_0237122589_p16141510194612"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p1661419105467"><a name="en-us_topic_0237122589_p1661419105467"></a><a name="en-us_topic_0237122589_p1661419105467"></a>Number of sequential scans initiated on this table</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row8614110124610"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p861771013465"><a name="en-us_topic_0237122589_p861771013465"></a><a name="en-us_topic_0237122589_p861771013465"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p14617171014613"><a name="en-us_topic_0237122589_p14617171014613"></a><a name="en-us_topic_0237122589_p14617171014613"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p13617131064616"><a name="en-us_topic_0237122589_p13617131064616"></a><a name="en-us_topic_0237122589_p13617131064616"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row961719108463"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p1961713108463"><a name="en-us_topic_0237122589_p1961713108463"></a><a name="en-us_topic_0237122589_p1961713108463"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p161701010466"><a name="en-us_topic_0237122589_p161701010466"></a><a name="en-us_topic_0237122589_p161701010466"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p161817102469"><a name="en-us_topic_0237122589_p161817102469"></a><a name="en-us_topic_0237122589_p161817102469"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row861851013466"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p4618111084615"><a name="en-us_topic_0237122589_p4618111084615"></a><a name="en-us_topic_0237122589_p4618111084615"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p19618201094611"><a name="en-us_topic_0237122589_p19618201094611"></a><a name="en-us_topic_0237122589_p19618201094611"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p4618161094618"><a name="en-us_topic_0237122589_p4618161094618"></a><a name="en-us_topic_0237122589_p4618161094618"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row261881054617"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p1361810107461"><a name="en-us_topic_0237122589_p1361810107461"></a><a name="en-us_topic_0237122589_p1361810107461"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p1261971074618"><a name="en-us_topic_0237122589_p1261971074618"></a><a name="en-us_topic_0237122589_p1261971074618"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p13619610174612"><a name="en-us_topic_0237122589_p13619610174612"></a><a name="en-us_topic_0237122589_p13619610174612"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row17619181016463"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p1361911104461"><a name="en-us_topic_0237122589_p1361911104461"></a><a name="en-us_topic_0237122589_p1361911104461"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p861911018469"><a name="en-us_topic_0237122589_p861911018469"></a><a name="en-us_topic_0237122589_p861911018469"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p5619161004610"><a name="en-us_topic_0237122589_p5619161004610"></a><a name="en-us_topic_0237122589_p5619161004610"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row7619131015468"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p1961911034614"><a name="en-us_topic_0237122589_p1961911034614"></a><a name="en-us_topic_0237122589_p1961911034614"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p11619141017461"><a name="en-us_topic_0237122589_p11619141017461"></a><a name="en-us_topic_0237122589_p11619141017461"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p136191310174618"><a name="en-us_topic_0237122589_p136191310174618"></a><a name="en-us_topic_0237122589_p136191310174618"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row5620610144615"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p166201110144619"><a name="en-us_topic_0237122589_p166201110144619"></a><a name="en-us_topic_0237122589_p166201110144619"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p1962011010466"><a name="en-us_topic_0237122589_p1962011010466"></a><a name="en-us_topic_0237122589_p1962011010466"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p4620210194611"><a name="en-us_topic_0237122589_p4620210194611"></a><a name="en-us_topic_0237122589_p4620210194611"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row4620410174616"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p126201010174618"><a name="en-us_topic_0237122589_p126201010174618"></a><a name="en-us_topic_0237122589_p126201010174618"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p262041017462"><a name="en-us_topic_0237122589_p262041017462"></a><a name="en-us_topic_0237122589_p262041017462"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p17620111004614"><a name="en-us_topic_0237122589_p17620111004614"></a><a name="en-us_topic_0237122589_p17620111004614"></a>Estimated number of live rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row6620171020468"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p17620131016466"><a name="en-us_topic_0237122589_p17620131016466"></a><a name="en-us_topic_0237122589_p17620131016466"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p20621710144618"><a name="en-us_topic_0237122589_p20621710144618"></a><a name="en-us_topic_0237122589_p20621710144618"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p162121004618"><a name="en-us_topic_0237122589_p162121004618"></a><a name="en-us_topic_0237122589_p162121004618"></a>Estimated number of dead rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row962181015462"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p1062161024620"><a name="en-us_topic_0237122589_p1062161024620"></a><a name="en-us_topic_0237122589_p1062161024620"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p4621010184618"><a name="en-us_topic_0237122589_p4621010184618"></a><a name="en-us_topic_0237122589_p4621010184618"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p1462151012468"><a name="en-us_topic_0237122589_p1462151012468"></a><a name="en-us_topic_0237122589_p1462151012468"></a>Last time at which this table was manually vacuumed (not counting <strong id="b12241122561315"><a name="b12241122561315"></a><a name="b12241122561315"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row17621110134610"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p14621210134612"><a name="en-us_topic_0237122589_p14621210134612"></a><a name="en-us_topic_0237122589_p14621210134612"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p862171016461"><a name="en-us_topic_0237122589_p862171016461"></a><a name="en-us_topic_0237122589_p862171016461"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p3622710154617"><a name="en-us_topic_0237122589_p3622710154617"></a><a name="en-us_topic_0237122589_p3622710154617"></a>Last time at which this table was vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row1562261074616"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p2622101016467"><a name="en-us_topic_0237122589_p2622101016467"></a><a name="en-us_topic_0237122589_p2622101016467"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p14622110134611"><a name="en-us_topic_0237122589_p14622110134611"></a><a name="en-us_topic_0237122589_p14622110134611"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p136226104468"><a name="en-us_topic_0237122589_p136226104468"></a><a name="en-us_topic_0237122589_p136226104468"></a>Last time at which this table was manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row1762281064619"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p196221102469"><a name="en-us_topic_0237122589_p196221102469"></a><a name="en-us_topic_0237122589_p196221102469"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p462261012464"><a name="en-us_topic_0237122589_p462261012464"></a><a name="en-us_topic_0237122589_p462261012464"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p11622210154618"><a name="en-us_topic_0237122589_p11622210154618"></a><a name="en-us_topic_0237122589_p11622210154618"></a>Last time at which this table was analyzed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row18623151019461"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p962320108468"><a name="en-us_topic_0237122589_p962320108468"></a><a name="en-us_topic_0237122589_p962320108468"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p8623191015460"><a name="en-us_topic_0237122589_p8623191015460"></a><a name="en-us_topic_0237122589_p8623191015460"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p962391024615"><a name="en-us_topic_0237122589_p962391024615"></a><a name="en-us_topic_0237122589_p962391024615"></a>Number of times the table has been manually vacuumed (not counting <strong id="b0640133111133"><a name="b0640133111133"></a><a name="b0640133111133"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row15623010184615"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p76235101461"><a name="en-us_topic_0237122589_p76235101461"></a><a name="en-us_topic_0237122589_p76235101461"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p462331054618"><a name="en-us_topic_0237122589_p462331054618"></a><a name="en-us_topic_0237122589_p462331054618"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p196231410154616"><a name="en-us_topic_0237122589_p196231410154616"></a><a name="en-us_topic_0237122589_p196231410154616"></a>Number of times the table has been vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row1162391014462"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p156241410134619"><a name="en-us_topic_0237122589_p156241410134619"></a><a name="en-us_topic_0237122589_p156241410134619"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p9624910104617"><a name="en-us_topic_0237122589_p9624910104617"></a><a name="en-us_topic_0237122589_p9624910104617"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p06241110104615"><a name="en-us_topic_0237122589_p06241110104615"></a><a name="en-us_topic_0237122589_p06241110104615"></a>Number of times the table has been manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122589_row9624310174618"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122589_p3624161034613"><a name="en-us_topic_0237122589_p3624161034613"></a><a name="en-us_topic_0237122589_p3624161034613"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122589_p1262481016466"><a name="en-us_topic_0237122589_p1262481016466"></a><a name="en-us_topic_0237122589_p1262481016466"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122589_p1624171015464"><a name="en-us_topic_0237122589_p1624171015464"></a><a name="en-us_topic_0237122589_p1624171015464"></a>Number of times the table has been analyzed by the autovacuum daemon</p>
</td>
</tr>
</tbody>
</table>

