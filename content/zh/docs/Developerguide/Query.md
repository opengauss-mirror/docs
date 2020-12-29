# Query<a name="ZH-CN_TOPIC_0289900490"></a>

## instr\_unique\_sql\_count<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section983311682019"></a>

**参数说明：**控制系统中unique sql信息实时收集功能。配置为0表示不启用unique sql信息收集功能。

该值由大变小将会清空系统中原有的数据重新统计；从小变大不受影响。

当系统中产生的unique sql信息大于instr\_unique\_sql\_count时，系统产生的unique sql信息不被统计。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整形 0\~INT\_MAX

**默认值**：100

## instr\_unique\_sql\_track\_type<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section88591117185212"></a>

**参数说明：**unique sql记录SQL方式。

该参数属于INTERNAL类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举类型

-   top：只记录顶层SQL。

**默认值**：top

## enable\_instr\_rt\_percentile<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section137313294592"></a>

**参数说明：**是否开启计算系统中80%和95%的SQL响应时间的功能

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示打开sql响应时间信息计算功能。
-   off：表示关闭sql响应时间信息计算功能。

**默认值**：on

## percentile<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section193531235231"></a>

**参数说明：**sql响应时间百分比信息，后台计算线程根据设置的值计算相应的百分比信息。

该参数属于INTERNAL类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串。

**默认值**："80，95"

## instr\_rt\_percentile\_interval<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section1658494717518"></a>

**参数说明：**sql响应时间信息计算间隔，sql响应时间信息计算功能打开后，后台计算线程每隔设置的时间进行一次计算。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0～3600（秒）。

**默认值**：10s

## enable\_instr\_cpu\_timer<a name="zh-cn_topic_0283137149_zh-cn_topic_0237124756_section1261620172577"></a>

**参数说明：**是否捕获sql执行的cpu时间消耗 。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示捕获sql执行的cpu时间消耗。
-   off：表示不捕获sql执行的cpu时间消耗。

**默认值**：on

## enable\_stmt\_track<a name="section148515311729"></a>

**参数说明：**控制是否启用Full /Slow SQL特性。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示开启Full /Slow SQL捕获
-   off：表示关闭Full /Slow SQL捕获

**默认值：**on

## track\_stmt\_session\_slot<a name="section1768054315510"></a>

**参数说明：**设置一个session缓存的最大的全量/慢SQL的数量，超过这个数量，新的语句执行将不会被跟踪，直到落盘线程将缓存语句落盘，留出空闲的空间。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0 \~ 2147483647

**默认值：**1000

## track\_stmt\_details\_size<a name="section584919463"></a>

**参数说明：**设置单语句可以收集的最大的执行事件的大小\(byte\)。

该参数属于USERSET类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0 \~ 100000000

**默认值：**4096

## track\_stmt\_retention\_time<a name="section16119247614"></a>

**参数说明：**组合参数，控制全量/慢SQL记录的保留时间。以60秒为周期读取该参数，并执行清理超过保留时间的记录。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符型

该参数分为两部分，形式为'full sql retention time, slow sql retention time'

full sql retention time为全量SQL保留时间，取值范围为0 \~ 86400

slow sql retention time为慢SQL的保留时间，取值范围为0 \~ 604800

**默认值：**3600,604800

## track\_stmt\_stat\_level<a name="section194516368610"></a>

**参数说明：**控制语句执行跟踪的级别。

该参数属于USERSET类型参数，请参考[表1](zh-cn_topic_0289899927.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置，不区分英文字母大小写。

**取值范围：**字符型

该参数分为两部分，形式为'full sql stat level, slow sql stat level'

第一部分为全量SQL跟踪级别，取值范围为OFF、L0、L1、L2

第二部分为慢SQL的跟踪级别，取值范围为OFF、L0、L1、L2

**默认值：**OFF,L0

