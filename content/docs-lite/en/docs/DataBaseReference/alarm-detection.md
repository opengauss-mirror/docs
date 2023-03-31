# Alarm Detection<a name="EN-US_TOPIC_0289900903"></a>

During the running of openGauss, error scenarios can be detected so that users are informed of the errors in time. You can view the  **system\_alarm**  log written by the alarm in the  _$GAUSSLOG_**/cm**  directory.

## enable\_alarm<a name="en-us_topic_0283137422_en-us_topic_0237124725_en-us_topic_0059779120_s7f12ed000f874dd9814499d27029e7be"></a>

**Parameter description**: Specifies whether to enable the alarm detection thread to detect fault scenarios that may occur in the database.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the alarm detection thread is enabled.
-   **off**  indicates that the alarm detection thread is disabled.

**Default value**:  **on**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter takes effect only on DNs.

## connection\_alarm\_rate<a name="en-us_topic_0283137422_en-us_topic_0237124725_en-us_topic_0059779120_s3377772ef3b34f0d860419f218742b7f"></a>

**Parameter description**: Specifies the ratio restriction on the maximum number of allowed parallel connections to the database. The maximum number of concurrent connections to the database is  [max\_connections](connection-settings.md#en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_sa723b719fa70453bb7ec27f323d41c79)  x  **connection\_alarm\_rate**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  a floating point number ranging from 0.0 to 1.0

**Default value**:  **0.9**

## alarm\_report\_interval<a name="en-us_topic_0283137422_en-us_topic_0237124725_en-us_topic_0059779120_s497b814638754853804a73cddef23bff"></a>

**Parameter description**: specifies the interval at which an alarm is reported.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. The unit is s.

**Default value:** **10**

## alarm\_component<a name="en-us_topic_0283137422_en-us_topic_0237124725_en-us_topic_0059779120_sfd9b71927dd048ee865ab9d7787548e3"></a>

**Parameter description**: Certain alarms are suppressed during alarm reporting. That is, the same alarm will not be repeatedly reported by an instance within the period specified by  **alarm\_report\_interval**. Its default value is  **10s**. In this case, the parameter specifies the location of the alarm component that is used to process alarm information. Only the sysadmin user can access this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

-   If  **--alarm-type**  in the  **gs\_preinstall**  script is set to  **5**, no third-party component is connected and alarms are written into the  **system\_alarm**  log. In this case, the value of  **alarm\_component**  is  **/opt/huawei/snas/bin/snas\_cm\_cmd**.
-   If  **--alarm-type**  in the  **gs\_preinstall**  script is set to  **1**, a third-party component is connected. In this case, the value of  **alarm\_component**  is the absolute path of the executable program of the third-party component.

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

## table\_skewness\_warning\_threshold<a name="en-us_topic_0283137574_en-us_topic_0237124754_section174079331456"></a>

**Parameter description**: Specifies the threshold for triggering a table skew alarm.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a floating point number ranging from 0 to 1

**Default value**:  **1**

## table\_skewness\_warning\_rows<a name="en-us_topic_0283137574_en-us_topic_0237124754_section816564619464"></a>

**Parameter description**: Specifies the number of rows for triggering a table skew alarm.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to  _INT\_MAX_

**Default value**:  **100000**

