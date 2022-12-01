# SESSION\_MEMORY<a name="ZH-CN_TOPIC_0245374737"></a>

统计Session级别的内存使用情况，包含执行作业在数据节点上openGauss线程和Stream线程分配的所有内存，单位为MB。

**表 1**  SESSION\_MEMORY字段

<a name="zh-cn_topic_0237122633_table1628492552316"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122633_row93521256238"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122633_p173531225142313"><a name="zh-cn_topic_0237122633_p173531225142313"></a><a name="zh-cn_topic_0237122633_p173531225142313"></a><strong id="zh-cn_topic_0237122633_b43533255233"><a name="zh-cn_topic_0237122633_b43533255233"></a><a name="zh-cn_topic_0237122633_b43533255233"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122633_p33531325192314"><a name="zh-cn_topic_0237122633_p33531325192314"></a><a name="zh-cn_topic_0237122633_p33531325192314"></a><strong id="zh-cn_topic_0237122633_b1135313256236"><a name="zh-cn_topic_0237122633_b1135313256236"></a><a name="zh-cn_topic_0237122633_b1135313256236"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122633_p1635310251230"><a name="zh-cn_topic_0237122633_p1635310251230"></a><a name="zh-cn_topic_0237122633_p1635310251230"></a><strong id="zh-cn_topic_0237122633_b635452515230"><a name="zh-cn_topic_0237122633_b635452515230"></a><a name="zh-cn_topic_0237122633_b635452515230"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122633_row835482542310"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122633_p10354162552312"><a name="zh-cn_topic_0237122633_p10354162552312"></a><a name="zh-cn_topic_0237122633_p10354162552312"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122633_p123547256237"><a name="zh-cn_topic_0237122633_p123547256237"></a><a name="zh-cn_topic_0237122633_p123547256237"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122633_p153541025172319"><a name="zh-cn_topic_0237122633_p153541025172319"></a><a name="zh-cn_topic_0237122633_p153541025172319"></a>线程启动时间+线程标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122633_row143547259239"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122633_p17354825162318"><a name="zh-cn_topic_0237122633_p17354825162318"></a><a name="zh-cn_topic_0237122633_p17354825162318"></a>init_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122633_p20354625162311"><a name="zh-cn_topic_0237122633_p20354625162311"></a><a name="zh-cn_topic_0237122633_p20354625162311"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122633_p1235422520238"><a name="zh-cn_topic_0237122633_p1235422520238"></a><a name="zh-cn_topic_0237122633_p1235422520238"></a>当前正在执行作业进入执行器前已分配的内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122633_row1835512542318"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122633_p3355202532314"><a name="zh-cn_topic_0237122633_p3355202532314"></a><a name="zh-cn_topic_0237122633_p3355202532314"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122633_p13551125142319"><a name="zh-cn_topic_0237122633_p13551125142319"></a><a name="zh-cn_topic_0237122633_p13551125142319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122633_p135592552311"><a name="zh-cn_topic_0237122633_p135592552311"></a><a name="zh-cn_topic_0237122633_p135592552311"></a>当前正在执行作业已分配的内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122633_row73556253239"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122633_p83558250234"><a name="zh-cn_topic_0237122633_p83558250234"></a><a name="zh-cn_topic_0237122633_p83558250234"></a>peak_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122633_p835592572316"><a name="zh-cn_topic_0237122633_p835592572316"></a><a name="zh-cn_topic_0237122633_p835592572316"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122633_p5355192515232"><a name="zh-cn_topic_0237122633_p5355192515232"></a><a name="zh-cn_topic_0237122633_p5355192515232"></a>当前正在执行作业已分配的内存峰值。</p>
</td>
</tr>
</tbody>
</table>
