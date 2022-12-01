# SUMMARY\_TRANSACTIONS\_RUNNING\_XACTS<a name="ZH-CN_TOPIC_0000001153389738"></a>

显示集群中各个节点运行事务的信息，字段内容和transactions\_running\_xacts一致。

**表 1**  SUMMARY\_TRANSACTIONS\_RUNNING\_XACTS字段

<a name="table1073834317504"></a>
<table><thead align="left"><tr id="row979610433504"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="p4796134313504"><a name="p4796134313504"></a><a name="p4796134313504"></a><strong id="b177963434509"><a name="b177963434509"></a><a name="b177963434509"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="p207961743205010"><a name="p207961743205010"></a><a name="p207961743205010"></a><strong id="b1179654317501"><a name="b1179654317501"></a><a name="b1179654317501"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="p177961743125020"><a name="p177961743125020"></a><a name="p177961743125020"></a><strong id="b5796204325010"><a name="b5796204325010"></a><a name="b5796204325010"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row1079684365012"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p079624313501"><a name="p079624313501"></a><a name="p079624313501"></a>handle</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p57962043125010"><a name="p57962043125010"></a><a name="p57962043125010"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p1979644355019"><a name="p1979644355019"></a><a name="p1979644355019"></a>事务对应的事务管理器中的槽位句柄，该值恒为-1。</p>
</td>
</tr>
<tr id="row13796143185018"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p37961343135015"><a name="p37961343135015"></a><a name="p37961343135015"></a>gxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p279624375015"><a name="p279624375015"></a><a name="p279624375015"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p5796124385015"><a name="p5796124385015"></a><a name="p5796124385015"></a>事务id号。</p>
</td>
</tr>
<tr id="row9796443195012"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p679604316505"><a name="p679604316505"></a><a name="p679604316505"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p6796243165017"><a name="p6796243165017"></a><a name="p6796243165017"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p579734385011"><a name="p579734385011"></a><a name="p579734385011"></a>事务状态（3：prepared或者0：starting）。</p>
</td>
</tr>
<tr id="row4797114345016"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1679711437509"><a name="p1679711437509"></a><a name="p1679711437509"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1179704375013"><a name="p1179704375013"></a><a name="p1179704375013"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p147978431509"><a name="p147978431509"></a><a name="p147978431509"></a>节点名称。</p>
</td>
</tr>
<tr id="row279714432503"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p3797643155020"><a name="p3797643155020"></a><a name="p3797643155020"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p20797154335017"><a name="p20797154335017"></a><a name="p20797154335017"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p379734335018"><a name="p379734335018"></a><a name="p379734335018"></a>节点上当前数据涉及的最小事务号xmin。</p>
</td>
</tr>
<tr id="row107971443135015"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p2079784316504"><a name="p2079784316504"></a><a name="p2079784316504"></a>vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p97971543135010"><a name="p97971543135010"></a><a name="p97971543135010"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p379711437504"><a name="p379711437504"></a><a name="p379711437504"></a>标志当前事务是否是lazy vacuum事务。</p>
</td>
</tr>
<tr id="row18797154316503"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p779712438500"><a name="p779712438500"></a><a name="p779712438500"></a>timeline</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p6797134311502"><a name="p6797134311502"></a><a name="p6797134311502"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p6797104314509"><a name="p6797104314509"></a><a name="p6797104314509"></a>标志数据库重启次数。</p>
</td>
</tr>
<tr id="row15797143205017"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p97971143105012"><a name="p97971143105012"></a><a name="p97971143105012"></a>prepare_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p197979431506"><a name="p197979431506"></a><a name="p197979431506"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p11797204314503"><a name="p11797204314503"></a><a name="p11797204314503"></a>处于prepared状态的事务的id号，若不在prepared状态，值为0。</p>
</td>
</tr>
<tr id="row167973437503"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1079711432502"><a name="p1079711432502"></a><a name="p1079711432502"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p07978438501"><a name="p07978438501"></a><a name="p07978438501"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p17797154311503"><a name="p17797154311503"></a><a name="p17797154311503"></a>事务对应的线程id。</p>
</td>
</tr>
<tr id="row57971143135018"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p8797104316508"><a name="p8797104316508"></a><a name="p8797104316508"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1579714433500"><a name="p1579714433500"></a><a name="p1579714433500"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p67978439506"><a name="p67978439506"></a><a name="p67978439506"></a><span id="text12671851102415"><a name="text12671851102415"></a><a name="text12671851102415"></a>其余节点发送给当前节点的事务id，该值恒为0。</p>
</td>
</tr>
</tbody>
</table>
