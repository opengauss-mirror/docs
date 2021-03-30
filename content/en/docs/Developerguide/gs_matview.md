# GS\_MATVIEW<a name="EN-US_TOPIC_0000001132818977"></a>

**GS\_MATVIEW**  provides information about each materialized view in the database.

**Table  1**  GS\_MATVIEW columns

<a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_tef4747cefaab47fe89062c4899b9dd81"></a>
<table><thead align="left"><tr id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_r7bbada6239ec422cb76d6886a6528dbf"><th class="cellrowborder" valign="top" width="28.77%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a14c20134f2fa468bba56c9b8e5306278"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a14c20134f2fa468bba56c9b8e5306278"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a14c20134f2fa468bba56c9b8e5306278"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.5%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a5116e0331a5a4c22938b4d1c40bba627"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a5116e0331a5a4c22938b4d1c40bba627"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a5116e0331a5a4c22938b4d1c40bba627"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="44.73%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_af663d904f75649d48d712ae335e3edfe"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_af663d904f75649d48d712ae335e3edfe"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_af663d904f75649d48d712ae335e3edfe"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_rf7c766cddff0407bb805393c013b902a"><td class="cellrowborder" valign="top" width="28.77%" headers="mcps1.2.4.1.1 "><p id="p250910823410"><a name="p250910823410"></a><a name="p250910823410"></a>matviewid</p>
</td>
<td class="cellrowborder" valign="top" width="26.5%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a800aa141d95241c2bffae422411df91a"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a800aa141d95241c2bffae422411df91a"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a800aa141d95241c2bffae422411df91a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a0f0b904e963347098535b30a55046954"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a0f0b904e963347098535b30a55046954"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a0f0b904e963347098535b30a55046954"></a>OID of a materialized view.</p>
</td>
</tr>
<tr id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_raabc99bc831f4e3da2c3078018ec184d"><td class="cellrowborder" valign="top" width="28.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a15610165a00747398a8d9ce49d307faa"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a15610165a00747398a8d9ce49d307faa"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a15610165a00747398a8d9ce49d307faa"></a>mapid</p>
</td>
<td class="cellrowborder" valign="top" width="26.5%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_aa78ed822b23d4e23b34a8becf42693e7"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_aa78ed822b23d4e23b34a8becf42693e7"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_aa78ed822b23d4e23b34a8becf42693e7"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.73%" headers="mcps1.2.4.1.3 "><p id="p273716379532"><a name="p273716379532"></a><a name="p273716379532"></a>OID of a map table associated with a materialized view. Each map table corresponds to one materialized view.</p>
</td>
</tr>
<tr id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_r721bd262314643b7afead249a9c84b36"><td class="cellrowborder" valign="top" width="28.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a2f198a715e4d45d99a8356c7b47b46fd"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a2f198a715e4d45d99a8356c7b47b46fd"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a2f198a715e4d45d99a8356c7b47b46fd"></a>ivm</p>
</td>
<td class="cellrowborder" valign="top" width="26.5%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_acbcef8e6652a4744b3cc4cb08b8346a2"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_acbcef8e6652a4744b3cc4cb08b8346a2"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_acbcef8e6652a4744b3cc4cb08b8346a2"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="44.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a8eebe34c82274f0aafcc2eedea6eb267"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a8eebe34c82274f0aafcc2eedea6eb267"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a8eebe34c82274f0aafcc2eedea6eb267"></a>Type of a materialized view. The value <strong id="b15254181523012"><a name="b15254181523012"></a><a name="b15254181523012"></a>t</strong> indicates an incremental materialized view, and the value <strong id="b11793181911304"><a name="b11793181911304"></a><a name="b11793181911304"></a>f</strong> indicates a full materialized view.</p>
</td>
</tr>
<tr id="en-us_topic_0283136548_row1967927115416"><td class="cellrowborder" valign="top" width="28.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136548_p19967162795414"><a name="en-us_topic_0283136548_p19967162795414"></a><a name="en-us_topic_0283136548_p19967162795414"></a>needrefresh</p>
</td>
<td class="cellrowborder" valign="top" width="26.5%" headers="mcps1.2.4.1.2 "><p id="p2745161318527"><a name="p2745161318527"></a><a name="p2745161318527"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="44.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136548_p59679278541"><a name="en-us_topic_0283136548_p59679278541"></a><a name="en-us_topic_0283136548_p59679278541"></a>Specifies whether a materialized view needs to be refreshed. The value <strong id="b6661443153018"><a name="b6661443153018"></a><a name="b6661443153018"></a>t</strong> indicates that incremental data needs to be refreshed.</p>
</td>
</tr>
<tr id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_r1f2b7df612754c9d8e88267b524c3a40"><td class="cellrowborder" valign="top" width="28.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a31db6c504cbc41f4a170ef25b5282a54"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a31db6c504cbc41f4a170ef25b5282a54"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a31db6c504cbc41f4a170ef25b5282a54"></a>refreshtime</p>
</td>
<td class="cellrowborder" valign="top" width="26.5%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_af714117bc9e440918302783fbe09bb44"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_af714117bc9e440918302783fbe09bb44"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_af714117bc9e440918302783fbe09bb44"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="44.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a54f43de71be1479ebba316242658c99e"><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a54f43de71be1479ebba316242658c99e"></a><a name="en-us_topic_0283136548_en-us_topic_0237122474_en-us_topic_0059778302_a54f43de71be1479ebba316242658c99e"></a>Last time when a materialized view is refreshed. If the materialized view is not refreshed, the value is null.</p>
</td>
</tr>
</tbody>
</table>

