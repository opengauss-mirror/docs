# GS\_SESSION\_STAT<a name="ZH-CN_TOPIC_0289899893"></a>

GS\_SESSION\_STAT视图以会话线程或AutoVacuum线程为单位，统计会话状态信息。

**表 1**  GS\_SESSION\_STAT字段

<a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_taa9c0ad64dbd486ba60182cad9d4c5ad"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_rd3ff157bb88049dcb6c3c543995bd3bf"><th class="cellrowborder" valign="top" width="22.43%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a410cbcff22954a1fa8dde88fd8a0babe"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a410cbcff22954a1fa8dde88fd8a0babe"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a410cbcff22954a1fa8dde88fd8a0babe"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.34%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_aadec285b97a047f6bbde60df87927de5"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_aadec285b97a047f6bbde60df87927de5"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_aadec285b97a047f6bbde60df87927de5"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63.23%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a1234d274a0c645ce9a2bb143efc617c0"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a1234d274a0c645ce9a2bb143efc617c0"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a1234d274a0c645ce9a2bb143efc617c0"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_r44de235035c14d6795b04c35eb2f3dd7"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a33d1227ed25741669b8ee96089393ff0"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a33d1227ed25741669b8ee96089393ff0"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a33d1227ed25741669b8ee96089393ff0"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="14.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_afcabe19c08bf4f52847c3c7308c50622"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_afcabe19c08bf4f52847c3c7308c50622"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_afcabe19c08bf4f52847c3c7308c50622"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a4f01f0a249894f4f9d7a7532df369dd3"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a4f01f0a249894f4f9d7a7532df369dd3"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a4f01f0a249894f4f9d7a7532df369dd3"></a>线程标识+线程启动时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_rb30e91e84b644bbea50fb4c1924d767f"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a85117f1d08084ce2b02f9d642c7f1941"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a85117f1d08084ce2b02f9d642c7f1941"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a85117f1d08084ce2b02f9d642c7f1941"></a>statid</p>
</td>
<td class="cellrowborder" valign="top" width="14.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a181b8ff501e34ca5899feef01288d0d9"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a181b8ff501e34ca5899feef01288d0d9"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a181b8ff501e34ca5899feef01288d0d9"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="63.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_af8ed4c47011c49068ee8120790bca4da"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_af8ed4c47011c49068ee8120790bca4da"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_af8ed4c47011c49068ee8120790bca4da"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_rcf0d06c293cb40f6b277c27d3604accf"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_aac30ec8611f84238ad4377430c6e55fa"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_aac30ec8611f84238ad4377430c6e55fa"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_aac30ec8611f84238ad4377430c6e55fa"></a>statname</p>
</td>
<td class="cellrowborder" valign="top" width="14.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a6d482d383524428f893283262d50bab1"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a6d482d383524428f893283262d50bab1"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a6d482d383524428f893283262d50bab1"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_ad05c4232499c422e87b1734b2971b373"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_ad05c4232499c422e87b1734b2971b373"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_ad05c4232499c422e87b1734b2971b373"></a>统计会话名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_r4efcd3c1826843e38ad5e36a33b1785a"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a3507053d37054bb68732b1c51d8a4d26"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a3507053d37054bb68732b1c51d8a4d26"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a3507053d37054bb68732b1c51d8a4d26"></a>statunit</p>
</td>
<td class="cellrowborder" valign="top" width="14.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a2f8ac87ea62444b39461ddc81f40da00"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a2f8ac87ea62444b39461ddc81f40da00"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a2f8ac87ea62444b39461ddc81f40da00"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_afdc01cb7f558405ea109e1416f289738"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_afdc01cb7f558405ea109e1416f289738"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_afdc01cb7f558405ea109e1416f289738"></a>统计会话单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_rbcd8ba1091bf4f48ae75921673d9ecbb"><td class="cellrowborder" valign="top" width="22.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a6a36b8d979034037b76a401def025d2d"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a6a36b8d979034037b76a401def025d2d"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a6a36b8d979034037b76a401def025d2d"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="14.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a56e2d6facb9641ff80892524acd0d043"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a56e2d6facb9641ff80892524acd0d043"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_a56e2d6facb9641ff80892524acd0d043"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_ab195abbf35bc49888333e517e8da93f2"><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_ab195abbf35bc49888333e517e8da93f2"></a><a name="zh-cn_topic_0283137562_zh-cn_topic_0237122509_zh-cn_topic_0059778698_ab195abbf35bc49888333e517e8da93f2"></a>统计会话值。</p>
</td>
</tr>
</tbody>
</table>

