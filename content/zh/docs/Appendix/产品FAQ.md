# 产品FAQ

### **Q1：“极致RTO”、“并行恢复”与“备机可读”的关系是什么？**

**回答：**

极致RTO、并行恢复、备机可读配置分别如下：

-   极致RTO配置：recovery\_parse\_workers表明并行恢复时解析Xlog线程的个数。recovery\_parallelism表明并行恢复线程的实际个数。当recovery\_parse\_workers大于1时是极致RTO恢复。当recovery\_parse\_workers和recovery\_parallelism同时配置大于1时，才会实现并行恢复。
-   并行恢复配置：recovery\_max\_workers指定并行恢复的最大线程个数。recovery\_parallelism指定并行恢复线程的实际个数。当recovery\_max\_workers大于1时是并行恢复。当recovery\_max\_workers和recovery\_parallelism同时配置大于1时，才会实现并行恢复。
-   备机可读配置：hot\_standby表明热备机在恢复时支持读操作。如果hot\_standby为true时，备机可读。

并行恢复是文件级别的并行REDO，极致RTO是数据块级别的并行恢复。并行恢复和备机可读是兼容的，极致RTO和备机可读是不兼容的。 配置上面参数时，代码中有检查（CheckExtremeRtoGUCConflicts），如果同时配置了recovery\_parse\_workers大于1和hot\_standby会报错。

### **Q2：极致RTO场景下，备机不能读，那该如何选择主备切换的候选主节点？**

**回答：**

备机只有极致RTO情况下不能读，在串行恢复、并行恢复情况下，备机都是可读的。如果使用极致RTO，即在极致RTO情况下，当前只能配置为同步方式，然后随机选择一个当做主机即可（配置为同步方式后所有节点数据是一样的）。

### **Q3：模板数据库的作用是什么？模板数据库中包含哪些表？**

**回答：**

模板数据库提供了一个快速创建数据库的手段，创建数据库时指定**TEMPLATE**参数，即可通过复制模板数据库创建数据库。

模板数据库中没有用户表，可通过系统表PG\_DATABASE查看模板数据库属性。

### **Q4：openGauss支持物理复制时，备机是按照Page并行回放日志吗？**

**回答：**

openGauss有两种并行恢复模式，一种是以文件为粒度，一种是以页面为粒度。

### **Q5：“极致RTO按需回放”和“极致RTO”的关系是什么？**

**回答：**

-   使用场景不同。极致RTO支持资源池化和非资源池化部署下使用，极致RTO按需回放仅支持资源池化部署下使用。在资源池化下，极致RTO和极致RTO按需回放功能相同，都用于主机故障重启或备机failover。
-   极致RTO按需回放来源于极致RTO。极致RTO按需回放完成回放信息构建后，立即对外提供服务，降低RTO，之后再对外服务时仍在后台进行回放。极致RTO需要完成全部日志回放后，才能够对外提供服务。
-   极致RTO按需回放继承极致RTO现有约束，并新增[约束](../AboutopenGauss/极致RTO按需回放.md)。
-   由于资源池化下主备机共享一份存储，备机不再需要实时接收主机的XLOG日志并完成回放，因此资源池化下原生支持备机可读，与hot_standby配置无关。

