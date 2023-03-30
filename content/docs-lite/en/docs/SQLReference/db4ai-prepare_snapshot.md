# DB4AI.PREPARE\_SNAPSHOT<a name="EN-US_TOPIC_0000001149391558"></a>

**PREPARE\_SNAPSHOT**  prepares data for model training and interprets snapshots for the DB4AI feature. A snapshot provides a complete sequence of data and documents that are changed by all applications. You can invoke  **PREPARE SNAPSHOT**  to implement this function.

**Table  1**  DB4AI.PREPARE\_SNAPSHOT input parameters and return values

<a name="table1288721532312"></a>
<table><thead align="left"><tr id="row7887815142316"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12786142116712"><a name="p12786142116712"></a><a name="p12786142116712"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p16786621675"><a name="p16786621675"></a><a name="p16786621675"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p127862021476"><a name="p127862021476"></a><a name="p127862021476"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row16887151552319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p109064117244"><a name="p109064117244"></a><a name="p109064117244"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p198871415132317"><a name="p198871415132317"></a><a name="p198871415132317"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1288711515239"><a name="p1288711515239"></a><a name="p1288711515239"></a>Name of the schema storing snapshots. The default value is the current user or <strong id="b11116304755489"><a name="b11116304755489"></a><a name="b11116304755489"></a>PUBLIC</strong>.</p>
</td>
</tr>
<tr id="row208871815132314"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1815415572415"><a name="p1815415572415"></a><a name="p1815415572415"></a>i_parent</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11887171562320"><a name="p11887171562320"></a><a name="p11887171562320"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p888891552317"><a name="p888891552317"></a><a name="p888891552317"></a>Parent snapshot name</p>
</td>
</tr>
<tr id="row88881315192312"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1132910817248"><a name="p1132910817248"></a><a name="p1132910817248"></a>i_commands</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1688831516238"><a name="p1688831516238"></a><a name="p1688831516238"></a>IN  TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1888141517235"><a name="p1888141517235"></a><a name="p1888141517235"></a>DDL and DML commands for modifying snapshots</p>
</td>
</tr>
<tr id="row2888121532319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1661061152414"><a name="p1661061152414"></a><a name="p1661061152414"></a>i_vers</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p588891522319"><a name="p588891522319"></a><a name="p588891522319"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1188851502310"><a name="p1188851502310"></a><a name="p1188851502310"></a>Version suffix</p>
</td>
</tr>
<tr id="row1888881520233"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7203131511244"><a name="p7203131511244"></a><a name="p7203131511244"></a>i_comment</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6888161515238"><a name="p6888161515238"></a><a name="p6888161515238"></a>IN  TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p688814150238"><a name="p688814150238"></a><a name="p688814150238"></a>Data comment</p>
</td>
</tr>
<tr id="row5888111522320"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p197659215247"><a name="p197659215247"></a><a name="p197659215247"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6888121513238"><a name="p6888121513238"></a><a name="p6888121513238"></a>OUT  db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4888615192311"><a name="p4888615192311"></a><a name="p4888615192311"></a>Result</p>
</td>
</tr>
</tbody>
</table>

