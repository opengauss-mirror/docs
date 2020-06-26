# PG\_SESSION\_IOSTAT<a name="ZH-CN_TOPIC_0242385961"></a>

PG\_SESSION\_IOSTAT视图显示当前用户执行作业正在运行时的IO负载管理相关信息。

以下涉及到iops，对于行存，均以万次/s为单位，对于列存，均以次/s为单位。

**表 1**  PG\_SESSION\_IOSTAT字段

<a name="zh-cn_topic_0237122434_table44251753205113"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122434_row74251253135114"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122434_zh-cn_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="zh-cn_topic_0237122434_zh-cn_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="zh-cn_topic_0237122434_zh-cn_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122434_p6534121711119"><a name="zh-cn_topic_0237122434_p6534121711119"></a><a name="zh-cn_topic_0237122434_p6534121711119"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="62%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122434_p3600141915115"><a name="zh-cn_topic_0237122434_p3600141915115"></a><a name="zh-cn_topic_0237122434_p3600141915115"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122434_row342520531514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p12493182175917"><a name="zh-cn_topic_0237122434_p12493182175917"></a><a name="zh-cn_topic_0237122434_p12493182175917"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p188712711599"><a name="zh-cn_topic_0237122434_p188712711599"></a><a name="zh-cn_topic_0237122434_p188712711599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p649734055214"><a name="zh-cn_topic_0237122434_p649734055214"></a><a name="zh-cn_topic_0237122434_p649734055214"></a>作业id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row1542575314519"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p105521817165815"><a name="zh-cn_topic_0237122434_p105521817165815"></a><a name="zh-cn_topic_0237122434_p105521817165815"></a>mincurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p4284141315919"><a name="zh-cn_topic_0237122434_p4284141315919"></a><a name="zh-cn_topic_0237122434_p4284141315919"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p1129655119"><a name="zh-cn_topic_0237122434_p1129655119"></a><a name="zh-cn_topic_0237122434_p1129655119"></a>该作业当前io在<span id="zh-cn_topic_0237122434_text162731943164219"><a name="zh-cn_topic_0237122434_text162731943164219"></a><a name="zh-cn_topic_0237122434_text162731943164219"></a>数据库节点</span>中的最小值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row1942515385119"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p205811124195817"><a name="zh-cn_topic_0237122434_p205811124195817"></a><a name="zh-cn_topic_0237122434_p205811124195817"></a>maxcurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p1497640125210"><a name="zh-cn_topic_0237122434_p1497640125210"></a><a name="zh-cn_topic_0237122434_p1497640125210"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p330412591709"><a name="zh-cn_topic_0237122434_p330412591709"></a><a name="zh-cn_topic_0237122434_p330412591709"></a>该作业当前io在<span id="zh-cn_topic_0237122434_text551184415429"><a name="zh-cn_topic_0237122434_text551184415429"></a><a name="zh-cn_topic_0237122434_text551184415429"></a>数据库节点</span>中的最大值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row7425253165116"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p014123616582"><a name="zh-cn_topic_0237122434_p014123616582"></a><a name="zh-cn_topic_0237122434_p014123616582"></a>minpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p1955701710595"><a name="zh-cn_topic_0237122434_p1955701710595"></a><a name="zh-cn_topic_0237122434_p1955701710595"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p13482355103"><a name="zh-cn_topic_0237122434_p13482355103"></a><a name="zh-cn_topic_0237122434_p13482355103"></a>在作业运行时，作业io峰值中，<span id="zh-cn_topic_0237122434_text17308846144219"><a name="zh-cn_topic_0237122434_text17308846144219"></a><a name="zh-cn_topic_0237122434_text17308846144219"></a>数据库节点</span>最小值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row17425145365113"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p51961544205813"><a name="zh-cn_topic_0237122434_p51961544205813"></a><a name="zh-cn_topic_0237122434_p51961544205813"></a>maxpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p8101719175920"><a name="zh-cn_topic_0237122434_p8101719175920"></a><a name="zh-cn_topic_0237122434_p8101719175920"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p01301251804"><a name="zh-cn_topic_0237122434_p01301251804"></a><a name="zh-cn_topic_0237122434_p01301251804"></a>在作业运行时，作业io峰值中，<span id="zh-cn_topic_0237122434_text154358478423"><a name="zh-cn_topic_0237122434_text154358478423"></a><a name="zh-cn_topic_0237122434_text154358478423"></a>数据库节点</span>的最大值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row1425105316514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p97950165816"><a name="zh-cn_topic_0237122434_p97950165816"></a><a name="zh-cn_topic_0237122434_p97950165816"></a>io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p204971840175217"><a name="zh-cn_topic_0237122434_p204971840175217"></a><a name="zh-cn_topic_0237122434_p204971840175217"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p150516461602"><a name="zh-cn_topic_0237122434_p150516461602"></a><a name="zh-cn_topic_0237122434_p150516461602"></a>该作业所设GUC参数io_limits。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row742625316512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p7509655105820"><a name="zh-cn_topic_0237122434_p7509655105820"></a><a name="zh-cn_topic_0237122434_p7509655105820"></a>io_priority</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p1698824212593"><a name="zh-cn_topic_0237122434_p1698824212593"></a><a name="zh-cn_topic_0237122434_p1698824212593"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p4879421203"><a name="zh-cn_topic_0237122434_p4879421203"></a><a name="zh-cn_topic_0237122434_p4879421203"></a>该作业所设GUC参数io_priority。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row712214118017"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p141231014013"><a name="zh-cn_topic_0237122434_p141231014013"></a><a name="zh-cn_topic_0237122434_p141231014013"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p812341404"><a name="zh-cn_topic_0237122434_p812341404"></a><a name="zh-cn_topic_0237122434_p812341404"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p20123312010"><a name="zh-cn_topic_0237122434_p20123312010"></a><a name="zh-cn_topic_0237122434_p20123312010"></a>作业。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122434_row99511941113518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122434_p495111417356"><a name="zh-cn_topic_0237122434_p495111417356"></a><a name="zh-cn_topic_0237122434_p495111417356"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122434_p14951134117359"><a name="zh-cn_topic_0237122434_p14951134117359"></a><a name="zh-cn_topic_0237122434_p14951134117359"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122434_p14951241113511"><a name="zh-cn_topic_0237122434_p14951241113511"></a><a name="zh-cn_topic_0237122434_p14951241113511"></a>该字段不支持。</p>
</td>
</tr>
</tbody>
</table>

