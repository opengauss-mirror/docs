# Wait Events<a name="EN-US_TOPIC_0289900098"></a>

## enable\_instr\_track\_wait<a name="en-us_topic_0283137742_en-us_topic_0237124755_section983311682019"></a>

**Parameter description**: Specifies whether to enable real-time collection of wait event information.

In the x86-based centralized deployment scenario, the hardware configuration specifications are 32-core CPU and 256 GB memory. When the Benchmark SQL 5.0 tool is used to test performance, the performance fluctuates by about 1.4% by enabling or disabling this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the function of collecting wait event information is enabled.
-   **off**  indicates that the function of collecting wait event information is disabled.

**Default value**:  **on**
