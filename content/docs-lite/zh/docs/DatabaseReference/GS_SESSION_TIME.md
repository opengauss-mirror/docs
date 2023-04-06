# GS\_SESSION\_TIME<a name="ZH-CN_TOPIC_0289899934"></a>

GS\_SESSION\_TIME视图用于统计会话线程的运行时间信息，及各执行阶段所消耗时间。

**表 1**  GS\_SESSION\_TIME字段

<a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_tee94be7f1e9844499b8a7a29d048c03d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_r66cb5f4118934b0c99c2321e24efc11a"><th class="cellrowborder" valign="top" width="18.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a7a6c7612a3ed4171b29b69d8d1da803a"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a7a6c7612a3ed4171b29b69d8d1da803a"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a7a6c7612a3ed4171b29b69d8d1da803a"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.99%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a0261bf1b5dea41ac9fabea55774b0f0f"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a0261bf1b5dea41ac9fabea55774b0f0f"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a0261bf1b5dea41ac9fabea55774b0f0f"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.160000000000004%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a1333020991a64248bdfeb99fd5ca5e75"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a1333020991a64248bdfeb99fd5ca5e75"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a1333020991a64248bdfeb99fd5ca5e75"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_rd51611663081448fbbb5ef9165b406f8"><td class="cellrowborder" valign="top" width="18.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a2f1a54e5c6444907a56ee3e11f11c280"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a2f1a54e5c6444907a56ee3e11f11c280"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a2f1a54e5c6444907a56ee3e11f11c280"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="19.99%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a17bee04f6d27400aa18317c3695f5d9c"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a17bee04f6d27400aa18317c3695f5d9c"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a17bee04f6d27400aa18317c3695f5d9c"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.160000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a4cc6d686a24d4630b7d4595d22153ecc"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a4cc6d686a24d4630b7d4595d22153ecc"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a4cc6d686a24d4630b7d4595d22153ecc"></a>线程标识+线程启动时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_r3208f9cf42f24d0bacb8463e49e5ae68"><td class="cellrowborder" valign="top" width="18.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a337cfc8e3190485b88179b774576c539"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a337cfc8e3190485b88179b774576c539"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a337cfc8e3190485b88179b774576c539"></a>stat_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.99%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_aa9d44edc3f2946f88f9eaca03e55a169"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_aa9d44edc3f2946f88f9eaca03e55a169"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_aa9d44edc3f2946f88f9eaca03e55a169"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.160000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_aa1520f7e804e40b7b9b3fb49802ff745"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_aa1520f7e804e40b7b9b3fb49802ff745"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_aa1520f7e804e40b7b9b3fb49802ff745"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_red9feab42b7e4bf78807d95bb8dbcaf9"><td class="cellrowborder" valign="top" width="18.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a9eed1a72dfca4fedb633edcb7f60f569"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a9eed1a72dfca4fedb633edcb7f60f569"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a9eed1a72dfca4fedb633edcb7f60f569"></a>stat_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.99%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_ac318784fa1a346f0a5ed7ee8d2c0e64b"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_ac318784fa1a346f0a5ed7ee8d2c0e64b"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_ac318784fa1a346f0a5ed7ee8d2c0e64b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.160000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a5053274607aa4a9ba9bc296667d45157"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a5053274607aa4a9ba9bc296667d45157"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a5053274607aa4a9ba9bc296667d45157"></a>会话类型名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_rf08633040a794898a782067904b7e905"><td class="cellrowborder" valign="top" width="18.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a29e424d32b47473c8fc587410dc593c2"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a29e424d32b47473c8fc587410dc593c2"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a29e424d32b47473c8fc587410dc593c2"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="19.99%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a8f6a4faa6be940449a726178b1ebfb57"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a8f6a4faa6be940449a726178b1ebfb57"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a8f6a4faa6be940449a726178b1ebfb57"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.160000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a99e89c7dc80946f59107b570c94bb41a"><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a99e89c7dc80946f59107b570c94bb41a"></a><a name="zh-cn_topic_0283136658_zh-cn_topic_0237122510_zh-cn_topic_0059778463_a99e89c7dc80946f59107b570c94bb41a"></a>会话值。</p>
</td>
</tr>
</tbody>
</table>

