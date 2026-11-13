# Protocol Statistics

Aggregates execution count and elapsed time by protocol message type between begin/end snapshots, and computes the percentage of instance DB_TIME. Node-wide report, which can be viewed in node mode for detail or all report types.

**Table 1 Protocol message type mapping**

<table><thead align="left"><tr>
<th class="cellrowborder" valign="top" width="10%" id="h0"><p><strong>No.</strong></p></th>
<th class="cellrowborder" valign="top" width="30%" id="h1"><p><strong>Report name (Message Type)</strong></p></th>
<th class="cellrowborder" valign="top" width="60%" id="h2"><p><strong>Meaning</strong></p></th>
</tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>1</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Simple Query</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Simple-query protocol path (Q message): elapsed time and execution count</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>2</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Parse</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Extended-query Parse phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>3</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Bind</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Extended-query Bind phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>4</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Extended-query Execute phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>5</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Describe</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Extended-query Describe phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>6</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Sync</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Extended-query Sync phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>7</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Close</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Extended-query Close phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>8</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Batch Bind-Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Batch Bind-Execute path (U message): elapsed time and execution count</p></td></tr>
</tbody>
</table>

**Table 2 Columns in Protocol Message Statistics**

<table><thead align="left"><tr><th class="cellrowborder" valign="top" width="19.91%" id="h0"><p><strong>Column</strong></p></th><th class="cellrowborder" valign="top" width="80.09%" id="h1"><p><strong>Description</strong></p></th></tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Message Type</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Protocol message type (see the mapping above).</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Exec Count</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Execution-count delta between snapshots (end − begin n_calls).</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Total Time(s)</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Total elapsed time in seconds (converted from microsecond delta).</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>Avg Time(ms)</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Average elapsed time in milliseconds; 0 when Exec Count is 0.</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>% of DB Time</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Percentage of the instance DB_TIME delta.</p></td></tr>
</tbody>
</table>

Rows are ordered by Total Time descending. Exec Count and elapsed time may be 0 when there is no activity for that message type.
