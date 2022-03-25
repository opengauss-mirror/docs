# Asynchronous I/O Operations<a name="EN-US_TOPIC_0289900399"></a>

## enable\_adio\_debug<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_se65f9465acfb40c68abb51eaaaf44836"></a>

**Parameter description**: Specifies whether O&M personnel are allowed to generate some ADIO logs to locate ADIO issues. This parameter is used only by developers. Common users are advised not to use it.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that generation of ADIO logs is allowed.
-   **off**  or  **false**  indicates that generation of ADIO logs is disallowed.

**Default value**:  **off**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter cannot be enabled on in the current version. Even if it is manually enabled, the system automatically disables it.

## enable\_adio\_function<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_s070bd0423484454ab3a16267f8bf30d5"></a>

**Parameter description**: Specifies whether to enable the ADIO function.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The current version does not support the asynchronous I/O function. This function is disabled by default. Do not modify the setting.

**Value range**: Boolean

-   **on**  or  **true**  indicates that the function is enabled.
-   **off**  or  **false**  indicates that the function is disabled.

**Default value**:  **off**

## enable\_fast\_allocate<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_s86e90d3aa1464dae81fba7477c24693d"></a>

**Parameter description**: Specifies whether the quick disk space allocation is enabled.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). This function can be enabled only in the XFS file system.

**Value range**: Boolean

-   **on**  or  **true**  indicates that the function is enabled.
-   **off**  or  **false**  indicates that the function is disabled.

**Default value**:  **off**

## prefetch\_quantity<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_sc94be8a95eee46e8b7316377d65b4327"></a>

**Parameter description**: Specifies the amount of the I/O that the row-store prefetches using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 128 to 131072. The unit is 8 KB.

**Default value**:  **32 MB**  \(4096 x 8 KB\)

## backwrite\_quantity<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_se8fde9e4908d47a4a226b3d62368382f"></a>

**Parameter description**: Specifies the amount of I/O that the row-store writes using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 128 to 131072. The unit is 8 KB.

**Default value**:  **8 MB**  \(1024 x 8 KB\)

## cstore\_prefetch\_quantity<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_s02ecbe9ffe6b46c486c29ab257c047ed"></a>

**Parameter description**: Specifies the amount of I/O that the column-store prefetches using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **32 MB**

## cstore\_backwrite\_quantity<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_s59cb4900a93f4259a7ead02eb4ae8039"></a>

**Parameter description**: Specifies the amount of I/O that the column-store writes using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **8 MB**

## cstore\_backwrite\_max\_threshold<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_s3116bb20784d4f24bfb6d692cb967d0f"></a>

**Parameter description**: Specifies the maximum amount of buffer I/O that the column-store writes in the database using the ADIO.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 4096 to  _INT\_MAX_/2. The unit is KB.

**Default value**:  **2 GB**

## fast\_extend\_file\_size<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_sb249994654ee41b9af57236de991c43e"></a>

**Parameter description**: Specifies the disk size that the row-store pre-scales using the ADIO.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **8 MB**

## effective\_io\_concurrency<a name="en-us_topic_0283137248_en-us_topic_0237124704_en-us_topic_0059778686_section51899381171145"></a>

**Parameter description**: Specifies the number of requests that can be simultaneously processed by a disk subsystem. For the RAID array, the parameter value must be the number of disk drive spindles in the array.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1000

**Default value**:  **1**

## checkpoint\_flush\_after<a name="en-us_topic_0283137548_en-us_topic_0237124743_section1827711441139"></a>

**Parameter description:**  Specifies the threshold for the number of pages flushed by the checkpointer thread. If the threshold is exceeded, the operating system is instructed to flush the pages cached in the operating system asynchronously. In openGauss, the disk page size is 8 KB.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 256.  **0**  indicates that the asynchronous flush function is disabled. For example, if the value is  **32**, the checkpointer thread continuously writes 32 disk pages \(that is, 32 x 8 = 256 KB\) before asynchronous flush.

**Default value**:  **256 KB**

## bgwriter\_flush\_after<a name="en-us_topic_0283137548_en-us_topic_0237124743_section5339114713229"></a>

**Parameter description:**  Specifies the threshold for the number of pages flushed by the background writer thread. If the threshold is exceeded, the background writer thread instructs the operating system to asynchronously flush the pages cached in the operating system to disks. In openGauss, the disk page size is 8 KB.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 256.  **0**  indicates that the asynchronous flush function is disabled. The size of a single page is 8 KB. For example, if the value is  **64**, the background writer thread continuously writes 64 disk pages \(that is, 64 x 8 = 512 KB\) before asynchronous flush.

**Default value**:  **512 KB**  \(64 pages\)

## backend\_flush\_after<a name="en-us_topic_0283137548_en-us_topic_0237124743_section9929104982217"></a>

**Parameter description:**  Specifies the threshold for the number of pages flushed by the background writer thread. If the number of pages exceeds the threshold, the background writer thread instructs the operating system to asynchronously flush the pages cached in the operating system to disks. In openGauss, the disk page size is 8 KB.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 256.  **0**  indicates that the asynchronous flush function is disabled. The size of a single page is 8 KB. For example, if the value is  **64**, the backend thread continuously writes 64 disk pages \(that is, 64 x 8 = 512 KB\) before asynchronous flush.

**Default value**:  **0**

