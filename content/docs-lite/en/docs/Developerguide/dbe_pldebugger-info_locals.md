# DBE\_PLDEBUGGER.info\_locals<a name="EN-US_TOPIC_0000001101617996"></a>

During debugging on the debug end,  **info\_locals**  is invoked to print the variables in the current stored procedure. The input parameter  **frameno**  of this function indicates the stack layer to be traversed. This function can be invoked without input parameters. By default, the top-layer stack variable is queried.

**Table  1**  info\_locals input parameters and return values

<a name="table8940114934019"></a>
<table><thead align="left"><tr id="row1294094911409"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1944419815186"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p17444158101813"><a name="p17444158101813"></a><a name="p17444158101813"></a>frameno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p744410811181"><a name="p744410811181"></a><a name="p744410811181"></a>IN integer (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p0445148131820"><a name="p0445148131820"></a><a name="p0445148131820"></a>Specified stack layer. The default value is the top layer.</p>
</td>
</tr>
<tr id="row19940249184016"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p39401949114016"><a name="p39401949114016"></a><a name="p39401949114016"></a>varname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p894044912405"><a name="p894044912405"></a><a name="p894044912405"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p894094914016"><a name="p894094914016"></a><a name="p894094914016"></a>Variable name</p>
</td>
</tr>
<tr id="row29401490408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p694014964011"><a name="p694014964011"></a><a name="p694014964011"></a>vartype</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p49401449144013"><a name="p49401449144013"></a><a name="p49401449144013"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p294084914012"><a name="p294084914012"></a><a name="p294084914012"></a>Variable type</p>
</td>
</tr>
<tr id="row694020497402"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5940144910409"><a name="p5940144910409"></a><a name="p5940144910409"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1294019492408"><a name="p1294019492408"></a><a name="p1294019492408"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11941144910409"><a name="p11941144910409"></a><a name="p11941144910409"></a>Variable value</p>
</td>
</tr>
<tr id="row11941249204011"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2941134984017"><a name="p2941134984017"></a><a name="p2941134984017"></a>package_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2941154911400"><a name="p2941154911400"></a><a name="p2941154911400"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17941049134010"><a name="p17941049134010"></a><a name="p17941049134010"></a>Name of the package corresponding to the variable. If the variable is not a package, the value is null.</p>
</td>
</tr>
<tr id="row117341928152317"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p134041568229"><a name="p134041568229"></a><a name="p134041568229"></a>isconst</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5404656132216"><a name="p5404656132216"></a><a name="p5404656132216"></a>OUT boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2040465622217"><a name="p2040465622217"></a><a name="p2040465622217"></a>Whether it is a constant</p>
</td>
</tr>
</tbody>
</table>

