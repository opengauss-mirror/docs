# System Performance Snapshot<a name="EN-US_TOPIC_0289901018"></a>

## enable\_wdr\_snapshot<a name="en-us_topic_0283137284_en-us_topic_0237124757_section983311682019"></a>

**Parameter description**: Specifies whether to enable the database monitoring snapshot function.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the database monitoring snapshot function is enabled.
-   **off**  indicates that the database monitoring snapshot function is disabled.

**Default value**:  **off**

## wdr\_snapshot\_retention\_days<a name="en-us_topic_0283137284_en-us_topic_0237124757_section1658494717518"></a>

**Parameter description:**  Specifies the number of days for storing database monitoring snapshot data in the system. When the number of snapshots generated during database running exceeds the maximum number of snapshots that can be generated within the retention period, the system clears the snapshot data with the smallest  **snapshot\_id**  at the interval specified by  **wdr\_snapshot\_interval**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 8

**Default value**:  **8**

## wdr\_snapshot\_query\_timeout<a name="en-us_topic_0283137284_en-us_topic_0237124757_section837656135120"></a>

**Parameter description**: Specifies the execution timeout for the SQL statements associated with database monitoring snapshot operations. If the SQL statement execution is not complete and a result is not returned within the specified time, the snapshot operation fails.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 to  _INT\_MAX_. The unit is second.

**Default value**:  **100s**

## wdr\_snapshot\_interval<a name="en-us_topic_0283137284_en-us_topic_0237124757_section1298483285116"></a>

**Parameter description**: Specifies the interval at which the backend thread Snapshot automatically performs snapshot operations on the database monitoring data.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 60. The unit is min.

**Default value**:  **1h**

## asp\_flush\_mode<a name="section19120410361"></a>

**Parameter description**: Specifies the mode for the ASP to update data to the disk. The value can be  **file**  \(default value\),  **table**  \(system catalog\), or  **all**  \(system catalog and file\). Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, which can be  **table**,  **file**, or  **all**

**Default value**:  **table**

## asp\_flush\_rate<a name="section1111613305305"></a>

**Parameter description**: When the number of samples reaches the value of  **asp\_sample\_num**, the samples in the memory are updated to the disk based on a certain proportion.  **asp\_flush\_rate**  indicates the update proportion. If this parameter is set to  **10**, it indicates that the update ratio is 10:1.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 10

**Default value**:  **10**

## asp\_log\_filename<a name="section17275144118452"></a>

**Parameter description**: Specifies the file name format when writing files using ASP. Only the sysadmin user can access this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **asp-%Y-%m-%d\_%H%M%S.log**

## asp\_retention\_days<a name="section550363616405"></a>

**Parameter description**: Specifies the maximum number of days for reserving ASP samples when they are written to the system catalog.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 7

**Default value**:  **2**

## asp\_sample\_interval<a name="section9455121452318"></a>

**Parameter description**: Specifies the sampling interval.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 10. The unit is second.

**Default value**:  **1s**

## asp\_sample\_num<a name="section6328132871810"></a>

**Parameter description**: Specifies the maximum number of samples allowed in the LOCAL\_ACTIVE\_SESSION view. Only the sysadmin user can access this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 100000.

**Default value**:  **10**

## enable\_asp<a name="section124165617108"></a>

**Parameter description: **Specifies whether to enable the active session profile function.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**: The function is enabled.
-   **off**: The function is disabled.

**Default value**:  **off**

