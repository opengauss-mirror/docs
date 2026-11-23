---
description: 本文介绍 openGauss DataVec向量引擎参数 的相关内容，涵盖 vector_buffers、enable_vector_buffer_cache 等内容。
keywords: [openGauss, DataVec向量引擎参数, 数据库参考, vector_buffers, enable_vector_buffer_cache]
---

# DataVec向量引擎参数

向量专用缓存的配置步骤、索引选项及使用限制请参见[使用向量专用缓存](../database_administration_guide/using_vector_buffer.md)。

## vector_buffers<a name="vector-buffers"></a>

**参数说明**：设置向量专用缓存的共享载荷区容量。为 0 时不分配向量专用缓存。非零时需要同时为控制结构和哈希表预留额外内存，不能将此参数值作为该功能的全部内存占用。

该参数属于 POSTMASTER 类型，修改后重启实例生效。设置方法请参见[重设参数](../database_administration_guide/reset_parameters.md)。

**取值范围**：整型，0～1073741823，未指定单位时为 kB，也可使用 MB、GB 等内存单位。非零时必须至少容纳一个 `vbp_chunk_size` 大小的内存块，并满足共享内存布局及实例可用内存限制。实际载荷容量向下取整为完整内存块的倍数。

**默认值**：0

**设置建议**：根据索引访问的热数据规模规划容量，并结合 `pg_stat_vector_buffer` 和 `pg_stat_vector_buffer_hit_rate` 观察使用量及命中情况。开启缓存还需在建索引时指定 `enable_vector_payload_storage = on`，并在查询会话中设置 `enable_vector_buffer_cache = on`。

## enable_vector_buffer_cache<a name="enable-vector-buffer-cache"></a>

**参数说明**：控制当前会话读取向量独立存储索引时是否使用向量专用缓存。

该参数属于 USERSET 类型，可使用 `SET` 在会话中设置，设置方法请参见[重设参数](../database_administration_guide/reset_parameters.md)。

**取值范围**：布尔型。

- on：实例已分配缓存且载荷满足缓存条件时，尝试命中或填充共享缓存；无法缓存时回退到载荷页读取。
- off：当前会话不使用该共享缓存读取载荷，不清空其他会话正在使用的缓存，也不修改索引格式。

**默认值**：off

## vbp_chunk_size<a name="vbp-chunk-size"></a>

**参数说明**：设置向量专用缓存的内存块（chunk）大小。内存块分配给缓存池后，按该池的载荷长度划分为槽位。

该参数属于 POSTMASTER 类型，修改后重启实例生效。

**取值范围**：整型，1024～1073741823，未指定单位时为 kB，且必须为 2 的整数次幂。启用缓存时还需满足布局约束：当前实现的内存块字节数必须能用 32 位无符号整数表示，因此可实际使用的最大 2 的整数次幂为 2GB；总容量至少包含一个完整内存块，且每块至少能容纳一个包含管理信息的完整缓存条目。

**默认值**：2MB

**设置建议**：通常保留默认值。较小的内存块可降低大量小索引分配内存时的粒度，但会增加内存块和相关元数据数量；不应只根据单个向量长度设置此值。

## vbp_hash_partitions<a name="vbp-hash-partitions"></a>

**参数说明**：设置向量专用缓存哈希锁的分区数，用于分散并发访问的锁竞争。此处的分区是内存哈希锁分区，与数据库分区表无关。

该参数属于 POSTMASTER 类型，修改后重启实例生效。

**取值范围**：整型，1～4096，且必须为 2 的整数次幂。

**默认值**：128

**设置建议**：通常保留默认值。增加分区数会增加相关管理开销，应结合并发负载评估。

## vbp_min_payload<a name="vbp-min-payload"></a>

**参数说明**：设置可进入共享缓存的最小载荷长度，单位为字节。小于有效阈值的载荷通过载荷页读取。载荷长度是存储表示的字节数，不能直接等同于向量维度。

该参数属于 POSTMASTER 类型，修改后重启实例生效。

**取值范围**：整型，1～2147483647。有效阈值按内存对齐要求向上取整，启用缓存时还需保证对应条目能够放入一个 chunk。可查询 `pg_stat_vector_buffer.min_payload` 查看实际阈值。

**默认值**：128

**设置建议**：通常保留默认值。降低阈值可以使更小的载荷参与缓存，但会增加相对管理开销。

## vbp_reclaim_scan_limit<a name="vbp-reclaim-scan-limit"></a>

**参数说明**：设置后台回收时单次淘汰尝试检查缓存条目的上限。该参数约束查找可回收条目的工作量，不保证每次尝试均可找到可回收条目。

该参数属于 POSTMASTER 类型，修改后重启实例生效。

**取值范围**：整型，1～2147483647。

**默认值**：1024

## vbp_cold_evict<a name="vbp-cold-evict"></a>

**参数说明**：控制缓存池空间不足时是否进行后台冷数据淘汰。

该参数属于 SIGHUP 类型，修改配置并重新加载后生效，设置方法请参见[重设参数](../database_administration_guide/reset_parameters.md)。

**取值范围**：布尔型。

- on：允许后台线程处理缓存池的回收请求。
- off：关闭此类后台淘汰。缓存池满时仍可回退到载荷页读取，数据维护所需的缓存失效和资源清理继续执行。

**默认值**：on

## vector_buffer_reclaim_batch_size<a name="vector-buffer-reclaim-batch-size"></a>

**参数说明**：设置后台线程对单个缓存池执行一次回收批次时，成功淘汰条目的预算。实际淘汰数量可能小于该值；一次后台遍历可处理多个存在回收请求的缓存池。

该参数属于 SIGHUP 类型，修改配置并重新加载后生效。

**取值范围**：整型，1～2147483647。

**默认值**：32

**设置建议**：通常保留默认值。增大批次可增加每轮回收量，也会增加后台处理开销。

## vector_buffer_reclaim_interval<a name="vector-buffer-reclaim-interval"></a>

**参数说明**：设置后台缓存回收线程等待事件的超时时间。缓存池提出回收请求时可提前唤醒线程，该值不是每个条目的生存时间，也不是固定的全缓存清空周期。

该参数属于 SIGHUP 类型，修改配置并重新加载后生效。

**取值范围**：整型，10～2147483647，未指定单位时为 ms。

**默认值**：1s

**设置建议**：通常保留默认值。调小间隔不会增加缓存容量，也不能保证正在使用的条目立即被回收。

## hnsw_ef_search<a name="section14941640131"></a>

**参数说明**： 使用HNSW索引扫描时的动态候选集大小。

该参数仅支持[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应方法三进行设置。

**取值范围**： 整型，1\~1000

**设置建议**： 使用HNSW索引扫描时，sql结果数量会受限于`Limit`，hnsw_ef_search为初始扫描集合大小，如果没有获取足够`Limit`大小的数据会自动扩大hnsw_ef_search继续扫描。该值在取值范围内设置即可。

**默认值**： 40

>[!NOTE]说明
> 如果需要超过500个结果，请使用`IVFFLAT`索引。

## ivfflat_probes<a name="section14941640131"></a>

**参数说明**： 使用IVFFLAT索引扫描时的动态候选集大小。

该参数仅支持[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应方法三进行设置。

**取值范围**： 整型，1\~32768

**设置建议**： `sqrt(lists)`，`list`为IVFFLAT索引构建时的入参，详情请参考[向量索引](https://docs.opengauss.org/zh/docs/latest/datavec/vector_index.html)。

**默认值**： 1

>[!NOTE]说明
>
> 较高的值会提升查询的召回率，但同时查询速度会下降。

## hnsw_earlystop_threshold<a name="section14941640131"></a>

**参数说明**： HNSW索引开启PQ时，在早停策略中设置图搜索的最大连续迭代次数。

该参数仅支持[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应方法三进行设置。

**取值范围**： 整型，160~INT32_MAX

**默认值**： INT32_MAX

>[!NOTE]说明
>
>默认值实际是不开启早停策略的状态。较低的值可以提升查询速率，但可能会使召回率降低，如果召回率不够高可以适当调大参数值。

## ivfpq_kreorder<a name="section14941640131"></a>

**参数说明**： IVFFLAT索引开启PQ时，设置参与精排候选集的大小

该参数属于USERSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0~INT_MAX

**默认值**： 0

>[!NOTE]说明
>
>默认值是不开启，较高的值会提升查询的召回率，但同时查询速度会下降。<br>
>推荐值大小为`k*ivfflat_probes`，其中`k`为用户查询sql设置的`limit k`。如果`ivfpq_kreorder`的值小于用户查询sql设置的`limit k`，返回记录数为实际精排候选集大小。<br>
>创建IVFPQ索引时，不设置`ivfpq_kreorder`参数或者该参数值设置不合理会导致查询结果乱序。

## enable_ivfflat_npu<a name="section14941640131"></a>

**参数说明**： 索引是否开启IVFFLAT-NPU加速功能。

该参数属于POSTMASTER类型参数，请参考[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on/off

**默认值**： off

>[!NOTE]说明
>
> 启用IVFFLAT-NPU加速功能前，必须安装`libnputurbo.so`NPU加速安装包，并正确配置`DATAVEC_NPU_LIB_PATH`环境变量。否则数据库将无法正常启动。

## ivfflat_npubind_info<a name="section14941640131"></a>

**参数说明**： 设置IVFFLAT-NPU加速功能使用的NPU卡编号，需要同时设置`enable_ivfflat_npu`为on。

该参数属于POSTMASTER类型参数，请参考[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**设置方式**： 1.'(ivfflat_npubind_info: 1, 2)'，使用编号为1、2的NPU卡；2. '(ivfflat_npubind_info: 0-7)'，使用编号0-7的NPU卡。

**默认值**： 0

## cache_data_on_npu<a name="section14941640131"></a>

**参数说明**：检索时是否在 NPU 内存中缓存原始向量数据。将其设置为"on"可提升检索性能，而将其设置为"off"则可节省 NPU 内存。需要同时设置`enable_ivfflat_npu`为on。

该参数属于POSTMASTER类型参数，请参考[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on/off

**默认值**： off

## diskann_probes<a name="section14941640131"></a>

**参数说明**： 使用DISKANN索引扫描时的动态候选集大小。

该参数仅支持[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)中对应方法三进行设置。

**取值范围**： 整型，1\~32768

**设置建议**： 使用DISKANN索引扫描时，sql结果数量会受限于`Limit`，diskann_probes为初始扫描集合大小，建议该值在大于`Limit`范围内设置即可。

**默认值**： 128

>[!NOTE]说明
>
> 较高的值会提升查询的召回率，但同时查询速度会下降。

## gv_graph_nprobes

**参数说明**：使用GV_GRAPH索引扫描时，从图索引中获取的候选记录数。

该参数属于USERSET类型。请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。使用`SET`修改时，只对当前会话生效。

**取值范围**：整型，1\~65535

**默认值**：128

**设置建议**：该值至少应不小于查询语句中的`LIMIT`。增大该值通常可以提高召回率，但也会增加查询耗时；查询包含额外的`WHERE`过滤条件时，可以适当增大候选数，避免候选记录被过滤后返回数量不足。

使用该参数前，需要在当前会话中设置`enable_indexscan_optimization = on`。GV_GRAPH索引的创建和查询方法请参考[GV_GRAPH使用指南](https://docs.opengauss.org/zh/docs/latest/datavec/gv_graph.html#调整查询效果)。

## npu_device_mask

**参数说明**：设置GV_GRAPH索引构建可使用的NPU设备。设为`0`时，使用数据库进程可见的全部NPU设备。设为非零值时，按十进制位掩码选择设备，每个二进制位对应一张NPU卡。例如，`1`表示使用0号NPU，`3`表示使用0号和1号NPU，`15`表示使用0至3号NPU。

该参数属于USERSET类型，并且仅支持单机部署。使用`SET`修改时，只对当前会话生效。

**取值范围**：整型，0\~INT_MAX

**默认值**：255，对应0至7号NPU

>[!NOTE]说明
>
>该参数仅在安装了NPU版GaussVector组件，并使用`prune_alg = npu_knn`创建或重建GV_GRAPH索引时生效。CPU版GaussVector组件和多节点部署不支持NPU剪枝，应使用默认的`prune_alg = vamana`。
>
>使用NPU剪枝前，请确认运行数据库服务的操作系统用户已加入NPU设备所属的用户组，以便数据库进程访问NPU设备。

## npu_device_max_mem

**参数说明**：设置一次GV_GRAPH索引构建最多可以使用的NPU显存。

该参数属于USERSET类型，并且仅支持单机部署。使用`SET`修改时，只对当前会话生效。支持使用`MB`、`GB`等内存单位设置，例如`SET npu_device_max_mem = '8GB';`。

**取值范围**：2MB\~1TB

**默认值**：1GB

>[!NOTE]说明
>
>该参数仅在安装了NPU版GaussVector组件，并使用`prune_alg = npu_knn`创建或重建GV_GRAPH索引时生效。设置值不能超过所选NPU设备的实际可用显存。

## enable_mmap<a name="section14941640131"></a>

**参数说明**：Hnsw检索可以通过开启MMAP功能加速检索，该参数用于初始化Mmap的Hashmap。目前属于beta功能。

该参数属于POSTMASTER类型参数，请参考[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)中对应设置方法进行设置，只支持重启生效。

**取值范围**： 布尔型，on/off

**默认值**： off
>[!NOTE]说明
>MMAP特性暂时只支持ARM架构环境。<br>
>MMAP特性暂时只支持HNSW索引。<br>
>MMAP特性暂时只能加载一个索引，且加载了MMAP的索引不能进行DML，如果需要切换加载索引，需重启。<br>

## hnsw_use_mmap<a name="section14941640131"></a>

**参数说明**：当前会话可以是否可以使用Mmap加载Hnsw索引。

该参数属于USERSET类型参数，只对当前会话生效。只有在`enable_mmap=on`才能被开启。请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on/off

**默认值**： off

## rbq_refinek<a name="section14941640131"></a>

**参数说明**： 选择精排的候选池范围，一般值越高，qps越低，但召回率越高。

该参数支持[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)中对应方法一、二、三进行设置。

**取值范围**： 浮点型，默认5，范围[1-1000]

**默认值**： 5.0

## rbq_query_bits<a name="section14941640131"></a>

**参数说明**：设置是否对查询向量进行额外的标量量化，适当设置可以提升召回率。

该参数仅支持[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)中对应方法三进行设置。

**取值范围**： 整型，默认为8，范围[1-8]

**默认值**： 8

## rbq_sample_rows<a name="section14941640131"></a>

**参数说明**：如果是先构建索引再插入数据的场景，可以通过该参数设置触发延迟索引的数据行数。由于rabitq算法构建索引时需要一定的数据进行训练，如果无数据创建索引会影响向量查询召回率，可以通过该参数调整延迟索引的阈值条件。如果是先插入数据再构建索引则无需设置。默认1000，范围[1000-INX_MAX]

该参数仅支持[表2](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d)中对应方法三进行设置。

**取值范围**： 整型，默认1000，范围[1000-20,0000,0000]

**默认值**： 1000
