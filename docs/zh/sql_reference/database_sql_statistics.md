---
description: 本文介绍 openGauss WDR 报告 Database SQL Statistics 章节及 SQL Stats by Database 表。
keywords: [openGauss, Database SQL Statistics, SQL Stats by Database, WDR, SQL参考]
---

# Database SQL Statistics

按数据库聚合 Unique SQL 完成路径上的执行次数与总耗时，并计算占实例 DB_TIME 的比例。节点范围报表，仅 node 模式下的 detail 或 all 报告可查看。需开启 Unique SQL 相关能力。

**表 1  SQL Stats by Database报表主要内容**

<table><thead align="left"><tr><th class="cellrowborder" valign="top" width="19.91%" id="h0"><p><strong>列名称</strong></p></th><th class="cellrowborder" valign="top" width="80.09%" id="h1"><p><strong>描述</strong></p></th></tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>DB Name</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>数据库名称。</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Exec Count</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>区间内该库SQL执行次数差分。</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Total Time(s)</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>区间内总耗时（秒）。</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Avg Time(ms)</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>平均耗时（毫秒）；Exec Count为0时为0。</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>% of DB Time</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>相对实例DB_TIME差分的百分比。</p></td></tr>
</tbody>
</table>

仅输出 Exec Count 或总耗时差分大于 0 的库，按 Total Time 降序排列。
