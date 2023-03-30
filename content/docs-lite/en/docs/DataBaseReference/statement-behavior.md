# Statement Behavior<a name="EN-US_TOPIC_0289900775"></a>

This section describes related default parameters involved in the execution of SQL statements.

## search\_path<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s304b0a206e2e4ca782210ffb66cbc4b0"></a>

**Parameter description**: Specifies the order in which schemas are searched when an object is referenced with no schema specified. The value of this parameter consists of one or more schema names. Different schema names are separated by commas \(,\).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

-   If the schema of temporary tables exists in the current session, the schema can be listed in  **search\_path**  by using the alias  **pg\_temp**, for example,  **'pg\_temp,public'**. The schema of temporary tables has the highest search priority and is always searched before all the other schemas specified in  **pg\_catalog**  and  **search\_path**. Therefore, do not explicitly specify  **pg\_temp**  to be searched after other schemas in  **search\_path**. This setting will not take effect and an error message will be displayed. If the alias  **pg\_temp**  is used, the temporary schema will be searched only for tables, views, and data types, and not for functions or operators.
-   The system catalog schema,  **pg\_catalog**, has the second highest search priority and is the first to be searched among all the schemas, excluding  **pg\_temp**, specified in  **search\_path**. Therefore, do not explicitly specify  **pg\_catalog**  to be searched after other schemas in  **search\_path**. This setting will not take effect and an error message will be displayed.
-   When an object is created without a specific target schema, the object will be placed in the first valid schema listed in  **search\_path**. An error is reported if the search path is empty.
-   The current effective value of the search path can be examined through the SQL function  **current\_schema**. This is different from examining the value of  **search\_path**, because the  **current\_schema**  function displays the first valid schema name in  **search\_path**.

**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   When this parameter is set to  **"$user", public**, shared use of a database \(where no users have private schemas, and all share use of public\), private per-user schemas and combinations of them are supported. Other effects can be obtained by modifying the default search path setting, either globally or per-user.
>-   When this parameter is set to a null string \(''\), the system automatically converts it into a pair of double quotation marks \(""\).
>-   If the content contains double quotation marks, the system considers them as insecure characters and converts each double quotation mark into a pair of double quotation marks.

**Default value**:  **"$user",public**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**$user**  indicates the name of the schema with the same name as the current session user. If the schema does not exist,  **$user**  will be ignored.

## current\_schema<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sa00a2b6f98224de8b3e8f7fc820fed29"></a>

**Parameter description**: Specifies the current schema.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

**Default value**:  **"$user",public**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**$user**  indicates the name of the schema with the same name as the current session user. If the schema does not exist,  **$user**  will be ignored.

## default\_tablespace<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sa058ceea3c3142f0a8a40b5799a682d3"></a>

**Parameter description**: Specifies the default tablespace of the created objects \(tables and indexes\) when a  **CREATE**  command does not explicitly specify a tablespace.

-   The value of this parameter is either the name of a tablespace, or an empty string that indicates the use of the default tablespace of the current database. If a non-default tablespace is specified, users must have CREATE privilege for it. Otherwise, creation attempts will fail.
-   This parameter is not used for temporary tables. For them, the  **[temp\_tablespaces](#en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sd5bfdc9f2696411894b2912cf3f23fcc)**  is used instead.
-   This parameter is not used when users create databases. By default, a new database inherits its tablespace setting from the template database.

    This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).


**Value range**: a string. An empty string indicates that the default tablespace is used.

**Default value**: empty

## temp\_tablespaces<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sd5bfdc9f2696411894b2912cf3f23fcc"></a>

**Parameter description**: Specifies one or more tablespaces to which temporary objects \(temporary tables and their indexes\) will be created when a CREATE command does not explicitly specify a tablespace. Temporary files for sorting large data sets are created in these tablespaces.

The value of this parameter can be a list of names of tablespaces. When there is more than one name in the list, openGauss chooses a random tablespace from the list upon the creation of a temporary object each time. However, within a transaction, successively created temporary objects are placed in successive tablespaces in the list. If the element selected from the list is an empty string, openGauss will automatically use the default tablespace of the current database instead.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string An empty string indicates that all temporary objects are created only in the default tablespace of the current database. For details, see  [default\_tablespace](#en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sa058ceea3c3142f0a8a40b5799a682d3).

**Default value**: empty

## check\_function\_bodies<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sdfad935930b54286a9c8a99a339f1483"></a>

**Parameter description**: Specifies whether to enable validation of the function body string during the execution of  **CREATE FUNCTION**. Verification is occasionally disabled to avoid problems, such as forward references when you restore function definitions from a dump. After the function is enabled, the word syntax of the PL/SQL in the stored procedure is verified, including the data type, statement, and expression. The SQL statements in the stored procedure are not checked in the Create phase. Instead, they are checked during running.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that validation of the function body string is enabled during the execution of  **CREATE FUNCTION**.
-   **off**  indicates that validation of the function body string is disabled during the execution of  **CREATE FUNCTION**.

**Default value**:  **on**

## default\_transaction\_isolation<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s3c01ed88aa8646f8881ff77ef5eec1ad"></a>

**Parameter description**: Specifies the default isolation level of each transaction.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The current version does not support the setting of the default transaction isolation level. The default value is  **read committed**. Do not change the value.

**Value range**: enumerated values

-   **read committed**  indicates that the data read by a transaction is committed at the moment it is read.
-   **repeatable read**  indicates that the data that has been read by the current transaction cannot be modified by other transactions until the current transaction completes, thereby preventing unrepeatable reads.
-   **serializable**: Currently, this isolation level is not supported in openGauss. It is equivalent to  **repeatable read**.

**Default value:** **read committed**

## default\_transaction\_read\_only<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sf9377ff7103446d6b5b59624576dd67e"></a>

**Parameter description**: Specifies whether each new transaction is in read-only state.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>If this parameter is set to  **on**, the DML and write transactions cannot be executed.

**Value range**: Boolean

-   **on**  indicates that the transaction is in read-only state.
-   **off**  indicates that the transaction is in read/write state.

**Default value**:  **off**

## default\_transaction\_deferrable<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s031e2bbea2cf42a5a1c24e6dbaa70365"></a>

**Parameter description**: Specifies the default deferrable status of each new transaction. It currently has no effect on read-only transactions or those running at isolation levels lower than serializable.

openGauss does not support the serializable isolation level. Therefore, the parameter takes no effect.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that a transaction is delayed by default.
-   **off**  indicates that a transaction is not delayed by default.

**Default value**:  **off**

## session\_replication\_role<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sffbd1c48d86b4c3fa3287167a7810216"></a>

**Parameter description**: Specifies the behavior of replication-related triggers and rules for the current session.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Setting this parameter will discard all the cached execution plans.

**Value range**: enumerated values

-   **origin**  indicates that the system copies operations such as insert, delete, and update from the current session.
-   **replica**  indicates that the system copies operations such as insert, delete, and update from other places to the current session.
-   **local**  indicates that the system will detect the role that has logged in to the database when using the function to copy operations and will perform related operations.

**Default value**:  **origin**

## statement\_timeout<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_se47379dd6e1c4698aa7b28b7ca9bc7fe"></a>

**Parameter description**: If the statement execution time \(starting from the time the server receives the command\) is longer than the duration specified by the parameter, error information is displayed and the statement exits.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483647. The unit is ms.

**Default value**:  **0**

## vacuum\_freeze\_min\_age<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s047458943d8a4f4a98df60fd91c6c96b"></a>

**Parameter description:**  Specifies whether VACUUM replaces the  **xmin**  column of a record with  **FrozenXID**  when scanning a table \(in the same transaction\).

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 576460752303423487

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Although you can set this parameter to any value, VACUUM will limit the effective value to half the value of  **[autovacuum\_freeze\_max\_age](automatic-vacuuming.md#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s7857d2d0002547a3853b7aac36a458b3)**  by default.

**Default value**:  **2000000000**

## vacuum\_freeze\_table\_age<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s92cb1531fa7b4cfe92aeaf209048571e"></a>

**Parameter description**: Specifies when VACUUM scans the whole table and freezes old tuples. VACUUM performs a full table scan if the difference between the current transaction ID and the value of pg\_class.relfrozenxid64 is greater than the specified time.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 576460752303423487

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Although you can set this parameter to any value,  **VACUUM**  will limit the effective value to 95% of  **[autovacuum\_freeze\_max\_age](automatic-vacuuming.md#en-us_topic_0283137694_en-us_topic_0237124730_en-us_topic_0059778244_s7857d2d0002547a3853b7aac36a458b3)**  by default. Therefore, a periodical manual  **VACUUM**  has a chance to run before an anti-wraparound autovacuum is launched for the table.

**Default value**:  **4000000000**

## bytea\_output<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_sb95ebefb0b624975b0714dfe8e0ec15c"></a>

**Parameter description:**  Specifies the output format for values of the bytea type.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: enumerated values

-   **hex**  indicates that the binary data is converted to hexadecimal format.
-   **escape**  indicates that the traditional PostgreSQL format is used. It takes the approach of representing a binary string as a sequence of ASCII characters, while converting those bytes that cannot be represented as an ASCII character into special escape sequences.

**Default value**:  **hex**

## xmlbinary<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_se7d7514c75f84b6a9af0d18cee993e17"></a>

**Parameter description**: Specifies how binary values are to be encoded in XML.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: enumerated values

-   base64
-   hex

**Default value**:  **base64**

## xmloption<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s091f4c1f8f174a93ad47d9fdd120645a"></a>

**Parameter description**: Specifies whether DOCUMENT or CONTENT is implicit when converting between XML and string values.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: enumerated values

-   **document**  indicates an HTML document.
-   **content**  indicates a common string.

**Default value**:  **content**

## max\_compile\_functions<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s8c84503840aa4fc99771e9070a113960"></a>

**Parameter description**: Specifies the maximum number of function compilation results stored in the server. Excessive functions and compilation results of stored procedures may occupy large memory space. Setting this parameter to a proper value can reduce the memory usage and improve system performance.

This parameter is a  **POSTMASTER**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 1 to 2147483647

**Default value:** **1000**

## gin\_pending\_list\_limit<a name="en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s11890262e191494e96b6d31d85ad18a7"></a>

**Parameter description**: Specifies the maximum size of the GIN pending list which is used when  **fastupdate**  is enabled. If the list grows larger than this maximum size, it is cleaned up by moving the entries in it to the main GIN data structure in batches. This setting can be overridden for individual GIN indexes by changing index storage parameters.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer. The minimum value is 64 and the maximum value is INT\_MAX. The default unit is KB.

**Default value**:  **4 MB**

