# DCF参数设置<a name="ZH-CN_TOPIC_0000001083207760"></a>

## enable\_dcf<a name="section14941640131"></a>

**参数说明：**是否开启DCF模式，该参数不允许修改。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型，on/off。on表示当前安装部署方式为DCF模式，off表示当前安装部署方式为非DCF模式。

**默认值：**off

## dcf\_ssl<a name="section715761611422"></a>

**参数说明：**是否开启SSL，重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型，on/off。on表示使用SSL，off表示不使用SSL。

**默认值：**on

## dcf\_config<a name="section1487019536418"></a>

**参数说明：**用户安装时自定义配置信息，该参数不允许修改。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**默认值：**字符串，安装时用户自定义配置

## dcf\_data\_path<a name="section28801541163"></a>

**参数说明：**DCF数据路径，该参数不允许修改。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**默认值：**字符串，DN数据目录下的dcf\_data目录

## dcf\_log\_path<a name="section6335163315612"></a>

**参数说明：**DCF日志路径，该参数不允许修改。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**默认值：**字符串，DN数据目录下的dcf\_log目录

## dcf\_node\_id<a name="section0577131618718"></a>

**参数说明：**DCF所在DN节点ID，用户安装时自定义，该参数不允许修改。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**默认值：**整型，安装时用户自定义配置

## dcf\_max\_workers<a name="section127961643587"></a>

**参数说明：**DCF回调函数线程个数。如果节点数量超过7个，需要增加这个参数的数值（比如增加到40），否则可能会出现主节点一直处于promoting状态，主备节点日志不推进的状态。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，10\~262143

**默认值：**10

## dcf\_truncate\_threshold<a name="section2030671851017"></a>

**参数说明：**DN对DCF日志进行truncate的门限阈值。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~2147483647

**默认值：**100000

## dcf\_election\_timeout<a name="section0169133413323"></a>

**参数说明：**DCF leader和follower选举超时时间。选举超时时间数值依赖于当前DN之间的网络状况，在超时时间较小且网络极差的情形下，会有超时选举发生，待网络恢复选举恢复正常。建议根据当前网络状态合理设置超时时间。对DCF节点时钟的约束：DCF节点间最大时钟差异小于选举超时时间的一半。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位s，1\~600

**默认值：**3

## dcf\_enable\_auto\_election\_priority<a name="section4409034123"></a>

**参数说明：**DCF优先级选主是否允许内部自动调整优先级值。0表示不允许，1表示允许内部自动调整。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~1

**默认值：**1

## dcf\_election\_switch\_threshold<a name="section126105411127"></a>

**参数说明：**DCF防频繁切主门限。推荐根据用户业务可接受的最大故障时间配置。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位s，0\~2147483647

**默认值：**0

## dcf\_run\_mode<a name="section14650618391"></a>

**参数说明：**DCF选举模式，0表示自动选举模式，2表示去使能选举模式。目前去使能选举模式只限定少数派恢复场景使用，修改会导致数据库实例不可用。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举类型，0、2

**默认值：**0

## dcf\_log\_level<a name="section167851626151919"></a>

**参数说明：**DCF日志级别。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串

-   **关闭日志**：“NONE”，NONE表示关闭日志打印，不能与以下日志级别混合使用。
-   **开启日志：“**RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER”

    日志级别可以从上述字符串中选取字符串并使用竖线组合使用，不能配置空串。


**默认值：**“RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE”

## dcf\_log\_backup\_file\_count<a name="section088021952116"></a>

**参数说明：**DCF运行日志备份保留个数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~100

**默认值：**10

## dcf\_max\_log\_file\_size<a name="section7165117203419"></a>

**参数说明：**DCF运行日志单个文件最大大小。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位MB，1\~1000

**默认值：**10

## dcf\_socket\_timeout<a name="section81477171243"></a>

**参数说明：**DCF通信模块连接socket超时时间，参数重启生效。对于网络环境比较差的环境，若配置很小的超时时间，可能会导致建链不成功，此时需要适当增大此值。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位ms，10\~600000

**默认值：**5000

## dcf\_connect\_timeout<a name="section134953585339"></a>

**参数说明：**DCF通信模块建立连接超时时间，参数重启生效。对于网络环境比较差的环境，若配置很小的超时时间，可能会导致建链不成功，此时需要适当增大此值。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位ms，10\~600000

**默认值：**60000

## dcf\_mec\_fragment\_size<a name="section77191035416"></a>

**参数说明：**DCF通信模块fragment大小，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位KB，32\~10240

**默认值：**64

## dcf\_stg\_pool\_max\_size<a name="section7209161214410"></a>

**参数说明：**DCF存储模内存池最大值，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位MB，32\~2147483647

**默认值：**2048

## dcf\_stg\_pool\_init\_size<a name="section1880515137418"></a>

**参数说明：**DCF存储模块内存池最小值，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位MB，32\~2147483647

**默认值：**32

## dcf\_mec\_pool\_max\_size<a name="section10446514549"></a>

**参数说明：**DCF通信模块内存池最大值，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位MB，32\~2147483647

**默认值：**200

## dcf\_flow\_control\_disk\_rawait\_threshold<a name="section21813156420"></a>

**参数说明：**DCF流控功能的磁盘等待阈值。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位us，0\~2147483647

**默认值：**100000

## dcf\_flow\_control\_net\_queue\_message\_num\_threshold<a name="section84137154420"></a>

**参数说明：**DCF流控功能的网络队列消息数阈值。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~2147483647

**默认值：**1024

## dcf\_flow\_control\_cpu\_threshold<a name="section11721171520415"></a>

**参数说明：**DCF CPU流控阈值。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位百分比，0\~2147483647

**默认值：**100

## dcf\_mec\_batch\_size<a name="section4974215344"></a>

**参数说明：**DCF通信批量消息数，数值为0时，DCF会根据网络以及写入数据量自适应调整，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~1024

**默认值：**0

## dcf\_mem\_pool\_max\_size<a name="section8229171611412"></a>

**参数说明：**DCF内存最大值，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位MB，32\~2147483647

**默认值：**2048

## dcf\_mem\_pool\_init\_size<a name="section1345419161412"></a>

**参数说明：**DCF内存初始化大小，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，单位MB，32\~2147483647

**默认值：**32

## dcf\_compress\_algorithm<a name="section390831613410"></a>

**参数说明：**DCF运行日志传输压缩算法，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型

-   0表示不压缩
-   1表示ZSTD压缩算法
-   2表示LZ4压缩算法

**默认值：**0

## dcf\_compress\_level<a name="section36812161842"></a>

**参数说明：**DCF日志传输压缩级别，参数重启生效，此参数生效前提必须配置有效的压缩算法，即设置合法的dcf\_compress\_algorithm参数。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~22

若不开启压缩，配置的压缩级别将不生效。

**默认值：**1

## dcf\_mec\_channel\_num<a name="section637671712417"></a>

**参数说明：**DCF通信通道数量，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~64

**默认值：**1

## dcf\_rep\_append\_thread\_num<a name="section116713171147"></a>

**参数说明：**DCF日志复制线程数量，参数重启生效。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~1000

**默认值：**2

## dcf\_mec\_agent\_thread\_num<a name="section6545183412"></a>

**参数说明：**DCF通信工作线程数量，参数重启生效。dcf\_mec\_agent\_thread\_num值建议不少于2\*节点数\*dcf\_mec\_channel\_num。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~1000

**默认值：**10

## dcf\_mec\_reactor\_thread\_num<a name="section16947144914191"></a>

**参数说明：**DCF使用reactor线程数量，参数重启生效。dcf\_mec\_reactor\_thread\_num与dcf\_mec\_agent\_thread\_num比例建议1：40。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，1\~100

**默认值：**1

## dcf\_log\_file\_permission<a name="section164431018248"></a>

**参数说明：**DCF运行日志文件属性，参数重启生效，参数安装阶段配置，后续不支持修改。若用户需要支持同组的其他用户访问日志，首先需要所有的父目录都支持同组的其他用户也能访问。即若参数dcf\_log\_path\_permission配置为750，dcf\_log\_file\_permission只能为600或者640。若参数dcf\_log\_path\_permission配置为700，dcf\_log\_file\_permission只能为600。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举型，600、640

**默认值：**600

## dcf\_log\_path\_permission<a name="section1250875212192"></a>

**参数说明：**DCF运行日志目录属性，参数重启生效，参数安装阶段配置，后续不支持修改。若用户需要支持同组的其他用户访问日志路径，需选择参数750，否则选择700。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**枚举型，700、750

**默认值：**700

## dcf\_majority\_groups<a name="section15267459165619"></a>

**参数说明：**DCF策略化多数派功能设置。对于需要配置此参数的group，该group内至少有一台备机收到日志。即该group内存在一台同步备机。若对DCF实例内做了增删节点或者对实例内节点group值进行了调整修改，需同步修改此配置。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串

-   关闭：“”，空字符串表示策略化多数派功能关闭。
-   开启： 配置有效的group值，使用逗号分隔，group值需在dcf\_config中存在。例如将group值分别为1和2，加入DCF的策略化多数派配置时，可以设置为"1,2"；若配置了dcf\_config中不存在的group值或者其他字符，DCF将认为该配置的group无效。

**默认值：**空字符串

>![](C:/Users/liyang/Desktop/新建文件夹/20220817/20220817/12-开发者指南_20220817154518/12-开发者指南/public_sys-resources/icon-caution.gif) **注意：** 
>若配置了参数后某一group内所有节点均故障，在对其中某个节点做涉及节点build相关操作（节点修复、不换ip的节点替换）时，需要将该group从此参数列表中移除，待节点恢复正常后可将该group再次配置到此参数。