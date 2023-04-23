# GS\_WLM\_OPERATOR\_INFO<a name="EN-US_TOPIC_0289900540"></a>

**GS\_WLM\_OPERATOR\_INFO**  displays records about operators of completed jobs. The data is dumped from the kernel to the system catalog. This system catalog can be queried by users with the  **sysadmin**  permission only in Postgres.

**Table  1**  GS\_WLM\_OPERATOR\_INFO columns

<a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_table85181143511"></a>
<table><thead align="left"><tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row12518114125110"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7518161415512"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7518161415512"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7518161415512"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p651816147513"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p651816147513"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p651816147513"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="59%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1351919149511"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1351919149511"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1351919149511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row155196149514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p2519314135114"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p2519314135114"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p2519314135114"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1651921418517"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1651921418517"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1651921418517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4519141415115"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4519141415115"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4519141415115"></a>Internal query ID used for statement execution</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row3519181415112"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p14519914195120"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p14519914195120"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p14519914195120"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1651971414515"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1651971414515"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1651971414515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p651921410511"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p651921410511"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p651921410511"></a>Thread ID of the backend</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row551921411518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85191414155117"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85191414155117"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85191414155117"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1951991455112"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1951991455112"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1951991455112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3519101415516"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3519101415516"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3519101415516"></a>Plan node ID of the execution plan of a query</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row17519614175113"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p5519131418511"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p5519131418511"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p5519131418511"></a>plan_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1951971455118"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1951971455118"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1951971455118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1825284518537"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1825284518537"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1825284518537"></a>Name of the operator corresponding to the plan node ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row251961411512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p10519171455119"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p10519171455119"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p10519171455119"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p10519314105112"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p10519314105112"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p10519314105112"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p751971405113"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p751971405113"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p751971405113"></a>Time when the operator starts to process the first data record</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row15191214175110"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7519141412514"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7519141412514"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7519141412514"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p205191014155120"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p205191014155120"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p205191014155120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1451971495114"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1451971495114"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1451971495114"></a>Total execution time of the operator, in ms</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row15519614165115"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1451911141518"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1451911141518"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1451911141518"></a>query_dop</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7519514155119"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7519514155119"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p7519514155119"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p8519111485115"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p8519111485115"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p8519111485115"></a>DOP of the operator</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row8519914145114"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1151971405113"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1151971405113"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1151971405113"></a>estimated_rows</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p65191314155115"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p65191314155115"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p65191314155115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p15519101411512"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p15519101411512"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p15519101411512"></a>Number of rows estimated by the optimizer</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row14519161419512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4519181485114"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4519181485114"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4519181485114"></a>tuple_processed</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p2519121416514"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p2519121416514"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p2519121416514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p55195145519"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p55195145519"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p55195145519"></a>Number of elements returned by the operator</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row13519514115111"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p45193142511"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p45193142511"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p45193142511"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p8519151410510"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p8519151410510"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p8519151410510"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p165191114145119"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p165191114145119"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p165191114145119"></a>Minimum peak memory used by the operator<span id="en-us_topic_0283136785_en-us_topic_0237122263_text1359665863613"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1359665863613"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1359665863613"></a> on database nodes</span> (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row651951425114"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1519121413516"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1519121413516"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1519121413516"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1751916147515"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1751916147515"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1751916147515"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85191314135116"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85191314135116"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85191314135116"></a>Maximum peak memory used by the operator<span id="en-us_topic_0283136785_en-us_topic_0237122263_text1118713053712"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1118713053712"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1118713053712"></a> on database nodes</span> (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row165191314175116"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1252010141514"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1252010141514"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1252010141514"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3520171413517"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3520171413517"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3520171413517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p15520161445117"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p15520161445117"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p15520161445117"></a>Average peak memory used by the operator on database nodes (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row1021234211415"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p162135421546"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p162135421546"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p162135421546"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p02131442948"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p02131442948"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p02131442948"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1721315421243"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1721315421243"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1721315421243"></a>Memory usage skew of the operator among <span id="text292011176252"><a name="text292011176252"></a><a name="text292011176252"></a>database nodes</span></p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row85201814195111"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1752031425113"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1752031425113"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1752031425113"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p952021419512"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p952021419512"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p952021419512"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752071475115"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752071475115"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752071475115"></a>Minimum spilled data among database nodes when a spill occurs (unit: MB) (default value: <strong id="b1302201711913"><a name="b1302201711913"></a><a name="b1302201711913"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row25206142513"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1952021418517"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1952021418517"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1952021418517"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452018144513"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452018144513"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452018144513"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p185201314115112"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p185201314115112"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p185201314115112"></a>Maximum spilled data <span id="en-us_topic_0283136785_en-us_topic_0237122263_text31158483719"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text31158483719"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text31158483719"></a>among database nodes </span>when a spill occurs (unit: MB) (default value: <strong id="b19726113172616"><a name="b19726113172616"></a><a name="b19726113172616"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row125201914115112"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1352081445118"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1352081445118"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1352081445118"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752061414517"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752061414517"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752061414517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p155201514155118"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p155201514155118"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p155201514155118"></a>Average spilled data <span id="en-us_topic_0283136785_en-us_topic_0237122263_text1234415519372"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1234415519372"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1234415519372"></a>among database nodes </span>when a spill occurs (unit: MB) (default value: <strong id="b1944917251798"><a name="b1944917251798"></a><a name="b1944917251798"></a>0</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row1252051419514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p19520161411513"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p19520161411513"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p19520161411513"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85201141517"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85201141517"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p85201141517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1520131411519"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1520131411519"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1520131411519"></a>Database node spill skew when a spill occurs</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row1452061412518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1052071445117"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1052071445117"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1052071445117"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p145200142510"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p145200142510"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p145200142510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p185204140516"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p185204140516"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p185204140516"></a>Minimum execution time of the operator <span id="en-us_topic_0283136785_en-us_topic_0237122263_text28601461378"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text28601461378"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text28601461378"></a>on database nodes </span>(unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row145201414185120"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752019149519"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752019149519"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p752019149519"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p17520614165111"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p17520614165111"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p17520614165111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p65207145515"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p65207145515"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p65207145515"></a>Maximum execution time of the operator <span id="en-us_topic_0283136785_en-us_topic_0237122263_text1837428123715"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1837428123715"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text1837428123715"></a>on database nodes </span>(unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row10520151445118"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p13520181445118"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p13520181445118"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p13520181445118"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1852061414513"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1852061414513"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1852061414513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452031415113"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452031415113"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452031415113"></a>Total execution time of the operator on <span id="en-us_topic_0283136785_en-us_topic_0237122263_text88683916376"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text88683916376"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text88683916376"></a>database nodes </span>(unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row1752017141518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p12520111475115"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p12520111475115"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p12520111475115"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452061412511"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452061412511"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p1452061412511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3520111414515"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3520111414515"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p3520111414515"></a>Execution time skew <span id="en-us_topic_0283136785_en-us_topic_0237122263_text896912501438"><a name="en-us_topic_0283136785_en-us_topic_0237122263_text896912501438"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_text896912501438"></a>among database nodes</span></p>
</td>
</tr>
<tr id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_row752012145514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p6520181475113"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p6520181475113"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p6520181475113"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p155201314115112"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p155201314115112"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p155201314115112"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4479161682718"><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4479161682718"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_en-us_topic_0111176227_p4479161682718"></a>Warning. The following warnings are displayed:</p>
<a name="en-us_topic_0283136785_en-us_topic_0237122263_ul0414933122715"></a><a name="en-us_topic_0283136785_en-us_topic_0237122263_ul0414933122715"></a><ul id="en-us_topic_0283136785_en-us_topic_0237122263_ul0414933122715"><li>Sort/SetOp/HashAgg/HashJoin spill</li><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</td>
</tr>
</tbody>
</table>

