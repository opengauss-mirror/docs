# Background Writer<a name="EN-US_TOPIC_0242371493"></a>

This section describes background writer parameters. The background writer process is used to write dirty data \(new or modified data\) in shared buffers to disks. This mechanism ensures that database processes seldom or never need to wait for a write action to occur when handling user queries.

It also mitigates performance deterioration caused by checkpoints because only a few of dirty pages need to be flushed to the disk when the checkpoints arrive. This mechanism, however, increases the overall net I/O load because while a repeatedly-dirtied page may otherwise be written only once per checkpoint interval, the background writer may write it several times as it is dirtied in the same interval. In most cases, continuous light loads are preferred, instead of periodical load peaks. The parameters discussed in this section can be set based on actual requirements.

## bgwriter\_delay<a name="en-us_topic_0237124703_en-us_topic_0059777808_s7a1b19aec37546d18dbdbc2dd0ee9761"></a>

**Parameter description**: Specifies the interval at which the background writer writes dirty shared buffers. The background writer initiates write operations for some dirty shared buffers \(the volume of data to be written is specified by the  **bgwriter\_lru\_maxpages**  parameter\), sleep for the milliseconds specified by  **bgwriter\_delay**, and then restarts.

In many systems, the effective resolution of sleep delays is 10 milliseconds. Therefore, setting this parameter to a value that is not a multiple of 10 has the same effect as setting it to the next higher multiple of 10.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 10000. The unit is millisecond.

**Default value**:  **2s**

**Setting suggestion:**  Reduce this value in slow data writing scenarios to reduce the checkpoint load.

## bgwriter\_lru\_maxpages<a name="en-us_topic_0237124703_en-us_topic_0059777808_sc67dc5cfd1504388be85d6fd898a1401"></a>

**Parameter description**: Specifies the number of dirty buffers the background writer can write in each round.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>When this parameter is set to  **0**, the background writer is disabled. This setting does not affect checkpoints.  

**Default value**:  **100**

## bgwriter\_lru\_multiplier<a name="en-us_topic_0237124703_en-us_topic_0059777808_sdc105506533c471fb439a74ea4c514a5"></a>

**Parameter description**: Specifies the coefficient used to estimate the number of dirty buffers the background writer can write in the next round.

The number of dirty buffers written in each round depends on the number of buffers used by server processes during recent rounds. The estimated number of buffers required in the next round is calculated using the following formula: Average number of recently used buffers x  **bgwriter\_lru\_multiplier**. The background writer writes dirty buffers until sufficient clean and reusable buffers are available. The number of buffers the background writer writes in each round is always equal to or less than  **bgwriter\_lru\_maxpages**.

Therefore, the value  **1.0**  represents a just-in-time policy of writing exactly the number of dirty buffers predicted to be required. Larger values provide some cushion against spikes in demand, whereas smaller values intentionally leave more writes to be done by server processes.

Smaller values of  **bgwriter\_lru\_maxpages**  and  **bgwriter\_lru\_multiplier**  reduce the extra I/O load caused by the background writer, but make it more likely that server processes will have to issue writes for themselves, delaying interactive queries.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to 10

**Default value:** **2**

