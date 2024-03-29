# MOT恢复时间目标（RTO）和冷启动时间<a name="ZH-CN_TOPIC_0289900802"></a>

-   高可用RTO

    MOT完全集成到openGauss中，包括支持主备部署的高可用场景。WAL重做日志的复制机制将把复制更改到数据库备节点并使用备节点进行重放。

    如果故障转移事件发生，无论是由于计划外的主节点故障还是由于计划内的维护事件，备节点都会迅速活跃。恢复和重放WAL重做日志以及启用连接所需的时间也称为恢复时间目标（RTO）。

    **openGauss（包括MOT）的RTO小于10秒。**

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >灾难发生后必须恢复业务流程，避免导致连续性中断相关的不可接受的后果，而RTO表示的就是这段流程的持续时间和业务级别。换句话说，RTO就是在回答这个问题：在通知业务流程中断后，需要多长时间才能恢复？

    另外，从[MOT高吞吐量](MOT高吞吐量.md)的MOT中可以看出，在Arm/鲲鹏架构下，主从高可用场景复制开销仅为7%，在x86架构下仅为2%，而基于磁盘的表复制开销为2%。Arm/鲲鹏机型为20%，x86机型为15%。


-   冷启动恢复时间

    冷启动恢复时间是指系统从停止模式到能够完全运行所需的时间。在内存数据库中，这包括将所有数据和索引加载到内存中的时间，因此它取决于数据大小、硬件带宽和软件算法能否高效地处理这些数据。

    MOT测试使用了x86服务器和SSD盘来演示100GB数据在65秒内加载的能力。MOT的索引非持久化，因此它们是在冷启动时创建的。实际加载的数据加索引大小约多50%。所以MOT数据加索引的冷启动时间可以折算成60秒内138GB。

    冷启动过程和从磁盘加载数据到MOT所需时间如下图所示。

    **图 1**  冷启动时间性能基准<a name="zh-cn_topic_0283136642_zh-cn_topic_0280525098_fig46666290"></a>  
    ![](figures/冷启动时间性能基准.png "冷启动时间性能基准")

    -   数据库大小：加载整个数据库（每数据库GB）的总时间由蓝色线条和左侧的Y轴 **时间（秒）** 表示。
    -   吞吐量：数据库每秒GB吞吐量由橙色线和右侧的Y轴 **吞吐量GB/秒** 表示。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >测试过程中表现的性能与SSD硬件的带宽非常接近。因此，可以在不同的平台上实现更高（或更低）的性能。


