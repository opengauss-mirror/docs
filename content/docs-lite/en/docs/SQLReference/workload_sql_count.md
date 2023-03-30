# WORKLOAD\_SQL\_COUNT<a name="EN-US_TOPIC_0289900001"></a>

**WORKLOAD\_SQL\_COUNT**  displays the distribution of SQL statements in workloads on the current node. Common users can view only the distribution of SQL statements executed by themselves in workloads, whereas the initial user can view the overall load status of workloads.

**Table  1**  WORKLOAD\_SQL\_COUNT columns

<a name="en-us_topic_0283137327_en-us_topic_0237122619_table18953243191518"></a>
<table><thead align="left"><tr id="en-us_topic_0283137327_en-us_topic_0237122619_row205324416154"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137327_en-us_topic_0237122619_p195364421511"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p195364421511"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p195364421511"></a><strong id="b18693175075517"><a name="b18693175075517"></a><a name="b18693175075517"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1753164451519"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1753164451519"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1753164451519"></a><strong id="b065241116564"><a name="b065241116564"></a><a name="b065241116564"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137327_en-us_topic_0237122619_p75319443156"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p75319443156"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p75319443156"></a><strong id="b1252441214568"><a name="b1252441214568"></a><a name="b1252441214568"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137327_en-us_topic_0237122619_row10533447155"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p0537448157"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p0537448157"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p0537448157"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p95316442156"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p95316442156"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p95316442156"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p853544141517"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p853544141517"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p853544141517"></a>Workload name</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row205484431511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1954204491516"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1954204491516"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1954204491516"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1154944151516"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1154944151516"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1154944151516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p15412448158"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p15412448158"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p15412448158"></a>Number of <strong id="b15545214175611"><a name="b15545214175611"></a><a name="b15545214175611"></a>SELECT</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row25494421516"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1754944161513"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1754944161513"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1754944161513"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p7541044141512"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p7541044141512"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p7541044141512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p0541144171516"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p0541144171516"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p0541144171516"></a>Number of <strong id="b15249817165616"><a name="b15249817165616"></a><a name="b15249817165616"></a>UPDATE</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row154114471514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1054344151519"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1054344151519"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1054344151519"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1355194461515"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1355194461515"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1355194461515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p5555441159"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p5555441159"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p5555441159"></a>Number of <strong id="b9610818145615"><a name="b9610818145615"></a><a name="b9610818145615"></a>INSERT</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row165524431511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p855144418154"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p855144418154"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p855144418154"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1455124417154"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1455124417154"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1455124417154"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p6551944201511"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p6551944201511"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p6551944201511"></a>Number of <strong id="b876391965615"><a name="b876391965615"></a><a name="b876391965615"></a>DELETE</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row155564415159"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p555184461517"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p555184461517"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p555184461517"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p2558442152"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p2558442152"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p2558442152"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1055154491513"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1055154491513"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1055154491513"></a>Number of <strong id="b1832942435710"><a name="b1832942435710"></a><a name="b1832942435710"></a>DDL</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row115504418159"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p1955944141511"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1955944141511"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p1955944141511"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p65611445156"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p65611445156"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p65611445156"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p95664491512"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p95664491512"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p95664491512"></a>Number of <strong id="b1849342775717"><a name="b1849342775717"></a><a name="b1849342775717"></a>DML</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0283137327_en-us_topic_0237122619_row256194441511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p10569443158"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p10569443158"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p10569443158"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p19561844151517"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p19561844151517"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p19561844151517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137327_en-us_topic_0237122619_p456134411152"><a name="en-us_topic_0283137327_en-us_topic_0237122619_p456134411152"></a><a name="en-us_topic_0283137327_en-us_topic_0237122619_p456134411152"></a>Number of <strong id="b13370103005712"><a name="b13370103005712"></a><a name="b13370103005712"></a>DCL</strong> statements</p>
</td>
</tr>
</tbody>
</table>

