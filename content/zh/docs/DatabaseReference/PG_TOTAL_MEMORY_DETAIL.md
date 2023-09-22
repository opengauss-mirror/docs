# PG\_TOTAL\_MEMORY\_DETAIL

PG\_TOTAL\_MEMORY\_DETAIL视图显示某个数据库节点内存使用情况。

此视图依赖内存保护功能开启。

**表 1**  PG\_TOTAL\_MEMORY\_DETAIL字段

<a name="zh-cn_topic_0059778356_t11b74f8fb7cd4bd8b53f72d8a89440c9"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778356_r5842d7f7603e497cb22101dfea845472"><th class="cellrowborder" valign="top" width="20.64%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"><a name="zh-cn_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"></a><a name="zh-cn_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.810000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778356_abf389d4d152b452d832a966b9c967aec"><a name="zh-cn_topic_0059778356_abf389d4d152b452d832a966b9c967aec"></a><a name="zh-cn_topic_0059778356_abf389d4d152b452d832a966b9c967aec"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.550000000000004%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"><a name="zh-cn_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"></a><a name="zh-cn_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778356_r3fa5c62a2b324f449e54f1c1a7df2de8"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778356_aab1c9e1ae5614c068bd899d6361e1493"><a name="zh-cn_topic_0059778356_aab1c9e1ae5614c068bd899d6361e1493"></a><a name="zh-cn_topic_0059778356_aab1c9e1ae5614c068bd899d6361e1493"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p314546091610"><a name="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p314546091610"></a><a name="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p314546091610"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778356_a2c4e446b07bf4ecfb97c766e62eef5b5"><a name="zh-cn_topic_0059778356_a2c4e446b07bf4ecfb97c766e62eef5b5"></a><a name="zh-cn_topic_0059778356_a2c4e446b07bf4ecfb97c766e62eef5b5"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778356_rf38881ac52a945d6944ba0502b0e83c4"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778356_a7640def7b45c4a00b592ee94674a4c44"><a name="zh-cn_topic_0059778356_a7640def7b45c4a00b592ee94674a4c44"></a><a name="zh-cn_topic_0059778356_a7640def7b45c4a00b592ee94674a4c44"></a>memorytype</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p276575391610"><a name="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p276575391610"></a><a name="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p276575391610"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778356_a23fd9fdcbd644fbd9bc1f1494b608912"><a name="zh-cn_topic_0059778356_a23fd9fdcbd644fbd9bc1f1494b608912"></a><a name="zh-cn_topic_0059778356_a23fd9fdcbd644fbd9bc1f1494b608912"></a>内存的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778356_rdeb045b57c5440c6876aa5e1fddf3793"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778356_aa778a7db57e24788a2bd20ba6cfac6f7"><a name="zh-cn_topic_0059778356_aa778a7db57e24788a2bd20ba6cfac6f7"></a><a name="zh-cn_topic_0059778356_aa778a7db57e24788a2bd20ba6cfac6f7"></a>memorymbytes</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p430929891610"><a name="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p430929891610"></a><a name="zh-cn_topic_0059778356_zh-cn_topic_0058965996_p430929891610"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778356_a4592596e68c14ea1b6ff11ea6f9d1537"><a name="zh-cn_topic_0059778356_a4592596e68c14ea1b6ff11ea6f9d1537"></a><a name="zh-cn_topic_0059778356_a4592596e68c14ea1b6ff11ea6f9d1537"></a>内存使用的大小，单位为MB。</p>
</td>
</tr>
</tbody>
</table>

