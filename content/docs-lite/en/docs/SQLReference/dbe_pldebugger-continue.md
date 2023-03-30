# DBE\_PLDEBUGGER.continue<a name="EN-US_TOPIC_0000001147937843"></a>

Executes the current stored procedure until reaching the next breakpoint or end, and returns the line number of the next execution and the corresponding query.

The function prototype is as follows:

```
DBE_PLDEBUGGER.continue()
RETURN Record;
```

**Table  1**  continue input parameters and return values

<a name="table10562151353310"></a>
<table><thead align="left"><tr id="row35621913133310"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row371610397270"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0721103852712"><a name="p0721103852712"></a><a name="p0721103852712"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1772183815278"><a name="p1772183815278"></a><a name="p1772183815278"></a>OUT oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6721123812718"><a name="p6721123812718"></a><a name="p6721123812718"></a>Function ID</p>
</td>
</tr>
<tr id="row771653915273"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p166021312267"><a name="p166021312267"></a><a name="p166021312267"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1560213132616"><a name="p1560213132616"></a><a name="p1560213132616"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p760213102612"><a name="p760213102612"></a><a name="p760213102612"></a>Function name</p>
</td>
</tr>
<tr id="row67161039182710"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p281514567234"><a name="p281514567234"></a><a name="p281514567234"></a>lineno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p158158560231"><a name="p158158560231"></a><a name="p158158560231"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p198151956162315"><a name="p198151956162315"></a><a name="p198151956162315"></a>Number of the next line in the current debugging process</p>
</td>
</tr>
<tr id="row37151139192714"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p78551349162514"><a name="p78551349162514"></a><a name="p78551349162514"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9855144913254"><a name="p9855144913254"></a><a name="p9855144913254"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p385594912254"><a name="p385594912254"></a><a name="p385594912254"></a>Source code of the next line of the function that is being debugged</p>
</td>
</tr>
</tbody>
</table>

