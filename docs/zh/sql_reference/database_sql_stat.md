---
description: 本文介绍 openGauss DATABASE\_SQL\_STAT 的相关内容与操作方法。
keywords: [openGauss, DATABASE\_SQL\_STAT, SQL参考]
---

# DATABASE\_SQL\_STAT

提供当前节点按数据库聚合的SQL执行统计（在Unique SQL完成路径上累计）。需开启Unique SQL相关能力，否则计数不增长。

**表 1**  DATABASE\_SQL\_STAT字段

<table><thead align="left"><tr>
<th class="cellrowborder" valign="top" width="17.27%"><p><strong>名称</strong></p></th>
<th class="cellrowborder" valign="top" width="16.8%"><p><strong>类型</strong></p></th>
<th class="cellrowborder" valign="top" width="65.93%"><p><strong>描述</strong></p></th>
</tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top"><p>node_name</p></td><td class="cellrowborder" valign="top"><p>text</p></td><td class="cellrowborder" valign="top"><p>节点名称。</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>datid</p></td><td class="cellrowborder" valign="top"><p>oid</p></td><td class="cellrowborder" valign="top"><p>数据库OID。</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>datname</p></td><td class="cellrowborder" valign="top"><p>name</p></td><td class="cellrowborder" valign="top"><p>数据库名称。</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>n_calls</p></td><td class="cellrowborder" valign="top"><p>bigint</p></td><td class="cellrowborder" valign="top"><p>该库累计SQL执行次数。</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>total_elapse_time</p></td><td class="cellrowborder" valign="top"><p>bigint</p></td><td class="cellrowborder" valign="top"><p>该库累计SQL总耗时（微秒）。</p></td></tr>
</tbody></table>
