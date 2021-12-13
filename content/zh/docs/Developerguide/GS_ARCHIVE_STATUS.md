# GS_ARCHIVE_STATUS<a name="ZH-CN_TOPIC_0289900227"></a>

GS_ARCHIVE_STATUS视图查看归档信息。

**表 1**  GS_ARCHIVE_STATUS字段

<a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_tea58e341a8144f609580dd8153a114fc"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r2e428140e57e487c9bc1a031f47595e0"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae11953540f9a4618a2afe41b4975f595"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae11953540f9a4618a2afe41b4975f595"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ae11953540f9a4618a2afe41b4975f595"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a743bfcaf186946d1848ea6973df4d80d"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a743bfcaf186946d1848ea6973df4d80d"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a743bfcaf186946d1848ea6973df4d80d"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac639af594537423f87d3a070f6153653"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac639af594537423f87d3a070f6153653"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_ac639af594537423f87d3a070f6153653"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r21ccd40e77d24980a953f303a044c83f"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a54f7d6ef3b4f4f05b042ff70d122b90c"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a54f7d6ef3b4f4f05b042ff70d122b90c"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a54f7d6ef3b4f4f05b042ff70d122b90c"></a>archive_standby</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a989d619ad06e47eeb22f1f4d0755413f"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a989d619ad06e47eeb22f1f4d0755413f"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a989d619ad06e47eeb22f1f4d0755413f"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abc6449fb3afa4732965aef2c6ca21144"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abc6449fb3afa4732965aef2c6ca21144"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_abc6449fb3afa4732965aef2c6ca21144"></a>此时在做归档的节点。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_row439715123812"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p4397165116382"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p4397165116382"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p4397165116382"></a>archive_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p103971151163812"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p103971151163812"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p103971151163812"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p10397185113384"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p10397185113384"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_p10397185113384"></a>当前的归档lsn。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_r268c52dc694249ff9a37ac21e0f3221b"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_adbc8a74dc0944eccb4f151cc41bf2041"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_adbc8a74dc0944eccb4f151cc41bf2041"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_adbc8a74dc0944eccb4f151cc41bf2041"></a>last_arch_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a26b605eb5d8544eab1ee3105f8e28cb8"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a26b605eb5d8544eab1ee3105f8e28cb8"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a26b605eb5d8544eab1ee3105f8e28cb8"></a>timestamptz</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a43a50468cc1348088e9698540b49bc26"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a43a50468cc1348088e9698540b49bc26"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a43a50468cc1348088e9698540b49bc26"></a>上一次归档的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_rcd857e0d449c4f25b2702caea6963000"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7d83989002264db699f1bfd06be9bbb7"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7d83989002264db699f1bfd06be9bbb7"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a7d83989002264db699f1bfd06be9bbb7"></a>archive_path</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a88882e413fd64a0a972e6d7c8159f797"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a88882e413fd64a0a972e6d7c8159f797"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_a88882e413fd64a0a972e6d7c8159f797"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_af5d8d8d5c1d64aa8b0145472071e9f2c"><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_af5d8d8d5c1d64aa8b0145472071e9f2c"></a><a name="zh-cn_topic_0283137075_zh-cn_topic_0237122427_zh-cn_topic_0059777747_af5d8d8d5c1d64aa8b0145472071e9f2c"></a>归档路径。</p>
</td>
</tr>
</tbody>
</table>

