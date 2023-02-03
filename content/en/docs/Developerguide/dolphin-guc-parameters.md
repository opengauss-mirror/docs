# GUC Parameters<a name="EN-US_TOPIC_0289899843"></a>

## sql\_mode<a name="section203671436821"></a>

**Parameter description**: The parameter value is a character string separated by commas (,). Only valid character strings are allowed. If the parameter value is invalid, a warning is reported after the startup. Similarly, if the new value is invalid, a warning is reported and the old value is not changed. Currently, sql\_mode is used in the following scenarios:

1. sql\_mode\_strict: Data is converted if the inserted value does not comply with the current column type. The involved scenarios are INSERT INTO table VALUES (...) and INSERT INTO table SELECT … Currently, the involved types are TINYINT[UNSIGNED],SMALLINT[UNSIGNED],INT[UNSIGNED],BIGINT[UNSIGNED],FLOAT,DOUBLE,NUMERIC,CLOB,CHAR, and VARCHAR.

2. sql\_mode\_strict: If the value length of an inserted column exceeds the limit, the maximum or minimum value of the column is used. The involved types are TINYINT[UNSIGNED],SMALLINT[UNSIGNED],INT[UNSIGNED],BIGINT[UNSIGNED],FLOAT,DOUBLE,NUMERIC,CLOB,CHAR, and VARCHAR.

3. sql\_mode\_strict: During insert, if a column whose attribute is not empty and does not have a default value is not in the insert list, the default value is added to the column. (The involved types are the same as the preceding types.)

4. sql\_mode\_strict: supports explicit insertion of default to columns whose attributes are not empty and do not have default values. (The involved types are the same as the preceding types.)

5. sql\_mode\_full\_group: determines whether columns (without aggregate functions) in the SELECT list must be included in the GROUP BY clause. In sql\_mode\_full\_group mode (default mode), if a column in the select list does not use an aggregate function or appear in the GROUP BY clause, an error is reported. Otherwise, the execution is successful and the first tuple is selected from all tuples that meet the conditions.

6. **pipes\_as\_concat**: controls whether **||** is used as a connector or an OR operator.

7. **ansi\_quotes**: It is mainly used in places where double quotation marks need to be used to indicate string values. When **ansi\_quotes** is enabled, the content in the double quotation marks is considered as an object reference. When **ansi\_quotes** is disabled, the content in the double quotation marks is considered as a string value. When **ansi\_quotes** is disabled, some meta-commands become invalid. The following table lists the invalid meta-commands.

   | Parameter                       | Description                                                    |
   | --------------------------- | ------------------------------------------------------------ |
   | \d[S+]                      | Lists all tables, views, and sequences of all schemas in search\_path. When objects with the same name exist in different schemas in search\_path, only the object in the schema that ranks first in search\_path is displayed.|
   | \d+ [PATTERN]               | Lists all tables, views, and indexes. |
   | \da[S] [PATTERN]            | Lists all available aggregate functions, together with their return value types and the data types.  |
   | \db[+] [PATTERN]            | Lists all available tablespaces.                                      |
   | \dc[S+] [PATTERN]           | Lists all available conversions between character sets.                              |
   | \dC[+] [PATTERN]            | Lists all available type conversions.                                          |
   | \dd[S] [PATTERN]            | Lists descriptions about objects matching PATTERN.                                 |
   | \ddp [PATTERN]              | Lists all default permissions.                                    |
   | \dD[S+] [PATTERN]           | Lists all available domains.                                            |
   | \ded[+] [PATTERN]           | Lists all data source objects.                                 |
   | \det[+] [PATTERN]           | Lists all foreign tables.                                          |
   | \des[+] [PATTERN]           | Lists all foreign servers.                                      |
   | \deu[+] [PATTERN]           | Lists all user mappings.                                          |
   | \dew[+] [PATTERN]           | Lists foreign-data wrappers.                                        |
   | \df[antw][S+] [PATTERN]     | Lists all available functions, together with their parameters and return types. <strong>a</strong> indicates an aggregate function, <strong>n</strong> indicates a common function, <strong>t</strong> indicates a trigger, and <strong>w</strong> indicates a window function.|
   | \dF[+] [PATTERN]            | Lists all text search configurations.                                |
   | \dFd[+] [PATTERN]           | Lists all text search dictionaries.                                    |
   | \dFp[+] [PATTERN]           | Lists all text search parsers.                                  |
   | \dFt[+] [PATTERN]           | Lists all text search templates.                                    |
   | \dl                         | This is an alias for <strong>\lo_list</strong>, which shows a list of large objects.                      |
   | \dL[S+] [PATTERN]           | Lists all available program languages.                                        |
   | \dm[S+] [PATTERN]           | Lists materialized views.                                                |
   | \dn[S+] [PATTERN]           | Lists all schemas (namespaces).                                |
   | \do[S] [PATTERN]            | Lists all available operators with their operand and return types.      |
   | \dO[S+] [PATTERN]           | Lists collations.                                                |
   | \dp [PATTERN]               | Lists tables, views, and related permissions.                  |
   | \dT[S+] [PATTERN]           | Lists all data types.                                        |
   | \dE[S+] [PATTERN]           | In this group of commands, the letters E, i, s, t, and v stand for a foreign table, index, sequence, table, or view, respectively. You can specify any or a combination of these letters sequenced in any order to obtain an object list. For example, <strong>\dit</strong> lists all indexes and tables. If a command is suffixed with a plus sign (+), physical dimensions and related descriptions of each object will be displayed.|
   | \dx[+] [PATTERN]            | Lists installed extensions.                                  |
   | \l[+]                       | Lists the names, owners, character set encodings, and permissions of all the databases in the server.|
   | \z [PATTERN]                | Lists all tables, views, and sequences in the database and their access permissions.      |

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: **'sql_mode_strict,sql_mode_full_group,pipes_as_concat,ansi_quotes'**

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

## dolphin\.default\_database\_name<a name="section203671436850"></a>

**Parameter description**: Specifies the default database name used by dolphin protocol plugin.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a string

**Default value**: database\_name in connection session while initialize dolphin protocol pulin at first time.

## b\_compatibility\_mode<a name="section203671436825"></a>

**Parameter description:** The parameter value is of the Boolean type. This parameter affects some conflicting functions and operators in the Dolphin plug-in. When this parameter is enabled, the compatibility logic is executed for these functions and operators. When this parameter is disabled, the original openGauss logic is retained.

Currently, the following operators are affected:

1. [LIKE/NOT LIKE](dolphin-character-processing-functions-and-operators.md#EN-US_TOPIC_0289900656)
2. Character type XOR [^](dolphin-character-processing-functions-and-operators.md#EN-US_TOPIC_0289900656)
3. Numeric type XOR [^](dolphin-arithmetic-functions-and-operators.md#EN-US_TOPIC_0289900469)
4. [&&](dolphin-logical-operators.md#EN-US_TOPIC_0289900469)
5. [#](dolphin-comment-operators.md#EN-US_TOPIC_0289900280)

The following functions are affected:
1. [LAST_DAY](dolphin-date-and-time-processing-functions-and-operators.md#en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
2. [TIMESTAMPDIFF](dolphin-date-and-time-processing-functions-and-operators.md#en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)
3. [FORMAT](dolphin-character-processing-functions-and-operators.md#EN-US_TOPIC_0289900656)
4. [EXTRACT](dolphin-date-and-time-processing-functions-and-operators.md#en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_sd0d47140cdd048c1964ed53f9858f436)

Other affected parameters:
1. [?](dolphin-prepare.md#en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd)

This parameter is a USERSET parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on** indicates that the new compatibility function is used.
-   **off** indicates that the compatibility function is disabled and the original kernel functions are used.

**Default value**: **off**

## version_comment<a name="section203671436826"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating the database server and license information.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value:** openGauss Server(MulanPSL-2.0)

## auto_increment_increment<a name="section203671436827"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The parameter value is an integer, indicating the auto-increment step of the auto-increment column.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [1,65535]

**Default value**: **1**

## character_set_client<a name="section203671436828"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the client uses the character set.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value**: **utf8**

## character_set_connection<a name="section203671436829"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the character set is used when no character set is introduced to the program.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value**: **utf8**

## character_set_results<a name="section203671436830"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the server uses the character set to return query results to the client.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value**: **utf8**

## character_set_server<a name="section203671436831"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the server uses the character set.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value**: **utf8**

## collation_server<a name="section203671436832"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the server uses the sorting rule.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value**: **latin1_swedish_ci**

## collation_connection<a name="section203671436833"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the connection character set uses the sorting rule.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value:** none

## init_connect<a name="section203671436834"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating the SQL statement executed during connection initialization.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value:** none

## interactive_timeout<a name="section203671436835"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is an integer, indicating that the server closes an interactive connection after the number of seconds in which the connection is inactive.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [1,31536000]

**Default value**: **28800**

## license<a name="section203671436836"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the server uses the license.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value**: **MulanPSL-2.0**

## max_allowed_packet<a name="section203671436837"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is an integer, indicating the upper limit (in bytes) of the data packet size.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [1024,1073741824]

**Default value**: **4194304**

## net_buffer_length<a name="section203671436838"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is an integer, indicating the default buffer size. The buffer size can be dynamically set to the value of **max_allowed_packet** and restored after the SQL statement ends.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [1024,1048576]

**Default value:** **16384**

## net_write_timeout<a name="section203671436839"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is an integer, indicating that the server stops writing data after the number of seconds specified by this parameter.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [1,31536000]

**Default value**: **60**

## query_cache_size<a name="section203671436840"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is an integer, indicating the size (in bytes) of the memory allocated when the query result is cached.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [0,9223372036854775807]

**Default value**: **1048576**

## query_cache_type<a name="section203671436841"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is an integer, indicating the type of the cache to be queried.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [0,2]

**Default value**: **0**

## system_time_zone<a name="section203671436842"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating the system time zone of the server.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: a string

**Default value:** none

## time_zone<a name="section203671436843"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating the current time zone.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [-12:59,+13:00]

**Default value**: **SYSTEM**

## wait_timeout<a name="section203671436844"></a>

**Parameter description:** Currently, this parameter is read-only and has no specific meaning. The value is a string, indicating that the server closes a non-interactive connection after the number of seconds in which the connection is inactive.

Currently, this parameter is an INTERNAL parameter and cannot be set.

**Value range**: [1,31536000]

**Default value**: **28800**

## lower_case_table_names<a name="section203671436844"></a>

**Parameter description**: Specifies whether the user name and table name are case sensitive. The value **0** indicates that the user name and table name are case sensitive. A value greater than 0 indicates that the user name and table name are case insensitive.

This parameter is a USERSET parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: [0,2]

**Default value**: **1**