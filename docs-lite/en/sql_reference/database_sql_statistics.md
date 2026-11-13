# Database SQL Statistics

Aggregates Unique SQL completion-path execution count and elapsed time by database, and computes the percentage of instance DB_TIME. Node-wide report, which can be viewed in node mode for detail or all report types. Unique SQL must be enabled.

**Table 1 Columns in SQL Stats by Database**

<table><thead align="left"><tr><th class="cellrowborder" valign="top" width="19.91%" id="h0"><p><strong>Column</strong></p></th><th class="cellrowborder" valign="top" width="80.09%" id="h1"><p><strong>Description</strong></p></th></tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>DB Name</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Database name.</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Exec Count</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Execution-count delta for the database between snapshots.</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Total Time(s)</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Total elapsed time in seconds.</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Avg Time(ms)</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Average elapsed time in milliseconds; 0 when Exec Count is 0.</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>% of DB Time</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Percentage of the instance DB_TIME delta.</p></td></tr>
</tbody>
</table>

Only databases with Exec Count or elapsed-time delta greater than 0 are listed, ordered by Total Time descending.
