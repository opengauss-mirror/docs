# Cost-based Vacuum Delay<a name="EN-US_TOPIC_0289900148"></a>

This feature allows administrators to reduce the I/O impact of the  **VACUUM**  and  **ANALYZE**  statements on concurrent database activities. It is often more important to prevent maintenance statements, such as  **VACUUM**  and  **ANALYZE**, from affecting other database operations than to run them quickly. Cost-based vacuum delay provides a way for administrators to achieve this purpose.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Certain vacuum operations hold critical locks and should be complete as quickly as possible. In openGauss, cost-based vacuum delays do not take effect during such operations. To avoid uselessly long delays in such cases, the actual delay is the larger of the two calculated values:
>-   **vacuum\_cost\_delay**  x  **accumulated\_balance**/**vacuum\_cost\_limit**
>-   **vacuum\_cost\_delay**  x 4

## Background<a name="en-us_topic_0283136744_en-us_topic_0237124702_en-us_topic_0059778692_s07d4dedef9d24a83acb5d9412d6b68fc"></a>

During the execution of the  [ANALYZE | ANALYSE](../SQLReference/analyze-analyse.md)  and  [VACUUM](../SQLReference/vacuum.md)  statements, the system maintains an internal counter that keeps track of the estimated cost of the various I/O operations that are performed. When the accumulated cost reaches a limit \(specified by  **vacuum\_cost\_limit**\), the process performing the operation will sleep for a short period of time \(specified by  **vacuum\_cost\_delay**\). Then, the counter resets and the operation continues.

By default, this feature is disabled. To enable this feature, set  **vacuum\_cost\_delay**  to a non-zero value.

## vacuum\_cost\_delay<a name="en-us_topic_0283136744_en-us_topic_0237124702_section117926911015"></a>

**Parameter description**: Specifies the length of time that a process will sleep when  **vacuum\_cost\_limit**  has been exceeded.

On many systems, the effective resolution of the sleep length is 10 milliseconds. Therefore, setting this parameter to a value that is not a multiple of 10 has the same effect as setting it to the next higher multiple of 10.

This parameter is usually set to a small value, such as 10 or 20 milliseconds. Adjusting vacuum's resource consumption is best done by changing other vacuum cost parameters.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 100. A positive number enables cost-based vacuum delay and  **0**  disables cost-based vacuum delay.

**Default value**: 0

## vacuum\_cost\_page\_hit<a name="en-us_topic_0283136744_en-us_topic_0237124702_section1288159151015"></a>

**Parameter description**: Specifies the estimated cost for vacuuming a buffer found in the shared buffer. It represents the cost to lock the buffer pool, look up the shared hash table, and scan the content of the page.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 10000

**Default value**:  **1**

## vacuum\_cost\_page\_miss<a name="en-us_topic_0283136744_en-us_topic_0237124702_section165681910191413"></a>

**Parameter description**: Specifies the estimated cost for vacuuming a buffer read from the disk. It represents the cost to lock the buffer pool, look up the shared hash table, read the desired block from the disk, and scan the block.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 10000

**Default value:** **10**

## vacuum\_cost\_page\_dirty<a name="en-us_topic_0283136744_en-us_topic_0237124702_section412883521410"></a>

**Parameter description**: Specifies the estimated cost charged when vacuum modifies a block that was previously clean. It represents the extra cost required to update the dirty block out to the disk again.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 10000

**Default value:** **20**

## vacuum\_cost\_limit<a name="en-us_topic_0283136744_en-us_topic_0237124702_section1557591091412"></a>

**Parameter description**: Specifies the cost limit. The vacuuming process will sleep if this limit is exceeded.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 10000

**Default value**: 200

