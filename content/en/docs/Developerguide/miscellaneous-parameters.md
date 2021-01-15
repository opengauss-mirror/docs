# Miscellaneous Parameters<a name="EN-US_TOPIC_0289900522"></a>

## server\_version<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s1df9119d74fe45da9452d4cb4802f84c"></a>

**Parameter description**: Specifies the server version number.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value range**: a string

**Default value**:  **9.2.4**

## server\_version\_num<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_sa4182f08e006431fbad639fe6963560f"></a>

**Parameter description**: Specifies the server version number.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value range**: an integer

**Default value**:  **90204**

## block\_size<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s46449cae21604e8d828a3614d26d3874"></a>

**Parameter description**: Specifies the block size of the current database.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value**:  **8192**

**Default value**:  **8192**

## segment\_size<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_se61b24947cbf4fc99dbf52bbdbd5291b"></a>

**Parameter description**: Specifies the segment file size of the current database.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Unit**: 8 KB

**Default value**: 131072, that is, 1 GB

## max\_index\_keys<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s1992e0f4a9694daba20844fd94408f80"></a>

**Parameter description**: Specifies the maximum number of index keys supported by the current database.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Default value**:  **32**

## integer\_datetimes<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s2cf7071ca7cf4b79a23cbc4664f508a8"></a>

**Parameter description**: Specifies whether the date and time are in the 64-bit integer format.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value range**: Boolean

-   **on**  indicates that the 64-bit integer format is used.
-   **off**  indicates that the 64-bit integer format is not used.

**Default value**:  **on**

## lc\_collate<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s2f3ca5fe93c04242aae028fd44ffb57c"></a>

**Parameter description:**  Specifies the locale in which sorting of textual data is done.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Default value**: Determined by the configuration set during the openGauss installation and deployment.

## lc\_ctype<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s8d813413a667463db959fd155dca4a7d"></a>

**Parameter description**: Specifies the locale that determines character classifications. For example, it specifies what a letter and its upper-case equivalent are.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Default value**: Determined by the configuration set during the openGauss installation and deployment.

## max\_identifier\_length<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s0aed6ba352a6486a9f2065914e6322c4"></a>

**Parameter description**: Specifies the maximum identifier length.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value range**: an integer

**Default value**:  **63**

## server\_encoding<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s6ea4fdcca287481ba5fff4d6defeaf79"></a>

**Parameter description**: Specifies the database encoding \(character set\).

By default, gs\_initdb will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Default value:**  determined by the current system environment when the database is created.

## enable\_upgrade\_merge\_lock\_mode<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_s46dd96b9ae0c45ff83bb1c444cbc4327"></a>

**Parameter description**: If this parameter is set to  **on**, the delta merge operation internally increases the lock level, and errors can be prevented when update and delete operations are performed at the same time.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   If this parameter is set to  **on**, the delta merge operation internally increases the lock level. In this way, when the  **DELTAMERGE**  operation is concurrently performed with the  **UPDATE**  or  **DELETE**  operation, one operation can be performed only after the previous one is complete.
-   If this parameter is set to  **off**, and any two of the  **DELTAMERGE**,  **UPDATE**, and  **DELETE**  operations are concurrently performed to data in a row in the delta table of the HDFS table, errors will be reported during the later operation, and the operation will stop.

**Default value**:  **off**

## job\_queue\_processes<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section10342177134137"></a>

**Parameter description:**  Specifies the number of jobs that can be concurrently executed. This parameter is a POSTMASTER parameter. You can set it using  **gs\_guc**, and you need to restart  **gaussdb**  to make the setting take effect.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 0 to 1000

Function:

-   Setting  **job\_queue\_processes**  to  **0**  indicates that the scheduled job function is disabled and that no job will be executed. \(Enabling scheduled jobs may affect the system performance. At sites where this function is not required, you are advised to disable it.\)
-   Setting  **job\_queue\_processes**  to a value that is greater than  **0**  indicates that the scheduled job function is enabled and this value is the maximum number of jobs that can be concurrently processed.

After the scheduled job function is enabled, the job\_scheduler thread polls the  **pg\_job**  system catalog at a scheduled interval. The scheduled job check is performed every second by default.

Too many concurrent jobs consume many system resources, so you need to set the number of concurrent jobs to be processed. If the current number of concurrent jobs reaches the value of  **job\_queue\_processes**  and some of them expire, these jobs will be postponed to the next polling period. Therefore, you are advised to set the polling interval \(the  **Interval**  parameter of the submit interface\) based on the execution duration of each job to avoid the problem that jobs in the next polling period cannot be properly processed because of overlong job execution time.

Note: If the number of concurrent jobs is large and the value is too small, these jobs will wait in queues. However, a large parameter value leads to large resource consumption. You are advised to set this parameter to  **100**  and change it based on the system resource condition.

**Default value:** **10**

## ngram\_gram\_size<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section27776351165838"></a>

**Parameter description**: Specifies the length of the ngram parser segmentation.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 4

**Default value:** **2**

## ngram\_grapsymbol\_ignore<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section58839880164334"></a>

**Parameter description**: Specifies whether the ngram parser ignores graphical characters.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: The ngram parser ignores graphical characters.
-   **off**: The ngram parser does not ignore graphical characters.

**Default value**:  **off**

## ngram\_punctuation\_ignore<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section45880732164140"></a>

**Parameter description**: Specifies whether the ngram parser ignores punctuations.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: The ngram parser ignores punctuations.
-   **off**: The ngram parser does not ignore punctuations.

**Default value**:  **on**

## transparent\_encrypted\_string<a name="en-us_topic_0283137574_en-us_topic_0237124754_section59019117496"></a>

**Parameter description**: Specifies a sample string that is transparently encrypted. Its value is generated by encrypting  **TRANS\_ENCRYPT\_SAMPLE\_STRING**  using a database secret key. The ciphertext is used to check whether the DEK obtained during secondary startup is correct. If it is incorrect, database nodes will not be started. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that openGauss is a not encrypted.

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Do not set this parameter manually. Otherwise, openGauss may become faulty.

## transparent\_encrypt\_kms\_url<a name="en-us_topic_0283137574_en-us_topic_0237124754_section14139346195718"></a>

**Parameter description**: Specifies the URL for obtaining the database secret key to be transparently encrypted. It must contain only the characters specified in RFC3986, and the maximum length is 2047 bytes. The format is  **kms://**_Protocol_**@**_KMS host name 1_**;**_KMS host name 2_**:**_KMS port number_**/kms**, for example,  **kms://https@linux175:29800/**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## transparent\_encrypt\_kms\_region<a name="en-us_topic_0283137574_en-us_topic_0237124754_section11856132918597"></a>

**Parameter description**: Specifies the deployment region of openGauss. It must contain only the characters specified in RFC3986, and the maximum length is 2047 bytes.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## behavior\_compat\_options<a name="en-us_topic_0283137574_en-us_topic_0237124754_section1980124735516"></a>

**Parameter description**: Specifies database compatibility behavior. Multiple items are separated by commas \(,\).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Currently, only compatibility configuration items in  [Table 1](#en-us_topic_0283137574_en-us_topic_0237124754_table182861153114812)  are supported.
>-   Multiple items are separated by commas \(,\), for example,  **set behavior\_compat\_options='end\_month\_calculate,display\_leading\_zero';**.

**Table  1**  Compatibility configuration items

<a name="en-us_topic_0283137574_en-us_topic_0237124754_table182861153114812"></a>
<table><thead align="left"><tr id="en-us_topic_0283137574_en-us_topic_0237124754_row1128619535483"><th class="cellrowborder" valign="top" width="24.43%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137574_en-us_topic_0237124754_p192861053194814"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p192861053194814"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p192861053194814"></a>Configuration Item</p>
</th>
<th class="cellrowborder" valign="top" width="75.57000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137574_en-us_topic_0237124754_p10286553144814"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p10286553144814"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p10286553144814"></a>Behavior</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137574_en-us_topic_0237124754_row2028605318483"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p152861153174819"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p152861153174819"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p152861153174819"></a>display_leading_zero</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p192848725515"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p192848725515"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p192848725515"></a>Specifies how floating point numbers are displayed.</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul11299194763811"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul11299194763811"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul11299194763811"><li>If this item is not specified, for a decimal number between -1 and 1, the 0 before the decimal point is not displayed. For example, 0.25 is displayed as <strong id="b2044195381412"><a name="b2044195381412"></a><a name="b2044195381412"></a>.25</strong>.</li><li>If this item is specified, for a decimal number between -1 and 1, the 0 before the decimal point is displayed. For example, 0.25 is displayed as <strong id="b18495135611145"><a name="b18495135611145"></a><a name="b18495135611145"></a>0.25</strong>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row14286165319484"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p15286253134812"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15286253134812"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15286253134812"></a>end_month_calculate</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p12991318145719"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12991318145719"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12991318145719"></a>Specifies the calculation logic of the add_months function.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p43715241715"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p43715241715"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p43715241715"></a>Assume that the two parameters of the add_months function are <strong id="b544113152"><a name="b544113152"></a><a name="b544113152"></a>param1</strong> and <strong id="b215201171511"><a name="b215201171511"></a><a name="b215201171511"></a>param2</strong>, and that the month of <strong id="b416118153"><a name="b416118153"></a><a name="b416118153"></a>param1</strong> and <strong id="b111619181511"><a name="b111619181511"></a><a name="b111619181511"></a>param2</strong> is <strong id="b1217171161515"><a name="b1217171161515"></a><a name="b1217171161515"></a>result</strong>.</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul69601452123815"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul69601452123815"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul69601452123815"><li>If this item is not specified, and the <strong id="b1370892191520"><a name="b1370892191520"></a><a name="b1370892191520"></a>Day</strong> of <strong id="b070810231512"><a name="b070810231512"></a><a name="b070810231512"></a>param1</strong> indicates the last day of a month shorter than <strong id="b1470992141511"><a name="b1470992141511"></a><a name="b1470992141511"></a>result</strong>, the <strong id="b147090291515"><a name="b147090291515"></a><a name="b147090291515"></a>Day</strong> in the calculation result will equal that in <strong id="b16709226159"><a name="b16709226159"></a><a name="b16709226159"></a>param1</strong>. For example:</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen568916248386"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen568916248386"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen568916248386"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text5945107132215"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text5945107132215"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text5945107132215"></a>postgres=# </span>select add_months('2018-02-28',3) from dual;
add_months
---------------------
2018-05-28 00:00:00
(1 row)</pre>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul165115579383"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul165115579383"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul165115579383"><li>If this item is specified, and the <strong id="b16280208101511"><a name="b16280208101511"></a><a name="b16280208101511"></a>Day</strong> of <strong id="b142803871518"><a name="b142803871518"></a><a name="b142803871518"></a>param1</strong> indicates the last day of a month shorter than <strong id="b72811687155"><a name="b72811687155"></a><a name="b72811687155"></a>result</strong>, the <strong id="b1228115810152"><a name="b1228115810152"></a><a name="b1228115810152"></a>Day</strong> in the calculation result will equal that in <strong id="b72821981156"><a name="b72821981156"></a><a name="b72821981156"></a>result</strong>. For example:</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen45031931103816"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen45031931103816"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen45031931103816"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text161501793223"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text161501793223"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text161501793223"></a>postgres=# </span>select add_months('2018-02-28',3) from dual;
add_months
---------------------
2018-05-31 00:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row528635394812"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p128618539487"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p128618539487"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p128618539487"></a>compat_analyze_sample</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p828635304814"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p828635304814"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p828635304814"></a>Specifies the sampling behavior of the ANALYZE operation.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p108691828173114"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p108691828173114"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p108691828173114"></a>If this item is specified, the sample collected by the ANALYZE operation will be limited to around 30,000 records, DBnode memory consumption and maintaining the stability of ANALYZE.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row84793168551"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p7480171620559"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7480171620559"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7480171620559"></a>bind_schema_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p7391102013556"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7391102013556"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7391102013556"></a>Binds a schema with the tablespace with the same name.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p164801516195514"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p164801516195514"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p164801516195514"></a>If a tablespace name is the same as <em id="i1876015141613"><a name="i1876015141613"></a><a name="i1876015141613"></a>sche_name</em>, <strong id="b388820153169"><a name="b388820153169"></a><a name="b388820153169"></a>default_tablespace</strong> will also be set to <em id="i08891150163"><a name="i08891150163"></a><a name="i08891150163"></a>sche_name</em> if <strong id="b18890151513169"><a name="b18890151513169"></a><a name="b18890151513169"></a>search_path</strong> is set to <em id="i5890151510163"><a name="i5890151510163"></a><a name="i5890151510163"></a>sche_name</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row104641129185511"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p4465122914550"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p4465122914550"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p4465122914550"></a>bind_procedure_searchpath</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p195111830125718"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p195111830125718"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p195111830125718"></a>Specifies the search path of the database object for which no schema name is specified.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p12261948214"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12261948214"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12261948214"></a>If no schema name is specified for a stored procedure, the search is performed in the schema to which the stored procedure belongs.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p716129629"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p716129629"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p716129629"></a>If the stored procedure is not found, the following operations are performed:</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul7861812102420"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul7861812102420"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul7861812102420"><li>If this item is not specified, the system reports an error and exits.</li><li>If this item is specified, the search continues based on the settings of <strong id="b929182321614"><a name="b929182321614"></a><a name="b929182321614"></a>search_path</strong>. If the issue persists, the system reports an error and exits.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row24411166214"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p20442166924"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p20442166924"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p20442166924"></a>correct_to_number</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p13214155316919"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p13214155316919"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p13214155316919"></a>Controls the compatibility of the to_number() result.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p104421662219"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p104421662219"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p104421662219"></a>If this item is specified, the result of the to_number() function is the same as that of PG11. Otherwise, the result is the same as that of the O database.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row789175471518"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p1289114540156"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1289114540156"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1289114540156"></a>unbind_dive_bound</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p88921554101510"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p88921554101510"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p88921554101510"></a>Controls the range check on the result of integer division.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p12567153015184"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12567153015184"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12567153015184"></a>If this item is specified, you do not need to check the range of the division result. For example, the result of INT_MIN/(-1) can be <em id="i17481951141610"><a name="i17481951141610"></a><a name="i17481951141610"></a>INT_MAX</em>+1. If this item is not specified, an out-of-bounds error is reported because the result is greater than <em id="i1975805111161"><a name="i1975805111161"></a><a name="i1975805111161"></a>INT_MAX</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row482471810177"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p188261018181719"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p188261018181719"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p188261018181719"></a>merge_update_multi</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p1182614187179"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1182614187179"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1182614187179"></a>Performs an update if multiple rows are matched for <strong id="b2058010555166"><a name="b2058010555166"></a><a name="b2058010555166"></a>MERGE INTO</strong>.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p185787144214"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p185787144214"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p185787144214"></a>If this item is specified, no error is reported if multiple rows are matched. Otherwise, an error is reported (same as the O database).</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row648032118477"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p16481102116476"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p16481102116476"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p16481102116476"></a>return_null_string</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p17481162111477"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p17481162111477"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p17481162111477"></a>Specifies how to display the empty result (empty string '') of the lpad() and rpad() functions.</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul828544001313"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul828544001313"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul828544001313"><li>If this item is not specified, the empty string is displayed as <strong id="b1353120716179"><a name="b1353120716179"></a><a name="b1353120716179"></a>NULL</strong>.</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen17865171482915"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen17865171482915"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen17865171482915"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text19711022217"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text19711022217"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text19711022217"></a>postgres=# </span>select length(lpad('123',0,'*')) from dual;
length
--------

(1 row)</pre>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul75590181418"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul75590181418"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul75590181418"><li>If this item is specified, the empty string is displayed as single quotation marks ('').</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen104295208294"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen104295208294"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen104295208294"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text171811411192213"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text171811411192213"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text171811411192213"></a>postgres=# </span>select length(lpad('123',0,'*')) from dual;
length
--------
0
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row1255211543476"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p19552125434713"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p19552125434713"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p19552125434713"></a>compat_concat_variadic</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p15521954134717"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15521954134717"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15521954134717"></a>Specifies the compatibility of variadic results of the concat() and concat_ws() functions.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p1060812139425"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1060812139425"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1060812139425"></a>If this item is specified and a concat function has a parameter of the variadic type, different result formats in O and Teradata are retained. If this item is not specified and a concat function has a parameter of the variadic type, the result format of O is retained for both O and Teradata. This option has no effect on MY because MY has no variadic type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row4359610142013"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p123596109205"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p123596109205"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p123596109205"></a><span id="en-us_topic_0283137574_en-us_topic_0237124754_text938325714529"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text938325714529"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text938325714529"></a>merge_update_multi</span></p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p15359171062012"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15359171062012"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15359171062012"></a>Controls the UPDATE operation if a data record in the destination table conflicts with multiple source data records when <strong id="b144324533369"><a name="b144324533369"></a><a name="b144324533369"></a>MERGE INTO ... WHEN MATCHED THEN UPDATE</strong> (see <a href="en-us_topic_0283137308.md">MERGE INTO</a>) and <strong id="b169651985377"><a name="b169651985377"></a><a name="b169651985377"></a>INSERT ... ON DUPLICATE KEY UPDATE</strong> (see <a href="en-us_topic_0283137542.md">INSERT</a>) are used.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p87151258513"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p87151258513"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p87151258513"></a>If this item is specified and the preceding scenario exists, the system performs multiple UPDATE operations on the conflicting row. If this item is not specified and the preceding scenario exists, an error is reported, that is, the MERGE or INSERT operation fails.</p>
</td>
</tr>
</tbody>
</table>

## table\_skewness\_warning\_threshold<a name="en-us_topic_0283137574_en-us_topic_0237124754_section174079331456"></a>

**Parameter description**: Specifies the threshold for triggering a table skew alarm.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to 1

**Default value**:  **1**

## table\_skewness\_warning\_rows<a name="en-us_topic_0283137574_en-us_topic_0237124754_section816564619464"></a>

**Parameter description**: Specifies the minimum number of rows for triggering a table skew alarm.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_

**Default value**:  **100000**

## datanode\_heartbeat\_interval<a name="en-us_topic_0283137574_en-us_topic_0237124754_section136882143238"></a>

**Parameter description**: Specifies the interval at which heartbeat messages are sent between heartbeat threads. You are advised to set this parameter to a value no more than wal\_receiver\_timeout/2.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1000 to 60000. The unit is ms.

Default value:  **1s**

## bgwriter\_thread\_num<a name="en-us_topic_0283137574_section1227710331887"></a>

**Parameter description**: Specifies the number of bgwriter threads for flushing pages after the incremental checkpoint is enabled. Dirty pages to be evicted are flushed to disks, and non-dirty pages are placed in the candidate buffer chain. This parameter helps accelerate buffer eviction and improve performance.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [en-us\_topic\_0237121562.md\#en-us\_topic\_0059777490\_t91a6f212010f4503b24d7943aed6d846](en-us_topic_0237121562.md#en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 8

-   To test the effect of disabling this feature during development, you can set this parameter to  **0**. However, if this parameter is set to  **0**, the value will be changed to  **1**  in the code and the feature cannot be disabled.
-   If this parameter is set to a value ranging from 1 to 8, the corresponding number of background threads are started to maintain the candidate buffer chain. Dirty pages that meet the conditions are flushed to disks, and non-dirty pages are added to the candidate list.

**Default value**:  **2**

## candidate\_buf\_percent\_target<a name="en-us_topic_0283137574_section1590894110187"></a>

**Parameter description**: Specifies the expected percentage of available buffers in the shared\_buffer when the incremental checkpoint is enabled and the value of bgwriter\_thread\_num is not 0. When the number of available buffers in the current candidate buffer is less than the target value, the bgwriter thread starts to flush dirty pages that meet the conditions to disks.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [en-us\_topic\_0237121562.md\#en-us\_topic\_0059777490\_t91a6f212010f4503b24d7943aed6d846](en-us_topic_0237121562.md#en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: double precision floating point number ranging from 0.1 to 0.85

**Default value**:  **0.3**

## pagewriter\_thread\_num<a name="en-us_topic_0283137574_en-us_topic_0237124754_section20255113713185"></a>

**Parameter description**: Specifies the number of threads for background page flushing after the incremental checkpoint is enabled. Dirty pages are flushed in sequence to disks, promoting recovery points.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 8

**Default value**:  **2**

## pagewriter\_threshold<a name="en-us_topic_0283137574_en-us_topic_0237124754_section45151742122010"></a>

**Parameter description**: Specifies the number of dirty pages that must be reached for the thread to continue refreshing dirty pages without sleeping when incremental checkpointing is enabled. This parameter does not take effect any more.

Use  **dirty\_page\_percent\_max**  to set the value.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to  _INT\_MAX_

**Default value**:  **818**

## dirty\_page\_percent\_max<a name="en-us_topic_0283137574_section1413763444211"></a>

**Parameter description**: Specifies the percentage of dirty pages to shared\_buffers after the incremental checkpoint is enabled. When the percentage is reached, the background thread for flushing pages continues flushing dirty pages without sleeping.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0.1 to 1

**Default value**:  **0.9**

## pagewriter\_sleep<a name="en-us_topic_0283137574_en-us_topic_0237124754_section13857153472215"></a>

**Parameter description**: Specifies the time in which the thread continues refreshing dirty pages when incremental checkpointing is enabled and the number of dirty pages does not reach the value of  **pagewriter\_threshold**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](en-us_topic_0283137176.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 3600000. The unit is ms.

**Default value**:  **2000ms**

## remote\_read\_mode<a name="en-us_topic_0283137574_en-us_topic_0237124754_section196393555394"></a>

**Parameter description**: Specifies whether to enable the remote read function. This function allows pages on the standby server to be read when reading pages on the primary server fails.

**Value range**: enumerated values

-   **off**  indicates that the remote read function is disabled.
-   **non\_authentication**  indicates that the remote read function is enabled but certificate authentication is not required.
-   **authentication**  indicates that the remote read function is enabled and certificate authentication is required.

**Default value**:  **authentication**

