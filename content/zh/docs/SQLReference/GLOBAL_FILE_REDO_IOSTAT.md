# GLOBAL\_FILE\_REDO\_IOSTAT<a name="ZH-CN_TOPIC_0245374675"></a>

得到openGauss内各节点的Redo（WAL）相关统计信息。

**表 1**  GLOBALXC\_FILE\_REDO\_IOSTAT字段

<a name="zh-cn_topic_0237122571_table565454216136"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122571_row17754194211313"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122571_p675412429138"><a name="zh-cn_topic_0237122571_p675412429138"></a><a name="zh-cn_topic_0237122571_p675412429138"></a><strong id="zh-cn_topic_0237122571_b775411426135"><a name="zh-cn_topic_0237122571_b775411426135"></a><a name="zh-cn_topic_0237122571_b775411426135"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122571_p1075414420133"><a name="zh-cn_topic_0237122571_p1075414420133"></a><a name="zh-cn_topic_0237122571_p1075414420133"></a><strong id="zh-cn_topic_0237122571_b8754194241312"><a name="zh-cn_topic_0237122571_b8754194241312"></a><a name="zh-cn_topic_0237122571_b8754194241312"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122571_p275416428136"><a name="zh-cn_topic_0237122571_p275416428136"></a><a name="zh-cn_topic_0237122571_p275416428136"></a><strong id="zh-cn_topic_0237122571_b197551428137"><a name="zh-cn_topic_0237122571_b197551428137"></a><a name="zh-cn_topic_0237122571_b197551428137"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122571_row4755114271312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p13755144218138"><a name="zh-cn_topic_0237122571_p13755144218138"></a><a name="zh-cn_topic_0237122571_p13755144218138"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p1175534212138"><a name="zh-cn_topic_0237122571_p1175534212138"></a><a name="zh-cn_topic_0237122571_p1175534212138"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p875584231315"><a name="zh-cn_topic_0237122571_p875584231315"></a><a name="zh-cn_topic_0237122571_p875584231315"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row775664271313"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p1375664220131"><a name="zh-cn_topic_0237122571_p1375664220131"></a><a name="zh-cn_topic_0237122571_p1375664220131"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p187571042131312"><a name="zh-cn_topic_0237122571_p187571042131312"></a><a name="zh-cn_topic_0237122571_p187571042131312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p2757184291317"><a name="zh-cn_topic_0237122571_p2757184291317"></a><a name="zh-cn_topic_0237122571_p2757184291317"></a>向wal buffer中写的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row9757144201317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p77575422136"><a name="zh-cn_topic_0237122571_p77575422136"></a><a name="zh-cn_topic_0237122571_p77575422136"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p147571342141313"><a name="zh-cn_topic_0237122571_p147571342141313"></a><a name="zh-cn_topic_0237122571_p147571342141313"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p187572428133"><a name="zh-cn_topic_0237122571_p187572428133"></a><a name="zh-cn_topic_0237122571_p187572428133"></a>向wal buffer中写的block的块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row12758174291316"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p3758742151319"><a name="zh-cn_topic_0237122571_p3758742151319"></a><a name="zh-cn_topic_0237122571_p3758742151319"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p207581042131314"><a name="zh-cn_topic_0237122571_p207581042131314"></a><a name="zh-cn_topic_0237122571_p207581042131314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p167580429137"><a name="zh-cn_topic_0237122571_p167580429137"></a><a name="zh-cn_topic_0237122571_p167580429137"></a>向xlog文件中写操作的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row975814426133"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p5758164215137"><a name="zh-cn_topic_0237122571_p5758164215137"></a><a name="zh-cn_topic_0237122571_p5758164215137"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p97581942111311"><a name="zh-cn_topic_0237122571_p97581942111311"></a><a name="zh-cn_topic_0237122571_p97581942111311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p1675854216131"><a name="zh-cn_topic_0237122571_p1675854216131"></a><a name="zh-cn_topic_0237122571_p1675854216131"></a>平均写xlog的时间（writetim/phywrts）（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row10758124251314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p27581442181313"><a name="zh-cn_topic_0237122571_p27581442181313"></a><a name="zh-cn_topic_0237122571_p27581442181313"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p187591942161315"><a name="zh-cn_topic_0237122571_p187591942161315"></a><a name="zh-cn_topic_0237122571_p187591942161315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p147599429135"><a name="zh-cn_topic_0237122571_p147599429135"></a><a name="zh-cn_topic_0237122571_p147599429135"></a>最后一次写xlog的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row1775918428134"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p97594422138"><a name="zh-cn_topic_0237122571_p97594422138"></a><a name="zh-cn_topic_0237122571_p97594422138"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p1675944210133"><a name="zh-cn_topic_0237122571_p1675944210133"></a><a name="zh-cn_topic_0237122571_p1675944210133"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p6759134210137"><a name="zh-cn_topic_0237122571_p6759134210137"></a><a name="zh-cn_topic_0237122571_p6759134210137"></a>最小的写xlog时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122571_row177591942181312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122571_p575910425136"><a name="zh-cn_topic_0237122571_p575910425136"></a><a name="zh-cn_topic_0237122571_p575910425136"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122571_p975974271316"><a name="zh-cn_topic_0237122571_p975974271316"></a><a name="zh-cn_topic_0237122571_p975974271316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122571_p4759242171310"><a name="zh-cn_topic_0237122571_p4759242171310"></a><a name="zh-cn_topic_0237122571_p4759242171310"></a>最大的写xlog时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

