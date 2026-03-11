# 数据库系统参数调优<a name="ZH-CN_TOPIC_0289900754"></a>

为了保证数据库尽可能高性能地运行，建议依据硬件资源情况和业务实际进行数据库系统参数——GUC参数的设置。这里主要介绍GUC参数对性能的影响，关于参数的详细设置方法请参见"数据库管理指南"。

## 数据库内存参数调优<a name="ZH-CN_TOPIC_0289900947"></a>

数据库的复杂查询语句性能非常强的依赖于数据库系统内存的配置参数。数据库系统内存的配置参数主要包括逻辑内存管理的控制参数和执行算子是否下盘的参数。

### 逻辑内存管理参数<a name="zh-cn_topic_0283136881_zh-cn_topic_0237121495_zh-cn_topic_0073253552_zh-cn_topic_0062863366_section6641095815423"></a>

逻辑内存管理参数为max\_process\_memory，主要功能是控制数据库节点上可用内存的最大峰值，该参数的数值设置公式参考[max\_process\_memory](../database_reference/memory.md#zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_sbebcee7acf2042dc8824982f22a2b4a8)。

执行作业最终可用的内存为：

max\_process\_memory – shared memory \( 包括shared\_buffers \) – cstore\_buffers

所以影响执行作业可用内存参数的主要两个参数为shared\_buffers及cstore\_buffers。

逻辑内存管理有专门的视图查询数据库节点中各大块内存区域已使用内存及峰值信息。可连接到单个数据库节点，通过“pg\_total\_memory\_detail”查询该节点上内存区域信息；

参数work\_mem依据查询特点和并发来确定，一旦work\_mem限定的物理内存不够，算子运算数据将写入临时表空间，带来5-10倍的性能下降，查询响应时间从秒级下降到分钟级。

- 对于串行无并发的复杂查询场景，平均每个查询有5-10关联操作，建议work\_mem=50%内存/10。
- 对于串行无并发的简单查询场景，平均每个查询有2-5个关联操作，建议work\_mem=50%内存/5。
- 对于并发场景，建议work\_mem=串行下的work\_mem/物理并发数。

### 执行算子是否下盘的参数<a name="zh-cn_topic_0283136881_zh-cn_topic_0237121495_zh-cn_topic_0073253552_zh-cn_topic_0062863366_section14594953151011"></a>

参数work\_mem可以判断执行作业可下盘算子是否已使用内存量触发下盘点。当前可下盘算子有六类（向量化及非向量化共10种）：Hash\(VecHashJoin\)，Agg\(VecAgg\)，Sort\(VecSort\)，Material\(VecMaterial\)，SetOp\(VecSetOp\)，WindowAgg\(VecWindowAgg\)。该参数设置通常是一个权衡，即要保证并发的吞吐量，又要保证单查询作业的性能，故需要根据实际执行情况（结合Explain Performance输出）进行调优。

## 数据库I/O参数调优<a name="ZH-CN_TOPIC_0000001149231237"></a>

### I/O相关参数<a name="section181599115402"></a>

- pagewriter\_sleep：增量checkpoint模式，控制后端写进程pagewriter刷页频率，当脏页占据shared\_buffers的比例达到dirty\_page\_percent\_max时，每批脏页数量以设定的max\_io\_capacity计算出的值刷页。pagewriter线程刷页用于推进recovery点，设置时间较长时，会导致recovery点推进慢，宕机启动时间长和xlog日志堆积问题。

    为降低RTO，减少日志膨胀，需要将pagewriter\_sleep适当调小，加快页面刷盘，推进recovery点，促进日志回收。

- bgwriter\_delay：增量checkpoint模式下，控制后端写进程bgwriter刷页频率，当前空闲缓冲页面个数占据shared\_buffers的比例低于candidate\_buf\_percent\_target时，每批脏页数量以设定的max\_io\_capacity计算出的值刷页。bgwriter线程将可以淘汰的页面刷盘，加速业务执行时，页面占用槽位的速度，时间过长会影响性能。

    为了提升业务性能时，适当调小bgwriter\_delay的时间。

- max\_io\_capacity：设置后端写进程（pagewriter线程和bgwriter线程）批量刷页每秒的IO上限，需要根据具体业务场景和机器磁盘IO能力进行设置。要求RTO很短时间或者数据量比共享内存大多倍的情况，业务访问数据量又是随机访问时，该值不宜过小。该参数设置较小会减小后端写进程刷页个数，如果业务触发页面淘汰多时，该值设置小会影响业务。

    max\_io\_capacity需依据随机写IO能力最优设置。
