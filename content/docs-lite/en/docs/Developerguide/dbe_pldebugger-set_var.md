# DBE\_PLDEBUGGER.set\_var<a name="EN-US_TOPIC_0000001198398061"></a>

Changes the variable on the top-layer stack in the specified debugging stored procedure to the value of the input parameter. If a stored procedure contains variables with the same name, set\_var supports only the setting of the first variable value.

**Table  1**  set\_var input parameters and return values

<a name="table14536172012446"></a>
<table><thead align="left"><tr id="row1153620205446"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row82533113275"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p15563121373311"><a name="p15563121373311"></a><a name="p15563121373311"></a>var_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2563201363316"><a name="p2563201363316"></a><a name="p2563201363316"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1563813143311"><a name="p1563813143311"></a><a name="p1563813143311"></a>Variable name</p>
</td>
</tr>
<tr id="row2025310117276"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p166021312267"><a name="p166021312267"></a><a name="p166021312267"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1560213132616"><a name="p1560213132616"></a><a name="p1560213132616"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p760213102612"><a name="p760213102612"></a><a name="p760213102612"></a>New value</p>
</td>
</tr>
<tr id="row12521411142718"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p78551349162514"><a name="p78551349162514"></a><a name="p78551349162514"></a>result</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9855144913254"><a name="p9855144913254"></a><a name="p9855144913254"></a>OUT boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p385594912254"><a name="p385594912254"></a><a name="p385594912254"></a>Result (success or failure)</p>
</td>
</tr>
</tbody>
</table>

