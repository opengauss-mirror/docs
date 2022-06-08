# SESSION\_STAT\_ACTIVITY<a name="EN-US_TOPIC_0289900870"></a>

**SESSION\_STAT\_ACTIVITY**  displays information about threads that are running on the current node.

**Table  1**  SESSION\_STAT\_ACTIVITY columns

<a name="en-us_topic_0283137255_en-us_topic_0237122637_table91910335269"></a>
<table><thead align="left"><tr id="en-us_topic_0283137255_en-us_topic_0237122637_row332215337263"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137255_en-us_topic_0237122637_p17323183342610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p17323183342610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p17323183342610"></a><strong id="b58726219132"><a name="b58726219132"></a><a name="b58726219132"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.929999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1132343362610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1132343362610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1132343362610"></a><strong id="b10562133101313"><a name="b10562133101313"></a><a name="b10562133101313"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.02%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137255_en-us_topic_0237122637_p832363319262"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p832363319262"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p832363319262"></a><strong id="b2016912411315"><a name="b2016912411315"></a><a name="b2016912411315"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1432353322617"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p332363318260"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p332363318260"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p332363318260"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1232314333260"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1232314333260"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1232314333260"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p203231133162616"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p203231133162616"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p203231133162616"></a>OID of the database that the user session connects to in the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row3323333122618"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1032433316269"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1032433316269"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1032433316269"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p33242033162615"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p33242033162615"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p33242033162615"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p18324143313264"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p18324143313264"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p18324143313264"></a>Name of the database that the user session connects to in the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1832463382615"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p123241633182618"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p123241633182618"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p123241633182618"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p632420335266"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p632420335266"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p632420335266"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p103241331264"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p103241331264"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p103241331264"></a>Thread ID of the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row2324183352611"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p732403313268"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p732403313268"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p732403313268"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p7324193312610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7324193312610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7324193312610"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p163251633122616"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p163251633122616"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p163251633122616"></a>OID of the user logged in to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row7325833142618"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p133251033182611"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p133251033182611"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p133251033182611"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p10325183302617"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p10325183302617"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p10325183302617"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p14325153352610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14325153352610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14325153352610"></a>Name of the user logged in to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row163259338261"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p6325163319265"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p6325163319265"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p6325163319265"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p7325203382619"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7325203382619"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7325203382619"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1532563372610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1532563372610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1532563372610"></a>Name of the application connected to the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row17325203322611"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1232673382611"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1232673382611"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1232673382611"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p7326193322612"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7326193322612"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7326193322612"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1232617338265"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1232617338265"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1232617338265"></a>IP address of the client connected to the backend. If this column is null, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as autovacuum.</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row9326233182616"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p17326153315267"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p17326153315267"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p17326153315267"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p232616333263"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p232616333263"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p232616333263"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p5326163372610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p5326163372610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p5326163372610"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b9976136194"><a name="b9976136194"></a><a name="b9976136194"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b2647105410218"><a name="b2647105410218"></a><a name="b2647105410218"></a>log_hostname</strong> is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row332716337265"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p73271833192615"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p73271833192615"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p73271833192615"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p6327733182619"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p6327733182619"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p6327733182619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p632743319261"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p632743319261"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p632743319261"></a>TCP port number that the client uses for communication with this backend (<strong id="b62031777223"><a name="b62031777223"></a><a name="b62031777223"></a>-1</strong> if a Unix socket is used)</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row8327233172611"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p16327733112612"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p16327733112612"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p16327733112612"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p132713322615"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p132713322615"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p132713322615"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p14328233172615"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14328233172615"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14328233172615"></a>Time when this process was started, that is, when the client connected to the server</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row2328033132618"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1132873312617"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1132873312617"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1132873312617"></a>xact_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p432883332618"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p432883332618"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p432883332618"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p2032893302616"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p2032893302616"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p2032893302616"></a>Time when current transaction was started (null if no transaction is active). If the current query is the first of its transaction, the value of this column is the same as that of the <strong id="b1021414507226"><a name="b1021414507226"></a><a name="b1021414507226"></a>query_start</strong> column.</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1132833320265"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p183281633112618"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p183281633112618"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p183281633112618"></a>query_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1632843352612"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1632843352612"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1632843352612"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p11328113322619"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p11328113322619"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p11328113322619"></a>Time when the currently active query was started, or time when the last query was started if <strong id="b9642158102218"><a name="b9642158102218"></a><a name="b9642158102218"></a>state</strong> is not <strong id="b964745814222"><a name="b964745814222"></a><a name="b964745814222"></a>active</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1328533112617"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p15328113319262"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p15328113319262"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p15328113319262"></a>state_change</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p13294333266"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p13294333266"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p13294333266"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p7329133122620"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7329133122620"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7329133122620"></a>Time when the <strong id="b449929122315"><a name="b449929122315"></a><a name="b449929122315"></a>state</strong> was last changed</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1832983302617"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p43305335268"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p43305335268"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p43305335268"></a>waiting</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p333093318263"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p333093318263"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p333093318263"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p20330113310266"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p20330113310266"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p20330113310266"></a>Whether the backend is currently waiting on a lock. If yes, the value is <strong id="b791114162312"><a name="b791114162312"></a><a name="b791114162312"></a>true</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row733093313267"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p133301733192615"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p133301733192615"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p133301733192615"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1833083392610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1833083392610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1833083392610"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_p1846712271212"><a name="en-us_topic_0283137255_p1846712271212"></a><a name="en-us_topic_0283137255_p1846712271212"></a>Unsupported currently.</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1733163315267"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p14331833132613"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14331833132613"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14331833132613"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p133314338262"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p133314338262"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p133314338262"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137255_en-us_topic_0237122637_p7331133182619"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7331133182619"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p7331133182619"></a>Overall status of this backend. The value must be one of the following:<a name="en-us_topic_0283137255_en-us_topic_0237122637_ul10331103302614"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_ul10331103302614"></a><ul id="en-us_topic_0283137255_en-us_topic_0237122637_ul10331103302614"><li><strong id="b19532304243"><a name="b19532304243"></a><a name="b19532304243"></a>active</strong>: The backend is executing a query.</li><li><strong id="b162919312247"><a name="b162919312247"></a><a name="b162919312247"></a>idle</strong>: The backend is waiting for a new client command.</li><li><strong id="b11447619246"><a name="b11447619246"></a><a name="b11447619246"></a>idle in transaction</strong>: The backend is in a transaction, but is not currently executing a query.</li><li><strong id="b102242011202416"><a name="b102242011202416"></a><a name="b102242011202416"></a>idle in transaction (aborted)</strong>: This state is similar to <strong id="b1722971111243"><a name="b1722971111243"></a><a name="b1722971111243"></a>idle in transaction</strong>, except that one of the statements in the transaction caused an error.</li><li><strong id="b18879152718252"><a name="b18879152718252"></a><a name="b18879152718252"></a>fastpath function call</strong>: The backend is executing a fast-path function.</li><li><strong id="b156811035172517"><a name="b156811035172517"></a><a name="b156811035172517"></a>disabled</strong>: This state is reported if <strong id="b268253552513"><a name="b268253552513"></a><a name="b268253552513"></a>track_activities</strong> is disabled in this backend.<div class="note" id="en-us_topic_0283137255_en-us_topic_0237122637_note17731530182016"><a name="en-us_topic_0283137255_en-us_topic_0237122637_note17731530182016"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_note17731530182016"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283137255_en-us_topic_0237122637_p83328331263"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p83328331263"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p83328331263"></a>Common users can view their own session status only. The state information of other accounts is empty. For example, after the <strong id="b3855949172510"><a name="b3855949172510"></a><a name="b3855949172510"></a>judy</strong> user is connected to the database, the state information of the <strong id="b1086004912514"><a name="b1086004912514"></a><a name="b1086004912514"></a>joe</strong> user and the initial user <strong id="b8860134912511"><a name="b8860134912511"></a><a name="b8860134912511"></a>omm</strong> in <strong id="b1786164916258"><a name="b1786164916258"></a><a name="b1786164916258"></a>pg_stat_activity</strong> is empty.</p>
<pre class="screen" id="en-us_topic_0283137255_screen1919115395114"><a name="en-us_topic_0283137255_screen1919115395114"></a><a name="en-us_topic_0283137255_screen1919115395114"></a>openGauss=# SELECT datname, usename, usesysid,state,pid FROM pg_stat_activity;
datname    | usename | usesysid | state    |       pid
----------+---------+----------+--------+-----------------postgres  | omm       | 10       |        |139968752121616
postgres  | omm       | 10       |        |139968903116560
db_tpcds  | judy      | 16398    | active |139968391403280
postgres  | omm       | 10       |          |139968643069712
postgres  | omm       | 10       |        |139968680818448
postgres  | joe       | 16390    |        |139968563377936
(6 rows)</pre>
</div></div>
</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row6332833132615"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p11333193392615"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p11333193392615"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p11333193392615"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1333317335265"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1333317335265"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1333317335265"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p14333153302620"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14333153302620"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p14333153302620"></a>Resource pool used by the user</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1533303322610"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p113331733152612"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p113331733152612"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p113331733152612"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1233383319263"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1233383319263"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1233383319263"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p15333633142610"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p15333633142610"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p15333633142610"></a>ID of a query</p>
</td>
</tr>
<tr id="en-us_topic_0283137255_en-us_topic_0237122637_row1533343322611"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p9333433192617"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p9333433192617"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p9333433192617"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1633363322614"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1633363322614"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1633363322614"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137255_en-us_topic_0237122637_p1233443320267"><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1233443320267"></a><a name="en-us_topic_0283137255_en-us_topic_0237122637_p1233443320267"></a>Latest query at the backend. If <strong id="b1281416610265"><a name="b1281416610265"></a><a name="b1281416610265"></a>state</strong> is <strong id="b28191963264"><a name="b28191963264"></a><a name="b28191963264"></a>active</strong>, this column shows the ongoing query. In all other states, it shows the last query that was executed.</p>
</td>
</tr>
<tr id="row179258132818"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p1091258182815"><a name="p1091258182815"></a><a name="p1091258182815"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="p1691858142814"><a name="p1691858142814"></a><a name="p1691858142814"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="p139165810282"><a name="p139165810282"></a><a name="p139165810282"></a>Unique SQL statement ID.</p>
</td>
</tr>
<tr id="row99061851103815"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p2907135123818"><a name="p2907135123818"></a><a name="p2907135123818"></a>trace_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.929999999999996%" headers="mcps1.2.4.1.2 "><p id="p790705120388"><a name="p790705120388"></a><a name="p790705120388"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="p690785119384"><a name="p690785119384"></a><a name="p690785119384"></a>Driver-specific trace ID, which is associated with an application request.</p>
</td>
</tr>
</tbody>
</table>

