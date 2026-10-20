---
description: 本文介绍 openGauss Time Model 的相关内容，涵盖 Protocol Message Statistics 等内容。
keywords: [openGauss, Time Model, SQL参考, Protocol Message Statistics]
---

# Time Model

Time Model名称及描述如下表所示。

**表 1**  Time Model报表主要内容

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12204539183718"><a name="p12204539183718"></a><a name="p12204539183718"></a>DB_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p42048392374"><a name="p42048392374"></a><a name="p42048392374"></a>所有线程端到端的墙上时间（WALL TIME）消耗总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p420433919372"><a name="p420433919372"></a><a name="p420433919372"></a>EXECUTION_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11204153911379"><a name="p11204153911379"></a><a name="p11204153911379"></a>消耗在执行器上的时间总和（单位：微秒)。</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12204339183720"><a name="p12204339183720"></a><a name="p12204339183720"></a>PL_EXECUTION_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1420433914371"><a name="p1420433914371"></a><a name="p1420433914371"></a>消耗在PL/SQL执行上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1220463919375"><a name="p1220463919375"></a><a name="p1220463919375"></a>CPU_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1020463983712"><a name="p1020463983712"></a><a name="p1020463983712"></a>所有线程CPU时间消耗总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row1523145815238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1020403963712"><a name="p1020403963712"></a><a name="p1020403963712"></a>PLAN_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p820514396376"><a name="p820514396376"></a><a name="p820514396376"></a>消耗在执行计划生成上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row4231125862312"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p22051539113710"><a name="p22051539113710"></a><a name="p22051539113710"></a>REWRITE_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3205183916378"><a name="p3205183916378"></a><a name="p3205183916378"></a>消耗在查询重写上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row19231558172318"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p11205163973712"><a name="p11205163973712"></a><a name="p11205163973712"></a>PL_COMPILATION_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11205163919375"><a name="p11205163919375"></a><a name="p11205163919375"></a>消耗在SQL编译上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row1425411209253"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p320593912379"><a name="p320593912379"></a><a name="p320593912379"></a>PARSE_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1120517397376"><a name="p1120517397376"></a><a name="p1120517397376"></a>消耗在SQL解析上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row1483523102517"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p420533943712"><a name="p420533943712"></a><a name="p420533943712"></a>NET_SEND_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p16205183963711"><a name="p16205183963711"></a><a name="p16205183963711"></a>消耗在网络发送上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>DATA_IO_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>消耗在数据读写上的时间总和（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT1_Q</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>Q报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT2_SIMPLE_QUERY</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>exec_simple_query执行耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT3_ANALYZE_REWRITE</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>pg_analyze_and_rewrite执行耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT4_PLAN_QUERY</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>pg_plan_queries执行耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT5_LIGHT_QUERY</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>exec_query_through_light_proxy执行耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT6_P</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>P报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT7_B</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>B报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT8_E</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>E报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT9_D</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>D报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT10_S</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>S报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT11_C</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>C报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT12_U</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>U报文执行的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT13_BEFORE_QUERY</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>进入下一次报文处理前的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>SRT14_AFTER_QUERY</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>完成报文处理后的耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>RTT_UNKNOWN</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>未知时间消耗，可能是session切换耗时（单位：微秒）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>NET_TRANS_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>驱动执行sql的全链路网络耗时，当前仅支持jdbc驱动。（单位：微秒）</p>
</td>
</tr>
</tbody>
</table>

## Protocol Message Statistics

WDR 报告中对应模块标题为 **Protocol Statistics**，表标题为 **Protocol Message Statistics**。

按协议报文类型统计 begin/end 快照区间内的执行次数与耗时，并计算占实例 DB_TIME 的比例。数据来自 `snapshot.snap_global_instance_time`（`snap_value` / `snap_n_calls`），与 Time Model 同源。节点范围报表，仅 node 模式下的 detail 或 all 报告可查看。

**表 2  协议报文类型映射**

<table><thead align="left"><tr>
<th class="cellrowborder" valign="top" width="8%" id="h0"><p><strong>序号</strong></p></th>
<th class="cellrowborder" valign="top" width="22%" id="h1"><p><strong>报告显示名（Message Type）</strong></p></th>
<th class="cellrowborder" valign="top" width="28%" id="h2"><p><strong>内部 stat_name</strong></p></th>
<th class="cellrowborder" valign="top" width="42%" id="h3"><p><strong>组件含义</strong></p></th>
</tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>1</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Simple Query</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT2_SIMPLE_QUERY</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>简单查询协议路径（Q 报文）耗时与执行次数</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>2</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Parse</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT6_P</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>扩展查询 Parse 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>3</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Bind</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT7_B</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>扩展查询 Bind 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>4</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT8_E</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>扩展查询 Execute 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>5</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Describe</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT9_D</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>扩展查询 Describe 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>6</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Sync</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT10_S</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>扩展查询 Sync 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>7</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Close</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT11_C</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>扩展查询 Close 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>8</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Batch Bind-Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>精确匹配 SRT12_U</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>批量 Bind-Execute（U 报文）路径耗时与执行次数</p></td></tr>
</tbody>
</table>


**表 3  Protocol Message Statistics报表主要内容**

<table><thead align="left"><tr><th class="cellrowborder" valign="top" width="19.91%" id="h0"><p><strong>列名称</strong></p></th><th class="cellrowborder" valign="top" width="80.09%" id="h1"><p><strong>描述</strong></p></th></tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Message Type</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>协议报文类型（见上表）。</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Exec Count</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>区间内该报文类型的执行次数差分（end − begin 的 n_calls）。</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Total Time(s)</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>区间内总耗时（秒，由微秒差分换算）。</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Avg Time(ms)</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>平均耗时（毫秒）；Exec Count 为 0 时为 0。</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>% of DB Time</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>相对实例 DB_TIME 差分的百分比。</p></td></tr>
</tbody>
</table>

按 Total Time 降序排列；无对应报文活动时 Exec Count / 耗时可为 0。
