# GLOBAL\_STAT\_ALL\_TABLES<a name="EN-US_TOPIC_0245374694"></a>

**GLOBAL\_STAT\_ALL\_TABLES**  displays statistics about one row for each table \(including TOAST tables\) in databases on each node. 

**Table  1**  GLOBAL\_STAT\_ALL\_TABLES columns

<a name="en-us_topic_0237122590_table148006217489"></a>
<table><thead align="left"><tr id="en-us_topic_0237122590_row162491138486"><th class="cellrowborder" valign="top" width="20.150000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122590_p82496315480"><a name="en-us_topic_0237122590_p82496315480"></a><a name="en-us_topic_0237122590_p82496315480"></a><strong id="b9396145171318"><a name="b9396145171318"></a><a name="b9396145171318"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.12%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122590_p1325017304818"><a name="en-us_topic_0237122590_p1325017304818"></a><a name="en-us_topic_0237122590_p1325017304818"></a><strong id="b16453446171314"><a name="b16453446171314"></a><a name="b16453446171314"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.73%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122590_p1125018364818"><a name="en-us_topic_0237122590_p1125018364818"></a><a name="en-us_topic_0237122590_p1125018364818"></a><strong id="b15142477136"><a name="b15142477136"></a><a name="b15142477136"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122590_row1525117314810"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p1025103134812"><a name="en-us_topic_0237122590_p1025103134812"></a><a name="en-us_topic_0237122590_p1025103134812"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p1725133164815"><a name="en-us_topic_0237122590_p1725133164815"></a><a name="en-us_topic_0237122590_p1725133164815"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p1925113319487"><a name="en-us_topic_0237122590_p1925113319487"></a><a name="en-us_topic_0237122590_p1925113319487"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row12251123124819"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p202529310488"><a name="en-us_topic_0237122590_p202529310488"></a><a name="en-us_topic_0237122590_p202529310488"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p825215314813"><a name="en-us_topic_0237122590_p825215314813"></a><a name="en-us_topic_0237122590_p825215314813"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p92521734487"><a name="en-us_topic_0237122590_p92521734487"></a><a name="en-us_topic_0237122590_p92521734487"></a>OID of the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row1325223134813"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p16252337489"><a name="en-us_topic_0237122590_p16252337489"></a><a name="en-us_topic_0237122590_p16252337489"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p92532312486"><a name="en-us_topic_0237122590_p92532312486"></a><a name="en-us_topic_0237122590_p92532312486"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p1125312304810"><a name="en-us_topic_0237122590_p1125312304810"></a><a name="en-us_topic_0237122590_p1125312304810"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row225310310480"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p1825310311487"><a name="en-us_topic_0237122590_p1825310311487"></a><a name="en-us_topic_0237122590_p1825310311487"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p22536310489"><a name="en-us_topic_0237122590_p22536310489"></a><a name="en-us_topic_0237122590_p22536310489"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p225417315483"><a name="en-us_topic_0237122590_p225417315483"></a><a name="en-us_topic_0237122590_p225417315483"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row8254337482"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p42541374811"><a name="en-us_topic_0237122590_p42541374811"></a><a name="en-us_topic_0237122590_p42541374811"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p112547311484"><a name="en-us_topic_0237122590_p112547311484"></a><a name="en-us_topic_0237122590_p112547311484"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p192558384817"><a name="en-us_topic_0237122590_p192558384817"></a><a name="en-us_topic_0237122590_p192558384817"></a>Number of sequential scans initiated on this table</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row1925523104819"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p1525516317484"><a name="en-us_topic_0237122590_p1525516317484"></a><a name="en-us_topic_0237122590_p1525516317484"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p162551737485"><a name="en-us_topic_0237122590_p162551737485"></a><a name="en-us_topic_0237122590_p162551737485"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p182550364817"><a name="en-us_topic_0237122590_p182550364817"></a><a name="en-us_topic_0237122590_p182550364817"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row182558319488"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p162561132482"><a name="en-us_topic_0237122590_p162561132482"></a><a name="en-us_topic_0237122590_p162561132482"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p9256731487"><a name="en-us_topic_0237122590_p9256731487"></a><a name="en-us_topic_0237122590_p9256731487"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p625610317486"><a name="en-us_topic_0237122590_p625610317486"></a><a name="en-us_topic_0237122590_p625610317486"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row82565315486"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p625612324811"><a name="en-us_topic_0237122590_p625612324811"></a><a name="en-us_topic_0237122590_p625612324811"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p52572344812"><a name="en-us_topic_0237122590_p52572344812"></a><a name="en-us_topic_0237122590_p52572344812"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p182571231483"><a name="en-us_topic_0237122590_p182571231483"></a><a name="en-us_topic_0237122590_p182571231483"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row112571834486"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p7257734482"><a name="en-us_topic_0237122590_p7257734482"></a><a name="en-us_topic_0237122590_p7257734482"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p132572311489"><a name="en-us_topic_0237122590_p132572311489"></a><a name="en-us_topic_0237122590_p132572311489"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p22580314480"><a name="en-us_topic_0237122590_p22580314480"></a><a name="en-us_topic_0237122590_p22580314480"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row1425814394812"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p142591337482"><a name="en-us_topic_0237122590_p142591337482"></a><a name="en-us_topic_0237122590_p142591337482"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p1325943154811"><a name="en-us_topic_0237122590_p1325943154811"></a><a name="en-us_topic_0237122590_p1325943154811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p10259133154811"><a name="en-us_topic_0237122590_p10259133154811"></a><a name="en-us_topic_0237122590_p10259133154811"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row52594374810"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p425918310486"><a name="en-us_topic_0237122590_p425918310486"></a><a name="en-us_topic_0237122590_p425918310486"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p152591354811"><a name="en-us_topic_0237122590_p152591354811"></a><a name="en-us_topic_0237122590_p152591354811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p426014374818"><a name="en-us_topic_0237122590_p426014374818"></a><a name="en-us_topic_0237122590_p426014374818"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row526012316483"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p92601332487"><a name="en-us_topic_0237122590_p92601332487"></a><a name="en-us_topic_0237122590_p92601332487"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p172609313484"><a name="en-us_topic_0237122590_p172609313484"></a><a name="en-us_topic_0237122590_p172609313484"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p17260731481"><a name="en-us_topic_0237122590_p17260731481"></a><a name="en-us_topic_0237122590_p17260731481"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row122601838486"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p1826093124816"><a name="en-us_topic_0237122590_p1826093124816"></a><a name="en-us_topic_0237122590_p1826093124816"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p42618314819"><a name="en-us_topic_0237122590_p42618314819"></a><a name="en-us_topic_0237122590_p42618314819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p326133144813"><a name="en-us_topic_0237122590_p326133144813"></a><a name="en-us_topic_0237122590_p326133144813"></a>Estimated number of live rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row22617315481"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p22612319489"><a name="en-us_topic_0237122590_p22612319489"></a><a name="en-us_topic_0237122590_p22612319489"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p426173144813"><a name="en-us_topic_0237122590_p426173144813"></a><a name="en-us_topic_0237122590_p426173144813"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p12261143144810"><a name="en-us_topic_0237122590_p12261143144810"></a><a name="en-us_topic_0237122590_p12261143144810"></a>Estimated number of dead rows</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row16262833486"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p1026217394820"><a name="en-us_topic_0237122590_p1026217394820"></a><a name="en-us_topic_0237122590_p1026217394820"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p726215364820"><a name="en-us_topic_0237122590_p726215364820"></a><a name="en-us_topic_0237122590_p726215364820"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p172629384818"><a name="en-us_topic_0237122590_p172629384818"></a><a name="en-us_topic_0237122590_p172629384818"></a>Last time at which this table was manually vacuumed (not counting <strong id="b66331332121414"><a name="b66331332121414"></a><a name="b66331332121414"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row42623314489"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p026220344815"><a name="en-us_topic_0237122590_p026220344815"></a><a name="en-us_topic_0237122590_p026220344815"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p826213334811"><a name="en-us_topic_0237122590_p826213334811"></a><a name="en-us_topic_0237122590_p826213334811"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p132637394816"><a name="en-us_topic_0237122590_p132637394816"></a><a name="en-us_topic_0237122590_p132637394816"></a>Last time at which this table was vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row12638374815"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p6263143164817"><a name="en-us_topic_0237122590_p6263143164817"></a><a name="en-us_topic_0237122590_p6263143164817"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p426393174816"><a name="en-us_topic_0237122590_p426393174816"></a><a name="en-us_topic_0237122590_p426393174816"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p62633310489"><a name="en-us_topic_0237122590_p62633310489"></a><a name="en-us_topic_0237122590_p62633310489"></a>Last time at which this table was manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row1926313312481"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p826463114816"><a name="en-us_topic_0237122590_p826463114816"></a><a name="en-us_topic_0237122590_p826463114816"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p202641037484"><a name="en-us_topic_0237122590_p202641037484"></a><a name="en-us_topic_0237122590_p202641037484"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p92641132484"><a name="en-us_topic_0237122590_p92641132484"></a><a name="en-us_topic_0237122590_p92641132484"></a>Last time at which this table was analyzed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row152643354820"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p82641839480"><a name="en-us_topic_0237122590_p82641839480"></a><a name="en-us_topic_0237122590_p82641839480"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p142651937485"><a name="en-us_topic_0237122590_p142651937485"></a><a name="en-us_topic_0237122590_p142651937485"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p15265123174817"><a name="en-us_topic_0237122590_p15265123174817"></a><a name="en-us_topic_0237122590_p15265123174817"></a>Number of times the table has been manually vacuumed (not counting <strong id="b118641371142"><a name="b118641371142"></a><a name="b118641371142"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row126519312485"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p2026517314484"><a name="en-us_topic_0237122590_p2026517314484"></a><a name="en-us_topic_0237122590_p2026517314484"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p32651138480"><a name="en-us_topic_0237122590_p32651138480"></a><a name="en-us_topic_0237122590_p32651138480"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p12664314819"><a name="en-us_topic_0237122590_p12664314819"></a><a name="en-us_topic_0237122590_p12664314819"></a>Number of times the table has been vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row92665318488"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p15266237481"><a name="en-us_topic_0237122590_p15266237481"></a><a name="en-us_topic_0237122590_p15266237481"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p92667318484"><a name="en-us_topic_0237122590_p92667318484"></a><a name="en-us_topic_0237122590_p92667318484"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p226613316481"><a name="en-us_topic_0237122590_p226613316481"></a><a name="en-us_topic_0237122590_p226613316481"></a>Number of times the table has been manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0237122590_row126610394814"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122590_p326610394819"><a name="en-us_topic_0237122590_p326610394819"></a><a name="en-us_topic_0237122590_p326610394819"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122590_p15267103144810"><a name="en-us_topic_0237122590_p15267103144810"></a><a name="en-us_topic_0237122590_p15267103144810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122590_p10267638483"><a name="en-us_topic_0237122590_p10267638483"></a><a name="en-us_topic_0237122590_p10267638483"></a>Number of times the table has been analyzed by the autovacuum daemon</p>
</td>
</tr>
</tbody>
</table>

