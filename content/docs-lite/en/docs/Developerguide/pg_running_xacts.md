# PG\_RUNNING\_XACTS<a name="EN-US_TOPIC_0000001151571796"></a>

**PG\_RUNNING\_XACTS**  displays the running transaction information on the current node.

**Table  1**  PG\_RUNNING\_XACTS columns

<a name="en-us_topic_0059778567_tfb5e94c949304dd5bdf7fd2d8d223080"></a>
<table><thead align="left"><tr id="en-us_topic_0059778567_r22475baed9fb4d4daad1f28269fbbd78"><th class="cellrowborder" valign="top" width="23.330000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778567_a9d40fb7778ec441fade86b126709b745"><a name="en-us_topic_0059778567_a9d40fb7778ec441fade86b126709b745"></a><a name="en-us_topic_0059778567_a9d40fb7778ec441fade86b126709b745"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="15.790000000000001%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778567_aabccd98aa2704885bed6ef0616c775a0"><a name="en-us_topic_0059778567_aabccd98aa2704885bed6ef0616c775a0"></a><a name="en-us_topic_0059778567_aabccd98aa2704885bed6ef0616c775a0"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="60.88%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778567_a4fefca91dbaf4b3abe70ffdd17c063a5"><a name="en-us_topic_0059778567_a4fefca91dbaf4b3abe70ffdd17c063a5"></a><a name="en-us_topic_0059778567_a4fefca91dbaf4b3abe70ffdd17c063a5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778567_r9a2a76e76fb540f389a1ac769b44a147"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a36330ba8f3bf4e5aab779fa27b375014"><a name="en-us_topic_0059778567_a36330ba8f3bf4e5aab779fa27b375014"></a><a name="en-us_topic_0059778567_a36330ba8f3bf4e5aab779fa27b375014"></a>handle</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a3cf06a6a3ee841d7bac62a9ed3a8da24"><a name="en-us_topic_0059778567_a3cf06a6a3ee841d7bac62a9ed3a8da24"></a><a name="en-us_topic_0059778567_a3cf06a6a3ee841d7bac62a9ed3a8da24"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_a5870a20f3740491398ce1766c0e01e15"><a name="en-us_topic_0059778567_a5870a20f3740491398ce1766c0e01e15"></a><a name="en-us_topic_0059778567_a5870a20f3740491398ce1766c0e01e15"></a>Handle in the transaction manager corresponding to the transaction. The value is fixed to –1.</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_rd0ce2f0fc41f4065ac89e15c2554b5cf"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a2fb68fcd236e4be19fb7e059b81b27e3"><a name="en-us_topic_0059778567_a2fb68fcd236e4be19fb7e059b81b27e3"></a><a name="en-us_topic_0059778567_a2fb68fcd236e4be19fb7e059b81b27e3"></a>gxid</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a47ccc55377b64ebc9a06d4b821823e71"><a name="en-us_topic_0059778567_a47ccc55377b64ebc9a06d4b821823e71"></a><a name="en-us_topic_0059778567_a47ccc55377b64ebc9a06d4b821823e71"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_afb8fcc97f46f48319317441448893ae7"><a name="en-us_topic_0059778567_afb8fcc97f46f48319317441448893ae7"></a><a name="en-us_topic_0059778567_afb8fcc97f46f48319317441448893ae7"></a>Transaction ID</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_r3a87b100271c428d8d60788f981b551a"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a6fd683e5665642838ec861765beaecf6"><a name="en-us_topic_0059778567_a6fd683e5665642838ec861765beaecf6"></a><a name="en-us_topic_0059778567_a6fd683e5665642838ec861765beaecf6"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a7abf7428d2414cb0b532c9a8d1f383ad"><a name="en-us_topic_0059778567_a7abf7428d2414cb0b532c9a8d1f383ad"></a><a name="en-us_topic_0059778567_a7abf7428d2414cb0b532c9a8d1f383ad"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_ab619656d4bd84aa08a11c1243118eba2"><a name="en-us_topic_0059778567_ab619656d4bd84aa08a11c1243118eba2"></a><a name="en-us_topic_0059778567_ab619656d4bd84aa08a11c1243118eba2"></a>Transaction status (<strong id="b53882690414225"><a name="b53882690414225"></a><a name="b53882690414225"></a>3</strong>: prepared or <strong id="b171847667114225"><a name="b171847667114225"></a><a name="b171847667114225"></a>0</strong>: starting)</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_r6d7019f4d7774007bf4f6304154a7df6"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a82341639eddf48c5a23f65aff2a3fb9e"><a name="en-us_topic_0059778567_a82341639eddf48c5a23f65aff2a3fb9e"></a><a name="en-us_topic_0059778567_a82341639eddf48c5a23f65aff2a3fb9e"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a0bf82a39974f41358969dddf434aa2a1"><a name="en-us_topic_0059778567_a0bf82a39974f41358969dddf434aa2a1"></a><a name="en-us_topic_0059778567_a0bf82a39974f41358969dddf434aa2a1"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_af9b1ceeb6d724468ba082ab74f81e745"><a name="en-us_topic_0059778567_af9b1ceeb6d724468ba082ab74f81e745"></a><a name="en-us_topic_0059778567_af9b1ceeb6d724468ba082ab74f81e745"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_rd9e3c28a12754a82b75d81497b573ff4"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_af767104ac8b04b54bfe5e08b6faceeb5"><a name="en-us_topic_0059778567_af767104ac8b04b54bfe5e08b6faceeb5"></a><a name="en-us_topic_0059778567_af767104ac8b04b54bfe5e08b6faceeb5"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_ac60af4c72687422b80e360503cf31d68"><a name="en-us_topic_0059778567_ac60af4c72687422b80e360503cf31d68"></a><a name="en-us_topic_0059778567_ac60af4c72687422b80e360503cf31d68"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_a5c863320452c4756b89818bf7c7e4485"><a name="en-us_topic_0059778567_a5c863320452c4756b89818bf7c7e4485"></a><a name="en-us_topic_0059778567_a5c863320452c4756b89818bf7c7e4485"></a>Minimum transaction ID on the node</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_r3d0dc7c37a1b4acba7f09ac92b00378a"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a3076c633e4344419968b2a14ff8b8442"><a name="en-us_topic_0059778567_a3076c633e4344419968b2a14ff8b8442"></a><a name="en-us_topic_0059778567_a3076c633e4344419968b2a14ff8b8442"></a>vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a512e99361d024c29b20b9cb3e2978d4c"><a name="en-us_topic_0059778567_a512e99361d024c29b20b9cb3e2978d4c"></a><a name="en-us_topic_0059778567_a512e99361d024c29b20b9cb3e2978d4c"></a><span id="text71461320193011"><a name="text71461320193011"></a><a name="text71461320193011"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_ae2f0ed9cea4b48179252fbc8c28cfcd0"><a name="en-us_topic_0059778567_ae2f0ed9cea4b48179252fbc8c28cfcd0"></a><a name="en-us_topic_0059778567_ae2f0ed9cea4b48179252fbc8c28cfcd0"></a>Whether the current transaction is lazy vacuum</p>
<a name="ul588154784410"></a><a name="ul588154784410"></a><ul id="ul588154784410"><li><strong id="b100442681714225"><a name="b100442681714225"></a><a name="b100442681714225"></a>t</strong> (true): yes</li><li><strong id="b10924987114225"><a name="b10924987114225"></a><a name="b10924987114225"></a>f</strong> (false): no</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778567_rd399cb63df44475bb39bb23e9e01172e"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a676886fd3a834a549bf3bc73c499fb5c"><a name="en-us_topic_0059778567_a676886fd3a834a549bf3bc73c499fb5c"></a><a name="en-us_topic_0059778567_a676886fd3a834a549bf3bc73c499fb5c"></a>timeline</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a000533d97a11404ea706d5e0fa96736c"><a name="en-us_topic_0059778567_a000533d97a11404ea706d5e0fa96736c"></a><a name="en-us_topic_0059778567_a000533d97a11404ea706d5e0fa96736c"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_a5b07ef71d37b4b91b558242f18f9a63f"><a name="en-us_topic_0059778567_a5b07ef71d37b4b91b558242f18f9a63f"></a><a name="en-us_topic_0059778567_a5b07ef71d37b4b91b558242f18f9a63f"></a>Number of database restarts</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_r0d698ad428714a199424f649e750455f"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a6eaabb8c5d3a4e808eb21830889db197"><a name="en-us_topic_0059778567_a6eaabb8c5d3a4e808eb21830889db197"></a><a name="en-us_topic_0059778567_a6eaabb8c5d3a4e808eb21830889db197"></a>prepare_xid</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a0a6014e248894ac39532f9a9cae9e5a2"><a name="en-us_topic_0059778567_a0a6014e248894ac39532f9a9cae9e5a2"></a><a name="en-us_topic_0059778567_a0a6014e248894ac39532f9a9cae9e5a2"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_a8756280fdb654c43be446411d12dc8d8"><a name="en-us_topic_0059778567_a8756280fdb654c43be446411d12dc8d8"></a><a name="en-us_topic_0059778567_a8756280fdb654c43be446411d12dc8d8"></a>Transaction ID in the <strong id="b203282141814225"><a name="b203282141814225"></a><a name="b203282141814225"></a>prepared</strong> state. If the status is not <strong id="b91489691114225"><a name="b91489691114225"></a><a name="b91489691114225"></a>prepared</strong>, the value is <strong id="b70638145314225"><a name="b70638145314225"></a><a name="b70638145314225"></a>0</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_rd4773830b2bd4f63a1bf2b7c90ff5ea4"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_a87fee11ce51448049546de7c1f0392f6"><a name="en-us_topic_0059778567_a87fee11ce51448049546de7c1f0392f6"></a><a name="en-us_topic_0059778567_a87fee11ce51448049546de7c1f0392f6"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_aa2fcba2a04614ce7a9bb619946025479"><a name="en-us_topic_0059778567_aa2fcba2a04614ce7a9bb619946025479"></a><a name="en-us_topic_0059778567_aa2fcba2a04614ce7a9bb619946025479"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778567_a17c3090f555f4627be5bee0258ed34c3"><a name="en-us_topic_0059778567_a17c3090f555f4627be5bee0258ed34c3"></a><a name="en-us_topic_0059778567_a17c3090f555f4627be5bee0258ed34c3"></a>Thread ID corresponding to the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0059778567_r410c916ded7e4948948e1f957c2a0ed5"><td class="cellrowborder" valign="top" width="23.330000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778567_ad0d723c9dcc444e6a241d9ab23647974"><a name="en-us_topic_0059778567_ad0d723c9dcc444e6a241d9ab23647974"></a><a name="en-us_topic_0059778567_ad0d723c9dcc444e6a241d9ab23647974"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="15.790000000000001%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778567_a4dff37aaf5b04f8198bdb0b3ec964b70"><a name="en-us_topic_0059778567_a4dff37aaf5b04f8198bdb0b3ec964b70"></a><a name="en-us_topic_0059778567_a4dff37aaf5b04f8198bdb0b3ec964b70"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778567_acbcf74298f784b7181b43913741ba46d"><a name="zh-cn_topic_0059778567_acbcf74298f784b7181b43913741ba46d"></a><a name="zh-cn_topic_0059778567_acbcf74298f784b7181b43913741ba46d"></a><span id="text690741819219"><a name="text690741819219"></a><a name="text690741819219"></a>Transaction ID sent by other nodes to the current node. The value is fixed to 0.</p>
</td>
</tr>
</tbody>
</table>

