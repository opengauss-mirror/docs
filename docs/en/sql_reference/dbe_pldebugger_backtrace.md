# DBE\_PLDEBUGGER.backtrace<a name="EN-US_TOPIC_0000001121763470"></a>

During debugging on the debug end, call  **backtrace**  to view the current call stack.

**Table  1**  backtrace input parameters and return values

<a name="table8940114934019"></a>
<table><thead align="left"><tr id="row1294094911409"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row47477516432"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p828810188539"><a name="p828810188539"></a><a name="p828810188539"></a>frameno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3748205134319"><a name="p3748205134319"></a><a name="p3748205134319"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p0748851184315"><a name="p0748851184315"></a><a name="p0748851184315"></a>Call stack ID</p>
</td>
</tr>
<tr id="row988215715717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p165893217537"><a name="p165893217537"></a><a name="p165893217537"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1388347165712"><a name="p1388347165712"></a><a name="p1388347165712"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17352834145318"><a name="p17352834145318"></a><a name="p17352834145318"></a>Function name</p>
</td>
</tr>
<tr id="row19940249184016"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1649115594012"><a name="p1649115594012"></a><a name="p1649115594012"></a>lineno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p894044912405"><a name="p894044912405"></a><a name="p894044912405"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p894094914016"><a name="p894094914016"></a><a name="p894094914016"></a>Line number</p>
</td>
</tr>
<tr id="row29401490408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p694014964011"><a name="p694014964011"></a><a name="p694014964011"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p49401449144013"><a name="p49401449144013"></a><a name="p49401449144013"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p3870154243112"><a name="p3870154243112"></a><a name="p3870154243112"></a>Breakpoint content</p>
</td>
</tr>
<tr id="row16607749122318"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p46071649112312"><a name="p46071649112312"></a><a name="p46071649112312"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4607249102320"><a name="p4607249102320"></a><a name="p4607249102320"></a>OUT oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p06071149122316"><a name="p06071149122316"></a><a name="p06071149122316"></a>Function OID</p>
</td>
</tr>
</tbody>
</table>

