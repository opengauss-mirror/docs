# GUC参数说明<a name="ZH-CN_TOPIC_0289899843"></a>

## dolphin.sql\_mode<a name="section203671436821"></a>

**参数说明**：参数值为逗号间隔的字符串，仅允许合法字符串设定，不合法情况下，启动后报warning。同样，设置时候，如果新值非法，则报warning并且不修改老值。当前有几种场景会用到sql\_mode：

1. sql_mode_strict：插入不符合当前列类型的值时,进行数据转换;分两种场景，insert into table values(…) 和insert into table select … 主要涉及到各种数据类型之间的互相转换，目前涉及的类型有tinyint[unsigned],smallint[unsigned],int[unsigned],bigint[unsigned],float,double,numeric,clob,char和varchar；

2. sql_mode_strict：插入的列值长度超过此列所限定的长度时,赋予该列最大或最小值，涉及的类型有tinyint[unsigned],smallint[unsigned],int[unsigned],bigint[unsigned],float,double,numeric,clob,char和varchar;

3. sql_mode_strict：insert时，属性是非空且没有默认值的列，且没有在insert的列表中，则为其添加默认值;（涉及的类型同上）

4. sql_mode_strict：支持对属性是非空且没有默认值的列显式插入default;（涉及的类型同上）

5. sql_mode_full_group：
   - 出现在select列表中的列（不使用聚合函数），是否一定要出现在group by子句中。当处在sql_mode_full_group模式（默认模式）下，如果select列表中的列没有使用聚合函数，也没有出现在group by子句，那么会报错，如果不在此模式下，则会执行成功，并在所有符合条件的元组中选取第一个元组。
   - 出现在order by中的列，是否一定要出现在distinct中（注意是distinct，不是distinct on）。当处在sql_mode_full_group模式（默认模式）下，不允许没有出现在distinct中的列出现在order by子句中，否则允许。

6. pipes_as_concat：控制 || 当成连接符还是 或操作符

7. ansi_quotes：主要是针对出现在各种需要使用双引号表示字符串值的地方。当ansi_quotes打开，就表示此时的双引号中的内容要作为对象引用看待；当ansi_quotes关闭时，表示双引号中的内容要作为字符串的值看待。当关闭ansi_quotes时，会导致部分元命令失效，失效的元命令如下表所示：

   | 参数                        | 参数说明                                                     |
   | --------------------------- | ------------------------------------------------------------ |
   | \d[S+]                      | 列出当前search_path中模式下所有的表、视图和序列。当search_path中不同模式存在同名对象时，只显示search_path中位置靠前模式下的同名对象。 |
   | \d+ [PATTERN]               | 列出所有表、视图和索引。 |
   | \da[S] [PATTERN]            | 列出所有可用的聚集函数以及它们操作的数据类型和返回值类型。   |
   | \db[+] [PATTERN]            | 列出所有可用的表空间。                                       |
   | \dc[S+] [PATTERN]           | 列出所有字符集之间的可用转换。                               |
   | \dC[+] [PATTERN]            | 列出所有类型转换。                                           |
   | \dd[S] [PATTERN]            | 显示所有匹配PATTERN的描述。                                  |
   | \ddp [PATTERN]              | 显示所有默认的使用权限。                                     |
   | \dD[S+] [PATTERN]           | 列出所有可用域。                                             |
   | \ded[+] [PATTERN]           | 列出所有的Data Source对象。                                  |
   | \det[+] [PATTERN]           | 列出所有的外部表。                                           |
   | \des[+] [PATTERN]           | 列出所有的外部服务器。                                       |
   | \deu[+] [PATTERN]           | 列出用户映射信息。                                           |
   | \dew[+] [PATTERN]           | 列出封装的外部数据。                                         |
   | \df[antw][S+] [PATTERN]     | 列出所有可用函数以及它们的参数和返回的数据类型。a代表聚集函数，n代表普通函数，t代表触发器，w代表窗口函数。 |
   | \dF[+] [PATTERN]            | 列出所有的文本搜索配置信息。                                 |
   | \dFd[+] [PATTERN]           | 列出所有的文本搜索字典。                                     |
   | \dFp[+] [PATTERN]           | 列出所有的文本搜索分析器。                                   |
   | \dFt[+] [PATTERN]           | 列出所有的文本搜索模板。                                     |
   | \dl                         | \lo_list的别名，显示一个大对象的列表。                       |
   | \dL[S+] [PATTERN]           | 列出可用的程序语言。                                         |
   | \dm[S+] [PATTERN]           | 列出物化视图                                                 |
   | \dn[S+] [PATTERN]           | 列出所有的模式（名称空间）。                                 |
   | \do[S] [PATTERN]            | 列出所有可用的操作符以及它们的操作数和返回的数据类型。       |
   | \dO[S+] [PATTERN]           | 列出排序规则                                                 |
   | \dp [PATTERN]               | 列出一列可用的表、视图以及相关的权限信息。                   |
   | \dT[S+] [PATTERN]           | 列出所有的数据类型。                                         |
   | \dE[S+] [PATTERN]           | 这一组命令，字母E、i、s、t和v分别代表着外部表、索引、序列、表和视图。可以以任意顺序指定其中一个或者它们的组合来列出这些对象。例如：\dit列出所有的索引和表。在命令名称后面追加+，则每一个对象的物理尺寸以及相关的描述也会被列出。 |
   | \dx[+] [PATTERN]            | 列出安装数据库的扩展信息。                                   |
   | \l[+]                       | 列出服务器上所有数据库的名称、所有者、字符集编码以及使用权限。 |
   | \z [PATTERN]                | 列出数据库中所有表、视图和序列以及它们相关的访问特权。       |

    ansi_quotes关闭情况下，如果需要用到数据库关键字作为对象标识符，或者出于规范性要求需要包裹所有对象标识符，可以使用反引号(`)替代双引号。

    使用反引号(`)的情况下，表名称（受到参数lower_case_table_names控制）之外，其他包围的列名称，索引名称等都会做自动的小写化处理，返回数据的列也均为小写名称。

8. no_zero_date：控制 '0000-00-00' 是否为合法日期，支持DATE、DATETIME类型

    |参数|表现|
    |---|---|
    |no_zero_date, sql_mode_strict|非法日期，报错（使用update/insert ignore时告警）|
    |no_zero_date|非法日期，告警|
    |sql_mode_strict|合法日期，无告警|
    |--|合法日期，无告警|

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

9. pad_char_to_full_length：控制char类型查询时是否删除尾部空格。

**取值范围**：字符串

**默认值**：'sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes,no_zero_date,pad_char_to_full_length'

**示例**：
```
--创建表test1。
openGauss=# CREATE TABLE test1
(
  a1 smallint not null,
  a2 int not null,
  a3 bigint not null,
  a4 float not null,
  a5 double not null,
  a6 numeric not null,
  a7 varchar(5) not null
);
CREATE TABLE
--向表中插入记录失败。
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
ERROR:  smallint out of range
CONTEXT:  referenced column: a1
--查询表失败
openGauss=# select a1,a2 from test1 group by a1;
ERROR:  column "test1.a2" must appear in the GROUP BY clause or be used in an aggregate function
LINE 1: select a1,a2 from test1 group by a1;

--向表中插入记录成功。
openGauss=# set dolphin.sql_mode = '';
SET
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
WARNING:  invalid input syntax for numeric: ""
CONTEXT:  referenced column: a6
WARNING:  smallint out of range
CONTEXT:  referenced column: a1
WARNING:  integer out of range
CONTEXT:  referenced column: a2
INSERT 0 1
--查询表成功
openGauss=# select a1,a2 from test1 group by a1;
  a1   |     a2
-------+------------
 32767 | 2147483647
(1 row)

--删除表
openGauss=# DROP TABLE test1;
DROP TABLE
```

## dolphin.b\_db\_timestamp<a name="section203671436822"></a>

**参数说明**：参数值为浮点数，该参数影响dolphin中的```curdate/current_time/curtime/current_timestamp/localtime/localtimestamp/now```函数。当此参数值为0时，以上函数返回当前日期或时间；若参数值位于区间[1,2147483647]，则上述函数以该GUC参数的值作为秒数偏移，返回1970年01月01日 00:00:00 UTC + 秒数偏移 + 当前时区偏移的对应日期或时间。设置此参数时，若值不在上述合法区间内，会报错。

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：0∪[1.0, 2147483647.0]

**默认值**：0

**示例**：
```
openGauss=# show dolphin.b_db_timestamp;
 b_db_timestamp
----------------
 0
(1 row)

openGauss=# select now();
        now()
---------------------
 2022-09-18 19:52:23
(1 row)

openGauss=# set dolphin.b_db_timestamp = 1.0;
SET
openGauss=# select now();
        now()
---------------------
 1970-01-01 08:00:01
(1 row)
```

## dolphin.default\_week\_format<a name="section203671436823"></a>

**参数说明**：参数值为整数，该参数影响dolphin插件中的```week```函数，该参数的取值范围为[0,7]，分别对应8种不同的计算策略，这些策略的详细内容参见[时间/日期函数](dolphin-时间和日期处理函数和操作符.md#时间日期函数a-namezh-cntopic0283136846zh-cntopic0237121972zh-cntopic0059779084sd0d47140cdd048c1964ed53f9858f436a)中的```week```函数说明。当此GUC参数设置的值超过对应边界值时，会报warning，并且将此GUC参数的值设置为对应边界值。

该参数属于SIGHUP类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[0, 7]

**默认值**：0

**示例**：
```
openGauss=# show dolphin.default_week_format;
dolphin.default_week_format
---------------------
0
(1 row)

openGauss=# select week('2000-1-1');
week
------
    0
(1 row)

openGauss=# alter system set dolphin.default_week_format = 2;
ALTER SYSTEM SET

openGauss=# select week('2000-1-1');
week
------
52
(1 row)
```

## dolphin.lc\_time\_names<a name="section203671436824"></a>

**参数说明**：参数值为字符串，该参数控制dolphin插件中```dayname/monthname```函数以何种语言输出结果。该参数的取值有111种。设置参数时，若值不在合法取值范围内，则会报错。

该参数属于SIGHUP类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：
lc_time_names语言集有如下可供选择的值：
  | 参数值                                                         | 语言集   |
  | ------------------------------------------------------------ | ------ |
  |ar_AE	|Arabic - United Arab Emirates|
  |ar_BH	|Arabic - Bahrain|
  |ar_DZ	|Arabic - Algeria|
  |ar_EG	|Arabic - Egypt|
  |ar_IN	|Arabic - India|
  |ar_IQ	|Arabic - Iraq|
  |ar_JO	|Arabic - Jordan|
  |ar_KW	|Arabic - Kuwait|
  |ar_LB	|Arabic - Lebanon|
  |ar_LY	|Arabic - Libya|
  |ar_MA	|Arabic - Morocco|
  |ar_OM	|Arabic - Oman|
  |ar_QA	|Arabic - Qatar|
  |ar_SA	|Arabic - Saudi Arabia|
  |ar_SD	|Arabic - Sudan|
  |ar_SY	|Arabic - Syria|
  |ar_TN	|Arabic - Tunisia|
  |ar_YE	|Arabic - Yemen|
  |be_BY	|Belarusian - Belarus|
  |bg_BG	|Bulgarian - Bulgaria|
  |ca_ES	|Catalan - Spain|
  |cs_CZ	|Czech - Czech Republic|
  |da_DK	|Danish - Denmark|
  |de_AT	|German - Austria|
  |de_BE	|German - Belgium|
  |de_CH	|German - Switzerland|
  |de_DE	|German - Germany|
  |de_LU	|German - Luxembourg|
  |el_GR	|Greek - Greece|
  |en_AU	|English - Australia|
  |en_CA	|English - Canada|
  |en_GB	|English - United Kingdom|
  |en_IN	|English - India|
  |en_NZ	|English - New Zealand|
  |en_PH	|English - Philippines|
  |en_US	|English - United States|
  |en_ZA	|English - South Africa|
  |en_ZW	|English - Zimbabwe|
  |es_AR	|Spanish - Argentina|
  |es_BO	|Spanish - Bolivia|
  |es_CL	|Spanish - Chile|
  |es_CO	|Spanish - Colombia|
  |es_CR	|Spanish - Costa Rica|
  |es_DO	|Spanish - Dominican Republic|
  |es_EC	|Spanish - Ecuador|
  |es_ES	|Spanish - Spain|
  |es_GT	|Spanish - Guatemala|
  |es_HN	|Spanish - Honduras|
  |es_MX	|Spanish - Mexico|
  |es_NI	|Spanish - Nicaragua|
  |es_PA	|Spanish - Panama|
  |es_PE	|Spanish - Peru|
  |es_PR	|Spanish - Puerto Rico|
  |es_PY	|Spanish - Paraguay|
  |es_SV	|Spanish - El Salvador|
  |es_US	|Spanish - United States|
  |es_UY	|Spanish - Uruguay|
  |es_VE	|Spanish - Venezuela|
  |et_EE	|Estonian - Estonia|
  |eu_ES	|Basque - Spain|
  |fi_FI	|Finnish - Finland|
  |fo_FO	|Faroese - Faroe Islands|
  |fr_BE	|French - Belgium|
  |fr_CA	|French - Canada|
  |fr_CH	|French - Switzerland|
  |fr_FR	|French - France|
  |fr_LU	|French - Luxembourg|
  |gl_ES	|Galician - Spain|
  |gu_IN	|Gujarati - India|
  |he_IL	|Hebrew - Israel|
  |hi_IN	|Hindi - India|
  |hr_HR	|Croatian - Croatia|
  |hu_HU	|Hungarian - Hungary|
  |id_ID	|Indonesian - Indonesia|
  |is_IS	|Icelandic - Iceland|
  |it_CH	|Italian - Switzerland|
  |it_IT	|Italian - Italy|
  |ja_JP	|Japanese - Japan|
  |ko_KR	|Korean - Republic of Korea|
  |lt_LT	|Lithuanian - Lithuania|
  |lv_LV	|Latvian - Latvia|
  |mk_MK	|Macedonian - North Macedonia|
  |mn_MN	|Mongolia - Mongolian|
  |ms_MY	|Malay - Malaysia|
  |nb_NO	|Norwegian(Bokmål) - Norway|
  |nl_BE	|Dutch - Belgium|
  |nl_NL	|Dutch - The Netherlands|
  |no_NO	|Norwegian - Norway|
  |pl_PL	|Polish - Poland|
  |pt_BR	|Portugese - Brazil|
  |pt_PT	|Portugese - Portugal|
  |rm_CH	|Romansh - Switzerland|
  |ro_RO	|Romanian - Romania|
  |ru_RU	|Russian - Russia|
  |ru_UA	|Russian - Ukraine|
  |sk_SK	|Slovak - Slovakia|
  |sl_SI	|Slovenian - Slovenia|
  |sq_AL	|Albanian - Albania|
  |sr_RS	|Serbian - Serbia|
  |sv_FI	|Swedish - Finland|
  |sv_SE	|Swedish - Sweden|
  |ta_IN	|Tamil - India|
  |te_IN	|Telugu - India|
  |th_TH	|Thai - Thailand|
  |tr_TR	|Turkish - Turkey|
  |uk_UA	|Ukrainian - Ukraine|
  |ur_PK	|Urdu - Pakistan|
  |vi_VN	|Vietnamese - Vietnam|
  |zh_CN	|Chinese - China|
  |zh_HK	|Chinese - Hong Kong|
  |zh_TW	|Chinese - Taiwan|

**默认值**：'en_US'

**示例**：
```
openGauss=# select dayname('2000-1-1');
dayname
----------
Saturday
(1 row)

openGauss=# alter system set dolphin.lc_time_names = 'zh_CN';
ALTER SYSTEM SET

openGauss=# select dayname('2000-1-1');
dayname
---------
星期六
(1 row)
```

## dolphin.b\_compatibility\_mode<a name="section203671436825"></a>

**参数说明**：参数值为布尔类型，该参数影响dolphin插件中的部分冲突的函数和操作符等，参数开启时这些函数和操作符会执行兼容性逻辑，关闭时则保持openGauss原有的逻辑。

当前影响的操作符有：

1. [LIKE/NOT LIKE](dolphin-字符处理函数和操作符.md#ZH-CN_TOPIC_0289900656)
2. (字符类型异或) [^](dolphin-字符处理函数和操作符.md#ZH-CN_TOPIC_0289900656)
3. (数字类型异或) [^](dolphin-数字操作函数和操作符.md#ZH-CN_TOPIC_0289900469)
4. [&&](dolphin-逻辑操作符.md#ZH-CN_TOPIC_0289900469)
5. [#](dolphin-注释操作符.md#ZH-CN_TOPIC_0289900280)

影响的函数有：
1. [LAST_DAY](dolphin-时间和日期处理函数和操作符.md#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
2. [TIMESTAMPDIFF](dolphin-时间和日期处理函数和操作符.md#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
3. [FORMAT](dolphin-字符处理函数和操作符.md#ZH-CN_TOPIC_0289900656)
4. [EXTRACT](dolphin-时间和日期处理函数和操作符.md#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
5. [CAST](dolphin-类型转换函数.md)

其他影响的参数：
1. [?](dolphin-PREPARE.md#zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd)

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：布尔型

-   on表示使用新增兼容性功能。
-   off表示关闭兼容性功能，使用内核原有功能。

**默认值**：off

## version_comment<a name="section203671436826"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示数据库服务端及许可证信息。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：openGauss Server(MulanPSL-2.0)

## auto_increment_increment<a name="section203671436827"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示自增列的自增步长。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[1, 65535]

**默认值**：1

## character_set_client<a name="section203671436828"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示客户端使用该字符集。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：utf8

## character_set_connection<a name="section203671436829"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示没有字符集引入程序时，使用该字符集。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：utf8

## character_set_results<a name="section203671436830"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示服务端使用该字符集向客户端返回查询结果。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：utf8

## character_set_server<a name="section203671436831"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示服务端使用该字符集。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：latin1

## collation_server<a name="section203671436832"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示服务端使用该排序规则。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：latin1_swedish_ci

## collation_connection<a name="section203671436833"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示连接字符集使用该排序规则。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：无

## init_connect<a name="section203671436834"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示连接初始化时执行的SQL语句。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：无

## interactive_timeout<a name="section203671436835"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示交互式连接在持续无活动该秒数后，服务端会将其关闭。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[1, 31536000]

**默认值**：28800

## license<a name="section203671436836"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示服务端使用该许可证。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：MulanPSL-2.0

## max_allowed_packet<a name="section203671436837"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示数据包的大小上限（字节）。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[1024, 1073741824]

**默认值**：4194304

## net_buffer_length<a name="section203671436838"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示缓冲区的默认大小，缓冲区的大小可以动态的扩张到max_allowed_packet，并在SQL语句结束后还原。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[1024, 1048576]

**默认值**：16384

## net_write_timeout<a name="section203671436839"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示在等待写入该秒数后，服务端会将其中止。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[1, 31536000]

**默认值**：60

## query_cache_size<a name="section203671436840"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示在缓存查询结果时，分配的内存大小（字节）。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[0, 9223372036854775807]

**默认值**：1048576

## query_cache_type<a name="section203671436841"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为整数类型，表示查询缓存的类型。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[0, 2]

**默认值**：0

## system_time_zone<a name="section203671436842"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示服务器系统时区。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：字符串

**默认值**：无

## time_zone<a name="section203671436843"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示当前时区。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[-12:59, +13:00]

**默认值**：SYSTEM

## wait_timeout<a name="section203671436844"></a>

**参数说明**：该参数目前为只读参数，且未实现其具体意义。参数值为字符串类型，表示非交互式连接在持续无活动该秒数后，服务端会将其关闭。

该参数目前属于INTERNAL类型参数，用户无法对其进行设置。

**取值范围**：[1, 31536000]

**默认值**：28800

## dolphin.lower_case_table_names<a name="section203671436844"></a>

**参数说明**：该参数用于控制用户名、表名、视图名、模式名的大小写敏感；为0时大小写敏感，>0时为大小写不敏感

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：[0, 2]

**默认值**：1

## dolphin.default_database_name<a name="section203671436846"></a>

**参数说明**：dolphin协议插件默认使用的opengauss数据库实例名称

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   当加载了dophin插件，并且开启了dolphin数据库协议后，可以使用此功能。
>-   由于opengauss的database同mysql的database体系不一致，因此dophin需要选择一个opengauss的数据库实例。

**取值范围**：字符串

**默认值**：加载dolphin协议插件时，当前会话的database_name

## dolphin.div_precision_increment<a name="section203671436846"></a>

**参数说明**：此变量指定使用/运算符执行除法运算的结果的小数位数。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>该参数用于提供除法运算结果的小数位数，在通过该参数以及入参计算出小数位数之后，与openGauss原生计算的小数位数进行对比，获取两者中的较大值作为计算结果的小数位数。大多数情况下openGauss的小数位数会比M\*高，所以该参数在设置的值不大的情况下效果暂时不明显。

**取值范围**：[0, 30]

**默认值**：4

## dolphin.optimizer_switch<a name="section203671436846"></a>

**参数说明**：控制优化器行为，该参数是一系列控制选项的集合。当前支持的控制选项如下：

  | 选项名               | 默认   | 功能                |
  | ------------------- | ------ | ------------------- | 
  |use_invisible_index	| off    | 控制是否使用不可见索引 |

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：字符串

**有效取值**: 各选项以逗号隔开，如下。

optimizer_switch='command[,command]...'

  | command               | 描述                |
  | ------------------- | ------------------ | 
  | default	|  将所有控制选项设为其默认值 |
  | opt_name = default	|  将指定控制选项设为其默认值 |
  | opt_name = off	|  将指定控制选项设为关闭 |
  | opt_name = on	|  将指定控制选项设为打开 |

**默认值**：default

**示例**：
```
openGauss=# set dolphin.optimizer_switch = 'use_invisible_index = on';
```
