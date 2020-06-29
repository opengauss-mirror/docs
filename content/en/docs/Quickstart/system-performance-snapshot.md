# System Performance Snapshot<a name="EN-US_TOPIC_0251900981"></a>

## enable\_wdr\_snapshot<a name="en-us_topic_0242371547_en-us_topic_0237124757_section983311682019"></a>

**Parameter description**: Specifies whether to enable the database monitoring snapshot function.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the database monitoring snapshot function is enabled.
-   **off**  indicates that the database monitoring snapshot function is disabled.

**Default value**:  **off**

## wdr\_snapshot\_retention\_days<a name="en-us_topic_0242371547_en-us_topic_0237124757_section1658494717518"></a>

**Parameter description**: Specifies the number of days database monitoring snapshots are retained. When the value of  **wdr\_snapshot\_retention\_days**  is exceeded, the system cleans up snapshots with the smallest snapshot\_id at the interval specified by  **wdr\_snapshot\_interval**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 8

**Default value**:  **8**

## wdr\_snapshot\_query\_timeout<a name="en-us_topic_0242371547_en-us_topic_0237124757_section837656135120"></a>

**Parameter description**: Specifies the execution timeout for the SQL statements associated with database monitoring snapshot operations. If the SQL statement execution is not complete and a result is not returned within the specified time, the snapshot operation fails.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 to  _INT\_MAX_. The unit is s.

**Default value**:  **100s**

## wdr\_snapshot\_interval<a name="en-us_topic_0242371547_en-us_topic_0237124757_section1298483285116"></a>

**Parameter description**: Specifies the interval at which the background thread Snapshot automatically performs snapshot operations on the database monitoring data.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 10 to 60. The unit is m.

**Default value**:  **1h**

