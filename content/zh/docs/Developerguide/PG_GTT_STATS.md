# PG\_GTT\_STATS<a name="ZH-CN_TOPIC_0267385596"></a>

PG\_GTT\_STATS视图查看当前会话所有全局临时表单列统计信息，调用pg\_get\_gtt\_statistics函数。

**表 1**  PG\_GTT\_STATS字段

<a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_t9a322933edc649349d16f5bb7c397568"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r479932505d8442ccb53618b9f805b142"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r4d9bbbb837e94860b29d9c5b818b0295"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a>schema名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r342532367f8748eeb8d51c5587e1781d"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a>全局临时表名称。</p>
</td>
</tr>
<tr id="row19383959131511"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p2861163314381"><a name="p2861163314381"></a><a name="p2861163314381"></a>attname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p154148126404"><a name="p154148126404"></a><a name="p154148126404"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1738414594157"><a name="p1738414594157"></a><a name="p1738414594157"></a>属性名称。</p>
</td>
</tr>
<tr id="row185121530162"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p1951212321613"><a name="p1951212321613"></a><a name="p1951212321613"></a>inherited</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1512139162"><a name="p1512139162"></a><a name="p1512139162"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p551293131613"><a name="p551293131613"></a><a name="p551293131613"></a>是否统计有继承关系的对象。</p>
</td>
</tr>
<tr id="row1526519522156"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p025220449384"><a name="p025220449384"></a><a name="p025220449384"></a>null_frac</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p82665522153"><a name="p82665522153"></a><a name="p82665522153"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1626675218151"><a name="p1626675218151"></a><a name="p1626675218151"></a>该字段中为NULL的记录的比率。</p>
</td>
</tr>
<tr id="row42084282166"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p1820815288163"><a name="p1820815288163"></a><a name="p1820815288163"></a>avg_width</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p520842820165"><a name="p520842820165"></a><a name="p520842820165"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p178844523263"><a name="p178844523263"></a><a name="p178844523263"></a>非NULL记录的平均存储宽度，以字节计算。</p>
</td>
</tr>
<tr id="row1921922101617"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p2296145463820"><a name="p2296145463820"></a><a name="p2296145463820"></a>n_distinct</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p15210224169"><a name="p15210224169"></a><a name="p15210224169"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1348622334311"><a name="p1348622334311"></a><a name="p1348622334311"></a>标识全局统计信息中字段里唯一的非NULL数据值的数目。</p>
</td>
</tr>
<tr id="row2127172883919"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p812762811397"><a name="p812762811397"></a><a name="p812762811397"></a>most_common_vals</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1512792816393"><a name="p1512792816393"></a><a name="p1512792816393"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p912732873917"><a name="p912732873917"></a><a name="p912732873917"></a>高频值列表，按照出现的频率排序。</p>
</td>
</tr>
<tr id="row0607152433910"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p5607224183919"><a name="p5607224183919"></a><a name="p5607224183919"></a>most_common_freqs</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p17607192463910"><a name="p17607192463910"></a><a name="p17607192463910"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p460772443911"><a name="p460772443911"></a><a name="p460772443911"></a>高频值的频率。</p>
</td>
</tr>
<tr id="row173353202391"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p5335102010398"><a name="p5335102010398"></a><a name="p5335102010398"></a>histogram_bounds</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p833518204396"><a name="p833518204396"></a><a name="p833518204396"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p19335720103916"><a name="p19335720103916"></a><a name="p19335720103916"></a>等频直方图描述列中的数据分布（不包含高频值）。</p>
</td>
</tr>
<tr id="row11860121612396"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p5860151617398"><a name="p5860151617398"></a><a name="p5860151617398"></a>correlation</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p686010160397"><a name="p686010160397"></a><a name="p686010160397"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p086020164395"><a name="p086020164395"></a><a name="p086020164395"></a>相关系数。</p>
</td>
</tr>
<tr id="row81748139398"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p91748137393"><a name="p91748137393"></a><a name="p91748137393"></a>most_common_elems</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p131745134395"><a name="p131745134395"></a><a name="p131745134395"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p151743136395"><a name="p151743136395"></a><a name="p151743136395"></a>类型高频值列表，用于数组类型或一些其他类型。</p>
</td>
</tr>
<tr id="row2287132113918"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p8287182153918"><a name="p8287182153918"></a><a name="p8287182153918"></a>most_common_elem_freqs</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p4287124398"><a name="p4287124398"></a><a name="p4287124398"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1228711213918"><a name="p1228711213918"></a><a name="p1228711213918"></a>类型高频值的频率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p16738236404"><a name="p16738236404"></a><a name="p16738236404"></a>elem_count_histogram</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p11486317410"><a name="p11486317410"></a><a name="p11486317410"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1490835111712"><a name="p1490835111712"></a><a name="p1490835111712"></a>数组类型直方图。</p>
</td>
</tr>
</tbody>
</table>

