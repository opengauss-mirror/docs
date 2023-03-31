# Platform and Client Compatibility<a name="EN-US_TOPIC_0289900474"></a>

Many platforms use the database system. External compatibility of the database system provides a lot of convenience for platforms.

## convert\_string\_to\_digit<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s522001c800824f5fb1ef55596037d4d3"></a>

**Parameter description:**  Specifies the implicit conversion priority, which determines whether to preferentially convert strings into numbers.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that strings are preferentially converted into numbers.
-   **off**  indicates that strings are not preferentially converted into numbers.

**Default value**:  **on**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Adjusting this parameter will change the internal data type conversion rule and cause unexpected behaviors. Exercise caution when performing this operation.

## nls\_timestamp\_format<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sd50fac6da781483cae15aaa57243b88e"></a>

**Parameter description:**  Specifies the default timestamp format.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **DD-Mon-YYYY HH:MI:SS.FF AM**

## max\_function\_args<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s1a3d3c95fbda4e20a65cb3400cf6a418"></a>

**Parameter description**: Specifies the maximum number of parameters allowed for a function.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value range**: an integer

**Default value**:  **8192**

## transform\_null\_equals<a name="en-us_topic_0283137001_en-us_topic_0237124738_en-us_topic_0059779195_s08818c8140cf437196068571d8291e0e"></a>

**Parameter description**: Specifies whether expressions of the form expr = NULL \(or NULL = expr\) are treated as expr IS NULL. They return true if expr evaluates to the  **NULL**  value, and false otherwise.

-   The correct SQL-standard-compliant behavior of  **expr = NULL**  is to always return  **NULL**  \(unknown\).
-   Filtered forms in Microsoft Access generate queries that appear to use  **expr = NULL**  to test for null values. If you turn this option on, you can use this interface to access the database.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that expressions of the form  **expr = NULL**  \(or  **NULL = expr**\) are treated as expr  **IS NULL**.
-   **off**  indicates that  **expr = NULL**  always returns  **NULL**  \(unknown\).

**Default value**:  **off**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>New users are always confused about the semantics of expressions involving  **NULL**  values. Therefore,  **off**  is used as the default value.

## support\_extended\_features<a name="en-us_topic_0283137001_en-us_topic_0237124738_en-us_topic_0059779195_s1b60ec6dbc79490bbadf5dd62ba2538c"></a>

**Parameter description**: Specifies whether extended database features are supported.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that extended database features are supported.
-   **off**  indicates that extended database features are not supported.

**Default value**:  **off**

## sql\_compatibility<a name="section585105311613"></a>

**Parameter description**: Specifies the type of mainstream database with which the SQL syntax and statement behavior of the database is compatible. This parameter is an INTERNAL parameter. It can be viewed but cannot be modified.

**Value range**: enumerated type

-   **A**  indicates that the database is compatible with the Oracle database.
-   **B**  indicates that the database is compatible with the MySQL database.
-   **C**  indicates that the database is compatible with the Teradata database.
-   **PG**  indicates that the database is compatible with the PostgreSQL database.

**Default value**:  **A**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   This parameter can be set by **dbcompatibility** only when you run the  [**CREATE DATABASE**](create-database.md)  command to create a database.
>-   In the database, this parameter must be set to a specific value. It can be set to  **A**  or  **B**  and cannot be changed randomly. Otherwise, the setting is not consistent with the database behavior.

## behavior\_compat\_options<a name="en-us_topic_0283137574_en-us_topic_0237124754_section1980124735516"></a>

**Parameter description**: Specifies database compatibility behavior. Multiple items are separated by commas \(,\).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **""**

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
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul11299194763811"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul11299194763811"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul11299194763811"><li>If this item is not specified, for a decimal number between –1 and 1, the 0 before the decimal point is not displayed. For example, 0.25 is displayed as <strong id="b718201521110"><a name="b718201521110"></a><a name="b718201521110"></a>.25</strong>.</li><li>If this item is specified, for a decimal number between –1 and 1, the 0 before the decimal point is displayed. For example, 0.25 is displayed as <strong id="b134711420181112"><a name="b134711420181112"></a><a name="b134711420181112"></a>0.25</strong>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row14286165319484"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p15286253134812"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15286253134812"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15286253134812"></a>end_month_calculate</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p12991318145719"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12991318145719"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12991318145719"></a>Specifies the calculation logic of the add_months function.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p43715241715"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p43715241715"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p43715241715"></a>Assume that the two parameters of the add_months function are <strong id="b63821627131115"><a name="b63821627131115"></a><a name="b63821627131115"></a>param1</strong> and <strong id="b13388102781114"><a name="b13388102781114"></a><a name="b13388102781114"></a>param2</strong>, and that the month of <strong id="b938842741116"><a name="b938842741116"></a><a name="b938842741116"></a>param1</strong> and <strong id="b138972710114"><a name="b138972710114"></a><a name="b138972710114"></a>param2</strong> is <strong id="b183891727161119"><a name="b183891727161119"></a><a name="b183891727161119"></a>result</strong>.</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul69601452123815"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul69601452123815"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul69601452123815"><li>If this item is not specified, and the <strong id="b17177133120110"><a name="b17177133120110"></a><a name="b17177133120110"></a>Day</strong> of <strong id="b5183931121112"><a name="b5183931121112"></a><a name="b5183931121112"></a>param1</strong> indicates the last day of a month shorter than <strong id="b1118333151118"><a name="b1118333151118"></a><a name="b1118333151118"></a>result</strong>, the <strong id="b18183731161110"><a name="b18183731161110"></a><a name="b18183731161110"></a>Day</strong> in the calculation result will equal that in <strong id="b2184123111116"><a name="b2184123111116"></a><a name="b2184123111116"></a>param1</strong>. For example:</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen568916248386"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen568916248386"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen568916248386"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text5945107132215"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text5945107132215"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text5945107132215"></a>openGauss=# </span>select add_months('2018-02-28',3) from sys_dummy;
add_months
---------------------
2018-05-28 00:00:00
(1 row)</pre>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul165115579383"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul165115579383"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul165115579383"><li>If this item is specified, and the <strong id="b1677511391112"><a name="b1677511391112"></a><a name="b1677511391112"></a>Day</strong> of <strong id="b47811339141119"><a name="b47811339141119"></a><a name="b47811339141119"></a>param1</strong> indicates the last day of a month shorter than <strong id="b27826399117"><a name="b27826399117"></a><a name="b27826399117"></a>result</strong>, the <strong id="b16782143917112"><a name="b16782143917112"></a><a name="b16782143917112"></a>Day</strong> in the calculation result will equal that in <strong id="b13782039121111"><a name="b13782039121111"></a><a name="b13782039121111"></a>result</strong>. For example:</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen45031931103816"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen45031931103816"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen45031931103816"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text161501793223"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text161501793223"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text161501793223"></a>openGauss=# </span>select add_months('2018-02-28',3) from sys_dummy;
add_months
---------------------
2018-05-31 00:00:00
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row528635394812"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p128618539487"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p128618539487"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p128618539487"></a>compat_analyze_sample</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p828635304814"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p828635304814"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p828635304814"></a>Specifies the sampling behavior of the <strong id="b854115128121"><a name="b854115128121"></a><a name="b854115128121"></a>ANALYZE</strong> operation.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p108691828173114"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p108691828173114"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p108691828173114"></a>If this item is specified, the sample collected by the ANALYZE operation will be limited to around 30,000 records, controlling database node memory consumption and maintaining the stability of ANALYZE.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row84793168551"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p7480171620559"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7480171620559"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7480171620559"></a>bind_schema_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p7391102013556"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7391102013556"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p7391102013556"></a>Binds a schema with the tablespace with the same name.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p164801516195514"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p164801516195514"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p164801516195514"></a>If a tablespace name is the same as <em id="i824815891117"><a name="i824815891117"></a><a name="i824815891117"></a>sche_name</em>, <strong id="b1725420581119"><a name="b1725420581119"></a><a name="b1725420581119"></a>default_tablespace</strong> will also be set to <em id="i22553582115"><a name="i22553582115"></a><a name="i22553582115"></a>sche_name</em> if <strong id="b3255185881114"><a name="b3255185881114"></a><a name="b3255185881114"></a>search_path</strong> is set to <em id="i1125595815113"><a name="i1125595815113"></a><a name="i1125595815113"></a>sche_name</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row104641129185511"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p4465122914550"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p4465122914550"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p4465122914550"></a>bind_procedure_searchpath</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p195111830125718"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p195111830125718"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p195111830125718"></a>Specifies the search path of the database object for which no schema name is specified.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p12261948214"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12261948214"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12261948214"></a>If no schema name is specified for a stored procedure, the search is performed in the schema to which the stored procedure belongs.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p716129629"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p716129629"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p716129629"></a>If the stored procedure is not found, the following operations are performed:</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul7861812102420"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul7861812102420"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul7861812102420"><li>If this item is not specified, the system reports an error and exits.</li><li>If this item is specified, the search continues based on the settings of <strong id="b256641013121"><a name="b256641013121"></a><a name="b256641013121"></a>search_path</strong>. If the issue persists, the system reports an error and exits.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row24411166214"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p20442166924"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p20442166924"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p20442166924"></a>correct_to_number</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p13214155316919"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p13214155316919"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p13214155316919"></a>Specifies the compatibility of the to_number() result.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p104421662219"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p104421662219"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p104421662219"></a>If this item is specified, the result of the <strong id="b16890410172112"><a name="b16890410172112"></a><a name="b16890410172112"></a>to_number()</strong> function is the same as that of PG11. Otherwise, the result is the same as that of the O database.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row789175471518"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p1289114540156"><a name="p1289114540156"></a><a name="p1289114540156"></a>unbind_divide_bound</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p88921554101510"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p88921554101510"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p88921554101510"></a>Specifies the range check on the result of integer division.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p12567153015184"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12567153015184"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p12567153015184"></a>If this item is specified, you do not need to check the range of the division result. For example, the result of INT_MIN/(-1) can be <em id="i466532418015"><a name="i466532418015"></a><a name="i466532418015"></a>INT_MAX</em>+1. If this item is not specified, an out-of-bounds error is reported because the result is greater than <em id="i466610247019"><a name="i466610247019"></a><a name="i466610247019"></a>INT_MAX</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row482471810177"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p188261018181719"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p188261018181719"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p188261018181719"></a>convert_string_digit_to_numeric</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p1182614187179"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1182614187179"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1182614187179"></a>Determines whether to convert columns of the character string type to those of the numeric type before columns of these two types are compared.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row648032118477"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p16481102116476"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p16481102116476"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p16481102116476"></a>return_null_string</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p17481162111477"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p17481162111477"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p17481162111477"></a>Specifies how to display the empty result (empty string '') of the lpad() and rpad() functions.</p>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul828544001313"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul828544001313"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul828544001313"><li>If this item is not specified, the empty string is displayed as <strong id="b23653426014"><a name="b23653426014"></a><a name="b23653426014"></a>NULL</strong>.</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen17865171482915"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen17865171482915"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen17865171482915"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text19711022217"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text19711022217"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text19711022217"></a>openGauss=# </span>select length(lpad('123',0,'*')) from sys_dummy;
length
--------

(1 row)</pre>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_ul75590181418"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_ul75590181418"></a><ul id="en-us_topic_0283137574_en-us_topic_0237124754_ul75590181418"><li>If this item is specified, the empty string is displayed as single quotation marks ('').</li></ul>
<a name="en-us_topic_0283137574_en-us_topic_0237124754_screen104295208294"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_screen104295208294"></a><pre class="screen" codetype="Sql" id="en-us_topic_0283137574_en-us_topic_0237124754_screen104295208294"><span id="en-us_topic_0283137574_en-us_topic_0237124754_text171811411192213"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text171811411192213"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text171811411192213"></a>openGauss=# </span>select length(lpad('123',0,'*')) from sys_dummy;
length
--------
0
(1 row)</pre>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row1255211543476"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p19552125434713"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p19552125434713"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p19552125434713"></a>compat_concat_variadic</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p15521954134717"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15521954134717"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15521954134717"></a>Specifies the compatibility of variadic results of the concat() and concat_ws() functions.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p1060812139425"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1060812139425"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p1060812139425"></a>If this item is specified and a concat function has a parameter of the variadic type, different result formats in A database and Teradata are retained. If this item is not specified and a concat function has a parameter of the variadic type, same result formats in A database and Teradata are retained, and the results are the same as those in A database. This option has no effect on MY because MY has no variadic type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137574_en-us_topic_0237124754_row4359610142013"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p123596109205"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p123596109205"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p123596109205"></a><span id="en-us_topic_0283137574_en-us_topic_0237124754_text938325714529"><a name="en-us_topic_0283137574_en-us_topic_0237124754_text938325714529"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_text938325714529"></a>merge_update_multi</span></p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137574_en-us_topic_0237124754_p15359171062012"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15359171062012"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p15359171062012"></a>When MERGE INTO... WHEN MATCHED THEN UPDATE (see <a href="merge-into.md">MERGE INTO</a>) and INSERT... ON DUPLICATE KEY UPDATE (see <a href="insert.md">INSERT</a>) are used, control the UPDATE behavior if a piece of target data in the target table conflicts with multiple pieces of source data.</p>
<p id="en-us_topic_0283137574_en-us_topic_0237124754_p87151258513"><a name="en-us_topic_0283137574_en-us_topic_0237124754_p87151258513"></a><a name="en-us_topic_0283137574_en-us_topic_0237124754_p87151258513"></a>If this item is specified and the preceding scenario exists, the system performs multiple UPDATE operations on the conflicting row. If this item is not specified and the preceding scenario exists, an error is reported, that is, the MERGE or INSERT operation fails.</p>
</td>
</tr>
<tr id="row1258011401122"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p205805401429"><a name="p205805401429"></a><a name="p205805401429"></a>plstmt_implicit_savepoint</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p198401161133"><a name="p198401161133"></a><a name="p198401161133"></a>Determines whether the execution of an UPDATE statement in a stored procedure has an independent subtransaction.</p>
<p id="p858064018217"><a name="p858064018217"></a><a name="p858064018217"></a>If this parameter is set, the implicit savepoint is enabled before executing each UPDATE statement in the stored procedure, and the subtransaction is rolled backed to the latest savepoint in the EXCEPTION block by default, ensuring that only the modification of failed statements is rolled back. This option is used to be compatible with the <strong id="b1244112519352"><a name="b1244112519352"></a><a name="b1244112519352"></a>EXCEPTION</strong> behavior of the O database.</p>
</td>
</tr>
<tr id="row184421757173910"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p104421057113910"><a name="p104421057113910"></a><a name="p104421057113910"></a>hide_tailing_zero</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p154421657193919"><a name="p154421657193919"></a><a name="p154421657193919"></a>Configuration item for numeric display. If this parameter is not set, numeric data is displayed in the specified precision. When setting this parameter, hide <strong id="b364324005610"><a name="b364324005610"></a><a name="b364324005610"></a>0</strong> at the end of the decimal place.</p>
<pre class="screen" id="screen884155441017"><a name="screen884155441017"></a><a name="screen884155441017"></a>set behavior_compat_options='hide_tailing_zero';
select cast(123.123 as numeric(15,10));
numeric
---------
123.123
(1 row)</pre>
</td>
</tr>
<tr id="row036062201417"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p16360425147"><a name="p16360425147"></a><a name="p16360425147"></a>rownum_type_compat</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p63603214149"><a name="p63603214149"></a><a name="p63603214149"></a>Specifies the ROWNUM type. The default value is <strong id="b15277151898"><a name="b15277151898"></a><a name="b15277151898"></a>INT8</strong>. After this parameter is specified, the value is changed to <strong id="b1282131511214"><a name="b1282131511214"></a><a name="b1282131511214"></a>NUMERIC</strong>.</p>
</td>
</tr>
<tr id="row1093032817487"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p89303283484"><a name="p89303283484"></a><a name="p89303283484"></a>aformat_null_test</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p193002814811"><a name="p193002814811"></a><a name="p193002814811"></a>Determines the logic for checking whether the row type is not null. When this parameter is set, if a column in a row is not null, <strong id="b09845222610"><a name="b09845222610"></a><a name="b09845222610"></a>true</strong> is returned.</p>
<p id="p76670590522"><a name="p76670590522"></a><a name="p76670590522"></a>When this parameter is not set, if all columns in a row are not null, <strong id="b6105151413117"><a name="b6105151413117"></a><a name="b6105151413117"></a>true</strong> is returned.</p>
</td>
</tr>
<tr id="row442921018447"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p242931012443"><a name="p242931012443"></a><a name="p242931012443"></a>aformat_regexp_match</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p17429171054413"><a name="p17429171054413"></a><a name="p17429171054413"></a>Determines the matching behavior of regular expression functions.</p>
<div class="p" id="p176212101138"><a name="p176212101138"></a><a name="p176212101138"></a>When this parameter is set and <strong id="b45528311124"><a name="b45528311124"></a><a name="b45528311124"></a>sql_compatibility</strong> is set to <strong id="b769616712129"><a name="b769616712129"></a><a name="b769616712129"></a>A</strong> or <strong id="b972631113121"><a name="b972631113121"></a><a name="b972631113121"></a>B</strong>, the options supported by the <strong id="b17844520201812"><a name="b17844520201812"></a><a name="b17844520201812"></a>flags</strong> parameter of the regular expression are changed as follows:<a name="ol632826837"></a><a name="ol632826837"></a><ol id="ol632826837"><li>. By default, the character '\n' cannot be matched.</li><li>When <strong id="b7251134871816"><a name="b7251134871816"></a><a name="b7251134871816"></a>flags</strong> contains the <strong id="b10453205321819"><a name="b10453205321819"></a><a name="b10453205321819"></a>n</strong> option, the character '\n' can be matched.</li><li>The <strong id="b16398163318194"><a name="b16398163318194"></a><a name="b16398163318194"></a>regexp_replace(source, pattern replacement)</strong> function replaces all matching substrings.</li><li><strong id="b5760114514190"><a name="b5760114514190"></a><a name="b5760114514190"></a>regexp_replace(source, pattern, replacement, flags)</strong> returns null when the value of <strong id="b1913620526196"><a name="b1913620526196"></a><a name="b1913620526196"></a>flags</strong> is <strong id="b852314542016"><a name="b852314542016"></a><a name="b852314542016"></a>''</strong> or null.</li></ol>
</div>
<p id="p15726183855"><a name="p15726183855"></a><a name="p15726183855"></a>Otherwise, the meanings of the options supported by the <strong id="b1586951315208"><a name="b1586951315208"></a><a name="b1586951315208"></a>flags</strong> parameter of the regular expression are as follows:</p>
<a name="ol18494352043"></a><a name="ol18494352043"></a><ol id="ol18494352043"><li>. By default, the character '\n' can be matched.</li><li>The <strong id="b1649338112012"><a name="b1649338112012"></a><a name="b1649338112012"></a>n</strong> option in <strong id="b897184352019"><a name="b897184352019"></a><a name="b897184352019"></a>flags</strong> indicates that the multi-line matching mode is used.</li><li>The <strong id="b2458157215"><a name="b2458157215"></a><a name="b2458157215"></a>regexp_replace(source, pattern replacement)</strong> function replaces only the first matched substring.</li><li>If the value of <strong id="b17550924152120"><a name="b17550924152120"></a><a name="b17550924152120"></a>flags</strong> is <strong id="b0195183211219"><a name="b0195183211219"></a><a name="b0195183211219"></a>''</strong> or null, the return value of <strong id="b15121194022111"><a name="b15121194022111"></a><a name="b15121194022111"></a>regexp_replace(source, pattern, replacement, flags)</strong> is the character string after replacement.</li></ol>
</td>
</tr>
<tr id="row8351193618505"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p133528368507"><a name="p133528368507"></a><a name="p133528368507"></a>compat_cursor</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p19352436185016"><a name="p19352436185016"></a><a name="p19352436185016"></a>Determines the compatibility behavior of implicit cursor states. If this parameter is set and the O compatibility mode is used, the effective scope of implicit cursor states (<strong id="b280852014216"><a name="b280852014216"></a><a name="b280852014216"></a>SQL %FOUND</strong>, <strong id="b274119262429"><a name="b274119262429"></a><a name="b274119262429"></a>SQL %NOTFOUND</strong>, <strong id="b465823012422"><a name="b465823012422"></a><a name="b465823012422"></a>SQL %ISOPNE</strong> and <strong id="b11546413426"><a name="b11546413426"></a><a name="b11546413426"></a>SQL %ROWCOUNT</strong>) are extended only the currently executed function to all subfunctions invoked by this function.</p>
</td>
</tr>
<tr id="row18735102911156"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p1973572931511"><a name="p1973572931511"></a><a name="p1973572931511"></a>proc_outparam_override</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p20735112918154"><a name="p20735112918154"></a><a name="p20735112918154"></a>Determines the reloading of output parameters of a stored procedure. After this parameter is enabled, the stored procedure can be properly invoked even if only the output parameters of the stored procedure are different.</p>
</td>
</tr>
<tr id="row56517437529"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p943192894419"><a name="p943192894419"></a><a name="p943192894419"></a>proc_implicit_for_loop_variable</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p343142824413"><a name="p343142824413"></a><a name="p343142824413"></a>Determines the behavior of the <strong id="b144685596391"><a name="b144685596391"></a><a name="b144685596391"></a>FOR_LOOP</strong> query statement in a stored procedure.When this parameter is set, if <strong id="b8225113415403"><a name="b8225113415403"></a><a name="b8225113415403"></a>rec</strong> has been defined in the <strong id="b4927183912406"><a name="b4927183912406"></a><a name="b4927183912406"></a>FOR rec IN query LOOP</strong> statement, the defined <strong id="b16869164917405"><a name="b16869164917405"></a><a name="b16869164917405"></a>rec</strong> variable is not reused and a new variable is created. Otherwise, the defined <strong id="b8933106104120"><a name="b8933106104120"></a><a name="b8933106104120"></a>rec</strong> variable is reused and no new variable is created.</p>
</td>
</tr>
<tr id="row2012934012159"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p18130240101518"><a name="p18130240101518"></a><a name="p18130240101518"></a>allow_procedure_compile_check</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p16662358118"><a name="p16662358118"></a><a name="p16662358118"></a>Determines the compilation check of the <strong id="b818371413412"><a name="b818371413412"></a><a name="b818371413412"></a>SELECT</strong> and <strong id="b199125190342"><a name="b199125190342"></a><a name="b199125190342"></a>OPEN CURSOR</strong> statements in a stored procedure. If this parameter is set, when the <strong id="b1856752633415"><a name="b1856752633415"></a><a name="b1856752633415"></a>SELECT</strong>, <strong id="b1111423153416"><a name="b1111423153416"></a><a name="b1111423153416"></a>OPEN CURSOR FOR</strong>, <strong id="b536011385344"><a name="b536011385344"></a><a name="b536011385344"></a>CURSOR %rowtype</strong>, or <strong id="b12321175116349"><a name="b12321175116349"></a><a name="b12321175116349"></a>for rec in</strong> statement is executed in a stored procedure, the stored procedure cannot be created if the queried table does not exist, and the compilation check of the trigger function is not supported. If the queried table exists, the stored procedure is successfully created.</p>
</td>
</tr>
<tr id="row14769111017289"><td class="cellrowborder" valign="top" width="24.43%" headers="mcps1.2.3.1.1 "><p id="p1976961013282"><a name="p1976961013282"></a><a name="p1976961013282"></a>char_coerce_compat</p>
</td>
<td class="cellrowborder" valign="top" width="75.57000000000001%" headers="mcps1.2.3.1.2 "><p id="p1276918101287"><a name="p1276918101287"></a><a name="p1276918101287"></a>Determines the behavior when char(n) types are converted to other variable-length string types. By default, spaces at the end are omitted when the char(n) type is converted to other variable-length string types. After this parameter is enabled, spaces at the end are not omitted during conversion. In addition, if the length of the char(n) type exceeds the length of other variable-length string types, an error is reported. This parameter is valid only when <strong id="b693483313315"><a name="b693483313315"></a><a name="b693483313315"></a>sql_compatibility</strong> is set to <strong id="b36041037153118"><a name="b36041037153118"></a><a name="b36041037153118"></a>A</strong>.</p>
</td>
</tr>
</tbody>
</table>

## plpgsql.variable\_conflict<a name="section644112422314"></a>

**Parameter description:**  Sets the priority of using stored procedure variables and table columns with the same name.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

-   **error**  indicates that a compilation error is reported when the name of a stored procedure variable is the same as that of a table column.
-   **use\_variable**  indicates that if the name of a stored procedure variable is the same as that of a table column, the variable is used preferentially.
-   **use\_column**  indicates that if the name of a stored procedure variable is the same as that of a table column, the column name is used preferentially.

**Default value**:  **error**

## td\_compatible\_truncation<a name="en-us_topic_0283137001_en-us_topic_0237124738_en-us_topic_0059779195_sb8212ce57eb9432a972e390f77203b7c"></a>

**Parameter description**: Specifies whether to enable features compatible with a Teradata database. You can set this parameter to  **on**  when connecting to a database compatible with the Teradata database, so that when you perform the  **INSERT**  operation, overlong strings are truncated based on the allowed maximum length before being inserted into char- and varchar-type columns in the target table. This ensures all data is inserted into the target table without errors reported.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The string truncation function cannot be used if the  **INSERT**  statement includes a foreign table.
>If inserting multi-byte character data \(such as Chinese characters\) to database with the character set byte encoding \(such as SQL\_ASCII or LATIN1\), and the character data crosses the truncation position, the string is truncated based on its bytes instead of characters. Unexpected result will occur in tail after the truncation. If you want correct truncation result, you are advised to adopt encoding set such as UTF8, which has no character data crossing the truncation position.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that overlong strings are truncated.
-   **off**  indicates that overlong strings are not truncated.

**Default value**:  **off**

## uppercase\_attribute\_name<a name="section31896681819"></a>

**Parameter description**: Specifies whether to return column names in uppercase to the client. This parameter is used only in the ORA-compatible mode and centralized environment.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that column names are returned to the client in uppercase.
-   **off**  indicates that column names are not returned to the client in uppercase.

**Default value**:  **off**

## lastval\_supported<a name="section17186174713490"></a>

**Parameter description**: Specifies whether the lastval function can be used.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the lastval function can be used and the nextval function cannot be pushed down.
-   **off**  indicates that the lastval function cannot be used and the nextval function can be pushed down.

**Default value**:  **off**
