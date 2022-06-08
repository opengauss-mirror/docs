# Global Temporary Table<a name="EN-US_TOPIC_0303812074"></a>

## max\_active\_global\_temporary\_table<a name="section18307271684"></a>

**Parameter description**: Specifies whether global temporary tables can be created.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000

-   **0**: The global temporary table function is disabled.
-   \> 0: The global temporary table function is enabled.

**Default value**:  **1000**

## vacuum\_gtt\_defer\_check\_age<a name="section13404223104214"></a>

**Parameter description**: Checks the differences between the global temporary table relfrozenxid and the ordinary table after VACUUM is executed. WARNING is generated if the difference value exceeds the specified parameter value. Use the default value for this parameter.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000

**Default value**:  **10000**

