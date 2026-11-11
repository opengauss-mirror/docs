---
description: "本文介绍 openGauss Key Activity - Buffer 的相关内容与操作方法。"
keywords: ["openGauss, Key Activity - Buffer", "SQL参考"]
---

# 关键活动（Key Activity）

关键活动展示数据库运行过程中的关键活动统计信息，包括Buffer（缓冲）、Transaction（事务）、Executor（执行器）、Lock（锁）、SMGR（存储管理）、WAL（重做日志）六大类活动，帮助DBA快速定位关键活动热点。

## Buffer（缓冲）

Buffer类活动展示逻辑读、物理读、缓冲区分配等缓冲区相关活动的统计信息。列名称及描述如下表所示。

**表 1**  Buffer类活动主要内容

<a name="table_buffer"></a>
<table><thead align="left"><tr id="row_buffer_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.buffer.1.1"><p id="p_buffer_1"><a name="p_buffer_1"></a><a name="p_buffer_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.buffer.1.2"><p id="p_buffer_2"><a name="p_buffer_2"></a><a name="p_buffer_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_buffer_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.buffer.1.1 "><p id="p_b1_1"><a name="p_b1_1"></a><a name="p_b1_1"></a>Activity Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.buffer.1.2 "><p id="p_b1_2"><a name="p_b1_2"></a><a name="p_b1_2"></a>活动名称，包含Logical Read（逻辑读）、Physical Read（物理读）、Buffer Allocation（缓冲区分配）、Checkpoint Write Buffer（检查点写缓冲区）、Backend Write Buffer（后端写缓冲区）、Backend Direct Write Buffer（后端直接写缓冲区）。</p>
</td>
</tr>
<tr id="row_buffer_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.buffer.1.1 "><p id="p_b2_1"><a name="p_b2_1"></a><a name="p_b2_1"></a>Total Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.buffer.1.2 "><p id="p_b2_2"><a name="p_b2_2"></a><a name="p_b2_2"></a>总次数。</p>
</td>
</tr>
<tr id="row_buffer_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.buffer.1.1 "><p id="p_b3_1"><a name="p_b3_1"></a><a name="p_b3_1"></a>Per Second</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.buffer.1.2 "><p id="p_b3_2"><a name="p_b3_2"></a><a name="p_b3_2"></a>每秒次数。</p>
</td>
</tr>
<tr id="row_buffer_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.buffer.1.1 "><p id="p_b4_1"><a name="p_b4_1"></a><a name="p_b4_1"></a>Per Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.buffer.1.2 "><p id="p_b4_2"><a name="p_b4_2"></a><a name="p_b4_2"></a>每事务次数。</p>
</td>
</tr>
</tbody>
</table>

## Transaction（事务）

Transaction类活动展示事务提交、事务回滚、死锁等事务相关活动的统计信息。列名称及描述如下表所示。

**表 2**  Transaction类活动主要内容

<a name="table_transaction"></a>
<table><thead align="left"><tr id="row_trans_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.trans.1.1"><p id="p_trans_1"><a name="p_trans_1"></a><a name="p_trans_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.trans.1.2"><p id="p_trans_2"><a name="p_trans_2"></a><a name="p_trans_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_trans_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.trans.1.1 "><p id="p_t1_1"><a name="p_t1_1"></a><a name="p_t1_1"></a>Activity Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.trans.1.2 "><p id="p_t1_2"><a name="p_t1_2"></a><a name="p_t1_2"></a>活动名称，包含Transaction Commit（事务提交）、Transaction Rollback（事务回滚）、Deadlock Count（死锁次数）。</p>
</td>
</tr>
<tr id="row_trans_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.trans.1.1 "><p id="p_t2_1"><a name="p_t2_1"></a><a name="p_t2_1"></a>Total Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.trans.1.2 "><p id="p_t2_2"><a name="p_t2_2"></a><a name="p_t2_2"></a>总次数。</p>
</td>
</tr>
<tr id="row_trans_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.trans.1.1 "><p id="p_t3_1"><a name="p_t3_1"></a><a name="p_t3_1"></a>Per Second</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.trans.1.2 "><p id="p_t3_2"><a name="p_t3_2"></a><a name="p_t3_2"></a>每秒次数。</p>
</td>
</tr>
<tr id="row_trans_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.trans.1.1 "><p id="p_t4_1"><a name="p_t4_1"></a><a name="p_t4_1"></a>Per Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.trans.1.2 "><p id="p_t4_2"><a name="p_t4_2"></a><a name="p_t4_2"></a>每事务次数。</p>
</td>
</tr>
</tbody>
</table>

## Executor（执行器）

Executor类活动展示SQL执行过程中返回行数、增删改行数、临时文件等执行相关活动的统计信息。列名称及描述如下表所示。

**表 3**  Executor类活动主要内容

<a name="table_executor"></a>
<table><thead align="left"><tr id="row_exec_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.exec.1.1"><p id="p_exec_1"><a name="p_exec_1"></a><a name="p_exec_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.exec.1.2"><p id="p_exec_2"><a name="p_exec_2"></a><a name="p_exec_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_exec_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.exec.1.1 "><p id="p_e1_1"><a name="p_e1_1"></a><a name="p_e1_1"></a>Activity Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.exec.1.2 "><p id="p_e1_2"><a name="p_e1_2"></a><a name="p_e1_2"></a>活动名称，包含Returned Rows（返回行数）、Fetched Rows（获取行数）、Inserted Rows（插入行数）、Updated Rows（更新行数）、Deleted Rows（删除行数）、Temporary File Count（临时文件数量）、Temp File Size（临时文件大小）。</p>
</td>
</tr>
<tr id="row_exec_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.exec.1.1 "><p id="p_e2_1"><a name="p_e2_1"></a><a name="p_e2_1"></a>Total Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.exec.1.2 "><p id="p_e2_2"><a name="p_e2_2"></a><a name="p_e2_2"></a>总次数。</p>
</td>
</tr>
<tr id="row_exec_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.exec.1.1 "><p id="p_e3_1"><a name="p_e3_1"></a><a name="p_e3_1"></a>Per Second</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.exec.1.2 "><p id="p_e3_2"><a name="p_e3_2"></a><a name="p_e3_2"></a>每秒次数。</p>
</td>
</tr>
<tr id="row_exec_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.exec.1.1 "><p id="p_e4_1"><a name="p_e4_1"></a><a name="p_e4_1"></a>Per Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.exec.1.2 "><p id="p_e4_2"><a name="p_e4_2"></a><a name="p_e4_2"></a>每事务次数。</p>
</td>
</tr>
<tr id="row_exec_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.exec.1.1 "><p id="p_e5_1"><a name="p_e5_1"></a><a name="p_e5_1"></a>Total Size MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.exec.1.2 "><p id="p_e5_2"><a name="p_e5_2"></a><a name="p_e5_2"></a>总大小（MB）。</p>
</td>
</tr>
</tbody>
</table>

## Lock（锁）

Lock类活动展示轻量级锁等待、重量级锁等待、锁等待失败等锁相关活动的统计信息。列名称及描述如下表所示。

**表 4**  Lock类活动主要内容

<a name="table_lock"></a>
<table><thead align="left"><tr id="row_lock_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.lock.1.1"><p id="p_lock_1"><a name="p_lock_1"></a><a name="p_lock_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.lock.1.2"><p id="p_lock_2"><a name="p_lock_2"></a><a name="p_lock_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_lock_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l1_1"><a name="p_l1_1"></a><a name="p_l1_1"></a>Activity Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l1_2"><a name="p_l1_2"></a><a name="p_l1_2"></a>活动名称，包含Heavyweight Lock Wait（重量级锁等待）、Lightweight Lock Wait（轻量级锁等待）、Lock Wait Failed（锁等待失败）。</p>
</td>
</tr>
<tr id="row_lock_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l2_1"><a name="p_l2_1"></a><a name="p_l2_1"></a>Total Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l2_2"><a name="p_l2_2"></a><a name="p_l2_2"></a>总次数。</p>
</td>
</tr>
<tr id="row_lock_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l3_1"><a name="p_l3_1"></a><a name="p_l3_1"></a>Per Second</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l3_2"><a name="p_l3_2"></a><a name="p_l3_2"></a>每秒次数。</p>
</td>
</tr>
<tr id="row_lock_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l4_1"><a name="p_l4_1"></a><a name="p_l4_1"></a>Per Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l4_2"><a name="p_l4_2"></a><a name="p_l4_2"></a>每事务次数。</p>
</td>
</tr>
<tr id="row_lock_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l5_1"><a name="p_l5_1"></a><a name="p_l5_1"></a>Total Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l5_2"><a name="p_l5_2"></a><a name="p_l5_2"></a>总等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_lock_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l6_1"><a name="p_l6_1"></a><a name="p_l6_1"></a>Per Second Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l6_2"><a name="p_l6_2"></a><a name="p_l6_2"></a>每秒等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_lock_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.lock.1.1 "><p id="p_l7_1"><a name="p_l7_1"></a><a name="p_l7_1"></a>Per Transaction Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.lock.1.2 "><p id="p_l7_2"><a name="p_l7_2"></a><a name="p_l7_2"></a>每事务等待时间（毫秒）。</p>
</td>
</tr>
</tbody>
</table>

## SMGR（存储管理）

SMGR类活动展示数据文件和数据块的读写次数、读写耗时等存储相关活动的统计信息。列名称及描述如下表所示。

**表 5**  SMGR类活动主要内容

<a name="table_smgr"></a>
<table><thead align="left"><tr id="row_smgr_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.smgr.1.1"><p id="p_smgr_1"><a name="p_smgr_1"></a><a name="p_smgr_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.smgr.1.2"><p id="p_smgr_2"><a name="p_smgr_2"></a><a name="p_smgr_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_smgr_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s1_1"><a name="p_s1_1"></a><a name="p_s1_1"></a>Activity Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s1_2"><a name="p_s1_2"></a><a name="p_s1_2"></a>活动名称，包含Data File Read Count（数据文件读次数）、Data File Write Count（数据文件写次数）、Data Block Read Count（数据块读次数）、Data Block Write Count（数据块写次数）、Data File Read Elapse（数据文件读耗时）、Physical Write Elapse（物理写耗时）。</p>
</td>
</tr>
<tr id="row_smgr_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s2_1"><a name="p_s2_1"></a><a name="p_s2_1"></a>Total Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s2_2"><a name="p_s2_2"></a><a name="p_s2_2"></a>总次数。</p>
</td>
</tr>
<tr id="row_smgr_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s3_1"><a name="p_s3_1"></a><a name="p_s3_1"></a>Per Second</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s3_2"><a name="p_s3_2"></a><a name="p_s3_2"></a>每秒次数。</p>
</td>
</tr>
<tr id="row_smgr_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s4_1"><a name="p_s4_1"></a><a name="p_s4_1"></a>Per Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s4_2"><a name="p_s4_2"></a><a name="p_s4_2"></a>每事务次数。</p>
</td>
</tr>
<tr id="row_smgr_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s5_1"><a name="p_s5_1"></a><a name="p_s5_1"></a>Total Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s5_2"><a name="p_s5_2"></a><a name="p_s5_2"></a>总等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_smgr_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s6_1"><a name="p_s6_1"></a><a name="p_s6_1"></a>Per Second Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s6_2"><a name="p_s6_2"></a><a name="p_s6_2"></a>每秒等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_smgr_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.smgr.1.1 "><p id="p_s7_1"><a name="p_s7_1"></a><a name="p_s7_1"></a>Per Transaction Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.smgr.1.2 "><p id="p_s7_2"><a name="p_s7_2"></a><a name="p_s7_2"></a>每事务等待时间（毫秒）。</p>
</td>
</tr>
</tbody>
</table>

## WAL（重做日志）

WAL类活动展示WAL写入次数、写入数据量、写入耗时及检查点等日志相关活动的统计信息。列名称及描述如下表所示。

**表 6**  WAL类活动主要内容

<a name="table_wal"></a>
<table><thead align="left"><tr id="row_wal_head"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.wal.1.1"><p id="p_wal_1"><a name="p_wal_1"></a><a name="p_wal_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.wal.1.2"><p id="p_wal_2"><a name="p_wal_2"></a><a name="p_wal_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row_wal_1"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w1_1"><a name="p_w1_1"></a><a name="p_w1_1"></a>Activity Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w1_2"><a name="p_w1_2"></a><a name="p_w1_2"></a>活动名称，包含WAL Write Count（WAL写次数）、WAL Write Data Size（WAL写入数据量）、WAL Write Elapse（WAL写耗时）、Checkpoint Count（检查点次数）、Checkpoint Write Elapse（检查点写耗时）、Checkpoint Sync Elapse（检查点同步耗时）。</p>
</td>
</tr>
<tr id="row_wal_2"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w2_1"><a name="p_w2_1"></a><a name="p_w2_1"></a>Total Count</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w2_2"><a name="p_w2_2"></a><a name="p_w2_2"></a>总次数。</p>
</td>
</tr>
<tr id="row_wal_3"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w3_1"><a name="p_w3_1"></a><a name="p_w3_1"></a>Per Second</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w3_2"><a name="p_w3_2"></a><a name="p_w3_2"></a>每秒次数。</p>
</td>
</tr>
<tr id="row_wal_4"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w4_1"><a name="p_w4_1"></a><a name="p_w4_1"></a>Per Transaction</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w4_2"><a name="p_w4_2"></a><a name="p_w4_2"></a>每事务次数。</p>
</td>
</tr>
<tr id="row_wal_5"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w5_1"><a name="p_w5_1"></a><a name="p_w5_1"></a>Total Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w5_2"><a name="p_w5_2"></a><a name="p_w5_2"></a>总等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_wal_6"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w6_1"><a name="p_w6_1"></a><a name="p_w6_1"></a>Per Second Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w6_2"><a name="p_w6_2"></a><a name="p_w6_2"></a>每秒等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_wal_7"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w7_1"><a name="p_w7_1"></a><a name="p_w7_1"></a>Per Transaction Wait ms</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w7_2"><a name="p_w7_2"></a><a name="p_w7_2"></a>每事务等待时间（毫秒）。</p>
</td>
</tr>
<tr id="row_wal_8"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.wal.1.1 "><p id="p_w8_1"><a name="p_w8_1"></a><a name="p_w8_1"></a>Total Size MB</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.wal.1.2 "><p id="p_w8_2"><a name="p_w8_2"></a><a name="p_w8_2"></a>总大小（MB）。</p>
</td>
</tr>
</tbody>
</table>

## 备注

>[!NOTE]说明
>
> 耗时类指标的采集依赖 `track_io_timing` 参数。该参数未开启时，SMGR、WAL 等卡片中的耗时指标（如 Data File Read Elapse、Physical Write Elapse、WAL Write Elapse、Checkpoint Write Elapse、Checkpoint Sync Elapse）值为 0，需开启该参数后重新生成报表才能获取真实耗时。
>
> 报表中显示为 — 的指标，表示当前指标不存在对应列数据（该活动类型不包含该项统计）。
