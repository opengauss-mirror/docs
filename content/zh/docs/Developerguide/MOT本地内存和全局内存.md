# MOT本地内存和全局内存

SILO管理本地内存和全局内存，如图1所示。

-   全局内存是所有核共享的长期内存，主要用于存储所有的表数据和索引。
-   本地内存是短期内存，主要由会话使用，用于处理事务及将数据更改存储到事务内存中，直到提交阶段。

当事务需要更改时，SILO将该事务的所有数据从全局内存复制到本地内存。使用OCC方法，全局内存中放置的是最小的锁，因此争用时间极短。事务更改完成后，该数据从本地内存回推到全局内存中。

本地内存与SILO增强并发控制的基本交互式事务流如下所示：

**图 1**  私有（本地）内存（每个事务）和全局内存（所有核的所有事务）<a name="fig18716015"></a>
![](figures/Private(local)memory(per-transaction)and-global-memory(all-transactions-for-all-cores).png "私有（本地）内存（每个事务）和全局内存（所有核的所有事务）")

具体请参见_Industrial-Strength OLTP Using Main Memory and Many-cores_<sup>\[</sup>[对比：磁盘与MOT](对比-磁盘与MOT.md)<sup>\]</sup>。
