# Developer Options<a name="EN-US_TOPIC_0289900863"></a>

## allow\_system\_table\_mods<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s4603d5ba740b4e4e9a71e245694cf887"></a>

**Parameter description**: Specifies whether the structures of system tables can be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the structures of system tables can be modified.
-   **off**  indicates that the structures of system tables cannot be modified.

**Default value**:  **off**

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>You are not advised to change the default value of this parameter. If this parameter is set to  **on**, system tables may be damaged and the database may fail to be started.

## debug\_assertions<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_scb3c27202a7f4d2fb04a70f767ac5028"></a>

**Parameter description**: Specifies whether to enable various assertion checks. This parameter assists in debugging. If you are experiencing strange problems or crashes, set this parameter to  **on**  to identify programming defects. To use this parameter, the macro USE\_ASSERT\_CHECKING must be defined \(through the configure option  **--enable-cassert**\) during the openGauss compilation.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that various assertion checks are enabled.
-   **off**  indicates that various assertion checks are disabled.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If you compile openGauss with the assertion check enabled, this parameter is set to  **on**  by default.

**Default value**:  **off**

## ignore\_checksum\_failure<a name="en-us_topic_0283137548_en-us_topic_0237124743_section118984511015"></a>

**Parameter description**: Specifies whether to ignore check failures \(but still generates an alarm\) and continues reading data. Continuing reading data may result in breakdown, damaged data being transferred or hidden, failure of data recovery from remote nodes, or other serious problems. You are not advised to modify the settings.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that data check errors are ignored.
-   **off**  indicates that data check errors are reported.

**Default value**:  **off**

## ignore\_system\_indexes<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sdd9b50c633a14efdbad02bbf9cb139d3"></a>

**Parameter description**: Specifies whether to ignore system indexes when reading system catalog \(but still update the indexes when modifying the tables\).

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>This parameter is useful for recovering data from tables whose system indexes are damaged.

**Value range**: Boolean

-   **on**  indicates that system indexes are ignored.
-   **off**  indicates that system indexes are not ignored.

**Default value**:  **off**

## post\_auth\_delay<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sfd7c612362aa44f48b99e678fa16aa63"></a>

**Parameter description**: Specifies the delay in the connection to the server after a successful authentication. Developers can attach a debugger to the server startup process.

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 0 to 2147. The unit is second.

**Default value**:  **0**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter is used only for commissioning and fault locating. To prevent impact on service running, ensure that the default value  **0**  is used in the production environment. If this parameter is set to a value other than 0, the cluster status may be abnormal due to a long authentication delay.

## pre\_auth\_delay<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s82cb9c3349d3406d88d3ade8b4911b6e"></a>

**Parameter description**: Specifies the period of delaying authentication after the connection to the server is started. Developers can attach a debugger to the authentication procedure.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 60. The unit is second.

**Default value**:  **0**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter is used only for commissioning and fault locating. To prevent impact on service running, ensure that the default value  **0**  is used in the production environment. If this parameter is set to a value other than 0, the cluster status may be abnormal due to a long authentication delay.

## trace\_notify<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sa6199e2adece4b37973aa834ae741888"></a>

**Parameter description**: Specifies whether to enable the function of generating debugging output for the  **LISTEN**  and  **NOTIFY**  commands. The level of  [**client\_min\_messages**](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s2955da1f1cb24b0aa68ddc77700233e0)  or  [**log\_min\_messages**](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a)  must be  **debug1**  or lower so that debugging output can be recorded in the client or server logs, respectively.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function is enabled.
-   **off**  indicates that the function is disabled.

**Default value**:  **off**

## trace\_recovery\_messages<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s329f8fa0c1b64bdba4e745567ff6c011"></a>

**Parameter description**: Specifies whether to enable logging of recovery-related debugging output. This parameter allows users to overwrite the normal setting of  [**log\_min\_messages**](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a), but only for specific messages. This is intended for the use in debugging the standby server.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values. Valid values include  **debug5**,  **debug4**,  **debug3**,  **debug2**,  **debug1**, and  **log**. For details about the parameter values, see  [**log\_min\_messages**](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a).

**Default value**:  **log**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   **log**  indicates that recovery-related debugging information will not be logged.
>-   Except the default value  **log**, each of the other values indicates that recovery-related debugging information at the specified level will also be logged. Common settings of  **log\_min\_messages**  enable logs to be unconditionally recorded into server logs.

## trace\_sort<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sd0cba25915364b649503310146519623"></a>

**Parameter description**: Specifies whether to print information about resource usage during sorting operations. This parameter is available only when the macro TRACE\_SORT is defined during the openGauss compilation. However, TRACE\_SORT is currently defined by default.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function is enabled.
-   **off**  indicates that the function is disabled.

**Default value**:  **off**

## zero\_damaged\_pages<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s2697318353ad47b8973ac2507b20d0cb"></a>

**Parameter description**: Specifies whether to detect a damaged page header that causes openGauss to report an error, aborting the current transaction.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

Setting this parameter to  **on**  causes the system to report a warning, zero out the damaged page, and continue processing. This behavior will destroy data, including all the rows on the damaged page. However, it allows you to bypass the error and retrieve rows from any undamaged pages that may be present in the table. Therefore, it is useful for restoring data if corruption has occurred due to a hardware or software error. In most cases, you are advised not to set this parameter to  **on**  if you want to restore data from damaged pages.

**Default value**:  **off**

## remotetype<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sd748becd57e5455eaead6fc19c60c02f"></a>

**Parameter description**: Specifies the remote connection type.

This parameter cannot be changed.

**Value range**: enumerated values. Valid values are  **application**,  **datanode**, and  **internaltool**.

**Default value**:  **application**

## max\_user\_defined\_exception<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s49f712571025449983448c1daf36b7e4"></a>

**Parameter description**: Specifies the maximum number of exceptions. The default value cannot be changed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

Value range: an integer. Currently, only the fixed value  **1000**  is supported.

**Default value**:  **1000**

## enable\_fast\_numeric<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s60b2856bf1b446d6b5e76c70f74b45bf"></a>

**Parameter description**: Specifies whether to enable optimization for numeric data calculation. Calculation of numeric data is time-consuming. Numeric data is converted into int64- or int128-type data to improve numeric data calculation performance.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that optimization for numeric data calculation is enabled.
-   **off**  or  **false**  indicates that optimization for numeric data calculation is disabled.

**Default value**:  **on**

## enable\_compress\_spill<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_section6480378794448"></a>

**Parameter description**: Specifies whether to enable the compression function of writing data to disk.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that optimization for writing data to disk is enabled.
-   **off**  or  **false**  indicates that optimization for writing data to a disk is disabled.

**Default value**:  **on**

## resource\_track\_log<a name="en-us_topic_0283137548_en-us_topic_0237124743_section11914205152413"></a>

**Parameter description**: Specifies the log level of self-diagnosis. Currently, this parameter takes effect only in multi-column statistics.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **summary**: Brief diagnosis information is displayed.
-   **detail**: Detailed diagnosis information is displayed.

Currently, the two parameter values differ only when there is an alarm about multi-column statistics not collected. If the parameter is set to  **summary**, such an alarm will not be displayed. If it is set to  **detail**, such an alarm will be displayed.

**Default value**:  **summary**

## show\_acce\_estimate\_detail<a name="en-us_topic_0283137548_en-us_topic_0237124743_section161649114254"></a>

**Parameter description**: The evaluation information is generally used by O&M personnel during maintenance, and it may affect the output display of the  **EXPLAIN**  statement. Therefore, this parameter is disabled by default. The evaluation information is displayed only if the  **verbose**  option of the  **EXPLAIN**  statement is enabled.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the evaluation information is displayed in the output of the  **EXPLAIN**  statement.
-   **off**  indicates that the evaluation information is not displayed in the output of the  **EXPLAIN**  statement.


**Default value**:  **off**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The current version does not support database acceleration. Therefore, this parameter does not take effect after being set.

## support\_batch\_bind<a name="en-us_topic_0283137548_en-us_topic_0237124743_section157265302582"></a>

**Parameter description**: Specifies whether to batch bind and execute PBE statements through interfaces such as JDBC, ODBC, and libpq.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that batch binding and execution are used.
-   **off**  indicates that batch binding and execution are not used.

**Default value**:  **on**

## numa\_distribute\_mode<a name="en-us_topic_0283137548_en-us_topic_0237124743_section1641163520277"></a>

**Parameter description**: Specifies the distribution of some shared data and threads among NUMA nodes. This parameter is used to optimize the performance of large-scale ARM servers with multiple NUMA nodes. Generally, you do not need to set this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. The valid values are  **none**  and  **all**.

-   **none**  indicates that this function is disabled.
-   **all**  indicates that some shared data and threads are distributed to different NUMA nodes to reduce the number of remote access times and improve performance. Currently, this function applies only to ARM servers with multiple NUMA nodes. All NUMA nodes must be available for database processes. You cannot select only some NUMA nodes.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the current version,  **numa\_distribute\_mode**  cannot be set to  **all**  on the x86 platform.

**Default value**:  **none**

## log\_pagewriter<a name="en-us_topic_0283137548_en-us_topic_0237124743_section174909217258"></a>

**Parameter description**: Specifies whether to display the page refresh information of a thread and details about an incremental check point after the incremental check point is enabled. You are not advised to set this parameter to  **true**  because a large amount of information will be generated.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **off**

## advance\_xlog\_file\_num<a name="en-us_topic_0283137548_en-us_topic_0237124743_section82551249132115"></a>

**Parameter description**: Specifies the number of Xlog files that are periodically initialized in advance in the background. This parameter is used to prevent the Xlog file initialization from affecting the performance during transaction submission. However, such a fault may occur only when the system is overloaded. Therefore, you do not need to set this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000. The value  **0**  indicates that initialization is not performed in advance. For example, the value  **10**  indicates that the background thread periodically initializes 10 Xlog files in advance based on the write location of the current Xlog.

**Default value**:  **0**

## enable\_beta\_opfusion<a name="en-us_topic_0283137548_section19786104412547"></a>

**Parameter description**: Specifies whether to accelerate the execution of SQL statements, such as aggregate functions and sorting in TPC-C when  **enable\_opfusion**  is set to  **on**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## enable\_csqual\_pushdown<a name="en-us_topic_0059778871_s92a1101adc734922b04b37d758f0a871"></a>

**Parameter description**: Specifies whether to deliver filter criteria for a rough check during query.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that a rough check is performed with filter criteria delivered during query.
-   **off**  indicates that a rough check is performed without filter criteria delivered during query.

**Default value**:  **on**

## string\_hash\_compatible<a name="en-us_topic_0059778871_s8e3745c42ce043a2b17da80c822304de"></a>

**Parameter description**: Specifies whether to use the same method to calculate char-type hash values and varchar- or text-type hash values. Based on the setting of this parameter, you can determine whether a redistribution is required when a distribution column is converted from a char-type data distribution into a varchar- or text-type data distribution.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the same calculation method is used and a redistribution is not required.
-   **off**  indicates that different calculation methods are used and a redistribution is required.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Calculation methods differ in the length of input strings used for calculating hash values. \(For a char-type hash value, spaces following a string are not counted as the length. For a text- or varchar-type hash value, the spaces are counted.\) The hash value affects the calculation result of queries. To avoid query errors, do not modify this parameter during database running once it is set.

**Default value**:  **off**

## pldebugger\_timeout<a name="section56671039193813"></a>

**Parameter description**: Specifies the timeout interval for the pldebugger server to wait for a response from the debug end.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 86400. The unit is second.

**Default value**:  **15min**

## plsql\_show\_all\_error<a name="section232164414549"></a>

**Parameter description:**  Specifies whether to skip errors and continue compiling PLPGSQL objects. For details about the impact, see  [DBE\_PLDEVELOPER](dbe_pldeveloper.md).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **off**

