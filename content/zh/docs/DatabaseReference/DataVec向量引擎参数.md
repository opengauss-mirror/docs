# DataVec向量引擎参数

## hnsw_ef_search<a name="section14941640131"></a>

**参数说明**： 使用HNSW索引扫描时的动态候选集大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，1\~1000

**设置建议**： 使用HNSW索引扫描时，sql结果数量会受限于`hnsw_ef_search`。并且由于查询时的过滤条件等因素，输出的结果可能会更少。建议将
`hnsw_ef_search`设置为查询中`LIMIT`的至少两倍。

**默认值**： 40

>![](public_sys-resources/icon-note.png) **说明：**
>
> 较高的值会提升查询的召回率，但同时查询速度会下降。
>
> 如果需要超过500个结果，请使用`IVFFLAT`索引。

## ivfflat_probes<a name="section14941640131"></a>

**参数说明**： 使用IVFFLAT索引扫描时的动态候选集大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，1\~32768

**设置建议**： `sqrt(lists)`，`list`为IVFFLAT索引构建时的入参，详情请参考[向量索引](../SQLReference/向量索引.md)。

**默认值**： 1

>![](public_sys-resources/icon-note.png) **说明：**
>
> 较高的值会提升查询的召回率，但同时查询速度会下降。