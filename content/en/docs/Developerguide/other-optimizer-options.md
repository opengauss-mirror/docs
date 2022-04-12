# Other Optimizer Options<a name="EN-US_TOPIC_0289900235"></a>

## explain\_dna\_file<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s1304d3e4a6f74ad188b804c55313fb69"></a>

**Parameter description:**  Sets  [explain\_perf\_mode](#en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s05e1286701bc4b8d9e1c0c9aecae3a0e)  to  **run**  to export object files in CSV format.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The value of this parameter must be an absolute path plus a file name with the extension  **.csv**.

**Value range**: a string

**Default value**: empty

## explain\_perf\_mode<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s05e1286701bc4b8d9e1c0c9aecae3a0e"></a>

**Parameter description:**  Specifies the display format of the  **explain**  command.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **normal**,  **pretty**,  **summary**, and  **run**

-   **normal**  indicates that the default printing format is used.
-   **pretty**  indicates a new format improved by using openGauss. The new format contains a plan node ID, directly and effectively analyzing performance.
-   **summary**  indicates that the analysis result on this information is printed in addition to the printed information specified by  **pretty**.
-   **run**  indicates that the system exports the printed information specified by  **summary**  as a CSV file for further analysis.

**Default value:** **pretty**  \(In the current version, only the value  **normal**  takes effect. If the value is not  **normal**,  **normal**  is still displayed.\)

## analysis\_options<a name="section1721711794619"></a>

**Parameter description**: Specifies whether to enable function options in the corresponding options to use the corresponding location functions, including data verification and performance statistics. For details, see the options in the value range.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **LLVM\_COMPILE**  indicates that the codegen compilation time of each thread is displayed on the explain performance page.
-   **HASH\_CONFLICT**  indicates that the log in the  **pg\_log**  directory of the database node process displays the statistics of the hash table, including the hash table size, hash link length, and hash conflict.
-   **STREAM\_DATA\_CHECK**  indicates that a CRC check is performed on data before and after network data transmission.

**Default value**:  **ALL,on\(\),off\(LLVM\_COMPILE,HASH\_CONFLICT,STREAM\_DATA\_CHECK\)**, which indicates that no location function is enabled.

## cost\_param<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s482bb0549b2b45358aed45404d3f33cb"></a>

**Parameter description:**  Specifies use of different estimation methods in specific customer scenarios, allowing estimated values approximating to onsite values. This parameter can control various methods simultaneously by performing AND \(&\) on the bit of each method. A method is selected if the result value is not  **0**.

When  **cost\_param & 1**  is set to a value other than  **0**, an improved mechanism is used for connecting the selection rate of non-equi-joins. This method is more accurate for estimating the selection rate of joins between two identical tables. At present,  **cost\_param & 1=0**  is not used. That is, a better formula is selected for calculation.

When  **cost\_param & 2**  is set to a value other than  **0**, the selection rate is estimated based on multiple filter criteria. The lowest selection rate among all filter criteria, but not the product of the selection rates for two tables under a specific filter criterion, is used as the total selection rate. This method is more accurate when a close correlation exists between the columns to be filtered.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_

**Default value**:  **0**

## enable\_partitionwise<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sebd2b4ea24614d058e0b9d8e8764e875"></a>

**Parameter description:**  Specifies whether to select an intelligent algorithm for joining partition tables.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that an intelligent algorithm is selected.
-   **off**  indicates that an intelligent algorithm is not selected.

**Default value**:  **off**

## rewrite\_rule<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_section48834236194958"></a>

**Parameter description**: Specifies the rewriting rule for enabled optional queries. Some query rewrite rules are optional. Enabling them cannot always improve the query efficiency. In a specific customer scenario, you can set the query rewriting rules through this GUC parameter to achieve optimal query efficiency.

This parameter can control the combination of query rewriting rules, for example, there are over one override rules: rule1, rule2, rule3, and rule4. You can perform the following settings:

```
set rewrite_rule=rule1;          -- Enable query rewriting rule rule1
set rewrite_rule=rule2, rule3;     -- Enable the query rewriting rules rule2 and rule3
set rewrite_rule=none;         -- Disable all optional query rewriting rules
```

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **none**: Does not use any optional query rewriting rules.
-   **lazyagg**: Uses the Lazy Agg query rewriting rules for eliminating aggregation operations in subqueries.
-   **magicset**: Uses the Magic Set query rewriting rules delivered from the main query to the subquery.
-   **uniquecheck**: Uses the Unique Check query rewriting rules. Optimize the subquery statements in target columns without agg and check whether the number of returned rows is 1.
-   **intargetlist**: Uses the In Target List query rewriting rules \(subquery optimization in the target column\).
-   **predpushnormal**: Uses the Predicate Push query rewriting rule \(push the predicate condition to the subquery\).
-   **predpushforce**: Uses the Predicate Push query rewriting rules. Push down predicate conditions to subqueries and use indexes as much as possible for acceleration.
-   **predpush**: Selects the optimal plan based on the cost in  **predpushnormal**  and  **predpushforce**.

**Default value**:  **magicset**

## enable\_pbe\_optimization<a name="en-us_topic_0283137548_en-us_topic_0237124743_section4605202011486"></a>

**Parameter description**: Specifies whether the optimizer optimizes the query plan for statements executed in Parse Bind Execute \(PBE\) mode.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the optimizer optimizes the query plan.
-   **off**  indicates that the optimizer does not optimize the execution.

**Default value**:  **on**

## enable\_global\_plancache<a name="en-us_topic_0283137548_section1062361853620"></a>

**Parameter description**: Specifies whether to share the cache of the PBE query execution plan. Enabling this function can reduce the memory usage of database nodes in high concurrency scenarios.

When  **enable\_global\_plancache**  is enabled, the default value of  **local\_syscache\_threshold**  is greater than or equal to 16 MB to ensure that GPC takes effect. If the value of  **local\_syscache\_threshold**  is less than 16 MB, set it to 16 MB. If the value is greater than 16 MB, do not change it.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the execution plan of the PBE query is shared in the cache.
-   **off**  indicates that the execution plan of the PBE query is not shared in the cache.

**Default value**:  **off**

## gpc\_clean\_timeout<a name="section5483151915011"></a>

**Parameter description**: When  **enable\_global\_plancache**  is set to  **on**, if a plan in the shared plan list is not used within the period specified by  **gpc\_clean\_timeout**, the plan will be deleted. This parameter is used to control the retention period of a shared plan that is not used.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 300 to 86400

-   The unit is second.

**Default value**:  **1800**, that is, 30 minutes

## enable\_global\_stats<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_s9161437c044d473eb0de85acd35ecdb7"></a>

**Parameter description**: Specifies the current statistics collection mode, which can be global statistics collection or single-node statistics collection. By default, the global statistics collection mode is used. If this parameter is set to  **off**, the statistics of the first node in openGauss are collected by default. In this case, the quality of the generated query plan may be affected. However, the information collection performance is optimal. Therefore, exercise caution when disabling this parameter.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates the global statistics mode.
-   **off**  or  **false**  indicates the database node statistics.

**Default value**:  **on**

## enable\_opfusion<a name="en-us_topic_0283137548_en-us_topic_0237124743_section1473317329116"></a>

**Parameter description:**  Specifies whether to optimize simple addition, deletion, modification, and query operations.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

The restrictions on simple query are as follows:

-   Only indexscan and indexonlyscan are supported, and the filter criteria of all WHERE statements are on indexes.
-   Only single tables can be added, deleted, modified, and queried. Join and using are not supported.
-   Only row-store tables are supported. Partitioned tables and tables with triggers are not supported.
-   Information statistics features such as active sql and QPS are not supported.
-   Tables that are being scaled out or in are not supported.
-   The system column cannot be queried or modified.
-   Only simple SELECT statements are supported. For example:

    ```
    SELECT c3 FROM t1 WHERE c1 = ? and c2 =10; 
    ```

    Only columns in the target table can be queried. Columns c1 and c2 are index columns, which can be followed by constants or parameters. You can use for update.


-   Only simple INSERT statements are supported. For example:

    ```
    INSERT INTO t1 VALUES (?,10,?); 
    ```

    Only one VALUES is supported. The type in the VALUES can be a constant or a parameter. Returning is not supported.


-   Only simple DELETE statements are supported. For example:

    ```
    DELETE FROM t1 WHERE c1 = ? and c2 = 10;  
    ```

    Columns c1 and c2 are index columns, which can be followed by constants or parameters.


-   Only simple UPDATE statements are supported. For example:

    ```
    UPDATE t1 SET c3 = c3+? WHERE c1 = ? and c2 = 10; 
    ```

    The values modified in column c3 can be constants, parameters, or a simple expression. Columns c1 and c2 are index columns, followed by constants or parameters.


**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_partition\_opfusion<a name="section336053915313"></a>

**Parameter description:**  If this parameter is enabled when the enable\_opfusion parameter is enabled, the simple query of the partitioned table can be optimized to improve the SQL execution performance.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## sql\_beta\_feature<a name="section29331229203010"></a>

**Parameter description**: Specifies the SQL engine's optional beta features to be enabled, including optimization of row count estimation and query equivalence estimation.

These optional features provide optimization for specific scenarios, but performance deterioration may occur in some scenarios for which testing is not performed. In a specific customer scenario, you can set the query rewriting rules through this GUC parameter to achieve optimal query efficiency.

This parameter determines the combination of the SQL engine's beta features, for example, feature1, feature2, feature3, and feature4. You can perform the following settings:

```
-- Enable beta feature feature1 of the SQL engine.
set sql_beta_feature=feature1;
-- Enable beta features feature2 and feature3 of the SQL engine.
set sql_beta_feature=feature2,feature3;
-- Disable all optional beta features of the SQL engine.
set sql_beta_feature=none;           
```

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **none**: None of the beta optimizer features is used.
-   **sel\_semi\_poisson**: Uses poisson distribution to calibrate the equivalent semi-join and anti-join selection rates.
-   **sel\_expr\_instr**: Uses the matching row count to provide more accurate estimation for  **instr\(col, 'const'\) \> 0, = 0, = 1**.
-   **param\_path\_gen**: Generates more possible parameterized paths.
-   **rand\_cost\_opt**: Optimizes the random read cost of tables that have a small amount of data.
-   **param\_path\_opt**: Uses the bloat ratio of the table to optimize the analysis information of indexes.
-   **page\_est\_opt**: Optimizes the  **relpages**  estimation for the analysis information of non-column-store table indexes.
-   **no\_unique\_index\_first**: Disables optimization of the primary key index scanning path first.
-   **join\_sel\_with\_cast\_func**: Type conversion functions are supported when the number of join rows is estimated.
-   **canonical\_pathkey**: after regularization pathkey is generated. \(**pathkey**: a set of ordered key values of data.\)
-   **index\_cost\_with\_leaf\_pages\_only**: Considers index leaf nodes when the index cost is estimated.
-   **partition\_opfusion**: Enables partitioned table optimization.
-   **a\_style\_coerce**: Enables the Decode type conversion rule to be compatible with O. For details, see  [Type Resolution for CASE in ORA Compatibility Type](en-us_topic_0289900690.md#section20337194392613).
-   **partition\_fdw\_on**: SQL statements can be created for Postgres foreign tables based on partitioned tables.
-   **predpush\_same\_level**: Enables predpush hints to control parameterized paths at the same layer.

**Default value:** **none**

## ngram\_gram\_size<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section27776351165838"></a>

**Parameter description**: Specifies the length of the ngram parser segmentation.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 4

**Default value**:  **2**

## ngram\_grapsymbol\_ignore<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section58839880164334"></a>

**Parameter description**: Specifies whether the ngram parser ignores graphical characters.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: The ngram parser ignores graphical characters.
-   **off**: The ngram parser does not ignore graphical characters.

**Default value**:  **off**

## ngram\_punctuation\_ignore<a name="en-us_topic_0283137574_en-us_topic_0237124754_en-us_topic_0059778487_section45880732164140"></a>

**Parameter description**: Specifies whether the ngram parser ignores punctuations.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: The ngram parser ignores punctuations.
-   **off**: The ngram parser does not ignore punctuations.

**Default value**:  **on**

## default\_statistics\_target<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_se18c86fcdf5e4a22870f71187436d815"></a>

**Parameter description**: Specifies the default statistics target for table columns without a column-specific target set via  **ALTER TABLE SET STATISTICS**. If this parameter is set to a positive number, it indicates the number of samples of statistics information. If this parameter is set to a negative number, percentage is used to set the statistic target. The negative number converts to its corresponding percentage, for example, -5 means 5%.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from –100 to 10000

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   A larger positive number than the default value increases the time required to do  **ANALYZE**, but might improve the quality of the optimizer's estimates.
>-   Changing settings of this parameter may result in performance deterioration. If query performance deteriorates, you can:
>    1.  Restore to the default statistics.
>    2.  Use hints to force the optimizer to use the optimal query plan. For details, see  [Hint-based Tuning](en-us_topic_0289900289.md).
>-   If this parameter is set to a negative value, the number of samples is greater than or equal to 2% of the total data volume, and the number of records in user tables is less than 1.6 million, the time taken by running  **ANALYZE**  will be longer than when this parameter uses its default value.
>-   If this parameter is set to a negative value, the auto-analyze function is disabled.

**Default value**:  **100**

## constraint\_exclusion<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s75c4b6565dca48b99f8a70f170c24217"></a>

**Parameter description**: Specifies the query optimizer's use of table constraints to optimize queries.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **on**  indicates that constraints for all tables are examined.
-   **off**  indicates that constraints for any table are not examined.
-   **partition**  indicates that only constraints for inheritance child tables and  **UNION ALL**  subqueries are examined.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >When  **constraint\_exclusion**  is set to  **on**, the optimizer compares query conditions with the table's  **CHECK**  constraints, and omits scanning tables for which the conditions contradict the constraints.


**Default value**:  **partition**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Currently,  **constraint\_exclusion**  is enabled by default only for cases that are often used to implement table partitioning. Turning this feature on for all tables imposes extra planning on simple queries, and provides no benefit for simple queries. If you have no partitioned tables, set it to  **off**.

## cursor\_tuple\_fraction<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s9030e914f1684810ad4ca90ee6f8dbfe"></a>

**Parameter description**: Specifies the optimizer's estimated fraction of a cursor's rows that are retrieved.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a floating point number ranging from 0.0 to 1.0

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Smaller values of this setting bias the optimizer towards using  **fast start**  plans for cursors, which will retrieve the first few rows quickly while perhaps taking a long time to fetch all rows. Larger values put more emphasis on the total estimated time. At the maximum setting of  **1.0**, cursors are planned exactly like regular queries, considering only the total estimated time and how soon the first rows might be delivered.

**Default value**:  **0.1**

## from\_collapse\_limit<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s5a63f46b09664fc38df319b9574d1e74"></a>

**Parameter description**: Specifies whether the optimizer merges sub-queries into upper queries based on the resulting FROM list. The optimizer merges sub-queries into upper queries if the resulting FROM list would have no more than this many items.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Smaller values reduce planning time but may lead to inferior execution plans.

**Default value**:  **8**

## join\_collapse\_limit<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s512bd7049723411bb70ed54e058226cb"></a>

**Parameter description**: Specifies whether the optimizer rewrites  **JOIN**  constructs \(except  **FULL JOIN**\) into lists of  **FROM**  items based on the number of the items in the result list.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  _INT\_MAX_

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   Setting this parameter to  **1**  prevents join reordering. As a result, the join order specified in the query will be the actual order in which the relations are joined. The query optimizer does not always choose the optimal join order. Therefore, advanced users can temporarily set this variable to  **1**, and then specify the join order they desire explicitly.
>-   Smaller values reduce planning time but lead to inferior execution plans.

**Default value**:  **8**

## plan\_mode\_seed<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_sd5bd67263f8d4f5ab052842437eda4a1"></a>

**Parameter description**: This is a commissioning parameter. Currently, it supports only  **OPTIMIZE\_PLAN**  and  **RANDOM\_PLAN**. The value  **0**  \(for  **OPTIMIZE\_PLAN**\) indicates the optimized plan using the dynamic planning algorithm. Other values are for  **RANDOM\_PLAN**, which indicates that the plan is randomly generated.  **–1**  indicates that users do not specify the value of the seed identifier. In this case, the optimizer generates a random integer from  **1**  to  **2147483647**  and a random execution plan based on the generated integer. A value from  **1**  to  **2147483647**  is regarded as the seed identifier, based on which the optimizer generates a random execution plan.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 2147483647

**Default value**:  **0**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If  **plan\_mode\_seed**  is set to  **RANDOM\_PLAN**, the optimizer generates a random execution plan that may not be the optimal one. Therefore, to guarantee the query performance, the default value  **0**  is recommended during upgrade, scale-out, scale-in, and O&M.
>-   If this parameter is not set to  **0**, the specified plan hint will not be used.

## hashagg\_table\_size<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_sd3604978a99a48e784619997f8036b61"></a>

**Parameter description**: Specifies the hash table size during the execution of the HASH JOIN operation.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_/2

**Default value**:  **0**

## enable\_codegen<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_sbe5e1dbabf214873baf37dbb7580a7a3"></a>

**Parameter description**: Specifies whether code optimization is enabled. Currently, the code optimization uses the LLVM optimization.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that code optimization is enabled.
-   **off**  indicates that code optimization is disabled.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Currently, the LLVM optimization only supports the vectorized executor and SQL on Hadoop features. You are advised to set this parameter to  **off**  in other cases.


**Default value**:  **on**

## codegen\_strategy<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_sb93d0db93dd84302b9f45d5da735aa18"></a>

**Parameter description**: Specifies the codegen optimization strategy that is used when an expression is converted to be codegen-based.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  enumerated values

-   **partial**  indicates that even if functions that are not codegen-based exist in an expression, you can still call the LLVM dynamic optimization strategy by using the entire codegen framework of the expression.
-   **pure**  indicates that only when all functions in an expression can be codegen-based, the LLVM dynamic optimization strategy can be called.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >In the scenario where query performance reduces after the codegen function is enabled, you can set this parameter to  **pure**. In other scenarios, do not change the default value  **partial**  of this parameter.


**Default value**:  **partial**

## enable\_codegen\_print<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s92cb930f59ed4f86ae792faccc38da8c"></a>

**Parameter description**: Specifies whether the LLVM IR function can be printed in logs.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the LLVM IR function can be printed in logs.
-   **off**  indicates that the LLVM IR function cannot be printed in logs.

**Default value**:  **off**

## codegen\_cost\_threshold<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s8956dc23bf5f4bf0b02e3ba53f44ec30"></a>

**Parameter description**: The LLVM compilation takes some time to generate executable machine code. Therefore, LLVM compilation is beneficial only when the actual execution cost is more than the sum of the code required for generating machine code and the optimized execution cost. This parameter specifies a threshold. If the estimated execution cost exceeds the threshold, LLVM optimization is performed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647

**Default value**:  **10000**

## enable\_bloom\_filter<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_s450b8159407e41fe96dc18ca298e1d16"></a>

**Parameter description**: Specifies whether the BloomFilter optimization can be used. This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the BloomFilter optimization can be used.
-   **off**  indicates that the BloomFilter optimization cannot be used.

**Default value**:  **on**

## enable\_extrapolation\_stats<a name="en-us_topic_0283137690_en-us_topic_0237124719_section251911538557"></a>

**Parameter description**: Specifies whether the extrapolation logic is used for data of DATE type based on historical statistics. The logic can increase the accuracy of estimation for tables whose statistics are not collected in time, but will possibly provide an overlarge estimation due to incorrect extrapolation. Enable the logic only in scenarios where the data of DATE type is periodically inserted. This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the extrapolation logic is used for data of DATE type based on historical statistics.
-   **off**  indicates that the extrapolation logic is not used for data of DATE type based on historical statistics.

**Default value**:  **off**

## autoanalyze<a name="en-us_topic_0283137690_en-us_topic_0237124719_section114241119217"></a>

**Parameter description**: Specifies whether to automatically collect statistics on tables that have no statistics when a plan is generated.  **autoanalyze**  cannot be used for foreign or temporary tables. To collect statistics, manually perform the ANALYZE operation. If an exception occurs in the database during the execution of autoanalyze on a table, after the database is recovered, the system may still prompt you to collect the statistics of the table when you run the statement again. In this case, manually perform the ANALYZE operation on the table to synchronize statistics. This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the table statistics are automatically collected.
-   **off**  indicates that the table statistics are not automatically collected.

**Default value**:  **off**

## enable\_analyze\_check<a name="en-us_topic_0283137690_en-us_topic_0237124719_section17142163813317"></a>

**Parameter description**: Checks whether statistics were collected about tables whose  **reltuples**  and  **relpages**  are displayed as  **0**  in  **pg\_class**  during plan generation.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the tables will be checked.
-   **off**  indicates that the tables will not be checked.

**Default value**:  **off**

## enable\_sonic\_hashagg<a name="en-us_topic_0283137690_en-us_topic_0237124719_section93071140163618"></a>

**Parameter description**: Specifies whether to use the hash aggregation operator designed for column-oriented hash tables when certain constraints are met.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the hash aggregation operator designed for column-oriented hash tables is used when certain constraints are met.
-   **off**  indicates that the hash aggregation operator designed for column-oriented hash tables is not used.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   When the hash aggregation operator designed for column-oriented hash tables is used, the memory usage of the query can be reduced. However, in scenarios when  **[enable\_codegen](#en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059779049_sbe5e1dbabf214873baf37dbb7580a7a3)**  is set to  **on**  and the performance is significantly improved, the performance of the operator may deteriorate.
>-   If  **enable\_sonic\_hashagg**  is set to  **on**, when certain constraints are met, the hash aggregation operator designed for column-oriented hash tables is used and its name is displayed as  **Sonic Hash Aggregation**  in the output of the Explain Analyze/Performance operation. When the constraints are not met, the operator name is displayed as  **Hash Aggregation**. For details, see  [Description](en-us_topic_0289899920.md).

**Default value**:  **on**

## enable\_sonic\_hashjoin<a name="en-us_topic_0283137690_en-us_topic_0237124719_section143001361527"></a>

**Parameter description**: Specifies whether to use the hash join operator designed for column-oriented hash tables when certain constraints are met.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the hash join operator designed for column-oriented hash tables is used when certain constraints are met.
-   **off**  indicates that the hash join operator designed for column-oriented hash tables is not used.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Currently, the parameter can be used only for Inner Join.
>-   If  **enable\_sonic\_hashjoin**  is enabled, the memory usage of query using the Hash Inner operator can be reduced. However, in scenarios where the code generation technology can significantly improve performance, the performance of the operator may deteriorate.
>-   If  **enable\_sonic\_hashjoin**  is set to  **on**, when certain constraints are met, the hash join operator designed for column-oriented hash tables is used and its name is displayed as  **Sonic Hash Join**  in the output of the Explain Analyze/Performance operation. When the constraints are not met, the operator name is displayed as  **Hash Join**. For details, see  [Description](en-us_topic_0289899920.md).

**Default value**:  **on**

## enable\_sonic\_optspill<a name="en-us_topic_0283137690_en-us_topic_0237124719_section8441164814169"></a>

**Parameter description**: Specifies whether to optimize the number of files to be written to disks for the Hash Join operator designed for column-oriented hash tables. If this parameter is set to  **on**, the number of files written to disks does not increase significantly when the Hash Join operator writes a large number of files to disks.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the optimization is enabled.
-   **off**  indicates that the optimization is disabled.

**Default value**:  **on**

## log\_parser\_stats<a name="en-us_topic_0283137690_en-us_topic_0237124719_en-us_topic_0059778346_s6ff0e1cd09c948469a5e8663cafc209f"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of the parser module.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## log\_planner\_stats<a name="en-us_topic_0283137690_en-us_topic_0237124719_section47307885510"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of the planner module.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## log\_executor\_stats<a name="en-us_topic_0283137690_en-us_topic_0237124719_section10793131819578"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of the executor module.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## log\_statement\_stats<a name="en-us_topic_0283137690_en-us_topic_0237124719_section21484285715"></a>

**Parameter description**: Specifies whether the optimizer outputs the performance logs of a statement.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## plan\_cache\_mode<a name="en-us_topic_0283137690_en-us_topic_0237124719_section12723161719355"></a>

**Parameter description**: Specifies the policy for generating an execution plan in the  **prepare**  statement.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **auto**  indicates that the  **custom plan**  or  **generic plan**  is selected by default.
-   **force\_generic\_plan**  indicates that the  **generic plan**  is forcibly used.
-   **force\_custom\_plan**  indicates that the  **custom plan**  is forcibly used.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   This parameter is valid only for the  **prepare**  statement. It is used when the parameterized field in the  **prepare**  statement has severe data skew.
>-   **custom plan**  is a plan generated after you run the  **prepare**  statement where parameters in the  **execute**  statement is embedded. The  **custom plan**  generates a plan based on specific parameters in the  **execute**  statement. This scheme generates a preferred plan based on specific parameters each time and has good execution performance. The disadvantage is that the plan needs to be regenerated before each execution, resulting in a large amount of repeated optimizer overhead.
>-   **generic plan**  is a plan generated after you run the  **prepare**  statement. The plan policy binds parameters to the plan when you run the  **execute**  statement and execute the plan. The advantage of this scheme is that repeated optimizer overheads can be avoided in each execution. The disadvantage is that the plan may not be optimal when data skew occurs for the bound parameters and may result in poor plan execution performance.

**Default value**:  **auto**

## enable\_hypo\_index<a name="section39331040181717"></a>

**Parameter description**: Determines whether the optimizer considers virtual indexes when executing the  **EXPLAIN**  command.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## enable\_force\_vector\_engine<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_se9975818d0e24d84907a2e092ce7347f"></a>

**Parameter description:**  Specifies whether to forcibly generate vectorized execution plans for a vectorized execution operator if the operator's child node is a non-vectorized operator. When this parameter is set to  **on**, vectorized execution plans are forcibly generated.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that vectorized operators are forcibly generated.
-   **off**  indicates that the vectorized operator optimizer determines whether to perform vectorization.

**Default value**:  **off**

## enable\_auto\_explain<a name="section9971149594"></a>

**Parameter description**: Specifies whether to enable the function of automatically printing execution plans. This parameter is used to locate slow stored procedures or slow queries and is valid only for the currently connected primary database node.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value  **true**  indicates that the function is enabled, and the value  **false**  indicates that the function is disabled.

**Default value**:  **false**

## auto\_explain\_level<a name="section24947149514"></a>

**Parameter description**: Specifies the log level for automatically printing execution plans.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated type. The value can be  **LOG**  or  **NOTICE**.  **LOG**  indicates that the execution plan is printed in logs.  **NOTICE**  indicates that the execution plan is printed in notification mode.

**Default value**:  **LOG**

## query\_dop<a name="en-us_topic_0059779049_s01c9d749fe8048928eeb2b47c6f61fbb"></a>

**Parameter description**: Specifies the user-defined degree of parallelism \(DOP\). This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 64 If the fixed SMP function is enabled, the system uses the fixed DOP.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>After enabling concurrent queries, ensure you have sufficient CPU, memory, and network to achieve the optimal performance.

**Default value**:  **1**

## enable\_startwith\_debug<a name="section6842184125615"></a>

**Parameter description**: Specifies whether to enable the  **start with**  or  **connect by**  parameter for debugging. If this parameter is enabled, information about all tail columns related to the  **start with**  feature is displayed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value  **true**  indicates that the function is enabled, and the value  **false**  indicates that the function is disabled.

**Default value**:  **false**

