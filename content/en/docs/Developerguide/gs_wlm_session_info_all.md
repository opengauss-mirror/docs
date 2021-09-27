# GS\_WLM\_SESSION\_INFO\_ALL<a name="EN-US_TOPIC_0000001151962063"></a>

**GS\_WLM\_SESSION\_INFO**  displays load management information about a completed job executed on the database instance. Only the user with the  **sysadmin**  or  **monitor admin**  permission can query this view.

**Table  1**  GS\_WLM\_SESSION\_INFO\_ALL columns

<a name="en-us_topic_0112535431_table75981925115018"></a>
<table><thead align="left"><tr id="en-us_topic_0112535431_row14599225175020"><th class="cellrowborder" valign="top" width="21.782178217821784%" id="mcps1.2.4.1.1"><p id="en-us_topic_0112535431_p1359922545010"><a name="en-us_topic_0112535431_p1359922545010"></a><a name="en-us_topic_0112535431_p1359922545010"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.81188118811881%" id="mcps1.2.4.1.2"><p id="en-us_topic_0112535431_p3599182520502"><a name="en-us_topic_0112535431_p3599182520502"></a><a name="en-us_topic_0112535431_p3599182520502"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="59.4059405940594%" id="mcps1.2.4.1.3"><p id="en-us_topic_0112535431_p175991225195015"><a name="en-us_topic_0112535431_p175991225195015"></a><a name="en-us_topic_0112535431_p175991225195015"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0112535431_row11156641395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p76110420410"><a name="p76110420410"></a><a name="p76110420410"></a>userid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p8601042204116"><a name="p8601042204116"></a><a name="p8601042204116"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p185874214117"><a name="p185874214117"></a><a name="p185874214117"></a>OID of the user.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row3156134123918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p5571242174118"><a name="p5571242174118"></a><a name="p5571242174118"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1956174284117"><a name="p1956174284117"></a><a name="p1956174284117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p5553427416"><a name="p5553427416"></a><a name="p5553427416"></a>Username.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row41569413919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p35404294117"><a name="p35404294117"></a><a name="p35404294117"></a>sysadmin</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p165334224114"><a name="p165334224114"></a><a name="p165334224114"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p6521428413"><a name="p6521428413"></a><a name="p6521428413"></a>Whether the user is the administrator.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1915619413390"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p135020428418"><a name="p135020428418"></a><a name="p135020428418"></a>rpoid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p174934284118"><a name="p174934284118"></a><a name="p174934284118"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p174816422415"><a name="p174816422415"></a><a name="p174816422415"></a>OID of the associated resource pool.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row215654103910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1147184210415"><a name="p1147184210415"></a><a name="p1147184210415"></a>respool</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1145042104117"><a name="p1145042104117"></a><a name="p1145042104117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p164310426413"><a name="p164310426413"></a><a name="p164310426413"></a>Name of the associated resource pool.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row101561410393"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p9304220144111"><a name="p9304220144111"></a><a name="p9304220144111"></a>parentid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10303182024112"><a name="p10303182024112"></a><a name="p10303182024112"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p830252012414"><a name="p830252012414"></a><a name="p830252012414"></a>OID of the user group.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row915624113919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p74111226114412"><a name="p74111226114412"></a><a name="p74111226114412"></a>totalspace</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1558751624113"><a name="p1558751624113"></a><a name="p1558751624113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p6586161614110"><a name="p6586161614110"></a><a name="p6586161614110"></a>Available space limit of the user.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row91546443918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p12585916134117"><a name="p12585916134117"></a><a name="p12585916134117"></a>spacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p17584016114112"><a name="p17584016114112"></a><a name="p17584016114112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p45831916164110"><a name="p45831916164110"></a><a name="p45831916164110"></a>User table space limit.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row415404143917"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p15582716104119"><a name="p15582716104119"></a><a name="p15582716104119"></a>childcount</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p18581316154112"><a name="p18581316154112"></a><a name="p18581316154112"></a>interger</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p195801916154111"><a name="p195801916154111"></a><a name="p195801916154111"></a>Number of child users.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row515411433910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1357961619412"><a name="p1357961619412"></a><a name="p1357961619412"></a>childlist</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p0578151694115"><a name="p0578151694115"></a><a name="p0578151694115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p6577116104113"><a name="p6577116104113"></a><a name="p6577116104113"></a>Child user list.</p>
</td>
</tr>
<tr id="row26719842113"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p12151173155516"><a name="p12151173155516"></a><a name="p12151173155516"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1215110317558"><a name="p1215110317558"></a><a name="p1215110317558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p8151173125511"><a name="p8151173125511"></a><a name="p8151173125511"></a>Number of rows in the result set returned by the <strong id="b15808119358"><a name="b15808119358"></a><a name="b15808119358"></a>SELECT</strong> statement.</p>
</td>
</tr>
<tr id="row7477122616210"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1515113325519"><a name="p1515113325519"></a><a name="p1515113325519"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p715153105514"><a name="p715153105514"></a><a name="p715153105514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p61511320551"><a name="p61511320551"></a><a name="p61511320551"></a>Number of rows randomly scanned.</p>
</td>
</tr>
<tr id="row13729102702112"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p21511732557"><a name="p21511732557"></a><a name="p21511732557"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p161511133551"><a name="p161511133551"></a><a name="p161511133551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p16151336552"><a name="p16151336552"></a><a name="p16151336552"></a>Number of rows sequentially scanned.</p>
</td>
</tr>
<tr id="row1338672852119"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p61521338554"><a name="p61521338554"></a><a name="p61521338554"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p7152432558"><a name="p7152432558"></a><a name="p7152432558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p71521339553"><a name="p71521339553"></a><a name="p71521339553"></a>Number of rows inserted.</p>
</td>
</tr>
<tr id="row1193692816212"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p91521639553"><a name="p91521639553"></a><a name="p91521639553"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1615233165512"><a name="p1615233165512"></a><a name="p1615233165512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p815211345520"><a name="p815211345520"></a><a name="p815211345520"></a>Number of rows updated.</p>
</td>
</tr>
<tr id="row165681829142114"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p20152031552"><a name="p20152031552"></a><a name="p20152031552"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1152431552"><a name="p1152431552"></a><a name="p1152431552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1215220311554"><a name="p1215220311554"></a><a name="p1215220311554"></a>Number of rows deleted.</p>
</td>
</tr>
<tr id="row499123016218"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1615218355510"><a name="p1615218355510"></a><a name="p1615218355510"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p2015210319559"><a name="p2015210319559"></a><a name="p2015210319559"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p515213345510"><a name="p515213345510"></a><a name="p515213345510"></a>Number of buffer block access times.</p>
</td>
</tr>
<tr id="row269093019210"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p8152113135510"><a name="p8152113135510"></a><a name="p8152113135510"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p21521534556"><a name="p21521534556"></a><a name="p21521534556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p11152103195519"><a name="p11152103195519"></a><a name="p11152103195519"></a>Number of buffer block hits.</p>
</td>
</tr>
<tr id="row3278173122116"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1415317355520"><a name="p1415317355520"></a><a name="p1415317355520"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p9153103105515"><a name="p9153103105515"></a><a name="p9153103105515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p515317316559"><a name="p515317316559"></a><a name="p515317316559"></a>Valid DB time, which is accumulated if multiple threads are involved (unit: μs).</p>
</td>
</tr>
<tr id="row15964183152118"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1515316385515"><a name="p1515316385515"></a><a name="p1515316385515"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p51536395513"><a name="p51536395513"></a><a name="p51536395513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p12153237557"><a name="p12153237557"></a><a name="p12153237557"></a>CPU time (unit: μs).</p>
</td>
</tr>
<tr id="row081819337219"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p115393205519"><a name="p115393205519"></a><a name="p115393205519"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p915317365511"><a name="p915317365511"></a><a name="p915317365511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p191535318556"><a name="p191535318556"></a><a name="p191535318556"></a>Execution time in the executor (unit: μs).</p>
</td>
</tr>
<tr id="row591313344218"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1815318310553"><a name="p1815318310553"></a><a name="p1815318310553"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p11153143195510"><a name="p11153143195510"></a><a name="p11153143195510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p31537355517"><a name="p31537355517"></a><a name="p31537355517"></a>SQL parsing time (unit: μs).</p>
</td>
</tr>
<tr id="row1654511358216"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p16154153205517"><a name="p16154153205517"></a><a name="p16154153205517"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p131540312555"><a name="p131540312555"></a><a name="p131540312555"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p81548385513"><a name="p81548385513"></a><a name="p81548385513"></a>SQL plan generation time (unit: μs).</p>
</td>
</tr>
<tr id="row19180143618212"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p15154039555"><a name="p15154039555"></a><a name="p15154039555"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p515453165514"><a name="p515453165514"></a><a name="p515453165514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1154733558"><a name="p1154733558"></a><a name="p1154733558"></a>SQL rewriting time (unit: μs).</p>
</td>
</tr>
<tr id="row579363616215"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p515493165512"><a name="p515493165512"></a><a name="p515493165512"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p13154173195517"><a name="p13154173195517"></a><a name="p13154173195517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p10154153115511"><a name="p10154153115511"></a><a name="p10154153115511"></a>Execution time of PL/pgSQL (unit: μs).</p>
</td>
</tr>
<tr id="row11411183762111"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p9154239559"><a name="p9154239559"></a><a name="p9154239559"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p6154163165511"><a name="p6154163165511"></a><a name="p6154163165511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p415433125510"><a name="p415433125510"></a><a name="p415433125510"></a>Compilation time of PL/pgSQL (unit: μs).</p>
</td>
</tr>
<tr id="row1058693911217"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p2015410316555"><a name="p2015410316555"></a><a name="p2015410316555"></a>net_send_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p31546311555"><a name="p31546311555"></a><a name="p31546311555"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p215412315551"><a name="p215412315551"></a><a name="p215412315551"></a>Network time (unit: μs).</p>
</td>
</tr>
<tr id="row313812426217"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p7155113115519"><a name="p7155113115519"></a><a name="p7155113115519"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p161551037552"><a name="p161551037552"></a><a name="p161551037552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1115543145517"><a name="p1115543145517"></a><a name="p1115543145517"></a>I/O time (unit: μs).</p>
</td>
</tr>
<tr id="row8700124213215"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p107001642192110"><a name="p107001642192110"></a><a name="p107001642192110"></a>is_slow_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p87001042192112"><a name="p87001042192112"></a><a name="p87001042192112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p12700194214213"><a name="p12700194214213"></a><a name="p12700194214213"></a>Whether the record is a slow SQL record.</p>
</td>
</tr>
</tbody>
</table>

