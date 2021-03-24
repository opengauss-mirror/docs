# FAQ

### Q1：“极致RTO”、“并行恢复”与“备机可读”的关系？

###### 回答：

- 极致RTO配置
  recovery_parse_workers 并行恢复时解析XLOG线程的个数
  recovery_parallelism 并行恢复线程的实际个数
  recovery_parse_workers大于1时是极致RTO恢复，同时需要配置recovery_parallelism大于1，才会实际并行恢复。
- 并行恢复配置
  recovery_max_workers 并行恢复的最大线程个数
  recovery_parallelism 并行恢复线程的实际个数
  recovery_max_workers大于1时是并行恢复，同时需要配置recovery_parallelism大于1，才会实际并行恢复。
- 备机可读配置
  hot_standby 备机热备，在恢复时支持读操作。
  hot_standby为true时是备机可读。

并行恢复是文件级别的并行REDO,极致RTO是数据块级别的并行恢复。并行恢复和备机可读是兼容的，极致RTO和备机可读是不兼容的。
配置参数时，代码中有检查（CheckExtremeRtoGUCConflicts），如果同时配置了recovery_parse_workers大于1和hot_standby会报错。

### Q2：极致RTO场景下，备机不能读，那该如何选择主备切换的候选主节点？

###### 回答：

备机只有极致RTO情况下不能读，在串行恢复、并行恢复情况下，备机都是可读的。如果使用极致RTO，即在极致RTO情况下，当前只能配置为同步方式，然后随机选择一个当做主机即可。（配置为同步方式后所有节点数据是一样的）