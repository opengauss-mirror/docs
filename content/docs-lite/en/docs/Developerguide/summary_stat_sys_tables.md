# SUMMARY\_STAT\_SYS\_TABLES<a name="EN-US_TOPIC_0289900679"></a>

**SUMMARY\_STAT\_SYS\_TABLES**  displays statistics about all the system catalogs in the  **pg\_catalog**,  **information\_schema**, and  **pg\_toast**  schemas in openGauss.

**Table  1**  SUMMARY\_STAT\_SYS\_TABLES columns

<a name="en-us_topic_0283137505_en-us_topic_0237122583_table6136182119414"></a>
<table><thead align="left"><tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1320202119415"><th class="cellrowborder" valign="top" width="23.09%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137505_en-us_topic_0237122583_p16320132119410"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p16320132119410"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p16320132119410"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="30.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137505_en-us_topic_0237122583_p19320521134118"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19320521134118"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19320521134118"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="46.18%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137505_en-us_topic_0237122583_p15321192194119"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p15321192194119"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p15321192194119"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137505_en-us_topic_0237122583_row133211221114119"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p19321102117415"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19321102117415"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19321102117415"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p132114214416"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p132114214416"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p132114214416"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p133211221124117"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p133211221124117"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p133211221124117"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row16321102115410"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p73211321164117"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p73211321164117"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p73211321164117"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p8321121174119"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p8321121174119"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p8321121174119"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p2321112120411"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2321112120411"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2321112120411"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row5322202112410"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p332320214419"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p332320214419"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p332320214419"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p2323321124117"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2323321124117"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2323321124117"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p143233218411"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p143233218411"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p143233218411"></a>Number of sequential scans initiated on this table</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1832320219418"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p19323172116411"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19323172116411"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19323172116411"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p83230212415"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p83230212415"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p83230212415"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p15323132164117"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p15323132164117"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p15323132164117"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row132362114412"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p11323142174116"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p11323142174116"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p11323142174116"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p153231421154111"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p153231421154111"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p153231421154111"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p23231721154118"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p23231721154118"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p23231721154118"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row12323162144119"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p33241210415"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p33241210415"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p33241210415"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p123243217414"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p123243217414"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p123243217414"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p4324192117412"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p4324192117412"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p4324192117412"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1832417215411"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p6324021164114"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p6324021164114"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p6324021164114"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p7324221114114"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p7324221114114"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p7324221114114"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1232410219417"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1232410219417"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1232410219417"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row153241521194117"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1432422117419"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1432422117419"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1432422117419"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p932472184115"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p932472184115"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p932472184115"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p18324182119416"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p18324182119416"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p18324182119416"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row53241721144112"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p232517210415"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p232517210415"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p232517210415"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p103254212414"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p103254212414"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p103254212414"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p16325721194118"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p16325721194118"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p16325721194118"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1832516219410"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1132512217419"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132512217419"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132512217419"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1332562144112"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1332562144112"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1332562144112"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p2032511213414"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2032511213414"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2032511213414"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row13251121104112"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p832511212414"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p832511212414"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p832511212414"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p53251421144120"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p53251421144120"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p53251421144120"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p19325721174115"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19325721174115"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p19325721174115"></a>Estimated number of live rows</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1325321144118"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1326521144118"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1326521144118"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1326521144118"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p832612216411"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p832612216411"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p832612216411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p18326182112418"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p18326182112418"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p18326182112418"></a>Estimated number of dead rows</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row12326182104110"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p632612134115"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p632612134115"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p632612134115"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p133261321184111"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p133261321184111"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p133261321184111"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1232652114411"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1232652114411"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1232652114411"></a>Last time at which this table was manually vacuumed (not counting <strong id="b14316791911"><a name="b14316791911"></a><a name="b14316791911"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row18326621144117"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1132672115411"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132672115411"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132672115411"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p14326172117410"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p14326172117410"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p14326172117410"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p14326112154113"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p14326112154113"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p14326112154113"></a>Last time at which this table was vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row6326521114111"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p11327202134116"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p11327202134116"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p11327202134116"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p8327112117418"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p8327112117418"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p8327112117418"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p5327521144113"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p5327521144113"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p5327521144113"></a>Last time at which this table was manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row93271721184118"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p43275219419"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p43275219419"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p43275219419"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p2327112115416"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2327112115416"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2327112115416"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1132712116412"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132712116412"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132712116412"></a>Last time at which this table was analyzed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1132717212417"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p332782114113"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p332782114113"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p332782114113"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1032711214415"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1032711214415"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1032711214415"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p163274216418"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p163274216418"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p163274216418"></a>Number of times the table has been manually vacuumed (not counting <strong id="b957110181399"><a name="b957110181399"></a><a name="b957110181399"></a>VACUUM FULL</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row6327152118413"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1432812212416"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1432812212416"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1432812212416"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1132892113417"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132892113417"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1132892113417"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p113289214417"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p113289214417"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p113289214417"></a>Number of times the table has been vacuumed by the autovacuum daemon</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row123282021104117"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p9328182174116"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p9328182174116"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p9328182174116"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p173281421194114"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p173281421194114"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p173281421194114"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p13328921144112"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p13328921144112"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p13328921144112"></a>Number of times the table has been manually analyzed</p>
</td>
</tr>
<tr id="en-us_topic_0283137505_en-us_topic_0237122583_row1432892118419"><td class="cellrowborder" valign="top" width="23.09%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p1732815216414"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1732815216414"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p1732815216414"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="30.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p2032872113413"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2032872113413"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p2032872113413"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="46.18%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137505_en-us_topic_0237122583_p13328202115419"><a name="en-us_topic_0283137505_en-us_topic_0237122583_p13328202115419"></a><a name="en-us_topic_0283137505_en-us_topic_0237122583_p13328202115419"></a>Number of times the table has been analyzed by the autovacuum daemon</p>
</td>
</tr>
</tbody>
</table>

