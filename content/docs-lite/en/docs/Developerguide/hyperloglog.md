# HyperLogLog<a name="EN-US_TOPIC_0000001083204098"></a>

## hll\_default\_log2m<a name="section189901634112519"></a>

**Parameter description**: Specifies the number of buckets for HLL data. The number of buckets affects the precision of distinct values calculated by HLL. The more buckets there are, the smaller the deviation is. The deviation range is as follows: \[–1.04/2<sup>log2m\*1/2</sup>, +1.04/2<sup>log2m\*1/2</sup>\]

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 16

**Default value**:  **14**

## hll\_default\_log2explicit<a name="section99475155812"></a>

**Parameter description**: Specifies the default threshold for switching from the explicit mode to the sparse mode.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 12 The value  **0**  indicates that the explicit mode is skipped. The value 1 to 12 indicates that the mode is switched when the number of distinct values reaches 2<sup>hll\_default\_log2explicit</sup>.

**Default value**:  **10**

## hll\_default\_log2sparse<a name="section15941451165814"></a>

**Parameter description**: Specifies the default threshold for switching from the  **sparse**  mode to the  **full**  mode.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 14 The value  **0**  indicates that the explicit mode is skipped. The value 1 to 14 indicates that the mode is switched when the number of distinct values reaches 2<sup>hll\_default\_log2sparse</sup>.

**Default value**:  **12**

## hll\_duplicate\_check<a name="section9951511589"></a>

**Parameter description**: Specifies whether duplicatecheck is enabled by default.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:  **0**  or  **1** **0**: disabled;  **1**: enabled

**Default value**:  **0**

## hll\_default\_regwidth \(Discarded\)<a name="section185791437112511"></a>

**Parameter description**: Specifies the number of bits in each bucket for HLL data. A larger value indicates more memory occupied by HLL.  **hll\_default\_regwidth**  and  **hll\_default\_log2m**  determine the maximum number of distinct values that can be calculated by HLL. Currently,  **regwidth**  is set to a fixed value and is no longer used.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 5

**Default value**:  **5**

## hll\_default\_expthresh \(Discarded\)<a name="section7204342573"></a>

**Parameter description**: Specifies the default threshold for switching from the  **explicit**  mode to the  **sparse**  mode. Currently, the  **hll\_default\_log2explicit**  parameter is used to replace the similar function.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 7  **–1**  indicates the auto mode;  **0**  indicates that the  **explicit**  mode is skipped; a value from 1 to 7 indicates that the mode is switched when the number of distinct values reaches 2<sup>hll\_default\_expthresh</sup>.

**Default value**:  **–1**

## hll\_default\_sparseon \(Discarded\)<a name="section95372411258"></a>

**Parameter description**: Specifies whether to enable the  **sparse**  mode by default. Currently, the  **hll\_default\_log2sparse**  parameter is used to replace the similar function. When  **hll\_default\_log2sparse**  is set to  **0**, the  **sparse**  mode is disabled.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:  **0**  or  **1** **0**  indicates that the  **sparse**  mode is disabled by default.  **1**  indicates that the  **sparse**  mode is enabled by default.

**Default value**:  **1**

## hll\_max\_sparse \(Discarded\)<a name="section13489114392513"></a>

**Parameter description**: Specifies the size of  **max\_sparse**. Currently, the  **hll\_default\_log2sparse**  parameter is used to replace the similar function.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 2147483647

**Default value**:  **–1**

## enable\_compress\_hll \(Discarded\)<a name="section72971133088"></a>

**Parameter description**: Specifies whether to enable memory optimization for HLL. Currently, the HLL memory has been optimized, and this parameter is no longer used.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that memory optimization is enabled.
-   **off**  or  **false**  indicates that memory optimization is disabled.

**Default value**:  **off**

