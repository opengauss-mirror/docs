---
description: This document describes Memory Statistics in openGauss, covering topics such as Shared Memory Statistics.
keywords: [openGauss, Memory Statistics, SQL, Shared Memory Statistics]
---

# Memory Statistics<a name="EN-US_TOPIC_0000001215195226"></a>

The following table lists metrics in the Memory Statistics report.

**Table  1**  Columns in the Memory Statistics report

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>Metric</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p105911367362"><a name="p105911367362"></a><a name="p105911367362"></a>shared_used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p2059133612364"><a name="p2059133612364"></a><a name="p2059133612364"></a>Size of used shared memory (MB).</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p25911336113611"><a name="p25911336113611"></a><a name="p25911336113611"></a>max_shared_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6591193623619"><a name="p6591193623619"></a><a name="p6591193623619"></a>Maximum shared memory (MB).</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p759173673617"><a name="p759173673617"></a><a name="p759173673617"></a>process_used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p559113362366"><a name="p559113362366"></a><a name="p559113362366"></a>Memory used by processes (MB).</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12591236193612"><a name="p12591236193612"></a><a name="p12591236193612"></a>max_process_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p55915367366"><a name="p55915367366"></a><a name="p55915367366"></a>Maximum memory that can be allocated to a process (MB).</p>
</td>
</tr>
</tbody>
</table>

## Shared Memory Statistics

Shows the Top 10 shared-memory candidate components by size at the end snapshot, plus a (Total) row. The percentage denominator is max_shared_memory. Node-wide report, which can be viewed in node mode for summary or all report types.

Candidates: Buffer Blocks, Buffer Descriptors, Buffer Descriptors Extra, Checkpoint BufferIds, clog, XLOG Ctl, CSNLOG Ctl, PgStat, AshContext, IncreCheckPointContext, Undo, imcstore context, and DoubleWriteContext.

Data sources: snapshot.snap_global_shared_memory_detail and snapshot.snap_global_memory_node_detail.

**Table 2 Columns in Shared Memory Statistics**

<table><thead align="left"><tr><th class="cellrowborder" valign="top" width="19.91%" id="h0"><p><strong>Column</strong></p></th><th class="cellrowborder" valign="top" width="80.09%" id="h1"><p><strong>Description</strong></p></th></tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Shared Memory</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Shared-memory component name. Includes (Total) and the Top 10 candidates by size.</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Size</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Component size (MB or GB). The (Total) row is max_shared_memory.</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Pct(%)</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>Percentage relative to max_shared_memory; (Total) is 100%.</p></td></tr>
</tbody>
</table>
