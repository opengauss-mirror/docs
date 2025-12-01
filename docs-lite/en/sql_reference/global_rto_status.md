# global\_rto\_status<a name="EN-US_TOPIC_0000001150228308"></a>

Displays log flow control information about the primary and standby nodes \(except the current node and standby DNs\).

**Table  1**  global\_rto\_status columns

<a name="table10801171214386"></a>
<table><thead align="left"><tr id="row1580101219385"><th class="cellrowborder" valign="top" width="16.03160316031603%" id="mcps1.2.4.1.1"><p id="p08016122388"><a name="p08016122388"></a><a name="p08016122388"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="11.941194119411943%" id="mcps1.2.4.1.2"><p id="p208011312193819"><a name="p208011312193819"></a><a name="p208011312193819"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="72.02720272027202%" id="mcps1.2.4.1.3"><p id="p19802101212385"><a name="p19802101212385"></a><a name="p19802101212385"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1180281283818"><td class="cellrowborder" valign="top" width="16.03160316031603%" headers="mcps1.2.4.1.1 "><p id="p128021612193813"><a name="p128021612193813"></a><a name="p128021612193813"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="11.941194119411943%" headers="mcps1.2.4.1.2 "><p id="p1980211223816"><a name="p1980211223816"></a><a name="p1980211223816"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="72.02720272027202%" headers="mcps1.2.4.1.3 "><p id="p1780241243813"><a name="p1780241243813"></a><a name="p1780241243813"></a>Node name (including the primary and standby nodes)</p>
</td>
</tr>
<tr id="row48029122388"><td class="cellrowborder" valign="top" width="16.03160316031603%" headers="mcps1.2.4.1.1 "><p id="p1280271213386"><a name="p1280271213386"></a><a name="p1280271213386"></a>rto_info</p>
</td>
<td class="cellrowborder" valign="top" width="11.941194119411943%" headers="mcps1.2.4.1.2 "><p id="p19802412183820"><a name="p19802412183820"></a><a name="p19802412183820"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="72.02720272027202%" headers="mcps1.2.4.1.3 "><p id="p10802121233818"><a name="p10802121233818"></a><a name="p10802121233818"></a>Flow control information, including the current log flow control time (unit: second) of the standby node, the expected flow control time (unit: second) specified by the GUC parameter, and the primary node sleep time (unit: μs) required to reach the expectation</p>
</td>
</tr>
</tbody>
</table>

