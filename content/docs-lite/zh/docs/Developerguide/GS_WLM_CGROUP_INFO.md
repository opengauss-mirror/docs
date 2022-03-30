# GS\_WLM\_CGROUP\_INFO<a name="ZH-CN_TOPIC_0289900833"></a>

GS\_WLM\_CGROUP\_INFO视图显示当前执行作业的控制组的信息。

**表 1**  GS\_WLM\_CGROUP\_INFO字段

<a name="table1890982764520"></a>
<table><thead align="left"><tr id="row1094912711450"><th class="cellrowborder" valign="top" width="26.090000000000003%" id="mcps1.2.4.1.1"><p id="p4949027124515"><a name="p4949027124515"></a><a name="p4949027124515"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.11%" id="mcps1.2.4.1.2"><p id="p1949927124516"><a name="p1949927124516"></a><a name="p1949927124516"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="50.8%" id="mcps1.2.4.1.3"><p id="p17949172784516"><a name="p17949172784516"></a><a name="p17949172784516"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row994912273453"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p1394982704511"><a name="p1394982704511"></a><a name="p1394982704511"></a>cgoup_name</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p1594912274452"><a name="p1594912274452"></a><a name="p1594912274452"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p09491827104511"><a name="p09491827104511"></a><a name="p09491827104511"></a>控制组的名称。</p>
</td>
</tr>
<tr id="row17949527164513"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p17949102719450"><a name="p17949102719450"></a><a name="p17949102719450"></a>priority</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p69501627164516"><a name="p69501627164516"></a><a name="p69501627164516"></a>interger</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p69501327184513"><a name="p69501327184513"></a><a name="p69501327184513"></a>作业的优先级。</p>
</td>
</tr>
<tr id="row1795072794515"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p2095012716454"><a name="p2095012716454"></a><a name="p2095012716454"></a>usage_pecent</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p179500279454"><a name="p179500279454"></a><a name="p179500279454"></a>interger</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p795052716452"><a name="p795052716452"></a><a name="p795052716452"></a>控制组占用的百分比。</p>
</td>
</tr>
<tr id="row595012279452"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p2950162754517"><a name="p2950162754517"></a><a name="p2950162754517"></a>shares</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p7950172734518"><a name="p7950172734518"></a><a name="p7950172734518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p1495042774518"><a name="p1495042774518"></a><a name="p1495042774518"></a>控制组分配的CPU资源配额。</p>
</td>
</tr>
<tr id="row1950927134512"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p995018273452"><a name="p995018273452"></a><a name="p995018273452"></a>cpuacct</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p095072710456"><a name="p095072710456"></a><a name="p095072710456"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p1695072734518"><a name="p1695072734518"></a><a name="p1695072734518"></a>CPU配额分配。</p>
</td>
</tr>
<tr id="row2950192713459"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p17950142764511"><a name="p17950142764511"></a><a name="p17950142764511"></a>cpuset</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p295022714520"><a name="p295022714520"></a><a name="p295022714520"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p395019279458"><a name="p395019279458"></a><a name="p395019279458"></a>CPU限额分配。</p>
</td>
</tr>
<tr id="row1495042718451"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p2950827104513"><a name="p2950827104513"></a><a name="p2950827104513"></a>relpath</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p10950152716459"><a name="p10950152716459"></a><a name="p10950152716459"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p2950142774517"><a name="p2950142774517"></a><a name="p2950142774517"></a>控制组的相对路径。</p>
</td>
</tr>
<tr id="row119500273457"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p12950727164519"><a name="p12950727164519"></a><a name="p12950727164519"></a>valid</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p3950152764513"><a name="p3950152764513"></a><a name="p3950152764513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p209505274453"><a name="p209505274453"></a><a name="p209505274453"></a>该控制组是否有效。</p>
</td>
</tr>
<tr id="row12950142719457"><td class="cellrowborder" valign="top" width="26.090000000000003%" headers="mcps1.2.4.1.1 "><p id="p1495032704516"><a name="p1495032704516"></a><a name="p1495032704516"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="23.11%" headers="mcps1.2.4.1.2 "><p id="p1395014272450"><a name="p1395014272450"></a><a name="p1395014272450"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.8%" headers="mcps1.2.4.1.3 "><p id="p18950327124517"><a name="p18950327124517"></a><a name="p18950327124517"></a>逻辑数据库实例名称。</p>
</td>
</tr>
</tbody>
</table>

