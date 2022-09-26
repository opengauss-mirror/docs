# Replication Parameters of Two Database Instances<a name="EN-US_TOPIC_0311767368"></a>

## RepOriginId<a name="section1622281914212"></a>

**Parameter description**: This parameter is a session-level GUC parameter. In bidirectional logical replication, set it to a non-zero value to avoid infinite data replication.

This parameter is a USERSET parameter. Set it based on  **Method 3**  provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647

**Default value**:  **0**
