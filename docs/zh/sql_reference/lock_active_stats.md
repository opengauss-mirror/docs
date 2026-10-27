---
description: 本文介绍 openGauss 锁活动详细信息统计 的相关内容，涵盖 LWLock Event Top 10、Lock Event Top 10 等内容。
keywords: [openGauss, 锁活动详细信息统计, SQL参考, LWLock Event Top 10, Lock Event Top 10]
---

# 锁活动详细信息统计

锁活动详细信息统计当前节点锁活动信息，包含 **LWLock（轻量级锁）** 和 **Lock（常规锁）**。分别按**总等待时间**和**请求次数**排序，展示排名前 10 的锁。数据来源于 WDR 快照中 `snap_global_wait_events` 表的差分计算结果：`type = 'LWLOCK_EVENT'` 对应 LWLock，`type = 'LOCK_EVENT'` 对应 Lock，用于帮助 DBA 快速定位锁竞争热点。

## LWLock Event Top 10

LWLock Event Top 10 统计当前节点轻量级锁（LWLock）的活动信息，分别按总等待时间和请求次数进行排序，展示排名前 10 的 LWLock 锁。该数据来源于 WDR 快照中 `snap_global_wait_events` 表的差分计算结果（`type = 'LWLOCK_EVENT'`）。

LWLock Event Top 10列名称及描述如下表所示。

**表 1**  LWLock Event Top 10报表主要内容

<a name="table_lwlock_event_top10"></a>
<table><thead align="left"><tr id="row_lwl_head"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.3.1"><p id="p_lwl_head_1"><a name="p_lwl_head_1"></a><a name="p_lwl_head_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="75%" id="mcps1.2.3.2"><p id="p_lwl_head_2"><a name="p_lwl_head_2"></a><a name="p_lwl_head_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row_lwl_1"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_1_1"><a name="p_lwl_1_1"></a><a name="p_lwl_1_1"></a>Lock Name</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_1_2"><a name="p_lwl_1_2"></a><a name="p_lwl_1_2"></a>轻量级锁（LWLock）名称。</p>
</td>
</tr>
<tr id="row_lwl_2"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_2_1"><a name="p_lwl_2_1"></a><a name="p_lwl_2_1"></a>Total Requests</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_2_2"><a name="p_lwl_2_2"></a><a name="p_lwl_2_2"></a>总请求次数，为四类获取结果之和：Acquired NoWait + Failed NoWait + Acquired Wait + Failed Wait。</p>
</td>
</tr>
<tr id="row_lwl_3"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_3_1"><a name="p_lwl_3_1"></a><a name="p_lwl_3_1"></a>Acquired NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_3_2"><a name="p_lwl_3_2"></a><a name="p_lwl_3_2"></a>非等待获得锁次数。</p>
</td>
</tr>
<tr id="row_lwl_4"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_4_1"><a name="p_lwl_4_1"></a><a name="p_lwl_4_1"></a>Pct Acq NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_4_2"><a name="p_lwl_4_2"></a><a name="p_lwl_4_2"></a>非等待获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lwl_5"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_5_1"><a name="p_lwl_5_1"></a><a name="p_lwl_5_1"></a>Failed NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_5_2"><a name="p_lwl_5_2"></a><a name="p_lwl_5_2"></a>非等待未获得锁次数（条件获取失败）。</p>
</td>
</tr>
<tr id="row_lwl_6"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_6_1"><a name="p_lwl_6_1"></a><a name="p_lwl_6_1"></a>Pct Fail NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_6_2"><a name="p_lwl_6_2"></a><a name="p_lwl_6_2"></a>非等待未获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lwl_7"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_7_1"><a name="p_lwl_7_1"></a><a name="p_lwl_7_1"></a>Acquired Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_7_2"><a name="p_lwl_7_2"></a><a name="p_lwl_7_2"></a>等待获得锁次数。</p>
</td>
</tr>
<tr id="row_lwl_8"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_8_1"><a name="p_lwl_8_1"></a><a name="p_lwl_8_1"></a>Pct Acq Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_8_2"><a name="p_lwl_8_2"></a><a name="p_lwl_8_2"></a>等待获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lwl_9"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_9_1"><a name="p_lwl_9_1"></a><a name="p_lwl_9_1"></a>Failed Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_9_2"><a name="p_lwl_9_2"></a><a name="p_lwl_9_2"></a>等待未获得锁次数（超时/取消）。</p>
</td>
</tr>
<tr id="row_lwl_10"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_10_1"><a name="p_lwl_10_1"></a><a name="p_lwl_10_1"></a>Pct Fail Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_10_2"><a name="p_lwl_10_2"></a><a name="p_lwl_10_2"></a>等待未获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lwl_11"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_11_1"><a name="p_lwl_11_1"></a><a name="p_lwl_11_1"></a>Total Wait us</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_11_2"><a name="p_lwl_11_2"></a><a name="p_lwl_11_2"></a>总等待时间（微秒），为两次快照之间的差分值。</p>
</td>
</tr>
<tr id="row_lwl_12"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1 "><p id="p_lwl_12_1"><a name="p_lwl_12_1"></a><a name="p_lwl_12_1"></a>Avg Wait us</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.3.2 "><p id="p_lwl_12_2"><a name="p_lwl_12_2"></a><a name="p_lwl_12_2"></a>平均等待时间（微秒），计算公式为 Total Wait us / Acquired Wait。</p>
</td>
</tr>
</tbody>
</table>

## Lock Event Top 10

Lock Event Top 10 统计当前节点常规锁（Lock）的活动信息，分别按**总等待时间**和**请求次数**排序，展示排名前 10 的 Lock 锁。该数据来源于 WDR 快照中 `snap_global_wait_events` 表的差分计算结果（`type = 'LOCK_EVENT'`），用于定位表锁、行锁、事务锁、咨询锁等常规锁竞争热点。

Lock Event Top 10列名称及描述如下表所示。

**表 2**  Lock Event Top 10报表主要内容

<a name="table_lock_event_top10"></a>
<table><thead align="left"><tr id="row_lk_head"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1"><p id="p_lk_head_1"><a name="p_lk_head_1"></a><a name="p_lk_head_1"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="75%" id="mcps1.2.5.2"><p id="p_lk_head_2"><a name="p_lk_head_2"></a><a name="p_lk_head_2"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row_lk_1"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_1_1"><a name="p_lk_1_1"></a><a name="p_lk_1_1"></a>Lock Name</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_1_2"><a name="p_lk_1_2"></a><a name="p_lk_1_2"></a>常规锁名称/类型，如 relation、transactionid、tuple、virtualxid、page、advisory、object 等。</p>
</td>
</tr>
<tr id="row_lk_4"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_4_1"><a name="p_lk_4_1"></a><a name="p_lk_4_1"></a>Total Requests</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_4_2"><a name="p_lk_4_2"></a><a name="p_lk_4_2"></a>总请求次数，为四类获取结果之和：Acquired NoWait + Failed NoWait + Acquired Wait + Failed Wait。</p>
</td>
</tr>
<tr id="row_lk_5"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_5_1"><a name="p_lk_5_1"></a><a name="p_lk_5_1"></a>Acquired NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_5_2"><a name="p_lk_5_2"></a><a name="p_lk_5_2"></a>非等待获得锁次数。</p>
</td>
</tr>
<tr id="row_lk_6"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_6_1"><a name="p_lk_6_1"></a><a name="p_lk_6_1"></a>Pct Acq NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_6_2"><a name="p_lk_6_2"></a><a name="p_lk_6_2"></a>非等待获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lk_7"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_7_1"><a name="p_lk_7_1"></a><a name="p_lk_7_1"></a>Failed NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_7_2"><a name="p_lk_7_2"></a><a name="p_lk_7_2"></a>非等待未获得锁次数（条件获取失败）。</p>
</td>
</tr>
<tr id="row_lk_8"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_8_1"><a name="p_lk_8_1"></a><a name="p_lk_8_1"></a>Pct Fail NoWait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_8_2"><a name="p_lk_8_2"></a><a name="p_lk_8_2"></a>非等待未获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lk_9"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_9_1"><a name="p_lk_9_1"></a><a name="p_lk_9_1"></a>Acquired Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_9_2"><a name="p_lk_9_2"></a><a name="p_lk_9_2"></a>等待获得锁次数。</p>
</td>
</tr>
<tr id="row_lk_10"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_10_1"><a name="p_lk_10_1"></a><a name="p_lk_10_1"></a>Pct Acq Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_10_2"><a name="p_lk_10_2"></a><a name="p_lk_10_2"></a>等待获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lk_11"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_11_1"><a name="p_lk_11_1"></a><a name="p_lk_11_1"></a>Failed Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_11_2"><a name="p_lk_11_2"></a><a name="p_lk_11_2"></a>等待未获得锁次数（超时/取消）。</p>
</td>
</tr>
<tr id="row_lk_12"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_12_1"><a name="p_lk_12_1"></a><a name="p_lk_12_1"></a>Pct Fail Wait</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_12_2"><a name="p_lk_12_2"></a><a name="p_lk_12_2"></a>等待未获得锁次数占总请求次数的百分比。</p>
</td>
</tr>
<tr id="row_lk_13"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_13_1"><a name="p_lk_13_1"></a><a name="p_lk_13_1"></a>Total Wait us</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_13_2"><a name="p_lk_13_2"></a><a name="p_lk_13_2"></a>总等待时间（微秒），为两次快照之间的差分值。</p>
</td>
</tr>
<tr id="row_lk_14"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1 "><p id="p_lk_14_1"><a name="p_lk_14_1"></a><a name="p_lk_14_1"></a>Avg Wait us</p>
</td>
<td class="cellrowborder" valign="top" width="75%" headers="mcps1.2.5.2 "><p id="p_lk_14_2"><a name="p_lk_14_2"></a><a name="p_lk_14_2"></a>平均等待时间（微秒），计算公式为 Total Wait us / Acquired Wait。</p>
</td>
</tr>
</tbody>
</table>
