# HyperLogLog<a name="ZH-CN_TOPIC_0000001083204098"></a>

## hll\_default\_log2m<a name="section189901634112519"></a>

**参数说明：**该参数可以指定hll数据结构桶的个数。桶的个数会影响hll计算distinct值的精度，桶的个数越多，误差越小。误差范围为：\[-1.04/2<sup>log2m\*1/2</sup>,+1.04/2<sup>log2m\*1/2</sup>\]。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，10\~16。

**默认值：**14

## hll\_default\_log2explicit<a name="section99475155812"></a>

**参数说明：**该参数可以用来设置从Explicit模式到Sparse模式的默认阈值大小。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~12。0表示跳过Explicit模式，取1-12表示在基数到达2<sup>hll\_default\_log2explicit</sup>时切换模式。

**默认值：**10

## hll\_default\_log2sparse<a name="section15941451165814"></a>

**参数说明：**该参数可以用来设置从Sparse模式到Full模式的默认阈值大小。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~14。0表示跳过Explicit模式，取1-14表示在基数到达2<sup>hll\_default\_log2sparse</sup>时切换模式。

**默认值：**12

## hll\_duplicate\_check<a name="section9951511589"></a>

**参数说明：**该参数可以用来指定是否默认开启duplicatecheck。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**0，1。0表示默认关闭，1表示默认开启

**默认值：**0

## hll\_default\_regwidth（废弃）<a name="section185791437112511"></a>

**参数说明：**该参数可以指定hll数据结构每个桶的位数，该值越大，hll所占内存越高。hll\_default\_regwidth和hll\_default\_log2m可以决定当前hll能够计算的最大distinct value。当前regwidth设为固定值，该参数不再使用。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~5。

**默认值：**5

## hll\_default\_expthresh（废弃）<a name="section7204342573"></a>

**参数说明：**该参数可以用来设置从Explicit模式到Sparse模式的默认阈值大小。当前已经使用参数hll\_default\_log2explicit替代类似功能。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，-1\~7。-1表示自动模式，0表示跳过Explicit模式，取1-7表示在基数到达2<sup>hll\_default\_expthresh</sup>时切换模式。

**默认值：**-1

## hll\_default\_sparseon（废弃）<a name="section95372411258"></a>

**参数说明：**该参数可用来指定是否默认开启Sparse模式。当前已经使用参数hll\_default\_log2sparse替代类似功能，hll\_default\_log2sparse设置为0时关闭Sparse模式。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**0，1。0表示默认关闭，1表示默认开启。

**默认值：**1

## hll\_max\_sparse（废弃）<a name="section13489114392513"></a>

**参数说明：**该参数可以用来指定max\_sparse的大小。当前已经使用参数hll\_default\_log2sparse替代类似功能。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，-1\~2147483647‬

**默认值：**-1

## enable\_compress\_hll（废弃）<a name="section72971133088"></a>

**参数说明：**该参数可以用来指定是否对hll开启内存优化模式。目前hll内存已经进行了优化设计，该参数不再使用。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on/true表示对hll开启内存优化模式。
-   off/false表示不开启内存优化模式。

**默认值：**off

