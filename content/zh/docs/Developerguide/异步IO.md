# 异步IO<a name="ZH-CN_TOPIC_0289900399"></a>

## enable\_adio\_debug<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_se65f9465acfb40c68abb51eaaaf44836"></a>

**参数说明：**允许维护人员输出一些与ADIO相关的日志，便于定位ADIO相关问题。开发人员专用，不建议普通用户使用。

该参数属于SUSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on/true表示开启此日志开关。
-   off/false表示关闭此日志开关。

**默认值：**off

>![](public_sys-resources/icon-note.gif) **说明：** 
>当前版本暂不支持打开该开关，即使用户手动设置为打开，系统内部也会自动设置为关闭状态。

## enable\_adio\_function<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_s070bd0423484454ab3a16267f8bf30d5"></a>

**参数说明：**是否开起ADIO功能。

该参数属于INTERNAL类型参数，为固定参数，用户无法修改此参数，只能查看。

>![](public_sys-resources/icon-note.gif) **说明：** 
>当前版本暂不支持开启异步IO功能，默认该功能关闭。

**取值范围：**布尔型

-   on/true表示开启此功能。
-   off/false表示关闭此功能。

**默认值：**off

## enable\_fast\_allocate<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_s86e90d3aa1464dae81fba7477c24693d"></a>

**参数说明：**磁盘空间快速分配开关。

该参数属于SUSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。只有在XFS文件系统上才能开启该开关。

**取值范围：**布尔型

-   on/true表示开启此功能。
-   off/false表示关闭此功能。

**默认值：**off

## prefetch\_quantity<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_sc94be8a95eee46e8b7316377d65b4327"></a>

**参数说明：**描述行存储使用ADIO预读取IO量的大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，128～131072，单位为8KB。

**默认值：**32MB \(4096 \* 8KB\)

## backwrite\_quantity<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_se8fde9e4908d47a4a226b3d62368382f"></a>

**参数说明：**描述行存储使用ADIO写入IO量的大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，128～131072，单位为8KB。

**默认值：**8MB \(1024 \* 8KB\)

## cstore\_prefetch\_quantity<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_s02ecbe9ffe6b46c486c29ab257c047ed"></a>

**参数说明：**描述列存储使用ADIO预取IO量的大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1024～1048576，单位为KB。

**默认值：**32MB

## cstore\_backwrite\_quantity<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_s59cb4900a93f4259a7ead02eb4ae8039"></a>

**参数说明：**描述列存储使用ADIO写入IO量的大小。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1024～1048576，单位为KB。

**默认值：**8MB

## cstore\_backwrite\_max\_threshold<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_s3116bb20784d4f24bfb6d692cb967d0f"></a>

**参数说明：**描述列存储使用ADIO写入数据库可缓存最大的IO量。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，4096～INT\_MAX/2，单位为KB。

**默认值：**2GB

## fast\_extend\_file\_size<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_sb249994654ee41b9af57236de991c43e"></a>

**参数说明：**描述列存储使用ADIO预扩展磁盘的大小。

该参数属于SUSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1024～1048576，单位为KB。

**默认值：**8MB

## effective\_io\_concurrency<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_section51899381171145"></a>

**参数说明：**磁盘子系统可以同时有效处理的请求数。对于RAID阵列，此参数应该是阵列中驱动器主轴的数量。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~1000

**默认值：**1

## checkpoint\_flush\_after<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section1827711441139"></a>

**参数说明**：设置checkpointer线程刷页个数超过设定的阈值时，告知操作系统开始将操作系统缓存中的页面异步刷盘。openGauss中，磁盘页大小为8KB。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~256（0表示关闭异步刷盘功能）。例如，取值32，表示checkpointer线程连续写32个磁盘页，即32\*8=256KB磁盘空间后会进行异步刷盘。

**默认值**：32

## bgwriter\_flush\_after<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section5339114713229"></a>

**参数说明**：设置background writer线程刷页个数超过设定的阈值时，告知操作系统开始将操作系统缓存中的页面异步刷盘。openGauss中，磁盘页大小为8KB。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~256（0表示关闭异步刷盘功能），单位页面（8KB）。例如，取值64，表示background writer线程连续写64个磁盘页，即64\*8=512KB磁盘空间后会进行异步刷盘。

**默认值**：512KB（即64个页面）

## backend\_flush\_after<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section9929104982217"></a>

**参数说明**：设置backend线程刷页个数超过设定的阈值时，告知操作系统开始将操作系统缓存中的页面异步刷盘。openGauss中，磁盘页大小为8KB。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~256（0表示关闭异步刷盘功能），单位页面（8KB）。例如，取值64，表示backend线程连续写64个磁盘页，即64\*8=512KB磁盘空间后会进行异步刷盘。

**默认值**：0

