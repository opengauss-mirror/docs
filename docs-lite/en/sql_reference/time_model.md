# Time Model<a name="EN-US_TOPIC_0000001259955051"></a>

The following table describes metrics in the Time Model report.

**Table  1**  Metrics in the Time Model report

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>Metric</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12204539183718"><a name="p12204539183718"></a><a name="p12204539183718"></a>DB_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p42048392374"><a name="p42048392374"></a><a name="p42048392374"></a>Total end-to-end wall time consumed by all threads (unit: μs).</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p420433919372"><a name="p420433919372"></a><a name="p420433919372"></a>EXECUTION_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11204153911379"><a name="p11204153911379"></a><a name="p11204153911379"></a>Total time consumed on the executor (unit: μs).</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12204339183720"><a name="p12204339183720"></a><a name="p12204339183720"></a>PL_EXECUTION_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1420433914371"><a name="p1420433914371"></a><a name="p1420433914371"></a>Total time consumed for executing PL/SQL statements (unit: μs).</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1220463919375"><a name="p1220463919375"></a><a name="p1220463919375"></a>CPU_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1020463983712"><a name="p1020463983712"></a><a name="p1020463983712"></a>Total CPU time consumed by all threads (unit: μs).</p>
</td>
</tr>
<tr id="row1523145815238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1020403963712"><a name="p1020403963712"></a><a name="p1020403963712"></a>PLAN_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p820514396376"><a name="p820514396376"></a><a name="p820514396376"></a>Total time consumed for generating an execution plan (unit: μs).</p>
</td>
</tr>
<tr id="row4231125862312"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p22051539113710"><a name="p22051539113710"></a><a name="p22051539113710"></a>REWRITE_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3205183916378"><a name="p3205183916378"></a><a name="p3205183916378"></a>Total time consumed on query rewriting (unit: μs).</p>
</td>
</tr>
<tr id="row19231558172318"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p11205163973712"><a name="p11205163973712"></a><a name="p11205163973712"></a>PL_COMPILATION_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11205163919375"><a name="p11205163919375"></a><a name="p11205163919375"></a>Total time consumed for SQL compilation (unit: μs).</p>
</td>
</tr>
<tr id="row1425411209253"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p320593912379"><a name="p320593912379"></a><a name="p320593912379"></a>PARSE_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1120517397376"><a name="p1120517397376"></a><a name="p1120517397376"></a>Total time consumed for parsing SQL statements (unit: μs).</p>
</td>
</tr>
<tr id="row1483523102517"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p420533943712"><a name="p420533943712"></a><a name="p420533943712"></a>NET_SEND_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p16205183963711"><a name="p16205183963711"></a><a name="p16205183963711"></a>Total time consumed for sending data over network (unit: μs).</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17205203919375"><a name="p17205203919375"></a><a name="p17205203919375"></a>DATA_IO_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18205113910376"><a name="p18205113910376"></a><a name="p18205113910376"></a>Total time consumed for data read and write (unit: μs).</p>
</td>
</tr>
</tbody>
</table>
## Protocol Message Statistics

In the WDR report, the module title is **Protocol Statistics** and the table title is **Protocol Message Statistics**.

Aggregates execution count and elapsed time by protocol message type between snapshots, and computes the percentage of instance DB_TIME. Data comes from `snapshot.snap_global_instance_time` (`snap_value` / `snap_n_calls`), the same source as Time Model. Node-wide report, which can be viewed in node mode for detail or all report types.

**Table 2 Protocol message type mapping**

<table><thead align="left"><tr>
<th class="cellrowborder" valign="top" width="8%" id="h0"><p><strong>No.</strong></p></th>
<th class="cellrowborder" valign="top" width="22%" id="h1"><p><strong>Report name (Message Type)</strong></p></th>
<th class="cellrowborder" valign="top" width="28%" id="h2"><p><strong>Internal stat_name</strong></p></th>
<th class="cellrowborder" valign="top" width="42%" id="h3"><p><strong>Meaning</strong></p></th>
</tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>1</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Simple Query</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT2_SIMPLE_QUERY</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Simple-query protocol path (Q message): elapsed time and execution count</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>2</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Parse</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT6_P</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Extended-query Parse phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>3</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Bind</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT7_B</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Extended-query Bind phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>4</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT8_E</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Extended-query Execute phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>5</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Describe</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT9_D</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Extended-query Describe phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>6</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Sync</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT10_S</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Extended-query Sync phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>7</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Close</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT11_C</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Extended-query Close phase</p></td></tr>
<tr><td class="cellrowborder" valign="top" headers="h0 "><p>8</p></td><td class="cellrowborder" valign="top" headers="h1 "><p>Batch Bind-Execute</p></td><td class="cellrowborder" valign="top" headers="h2 "><p>Exact match SRT12_U</p></td><td class="cellrowborder" valign="top" headers="h3 "><p>Batch Bind-Execute path (U message): elapsed time and execution count</p></td></tr>
</tbody>
</table>


**Table 3 Columns in Protocol Message Statistics**

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
