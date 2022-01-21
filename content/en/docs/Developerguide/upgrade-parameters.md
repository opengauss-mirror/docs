# Upgrade Parameters<a name="EN-US_TOPIC_0289900654"></a>

## IsInplaceUpgrade<a name="en-us_topic_0283136680_en-us_topic_0237124753_en-us_topic_0059778487_s1df9119d74fe45da9452d4cb4802f84c"></a>

**Parameter description**: Specifies whether an upgrade is ongoing. The value of this parameter cannot be changed.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates an upgrade is ongoing.
-   **off**  indicates no upgrade is ongoing.

**Default value**:  **off**

## inplace\_upgrade\_next\_system\_object\_oids<a name="en-us_topic_0283136680_en-us_topic_0237124753_section17882514407"></a>

**Parameter description**: Indicates the OID of a new system object during the in-place upgrade. The value of this parameter cannot be changed.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## upgrade\_mode<a name="en-us_topic_0283136680_en-us_topic_0237124753_section108622315308"></a>

**Parameter description**: Specifies the upgrade mode.

This parameter is a fixed INTERNAL parameter and cannot be modified.

**Value range**: an integer ranging from 0 to  _INT\_MAX_

-   **0**  indicates that no upgrade is ongoing.
-   **1**  indicates that a local upgrade is ongoing.
-   **2**  indicates that a grayscale upgrade is ongoing.

**Default value**:  **0**

>![](C:/Users/Administrator/Desktop/Docs/docs/content/zh/docs/Developerguide/public_sys-resources/icon-note.gif) **NOTE：** 
>Special case: In the case of using grayscale upgrade, if the selection strategy is large version upgrade, that is, it is necessary to execute the upgrade script and replace the binary package, the upgrade_mode will be set to 2, the selection strategy is small version upgrade, and only the binary package will be replaced. , the upgrade_mode is not set to 2.