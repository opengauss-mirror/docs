# Undo<a name="ZH-CN_TOPIC_0000001129789643"></a>

## undo\_space\_limit\_size<a name="section13674152315117"></a>

**参数说明：**用于控制undo强制回收阈值，达到阈值的80%启动强制回收。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，800M\~32TB

**默认值：**2GB

## undo\_limit\_size\_per\_transaction<a name="section5346124411546"></a>

**参数说明：**用于控制单事务undo分配空间阈值，达到阈值时事务报错回滚。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，100M\~32TB

**默认值：**1GB

