# OS\_NET\_DEV\_INFO

显示当前节点操作系统网络设备的统计信息，数据来源于/proc/net/dev。

**表 1**  OS\_NET\_DEV\_INFO字段

<a name="table_os_net_dev_info"></a>
<table><thead align="left"><tr id="row_os_net_dev_info_head"><th class="cellrowborder" valign="top" width="16.37836216378362%" id="mcps1.2.4.1.1"><p id="p_os_net_dev_info_1"><a name="p_os_net_dev_info_1"></a><a name="p_os_net_dev_info_1"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.968203179682032%" id="mcps1.2.4.1.2"><p id="p_os_net_dev_info_2"><a name="p_os_net_dev_info_2"></a><a name="p_os_net_dev_info_2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.65343465653434%" id="mcps1.2.4.1.3"><p id="p_os_net_dev_info_3"><a name="p_os_net_dev_info_3"></a><a name="p_os_net_dev_info_3"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_os_net_dev_info_1"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_1_1"><a name="p_net_1_1"></a><a name="p_net_1_1"></a>interface_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_1_2"><a name="p_net_1_2"></a><a name="p_net_1_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_1_3"><a name="p_net_1_3"></a><a name="p_net_1_3"></a>网络接口名称。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_2"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_2_1"><a name="p_net_2_1"></a><a name="p_net_2_1"></a>ip_address</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_2_2"><a name="p_net_2_2"></a><a name="p_net_2_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_2_3"><a name="p_net_2_3"></a><a name="p_net_2_3"></a>网络接口的IP地址。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_3"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_3_1"><a name="p_net_3_1"></a><a name="p_net_3_1"></a>rx_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_3_2"><a name="p_net_3_2"></a><a name="p_net_3_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_3_3"><a name="p_net_3_3"></a><a name="p_net_3_3"></a>网络接口接收的字节总数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_4"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_4_1"><a name="p_net_4_1"></a><a name="p_net_4_1"></a>rx_packets</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_4_2"><a name="p_net_4_2"></a><a name="p_net_4_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_4_3"><a name="p_net_4_3"></a><a name="p_net_4_3"></a>网络接口接收的数据包总数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_5"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_5_1"><a name="p_net_5_1"></a><a name="p_net_5_1"></a>rx_errors</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_5_2"><a name="p_net_5_2"></a><a name="p_net_5_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_5_3"><a name="p_net_5_3"></a><a name="p_net_5_3"></a>网络接口接收时出错的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_6"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_6_1"><a name="p_net_6_1"></a><a name="p_net_6_1"></a>rx_dropped</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_6_2"><a name="p_net_6_2"></a><a name="p_net_6_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_6_3"><a name="p_net_6_3"></a><a name="p_net_6_3"></a>网络接口接收时丢弃的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_7"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_7_1"><a name="p_net_7_1"></a><a name="p_net_7_1"></a>rx_fifo</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_7_2"><a name="p_net_7_2"></a><a name="p_net_7_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_7_3"><a name="p_net_7_3"></a><a name="p_net_7_3"></a>网络接口接收时发生FIFO错误的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_8"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_8_1"><a name="p_net_8_1"></a><a name="p_net_8_1"></a>rx_frame</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_8_2"><a name="p_net_8_2"></a><a name="p_net_8_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_8_3"><a name="p_net_8_3"></a><a name="p_net_8_3"></a>网络接口接收时发生帧错误的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_9"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_9_1"><a name="p_net_9_1"></a><a name="p_net_9_1"></a>rx_multicast</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_9_2"><a name="p_net_9_2"></a><a name="p_net_9_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_9_3"><a name="p_net_9_3"></a><a name="p_net_9_3"></a>网络接口接收的组播数据包总数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_10"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_10_1"><a name="p_net_10_1"></a><a name="p_net_10_1"></a>tx_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_10_2"><a name="p_net_10_2"></a><a name="p_net_10_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_10_3"><a name="p_net_10_3"></a><a name="p_net_10_3"></a>网络接口发送的字节总数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_11"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_11_1"><a name="p_net_11_1"></a><a name="p_net_11_1"></a>tx_packets</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_11_2"><a name="p_net_11_2"></a><a name="p_net_11_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_11_3"><a name="p_net_11_3"></a><a name="p_net_11_3"></a>网络接口发送的数据包总数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_12"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_12_1"><a name="p_net_12_1"></a><a name="p_net_12_1"></a>tx_errors</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_12_2"><a name="p_net_12_2"></a><a name="p_net_12_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_12_3"><a name="p_net_12_3"></a><a name="p_net_12_3"></a>网络接口发送时出错的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_13"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_13_1"><a name="p_net_13_1"></a><a name="p_net_13_1"></a>tx_dropped</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_13_2"><a name="p_net_13_2"></a><a name="p_net_13_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_13_3"><a name="p_net_13_3"></a><a name="p_net_13_3"></a>网络接口发送时丢弃的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_14"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_14_1"><a name="p_net_14_1"></a><a name="p_net_14_1"></a>tx_fifo</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_14_2"><a name="p_net_14_2"></a><a name="p_net_14_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_14_3"><a name="p_net_14_3"></a><a name="p_net_14_3"></a>网络接口发送时发生FIFO错误的数据包数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_15"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_15_1"><a name="p_net_15_1"></a><a name="p_net_15_1"></a>tx_colls</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_15_2"><a name="p_net_15_2"></a><a name="p_net_15_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_15_3"><a name="p_net_15_3"></a><a name="p_net_15_3"></a>网络接口发送时发生的冲突次数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_16"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_16_1"><a name="p_net_16_1"></a><a name="p_net_16_1"></a>tx_carrier</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_16_2"><a name="p_net_16_2"></a><a name="p_net_16_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_16_3"><a name="p_net_16_3"></a><a name="p_net_16_3"></a>网络接口发送时发生载波错误的次数。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_17"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_17_1"><a name="p_net_17_1"></a><a name="p_net_17_1"></a>link_speed_mbps</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_17_2"><a name="p_net_17_2"></a><a name="p_net_17_2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_17_3"><a name="p_net_17_3"></a><a name="p_net_17_3"></a>网络链路速率（单位：Mbps）。</p>
</td>
</tr>
<tr id="row_os_net_dev_info_18"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_net_18_1"><a name="p_net_18_1"></a><a name="p_net_18_1"></a>dev_type</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_net_18_2"><a name="p_net_18_2"></a><a name="p_net_18_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_net_18_3"><a name="p_net_18_3"></a><a name="p_net_18_3"></a>网络设备类型。</p>
</td>
</tr>
</tbody>
</table>
