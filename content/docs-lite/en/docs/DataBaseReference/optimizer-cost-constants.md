# Optimizer Cost Constants<a name="EN-US_TOPIC_0289900101"></a>

This section describes the optimizer cost constants. The cost variables described here are measured on an arbitrary scale. Only their relative values matter, therefore scaling them all up or down by the same factor will result in no change in the optimizer's choices. By default, these cost variables are based on the cost of sequential page fetches, that is,  **seq\_page\_cost**  is conventionally set to  **1.0**  and the other cost variables are set with reference to the parameter. However, you can use a different scale, such as actual execution time in milliseconds.

## seq\_page\_cost<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_s5030c81d02244d8ea6eb37c4d260b2be"></a>

**Parameter description**: Specifies the optimizer's estimated cost of a disk page fetch that is part of a series of sequential fetches.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to  _DBL\_MAX_

**Default value**:  **1**

## random\_page\_cost<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_s4c79d3710b734a5a8c3dbcd399b0646a"></a>

**Parameter description**: Specifies the optimizer's estimated cost of an out-of-sequence disk page fetch.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Although the server allows you to set  **random\_page\_cost**  to a value less than that of  **seq\_page\_cost**, it is not physically sensitive to do so. However, setting them equal makes sense if the database is entirely cached in RAM, because in that case there is no penalty for fetching pages out of sequence. Also, in a heavily-cached database you should lower both values relative to the CPU parameters, since the cost of fetching a page already in RAM is much smaller than it would normally be.

**Value range**: a floating point number ranging from 0 to  _DBL\_MAX_

**Default value**:  **4**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   This value can be overwritten for tables and indexes in a particular tablespace by setting the tablespace parameter of the same name.
>-   Reducing this value relative to  **seq\_page\_cost**  will cause the system to prefer index scans and raising it will make index scans relatively more expensive. You can increase or decrease both values together to change the disk I/O costs relative to CPU costs.

## cpu\_tuple\_cost<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_sf7a911047cc34242a80839fe99405821"></a>

**Parameter description**: Specifies the optimizer's estimated cost of processing each row during a query.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to  _DBL\_MAX_

**Default value**:  **0.01**

## cpu\_index\_tuple\_cost<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_s3bf772813d2948379bf7b286918a379b"></a>

**Parameter description**: Specifies the optimizer's estimated cost of processing each index entry during an index scan.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to  _DBL\_MAX_

**Default value:** **0.005**

## cpu\_operator\_cost<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_sda33403d4f41417d88c1fb4f621cc0c6"></a>

**Parameter description**: Specifies the optimizer's estimated cost of processing each operator or function executed during a query.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to  _DBL\_MAX_

**Default value**:  **0.0025**

## effective\_cache\_size<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_s808d13dd04234d8ab4649be746b8f001"></a>

**Parameter description**: Specifies the optimizer's assumption about the effective size of the disk cache that is available to a single query.

When setting this parameter you should consider both openGauss's shared buffers and the kernel's disk cache. Also, take into account the expected number of concurrent queries on different tables, since they will have to share the available space.

This parameter has no effect on the size of shared memory allocated by openGauss. It is used only for estimation purposes and does not reserve kernel disk cache. The value is in the unit of disk page. Usually the size of each page is 8192 bytes.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647. The unit is 8 KB.

A value greater than the default one makes index scans more likely to be used, whereas a value less than the default one makes sequential scans more likely to be used.

**Default value**:  **128 MB**

## allocate\_mem\_cost<a name="en-us_topic_0283137051_en-us_topic_0237124717_en-us_topic_0059779130_s46e7fc5f15274d759ca55ff8a8c15894"></a>

**Parameter description**: Specifies the query optimizer's estimated cost of creating a hash table for memory space using hash join. This parameter is used for optimization when the hash join estimation is inaccurate.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to  _DBL\_MAX_

**Default value**:  **0**

