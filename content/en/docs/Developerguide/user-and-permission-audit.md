# User and Permission Audit<a name="EN-US_TOPIC_0289900660"></a>

## audit\_login\_logout<a name="en-us_topic_0283136655_en-us_topic_0237124746_en-us_topic_0059778731_se04dd9d17c9445579ca268e0f74196fe"></a>

**Parameter description**: Specifies whether to audit the openGauss user's login \(including login success and failure\) and logout.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 7

-   **0**  indicates that the function of auditing users' logins and logouts is disabled.
-   **1**  indicates that only successful user logins are audited.
-   **2**  indicates that only failed user logins are audited.
-   **3**  indicates that successful and failed user logins are audited.
-   **4**  indicates that only user logouts are audited.
-   **5**  indicates that successful user logouts and logins are audited.
-   **6**  indicates that failed user logouts and logins are audited.
-   **7**  indicates that successful user logins, failed user logins, and logouts are audited.

**Default value**:  **7**

## audit\_database\_process<a name="en-us_topic_0283136655_en-us_topic_0237124746_en-us_topic_0059778731_s07b9d958cde04d6483123181f665ad5c"></a>

**Parameter description**: Specifies whether to audit openGauss start, stop, recovery, and switchover operations.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing openGauss start, stop, recovery, and switchover operations is disabled.
-   **1**  indicates that the function of auditing openGauss start, stop, recovery, and switchover operations is enabled.

**Default value**:  **1**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When openGauss is started, the standby DN is promoted to primary. Therefore, the DN type in the audit log is  **system\_switch**  when the DN is started.

## audit\_user\_locked<a name="en-us_topic_0283136655_en-us_topic_0237124746_en-us_topic_0059778731_sf87eea8d8fd949708f022da99dad9ba0"></a>

**Parameter description**: Specifies whether to audit the openGauss user's locking and unlocking.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing user's locking and unlocking is disabled.
-   **1**  indicates that the function of auditing user's locking and unlocking is enabled.

**Default value**:  **1**

## audit\_user\_violation<a name="en-us_topic_0283136655_en-us_topic_0237124746_en-us_topic_0059778731_s37b4430358614a999e2bb0404b01d450"></a>

**Parameter description**: Specifies whether to audit the access violation operations of a user.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing the access violation operations of a user is disabled.
-   **1**  indicates that the function of auditing the access violation operations of a user is enabled.

**Default value**:  **0**

## audit\_grant\_revoke<a name="en-us_topic_0283136655_en-us_topic_0237124746_en-us_topic_0059778731_s052b24b790e04c878234dd665e06b9bb"></a>

**Parameter description**: Specifies whether to audit the granting and reclaiming of the openGauss user's permission.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing the granting and reclaiming of a user's permission is disabled.
-   **1**  indicates that the function of auditing the granting and reclaiming of a user's permission is enabled.

**Default value**:  **1**

