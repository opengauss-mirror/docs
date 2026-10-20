---
description: 本文介绍 openGauss Memory Statistics 的相关内容，涵盖 Shared Memory Statistics 等内容。
keywords: [openGauss, Memory Statistics, SQL参考, Shared Memory Statistics]
---

# Memory Statistics

Memory Statistics指标名称及描述如下表所示。

**表 1**  Memory Statistics报表主要内容

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>指标名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p105911367362"><a name="p105911367362"></a><a name="p105911367362"></a>shared_used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p2059133612364"><a name="p2059133612364"></a><a name="p2059133612364"></a>已经使用共享内存大小（MB）。</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p25911336113611"><a name="p25911336113611"></a><a name="p25911336113611"></a>max_shared_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6591193623619"><a name="p6591193623619"></a><a name="p6591193623619"></a>最大共享内存（MB）。</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p759173673617"><a name="p759173673617"></a><a name="p759173673617"></a>process_used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p559113362366"><a name="p559113362366"></a><a name="p559113362366"></a>进程已经使用内存（MB）。</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12591236193612"><a name="p12591236193612"></a><a name="p12591236193612"></a>max_process_memory</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p55915367366"><a name="p55915367366"></a><a name="p55915367366"></a>最大进程内存（MB）。</p>
</td>
</tr>
</tbody>
</table>

## Shared Memory Statistics

展示结束快照时刻共享内存候选组件中按占用大小排序的Top 10及(Total)行。占比分母为max_shared_memory。节点范围报表，仅node模式下的summary或all报告可查看。

候选组件包括：Buffer Blocks、Buffer Descriptors、Buffer Descriptors Extra、Checkpoint BufferIds、clog、XLOG Ctl、CSNLOG Ctl、PgStat、AshContext、IncreCheckPointContext、Undo、imcstore context、DoubleWriteContext。

数据来源：snapshot.snap_global_shared_memory_detail、snapshot.snap_global_memory_node_detail。

**表 2  Shared Memory Statistics报表主要内容**

<table><thead align="left"><tr><th class="cellrowborder" valign="top" width="19.91%" id="h0"><p><strong>列名称</strong></p></th><th class="cellrowborder" valign="top" width="80.09%" id="h1"><p><strong>描述</strong></p></th></tr></thead>
<tbody>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Shared Memory</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>共享内存组件名称。含(Total)以及候选组件中按大小排序的Top 10。</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Size</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>组件占用大小（MB或GB）。(Total)行为max_shared_memory。</p></td></tr>
<tr><td class="cellrowborder" valign="top" width="19.91%" headers="h0 "><p>Pct(%)</p></td><td class="cellrowborder" valign="top" width="80.09%" headers="h1 "><p>相对max_shared_memory的占比；(Total)为100%。</p></td></tr>
</tbody>
</table>
