# Protocol Statistics

按协议报文类型统计 begin/end 快照区间内的执行次数与耗时，并计算占实例 DB_TIME 的比例。节点范围报表，仅 node 模式下的 detail 或 all 报告可查看。

**表 1  协议报文类型映射**

<table><thead align="left"><tr>
<th class="cellrowborder" valign="top" width="10%" id="h0"><p><strong>序号</strong></p></th>
<th class="cellrowborder" valign="top" width="30%" id="h1"><p><strong>报告显示名（Message Type）</strong></p></th>
<th class="cellrowborder" valign="top" width="60%" id="h2"><p><strong>组件含义</strong></p></th>
</tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>1</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Simple Query</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>简单查询协议路径（Q 报文）耗时与执行次数</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>2</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Parse</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>扩展查询 Parse 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>3</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Bind</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>扩展查询 Bind 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>4</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>扩展查询 Execute 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>5</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Describe</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>扩展查询 Describe 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>6</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Sync</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>扩展查询 Sync 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>7</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Close</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>扩展查询 Close 阶段</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>8</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Batch Bind-Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>批量 Bind-Execute（U 报文）路径耗时与执行次数</p></td></tr>
</tbody>
</table>

**表 2  Protocol Message Statistics报表主要内容**

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
