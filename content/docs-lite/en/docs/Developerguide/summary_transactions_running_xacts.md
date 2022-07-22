# SUMMARY\_TRANSACTIONS\_RUNNING\_XACTS<a name="EN-US_TOPIC_0000001153389738"></a>

**SUMMARY\_TRANSACTIONS\_RUNNING\_XACTS**  displays information about the running transactions on each node in the cluster. The column content is the same as that of  **TRANSACTIONS\_RUNNING\_XACTS**.

**Table  1**  SUMMARY\_TRANSACTIONS\_RUNNING\_XACTS columns

<a name="table1073834317504"></a>
<table><thead align="left"><tr id="row979610433504"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="p4796134313504"><a name="p4796134313504"></a><a name="p4796134313504"></a><strong id="b199613559741911"><a name="b199613559741911"></a><a name="b199613559741911"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="p207961743205010"><a name="p207961743205010"></a><a name="p207961743205010"></a><strong id="b74640744241911"><a name="b74640744241911"></a><a name="b74640744241911"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="p177961743125020"><a name="p177961743125020"></a><a name="p177961743125020"></a><strong id="b18994397541911"><a name="b18994397541911"></a><a name="b18994397541911"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row1079684365012"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p079624313501"><a name="p079624313501"></a><a name="p079624313501"></a>handle</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p57962043125010"><a name="p57962043125010"></a><a name="p57962043125010"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p1979644355019"><a name="p1979644355019"></a><a name="p1979644355019"></a>Handle in the transaction manager corresponding to the transaction. The value is fixed to –1.</p>
</td>
</tr>
<tr id="row13796143185018"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p37961343135015"><a name="p37961343135015"></a><a name="p37961343135015"></a>gxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p279624375015"><a name="p279624375015"></a><a name="p279624375015"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p5796124385015"><a name="p5796124385015"></a><a name="p5796124385015"></a>Transaction ID</p>
</td>
</tr>
<tr id="row9796443195012"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p679604316505"><a name="p679604316505"></a><a name="p679604316505"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p6796243165017"><a name="p6796243165017"></a><a name="p6796243165017"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p579734385011"><a name="p579734385011"></a><a name="p579734385011"></a>Transaction status (<strong id="b136180353541911"><a name="b136180353541911"></a><a name="b136180353541911"></a>3</strong>: prepared or <strong id="b130829776041911"><a name="b130829776041911"></a><a name="b130829776041911"></a>0</strong>: starting)</p>
</td>
</tr>
<tr id="row4797114345016"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1679711437509"><a name="p1679711437509"></a><a name="p1679711437509"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1179704375013"><a name="p1179704375013"></a><a name="p1179704375013"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p147978431509"><a name="p147978431509"></a><a name="p147978431509"></a>Node name</p>
</td>
</tr>
<tr id="row279714432503"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p3797643155020"><a name="p3797643155020"></a><a name="p3797643155020"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p20797154335017"><a name="p20797154335017"></a><a name="p20797154335017"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p379734335018"><a name="p379734335018"></a><a name="p379734335018"></a>Minimum transaction ID on the node</p>
</td>
</tr>
<tr id="row107971443135015"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p2079784316504"><a name="p2079784316504"></a><a name="p2079784316504"></a>vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p97971543135010"><a name="p97971543135010"></a><a name="p97971543135010"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p379711437504"><a name="p379711437504"></a><a name="p379711437504"></a>Whether the current transaction is lazy vacuum</p>
</td>
</tr>
<tr id="row18797154316503"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p779712438500"><a name="p779712438500"></a><a name="p779712438500"></a>timeline</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p6797134311502"><a name="p6797134311502"></a><a name="p6797134311502"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p6797104314509"><a name="p6797104314509"></a><a name="p6797104314509"></a>Number of database restarts</p>
</td>
</tr>
<tr id="row15797143205017"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p97971143105012"><a name="p97971143105012"></a><a name="p97971143105012"></a>prepare_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p197979431506"><a name="p197979431506"></a><a name="p197979431506"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p11797204314503"><a name="p11797204314503"></a><a name="p11797204314503"></a>Transaction ID in the <strong id="b99527383741911"><a name="b99527383741911"></a><a name="b99527383741911"></a>prepared</strong> state. If the status is not <strong id="b34007257341911"><a name="b34007257341911"></a><a name="b34007257341911"></a>prepared</strong>, the value is <strong id="b146301700741911"><a name="b146301700741911"></a><a name="b146301700741911"></a>0</strong>.</p>
</td>
</tr>
<tr id="row167973437503"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1079711432502"><a name="p1079711432502"></a><a name="p1079711432502"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p07978438501"><a name="p07978438501"></a><a name="p07978438501"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p17797154311503"><a name="p17797154311503"></a><a name="p17797154311503"></a>Thread ID corresponding to the transaction</p>
</td>
</tr>
<tr id="row57971143135018"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p8797104316508"><a name="p8797104316508"></a><a name="p8797104316508"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1579714433500"><a name="p1579714433500"></a><a name="p1579714433500"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p67978439506"><a name="p67978439506"></a><a name="p67978439506"></a><span id="text12671851102415"><a name="text12671851102415"></a><a name="text12671851102415"></a>Transaction ID sent by other nodes to the current node. The value is fixed to 0.</p>
</td>
</tr>
</tbody>
</table>

