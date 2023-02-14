# GET\_GTM\_LITE\_STATUS

GET\_GTM\_LITE\_STATUS视图是获取GTM上的backupXid和csn，用来支持问题定位。

**表 1**  GET\_GTM\_LITE\_STATUS字段

<a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_t3495380ae15342f39e18626106fb3268"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_r80efe125e3b64c1296979e0b1d0fe09c"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_ac000078129ee4f7880577c4c3a279558"><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_ac000078129ee4f7880577c4c3a279558"></a><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_ac000078129ee4f7880577c4c3a279558"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a51bd1373372b493eb561d69bbecc72a9"><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a51bd1373372b493eb561d69bbecc72a9"></a><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a51bd1373372b493eb561d69bbecc72a9"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_ae056dea3748a4e4bbd7cdb4279a38dd7"><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_ae056dea3748a4e4bbd7cdb4279a38dd7"></a><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_ae056dea3748a4e4bbd7cdb4279a38dd7"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_rb780af4212d4495b8b750abc43dea56f"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a3553d84bf3ce43518bb8e52199552998"><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a3553d84bf3ce43518bb8e52199552998"></a><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a3553d84bf3ce43518bb8e52199552998"></a>backup_xid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a628800c8b90a4dd19e70ce13d990c8d4"><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a628800c8b90a4dd19e70ce13d990c8d4"></a><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_a628800c8b90a4dd19e70ce13d990c8d4"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122379_zh-cn_topic_0059778197_aa5c8ae108a924f46bfc85e45b17263db"><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_aa5c8ae108a924f46bfc85e45b17263db"></a><a name="zh-cn_topic_0237122379_zh-cn_topic_0059778197_aa5c8ae108a924f46bfc85e45b17263db"></a>GTM上的备份Xid值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122379_row68821758131411"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122379_p588275861415"><a name="zh-cn_topic_0237122379_p588275861415"></a><a name="zh-cn_topic_0237122379_p588275861415"></a>csn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122379_p158821558121414"><a name="zh-cn_topic_0237122379_p158821558121414"></a><a name="zh-cn_topic_0237122379_p158821558121414"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122379_p8882125810149"><a name="zh-cn_topic_0237122379_p8882125810149"></a><a name="zh-cn_topic_0237122379_p8882125810149"></a>GTM当前csn值。</p>
</td>
</tr>
</tbody>
</table>
