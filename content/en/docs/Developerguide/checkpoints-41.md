# Checkpoints<a name="EN-US_TOPIC_0289900150"></a>

## checkpoint\_segments<a name="en-us_topic_0283137153_en-us_topic_0237124708_en-us_topic_0059778936_sbadc77895e6643b882a5e7557e405373"></a>

**Parameter description**: Specifies the minimum number of WAL segment files in the period specified by  checkpoint\_timeout. The size of each log file is 16 MB.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. The minimum value is  **1**.

Increasing the value of this parameter speeds up the export of a large amount of data. Set this parameter based on  checkpoint\_timeout and  shared\_buffers. This parameter affects the number of WAL segment files that can be reused. Generally, the maximum number of reused files in the  **pg\_xlog**  folder is twice the number of  **checkpoint\_segments**. The reused files are not deleted and are renamed to the WAL segment files which will be later used.

**Default value**:  **64**

## checkpoint\_timeout<a name="en-us_topic_0283137153_en-us_topic_0237124708_en-us_topic_0059778936_s880baa9f9b594980afbbe95fb8a77182"></a>

**Parameter description**: Specifies the maximum time between automatic WAL checkpoints.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 30 to 3600. The unit is s.

If the value of  checkpoint\_segments  is increased, you need to increase the value of this parameter. The increase of these two parameters further requires the increase of  shared\_buffers. Consider all these parameters during setting.

**Default value**:  **15min**

## checkpoint\_completion\_target<a name="en-us_topic_0283137153_en-us_topic_0237124708_en-us_topic_0059778936_sd67ca552ee804a42b3db43f6f376fe4a"></a>

**Parameter description**: Specifies the completion target of each checkpoint, as a fraction of total time between checkpoints.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a double-precision floating point number ranging from 0.0 to 1.0

**Default value**:  **0.5**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**0.5**  indicates that each checkpoint should be complete within 50% of the interval between checkpoints.

## checkpoint\_warning<a name="en-us_topic_0283137153_en-us_topic_0237124708_en-us_topic_0059778936_sde87a0cc424e4ff9afa70fda4a02c6b5"></a>

**Parameter description**: Specifies a time in seconds. If the checkpoint interval is close to this time due to filling of checkpoint segment files, a message is sent to the server log to suggest an increase in the  checkpoint\_segments  value.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is second.  **0**  indicates that the warning is disabled.

**Default value**:  **5min**

**Recommended value**:  **5min**

## checkpoint\_wait\_timeout<a name="en-us_topic_0283137153_en-us_topic_0237124708_en-us_topic_0059778936_sfbbbe9801ae243cd9a7e6aac0ba41825"></a>

**Parameter description**: Sets the longest time that the checkpoint waits for the checkpointer thread to start.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 2 to 3600. The unit is s.

**Default value**:  **1min**

## enable\_incremental\_checkpoint<a name="en-us_topic_0283137153_en-us_topic_0237124708_section1574616132021"></a>

**Parameter description**: Specifies whether to enable incremental checkpointing.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **on**

## enable\_double\_write<a name="en-us_topic_0283137153_en-us_topic_0237124708_section1127841614298"></a>

**Parameter description**: Specifies whether to enable double writing. When incremental checkpointing and double writing are both enabled, double writing is used for protection, and full\_page\_writes is no longer used to prevent half-page writing problems.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **on**

## incremental\_checkpoint\_timeout<a name="en-us_topic_0283137153_en-us_topic_0237124708_section1932516619"></a>

**Parameter description**: Specifies the maximum interval between automatic WAL checkpoints when the incremental checkpointing is enabled.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 3600. The unit is s.

**Default value**:  **1min**

## enable\_xlog\_prune<a name="en-us_topic_0283137153_en-us_topic_0237124708_section162792473463"></a>

**Parameter description**: Specifies whether the primary server recycles logs when any standby server is disconnected.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   If this parameter is set to  **on**, the primary server does not reclaim logs when any standby server is disconnected.
-   If this parameter is set to  **off**, the primary server reclaims logs when any standby server is disconnected.

**Default value**:  **on**

## max\_redo\_log\_size<a name="en-us_topic_0283137153_section699875323120"></a>

**Parameter description**: Specifies the size of logs before the recovery point and the current log location. You are advised not to set this parameter to a large value if the RTO is concerned.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 163840 to 2147483647. The unit is KB.

**Default value**:  **1 GB**

## max\_size\_for\_xlog\_prune<a name="section6785753141714"></a>

**Parameter description**: Takes effect when  **enable\_xlog\_prune**  is enabled. If the standby server is disconnected and the size of Xlogs is greater than the threshold, the logs are recycled.

This parameter is a SIGHUP parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 0 to 2147483647. The unit is KB.

**Default value**:  **2147483647**. The unit is KB.

