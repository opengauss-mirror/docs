# SUMMARY\_DATABASE\_SQL\_STAT

提供openGauss中各正常节点按数据库聚合的SQL执行统计（字段含义见[DATABASE\_SQL\_STAT](database_sql_stat.md)）。数据由`dbe_perf.get_summary_database_sql_stat()`汇总各节点`database_sql_stat`得到，是WDR快照表`snap_summary_database_sql_stat`的采集来源。

**表 1**  SUMMARY\_DATABASE\_SQL\_STAT字段

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
