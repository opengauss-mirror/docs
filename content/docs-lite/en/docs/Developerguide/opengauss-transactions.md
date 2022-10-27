# openGauss Transactions<a name="EN-US_TOPIC_0289900431"></a>

This section describes the settings and value ranges of openGauss transaction parameters.

## transaction\_isolation<a name="en-us_topic_0283136901_en-us_topic_0237124741_en-us_topic_0059778361_s2207a1ba0779485aacfd099464414c39"></a>

**Parameter description:**  specifies the isolation level of the current transaction.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string of case-sensitive characters. The values include:

-   **serializable**: This value is equivalent to REPEATABLE READ in openGauss.
-   **read committed**  indicates that only the data in committed transactions will be read.
-   **repeatable read**  indicates that only the data committed before transaction start is read. Uncommitted data or data committed in other concurrent transactions cannot be read.
-   **default**: The value is the same as that of  **default\_transaction\_isolation**.

**Default value:** **read committed**

## transaction\_read\_only<a name="en-us_topic_0283136901_en-us_topic_0237124741_en-us_topic_0059778361_safc2c3f7a6b445aca6ccaee3d9e86366"></a>

**Parameter description**: Specifies whether the current transaction is a read-only transaction.

This parameter has a fixed value  **on**  during database restoration or on the standby node. Otherwise, set this parameter to the value of  **default\_transaction\_read\_only**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the current transaction is a read-only transaction.
-   **off**  indicates that the current transaction can be a read/write transaction.

**Default value**:  **off**

## xc\_maintenance\_mode<a name="en-us_topic_0283136901_en-us_topic_0237124741_en-us_topic_0059778361_sb28e6b95d9d643c98ea45af34d3db730"></a>

**Parameter description**: Specifies whether the system is in maintenance mode.

This parameter is a SUSET parameter. Set it based on method 3 in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the system is in maintenance mode.
-   **off**  indicates that the system is not in maintenance mode.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
>Enable the maintenance mode with caution to avoid openGauss data inconsistencies.

**Default value**:  **off**

## allow\_concurrent\_tuple\_update<a name="en-us_topic_0283136901_en-us_topic_0237124741_en-us_topic_0059778361_s7de681312eb04b8e9d2efe96e9f0ae0e"></a>

**Parameter description**: Specifies whether to allow concurrent update.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the concurrent update is allowed.
-   **off**  indicates that the system is not in maintenance mode.

**Default value**:  **on**

## transaction\_deferrable<a name="en-us_topic_0283136901_en-us_topic_0237124741_en-us_topic_0059778361_s0f3a7cc4a78f476390a39c0df72ec257"></a>

**Parameter description**: Specifies whether to delay the execution of a read-only serial transaction without incurring an execution failure. Assume this parameter is set to  **on**. When the server detects that the tuples read by a read-only transaction are being modified by other transactions, it delays the execution of the read-only transaction until the other transactions finish modifying the tuples. This parameter is reserved and does not take effect in this version. Similar to this parameter, the  **[default\_transaction\_deferrable](statement-behavior.md#en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_s031e2bbea2cf42a5a1c24e6dbaa70365)**  parameter is used to specify whether to allow delayed execution of a transaction.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the execution of a read-only serial transaction can be delayed.
-   **off**  indicates that the execution of a read-only serial transaction cannot be delayed.

**Default value**:  **off**

## enable\_show\_any\_tuples<a name="en-us_topic_0283136901_en-us_topic_0237124741_en-us_topic_0059778361_s00599c10d3824fa6a76dcf22f22f0394"></a>

**Parameter description:**  This parameter is available only in a read-only transaction and is used for analysis. When this parameter is set to  **on**  or  **true**, all versions of tuples in the table are displayed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that all versions of tuples in the table are displayed.
-   **off**  or  **false**  indicates that no versions of tuples in the table are displayed.

**Default value**:  **off**

## replication\_type<a name="en-us_topic_0283136901_en-us_topic_0237124741_section94292665717"></a>

**Parameter description**: Specifies whether the current HA mode is standalone, primary/standby/secondary, or one primary multiple standbys.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

This parameter is an internal parameter. Do not set it.

**Value range**: 0 to 2

-   **2**  Indicates the single primary mode. In this mode, the standby node cannot be expanded.
-   **1**  Indicates that the one-primary-multiple-standby mode is used, covering all scenarios. This mode is recommended.
-   **0**  Indicates the primary/standby mode. Currently, this mode is not supported.

**Default value**:  **1**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>In the Lite scenario, openGauss does not support the one primary multiple standbys mode.

## pgxc\_node\_name<a name="section145114033015"></a>

**Parameter description**: Specifies the name of a node.

This parameter is a POSTMASTER parameter. Set it based on  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

When a standby node requests to replicate logs on the primary node, if the  **application\_name**  parameter is not set, this parameter is used as the name of the streaming replication slot of the standby node on the primary node. The streaming replication slot is named in the following format: Value of this parameter\_IP address of the standby node\_Port number of the standby node. The IP address and port number of the standby node are obtained from the IP address and port number of the standby node specified by the  **replconninfo**  parameter. The maximum length of a streaming replication slot name is 61 characters. If the length of the concatenated string exceeds 61 characters, the truncated  **pgxc\_node\_name**  will be used for concatenation to ensure that the length of the streaming replication slot name is less than or equal to 61 characters.

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>
>After this parameter is modified, the database instance will fail to be connected. You are advised not to modify this parameter.

**Value range**: a string

**Default value**: current node name

## enable\_defer\_calculate\_snapshot<a name="section141811431171212"></a>

**Parameter description**: Specifies the delay in calculating  **xmin**  and  **oldestxmin**. Calculation is triggered only when 1000 transactions are executed or the interval is 1s. If this parameter is set to  **on**, the overhead of calculating snapshots can be reduced in heavy-load scenarios, but the progress of  **oldestxmin**  is slow, affecting tuple recycling. If this parameter is set to  **off**,  **xmin**  and  **oldestxmin**  can be calculated in real time, but the overhead for calculating snapshots increases.

This parameter is a SIGHUP parameter. Set it based on  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that snapshots  **xmin**  and  **oldestxmin**  are calculated with a delay.
-   **off**  indicates that snapshot  **xmin**  and  **oldestxmin**  are calculated in real time.

**Default value**:  **on**

