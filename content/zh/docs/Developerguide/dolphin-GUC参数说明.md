# GUC参数说明<a name="ZH-CN_TOPIC_0289899843"></a>

## sql\_mode<a name="section203671436821"></a>

**参数说明**：参数值为逗号间隔的字符串，仅允许合法字符串设定，不合法情况下，启动后报warning。同样，设置时候，如果新值非法，则报warning并且不修改老值。当前sql_mode的默认字符串为sql_mode_strict,sql_mode_full_group。当前有几种场景会用到sql\_mode：

1. sql_mode_strict：插入不符合当前列类型的值时,进行数据转换;分两种场景，insert into table values(…) 和insert into table select … 主要涉及到各种数据类型之间的互相转换，目前涉及的类型有tinyint[unsigned],smallint[unsigned],int[unsigned],bigint[unsigned],float,double,numeric,clob,char和varchar；
2. sql_mode_strict：插入的列值长度超过此列所限定的长度时,赋予该列最大或最小值（涉及的类型有tinyint[unsigned],smallint[unsigned],int[unsigned],bigint[unsigned],float,double,numeric,clob,char和varchar）;
3. sql_mode_strict：insert时，属性是非空且没有默认值的列，且没有在insert的列表中，则为其添加默认值;（涉及的类型同上）
4. sql_mode_strict：支持对属性是非空且没有默认值的列显式插入default;（涉及的类型同上）
5. sql_mode_full_group：主要是针对出现在select列表中的列（不使用聚合函数），是否一定要出现在group by子句中。当处在sql_mode_full_group模式（默认模式）下，如果select列表中的列没有使用聚合函数，也没有出现在group by子句，那么会报错，如果不在此模式下，则会执行成功，并在所有符合条件的元组中选取第一个元组。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：字符串

**默认值**：'sql_mode_strict,sql_mode_full_group'

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

--向表中插入记录失败。
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--查询表失败
openGauss=# select a1,a2 from test1 group by a1;

--向表中插入记录成功。
openGauss=# set sql_mode = '';
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--查询表成功
openGauss=# select a1,a2 from test1 group by a1;

--删除表
openGauss=# DROP TABLE test1;
```

## b\_db\_timestamp<a name="section203671436822"></a>

**参数说明**：参数值为浮点数，该参数影响dolphin中的```curdate/current_time/curtime/current_timestamp/localtime/localtimestamp/now```函数。当此参数值为0时，以上函数返回当前日期或时间；若参数值位于区间[1,2147483647]，则上述函数以该GUC参数的值作为秒数偏移，返回1970年01月01日 00:00:00 UTC + 秒数偏移 + 当前时区偏移的对应日期或时间。设置此参数时，若值不在上述合法区间内，会报错。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：[1.0, 2147483647.0]

**默认值**：0

**示例**：
```
openGauss=# show b_db_timestamp;
 b_db_timestamp
----------------
 0
(1 row)

openGauss=# select now();
        now()
---------------------
 2022-09-18 19:52:23
(1 row)

openGauss=# set b_db_timestamp = 1.0;
SET
openGauss=# select now();
        now()
---------------------
 1970-01-01 08:00:01
(1 row)
```

## default\_week\_format<a name="section203671436823"></a>

**参数说明**：参数值为整数，该参数影响dolphin插件中的```week```函数，该参数的取值范围为[0,7]，分别对应8种不同的计算策略，这些策略的详细内容参见[时间/日期函数](dolphin-时间和日期处理函数和操作符.md#时间日期函数a-namezh-cntopic0283136846zh-cntopic0237121972zh-cntopic0059779084sd0d47140cdd048c1964ed53f9858f436a)中的```week```函数说明。当此GUC参数设置的值超过对应边界值时，会报warning，并且将此GUC参数的值设置为对应边界值。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：[0, 7]

**默认值**：0

**示例**：
```
openGauss=# show default_week_format;
default_week_format
---------------------
0
(1 row)

openGauss=# select week('2000-1-1');
week
------
    0
(1 row)

openGauss=# alter system set default_week_format = 2;
ALTER SYSTEM SET

openGauss=# select week('2000-1-1');
week
------
52
(1 row)
```

## lc\_time\_names<a name="section203671436824"></a>

**参数说明**：参数值为字符串，该参数控制dolphin插件中```dayname/monthname```函数以何种语言输出结果。该参数的取值有111种。设置参数时，若值不在合法取值范围内，则会报错。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

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

openGauss=# alter system set lc_time_names = 'zh_CN';
ALTER SYSTEM SET

openGauss=# select dayname('2000-1-1');
dayname
---------
星期六
(1 row)
```