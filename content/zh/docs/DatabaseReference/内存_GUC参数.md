# 内存

介绍与内存相关的参数设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>这些参数只能在数据库服务重新启动后生效。

## memorypool\_enable<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s630c23ad11044fafae4ed851bc89169a"></a>

**参数说明**：设置是否允许使用内存池。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：布尔型

-   on表示允许使用内存池。
-   off表示不允许使用内存池。

**默认值**：off

## memorypool\_size<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_sd277355ba87045b6b802fef9f49f4725"></a>

**参数说明**：设置内存池大小。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，128\*1024～INT\_MAX/2，单位为kB。

**默认值**：512MB

## enable\_memory\_limit<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s2cf6c862bad443aea7e115ff83941f94"></a>

**参数说明**： 启用逻辑内存管理模块。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：布尔型

- `on`/`true` 表示启用逻辑内存管理模块。
- `off`/`false` 表示不启用逻辑内存管理模块。

**默认值**： `on`/`true`

> ![](public_sys-resources/icon-caution.png) **注意**：
>
> - 为了使 `enable_memory_limit` 参数生效，`max_process_memory` 的值需要设置足够大。若 `max_process_memory` - `shared_buffers` - `cstore_buffers` - 元数据少于 2G，openGauss 会强制把 `enable_memory_limit` 设置为 `off`/`false`。其中元数据是 openGauss 内部使用的内存，和部分并发参数相关，如 `max_connections`、`thread_pool_attr`、`max_prepared_transactions` 等。
> - 当该值为 `off`/`false` 时，不对数据库使用的内存做限制，在大并发或者复杂查询时，使用内存过多，可能导致操作系统 OOM 问题。

## max\_process\_memory<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_sbebcee7acf2042dc8824982f22a2b4a8"></a>

**参数说明**： 设置一个数据库节点可用的最大物理内存。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，2\*1024\*1024～INT\_MAX，单位为kB。

**默认值**： 12GB

**设置建议：**

数据库节点上该数值需要根据系统物理内存及单节点部署主数据库节点个数决定。建议计算公式如下：\(物理内存大小 - vm.min\_free\_kbytes\) \\\* 0.7 / \(1 + 主节点个数\)。该系数的目的是尽可能保证系统的可靠性，不会因数据库内存膨胀导致节点OOM。这个公式中提到vm.min\_free\_kbytes，其含义是预留操作系统内存供内核使用，通常用作操作系统内核中通信收发内存分配，至少为5%内存。即，max\_process\_memory = 物理内存 \* 0.665 / \(1 + 主节点个数\)。

>![](public_sys-resources/icon-caution.png) **注意：** 
>当该值设置不合理，即大于服务器物理内存，可能导致操作系统OOM问题。

## enable\_memory\_context\_control<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_section83355314353"></a>

**参数说明**： 启用检查内存上下文是否超过给定限制的功能。仅适用于DEBUG版本。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：布尔型

-   on表示启用最大内存上下文限制检查功能。
-   off表示关闭最大内存上下文限制检查功能。

**默认值**： off

## uncontrolled\_memory\_context<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_section93539377411"></a>

**参数说明**： 启用检查内存上下文是否超过给定限制的功能时，设置不受此功能约束。仅适用于DEBUG版本。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

查询时会在参数值的最前面添加标题含义字符串“MemoryContext white list:”。

**取值范围**：字符串

**默认值**： 空

## shared\_buffers<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s55a43fb6d0464430a59031671b37cd07"></a>

**参数说明**： 设置openGauss使用的共享内存大小。增加此参数的值会使openGauss比系统默认设置需要更多的System V共享内存。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，16 \~ 1073741823，单位为8kB。

shared\_buffers需要设置为BLCKSZ的整数倍，BLCKSZ目前设置为8kB，即shared\_buffers需要设置为8kB整数倍。改变BLCKSZ的值会改变最小值。

**默认值**： 8MB

**设置建议：**

>1.  建议设置shared\_buffers值为内存的40%以内。行存列存分开对待。行存设大，列存设小。列存：\(单服务器内存/单服务器数据库节点个数\)\*0.4\*0.25。
>2. 如果设置较大的shared\_buffers需要同时增加checkpoint\_segments的值，因为写入大量新增、修改数据需要消耗更多的时间周期。
>3. 如果调整shared_buffers参数之后，导致进程重启失败，请参考启动失败的报错信息，采用以下解决方案之一：
>       -   对应调整操作系统kernel.shmall、kernel.shmmax、kernel.shmmin参数，调整方式请参考《安装指南》的配置操作系统其他参数小节。 
>       -  执行free -g观察操作系统可用内存和swap空间是否足够，如果内存明显不足，请手动停止其他比较占用内存的用户程序。  
>       -  避免设置明显不合理（过大或过小）的shared_buffers值。

## segment\_buffers<a name="section1581274312490"></a>

**参数说明**： 设置openGauss段页式元数据页的内存大小。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值说明：** 整型，16 \~ 1073741823，单位为8kB。

segment\_buffers需要设置为BLCKSZ的整数倍，BLCKSZ目前设置为8kB，即segment\_buffers需要设置为8kB整数倍。改变BLCKSZ的值会改变最小值。

**默认值**： 8MB

**设置建议：**

segment\_buffers 用来缓存段页式段头的内容，属于关键元数据信息，为了提高性能建议常用的表的段头都能缓存在buffer中，不被置换出去。建议按照表的个数（包括索引和toast表）\* 分区数 \* 3 + 128 来设置。乘以3是因为每个表（分区）会有一些额外的元数据段，一般一个表有3个段。最后+128因为段页式表空间管理需要一定数量的buffer。

## bulk\_write\_ring\_size<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_sa239f9a6b4234f04949abc3615970502"></a>

**参数说明**： 大批量数据写入触发时（例如copy动作），该操作使用的环形缓冲区大小。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，16384 \~ 2147483647，单位为kB。

**默认值**： 2GB

**设置建议：** 建议导入压力大的场景中增加数据库节点中此参数配置。

## standby\_shared\_buffers\_fraction<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_sfda2b709d047441cab1a59ac63bccb08"></a>

**参数说明**： 备实例所在服务器使用shared\_buffers内存缓冲区大小的比例。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 双精度浮点型，0.1\~1.0

**默认值**： 0.3

## temp\_buffers<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s2a60d22e5f524adbbf493dfe3a29a4c6"></a>

**参数说明**： 设置每个数据库会话使用的LOCAL临时缓冲区的大小。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

在每个会话的第一次使用临时表之前可以改变temp\_buffers的值，之后的设置将是无效的。

一个会话将按照temp\_buffers给出的限制，根据需要分配临时缓冲区。如果在一个并不需要大量临时缓冲区的会话里设置一个大的数值，其开销只是一个缓冲区描述符的大小。当缓冲区被使用，就会额外消耗8192字节。

**取值范围**： 整型，100\~1073741823，单位为8kB。

**默认值**： 1MB

## max\_prepared\_transactions<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s0baf9251722144d492151b31104dd73c"></a>

**参数说明**： 设置可以同时处于“预备”状态的事务的最大数目。增加此参数的值会使openGauss比系统默认设置需要更多的System V共享内存。

当openGauss部署为主备双机时，在备机上此参数的设置必须要高于或等于主机上的，否则无法在备机上进行查询操作。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0\~262143。

**默认值**： 10，资源池化部署默认值为800

>![](public_sys-resources/icon-note.png) **说明：** 
>
>一般不需要对事务显式进行PREPARE操作，如果业务对事务进行显示PREPARE操作，为避免在准备步骤失败，需要调大该值，大于需要进行PREPARE业务的并发数。

## work\_mem<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_sd27c81d651ce4d2585febca76c4cc34e"></a>

**参数说明**： 设置内部排序操作和Hash表在开始写入临时磁盘文件之前使用的内存大小。ORDER BY、DISTINCT和merge joins都要用到排序操作。Hash表在散列连接、散列为基础的聚集、散列为基础的IN子查询处理中都要用到。

对于复杂的查询，可能会同时并发运行好几个排序或者散列操作，每个都可以使用此参数所声明的内存量，不足时会使用临时文件。同样，好几个正在运行的会话可能会同时进行排序操作。因此使用的总内存可能是work\_mem的好几倍。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，64\~2147483647，单位为kB。

**默认值**： 64MB

**设置建议：**

依据查询特点和并发来确定，一旦work\_mem限定的物理内存不够，算子运算数据将写入临时表空间，带来5-10倍的性能下降，查询响应时间从秒级下降到分钟级。

>-   对于串行无并发的复杂查询场景，平均每个查询有5-10关联操作，建议work\_mem=50%内存/10。
>-   对于串行无并发的简单查询场景，平均每个查询有2-5个关联操作，建议work\_mem=50%内存/5。
>-   对于并发场景，建议work\_mem=串行下的work\_mem/物理并发数。
>-   对于BitmapScan的哈希表也会受到work\_mem的限制，但不会被严格管控下盘。完全Lossify的情况下，哈希表每占用1MB的内存，对应一次BitmapHeapScan的16GB的页面（Ustore为32GB），达到work\_mem上限后，会按此比例随数据访问量线性增长。

## query\_mem<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_section12283034151318"></a>

**参数说明**： 设置执行作业所使用的内存。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 0，或大于32M的整型，默认单位为kB。

**默认值**： 0

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>-   如果设置的query\_mem值大于0，在生成执行计划时，优化器会将作业的估算内存调整为该值。
>
>-   如果设置值为负数或小于32MB，将设置为默认值0，此时优化器不会根据该值调整作业的估算内存。

## query\_max\_mem<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_section1258420917117"></a>

**参数说明**： 设置执行作业所能够使用的最大内存。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 0，或大于32M的整型，默认单位为kB。

**默认值**： 0

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>-   如果设置的query\_max\_mem值大于0，当作业执行时所使用内存超过该值时，将报错退出。
>
>-   如果设置值为负数或小于32M，将设置为默认值0，此时不会根据该值限制作业的内存使用。

## maintenance\_work\_mem<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s123a0cc8d6434028a6709bbfa876e8b0"></a>

**参数说明**： 设置在维护性操作（比如VACUUM、CREATE INDEX、ALTER TABLE ADD FOREIGN KEY等）中可使用的最大的内存。该参数的设置会影响VACUUM、VACUUM FULL、CLUSTER、CREATE INDEX的执行效率。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，1024\~INT\_MAX，单位为kB。

**默认值**： 16MB

**设置建议：**

> - 建议设置此参数的值大于work\_mem可以改进清理和恢复数据库转储的速度。因为在一个数据库会话里，任意时刻只有一个维护性操作可以执行，并且在执行维护性操作时不会有太多的会话。
> - 当[自动清理](自动清理.md)线程运行时，autovacuum\_max\_workers倍数的内存将会被分配，所以此时设置maintenance\_work\_mem的值应该不小于work\_mem。
> - 如果进行大数据量的cluster等，可以在session中调大该值。

## psort\_work\_mem<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_scb2890bc578f4811b63b341f7866057a"></a>

**参数说明**： 设置列存表在进行局部排序中，在开始写入临时磁盘文件之前使用的内存大小。带partial cluster key的表、带索引的表插入、创建表索引、删除表和更新表都会用到。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>同样，多个正在运行的会话可能会同时进行表的局部排序操作。因此，使用的总内存可能是psort\_work\_mem的几倍。

**取值范围**： 整型64\~2147483647，单位为kB。

**默认值**： 512MB

## max\_loaded\_cudesc<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s180b94f02cee4806be39f36f8d2e2a28"></a>

**参数说明**： 设置列存表在做扫描时，每列缓存cudesc信息的个数。增大设置会提高查询性能，但也会增加内存占用，特别是当列存表的列非常多时。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>max\_loaded\_cudesc设置过高时，有可能引起内存分配不足。

**取值范围**： 100\~1073741823。

**默认值**： 1024

## max\_stack\_depth<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s7417ae6acda9409f8ff99365a0e8bb11"></a>

**参数说明**： 设置openGauss执行堆栈的最大安全深度。需要这个安全界限是因为在服务器里，并非所有程序都检查了堆栈深度，只是在可能递规的过程，比如表达式计算这样的过程里面才进行检查。

该参数属于SUSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，100\~INT\_MAX，单位为kB。

**默认值**： 2MB

**设置原则：**
> - 数据库需要预留640kB堆栈深度，因此，此参数的最佳设置是=操作系统内核允许的最大值（就是ulimit -s的设置）- 640kB。
> - 如果设置此参数的值大于实际的内核限制，则一个正在运行的递归函数可能会导致一个独立的服务器线程崩溃。在openGauss能够检测内核限制的操作系统上，将自动限制设置为一个不安全的值。
> - 因为并非所有的操作都能够检测，所以建议用户在此设置一个明确的值。
> - 默认值2MB，这个值相对比较小，不容易导致系统崩溃。

## cstore\_buffers<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s00a05d7c1a374988b114e167735a552d"></a>

**参数说明**： 设置列存所使用的共享缓冲区的大小。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，16384～1073741823，单位为kB。

**默认值**： 1GB

**设置建议**：

列存表使用cstore\_buffers设置的共享缓冲区，几乎不用shared\_buffers。因此在列存表为主的场景中，应减少shared\_buffers，增加cstore\_buffers。

## bulk\_read\_ring\_size<a name="zh-cn_topic_0283136786_zh-cn_topic_0237124699_zh-cn_topic_0059777577_s43b2a38b07f647039f73f31d71db7b26"></a>

**参数说明**： 大批量数据查询时（例如大表扫描），该操作使用的环形缓冲区大小。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，256\~2147483647，单位为kB。

**默认值**： 16MB

## enable\_early\_free<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section18463123172910"></a>

**参数说明**：控制是否可以实现算子内存的提前释放。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：布尔型

-   on表示支持算子内存提前释放。
-   off表示不支持算子内存提前释放。

**默认值**：on

## local\_syscache\_threshold<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section18463123172910"></a>

**参数说明**：系统表cache在单个session缓存的大小。

该参数属于PG_SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

如果enable_global_plancache已打开，为保证GPC生效，local_syscache_threshold设置值小于16MB时不会生效，最小为16MB。

如果enable_global_plancache和enable_thread_pool打开，该参数描述的是当前线程和绑定到当前线程上的session缓存的总大小。

**取值范围**：整型，1\*1024 ~ 512\*1024，单位kB。

**默认值**：256MB

## memory\_trace\_level<a name="section198622451396"></a>

**参数说明**：动态内存使用超过最大动态内存的90%后，记录内存申请信息的管控等级。该参数仅在use\_workload\_manager和enable\_memory\_limit打开时生效。该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：枚举型

-   none：表示不记录内存申请信息。
-   level1：动态内存使用超过最大动态内存的90%后，会记录以下信息，并将记录的内存信息保存在$GAUSSLOG/mem\_log目录下。
    -   全局内存概况。
    -   instance，session，thread三种类型的所有内存上下文中内存占用前20的内存上下文的内存使用情况。
    -   每个内存上下文的totalsize、freesize字段。

-   level2：动态内存使用超过最大动态内存的90%后，会记录以下信息，并将记录的内存信息保存在$GAUSSLOG/mem\_log目录下。
    -   全局内存概况。
    -   instance，session，thread三种类型的所有内存上下文中内存占用前20的内存上下文的内存使用情况。
    -   每个内存上下文的totalsize，freesize字段。
    -   每个内存上下文上所有内存申请的详细信息，包含申请内存所在的文件，行号和大小。

**默认值**：level1

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>-   该参数设置为level2后，会记录每个内存上下文的内存申请详情（file，line，size字段），会对性能影响较大，需慎重设置。
>-   记录的内存快照信息可以通过系统函数gs\_get\_history\_memory\_detail\(cstring\)查询，函数详情请参考“SQL参考 \> 函数和操作符 \> 统计信息函数”章节查询。
>-   记录的内存上下文是经过将同一类型所有重名的内存上下文进行汇总之后得到的。

##  resilience_memory_reject_percent

**参数说明**：用于控制内存过载逃生的动态内存占用百分比。该参数仅在GUC参数use_workload_manager和enable_memory_limit打开时生效。该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：字符串，长度大于0

该参数分为recover_memory_percent和overload_memory_percent 2部分，这2个部分的具体含义如下：

- recover_memory_percent：内存从过载状态恢复正常状态的动态内存使用占最大动态内存的百分比。当动态内存使用小于最大动态内存乘以该值对应的百分比后，停止过载逃生并放开新连接接入，取值范围为0~99，且需要小于overload_memory_percent的取值。
- overload_memory_percent：内存过载时动态内存使用占最大动态内存的百分比。当动态内存使用大于最大动态内存乘以该值对应的百分比后，表示当前内存已经过载，触发过载逃生kill会话并禁止新连接接入，取值范围为0~100。

**默认值**：'0,0'，表示关闭内存过载逃生功能。

**示例：**

```
resilience_memory_reject_percent = '70,90'
```

表示内存使用超过最大内存上限的90%后禁止新连接接入并kill堆积的会话，kill会话过程中内存恢复到最大内存的70%以下时停止kill会话并允许新连接接入。

> ![](public_sys-resources/icon-notice.png) **须知：**
>
> - 最大动态内存和已使用的动态内存可以通过gs_total_memory_detail视图查询获得，最大动态内存：max_dynamic_memory，已使用的动态内存：dynamic_used_memory。
> - 该参数如果设置的百分比过小，则会频繁触发内存过载逃生流程，会使正在执行的会话被强制退出，新连接短时间接入失败，需要根据实际内存使用情况慎重设置。

## num\_slru\_buffers

**参数说明**： 控制部分事务日志在内存中可缓存的最大槽位数，用于特定场景的性能调优，目前主要针对jdbc配置"autosave=always"场景。内容以关键字和数字的KV方式组织，各个不同类型日志缓存之间以逗号隔开。先后顺序对设置结果不影响，例如“MXACT\_OFFSET=256,MXACT\_MEMBER=512”等同于“MXACT\_MEMBER=512,MXACT\_OFFSET=256”。重复设置同一关键字时，以最后一次设置为准，例如“MXACT\_OFFSET=256,MXACT\_OFFSET=2”，设置的结果为MXACT\_OFFSET=2。当没有设置关键字时，则为默认值，相关参数的使用描述和最大、最小、默认值如下。

-   MXACT\_OFFSET：multixact offset日志文件在内存中最大可缓存的8KB页面数量。multixact offset日志每16个页面槽位使用一个bank锁控制，以保证缓存读写的并发度，增大该值可以提高multixact offset日志读写效率，提升事务引擎执行效率，但是会增大内存使用；减小该值会减少相应内存使用，但在multixact日志生成量较大场景，可能使得multixact offset日志读写冲突变大，影响性能。最小值为16，最大值为131072，且必须是16的倍数。
-   MXACT\_MEMBER：multixact member日志文件在内存中最大可缓存的8KB页面数量。与MXACT\_MEMBER相同，增大该值可以提高multixact member日志读写效率，提升事务引擎执行效率，但是会增大内存使用；减小该值会减少相应内存使用，但在multixact日志生成量较大场景，可能使得multixact member日志读写冲突变大，影响性能。最小值为16，最大值为131072，且必须是16的倍数。

该参数属于POSTMASTER类型参数，参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)中对应设置方法进行设置。

**取值范围**： 字符串

**默认值**：

"MXACT\_OFFSET=16,MXACT\_MEMBER=16"

> ![](public_sys-resources/icon-notice.png) **须知：**
>
> - 该参数设置主要适用于部分multixact日志读写压力较大的场景，比如jdbc配置"autosave=always"，其他场景如果没有产生大量multixact日志导致出现相关瓶颈，不建议调整默认配置，反而会增加内存消耗和相关缓存的维护成本。
> - 资源池化模式中，multixact offset 日志和multixact member日志的内存最大槽位数固定为1024，在资源池化模式修改num\_slru\_buffers不会实际生效。