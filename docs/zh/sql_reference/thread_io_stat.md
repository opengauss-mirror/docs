---
description: 本文介绍 openGauss THREAD\_IO\_STAT 的相关内容与操作方法。
keywords: [openGauss, THREAD\_IO\_STAT, SQL参考]
---

# THREAD\_IO\_STAT

显示当前节点下各线程的IO统计信息。

**表 1**  THREAD\_IO\_STAT字段

<a name="table_thread_io_stat"></a>
<table><thead align="left"><tr id="row_thread_io_stat_head"><th class="cellrowborder" valign="top" width="16.37836216378362%" id="mcps1.2.4.1.1"><p id="p_thread_io_stat_1"><a name="p_thread_io_stat_1"></a><a name="p_thread_io_stat_1"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.968203179682032%" id="mcps1.2.4.1.2"><p id="p_thread_io_stat_2"><a name="p_thread_io_stat_2"></a><a name="p_thread_io_stat_2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.65343465653434%" id="mcps1.2.4.1.3"><p id="p_thread_io_stat_3"><a name="p_thread_io_stat_3"></a><a name="p_thread_io_stat_3"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_thread_io_stat_1"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_1_1"><a name="p_tio_1_1"></a><a name="p_tio_1_1"></a>io_role_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_1_2"><a name="p_tio_1_2"></a><a name="p_tio_1_2"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_1_3"><a name="p_tio_1_3"></a><a name="p_tio_1_3"></a>线程IO角色编号。取值及含义见表2。</p>
</td>
</tr>
<tr id="row_thread_io_stat_2"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_2_1"><a name="p_tio_2_1"></a><a name="p_tio_2_1"></a>role_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_2_2"><a name="p_tio_2_2"></a><a name="p_tio_2_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_2_3"><a name="p_tio_2_3"></a><a name="p_tio_2_3"></a>线程IO角色名称。与io_role_id的对应关系见表2。</p>
</td>
</tr>
<tr id="row_thread_io_stat_3"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_3_1"><a name="p_tio_3_1"></a><a name="p_tio_3_1"></a>object_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_3_2"><a name="p_tio_3_2"></a><a name="p_tio_3_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_3_3"><a name="p_tio_3_3"></a><a name="p_tio_3_3"></a>IO操作对象名称。取值范围：</p>
<p id="p_tio_3_4"><a name="p_tio_3_4"></a><a name="p_tio_3_4"></a>Relation：普通关系（表、索引等数据文件）IO。</p>
<p id="p_tio_3_5"><a name="p_tio_3_5"></a><a name="p_tio_3_5"></a>TempRelation：临时关系文件的IO。</p>
<p id="p_tio_3_6"><a name="p_tio_3_6"></a><a name="p_tio_3_6"></a>Wal：WAL日志文件IO。</p>
<p id="p_tio_3_7"><a name="p_tio_3_7"></a><a name="p_tio_3_7"></a>Undo：回滚段（undo）文件IO。</p>
<p id="p_tio_3_8"><a name="p_tio_3_8"></a><a name="p_tio_3_8"></a>Archive：归档文件IO。</p>
<p id="p_tio_3_9"><a name="p_tio_3_9"></a><a name="p_tio_3_9"></a>Other：其他对象的IO。</p>
</td>
</tr>
<tr id="row_thread_io_stat_4"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_4_1"><a name="p_tio_4_1"></a><a name="p_tio_4_1"></a>context_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_4_2"><a name="p_tio_4_2"></a><a name="p_tio_4_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_4_3"><a name="p_tio_4_3"></a><a name="p_tio_4_3"></a>IO操作上下文名称。取值范围：</p>
<p id="p_tio_4_4"><a name="p_tio_4_4"></a><a name="p_tio_4_4"></a>Normal：常规单点读写IO。</p>
<p id="p_tio_4_5"><a name="p_tio_4_5"></a><a name="p_tio_4_5"></a>BulkRead：批量读取IO，如预取、全表扫描。</p>
<p id="p_tio_4_6"><a name="p_tio_4_6"></a><a name="p_tio_4_6"></a>BulkWrite：批量写入IO，如COPY导入。</p>
<p id="p_tio_4_7"><a name="p_tio_4_7"></a><a name="p_tio_4_7"></a>Vacuum：垃圾回收（VACUUM）IO。</p>
<p id="p_tio_4_8"><a name="p_tio_4_8"></a><a name="p_tio_4_8"></a>Recovery：崩溃恢复回放IO。</p>
<p id="p_tio_4_9"><a name="p_tio_4_9"></a><a name="p_tio_4_9"></a>Replication：主备复制IO。</p>
<p id="p_tio_4_10"><a name="p_tio_4_10"></a><a name="p_tio_4_10"></a>Unknown：无法识别的上下文。</p>
</td>
</tr>
<tr id="row_thread_io_stat_5"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_5_1"><a name="p_tio_5_1"></a><a name="p_tio_5_1"></a>num_reads</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_5_2"><a name="p_tio_5_2"></a><a name="p_tio_5_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_5_3"><a name="p_tio_5_3"></a><a name="p_tio_5_3"></a>读操作次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_6"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_6_1"><a name="p_tio_6_1"></a><a name="p_tio_6_1"></a>num_writes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_6_2"><a name="p_tio_6_2"></a><a name="p_tio_6_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_6_3"><a name="p_tio_6_3"></a><a name="p_tio_6_3"></a>写操作次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_7"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_7_1"><a name="p_tio_7_1"></a><a name="p_tio_7_1"></a>bytes_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_7_2"><a name="p_tio_7_2"></a><a name="p_tio_7_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_7_3"><a name="p_tio_7_3"></a><a name="p_tio_7_3"></a>读取的字节数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_8"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_8_1"><a name="p_tio_8_1"></a><a name="p_tio_8_1"></a>bytes_written</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_8_2"><a name="p_tio_8_2"></a><a name="p_tio_8_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_8_3"><a name="p_tio_8_3"></a><a name="p_tio_8_3"></a>写入的字节数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_9"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_9_1"><a name="p_tio_9_1"></a><a name="p_tio_9_1"></a>read_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_9_2"><a name="p_tio_9_2"></a><a name="p_tio_9_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_9_3"><a name="p_tio_9_3"></a><a name="p_tio_9_3"></a>读操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_10"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_10_1"><a name="p_tio_10_1"></a><a name="p_tio_10_1"></a>write_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_10_2"><a name="p_tio_10_2"></a><a name="p_tio_10_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_10_3"><a name="p_tio_10_3"></a><a name="p_tio_10_3"></a>写操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_11"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_11_1"><a name="p_tio_11_1"></a><a name="p_tio_11_1"></a>writebacks</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_11_2"><a name="p_tio_11_2"></a><a name="p_tio_11_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_11_3"><a name="p_tio_11_3"></a><a name="p_tio_11_3"></a>回写操作次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_12"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_12_1"><a name="p_tio_12_1"></a><a name="p_tio_12_1"></a>writeback_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_12_2"><a name="p_tio_12_2"></a><a name="p_tio_12_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_12_3"><a name="p_tio_12_3"></a><a name="p_tio_12_3"></a>回写操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_13"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_13_1"><a name="p_tio_13_1"></a><a name="p_tio_13_1"></a>max_writeback_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_13_2"><a name="p_tio_13_2"></a><a name="p_tio_13_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_13_3"><a name="p_tio_13_3"></a><a name="p_tio_13_3"></a>最大回写操作耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_14"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_14_1"><a name="p_tio_14_1"></a><a name="p_tio_14_1"></a>extend_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_14_2"><a name="p_tio_14_2"></a><a name="p_tio_14_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_14_3"><a name="p_tio_14_3"></a><a name="p_tio_14_3"></a>文件扩展的大小（单位：字节）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_15"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_15_1"><a name="p_tio_15_1"></a><a name="p_tio_15_1"></a>extend_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_15_2"><a name="p_tio_15_2"></a><a name="p_tio_15_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_15_3"><a name="p_tio_15_3"></a><a name="p_tio_15_3"></a>文件扩展累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_16"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_16_1"><a name="p_tio_16_1"></a><a name="p_tio_16_1"></a>max_extend_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_16_2"><a name="p_tio_16_2"></a><a name="p_tio_16_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_16_3"><a name="p_tio_16_3"></a><a name="p_tio_16_3"></a>最大文件扩展耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_17"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_17_1"><a name="p_tio_17_1"></a><a name="p_tio_17_1"></a>hits</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_17_2"><a name="p_tio_17_2"></a><a name="p_tio_17_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_17_3"><a name="p_tio_17_3"></a><a name="p_tio_17_3"></a>缓存命中次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_18"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_18_1"><a name="p_tio_18_1"></a><a name="p_tio_18_1"></a>evictions</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_18_2"><a name="p_tio_18_2"></a><a name="p_tio_18_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_18_3"><a name="p_tio_18_3"></a><a name="p_tio_18_3"></a>缓存淘汰次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_19"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_19_1"><a name="p_tio_19_1"></a><a name="p_tio_19_1"></a>reuses</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_19_2"><a name="p_tio_19_2"></a><a name="p_tio_19_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_19_3"><a name="p_tio_19_3"></a><a name="p_tio_19_3"></a>缓存复用次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_20"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_20_1"><a name="p_tio_20_1"></a><a name="p_tio_20_1"></a>fsyncs</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_20_2"><a name="p_tio_20_2"></a><a name="p_tio_20_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_20_3"><a name="p_tio_20_3"></a><a name="p_tio_20_3"></a>fsync操作次数。</p>
</td>
</tr>
<tr id="row_thread_io_stat_21"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_21_1"><a name="p_tio_21_1"></a><a name="p_tio_21_1"></a>total_fsync_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_21_2"><a name="p_tio_21_2"></a><a name="p_tio_21_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_21_3"><a name="p_tio_21_3"></a><a name="p_tio_21_3"></a>fsync操作累计耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_22"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_22_1"><a name="p_tio_22_1"></a><a name="p_tio_22_1"></a>max_read_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_22_2"><a name="p_tio_22_2"></a><a name="p_tio_22_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_22_3"><a name="p_tio_22_3"></a><a name="p_tio_22_3"></a>最大读操作耗时（单位：毫秒）。</p>
</td>
</tr>
<tr id="row_thread_io_stat_23"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_tio_23_1"><a name="p_tio_23_1"></a><a name="p_tio_23_1"></a>max_write_time_ms</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_tio_23_2"><a name="p_tio_23_2"></a><a name="p_tio_23_2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_tio_23_3"><a name="p_tio_23_3"></a><a name="p_tio_23_3"></a>最大写操作耗时（单位：毫秒）。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  线程IO角色编号（io_role_id）与名称（role_name）对应关系

<a name="table_thread_io_role"></a>
<table><thead align="left"><tr id="row_thread_io_role_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p_tior_1"><a name="p_tior_1"></a><a name="p_tior_1"></a>io_role_id</p>
</th>
<th class="cellrowborder" valign="top" width="27.169999999999998%" id="mcps1.2.3.1.2"><p id="p_tior_2"><a name="p_tior_2"></a><a name="p_tior_2"></a>role_name</p>
</th>
<th class="cellrowborder" valign="top" width="55.66%" id="mcps1.2.3.1.3"><p id="p_tior_3"><a name="p_tior_3"></a><a name="p_tior_3"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_tior_0"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r0_1"><a name="p_tior_r0_1"></a><a name="p_tior_r0_1"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r0_2"><a name="p_tior_r0_2"></a><a name="p_tior_r0_2"></a>Worker</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r0_3"><a name="p_tior_r0_3"></a><a name="p_tior_r0_3"></a>后端工作线程：处理用户SQL读写IO（含线程池工作线程）。</p>
</td>
</tr>
<tr id="row_tior_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r1_1"><a name="p_tior_r1_1"></a><a name="p_tior_r1_1"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r1_2"><a name="p_tior_r1_2"></a><a name="p_tior_r1_2"></a>WalSender</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r1_3"><a name="p_tior_r1_3"></a><a name="p_tior_r1_3"></a>WAL发送线程：读取WAL段文件并通过网络发送。</p>
</td>
</tr>
<tr id="row_tior_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r2_1"><a name="p_tior_r2_1"></a><a name="p_tior_r2_1"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r2_2"><a name="p_tior_r2_2"></a><a name="p_tior_r2_2"></a>Checkpointer</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r2_3"><a name="p_tior_r2_3"></a><a name="p_tior_r2_3"></a>检查点线程：脏页写回及文件fsync。</p>
</td>
</tr>
<tr id="row_tior_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r3_1"><a name="p_tior_r3_1"></a><a name="p_tior_r3_1"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r3_2"><a name="p_tior_r3_2"></a><a name="p_tior_r3_2"></a>BgWriter</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r3_3"><a name="p_tior_r3_3"></a><a name="p_tior_r3_3"></a>后台写线程：脏页写回。</p>
</td>
</tr>
<tr id="row_tior_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r4_1"><a name="p_tior_r4_1"></a><a name="p_tior_r4_1"></a>4</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r4_2"><a name="p_tior_r4_2"></a><a name="p_tior_r4_2"></a>AutoVacWorker</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r4_3"><a name="p_tior_r4_3"></a><a name="p_tior_r4_3"></a>自动清理工作线程：数据页读写。</p>
</td>
</tr>
<tr id="row_tior_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r5_1"><a name="p_tior_r5_1"></a><a name="p_tior_r5_1"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r5_2"><a name="p_tior_r5_2"></a><a name="p_tior_r5_2"></a>Startup</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r5_3"><a name="p_tior_r5_3"></a><a name="p_tior_r5_3"></a>启动（恢复）线程：redo回放读取IO。</p>
</td>
</tr>
<tr id="row_tior_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r6_1"><a name="p_tior_r6_1"></a><a name="p_tior_r6_1"></a>6</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r6_2"><a name="p_tior_r6_2"></a><a name="p_tior_r6_2"></a>WalWriter</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r6_3"><a name="p_tior_r6_3"></a><a name="p_tior_r6_3"></a>WAL写线程：WAL段文件写入（含辅助段预分配）。</p>
</td>
</tr>
<tr id="row_tior_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r7_1"><a name="p_tior_r7_1"></a><a name="p_tior_r7_1"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r7_2"><a name="p_tior_r7_2"></a><a name="p_tior_r7_2"></a>WalRcvWriter</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r7_3"><a name="p_tior_r7_3"></a><a name="p_tior_r7_3"></a>WAL接收写线程：备机WAL落盘；WALRECEIVER自身不写磁盘。</p>
</td>
</tr>
<tr id="row_tior_8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r8_1"><a name="p_tior_r8_1"></a><a name="p_tior_r8_1"></a>8</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r8_2"><a name="p_tior_r8_2"></a><a name="p_tior_r8_2"></a>Archiver</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r8_3"><a name="p_tior_r8_3"></a><a name="p_tior_r8_3"></a>归档线程：读取WAL段文件并写入归档文件。</p>
</td>
</tr>
<tr id="row_tior_9"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r9_1"><a name="p_tior_r9_1"></a><a name="p_tior_r9_1"></a>9</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r9_2"><a name="p_tior_r9_2"></a><a name="p_tior_r9_2"></a>UndoWorker</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r9_3"><a name="p_tior_r9_3"></a><a name="p_tior_r9_3"></a>Ustore回滚段（undo）工作/回收线程。</p>
</td>
</tr>
<tr id="row_tior_10"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r10_1"><a name="p_tior_r10_1"></a><a name="p_tior_r10_1"></a>10</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r10_2"><a name="p_tior_r10_2"></a><a name="p_tior_r10_2"></a>Catchup</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r10_3"><a name="p_tior_r10_3"></a><a name="p_tior_r10_3"></a>数据页复制追赶线程：顺序读取数据页，类似DataRcvWriter。</p>
</td>
</tr>
<tr id="row_tior_11"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r11_1"><a name="p_tior_r11_1"></a><a name="p_tior_r11_1"></a>11</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r11_2"><a name="p_tior_r11_2"></a><a name="p_tior_r11_2"></a>ParallelDecode</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r11_3"><a name="p_tior_r11_3"></a><a name="p_tior_r11_3"></a>并行逻辑解码线程：读取WAL进行解码。</p>
</td>
</tr>
<tr id="row_tior_12"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r12_1"><a name="p_tior_r12_1"></a><a name="p_tior_r12_1"></a>12</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r12_2"><a name="p_tior_r12_2"></a><a name="p_tior_r12_2"></a>ApplyWorker</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r12_3"><a name="p_tior_r12_3"></a><a name="p_tior_r12_3"></a>逻辑复制apply工作线程：读写数据页。</p>
</td>
</tr>
<tr id="row_tior_13"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r13_1"><a name="p_tior_r13_1"></a><a name="p_tior_r13_1"></a>13</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r13_2"><a name="p_tior_r13_2"></a><a name="p_tior_r13_2"></a>DataRcvWriter</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r13_3"><a name="p_tior_r13_3"></a><a name="p_tior_r13_3"></a>数据页复制接收/写线程。</p>
</td>
</tr>
<tr id="row_tior_14"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r14_1"><a name="p_tior_r14_1"></a><a name="p_tior_r14_1"></a>14</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r14_2"><a name="p_tior_r14_2"></a><a name="p_tior_r14_2"></a>PageWriter</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r14_3"><a name="p_tior_r14_3"></a><a name="p_tior_r14_3"></a>页压缩写线程。</p>
</td>
</tr>
<tr id="row_tior_15"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_tior_r15_1"><a name="p_tior_r15_1"></a><a name="p_tior_r15_1"></a>15</p>
</td>
<td class="cellrowborder" valign="top" width="27.169999999999998%" headers="mcps1.2.3.1.2 "><p id="p_tior_r15_2"><a name="p_tior_r15_2"></a><a name="p_tior_r15_2"></a>BgWorker</p>
</td>
<td class="cellrowborder" valign="top" width="55.66%" headers="mcps1.2.3.1.3 "><p id="p_tior_r15_3"><a name="p_tior_r15_3"></a><a name="p_tior_r15_3"></a>通用后台工作线程：IO取决于其注册的任务。</p>
</td>
</tr>
</tbody>
</table>
