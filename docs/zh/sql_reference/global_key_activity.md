---
description: 本文介绍 openGauss GLOBAL\_KEY\_ACTIVITY 的相关内容与操作方法。
keywords: [openGauss, GLOBAL\_KEY\_ACTIVITY, SQL参考]
---

# GLOBAL\_KEY\_ACTIVITY

提供openGauss中所有正常节点下的关键活动统计信息。

**表 1**  GLOBAL\_KEY\_ACTIVITY字段

<a name="table_global_key_activity"></a>
<table><thead align="left"><tr id="row_global_key_activity_head"><th class="cellrowborder" valign="top" width="16.37836216378362%" id="mcps1.2.4.1.1"><p id="p_global_key_activity_1"><a name="p_global_key_activity_1"></a><a name="p_global_key_activity_1"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.968203179682032%" id="mcps1.2.4.1.2"><p id="p_global_key_activity_2"><a name="p_global_key_activity_2"></a><a name="p_global_key_activity_2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.65343465653434%" id="mcps1.2.4.1.3"><p id="p_global_key_activity_3"><a name="p_global_key_activity_3"></a><a name="p_global_key_activity_3"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_global_key_activity_1"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gka_1_1"><a name="p_gka_1_1"></a><a name="p_gka_1_1"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gka_1_2"><a name="p_gka_1_2"></a><a name="p_gka_1_2"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gka_1_3"><a name="p_gka_1_3"></a><a name="p_gka_1_3"></a>节点名称。</p>
</td>
</tr>
<tr id="row_global_key_activity_2"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gka_2_1"><a name="p_gka_2_1"></a><a name="p_gka_2_1"></a>activity_type</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gka_2_2"><a name="p_gka_2_2"></a><a name="p_gka_2_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gka_2_3"><a name="p_gka_2_3"></a><a name="p_gka_2_3"></a>关键活动类型。</p>
</td>
</tr>
<tr id="row_global_key_activity_3"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gka_3_1"><a name="p_gka_3_1"></a><a name="p_gka_3_1"></a>activity_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gka_3_2"><a name="p_gka_3_2"></a><a name="p_gka_3_2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gka_3_3"><a name="p_gka_3_3"></a><a name="p_gka_3_3"></a>关键活动名称。</p>
</td>
</tr>
<tr id="row_global_key_activity_4"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gka_4_1"><a name="p_gka_4_1"></a><a name="p_gka_4_1"></a>total_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gka_4_2"><a name="p_gka_4_2"></a><a name="p_gka_4_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gka_4_3"><a name="p_gka_4_3"></a><a name="p_gka_4_3"></a>关键活动发生的总次数。</p>
</td>
</tr>
<tr id="row_global_key_activity_5"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gka_5_1"><a name="p_gka_5_1"></a><a name="p_gka_5_1"></a>total_wait_us</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gka_5_2"><a name="p_gka_5_2"></a><a name="p_gka_5_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gka_5_3"><a name="p_gka_5_3"></a><a name="p_gka_5_3"></a>关键活动总等待时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row_global_key_activity_6"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="p_gka_6_1"><a name="p_gka_6_1"></a><a name="p_gka_6_1"></a>total_size_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="17.968203179682032%" headers="mcps1.2.4.1.2 "><p id="p_gka_6_2"><a name="p_gka_6_2"></a><a name="p_gka_6_2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.65343465653434%" headers="mcps1.2.4.1.3 "><p id="p_gka_6_3"><a name="p_gka_6_3"></a><a name="p_gka_6_3"></a>关键活动处理的总数据量（单位：字节）。</p>
</td>
</tr>
</tbody>
</table>

当前支持以下6大类关键活动。

**表 2**  关键活动类型及名称

<a name="table_global_key_activity_type"></a>
<table><thead align="left"><tr id="row_global_key_activity_type_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p_gka_type_1"><a name="p_gka_type_1"></a><a name="p_gka_type_1"></a>activity_type</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p_gka_type_2"><a name="p_gka_type_2"></a><a name="p_gka_type_2"></a>activity_name</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_gka_type_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_gkat_1_1"><a name="p_gkat_1_1"></a><a name="p_gkat_1_1"></a>Buffer</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p_gkat_1_2"><a name="p_gkat_1_2"></a><a name="p_gkat_1_2"></a>Logical Read、Physical Read、Buffer Allocation、Checkpoint Write Buffer、Backend Write Buffer、Backend Direct Write Buffer。</p>
</td>
</tr>
<tr id="row_gka_type_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_gkat_2_1"><a name="p_gkat_2_1"></a><a name="p_gkat_2_1"></a>Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p_gkat_2_2"><a name="p_gkat_2_2"></a><a name="p_gkat_2_2"></a>Transaction Commit、Transaction Rollback、Deadlock Count。</p>
</td>
</tr>
<tr id="row_gka_type_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_gkat_3_1"><a name="p_gkat_3_1"></a><a name="p_gkat_3_1"></a>Lock</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p_gkat_3_2"><a name="p_gkat_3_2"></a><a name="p_gkat_3_2"></a>Heavyweight Lock Wait、Lightweight Lock Wait、Lock Wait Failed。</p>
</td>
</tr>
<tr id="row_gka_type_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_gkat_4_1"><a name="p_gkat_4_1"></a><a name="p_gkat_4_1"></a>WAL</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p_gkat_4_2"><a name="p_gkat_4_2"></a><a name="p_gkat_4_2"></a>WAL Write Count、WAL Write Data Size、WAL Write Elapse、Checkpoint Count、Checkpoint Write Elapse、Checkpoint Sync Elapse。</p>
</td>
</tr>
<tr id="row_gka_type_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_gkat_5_1"><a name="p_gkat_5_1"></a><a name="p_gkat_5_1"></a>SMGR</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p_gkat_5_2"><a name="p_gkat_5_2"></a><a name="p_gkat_5_2"></a>Data File Read Count、Data File Write Count、Data Block Read Count、Data Block Write Count、Data File Read Elapse、Physical Write Elapse。</p>
</td>
</tr>
<tr id="row_gka_type_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p_gkat_6_1"><a name="p_gkat_6_1"></a><a name="p_gkat_6_1"></a>Executor</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p_gkat_6_2"><a name="p_gkat_6_2"></a><a name="p_gkat_6_2"></a>Returned Rows、Fetched Rows、Inserted Rows、Updated Rows、Deleted Rows、Temporary File Count、Temp File Size。</p>
</td>
</tr>
</tbody>
</table>
