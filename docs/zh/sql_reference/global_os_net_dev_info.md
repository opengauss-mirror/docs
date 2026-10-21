---
description: 本文介绍 openGauss GLOBAL\_OS\_NET\_DEV\_INFO 的相关内容与操作方法。
keywords: [openGauss, GLOBAL\_OS\_NET\_DEV\_INFO, SQL参考]
---

# GLOBAL\_OS\_NET\_DEV\_INFO

提供openGauss中所有正常节点下的操作系统网络设备统计信息，数据来源于各节点的/proc/net/dev。

**表 1**  GLOBAL\_OS\_NET\_DEV\_INFO字段

<a name="table_global_os_net_dev_info"></a>
<table><thead align="left"><tr id="row_global_os_net_dev_info_head"><th class="cellrowborder" valign="top" width="16.37836216378362%" id="mcps1.2.4.1.1"><p id="p_global_os_net_dev_info_1"><a name="p_global_os_net_dev_info_1"></a><a name="p_global_os_net_dev_info_1"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.968203179682032%" id="mcps1.2.4.1.2"><p id="p_global_os_net_dev_info_2"><a name="p_global_os_net_dev_info_2"></a><a name="p_global_os_net_dev_info_2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.65343465653434%" id="mcps1.2.4.1.3"><p id="p_global_os_net_dev_info_3"><a name="p_global_os_net_dev_info_3"></a><a name="p_global_os_net_dev_info_3"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_global_os_net_dev_info_0"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_0_1"><a name="p_gnet_0_1"></a><a name="p_gnet_0_1"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_0_2"><a name="p_gnet_0_2"></a><a name="p_gnet_0_2"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_0_3"><a name="p_gnet_0_3"></a><a name="p_gnet_0_3"></a>节点名称。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_1"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_1_1"><a name="p_gnet_1_1"></a><a name="p_gnet_1_1"></a>interface_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_1_2"><a name="p_gnet_1_2"></a><a name="p_gnet_1_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_1_3"><a name="p_gnet_1_3"></a><a name="p_gnet_1_3"></a>网络接口名称。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_2"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_2_1"><a name="p_gnet_2_1"></a><a name="p_gnet_2_1"></a>ip_address</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_2_2"><a name="p_gnet_2_2"></a><a name="p_gnet_2_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_2_3"><a name="p_gnet_2_3"></a><a name="p_gnet_2_3"></a>网络接口的IP地址。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_3"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_3_1"><a name="p_gnet_3_1"></a><a name="p_gnet_3_1"></a>rx_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_3_2"><a name="p_gnet_3_2"></a><a name="p_gnet_3_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_3_3"><a name="p_gnet_3_3"></a><a name="p_gnet_3_3"></a>网络接口接收的字节总数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_4"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_4_1"><a name="p_gnet_4_1"></a><a name="p_gnet_4_1"></a>rx_packets</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_4_2"><a name="p_gnet_4_2"></a><a name="p_gnet_4_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_4_3"><a name="p_gnet_4_3"></a><a name="p_gnet_4_3"></a>网络接口接收的数据包总数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_5"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_5_1"><a name="p_gnet_5_1"></a><a name="p_gnet_5_1"></a>rx_errors</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_5_2"><a name="p_gnet_5_2"></a><a name="p_gnet_5_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_5_3"><a name="p_gnet_5_3"></a><a name="p_gnet_5_3"></a>网络接口接收时出错的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_6"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_6_1"><a name="p_gnet_6_1"></a><a name="p_gnet_6_1"></a>rx_dropped</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_6_2"><a name="p_gnet_6_2"></a><a name="p_gnet_6_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_6_3"><a name="p_gnet_6_3"></a><a name="p_gnet_6_3"></a>网络接口接收时丢弃的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_7"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_7_1"><a name="p_gnet_7_1"></a><a name="p_gnet_7_1"></a>rx_fifo</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_7_2"><a name="p_gnet_7_2"></a><a name="p_gnet_7_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_7_3"><a name="p_gnet_7_3"></a><a name="p_gnet_7_3"></a>网络接口接收时发生FIFO错误的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_8"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_8_1"><a name="p_gnet_8_1"></a><a name="p_gnet_8_1"></a>rx_frame</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_8_2"><a name="p_gnet_8_2"></a><a name="p_gnet_8_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_8_3"><a name="p_gnet_8_3"></a><a name="p_gnet_8_3"></a>网络接口接收时发生帧错误的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_9"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_9_1"><a name="p_gnet_9_1"></a><a name="p_gnet_9_1"></a>rx_multicast</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_9_2"><a name="p_gnet_9_2"></a><a name="p_gnet_9_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_9_3"><a name="p_gnet_9_3"></a><a name="p_gnet_9_3"></a>网络接口接收的组播数据包总数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_10"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_10_1"><a name="p_gnet_10_1"></a><a name="p_gnet_10_1"></a>tx_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_10_2"><a name="p_gnet_10_2"></a><a name="p_gnet_10_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_10_3"><a name="p_gnet_10_3"></a><a name="p_gnet_10_3"></a>网络接口发送的字节总数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_11"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_11_1"><a name="p_gnet_11_1"></a><a name="p_gnet_11_1"></a>tx_packets</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_11_2"><a name="p_gnet_11_2"></a><a name="p_gnet_11_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_11_3"><a name="p_gnet_11_3"></a><a name="p_gnet_11_3"></a>网络接口发送的数据包总数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_12"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_12_1"><a name="p_gnet_12_1"></a><a name="p_gnet_12_1"></a>tx_errors</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_12_2"><a name="p_gnet_12_2"></a><a name="p_gnet_12_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_12_3"><a name="p_gnet_12_3"></a><a name="p_gnet_12_3"></a>网络接口发送时出错的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_13"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_13_1"><a name="p_gnet_13_1"></a><a name="p_gnet_13_1"></a>tx_dropped</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_13_2"><a name="p_gnet_13_2"></a><a name="p_gnet_13_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_13_3"><a name="p_gnet_13_3"></a><a name="p_gnet_13_3"></a>网络接口发送时丢弃的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_14"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_14_1"><a name="p_gnet_14_1"></a><a name="p_gnet_14_1"></a>tx_fifo</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_14_2"><a name="p_gnet_14_2"></a><a name="p_gnet_14_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_14_3"><a name="p_gnet_14_3"></a><a name="p_gnet_14_3"></a>网络接口发送时发生FIFO错误的数据包数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_15"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_15_1"><a name="p_gnet_15_1"></a><a name="p_gnet_15_1"></a>tx_colls</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_15_2"><a name="p_gnet_15_2"></a><a name="p_gnet_15_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_15_3"><a name="p_gnet_15_3"></a><a name="p_gnet_15_3"></a>网络接口发送时发生的冲突次数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_16"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_16_1"><a name="p_gnet_16_1"></a><a name="p_gnet_16_1"></a>tx_carrier</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_16_2"><a name="p_gnet_16_2"></a><a name="p_gnet_16_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_16_3"><a name="p_gnet_16_3"></a><a name="p_gnet_16_3"></a>网络接口发送时发生载波错误的次数。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_17"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_17_1"><a name="p_gnet_17_1"></a><a name="p_gnet_17_1"></a>link_speed_mbps</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_17_2"><a name="p_gnet_17_2"></a><a name="p_gnet_17_2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_17_3"><a name="p_gnet_17_3"></a><a name="p_gnet_17_3"></a>网络链路速率（单位：Mbps）。</p>
</td>
</tr>
<tr id="row_global_os_net_dev_info_18"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gnet_18_1"><a name="p_gnet_18_1"></a><a name="p_gnet_18_1"></a>dev_type</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gnet_18_2"><a name="p_gnet_18_2"></a><a name="p_gnet_18_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gnet_18_3"><a name="p_gnet_18_3"></a><a name="p_gnet_18_3"></a>网络设备类型。</p>
</td>
</tr>
</tbody>
</table>
