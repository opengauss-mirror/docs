# 表级别并行恢复优化

## 可获得性

本特性自openGauss 5.1.0版本开始引入。特性同时合入3.0.5。

## 特性简介

允许用户在配置表级别并行恢复时,通过更多的参数控制回放行为,以达到增加恢复效率的目的。

## 客户价值

通过wal恢复效率提升可减小备库wal日志积压,减小磁盘存储压力。在switchover或者failover过程中,也可加速备库存量wal日志的回放,从而使备库更早的提升为主库以提供数据库写入服务。

## 特性描述

无

## 特性增强

在之前的openGauss版本中,支持表级别和page级别的并行恢复,当前优化只对表级别并行恢复生效。
之前的表级别并行恢复实现中,wal记录读取线程和wal记录redo线程之间,只能以单个wal记录为单位传递数据,这样的传递方式会产生较大的性能损耗。

当前优化允许用户通过parallel_recovery_batch参数控制线程间wal记录传递的批次(默认1000)。用户可以配置parallel_recovery_timeout参数(默认300ms),如果parallel_recovery_timeout时间内wal读取线程仍然没有积攒够parallel_recovery_batch数量的wal记录，那么直接传递当前积攒的wal记录到redo线程。

另外新增enable_batch_dispatch参数用以控制本优化开关(默认关闭);新增enable_time_report参数用于开关回放过程中的统计信息收集(默认关闭)。


## 特性约束

无

## 依赖关系

无