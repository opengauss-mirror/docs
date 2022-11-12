# MOT配置<a name="ZH-CN_TOPIC_0280525130"></a>

预置MOT用于创建工作MOT。为了获得最佳效果，建议根据应用程序的特定要求和偏好自定义MOT配置（在mot.conf文件中定义）。

该文件在服务器启动时只读。如果在系统运行中编辑此文件，则必须重新加载服务器才能使修改内容生效。

mot.conf文件与postgresql.conf配置文件在同一文件夹下。

在主备部署模式下，主备节点的mot.conf文件需要完全相同，否则，系统行为不明确。

阅读[总体原则](#section14452102715206)，根据需要查看和配置mot.conf文件。

>![](public_sys-resources/icon-note.png) **说明：** 
>以上描述了mot.conf文件中的各个设置。除上述内容外，要了解特定MOT功能（如恢复），可参考本用户手册的相关章节。例如，[MOT恢复](MOT恢复.md)说明了mot.conf文件的恢复，包含影响MOT恢复的设置。此外，有关恢复的完整说明，请参阅“MOT管理”章节的[MOT恢复](MOT恢复.md)。下文各相关章节中还提供了参考链接。

以下介绍了mot.conf文件中的各个部分，其包含的设置以及默认值。

## 总体原则<a name="section14452102715206"></a>

以下是编辑mot.conf文件的总体原则。

-   每个设置项都带有默认值，如下所示：

    ```
    # name = value
    ```

-   可以接受空格或留空。
-   在各行添加\#号可进行注释。
-   每个设置项的默认值将作为注释显示在整个文件中。
-   如果参数没有注释并且置入了新值，则定义新设置。
-   对mot.conf文件的更改仅在数据库服务器启动或重装时生效。

内存单元的表示如下：

-   KB：千字节
-   MB：兆字节
-   GB：吉字节
-   TB：太字节

如果未指定内存单元，则假定为字节。

某些内存单位为postgresql.conf中的max\_process\_memory的百分比值。例如，20%。

时间单位表示如下：

-   us：微秒
-   ms：毫秒
-   s：秒
-   min：分钟
-   h：小时
-   d：天

如果未指定时间单位，则假定为微秒。

## 重做日志（MOT）<a name="section361563811235"></a>

-   **enable\_group\_commit = false**

    是否使用组提交。

    该选项仅在openGauss配置为使用同步提交时相关，即仅当postgresql.conf中的synchronization\_commit设置为除off以外的任何值时相关。

    有关WAL重做日志的详细信息，请参阅[MOT日志记录：WAL重做日志](MOT持久性.md#section129831140121218)。

-   **group\_commit\_size = 16**
-   **group\_commit\_timeout = 10 ms**

    只有当MOT引擎配置为同步组提交日志记录时，此选项才相关。即postgresql.conf中的synchronization\_commit配置为true，mot.conf配置文件中的enable\_group\_commit配置为true。

    当一组事务记录在WAL重做日志中时，需确定以下设置项取值：

    group\_commit\_size：一组已提交的事务数。例如，16表示当同一组中的16个事务已由它们的客户端应用程序提交时，则针对16个事务中的每个事务，在磁盘的WAL重做日志中写入一个条目。

    group\_commit\_timeout：超时时间，单位为毫秒。例如，10表示在10毫秒之后，为同一组由客户端应用程序在最近10毫秒内提交的每个事务，在磁盘的WAL重做日志中写入一个条目。

    提交组在到达配置的事务数后或者在超时后关闭。组关闭后，组中的所有事务等待一个组落盘完成执行，然后通知客户端每个事务都已经结束。

    有关同步组提交日志记录的详细信息，请参阅[MOT日志类型](MOT持久性.md#section125771537134)。


## 检查点（MOT）<a name="section8719101152712"></a>

-   **checkpoint\_dir =**

    指定检查点数据存放目录。默认位置在每个数据节点的data文件夹中。

-   **checkpoint\_segsize = 16 MB**

    指定检查点时使用的段大小。分段执行检查点。当一个段已满时，它将被序列化到磁盘，并为后续的检查点数据打开一个新的段。

-   **checkpoint\_workers = 3**

    指定在检查点期间要使用的工作线程数。

    检查点由多个MOT引擎工作线程并行执行。工作线程的数量可能会大大影响整个检查点操作的整体性能，以及其它正在运行的事务的操作。为了实现较短的检查点持续时间，应使用更多线程，直至达到最佳数量（根据硬件和工作负载的不同而不同）。但请注意，如果这个数目太大，可能会对其他正在运行的事务的执行时间产生负面影响。尽可能低这个数字，以最小化对其他运行事务的运行时的影响。当此数目过高时，检查点持续时间会较长。


>![](public_sys-resources/icon-note.png) **说明：** 
>有关配置的更多信息，请参阅[MOT检查点](MOT持久性.md#section182761535131617)。

## 恢复（MOT）<a name="section7442447103115"></a>

-   **checkpoint\_recovery\_workers = 3**

    指定在检查点数据恢复期间要使用的工作线程数。每个MOT引擎工作线程在自己的核上运行，通过将不同的表读入内存，可以并行处理不同的表。缺省值为3，可将此参数设置为可处理的核数。恢复后，将停止并杀死这些线程。


>![](public_sys-resources/icon-note.png) **说明：** 
>有关配置的详细信息，请参阅[MOT恢复](MOT恢复.md)。

## 统计（MOT）<a name="section659861612477"></a>

-   **enable\_stats = false**

    设置周期性统计打印信息。

-   **print\_stats\_period = 10 minute**

    设置汇总统计报表打印的时间范围。

-   **print\_full\_stats\_period = 1 hours**

    设置全量统计报表打印的时间范围。

    以下设置为周期性统计报表中的各个部分。如果没有配置，则抑制统计报表。

-   **enable\_log\_recovery\_stats = false**

    日志恢复统计信息包含各种重做日志的恢复指标。

-   **enable\_db\_session\_stats = false**

    数据库会话统计信息包含事务事件，如提交、回滚等。

-   **enable\_network\_stats = false**

    网络统计信息包括连接/断连事件。

-   **enable\_log\_stats = false**

    日志统计信息包含重做日志详情。

-   **enable\_memory\_stats = false**

    内存统计信息包含内存层详情。

-   **enable\_process\_stats = false**

    进程统计信息包含当前进程的内存和CPU消耗总量。

-   **enable\_system\_stats = false**

    系统统计信息包含整个系统的内存和CPU消耗总量。

-   **enable\_jit\_stats = false**

    JIT统计信息包含有关JIT查询编译和执行的信息。


## 错误日志（MOT）<a name="section28451692"></a>

-   **log\_level = INFO**

    设置MOT引擎下发的消息在数据库服务器的错误日志中记录的日志级别。有效值为PANIC、ERROR、WARN、INFO、TRACE、DEBUG、DIAG1、DIAG2。

-   **Log/COMPONENT/LOGGER=LOG\_LEVEL**

    使用以下语法设置特定的日志记录器。

    例如，要为系统组件中的ThreadIdPool日志记录器配置TRACE日志级别，请使用以下语法：

    ```
    Log.System.ThreadIdPool.log_level=TRACE
    ```

    要为某个组件下的所有记录器配置日志级别，请使用以下语法：

    ```
    Log.COMPONENT.log_level=LOG_LEVEL
    ```

    例如：

    ```
    Log.System.log_level=DEBUG
    ```


## 内存（MOT）<a name="section1223551495"></a>

-   **enable\_numa = true** 

    指定是否使用可识别NUMA的内存。禁用时，所有亲和性配置也将被禁用。MOT引擎假定所有可用的NUMA节点都有内存。如果计算机具有某些特殊配置，其中某些NUMA节点没有内存，则MOT引擎初始化将因此失败，因此数据库服务器启动将失败。在此类计算机中，建议将此配置值设置为false，以防止启动失败并让MOT引擎在不使用可识别NUMA的内存分配的情况下正常运行。
    
-   **affinity\_mode = fill-physical-first**

    设置用户会话和内部MOT任务的线程亲和模式。

    使用线程池时，用户会话将忽略此值，因为它们的亲和性由线程池控制。但内部MOT任务仍然使用。

    有效值为fill-socket-first、equal-per-socket、fill-physical-first、none。

    -   Fill-socket-first将线程连接到同一个槽位的核上，直到槽位已满，然后移动到下一个槽位。
    -   Equal-per-socket使线程均匀分布在所有槽位中。
    -   Fill-physical-first将线程连接到同一个槽位中的物理核，直到用尽所有物理核，然后移动到下一个槽位。当所有物理核用尽时，该过程再次从超线程核开始。
    -   None禁用任何亲和配置，并让系统调度程序确定每个线程调度在哪个核上运行。

-   **lazy\_load\_chunk\_directory = true**

    设置块目录模式，用于内存块查找。

    Lazy模式将块目录设置为按需加载部分目录，从而减少初始内存占用（大约从1GB减少到1MB）。然而，这可能会导致轻微的性能损失和极端情况下的内存损坏。相反，使用non-lazy块目录会额外分配1GB的初始内存，产生略高的性能，并确保在内存损坏期间避免块目录错误。

-   **reserve\_memory\_mode = virtual**

    设置内存预留模式（取值为physical或virtual）。

    每当从内核分配内存时，都会参考此配置值来确定所分配的内存是常驻（physical）还是非常驻（virtual）。这主要与预分配有关，但也可能影响运行时分配。对于physical保留模式，通过强制内存区域所跨越的所有页出现页错误，使整个分配的内存区域常驻。配置virtual内存预留可加速内存分配（特别是在预分配期间），但可能在初始访问期间出现页错误（因此导致轻微的性能影响），并在物理内存不可用时出现更多服务器错误。相反，物理内存分配速度较慢，但后续访问速度更快且有保障。

-   **store\_memory\_policy = compact**

    设置内存存储策略（取值为compact或expanding）。

    当定义了compact策略时，未使用的内存会释放回内核，直到达到内存下限（请参见下面的min\_mot\_memory）。在expanding策略中，未使用的内存存储在MOT引擎中，以便后续再使用。compact存储策略可以减少MOT引擎的内存占用，但偶尔会导致性能轻微下降。此外，在内存损坏时，它还可能导致内存不可用。相反，expanding模式会占用更多的内存，但是会更快地分配内存，并且能够更好地保证在解分配后能够重新分配内存。

-   **chunk\_alloc\_policy = auto**

    设置全局内存的块分配策略。

    MOT内存以2MB的块为单位组织。源NUMA节点和每个块的内存布局会影响表数据在NUMA节点间的分布，因此对数据访问时间有很大影响。在特定NUMA节点上分配块时，会参考分配策略。

    可用值包括auto、local、page-interleaved、chunk-interleaved、native。

    -   Auto策略根据当前硬件情况选择块分配策略。
    -   Local策略在各自的NUMA节点上分配每个数据块。
    -   Page-interleaved策略从所有NUMA节点分配由交插内存4千字节页组成的数据块。
    -   Chunk-interleaved策略以轮循调度方式从所有NUMA节点分配数据块。
    -   Native策略通过调用原生系统内存分配器来分配块。

-   **chunk\_prealloc\_worker\_count = 8**

    设置每个NUMA节点参与内存预分配的工作线程数。

-   **max\_mot\_global\_memory = 80%**

    设置MOT引擎全局内存的最大限制。

    指定百分比值与postgresql.conf中max\_process\_memory定义的总量有关。

    MOT引擎内存分为全局（长期）内存，主要用于存储用户数据，以及本地（短期）内存，主要用于用户会话，以满足本地需求。

    任何试图分配超出此限制的内存的尝试将被拒绝，并向用户报告错误。请确保max\_mot\_global\_memory与max\_mot\_local\_memory之和不超过postgresql.conf中配置的max\_process\_memory。

-   **min\_mot\_global\_memory = 0 MB**

    设置MOT引擎全局内存的最小限制。

    指定百分比值与postgresql.conf中max\_process\_memory定义的总量有关。

    此值用于启动期间的内存预分配，以及确保MOT引擎在正常运行期间有最小的内存可用量。当使用compact存储策略时（参阅上文store\_memory\_policy），该值指定了下限，超过下限的内存不会释放回内核，而是保留在MOT引擎中以便后续重用。

-   **max\_mot\_local\_memory = 15%**

    设置MOT引擎本地内存的最大限制。

    指定百分比值与postgresql.conf中max\_process\_memory定义的总量有关。

    MOT引擎内存分为全局（长期）内存，主要用于存储用户数据，以及本地（短期）内存，主要用于用户会话，以满足本地需求。

    任何试图分配超出此限制的内存的尝试将被拒绝，并向用户报告错误。请确保max\_mot\_global\_memory与max\_mot\_local\_memory之和不超过postgresql.conf中配置的max\_process\_memory。

-   **min\_mot\_local\_memory = 0 MB**

    设置MOT引擎本地内存的最小限制。

    指定百分比值与postgresql.conf中max\_process\_memory定义的总量有关。

    此值用于在启动期间预分配内存，以及确保MOT引擎在正常运行期间有最小的可用内存。当使用compact存储策略时（参阅上文store\_memory\_policy），该值指定了下限，超过下限的内存不会释放回内核，而是保留在MOT引擎中以便后续重用。

-   **max\_mot\_session\_memory = 0 MB**

    设置MOT引擎中单个会话的最大内存限制。

    指定百分比值与postgresql.conf中max\_process\_memory定义的总量有关。

    通常，MOT引擎中的会话可以根据需要分配尽可能多的本地内存，只要没有超出本地内存限制即可。为了避免单个会话占用过多的内存，从而拒绝其他会话的内存，通过该配置项限制小会话的本地内存分配（最大1022KB）。

    请确保该配置项不影响大会话的本地内存分配。

    0表示不会限制每个小会话的本地分配，除非是由max\_mot\_local\_memory配置的本地内存分配限制引起的。

-   **min\_mot\_session\_memory = 0 MB**

    设置MOT引擎中单个会话的最小内存预留。

    指定百分比值与postgresql.conf中max\_process\_memory定义的总量有关。

    此值用于在会话创建期间预分配内存，以及确保会话有最小的可用内存量来执行其正常操作。

-   **session\_large\_buffer\_store\_size = 0 MB**

    设置会话的大缓冲区存储。

    当用户会话执行需要大量内存的查询时（例如，使用许多行），大缓冲区存储用于增加此类内存可用的确定级别，并更快地为这个内存请求提供服务。对于超过1022KB的会话，任何内存分配都是大内存分配。如果未使用或耗尽了大缓冲区存储，则这些分配将被视为直接从内核提供的巨大分配。

-   **session\_large\_buffer\_store\_max\_object\_size = 0 MB**

    设置会话的大分配缓冲区存储中的最大对象大小。

    大缓冲区存储内部被划分为不同大小的对象。此值用于对源自大缓冲区存储的对象设置上限，以及确定缓冲区存储内部划分为不同大小的对象。

    此大小不能超过session\_large\_buffer\_store\_size的1/8。如果超过，则将其调整到最大可能。

-   **session\_max\_huge\_object\_size = 1 GB**

    设置会话单个大内存分配的最大尺寸。

    巨大分配直接从内核中提供，因此不能保证成功。

    此值也适用于全局（非会话相关）内存分配。


## 垃圾收集（MOT）<a name="section22885696"></a>

-   **enable\_gc = true**

    是否使用垃圾收集器（Garbage Collector，GC）。

-   **reclaim\_threshold = 512 KB**

    设置垃圾收集器的内存阈值。

    每个会话管理自己的待回收对象列表，并在事务提交时执行自己的垃圾回收。此值决定了等待回收的对象的总内存阈值，超过该阈值，会话将触发垃圾回收。

    一般来说，这里是在权衡未回收对象与垃圾收集频率。设置低值会使未回收的内存保持在较少的水平，但会导致频繁的垃圾回收，从而影响性能。设置高值可以减少触发垃圾回收的频率，但会导致未回收的内存过多。此设置取决于整体工作负载。

-   **reclaim\_batch\_size = 8000**

    设置垃圾回收的批次大小。

    垃圾收集器从对象中批量回收内存，以便限制在一次垃圾收集传递中回收的对象数量。此目的是最小化单个垃圾收集传递的操作时间。

-   **high\_reclaim\_threshold = 8 MB**

    设置垃圾回收的高内存阈值。

    由于垃圾收集是批量工作的，因此会话可能有许多可以回收的对象，但这些对象不能回收。在这种情况下，为了防止垃圾收集列表变得过于膨胀，尽管已经达到批处理大小限制，此值继续单独回收对象，直到待回收对象小于该阈值，或者没有更多符合回收条件的对象。


## JIT（MOT）<a name="section4644675"></a>

-   **enable\_mot\_codegen = true**

    指定是否对计划查询使用JIT查询编译和执行。

    JIT查询执行为在计划阶段准备好的查询准备了JIT编译的代码。每当调用准备好的查询时，都会执行生成的JIT编译函数。JIT编译通常以LLVM的形式进行。在原生不支持LLVM的平台上，MOT提供了基于软件的回退（Tiny Virtual Machine，TVM）。

-   **force\_mot\_pseudo\_codegen = false**

    当前平台支持LLVM时，是否使用TVM（伪LLVM）。

    在原生不支持LLVM的平台上，MOT自动默认为TVM。

    在原生支持LLVM的平台上，默认使用LLVM。该配置项允许在支持LLVM的平台上使用TVM进行JIT编译和执行。

-   **enable\_mot\_codegen\_print = false**

    指定是否为JIT编译的查询打印发出的LLVM/TVM IR代码。

-   **mot\_codegen\_limit = 100**

    限制每个用户会话允许的JIT查询数。

## 默认MOT.conf文件<a name="section40674409"></a>

最小设置和配置指定将postgresql.conf文件指向MOT.conf文件的位置：

```
postgresql.conf  
mot_config_file = '/tmp/gauss/ MOT.conf'
```

确保max\_process\_memory设置的值足够包含MOT的全局（数据和索引）和本地（会话）内存。

MOT.conf的默认内容满足开始使用的需求。设置内容后续可以优化。

