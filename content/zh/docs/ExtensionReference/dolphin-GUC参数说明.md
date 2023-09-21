# GUC参数说明

## dolphin.sql\_mode<a name="section203671436821"></a>

**取值范围**：字符串

**默认值**：'sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes,no_zero_date,pad_char_to_full_length'

**参数说明**：参数值为逗号间隔的字符串，仅允许合法字符串设定，不合法情况下，启动后报warning。同样，设置时候，如果新值非法，则报warning并且不修改老值。当前有几种场景会用到sql\_mode：

1. sql_mode_strict：插入不符合当前列类型的值时,进行数据转换;分两种场景，insert into table values(…) 和insert into table select … 主要涉及到各种数据类型之间的互相转换，目前涉及的类型有tinyint[unsigned],smallint[unsigned],int[unsigned],bigint[unsigned],float,double,numeric,clob,char和varchar；

2. sql_mode_strict：插入的列值长度超过此列所限定的长度时,赋予该列最大或最小值，涉及的类型有tinyint[unsigned],smallint[unsigned],int[unsigned],bigint[unsigned],float,double,numeric,clob,char和varchar;

3. sql_mode_strict：insert时，属性是非空且没有默认值的列，且没有在insert的列表中，则为其添加默认值;（涉及的类型同上）

4. sql_mode_strict：支持对属性是非空且没有默认值的列显式插入default;（涉及的类型同上）

5. sql_mode_full_group：
    - 出现在select列表中的列（不使用聚合函数），是否一定要出现在group by子句中。当处在sql_mode_full_group模式（默认模式）下，如果select列表中的列没有使用聚合函数，也没有出现在group by子句，那么会报错，如果不在此模式下，则会执行成功，并在所有符合条件的元组中选取第一个元组。
    - 出现在order by中的列，是否一定要出现在distinct中（注意是distinct，不是distinct on）。当处在sql_mode_full_group模式（默认模式）下，不允许没有出现在distinct中的列出现在order by子句中，否则允许。
6. pipes_as_concat：控制 || 当成连接符还是 或操作符

7. ansi_quotes：主要是针对出现在各种需要使用双引号表示字符串值的地方。当ansi_quotes打开，就表示此时的双引号中的内容要作为对象引用看待；当ansi_quotes关闭时，表示双引号中的内容要作为字符串的值看待。

8. no_zero_date：控制 '0000-00-00' 是否为合法日期，支持DATE、DATETIME类型

    |参数|表现|
    |---|---|
    |no_zero_date, sql_mode_strict|非法日期，报错（使用update/insert ignore时告警）|
    |no_zero_date|非法日期，告警|
    |sql_mode_strict|合法日期，无告警|
    |--|合法日期，无告警|

9. pad_char_to_full_length：控制char类型查询时是否删除尾部空格。

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

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

--ansi_quotes效果展示
openGauss=# create database test_db dbcompatibility 'B';
CREATE DATABASE
openGauss=# \c test_db 
Non-SSL connection (SSL connection is recommended when requiring high-security)
You are now connected to database "test_db" as user "luozihao".
test_db=# show dolphin.sql_mode ;
                                           dolphin.sql_mode                                           
------------------------------------------------------------------------------------------------------
 sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes,no_zero_date,pad_char_to_full_length
(1 row)

test_db=# create table test(a varchar(20));
CREATE TABLE
test_db=# insert into test values('test');
INSERT 0 1
test_db=# select "a" from test;
  a   
------
 test
(1 row)

test_db=# set dolphin.sql_mode to 'sql_mode_strict,sql_mode_full_group,pipes_as_concat,no_zero_date,pad_char_to_full_length';
SET
test_db=# select "a" from test;
 ?column? 
----------
 a
(1 row)

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
6. [四则运算操作符兼容](dolphin-四则运算操作符兼容.md#ZH-CN_TOPIC_0289900280)

影响的函数有：
1. [LAST_DAY](dolphin-时间和日期处理函数和操作符.md#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
2. [TIMESTAMPDIFF](dolphin-时间和日期处理函数和操作符.md#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
3. [FORMAT](dolphin-字符处理函数和操作符.md#ZH-CN_TOPIC_0289900656)
4. [EXTRACT](dolphin-时间和日期处理函数和操作符.md#zh-cn_topic_0283136846_zh-cn_topic_0237121972_zh-cn_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
5. [CAST](dolphin-类型转换函数.md)

其他影响的功能：
1. [?](dolphin-PREPARE.md#zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd)
2. [CREATE INDEX](dolphin-CREATE-INDEX.md#zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s31780559299b4f62bec935a2c4679b84)
3. [TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB的输入功能](dolphin-二进制类型.md#zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s31780559299b4f62bec935a2c4679b84)

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

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示自增列的自增步长。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[1, 65535]

**默认值**：1

**示例**：
```
--设置auto_increment_increment为1
openGauss=# set auto_increment_increment = 1;
WARNING:  Variable 'auto_increment_increment' has no actual meaning.
SET
--设置auto_increment_increment为default
openGauss=# set auto_increment_increment = default;
SET
```

## character_set_client<a name="section203671436828"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示客户端使用该字符集。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：utf8

**示例**：
```
--设置character_set_client为uft8
openGauss=# set character_set_client = uft8;
WARNING:  Variable 'character_set_client' has no actual meaning.
SET
--设置character_set_client为default
openGauss=# set auto_increment_increment = default;
SET
```

## character_set_results<a name="section203671436830"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示服务端使用该字符集向客户端返回查询结果。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：utf8

**示例**：
```
--设置character_set_results为utf8
openGauss=# set character_set_results = utf8;
set lower_case_table_names = default;
SETWARNING:  Variable 'character_set_results' has no actual meaning.
SET
--设置character_set_results为default
openGauss=# set character_set_results = default;
SET
```

## character_set_server<a name="section203671436831"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示服务端使用该字符集。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：latin1

**示例**：
```
--设置character_set_server为latin1
openGauss=# set character_set_server = latin1;
WARNING:  Variable 'character_set_server' has no actual meaning.
SET
--设置character_set_server为default
openGauss=# set character_set_server = default;
SET
```

## collation_server<a name="section203671436832"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示服务端使用该排序规则。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：latin1_swedish_ci

**示例**：
```
--设置collation_server为latin1_swedish_ci
openGauss=# set collation_server = latin1_swedish_ci;
WARNING:  Variable 'collation_server' has no actual meaning.
SET
--设置collation_server为defalut
openGauss=# set collation_server = default;
SET
```

## init_connect<a name="section203671436834"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示连接初始化时执行的SQL语句。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：无

**示例**：
```
--设置init_connect为'init_connect'
openGauss=# set init_connect = 'init_connect';
WARNING:  Variable 'init_connect' has no actual meaning.
SET
--设置init_connect为default
openGauss=# set init_connect = default;
SET
```

## interactive_timeout<a name="section203671436835"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示交互式连接在持续无活动该秒数后，服务端会将其关闭。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[1, 31536000]

**默认值**：28800

**示例**：
```
--设置interactive_timeout为28800
openGauss=# set interactive_timeout = 28800;
WARNING:  Variable 'interactive_timeout' has no actual meaning.
SET
--设置interactive_timeout为default
openGauss=# set interactive_timeout = default;
SET
```

## license<a name="section203671436836"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示服务端使用该许可证。

该参数目前属于USERSET类型参数，但设置参数值时会报错（将参数设置为default时不会报错）。

**取值范围**：字符串

**默认值**：MulanPSL-2.0

**示例**：
```
--设置license为'MulanPSL-2.0'
openGauss=# set license = 'MulanPSL-2.0';
ERROR:  Variable 'license' is a read only variable.
--设置license为default
openGauss=# set license = default;
SET
```

## max_allowed_packet<a name="section203671436837"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示数据包的大小上限（字节）。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[1024, 1073741824]

**默认值**：4194304

**示例**：
```
--设置max_allowed_packet为4194304
openGauss=# set max_allowed_packet = 4194304;
WARNING:  Variable 'max_allowed_packet' has no actual meaning.
SET
--设置max_allowed_packet为default
openGauss=# set max_allowed_packet = default;
SET
```

## net_buffer_length<a name="section203671436838"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示缓冲区的默认大小，缓冲区的大小可以动态的扩张到max_allowed_packet，并在SQL语句结束后还原。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[1024, 1048576]

**默认值**：16384

**示例**：
```
--设置net_buffer_length为16384
openGauss=# set net_buffer_length = 16384;
WARNING:  Variable 'net_buffer_length' has no actual meaning.
SET
--设置net_buffer_length为default
openGauss=# set net_buffer_length = default;
SET
```

## net_write_timeout<a name="section203671436839"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示在等待写入该秒数后，服务端会将其中止。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[1, 31536000]

**默认值**：60

**示例**：
```
--设置net_write_timeout为60
openGauss=# set net_write_timeout = 60;
WARNING:  Variable 'net_write_timeout' has no actual meaning.
SET
--设置net_write_timeout为default
openGauss=# set net_write_timeout = default;
SET
```

## query_cache_size<a name="section203671436840"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示在缓存查询结果时，分配的内存大小（字节）。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[0, 9223372036854775807]

**默认值**：1048576

**示例**：
```
--设置query_cache_size为1048576
openGauss=# set query_cache_size = 1048576;
WARNING:  Variable 'query_cache_size' has no actual meaning.
SET
--设置query_cache_size为default
openGauss=# set query_cache_size = default;
SET
```

## query_cache_type<a name="section203671436841"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为整数类型，表示查询缓存的类型。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[0, 2]

**默认值**：0

**示例**：
```
--设置query_cache_type为0
openGauss=# set query_cache_type = 0;
WARNING:  Variable 'query_cache_type' has no actual meaning.
SET
--设置query_cache_type为default
openGauss=# set query_cache_type = default;
SET
```

## system_time_zone<a name="section203671436842"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示服务器系统时区。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：无

**示例**：
```
--设置system_time_zone为'system_time_zone'
openGauss=# set system_time_zone = 'system_time_zone';
WARNING:  Variable 'system_time_zone' has no actual meaning.
SET
--设置system_time_zone为default
openGauss=# set system_time_zone = default;
SET
```

## time_zone<a name="section203671436843"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示当前时区。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[-12:59, +13:00]

**默认值**：SYSTEM

**示例**：
```
--设置time_zone为SYSTEM
openGauss=# set time_zone = SYSTEM;
WARNING:  Variable 'time_zone' has no actual meaning.
SET
--设置time_zone为default
openGauss=# set time_zone = default;
SET
```

## wait_timeout<a name="section203671436844"></a>

**参数说明**：该参数目前未实现其具体意义。参数值为字符串类型，表示非交互式连接在持续无活动该秒数后，服务端会将其关闭。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[1, 31536000]

**默认值**：28800

**示例**：
```
--设置wait_timeout为28800
openGauss=# set wait_timeout = 28800;
WARNING:  Variable 'wait_timeout' has no actual meaning.
SET
--设置wait_timeout为default
openGauss=# set wait_timeout = default;
SET
```

## dolphin.lower_case_table_names<a name="section203671436844"></a>

**参数说明**：该参数用于控制用户名、表名、视图名、模式名的大小写敏感；为0时大小写敏感，>0时为大小写不敏感

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：[0, 2]

**默认值**：1

## dolphin.default_database_name<a name="section203671436846"></a>

**参数说明**：dolphin协议插件默认使用的opengauss数据库实例名称

该参数属于SIGHUP类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>-   当加载了dophin插件，并且开启了dolphin数据库协议后，可以使用此功能。
>-   由于opengauss的database同mysql的database体系不一致，因此dophin需要选择一个opengauss的数据库实例。

**取值范围**：字符串

**默认值**：加载dolphin协议插件时，当前会话的database_name

## dolphin.optimizer_switch<a name="section203671436846"></a>

**参数说明**：控制优化器行为，该参数是一系列控制选项的集合。当前支持的控制选项如下：

  | 选项名               | 默认   | 功能                |
  | ------------------- | ------ | ------------------- | 
  |use_invisible_index	| off    | 控制是否使用不可见索引 |

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

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
-- 设置use_invisible_index为on
openGauss=# set dolphin.optimizer_switch = 'use_invisible_index = on';

-- 设置dolphin.optimizer_switch为defalut，表示所有控制选项都设置为默认值
openGauss=# set dolphin.optimizer_switch = 'default';

-- 表示仅设置use_invisible_index选项为默认值
openGauss=# set dolphin.optimizer_switch = 'use_invisible_index = default';
```

## dolphin.dolphin.div_precision_increment<a name="section203671436846"></a>

**参数说明**：此变量指定使用/运算符执行除法运算的结果的小数位数。

该参数属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.png) **须知：** 
>
>该参数用于提供除法运算结果的小数位数，在通过该参数以及入参计算出小数位数之后，与openGauss原生计算的小数位数进行对比，获取两者中的较大值作为计算结果的小数位数。大多数情况下openGauss的小数位数会比MySQL高，所以该参数在设置的值不大的情况下效果暂时不明显。

**取值范围**：[0, 30]

**默认值**：4

## sql_note

**参数说明**：设置show warnings是否显示Note级别的信息开关。

**取值范围**：布尔型

**默认值**：ON

**示例**：
```sql
openGauss=# show sql_note;
 sql_note
----------
 on
(1 row)
```

## sql\_mode

**参数说明**：该参数目前未实现其具体意义。请使用dolphin.sql_mode。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**示例**：
```
--设置sql_mode为'sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes,no_zero_date,pad_char_to_full_length'
openGauss=# set sql_mode = 'sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes,no_zero_date,pad_char_to_full_length';
WARNING:  Variable 'sql_mode' has no actual meaning, please use variable 'dolphin.sql_mode'.
SET
--设置sql_mode为default
openGauss=# set sql_mode = default;
SET
```

## lower\_case\_table\_names

**参数说明**：该参数目前未实现其具体意义。请使用dolphin.lower_case_table_names。

该参数目前属于USERSET类型参数，请参考[表1](dolphin-重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d837)中对应设置方法进行设置。

**取值范围**：[0, 2]

**默认值**：1

**示例**：
```
--设置lower_case_table_names为1
openGauss=# set lower_case_table_names = 1;
WARNING:  Variable 'lower_case_table_names' has no actual meaning, please use variable 'dolphin.lower_case_table_names'.
SET
--设置lower_case_table_names为default
openGauss=# set lower_case_table_names = default;
SET
```

## b\_compatibility\_show\_warning\_count

**参数说明**：控制show warnings/erros语句，输出的error, warning, note信息的最大数量，默认值是64，该参数范围是0~65535。

**取值范围**：整数型

**默认值**：64

**示例**：
```sql
openGauss=# show max_error_count;
 max_error_count
-----------------
 64
(1 row)
```