# STATEMENT\_COMPLEX\_RUNTIME<a name="EN-US_TOPIC_0289900053"></a>

**STATEMENT\_COMPLEX\_RUNTIME**  displays load management information about jobs being executed by the current user on the primary database node.

**Table  1**  STATEMENT\_COMPLEX\_RUNTIME columns

<a name="en-us_topic_0283136859_en-us_topic_0237122664_table9446192117461"></a>
<table><thead align="left"><tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1544642110461"><th class="cellrowborder" valign="top" width="29.659999999999997%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1359922545010"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1359922545010"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1359922545010"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="19.040000000000003%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136859_en-us_topic_0237122664_p3599182520502"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p3599182520502"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p3599182520502"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="51.300000000000004%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136859_en-us_topic_0237122664_p175991225195015"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p175991225195015"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p175991225195015"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136859_en-us_topic_0237122664_row17446162114468"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p7825161515615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p7825161515615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p7825161515615"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p158251415661"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p158251415661"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p158251415661"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1282581516620"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1282581516620"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1282581516620"></a>OID of the database that the backend is connected to</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row75751994710"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p17826315164"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p17826315164"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p17826315164"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p17826201510620"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p17826201510620"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p17826201510620"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1182612150618"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1182612150618"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1182612150618"></a>Name of the database that the backend is connected to</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row9571319154713"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p11826415869"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p11826415869"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p11826415869"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p10826015362"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10826015362"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10826015362"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p182613154612"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p182613154612"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p182613154612"></a>Schema name</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row15771915477"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p68261715961"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p68261715961"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p68261715961"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p108264151361"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p108264151361"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p108264151361"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_p1718885316271"><a name="en-us_topic_0283136859_p1718885316271"></a><a name="en-us_topic_0283136859_p1718885316271"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1456161919474"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p138263151561"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p138263151561"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p138263151561"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p19827121514616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p19827121514616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p19827121514616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1482741518615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1482741518615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1482741518615"></a>Username used for connecting to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row18568199473"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1182716154617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1182716154617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1182716154617"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p168272153616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p168272153616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p168272153616"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1582717155620"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1582717155620"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1582717155620"></a>Name of the application connected to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row18561119144717"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p68277151565"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p68277151565"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p68277151565"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p88271415966"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p88271415966"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p88271415966"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p10827121511613"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10827121511613"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10827121511613"></a>IP address of the client connected to the backend. If this column is null, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as autovacuum.</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row17561419164719"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p28277151166"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p28277151166"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p28277151166"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p18271615169"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18271615169"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18271615169"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p19827101512614"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p19827101512614"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p19827101512614"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b9679525131813"><a name="b9679525131813"></a><a name="b9679525131813"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b57212265188"><a name="b57212265188"></a><a name="b57212265188"></a>log_hostname</strong> is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row256119114713"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p158288150611"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p158288150611"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p158288150611"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p282813151865"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p282813151865"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p282813151865"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1082851515610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1082851515610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1082851515610"></a>TCP port number that the client uses for communication with this backend (<strong id="b2675728121813"><a name="b2675728121813"></a><a name="b2675728121813"></a>-1</strong> if a Unix socket is used)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row854419184710"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1482851518615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1482851518615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1482851518615"></a>query_band</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p982811156614"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p982811156614"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p982811156614"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p58281815765"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58281815765"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58281815765"></a>Job type, which is specified by the GUC parameter <strong id="b137173219184"><a name="b137173219184"></a><a name="b137173219184"></a>query_band</strong>. The default value is a null string.</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row854151911475"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p882811158619"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p882811158619"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p882811158619"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1828615167"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1828615167"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1828615167"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1482819159617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1482819159617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1482819159617"></a>Thread ID of the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1154419204719"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1782841517610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1782841517610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1782841517610"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p128280153615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128280153615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128280153615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p282861518615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p282861518615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p282861518615"></a>Block time before the statement is executed (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row15534197479"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p128291151662"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128291151662"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128291151662"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p982917151863"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p982917151863"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p982917151863"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1382951513612"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1382951513612"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1382951513612"></a>Time when the statement starts to be executed</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1053111916473"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p182931517620"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p182931517620"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p182931517620"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p148296154619"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p148296154619"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p148296154619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1382916151764"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1382916151764"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1382916151764"></a>Duration that a statement has been executed (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1752101954720"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1282981517617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1282981517617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1282981517617"></a>estimate_total_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p38294155619"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38294155619"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38294155619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p7829201515612"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p7829201515612"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p7829201515612"></a>Estimated execution time of the statement (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row052161918471"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p188291115566"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p188291115566"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p188291115566"></a>estimate_left_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p18829101517611"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18829101517611"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18829101517611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1282916159618"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1282916159618"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1282916159618"></a>Estimated remaining execution time of the statement (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row13513195474"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p68291150610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p68291150610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p68291150610"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p483013151568"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p483013151568"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p483013151568"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1983010152615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1983010152615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1983010152615"></a>Resource status in workload management</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row851111964715"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p2830115961"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p2830115961"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p2830115961"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p178301151867"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p178301151867"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p178301151867"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p783010151565"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p783010151565"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p783010151565"></a>Resource pool used by the user</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row175071916474"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1083014151063"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1083014151063"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1083014151063"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p38305151363"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38305151363"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38305151363"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p198301315264"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p198301315264"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p198301315264"></a>Cgroup used by the statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row17326153612488"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1361044194819"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1361044194819"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1361044194819"></a>estimate_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1437124414481"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1437124414481"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1437124414481"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p2038719505436"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p2038719505436"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p2038719505436"></a>Estimated memory used by the statement (unit: MB).</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row95091994717"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p58301015569"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58301015569"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58301015569"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1583016153616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1583016153616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1583016153616"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p883013156617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p883013156617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p883013156617"></a>Minimum memory peak of the statement across the database nodes (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row450219184717"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p18305151266"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18305151266"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18305151266"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p148301115362"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p148301115362"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p148301115362"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p78303151267"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p78303151267"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p78303151267"></a>Maximum memory peak of the statement across the database nodes (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row849131944716"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p88302151869"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p88302151869"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p88302151869"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p158301315266"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p158301315266"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p158301315266"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p383010156615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p383010156615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p383010156615"></a>Average memory usage during statement execution (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row19491619144720"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p183017151062"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p183017151062"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p183017151062"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p98311615568"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p98311615568"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p98311615568"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p58317151165"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58317151165"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58317151165"></a>Memory usage skew of the statement among the <span id="en-us_topic_0237122664_text1431462417447"><a name="en-us_topic_0237122664_text1431462417447"></a><a name="en-us_topic_0237122664_text1431462417447"></a>database nodes</span></p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1249141914714"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p148311615563"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p148311615563"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p148311615563"></a>spill_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p16831215669"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p16831215669"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p16831215669"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283136859_en-us_topic_0237122664_p8831191516616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p8831191516616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p8831191516616"></a>Information about statement spill to the database nodes<a name="en-us_topic_0283136859_en-us_topic_0237122664_ul434112427577"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_ul434112427577"></a><ul id="en-us_topic_0283136859_en-us_topic_0237122664_ul434112427577"><li><strong id="b6711554769"><a name="b6711554769"></a><a name="b6711554769"></a>None</strong>: The statement has not been spilled to disks on the database nodes.</li><li><strong id="b162386581960"><a name="b162386581960"></a><a name="b162386581960"></a>All</strong>: The statement has been spilled to disks on the database nodes.</li><li><em id="i16242011712"><a name="i16242011712"></a><a name="i16242011712"></a>[a:b]</em>: The statement has been spilled to disks on <em id="i1862418118710"><a name="i1862418118710"></a><a name="i1862418118710"></a>a</em> of <em id="i17625101973"><a name="i17625101973"></a><a name="i17625101973"></a>b</em> database nodes.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row94911195475"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1483111516610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1483111516610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1483111516610"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p20831121510611"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p20831121510611"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p20831121510611"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p142431040125415"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p142431040125415"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p142431040125415"></a>Minimum spilled data among database nodes when a spill occurs (unit: MB) (default value: <strong id="b5400186671"><a name="b5400186671"></a><a name="b5400186671"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row2048619104719"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p17831141517610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p17831141517610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p17831141517610"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p10831915160"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10831915160"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10831915160"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p224304075413"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p224304075413"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p224304075413"></a>Maximum spilled data among database nodes when a spill occurs (unit: MB) (default value: <strong id="b5223201214720"><a name="b5223201214720"></a><a name="b5223201214720"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row548719204719"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p208311915262"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p208311915262"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p208311915262"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1183171519611"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1183171519611"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1183171519611"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p12431840105418"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p12431840105418"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p12431840105418"></a>Average spilled data among database nodes when a spill occurs (unit: MB) (default value: <strong id="b275061617715"><a name="b275061617715"></a><a name="b275061617715"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1547101914720"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1283112154614"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1283112154614"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1283112154614"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p583111152068"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p583111152068"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p583111152068"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p58311615463"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58311615463"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p58311615463"></a>Database node spill skew when a spill occurs</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row19471619184718"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p38323151768"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38323151768"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38323151768"></a>min_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p983214151864"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p983214151864"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p983214151864"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p683291513618"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p683291513618"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p683291513618"></a>Minimum execution time of the statement across the database nodes (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row847131904714"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p5832171514615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p5832171514615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p5832171514615"></a>max_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p128321415466"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128321415466"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128321415466"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p883231517611"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p883231517611"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p883231517611"></a>Maximum execution time of the statement across the database nodes (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row104710193476"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p15832101516615"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p15832101516615"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p15832101516615"></a>average_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p8832111515617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p8832111515617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p8832111515617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p14832615665"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p14832615665"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p14832615665"></a>Average execution time of the statement across the database nodes (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row44751920470"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p983212151618"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p983212151618"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p983212151618"></a>dntime_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p783281511617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p783281511617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p783281511617"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p20832191514617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p20832191514617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p20832191514617"></a>Execution time skew of the statement among the <span id="en-us_topic_0237122664_text1091011254442"><a name="en-us_topic_0237122664_text1091011254442"></a><a name="en-us_topic_0237122664_text1091011254442"></a>database nodes</span></p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row184718194473"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p5832415264"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p5832415264"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p5832415264"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p138329151661"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p138329151661"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p138329151661"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p16832215861"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p16832215861"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p16832215861"></a>Minimum CPU time of the statement across the database nodes (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row20451619144710"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p38321715166"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38321715166"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p38321715166"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p13832715366"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p13832715366"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p13832715366"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p983318159616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p983318159616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p983318159616"></a>Maximum CPU time of the statement across the database nodes (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row174561916473"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1983351513616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1983351513616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1983351513616"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p683317151761"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p683317151761"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p683317151761"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1833161518617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1833161518617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1833161518617"></a>Total CPU time of the statement across the database nodes (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1244201918476"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p3833151513616"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p3833151513616"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p3833151513616"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p6833115267"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p6833115267"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p6833115267"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p128335152614"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128335152614"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p128335152614"></a>CPU time skew of the statement among the <span id="en-us_topic_0237122664_text2040052724412"><a name="en-us_topic_0237122664_text2040052724412"></a><a name="en-us_topic_0237122664_text2040052724412"></a>database nodes</span></p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row86001914135213"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p10621338205213"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10621338205213"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10621338205213"></a>min_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1062113812524"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1062113812524"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1062113812524"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p96211389521"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p96211389521"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p96211389521"></a>Minimum IOPS peak of the statement across the database nodes. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row518319212523"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p66343810522"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p66343810522"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p66343810522"></a>max_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p196353816526"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p196353816526"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p196353816526"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1963153845212"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1963153845212"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1963153845212"></a>Maximum IOPS peak of the statement across the database nodes. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row19456325165215"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1763838175213"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1763838175213"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1763838175213"></a>average_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p26319381526"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p26319381526"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p26319381526"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p106316389520"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p106316389520"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p106316389520"></a>Average IOPS peak of the statement across the database nodes. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row221630165216"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1063143815214"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1063143815214"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1063143815214"></a>iops_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1631738155219"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1631738155219"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1631738155219"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p66343815215"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p66343815215"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p66343815215"></a>I/O skew of the statement among the database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row104411924718"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p118332151863"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p118332151863"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p118332151863"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1383318153613"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1383318153613"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1383318153613"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283136859_en-us_topic_0237122664_p18833191517617"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18833191517617"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p18833191517617"></a>Warning. The following warnings are displayed:<a name="en-us_topic_0283136859_en-us_topic_0237122664_ul18588746115712"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_ul18588746115712"></a><ul id="en-us_topic_0283136859_en-us_topic_0237122664_ul18588746115712"><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row544161910477"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1583301514611"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1583301514611"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1583301514611"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1833101519610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1833101519610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1833101519610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p98336151469"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p98336151469"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p98336151469"></a>Internal query ID used for statement execution</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1143181934718"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p178331215466"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p178331215466"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p178331215466"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p883313158618"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p883313158618"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p883313158618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p9833111510613"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p9833111510613"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p9833111510613"></a>Statement being executed</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1542619144715"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1383471518620"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1383471518620"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1383471518620"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1483451513610"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1483451513610"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1483451513610"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p1883421516614"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1883421516614"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p1883421516614"></a>Execution plan of the statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row178973320279"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p589718317273"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p589718317273"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p589718317273"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p6897431270"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p6897431270"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p6897431270"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p789717311275"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p789717311275"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p789717311275"></a>Logical <span id="text179123126198"><a name="text179123126198"></a><a name="text179123126198"></a>openGauss</span> of the user running the statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row45531757702"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p11461811155914"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p11461811155914"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p11461811155914"></a>top_cpu_dn</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p646111195912"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p646111195912"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p646111195912"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p124651118592"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p124651118592"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p124651118592"></a>Top N CPU usage</p>
</td>
</tr>
<tr id="en-us_topic_0283136859_en-us_topic_0237122664_row1655215718013"><td class="cellrowborder" valign="top" width="29.659999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p628521318590"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p628521318590"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p628521318590"></a>top_mem_dn</p>
</td>
<td class="cellrowborder" valign="top" width="19.040000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p182861313165916"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p182861313165916"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p182861313165916"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.300000000000004%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136859_en-us_topic_0237122664_p10286101313597"><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10286101313597"></a><a name="en-us_topic_0283136859_en-us_topic_0237122664_p10286101313597"></a>Top N memory usage</p>
</td>
</tr>
</tbody>
</table>

