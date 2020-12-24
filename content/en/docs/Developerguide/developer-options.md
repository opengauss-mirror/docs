# Developer Options<a name="EN-US_TOPIC_0242371533"></a>

## allow\_system\_table\_mods<a name="en-us_topic_0237124743_en-us_topic_0059778871_s4603d5ba740b4e4e9a71e245694cf887"></a>

**Parameter description**: Specifies whether the structures of system tables can be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the structures of system tables can be modified.
-   **off**  indicates that the structures of system tables cannot be modified.

**Default value**:  **off**

## debug\_assertions<a name="en-us_topic_0237124743_en-us_topic_0059778871_scb3c27202a7f4d2fb04a70f767ac5028"></a>

**Parameter description:**  Specifies whether to enable various assertion checks. This parameter assists in debugging. If you are experiencing strange problems or crashes, set this parameter to  **on**  to identify programming defects. To use this parameter, the macro USE\_ASSERT\_CHECKING must be defined \(through the configure option  **--enable-cassert**\) during the openGauss compilation.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that various assertion checks are enabled.
-   **off**  indicates that various assertion checks are disabled.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>This parameter is set to  **on**  by default if openGauss is compiled with various assertion checks enabled.  

**Default value**:  **off**

## ignore\_checksum\_failure<a name="en-us_topic_0237124743_section118984511015"></a>

**Parameter description**: Specifies whether to ignore check failures \(but still generates an alarm\) and continues reading data. Continuing reading data may result in breakdown, damaged data being transferred or hidden, failure of data recovery from remote nodes, or other serious problems. You are not advised to modify the settings.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that data check errors are ignored.
-   **off**  indicates that data check errors are reported.

**Default value**:  **off**

## enable\_force\_vector\_engine<a name="en-us_topic_0237124743_en-us_topic_0059778871_se9975818d0e24d84907a2e092ce7347f"></a>

**Parameter description:**  Specifies whether to forcibly generate vectorized execution plans for a vectorized execution operator if the operator's child node is a non-vectorized operator. When this parameter is set to  **on**, vectorized execution plans are forcibly generated.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **off**

## explain\_dna\_file<a name="en-us_topic_0237124743_en-us_topic_0059778871_s1304d3e4a6f74ad188b804c55313fb69"></a>

**Parameter description:**  Sets  [explain\_perf\_mode](#en-us_topic_0237124743_en-us_topic_0059778871_s05e1286701bc4b8d9e1c0c9aecae3a0e)  to  **run**  to export object files in CSV format.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>The value of this parameter must be an absolute path plus a file name with the extension  **.csv**.  

**Value range**: a string

**Default value**: empty

## explain\_perf\_mode<a name="en-us_topic_0237124743_en-us_topic_0059778871_s05e1286701bc4b8d9e1c0c9aecae3a0e"></a>

**Parameter description:**  Specifies the display format of the  **explain**  command.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **normal**,  **pretty**,  **summary**, and  **run**

-   **normal**  indicates that the default printing format is used.
-   **pretty**  indicates a new format improved by using openGauss. A new format contains a plan node ID, directly and effectively analyzing performance.
-   **summary**  indicates that the analysis result on this information is printed in addition to the printed information in the format specified by  **pretty**.
-   **run**  indicates that in addition to the printed information specified by  **summary**, the database exports the information as a CSV file.

**Default value**:  **pretty**

## ignore\_system\_indexes<a name="en-us_topic_0237124743_en-us_topic_0059778871_sdd9b50c633a14efdbad02bbf9cb139d3"></a>

**Parameter description:**  specifies whether to ignore system indexes when reading system tables \(but still update the indexes when modifying the tables\).

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>This parameter is useful for recovering data from tables whose system indexes are damaged.  

**Value range**: Boolean

-   **on**  indicates that system indexes are ignored.
-   **off**  indicates that system indexes are not ignored.

**Default value**:  **off**

## post\_auth\_delay<a name="en-us_topic_0237124743_en-us_topic_0059778871_sfd7c612362aa44f48b99e678fa16aa63"></a>

**Parameter description:**  Specifies the delay in the connection to the server after a successful authentication. Developers can attach a debugger to the server startup process.

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147. The unit is s.

**Default value**:  **0**

## pre\_auth\_delay<a name="en-us_topic_0237124743_en-us_topic_0059778871_s82cb9c3349d3406d88d3ade8b4911b6e"></a>

**Parameter description**: Specifies the period of delaying authentication after the connection to the server is started. Developers can attach a debugger to the authentication procedure.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 60. The unit is s.

**Default value**:  **0**

## trace\_notify<a name="en-us_topic_0237124743_en-us_topic_0059778871_sa6199e2adece4b37973aa834ae741888"></a>

**Parameter description:**  Specifies whether to generate a large amount of debugging output for the  **LISTEN**  and  **NOTIFY**  commands. The level of  [client\_min\_messages](logging-time.md#en-us_topic_0237124722_en-us_topic_0059778452_s2955da1f1cb24b0aa68ddc77700233e0)  or  [log\_min\_messages](logging-time.md#en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a)  must be  **DEBUG1**  or lower to send such output to the client or server logs, respectively.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function is enabled.
-   **off**  indicates that the function is disabled.

**Default value**:  **off**

## trace\_recovery\_messages<a name="en-us_topic_0237124743_en-us_topic_0059778871_s329f8fa0c1b64bdba4e745567ff6c011"></a>

**Parameter description**: Specifies whether to enable logging of recovery-related debugging output. This parameter allows users to overwrite the normal setting of  [log\_min\_messages](logging-time.md#en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a), but only for specific messages. This is intended for the use in debugging the standby server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values. Valid values include  **debug5**,  **debug4**,  **debug3**,  **debug2**,  **debug1**, and  **log**. For details about the parameter values, see  [log\_min\_messages](logging-time.md#en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a).

**Default value**:  **log**

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   **log**  indicates that recovery-related debugging information will not be logged.  
>-   Except the default value  **log**, each of the other values indicates that recovery-related debugging information at the specified level will also be logged. Common settings of  **log\_min\_messages**  will unconditionally record information into server logs.  

## trace\_sort<a name="en-us_topic_0237124743_en-us_topic_0059778871_sd0cba25915364b649503310146519623"></a>

**Parameter description**: Specifies whether to print information about resource usage during sorting operations. This parameter is available only when the macro TRACE\_SORT is defined during the openGauss compilation. However, TRACE\_SORT is currently defined by default.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function is enabled.
-   **off**  indicates that the function is disabled.

**Default value**:  **off**

## zero\_damaged\_pages<a name="en-us_topic_0237124743_en-us_topic_0059778871_s2697318353ad47b8973ac2507b20d0cb"></a>

Parameter description: Specifies whether to detect a damaged page header that causes openGauss to report an error, aborting the current transaction.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

Setting this parameter to  **on**  causes the system to report a warning, zero out the damaged page, and continue processing. This behavior will destroy data, including all the rows on the damaged page. However, it allows you to bypass the error and retrieve rows from any undamaged pages that may be present in the table. Therefore, it is useful for restoring data if corruption has occurred due to a hardware or software error. In most cases, you are advised not to set this parameter to  **on**  unless you do not want to restore data from the damaged pages of a table.

**Default value**:  **off**

## string\_hash\_compatible<a name="en-us_topic_0237124743_en-us_topic_0059778871_s8e3745c42ce043a2b17da80c822304de"></a>

**Parameter description:**  specifies whether to use the same method to calculate char-type hash values and varchar- or text-type hash values. Based on the setting of this parameter, you can determine whether a redistribution is required when a distribution column is converted from a char-type data distribution into a varchar- or text-type data distribution.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the same calculation method is used and a redistribution is not required.
-   **off**  indicates that different calculation methods are used and a redistribution is required.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Calculation methods differ in the length of input strings used for calculating hash values. \(For a char-type hash value, spaces following a string are not counted as the length. For a text- or varchar-type hash value, the spaces are counted.\) The hash value affects the calculation result of queries. To avoid query errors, do not modify this parameter during database running once it is set.  

**Default value**:  **off**

## cost\_param<a name="en-us_topic_0237124743_en-us_topic_0059778871_s482bb0549b2b45358aed45404d3f33cb"></a>

**Parameter description:**  Controls use of different estimation methods in specific customer scenarios, allowing estimated values approximating to onsite values. This parameter can control various methods simultaneously by performing AND \(&\) on the bit of each method. A method is selected if the result value is not  **0**.

When  **cost\_param & 1**  is set to a value other than  **0**, an improved mechanism is used for estimating the selection rate of non-equi-joins. This method is more accurate for estimating the selection rate of joins between two identical tables. At present,  **cost\_param & 1=0**  is not used. That is, a better formula is selected for calculation.

When  **cost\_param & 2**  is set to a value other than  **0**, the selection rate is estimated based on multiple filter criteria. The lowest selection rate among all filter criteria, but not the product of the selection rates for two tables under a specific filter criterion, is used as the total selection rate. This method is more accurate when a close correlation exists between the columns to be filtered.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to  _INT\_MAX_

**Default value**:  **0**

## convert\_string\_to\_digit<a name="en-us_topic_0237124743_en-us_topic_0059778871_s522001c800824f5fb1ef55596037d4d3"></a>

**Parameter description:**  Specifies the implicit conversion priority, which determines whether to preferentially convert strings into numbers.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that strings are preferentially converted into numbers.
-   **off**  indicates that strings are not preferentially converted into numbers.

**Default value**:  **on**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Modify this parameter only when absolutely necessary because the modification will change the rule for converting internal data types and may cause unexpected results.  

## nls\_timestamp\_format<a name="en-us_topic_0237124743_en-us_topic_0059778871_sd50fac6da781483cae15aaa57243b88e"></a>

**Parameter description:**  Specifies the default timestamp format.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **DD-Mon-YYYY HH:MI:SS.FF AM**

## remotetype<a name="en-us_topic_0237124743_en-us_topic_0059778871_sd748becd57e5455eaead6fc19c60c02f"></a>

**Parameter description**: Specifies the remote connection type.

This parameter does not support modification.

**Value range**: enumerated values. Valid values are  **application**,  **datanode**, and  **internaltool**.

**Default value**:  **application**

## enable\_partitionwise<a name="en-us_topic_0237124743_en-us_topic_0059778871_sebd2b4ea24614d058e0b9d8e8764e875"></a>

**Parameter description:**  Specifies whether to select an intelligent algorithm for joining partition tables.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that an intelligent algorithm is selected.
-   **off**  indicates that an intelligent algorithm is not selected.

**Default value**:  **off**

## max\_function\_args<a name="en-us_topic_0237124743_en-us_topic_0059778871_s1a3d3c95fbda4e20a65cb3400cf6a418"></a>

**Parameter description**: Specifies the maximum number of parameters allowed for a function.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value range**: an integer.

**Default value**:  **666**

## max\_user\_defined\_exception<a name="en-us_topic_0237124743_en-us_topic_0059778871_s49f712571025449983448c1daf36b7e4"></a>

**Parameter description**: Specifies the maximum number of exceptions. The default value cannot be changed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

Value range: an integer. Currently, only the fixed value  **1000**  is supported.

**Default value**:  **1000**

## enable\_debug\_vacuum<a name="en-us_topic_0237124743_en-us_topic_0059778871_sf839417816c74a37a3bdb4138d946c55"></a>

**Parameter description**: Specifies whether to allow output of some VACUUM-related logs for problem locating. This parameter is used only by developers. Common users are advised not to use it.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on/true**  indicates that output of VACUUM-related logs is allowed.
-   **off/false**  indicates that output of VACUUM-related logs is disallowed.

**Default value**:  **off**

## enable\_global\_stats<a name="en-us_topic_0237124743_en-us_topic_0059778871_s9161437c044d473eb0de85acd35ecdb7"></a>

**Parameter description**: Specifies the current statistics collection mode, which can be global statistics collection or single-node statistics collection. By default, the global statistics collection mode is used. If this parameter is set to  **off**, the statistics of the first node in the openGauss are collected by default. In this case, the quality of the generated query plan may be affected. However, the information collection performance is optimal. Therefore, exercise caution when disabling this parameter.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates the global statistics mode.
-   **off**  or  **false**  indicates the database node statistics.

**Default value**:  **on**

## enable\_fast\_numeric<a name="en-us_topic_0237124743_en-us_topic_0059778871_s60b2856bf1b446d6b5e76c70f74b45bf"></a>

**Parameter description:**  Specifies whether to enable optimization for numeric data calculation. Calculation of numeric data is time-consuming. Numeric data is converted into int64- or int128-type data to improve numeric data calculation performance.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that optimization for numeric data calculation is enabled.
-   **off**  or  **false**  indicates that optimization for numeric data calculation is disabled.

**Default value**:  **on**

## rewrite\_rule<a name="en-us_topic_0237124743_en-us_topic_0059778871_section48834236194958"></a>

**Parameter description**: Specifies the rewriting rule for enabled optional queries. Some query rewrite rules are optional. Enabling them cannot always improve the query efficiency. In a specific customer scenario, you can set the query rewriting rules through the GUC parameter to achieve optimal query efficiency.

This parameter can control the combination of query rewriting rules, for example, there are over one override rules: rule1, rule2, rule3, and rule4. To set the parameters, you can perform the following operations:

```
set rewrite_rule=rule1;          -- Enable query rewriting rule rule1
set rewrite_rule=rule2, rule3;     -- Enable the query rewriting rules rule2 and rule3
set rewrite_rule=none;         -- Disable all optional query rewriting rules
```

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **none**: Does not use any optional query rewriting rules
-   **lazyagg**: Uses the Lazy Agg query rewriting rules for eliminating aggregation operations in subqueries.

**Default value**:  **magicset**

## enable\_compress\_spill<a name="en-us_topic_0237124743_en-us_topic_0059778871_section6480378794448"></a>

**Parameter description**: Specifies whether to enable the compression function of writing data to disk.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that optimization for writing data to disk is enabled.
-   **off**  or  **false**  indicates that optimization for writing data to disk is disabled. 

**Default value**:  **on**

## analysis\_options<a name="en-us_topic_0237124743_section41951721291"></a>

**Parameter description**: Specifies whether to enable function options in the corresponding options to use the corresponding location functions, including data verification and performance statistics. For details, see the options in the value range.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **LLVM\_COMPILE**  indicates that the codegen compilation time of each thread is displayed on the explain performance page.
-   **HASH\_CONFLICT**  indicates that the log file in the  **pg\_log**  directory of the database node process displays the hash table statistics, including the hash table size, hash chain length, and hash conflict information.
-   **STREAM\_DATA\_CHECK**  indicates that a CRC check is performed on data before and after network data transmission.

**Default value**:  **ALL,on\(\),off\(LLVM\_COMPILE,HASH\_CONFLICT,STREAM\_DATA\_CHECK\)**, which indicates that no location function is enabled.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Use  **on\(\)**  or **off\(\)**  to enable or disable the functions. The function options that are not displayed retain the original values. Format for reference:  
>'on\(option1, option2, ...\)'  
>'off\(ALL\)'  

## resource\_track\_log<a name="en-us_topic_0237124743_section11914205152413"></a>

**Parameter description**: Specifies the log level of self-diagnosis. Currently, this parameter takes effect only in multi-column statistics.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **summary**: Brief diagnosis information is displayed.
-   **detail**: Detailed diagnosis information is displayed.

Currently, the two parameter values differ only when there is an alarm about multi-column statistics not collected. If the parameter is set to  **summary**, such an alarm will not be displayed. If it is set to  **detail**, such an alarm will be displayed.

**Default value**:  **summary**

## udf\_memory\_limit<a name="en-us_topic_0237124743_section1765913299426"></a>

**Parameter description**: Controls the maximum physical memory that can be used when each database node executes UDFs.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. The value range is from 200 x 1024 to  _max\_process\_memory_  and the unit is KB.

**Default value**:  **200MB**

## FencedUDFMemoryLimit<a name="en-us_topic_0237124743_section0948171616421"></a>

**Parameter description**: Specifies the virtual memory used by each fenced udf worker process.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Suggestion**: You are not advised to set this parameter. You can set  [udf\_memory\_limit](#en-us_topic_0237124743_section1765913299426)  instead.

Value range: an integer ranging from 0 KB to 2147483647 KB. The unit can also be MB or GB.  **0**  indicates that the memory is not limited.

**Default value**:  **0**

## UDFWorkerMemHardLimit<a name="en-us_topic_0237124743_section19591235141915"></a>

**Parameter description**: Specifies the maximum value of  **fencedUDFMemoryLimit**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Suggestion**: You are not advised to set this parameter. You can set  [udf\_memory\_limit](#en-us_topic_0237124743_section1765913299426)  instead.

Value range: an integer ranging from 0KB to 2147483647KB. The unit can also be MB or GB.

**Default value**:  **1GB**

## pljava\_vmoptions<a name="en-us_topic_0237124743_section867525320283"></a>

**Parameter description**: Specifies the startup parameters for JVMs used by the PL/Java function.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, supporting:

-   JDK8 JVM startup parameters. For details, see JDK  [official ](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html)descriptions.
-   JDK8 JVM system attributes \(starting with  **–D**, for example,  **–Djava.ext.dirs**\). For details, see JDK  [official ](https://docs.oracle.com/javase/tutorial/deployment/doingMoreWithRIA/properties.html)descriptions.
-   User-defined parameters \(starting with  **–D**, for example,  **–Duser.defined.option**\).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If  **pljava\_vmoptions**  is set to a value beyond the value range, an error will be reported when PL/Java functions are used. For details, see  [PL/pgSQL Functions](pl-pgsql-functions.md).  

**Default value**: empty

## enable\_pbe\_optimization<a name="en-us_topic_0237124743_section4605202011486"></a>

**Parameter description**: Specifies whether the optimizer optimizes the query plan for statements executed in Parse Bind Execute \(PBE\) mode.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the optimizer optimizes the query plan.
-   **off**  indicates that the optimizer does not optimize the execution.

**Default value**:  **on**

## enable\_light\_proxy<a name="en-us_topic_0237124743_section46891552174813"></a>

**Parameter description**: Specifies whether the optimizer optimizes the execution of simple queries on the primary node of the databases. This parameter does not take effect if the character set of the application side does not match that of the kernel side. You are advised to set the character set to UTF8 when creating a database.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the optimizer optimizes the execution of simple queries on the primary node of the databases.
-   **off**  indicates that the optimizer does not optimize the execution.

**Default value**:  **on**

## enable\_global\_plancache<a name="section1062361853620"></a>

**Parameter description**: Specifies whether to share the cache of the PBE query execution plan. Enabling this function can reduce the memory usage of database nodes in high concurrency scenarios.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the execution plan of the PBE query is shared in the cache.
-   **off**  indicates that the execution plan of the PBE query is not shared in the cache.

**Default value**:  **off**

## checkpoint\_flush\_after<a name="en-us_topic_0237124743_section1827711441139"></a>

**Parameter description**: Specifies the number of consecutive disk pages that the checkpointer writer thread writes before asynchronous flush. In openGauss, the disk page size is 8 KB.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 256.  **0**  indicates that the asynchronous flush function is disabled. For example, if the value is  **32**, the checkpointer thread continuously writes 32 disk pages \(that is, 32 x 8 = 256 KB\) before asynchronous flush.

**Default value**:  **32**

## bgwriter\_flush\_after<a name="en-us_topic_0237124743_section5339114713229"></a>

**Parameter description**: Specifies the number of consecutive disk pages that the background writer thread writes before asynchronous flush. In openGauss, the disk page size is 8 KB.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 256.  **0**  indicates that the asynchronous flush function is disabled. The size of a single page is 8 KB. For example, if the value is  **64**, the background writer thread continuously writes 64 disk pages \(that is, 64 x 8 = 512 KB\) before asynchronous flush.

**Default value**:  **256KB**  \(32 pages\)

## backend\_flush\_after<a name="en-us_topic_0237124743_section9929104982217"></a>

**Parameter description**: Specifies the number of consecutive disk pages that the backend thread writes before asynchronous flush. In openGauss, the disk page size is 8 KB.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 256.  **0**  indicates that the asynchronous flush function is disabled. The size of a single page is 8 KB. For example, if the value is  **64**, the backend thread continuously writes 64 disk pages \(that is, 64 x 8 = 512 KB\) before asynchronous flush.

**Default value**:  **0**

## enable\_parallel\_ddl<a name="en-us_topic_0237124743_section11251245438"></a>

**Parameter description**: Specifies whether multiple database nodes can concurrently perform DDL operations on the same database object.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: DDL operations can be concurrently performed without distributed deadlocks.
-   **off**: Distributed deadlocks may occur when DDL operations are concurrently performed.

**Default value**:  **on**

## show\_acce\_estimate\_detail<a name="en-us_topic_0237124743_section161649114254"></a>

**Parameter description**: The evaluation information is generally used by O&M personnel during maintenance, and it may affect the output display of the  **EXPLAIN**  statement. Therefore, this parameter is disabled by default. The evaluation information is displayed only if the  **verbose**  option of the  **EXPLAIN**  statement is enabled.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the evaluation information is displayed in the output of the  **EXPLAIN**  statement.
-   **off**  indicates that the evaluation information is not displayed in the output of the  **EXPLAIN**  statement.


**Default value**:  **off**

## enable\_prevent\_job\_task\_startup<a name="en-us_topic_0237124743_section7473175117193"></a>

**Parameter description**: Specifies whether to start the job thread.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the job thread is not started.
-   **off**  indicates that the job thread is started.

**Default value**:  **off**

## enable\_early\_free<a name="en-us_topic_0237124743_section18463123172910"></a>

**Parameter description**: Specifies whether the operator memory can be released in advance.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the operator memory can be released in advance.
-   **off**  indicates that the operator memory cannot be released in advance.

**Default value**:  **on**

## support\_batch\_bind<a name="en-us_topic_0237124743_section157265302582"></a>

**Parameter description**: Specifies whether to batch bind and execute PBE statements through interfaces such as JDBC, ODBC, and Libpq.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that batch binding and execution are used.
-   **off**  indicates that batch binding and execution are not used.

**Default value**:  **on**

## check\_implicit\_conversions<a name="en-us_topic_0237124743_section214364810316"></a>

**Parameter description**: Specifies whether to check candidate index paths generated for index columns that have implicit type conversions in a query.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that a check will be performed for candidate index paths generated for index columns that have implicit type conversion in a query.
-   **off**  indicates that a check will not be performed.

**Default value**:  **off**

## enable\_thread\_pool<a name="en-us_topic_0237124743_section97160555612"></a>

**Parameter description**: Specifies whether to enable the thread pool function. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the thread pool function is enabled.
-   **off**  indicates that the thread pool function is disabled.

**Default value**:  **off**

## thread\_pool\_attr<a name="en-us_topic_0237124743_section787511112134"></a>

**Parameter description**: Specifies the detailed attributes of the thread pool function. This parameter is valid only when  **enable\_thread\_pool**  is set to  **on**. This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters.

This parameter consists of three parts: thread\_num, group\_num, and cpubind\_info. The meanings of the three parts are as follows:

-   **thread\_num**  indicates the total number of threads in the thread pool. The value ranges from 0 to 4096. The value  **0**  indicates that the database automatically configures the number of threads in the thread pool based on the number of CPU cores. If the value is greater than  **0**, the number of threads in the thread pool is the same as the value of  **thread\_num**.
-   **group\_num**  indicates the number of thread groups in the thread pool. The value ranges from 0 to 64. The value  **0**  indicates that the database automatically configures the number of thread groups in the thread pool based on the number of NUMA groups. If the value is greater than  **0**, the number of thread groups in the thread pool is the same as the value of  **group\_num**.
-   **cpubind\_info**  indicates whether the thread pool is bound to a core. The available configuration modes are as follows: 1. '\(nobind\)': The thread is not bound to a core. 2. '\(allbind\)': Use all CPU cores that can be queried in the current system to bind threads. 3. '\(nodebind: 1, 2\)': Use the CPU cores in NUMA groups 1 and 2 to bind threads. 4. '\(cpubind: 0-30\)': Use the CPU cores 0 to 30 to bind threads. This parameter is case-insensitive.

**Default value**:  **'16, 2, \(nobind\)'**

## numa\_distribute\_mode<a name="en-us_topic_0237124743_section1641163520277"></a>

**Parameter description**: Specifies the distribution of some shared data and threads among NUMA nodes. This parameter is used to optimize the performance of large-scale ARM servers with multiple NUMA nodes. Generally, you do not need to set this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. The valid values are  **none**  and  **all**.

-   **none**  indicates that this function is disabled.
-   **all**  indicates that some shared data and threads are distributed to different NUMA nodes to reduce the number of remote access times and improve performance. Currently, this function applies only to ARM servers with multiple NUMA nodes. All NUMA nodes must be available for database processes. You cannot select only some NUMA nodes.

**Default value**:  **none**

## log\_pagewriter<a name="en-us_topic_0237124743_section174909217258"></a>

**Parameter description**: Specifies whether to display the page refresh information of a thread and details about an incremental check point after the incremental check point is enabled. You are not advised to set this parameter to  **true**  because a large amount of information will be generated.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **off**

## enable\_opfusion<a name="en-us_topic_0237124743_section1473317329116"></a>

**Parameter description**: Specifies whether to optimize simple queries.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

Simple query restrictions are as follows:

- Only indexscan and indexonlyscan are supported, and the filter conditions of all WHERE statements are on the index.


- Only support single table addition, deletion, modification, and check, not join and using.


- Only row storage tables are supported, partition tables are not supported, and tables do not support triggers.


- Does not support information statistics features such as active sql and QPS.


- Tables that are being expanded or reduced are not supported.


- Does not support querying or modifying system columns.


- Only supports simple SELECT statements, for example:

    ```
  SELECT c3 FROM t1 WHERE c1 =? And c2 =10;
    ```

  Only the columns of the target table can be queried. The c1 and c2 columns are index columns, and the following can be constants or parameters, and for update can be used.


- Only simple INSERT statements are supported, for example:

    ```
  INSERT INTO t1 VALUES (?,10,?);
    ```

     Only one VALUES is supported. The types in VALUES can be constants and parameters, and return is not supported.

- Only support simple DELETE statements, for example:

    ```
    DELETE FROM t1 WHERE c1 =? And c2 = 10;
    ```

  The c1 and c2 columns are index columns, and the following can be constants or parameters.

- Only simple UPDATE statements are supported, for example:

    ```
    UPDATE t1 SET c3 = c3+? WHERE c1 =? And c2 = 10;
    ```

   The modified value of column c3 can be a constant and a parameter, or a simple expression. The columns c1 and c2 are index columns, and the following can be constants or parameters.

**Value range**: Boolean

-   **on**  indicates that the performance logs are output.
-   **off**  indicates that the performance logs are not output.

**Default value**:  **off**

## advance\_xlog\_file\_num<a name="en-us_topic_0237124743_section82551249132115"></a>

**Parameter description**: Specifies the number of Xlog files that are periodically initialized in advance in the background. This parameter is used to prevent the Xlog file initialization from affecting the performance during transaction submission. However, such a fault may occur only when the system is overloaded. Therefore, you do not need to set this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 100. The value  **0**  indicates that initialization is not performed in advance. For example, the value  **10**  indicates that the background thread periodically initializes 10 Xlog files in advance based on the write location of the current Xlog.

**Default value**:  **0**

## enable\_beta\_opfusion<a name="section19786104412547"></a>

**Parameter description**: Specifies whether to accelerate the execution of SQL statements, such as aggregate functions, sorting, and nestloop join, in TPC-C when  **enable\_opfusion**  is set to  **on**. For the nestloop join SQL statements,  **enable\_beta\_nestloop\_fusion**  must be also set to  **on**.

**Value range**: Boolean

**Default value**:  **off**

## enable\_beta\_nestloop\_fusion<a name="section19131501541"></a>

**Parameter description**: Specifies whether to accelerate the execution of nestloop join SQL statements in TPC-C when both  **enable\_opfusion**  and  **enable\_beta\_opfusion**  are set to  **on**.

**Value range**: Boolean

**Default value**:  **off**

