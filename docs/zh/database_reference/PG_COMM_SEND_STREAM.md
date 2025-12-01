# PG\_COMM\_SEND\_STREAM

PG\_COMM\_SEND\_STREAM视图展示节点上所有的通信库发送流状态。

**表 1**  PG\_COMM\_SEND\_STREAM字段

<a name="zh-cn_topic_0059779141_t347cb33a617f424983bc774729d9754d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059779141_r22759717fee04722b332b5aa36eb6071"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059779141_aa8d22f4ec051443f9d48ac60d60307ec"><a name="zh-cn_topic_0059779141_aa8d22f4ec051443f9d48ac60d60307ec"></a><a name="zh-cn_topic_0059779141_aa8d22f4ec051443f9d48ac60d60307ec"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059779141_a87deff6c06364fb1bcfd093ef1db72e0"><a name="zh-cn_topic_0059779141_a87deff6c06364fb1bcfd093ef1db72e0"></a><a name="zh-cn_topic_0059779141_a87deff6c06364fb1bcfd093ef1db72e0"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059779141_a320ce78ad03744c8bd4637d90543866f"><a name="zh-cn_topic_0059779141_a320ce78ad03744c8bd4637d90543866f"></a><a name="zh-cn_topic_0059779141_a320ce78ad03744c8bd4637d90543866f"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059779141_rdc67d033ebee4db7a851e50a9435e166"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a9453df7f12bf42f7be00d2db2171dd7d"><a name="zh-cn_topic_0059779141_a9453df7f12bf42f7be00d2db2171dd7d"></a><a name="zh-cn_topic_0059779141_a9453df7f12bf42f7be00d2db2171dd7d"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p457674145755"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p457674145755"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p457674145755"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a4a6d55bed845491fb64b2fbb1adf7a25"><a name="zh-cn_topic_0059779141_a4a6d55bed845491fb64b2fbb1adf7a25"></a><a name="zh-cn_topic_0059779141_a4a6d55bed845491fb64b2fbb1adf7a25"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_rd641d0423a0c46ff86a8aa9660f58fb1"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a79c84adb5d0840789ef750bcd7aeb44c"><a name="zh-cn_topic_0059779141_a79c84adb5d0840789ef750bcd7aeb44c"></a><a name="zh-cn_topic_0059779141_a79c84adb5d0840789ef750bcd7aeb44c"></a>local_tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_a6fa17b75a0de4e2faf338c1edc91c014"><a name="zh-cn_topic_0059779141_a6fa17b75a0de4e2faf338c1edc91c014"></a><a name="zh-cn_topic_0059779141_a6fa17b75a0de4e2faf338c1edc91c014"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a750237e9f9084346b1073e7ce1fdda0e"><a name="zh-cn_topic_0059779141_a750237e9f9084346b1073e7ce1fdda0e"></a><a name="zh-cn_topic_0059779141_a750237e9f9084346b1073e7ce1fdda0e"></a>使用此通信流的线程ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r6dd0b541838f47218323795d6cb19ef4"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a658a6b0df0654144be80452802c7daba"><a name="zh-cn_topic_0059779141_a658a6b0df0654144be80452802c7daba"></a><a name="zh-cn_topic_0059779141_a658a6b0df0654144be80452802c7daba"></a>remote_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_ade4d55ed34744c4bbb83a4c0e96f2270"><a name="zh-cn_topic_0059779141_ade4d55ed34744c4bbb83a4c0e96f2270"></a><a name="zh-cn_topic_0059779141_ade4d55ed34744c4bbb83a4c0e96f2270"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a64e200877357461a88349d83a5464fb9"><a name="zh-cn_topic_0059779141_a64e200877357461a88349d83a5464fb9"></a><a name="zh-cn_topic_0059779141_a64e200877357461a88349d83a5464fb9"></a>连接对端节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r50e5e2f3ae274197b65896ecc80c4669"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a53f738a7d0304642b38c68a8d4513f12"><a name="zh-cn_topic_0059779141_a53f738a7d0304642b38c68a8d4513f12"></a><a name="zh-cn_topic_0059779141_a53f738a7d0304642b38c68a8d4513f12"></a>remote_tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_ade7bd248b04444bb84a8ae3c2bdeccbe"><a name="zh-cn_topic_0059779141_ade7bd248b04444bb84a8ae3c2bdeccbe"></a><a name="zh-cn_topic_0059779141_ade7bd248b04444bb84a8ae3c2bdeccbe"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p199576145755"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p199576145755"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p199576145755"></a>连接对端线程ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r2b504298f4f24bb7a18a037c0ea1652a"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_aff296e75327c42478fc4577250d50c4c"><a name="zh-cn_topic_0059779141_aff296e75327c42478fc4577250d50c4c"></a><a name="zh-cn_topic_0059779141_aff296e75327c42478fc4577250d50c4c"></a>idx</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_aea1a8ad406814b3d9f48bf63a6d34143"><a name="zh-cn_topic_0059779141_aea1a8ad406814b3d9f48bf63a6d34143"></a><a name="zh-cn_topic_0059779141_aea1a8ad406814b3d9f48bf63a6d34143"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a5585fdc82d4940c9a5b85f10b360c233"><a name="zh-cn_topic_0059779141_a5585fdc82d4940c9a5b85f10b360c233"></a><a name="zh-cn_topic_0059779141_a5585fdc82d4940c9a5b85f10b360c233"></a>通信对端DN在本DN内的标识编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r526e13e4f23a4efe8d38bd8444f75233"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_af37f8c16a0304606bacb317bf7e17158"><a name="zh-cn_topic_0059779141_af37f8c16a0304606bacb317bf7e17158"></a><a name="zh-cn_topic_0059779141_af37f8c16a0304606bacb317bf7e17158"></a>sid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p33970037972"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p33970037972"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p33970037972"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p198964145755"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p198964145755"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p198964145755"></a>通信流在物理连接中的标识编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r62ec42c66d314f60bcd6861d0929ebe3"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a94f87b0418b640ac96f521d726796ea8"><a name="zh-cn_topic_0059779141_a94f87b0418b640ac96f521d726796ea8"></a><a name="zh-cn_topic_0059779141_a94f87b0418b640ac96f521d726796ea8"></a>tcp_sock</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p39628136972"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p39628136972"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p39628136972"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_ae57647c6b82c4f65a44a36c9a3b868ac"><a name="zh-cn_topic_0059779141_ae57647c6b82c4f65a44a36c9a3b868ac"></a><a name="zh-cn_topic_0059779141_ae57647c6b82c4f65a44a36c9a3b868ac"></a>通信流所使用的tcp通信socket。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_ra4fcd54101f4402eb0fa073caeb20ba0"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a2cf2a388f7974553a3951bbffe56a18f"><a name="zh-cn_topic_0059779141_a2cf2a388f7974553a3951bbffe56a18f"></a><a name="zh-cn_topic_0059779141_a2cf2a388f7974553a3951bbffe56a18f"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_a3ee979c5ac274b2e80bd57b286cc2ce3"><a name="zh-cn_topic_0059779141_a3ee979c5ac274b2e80bd57b286cc2ce3"></a><a name="zh-cn_topic_0059779141_a3ee979c5ac274b2e80bd57b286cc2ce3"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a24c291507dea480c80264d0e15a0b928"><a name="zh-cn_topic_0059779141_a24c291507dea480c80264d0e15a0b928"></a><a name="zh-cn_topic_0059779141_a24c291507dea480c80264d0e15a0b928"></a>通信流当前的状态。</p>
<a name="ul1326154815220"></a><a name="ul1326154815220"></a><ul id="ul1326154815220"><li>UNKNOWN：表示当前逻辑连接状态未知。</li><li>READY：表示逻辑连接已就绪。</li><li>RUN：表示逻辑连接发送报文正常。</li><li>HOLD：表示逻辑连接发送报文等待中。</li><li>CLOSED：表示关闭逻辑连接。</li><li>TO_CLOSED：表示将会关闭逻辑连接。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r6d7ed552745b4444850bbb6b489017a4"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a47333f97cd5c4ad98d04393c9ae5e194"><a name="zh-cn_topic_0059779141_a47333f97cd5c4ad98d04393c9ae5e194"></a><a name="zh-cn_topic_0059779141_a47333f97cd5c4ad98d04393c9ae5e194"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p21734989973"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p21734989973"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p21734989973"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a752f44b7b1af4c1badfc5d4bdd3a961c"><a name="zh-cn_topic_0059779141_a752f44b7b1af4c1badfc5d4bdd3a961c"></a><a name="zh-cn_topic_0059779141_a752f44b7b1af4c1badfc5d4bdd3a961c"></a>通信流对应的debug_query_id编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_rc0c735febb6743c2a3c8df672cd27800"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a57e554449d0e4f2ab915200a0c9eb2f0"><a name="zh-cn_topic_0059779141_a57e554449d0e4f2ab915200a0c9eb2f0"></a><a name="zh-cn_topic_0059779141_a57e554449d0e4f2ab915200a0c9eb2f0"></a>pn_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p19932344973"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p19932344973"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p19932344973"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_abab845739cca40a09724d7c1f63ab100"><a name="zh-cn_topic_0059779141_abab845739cca40a09724d7c1f63ab100"></a><a name="zh-cn_topic_0059779141_abab845739cca40a09724d7c1f63ab100"></a>通信流所执行查询的plan_node_id编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r7ee3b713e086445190eb1995cb7a0f78"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_ac163b6b12fb14c1b956b49d9a5d9f9eb"><a name="zh-cn_topic_0059779141_ac163b6b12fb14c1b956b49d9a5d9f9eb"></a><a name="zh-cn_topic_0059779141_ac163b6b12fb14c1b956b49d9a5d9f9eb"></a>send_smp</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_abcfe04b3c07c442eaa5d2e7694005358"><a name="zh-cn_topic_0059779141_abcfe04b3c07c442eaa5d2e7694005358"></a><a name="zh-cn_topic_0059779141_abcfe04b3c07c442eaa5d2e7694005358"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a091435a8efbb40b7825e5051f245fb6c"><a name="zh-cn_topic_0059779141_a091435a8efbb40b7825e5051f245fb6c"></a><a name="zh-cn_topic_0059779141_a091435a8efbb40b7825e5051f245fb6c"></a>通信流所执行查询send端的smpid编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r1653397bc65747d1bddd4fee7379cfab"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a1f22bfb3fac542849d0f3c9b1eb5ec86"><a name="zh-cn_topic_0059779141_a1f22bfb3fac542849d0f3c9b1eb5ec86"></a><a name="zh-cn_topic_0059779141_a1f22bfb3fac542849d0f3c9b1eb5ec86"></a>recv_smp</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_aea671ff67aef4eaea2ef7970e61e8f52"><a name="zh-cn_topic_0059779141_aea671ff67aef4eaea2ef7970e61e8f52"></a><a name="zh-cn_topic_0059779141_aea671ff67aef4eaea2ef7970e61e8f52"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a4d305c562c6d46fd9bc9051d4276ef63"><a name="zh-cn_topic_0059779141_a4d305c562c6d46fd9bc9051d4276ef63"></a><a name="zh-cn_topic_0059779141_a4d305c562c6d46fd9bc9051d4276ef63"></a>通信流所执行查询recv端的smpid编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r625cdb1a2d3a4346a62a797d441df582"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_ac11709a752cf448ab672a14b204c6330"><a name="zh-cn_topic_0059779141_ac11709a752cf448ab672a14b204c6330"></a><a name="zh-cn_topic_0059779141_ac11709a752cf448ab672a14b204c6330"></a>send_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_aff76778f3fed4435b4944ba6c485584d"><a name="zh-cn_topic_0059779141_aff76778f3fed4435b4944ba6c485584d"></a><a name="zh-cn_topic_0059779141_aff76778f3fed4435b4944ba6c485584d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_ab25ba1958de24c61b951a659800fbd0e"><a name="zh-cn_topic_0059779141_ab25ba1958de24c61b951a659800fbd0e"></a><a name="zh-cn_topic_0059779141_ab25ba1958de24c61b951a659800fbd0e"></a>通信流发送的数据总量，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r09217148be1744d9b844e535836b40e1"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_aaefdc99d86744195bca264e383a6e743"><a name="zh-cn_topic_0059779141_aaefdc99d86744195bca264e383a6e743"></a><a name="zh-cn_topic_0059779141_aaefdc99d86744195bca264e383a6e743"></a>time</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_a7a673be5d3b54767b8b01ef4d2c90194"><a name="zh-cn_topic_0059779141_a7a673be5d3b54767b8b01ef4d2c90194"></a><a name="zh-cn_topic_0059779141_a7a673be5d3b54767b8b01ef4d2c90194"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_af3d686b2f0cf4d73897fe86ef1e6d6b2"><a name="zh-cn_topic_0059779141_af3d686b2f0cf4d73897fe86ef1e6d6b2"></a><a name="zh-cn_topic_0059779141_af3d686b2f0cf4d73897fe86ef1e6d6b2"></a>通信流当前生命周期使用时长，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_rea48d0bdd3f8455eb531c65d69db545c"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p166891145755"><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p166891145755"></a><a name="zh-cn_topic_0059779141_zh-cn_topic_0058965809_p166891145755"></a>speed</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_a7e2b74bd093e4e1aaccc3142ba431f9a"><a name="zh-cn_topic_0059779141_a7e2b74bd093e4e1aaccc3142ba431f9a"></a><a name="zh-cn_topic_0059779141_a7e2b74bd093e4e1aaccc3142ba431f9a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a85f281298f154ce29a74ec3f9531e9ff"><a name="zh-cn_topic_0059779141_a85f281298f154ce29a74ec3f9531e9ff"></a><a name="zh-cn_topic_0059779141_a85f281298f154ce29a74ec3f9531e9ff"></a>通信流的平均发送速率，单位Byte/s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_rcf1b7357423845f8b119ffdd7d1e6a9e"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a3d99d8eccd084f14805223a31f64c400"><a name="zh-cn_topic_0059779141_a3d99d8eccd084f14805223a31f64c400"></a><a name="zh-cn_topic_0059779141_a3d99d8eccd084f14805223a31f64c400"></a>quota</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_af59d9aaa31794598b421c5fc5c9daa43"><a name="zh-cn_topic_0059779141_af59d9aaa31794598b421c5fc5c9daa43"></a><a name="zh-cn_topic_0059779141_af59d9aaa31794598b421c5fc5c9daa43"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_a2576fb9c7b0d4237b024c41ad6e72606"><a name="zh-cn_topic_0059779141_a2576fb9c7b0d4237b024c41ad6e72606"></a><a name="zh-cn_topic_0059779141_a2576fb9c7b0d4237b024c41ad6e72606"></a>通信流当前的通信配额值，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779141_r4635142c17df4b65ab1dfd7331fb976e"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779141_a04bc450f960a4911a8fe46ce1b1f9ce8"><a name="zh-cn_topic_0059779141_a04bc450f960a4911a8fe46ce1b1f9ce8"></a><a name="zh-cn_topic_0059779141_a04bc450f960a4911a8fe46ce1b1f9ce8"></a>wait_quota</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779141_a6d233be1b9eb4cb1964133290ed6845e"><a name="zh-cn_topic_0059779141_a6d233be1b9eb4cb1964133290ed6845e"></a><a name="zh-cn_topic_0059779141_a6d233be1b9eb4cb1964133290ed6845e"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779141_aaa3aebb688014866a2c2fcbcfc2be183"><a name="zh-cn_topic_0059779141_aaa3aebb688014866a2c2fcbcfc2be183"></a><a name="zh-cn_topic_0059779141_aaa3aebb688014866a2c2fcbcfc2be183"></a>通信流等待quota值产生的额外时间开销，单位ms。</p>
</td>
</tr>
</tbody>
</table>

