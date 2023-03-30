# Genetic Query Optimizer<a name="EN-US_TOPIC_0289899978"></a>

This section describes parameters related to genetic query optimizer. The genetic query optimizer \(GEQO\) is an algorithm that plans queries by using heuristic searching. This algorithm reduces planning time for complex queries and the costs of producing plans are sometimes inferior to those found by the normal exhaustive-search algorithm.

## geqo<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_sfd758218eb234917a5866f71380867df"></a>

**Parameter description**: Specifies whether to enable the genetic query optimization.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>It is best not to turn it off in execution.  **geqo\_threshold**  provides more subtle control of GEQO.

**Value range**: Boolean

-   **on**  indicates that the genetic query optimization is enabled.
-   **off**  indicates that the genetic query optimization is disabled.

**Default value**:  **on**

## geqo\_threshold<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_s2495994413224c7a9ee50efb3a1feb4b"></a>

**Parameter description**: Specifies the number of  **FROM**  items. Genetic query optimization is used to plan queries when the number of statements executed is greater than this value.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   For simpler queries, it is best to use the regular, exhaustive-search planner; but for queries with many tables, it is better to use GEQO to manage the queries.
>-   A  **FULL OUTER JOIN**  construct counts as only one  **FROM**  item.

**Value range**: an integer ranging from 2 to  _INT\_MAX_

**Default value**:  **12**

## geqo\_effort<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_s0bcefbae9b0e4c4b9d211896ddecfa7a"></a>

**Parameter description**: Controls the trade-off between planning time and query plan quality in GEQO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**geqo\_effort**  does not do anything directly. This parameter is only used to compute the default values for the other variables that influence GEQO behavior. If you prefer, you can manually set the other parameters instead.

**Value range**: an integer ranging from 1 to 10

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Larger values increase the time spent in query planning, but also increase the probability that an efficient query plan is chosen.

**Default value**:  **5**

## geqo\_pool\_size<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_s7fc575de4c0343f9bf2ba43415121d3b"></a>

**Parameter description**: Controls the pool size used by GEQO, that is, the number of individuals in the genetic population.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The value of this parameter must be at least  **2**, and useful values are typically from  **100**  to  **1000**. If this parameter is set to  **0**, openGauss selects a proper value based on  **geqo\_effort**  and the number of tables.

**Default value**:  **0**

## geqo\_generations<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_s3d543a71cf644525a62d831a869f0d2a"></a>

**Parameter description**: Specifies the number of iterations of the GEQO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The value of this parameter must be at least  **1**, and useful values are typically from  **100**  to  **1000**. If it is set to  **0**, a suitable value is chosen based on  **geqo\_pool\_size**.

**Default value**:  **0**

## geqo\_selection\_bias<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_s9259ac551c7b48e2ba1b12bc7f705483"></a>

**Parameter description**: Specifies the selection bias used by GEQO. The selection bias is the selective pressure within the population.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a floating point number ranging from 1.5 to 2.0

**Default value**:  **2**

## geqo\_seed<a name="en-us_topic_0283136924_en-us_topic_0237124718_en-us_topic_0059778564_s1fdf0c143ff8493c932fae38aa1e74a0"></a>

**Parameter description**: Specifies the initial value of the random number generator used by GEQO to select random paths through the join order search space.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a floating point number ranging from 0.0 to 1.0

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Varying the value changes the set of join paths explored, and may result in a better or worse best path being found.

**Default value**:  **0**

