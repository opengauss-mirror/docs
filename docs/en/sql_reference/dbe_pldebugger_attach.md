# DBE\_PLDEBUGGER.attach<a name="EN-US_TOPIC_0000001101178202"></a>

When the server executes a stored procedure, the server hangs the execution before the first statement and waits for attaching with the debug end. The debug end invokes the attach function and transfers node name and port number to attach with the specified stored procedure.

If an error is reported during debugging, the attach operation automatically becomes invalid. If the debug end is attached to another stored procedure during debugging, the debugging of the attached stored procedure becomes invalid.

**Table  1**  attach input parameters and return values

<a name="table10562151353310"></a>
<table><thead align="left"><tr id="row35621913133310"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row2056321383317"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5563913183313"><a name="p5563913183313"></a><a name="p5563913183313"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1056320133334"><a name="p1056320133334"></a><a name="p1056320133334"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p356391373317"><a name="p356391373317"></a><a name="p356391373317"></a>Node name</p>
</td>
</tr>
<tr id="row756381373310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11563613113315"><a name="p11563613113315"></a><a name="p11563613113315"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p856317131336"><a name="p856317131336"></a><a name="p856317131336"></a>IN integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16563111316332"><a name="p16563111316332"></a><a name="p16563111316332"></a>Number of the connected port</p>
</td>
</tr>
<tr id="row1056381315334"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p15563121373311"><a name="p15563121373311"></a><a name="p15563121373311"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2563201363316"><a name="p2563201363316"></a><a name="p2563201363316"></a>OUT oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1563813143311"><a name="p1563813143311"></a><a name="p1563813143311"></a>Function ID</p>
</td>
</tr>
<tr id="row106025114263"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p166021312267"><a name="p166021312267"></a><a name="p166021312267"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1560213132616"><a name="p1560213132616"></a><a name="p1560213132616"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p760213102612"><a name="p760213102612"></a><a name="p760213102612"></a>Function name</p>
</td>
</tr>
<tr id="row208146561237"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p281514567234"><a name="p281514567234"></a><a name="p281514567234"></a>lineno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p158158560231"><a name="p158158560231"></a><a name="p158158560231"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p198151956162315"><a name="p198151956162315"></a><a name="p198151956162315"></a>Number of the next line in the current debugging process</p>
</td>
</tr>
<tr id="row485419492253"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p78551349162514"><a name="p78551349162514"></a><a name="p78551349162514"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9855144913254"><a name="p9855144913254"></a><a name="p9855144913254"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p385594912254"><a name="p385594912254"></a><a name="p385594912254"></a>Source code of the next line of the function that is being debugged</p>
</td>
</tr>
</tbody>
</table>

