# STATEMENT\_IOSTAT\_COMPLEX\_RUNTIME<a name="EN-US_TOPIC_0289900040"></a>

**STATEMENT\_IOSTAT\_COMPLEX\_RUNTIME**  displays I/O load management information about ongoing jobs executed by the current user. IOPS is counted by ones for column storage and by 10 thousands for row storage.

**Table  1**  STATEMENT\_IOSTAT\_COMPLEX\_RUNTIME columns

<a name="en-us_topic_0283137703_en-us_topic_0237122645_table44251753205113"></a>
<table><thead align="left"><tr id="en-us_topic_0283137703_en-us_topic_0237122645_row74251253135114"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137703_en-us_topic_0237122645_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="en-us_topic_0283137703_en-us_topic_0237122645_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137703_en-us_topic_0237122645_p6534121711119"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p6534121711119"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p6534121711119"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="62%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137703_en-us_topic_0237122645_p3600141915115"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p3600141915115"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p3600141915115"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137703_en-us_topic_0237122645_row342520531514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p12493182175917"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p12493182175917"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p12493182175917"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p188712711599"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p188712711599"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p188712711599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p649734055214"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p649734055214"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p649734055214"></a>Job ID</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row1542575314519"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p105521817165815"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p105521817165815"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p105521817165815"></a>mincurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p4284141315919"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p4284141315919"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p4284141315919"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p1129655119"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1129655119"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1129655119"></a>Minimum I/O of the job across database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row1942515385119"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p205811124195817"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p205811124195817"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p205811124195817"></a>maxcurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p1497640125210"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1497640125210"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1497640125210"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p330412591709"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p330412591709"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p330412591709"></a>Maximum I/O of the job across database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row7425253165116"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p014123616582"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p014123616582"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p014123616582"></a>minpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p1955701710595"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1955701710595"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1955701710595"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p13482355103"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p13482355103"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p13482355103"></a>Minimum peak I/O of the current job across database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row17425145365113"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p51961544205813"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p51961544205813"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p51961544205813"></a>maxpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p8101719175920"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p8101719175920"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p8101719175920"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p01301251804"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p01301251804"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p01301251804"></a>Maximum peak I/O of the current job across database nodes</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row1425105316514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p97950165816"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p97950165816"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p97950165816"></a>io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p204971840175217"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p204971840175217"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p204971840175217"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p150516461602"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p150516461602"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p150516461602"></a><strong id="en-us_topic_0237122645_b615010919120"><a name="en-us_topic_0237122645_b615010919120"></a><a name="en-us_topic_0237122645_b615010919120"></a>io_limits</strong> set for the job</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row742625316512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p7509655105820"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p7509655105820"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p7509655105820"></a>io_priority</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p1698824212593"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1698824212593"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p1698824212593"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p4879421203"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p4879421203"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p4879421203"></a><strong id="en-us_topic_0237122645_b523231717127"><a name="en-us_topic_0237122645_b523231717127"></a><a name="en-us_topic_0237122645_b523231717127"></a>io_priority</strong> set for the job</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row712214118017"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p141231014013"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p141231014013"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p141231014013"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p812341404"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p812341404"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p812341404"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p20123312010"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p20123312010"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p20123312010"></a>Job</p>
</td>
</tr>
<tr id="en-us_topic_0283137703_en-us_topic_0237122645_row99511941113518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p495111417356"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p495111417356"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p495111417356"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p14951134117359"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p14951134117359"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p14951134117359"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137703_en-us_topic_0237122645_p14951241113511"><a name="en-us_topic_0283137703_en-us_topic_0237122645_p14951241113511"></a><a name="en-us_topic_0283137703_en-us_topic_0237122645_p14951241113511"></a>Logical <span id="text179123126198"><a name="text179123126198"></a><a name="text179123126198"></a>openGauss</span> of the user running the job</p>
</td>
</tr>
<tr id="row1596263215916"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p1496293235913"><a name="p1496293235913"></a><a name="p1496293235913"></a>curr_io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p18962113235912"><a name="p18962113235912"></a><a name="p18962113235912"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p996219329599"><a name="p996219329599"></a><a name="p996219329599"></a>Real-time <strong id="b1424272310161"><a name="b1424272310161"></a><a name="b1424272310161"></a>io_limits</strong> value when <strong id="b924832311164"><a name="b924832311164"></a><a name="b924832311164"></a>io_priority</strong> is used to control I/Os</p>
</td>
</tr>
</tbody>
</table>

