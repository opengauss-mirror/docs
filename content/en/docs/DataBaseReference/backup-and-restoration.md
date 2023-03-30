# Backup and Restoration<a name="EN-US_TOPIC_0000001083079268"></a>

## operation\_mode<a name="section0169133413323"></a>

**Parameter description**: Specifies whether the system enters the backup and restoration mode.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the system is in the backup and restoration mode.
-   **off**  indicates that the system is not in the backup and restoration mode.

**Default value**:  **off**

## enable\_cbm\_tracking<a name="section1232751104711"></a>

**Parameter description:**  This parameter must be enabled when Roach is used to perform full and incremental backups. If this parameter is disabled, the backup will fail.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: The cbm tracking is enabled.
-   **off**: The cbm tracking is disabled.

**Default value**:  **off**

## hadr\_max\_size\_for\_xlog\_receiver<a name="section1662819356167"></a>

**Parameter description**: Specifies the maximum difference between the OBS logs obtained by instances in the DR database instance and the local playback logs. If the difference is greater than the value of this parameter, the instances stop obtaining OBS logs.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Handling suggestion**: The value of this parameter is related to the local disk size. You are advised to set this parameter to 50% of the local disk size.

**Value range**: an integer ranging from 0 to 2147483647

**Default value**:  **256 GB**

