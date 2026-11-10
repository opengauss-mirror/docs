---
description: 本文介绍 openGauss Host Disk IO 的相关内容与操作方法。
keywords: [openGauss, Host Disk IO, SQL参考]
---

# Host Disk IO

Host Disk IO列名称及描述如下表所示。

**表 1**  Host Disk IO报表主要内容

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p57125243915"><a name="p57125243915"></a><a name="p57125243915"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1_1"><a name="p1_1"></a><a name="p1_1"></a>Device</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1_2"><a name="p1_2"></a><a name="p1_2"></a>磁盘设备名称。</p>
</td>
</tr>
<tr id="row2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p2_1"><a name="p2_1"></a><a name="p2_1"></a>Reads/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p2_2"><a name="p2_2"></a><a name="p2_2"></a>设备在两个快照之间每秒读取操作的次数。</p>
</td>
</tr>
<tr id="row3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p3_1"><a name="p3_1"></a><a name="p3_1"></a>Read MB/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3_2"><a name="p3_2"></a><a name="p3_2"></a>设备在两个快照之间每秒读取的数据量大小（MB）。</p>
</td>
</tr>
<tr id="row4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p4_1"><a name="p4_1"></a><a name="p4_1"></a>Read Time/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p4_2"><a name="p4_2"></a><a name="p4_2"></a>设备在两个快照之间每秒读取操作消耗的时间。</p>
</td>
</tr>
<tr id="row5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5_1"><a name="p5_1"></a><a name="p5_1"></a>Writes/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p5_2"><a name="p5_2"></a><a name="p5_2"></a>设备在两个快照之间每秒写入操作的次数。</p>
</td>
</tr>
<tr id="row6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p6_1"><a name="p6_1"></a><a name="p6_1"></a>Write MB/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6_2"><a name="p6_2"></a><a name="p6_2"></a>设备在两个快照之间每秒写入的数据量大小（MB）。</p>
</td>
</tr>
<tr id="row7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p7_1"><a name="p7_1"></a><a name="p7_1"></a>Write Time/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p7_2"><a name="p7_2"></a><a name="p7_2"></a>设备在两个快照之间每秒写入操作消耗的时间。</p>
</td>
</tr>
</tbody>
</table>
