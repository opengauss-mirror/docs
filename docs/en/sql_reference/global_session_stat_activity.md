# GLOBAL\_SESSION\_STAT\_ACTIVITY<a name="EN-US_TOPIC_0289900735"></a>

**GLOBAL\_SESSION\_STAT\_ACTIVITY**  displays information about threads that are running on each node in openGauss.

**Table  1**  GLOBAL\_SESSION\_STAT\_ACTIVITY columns

<a name="en-us_topic_0283137277_en-us_topic_0237122638_table114813420279"></a>
<table><thead align="left"><tr id="en-us_topic_0283137277_en-us_topic_0237122638_row1440113342272"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137277_en-us_topic_0237122638_p6401103412712"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p6401103412712"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p6401103412712"></a><strong id="b14950193892619"><a name="b14950193892619"></a><a name="b14950193892619"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.669999999999998%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1740216349279"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1740216349279"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1740216349279"></a><strong id="b3726193962611"><a name="b3726193962611"></a><a name="b3726193962611"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.279999999999994%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137277_en-us_topic_0237122638_p04029344279"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p04029344279"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p04029344279"></a><strong id="b031664018267"><a name="b031664018267"></a><a name="b031664018267"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137277_en-us_topic_0237122638_row194021334152716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p5402173416279"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p5402173416279"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p5402173416279"></a>coorname</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p134021343277"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p134021343277"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p134021343277"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p14021334192715"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p14021334192715"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p14021334192715"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row14402133452711"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p134021344272"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p134021344272"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p134021344272"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p13403133410278"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p13403133410278"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p13403133410278"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1340363452715"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1340363452715"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1340363452715"></a>OID of the database that the user session connects to in the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row7403123415275"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p17403123417273"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p17403123417273"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p17403123417273"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1040313442716"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1040313442716"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1040313442716"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p7403534142717"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p7403534142717"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p7403534142717"></a>Name of the database that the user session connects to in the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row1740323419272"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p174031834132710"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p174031834132710"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p174031834132710"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p17403834132714"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p17403834132714"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p17403834132714"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p10404234192710"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p10404234192710"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p10404234192710"></a>Thread ID of the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row54041934182718"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p3404203462711"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p3404203462711"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p3404203462711"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1340418342278"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1340418342278"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1340418342278"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1240412342270"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1240412342270"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1240412342270"></a>OID of the user logged in to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row340413418272"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p144042346275"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p144042346275"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p144042346275"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1540573432711"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1540573432711"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1540573432711"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p740553422711"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p740553422711"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p740553422711"></a>Name of the user logged in to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row3405173462716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p18406534152716"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p18406534152716"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p18406534152716"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p104061934112718"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p104061934112718"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p104061934112718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p540673410279"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p540673410279"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p540673410279"></a>Name of the application connected to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row164061334112717"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p3407234142717"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p3407234142717"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p3407234142717"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p12407143417278"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p12407143417278"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p12407143417278"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1140753412715"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1140753412715"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1140753412715"></a>IP address of the client connected to the backend. If this column is null, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as autovacuum.</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row1040743417279"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1407334182714"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1407334182714"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1407334182714"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p18407934192717"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p18407934192717"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p18407934192717"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1740714341276"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1740714341276"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1740714341276"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b559182052712"><a name="b559182052712"></a><a name="b559182052712"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b5998132315279"><a name="b5998132315279"></a><a name="b5998132315279"></a>log_hostname</strong> is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row440814346273"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p140873472719"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p140873472719"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p140873472719"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p194082034122712"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p194082034122712"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p194082034122712"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p5408234182717"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p5408234182717"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p5408234182717"></a>TCP port number that the client uses for communication with this backend (<strong id="b149401025192711"><a name="b149401025192711"></a><a name="b149401025192711"></a>-1</strong> if a Unix socket is used)</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row18408153411272"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p740820347276"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p740820347276"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p740820347276"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p940810349271"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p940810349271"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p940810349271"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1440817344272"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1440817344272"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1440817344272"></a>Time when this process was started, that is, when the client connected to the server</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row11408034142719"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p240893410272"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p240893410272"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p240893410272"></a>xact_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p20409434202711"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p20409434202711"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p20409434202711"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p12409934112710"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p12409934112710"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p12409934112710"></a>Time when current transaction was started (null if no transaction is active). If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b839814319271"><a name="b839814319271"></a><a name="b839814319271"></a>query_start</strong> column.</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row2409334162716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p164091034102710"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p164091034102710"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p164091034102710"></a>query_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p64091334142713"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p64091334142713"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p64091334142713"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p184097347273"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p184097347273"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p184097347273"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b108891035122710"><a name="b108891035122710"></a><a name="b108891035122710"></a>state</strong> is not <strong id="b10894123516270"><a name="b10894123516270"></a><a name="b10894123516270"></a>active</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row84091434152716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p540973432713"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p540973432713"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p540973432713"></a>state_change</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p740973410278"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p740973410278"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p740973410278"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p94101034122719"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p94101034122719"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p94101034122719"></a>Time when the <strong id="b5998173952719"><a name="b5998173952719"></a><a name="b5998173952719"></a>state</strong> was last changed</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row441016348278"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p6410173462712"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p6410173462712"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p6410173462712"></a>waiting</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1841015342276"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1841015342276"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1841015342276"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1041053412715"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1041053412715"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1041053412715"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b966912421271"><a name="b966912421271"></a><a name="b966912421271"></a>true</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row10410134202715"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p14101834172713"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p14101834172713"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p14101834172713"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p10410143413278"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p10410143413278"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p10410143413278"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122637_p153301633152616"><a name="en-us_topic_0237122637_p153301633152616"></a><a name="en-us_topic_0237122637_p153301633152616"></a>Unsupported currently</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row1441093419275"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p164111534192717"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p164111534192717"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p164111534192717"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1141110343271"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1141110343271"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1141110343271"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137277_en-us_topic_0237122638_p12411234142718"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p12411234142718"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p12411234142718"></a>Overall status of this backend. The value must be one of the following:<a name="en-us_topic_0283137277_en-us_topic_0237122638_ul17411123412274"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_ul17411123412274"></a><ul id="en-us_topic_0283137277_en-us_topic_0237122638_ul17411123412274"><li><strong id="b15928105312277"><a name="b15928105312277"></a><a name="b15928105312277"></a>active</strong>: The backend is executing a query.</li><li><strong id="b2477255102712"><a name="b2477255102712"></a><a name="b2477255102712"></a>idle</strong>: The backend is waiting for a new client command.</li><li><strong id="b717115617272"><a name="b717115617272"></a><a name="b717115617272"></a>idle in transaction</strong>: The backend is in a transaction, but is not currently executing a query.</li><li><strong id="b4897256152718"><a name="b4897256152718"></a><a name="b4897256152718"></a>idle in transaction (aborted)</strong>: This state is similar to <strong id="b38981956132712"><a name="b38981956132712"></a><a name="b38981956132712"></a>idle in transaction</strong>, except that one of the statements in the transaction caused an error.</li><li><strong id="b610385842712"><a name="b610385842712"></a><a name="b610385842712"></a>fastpath function call</strong>: The backend is executing a fast-path function.</li><li><strong id="b16804359182718"><a name="b16804359182718"></a><a name="b16804359182718"></a>disabled</strong>: This state is reported if <strong id="b2805155942718"><a name="b2805155942718"></a><a name="b2805155942718"></a>track_activities</strong> is disabled in this backend.<div class="note" id="en-us_topic_0283137277_en-us_topic_0237122638_note862031142110"><a name="en-us_topic_0283137277_en-us_topic_0237122638_note862031142110"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_note862031142110"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283137277_en-us_topic_0237122638_p94121344272"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p94121344272"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p94121344272"></a>Common users can view their own session status only. The state information of other accounts is empty. For example, after the <strong id="b114912038144219"><a name="b114912038144219"></a><a name="b114912038144219"></a>judy</strong> user is connected to the database, the state information of the <strong id="b6491163814425"><a name="b6491163814425"></a><a name="b6491163814425"></a>joe</strong> user and the initial user <strong id="b1749253819424"><a name="b1749253819424"></a><a name="b1749253819424"></a>omm</strong> in <strong id="b9492103864215"><a name="b9492103864215"></a><a name="b9492103864215"></a>pg_stat_activity</strong> is empty.</p>
<pre class="screen" id="en-us_topic_0283137277_screen5852193110511"><a name="en-us_topic_0283137277_screen5852193110511"></a><a name="en-us_topic_0283137277_screen5852193110511"></a>openGauss=# SELECT datname, usename, usesysid,state,pid FROM pg_stat_activity;
datname    | usename | usesysid | state    |       pid
----------+---------+----------+--------+-----------------postgres  | omm       | 10       |        |139968752121616
postgres  | omm       | 10       |        |139968903116560
db_tpcds  | judy      | 16398    | active |139968391403280
postgres  | omm       | 10       |        |139968643069712
postgres  | omm       | 10       |        |139968680818448
postgres  | joe       | 16390    |        |139968563377936
(6 rows)</pre>
</div></div>
</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row1413134182714"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1641333412271"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1641333412271"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1641333412271"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1841319348279"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1841319348279"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1841319348279"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p741353462710"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p741353462710"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p741353462710"></a>Resource pool used by the user</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row1841313411273"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p14413734192716"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p14413734192716"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p14413734192716"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p10413134132714"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p10413134132714"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p10413134132714"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p54131234192719"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p54131234192719"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p54131234192719"></a>ID of a query</p>
</td>
</tr>
<tr id="en-us_topic_0283137277_en-us_topic_0237122638_row114130349271"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p11413934192713"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p11413934192713"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p11413934192713"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p24145347279"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p24145347279"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p24145347279"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137277_en-us_topic_0237122638_p1841443419270"><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1841443419270"></a><a name="en-us_topic_0283137277_en-us_topic_0237122638_p1841443419270"></a>Latest query at the backend. If <strong id="b155144718288"><a name="b155144718288"></a><a name="b155144718288"></a>state</strong> is <strong id="b1451919719287"><a name="b1451919719287"></a><a name="b1451919719287"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
</td>
</tr>
<tr id="row1084965423212"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p9849165416321"><a name="p9849165416321"></a><a name="p9849165416321"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="p684965413210"><a name="p684965413210"></a><a name="p684965413210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="p384925415323"><a name="p384925415323"></a><a name="p384925415323"></a>Unique SQL statement ID.</p>
</td>
</tr>
<tr id="row551112665818"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p1251110645816"><a name="p1251110645816"></a><a name="p1251110645816"></a>trace_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="p1751110613588"><a name="p1751110613588"></a><a name="p1751110613588"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="p18511136205819"><a name="p18511136205819"></a><a name="p18511136205819"></a>Driver-specific trace ID, which is associated with an application request.</p>
</td>
</tr>
</tbody>
</table>

