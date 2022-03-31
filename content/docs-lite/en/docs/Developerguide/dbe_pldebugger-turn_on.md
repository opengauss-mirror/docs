# DBE\_PLDEBUGGER.turn\_on<a name="EN-US_TOPIC_0000001148257915"></a>

This function is used to mark a stored procedure as debuggable. After  **turn\_on**  is executed, the server can execute the stored procedure for debugging. You need to manually obtain the OID of the stored procedure based on the PG\_PROC system catalog and transfer it to the function. After  **turn\_on**  is executed, the execution of the stored procedure in the current session is hung before the first SQL statement to wait for the debugging instruction from the debug end. This setting is cleared by default after the session is disconnected. Currently, stored procedures and functions with autonomous transactions enabled cannot be debugged.

The function prototype is as follows:

```
DBE_PLDEBUGGER.turn_on(Oid)
RETURN Record;
```

**Table  1**  turn\_on input parameters and return values

<a name="table677041961510"></a>
<table><thead align="left"><tr id="row677141951520"><th class="cellrowborder" valign="top" width="27.652765276527653%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="38.693869386938694%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.65336533653365%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row13414141552612"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p16415415132612"><a name="p16415415132612"></a><a name="p16415415132612"></a>func_oid</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p174151715112614"><a name="p174151715112614"></a><a name="p174151715112614"></a>IN oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p174151615152616"><a name="p174151615152616"></a><a name="p174151615152616"></a>Function OID</p>
</td>
</tr>
<tr id="row1277121911516"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p1777181917157"><a name="p1777181917157"></a><a name="p1777181917157"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p1677171914150"><a name="p1677171914150"></a><a name="p1677171914150"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p877191911517"><a name="p877191911517"></a><a name="p877191911517"></a>Node name</p>
</td>
</tr>
<tr id="row77715198156"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p6771171918154"><a name="p6771171918154"></a><a name="p6771171918154"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p1771819141512"><a name="p1771819141512"></a><a name="p1771819141512"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p1177171981510"><a name="p1177171981510"></a><a name="p1177171981510"></a>Number of the connected port</p>
</td>
</tr>
</tbody>
</table>

