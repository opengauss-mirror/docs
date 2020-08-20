# Asynchronous I/O Operations<a name="EN-US_TOPIC_0251900932"></a>

## enable\_adio\_debug<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_se65f9465acfb40c68abb51eaaaf44836"></a>

**Parameter description**: Specifies whether O&M personnel are allowed to generate some ADIO logs to locate ADIO issues. This parameter is used only by developers. Common users are advised not to use it.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that generation of ADIO logs is allowed.
-   **off**  or  **false**  indicates that generation of ADIO logs is disallowed.

**Default value**:  **off**

## enable\_adio\_function<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_s070bd0423484454ab3a16267f8bf30d5"></a>

**Parameter description**: Specifies whether to enable the ADIO function.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that the function is enabled.
-   **off**  or  **false**  indicates that the function is disabled.

**Default value**:  **off**

## enable\_fast\_allocate<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_s86e90d3aa1464dae81fba7477c24693d"></a>

**Parameter description**: Specifies whether the quick disk space allocation is enabled.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). This function can be enabled only in the XFS file system.

**Value range**: Boolean

-   **on**  or  **true**  indicates that the function is enabled.
-   **off**  or  **false**  indicates that the function is disabled.

**Default value**:  **off**

## prefetch\_quantity<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_sc94be8a95eee46e8b7316377d65b4327"></a>

**Parameter description**: Specifies the amount of the I/O that the row-store prefetches using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 128 to 131072. The unit is 8 KB.

**Default value**:  **32MB**  \(4096 x 8 KB\)

## backwrite\_quantity<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_se8fde9e4908d47a4a226b3d62368382f"></a>

**Parameter description**: Specifies the amount of I/O that the row-store writes using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 128 to 131072. The unit is 8 KB.

**Default value**:  **8MB**  \(1024 x 8 KB\)

## cstore\_prefetch\_quantity<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_s02ecbe9ffe6b46c486c29ab257c047ed"></a>

**Parameter description**: Specifies the amount of I/O that the column-store prefetches using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **32MB**

## cstore\_backwrite\_quantity<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_s59cb4900a93f4259a7ead02eb4ae8039"></a>

**Parameter description**: Specifies the amount of I/O that the column-store writes using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **8MB**

## cstore\_backwrite\_max\_threshold<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_s3116bb20784d4f24bfb6d692cb967d0f"></a>

**Parameter description**: Specifies the maximum amount of buffer I/O that the column-store writes in the database using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 4096 to  _INT\_MAX_/2. The unit is KB.

**Default value**:  **2GB**

## fast\_extend\_file\_size<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_sb249994654ee41b9af57236de991c43e"></a>

**Parameter description**: Specifies the disk size that the row-store pre-scales using the ADIO.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **8MB**

## effective\_io\_concurrency<a name="en-us_topic_0242371494_en-us_topic_0237124704_en-us_topic_0059778686_section51899381171145"></a>

**Parameter description**: Specifies the number of requests that can be simultaneously processed by a disk subsystem. For the RAID array, the parameter value must be the number of disk drive spindles in the array.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000

**Default value**:  **1**

