# GUC Parameters<a name="EN-US_TOPIC_0289899843"></a>

## sql\_mode<a name="section203671436821"></a>

Parameter description: The parameter value is a character string separated by commas (,). Only valid character strings are allowed. If the parameter value is invalid, a warning is reported after the startup. Similarly, if the new value is invalid, a warning is reported and the old value is not changed. The default string of the current sql\_mode is sql\_mode_strict,sql\_mode\_full\_group. Currently, sql\_mode is used in the following scenarios:

1. sql\_mode\_strict: When a value that does not comply with the current column type is inserted, data conversion is performed. There are two scenarios: **insert into table values (...)** and **insert into table select ...**. Conversion between various data types is involved. Currently, the following types are involved: tinyint (tinyint is not considered because its data scope is different from that of MySQL), smallint, int, bigint, float, double, numeric, clob, char, and varchar.
2. sql\_mode\_strict: If the length of the inserted column value exceeds the length limit of the column, the maximum or minimum value is assigned to the column. The involved types are tinyint, smallint, int, bigint, float, double, numeric, clob, char, and varchar.
3. sql\_mode\_strict: During insert, if a column whose attribute is not empty and does not have a default value is not in the insert list, the default value is added to the column. (The involved types are the same as the preceding types.)
4. sql\_mode\_strict: supports explicit insertion of default to columns whose attributes are not empty and do not have default values. (The involved types are the same as the preceding types.)
5. sql\_mode\_full\_group: determines whether columns (without aggregate functions) in the SELECT list must be included in the GROUP BY clause. In sql\_mode\_full\_group mode (default mode), if a column in the select list does not use an aggregate function or appear in the GROUP BY clause, an error is reported. Otherwise, the execution is successful and the first tuple is selected from all tuples that meet the conditions.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

Default value: 'sql_mode_strict,sql_mode_full_group'

**Example**:
```
--Create a table named test1.
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

--Failed to insert records into the table.
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--Failed to query the table.
openGauss=# select a1,a2 from test1 group by a1;

--A record is successfully inserted into the table.
openGauss=# set sql_mode = '';
openGauss=# insert into test1(a1,a2) values(123412342342314,3453453453434324);
--A table is queried successfully.
openGauss=# select a1,a2 from test1 group by a1;

--Deleting a Table
openGauss=# DROP TABLE test1;
```

## b\_db\_timestamp<a name="section203671436822"></a>

**Parameter description:** The parameter value is a floating point number. This parameter affects the curdate, current_time, curtime, current_timestamp, localtime, localtimestamp, and now functions in Dolphin. If this parameter is set to **0**, the preceding functions return the current date or time. If the parameter value is within the range [1,2147483647], the preceding functions use the value of this parameter as the second offset and return the date or time corresponding to 1970-01-01 00:00:00 UTC + Second offset + Current time zone offset. If the value of this parameter is not in the preceding valid range, an error is reported.

This parameter is a USERSET parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** [1.0, 2147483647.0]

**Default value**: **0**

**Example**
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

**Parameter description:** The parameter value is an integer. This parameter affects the week function in the Dolphin plug-in. The value range of this parameter is [0,7], which corresponds to eight calculation policies. For details about these policies, see [Time and Date Functions ](dolphin-date-and-time-processing-functions-and-operators.md). If the value of this GUC parameter exceeds the corresponding boundary value, a warning is reported and the GUC parameter is set to the corresponding boundary value.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** [0, 7]

**Default value**: **0**

**Example**
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

**Parameter description:** Specifies the language in which the dayname and monthname functions of the dolphin plug-in output results. The parameter value is a character string. There are 111 values for this parameter. If the value of a parameter is not within the valid value range, an error is reported.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:
The options of lc\_time\_names are as follows:
  | Value                                                        | Language Set  |
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

**Default value:** **'en_US'**

**Example**
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
Saturday
(1 row)
```
