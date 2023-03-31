# Optimizer Method Configuration<a name="EN-US_TOPIC_0289900000"></a>

These configuration parameters provide a crude method of influencing the query plans chosen by the query optimizer. If the default plan chosen by the optimizer for a particular query is not optimal, a temporary solution is to use one of these configuration parameters to force the optimizer to choose a different plan. Better ways include adjusting the optimizer cost constants, manually running  **ANALYZE**, increasing the value of the  **default\_statistics\_target**  parameter, and increasing the amount of the statistics collected in specific columns using  **ALTER TABLE SET STATISTICS**.

## enable\_broadcast<a name="en-us_topic_0059778346_s2ebff8fc1f7e4d868c6e820aaf348e51"></a>

**Parameter description**: Controls whether the query optimizer uses the broadcast distribution method when it evaluates the cost of stream.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter does not take effect in the current version.

## enable\_bitmapscan<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s6ff0e1cd09c948469a5e8663cafc209f"></a>

**Parameter description**: Specifies the query optimizer's use of bitmap-scan plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## force\_bitmapand<a name="en-us_topic_0283136675_en-us_topic_0237124716_section390014483481"></a>

**Parameter description**: Specifies the query optimizer's use of BitmapAnd plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## enable\_hashagg<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s6589532cef104139a10a9b585c97c56b"></a>

**Parameter description**: Specifies the query optimizer's use of Hash aggregation plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_hashjoin<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s566de83fd081416099e1453b10816d77"></a>

**Parameter description**: Specifies the query optimizer's use of hash-join plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_indexscan<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s6f45bb20aded4ed5814fb37ff3849afc"></a>

**Parameter description**: Specifies the query optimizer's use of index-scan plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_indexonlyscan<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_se9bdf3f7db06400482c7c978e00fcc58"></a>

**Parameter description**: Specifies the query optimizer's use of index-only-scan plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_material<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s9c4bdbba1ad645b497b7d5a2e4cbfd5a"></a>

**Parameter description**: Specifies the query optimizer's use of materialization. It is impossible to suppress materialization entirely, but setting this variable to  **off**  prevents the optimizer from inserting materialized nodes.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_mergejoin<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_sfc257a8da5f94bbfbe8396598e5fd0e4"></a>

**Parameter description**: Specifies the query optimizer's use of merge-join plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_nestloop<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s5f30625b2fa94498b3b44df41c96970a"></a>

**Parameter description**: Specifies whether the query optimizer uses the nested-loop join plan type to fully scan internal tables. It is impossible to suppress nested-loop joins entirely, but setting this variable to  **off**  encourages the optimizer to choose other methods if available.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## enable\_index\_nestloop<a name="en-us_topic_0283136675_en-us_topic_0237124716_section1584803291014"></a>

**Parameter description**: Specifies whether the query optimizer uses the nested-loop join plan type to scan the parameterized indexes of internal tables.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_seqscan<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_sd4833f4c14424278a6d0a81ae1195666"></a>

**Parameter description**: Specifies the query optimizer's use of sequential scan plan types. It is impossible to suppress sequential scans entirely, but setting this variable to  **off**  encourages the optimizer to choose other methods if available.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_sort<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_sb7f3e95793bc4b4d98518a77ffba4e4a"></a>

**Parameter description**: Specifies the query optimizer's choice of sort methods. It is impossible to suppress explicit sorts entirely, but setting this variable to  **off**  encourages the optimizer to choose other methods if available.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_tidscan<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s87c617fc3c47455195a4815d45510482"></a>

**Parameter description**: Specifies the query optimizer's use of Tuple ID \(TID\) scan plan types.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_kill\_query<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s2deb52bc33e24b0d9e626eb6b79f80dc"></a>

**Parameter description**: In CASCADE mode, when a user is deleted, all the objects belonging to the user are deleted. This parameter specifies whether the queries of the objects belonging to the user can be unlocked when the user is deleted.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the unlocking is allowed.
-   **off**  indicates that the unlocking is not allowed.

**Default value**:  **off**

## enforce\_a\_behavior<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_sf2c1a90cdefd484ea8d0ac530476ade1"></a>

**Parameter description**: Specifies the rule matching modes of regular expressions.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the A matching rule is used.
-   **off**  indicates that the POSIX matching rule is used.

**Default value**:  **on**

## max\_recursive\_times<a name="en-us_topic_0283136675_en-us_topic_0237124716_section333410396346"></a>

**Parameter description**: Specifies the maximum number of  **WITH RECURSIVE**  iterations.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  *INT\*MAX_

**Default value**:  **200**

## enable\_vector\_engine<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s0d040b72fd304d8ab8f063ffd98226a7"></a>

**Parameter description**: Specifies the query optimizer's use of vectorized executor.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **on**

## enable\_change\_hjcost<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_s2c3550150fa4494e82080e7c96d93732"></a>

**Parameter description**: Specifies whether the optimizer excludes internal table running costs when selecting the Hash Join cost path. If it is set to  **on**, tables with a few records and high running costs are more possible to be selected.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: enabled.
-   **off**: disabled.

**Default value**:  **off**

## enable\_absolute\_tablespace<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_section2170938217248"></a>

**Parameter description**: Specifies whether the tablespace can use the absolute path.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that an absolute path can be used.
-   **off**  indicates that an absolute path cannot be used.

**Default value**:  **on**

## enable\_valuepartition\_pruning<a name="en-us_topic_0283136675_en-us_topic_0237124716_en-us_topic_0059778346_section25701680101350"></a>

**Parameter description**: Specifies whether the DFS partitioned table is dynamically or statically optimized.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the DFS partitioned table is dynamically or statically optimized.
-   **off**  indicates that the DFS partitioned table is not dynamically or statically optimized.

**Default value**:  **on**

## qrw\_inlist2join\_optmode<a name="en-us_topic_0283136675_en-us_topic_0237124716_section207996212178"></a>

**Parameter description**: Specifies whether to enable inlist-to-join \(inlist2join\) query rewriting.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **disable**  indicates that the inlist2join query rewriting is disabled.
-   **cost\_base**  indicates that the cost-based inlist2join query rewriting is enabled.
-   **rule\_base**  indicates that the forcible rule-based inlist2join query rewriting is enabled.
-   A positive integer indicates the threshold of inlist2join query rewriting. If the number of elements in the list is greater than the threshold, the rewriting is performed.

**Default value**:  **cost\_base**

## skew\_option<a name="en-us_topic_0283136675_en-us_topic_0237124716_section1211182712176"></a>

**Parameter description**: Specifies whether an optimization policy is used.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   **off**  indicates that the policy is disabled.
-   **normal**  indicates that a radical policy is used. All possible skews are optimized.
-   **lazy**  indicates that a conservative policy is used. Uncertain skews are ignored.

**Default value**:  **normal**

## default\_limit\_rows<a name="section5328711171611"></a>

**Parameter description**: Specifies the default estimated number of limit rows for generating genericplan. If this parameter is set to a positive value, the positive value is used as the estimated number of limit rows. If this parameter is set to a negative value, the negative value is converted to a percentage and used as default estimated value, that is, -5 indicates 5%.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from –100 to DBL\_MAX

**Default value**:  **–10**

## check\_implicit\_conversions<a name="en-us_topic_0283137548_en-us_topic_0237124743_section214364810316"></a>

**Parameter description**: Specifies whether to check candidate index paths generated for index columns that have implicit type conversions in a query.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that a check will be performed for candidate index paths generated for index columns that have implicit type conversion in a query.
-   **off**  indicates that a check will not be performed.

**Default value**:  **off**

## cost\_weight\_index<a name="section118041441101010"></a>

**Parameter description**: Specifies the cost weight of index\_scan.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 1e-10 to 1e+10.

**Default value**:  **1**

## try\_vector\_engine\_strategy<a name="section145867222412"></a>

**Parameter description**: Specifies the policy for processing row-store tables using the vectorized executor. By setting this parameter, queries containing row-store tables can be converted to vectorized execution plans for calculation, improving the execution performance of complex queries in AP-like scenarios.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Valid value**: enumerated values

-   **off**  is the default value, which indicates that this function is disabled. That is, row-store tables will not be converted into vectorized execution plans for execution.
-   **force**: Queries are forcibly converted to vectorized execution plans for execution no matter whether the base table to be queried is a row-store table, column-store table, or hybrid row-column store table, unless the query type or expression is not supported by the vectorized executor. In this case, the performance may deteriorate in different query scenarios.
-   **optimal**: On the basis of  **force**, the optimizer determines whether to convert a query statement into a vectorized execution plan based on the query complexity to avoid performance deterioration after the conversion.

**Default value**:  **off**
