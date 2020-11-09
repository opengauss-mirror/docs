# GS\_WLM\_SESSION\_STATISTICS<a name="EN-US_TOPIC_0242385929"></a>

**GS\_WLM\_SESSION\_STATISTICS**  displays load management information about jobs being executed by the current user on the primary database node.

**Table  1**  GS\_WLM\_SESSION\_STATISTICS columns

<a name="en-us_topic_0237122402_table9446192117461"></a>
<table><thead align="left"><tr id="en-us_topic_0237122402_row1544642110461"><th class="cellrowborder" valign="top" width="23.02%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122402_p1359922545010"><a name="en-us_topic_0237122402_p1359922545010"></a><a name="en-us_topic_0237122402_p1359922545010"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.98%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122402_p3599182520502"><a name="en-us_topic_0237122402_p3599182520502"></a><a name="en-us_topic_0237122402_p3599182520502"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122402_p175991225195015"><a name="en-us_topic_0237122402_p175991225195015"></a><a name="en-us_topic_0237122402_p175991225195015"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122402_row17446162114468"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p7825161515615"><a name="en-us_topic_0237122402_p7825161515615"></a><a name="en-us_topic_0237122402_p7825161515615"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p158251415661"><a name="en-us_topic_0237122402_p158251415661"></a><a name="en-us_topic_0237122402_p158251415661"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1282581516620"><a name="en-us_topic_0237122402_p1282581516620"></a><a name="en-us_topic_0237122402_p1282581516620"></a>OID of the database that the backend is connected to</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row75751994710"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p17826315164"><a name="en-us_topic_0237122402_p17826315164"></a><a name="en-us_topic_0237122402_p17826315164"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p17826201510620"><a name="en-us_topic_0237122402_p17826201510620"></a><a name="en-us_topic_0237122402_p17826201510620"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1182612150618"><a name="en-us_topic_0237122402_p1182612150618"></a><a name="en-us_topic_0237122402_p1182612150618"></a>Name of the database that the backend is connected to</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row9571319154713"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p11826415869"><a name="en-us_topic_0237122402_p11826415869"></a><a name="en-us_topic_0237122402_p11826415869"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p10826015362"><a name="en-us_topic_0237122402_p10826015362"></a><a name="en-us_topic_0237122402_p10826015362"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p182613154612"><a name="en-us_topic_0237122402_p182613154612"></a><a name="en-us_topic_0237122402_p182613154612"></a>Schema name</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row15771915477"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p68261715961"><a name="en-us_topic_0237122402_p68261715961"></a><a name="en-us_topic_0237122402_p68261715961"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p108264151361"><a name="en-us_topic_0237122402_p108264151361"></a><a name="en-us_topic_0237122402_p108264151361"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1682619154610"><a name="en-us_topic_0237122402_p1682619154610"></a><a name="en-us_topic_0237122402_p1682619154610"></a>Name of the primary database node on which the statement is executed</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1456161919474"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p138263151561"><a name="en-us_topic_0237122402_p138263151561"></a><a name="en-us_topic_0237122402_p138263151561"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p19827121514616"><a name="en-us_topic_0237122402_p19827121514616"></a><a name="en-us_topic_0237122402_p19827121514616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1482741518615"><a name="en-us_topic_0237122402_p1482741518615"></a><a name="en-us_topic_0237122402_p1482741518615"></a>Username used for connecting to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row18568199473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1182716154617"><a name="en-us_topic_0237122402_p1182716154617"></a><a name="en-us_topic_0237122402_p1182716154617"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p168272153616"><a name="en-us_topic_0237122402_p168272153616"></a><a name="en-us_topic_0237122402_p168272153616"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1582717155620"><a name="en-us_topic_0237122402_p1582717155620"></a><a name="en-us_topic_0237122402_p1582717155620"></a>Name of the application connected to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row18561119144717"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p68277151565"><a name="en-us_topic_0237122402_p68277151565"></a><a name="en-us_topic_0237122402_p68277151565"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p88271415966"><a name="en-us_topic_0237122402_p88271415966"></a><a name="en-us_topic_0237122402_p88271415966"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p10827121511613"><a name="en-us_topic_0237122402_p10827121511613"></a><a name="en-us_topic_0237122402_p10827121511613"></a>IP address of the client connected to the backend. If this column is null, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as autovacuum.</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row17561419164719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p28277151166"><a name="en-us_topic_0237122402_p28277151166"></a><a name="en-us_topic_0237122402_p28277151166"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p18271615169"><a name="en-us_topic_0237122402_p18271615169"></a><a name="en-us_topic_0237122402_p18271615169"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p19827101512614"><a name="en-us_topic_0237122402_p19827101512614"></a><a name="en-us_topic_0237122402_p19827101512614"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b2035342113815"><a name="b2035342113815"></a><a name="b2035342113815"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b14181422181"><a name="b14181422181"></a><a name="b14181422181"></a>log_hostname</strong> is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row256119114713"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p158288150611"><a name="en-us_topic_0237122402_p158288150611"></a><a name="en-us_topic_0237122402_p158288150611"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p282813151865"><a name="en-us_topic_0237122402_p282813151865"></a><a name="en-us_topic_0237122402_p282813151865"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1082851515610"><a name="en-us_topic_0237122402_p1082851515610"></a><a name="en-us_topic_0237122402_p1082851515610"></a>TCP port number that the client uses for communication with this backend (<strong id="b970413240812"><a name="b970413240812"></a><a name="b970413240812"></a>-1</strong> if a Unix socket is used)</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row854419184710"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1482851518615"><a name="en-us_topic_0237122402_p1482851518615"></a><a name="en-us_topic_0237122402_p1482851518615"></a>query_band</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p982811156614"><a name="en-us_topic_0237122402_p982811156614"></a><a name="en-us_topic_0237122402_p982811156614"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p58281815765"><a name="en-us_topic_0237122402_p58281815765"></a><a name="en-us_topic_0237122402_p58281815765"></a>Job type, which is specified by the GUC parameter <strong id="b261712254815"><a name="b261712254815"></a><a name="b261712254815"></a>query_band</strong>. The default value is a null string.</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row854151911475"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p882811158619"><a name="en-us_topic_0237122402_p882811158619"></a><a name="en-us_topic_0237122402_p882811158619"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1828615167"><a name="en-us_topic_0237122402_p1828615167"></a><a name="en-us_topic_0237122402_p1828615167"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1482819159617"><a name="en-us_topic_0237122402_p1482819159617"></a><a name="en-us_topic_0237122402_p1482819159617"></a>Thread ID of the backend</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row0804174414228"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p9804144142212"><a name="en-us_topic_0237122402_p9804144142212"></a><a name="en-us_topic_0237122402_p9804144142212"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p880510448229"><a name="en-us_topic_0237122402_p880510448229"></a><a name="en-us_topic_0237122402_p880510448229"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p19805744132215"><a name="en-us_topic_0237122402_p19805744132215"></a><a name="en-us_topic_0237122402_p19805744132215"></a>Session ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1154419204719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1782841517610"><a name="en-us_topic_0237122402_p1782841517610"></a><a name="en-us_topic_0237122402_p1782841517610"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p128280153615"><a name="en-us_topic_0237122402_p128280153615"></a><a name="en-us_topic_0237122402_p128280153615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p282861518615"><a name="en-us_topic_0237122402_p282861518615"></a><a name="en-us_topic_0237122402_p282861518615"></a>Block time before the statement is executed (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row15534197479"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p128291151662"><a name="en-us_topic_0237122402_p128291151662"></a><a name="en-us_topic_0237122402_p128291151662"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p982917151863"><a name="en-us_topic_0237122402_p982917151863"></a><a name="en-us_topic_0237122402_p982917151863"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1382951513612"><a name="en-us_topic_0237122402_p1382951513612"></a><a name="en-us_topic_0237122402_p1382951513612"></a>Time when the statement starts to be executed</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1053111916473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p182931517620"><a name="en-us_topic_0237122402_p182931517620"></a><a name="en-us_topic_0237122402_p182931517620"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p148296154619"><a name="en-us_topic_0237122402_p148296154619"></a><a name="en-us_topic_0237122402_p148296154619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1382916151764"><a name="en-us_topic_0237122402_p1382916151764"></a><a name="en-us_topic_0237122402_p1382916151764"></a>Duration that a statement has been executed, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1752101954720"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1282981517617"><a name="en-us_topic_0237122402_p1282981517617"></a><a name="en-us_topic_0237122402_p1282981517617"></a>estimate_total_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p38294155619"><a name="en-us_topic_0237122402_p38294155619"></a><a name="en-us_topic_0237122402_p38294155619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p7829201515612"><a name="en-us_topic_0237122402_p7829201515612"></a><a name="en-us_topic_0237122402_p7829201515612"></a>Estimated execution time of the statement, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row052161918471"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p188291115566"><a name="en-us_topic_0237122402_p188291115566"></a><a name="en-us_topic_0237122402_p188291115566"></a>estimate_left_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p18829101517611"><a name="en-us_topic_0237122402_p18829101517611"></a><a name="en-us_topic_0237122402_p18829101517611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1282916159618"><a name="en-us_topic_0237122402_p1282916159618"></a><a name="en-us_topic_0237122402_p1282916159618"></a>Estimated remaining execution time of the statement, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row13513195474"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p68291150610"><a name="en-us_topic_0237122402_p68291150610"></a><a name="en-us_topic_0237122402_p68291150610"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p483013151568"><a name="en-us_topic_0237122402_p483013151568"></a><a name="en-us_topic_0237122402_p483013151568"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1983010152615"><a name="en-us_topic_0237122402_p1983010152615"></a><a name="en-us_topic_0237122402_p1983010152615"></a>Unsupported currently</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row851111964715"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p2830115961"><a name="en-us_topic_0237122402_p2830115961"></a><a name="en-us_topic_0237122402_p2830115961"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p178301151867"><a name="en-us_topic_0237122402_p178301151867"></a><a name="en-us_topic_0237122402_p178301151867"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p783010151565"><a name="en-us_topic_0237122402_p783010151565"></a><a name="en-us_topic_0237122402_p783010151565"></a>Resource pool used by the user</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row175071916474"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1083014151063"><a name="en-us_topic_0237122402_p1083014151063"></a><a name="en-us_topic_0237122402_p1083014151063"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p38305151363"><a name="en-us_topic_0237122402_p38305151363"></a><a name="en-us_topic_0237122402_p38305151363"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p5771102362510"><a name="p5771102362510"></a><a name="p5771102362510"></a>Unsupported currently</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row17326153612488"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1361044194819"><a name="en-us_topic_0237122402_p1361044194819"></a><a name="en-us_topic_0237122402_p1361044194819"></a>estimate_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1437124414481"><a name="en-us_topic_0237122402_p1437124414481"></a><a name="en-us_topic_0237122402_p1437124414481"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p2038719505436"><a name="en-us_topic_0237122402_p2038719505436"></a><a name="en-us_topic_0237122402_p2038719505436"></a>Estimated memory used by the statement (unit: MB).</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row95091994717"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p58301015569"><a name="en-us_topic_0237122402_p58301015569"></a><a name="en-us_topic_0237122402_p58301015569"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1583016153616"><a name="en-us_topic_0237122402_p1583016153616"></a><a name="en-us_topic_0237122402_p1583016153616"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p883013156617"><a name="en-us_topic_0237122402_p883013156617"></a><a name="en-us_topic_0237122402_p883013156617"></a>Minimum memory peak of the statement across the database nodes, in MB</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row450219184717"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p18305151266"><a name="en-us_topic_0237122402_p18305151266"></a><a name="en-us_topic_0237122402_p18305151266"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p148301115362"><a name="en-us_topic_0237122402_p148301115362"></a><a name="en-us_topic_0237122402_p148301115362"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p78303151267"><a name="en-us_topic_0237122402_p78303151267"></a><a name="en-us_topic_0237122402_p78303151267"></a>Maximum memory peak of the statement across the database nodes, in MB</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row849131944716"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p88302151869"><a name="en-us_topic_0237122402_p88302151869"></a><a name="en-us_topic_0237122402_p88302151869"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p158301315266"><a name="en-us_topic_0237122402_p158301315266"></a><a name="en-us_topic_0237122402_p158301315266"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p383010156615"><a name="en-us_topic_0237122402_p383010156615"></a><a name="en-us_topic_0237122402_p383010156615"></a>Average memory usage during statement execution (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row19491619144720"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p183017151062"><a name="en-us_topic_0237122402_p183017151062"></a><a name="en-us_topic_0237122402_p183017151062"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p98311615568"><a name="en-us_topic_0237122402_p98311615568"></a><a name="en-us_topic_0237122402_p98311615568"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p58317151165"><a name="en-us_topic_0237122402_p58317151165"></a><a name="en-us_topic_0237122402_p58317151165"></a>Memory usage skew of the statement among the database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1249141914714"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p148311615563"><a name="en-us_topic_0237122402_p148311615563"></a><a name="en-us_topic_0237122402_p148311615563"></a>spill_info</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p16831215669"><a name="en-us_topic_0237122402_p16831215669"></a><a name="en-us_topic_0237122402_p16831215669"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0237122402_p8831191516616"><a name="en-us_topic_0237122402_p8831191516616"></a><a name="en-us_topic_0237122402_p8831191516616"></a>Information about statement spill to the database nodes<a name="en-us_topic_0237122402_ul6514195310143"></a><a name="en-us_topic_0237122402_ul6514195310143"></a><ul id="en-us_topic_0237122402_ul6514195310143"><li><strong id="b1881014210815"><a name="b1881014210815"></a><a name="b1881014210815"></a>None</strong>: The statement has not been spilled to disks on the database nodes.</li><li><strong id="b066216431820"><a name="b066216431820"></a><a name="b066216431820"></a>All</strong>: The statement has been spilled to disks on the database nodes.</li><li><em id="i1927417453816"><a name="i1927417453816"></a><a name="i1927417453816"></a>[a:b]</em>: The statement has been spilled to disks on <em id="i15274174513816"><a name="i15274174513816"></a><a name="i15274174513816"></a>a</em> of <em id="i427514514811"><a name="i427514514811"></a><a name="i427514514811"></a>b</em> database nodes.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0237122402_row94911195475"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1483111516610"><a name="en-us_topic_0237122402_p1483111516610"></a><a name="en-us_topic_0237122402_p1483111516610"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p20831121510611"><a name="en-us_topic_0237122402_p20831121510611"></a><a name="en-us_topic_0237122402_p20831121510611"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p142431040125415"><a name="en-us_topic_0237122402_p142431040125415"></a><a name="en-us_topic_0237122402_p142431040125415"></a>Minimum spilled data among database nodes when a spill occurs, in MB (default value: <strong id="b18645157143"><a name="b18645157143"></a><a name="b18645157143"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row2048619104719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p17831141517610"><a name="en-us_topic_0237122402_p17831141517610"></a><a name="en-us_topic_0237122402_p17831141517610"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p10831915160"><a name="en-us_topic_0237122402_p10831915160"></a><a name="en-us_topic_0237122402_p10831915160"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p224304075413"><a name="en-us_topic_0237122402_p224304075413"></a><a name="en-us_topic_0237122402_p224304075413"></a>Maximum spilled data among database nodes when a spill occurs, in MB (default value: <strong id="b1238313109419"><a name="b1238313109419"></a><a name="b1238313109419"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row548719204719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p208311915262"><a name="en-us_topic_0237122402_p208311915262"></a><a name="en-us_topic_0237122402_p208311915262"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1183171519611"><a name="en-us_topic_0237122402_p1183171519611"></a><a name="en-us_topic_0237122402_p1183171519611"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p12431840105418"><a name="en-us_topic_0237122402_p12431840105418"></a><a name="en-us_topic_0237122402_p12431840105418"></a>Average spilled data among database nodes when a spill occurs, in MB (default value: <strong id="b198015224510"><a name="b198015224510"></a><a name="b198015224510"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1547101914720"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1283112154614"><a name="en-us_topic_0237122402_p1283112154614"></a><a name="en-us_topic_0237122402_p1283112154614"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p583111152068"><a name="en-us_topic_0237122402_p583111152068"></a><a name="en-us_topic_0237122402_p583111152068"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p58311615463"><a name="en-us_topic_0237122402_p58311615463"></a><a name="en-us_topic_0237122402_p58311615463"></a><span id="text2912207124814"><a name="text2912207124814"></a><a name="text2912207124814"></a>database node</span> spill skew when a spill occurs</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row19471619184718"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p38323151768"><a name="en-us_topic_0237122402_p38323151768"></a><a name="en-us_topic_0237122402_p38323151768"></a>min_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p983214151864"><a name="en-us_topic_0237122402_p983214151864"></a><a name="en-us_topic_0237122402_p983214151864"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p683291513618"><a name="en-us_topic_0237122402_p683291513618"></a><a name="en-us_topic_0237122402_p683291513618"></a>Minimum execution time of the statement across the database nodes, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row847131904714"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p5832171514615"><a name="en-us_topic_0237122402_p5832171514615"></a><a name="en-us_topic_0237122402_p5832171514615"></a>max_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p128321415466"><a name="en-us_topic_0237122402_p128321415466"></a><a name="en-us_topic_0237122402_p128321415466"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p883231517611"><a name="en-us_topic_0237122402_p883231517611"></a><a name="en-us_topic_0237122402_p883231517611"></a>Maximum execution time of the statement across the database nodes, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row104710193476"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p15832101516615"><a name="en-us_topic_0237122402_p15832101516615"></a><a name="en-us_topic_0237122402_p15832101516615"></a>average_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p8832111515617"><a name="en-us_topic_0237122402_p8832111515617"></a><a name="en-us_topic_0237122402_p8832111515617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p14832615665"><a name="en-us_topic_0237122402_p14832615665"></a><a name="en-us_topic_0237122402_p14832615665"></a>Average execution time of the statement across the database nodes, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row44751920470"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p983212151618"><a name="en-us_topic_0237122402_p983212151618"></a><a name="en-us_topic_0237122402_p983212151618"></a>dntime_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p783281511617"><a name="en-us_topic_0237122402_p783281511617"></a><a name="en-us_topic_0237122402_p783281511617"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p20832191514617"><a name="en-us_topic_0237122402_p20832191514617"></a><a name="en-us_topic_0237122402_p20832191514617"></a>Execution time skew of the statement among the database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row184718194473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p5832415264"><a name="en-us_topic_0237122402_p5832415264"></a><a name="en-us_topic_0237122402_p5832415264"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p138329151661"><a name="en-us_topic_0237122402_p138329151661"></a><a name="en-us_topic_0237122402_p138329151661"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p16832215861"><a name="en-us_topic_0237122402_p16832215861"></a><a name="en-us_topic_0237122402_p16832215861"></a>Minimum CPU time of the statement across the database nodes, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row20451619144710"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p38321715166"><a name="en-us_topic_0237122402_p38321715166"></a><a name="en-us_topic_0237122402_p38321715166"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p13832715366"><a name="en-us_topic_0237122402_p13832715366"></a><a name="en-us_topic_0237122402_p13832715366"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p983318159616"><a name="en-us_topic_0237122402_p983318159616"></a><a name="en-us_topic_0237122402_p983318159616"></a>Maximum CPU time of the statement across the database nodes, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row174561916473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1983351513616"><a name="en-us_topic_0237122402_p1983351513616"></a><a name="en-us_topic_0237122402_p1983351513616"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p683317151761"><a name="en-us_topic_0237122402_p683317151761"></a><a name="en-us_topic_0237122402_p683317151761"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1833161518617"><a name="en-us_topic_0237122402_p1833161518617"></a><a name="en-us_topic_0237122402_p1833161518617"></a>Total CPU time of the statement across the database nodes, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1244201918476"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p3833151513616"><a name="en-us_topic_0237122402_p3833151513616"></a><a name="en-us_topic_0237122402_p3833151513616"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p6833115267"><a name="en-us_topic_0237122402_p6833115267"></a><a name="en-us_topic_0237122402_p6833115267"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p128335152614"><a name="en-us_topic_0237122402_p128335152614"></a><a name="en-us_topic_0237122402_p128335152614"></a>CPU time skew of the statement among database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row86001914135213"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p10621338205213"><a name="en-us_topic_0237122402_p10621338205213"></a><a name="en-us_topic_0237122402_p10621338205213"></a>min_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1062113812524"><a name="en-us_topic_0237122402_p1062113812524"></a><a name="en-us_topic_0237122402_p1062113812524"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p96211389521"><a name="en-us_topic_0237122402_p96211389521"></a><a name="en-us_topic_0237122402_p96211389521"></a>Minimum IOPS peak of the statement across the database nodes. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row518319212523"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p66343810522"><a name="en-us_topic_0237122402_p66343810522"></a><a name="en-us_topic_0237122402_p66343810522"></a>max_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p196353816526"><a name="en-us_topic_0237122402_p196353816526"></a><a name="en-us_topic_0237122402_p196353816526"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1963153845212"><a name="en-us_topic_0237122402_p1963153845212"></a><a name="en-us_topic_0237122402_p1963153845212"></a>Maximum IOPS peak of the statement across the database nodes. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row19456325165215"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1763838175213"><a name="en-us_topic_0237122402_p1763838175213"></a><a name="en-us_topic_0237122402_p1763838175213"></a>average_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p26319381526"><a name="en-us_topic_0237122402_p26319381526"></a><a name="en-us_topic_0237122402_p26319381526"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p106316389520"><a name="en-us_topic_0237122402_p106316389520"></a><a name="en-us_topic_0237122402_p106316389520"></a>Average IOPS peak of the statement across the database nodes. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row221630165216"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1063143815214"><a name="en-us_topic_0237122402_p1063143815214"></a><a name="en-us_topic_0237122402_p1063143815214"></a>iops_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1631738155219"><a name="en-us_topic_0237122402_p1631738155219"></a><a name="en-us_topic_0237122402_p1631738155219"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p66343815215"><a name="en-us_topic_0237122402_p66343815215"></a><a name="en-us_topic_0237122402_p66343815215"></a>I/O skew across <span id="text14808184416916"><a name="text14808184416916"></a><a name="text14808184416916"></a>database node</span>s</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row104411924718"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p118332151863"><a name="en-us_topic_0237122402_p118332151863"></a><a name="en-us_topic_0237122402_p118332151863"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1383318153613"><a name="en-us_topic_0237122402_p1383318153613"></a><a name="en-us_topic_0237122402_p1383318153613"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0237122402_p18833191517617"><a name="en-us_topic_0237122402_p18833191517617"></a><a name="en-us_topic_0237122402_p18833191517617"></a>Warning. The following warnings are displayed:<a name="en-us_topic_0237122402_ul0986145181819"></a><a name="en-us_topic_0237122402_ul0986145181819"></a><ul id="en-us_topic_0237122402_ul0986145181819"><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0237122402_row544161910477"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1583301514611"><a name="en-us_topic_0237122402_p1583301514611"></a><a name="en-us_topic_0237122402_p1583301514611"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1833101519610"><a name="en-us_topic_0237122402_p1833101519610"></a><a name="en-us_topic_0237122402_p1833101519610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p98336151469"><a name="en-us_topic_0237122402_p98336151469"></a><a name="en-us_topic_0237122402_p98336151469"></a>Internal query ID used for statement execution</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1143181934718"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p178331215466"><a name="en-us_topic_0237122402_p178331215466"></a><a name="en-us_topic_0237122402_p178331215466"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p883313158618"><a name="en-us_topic_0237122402_p883313158618"></a><a name="en-us_topic_0237122402_p883313158618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p9833111510613"><a name="en-us_topic_0237122402_p9833111510613"></a><a name="en-us_topic_0237122402_p9833111510613"></a>Statement being executed</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1542619144715"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p1383471518620"><a name="en-us_topic_0237122402_p1383471518620"></a><a name="en-us_topic_0237122402_p1383471518620"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p1483451513610"><a name="en-us_topic_0237122402_p1483451513610"></a><a name="en-us_topic_0237122402_p1483451513610"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p1883421516614"><a name="en-us_topic_0237122402_p1883421516614"></a><a name="en-us_topic_0237122402_p1883421516614"></a>Execution plan of the statement</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row178973320279"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p589718317273"><a name="en-us_topic_0237122402_p589718317273"></a><a name="en-us_topic_0237122402_p589718317273"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p6897431270"><a name="en-us_topic_0237122402_p6897431270"></a><a name="en-us_topic_0237122402_p6897431270"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p789717311275"><a name="en-us_topic_0237122402_p789717311275"></a><a name="en-us_topic_0237122402_p789717311275"></a>Unsupported currently</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row45531757702"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p11461811155914"><a name="en-us_topic_0237122402_p11461811155914"></a><a name="en-us_topic_0237122402_p11461811155914"></a>top_mem_dn</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p646111195912"><a name="en-us_topic_0237122402_p646111195912"></a><a name="en-us_topic_0237122402_p646111195912"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p124651118592"><a name="en-us_topic_0237122402_p124651118592"></a><a name="en-us_topic_0237122402_p124651118592"></a>Memory usage</p>
</td>
</tr>
<tr id="en-us_topic_0237122402_row1655215718013"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122402_p628521318590"><a name="en-us_topic_0237122402_p628521318590"></a><a name="en-us_topic_0237122402_p628521318590"></a>top_cpu_dn</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122402_p182861313165916"><a name="en-us_topic_0237122402_p182861313165916"></a><a name="en-us_topic_0237122402_p182861313165916"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122402_p10286101313597"><a name="en-us_topic_0237122402_p10286101313597"></a><a name="en-us_topic_0237122402_p10286101313597"></a>CPU usage</p>
</td>
</tr>
</tbody>
</table>

