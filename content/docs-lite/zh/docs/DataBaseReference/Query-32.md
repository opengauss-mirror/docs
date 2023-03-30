# Query<a name="ZH-CN_TOPIC_0289900490"></a>

## instr\_unique\_sql\_count<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section983311682019"></a>

**参数说明：**控制系统中unique sql信息实时收集功能。配置为0表示不启用unique sql信息收集功能。

该值由大变小将会清空系统中原有的数据重新统计（备机不支持此能力）；从小变大不受影响。

当系统中产生的unique sql条目数量大于instr\_unique\_sql\_count时，若开启了unique sql自动淘汰，则系统会按unique sql的更新时间由远到近自动淘汰一定比例的条目，使得新产生的unique sql信息可以继续被统计。若没有开启自动淘汰，则系统产生的新的unique sql信息将不再被统计。

在x86平台集中式部署下, 硬件配置规格为32U256G, 使用Benchmark SQL 5.0工具测试性能, 开关此参数性能影响约3%。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~2147483647

**默认值**：100

>![](public_sys-resources/icon-caution.gif) **注意：** 
>
>-   在开启自动淘汰的情况下，如果该值设置的较小，可能会导致系统频繁的进行自动淘汰，有可能会影响数据库系统性能，所以实际场景中建议不要将该值设置的过小，建议值为200000。
>-   在开启自动淘汰的情况下，如果该值设置的较大（例如38347922），清理过程中可能会引发大内存问题而无法清理。

## instr\_unique\_sql\_track\_type<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section88591117185212"></a>

**参数说明：**unique sql记录SQL方式。

该参数属于INTERNAL类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举类型

top：只记录顶层SQL。

**默认值**：top

## enable\_instr\_rt\_percentile<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section137313294592"></a>

**参数说明：**是否开启计算系统中80%和95%的SQL响应时间的功能

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示打开sql响应时间信息计算功能。
-   off：表示关闭sql响应时间信息计算功能。

**默认值**：off

## percentile<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section193531235231"></a>

**参数说明：**sql响应时间百分比信息，后台计算线程根据设置的值计算相应的百分比信息。

该参数属于INTERNAL类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串。

**默认值**：80,95

## instr\_rt\_percentile\_interval<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section1658494717518"></a>

**参数说明：**sql响应时间信息计算间隔，sql响应时间信息计算功能打开后，后台计算线程每隔设置的时间进行一次计算。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0～3600（秒）。

**默认值**：10s

## enable\_instr\_cpu\_timer<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section1261620172577"></a>

**参数说明：**是否捕获sql执行的cpu时间消耗 。

在x86平台集中式部署下, 硬件配置规格为32U256G, 使用Benchmark SQL 5.0工具测试性能, 开关此参数性能影响约3.5%。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示捕获sql执行的cpu时间消耗。
-   off：表示不捕获sql执行的cpu时间消耗。

**默认值**：on

## enable\_stmt\_track<a name="section148515311729"></a>

**参数说明：**控制是否启用Full /Slow SQL特性。

在x86平台集中式部署下, 硬件配置规格为32U256G, 使用Benchmark SQL 5.0工具测试性能, 开关此参数性能影响约1.2%。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示开启Full /Slow SQL捕获
-   off：表示关闭Full /Slow SQL捕获

**默认值：**off

## track\_stmt\_parameter<a name="section12141123162714"></a>

参数说明：开启track\_stmt\_parameter后，在statement\_history中记录的执行语句不再进行归一化操作，可以显示完整SQL语句信息，辅助DBA进行问题定位。其中对于简单查询，显示完整语句信息；对于PBE语句，显示完整语句信息的同时，追加每个变量数值信息，格式为“query string；parameters:$1=value1,$2=value2,...”。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

取值范围：布尔型

-   on：表示开启显示完整SQL语句信息的功能
-   off：表示关闭显示完整SQL语句信息的功能

默认值：off

## track\_stmt\_session\_slot<a name="section1768054315510"></a>

**参数说明：**设置一个session缓存的最大的全量/慢SQL的数量，超过这个数量，新的语句执行将不会被跟踪，直到落盘线程将缓存语句落盘，留出空闲的空间。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0 \~ 2147483647

**默认值：**1000

## track\_stmt\_details\_size<a name="section584919463"></a>

**参数说明：**设置单语句可以收集的最大的执行事件的大小\(byte\)。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0 \~ 100000000

**默认值：**4096

## track\_stmt\_retention\_time<a name="section16119247614"></a>

**参数说明：**组合参数，控制全量/慢SQL记录的保留时间。以60秒为周期读取该参数，并执行清理超过保留时间的记录，仅sysadmin用户可以访问。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符型

该参数分为两部分，形式为'full sql retention time, slow sql retention time'

full sql retention time为全量SQL保留时间，取值范围为0 \~ 86400

slow sql retention time为慢SQL的保留时间，取值范围为0 \~ 604800

**默认值：**3600,604800

## track\_stmt\_stat\_level<a name="section194516368610"></a>

**参数说明：**控制语句执行跟踪的级别。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置，不区分英文字母大小写。

**取值范围：**字符型

该参数分为两部分，形式为'full sql stat level, slow sql stat level'

第一部分为全量SQL跟踪级别，取值范围为OFF、L0、L1、L2

第二部分为慢SQL的跟踪级别，取值范围为OFF、L0、L1、L2

>![](public_sys-resources/icon-note.gif) **说明：** 
>若全量SQL跟踪级别值为非OFF时，当前SQL跟踪级别值为全量SQL和慢SQL的较高级别（L2 \> L1 \>L0），级别说明请参见《数据库参考》的“系统表和系统视图 > 系统表 > STATEMENT_HISTORY”中的“STATEMENT_HISTORY字段”表格。

**默认值：**OFF,L0

## enable\_auto\_clean\_unique\_sql<a name="section7679208201"></a>

**参数说明：**当系统中产生的unique sql条目数量大于等于instr\_unique\_sql\_count时，是否启用unique sql自动淘汰功能。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

**默认值：**off

>![](public_sys-resources/icon-caution.gif) **注意：** 
>
>由于快照有部分信息是来源于unique sql，所以开启自动淘汰的情况下，在生成wdr报告时，如果选择的起始快照和终止快照跨过了淘汰发生的时间，会导致无法生成wdr报告。

## enable\_slow\_query\_log（废弃）<a name="section19769519201515"></a>

**参数说明：**是否将慢查询信息写到日志文件中，在该版本中已废弃。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示需要将慢查询信息写到日志文件中。
-   off：表示不需要将慢查询信息写到日志文件中。

**默认值**：on

## query\_log\_file（废弃）<a name="zh-cn_topic_0059778787_s3226ae3209154e249928c24ec67c5809"></a>

**参数说明：**GUC参数enable\_slow\_query\_log设置为ON，表示需要将慢查询记录写进日志文件中，query\_log\_file决定服务器慢查询日志文件的名称，仅sysadmin用户可以访问。通常日志文件名是按照strftime模式生成，因此可以用系统时间定义日志文件名，用%转义字符实现，在该版本中已废弃。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>建议使用%转义字符定义日志文件名称，否则难以对日志文件进行有效的管理。

**取值范围：**字符串

**默认值：**slow\_query\_log-%Y-%m-%d\_%H%M%S.log

