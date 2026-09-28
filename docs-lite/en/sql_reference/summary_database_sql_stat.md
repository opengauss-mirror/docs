# SUMMARY\_DATABASE\_SQL\_STAT

Provides per-database SQL execution statistics from all healthy nodes in openGauss (see [DATABASE\_SQL\_STAT](database_sql_stat.md) for column meanings). Aggregated by `dbe_perf.get_summary_database_sql_stat()` from each node's `database_sql_stat`, and used as the source of the WDR snapshot table `snap_summary_database_sql_stat`.

**Table 1**  SUMMARY\_DATABASE\_SQL\_STAT columns

<table><thead align="left"><tr>
<th class="cellrowborder" valign="top" width="17.27%"><p><strong>Name</strong></p></th>
<th class="cellrowborder" valign="top" width="16.8%"><p><strong>Type</strong></p></th>
<th class="cellrowborder" valign="top" width="65.93%"><p><strong>Description</strong></p></th>
</tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top"><p>node_name</p></td><td class="cellrowborder" valign="top"><p>text</p></td><td class="cellrowborder" valign="top"><p>Node name.</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>datid</p></td><td class="cellrowborder" valign="top"><p>oid</p></td><td class="cellrowborder" valign="top"><p>Database OID.</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>datname</p></td><td class="cellrowborder" valign="top"><p>name</p></td><td class="cellrowborder" valign="top"><p>Database name.</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>n_calls</p></td><td class="cellrowborder" valign="top"><p>bigint</p></td><td class="cellrowborder" valign="top"><p>Cumulative SQL execution count for the database.</p></td></tr>
<tr><td class="cellrowborder" valign="top"><p>total_elapse_time</p></td><td class="cellrowborder" valign="top"><p>bigint</p></td><td class="cellrowborder" valign="top"><p>Cumulative SQL elapsed time for the database (microseconds).</p></td></tr>
</tbody></table>
