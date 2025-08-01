# AI特性<a name="ZH-CN_TOPIC_0000001108458456"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss中AI能力不可用。

## enable\_hypo\_index<a name="section76151259193016"></a>

**参数说明**： 该参数控制数据库的优化器进行EXPLAIN时是否考虑创建的虚拟索引。通过对特定的查询语句执行explain，用户可根据优化器给出的执行计划评估该索引是否能够提升该查询语句的执行效率。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

-   on表示在进行EXPLAIN时创建虚拟索引。
-   off表示在进行EXPLAIN时不创建虚拟索引。

**默认值**： off

## db4ai\_snapshot\_mode<a name="section16166168154212"></a>

**参数说明**： snapshot有2种模式：MSS（物化模式，存储数据实体）和CSS（计算模式，存储增量信息）。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，MSS/CSS

-   MSS表示物化模式，db4ai在创建快照的时候存储数据实体。
-   CSS表示计算模式，db4ai在创建快照的时候存储增量信息。

**默认值**： MSS

## db4ai\_snapshot\_version\_delimiter<a name="section254410351422"></a>

**参数说明**： 该参数为数据表快照版本分隔符。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，长度等于1

**默认值**： @

## db4ai\_snapshot\_version\_separator<a name="section337119550421"></a>

**参数说明**： 该参数用于指定数据表快照子版本分隔符。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，长度等于1

**默认值**： .

## enable\_ai\_stats<a name="section883221733710"></a>

**参数说明**： 该参数用于指定是否创建或者使用智能统计信息。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

**默认值**： on

## enable\_cachedplan\_mgr<a name="section76622010222"></a>

**参数说明**： 该参数用于指定是否开启自适应计划选择功能。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

**默认值**： off

## multi_stats_type

**参数说明**： 该参数用于指定在参数enable_ai_stats为on状态下创建的统计信息类别。
该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 枚举类型，有效值为"BAYESNET"、"MCV"、"ALL"。

"BAYESNET"：只创建智能统计信息。
"MCV"：只创建传统统计信息。
"ALL"：同时创建传统统计信息和智能统计信息。

**默认值**： "BAYESNET"

## unix\_socket\_directory<a name="section138405824612"></a>

**参数说明**： 用于指定unix\_socket通信方式中，文件存放的路径。此参数只能在配置文件postgresql.conf中指定。再启动fenced模式前需要设定该GUC参数。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，长度大于等于0

**默认值**： ''

