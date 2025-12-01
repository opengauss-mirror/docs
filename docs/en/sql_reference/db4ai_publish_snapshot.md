# DB4AI.PUBLISH\_SNAPSHOT<a name="EN-US_TOPIC_0000001149551354"></a>

**PUBLISH\_SNAPSHOT**  publishes snapshots for the DB4AI feature. You can invoke  **PUBLISH SNAPSHOT**  to implement this function.

**Table  1**  DB4AI.PUBLISH\_SNAPSHOT input parameters and return values

<a name="table1293823663517"></a>
<table><thead align="left"><tr id="row693863617358"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p993823611357"><a name="p993823611357"></a><a name="p993823611357"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p15938173613350"><a name="p15938173613350"></a><a name="p15938173613350"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1993893633517"><a name="p1993893633517"></a><a name="p1993893633517"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row79381836203510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p147301565368"><a name="p147301565368"></a><a name="p147301565368"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p159381336103512"><a name="p159381336103512"></a><a name="p159381336103512"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p169381236173517"><a name="p169381236173517"></a><a name="p169381236173517"></a>Name of the schema storing snapshots. The default value is the current user or <strong id="b112371352316"><a name="b112371352316"></a><a name="b112371352316"></a>PUBLIC</strong>.</p>
</td>
</tr>
<tr id="row193883614359"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p281718943610"><a name="p281718943610"></a><a name="p281718943610"></a>i_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9938936193511"><a name="p9938936193511"></a><a name="p9938936193511"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17938133613519"><a name="p17938133613519"></a><a name="p17938133613519"></a>Snapshot name</p>
</td>
</tr>
<tr id="row93018130364"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11594419103613"><a name="p11594419103613"></a><a name="p11594419103613"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p193071316368"><a name="p193071316368"></a><a name="p193071316368"></a>OUT db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p830113113617"><a name="p830113113617"></a><a name="p830113113617"></a>Result</p>
</td>
</tr>
</tbody>
</table>

