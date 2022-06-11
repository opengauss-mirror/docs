# Query<a name="ZH-CN_TOPIC_0242371546"></a>

## instr\_unique\_sql\_count<a name="zh-cn_topic_0237124756_section983311682019"></a>

**参数说明：**控制系统中unique sql信息实时收集功能。配置为0表示不启用unique sql信息收集功能。

该值由大变小将会清空系统中原有的数据重新统计；从小变大不受影响。

当系统中产生的unique sql条目数量大于instr\_unique\_sql\_count时，若开启了unique sql自动淘汰，则系统会按unique sql的更新时间由远到近自动淘汰一定比例的条目，使得新产生的unique sql信息可以继续被统计，若没有开启自动淘汰，则系统产生的新的unique sql信息将不再被统计。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整型，0\~INT\_MAX

**默认值**：100

**注意事项**

-   在开启自动淘汰的情况下，如果该值设置的较小，可能会导致系统频繁的进行自动淘汰，有可能会影响数据库系统性能，所以实际场景中建议不要将该值设置的过小，建议值200000。
-   在开启自动淘汰的情况下，如果该值设置的较大（38347922），清理过程中可能会引发大内存问题而无法清理。

## instr\_unique\_sql\_track\_type<a name="zh-cn_topic_0237124756_section88591117185212"></a>

**参数说明：**unique sql记录SQL方式。

该参数属于INTERNAL类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举类型

-   top：只记录顶层SQL。

**默认值**：top

## enable\_instr\_rt\_percentile<a name="zh-cn_topic_0237124756_section137313294592"></a>

**参数说明：**是否开启计算系统中80%和95%的SQL响应时间的功能

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示打开sql响应时间信息计算功能。
-   off：表示关闭sql响应时间信息计算功能。

**默认值**：on

## percentile<a name="zh-cn_topic_0237124756_section193531235231"></a>

**参数说明：**sql响应时间百分比信息，后台计算线程根据设置的值计算相应的百分比信息。

该参数属于INTERNAL类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串。

**默认值**：80,95

## instr\_rt\_percentile\_interval<a name="zh-cn_topic_0237124756_section1658494717518"></a>

**参数说明：**sql响应时间信息计算间隔，sql响应时间信息计算功能打开后，后台计算线程每隔设置的时间进行一次计算。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0～3600（秒）。

**默认值**：10s

## enable\_instr\_cpu\_timer<a name="zh-cn_topic_0237124756_section1261620172577"></a>

**参数说明**：是否捕获sql执行的cpu时间消耗 。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示捕获sql执行的cpu时间消耗。
-   off：表示不捕获sql执行的cpu时间消耗。

**默认值**：on

## enable\_auto\_clean\_unique\_sql

**参数说明：**当系统中产生的unique sql条目数量大于等于instr\_unique\_sql\_count时，是否启用unique sql自动淘汰功能。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：**布尔型

**默认值**：off

**注意事项**

-   由于快照有部分信息是来源于unique sql，所以开启自动淘汰的情况下，在生成wdr报告时，如果选择的起始快照和终止快照跨过了淘汰发生的时间，会导致无法生成wdr报告。

## unique\_sql\_clean\_ratio

**参数说明：**当系统中产生的unique sql条目数量大于等于instr\_unique\_sql\_count时，每次自动淘汰的unique sql条目数量占总条目数量预设上限instr\_unique\_sql\_count的比例。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：double类型，0~0.2

**默认值**：0.1

**注意事项**

-   该值设置过小每次清理的条目较少，可能会导致频繁进行清理；设置过大时每次清理的条目较多，可能会导致频繁插入。建议值0.1。
-   unique\_sql\_clean\_ratio设置为0不代表关闭自动淘汰功能，请通过enable\_auto\_clean\_unique\_sql来控制是否开启自动淘汰。当开启自动淘汰，且将unique\_sql\_clean\_ratio设置为0时，将自动把unique\_sql\_clean\_ratio重置为默认值0.1。

## track\_stmt\_standby\_chain_\size<a name="section16119247614"></a>

**参数说明：**组合参数，控制备机快/慢SQL记录的最大占用内存与磁盘空间。以60秒为周期读取该参数，并执行清理超过保留时间的记录，仅sysadmin用户可以访问。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符型

该参数分为四部分，形式为'fast sql memory size, fast sql disk size, slow sql memory size, slow sql disk size'
在主机上，full sql为全量sql，存储在一张unlogged表上，slow sql为其中慢的那部分sql。在备机中我们将非slow的那部分称为fast sql，slow与fast分开存放于不同位置，因此额外使用了四个值进行控制。

fast sql memory size 为保留的快SQL的最大内存占用空间，取值范围为 \[16, 1024\]，单位为MB。

fast sql disk size 为保留的快SQL的最大磁盘占用空间，取值范围为 \[512, 1048576\]，单位为MB。

slow sql memory size 为保留的慢SQL的最大内存占用空间，取值范围为 \[16, 1024\]，单位为MB。

slow sql disk size 为保留的慢SQL的最大磁盘占用空间，取值范围为 \[512, 1048576\]，单位为MB。

注意其中快慢SQL各自对应的内存值不可小于磁盘值。

清理时按照每16M数据的粒度进行清理，因此最大会有16M数据量的延迟误差。

**默认值：**32, 1024, 16, 512
