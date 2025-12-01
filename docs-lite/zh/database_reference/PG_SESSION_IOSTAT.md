# PG\_SESSION\_IOSTAT<a name="ZH-CN_TOPIC_0000001151882223"></a>

PG\_SESSION\_IOSTAT视图显示当前用户执行作业正在运行时的IO负载管理相关信息。查询该视图需要sysadmin权限或者monitor admin权限。

以下涉及到iops，对于行存，均以万次/s为单位，对于列存，均以次/s为单位。

**表 1**  PG\_SESSION\_IOSTAT字段

<a name="table44251753205113"></a>
<table><thead align="left"><tr id="row74251253135114"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="zh-cn_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="zh-cn_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16%" id="mcps1.2.4.1.2"><p id="p6534121711119"><a name="p6534121711119"></a><a name="p6534121711119"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="62%" id="mcps1.2.4.1.3"><p id="p3600141915115"><a name="p3600141915115"></a><a name="p3600141915115"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row342520531514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p12493182175917"><a name="p12493182175917"></a><a name="p12493182175917"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p188712711599"><a name="p188712711599"></a><a name="p188712711599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p649734055214"><a name="p649734055214"></a><a name="p649734055214"></a>作业id。</p>
</td>
</tr>
<tr id="row1542575314519"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p105521817165815"><a name="p105521817165815"></a><a name="p105521817165815"></a>mincurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p4284141315919"><a name="p4284141315919"></a><a name="p4284141315919"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p1129655119"><a name="p1129655119"></a><a name="p1129655119"></a>该作业当前io在数据库实例中的最小值。</p>
</td>
</tr>
<tr id="row1942515385119"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p205811124195817"><a name="p205811124195817"></a><a name="p205811124195817"></a>maxcurriops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1497640125210"><a name="p1497640125210"></a><a name="p1497640125210"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p330412591709"><a name="p330412591709"></a><a name="p330412591709"></a>该作业当前io在数据库实例中的最大值。</p>
</td>
</tr>
<tr id="row7425253165116"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p014123616582"><a name="p014123616582"></a><a name="p014123616582"></a>minpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1955701710595"><a name="p1955701710595"></a><a name="p1955701710595"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p13482355103"><a name="p13482355103"></a><a name="p13482355103"></a>在作业运行时，作业io峰值中，数据库实例的最小值。</p>
</td>
</tr>
<tr id="row17425145365113"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p51961544205813"><a name="p51961544205813"></a><a name="p51961544205813"></a>maxpeakiops</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p8101719175920"><a name="p8101719175920"></a><a name="p8101719175920"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p01301251804"><a name="p01301251804"></a><a name="p01301251804"></a>在作业运行时，作业io峰值中，数据库实例的最大值。</p>
</td>
</tr>
<tr id="row1425105316514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p97950165816"><a name="p97950165816"></a><a name="p97950165816"></a>io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p204971840175217"><a name="p204971840175217"></a><a name="p204971840175217"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p150516461602"><a name="p150516461602"></a><a name="p150516461602"></a>该作业所设GUC参数io_limits。</p>
</td>
</tr>
<tr id="row742625316512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p7509655105820"><a name="p7509655105820"></a><a name="p7509655105820"></a>io_priority</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1698824212593"><a name="p1698824212593"></a><a name="p1698824212593"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p4879421203"><a name="p4879421203"></a><a name="p4879421203"></a>该作业所设GUC参数io_priority。</p>
</td>
</tr>
<tr id="row712214118017"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p141231014013"><a name="p141231014013"></a><a name="p141231014013"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p812341404"><a name="p812341404"></a><a name="p812341404"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p20123312010"><a name="p20123312010"></a><a name="p20123312010"></a>作业。</p>
</td>
</tr>
<tr id="row99511941113518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p495111417356"><a name="p495111417356"></a><a name="p495111417356"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p14951134117359"><a name="p14951134117359"></a><a name="p14951134117359"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p14951241113511"><a name="p14951241113511"></a><a name="p14951241113511"></a>该字段不支持。</p>
</td>
</tr>
<tr id="row81239208537"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p31231520115320"><a name="p31231520115320"></a><a name="p31231520115320"></a>curr_io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.4.1.2 "><p id="p1123192055315"><a name="p1123192055315"></a><a name="p1123192055315"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62%" headers="mcps1.2.4.1.3 "><p id="p19123102095313"><a name="p19123102095313"></a><a name="p19123102095313"></a>使用io_priority管控io时的实时io_limits值。</p>
</td>
</tr>
</tbody>
</table>

