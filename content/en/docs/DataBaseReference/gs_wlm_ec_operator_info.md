# GS\_WLM\_EC\_OPERATOR\_INFO<a name="EN-US_TOPIC_0289900046"></a>

**GS\_WLM\_EC\_OPERATOR\_INFO**  records operator information after an Extension Connector job ends. If  **[enable\_resource\_record](en-us_topic_0289900033.md#en-us_topic_0283137479_en-us_topic_0237124729_en-us_topic_0059777791_s77bd1023b63c4cd489760aa33f08d1ea)**  is set to  **on**, the system imports records from  **GS\_WLM\_EC\_OPERATOR\_HISTORY**  to this system catalog every 3 minutes. This operation occupies storage space and affects performance. Only users with the  **sysadmin**  permission can query this system catalog.

**Table  1**  GS\_WLM\_EC\_OPERATOR\_INFO columns

<a name="en-us_topic_0111176227_table85181143511"></a>
<table><thead align="left"><tr id="en-us_topic_0111176227_row12518114125110"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="en-us_topic_0111176227_p7518161415512"><a name="en-us_topic_0111176227_p7518161415512"></a><a name="en-us_topic_0111176227_p7518161415512"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.2"><p id="en-us_topic_0111176227_p651816147513"><a name="en-us_topic_0111176227_p651816147513"></a><a name="en-us_topic_0111176227_p651816147513"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="59%" id="mcps1.2.4.1.3"><p id="en-us_topic_0111176227_p1351919149511"><a name="en-us_topic_0111176227_p1351919149511"></a><a name="en-us_topic_0111176227_p1351919149511"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0111176227_row155196149514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p2519314135114"><a name="en-us_topic_0111176227_p2519314135114"></a><a name="en-us_topic_0111176227_p2519314135114"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p1651921418517"><a name="en-us_topic_0111176227_p1651921418517"></a><a name="en-us_topic_0111176227_p1651921418517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p4519141415115"><a name="en-us_topic_0111176227_p4519141415115"></a><a name="en-us_topic_0111176227_p4519141415115"></a>Internal query ID used for Extension Connector statement execution</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row551921411518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p85191414155117"><a name="en-us_topic_0111176227_p85191414155117"></a><a name="en-us_topic_0111176227_p85191414155117"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p1951991455112"><a name="en-us_topic_0111176227_p1951991455112"></a><a name="en-us_topic_0111176227_p1951991455112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p3519101415516"><a name="en-us_topic_0111176227_p3519101415516"></a><a name="en-us_topic_0111176227_p3519101415516"></a>Plan node ID of the execution plan of an Extension Connector operator</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row251961411512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p10519171455119"><a name="en-us_topic_0111176227_p10519171455119"></a><a name="en-us_topic_0111176227_p10519171455119"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p10519314105112"><a name="en-us_topic_0111176227_p10519314105112"></a><a name="en-us_topic_0111176227_p10519314105112"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p751971405113"><a name="en-us_topic_0111176227_p751971405113"></a><a name="en-us_topic_0111176227_p751971405113"></a>Time when the Extension Connector operator starts to process the first data record</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row15191214175110"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p7519141412514"><a name="en-us_topic_0111176227_p7519141412514"></a><a name="en-us_topic_0111176227_p7519141412514"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p205191014155120"><a name="en-us_topic_0111176227_p205191014155120"></a><a name="en-us_topic_0111176227_p205191014155120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p1451971495114"><a name="en-us_topic_0111176227_p1451971495114"></a><a name="en-us_topic_0111176227_p1451971495114"></a>Total execution time of the Extension Connector operator (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row14519161419512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p4519181485114"><a name="en-us_topic_0111176227_p4519181485114"></a><a name="en-us_topic_0111176227_p4519181485114"></a>tuple_processed</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p2519121416514"><a name="en-us_topic_0111176227_p2519121416514"></a><a name="en-us_topic_0111176227_p2519121416514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p55195145519"><a name="en-us_topic_0111176227_p55195145519"></a><a name="en-us_topic_0111176227_p55195145519"></a>Number of elements returned by the Extension Connector operator</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row13519514115111"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p45193142511"><a name="en-us_topic_0111176227_p45193142511"></a><a name="en-us_topic_0111176227_p45193142511"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p8519151410510"><a name="en-us_topic_0111176227_p8519151410510"></a><a name="en-us_topic_0111176227_p8519151410510"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p165191114145119"><a name="en-us_topic_0111176227_p165191114145119"></a><a name="en-us_topic_0111176227_p165191114145119"></a>Minimum peak memory used by the Extension Connector operator on all DNs (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row651951425114"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p1519121413516"><a name="en-us_topic_0111176227_p1519121413516"></a><a name="en-us_topic_0111176227_p1519121413516"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p1751916147515"><a name="en-us_topic_0111176227_p1751916147515"></a><a name="en-us_topic_0111176227_p1751916147515"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p85191314135116"><a name="en-us_topic_0111176227_p85191314135116"></a><a name="en-us_topic_0111176227_p85191314135116"></a>Maximum peak memory used by the Extension Connector operator on all DNs (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row165191314175116"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p1252010141514"><a name="en-us_topic_0111176227_p1252010141514"></a><a name="en-us_topic_0111176227_p1252010141514"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p3520171413517"><a name="en-us_topic_0111176227_p3520171413517"></a><a name="en-us_topic_0111176227_p3520171413517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p15520161445117"><a name="en-us_topic_0111176227_p15520161445117"></a><a name="en-us_topic_0111176227_p15520161445117"></a>Average peak memory used by the Extension Connector operator on all DNs (unit: MB)</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row1252051419514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p19520161411513"><a name="en-us_topic_0111176227_p19520161411513"></a><a name="en-us_topic_0111176227_p19520161411513"></a>ec_status</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p967041611266"><a name="p967041611266"></a><a name="p967041611266"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p1520131411519"><a name="en-us_topic_0111176227_p1520131411519"></a><a name="en-us_topic_0111176227_p1520131411519"></a>Status of the Extension Connector job</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row1452061412518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p1052071445117"><a name="en-us_topic_0111176227_p1052071445117"></a><a name="en-us_topic_0111176227_p1052071445117"></a>ec_execute_datanode</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p1294341032617"><a name="p1294341032617"></a><a name="p1294341032617"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p185204140516"><a name="en-us_topic_0111176227_p185204140516"></a><a name="en-us_topic_0111176227_p185204140516"></a>Name of the DN executing the Extension Connector job</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row145201414185120"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p752019149519"><a name="en-us_topic_0111176227_p752019149519"></a><a name="en-us_topic_0111176227_p752019149519"></a>ec_dsn</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p1864199132618"><a name="p1864199132618"></a><a name="p1864199132618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p65207145515"><a name="en-us_topic_0111176227_p65207145515"></a><a name="en-us_topic_0111176227_p65207145515"></a>DSN used by the Extension Connector job</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row10520151445118"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p13520181445118"><a name="en-us_topic_0111176227_p13520181445118"></a><a name="en-us_topic_0111176227_p13520181445118"></a>ec_username</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p78491180263"><a name="p78491180263"></a><a name="p78491180263"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p1452031415113"><a name="en-us_topic_0111176227_p1452031415113"></a><a name="en-us_topic_0111176227_p1452031415113"></a>Username used by the Extension Connector job to access a remote database instance (the value is null if the remote database instance is SPARK.)</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row1752017141518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p12520111475115"><a name="en-us_topic_0111176227_p12520111475115"></a><a name="en-us_topic_0111176227_p12520111475115"></a>ec_query</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p189871974265"><a name="p189871974265"></a><a name="p189871974265"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0111176227_p3520111414515"><a name="en-us_topic_0111176227_p3520111414515"></a><a name="en-us_topic_0111176227_p3520111414515"></a>Statement sent by the Extension Connector job to a remote database instance</p>
</td>
</tr>
<tr id="en-us_topic_0111176227_row752012145514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0111176227_p6520181475113"><a name="en-us_topic_0111176227_p6520181475113"></a><a name="en-us_topic_0111176227_p6520181475113"></a>ec_libodbc_type</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0111176227_p155201314115112"><a name="en-us_topic_0111176227_p155201314115112"></a><a name="en-us_topic_0111176227_p155201314115112"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1110460144112"><a name="p1110460144112"></a><a name="p1110460144112"></a>Type of the unixODBC driver used by the Extension Connector job</p>
</td>
</tr>
</tbody>
</table>

