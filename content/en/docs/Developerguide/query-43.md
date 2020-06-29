# Query<a name="EN-US_TOPIC_0257854782"></a>

## instr\_unique\_sql\_count<a name="en-us_topic_0237124756_section983311682019"></a>

**Parameter description**: Specifies the maximum number of Unique SQL records to be collected. The value  **0**  indicates that the function of collecting Unique SQL information is disabled.

If the value is changed from a larger one to a smaller one, Unique SQL statistics will be reset and re-collected. There is no impact if the value is changed from a smaller one to a larger one.

When the number of Unique SQL records generated in the system is greater than the value of  **instr\_unique\_sql\_count**, the extra Unique SQL records are not collected.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_

**Default value**:  **100**

## instr\_unique\_sql\_track\_type<a name="en-us_topic_0237124756_section88591117185212"></a>

**Parameter description**: Specifies which SQL statements are recorded in Unique SQL.

This parameter is an INTERNAL parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **top**: Only top-level SQL statements are recorded.

**Default value**:  **top**

## enable\_instr\_rt\_percentile<a name="en-us_topic_0237124756_section137313294592"></a>

**Parameter description**: Specifies whether to enable the function of calculating the response time of 80% and 95% SQL statements in the system.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function of calculating the response time of 80% and 95% SQL statements is enabled.
-   **off**  indicates that the function of calculating the response time of 80% and 95% SQL statements is disabled.

**Default value**:  **on**

## percentile<a name="en-us_topic_0237124756_section193531235231"></a>

**Parameter description**: Specifies the percentage of SQL statements whose response time is to be calculated by the background calculation thread.

This parameter is an INTERNAL parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **"80,95"**

## instr\_rt\_percentile\_interval<a name="en-us_topic_0237124756_section1658494717518"></a>

**Parameter description**: Specifies the interval at which the background calculation thread calculates the SQL response time.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 3600. The unit is s.

**Default value**:  **10s**

## enable\_instr\_cpu\_timer<a name="en-us_topic_0237124756_section1261620172577"></a>

**Parameter description**: Specifies whether to capture the CPU time consumed during SQL statement execution.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates the CPU time consumed during SQL statement execution is captured.
-   **off**  indicates the CPU time consumed during SQL statement execution is not captured.

**Default value**:  **on**

