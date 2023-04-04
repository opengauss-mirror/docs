# 用户自定义函数<a name="ZH-CN_TOPIC_0000001130221229"></a>

## udf\_memory\_limit<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section1765913299426"></a>

**参数说明：**控制每个数据库节点执行UDF时可用的最大物理内存量。本参数当前版本不生效，请使用FencedUDFMemoryLimit和UDFWorkerMemHardLimit参数控制fenced udf worker虚存。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，200\*1024～max\_process\_memory，单位为KB。

**默认值：**200MB

## FencedUDFMemoryLimit<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section0948171616421"></a>

**参数说明：**控制每个fenced udf worker进程使用的虚拟内存。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整数，0 \~ 2147483647，单位为KB，设置可带单位（KB，MB，GB）。其中0表示不做内存控制。

**默认值：**0

## UDFWorkerMemHardLimit<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section19591235141915"></a>

**参数说明：**控制fencedUDFMemoryLimit的最大值。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整数，0 \~ 2147483647，单位为KB，设置时可带单位（KB，MB，GB）。

**默认值：**1GB

## pljava\_vmoptions<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section867525320283"></a>

**参数说明**：用户自定义设置PL/Java函数所使用的JVM虚拟机的启动参数，仅sysadmin用户可以访问。

该参数属于SUSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串，支持：

-   JDK8 JVM启动参数（可参见JDK[官方](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html)说明）
-   JDK8 JVM系统属性参数（以–D开头如–Djava.ext.dirs，可参见JDK[官方](https://docs.oracle.com/javase/tutorial/deployment/doingMoreWithRIA/properties.html)说明）
-   用户自定义参数（以–D开头，如–Duser.defined.option）

>![](public_sys-resources/icon-notice.gif) **须知：** 
>如果用户在pljava\_vmoptions中设置参数不满足上述取值范围，会在使用PL/Java语言函数时报错。此参数的详细说明参见[PL/pgSQL语言函数](../SQLReference/PL-pgSQL语言函数.md)。

**默认值：**空

