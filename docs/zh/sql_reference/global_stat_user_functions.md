# GLOBAL\_STAT\_USER\_FUNCTIONS

提供openGauss中各个节点的用户所创建的函数的状态的统计信息。

**表 1**  GLOBAL\_STAT\_USER\_FUNCTIONS字段

<a name="zh-cn_topic_0237122617_table18953243191518"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122617_row205324416154"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122617_p195364421511"><a name="zh-cn_topic_0237122617_p195364421511"></a><a name="zh-cn_topic_0237122617_p195364421511"></a><strong id="zh-cn_topic_0237122617_b85311445152"><a name="zh-cn_topic_0237122617_b85311445152"></a><a name="zh-cn_topic_0237122617_b85311445152"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122617_p1753164451519"><a name="zh-cn_topic_0237122617_p1753164451519"></a><a name="zh-cn_topic_0237122617_p1753164451519"></a><strong id="zh-cn_topic_0237122617_b2531244131512"><a name="zh-cn_topic_0237122617_b2531244131512"></a><a name="zh-cn_topic_0237122617_b2531244131512"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122617_p75319443156"><a name="zh-cn_topic_0237122617_p75319443156"></a><a name="zh-cn_topic_0237122617_p75319443156"></a><strong id="zh-cn_topic_0237122617_b175314441512"><a name="zh-cn_topic_0237122617_b175314441512"></a><a name="zh-cn_topic_0237122617_b175314441512"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122617_row10533447155"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p0537448157"><a name="zh-cn_topic_0237122617_p0537448157"></a><a name="zh-cn_topic_0237122617_p0537448157"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p95316442156"><a name="zh-cn_topic_0237122617_p95316442156"></a><a name="zh-cn_topic_0237122617_p95316442156"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p987545685719"><a name="zh-cn_topic_0237122617_p987545685719"></a><a name="zh-cn_topic_0237122617_p987545685719"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122617_row205484431511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p1954204491516"><a name="zh-cn_topic_0237122617_p1954204491516"></a><a name="zh-cn_topic_0237122617_p1954204491516"></a>funcid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p1154944151516"><a name="zh-cn_topic_0237122617_p1154944151516"></a><a name="zh-cn_topic_0237122617_p1154944151516"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p15412448158"><a name="zh-cn_topic_0237122617_p15412448158"></a><a name="zh-cn_topic_0237122617_p15412448158"></a>函数的id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122617_row25494421516"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p1184122034216"><a name="zh-cn_topic_0237122617_p1184122034216"></a><a name="zh-cn_topic_0237122617_p1184122034216"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p7541044141512"><a name="zh-cn_topic_0237122617_p7541044141512"></a><a name="zh-cn_topic_0237122617_p7541044141512"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p0541144171516"><a name="zh-cn_topic_0237122617_p0541144171516"></a><a name="zh-cn_topic_0237122617_p0541144171516"></a>此函数所在模式的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122617_row154114471514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p448914395422"><a name="zh-cn_topic_0237122617_p448914395422"></a><a name="zh-cn_topic_0237122617_p448914395422"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p3259135664211"><a name="zh-cn_topic_0237122617_p3259135664211"></a><a name="zh-cn_topic_0237122617_p3259135664211"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p5555441159"><a name="zh-cn_topic_0237122617_p5555441159"></a><a name="zh-cn_topic_0237122617_p5555441159"></a>函数名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122617_row165524431511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p855144418154"><a name="zh-cn_topic_0237122617_p855144418154"></a><a name="zh-cn_topic_0237122617_p855144418154"></a>calls</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p1455124417154"><a name="zh-cn_topic_0237122617_p1455124417154"></a><a name="zh-cn_topic_0237122617_p1455124417154"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p6551944201511"><a name="zh-cn_topic_0237122617_p6551944201511"></a><a name="zh-cn_topic_0237122617_p6551944201511"></a>该函数被调用的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122617_row155564415159"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p13729233435"><a name="zh-cn_topic_0237122617_p13729233435"></a><a name="zh-cn_topic_0237122617_p13729233435"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p2558442152"><a name="zh-cn_topic_0237122617_p2558442152"></a><a name="zh-cn_topic_0237122617_p2558442152"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p69521421115614"><a name="zh-cn_topic_0237122617_p69521421115614"></a><a name="zh-cn_topic_0237122617_p69521421115614"></a>此函数及其调用的所有其他函数所花费的总时间（以毫秒为单位）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122617_row115504418159"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122617_p327654211438"><a name="zh-cn_topic_0237122617_p327654211438"></a><a name="zh-cn_topic_0237122617_p327654211438"></a>self_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122617_p65611445156"><a name="zh-cn_topic_0237122617_p65611445156"></a><a name="zh-cn_topic_0237122617_p65611445156"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122617_p95664491512"><a name="zh-cn_topic_0237122617_p95664491512"></a><a name="zh-cn_topic_0237122617_p95664491512"></a>在此函数本身中花费的总时间（不包括它调用的其他函数），以毫秒为单位。</p>
</td>
</tr>
</tbody>
</table>
