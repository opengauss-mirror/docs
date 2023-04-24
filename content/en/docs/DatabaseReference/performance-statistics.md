# Performance Statistics<a name="EN-US_TOPIC_0289900589"></a>

During the running of the database, the lock access, disk I/O operation, and invalid message processing are involved. All these operations are the bottleneck of the database performance. The performance statistics provided by openGauss can facilitate the performance fault location.

## Generating Performance Statistics Logs<a name="en-us_topic_0283137466_en-us_topic_0237124728_en-us_topic_0059778587_se1e8361c204243558d92573aac3fdb1a"></a>

**Parameter description**: For each query, the following four parameters record the performance statistics of corresponding modules in the server log:

-   The  **og\_parser\_stats**  parameter records the performance statistics of a parser in the server log.
-   The  **log\_planner\_stats**  parameter records the performance statistics of a query optimizer in the server log.
-   The  **log\_executor\_stats**  parameter records the performance statistics of an executor in the server log.
-   The  **log\_statement\_stats**  parameter records the performance statistics of the whole statement in the server log.

All these parameters can only provide assistant analysis for administrators, which are similar to the getrusage\(\) of the Linux OS.

These parameters are SUSET parameters. Set them based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   The  **log\_statement\_stats**  records the total statement statistics whereas other parameters record statistics only about their corresponding modules.
>-   The  **log\_statement\_stats**  parameter cannot be enabled together with any parameter recording statistics about a module.

**Value range**: Boolean

-   **on**  indicates that performance statistics are recorded.
-   **off**  indicates that performance statistics are not recorded.

**Default value**:  **off**

