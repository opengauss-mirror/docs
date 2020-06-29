# Upgrade Parameters<a name="EN-US_TOPIC_0242371543"></a>

## IsInplaceUpgrade<a name="en-us_topic_0237124753_en-us_topic_0059778487_s1df9119d74fe45da9452d4cb4802f84c"></a>

**Parameter description**: Specifies whether an upgrade is ongoing. This parameter is an internal parameter for upgrade and cannot be modified by users.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates an upgrade is ongoing.
-   **off**  indicates no upgrade is ongoing.

**Default value**:  **off**

## inplace\_upgrade\_next\_system\_object\_oids<a name="en-us_topic_0237124753_section17882514407"></a>

**Parameter description**: Indicates the OID of a new system object during the in-place upgrade. This parameter is an internal parameter for upgrade and cannot be modified by users.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: empty

## upgrade\_mode<a name="en-us_topic_0237124753_section108622315308"></a>

**Parameter description**: Specifies the upgrade mode. This parameter is an internal parameter for upgrade. You are advised not to modify it.

**Value range**: an integer ranging from 0 to  _INT\_MAX_

-   **0**  indicates that no upgrade is ongoing.
-   **1**  indicates that a local upgrade is ongoing.
-   **2**  indicates that a grayscale upgrade is ongoing.

**Default value**:  **0**

