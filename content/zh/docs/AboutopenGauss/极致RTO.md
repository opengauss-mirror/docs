# 极致RTO

## 可获得性<a name="section57017810"></a>

本特性自openGauss 1.1.0 版本开始引入。

## 特性简介<a name="section43398242"></a>

-   支撑数据库主机重启后快速恢复的场景。
-   支撑主机与同步备机通过日志同步，加速备机回放的场景。

## 客户价值<a name="section55039858"></a>

当业务压力过大时，备机的回放速度跟不上主机的速度。在系统长时间的运行后，备机上会出现日志累积。当主机故障后，数据恢复需要很长时间，数据库不可用，严重影响系统可用性。

开启极致RTO（Recovery Time Object，恢复时间目标），减少了主机故障后数据的恢复时间，提高了可用性。

## 特性描述<a name="section25596675"></a>

极致RTO开关开启后，xlog日志回放建立多级流水线，提高并发度，提升日志回放速度。 采用page多版本的方式支持备机读，回放线程维护每一个page的日志链，读线程根据指定的LSN（wal日志的位置）读取对应版本的page。当查询和回放冲突时，查询超时会被取消，报错信息是"canceling statement due to conflict with recovery"。当出现这种类型的报错时，业务端可根据错误码进行重试。 造成查询和回放冲突的日志类型主要包含如下几种：

- 删除文件 
  -   触发条件：删除文件、reindex、truncate表等操作。 
  -   处理方案：等待max_standby_streaming_delay时间后，发送cancel消息取消冲突的查询。

- truncate 
    - 触发条件： delete大量记录之后，做vacuum回收，文件末尾的无用数据页truncate。 
    - 处理方案： 立即 cancel 所有冲突的查询。

- drop database 
    - 触发条件：执行删除数据库操作。 
    - 处理方案：等待max_standby_streaming_delay时间后，发送cancel消息取消冲突的查询。
- drop tablespace： 
    - 触发条件：删除tablespace 
   - 处理方案：等待max_standby_streaming_delay时间后，发送cancel消息取消冲突的查询。
- vacuum清理（仅在参数enable_exrto_standby_read_opt开启下，会产生冲突）。 
    - 触发条件：vacuum操作。 
    - 处理方案：等待max_standby_streaming_delay时间后，发送cancel消息取消冲突的查询。

## 特性增强<a name="section29043486"></a>

无。

## 特性约束<a name="section27741012910"></a>

极致RTO只关注同步备机的RTO是否满足需求。极致RTO去掉了自带的流控，统一使用recovery_time_target参数来做流控控制。


本特性支持备机读，由于增加了对数据页面历史版本的读取，备机上的查询性能会低于主机上的查询性能，低于并行回放备机读的查询性能，但是查询阻塞回放的情况有所缓解。 

不支持段页式表，备机读不支持列存表。 


当节点的IO和CPU使用过高时（建议不超过70%），备机读性能会有明显下降。 

极致RTO备机读在以下5种情况下会取消查询。

1.当查询时间超出了参数standby_max_query_time。 

2.触发了备机读文件的强制回收。 

3.查询和truncate类型的日志回放有冲突。 

4.当查询和回放有锁相关等冲突时，和并行回放备机读相同，取消查询由参数max_standby_streaming_delay控制。

 5.在开启参数enable_exrto_standby_read_opt的情况下，回放vacuum相关的清理日志时会发生冲突，和并行回放备机读相同，取消查询由参数max_standby_streaming_delay控制。

## 依赖关系<a name="section57771982"></a>

无。

