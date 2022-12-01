# LOCAL\_REL\_IOSTAT<a name="ZH-CN_TOPIC_0245374676"></a>

获取当前节点中数据文件IO状态的累计值，显示为所有数据文件IO状态的总和。

**表 1**  LOCAL\_REL\_IOSTAT字段

<a name="zh-cn_topic_0237122572_table565454216136"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122572_row17754194211313"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122572_p675412429138"><a name="zh-cn_topic_0237122572_p675412429138"></a><a name="zh-cn_topic_0237122572_p675412429138"></a><strong id="zh-cn_topic_0237122572_b775411426135"><a name="zh-cn_topic_0237122572_b775411426135"></a><a name="zh-cn_topic_0237122572_b775411426135"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122572_p1075414420133"><a name="zh-cn_topic_0237122572_p1075414420133"></a><a name="zh-cn_topic_0237122572_p1075414420133"></a><strong id="zh-cn_topic_0237122572_b8754194241312"><a name="zh-cn_topic_0237122572_b8754194241312"></a><a name="zh-cn_topic_0237122572_b8754194241312"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122572_p275416428136"><a name="zh-cn_topic_0237122572_p275416428136"></a><a name="zh-cn_topic_0237122572_p275416428136"></a><strong id="zh-cn_topic_0237122572_b197551428137"><a name="zh-cn_topic_0237122572_b197551428137"></a><a name="zh-cn_topic_0237122572_b197551428137"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122572_row775664271313"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122572_p1375664220131"><a name="zh-cn_topic_0237122572_p1375664220131"></a><a name="zh-cn_topic_0237122572_p1375664220131"></a>phyrds</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122572_p187571042131312"><a name="zh-cn_topic_0237122572_p187571042131312"></a><a name="zh-cn_topic_0237122572_p187571042131312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122572_p2757184291317"><a name="zh-cn_topic_0237122572_p2757184291317"></a><a name="zh-cn_topic_0237122572_p2757184291317"></a>读物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122572_row9757144201317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122572_p77575422136"><a name="zh-cn_topic_0237122572_p77575422136"></a><a name="zh-cn_topic_0237122572_p77575422136"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122572_p147571342141313"><a name="zh-cn_topic_0237122572_p147571342141313"></a><a name="zh-cn_topic_0237122572_p147571342141313"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122572_p187572428133"><a name="zh-cn_topic_0237122572_p187572428133"></a><a name="zh-cn_topic_0237122572_p187572428133"></a>写物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122572_row12758174291316"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122572_p3758742151319"><a name="zh-cn_topic_0237122572_p3758742151319"></a><a name="zh-cn_topic_0237122572_p3758742151319"></a>phyblkrd</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122572_p207581042131314"><a name="zh-cn_topic_0237122572_p207581042131314"></a><a name="zh-cn_topic_0237122572_p207581042131314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122572_p167580429137"><a name="zh-cn_topic_0237122572_p167580429137"></a><a name="zh-cn_topic_0237122572_p167580429137"></a>读物理文件的块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122572_row975814426133"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122572_p5758164215137"><a name="zh-cn_topic_0237122572_p5758164215137"></a><a name="zh-cn_topic_0237122572_p5758164215137"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122572_p97581942111311"><a name="zh-cn_topic_0237122572_p97581942111311"></a><a name="zh-cn_topic_0237122572_p97581942111311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122572_p1675854216131"><a name="zh-cn_topic_0237122572_p1675854216131"></a><a name="zh-cn_topic_0237122572_p1675854216131"></a>写物理文件的块的数目。</p>
</td>
</tr>
</tbody>
</table>
