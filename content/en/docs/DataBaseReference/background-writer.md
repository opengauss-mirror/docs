# Background Writer<a name="EN-US_TOPIC_0289900126"></a>

This section describes background writer parameters. The background writer process is used to write dirty data \(new or modified data\) in shared buffers to disks. This mechanism ensures that database processes seldom or never need to wait for a write action to occur when handling user queries.

It also mitigates performance deterioration caused by checkpoints because only a few of dirty pages need to be flushed to the disk when the checkpoints arrive. This mechanism, however, increases the overall net I/O load because while a repeatedly-dirtied page may otherwise be written only once per checkpoint interval, the background writer may write it several times as it is dirtied in the same interval. In most cases, continuous light loads are preferred, instead of periodical load peaks. The parameters discussed in this section can be set based on actual requirements.

## bgwriter\_delay<a name="en-us_topic_0283136883_en-us_topic_0237124703_en-us_topic_0059777808_s7a1b19aec37546d18dbdbc2dd0ee9761"></a>

**Parameter description**: Specifies the interval at which the background writer writes dirty shared buffers. Each time, the backend write process initiates write operations for some dirty buffers. In full checkpoint mode, the  **bgwriter\_lru\_maxpages**  parameter is used to control the amount of data to be written each time, and the process is restarted after  _bgwriter\_delay_  ms hibernation. In incremental checkpoint mode, the number of target idle buffer pages is calculated based on the value of  **candidate\_buf\_percent\_target**. If the number of idle buffer pages is insufficient, a batch of pages is flushed to disks every  _bgwriter\_delay_  ms. The number of flushed pages is calculated based on the target difference percentage. The maximum number of flushed pages is limited by  **max\_io\_capacity**.

In many systems, the effective resolution of sleep delays is 10 milliseconds. Therefore, setting this parameter to a value that is not a multiple of 10 has the same effect as setting it to the next higher multiple of 10.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 10000. The unit is millisecond.

**Default value**:  **2s**

**Setting suggestion:**  Reduce this value in slow data writing scenarios to reduce the checkpoint load.

## candidate\_buf\_percent\_target<a name="section1590894110187"></a>

**Parameter description**: Specifies the expected percentage of available buffers in the shared\_buffer memory buffer in the candidate buffer chain when the incremental checkpoint is enabled. If the number of available buffers in the current candidate chain is less than the target value, the bgwriter thread starts flushing dirty pages that meet the requirements.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a double-precision floating point number ranging from 0.1 to 0.85

**Default value**:  **0.3**

## bgwriter\_lru\_maxpages<a name="en-us_topic_0283136883_en-us_topic_0237124703_en-us_topic_0059777808_sc67dc5cfd1504388be85d6fd898a1401"></a>

**Parameter description**: Specifies the number of dirty buffers the background writer can write in each round.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>When this parameter is set to  **0**, the background writer is disabled. This setting does not affect checkpoints.

**Default value**:  **100**

## bgwriter\_lru\_multiplier<a name="en-us_topic_0283136883_en-us_topic_0237124703_en-us_topic_0059777808_sdc105506533c471fb439a74ea4c514a5"></a>

**Parameter description**: Specifies the coefficient used to estimate the number of dirty buffers the background writer can write in the next round.

The number of dirty buffers written in each round depends on the number of buffers used by server processes during recent rounds. The estimated number of buffers required in the next round is calculated using the following formula: Average number of recently used buffers x  **bgwriter\_lru\_multiplier**. The background writer writes dirty buffers until sufficient, clean and reusable buffers are available. The number of buffers the background writer writes in each round is always equal to or less than the value of  **bgwriter\_lru\_maxpages**.

Therefore, the value  **1.0**  of  **bgwriter\_lru\_multiplier**  represents a just-in-time policy of writing exactly the number of dirty buffers predicted to be required. Larger values provide some cushion against spikes in demand, whereas smaller values intentionally leave more writes to be done by server processes.

Smaller values of  **bgwriter\_lru\_maxpages**  and  **bgwriter\_lru\_multiplier**  reduce the extra I/O load caused by the background writer, but make it more likely that server processes will have to issue writes for themselves, delaying interactive queries.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to 10

**Default value:** **2**

## pagewriter\_thread\_num<a name="section20255113713185"></a>

**Parameter description**: Specifies the number of threads for background page flushing after the incremental checkpoint is enabled. Dirty pages are flushed in sequence to disks, promoting recovery points.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 16

**Default value**:  **4**

## dirty\_page\_percent\_max<a name="section1413763444211"></a>

**Parameter description**: Specifies the percentage of dirty pages to  **shared\_buffers **after the incremental checkpoint is enabled. When the value of this parameter is reached, the background page flush thread flushes dirty pages based on the maximum value of max\_io\_capacity.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0.1 to 1

**Default value**:  **0.9**

## pagewriter\_sleep<a name="section13857153472215"></a>

**Parameter description**: Specifies the interval for the pagewriter thread to flush dirty pages to disks after the incremental checkpoint is enabled. When the ratio of dirty pages to shared\_buffers reaches dirty\_page\_percent\_max, the number of pages in each batch is calculated based on the value of max\_io\_capacity. In other cases, the number of pages in each batch decreases proportionally.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 3600000. The unit is ms.

**Default value**:  **2000ms\(2s\)**

## max\_io\_capacity<a name="section0365182814289"></a>

**Parameter description**: Specifies the maximum I/O per second for the backend write process to flush pages in batches. Set this parameter based on the service scenario and disk I/O capability of the host. If the RTO is short or the data volume is much larger than the shared memory, and the service access data volume is random, the value of this parameter cannot be too small. A small parameter value reduces the number of pages flushed by the backend write process. If a large number of pages are eliminated due to service triggering, the services are affected.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 30720 to 10485760. The unit is KB.

**Default value**:  **512000 KB**  \(500 MB\)

## enable\_consider\_usecount<a name="section3849131818149"></a>

**Parameter description**: Specifies whether the backend thread considers the page popularity during page replacement. You are advised to enable this parameter in large-capacity scenarios.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**/**true**: The page popularity is considered.
-   **off**/**false**: The page popularity is not considered.

**Default value**:  **off**

## dw\_file\_num<a name="section154981114163011"></a>

**Parameter description**: Specifies the number of doublewrite files to be written in batches. The value is related to  **pagewriter\_thread\_num**  and cannot be greater than  **pagwriter\_thread\_num**. If the value is too large, it will be corrected to the value of  **pagewriter\_thread\_num**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 16

**Default value**:  **1**

## dw\_file\_size<a name="section11728112433111"></a>

**Parameter description**: Specifies the size of each doulewrite file.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer, in the range \[32,256\]

**Default value**:  **256**

