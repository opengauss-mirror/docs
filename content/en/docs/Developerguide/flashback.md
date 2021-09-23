# Flashback<a name="EN-US_TOPIC_0000001104548132"></a>

This section describes parameters related to the flashback function.

## enable\_recyclebin<a name="section59681653121117"></a>

**Parameter description**: Specifies whether the recycle bin is enabled or disabled in real time.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **off**

## timecapsule\_mode<a name="section96181519192411"></a>

**Parameter description**: Specifies whether to enable the flashback function.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values

-   **none**  indicates that the flashback function is disabled.
-   **heap**  indicates that only the flashback function of the Heap engine is enabled.
-   **ustore**  indicates that only the flashback function of the UStore engine is enabled.
-   **all**  indicates that the flashback function is enabled for both the Heap and UStore engines.

**Default value**:  **none**

## recyclebin\_retention\_time<a name="section9443171010611"></a>

**Parameter description**: Specifies the retention period of objects in the recycle bin. The objects will be automatically deleted after the retention period expires.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647. The unit is s.

Default value:  **15 min**  \(900s\)

## version\_retention\_age<a name="section464416433618"></a>

**Parameter description**: Specifies the number of transactions retained in the old version. If the number of transactions exceeds the value of this parameter, the old version will be recycled and cleared.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 576460752303423487.  **0**  means no delay.

**Default value**:  **0**

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>System catalogs use the Heap engine. To prevent unnecessary system catalog bloating \(for example, only the Uheap flashback function is used in services\), you need to set  **version\_retention\_age**  and  **vacuum\_defer\_cleanup\_age**  to the same value so that the old version can be retained.

## vacuum\_defer\_cleanup\_age<a name="section1613641811206"></a>

**Parameter description**: Specifies the number of transactions by which  **VACUUM**  will defer the cleanup of invalid row-store table records, so that  **VACUUM**  and  **VACUUM FULL**  do not clean up deleted tuples immediately. You can also set this parameter to configure the retention period of the flashback function in the old version.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000000.  **0**  means no delay. The value range needs to be extended to 100 million.

**Default value**:  **0**

