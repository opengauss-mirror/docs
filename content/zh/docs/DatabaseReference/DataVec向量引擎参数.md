# DataVec向量引擎参数

## hnsw_ef_search<a name="section14941640131"></a>

**参数说明**： 使用HNSW索引扫描时的动态候选集大小。

该参数仅支持[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应方法三进行设置。

**取值范围**： 整型，1\~1000

**设置建议**： 使用HNSW索引扫描时，sql结果数量会受限于`Limit`，hnsw_ef_search为初始扫描集合大小，如果没有获取足够`Limit`大小的数据会自动扩大hnsw_ef_search继续扫描。该值在取值范围内设置即可。

**默认值**： 40

>![](public_sys-resources/icon-note.png) **说明：**
> 如果需要超过500个结果，请使用`IVFFLAT`索引。

## ivfflat_probes<a name="section14941640131"></a>

**参数说明**： 使用IVFFLAT索引扫描时的动态候选集大小。

该参数仅支持[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应方法三进行设置。

**取值范围**： 整型，1\~32768

**设置建议**： `sqrt(lists)`，`list`为IVFFLAT索引构建时的入参，详情请参考[向量索引](../SQLReference/向量索引.md)。

**默认值**： 1

>![](public_sys-resources/icon-note.png) **说明：**
>
> 较高的值会提升查询的召回率，但同时查询速度会下降。
## enable_pq<a name="section14941640131"></a>

**参数说明**： 索引是否开启PQ。

该参数属于POSTMASTER类型参数，请参考[表2](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on/off

**默认值**： off

>![](public_sys-resources/icon-note.png) **说明：**
>
> 启用PQ功能前，必须安装`libkvecturbo.so`PQ加速安装包，并正确配置`DATAVEC_PQ_LIB_PATH`环境变量。否则数据库将无法正常启动。

## hnsw_earlystop_threshold<a name="section14941640131"></a>

**参数说明**： HNSW索引开启PQ时，在早停策略中设置图搜索的最大连续迭代次数。

该参数仅支持[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应方法三进行设置。

**取值范围**： 整型，160~INT32_MAX

**默认值**： INT32_MAX

>![](public_sys-resources/icon-note.png) **说明：**
>
>默认值实际是不开启早停策略的状态。较低的值可以提升查询速率，但可能会使召回率降低，如果召回率不够高可以适当调大参数值。

## ivfpq_kreorder<a name="section14941640131"></a>

**参数说明**： IVFFLAT索引开启PQ时，设置参与精排候选集的大小

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0~INT_MAX

**默认值**： 0

>![](public_sys-resources/icon-note.png) **说明：**
>
>默认值是不开启，较高的值会提升查询的召回率，但同时查询速度会下降。<br>
>推荐值大小为`k*ivfflat_probes`，其中`k`为用户查询sql设置的`limit k`。如果`ivfpq_kreorder`的值小于用户查询sql设置的`limit k`，返回记录数为实际精排候选集大小。<br>
>创建IVFPQ索引时，不设置`ivfpq_kreorder`参数或者该参数值设置不合理会导致查询结果乱序。

## enable_ivfflat_npu<a name="section14941640131"></a>

**参数说明**： 索引是否开启IVFFLAT-NPU加速功能。

该参数属于POSTMASTER类型参数，请参考[表2](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on/off

**默认值**： off

>![](public_sys-resources/icon-note.png) **说明：**
>
> 启用IVFFLAT-NPU加速功能前，必须安装`libnputurbo.so`NPU加速安装包，并正确配置`DATAVEC_NPU_LIB_PATH`环境变量。否则数据库将无法正常启动。

## ivfflat_npubind_info<a name="section14941640131"></a>

**参数说明**： 设置IVFFLAT-NPU加速功能使用的NPU卡编号，需要同时设置`enable_ivfflat_npu`为on。

**设置方式**： 1.'(ivfflat_npubind_info: 1, 2)'，使用编号为1、2的NPU卡；2. '(ivfflat_npubind_info: 0-7)'，使用编号0-7的NPU卡。

**默认值**： 0

## cache_data_on_npu<a name="section14941640131"></a>

**参数说明**：检索时是否在 NPU 内存中缓存原始向量数据。将其设置为"on"可提升检索性能，而将其设置为"off"则可节省 NPU 内存。需要同时设置`enable_ivfflat_npu`为on。

**取值范围**： 布尔型，on/off

**默认值**： off
