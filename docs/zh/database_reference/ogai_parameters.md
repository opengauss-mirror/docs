# OGAI参数

## enable\_async\_ogai

**参数说明**： 控制是否启用 OGAI 异步向量化后台工作进程。

该参数属于POSTMASTER类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。开启后，数据库会启动 OGAI Launcher 后台进程，负责监听和调度异步向量化任务。

**取值范围**： 布尔型

- on表示启用 OGAI 异步向量化后台工作进程。
- off表示不启用 OGAI 异步向量化后台工作进程。

**默认值**： off

## ogai\.hybrid\_search\_ratio

**参数说明**： 设置混合搜索中向量分数与 BM25 分数的权重比例。

该参数属于USERSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 浮点型，0.0\~1.0。

**默认值**： 0.75
