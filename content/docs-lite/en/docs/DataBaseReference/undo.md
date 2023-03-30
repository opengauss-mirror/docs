# Undo<a name="EN-US_TOPIC_0000001129789643"></a>

## undo\_space\_limit\_size<a name="section13674152315117"></a>

**Parameter description**: Specifies the threshold for forcibly recycling undo space. When the undo space usage reaches 80% of the threshold, forcible recycling starts. You can set this parameter to a large value based on service requirements and then set it to a proper value based on the actual undo space usage.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 800 MB to 16 TB

**Default value**:  **256GB**

## undo\_limit\_size\_per\_transaction<a name="section5346124411546"></a>

**Parameter description**: Specifies the undo space threshold of a single transaction. If the threshold is reached, the transaction is rolled back due to an error.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 2 MB to 16 TB

**Default value**:  **32 GB**

