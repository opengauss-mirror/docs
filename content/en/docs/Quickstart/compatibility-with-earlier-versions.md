# Compatibility with Earlier Versions<a name="EN-US_TOPIC_0251900966"></a>

This section describes the parameter control of the downward compatibility and external compatibility features of the openGauss database. A backward compatible database supports applications of earlier versions. This section describes parameters used for controlling backward compatibility of a database.

## array\_nulls<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_s7a22f8199d4c43ada0fd1e815f40477b"></a>

**Parameter description**: controls whether the array input parser recognizes unquoted NULL as a null array element.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that null values can be entered in arrays.
-   **off**  indicates backward compatibility with the old behavior. Arrays containing  **NULL**  values can still be created when this parameter is set to  **off**.

**Default value**:  **on**

## backslash\_quote<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_sdcdb8f0f54734b778d8ac509d5a2d08b"></a>

**Parameter description**: controls whether a single quotation mark can be represented by \\' in a string text.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When the string text meets the SQL standards, \\ has no other meanings. This parameter only affects the handling of non-standard-conforming string texts, including escape string syntax \(E'...'\).

**Value range**: enumerated values

-   **on**  indicates that the use of \\' is always allowed.
-   **off**  indicates that the use of \\' is rejected.
-   **safe\_encoding**  indicates that the use of \\' is allowed only when client encoding does not allow ASCII \\ within a multibyte character.

**Default value**:  **safe\_encoding**

## escape\_string\_warning<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_s2506905b3bff4a1694bbfe0e27fab17a"></a>

**Parameter description**: specifies a warning on directly using a backslash \(\\\) as an escape in an ordinary string.

-   Applications that wish to use a backslash \(\\\) as an escape need to be modified to use escape string syntax \(E'...'\). This is because the default behavior of ordinary strings is now to treat the backslash as an ordinary character in each SQL standard.
-   This variable can be enabled to help locate codes that need to be changed.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

**Default value**:  **on**

## lo\_compat\_privileges<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_s1386191eb2e74d9e90f455ca06cc9112"></a>

**Parameter description**: Specifies whether to enable backward compatibility for the privilege check of large objects.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

**on**  indicates that the privilege check is disabled when users read or modify large objects. This setting is compatible with versions earlier than PostgreSQL 9.0.

**Default value**:  **off**

## quote\_all\_identifiers<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_sadb6c2e7710b49b1b49b4984d7fbeb6f"></a>

**Parameter description:**  When the database generates SQL, this parameter forcibly quotes all identifiers even if they are not keywords. This will affect the output of EXPLAIN as well as the results of functions, such as pg\_get\_viewdef. For details, see the  **--quote-all-identifiers**  parameter of  **gs\_dump**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates the forcible quotation function is enabled.
-   **off**  indicates the forcible quotation function is disabled.

**Default value**:  **off**

## sql\_inheritance<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_s612a7463c38545da9b6d7d0bca8b8dca"></a>

**Parameter description**: Specifies whether to inherit semantics. This parameter specifies the access policy of descendant tables.  **off**  indicates that subtables cannot be accessed by commands. That is, the ONLY keyword is used by default. This setting is compatible with earlier versions.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that the subtable can be accessed.
-   **off**  indicates that the subtable cannot be accessed.

**Default value**:  **on**

## standard\_conforming\_strings<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_se4bd34e1d69b4139a8793e8a4cb5a785"></a>

**Parameter description**: Specifies whether ordinary string texts \('...'\) treat backslashes as ordinary texts as specified in the SQL standard.

-   Applications can check this parameter to determine how string texts will be processed.
-   It is recommended that characters be escaped by using the escape string syntax \(E'...'\).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that the function is enabled.
-   **off**  indicates that the function is disabled.

**Default value**:  **on**

## synchronize\_seqscans<a name="en-us_topic_0242371527_en-us_topic_0237124737_en-us_topic_0059778091_sde06650f37b441a3a3c724b65c9ee320"></a>

**Parameter description**: Specifies sequential scans of tables to synchronize with each other. Concurrent scans read the same data block about at the same time and share the I/O workload.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that a scan may start in the middle of the table and then "wrap around" the end to cover all rows to synchronize with the activity of scans already in progress. This may result in unpredictable changes in the row ordering returned by queries that have no ORDER BY clause.
-   **off**  indicates that the scan always starts from the table heading.

**Default value**:  **on**

## enable\_beta\_features<a name="en-us_topic_0242371527_en-us_topic_0237124737_section11856720221716"></a>

**Parameter description**: Specifies whether to enable some features that are not officially released and are used only for POC verification. Exercise caution when enabling these extended features because they may cause errors in some scenarios.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: Boolean

-   **on**  indicates that the features are enabled and forward compatible, but may incur errors in certain scenarios.
-   **off**  indicates that the features are disabled.

**Default value**:  **off**

