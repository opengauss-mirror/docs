# PG\_SESSION\_IOSTAT<a name="EN-US_TOPIC_0000001151882223"></a>

**PG\_SESSION\_IOSTAT**  shows I/O load management information about the task currently executed by the user. Only users with the  **sysadmin**  or  **monitor admin**  permission can query this view.

IOPS is counted by ones for column store and by 10 thousands for row store.

**Table  1**  PG\_SESSION\_IOSTAT columns

<a name="table44251753205113"></a>
<table><thead align="left"><tr id="row74251253135114"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16%" id="mcps1.2.4.1.2"><p id="p6534121711119"><a name="p6534121711119"></a><a name="p6534121711119"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="62%" id="mcps1.2.4.1.3"><p id="p3600141915115"><a name="p3600141915115"></a><a name="p3600141915115"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row342520531514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p12493182175917"><a name="p12493182175917"></a><a name="p12493182175917"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p188712711599"><a name="p188712711599"></a><a name="p188712711599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p649734055214"><a name="p649734055214"></a><a name="p649734055214"></a>Job ID</p>
</td>
</tr>
<tr id="row1542575314519"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p105521817165815"><a name="p105521817165815"></a><a name="p105521817165815"></a>mincurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p4284141315919"><a name="p4284141315919"></a><a name="p4284141315919"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p1129655119"><a name="p1129655119"></a><a name="p1129655119"></a>Minimum I/O of the job across database instances</p>
</td>
</tr>
<tr id="row1942515385119"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p205811124195817"><a name="p205811124195817"></a><a name="p205811124195817"></a>maxcurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1497640125210"><a name="p1497640125210"></a><a name="p1497640125210"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p330412591709"><a name="p330412591709"></a><a name="p330412591709"></a>Maximum I/O of the job across database instances</p>
</td>
</tr>
<tr id="row7425253165116"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p014123616582"><a name="p014123616582"></a><a name="p014123616582"></a>minpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1955701710595"><a name="p1955701710595"></a><a name="p1955701710595"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p13482355103"><a name="p13482355103"></a><a name="p13482355103"></a>Minimum peak I/O of the current job across database instances</p>
</td>
</tr>
<tr id="row17425145365113"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p51961544205813"><a name="p51961544205813"></a><a name="p51961544205813"></a>maxpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p8101719175920"><a name="p8101719175920"></a><a name="p8101719175920"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p01301251804"><a name="p01301251804"></a><a name="p01301251804"></a>Maximum peak I/O of the current job across database instances</p>
</td>
</tr>
<tr id="row1425105316514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p97950165816"><a name="p97950165816"></a><a name="p97950165816"></a>io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p204971840175217"><a name="p204971840175217"></a><a name="p204971840175217"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p150516461602"><a name="p150516461602"></a><a name="p150516461602"></a><strong id="b143439219506"><a name="b143439219506"></a><a name="b143439219506"></a>io_limits</strong> set for the job</p>
</td>
</tr>
<tr id="row742625316512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p7509655105820"><a name="p7509655105820"></a><a name="p7509655105820"></a>io_priority</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1698824212593"><a name="p1698824212593"></a><a name="p1698824212593"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p4879421203"><a name="p4879421203"></a><a name="p4879421203"></a><strong id="b16283535204011"><a name="b16283535204011"></a><a name="b16283535204011"></a>io_priority</strong> set for the job</p>
</td>
</tr>
<tr id="row712214118017"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p141231014013"><a name="p141231014013"></a><a name="p141231014013"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p812341404"><a name="p812341404"></a><a name="p812341404"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p20123312010"><a name="p20123312010"></a><a name="p20123312010"></a>Job</p>
</td>
</tr>
<tr id="row99511941113518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p495111417356"><a name="p495111417356"></a><a name="p495111417356"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p14951134117359"><a name="p14951134117359"></a><a name="p14951134117359"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p14951241113511"><a name="p14951241113511"></a><a name="p14951241113511"></a>Unsupported currently</p>
</td>
</tr>
<tr id="row81239208537"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p31231520115320"><a name="p31231520115320"></a><a name="p31231520115320"></a>curr_io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1123192055315"><a name="p1123192055315"></a><a name="p1123192055315"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p19123102095313"><a name="p19123102095313"></a><a name="p19123102095313"></a>Real-time <strong id="b1138370165917"><a name="b1138370165917"></a><a name="b1138370165917"></a>io_limits</strong> value when <strong id="b103891016592"><a name="b103891016592"></a><a name="b103891016592"></a>io_priority</strong> is used to control I/Os</p>
</td>
</tr>
</tbody>
</table>

