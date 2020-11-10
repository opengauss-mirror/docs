# openGauss Transaction<a name="EN-US_TOPIC_0242371531"></a>

This section describes the settings and value ranges of openGauss transaction parameters.

## transaction\_isolation<a name="en-us_topic_0237124741_en-us_topic_0059778361_s2207a1ba0779485aacfd099464414c39"></a>

**Parameter description**: Specifies the isolation level of the current transaction.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string of case-sensitive characters. The values include:

-   **serializable**: This value is equivalent to REPEATABLE READ in openGauss.
-   **read committed**: Only the data in committed transactions will be read.
-   **repeatable read**: Only the data committed before transaction start is read. Uncommitted data or data committed in other concurrent transactions cannot be read.
-   **default**: The value is the same as that of  **default\_transaction\_isolation**.

**Default value:** **read committed**

## transaction\_read\_only<a name="en-us_topic_0237124741_en-us_topic_0059778361_safc2c3f7a6b445aca6ccaee3d9e86366"></a>

**Parameter description:**  Specifies that the current transaction is a read-only transaction.

This parameter is fixed to on during the database recovery process or in the standby machine; otherwise, it is fixed to the value of default_transaction_read_only.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the current transaction is a read-only transaction.
-   **off**  indicates that the current transaction can be a read/write transaction.

**Default value**:  **off**

## xc\_maintenance\_mode<a name="en-us_topic_0237124741_en-us_topic_0059778361_sb28e6b95d9d643c98ea45af34d3db730"></a>

**Parameter description:**  Specifies whether the system is in maintenance mode.

This parameter is a SUSET parameter. Set it based on method 3 in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that concurrent update is allowed.
-   **off**  indicates that concurrent update is disallowed.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Enable the maintenance mode with caution to avoid openGauss data inconsistencies.  

**Default value**:  **off**

## allow\_concurrent\_tuple\_update<a name="en-us_topic_0237124741_en-us_topic_0059778361_s7de681312eb04b8e9d2efe96e9f0ae0e"></a>

**Parameter description**: Specifies whether to allow concurrent update.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that concurrent update is allowed.
-   **off**  indicates that concurrent update is disallowed.

**Default value**:  **on**

## pgxc\_node\_name<a name="en-us_topic_0237124741_en-us_topic_0059778361_s933a523479e54c769ac6b28762cc5956"></a>

**Parameter description**: Specifies the name of a node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: current node name

## transaction\_deferrable<a name="en-us_topic_0237124741_en-us_topic_0059778361_s0f3a7cc4a78f476390a39c0df72ec257"></a>

**Parameter description:**  specifies whether to delay the execution of a read-only serial transaction without incurring an execution failure. Assume this parameter is set to  **on**. When the server detects that the tuples read by a read-only transaction are being modified by other transactions, it delays the execution of the read-only transaction until the other transactions finish modifying the tuples. Currently, this parameter is not used in openGauss. Similar to this parameter, the  [default\_transaction\_deferrable](statement-behavior.md#en-us_topic_0237124732_en-us_topic_0059779117_s031e2bbea2cf42a5a1c24e6dbaa70365)  parameter is used to specify whether to allow delayed execution of a transaction.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the execution of a transaction can be delayed.
-   **off**  indicates that the execution of a transaction cannot be delayed.

**Default value**:  **off**

## enforce\_two\_phase\_commit<a name="en-us_topic_0237124741_en-us_topic_0059778361_sc6c4a7787ffe496282b2ac6bc26c4311"></a>

**Parameter description**: Specifies whether to forcibly use two-phase commit. This parameter is reserved for compatibility with earlier versions and is invalid in the current version.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that two-phase commit is forcibly used.
-   **off**  indicates that two-phase commit is not forcibly used.

**Default value**:  **on**

## enable\_show\_any\_tuples<a name="en-us_topic_0237124741_en-us_topic_0059778361_s00599c10d3824fa6a76dcf22f22f0394"></a>

**Parameter description:**  This parameter is available only in a read-only transaction and is used for analysis. When this parameter is set to  **on**/**true**, all versions of tuples in the table are displayed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on/true**  indicates that all versions of tuples in the table are displayed.
-   **off/false**  indicates that no versions of tuples in the table are displayed.

**Default value**:  **off**

## replication\_type<a name="en-us_topic_0237124741_section94292665717"></a>

**Parameter description**: Specifies what nodes are deployed for the HA mode. The nodes can consist of a primary, a standby, and a secondary node; or consist of a primary and multiple standby nodes; or consist of a primary node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

You are advised not to modify this parameter.

**Value range**: 0 to 3

-   **3** is an invalid value, indicating the number of patterns.
-   **2**  indicates that single host mode.
-   **1**  indicates that the HA nodes consist of a primary and multiple standby nodes.
-   **0**: indicates that the HA nodes consist of a primary, a standby, and a secondary node.

**Default value**:  **1**

