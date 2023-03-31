# Logging Content<a name="EN-US_TOPIC_0289900137"></a>

## debug\_print\_parse<a name="en-us_topic_0283136613_en-us_topic_0237124723_section81174139518"></a>

**Parameter description**: Specifies whether to print parsing tree results.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the printing is enabled.
-   **off**  indicates that the printing is disabled.

**Default value**:  **off**

## debug\_print\_rewritten<a name="en-us_topic_0283136613_en-us_topic_0237124723_section1521510162517"></a>

**Parameter description**: Specifies whether to print query rewriting results.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the printing is enabled.
-   **off**  indicates that the printing is disabled.

**Default value**:  **off**

## debug\_print\_plan<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s8fc12b8c6e4d41fe8c63e22ebf9e7acb"></a>

**Parameter description**: Specifies whether to print the query execution plan to logs.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the printing is enabled.
-   **off**  indicates that the printing is disabled.

**Default value**:  **off**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   Debugging information about  **debug\_print\_parse**,  **debug\_print\_rewritten**, and  **debug\_print\_plan**  are printed only when the log level is set to  **log**  or higher. When these parameters are set to  **on**, their debugging information will be recorded in server logs and will not be sent to client logs. You can change the log level by setting  **[client\_min\_messages](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s2955da1f1cb24b0aa68ddc77700233e0)**  and  **[log\_min\_messages](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_sc6c47ec8cc1b47e28be98dbb24b1b39a)**.
>-   Do not invoke the  **gs\_encrypt\_aes128**  and  **gs\_decrypt\_aes128**  functions when  **debug\_print\_plan**  is set to  **on**, preventing the risk of sensitive information disclosure. You are advised to filter parameter information of the  **gs\_encrypt\_aes128**  and  **gs\_decrypt\_aes128**  functions in the log files generated when  **debug\_print\_plan**  is set to  **on**  before providing the log files to external maintenance engineers for fault locating. After you finish using the logs, delete them as soon as possible.

## debug\_pretty\_print<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s5bc0c94946f647878268bca243d4a828"></a>

**Parameter description**: Indents the logs produced by  **debug\_print\_parse**,  **debug\_print\_rewritten**, and  **debug\_print\_plan**. The output format is more readable but much longer than that generated when this parameter is set to  **off**.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the indentation is enabled.
-   **off**  indicates that the indentation is disabled.

**Default value**:  **on**

## log\_checkpoints<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s58789f8907ba4f90b41c5d0e2e29b0cf"></a>

**Parameter description**: Specifies whether the statistics on checkpoints and restart points are recorded in the server logs. When this parameter is set to  **on**, statistics on checkpoints and restart points are recorded in the log messages, including the number of buffers written and the time spent in writing them.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the statistics on checkpoints and restart points are recorded in the server logs.
-   **off**  indicates that the statistics on checkpoints and restart points are not recorded in the server logs

**Default value**:  **off**

## log\_connections<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_sfd4879f90fa741009b98a1d5f3e3f760"></a>

**Parameter description**: Specifies whether to record connection request information of the client.

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Some client programs, such as gsql, attempt to connect twice while determining if a password is required. In this case, duplicate "connection receive" messages do not necessarily indicate a problem.

**Value range**: Boolean

-   **on**  indicates that the request information is recorded.
-   **off**  indicates that the request information is not recorded.

**Default value**:  **off**

## log\_disconnections<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s1ca35653bc904b44b5f44277d5465dd1"></a>

**Parameter description**: Specifies whether to record disconnection request information of the client.

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the request information is recorded.
-   **off**  indicates that the request information is not recorded.

**Default value**:  **off**

## log\_duration<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_sbce59fbdb0a745fe98fd88020a477993"></a>

**Parameter description**: Specifies whether to record the duration of every completed SQL statement. For clients using extended query protocols, the time required for parsing, binding, and executing steps are logged independently.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **off**: Compared with this option,  **[log\_min\_duration\_statement](logging-time.md#en-us_topic_0283137528_en-us_topic_0237124722_en-us_topic_0059778452_s62cf0fb833324a82a841f02134a932e5)**  forcibly records the query text.
-   If this parameter is set to  **on**  and  **log\_min\_duration\_statement**  is set to a positive value, the duration of each completed statement is logged but the query text is included only for statements exceeding the threshold. This behavior can be used for gathering statistics in high-load situation.

**Default value**:  **off**

## log\_error\_verbosity<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s0c617c9fa21a44c4a10480d28b5cd208"></a>

**Parameter description**: Specifies the amount of detail written in the server log for each message that is logged.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  enumerated values

-   **terse**  indicates that the output excludes the DETAIL, HINT, QUERY, and CONTEXT error information.
-   **verbose**  indicates that the output includes the SQLSTATE error code, the source code file name, function name, and number of the line in which the error occurs.
-   **default**  indicates that the output includes the DETAIL, HINT, QUERY, and CONTEXT error information, and excludes the SQLSTATE error code, the source code file name, function name, and number of the line in which the error occurs.

**Default value**:  **default**

## log\_hostname<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_se005cea2f0cb48c080db3e66e3bb8b64"></a>

**Parameter description**: By default, connection log messages only show the IP address of the connecting host. The host name can be recorded when this parameter is set to  **on**. It may take some time to parse the host name. Therefore, the database performance may be affected.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the host name is simultaneously recorded.
-   **off**  indicates that the host name is not simultaneously recorded.

**Default value**:  **off**

## log\_line\_prefix<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_sd57ce2167a8149239e10ab0cef12b949"></a>

**Parameter description**: Specifies the prefix format of each log information. A prefix is a printf-style string that is output at the beginning of each line of the log. The "escape sequences" which begin with  **%**  are replaced with status information as listed in  [Table 1](#en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_table27298862).

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Table  1**  Escape characters

<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_table27298862"></a>
<table><thead align="left"><tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row55054323"><th class="cellrowborder" valign="top" width="16.580000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30215163"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30215163"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30215163"></a>Escape Character</p>
</th>
<th class="cellrowborder" valign="top" width="83.42%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p31509115"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p31509115"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p31509115"></a>Effect</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_rea716eb253554d0993b998df2f7644c2"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a4b1c5323feaf481e9c8ea3509e7fb5e2"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a4b1c5323feaf481e9c8ea3509e7fb5e2"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a4b1c5323feaf481e9c8ea3509e7fb5e2"></a>%a</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_ac07798546c08411797d2e6e42dee02aa"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_ac07798546c08411797d2e6e42dee02aa"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_ac07798546c08411797d2e6e42dee02aa"></a>Application name</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row36006405"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30837727"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30837727"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30837727"></a>%u</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p14827986"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p14827986"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p14827986"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row5074862"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p8410660"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p8410660"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p8410660"></a>%d</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p10174896"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p10174896"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p10174896"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row35524213"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p58889027"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p58889027"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p58889027"></a>%r</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p5281857"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p5281857"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p5281857"></a>Remote host name or IP address and remote port. If <strong id="b07014587913"><a name="b07014587913"></a><a name="b07014587913"></a>log_hostname</strong> is set to <strong id="b20701125815920"><a name="b20701125815920"></a><a name="b20701125815920"></a>off</strong>, only the IP address and remote port are displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row25268563"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p33487713"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p33487713"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p33487713"></a>%h</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p28150236"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p28150236"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p28150236"></a>Remote host name or IP address. If <strong id="b9485121714105"><a name="b9485121714105"></a><a name="b9485121714105"></a>log_hostname</strong> is set to <strong id="b1449120174100"><a name="b1449120174100"></a><a name="b1449120174100"></a>off</strong>, only the IP address is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row53318662"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p23844335"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p23844335"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p23844335"></a>%p</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p52342944"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p52342944"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p52342944"></a>Thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row40171732"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p32684898"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p32684898"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p32684898"></a>%t</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30231092"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30231092"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30231092"></a>Time stamp without milliseconds</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row26759246"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p20015355"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p20015355"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p20015355"></a>%m</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p10631048"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p10631048"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p10631048"></a>Timestamp with milliseconds</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_r039e22c4cc9840a293a0f546dfa9e09f"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p250435814516"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p250435814516"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p250435814516"></a>%n</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p152648014516"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p152648014516"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p152648014516"></a>Node from which an error is reported</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row32514827"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p16455296"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p16455296"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p16455296"></a>%i</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p57810577"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p57810577"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p57810577"></a>Command tag: type of command executed in the current session</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_r4e14801ff26444eb849d74f4fb211884"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a7b9736a6a70e4a308463c57dd69dfbfa"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a7b9736a6a70e4a308463c57dd69dfbfa"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a7b9736a6a70e4a308463c57dd69dfbfa"></a>%e</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a2da6277581564cfc95873866720eb4a1"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a2da6277581564cfc95873866720eb4a1"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a2da6277581564cfc95873866720eb4a1"></a>SQLSTATE error code</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row66653544"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30227968"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30227968"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p30227968"></a>%c</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p32546320"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p32546320"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p32546320"></a>Session ID: For details, see the note below the table.</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row36838733"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p31147410"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p31147410"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p31147410"></a>%l</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p39912267"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p39912267"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p39912267"></a>Number of the log line for each session or thread, starting at 1</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row37904874"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p50395925"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p50395925"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p50395925"></a>%s</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p55538129"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p55538129"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p55538129"></a>Process startup time</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_r7ec7b8bbbfd6470abc0282d037689be6"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a5eb06ce92ace47298260d36d15510d2c"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a5eb06ce92ace47298260d36d15510d2c"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a5eb06ce92ace47298260d36d15510d2c"></a>%v</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a6409531cf4ca4ac1b3668e71403443c0"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a6409531cf4ca4ac1b3668e71403443c0"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_a6409531cf4ca4ac1b3668e71403443c0"></a>Virtual transaction ID (backendID/ localXID)</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row20651380"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p62149104"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p62149104"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p62149104"></a>%x</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p912697"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p912697"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p912697"></a>Transaction ID (<strong id="b842352706185225"><a name="b842352706185225"></a><a name="b842352706185225"></a>0</strong> indicates that no transaction ID is assigned)</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row61376748"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p5460691"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p5460691"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p5460691"></a>%q</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p39662818"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p39662818"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p39662818"></a>Produces no output. If the current thread is a backend thread, this escape sequence is ignored and subsequent escape sequences are processed. Otherwise, this escape sequence and subsequent escape sequences are all ignored.</p>
</td>
</tr>
<tr id="row1195162615367"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="p17919181511455"><a name="p17919181511455"></a><a name="p17919181511455"></a>%S</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="p209198150453"><a name="p209198150453"></a><a name="p209198150453"></a>Session ID</p>
</td>
</tr>
<tr id="row789511313294"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="p1895813132919"><a name="p1895813132919"></a><a name="p1895813132919"></a>%T</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="p1189516133298"><a name="p1189516133298"></a><a name="p1189516133298"></a>Trace ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_row57383384"><td class="cellrowborder" valign="top" width="16.580000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p17542516"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p17542516"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p17542516"></a>%%</p>
</td>
<td class="cellrowborder" valign="top" width="83.42%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p11657652"><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p11657652"></a><a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_en-us_topic_0058967718_p11657652"></a>The character %</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The %c escape character prints a session ID consisting of two 4-byte hexadecimal numbers separated by a period \(.\). The numbers are the process startup time and the process ID. Therefore, %c can also be used as a space saving way of printing those items. For example, run the following query to generate the session ID from  **pg\_stat\_activity**:
>```
>SELECT to_hex(EXTRACT(EPOCH FROM backend_start)::integer) || '.' ||
>       to_hex(pid)
>FROM pg_stat_activity;
>```
>-   If you set a nonempty value for  **log\_line\_prefix**, you should usually make its last character be a space, to provide visual separation from the rest of the log line. A punctuation character can be used, too.
>-   Syslog generates its own timestamp and process ID information. Therefore, you do not need to include those escapes characters when you are logging in to syslog.

**Value range**: a string

**Default value:**  %m %c %d %p %a %x %n %e

## log\_lock\_waits<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s0e43c2815b8a4f369d5b150535d1703f"></a>

**Parameter description**: If the time for which a session waits to acquire a lock is longer than the value of  **[deadlock\_timeout](lock-management.md#en-us_topic_0283136691_en-us_topic_0237124735_en-us_topic_0059778102_se697b4ff00b643938b67eb5e08206cd5)**, this parameter specifies whether to record this message in the database. This is useful in determining if lock waits are causing poor performance.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the information is recorded.
-   **off**  indicates that the information is not recorded.

**Default value**:  **off**

## log\_statement<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s77b3e2e16a3e4705a139bef98688be8a"></a>

**Parameter description**: Specifies which SQL statements are recorded. For clients using extended query protocols, logging occurs when an Execute message is received, and values of the Bind parameters are included \(with any embedded single quotation marks doubled\).

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Statements that contain simple syntax errors are not logged even if  **log\_statement**  is set to  **all**, because the log message is emitted only after basic parsing has been completed to determine the statement type. If an extended query protocol is used, statements that fail before the execution phase \(during parse analysis or planning\) are not logged, either. Set  **log\_min\_error\_statement**  to  **ERROR**  or lower to log such statements.

**Value range:**  enumerated values

-   **none**  indicates that no statement is recorded.
-   **ddl**  indicates that all data definition statements, such as CREATE, ALTER, and DROP, are recorded.
-   **mod**  indicates that all DDL statements and data modification statements, such as INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM, are recorded.
-   **all**  indicates that all statements, including the PREPARE, EXECUTE, and EXPLAIN ANALYZE statements, are recorded.

**Default value**:  **none**

## log\_temp\_files<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s211da54dbba14dc090764769d1526bbd"></a>

**Parameter description**: Specifies whether to record the deletion information of temporary files. Temporary files can be created for sorting, hashing, and storing temporary querying results. If the recording is enabled, a log entry is generated for each temporary file when it is deleted.

This parameter is a  **SUSET**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 2147483647. The unit is KB.

-   A positive value indicates that the deletion information of temporary files whose size is larger than the specified value of  **log\_temp\_files**  is recorded.
-   **0**  indicates that the delete information of all temporary files is recorded.
-   **–1**  indicates that the delete information of any temporary files is not recorded.

**Default value**:  **–1**

## log\_timezone<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_s89bcaafcf2a6440ebe03b724cd4d0156"></a>

**Parameter description**: Specifies the time zone used for timestamps written in the server log. Different from  [TimeZone](locale-and-formatting.md#en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_sa60c5d71347646c2ad97ccb7541c6f12), this parameter takes effect for all sessions in the database.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. You can obtain it by querying the  [PG\_TIMEZONE\_NAMES](pg_timezone_names.md)  view.

**Default value**:  **GMT**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The default value will be changed when  **gs\_initdb**  is used to set system environments.

## logging\_module<a name="en-us_topic_0283136613_en-us_topic_0237124723_en-us_topic_0059778400_section4455896615058"></a>

**Parameter description**: Specifies whether module logs are output on the server. This parameter is a session-level parameter, and you are advised not to use the  **gs\_guc**  tool to set it.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **off**. All the module logs are not output on the server. You can view the logs by running  **show logging\_module**. Example modules are displayed as follows: ALL,on\(\),off\(GUC,ORC,SLRU,MEM\_CTL,AUTOVAC,CACHE,ADIO,SSL,TBLSPC,WLM,EXECUTOR,OPFUSION,VEC\_EXECUTOR,LLVM,OPT,OPT\_REWRITE,OPT\_JOIN,OPT\_AGG,OPT\_SUBPLAN,OPT\_SETOP,OPT\_SKEW,UDF,COOP\_ANALYZE,WLMCP,ACCELERATE,,PLANHINT,SNAPSHOT,XACT,HANDLE,CLOG,EC,REMOTE,CN\_RETRY,PLSQL,TEXTSEARCH,SEQ,REDO,FUNCTION,PARSER,INSTR,INCRE\_CKPT,DBL\_WRT,RTO,HEARTBEAT\).

**Setting method**: Run  **show logging\_module**  to view which modules are controllable. For example, the query output result is as follows:

```
openGauss=# show logging_module;
logging_module
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ALL,on(),off(GUC,ORC,SLRU,MEM_CTL,AUTOVAC,CACHE,ADIO,SSL,TBLSPC,WLM,EXECUTOR,VEC_EXECUTOR,LLVM,OPT,OPT_REWRITE,OPT_JOIN,OPT_AGG,OPT_SUBPLAN,OPT_SETOP,OPT_SKEW,UDF,COOP_ANALYZE,WLMCP,ACCELERATE,T,PLANHINT,SNAPSHOT,XACT,HANDLE,CLOG,EC,REMOTE,CN_RETRY,PLSQL,TEXTSEARCH,SEQ,REDO,FUNCTION,PARSER,INSTR,INCRE_CKPT,DBL_WRT,RTO,HEARTBEAT)
(1 row)
```

Controllable modules are identified by uppercase letters, and the special ID  **ALL**  is used for setting all module logs. You can control the output of module logs by setting** logging\_module**  to  **on**  or  **off**. Enable log output for SSL:

```
openGauss=# set logging_module='on(SSL)';
SET
openGauss=# show logging_module;                                                                                                                                              logging_module                                               
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ALL,on(SSL),off(DFS,GUC,SLRU,MEM_CTL,AUTOVAC,CACHE,ADIO,TBLSPC,WLM,EXECUTOR,VEC_EXECUTOR,LLVM,OPT,OPT_REWRITE,OPT_JOIN,OPT_AGG,OPT_SUBPLAN,OPT_SETOP,OPT_SKEW,UDF,COOP_ANALYZE,WLMCP,ACCELERATE,,PLANHINT,SNAPSHOT,XACT,HANDLE,CLOG,EC,REMOTE,CN_RETRY,PLSQL,TEXTSEARCH,SEQ,REDO,FUNCTION,PARSER,INSTR,INCRE_CKPT,DBL_WRT,RTO,HEARTBEAT,COMM_IPC,COMM_PARAM)
(1 row)
```

SSL log output is enabled.

The  **ALL**  identifier can be used to quickly enable or disable log output for all modules.

```
openGauss=# set logging_module='off(ALL)';
SET
openGauss=# show logging_module;                                                                                                                                                logging_module                                              
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ALL,on(),off(DFS,GUC,SLRU,MEM_CTL,AUTOVAC,CACHE,ADIO,SSL,TBLSPC,WLM,EXECUTOR,VEC_EXECUTOR,LLVM,OPT,OPT_REWRITE,OPT_JOIN,OPT_AGG,OPT_SUBPLAN,OPT_SETOP,OPT_SKEW,UDF,COOP_ANALYZE,WLMCP,ACCELERATE,PLANHINT,SNAPSHOT,XACT,HANDLE,CLOG,EC,REMOTE,CN_RETRY,PLSQL,TEXTSEARCH,SEQ,REDO,FUNCTION,PARSER,INSTR,INCRE_CKPT,DBL_WRT,RTO,HEARTBEAT)
(1 row)

openGauss=# set logging_module='on(ALL)';
SET
openGauss=# show logging_module;                                                                                                                                               logging_module                                              
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ALL,on(DFS,GUC,ORC,SLRU,MEM_CTL,AUTOVAC,CACHE,ADIO,SSL,TBLSPC,WLM,EXECUTOR,VEC_EXECUTOR,LLVM,OPT,OPT_REWRITE,OPT_JOIN,OPT_AGG,OPT_SUBPLAN,OPT_SETOP,OPT_SKEW,UDF,COOP_ANALYZE,WLMCP,ACCELERATE,PLANHINT,SNAPSHOT,XACT,HANDLE,CLOG,EC,REMOTE,CN_RETRY,PLSQL,TEXTSEARCH,SEQ,REDO,FUNCTION,PARSER,INSTR,INCRE_CKPT,DBL_WRT,RTO,HEARTBEAT),off()
(1 row)
```

**Dependency**: The value of this parameter depends on the settings of  **log\_min\_messages**.

## opfusion\_debug\_mode<a name="en-us_topic_0283136613_en-us_topic_0237124723_section81513383462"></a>

**Parameter description**: Checks whether simple queries are optimized for debugging. If this parameter is set to  **log**, you can view the specific reasons why queries are not optimized in the database node execution plans.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  enumerated values

-   **off**  indicates that reasons why queries are not optimized are not included.
-   **log**  indicates that reasons why queries are not optimized are included in the database node execution plan.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>To view the reasons why queries are not optimized in the log, set  **opfusion\_debug\_mode**  to  **log**,  **log\_min\_messages**  to  **debug4**, and  **logging\_module**  to  **on\(OPFUSION\)**. Note that a large number of log messages may be generated. Therefore, execute only a small number of jobs during debugging. 

**Default value**:  **off**

## enable\_debug\_vacuum<a name="en-us_topic_0283137548_en-us_topic_0237124743_en-us_topic_0059778871_sf839417816c74a37a3bdb4138d946c55"></a>

**Parameter description**: Specifies whether to allow output of some VACUUM-related logs for problem locating. This parameter is used only by developers. Common users are advised not to use it.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  or  **true**  indicates that generation of ADIO logs is allowed.
-   **off**  or  **false**  indicates that generation of ADIO logs is not allowed.

**Default value**:  **off**
