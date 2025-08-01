# Query

## instr\_unique\_sql\_count<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section983311682019"></a>

**参数说明**： 控制系统中unique sql信息实时收集功能。配置为0表示不启用unique sql信息收集功能。

该值由大变小将会清空系统中原有的数据重新统计（备机不支持此能力）；从小变大不受影响。

当系统中产生的unique sql条目数量（dbe_perf.statement/dbe_perf.summary_statement统计）大于instr\_unique\_sql\_count时，若开启了unique sql自动淘汰，则系统会按unique sql的更新时间由远到近自动淘汰10%的条目，使得新产生的unique sql信息可以继续被统计。若没有开启自动淘汰，则系统产生的新的unique sql信息将不再被统计。

在x86平台集中式部署下，硬件配置规格为32核CPU/256GB内存，使用Benchmark SQL 5.0工具测试性能，开关此参数性能影响约3%。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~2147483647

**默认值**：100

>![](public_sys-resources/icon-caution.png) **注意：** 
>-   在开启自动淘汰的情况下，如果该值设置的较小，可能会导致系统频繁的进行自动淘汰，有可能会影响数据库系统性能，所以实际场景中建议不要将该值设置的过小，建议值为200000。
>
>-   在开启自动淘汰的情况下，如果该值设置的较大（例如38347922），清理过程中可能会引发大内存问题而无法清理。

## instr\_unique\_sql\_track\_type<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section88591117185212"></a>

**参数说明**： unique sql记录SQL方式。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 枚举类型

top：代表只记录顶层SQL。
all: 代表记录全部的SQL（包括存储过程及函数内的sql语句）。

**默认值**：top

## enable\_instr\_rt\_percentile<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section137313294592"></a>

**参数说明**： 是否开启计算系统中80%和95%的SQL响应时间的功能。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

-   on：表示打开SQL响应时间信息计算功能。
-   off：表示关闭SQL响应时间信息计算功能。

**默认值**：on

## percentile<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section193531235231"></a>

**参数说明**： SQL响应时间百分比信息，后台计算线程根据设置的值计算相应的百分比信息。

该参数属于INTERNAL类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串。

**默认值**：80,95

## instr\_rt\_percentile\_interval<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section1658494717518"></a>

**参数说明**： SQL响应时间信息计算间隔，SQL响应时间信息计算功能打开后，后台计算线程每隔设置的时间进行一次计算。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0～3600，单位为秒。

**默认值**：10s

## enable\_instr\_cpu\_timer<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section1261620172577"></a>

**参数说明**： 是否捕获SQL执行的cpu时间消耗 。

在x86平台集中式部署下，硬件配置规格为32核CPU/256GB内存，使用Benchmark SQL 5.0工具测试性能，开关此参数性能影响约3.5%。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

-   on：表示捕获SQL执行的CPU时间消耗。
-   off：表示不捕获SQL执行的CPU时间消耗。

**默认值**：on

## enable\_stmt\_track<a name="section148515311729"></a>

**参数说明**： 控制是否启用Full /Slow SQL特性。

在x86平台集中式部署下，硬件配置规格为32核CPU/256GB内存，使用Benchmark SQL 5.0工具测试性能，开关此参数性能影响约1.2%。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

-   on：表示开启Full /Slow SQL捕获。
-   off：表示关闭Full /Slow SQL捕获。

**默认值**： on

## track\_stmt\_session\_slot<a name="section1768054315510"></a>

**参数说明**： 设置一个session缓存的最大的全量/慢SQL的数量，超过这个数量，新的语句执行将不会被跟踪，直到落盘线程将缓存语句落盘，留出空闲的空间。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0 \~ 2147483647

**默认值**： 1000

## track\_stmt\_details\_size<a name="section584919463"></a>

**参数说明**： 设置单语句可以收集的最大的执行事件的大小（byte）。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0 \~ 100000000

**默认值**： 4096

## track\_stmt\_trace\_size<a name="section584919463"></a>

**参数说明**： 设置单语句可以收集的最大全链路追踪trace信息的大小\(byte\)。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，0 \~ 100000000

**默认值**： 4096

## track\_stmt\_retention\_time<a name="section16119247614"></a>

**参数说明**： 组合参数，控制全量/慢SQL记录的保留时间。以60秒为周期读取该参数，并执行清理超过保留时间的记录，仅sysadmin用户可以访问。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符型

该参数分为两部分，形式为'full sql retention time, slow sql retention time'

full sql retention time为全量SQL的保留时间，取值范围为0 \~ 86400

slow sql retention time为慢SQL的保留时间，取值范围为0 \~ 604800

**默认值**： 3600,604800

## track\_stmt\_stat\_level<a name="section194516368610"></a>

**参数说明**： 控制语句执行跟踪的级别。

该参数属于USERSET类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置，不区分英文字母大小写。

**取值范围**： 字符型

该参数分为两部分，形式为'full sql stat level, slow sql stat level'

full sql stat level为全量SQL跟踪级别，取值范围为OFF、L0、L1、L2

slow sql stat level为慢SQL的跟踪级别，取值范围为OFF、L0、L1、L2

>![](public_sys-resources/icon-note.png) **说明：** 
>若全量SQL跟踪级别值为非OFF时，当前SQL跟踪级别值为全量SQL和慢SQL的较高级别（L2 \> L1 \> L0），级别说明请参见《数据库参考》的“系统表和系统视图 > 系统表 > STATEMENT_HISTORY”中的“STATEMENT_HISTORY字段”表格。

**默认值**： OFF,L0

## enable\_auto\_clean\_unique\_sql<a name="section7679208201"></a>

**参数说明**： 当系统中产生的unique sql条目数量大于等于instr\_unique\_sql\_count时，是否启用unique sql自动淘汰功能。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

**默认值**： off

>![](public_sys-resources/icon-caution.png) **注意：** 
>由于快照有部分信息是来源于unique sql，所以开启自动淘汰的情况下，在生成wdr报告时，如果选择的起始快照和终止快照跨过了淘汰发生的时间，会导致无法生成wdr报告。

## enable\_slow\_query\_log（废弃）<a name="section19769519201515"></a>

**参数说明**： 是否将慢查询信息写到日志文件中，在该版本中已废弃。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型

-   on：表示需要将慢查询信息写到日志文件中。
-   off：表示不需要将慢查询信息写到日志文件中。

**默认值**：on

## query\_log\_file（废弃）<a name="zh-cn_topic_0059778787_s3226ae3209154e249928c24ec67c5809"></a>

**参数说明**： GUC参数enable\_slow\_query\_log设置为ON，表示需要将慢查询记录写进日志文件中，query\_log\_file决定服务器慢查询日志文件的名称，仅sysadmin用户可以访问。通常日志文件名是按照strftime模式生成，因此可以用系统时间定义日志文件名，用%转义字符实现，在该版本中已废弃。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>建议使用%转义字符定义日志文件名称，否则难以对日志文件进行有效的管理。

**取值范围**： 字符串

**默认值**： slow\_query\_log-%Y-%m-%d\_%H%M%S.log

## track\_stmt\_standby\_chain_size<a name="section16119247614"></a>

**参数说明**： 组合参数，控制备机快/慢SQL记录的最大占用内存与磁盘空间。以60秒为周期读取该参数，并执行清理超过保留时间的记录，仅sysadmin用户可以访问。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符型

该参数分为四部分，形式为'fast sql memory size, fast sql disk size, slow sql memory size, slow sql disk size'
在主机上，full sql为全量sql，存储在一张unlogged表上，slow sql为其中慢的那部分sql。在备机中我们将非slow的那部分称为fast sql，slow与fast分开存放于不同位置，因此额外使用了四个值进行控制。

- fast sql memory size 为保留的快SQL的最大内存占用空间，取值范围为 \[16, 1024\]，单位为MB。

- fast sql disk size 为保留的快SQL的最大磁盘占用空间，取值范围为 \[512, 1048576\]，单位为MB。

- slow sql memory size 为保留的慢SQL的最大内存占用空间，取值范围为 \[16, 1024\]，单位为MB。

- slow sql disk size 为保留的慢SQL的最大磁盘占用空间，取值范围为 \[512, 1048576\]，单位为MB。

注意其中快慢SQL各自对应的内存值不可大于磁盘值。

清理时按照每16M数据的粒度进行清理，因此最大会有16M数据量的延迟误差。

**默认值**： 32, 1024, 16, 512

## asp_log_directory

**参数说明**： asp_flush_mode设置为all或者file时，asp_log_directory决定存放服务器asp日志文件的目录。它可以是绝对路径，或者是相对路径（相对于数据目录的路径），仅sysadmin用户可以访问。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>当配置文件中asp_log_directory的值为非法路径时，会导致数据库实例无法重新启动。

>![](public_sys-resources/icon-notice.png) **说明：** 
>
>-  合法路径：用户对此路径有读写权限。
>
>-  非法路径：用户对此路径无读写权限。

**取值范围**：字符串。

**默认值**：安装时指定。

## query_log_directory（废弃）
**参数说明**：enable_slow_query_log设置为on时，query_log_directory决定存放服务器慢查询日志文件的目录，仅sysadmin用户可以访问。它可以是绝对路径，或者是相对路径（相对于数据目录的路径），在该版本中已废弃。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。
>![](public_sys-resources/icon-notice.png) **须知：** 
>
>
>当配置文件中query_log_directory的值为非法路径时，会导致数据库实例无法重新启动。

>![](public_sys-resources/icon-notice.png) **说明：** 
>
>-  合法路径：用户对此路径有读写权限。
>-  非法路径：用户对此路径无读写权限。

**取值范围**：字符串。

**默认值**：安装时指定。

## unique_sql_retention_time
**参数说明**：清理unique sql哈希表的间隔，默认为30分钟。

该参数属于SIGHUP类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，1~3650，单位为分钟。

**默认值**：30min


## perf_directory
**参数说明**：perf_directory决定性能视图打点任务输出文件的目录，仅sysadmin用户可以访问。它可以是绝对路径，或者是相对路径（相对于数据目录的路径）。

该参数属于POSTMASTER类型参数，请参考[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

- 合法路径：用户对此路径有读写权限。
- 非法路径：用户对此路径无读写权限。

**取值范围** ：字符串

**默认值**：安装时指定。
