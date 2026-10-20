---
description: 本文介绍 openGauss OS\_DISK\_IO\_INFO 的相关内容与操作方法。
keywords: [openGauss, OS\_DISK\_IO\_INFO, SQL参考]
---

# OS\_DISK\_IO\_INFO

显示当前节点操作系统磁盘IO的统计信息，数据来源于/proc/diskstats。

**表 1**  OS\_DISK\_IO\_INFO字段

<a name="table_os_disk_io_info"></a>
<table><thead align="left"><tr id="row_os_disk_io_info_head"><th class="cellrowborder" valign="top" width="16.37836216378362%" id="mcps1.2.4.1.1"><p id="p_os_disk_io_info_1"><a name="p_os_disk_io_info_1"></a><a name="p_os_disk_io_info_1"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.968203179682032%" id="mcps1.2.4.1.2"><p id="p_os_disk_io_info_2"><a name="p_os_disk_io_info_2"></a><a name="p_os_disk_io_info_2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.65343465653434%" id="mcps1.2.4.1.3"><p id="p_os_disk_io_info_3"><a name="p_os_disk_io_info_3"></a><a name="p_os_disk_io_info_3"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_os_disk_io_info_1"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_1_1"><a name="p_disk_1_1"></a><a name="p_disk_1_1"></a>major_number</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_1_2"><a name="p_disk_1_2"></a><a name="p_disk_1_2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_1_3"><a name="p_disk_1_3"></a><a name="p_disk_1_3"></a>磁盘设备主设备号。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_2"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_2_1"><a name="p_disk_2_1"></a><a name="p_disk_2_1"></a>minor_number</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_2_2"><a name="p_disk_2_2"></a><a name="p_disk_2_2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_2_3"><a name="p_disk_2_3"></a><a name="p_disk_2_3"></a>磁盘设备次设备号。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_3"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_3_1"><a name="p_disk_3_1"></a><a name="p_disk_3_1"></a>device_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_3_2"><a name="p_disk_3_2"></a><a name="p_disk_3_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_3_3"><a name="p_disk_3_3"></a><a name="p_disk_3_3"></a>磁盘设备名称。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_4"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_4_1"><a name="p_disk_4_1"></a><a name="p_disk_4_1"></a>total_reads</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_4_2"><a name="p_disk_4_2"></a><a name="p_disk_4_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_4_3"><a name="p_disk_4_3"></a><a name="p_disk_4_3"></a>磁盘完成读操作的总次数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_5"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_5_1"><a name="p_disk_5_1"></a><a name="p_disk_5_1"></a>merge_read_num</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_5_2"><a name="p_disk_5_2"></a><a name="p_disk_5_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_5_3"><a name="p_disk_5_3"></a><a name="p_disk_5_3"></a>被合并的读操作次数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_6"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_6_1"><a name="p_disk_6_1"></a><a name="p_disk_6_1"></a>sector_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_6_2"><a name="p_disk_6_2"></a><a name="p_disk_6_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_6_3"><a name="p_disk_6_3"></a><a name="p_disk_6_3"></a>磁盘读取的扇区总数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_7"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_7_1"><a name="p_disk_7_1"></a><a name="p_disk_7_1"></a>read_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_7_2"><a name="p_disk_7_2"></a><a name="p_disk_7_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_7_3"><a name="p_disk_7_3"></a><a name="p_disk_7_3"></a>磁盘读操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_8"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_8_1"><a name="p_disk_8_1"></a><a name="p_disk_8_1"></a>total_writes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_8_2"><a name="p_disk_8_2"></a><a name="p_disk_8_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_8_3"><a name="p_disk_8_3"></a><a name="p_disk_8_3"></a>磁盘完成写操作的总次数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_9"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_9_1"><a name="p_disk_9_1"></a><a name="p_disk_9_1"></a>merge_write_num</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_9_2"><a name="p_disk_9_2"></a><a name="p_disk_9_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_9_3"><a name="p_disk_9_3"></a><a name="p_disk_9_3"></a>被合并的写操作次数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_10"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_10_1"><a name="p_disk_10_1"></a><a name="p_disk_10_1"></a>sector_write</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_10_2"><a name="p_disk_10_2"></a><a name="p_disk_10_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_10_3"><a name="p_disk_10_3"></a><a name="p_disk_10_3"></a>磁盘写入的扇区总数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_11"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_11_1"><a name="p_disk_11_1"></a><a name="p_disk_11_1"></a>write_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_11_2"><a name="p_disk_11_2"></a><a name="p_disk_11_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_11_3"><a name="p_disk_11_3"></a><a name="p_disk_11_3"></a>磁盘写操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_12"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_12_1"><a name="p_disk_12_1"></a><a name="p_disk_12_1"></a>now_io_request</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_12_2"><a name="p_disk_12_2"></a><a name="p_disk_12_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_12_3"><a name="p_disk_12_3"></a><a name="p_disk_12_3"></a>当前正在进行的IO请求数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_13"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_13_1"><a name="p_disk_13_1"></a><a name="p_disk_13_1"></a>time_inout_op_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_13_2"><a name="p_disk_13_2"></a><a name="p_disk_13_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_13_3"><a name="p_disk_13_3"></a><a name="p_disk_13_3"></a>磁盘IO操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_14"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_14_1"><a name="p_disk_14_1"></a><a name="p_disk_14_1"></a>time_inout_opwei_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_14_2"><a name="p_disk_14_2"></a><a name="p_disk_14_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_14_3"><a name="p_disk_14_3"></a><a name="p_disk_14_3"></a>磁盘IO操作加权累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_15"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_15_1"><a name="p_disk_15_1"></a><a name="p_disk_15_1"></a>discard_complete</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_15_2"><a name="p_disk_15_2"></a><a name="p_disk_15_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_15_3"><a name="p_disk_15_3"></a><a name="p_disk_15_3"></a>磁盘完成discard操作的总次数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_16"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_16_1"><a name="p_disk_16_1"></a><a name="p_disk_16_1"></a>merge_discard_num</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_16_2"><a name="p_disk_16_2"></a><a name="p_disk_16_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_16_3"><a name="p_disk_16_3"></a><a name="p_disk_16_3"></a>被合并的discard操作次数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_17"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_17_1"><a name="p_disk_17_1"></a><a name="p_disk_17_1"></a>sector_discard</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_17_2"><a name="p_disk_17_2"></a><a name="p_disk_17_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_17_3"><a name="p_disk_17_3"></a><a name="p_disk_17_3"></a>磁盘discard的扇区总数。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_18"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_18_1"><a name="p_disk_18_1"></a><a name="p_disk_18_1"></a>discard_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_18_2"><a name="p_disk_18_2"></a><a name="p_disk_18_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_18_3"><a name="p_disk_18_3"></a><a name="p_disk_18_3"></a>磁盘discard操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_os_disk_io_info_19"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_disk_19_1"><a name="p_disk_19_1"></a><a name="p_disk_19_1"></a>sector_size</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_disk_19_2"><a name="p_disk_19_2"></a><a name="p_disk_19_2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_disk_19_3"><a name="p_disk_19_3"></a><a name="p_disk_19_3"></a>磁盘扇区大小（单位：字节）。</p>
</td>
</tr>
</tbody>
</table>
