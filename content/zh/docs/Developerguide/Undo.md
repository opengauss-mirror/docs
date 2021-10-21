# Undo<a name="ZH-CN_TOPIC_0000001129789643"></a>

## undo\_space\_limit\_size<a name="section13674152315117"></a>

**参数说明：**用于控制undo强制回收阈值，达到阈值的80%启动强制回收。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，800M\~16TB

**默认值：**32GB

## undo\_limit\_size\_per\_transaction<a name="section5346124411546"></a>

**参数说明：**用于控制单事务undo分配空间阈值，达到阈值时事务报错回滚。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，2M\~16TB

**默认值：**32GB

## undo\_zone\_count<a name="section172423491244"></a>

**参数说明：**用于控制在内存中可分配的undo zone数量，达到阈值或本次设置的数值小于上次时报错，重新按规则设置合理取值后可恢复正常。当参数设置为0时，禁用undo，禁止创建ustore表。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~1,048,576

取值约束：

1. 本次设置数值不得小于上次设置的数值，设置错误时会导致数据库无法正常恢复，重新合理设置后重启数据库可恢复正常。

2. 当前undo\_zone\_count取值需要根据max\_connections来调节设置，修改max\_connections取值后，需对应修改undo\_zone\_count，取值规则为max\_connections取值的4倍。

**默认值：**0

