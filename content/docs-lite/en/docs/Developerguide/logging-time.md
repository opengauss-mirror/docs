# Logging Time<a name="EN-US_TOPIC_0289900345"></a>

## client\_min\_messages<a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s2955da1f1cb24b0aa68ddc77700233e0"></a>

**Parameter description**: Specifies which level of messages will be sent to the client. Each level covers all the levels following it. The lower the level is, the fewer messages are sent.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>A same value for  **client\_min\_messages**  and  **[log\_min\_messages](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a)**  does not indicate the same level.

**Value range**: enumerated values. Valid values are  **debug**,  **debug5**,  **debug4**,  **debug3**,  **debug2**,  **debug1**,  **info**,  **log**,  **notice**,  **warning**,  **error**,  **fatal**, and  **panic**. For details about the parameter, see  [Table 1](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_table55180162). If the configured level is higher than  **error**, for example,  **fatal**  or  **panic**, the system changes the level to  **error**  by default.

**Default value**:  **notice**

## log\_min\_messages<a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a"></a>

**Parameter description**: Specifies which level of messages will be written into the server log. Each level covers all the levels following it. The lower the level is, the fewer messages will be written into the log.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>A same value for  **[client\_min\_messages](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s2955da1f1cb24b0aa68ddc77700233e0)**  and  **log\_min\_messages**  does not indicate the same level. For some log information, after this parameter is enabled, you also need to set  **logging\_modules**  to enable log printing for the corresponding module.

**Value range**: enumerated values. Valid values are  **debug**,  **debug5**,  **debug4**,  **debug3**,  **debug2**,  **debug1**,  **info**,  **log**,  **notice**,  **warning**,  **error**,  **fatal**, and  **panic**. For details about the parameter, see  [Table 1](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_table55180162).

**Default value**:  **warning**

## log\_min\_error\_statement<a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s8cdbbd89c18b4425ad32f96456349c1d"></a>

**Parameter description**: Controls which SQL statements that cause an error condition are recorded in the server log.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: enumerated values. Valid values are  **debug**,  **debug5**,  **debug4**,  **debug3**,  **debug2**,  **debug1**,  **info**,  **log**,  **notice**,  **warning**,  **error**,  **fatal**, and  **panic**. For details about the parameter, see  [Table 1](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_table55180162).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The default is  **error**, indicating that statements causing errors, log messages, fatal errors, or panics will be logged.
>-   **panic**  indicates that SQL statements that cause an error condition will not be logged.

**Default value**:  **error**

## log\_min\_duration\_statement<a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s62cf0fb833324a82a841f02134a932e5"></a>

**Parameter description**: Specifies the threshold for logging the duration of a completed statement. If a statement runs for a period greater than or equal to the specified value, its duration will be logged.

Setting this parameter can be helpful in tracking down unoptimized queries. For clients using extended query protocols, the time required for parsing, binding, and executing steps are logged independently.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>When using this option together with  **[log\_statement](logging-content.md#en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s77b3e2e16a3e4705a139bef98688be8a)**, the text of statements that are logged because of  **log\_statement**  will not be repeated in the duration log message. If you are not using  **syslog**, it is recommended that you log the process ID \(PID\) or session ID using  **[log\_line\_prefix](logging-content.md#en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_sd57ce2167a8149239e10ab0cef12b949)**  so that you can link the statement message to the later duration message.

**Value range**: an integer ranging from –1 to 2147483647. The unit is ms.

-   If this parameter is set to  **250**, all SQL statements that run for 250 ms or longer will be logged.
-   **0**  indicates that the execution durations of all the statements are logged.
-   **–1**  indicates that the duration logging is disabled.

**Default value**:  **30min**

## backtrace\_min\_messages<a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s0d485880ad9c4bd6b99d861d6857d6b3"></a>

**Parameter description**: Prints the function's stack information to the server's log file if the information generated is greater than or equal to the level specified by this parameter.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>This parameter is used to locate problems on-site. Frequent stack printing will affect the system's overhead and stability. Therefore, set the value of this parameter to a rank other than  **fatal**  or  **panic**  during problem location.

**Value range**: enumerated values

Valid values include  **debug**,  **debug5**,  **debug4**,  **debug3**,  **debug2**,  **debug1**,  **info**,  **log**,  **notice**,  **warning**,  **error**,  **fatal**, and  **panic**. For details about the parameter, see  [Table 1](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_table55180162).

**Default value**:  **panic**

[Table 1](#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_table55180162)  explains message severities used by openGauss. If logging output is sent to  **syslog**  or  **eventlog**, the severities are translated as shown in the table. \(Note that the translation takes effect only in a Windows environment where openGauss does not involve this parameter.\)

**Table  1**  Message severity levels

<a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_table55180162"></a>
<table><thead align="left"><tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row16083876"><th class="cellrowborder" valign="top" width="23.89%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p53202008"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p53202008"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p53202008"></a>Severity</p>
</th>
<th class="cellrowborder" valign="top" width="38.29%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p32367662"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p32367662"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p32367662"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="17.94%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p30020813"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p30020813"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p30020813"></a>System Log</p>
</th>
<th class="cellrowborder" valign="top" width="19.88%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p39635294"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p39635294"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p39635294"></a>Event Log</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row8887944"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p52038259"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p52038259"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p52038259"></a>debug[1-5]</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p43222216"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p43222216"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p43222216"></a>Provides detailed debug information.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p36122287"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p36122287"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p36122287"></a>DEBUG</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p27851471"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p27851471"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p27851471"></a>INFORMATION</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_r595a40e423624553b74848a4dc146a29"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a9385ed0f97d2461bbbefbb1d85dba9da"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a9385ed0f97d2461bbbefbb1d85dba9da"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a9385ed0f97d2461bbbefbb1d85dba9da"></a>log</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_adb3860efa3a3439aa9d6fd43d3cf470b"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_adb3860efa3a3439aa9d6fd43d3cf470b"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_adb3860efa3a3439aa9d6fd43d3cf470b"></a>Reports information of interest to administrators, for example, checkpoint activity.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a0e4311aa110b42c48888021f54d2c623"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a0e4311aa110b42c48888021f54d2c623"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a0e4311aa110b42c48888021f54d2c623"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a4da3f67fd2c04ee796b271a2e025283f"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a4da3f67fd2c04ee796b271a2e025283f"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_a4da3f67fd2c04ee796b271a2e025283f"></a>INFORMATION</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row25198154"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p45372660"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p45372660"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p45372660"></a>info</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p37972107"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p37972107"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p37972107"></a>Provides information implicitly requested by users, for example, output from <strong id="b2414827205419"><a name="b2414827205419"></a><a name="b2414827205419"></a>VACUUM VERBOSE</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p43138039"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p43138039"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p43138039"></a>INFO</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p50620321"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p50620321"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p50620321"></a>INFORMATION</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row57548487"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p64562184"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p64562184"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p64562184"></a>notice</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18937882"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18937882"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18937882"></a>Provides information that might be helpful to users, for example, truncation of long identifiers and index created as part of the primary key.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p25016743"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p25016743"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p25016743"></a>NOTICE</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p66207956"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p66207956"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p66207956"></a>INFORMATION</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row44586181"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p16184936"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p16184936"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p16184936"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p49255712"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p49255712"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p49255712"></a>Provides warnings of likely problems, for example, <strong id="b965152314515"><a name="b965152314515"></a><a name="b965152314515"></a>COMMIT</strong> outside a transaction block.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48960854"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48960854"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48960854"></a>NOTICE</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p66001138"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p66001138"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p66001138"></a>WARNING</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row39415719"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p5871590"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p5871590"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p5871590"></a>error</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p45865182"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p45865182"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p45865182"></a>Reports an error that causes a command to terminate.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p10254007"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p10254007"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p10254007"></a>WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48267630"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48267630"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48267630"></a>ERROR</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row31448593"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p59582581"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p59582581"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p59582581"></a>fatal</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48379782"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48379782"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p48379782"></a>Reports the reason that causes a session to terminate.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18139978"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18139978"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18139978"></a>ERR</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p25623517"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p25623517"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p25623517"></a>ERROR</p>
</td>
</tr>
<tr id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_row36429203"><td class="cellrowborder" valign="top" width="23.89%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18347233"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18347233"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p18347233"></a>panic</p>
</td>
<td class="cellrowborder" valign="top" width="38.29%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p58513940"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p58513940"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p58513940"></a>Reports an error that caused all database sessions to terminate.</p>
</td>
<td class="cellrowborder" valign="top" width="17.94%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p63990933"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p63990933"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p63990933"></a>CRIT</p>
</td>
<td class="cellrowborder" valign="top" width="19.88%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p52611897"><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p52611897"></a><a name="en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_en-us_topic_0058967791_p52611897"></a>ERROR</p>
</td>
</tr>
</tbody>
</table>

## plog\_merge\_age<a name="en-us_topic_0283137528_en-us_topic_0237124722_section12879737135917"></a>

**Parameter description**: Specifies the output period of performance log data.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The parameter value is in milliseconds. You are advised to set it to a multiple of 1000. That is, the value is in seconds. The performance log files controlled by this parameter are stored in the  _$GAUSSLOG_**/gs\_profile/**<_node\_name_\> directory in .prf format. You are not advised to use this parameter externally.

**Value range**: a number ranging from 0 to 2147483647. The unit is ms.

**0**  indicates that the current session will not log performance data. A value other than 0 indicates that the current session will log performance data based on the period specified by this parameter.

A small value indicates that much data is logged, which seriously affects performance.

**Default value**:  **0**

