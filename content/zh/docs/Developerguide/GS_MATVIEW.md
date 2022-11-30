# GS\_MATVIEW<a name="ZH-CN_TOPIC_0000001133666345"></a>

GS\_MATVIEW系统表提供了关于数据库中每一个物化视图的信息。

**表 1**  GS\_MATVIEW字段

<a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_tef4747cefaab47fe89062c4899b9dd81"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_r7bbada6239ec422cb76d6886a6528dbf"><th class="cellrowborder" valign="top" width="20.16%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a14c20134f2fa468bba56c9b8e5306278"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a14c20134f2fa468bba56c9b8e5306278"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a14c20134f2fa468bba56c9b8e5306278"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.77%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a5116e0331a5a4c22938b4d1c40bba627"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a5116e0331a5a4c22938b4d1c40bba627"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a5116e0331a5a4c22938b4d1c40bba627"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59.07%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_af663d904f75649d48d712ae335e3edfe"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_af663d904f75649d48d712ae335e3edfe"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_af663d904f75649d48d712ae335e3edfe"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1115192382019"><td class="cellrowborder" valign="top" width="20.16%" headers="mcps1.2.4.1.1 "><p id="p23581407147"><a name="p23581407147"></a><a name="p23581407147"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="20.77%" headers="mcps1.2.4.1.2 "><p id="p53581040101412"><a name="p53581040101412"></a><a name="p53581040101412"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.07%" headers="mcps1.2.4.1.3 "><p id="p1383513269218"><a name="p1383513269218"></a><a name="p1383513269218"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_rf7c766cddff0407bb805393c013b902a"><td class="cellrowborder" valign="top" width="20.16%" headers="mcps1.2.4.1.1 "><p id="p250910823410"><a name="p250910823410"></a><a name="p250910823410"></a>matviewid</p>
</td>
<td class="cellrowborder" valign="top" width="20.77%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a800aa141d95241c2bffae422411df91a"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a800aa141d95241c2bffae422411df91a"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a800aa141d95241c2bffae422411df91a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.07%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a0f0b904e963347098535b30a55046954"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a0f0b904e963347098535b30a55046954"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a0f0b904e963347098535b30a55046954"></a>物化视图的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_raabc99bc831f4e3da2c3078018ec184d"><td class="cellrowborder" valign="top" width="20.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a15610165a00747398a8d9ce49d307faa"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a15610165a00747398a8d9ce49d307faa"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a15610165a00747398a8d9ce49d307faa"></a>mapid</p>
</td>
<td class="cellrowborder" valign="top" width="20.77%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_aa78ed822b23d4e23b34a8becf42693e7"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_aa78ed822b23d4e23b34a8becf42693e7"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_aa78ed822b23d4e23b34a8becf42693e7"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.07%" headers="mcps1.2.4.1.3 "><p id="p273716379532"><a name="p273716379532"></a><a name="p273716379532"></a>物化视图map表的oid，map表为物化视图关联表，与物化视图一一对应。全量物化视图不存在对应的map表，该字段为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_r721bd262314643b7afead249a9c84b36"><td class="cellrowborder" valign="top" width="20.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a2f198a715e4d45d99a8356c7b47b46fd"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a2f198a715e4d45d99a8356c7b47b46fd"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a2f198a715e4d45d99a8356c7b47b46fd"></a>ivm</p>
</td>
<td class="cellrowborder" valign="top" width="20.77%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_acbcef8e6652a4744b3cc4cb08b8346a2"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_acbcef8e6652a4744b3cc4cb08b8346a2"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_acbcef8e6652a4744b3cc4cb08b8346a2"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="59.07%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a8eebe34c82274f0aafcc2eedea6eb267"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a8eebe34c82274f0aafcc2eedea6eb267"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a8eebe34c82274f0aafcc2eedea6eb267"></a>物化视图的类型，t为增量物化视图，f为全量物化视图。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136548_row1967927115416"><td class="cellrowborder" valign="top" width="20.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136548_p19967162795414"><a name="zh-cn_topic_0283136548_p19967162795414"></a><a name="zh-cn_topic_0283136548_p19967162795414"></a>needrefresh</p>
</td>
<td class="cellrowborder" valign="top" width="20.77%" headers="mcps1.2.4.1.2 "><p id="p2745161318527"><a name="p2745161318527"></a><a name="p2745161318527"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="59.07%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136548_p59679278541"><a name="zh-cn_topic_0283136548_p59679278541"></a><a name="zh-cn_topic_0283136548_p59679278541"></a>保留字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_r1f2b7df612754c9d8e88267b524c3a40"><td class="cellrowborder" valign="top" width="20.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a31db6c504cbc41f4a170ef25b5282a54"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a31db6c504cbc41f4a170ef25b5282a54"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a31db6c504cbc41f4a170ef25b5282a54"></a>refreshtime</p>
</td>
<td class="cellrowborder" valign="top" width="20.77%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_af714117bc9e440918302783fbe09bb44"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_af714117bc9e440918302783fbe09bb44"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_af714117bc9e440918302783fbe09bb44"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="59.07%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a54f43de71be1479ebba316242658c99e"><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a54f43de71be1479ebba316242658c99e"></a><a name="zh-cn_topic_0283136548_zh-cn_topic_0237122474_zh-cn_topic_0059778302_a54f43de71be1479ebba316242658c99e"></a>物化视图上一次刷新时间，若未刷新则为null。仅对增量物化视图维护该字段，全量物化视图为null。</p>
</td>
</tr>
</tbody>
</table>
