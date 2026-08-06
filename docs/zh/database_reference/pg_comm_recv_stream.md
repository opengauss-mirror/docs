# PG\_COMM\_RECV\_STREAM

PG\_COMM\_RECV\_STREAM视图展示节点上所有的通信库接收流状态。

**表 1**  PG\_COMM\_RECV\_STREAM字段

<a name="zh-cn_topic_0059778025_t616a7895dbd144569136454bbb7baea0"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778025_rb8f35319242c42569fd02fd7dce8cc6c"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778025_acebe9b8aefc84ec1a7a9c072db7b3840"><a name="zh-cn_topic_0059778025_acebe9b8aefc84ec1a7a9c072db7b3840"></a><a name="zh-cn_topic_0059778025_acebe9b8aefc84ec1a7a9c072db7b3840"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778025_a2a25b1a8ece94cda940006f6bbb2897d"><a name="zh-cn_topic_0059778025_a2a25b1a8ece94cda940006f6bbb2897d"></a><a name="zh-cn_topic_0059778025_a2a25b1a8ece94cda940006f6bbb2897d"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778025_a3363864794de4a378bdf1722a324696b"><a name="zh-cn_topic_0059778025_a3363864794de4a378bdf1722a324696b"></a><a name="zh-cn_topic_0059778025_a3363864794de4a378bdf1722a324696b"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778025_rdcc0520b1c1d42cbab24bfb9b15ec5a3"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p563244145640"><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p563244145640"></a><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p563244145640"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a1548ea09df904a07b226e53371d3239c"><a name="zh-cn_topic_0059778025_a1548ea09df904a07b226e53371d3239c"></a><a name="zh-cn_topic_0059778025_a1548ea09df904a07b226e53371d3239c"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a3063ce597889471397552426e80a91ee"><a name="zh-cn_topic_0059778025_a3063ce597889471397552426e80a91ee"></a><a name="zh-cn_topic_0059778025_a3063ce597889471397552426e80a91ee"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_rb94b0eb4dd8d4d618a6c1a1a1b7049fb"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a96d57e79953f442583003f5eec4c76f7"><a name="zh-cn_topic_0059778025_a96d57e79953f442583003f5eec4c76f7"></a><a name="zh-cn_topic_0059778025_a96d57e79953f442583003f5eec4c76f7"></a>local_tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a879ec8e847824ade8ff05eeabd34a563"><a name="zh-cn_topic_0059778025_a879ec8e847824ade8ff05eeabd34a563"></a><a name="zh-cn_topic_0059778025_a879ec8e847824ade8ff05eeabd34a563"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_adbbe5c13fc4244ec808640472ac7d4f6"><a name="zh-cn_topic_0059778025_adbbe5c13fc4244ec808640472ac7d4f6"></a><a name="zh-cn_topic_0059778025_adbbe5c13fc4244ec808640472ac7d4f6"></a>使用此通信流的线程ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r4623a2a726324077a105207526b42d9b"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a42d87fdffd0f4e68bea7d10b6fc939a8"><a name="zh-cn_topic_0059778025_a42d87fdffd0f4e68bea7d10b6fc939a8"></a><a name="zh-cn_topic_0059778025_a42d87fdffd0f4e68bea7d10b6fc939a8"></a>remote_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_ac170d1953ce64656b88f67d53681faa7"><a name="zh-cn_topic_0059778025_ac170d1953ce64656b88f67d53681faa7"></a><a name="zh-cn_topic_0059778025_ac170d1953ce64656b88f67d53681faa7"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_ab9c1087ed49c4de2b7b13c632dd2ca92"><a name="zh-cn_topic_0059778025_ab9c1087ed49c4de2b7b13c632dd2ca92"></a><a name="zh-cn_topic_0059778025_ab9c1087ed49c4de2b7b13c632dd2ca92"></a>连接对端节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r455d3f6626cf4b5ea7274009285f70c7"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_adbb2b9b3bd54481394f93fd363f410bc"><a name="zh-cn_topic_0059778025_adbb2b9b3bd54481394f93fd363f410bc"></a><a name="zh-cn_topic_0059778025_adbb2b9b3bd54481394f93fd363f410bc"></a>remote_tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a90d714fc85744873a9e6b01ac99b1869"><a name="zh-cn_topic_0059778025_a90d714fc85744873a9e6b01ac99b1869"></a><a name="zh-cn_topic_0059778025_a90d714fc85744873a9e6b01ac99b1869"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_aa98e9dc2e3324ba98b01e92f8046ea13"><a name="zh-cn_topic_0059778025_aa98e9dc2e3324ba98b01e92f8046ea13"></a><a name="zh-cn_topic_0059778025_aa98e9dc2e3324ba98b01e92f8046ea13"></a>连接对端线程ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r8e68fd3e0a1a432e81ab743c7c00a137"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a12e6e4736b924aa89098a8ebf10257cd"><a name="zh-cn_topic_0059778025_a12e6e4736b924aa89098a8ebf10257cd"></a><a name="zh-cn_topic_0059778025_a12e6e4736b924aa89098a8ebf10257cd"></a>idx</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_ab7407cf08fda4c44a54c7bc5a0133521"><a name="zh-cn_topic_0059778025_ab7407cf08fda4c44a54c7bc5a0133521"></a><a name="zh-cn_topic_0059778025_ab7407cf08fda4c44a54c7bc5a0133521"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a8853331624ee4692830d282456e0e9bb"><a name="zh-cn_topic_0059778025_a8853331624ee4692830d282456e0e9bb"></a><a name="zh-cn_topic_0059778025_a8853331624ee4692830d282456e0e9bb"></a>通信对端DN在本DN内的标识编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_ra3d83aa1a30f41c69da7f4c900bfea9f"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_abee11dc8e08a47588100b1c33eff9630"><a name="zh-cn_topic_0059778025_abee11dc8e08a47588100b1c33eff9630"></a><a name="zh-cn_topic_0059778025_abee11dc8e08a47588100b1c33eff9630"></a>sid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p42675749946"><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p42675749946"></a><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p42675749946"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a0d608ec9ffac4edd947a66eef624eeed"><a name="zh-cn_topic_0059778025_a0d608ec9ffac4edd947a66eef624eeed"></a><a name="zh-cn_topic_0059778025_a0d608ec9ffac4edd947a66eef624eeed"></a>通信流在物理连接中的标识编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r7643ef74f99b4d2fbe5510b91d5202b5"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a1f3b7a382a7a4c2fb05b5f2708e47036"><a name="zh-cn_topic_0059778025_a1f3b7a382a7a4c2fb05b5f2708e47036"></a><a name="zh-cn_topic_0059778025_a1f3b7a382a7a4c2fb05b5f2708e47036"></a>tcp_sock</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p54672817946"><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p54672817946"></a><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p54672817946"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a7484a706cd79492385aeaebeadd0ed9a"><a name="zh-cn_topic_0059778025_a7484a706cd79492385aeaebeadd0ed9a"></a><a name="zh-cn_topic_0059778025_a7484a706cd79492385aeaebeadd0ed9a"></a>通信流所使用的tcp通信socket。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r00c6d4225ead4e1d95a6ebd4f3da9505"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_acdca3a8110374cf886daff13c8e5a8fa"><a name="zh-cn_topic_0059778025_acdca3a8110374cf886daff13c8e5a8fa"></a><a name="zh-cn_topic_0059778025_acdca3a8110374cf886daff13c8e5a8fa"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_aa1a32579905d4d06b2c30d55c5350f72"><a name="zh-cn_topic_0059778025_aa1a32579905d4d06b2c30d55c5350f72"></a><a name="zh-cn_topic_0059778025_aa1a32579905d4d06b2c30d55c5350f72"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_acb2529679eed4ed7b54c9707cef99ee1"><a name="zh-cn_topic_0059778025_acb2529679eed4ed7b54c9707cef99ee1"></a><a name="zh-cn_topic_0059778025_acb2529679eed4ed7b54c9707cef99ee1"></a>通信流当前的状态。</p>
<a name="ul1326154815220"></a><a name="ul1326154815220"></a><ul id="ul1326154815220"><li>UNKNOWN：表示当前逻辑连接状态未知。</li><li>READY：表示逻辑连接已就绪。</li><li>RUN：表示逻辑连接发送报文正常。</li><li>HOLD：表示逻辑连接发送报文等待中。</li><li>CLOSED：表示关闭逻辑连接。</li><li>TO_CLOSED：表示将会关闭逻辑连接。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r275e5429893c4ffe9f91c03ca7263cab"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a592a1be18b0046d6a0b9c8f7cd9120ca"><a name="zh-cn_topic_0059778025_a592a1be18b0046d6a0b9c8f7cd9120ca"></a><a name="zh-cn_topic_0059778025_a592a1be18b0046d6a0b9c8f7cd9120ca"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p27606619413"><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p27606619413"></a><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p27606619413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_aa17b77f30e4c4ddcb7f4f98b2eb65454"><a name="zh-cn_topic_0059778025_aa17b77f30e4c4ddcb7f4f98b2eb65454"></a><a name="zh-cn_topic_0059778025_aa17b77f30e4c4ddcb7f4f98b2eb65454"></a>通信流对应的debug_query_id编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_rcfdbfe768028400391ce939b7c60e35a"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a5139a98a08494a95a3a0b69f3f1fbdb4"><a name="zh-cn_topic_0059778025_a5139a98a08494a95a3a0b69f3f1fbdb4"></a><a name="zh-cn_topic_0059778025_a5139a98a08494a95a3a0b69f3f1fbdb4"></a>pn_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p590759559413"><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p590759559413"></a><a name="zh-cn_topic_0059778025_zh-cn_topic_0058966213_p590759559413"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_accf25480f98f43b69db7882386b9d796"><a name="zh-cn_topic_0059778025_accf25480f98f43b69db7882386b9d796"></a><a name="zh-cn_topic_0059778025_accf25480f98f43b69db7882386b9d796"></a>通信流所执行查询的plan_node_id编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r57d81e96dcb546889c1f75716dadf9ef"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a1b02234df3f74569ab6a448e46377312"><a name="zh-cn_topic_0059778025_a1b02234df3f74569ab6a448e46377312"></a><a name="zh-cn_topic_0059778025_a1b02234df3f74569ab6a448e46377312"></a>send_smp</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a96552f9416c34f269f272402e50b5f12"><a name="zh-cn_topic_0059778025_a96552f9416c34f269f272402e50b5f12"></a><a name="zh-cn_topic_0059778025_a96552f9416c34f269f272402e50b5f12"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_ad42f10d667a948ec8a3a1a6f75090866"><a name="zh-cn_topic_0059778025_ad42f10d667a948ec8a3a1a6f75090866"></a><a name="zh-cn_topic_0059778025_ad42f10d667a948ec8a3a1a6f75090866"></a>通信流所执行查询send端的smpid编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r844499b9ba574b64a3ae52a91c525190"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a1588a8efa11440e5a2c6fdcfef3036f4"><a name="zh-cn_topic_0059778025_a1588a8efa11440e5a2c6fdcfef3036f4"></a><a name="zh-cn_topic_0059778025_a1588a8efa11440e5a2c6fdcfef3036f4"></a>recv_smp</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a1773dd010d0540438bc52b290f763bbb"><a name="zh-cn_topic_0059778025_a1773dd010d0540438bc52b290f763bbb"></a><a name="zh-cn_topic_0059778025_a1773dd010d0540438bc52b290f763bbb"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a4378aa9cbc564fef9e6cd9071f0305b3"><a name="zh-cn_topic_0059778025_a4378aa9cbc564fef9e6cd9071f0305b3"></a><a name="zh-cn_topic_0059778025_a4378aa9cbc564fef9e6cd9071f0305b3"></a>通信流所执行查询recv端的smpid编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r5db8a153a2604514accc85a7c9766211"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a8c9ac4fa57db46e4a619f8c484e8aed6"><a name="zh-cn_topic_0059778025_a8c9ac4fa57db46e4a619f8c484e8aed6"></a><a name="zh-cn_topic_0059778025_a8c9ac4fa57db46e4a619f8c484e8aed6"></a>recv_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_aeb22f2fd67d94b50ae793015ba5035cc"><a name="zh-cn_topic_0059778025_aeb22f2fd67d94b50ae793015ba5035cc"></a><a name="zh-cn_topic_0059778025_aeb22f2fd67d94b50ae793015ba5035cc"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_aab1c6a9066134d86af05c4069ecfca4f"><a name="zh-cn_topic_0059778025_aab1c6a9066134d86af05c4069ecfca4f"></a><a name="zh-cn_topic_0059778025_aab1c6a9066134d86af05c4069ecfca4f"></a>通信流接收的数据总量，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_rddeb3d43ce364ac083994b7547e37112"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a68332501908c48aa89a378050dd843b7"><a name="zh-cn_topic_0059778025_a68332501908c48aa89a378050dd843b7"></a><a name="zh-cn_topic_0059778025_a68332501908c48aa89a378050dd843b7"></a>time</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a12b887b8bb274a3a9b5c79fdd2f34bc8"><a name="zh-cn_topic_0059778025_a12b887b8bb274a3a9b5c79fdd2f34bc8"></a><a name="zh-cn_topic_0059778025_a12b887b8bb274a3a9b5c79fdd2f34bc8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_af603cbedd0fc4c138e5e331a4119e453"><a name="zh-cn_topic_0059778025_af603cbedd0fc4c138e5e331a4119e453"></a><a name="zh-cn_topic_0059778025_af603cbedd0fc4c138e5e331a4119e453"></a>通信流当前生命周期使用时长，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r6b995b498d0c4afc9e37fa9b2b1ac783"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a9b6a295e338d4ec0a30788fa610f8503"><a name="zh-cn_topic_0059778025_a9b6a295e338d4ec0a30788fa610f8503"></a><a name="zh-cn_topic_0059778025_a9b6a295e338d4ec0a30788fa610f8503"></a>speed</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_afbea9e0c51d1474cb01d92ef41fb1759"><a name="zh-cn_topic_0059778025_afbea9e0c51d1474cb01d92ef41fb1759"></a><a name="zh-cn_topic_0059778025_afbea9e0c51d1474cb01d92ef41fb1759"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a835d7b43315d4944859fb9b5e92f8c61"><a name="zh-cn_topic_0059778025_a835d7b43315d4944859fb9b5e92f8c61"></a><a name="zh-cn_topic_0059778025_a835d7b43315d4944859fb9b5e92f8c61"></a>通信流的平均接收速率，单位Byte/s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_r22dea4d62538400fb0ed36c0d60d52d5"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a5915406af4bf4112b8368676cb6d3362"><a name="zh-cn_topic_0059778025_a5915406af4bf4112b8368676cb6d3362"></a><a name="zh-cn_topic_0059778025_a5915406af4bf4112b8368676cb6d3362"></a>quota</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_ab3d6ab8881834d729f3921b0a1aee1a3"><a name="zh-cn_topic_0059778025_ab3d6ab8881834d729f3921b0a1aee1a3"></a><a name="zh-cn_topic_0059778025_ab3d6ab8881834d729f3921b0a1aee1a3"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a78192a6e7a0d4d479514fb5d09b97739"><a name="zh-cn_topic_0059778025_a78192a6e7a0d4d479514fb5d09b97739"></a><a name="zh-cn_topic_0059778025_a78192a6e7a0d4d479514fb5d09b97739"></a>通信流当前的通信配额值，单位Byte。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778025_rb9adbb881c2a472f9c21e4d897255b9b"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778025_a6af1a3bc01364f12b19976f2693652c2"><a name="zh-cn_topic_0059778025_a6af1a3bc01364f12b19976f2693652c2"></a><a name="zh-cn_topic_0059778025_a6af1a3bc01364f12b19976f2693652c2"></a>buff_usize</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778025_a07a6a03f536343e99ea93c098f22b215"><a name="zh-cn_topic_0059778025_a07a6a03f536343e99ea93c098f22b215"></a><a name="zh-cn_topic_0059778025_a07a6a03f536343e99ea93c098f22b215"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778025_a6d47e78c88dc432b96ed1e9026ecdecd"><a name="zh-cn_topic_0059778025_a6d47e78c88dc432b96ed1e9026ecdecd"></a><a name="zh-cn_topic_0059778025_a6d47e78c88dc432b96ed1e9026ecdecd"></a>通信流当前缓存的数据大小，单位Byte。</p>
</td>
</tr>
</tbody>
</table>
