# AI\_SERVER<a name="EN-US_TOPIC_0000001106449240"></a>

AI\_SERVER is an independent from the anomaly\_detection feature. In addition to the data collection function of the anomaly\_detection feature, the collection type, collection item, and data storage mode are added to the AI\_SERVER feature. The AI\_SERVER feature is used only for data collection and will be integrated into the anomaly\_detection feature in the future. This feature includes the server and agent components. The agent must be deployed on the database node for data collection, while the server is deployed on an independent node for data collection and storage.

The data storage modes include  **sqlite**,  **mongodb**, and  **influxdb**.

[Table 1](#table174063254539)  describes the collection items.

**Table  1**  Collection items

<a name="table174063254539"></a>
<table><thead align="left"><tr id="row19407152515320"><th class="cellrowborder" valign="top" width="13.451345134513451%" id="mcps1.2.4.1.1"><p id="p140752515531"><a name="p140752515531"></a><a name="p140752515531"></a>Collection Type</p>
</th>
<th class="cellrowborder" valign="top" width="20.95209520952095%" id="mcps1.2.4.1.2"><p id="p440752517538"><a name="p440752517538"></a><a name="p440752517538"></a>Collection Item</p>
</th>
<th class="cellrowborder" valign="top" width="65.5965596559656%" id="mcps1.2.4.1.3"><p id="p24071425135311"><a name="p24071425135311"></a><a name="p24071425135311"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row14079256533"><td class="cellrowborder" rowspan="5" valign="top" width="13.451345134513451%" headers="mcps1.2.4.1.1 "><p id="p3407192513535"><a name="p3407192513535"></a><a name="p3407192513535"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="20.95209520952095%" headers="mcps1.2.4.1.2 "><p id="p640832535314"><a name="p640832535314"></a><a name="p640832535314"></a>work_mem</p>
</td>
<td class="cellrowborder" valign="top" width="65.5965596559656%" headers="mcps1.2.4.1.3 "><p id="p17408142520539"><a name="p17408142520539"></a><a name="p17408142520539"></a>GUC parameter related to the database memory. This parameter is used to check whether the allocated space is sufficient for SQL statements involving sorting tasks.</p>
</td>
</tr>
<tr id="row19408162514533"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p840872505318"><a name="p840872505318"></a><a name="p840872505318"></a>shared_buffers</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p74081925125310"><a name="p74081925125310"></a><a name="p74081925125310"></a>GUC parameter related to the database memory. Improper setting of <strong id="b55651952124814"><a name="b55651952124814"></a><a name="b55651952124814"></a>shared_buffer</strong> will deteriorate the database performance.</p>
</td>
</tr>
<tr id="row1840811254537"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2408325195310"><a name="p2408325195310"></a><a name="p2408325195310"></a>max_connections</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p10409152575316"><a name="p10409152575316"></a><a name="p10409152575316"></a>Maximum number of database connections.</p>
</td>
</tr>
<tr id="row74091925135316"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2040932515537"><a name="p2040932515537"></a><a name="p2040932515537"></a>current connections</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1440952519539"><a name="p1440952519539"></a><a name="p1440952519539"></a>Number of current database connections.</p>
</td>
</tr>
<tr id="row19409182575315"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p20409132514536"><a name="p20409132514536"></a><a name="p20409132514536"></a>qps</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p840911254537"><a name="p840911254537"></a><a name="p840911254537"></a>Database performance metrics:</p>
</td>
</tr>
<tr id="row9409152565319"><td class="cellrowborder" rowspan="6" valign="top" width="13.451345134513451%" headers="mcps1.2.4.1.1 "><p id="p18409725145320"><a name="p18409725145320"></a><a name="p18409725145320"></a>os</p>
</td>
<td class="cellrowborder" valign="top" width="20.95209520952095%" headers="mcps1.2.4.1.2 "><p id="p1740992516537"><a name="p1740992516537"></a><a name="p1740992516537"></a>cpu usage</p>
</td>
<td class="cellrowborder" valign="top" width="65.5965596559656%" headers="mcps1.2.4.1.3 "><p id="p540902535311"><a name="p540902535311"></a><a name="p540902535311"></a>CPU usage.</p>
</td>
</tr>
<tr id="row10410122595311"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1641062545310"><a name="p1641062545310"></a><a name="p1641062545310"></a>memory usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p3410125125313"><a name="p3410125125313"></a><a name="p3410125125313"></a>Memory usage.</p>
</td>
</tr>
<tr id="row531462825718"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p11316628165711"><a name="p11316628165711"></a><a name="p11316628165711"></a>io wait</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p431612813574"><a name="p431612813574"></a><a name="p431612813574"></a>I/O wait event.</p>
</td>
</tr>
<tr id="row1974623455715"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p27466345571"><a name="p27466345571"></a><a name="p27466345571"></a>io write</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p47471334155713"><a name="p47471334155713"></a><a name="p47471334155713"></a>Data disk write throughput.</p>
</td>
</tr>
<tr id="row1218013574576"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1618125795711"><a name="p1618125795711"></a><a name="p1618125795711"></a>io read</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p7181957135719"><a name="p7181957135719"></a><a name="p7181957135719"></a>Data disk read throughput.</p>
</td>
</tr>
<tr id="row14770140115813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1177020015587"><a name="p1177020015587"></a><a name="p1177020015587"></a>disk used</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p277010015817"><a name="p277010015817"></a><a name="p277010015817"></a>Size of the used disk space.</p>
</td>
</tr>
</tbody>
</table>

For details about the deployment mode, see  [AI\_MANAGER](ai_manager.md).

