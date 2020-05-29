# Query<a name="ZH-CN_TOPIC_0244544127"></a>

## instr\_unique\_sql\_count<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section983311682019"></a>

**参数说明：**控制系统中unique sql信息实时收集功能。配置为0表示不启用unique sql信息收集功能。

该值由大变小将会清空系统中原有的数据重新统计；从小变大不受影响。

当系统中产生的unique sql信息大于instr\_unique\_sql\_count时，系统产生的unique sql信息不被统计。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：整形 0\~INT\_MAX

**默认值**：100

## instr\_unique\_sql\_track\_type<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section88591117185212"></a>

**参数说明：**unique sql记录SQL方式。

该参数属于INTERNAL类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举类型

-   top：只记录顶层SQL。

**默认值**：top

## enable\_instr\_rt\_percentile<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section137313294592"></a>

**参数说明：**是否开启计算系统中80%和95%的SQL响应时间的功能

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示打开sql响应时间信息计算功能。
-   off：表示关闭sql响应时间信息计算功能。

**默认值**：on

## percentile<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section193531235231"></a>

**参数说明：**sql响应时间百分比信息，后台计算线程根据设置的值计算相应的百分比信息。

该参数属于INTERNAL类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串。

**默认值**："80，95"

## instr\_rt\_percentile\_interval<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section1658494717518"></a>

**参数说明：**sql响应时间信息计算间隔，sql响应时间信息计算功能打开后，后台计算线程每隔设置的时间进行一次计算。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0～3600（秒）。

**默认值**：10s

## enable\_instr\_cpu\_timer<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section1261620172577"></a>

**参数说明：是否捕获sql执行的cpu**时间消耗 。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示捕获sql执行的cpu时间消耗。
-   off：表示不捕获sql执行的cpu时间消耗。

**默认值**：on

## enable\_slow\_query\_log<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_section19769519201515"></a>

**参数说明：是否**将慢查询信息写到日志文件中 。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on：表示需要将慢查询信息写到日志文件中。
-   off：表示不需要将慢查询信息写到日志文件中。

**默认值**：on

## query\_log\_directory<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_zh-cn_topic_0059778787_sfbedf09fcf1a4223a4538679f80f12a9"></a>

**参数说明：**GUC参数enable\_slow\_query\_log设置为ON，表示需要将慢查询记录写进日志文件中，query\_log\_directory决定存放服务器慢查询日志文件的目录。 它可以是绝对路径，或者是相对路径（相对于数据目录的路径）。query\_log\_directory支持动态修改，可以通过gs\_guc reload实现。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>-   当配置文件中query\_log\_directory的值为非法路径时，会导致openGauss无法重新启动。  
>-   通过gs\_guc reload动态修改query\_log\_directory时，当指定路径为合法路径时，日志输出到新的路径下。当指定路径为非法路径时，日志输出到上一次合法的日志输出路径下而不影响数据库正常运行。此时即使指定的query\_log\_directory的值非法，也会写入到配置文件中。  

>![](public_sys-resources/icon-note.gif) **说明：**   
>合法路径：用户对此路径有读写权限  
>非法路径：用户对此路径无读写权限  

**取值范围：**字符串

**默认值：**sql\_monitor。

## query\_log\_file<a name="zh-cn_topic_0242371546_zh-cn_topic_0237124756_zh-cn_topic_0059778787_s3226ae3209154e249928c24ec67c5809"></a>

**参数说明：**GUC参数enable\_slow\_query\_log设置为ON，表示需要将慢查询记录写进日志文件中，query\_log\_file决定服务器慢查询日志文件的名称。通常日志文件名是按照strftime模式生成，因此可以用系统时间定义日志文件名，用%转义字符实现。

该参数属于SIGHUP类型参数，请参考[表1](zh-cn_topic_0237121562.md#zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>-   建议使用%转义字符定义日志文件名称，否则难以对日志文件进行有效的管理。  

**取值范围：**字符串

**默认值：**postgresql-query-log-%Y-%m-%d\_%H%M%S.log

