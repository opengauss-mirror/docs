# PG\_COMM\_DELAY

PG\_COMM\_DELAY视图展示单个节点的通信库时延状态。

**表 1**  PG\_COMM\_DELAY字段

<a name="zh-cn_topic_0059777625_t83ca540e925544c288cfd96db031d9b2"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059777625_r247338af0ec34d588088cff853ab2c54"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777625_a3b8bec16d0014fe0bb829486199e765a"><a name="zh-cn_topic_0059777625_a3b8bec16d0014fe0bb829486199e765a"></a><a name="zh-cn_topic_0059777625_a3b8bec16d0014fe0bb829486199e765a"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777625_ad8dea19ffa0f40c2855a8837cb813804"><a name="zh-cn_topic_0059777625_ad8dea19ffa0f40c2855a8837cb813804"></a><a name="zh-cn_topic_0059777625_ad8dea19ffa0f40c2855a8837cb813804"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777625_a1c45c10dd5364655a8d517672c28ea2d"><a name="zh-cn_topic_0059777625_a1c45c10dd5364655a8d517672c28ea2d"></a><a name="zh-cn_topic_0059777625_a1c45c10dd5364655a8d517672c28ea2d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777625_rc8bbbde1f6b34597aee518690ff27943"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p388047981511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p388047981511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p388047981511"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p561808941511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p561808941511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p561808941511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p543585381511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p543585381511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p543585381511"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777625_rb396f771b06e44818e6a67328d87f7bf"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p331450351511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p331450351511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p331450351511"></a>remote_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p3933341511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p3933341511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p3933341511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p318601061511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p318601061511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p318601061511"></a>连接对端节点名称。</p>
</td>
</tr>
<tr id="row84271338512"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p7428163335113"><a name="p7428163335113"></a><a name="p7428163335113"></a>remote_host</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p142813375110"><a name="p142813375110"></a><a name="p142813375110"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p942863345111"><a name="p942863345111"></a><a name="p942863345111"></a>连接对端IP地址。</p>
</td>
</tr>
<tr id="row83857494554"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p7385144965517"><a name="p7385144965517"></a><a name="p7385144965517"></a>stream_num</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p153858499556"><a name="p153858499556"></a><a name="p153858499556"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p11385114915512"><a name="p11385114915512"></a><a name="p11385114915512"></a>当前物理连接使用的stream逻辑连接数量。</p>
</td>
</tr>
<tr id="row15866643185511"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p6866343155518"><a name="p6866343155518"></a><a name="p6866343155518"></a>min_delay</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p178661343135520"><a name="p178661343135520"></a><a name="p178661343135520"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p14866243185513"><a name="p14866243185513"></a><a name="p14866243185513"></a>当前物理连接一分钟内探测到的最小时延，单位微秒。</p>
<div class="note" id="note233023151317"><a name="note233023151317"></a><a name="note233023151317"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p15330231121316"><a name="p15330231121316"></a><a name="p15330231121316"></a>负数结果无效，请重新等待时延状态更新后再执行。</p>
</div></div>
</td>
</tr>
<tr id="row1127123895519"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p142713810556"><a name="p142713810556"></a><a name="p142713810556"></a>average</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p02812389553"><a name="p02812389553"></a><a name="p02812389553"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p928638155515"><a name="p928638155515"></a><a name="p928638155515"></a>当前物理连接一分钟内探测时延的平均值，单位微秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777625_rac39d39f3d164a47bc48accdd2ef3325"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p63503651511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p63503651511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p63503651511"></a>max_delay</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p446175651511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p446175651511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p446175651511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p572529931511"><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p572529931511"></a><a name="zh-cn_topic_0059777625_zh-cn_topic_0058965605_p572529931511"></a>当前物理连接一分钟内探测到的最大时延，单位微秒。</p>
</td>
</tr>
</tbody>
</table>

