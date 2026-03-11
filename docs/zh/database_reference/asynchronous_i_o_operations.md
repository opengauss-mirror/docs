# 异步IO

## enable\_adio\_function

**参数说明**： 是否开启ADIO功能。

该参数开启后，行存表的文件访问将采用直接IO，不经过操作系统页面缓存。同时，pagewriter线程对行存表页面刷盘以及vacuum full操作，将采用异步IO（libaio）的方式。
另外，astore行存表的顺序扫描也将采用异步IO进行预读。

该参数属于POSTMASTER类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

- on/true表示开启此功能。
- off/false表示关闭此功能。

**默认值**： off

## enable\_adio\_debug

**参数说明**： 允许维护人员输出一些与ADIO相关的日志，便于定位ADIO相关问题。开发人员专用，不建议普通用户使用。

该参数属于SUSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

- on/true表示开启此日志开关。
- off/false表示关闭此日志开关。

**默认值**： off

## adio\_buffer\_align\_size

**参数说明**： ADIO开启情况下内存buffer需要根据操作系统页面大小对齐，该参数指定openGauss中shared buffer内页面对齐大小。

该参数属于SUSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。只有在XFS文件系统上才能开启该开关。

**取值范围**：  整型，512～8192，单位为字节。

**默认值**： 8192

## adio\_reader\_thread\_num

**参数说明**： ADIO开启情况下，对异步读请求的后台IO后处理线程数量。

该参数属于SUSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。只有在XFS文件系统上才能开启该开关。

**取值范围**：  整型，1～10，单位为个。

**默认值**： 2

## adio\_writer\_thread\_num

**参数说明**： aio开启情况下，对异步写请求的后台IO后处理线程数量。

该参数属于SUSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。只有在XFS文件系统上才能开启该开关。

**取值范围**：  整型，1～10，单位为个。

**默认值**： 2

## enable\_fast\_allocate<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_s86e90d3aa1464dae81fba7477c24693d"></a>

**参数说明**： 磁盘空间快速分配开关。

该参数属于SUSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。只有在XFS文件系统上才能开启该开关。

**取值范围**： 布尔型

- on/true表示开启此功能。
- off/false表示关闭此功能。

**默认值**： off

## adio\_prefetch\_quantity<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_sc94be8a95eee46e8b7316377d65b4327"></a>

**参数说明**： 描述行存储astore表使用ADIO预读取IO量的大小。

该参数属于USERSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，128～131072，单位为8KB。

**默认值**： 32MB \(4096 \* 8KB\)

## backwrite\_quantity<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_se8fde9e4908d47a4a226b3d62368382f"></a>

**参数说明**： 描述行存储使用ADIO写入IO量的大小。

该参数属于USERSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，128～131072，单位为8KB。

**默认值**： 8MB \(1024 \* 8KB\)

## effective\_io\_concurrency<a name="zh-cn_topic_0283137248_zh-cn_topic_0237124704_zh-cn_topic_0059778686_section51899381171145"></a>

**参数说明**： 磁盘子系统可以同时有效处理的请求数。对于RAID阵列，此参数应该是阵列中驱动器主轴的数量。

该参数属于USERSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0\~1000

**默认值**： 1

## checkpoint\_flush\_after<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section1827711441139"></a>

**参数说明**：设置checkpointer线程刷页个数超过设定的阈值时，告知操作系统开始将操作系统缓存中的页面异步刷盘。openGauss中，磁盘页大小为8KB。

该参数属于SIGHUP类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~256（0表示关闭异步刷盘功能）。例如，取值32，表示checkpointer线程连续写32个磁盘页，即32\*8=256KB磁盘空间后会进行异步刷盘。

**默认值**：32

## bgwriter\_flush\_after<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section5339114713229"></a>

**参数说明**：设置background writer线程刷页个数超过设定的阈值时，告知操作系统开始将操作系统缓存中的页面异步刷盘。openGauss中，磁盘页大小为8KB。

该参数属于SIGHUP类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~256（0表示关闭异步刷盘功能），单位页面（8KB）。例如，取值64，表示background writer线程连续写64个磁盘页，即64\*8=512KB磁盘空间后会进行异步刷盘。

**默认值**：512KB（即64个页面）

## backend\_flush\_after<a name="zh-cn_topic_0283137548_zh-cn_topic_0237124743_section9929104982217"></a>

**参数说明**：设置backend线程刷页个数超过设定的阈值时，告知操作系统开始将操作系统缓存中的页面异步刷盘。openGauss中，磁盘页大小为8KB。

该参数属于USERSET类型参数，请参考[表1](../database_administration_guide/reset_parameters.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~256（0表示关闭异步刷盘功能），单位页面（8KB）。例如，取值64，表示backend线程连续写64个磁盘页，即64\*8=512KB磁盘空间后会进行异步刷盘。

**默认值**：0
