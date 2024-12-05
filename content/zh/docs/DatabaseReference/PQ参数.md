## enable_hnswpq<a name="section14941640131"></a>

**参数说明**： HNSW索引是否开启PQ。

该参数属于POSTMASTER类型参数，请参考[表2](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on/off

**默认值**： off

>![](public_sys-resources/icon-note.png) **说明：**
>
> 启用PQ功能前，必须安装`libkvecturbo.so`PQ加速安装包，并正确配置`DATAVEC_HNSWPQ_LIB_PATH`环境变量。否则数据库将无法正常启动。