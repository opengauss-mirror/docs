# TRANSACTIONS\_RUNNING\_XACTS<a name="EN-US_TOPIC_0000001153229920"></a>

**TRANSACTIONS\_RUNNING\_XACTS**  displays information about running transactions on the current node.

**Table  1**  TRANSACTIONS\_RUNNING\_XACTS columns

<a name="table104884257493"></a>
<table><thead align="left"><tr id="row11571112514492"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="p15711125194918"><a name="p15711125194918"></a><a name="p15711125194918"></a><strong id="b59751736641621"><a name="b59751736641621"></a><a name="b59751736641621"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="p115711525144916"><a name="p115711525144916"></a><a name="p115711525144916"></a><strong id="b101611711641621"><a name="b101611711641621"></a><a name="b101611711641621"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="p12572725174920"><a name="p12572725174920"></a><a name="p12572725174920"></a><strong id="b160709584141621"><a name="b160709584141621"></a><a name="b160709584141621"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row105721225124915"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p2572172514910"><a name="p2572172514910"></a><a name="p2572172514910"></a>handle</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p195720254490"><a name="p195720254490"></a><a name="p195720254490"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p17572112517497"><a name="p17572112517497"></a><a name="p17572112517497"></a>Handle corresponding to the transaction in GTM</p>
</td>
</tr>
<tr id="row3572925174917"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p14572202512491"><a name="p14572202512491"></a><a name="p14572202512491"></a>gxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p15572112594911"><a name="p15572112594911"></a><a name="p15572112594911"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p205721225164916"><a name="p205721225164916"></a><a name="p205721225164916"></a>Transaction ID</p>
</td>
</tr>
<tr id="row1857262544913"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p7572112517492"><a name="p7572112517492"></a><a name="p7572112517492"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p105727255498"><a name="p105727255498"></a><a name="p105727255498"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p557262517498"><a name="p557262517498"></a><a name="p557262517498"></a>Transaction status (<strong id="b842352706151512"><a name="b842352706151512"></a><a name="b842352706151512"></a>3</strong>: prepared or <strong id="b842352706151515"><a name="b842352706151515"></a><a name="b842352706151515"></a>0</strong>: starting)</p>
</td>
</tr>
<tr id="row1257210259491"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p65726258491"><a name="p65726258491"></a><a name="p65726258491"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1757212584920"><a name="p1757212584920"></a><a name="p1757212584920"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p16572125204914"><a name="p16572125204914"></a><a name="p16572125204914"></a>Node name</p>
</td>
</tr>
<tr id="row17572325164917"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p10572102513499"><a name="p10572102513499"></a><a name="p10572102513499"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p257252510497"><a name="p257252510497"></a><a name="p257252510497"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p1057211259497"><a name="p1057211259497"></a><a name="p1057211259497"></a>Minimum transaction ID on the node</p>
</td>
</tr>
<tr id="row6572152516494"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p115721525134914"><a name="p115721525134914"></a><a name="p115721525134914"></a>vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p35722255495"><a name="p35722255495"></a><a name="p35722255495"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p13573132564912"><a name="p13573132564912"></a><a name="p13573132564912"></a>Whether the current transaction is lazy vacuum</p>
</td>
</tr>
<tr id="row17573025104912"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p857302554919"><a name="p857302554919"></a><a name="p857302554919"></a>timeline</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p257322518491"><a name="p257322518491"></a><a name="p257322518491"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p857313257499"><a name="p857313257499"></a><a name="p857313257499"></a>Number of database restarts</p>
</td>
</tr>
<tr id="row115731925104917"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p155737257490"><a name="p155737257490"></a><a name="p155737257490"></a>prepare_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p8573625154916"><a name="p8573625154916"></a><a name="p8573625154916"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p185734252498"><a name="p185734252498"></a><a name="p185734252498"></a>Transaction ID in the <strong id="b842352706101757"><a name="b842352706101757"></a><a name="b842352706101757"></a>prepared</strong> state. If the status is not <strong id="b84235270610179"><a name="b84235270610179"></a><a name="b84235270610179"></a>prepared</strong>, the value is <strong id="b842352706101722"><a name="b842352706101722"></a><a name="b842352706101722"></a>0</strong>.</p>
</td>
</tr>
<tr id="row11573225174915"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p2057392514493"><a name="p2057392514493"></a><a name="p2057392514493"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1257362524916"><a name="p1257362524916"></a><a name="p1257362524916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p05736252494"><a name="p05736252494"></a><a name="p05736252494"></a>Thread ID corresponding to the transaction</p>
</td>
</tr>
<tr id="row95731259491"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1757316250491"><a name="p1757316250491"></a><a name="p1757316250491"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p757316258494"><a name="p757316258494"></a><a name="p757316258494"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p657372510491"><a name="p657372510491"></a><a name="p657372510491"></a>Transaction ID sent from a <span id="text772674122416"><a name="text772674122416"></a><a name="text772674122416"></a>CN</span> to a <span id="text9654200205513"><a name="text9654200205513"></a><a name="text9654200205513"></a>DN</span></p>
</td>
</tr>
</tbody>
</table>

