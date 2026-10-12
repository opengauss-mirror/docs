# Optimizer Cost Constants

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:46:16.047Z -->

This section describes the optimizer cost constants. The costs described here can be measured in any arbitrary unit. Only their relative values matter, so scaling them by the same factor will not affect the optimizer's choices. By default, they are based on the cost of fetching a sequential page. That is, seq\_page\_cost is set to 1.0, and the other cost parameters are set relative to it. Other bases can also be used, such as the actual execution time measured in milliseconds.

## seq\_page\_cost<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_s5030c81d02244d8ea6eb37c4d260b2be"></a>

**Parameter description**: Sets the cost for the optimizer to compute one sequential disk page fetch.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point type, 0 to DBL\_MAX.

**Default value**: 1

## random\_page\_cost<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_s4c79d3710b734a5a8c3dbcd399b0646a"></a>

**Parameter description**: Sets the cost for the optimizer to fetch a disk page in a non-sequential manner.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

>[!TIP]Caution  
>Although the server allows random\_page\_cost to be set smaller than seq\_page\_cost, this has no actual physical effect. If all databases reside in randomly accessed memory, it is reasonable to set the two values equal, because in this case fetching pages non-sequentially has no side effects. Similarly, on databases with a high buffer hit rate, both values should be reduced relative to the CPU parameters, because fetching pages from memory is much less expensive than usual.

**Value range**: floating-point type, 0 to DBL\_MAX.

**Default value**: 4

>[!NOTE]Note  
>
>- For tables and indexes in a particular tablespace, this value can be overridden by setting the tablespace parameter of the same name.  
>- Relative to seq\_page\_cost, reducing this value makes the system more inclined to use index scans, while increasing this value makes index scans more expensive. The cost of disk I/O relative to CPU can be adjusted by increasing or decreasing both values together.

## cpu\_tuple\_cost<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_sf7a911047cc34242a80839fe99405821"></a>

**Parameter description**: Sets the cost for the optimizer to process each row of data in a query.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point type, 0 to DBL\_MAX.

**Default value**: 0.01

## cpu\_index\_tuple\_cost<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_s3bf772813d2948379bf7b286918a379b"></a>

**Parameter description**: Sets the cost for the optimizer to process each index entry during an index scan.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point type, 0 to DBL\_MAX.

**Default value**: 0.005

## cpu\_operator\_cost<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_sda33403d4f41417d88c1fb4f621cc0c6"></a>

**Parameter description**: Sets the cost for the optimizer to execute an operator or function in a query.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point type, 0 to DBL\_MAX.

**Default value**: 0.0025

## effective\_cache\_size<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_s808d13dd04234d8ab4649be746b8f001"></a>

**Parameter description**: Sets the effective size of the disk buffer available to the optimizer in a single query.

When setting this parameter, also consider the shared buffer of openGauss and the disk buffer of the kernel. In addition, consider the expected number of concurrent queries on different tables, because they share the available space.

This parameter does not affect the size of shared memory allocated by openGauss, nor does it use the kernel disk buffer; it is used only for estimation. The value is calculated in disk pages, and each page is usually 8192 bytes.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: integer, 1 to INT\_MAX, in 8 KB units.

A value higher than the default value may cause index scans to be used, and a lower value may cause sequential scans to be selected.

**Default value**: 128 MB

## allocate\_mem\_cost<a name="zh-cn_topic_0237124717_zh-cn_topic_0059779130_s46e7fc5f15274d759ca55ff8a8c15894"></a>

**Parameter description**: Sets the cost of the memory space allocated by the optimizer when creating a hash table for a Hash Join. It is used for tuning when the Hash Join estimation is inaccurate.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point type, 0 to DBL\_MAX.

**Default value**: 0
