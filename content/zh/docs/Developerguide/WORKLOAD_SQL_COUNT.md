# WORKLOAD\_SQL\_COUNT

显示当前节点workload上的SQL数量分布。普通用户只可以看到自己在workload上的SQL分布；初始用户可以看到总的workload的负载情况。

**表 1**  WORKLOAD\_SQL\_COUNT字段

<a name="zh-cn_topic_0237122619_table18953243191518"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122619_row205324416154"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122619_p195364421511"><a name="zh-cn_topic_0237122619_p195364421511"></a><a name="zh-cn_topic_0237122619_p195364421511"></a><strong id="zh-cn_topic_0237122619_b85311445152"><a name="zh-cn_topic_0237122619_b85311445152"></a><a name="zh-cn_topic_0237122619_b85311445152"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122619_p1753164451519"><a name="zh-cn_topic_0237122619_p1753164451519"></a><a name="zh-cn_topic_0237122619_p1753164451519"></a><strong id="zh-cn_topic_0237122619_b2531244131512"><a name="zh-cn_topic_0237122619_b2531244131512"></a><a name="zh-cn_topic_0237122619_b2531244131512"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122619_p75319443156"><a name="zh-cn_topic_0237122619_p75319443156"></a><a name="zh-cn_topic_0237122619_p75319443156"></a><strong id="zh-cn_topic_0237122619_b175314441512"><a name="zh-cn_topic_0237122619_b175314441512"></a><a name="zh-cn_topic_0237122619_b175314441512"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122619_row10533447155"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p0537448157"><a name="zh-cn_topic_0237122619_p0537448157"></a><a name="zh-cn_topic_0237122619_p0537448157"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p95316442156"><a name="zh-cn_topic_0237122619_p95316442156"></a><a name="zh-cn_topic_0237122619_p95316442156"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p853544141517"><a name="zh-cn_topic_0237122619_p853544141517"></a><a name="zh-cn_topic_0237122619_p853544141517"></a>负载名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row205484431511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p1954204491516"><a name="zh-cn_topic_0237122619_p1954204491516"></a><a name="zh-cn_topic_0237122619_p1954204491516"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p1154944151516"><a name="zh-cn_topic_0237122619_p1154944151516"></a><a name="zh-cn_topic_0237122619_p1154944151516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p15412448158"><a name="zh-cn_topic_0237122619_p15412448158"></a><a name="zh-cn_topic_0237122619_p15412448158"></a>select数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row25494421516"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p1754944161513"><a name="zh-cn_topic_0237122619_p1754944161513"></a><a name="zh-cn_topic_0237122619_p1754944161513"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p7541044141512"><a name="zh-cn_topic_0237122619_p7541044141512"></a><a name="zh-cn_topic_0237122619_p7541044141512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p0541144171516"><a name="zh-cn_topic_0237122619_p0541144171516"></a><a name="zh-cn_topic_0237122619_p0541144171516"></a>update数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row154114471514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p1054344151519"><a name="zh-cn_topic_0237122619_p1054344151519"></a><a name="zh-cn_topic_0237122619_p1054344151519"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p1355194461515"><a name="zh-cn_topic_0237122619_p1355194461515"></a><a name="zh-cn_topic_0237122619_p1355194461515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p5555441159"><a name="zh-cn_topic_0237122619_p5555441159"></a><a name="zh-cn_topic_0237122619_p5555441159"></a>insert数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row165524431511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p855144418154"><a name="zh-cn_topic_0237122619_p855144418154"></a><a name="zh-cn_topic_0237122619_p855144418154"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p1455124417154"><a name="zh-cn_topic_0237122619_p1455124417154"></a><a name="zh-cn_topic_0237122619_p1455124417154"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p6551944201511"><a name="zh-cn_topic_0237122619_p6551944201511"></a><a name="zh-cn_topic_0237122619_p6551944201511"></a>delete数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row155564415159"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p555184461517"><a name="zh-cn_topic_0237122619_p555184461517"></a><a name="zh-cn_topic_0237122619_p555184461517"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p2558442152"><a name="zh-cn_topic_0237122619_p2558442152"></a><a name="zh-cn_topic_0237122619_p2558442152"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p1055154491513"><a name="zh-cn_topic_0237122619_p1055154491513"></a><a name="zh-cn_topic_0237122619_p1055154491513"></a>ddl数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row115504418159"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p1955944141511"><a name="zh-cn_topic_0237122619_p1955944141511"></a><a name="zh-cn_topic_0237122619_p1955944141511"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p65611445156"><a name="zh-cn_topic_0237122619_p65611445156"></a><a name="zh-cn_topic_0237122619_p65611445156"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p95664491512"><a name="zh-cn_topic_0237122619_p95664491512"></a><a name="zh-cn_topic_0237122619_p95664491512"></a>dml数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122619_row256194441511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122619_p10569443158"><a name="zh-cn_topic_0237122619_p10569443158"></a><a name="zh-cn_topic_0237122619_p10569443158"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122619_p19561844151517"><a name="zh-cn_topic_0237122619_p19561844151517"></a><a name="zh-cn_topic_0237122619_p19561844151517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122619_p456134411152"><a name="zh-cn_topic_0237122619_p456134411152"></a><a name="zh-cn_topic_0237122619_p456134411152"></a>dcl数量。</p>
</td>
</tr>
</tbody>
</table>
