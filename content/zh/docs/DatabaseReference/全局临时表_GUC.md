# 全局临时表<a name="ZH-CN_TOPIC_0303812074"></a>

## max\_active\_global\_temporary\_table<a name="section18307271684"></a>

**参数说明：**全局临时表功能开关，控制是否可以创建全局临时表。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0 \~ 1000000

-   0：全局临时表功能关闭。
-   \> 0：全局临时表功能打开。

**默认值**：1000

## vacuum\_gtt\_defer\_check\_age<a name="section13404223104214"></a>

**参数说明：**vacuum执行后检查全局临时表relfrozenxid与普通表的差异。如果全局临时表relfrozenxid落后超过指定参数值，就产生WARNING。一般不用修改。

该参数USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0 \~ 1000000

**默认值**：10000

## enable_gtt_concurrent_truncate

**参数说明：**是否支持全局临时表truncate table和DML的并发执行，以及全局临时表truncate table和truncate table的并发执行。

该参数SIGHUP类型参数，请参考[表1](https://gitee.com/opengauss/docs/blob/33dd523b07ca669b90346b9831510ee891c05069/content/docs-lite/zh/docs/DeveloperGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

- on/true表示支持上述操作并发。
- off/false表示不支持上述操作并发。

**默认值：**on