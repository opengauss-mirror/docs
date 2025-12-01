# DBE\_PLDEBUGGER.add\_breakpoint<a name="EN-US_TOPIC_0000001115926210"></a>

During debugging on the debug end, call  **add\_breakpoint**  to add a breakpoint. If  **–1**  is returned, the specified breakpoint is invalid. Determine the proper position of the breakpoint based on the  **canbreak**  column in  [DBE\_PLDEBUGGER.info\_code](dbe_pldebugger-info_code.md).

**Table  1**  add\_breakpoint input parameters and return values

<a name="table8940114934019"></a>
<table><thead align="left"><tr id="row1294094911409"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row988215715717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1550610482005"><a name="p1550610482005"></a><a name="p1550610482005"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1388347165712"><a name="p1388347165712"></a><a name="p1388347165712"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1088367115715"><a name="p1088367115715"></a><a name="p1088367115715"></a>Function ID</p>
</td>
</tr>
<tr id="row19940249184016"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1649115594012"><a name="p1649115594012"></a><a name="p1649115594012"></a>lineno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p894044912405"><a name="p894044912405"></a><a name="p894044912405"></a>IN integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p894094914016"><a name="p894094914016"></a><a name="p894094914016"></a>Line number</p>
</td>
</tr>
<tr id="row29401490408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p694014964011"><a name="p694014964011"></a><a name="p694014964011"></a>breakpointno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p49401449144013"><a name="p49401449144013"></a><a name="p49401449144013"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p3870154243112"><a name="p3870154243112"></a><a name="p3870154243112"></a>Breakpoint number</p>
</td>
</tr>
</tbody>
</table>

