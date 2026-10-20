---
description: 本文介绍 openGauss Host Network 的相关内容与操作方法。
keywords: [openGauss, Host Network, SQL参考]
---

# Host Network

Host Network列名称及描述如下表所示。

**表 1**  Host Network报表主要内容

<a name="table42308587232"></a>
<table><thead align="left"><tr id="row1023195813235"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p57125243916"><a name="p57125243916"></a><a name="p57125243916"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815233"><a name="p1923155815233"></a><a name="p1923155815233"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1_1"><a name="p1_1"></a><a name="p1_1"></a>Node</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1_2"><a name="p1_2"></a><a name="p1_2"></a>节点名称。</p>
</td>
</tr>
<tr id="row2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p2_1"><a name="p2_1"></a><a name="p2_1"></a>Interface</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p2_2"><a name="p2_2"></a><a name="p2_2"></a>网卡接口名称。</p>
</td>
</tr>
<tr id="row3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p3_1"><a name="p3_1"></a><a name="p3_1"></a>Ip Address</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3_2"><a name="p3_2"></a><a name="p3_2"></a>网卡IP地址。</p>
</td>
</tr>
<tr id="row4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p4_1"><a name="p4_1"></a><a name="p4_1"></a>Link Speed Mbps</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p4_2"><a name="p4_2"></a><a name="p4_2"></a>网卡链路速率（Mbps）。</p>
</td>
</tr>
<tr id="row5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5_1"><a name="p5_1"></a><a name="p5_1"></a>Device Type</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p5_2"><a name="p5_2"></a><a name="p5_2"></a>设备类型（如physical）。</p>
</td>
</tr>
<tr id="row6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p6_1"><a name="p6_1"></a><a name="p6_1"></a>Rx Bytes Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6_2"><a name="p6_2"></a><a name="p6_2"></a>接收字节数增量（快照间隔内）。</p>
</td>
</tr>
<tr id="row7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p7_1"><a name="p7_1"></a><a name="p7_1"></a>Rx Packets Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p7_2"><a name="p7_2"></a><a name="p7_2"></a>接收数据包数增量。</p>
</td>
</tr>
<tr id="row8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p8_1"><a name="p8_1"></a><a name="p8_1"></a>Rx Errors Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p8_2"><a name="p8_2"></a><a name="p8_2"></a>接收错误数增量。</p>
</td>
</tr>
<tr id="row9"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p9_1"><a name="p9_1"></a><a name="p9_1"></a>Rx Dropped Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p9_2"><a name="p9_2"></a><a name="p9_2"></a>接收丢包数增量。</p>
</td>
</tr>
<tr id="row10"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p10_1"><a name="p10_1"></a><a name="p10_1"></a>Rx FIFO Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p10_2"><a name="p10_2"></a><a name="p10_2"></a>接收FIFO溢出数增量。</p>
</td>
</tr>
<tr id="row11"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p11_1"><a name="p11_1"></a><a name="p11_1"></a>Rx Frame Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11_2"><a name="p11_2"></a><a name="p11_2"></a>接收帧错误数增量。</p>
</td>
</tr>
<tr id="row12"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p12_1"><a name="p12_1"></a><a name="p12_1"></a>Rx Multicast Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p12_2"><a name="p12_2"></a><a name="p12_2"></a>接收多播数据包数增量。</p>
</td>
</tr>
<tr id="row13"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p13_1"><a name="p13_1"></a><a name="p13_1"></a>Tx Bytes Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p13_2"><a name="p13_2"></a><a name="p13_2"></a>发送字节数增量。</p>
</td>
</tr>
<tr id="row14"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p14_1"><a name="p14_1"></a><a name="p14_1"></a>Tx Packets Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14_2"><a name="p14_2"></a><a name="p14_2"></a>发送数据包数增量。</p>
</td>
</tr>
<tr id="row15"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p15_1"><a name="p15_1"></a><a name="p15_1"></a>Tx Errors Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p15_2"><a name="p15_2"></a><a name="p15_2"></a>发送错误数增量。</p>
</td>
</tr>
<tr id="row16"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p16_1"><a name="p16_1"></a><a name="p16_1"></a>Tx Dropped Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p16_2"><a name="p16_2"></a><a name="p16_2"></a>发送丢包数增量。</p>
</td>
</tr>
<tr id="row17"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p17_1"><a name="p17_1"></a><a name="p17_1"></a>Tx FIFO Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p17_2"><a name="p17_2"></a><a name="p17_2"></a>发送FIFO溢出数增量。</p>
</td>
</tr>
<tr id="row18"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p18_1"><a name="p18_1"></a><a name="p18_1"></a>Tx Colls Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p18_2"><a name="p18_2"></a><a name="p18_2"></a>发送冲突数增量。</p>
</td>
</tr>
<tr id="row19"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p19_1"><a name="p19_1"></a><a name="p19_1"></a>Tx Carrier Delta</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p19_2"><a name="p19_2"></a><a name="p19_2"></a>发送载波错误数增量。</p>
</td>
</tr>
<tr id="row20"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p20_1"><a name="p20_1"></a><a name="p20_1"></a>Rx MB/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p20_2"><a name="p20_2"></a><a name="p20_2"></a>每秒接收的数据量大小（MB）。</p>
</td>
</tr>
<tr id="row21"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p21_1"><a name="p21_1"></a><a name="p21_1"></a>Tx MB/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p21_2"><a name="p21_2"></a><a name="p21_2"></a>每秒发送的数据量大小（MB）。</p>
</td>
</tr>
<tr id="row22"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p22_1"><a name="p22_1"></a><a name="p22_1"></a>Rx Pkts/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p22_2"><a name="p22_2"></a><a name="p22_2"></a>每秒接收的数据包数。</p>
</td>
</tr>
<tr id="row23"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p23_1"><a name="p23_1"></a><a name="p23_1"></a>Tx Pkts/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p23_2"><a name="p23_2"></a><a name="p23_2"></a>每秒发送的数据包数。</p>
</td>
</tr>
<tr id="row24"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p24_1"><a name="p24_1"></a><a name="p24_1"></a>Rx Errs/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p24_2"><a name="p24_2"></a><a name="p24_2"></a>每秒接收错误数。</p>
</td>
</tr>
<tr id="row25"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p25_1"><a name="p25_1"></a><a name="p25_1"></a>Rx Drops/s</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p25_2"><a name="p25_2"></a><a name="p25_2"></a>每秒接收丢包数。</p>
</td>
</tr>
<tr id="row26"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p26_1"><a name="p26_1"></a><a name="p26_1"></a>Tx Carrier Errs</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p26_2"><a name="p26_2"></a><a name="p26_2"></a>每秒发送载波错误数。</p>
</td>
</tr>
</tbody>
</table>
