# Other Optimizer Options<a name="EN-US_TOPIC_0251900948"></a>

## default\_statistics\_target<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_se18c86fcdf5e4a22870f71187436d815"></a>

**Parameter description**: Specifies the default statistics target for table columns without a column-specific target set via  **ALTER TABLE SET STATISTICS**. If this parameter is set to a positive number, it indicates the number of samples of statistics information. If this parameter is set to a negative number, percentage is used to set the statistic target. The negative number converts to its corresponding percentage, for example, -5 means 5%.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from –100 to 10000

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   A larger positive number than the default value increases the time required to do  **ANALYZE**, but might improve the quality of the optimizer's estimates.  
>-   Changing settings of this parameter may result in performance deterioration. If query performance deteriorates, you can:  
>    1.  Restore to the default statistics.  
>    2.  Use hints to force the optimizer to use the optimal query plan.   
>-   If this parameter is set to a negative value, the number of samples is greater than or equal to 2% of the total data volume, and the number of records in user tables is less than 1.6 million, the time taken by running  **ANALYZE**  will be longer than when this parameter uses its default value.  
>-   If this parameter is set to a negative value, the auto-analyze function is disabled.  

**Default value**:  **100**

## constraint\_exclusion<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s75c4b6565dca48b99f8a70f170c24217"></a>

**Parameter description**: Controls the query optimizer's use of table constraints to optimize queries.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **on**  indicates that constraints for all tables are examined.
-   **off**  indicates that constraints for any table are not examined.
-   **partition**  indicates that only constraints for inheritance child tables and  **UNION ALL**  subqueries are examined.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >When  **constraint\_exclusion**  is set to  **on**, the optimizer compares query conditions with the table's  **CHECK**  constraints, and omits scanning tables for which the conditions contradict the constraints.  


**Default value**:  **partition**

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Currently, constraint exclusion is enabled by default only for cases that are often used to implement table partitioning. Turning this feature on for all tables imposes extra planning on simple queries, and provides no benefit for simple queries. If you have no partitioned tables, set it to  **off**.  

## cursor\_tuple\_fraction<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s9030e914f1684810ad4ca90ee6f8dbfe"></a>

**Parameter description**: Specifies the optimizer's estimated fraction of a cursor's rows that are retrieved.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a floating point number ranging from 0.0 to 1.0

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Smaller values of this setting bias the optimizer towards using  **fast start**  plans for cursors, which will retrieve the first few rows quickly while perhaps taking a long time to fetch all rows. Larger values put more emphasis on the total estimated time. At the maximum setting of  **1.0**, cursors are planned exactly like regular queries, considering only the total estimated time and how soon the first rows might be delivered.  

**Default value**:  **0.1**

## from\_collapse\_limit<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s5a63f46b09664fc38df319b9574d1e74"></a>

**Parameter description**: Specifies whether the optimizer merges sub-queries into upper queries based on the resulting FROM list. The optimizer merges sub-queries into upper queries if the resulting FROM list would have no more than this many items.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Smaller values reduce planning time but may lead to inferior execution plans.  

**Default value**:  **8**

## join\_collapse\_limit<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s512bd7049723411bb70ed54e058226cb"></a>

**Parameter description**: Specifies whether the optimizer rewrites  **JOIN**  constructs \(except  **FULL JOIN**\) into lists of  **FROM**  items based on the number of the items in the result list.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   Setting this parameter to  **1**  prevents join reordering. As a result, the join order specified in the query will be the actual order in which the relations are joined. The query optimizer does not always choose the optimal join order. Therefore, advanced users can temporarily set this variable to  **1**, and then specify the join order they desire explicitly.  
>-   Smaller values reduce planning time but may lead to inferior execution plans.  

**Default value**:  **8**

## plan\_mode\_seed<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_sd5bd67263f8d4f5ab052842437eda4a1"></a>

**Parameter description**: This is a commissioning parameter. Currently, it supports only  **OPTIMIZE\_PLAN**  and  **RANDOM\_PLAN**. The value  **0**  \(for  **OPTIMIZE\_PLAN**\) indicates the optimized plan using the dynamic planning algorithm. Other values are for  **RANDOM\_PLAN**, which indicates that the plan is randomly generated.  **–1**  indicates that users do not specify the value of the seed identifier. In this case, the optimizer generates a random integer from  **1**  to  **2147483647**  and a random execution plan based on the generated integer. A value from  **1**  to  **2147483647**  is regarded as the seed identifier, based on which the optimizer generates a random execution plan.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 2147483647

**Default value**:  **0**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   If  **plan\_mode\_seed**  is set to  **RANDOM\_PLAN**, the optimizer generates a random execution plan that may not be the optimal one. Therefore, to guarantee the query performance, the default value  **0**  is recommended during upgrade, scale-out, scale-in, and O&M.  
>-   If this parameter is not set to  **0**, the specified hint will not be used.  

## hashagg\_table\_size<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_sd3604978a99a48e784619997f8036b61"></a>

**Parameter description**: Specifies the hash table size during the execution of the HASH JOIN operation.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_/2

**Default value**:  **0**

## enable\_codegen<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_sbe5e1dbabf214873baf37dbb7580a7a3"></a>

**Parameter description**: Specifies whether code optimization is enabled. Currently, the code optimization uses the LLVM optimization.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that code optimization is enabled.
-   **off**  indicates that code optimization is disabled.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >Currently, the LLVM optimization only supports the vectorized executor and SQL on Hadoop features. You are advised to set this parameter to  **off**  in other cases.  


**Default value**:  **on**

## codegen\_strategy<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_sb93d0db93dd84302b9f45d5da735aa18"></a>

**Parameter description**: Specifies the codegen optimization strategy that is used when an expression is converted to be codegen-based.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **partial**  indicates that even if functions that are not codegen-based exist in an expression, you can still call the LLVM dynamic optimization strategy by using the entire codegen framework of the expression.
-   **pure**  indicates that only when all functions in an expression can be codegen-based, the LLVM dynamic optimization strategy can be called.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >In the scenario where query performance reduces after the codegen function is enabled, you can set this parameter to  **pure**. In other scenarios, do not change the default value  **partial**  of this parameter.  


**Default value**:  **partial**

## enable\_codegen\_print<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s92cb930f59ed4f86ae792faccc38da8c"></a>

**Parameter description**: Specifies whether the LLVM IR function can be printed in logs.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the LLVM IR function can be printed in logs.
-   **off**  indicates that the LLVM IR function cannot be printed in logs.

**Default value**:  **off**

## codegen\_cost\_threshold<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s8956dc23bf5f4bf0b02e3ba53f44ec30"></a>

**Parameter description**: The LLVM compilation takes some time to generate executable machine code. Therefore, LLVM compilation is beneficial only when the actual execution cost is more than the sum of the code required for generating machine code and the optimized execution cost. This parameter specifies a threshold. If the estimated execution cost exceeds the threshold, LLVM optimization is performed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647

**Default value**:  **10000**

## enable\_bloom\_filter<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_s450b8159407e41fe96dc18ca298e1d16"></a>

**Parameter description**: Specifies whether the BloomFilter optimization can be used. This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the BloomFilter optimization can be used.
-   **off**  indicates that the BloomFilter optimization cannot be used.

**Default value**:  **on**

## enable\_extrapolation\_stats<a name="en-us_topic_0242371509_en-us_topic_0237124719_section251911538557"></a>

**Parameter description**: Specifies whether the extrapolation logic is used for data of DATE type based on historical statistics. The logic can increase the accuracy of estimation for tables whose statistics are not collected in time, but will possibly provide an overlarge estimation due to incorrect extrapolation. Enable the logic only in scenarios where the data of DATE type is periodically inserted. This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the extrapolation logic is used for data of DATE type based on historical statistics.
-   **off**  indicates that the extrapolation logic is not used for data of DATE type based on historical statistics.

**Default value**:  **off**

## autoanalyze<a name="en-us_topic_0242371509_en-us_topic_0237124719_section114241119217"></a>

**Parameter description**: Specifies whether to automatically collect statistics on tables that have no statistics when a plan is generated.  **autoanalyze**  cannot be used for foreign or temporary tables. To collect statistics, manually perform the ANALYZE operation. If an exception occurs in the database during the execution of autoanalyze on a table, after the database is recovered, the system may still prompt you to collect the statistics of the table when you run the statement again. In this case, manually perform the ANALYZE operation on the table to synchronize statistics. This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the table statistics are automatically collected.
-   **off**  indicates that the table statistics are not automatically collected.

**Default value**:  **off**

## enable\_analyze\_check<a name="en-us_topic_0242371509_en-us_topic_0237124719_section17142163813317"></a>

**Parameter description**: Checks whether statistics were collected about tables whose  **reltuples**  and  **relpages**  are displayed as  **0**  in  **pg\_class**  during plan generation.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the tables will be checked.
-   **off**  indicates that the tables will not be checked.

**Default value**:  **on**

## enable\_sonic\_hashagg<a name="en-us_topic_0242371509_en-us_topic_0237124719_section93071140163618"></a>

**Parameter description**: Specifies whether to use the hash aggregation operator designed for column-oriented hash tables when certain constraints are met.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the hash aggregation operator designed for column-oriented hash tables is used when certain constraints are met.
-   **off**  indicates that the hash aggregation operator designed for column-oriented hash tables is not used.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   When the hash aggregation operator designed for column-oriented hash tables is used, the memory usage of the query can be reduced. However, in scenarios when  **[enable\_codegen](#en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059779049_sbe5e1dbabf214873baf37dbb7580a7a3)**  is set to  **on**  and the performance is significantly improved, the performance of the operator may deteriorate.  
>-   If  **enable\_sonic\_hashagg**  is set to  **on**, when certain constraints are met, the hash aggregation operator designed for column-oriented hash tables is used and its name is displayed as  **Sonic Hash Aggregation**  in the output of the Explain Analyze/Performance operation. When the constraints are not met, the operator name is displayed as  **Hash Aggregation**.  

**Default value**:  **on**

## enable\_sonic\_hashjoin<a name="en-us_topic_0242371509_en-us_topic_0237124719_section143001361527"></a>

**Parameter description**: Specifies whether to use the hash join operator designed for column-oriented hash tables when certain constraints are met.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the hash join operator designed for column-oriented hash tables is used when certain constraints are met.
-   **off**  indicates that the hash join operator designed for column-oriented hash tables is not used.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   Currently, the parameter can be used only for Inner Join.  
>-   If  **enable\_sonic\_hashjoin**  is enabled, the memory usage of query using the Hash Inner operator can be reduced. However, in scenarios where the code generation technology can significantly improve performance, the performance of the operator may deteriorate.  
>-   If  **enable\_sonic\_hashjoin**  is set to  **on**, when certain constraints are met, the hash join operator designed for column-oriented hash tables is used and its name is displayed as  **Sonic Hash Join**  in the output of the Explain Analyze/Performance operation. When the constraints are not met, the operator name is displayed as  **Hash Join**.  

**Default value**:  **on**

## enable\_sonic\_optspill<a name="en-us_topic_0242371509_en-us_topic_0237124719_section8441164814169"></a>

**Parameter description**: Specifies whether to optimize the number of files to be written to disks for the Hash Join operator designed for column-oriented hash tables. If this parameter is set to  **on**, the number of files written to disk does not increase significantly when the Hash Join operator writes a large number of files to disk.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the optimization is enabled.
-   **off**  indicates that the optimization is disabled.

**Default value**:  **on**

## log\_parser\_stats<a name="en-us_topic_0242371509_en-us_topic_0237124719_en-us_topic_0059778346_s6ff0e1cd09c948469a5e8663cafc209f"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of the parser module.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the performance logs are output.
-   **off**  indicates that the performance logs are not output.

**Default value**:  **off**

## log\_planner\_stats<a name="en-us_topic_0242371509_en-us_topic_0237124719_section47307885510"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of the planner module.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the performance logs are output.
-   **off**  indicates that the performance logs are not output.

**Default value**:  **off**

## log\_executor\_stats<a name="en-us_topic_0242371509_en-us_topic_0237124719_section10793131819578"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of the executor module.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the performance logs are output.
-   **off**  indicates that the performance logs are not output.

**Default value**:  **off**

## log\_statement\_stats<a name="en-us_topic_0242371509_en-us_topic_0237124719_section21484285715"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of a statement.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the performance logs are output.
-   **off**  indicates that the performance logs are not output.

**Default value**:  **off**

## plan\_cache\_mode<a name="en-us_topic_0242371509_en-us_topic_0237124719_section12723161719355"></a>

**Parameter description**: Specifies the policy for generating an execution plan in the  **prepare**  statement.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **auto**  indicates that the  **custom plan**  or  **generic plan**  is selected by default.
-   **force\_generic\_plan**  indicates that the  **generic plan**  is forcibly used.
-   **force\_custom\_plan**  indicates that the  **custom plan**  is forcibly used.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   This parameter is valid only for the  **prepare**  statement. It is used when the parameterized field in the  **prepare**  statement has severe data skew.  
>-   **custom plan**  is a plan generated after you run the  **prepare**  statement where parameters in the  **execute**  statement is embedded. The  **custom plan**  generates a plan based on specific parameters in the  **execute**  statement. This scheme generates a preferred plan based on specific parameters each time and has good execution performance. The disadvantage is that the plan needs to be regenerated before each execution, resulting in a large amount of repeated optimizer overhead.  
>-   **generic plan**  is a plan generated after you run the  **prepare**  statement. The plan policy binds parameters to the plan when you run the  **execute**  statement and execute the plan. The advantage of this scheme is that repeated optimizer overheads can be avoided in each execution. The disadvantage is that the plan may not be optimal when data skew occurs for the bound parameters and may result in poor plan execution performance.  

**Default value**:  **auto**

