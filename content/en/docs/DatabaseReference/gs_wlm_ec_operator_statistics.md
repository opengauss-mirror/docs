# GS\_WLM\_EC\_OPERATOR\_STATISTICS<a name="EN-US_TOPIC_0000001163041099"></a>

**GS\_WLM\_EC\_OPERATOR\_STATISTICS**  displays operators of the Extension Connector jobs that are being executed by the current user. Only users with the  **sysadmin**  permission can query this view.

**Table  1**  GS\_WLM\_EC\_OPERATOR\_STATISTICS columns

<a name="table33042210324"></a>
<table><thead align="left"><tr id="row4340721123215"><th class="cellrowborder" valign="top" width="24.310000000000002%" id="mcps1.2.4.1.1"><p id="p13341202173211"><a name="p13341202173211"></a><a name="p13341202173211"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="23.119999999999997%" id="mcps1.2.4.1.2"><p id="p93411221173212"><a name="p93411221173212"></a><a name="p93411221173212"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="52.56999999999999%" id="mcps1.2.4.1.3"><p id="p203416212324"><a name="p203416212324"></a><a name="p203416212324"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1734172133218"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p12341122153218"><a name="p12341122153218"></a><a name="p12341122153218"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p634102193212"><a name="p634102193212"></a><a name="p634102193212"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p17341192163213"><a name="p17341192163213"></a><a name="p17341192163213"></a>Internal query ID used for Extension Connector statement execution</p>
</td>
</tr>
<tr id="row7341112163218"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p1341421123215"><a name="p1341421123215"></a><a name="p1341421123215"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p83411921203214"><a name="p83411921203214"></a><a name="p83411921203214"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p83415218327"><a name="p83415218327"></a><a name="p83415218327"></a>Plan node ID of the execution plan of an Extension Connector operator</p>
</td>
</tr>
<tr id="row123411821133214"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p18341172153215"><a name="p18341172153215"></a><a name="p18341172153215"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p1341192133210"><a name="p1341192133210"></a><a name="p1341192133210"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p16341321193218"><a name="p16341321193218"></a><a name="p16341321193218"></a>Time when the Extension Connector operator starts to process the first data record</p>
</td>
</tr>
<tr id="row2341921123213"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p1334110213326"><a name="p1334110213326"></a><a name="p1334110213326"></a>ec_status</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p18341921193216"><a name="p18341921193216"></a><a name="p18341921193216"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p1341102173217"><a name="p1341102173217"></a><a name="p1341102173217"></a>Status of an Extension Connector job</p>
<a name="ul23411421183217"></a><a name="ul23411421183217"></a><ul id="ul23411421183217"><li><strong id="b399552918356"><a name="b399552918356"></a><a name="b399552918356"></a>EC_STATUS_INIT</strong>: initialized</li><li><strong id="b435973412353"><a name="b435973412353"></a><a name="b435973412353"></a>EC_STATUS_CONNECTED</strong>: connected</li><li><strong id="b144291438173517"><a name="b144291438173517"></a><a name="b144291438173517"></a>EC_STATUS_EXECUTED</strong>: executed</li><li><strong id="b893144018353"><a name="b893144018353"></a><a name="b893144018353"></a>EC_STATUS_FETCHING</strong>: fetching</li><li><strong id="b4491345123512"><a name="b4491345123512"></a><a name="b4491345123512"></a>EC_STATUS_END</strong>: ended</li></ul>
</td>
</tr>
<tr id="row834110217323"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p16341021103212"><a name="p16341021103212"></a><a name="p16341021103212"></a>ec_execute_datanode</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p23410217322"><a name="p23410217322"></a><a name="p23410217322"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p8341122110328"><a name="p8341122110328"></a><a name="p8341122110328"></a>Name of the DN executing an Extension Connector job</p>
</td>
</tr>
<tr id="row1134118211328"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p334115214326"><a name="p334115214326"></a><a name="p334115214326"></a>ec_dsn</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p834120211324"><a name="p834120211324"></a><a name="p834120211324"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p334172163213"><a name="p334172163213"></a><a name="p334172163213"></a>DSN used by an Extension Connector job</p>
</td>
</tr>
<tr id="row12341202117323"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p15342821183213"><a name="p15342821183213"></a><a name="p15342821183213"></a>ec_username</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p143426215325"><a name="p143426215325"></a><a name="p143426215325"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p17342122116322"><a name="p17342122116322"></a><a name="p17342122116322"></a>Username used by an Extension Connector job to access a remote database instance (the value is null if the remote cluster type is SPARK.)</p>
</td>
</tr>
<tr id="row634211212328"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p934222103218"><a name="p934222103218"></a><a name="p934222103218"></a>ec_query</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p3342621123215"><a name="p3342621123215"></a><a name="p3342621123215"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p10342102193210"><a name="p10342102193210"></a><a name="p10342102193210"></a>Statement sent by an Extension Connector job to a remote database instance</p>
</td>
</tr>
<tr id="row123421214326"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p18342122163210"><a name="p18342122163210"></a><a name="p18342122163210"></a>ec_libodbc_type</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p1534220214324"><a name="p1534220214324"></a><a name="p1534220214324"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p1634272112327"><a name="p1634272112327"></a><a name="p1634272112327"></a>Type of the unixODBC driver used by an Extension Connector job</p>
<a name="ul534252113216"></a><a name="ul534252113216"></a><ul id="ul534252113216"><li>Type 1: corresponds to <strong id="b3518184193812"><a name="b3518184193812"></a><a name="b3518184193812"></a>libodbc.so.1</strong>.</li><li>Type 2: corresponds to <strong id="b121618712388"><a name="b121618712388"></a><a name="b121618712388"></a>libodbc.so.2</strong>.</li></ul>
</td>
</tr>
<tr id="row143426219326"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p1434242173218"><a name="p1434242173218"></a><a name="p1434242173218"></a>ec_fetch_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p2342122114329"><a name="p2342122114329"></a><a name="p2342122114329"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p103425211327"><a name="p103425211327"></a><a name="p103425211327"></a>Number of data records processed by an Extension Connector job</p>
</td>
</tr>
</tbody>
</table>

