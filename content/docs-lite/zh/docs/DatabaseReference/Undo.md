# Undo<a name="ZH-CN_TOPIC_0000001129789643"></a>

## undo\_space\_limit\_size<a name="section13674152315117"></a>

**参数说明：** 用于控制undo强制回收阈值，达到阈值的80%启动强制回收，用户需要根据自己的业务情况，设置该值，可以通过先设置一个较大值，然后观察实际业务运行占用undo空间，再将该值调整为合理值。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 整型，800MB\~16TB

**默认值：** 256GB

## undo\_limit\_size\_per\_transaction<a name="section5346124411546"></a>

**参数说明：** 用于控制单事务undo分配空间阈值，达到阈值时事务报错回滚。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：** 整型，2MB\~16TB

**默认值：** 32GB

