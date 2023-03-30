# Audit Switch<a name="EN-US_TOPIC_0289900617"></a>

## audit\_enabled<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_sb3d1b703f24c49f096b36087a60fdfcd"></a>

**Parameter description**: Specifies whether to enable or disable the audit process. After the audit process is enabled, the auditing information written by the background process can be read from the pipe and written into audit files.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the auditing function is enabled.
-   **off**  indicates that the auditing function is disabled.

**Default value**:  **on**

## audit\_directory<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_sd283781eb52b490db30d6a5549f7db3e"></a>

**Parameter description**: Specifies the storage directory of audit files. A path relative to the  **data**  directory. Only the sysadmin user can access this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value:** **pg\_audit**  If  **om**  is used for openGauss deployment, audit logs are stored in  **$GAUSSLOG/pg\_audit/*Instance name**.

> ![](public_sys-resources/icon-notice.gif) **NOTICE:**  
>
> - You need to set different audit file directories for different DNs. Otherwise, audit logs will be abnormal.
> - If the value of **audit_directory** in the configuration file is an invalid path, the audit function cannot be used.
> - Path description:
>   - Valid path: You have read and write permissions on the path.
>   - Invalid path: You do not have read or write permissions on an invalid path.

## audit\_data\_format<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s4738964503be49cb9b7ecf100f25df0d"></a>

**Parameter description**: Audits the format of log files. Currently, only the binary format is supported. Only the sysadmin user can access this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **binary**

## audit\_rotation\_interval<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s5d4f1e0d25bc4bc7969bde761edabc2a"></a>

**Parameter description**: Specifies the interval of creating an audit log file. If the difference between the current time and the time when the previous audit log file is created is greater than the value of  **audit\_rotation\_interval**, a new audit log file will be generated.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to  *INT\*MAX_/60. The unit is min.

**Default value:** **1d**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Adjust this parameter only when required. Otherwise,  **audit\_resource\_policy**  may fail to take effect. To control the storage space and time of audit logs, set the  [audit\_resource\_policy](#en-us_topic_0283137524_en-us_topic_0237124745_section939915522551),  [audit\_space\_limit](#en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s167d5900250946bca199444c0617c714), and  [audit\_file\_remain\_time](#en-us_topic_0283137524_en-us_topic_0237124745_section149961828185211)  parameters.

## audit\_rotation\_size<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_sf2c59b75a61e4e55933029c6b1e4ab96"></a>

**Parameter description**: Specifies the maximum capacity of an audit log file. If the total number of messages in an audit log exceeds the value of  **audit\_rotation\_size**, the server will generate a new audit log file.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 to 1048576. The unit is KB.

**Default value**:  **10 MB**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Adjust this parameter only when required. Otherwise,  **audit\_resource\_policy**  may fail to take effect. To control the storage space and time of audit logs, set the  **audit\_resource\_policy**,  **audit\_space\_limit**, and  **audit\_file\_remain\_time**  parameters.

## audit\_resource\_policy<a name="en-us_topic_0283137524_en-us_topic_0237124745_section939915522551"></a>

**Parameter description**: Specifies the policy for determining whether audit logs are preferentially stored by space or time.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that audit logs are preferentially stored by space. A maximum of  [audit\_space\_limit](#en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s167d5900250946bca199444c0617c714)  logs can be stored. 
-   **off**  indicates that audit logs are preferentially stored by time. A minimum duration of  [audit\_file\_remain\_time](#en-us_topic_0283137524_en-us_topic_0237124745_section149961828185211)  logs must be stored.

**Default value**:  **on**

## audit\_file\_remain\_time<a name="en-us_topic_0283137524_en-us_topic_0237124745_section149961828185211"></a>

**Parameter description**: Specifies the minimum duration required for recording audit logs. This parameter is valid only when  [audit\_resource\_policy](#en-us_topic_0283137524_en-us_topic_0237124745_section939915522551)  is set to  **off**.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 730. The unit is day.  **0**  indicates that the storage duration is not limited.

**Default value**:  **90**

## audit\_space\_limit<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s167d5900250946bca199444c0617c714"></a>

**Parameter description**: Specifies the total disk space occupied by audit files.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1024 KB to 1024 GB. The unit is KB.

**Default value**:  **1GB**

## audit\_file\_remain\_threshold<a name="en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s7fbbb3e514454b11aa33310454965b66"></a>

**Parameter description**: Specifies the maximum number of audit files in the audit directory.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 to 1048576

**Default value**:  **1048576**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Ensure that this parameter is set to  **1048576**. Adjust this parameter only when required. Otherwise,  **audit\_resource\_policy**  may fail to take effect. To control the storage space and time of audit logs, set the  **audit\_resource\_policy**,  **audit\_space\_limit**, and  **audit\_file\_remain\_time**  parameters.

## audit\_thread\_num<a name="section119766534165"></a>

**Parameter description**: Specifies the number of audit threads.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 48

**Default value**:  **1**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When  **audit\_dml\_state**  is enabled and high performance is required, you are advised to increase the value of this parameter to ensure that audit messages can be processed and recorded in a timely manner.
