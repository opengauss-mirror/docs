# DBE\_PLDEBUGGER.turn\_off<a name="EN-US_TOPIC_0000001148017993"></a>

This function is used to remove the debugging flag added by  **turn\_on**. The return value indicates success or failure. You can run the  **DBE\_PLDEBUGGER.local\_debug\_server\_info**  command to query the OID of the stored procedure that has been turned on.

The function prototype is as follows:

```
DBE_PLDEBUGGER.turn_off(Oid)
RETURN boolean;
```

**Table  1**  turn\_off input parameters and return values

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
<tr id="row1277121911516"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p1777181917157"><a name="p1777181917157"></a><a name="p1777181917157"></a>turn_off</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p1677171914150"><a name="p1677171914150"></a><a name="p1677171914150"></a>OUT boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p877191911517"><a name="p877191911517"></a><a name="p877191911517"></a>Whether turn-off is successful</p>
</td>
</tr>
</tbody>
</table>

