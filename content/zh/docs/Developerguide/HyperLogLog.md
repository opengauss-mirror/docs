# HyperLogLog<a name="ZH-CN_TOPIC_0000001083204098"></a>

## hll\_default\_log2explicit<a name="section99475155812"></a>

**参数说明：**该参数可以用来设置从Explicit模式到Sparse模式的默认阈值大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~12。0表示跳过Explicit模式，取1-12表示在基数到达2<sup>hll\_default\_log2explicit</sup>时切换模式。

**默认值：**10

## hll\_default\_log2sparse<a name="section15941451165814"></a>

**参数说明：**该参数可以用来设置从Sparse模式到Full模式的默认阈值大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~14。0表示跳过Explicit模式，取1-14表示在基数到达2<sup>hll\_default\_log2sparse</sup>时切换模式。

**默认值：**12

## hll\_duplicate\_check<a name="section9951511589"></a>

**参数说明：**该参数可以用来指定是否默认开启duplicatecheck。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**0，1。0表示默认关闭，1表示默认开启

**默认值：**0

## hll\_default\_expthresh（废弃）<a name="section7204342573"></a>

**参数说明：**该参数可以用来设置从Explicit模式到Sparse模式的默认阈值大小。当前已经使用参数hll\_default\_log2explicit替代类似功能。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，-1\~7。-1表示自动模式，0表示跳过Explicit模式，取1-7表示在基数到达2<sup>hll\_default\_expthresh</sup>时切换模式。

**默认值：**-1

## enable\_compress\_hll（废弃）<a name="section72971133088"></a>

**参数说明：**该参数可以用来指定是否对hll开启内存优化模式。目前hll内存已经进行了优化设计，该参数不再使用。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on/true表示对hll开启内存优化模式。
-   off/false表示不开启内存优化模式。

**默认值：**off

