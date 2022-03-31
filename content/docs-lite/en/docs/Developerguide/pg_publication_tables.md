# PG\_PUBLICATION\_TABLES<a name="EN-US_TOPIC_0000001243437363"></a>

**PG\_PUBLICATION\_TABLES**  displays the mapping information between a publication and its published tables. Unlike the underlying system catalog  **PG\_PUBLICATION\_REL**, this view expands publications defined as  **FOR ALL TABLES**  so that for such publications, there is one row for each eligible table.

**Table  1**  PG\_PUBLICATION\_TABLES columns

<a name="table6896199462"></a>
<table><thead align="left"><tr id="row1190151924612"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p49081915463"><a name="p49081915463"></a><a name="p49081915463"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p15907192468"><a name="p15907192468"></a><a name="p15907192468"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p69111194465"><a name="p69111194465"></a><a name="p69111194465"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row13918196469"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p29161912468"><a name="p29161912468"></a><a name="p29161912468"></a>pubname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1791161924619"><a name="p1791161924619"></a><a name="p1791161924619"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1091181916468"><a name="p1091181916468"></a><a name="p1091181916468"></a>Publication name.</p>
</td>
</tr>
<tr id="row991111934613"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p391151914468"><a name="p391151914468"></a><a name="p391151914468"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p129181974616"><a name="p129181974616"></a><a name="p129181974616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p892121914617"><a name="p892121914617"></a><a name="p892121914617"></a>Name of the schema that contains the table.</p>
</td>
</tr>
<tr id="row179213192469"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p109219190466"><a name="p109219190466"></a><a name="p109219190466"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1392719114618"><a name="p1392719114618"></a><a name="p1392719114618"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8921019174616"><a name="p8921019174616"></a><a name="p8921019174616"></a>Table name.</p>
</td>
</tr>
</tbody>
</table>

