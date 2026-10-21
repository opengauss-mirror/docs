---
description: 本文介绍 openGauss Host Memory 的相关内容与操作方法。
keywords: [openGauss, Host Memory, SQL参考]
---

# Host Memory

Host Memory列名称及描述如下表所示。

**表 1** Host Memory报表主要内容

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p57125243915"><a name="p57125243915"></a><a name="p57125243915"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1_1"><a name="p1_1"></a><a name="p1_1"></a>  </p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1_2"><a name="p1_2"></a><a name="p1_2"></a>内存快照时刻，包含SnapStart（开始快照）和SnapEnd（结束快照）。</p>
</td>
</tr>
<tr id="row2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p2_1"><a name="p2_1"></a><a name="p2_1"></a>MemTotal</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p2_2"><a name="p2_2"></a><a name="p2_2"></a>总物理内存大小。</p>
</td>
</tr>
<tr id="row3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p3_1"><a name="p3_1"></a><a name="p3_1"></a>MemFree</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3_2"><a name="p3_2"></a><a name="p3_2"></a>空闲物理内存大小。</p>
</td>
</tr>
<tr id="row4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p4_1"><a name="p4_1"></a><a name="p4_1"></a>MemUsed</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p4_2"><a name="p4_2"></a><a name="p4_2"></a>已使用的物理内存大小。</p>
</td>
</tr>
<tr id="row5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5_1"><a name="p5_1"></a><a name="p5_1"></a>MemAvailable</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p5_2"><a name="p5_2"></a><a name="p5_2"></a>估算的可用物理内存大小（可供启动新应用程序使用，无需交换）。</p>
</td>
</tr>
<tr id="row6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p6_1"><a name="p6_1"></a><a name="p6_1"></a>Buffers</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6_2"><a name="p6_2"></a><a name="p6_2"></a>用于块设备（block devices）的缓冲内存大小。</p>
</td>
</tr>
<tr id="row7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p7_1"><a name="p7_1"></a><a name="p7_1"></a>Cached</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p7_2"><a name="p7_2"></a><a name="p7_2"></a>用于文件系统的缓存内存大小。</p>
</td>
</tr>
<tr id="row8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p8_1"><a name="p8_1"></a><a name="p8_1"></a>SReclaimable</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p8_2"><a name="p8_2"></a><a name="p8_2"></a>可回收的Slab内存大小。</p>
</td>
</tr>
<tr id="row9"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p9_1"><a name="p9_1"></a><a name="p9_1"></a>SUnreclaim</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p9_2"><a name="p9_2"></a><a name="p9_2"></a>不可回收的Slab内存大小。</p>
</td>
</tr>
<tr id="row10"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p10_1"><a name="p10_1"></a><a name="p10_1"></a>Mlocked</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p10_2"><a name="p10_2"></a><a name="p10_2"></a>锁定在内存中无法换出的内存大小。</p>
</td>
</tr>
<tr id="row11"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p11_1"><a name="p11_1"></a><a name="p11_1"></a>Shmem</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11_2"><a name="p11_2"></a><a name="p11_2"></a>共享内存大小。</p>
</td>
</tr>
<tr id="row12"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12_1"><a name="p12_1"></a><a name="p12_1"></a>HugePagesTotal</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p12_2"><a name="p12_2"></a><a name="p12_2"></a>大页（Huge Pages）总数。</p>
</td>
</tr>
<tr id="row13"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p13_1"><a name="p13_1"></a><a name="p13_1"></a>HugePagesFree</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p13_2"><a name="p13_2"></a><a name="p13_2"></a>空闲大页数量。</p>
</td>
</tr>
<tr id="row14"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p14_1"><a name="p14_1"></a><a name="p14_1"></a>Hugepagesize</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14_2"><a name="p14_2"></a><a name="p14_2"></a>每个大页的大小。</p>
</td>
</tr>
<tr id="row15"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p15_1"><a name="p15_1"></a><a name="p15_1"></a>SwapTotal</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p15_2"><a name="p15_2"></a><a name="p15_2"></a>交换分区（Swap）总大小。</p>
</td>
</tr>
<tr id="row16"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p16_1"><a name="p16_1"></a><a name="p16_1"></a>SwapUsed</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p16_2"><a name="p16_2"></a><a name="p16_2"></a>已使用的交换分区大小。</p>
</td>
</tr>
<tr id="row17"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17_1"><a name="p17_1"></a><a name="p17_1"></a>SwapFree</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p17_2"><a name="p17_2"></a><a name="p17_2"></a>空闲的交换分区大小。</p>
</td>
</tr>
</tbody>
</table>
