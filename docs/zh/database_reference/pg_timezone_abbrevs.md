# PG\_TIMEZONE\_ABBREVS

PG\_TIMEZONE\_ABBREVS视图提供了显示了所有可用的时区信息。

**表 1**  PG\_TIMEZONE\_ABBREVS字段

<a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_table177171137122918"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_row4841137182916"><th class="cellrowborder" valign="top" width="22.12%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p950244811308"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p950244811308"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p950244811308"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="31.64%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p128421737112911"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p128421737112911"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p128421737112911"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="46.239999999999995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p168424375290"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p168424375290"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p168424375290"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_row20842183722916"><td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p18502114812307"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p18502114812307"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p18502114812307"></a>abbrev</p>
</td>
<td class="cellrowborder" valign="top" width="31.64%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p1484333722914"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p1484333722914"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p1484333722914"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p1843037122919"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p1843037122919"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p1843037122919"></a>时区名缩写。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_row1384317372297"><td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p18502124873011"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p18502124873011"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p18502124873011"></a>utc_offset</p>
</td>
<td class="cellrowborder" valign="top" width="31.64%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p14843123782912"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p14843123782912"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p14843123782912"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p12844137142913"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p12844137142913"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p12844137142913"></a>相对于UTC的偏移量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_row58449376298"><td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p2050394817305"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p2050394817305"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p2050394817305"></a>is_dst</p>
</td>
<td class="cellrowborder" valign="top" width="31.64%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p4844237142913"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p4844237142913"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p4844237142913"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p12844103713296"><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p12844103713296"></a><a name="zh-cn_topic_0283137118_zh-cn_topic_0237122539_p12844103713296"></a>如果当前正处于夏令时范围则为TRUE，否则为FALSE。</p>
</td>
</tr>
</tbody>
</table>
