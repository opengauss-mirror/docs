---
description: This document describes DATABASE\_SQL\_STAT in openGauss.
keywords: [openGauss, DATABASE\_SQL\_STAT, SQL]
---

# DATABASE\_SQL\_STAT

Records per-database SQL execution statistics on the current node. Counters are accumulated on the Unique SQL completion path. Unique SQL must be enabled; otherwise the counters do not increase.

**Table 1**  DATABASE\_SQL\_STAT columns

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
