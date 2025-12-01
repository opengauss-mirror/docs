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

