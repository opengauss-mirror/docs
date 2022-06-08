# Meta-Command Reference<a name="EN-US_TOPIC_0294749032"></a>

This section describes meta-commands provided by  **gsql**  after the openGauss database CLI tool is used to connect to a database. A  **gsql**  meta-command can be anything that you enter in  **gsql**  and begins with an unquoted backslash.

## Precautions<a name="en-us_topic_0059778645_sf4d8bb008138470c9007621cebd2dfde"></a>

-   The format of the  **gsql**  meta-command is a backslash \(\\\) followed by a command verb, and then a parameter. The parameters are separated from the command verb and from each other by any number of whitespace characters.
-   To include whitespace characters into an argument, you must quote them with a single straight quotation mark. To include a single straight quotation mark into such an argument, precede it by a backslash. Anything contained in single quotation marks is furthermore subject to C-like substitutions for \\n \(new line\), \\t \(tab\), \\b \(backspace\), \\r \(carriage return\), \\f \(form feed\), \\digits \(octal\), and \\xdigits \(hexadecimal\).
-   Within a parameter, text enclosed in double quotation marks \(""\) is taken as a command line input to the shell. The output of the command \(with any trailing newline removed\) is taken as the argument value.
-   If an unquoted argument begins with a colon \(:\), the argument is taken as a  **gsql**  variable and the value of the variable is used as the argument value instead.
-   Some commands take an SQL identifier \(such as a table name\) as a parameter. These parameters follow the SQL syntax rules: Unquoted letters are forced to lowercase, while double quotation marks \(""\) protect letters from case conversion and allow incorporation of whitespace into the identifier. Within double quotation marks, paired double quotation marks reduce to a single double quotation mark in the result name. For example,  **FOO"BAR"BAZ**  is interpreted as  **fooBARbaz**, and  **"Aweird""name"**  becomes  **A weird"name**.
-   Parsing for arguments stops when another unquoted backslash is found. This is taken as the beginning of a new meta-command. The special sequence \\\\ \(two backslashes\) marks the end of parameters and continues parsing SQL statements if any. In this way, SQL and  **gsql**  commands can be freely mixed in a line. But in any case, the arguments of a meta-command cannot continue beyond the end of the line.

## Meta-command<a name="en-us_topic_0059778645_s180deee1bdf347639010abe523b324fe"></a>

For details about meta-commands, see  [Table 1](#en-us_topic_0059778645_en-us_topic_0058968158_table23103470),  [Table 2](#en-us_topic_0059778645_en-us_topic_0058968158_table8624338),  [Table 3](#en-us_topic_0059778645_en-us_topic_0058968158_table62130565),  [Table 4](#en-us_topic_0059778645_en-us_topic_0058968158_table44907299),  [Table 6](#en-us_topic_0059778645_en-us_topic_0058968158_table53911699),  [Table 8](#en-us_topic_0059778645_en-us_topic_0058968158_table37189353),  [Table 9](#en-us_topic_0059778645_en-us_topic_0058968158_table32146234),  [Table 10](#en-us_topic_0059778645_en-us_topic_0058968158_table50076468), and  [Table 12](#en-us_topic_0059778645_en-us_topic_0058968158_table55465693).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>_FILE_  mentioned in the following commands indicates a file path. This path can be an absolute path such as  **/home/gauss/file.txt**  or a relative path, such as  **file.txt**. By default, a  **file.txt**  is created in the path where the user runs  **gsql**  commands.

**Table  1**  Common meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table23103470"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row28068480"><th class="cellrowborder" valign="top" width="18.55%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58954407"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58954407"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58954407"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.31%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p10577654"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10577654"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10577654"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"><a name="en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a><a name="en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row51483670"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p9427759"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p9427759"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p9427759"></a>\copyright</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25450984"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25450984"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25450984"></a>Displays <span id="text175512111301"><a name="text175512111301"></a><a name="text175512111301"></a><span id="text155514114301"><a name="text155514114301"></a><a name="text155514114301"></a>openGauss</span></span> version and copyright information.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"><a name="en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a><a name="en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r47448e8d5f694bb8a3cbe2198bb2e5fb"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"><a name="en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a><a name="en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a>\g [FILE] or ;</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"><a name="en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a><a name="en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a>Performs a query operation and sends the result to a file or pipe.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"><a name="en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a><a name="en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row39075813"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p11024304"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11024304"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11024304"></a>\h(\help) [NAME]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15079635"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15079635"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15079635"></a>Provides syntax help on the specified SQL statement.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"><a name="en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a><a name="en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a>If the name is not specified, then <strong id="b842352706141213"><a name="b842352706141213"></a><a name="b842352706141213"></a>gsql</strong> will list all the commands for which syntax help is available. If the name is an asterisk (*), syntax help on all SQL statements is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r0fed1aa4c7aa45179be733524d48d337"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"></a>\parallel [on [num]|off]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"><a name="en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a><a name="en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a>Controls the parallel execution function.</p>
<a name="en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><a name="en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><ul id="en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"><li><strong id="b14471550426169"><a name="b14471550426169"></a><a name="b14471550426169"></a>on</strong>: The switch is enabled and the maximum number of concurrently executed tasks is <strong id="b14458528926169"><a name="b14458528926169"></a><a name="b14458528926169"></a>num</strong>.</li><li><strong id="b842352706115011"><a name="b842352706115011"></a><a name="b842352706115011"></a>off</strong>: This switch is disabled.</li></ul>
<div class="note" id="en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"><a name="en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><a name="en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><a name="en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><ul id="en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"><li>Parallel execution is not allowed in a running transaction and a transaction is not allowed to be started during parallel execution.</li><li>Parallel execution of <strong id="b842352706143226"><a name="b842352706143226"></a><a name="b842352706143226"></a>\d</strong> meta-commands is not allowed.</li><li>If <strong id="b3054559786169"><a name="b3054559786169"></a><a name="b3054559786169"></a>SELECT</strong> statements are run concurrently, customers can accept the problem that the return results are displayed randomly but they cannot accept it if a core dump or process response failure occurs.</li><li><strong id="b842352706143419"><a name="b842352706143419"></a><a name="b842352706143419"></a>SET</strong> statements are not allowed in concurrent tasks because they may cause unexpected results.</li><li>Temporary tables cannot be created in parallel. If temporary tables are required, create them before parallel execution is enabled, and use them only in the parallel execution. Temporary tables cannot be created in parallel execution.</li><li>When <strong id="b12712348456169"><a name="b12712348456169"></a><a name="b12712348456169"></a>\parallel</strong> is executed, <em id="i14551669926169"><a name="i14551669926169"></a><a name="i14551669926169"></a>num</em> independent gsql processes can be connected to the database server.</li><li>The total duration of all <strong id="b842352706103617"><a name="b842352706103617"></a><a name="b842352706103617"></a>\parallel</strong> tasks cannot exceed <strong id="b5474144243219"><a name="b5474144243219"></a><a name="b5474144243219"></a>session_timeout</strong>. Otherwise, the connection may fail during concurrent execution.</li><li>One or more commands following <strong id="b2964654162414"><a name="b2964654162414"></a><a name="b2964654162414"></a>\parallel on</strong> will be executed only after <strong id="b13948190112511"><a name="b13948190112511"></a><a name="b13948190112511"></a>\parallel off</strong> is executed. Therefore, <strong id="b361512511"><a name="b361512511"></a><a name="b361512511"></a>\parallel on</strong> must be followed by <strong id="b184603812253"><a name="b184603812253"></a><a name="b184603812253"></a>\parallel off</strong>. Otherwise, the commands following <strong id="b070091352511"><a name="b070091352511"></a><a name="b070091352511"></a>\parallel on</strong> cannot be executed.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"><a name="en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a><a name="en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a>The default value of <em id="i842352697113238"><a name="i842352697113238"></a><a name="i842352697113238"></a>num</em> is <strong id="b84235270614356"><a name="b84235270614356"></a><a name="b84235270614356"></a>1024</strong>.</p>
<div class="notice" id="en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"><a name="en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><a name="en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"></a><ul id="en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"><li>The maximum number of connections allowed by the server is determined based on <strong id="b842352706155156"><a name="b842352706155156"></a><a name="b842352706155156"></a>max_connection</strong> and the number of current connections.</li><li>Set the value of <em id="i842352697113213"><a name="i842352697113213"></a><a name="i842352697113213"></a>num</em> based on the allowed number of connections.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50763268"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18184039"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18184039"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18184039"></a>\q</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p56600007"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56600007"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56600007"></a>Exits the gsql program. This command is executed only when a script terminates in a script file.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Query buffer meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table8624338"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row60218325"><th class="cellrowborder" valign="top" width="36.25%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p45846132"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45846132"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45846132"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="63.74999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22549200"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22549200"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22549200"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row14545872"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p37364956"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37364956"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37364956"></a>\e  [FILE]   [LINE]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6662621"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6662621"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6662621"></a>Uses an external editor to edit the query buffer or file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row59963597"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25213208"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25213208"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25213208"></a>\ef [FUNCNAME [LINE]]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p29003980"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29003980"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29003980"></a>Edits the function definition using an external editor. If <strong id="b8423527061613"><a name="b8423527061613"></a><a name="b8423527061613"></a>LINE</strong> is specified, the cursor will point to the specified line of the function body.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row59709228"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4609295"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4609295"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4609295"></a>\p</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p57959300"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p57959300"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p57959300"></a>Prints the current query buffer to the standard output.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row4733289"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47852110"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47852110"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47852110"></a>\r</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p67095562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p67095562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p67095562"></a>Resets or clears the query buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54688265"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p564458"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p564458"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p564458"></a>\w FILE</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17110660"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17110660"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17110660"></a>Outputs the current query buffer to a file.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Input/Output commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table62130565"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row27656514"><th class="cellrowborder" valign="top" width="43%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25585200"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25585200"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25585200"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59135330"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59135330"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59135330"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row25232449"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53653520"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53653520"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53653520"></a>\copy { table [ ( column_list ) ] | ( query ) } { from | to } { filename | stdin | stdout | pstdin | pstdout } [ with ] [ binary ] [ oids ] [ delimiter [ as ] 'character' ] [ null [ as ] 'string' ] [ csv [ header ] [ quote [ as ] 'character' ] [ escape [ as ] 'character' ] [ force quote column_list | * ] [ force not null column_list ] ]  [parallel integer]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="p1671244475815"><a name="p1671244475815"></a><a name="p1671244475815"></a>After logging in to the database on any <strong id="b386522624910"><a name="b386522624910"></a><a name="b386522624910"></a>gsql</strong> client, you can import and export data. This is an operation of running the <strong id="b386652617491"><a name="b386652617491"></a><a name="b386652617491"></a>SQL COPY</strong> command, but not the server that reads or writes data to a specified file. Instead, data is transferred between the server and the local file system. In this way, local user permissions instead of server permissions are required for file access, and the user permissions do not need to be initialized.</p>
<div class="note" id="note1924115273417"><a name="note1924115273417"></a><a name="note1924115273417"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p54222394915"><a name="p54222394915"></a><a name="p54222394915"></a><strong id="b1118215371541"><a name="b1118215371541"></a><a name="b1118215371541"></a>\COPY</strong> is applicable only to small-batch data import in a good format. It does not preprocess invalid characters and does not have the error tolerance capability. GDS or <strong id="b2638590856169"><a name="b2638590856169"></a><a name="b2638590856169"></a>COPY</strong> is preferred for data import.</p>
<p id="p156755320558"><a name="p156755320558"></a><a name="p156755320558"></a>\COPY specifies the number of clients to import data to implement parallel import of data files. Currently, the value ranges from 1 to 8.</p>
<p id="p65691446135618"><a name="p65691446135618"></a><a name="p65691446135618"></a>The parallel import using \COPY has the following constraints: Parallel import of temporary tables is not supported. Parallel import within transactions is not supported. Parallel import of binary files is not supported. Parallel import of data encrypted using AES-128 is not supported. The COPY option contains EOL. In these cases, even if the parallel parameter is specified, a non-parallel process is performed.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row67017286"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59691067"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59691067"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59691067"></a>\echo   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p3138273"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3138273"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3138273"></a>Writes character strings to the standard output.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row28244462"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6100063"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6100063"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6100063"></a>\i FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17880725"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17880725"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17880725"></a>Reads content from <em id="i842352697143627"><a name="i842352697143627"></a><a name="i842352697143627"></a>FILE</em> and uses them as the input for a query.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row17761542"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p29398782"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29398782"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29398782"></a>\i+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p32491118"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32491118"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32491118"></a>Runs commands in an encrypted file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row23984611"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p63705339"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63705339"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63705339"></a>\ir FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59858848"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59858848"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59858848"></a>Similar to <strong id="b842352706165351"><a name="b842352706165351"></a><a name="b842352706165351"></a>\i</strong>, but resolves relative path names differently.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row1858722"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16338821"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16338821"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16338821"></a>\ir+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48376104"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48376104"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48376104"></a>Similar to <strong id="b842352706143838"><a name="b842352706143838"></a><a name="b842352706143838"></a>\i+</strong>, but resolves relative path names differently.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row32731753"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p34026319"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34026319"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34026319"></a>\o   [FILE]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4668491"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4668491"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4668491"></a>Saves all query results to a file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row42016419"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47886808"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47886808"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47886808"></a>\qecho   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53626262"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53626262"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53626262"></a>Writes character strings to the query output flow.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In  [Table 4](#en-us_topic_0059778645_en-us_topic_0058968158_table44907299),  **S**  indicates displaying the system object and  **+**  indicates displaying the additional description information of the object.  [PATTERN](#section363084334814)  specifies the name of an object to be displayed.

**Table  4**  Information display meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table44907299"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row64036265"><th class="cellrowborder" valign="top" width="13%" id="mcps1.2.5.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p21471471"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p21471471"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p21471471"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="37%" id="mcps1.2.5.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p761538"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p761538"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p761538"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"><a name="en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a><a name="en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1357773513104"><a name="p1357773513104"></a><a name="p1357773513104"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row61175475"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18824504"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18824504"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18824504"></a>\d[S+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p35202815"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35202815"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35202815"></a>Lists all tables, views, and sequences of all schemas in the search_path. When objects with the same name exist in different schemas in <strong id="b21086465386169"><a name="b21086465386169"></a><a name="b21086465386169"></a>search_path</strong>, only the object in the schema that ranks first in <strong id="b8597823946169"><a name="b8597823946169"></a><a name="b8597823946169"></a>search_path </strong>is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"><a name="en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a><a name="en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p195771735131011"><a name="p195771735131011"></a><a name="p195771735131011"></a>Lists all tables, views, and sequences of all schemas in the search_path.</p>
<a name="screen870119314254"></a><a name="screen870119314254"></a><pre class="screen" codetype="Sql" id="screen870119314254">openGauss=# \d</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row43094998"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1033944"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1033944"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1033944"></a>\d[S+]     NAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16640626"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16640626"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16640626"></a>Lists the structure of specified tables, views, and indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p357713531015"><a name="p357713531015"></a><a name="p357713531015"></a>Lists the structure of table <strong id="b448173036169"><a name="b448173036169"></a><a name="b448173036169"></a>a</strong>.</p>
<a name="screen14668143818316"></a><a name="screen14668143818316"></a><pre class="screen" codetype="Sql" id="screen14668143818316">openGauss=# \dtable+ a</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_rc676f2378e804a7db9ffa0f108079797"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"><a name="en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a><a name="en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a>\d+      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"><a name="en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a><a name="en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a>Lists all tables, views, and indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"><a name="en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a><a name="en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a>If <strong id="b17577930926169"><a name="b17577930926169"></a><a name="b17577930926169"></a>PATTERN</strong> is specified, only tables, views, and indexes whose names match <strong id="b7444100506169"><a name="b7444100506169"></a><a name="b7444100506169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15577735191011"><a name="p15577735191011"></a><a name="p15577735191011"></a>Lists all tables, views, and indexes whose names start with <strong id="b3567671866169"><a name="b3567671866169"></a><a name="b3567671866169"></a>f</strong>.</p>
<a name="screen7795101223810"></a><a name="screen7795101223810"></a><pre class="screen" codetype="Sql" id="screen7795101223810">openGauss=# \d+ f*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row17021576"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36570438"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36570438"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36570438"></a>\da[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1108737"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1108737"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1108737"></a>Lists all available aggregate functions, together with the data type they perform operations on and the return value types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"><a name="en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a><a name="en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a>If <strong id="b84235270620130"><a name="b84235270620130"></a><a name="b84235270620130"></a>PATTERN</strong> is specified, only aggregate functions whose names match <strong id="b205338262292434"><a name="b205338262292434"></a><a name="b205338262292434"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p177201129103815"><a name="p177201129103815"></a><a name="p177201129103815"></a>Lists all available aggregate functions whose names start with <strong id="b11749014826169"><a name="b11749014826169"></a><a name="b11749014826169"></a>f</strong>, together with their return value types and the data types.</p>
<a name="screen127242029173818"></a><a name="screen127242029173818"></a><pre class="screen" codetype="Sql" id="screen127242029173818">openGauss=# \da f*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row33501381"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p29257302"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29257302"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29257302"></a>\db[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p64560085"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p64560085"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p64560085"></a>Lists all available tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"><a name="en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a><a name="en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a>If <strong id="b10944104766169"><a name="b10944104766169"></a><a name="b10944104766169"></a>PATTERN</strong> is specified, only tablespaces whose names match <strong id="b5727589136169"><a name="b5727589136169"></a><a name="b5727589136169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15577535101019"><a name="p15577535101019"></a><a name="p15577535101019"></a>Lists all available tablespaces whose names start with <strong id="b84235270616458"><a name="b84235270616458"></a><a name="b84235270616458"></a>p</strong>.</p>
<a name="screen39531436154513"></a><a name="screen39531436154513"></a><pre class="screen" codetype="Sql" id="screen39531436154513">openGauss=# \db p*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row22955407"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47448677"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47448677"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47448677"></a>\dc[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p66270656"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p66270656"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p66270656"></a>Lists all available conversions between character-set encodings.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"><a name="en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a><a name="en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a>If <strong id="b9685893766169"><a name="b9685893766169"></a><a name="b9685893766169"></a>PATTERN</strong> is specified, only conversions whose names match <strong id="b12398577426169"><a name="b12398577426169"></a><a name="b12398577426169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15577143512103"><a name="p15577143512103"></a><a name="p15577143512103"></a>Lists all available conversions between character-set encodings.</p>
<a name="screen10277181254816"></a><a name="screen10277181254816"></a><pre class="screen" codetype="Sql" id="screen10277181254816">openGauss=# \dc *</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row9670257"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p45093353"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45093353"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45093353"></a>\dC[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p28682990"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28682990"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28682990"></a>Lists all available type conversions.</p>
<p id="p438888164313"><a name="p438888164313"></a><a name="p438888164313"></a>PATTERN must be the actual type name and cannot be an alias.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"><a name="en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a><a name="en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a>If <strong id="b1775961543"><a name="b1775961543"></a><a name="b1775961543"></a>PATTERN</strong> is specified, only conversions whose names match <strong id="b1174305546"><a name="b1174305546"></a><a name="b1174305546"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15772356108"><a name="p15772356108"></a><a name="p15772356108"></a>Lists all type conversions whose patten names start with <strong id="b151119414592"><a name="b151119414592"></a><a name="b151119414592"></a>c</strong>.</p>
<a name="screen209676130533"></a><a name="screen209676130533"></a><pre class="screen" codetype="Sql" id="screen209676130533">openGauss=# \dC c*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row22085710"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44112084"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44112084"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44112084"></a>\dd[S]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16309022"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16309022"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16309022"></a>Lists descriptions about objects matching <strong id="b842352706114618"><a name="b842352706114618"></a><a name="b842352706114618"></a>PATTERN</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"><a name="en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a><a name="en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a>If <strong id="b842352706201611"><a name="b842352706201611"></a><a name="b842352706201611"></a>PATTERN</strong> is not specified, all visible objects are displayed. The objects include aggregations, functions, operators, types, relations (tables, views, indexes, sequences, and large objects), and rules.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p165775358102"><a name="p165775358102"></a><a name="p165775358102"></a>Lists all visible objects.</p>
<a name="screen853411371558"></a><a name="screen853411371558"></a><pre class="screen" codetype="Sql" id="screen853411371558">openGauss=# \dd</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row2818067"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26936868"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26936868"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26936868"></a>\ddp       [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p12102568"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p12102568"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p12102568"></a>Lists all default permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"><a name="en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a><a name="en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a>If <strong id="b17541197116169"><a name="b17541197116169"></a><a name="b17541197116169"></a>PATTERN</strong> is specified, only permissions whose names match <strong id="b2793432766169"><a name="b2793432766169"></a><a name="b2793432766169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2013319535553"><a name="p2013319535553"></a><a name="p2013319535553"></a>Lists all default permissions.</p>
<a name="screen611671118568"></a><a name="screen611671118568"></a><pre class="screen" codetype="Sql" id="screen611671118568">openGauss=# \ddp</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row32410867"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p65613749"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65613749"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65613749"></a>\dD[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22994959"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22994959"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22994959"></a>Lists all available domains.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"><a name="en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a><a name="en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a>If <strong id="b842352706202218"><a name="b842352706202218"></a><a name="b842352706202218"></a>PATTERN</strong> is specified, only domains whose names match <strong id="b1966085158164611"><a name="b1966085158164611"></a><a name="b1966085158164611"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p757763512103"><a name="p757763512103"></a><a name="p757763512103"></a>Lists all available domains.</p>
<a name="screen470324716013"></a><a name="screen470324716013"></a><pre class="screen" codetype="Sql" id="screen470324716013">openGauss=# \dD</pre>
</td>
</tr>
<tr id="row15593174194714"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="p85931944473"><a name="p85931944473"></a><a name="p85931944473"></a>\ded[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p95931411475"><a name="p95931411475"></a><a name="p95931411475"></a>Lists all Data Source objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p05931043472"><a name="p05931043472"></a><a name="p05931043472"></a>If <strong id="b8816994456169"><a name="b8816994456169"></a><a name="b8816994456169"></a>PATTERN</strong> is specified, only objects whose names match <strong id="b1049244176169"><a name="b1049244176169"></a><a name="b1049244176169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p457743571018"><a name="p457743571018"></a><a name="p457743571018"></a>Lists all Data Source objects.</p>
<a name="screen64435207113"></a><a name="screen64435207113"></a><pre class="screen" codetype="Sql" id="screen64435207113">openGauss=# \ded</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row29632532"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51424905"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51424905"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51424905"></a>\det[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4667762"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4667762"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4667762"></a>Lists all external tables.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"><a name="en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a><a name="en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a>If <strong id="b2075417156169"><a name="b2075417156169"></a><a name="b2075417156169"></a>PATTERN</strong> is specified, only tables whose names match <strong id="b5833961856169"><a name="b5833961856169"></a><a name="b5833961856169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1157773515101"><a name="p1157773515101"></a><a name="p1157773515101"></a>Lists all external tables.</p>
<a name="screen1187219441618"></a><a name="screen1187219441618"></a><pre class="screen" codetype="Sql" id="screen1187219441618">openGauss=# \det</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row17017920"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36274241"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36274241"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36274241"></a>\des[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p52532403"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52532403"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52532403"></a>Lists all external servers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"><a name="en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a><a name="en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a>If <strong id="b6768230866169"><a name="b6768230866169"></a><a name="b6768230866169"></a>PATTERN</strong> is specified, only servers whose names match <strong id="b11134443006169"><a name="b11134443006169"></a><a name="b11134443006169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14577163520106"><a name="p14577163520106"></a><a name="p14577163520106"></a>Lists all external servers.</p>
<a name="screen471819181217"></a><a name="screen471819181217"></a><pre class="screen" codetype="Sql" id="screen471819181217">openGauss=# \des</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row7470634"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1141657"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1141657"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1141657"></a>\deu[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25365425"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25365425"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25365425"></a>Lists all user mappings.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"><a name="en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a><a name="en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a>If <strong id="b10006405496169"><a name="b10006405496169"></a><a name="b10006405496169"></a>PATTERN</strong> is specified, only information whose name matches <strong id="b5940208456169"><a name="b5940208456169"></a><a name="b5940208456169"></a>PATTERN</strong> is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2577153501020"><a name="p2577153501020"></a><a name="p2577153501020"></a>Lists all user mappings.</p>
<a name="screen969244719217"></a><a name="screen969244719217"></a><pre class="screen" codetype="Sql" id="screen969244719217">openGauss=#\deu</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row57629814"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p37503373"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37503373"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37503373"></a>\dew[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59707645"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59707645"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59707645"></a>Lists all encapsulated external data.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"><a name="en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a><a name="en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a>If <strong id="b842352706202332"><a name="b842352706202332"></a><a name="b842352706202332"></a>PATTERN</strong> is specified, only data whose name matches <strong id="b1071194613164818"><a name="b1071194613164818"></a><a name="b1071194613164818"></a>PATTERN</strong> is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p957710356104"><a name="p957710356104"></a><a name="p957710356104"></a>Lists all encapsulated external data.</p>
<a name="screen1325519129311"></a><a name="screen1325519129311"></a><pre class="screen" codetype="Sql" id="screen1325519129311">openGauss=# \dew</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_r77ed835b6ed840d7a40a9e96afe3ba8c"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"></a>\df[antw][S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"><a name="en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a><a name="en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a>Lists all available functions, together with their parameters and return types. <strong id="b6259114806169"><a name="b6259114806169"></a><a name="b6259114806169"></a>a</strong> indicates an aggregate function, <strong id="b4481885086169"><a name="b4481885086169"></a><a name="b4481885086169"></a>n</strong> indicates a common function, <strong id="b14287503366169"><a name="b14287503366169"></a><a name="b14287503366169"></a>t</strong> indicates a trigger, and <strong id="b3261901866169"><a name="b3261901866169"></a><a name="b3261901866169"></a>w</strong> indicates a window function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"><a name="en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a><a name="en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a>If <strong id="b842352706202359"><a name="b842352706202359"></a><a name="b842352706202359"></a>PATTERN</strong> is specified, only functions whose names match <strong id="b716985331164853"><a name="b716985331164853"></a><a name="b716985331164853"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p857783511019"><a name="p857783511019"></a><a name="p857783511019"></a>Lists all available functions, together with their parameters and return types.</p>
<a name="screen11242350437"></a><a name="screen11242350437"></a><pre class="screen" codetype="Sql" id="screen11242350437">openGauss=# \df</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row16530091"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p63869018"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63869018"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63869018"></a>\dF[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6007965"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007965"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007965"></a>Lists all text search configuration information.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"><a name="en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a><a name="en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a>If <strong id="b16233128116169"><a name="b16233128116169"></a><a name="b16233128116169"></a>PATTERN</strong> is specified, only configurations whose names match <strong id="b4516287826169"><a name="b4516287826169"></a><a name="b4516287826169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1577183531020"><a name="p1577183531020"></a><a name="p1577183531020"></a>Lists all text search configuration information.</p>
<a name="screen46672584514"></a><a name="screen46672584514"></a><pre class="screen" codetype="Sql" id="screen46672584514">openGauss=# \dF+</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row38166311"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4463500"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4463500"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4463500"></a>\dFd[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25999205"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25999205"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25999205"></a>Lists all text search dictionaries.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"><a name="en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a><a name="en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a>If <strong id="b842352706202450"><a name="b842352706202450"></a><a name="b842352706202450"></a>PATTERN</strong> is specified, only dictionaries whose names match <strong id="b587957936164917"><a name="b587957936164917"></a><a name="b587957936164917"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p185326114612"><a name="p185326114612"></a><a name="p185326114612"></a>Lists all text search dictionaries.</p>
<a name="screen29572448619"></a><a name="screen29572448619"></a><pre class="screen" codetype="Sql" id="screen29572448619">openGauss=# \dFd</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row46612018"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17477084"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17477084"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17477084"></a>\dFp[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6357682"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6357682"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6357682"></a>Lists all text search analyzers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"><a name="en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a><a name="en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a>If <strong id="b84235270620252"><a name="b84235270620252"></a><a name="b84235270620252"></a>PATTERN</strong> is specified, only analyzers whose names match <strong id="b2005038815164933"><a name="b2005038815164933"></a><a name="b2005038815164933"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1457719355104"><a name="p1457719355104"></a><a name="p1457719355104"></a>Lists all text search analyzers.</p>
<a name="screen411214129251"></a><a name="screen411214129251"></a><pre class="screen" codetype="Sql" id="screen411214129251">openGauss=# \dFp</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row16086458"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27934725"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27934725"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27934725"></a>\dFt[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48120228"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48120228"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48120228"></a>Lists all text search templates.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"><a name="en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a><a name="en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a>If <strong id="b2743002186169"><a name="b2743002186169"></a><a name="b2743002186169"></a>PATTERN</strong> is specified, only templates whose names match <strong id="b16526355606169"><a name="b16526355606169"></a><a name="b16526355606169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p11577135161010"><a name="p11577135161010"></a><a name="p11577135161010"></a>Lists all text search templates.</p>
<a name="screen167381037132518"></a><a name="screen167381037132518"></a><pre class="screen" codetype="Sql" id="screen167381037132518">openGauss=# \dFt</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50056048"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p28358554"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28358554"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28358554"></a>\dg[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25942514"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25942514"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25942514"></a>Lists all database roles.</p>
<div class="note" id="en-us_topic_0059778645_en-us_topic_0058968158_note44053031"><a name="en-us_topic_0059778645_en-us_topic_0058968158_note44053031"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_note44053031"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7501312"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7501312"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7501312"></a>Since the concepts of "users" and "groups" have been unified into "roles", this command is now equivalent to <strong id="b842352706202557"><a name="b842352706202557"></a><a name="b842352706202557"></a>\du</strong>. Both commands are retained to ensure compatibility with earlier versions.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"><a name="en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a><a name="en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a>If <strong id="b842352706202632"><a name="b842352706202632"></a><a name="b842352706202632"></a>PATTERN</strong> is specified, only roles whose names match <strong id="b291679219165017"><a name="b291679219165017"></a><a name="b291679219165017"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p857783591012"><a name="p857783591012"></a><a name="p857783591012"></a>Lists all database roles whose names start with <strong id="b91311041137"><a name="b91311041137"></a><a name="b91311041137"></a>j</strong> and end with <strong id="b1413694739"><a name="b1413694739"></a><a name="b1413694739"></a>e</strong>.</p>
<a name="screen1551485112618"></a><a name="screen1551485112618"></a><pre class="screen" codetype="Sql" id="screen1551485112618">openGauss=# \dg j?e</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row11462347"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p28670734"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28670734"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28670734"></a>\dl</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7129116"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7129116"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7129116"></a>This is an alias for <strong id="b842352706202656"><a name="b842352706202656"></a><a name="b842352706202656"></a>\lo_list</strong>, which shows a list of large objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"><a name="en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"></a><a name="en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p9577235131013"><a name="p9577235131013"></a><a name="p9577235131013"></a>Lists all large objects.</p>
<a name="screen1850163162713"></a><a name="screen1850163162713"></a><pre class="screen" codetype="Sql" id="screen1850163162713">openGauss=# \dl</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row37929561"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48869151"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48869151"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48869151"></a>\dL[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p452647"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p452647"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p452647"></a>Lists all available program languages.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"><a name="en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a><a name="en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a>If <strong id="b2983835446169"><a name="b2983835446169"></a><a name="b2983835446169"></a>PATTERN</strong> is specified, only languages whose names match <strong id="b4865169996169"><a name="b4865169996169"></a><a name="b4865169996169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1457723514101"><a name="p1457723514101"></a><a name="p1457723514101"></a>Lists all available program languages.</p>
<a name="screen9767751132710"></a><a name="screen9767751132710"></a><pre class="screen" codetype="Sql" id="screen9767751132710">openGauss=# \dL</pre>
</td>
</tr>
<tr id="row2059818401227"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="p45994409215"><a name="p45994409215"></a><a name="p45994409215"></a>\dm[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p205995401029"><a name="p205995401029"></a><a name="p205995401029"></a>Lists materialized views.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1959994015220"><a name="p1959994015220"></a><a name="p1959994015220"></a>If <strong id="b1041014893510"><a name="b1041014893510"></a><a name="b1041014893510"></a>PATTERN</strong> is specified, only materialized views whose names match <strong id="b1741010487352"><a name="b1741010487352"></a><a name="b1741010487352"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p125993404219"><a name="p125993404219"></a><a name="p125993404219"></a>Lists materialized views.</p>
<a name="screen185528418111"></a><a name="screen185528418111"></a><pre class="screen" codetype="Sql" id="screen185528418111">openGauss=# \dm</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5597993"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p50784313"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50784313"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50784313"></a>\dn[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p19888706"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19888706"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19888706"></a>Lists all schemas (namespace). If <strong id="b1310913462598"><a name="b1310913462598"></a><a name="b1310913462598"></a>+</strong> is added to the command, the permission and description of each schema are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"><a name="en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a><a name="en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a>If <strong id="b842352706202932"><a name="b842352706202932"></a><a name="b842352706202932"></a>PATTERN</strong> is specified, only schemas whose names match the pattern are shown. By default, only schemas you created are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p9578133541012"><a name="p9578133541012"></a><a name="p9578133541012"></a>Lists information about all schemas whose names start with <strong id="b842352706164616"><a name="b842352706164616"></a><a name="b842352706164616"></a>d</strong>.</p>
<a name="screen16471162442818"></a><a name="screen16471162442818"></a><pre class="screen" codetype="Sql" id="screen16471162442818">openGauss=# \dn+ d*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row40307610"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p43691002"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43691002"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43691002"></a>\do[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22510532"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22510532"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22510532"></a>Lists available operators with their operand and return types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"><a name="en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a><a name="en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a>If <strong id="b842352706203031"><a name="b842352706203031"></a><a name="b842352706203031"></a>PATTERN</strong> is specified, only operators whose names match <strong id="b279880693165129"><a name="b279880693165129"></a><a name="b279880693165129"></a>PATTERN</strong> are displayed. By default, only the operators created by the user are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1810350172816"><a name="p1810350172816"></a><a name="p1810350172816"></a>Lists available operators with their operand and return types.</p>
<a name="screen19243171018299"></a><a name="screen19243171018299"></a><pre class="screen" codetype="Sql" id="screen19243171018299">openGauss=# \do</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row13580902"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26311271"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26311271"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26311271"></a>\dO[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p503566"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503566"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503566"></a>Lists collation rules.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"><a name="en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a><a name="en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a>If <strong id="b23103960"><a name="b23103960"></a><a name="b23103960"></a>PATTERN</strong> is specified, only rules whose names match <strong id="b1274997721165144"><a name="b1274997721165144"></a><a name="b1274997721165144"></a>PATTERN</strong> are displayed. By default, only user-created rules are shown.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p957863531018"><a name="p957863531018"></a><a name="p957863531018"></a>Lists collation rules.</p>
<a name="screen484512358294"></a><a name="screen484512358294"></a><pre class="screen" codetype="Sql" id="screen484512358294">openGauss=# \dO</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row43124328"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27963622"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27963622"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27963622"></a>\dp [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48039187"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48039187"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48039187"></a>Lists tables, views, and related permissions.</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"></a>The following result about <strong id="b842352706104415"><a name="b842352706104415"></a><a name="b842352706104415"></a>\dp</strong> is displayed:</p>
<pre class="screen" id="en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"><a name="en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a><a name="en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a>rolename=xxxx/yyyy  --Assigns permissions to a role.</pre>
<pre class="screen" id="en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"><a name="en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a><a name="en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a>=xxxx/yyyy --Assigns permissions to public.</pre>
<p id="en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"><a name="en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><a name="en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><em id="i842352697203342"><a name="i842352697203342"></a><a name="i842352697203342"></a>xxxx</em> indicates the assigned permissions, and <em id="i842352697203345"><a name="i842352697203345"></a><a name="i842352697203345"></a>yyyy</em> indicates the roles with the assigned permissions. For details about permission descriptions, see <a href="#en-us_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e">Table 5</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"><a name="en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a><a name="en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a>If <strong id="b842352706203531"><a name="b842352706203531"></a><a name="b842352706203531"></a>PATTERN</strong> is specified, only tables and views whose names match the pattern are shown.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p13219183511301"><a name="p13219183511301"></a><a name="p13219183511301"></a>Lists tables, views, and related permissions.</p>
<a name="screen1582855623016"></a><a name="screen1582855623016"></a><pre class="screen" codetype="Sql" id="screen1582855623016">openGauss=# \dp</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54494628"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51988786"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51988786"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51988786"></a>\drds [PATTERN1 [PATTERN2]]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p50342148"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50342148"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50342148"></a>Lists all parameters that have been modified. These settings can be for roles, for databases, or for both. <strong id="b842352706164754"><a name="b842352706164754"></a><a name="b842352706164754"></a>PATTERN1</strong> and <strong id="b842352706164756"><a name="b842352706164756"></a><a name="b842352706164756"></a>PATTERN2</strong> indicate a role pattern and a database pattern, respectively.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"><a name="en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a><a name="en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a>If <strong id="b1774149938"><a name="b1774149938"></a><a name="b1774149938"></a>PATTERN</strong> is specified, only collations rules whose names match <strong id="b1485527292"><a name="b1485527292"></a><a name="b1485527292"></a>PATTERN</strong> are displayed. If the default value is used or <strong id="b842352706164811"><a name="b842352706164811"></a><a name="b842352706164811"></a>*</strong> is specified, all settings are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p16578103521013"><a name="p16578103521013"></a><a name="p16578103521013"></a>Lists all modified configuration parameters of the <strong id="b842352706165020"><a name="b842352706165020"></a><a name="b842352706165020"></a>postgres</strong> database.</p>
<a name="screen1059193118474"></a><a name="screen1059193118474"></a><pre class="screen" codetype="Sql" id="screen1059193118474">openGauss=# \drds *openGausss</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row36326509"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p33900150"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33900150"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33900150"></a>\dT[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18359055"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18359055"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18359055"></a>Lists all data types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"><a name="en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a><a name="en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a>If <strong id="b10744668546169"><a name="b10744668546169"></a><a name="b10744668546169"></a>PATTERN</strong> is specified, only types whose names match <strong id="b5646031866169"><a name="b5646031866169"></a><a name="b5646031866169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p115789354101"><a name="p115789354101"></a><a name="p115789354101"></a>Lists all data types.</p>
<a name="screen20987133092411"></a><a name="screen20987133092411"></a><pre class="screen" codetype="Sql" id="screen20987133092411">openGauss=# \dT</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row18143655"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6205284"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6205284"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6205284"></a>\du[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7550250"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7550250"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7550250"></a>Lists all database roles.</p>
<div class="note" id="en-us_topic_0059778645_en-us_topic_0058968158_note843393"><a name="en-us_topic_0059778645_en-us_topic_0058968158_note843393"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_note843393"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p23208538"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23208538"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23208538"></a>Since the concepts of "users" and "groups" have been unified into "roles", this command is now equivalent to <strong id="b842352706164446"><a name="b842352706164446"></a><a name="b842352706164446"></a>\dg</strong>. Both commands are retained to ensure compatibility with earlier versions.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"><a name="en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a><a name="en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a>If <strong id="b842352706203652"><a name="b842352706203652"></a><a name="b842352706203652"></a>PATTERN</strong> is specified, only roles whose names match <strong id="b140499755016547"><a name="b140499755016547"></a><a name="b140499755016547"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p13578123512103"><a name="p13578123512103"></a><a name="p13578123512103"></a>Lists all database roles.</p>
<a name="screen5126254102311"></a><a name="screen5126254102311"></a><pre class="screen" codetype="Sql" id="screen5126254102311">openGauss=# \du</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row2209018"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44712736"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44712736"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44712736"></a>\dE[S+]   [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p15625431"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15625431"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15625431"></a>\di[S+]    [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p44539665"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44539665"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44539665"></a>\ds[S+]   [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p41206969"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p41206969"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p41206969"></a>\dt[S+]    [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p3741605"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3741605"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3741605"></a>\dv[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p52895139"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52895139"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52895139"></a>In this group of commands, the letters E, i, s, t, and v stand for foreign table, index, sequence, table, and view, respectively. You can specify any or a combination of these letters sequenced in any order to obtain an object list. For example, <strong id="b842352706204223"><a name="b842352706204223"></a><a name="b842352706204223"></a>\dit</strong> lists all indexes and tables. If + is added to the end of a command name, the physical size and related description of each object are also listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"><a name="en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a><a name="en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a>If <strong id="b1139525748"><a name="b1139525748"></a><a name="b1139525748"></a>PATTERN</strong> is specified, only objects whose names match <strong id="b1951416384"><a name="b1951416384"></a><a name="b1951416384"></a>PATTERN</strong> are displayed. By default, only objects you created are displayed. You can specify <strong id="b84235270617187"><a name="b84235270617187"></a><a name="b84235270617187"></a>PATTERN</strong> or <strong id="b842352706171810"><a name="b842352706171810"></a><a name="b842352706171810"></a>S</strong> to view other system objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p145781358102"><a name="p145781358102"></a><a name="p145781358102"></a>Lists all indexes and views.</p>
<a name="screen1078582519238"></a><a name="screen1078582519238"></a><pre class="screen" codetype="Sql" id="screen1078582519238">openGauss=# \div</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5873694"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6007243"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007243"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007243"></a>\dx[+]      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16824664"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16824664"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16824664"></a>Lists installed extensions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"></a>If <strong id="b842352706204235"><a name="b842352706204235"></a><a name="b842352706204235"></a>PATTERN</strong> is specified, only extensions whose names match <strong id="b212803897717202"><a name="b212803897717202"></a><a name="b212803897717202"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1557883591019"><a name="p1557883591019"></a><a name="p1557883591019"></a>Lists installed extensions.</p>
<a name="screen1453833842112"></a><a name="screen1453833842112"></a><pre class="screen" codetype="Sql" id="screen1453833842112">openGauss=# \dx</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row61949334"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51840186"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51840186"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51840186"></a>\l[+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p42178773"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p42178773"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p42178773"></a>Lists the names, owners, character set encodings, and permissions of all the databases in the server.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"><a name="en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a><a name="en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p155789357107"><a name="p155789357107"></a><a name="p155789357107"></a>List the names, owners, character set encodings, and permissions of all the databases in the server.</p>
<a name="screen1802747162019"></a><a name="screen1802747162019"></a><pre class="screen" codetype="Sql" id="screen1802747162019">openGauss=# \l</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row12504781"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6254336"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6254336"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6254336"></a>\sf[+]   FUNCNAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36839216"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36839216"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36839216"></a>Displays the definition of a function.</p>
<div class="note" id="note122310174019"><a name="note122310174019"></a><a name="note122310174019"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p162891010406"><a name="p162891010406"></a><a name="p162891010406"></a>If the function name contains parentheses, enclose the function name with double quotation marks and add the parameter type list following the double quotation marks. Also enclose the list with parentheses.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"><a name="en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a><a name="en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p0578183514109"><a name="p0578183514109"></a><a name="p0578183514109"></a>Assume a function <strong id="b17661152162418"><a name="b17661152162418"></a><a name="b17661152162418"></a>function_a</strong> and a function <strong id="b1890320742417"><a name="b1890320742417"></a><a name="b1890320742417"></a>func()name</strong>. This parameter will be as follows:</p>
<a name="screen1786051111619"></a><a name="screen1786051111619"></a><pre class="screen" codetype="Sql" id="screen1786051111619">openGauss=# \sf function_a
openGauss=# \sf 
"func()name"(argtype1, argtype2)</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_r04c5af41c3d846de94e2fb3e143e7c34"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"><a name="en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a><a name="en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a>\z      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p1183133819816"><a name="p1183133819816"></a><a name="p1183133819816"></a>Lists all tables, views, and sequences in the database and their access permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"><a name="en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a><a name="en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a>If a pattern is given, it is a regular expression, and only matched tables, views, and sequences are shown.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1357863513102"><a name="p1357863513102"></a><a name="p1357863513102"></a>Lists all tables, views, and sequences in the database and their access permissions.</p>
<a name="screen566811281995"></a><a name="screen566811281995"></a><pre class="screen" codetype="Sql" id="screen566811281995">openGauss=# \z</pre>
</td>
</tr>
</tbody>
</table>

**Table  5**  Description of permissions

<a name="en-us_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_r6362dc74b9f541a69e0d66b9cf284ed9"><th class="cellrowborder" valign="top" width="23.78%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"><a name="en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a><a name="en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="76.22%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"><a name="en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a><a name="en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_r388d73fb38384cdfb32ae9d850dd3401"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"><a name="en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a><a name="en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a>r</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"><a name="en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a><a name="en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a><strong id="b1372519454247"><a name="b1372519454247"></a><a name="b1372519454247"></a>SELECT</strong>: allows users to read data from specified tables and views.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r33152e6936d14a5fb3737d02dde40f04"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"><a name="en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a><a name="en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a>w</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"><a name="en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a><a name="en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a><strong id="b4639154742419"><a name="b4639154742419"></a><a name="b4639154742419"></a>UPDATE</strong>: allows users to update columns for specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r54e23ae96ce24fa3aede38cbe8eb043d"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"><a name="en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a><a name="en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a>a</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"><a name="en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a><a name="en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a><strong id="b26299495245"><a name="b26299495245"></a><a name="b26299495245"></a>INSERT</strong>: allows users to insert data to specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r8de13ba27c7e462d9c629e5cb99a8b2a"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"><a name="en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a><a name="en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a>d</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"><a name="en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a><a name="en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a><strong id="b7741135252419"><a name="b7741135252419"></a><a name="b7741135252419"></a>DELETE</strong>: allows users to delete data from specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_rcbf3413a0b3c474083d3476a68ee82d5"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"><a name="en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a><a name="en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"><a name="en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a><a name="en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a><strong id="b6165614254"><a name="b6165614254"></a><a name="b6165614254"></a>TRUNCATE</strong>: allows users to delete all data from specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r6a6605f29d5d430bbd35b6de4aabb4a8"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"><a name="en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a><a name="en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"><a name="en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a><a name="en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a><strong id="b102651712122514"><a name="b102651712122514"></a><a name="b102651712122514"></a>REFERENCES</strong>: allows users to create foreign key constraints.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r64aba48201764746bc641840af6cf98f"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"><a name="en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a><a name="en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"><a name="en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a><a name="en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a><strong id="b665692013250"><a name="b665692013250"></a><a name="b665692013250"></a>TRIGGER</strong>: allows users to create a trigger on specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r72c53b1c15e6415382fbcadb80b0a2ab"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"><a name="en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a><a name="en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"><a name="en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a><a name="en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a><strong id="b26461426152511"><a name="b26461426152511"></a><a name="b26461426152511"></a>EXECUTE</strong>: allows users to use specified functions and the operators that are realized by the functions.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_ra57588e97fc8463a9da73c485f9ba3e9"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"><a name="en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a><a name="en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a>U</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"><a name="en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a><a name="en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a><strong id="b10794194372512"><a name="b10794194372512"></a><a name="b10794194372512"></a>USAGE</strong>:</p>
<a name="en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><a name="en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><ul id="en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"><li>For procedural languages, allows users to specify a procedural language when creating a function.</li><li>For schemas, allows users to access objects included in specified schemas.</li><li>For sequences, allows users to use the nextval function.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_r277c4595c8bb4eeeafdb11a78d0faeb7"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"></a>C</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"></a><strong id="b149689515268"><a name="b149689515268"></a><a name="b149689515268"></a>CREATE</strong>:</p>
<a name="en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><a name="en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><ul id="en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"><li>For databases, allows new schemas to be created within the database.</li><li>For schemas, allows users to create objects in a schema.</li><li>For tablespaces, allows users to create tables in a tablespace and set the tablespace to default one when creating databases and schemas.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_recdf18f778b44aefb363a58d7d9078a5"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"><a name="en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a><a name="en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a><strong id="b1734316209269"><a name="b1734316209269"></a><a name="b1734316209269"></a>CONNECT</strong>: allows users to connect to specified databases.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r4b9cfb178de547a3aab1ef5c119895dd"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"><a name="en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a><a name="en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a>T</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"></a><strong id="b1493425172612"><a name="b1493425172612"></a><a name="b1493425172612"></a>TEMPORARY</strong>: allows users to create temporary tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p11378951172714"><a name="p11378951172714"></a><a name="p11378951172714"></a>A</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p837810514276"><a name="p837810514276"></a><a name="p837810514276"></a><strong id="b17949487332"><a name="b17949487332"></a><a name="b17949487332"></a>ALTER</strong>: allows users to modify the attributes of a specified object.</p>
</td>
</tr>
<tr id="row41567303320"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p9378175112713"><a name="p9378175112713"></a><a name="p9378175112713"></a>P</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p0379851182714"><a name="p0379851182714"></a><a name="p0379851182714"></a><strong id="b9127105213310"><a name="b9127105213310"></a><a name="b9127105213310"></a>DROP</strong>: allows users to delete specified objects.</p>
</td>
</tr>
<tr id="row28091013143315"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p337912511273"><a name="p337912511273"></a><a name="p337912511273"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p10380195112278"><a name="p10380195112278"></a><a name="p10380195112278"></a><strong id="b83641254133314"><a name="b83641254133314"></a><a name="b83641254133314"></a>COMMENT</strong>: allows users to define or modify comments of a specified object.</p>
</td>
</tr>
<tr id="row1346512197333"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p11380125113276"><a name="p11380125113276"></a><a name="p11380125113276"></a>i</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p19381185142715"><a name="p19381185142715"></a><a name="p19381185142715"></a><strong id="b1881348163412"><a name="b1881348163412"></a><a name="b1881348163412"></a>INDEX</strong>: allows users to create indexes on specified tables.</p>
</td>
</tr>
<tr id="row14157257332"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p1338145112271"><a name="p1338145112271"></a><a name="p1338145112271"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p15381451142714"><a name="p15381451142714"></a><a name="p15381451142714"></a><strong id="b131671214113516"><a name="b131671214113516"></a><a name="b131671214113516"></a>VACUUM</strong>: allows users to perform ANALYZE and VACUUM operations on specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r2005c4e9bd924590a921dc3e81672ac1"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"><a name="en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a><a name="en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a>Authorization options for preceding permissions.</p>
</td>
</tr>
</tbody>
</table>

**Table  6**  Formatting meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table53911699"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row23785826"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p19011743"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19011743"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19011743"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18693083"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18693083"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18693083"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row6577016"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p11347706"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11347706"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11347706"></a>\a</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p60515607"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60515607"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60515607"></a>Switches between aligned and unaligned table output formats.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_redf0249c3f5d46fa9e110c5096e8c514"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"><a name="en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a><a name="en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a>\C   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"><a name="en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a><a name="en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a>Sets the title of any table being printed as the result of a query or unsets any such title.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row27385651"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p3645265"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3645265"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3645265"></a>\f     [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26831088"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26831088"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26831088"></a>Sets the field separator for unaligned query outputs.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row48520085"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p37812775"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37812775"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37812775"></a>\H</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><a name="en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><ul id="en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"><li>If the text format schema is used, switches to the HTML format.</li><li>If the HTML format schema is used, switches to the text format.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row8534616"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20215335"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20215335"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20215335"></a>\pset NAME  [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26829471"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26829471"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26829471"></a>Sets options affecting the output of query result tables. For details about the value of <strong id="b842352706173118"><a name="b842352706173118"></a><a name="b842352706173118"></a>NAME</strong>, see <a href="#en-us_topic_0059778645_en-us_topic_0058968158_table22053343">Table 7</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row55470150"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p54115012"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54115012"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54115012"></a>\t    [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p10649401"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10649401"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10649401"></a>Switches the display of output name information and row count footer.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row44427513"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44110692"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44110692"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44110692"></a>\T   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36044674"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36044674"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36044674"></a>Specifies attributes to be placed within the table tag in HTML output format. If this parameter is empty, no attribute is specified.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row14964377"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4155021"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4155021"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4155021"></a>\x   [on|off|auto]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1012450"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1012450"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1012450"></a>Switches expanded table formatting mode.</p>
</td>
</tr>
</tbody>
</table>

**Table  7**  Adjustable printing options

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table22053343"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row34213901"><th class="cellrowborder" valign="top" width="15.409999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25176457"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25176457"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25176457"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="44.55%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p46637289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46637289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46637289"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="40.04%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50968660"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48693618"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48693618"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48693618"></a>border</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25806188"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25806188"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25806188"></a>The value must be a number. In general, the larger the number, the more borders and lines the tables will have, but this depends on the particular format.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><a name="en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><ul id="en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"><li>The value is an integer greater than 0 in HTML format.</li><li>The value range in other formats is as follows:<a name="en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><a name="en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><ul id="en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"><li>0: no border</li><li>1: internal dividing line</li><li>2: table frame</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row34608783"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p35270535"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35270535"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35270535"></a>expanded (or x)</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p32046081"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32046081"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32046081"></a>Switches between regular and expanded formats.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><a name="en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><ul id="en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"><li>When the expanded format is enabled, query results are displayed in two columns, with the column name on the left and the data on the right. This mode is useful if the data does not fit on the screen in the normal "horizontal" mode.</li><li>Use the expanded format when the query output format is wider than the screen in regular format. The regular format is effective only in the aligned and wrapped formats.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row48999878"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p13471594"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13471594"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13471594"></a>fieldsep</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4665381"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4665381"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4665381"></a>Specifies the field separator to be used in unaligned output mode. In this way, you can create tab- or comma-separated output required by other programs. To set a tab as field separator, type <strong id="b842352706183046"><a name="b842352706183046"></a><a name="b842352706183046"></a>\pset fieldsep '\t'</strong>. The default field separator is a vertical bar (|).</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"><a name="en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a><a name="en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row27640281"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p14913811"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14913811"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14913811"></a>fieldsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47973175"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47973175"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47973175"></a>Sets the field separator to use in unaligned output format to a zero bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"><a name="en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a><a name="en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row33391988"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4025501"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4025501"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4025501"></a>footer</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15783270"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15783270"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15783270"></a>Switches the display of the default footer.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"><a name="en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a><a name="en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row45950588"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p63319442"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63319442"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63319442"></a>format</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18107603"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18107603"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18107603"></a>Selects the output format. Unique abbreviations are allowed (this indicates that one letter is enough).</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"><a name="en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a><a name="en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a>Value range:</p>
<a name="en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><a name="en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><ul id="en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"><li><strong id="en-us_topic_0058968158_b842352706192117"><a name="en-us_topic_0058968158_b842352706192117"></a><a name="en-us_topic_0058968158_b842352706192117"></a>unaligned</strong>: Write all columns of a row on one line, separated by the currently active column separator.</li><li><strong id="en-us_topic_0058968158_b842352706192121"><a name="en-us_topic_0058968158_b842352706192121"></a><a name="en-us_topic_0058968158_b842352706192121"></a>aligned</strong>: This format is standard and human-readable.</li><li><strong id="b842352706105758"><a name="b842352706105758"></a><a name="b842352706105758"></a>wrapped</strong>: This format is similar to <strong id="b1968396737105826"><a name="b1968396737105826"></a><a name="b1968396737105826"></a>aligned</strong>, but includes the packaging cross-line width data value to suit the width of the target field output.</li><li><strong id="b842352706105929"><a name="b842352706105929"></a><a name="b842352706105929"></a>html</strong>: This format outputs tables to the markup language for a document. The output is not a complete document.</li><li><strong id="b969723860"><a name="b969723860"></a><a name="b969723860"></a>latex</strong>: This format outputs tables to the markup language for a document. The output is not a complete document.</li><li><strong id="b1977554961"><a name="b1977554961"></a><a name="b1977554961"></a>troff-ms:</strong> This format outputs tables to the markup language for a document. The output is not a complete document.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row2985006"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15611992"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15611992"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15611992"></a>null</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p2385004"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2385004"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2385004"></a>Sets a character string to be printed in place of a null value.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"><a name="en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a><a name="en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a>The default is to print nothing, which can be easily mistaken for an empty string.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50084564"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p56659409"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56659409"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56659409"></a>numericlocale</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17751162"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17751162"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17751162"></a>Switches the display of a locale-aware character to separate groups of digits to the left of the decimal marker.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><a name="en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><ul id="en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"><li><strong id="b84235270618149"><a name="b84235270618149"></a><a name="b84235270618149"></a>on</strong>: The specified separator is displayed.</li><li><strong id="b84235270618154"><a name="b84235270618154"></a><a name="b84235270618154"></a>off</strong>: The specified separator is not displayed</li></ul>
<p id="en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"><a name="en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a><a name="en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a>If this parameter is ignored, the default separator is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row42028421"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16938075"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16938075"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16938075"></a>pager</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p23113433"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23113433"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23113433"></a>Controls the use of a pager for query and <strong id="b13671165663314"><a name="b13671165663314"></a><a name="b13671165663314"></a>gsql</strong> help outputs. If the <strong id="b12732193412"><a name="b12732193412"></a><a name="b12732193412"></a>PAGER</strong> environment variable is set, the output is redirected to the specified program. Otherwise, the platform-dependent default value is used.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><a name="en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><ul id="en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"><li><strong id="b8423527061823"><a name="b8423527061823"></a><a name="b8423527061823"></a>on</strong>: The pager is used for terminal output that does not fit the screen.</li><li><strong id="b8423527061884"><a name="b8423527061884"></a><a name="b8423527061884"></a>off</strong>: The pager is not used.</li><li><strong id="b84235270618838"><a name="b84235270618838"></a><a name="b84235270618838"></a>always</strong>: The pager is used for all terminal output regardless of whether it fits the screen.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row31782278"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58586323"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58586323"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58586323"></a>recordsep</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p43971123"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43971123"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43971123"></a>Specifies the record separator to use in unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"><a name="en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a><a name="en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row43935922"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27386289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27386289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27386289"></a>recordsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p54316068"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54316068"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54316068"></a>Sets the record separator to use in unaligned output format to a zero bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"><a name="en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a><a name="en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50890575"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p46302507"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46302507"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46302507"></a>tableattr (or T)</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48381391"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48381391"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48381391"></a>Specifies attributes to be placed inside the HTML table tag in HTML output format (such as cellpadding or bgcolor). Note that you do not need to specify <strong id="b14456132824313"><a name="b14456132824313"></a><a name="b14456132824313"></a>border</strong> here because it has been used by <strong id="b842352706162328"><a name="b842352706162328"></a><a name="b842352706162328"></a>\pset border</strong>. If no value is given, the table attributes do not need to be set.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"><a name="en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a><a name="en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54256626"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p3641760"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3641760"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3641760"></a>title</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p34572433"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34572433"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34572433"></a>Sets the table title for any subsequently printed tables. This can be used to give your output descriptive tags. If no value is given, the title does not need to be set.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"><a name="en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a><a name="en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54507565"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53767637"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53767637"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53767637"></a>tuples_only (or t)</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25003860"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25003860"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25003860"></a>Enables or disables the tuples-only mode. Full display may show extra information, such as column headers, titles, and various footers. In tuples-only mode, only the table data is shown.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"><a name="en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a><a name="en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a>-</p>
</td>
</tr>
<tr id="row202921911099"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="p12925114915"><a name="p12925114915"></a><a name="p12925114915"></a>feedback</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="p172927113915"><a name="p172927113915"></a><a name="p172927113915"></a>Specifies whether to output the number of result lines.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="p729219117918"><a name="p729219117918"></a><a name="p729219117918"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  8**  Connection meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table37189353"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row51130770"><th class="cellrowborder" valign="top" width="21.490000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47951669"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47951669"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47951669"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.56999999999999%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58880018"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58880018"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58880018"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row4552143"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p30341711"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30341711"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30341711"></a>\c[onnect]    [DBNAME|- USER|- HOST|- PORT|-]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22048137"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22048137"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22048137"></a>Connects to a new database. (The current database is postgres.) If a database name contains more than 63 bytes, only the first 63 bytes are valid and are used for connection. However, the database name displayed in the command line of <strong id="b1229082046169"><a name="b1229082046169"></a><a name="b1229082046169"></a>gsql</strong> is still the name before the truncation.</p>
<div class="note" id="note131214284146"><a name="note131214284146"></a><a name="note131214284146"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p91237286143"><a name="p91237286143"></a><a name="p91237286143"></a>If the database login user is changed during reconnection, you need to enter the password of the new user. The maximum length of the password is 999 bytes, which is restricted by the maximum value of the GUC parameter <strong id="b1885279204917"><a name="b1885279204917"></a><a name="b1885279204917"></a>password_max_length</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row28507487"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p13150509"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13150509"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13150509"></a>\encoding [ENCODING]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51975191"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51975191"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51975191"></a>Sets the client character set encoding.</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"></a>Without an argument, this command shows the current encoding.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row10803172"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p65742650"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65742650"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65742650"></a>\conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20139181"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20139181"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20139181"></a>Prints information about the current connected database.</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  9**  OS meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table32146234"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row57810541"><th class="cellrowborder" valign="top" width="21.87%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p52142277"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52142277"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52142277"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="47.11%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p62774893"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p62774893"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p62774893"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="31.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"><a name="en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a><a name="en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row51601549"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18975950"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18975950"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18975950"></a>\cd       [DIR]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p60656983"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60656983"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60656983"></a>Changes the current working directory.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"><a name="en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a><a name="en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row9041943"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p61308768"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p61308768"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p61308768"></a>\setenv NAME    [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p30861763"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30861763"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30861763"></a>Sets the <strong id="b842352706182257"><a name="b842352706182257"></a><a name="b842352706182257"></a>NAME</strong> environment variable to <strong id="b842352706201833"><a name="b842352706201833"></a><a name="b842352706201833"></a>VALUE</strong>. If <strong id="b84235270618238"><a name="b84235270618238"></a><a name="b84235270618238"></a>VALUE</strong> is not provided, do not set the environment variable.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"><a name="en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a><a name="en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row66697655"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p33800946"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33800946"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33800946"></a>\timing   [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20643789"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20643789"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20643789"></a>Displays how long each SQL statement takes, in milliseconds.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><a name="en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><ul id="en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"><li><strong id="b20201014175013"><a name="b20201014175013"></a><a name="b20201014175013"></a>on</strong>: specifies that the display is enabled.</li><li><strong id="b842352706182346"><a name="b842352706182346"></a><a name="b842352706182346"></a>off</strong>: indicates that the display is disabled.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row11936946"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27368537"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27368537"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27368537"></a>\!      [COMMAND]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p49855699"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p49855699"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p49855699"></a>Escapes to a separate Unix shell or runs a Unix command.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"><a name="en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a><a name="en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  10**  Variable meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table50076468"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row64340398"><th class="cellrowborder" valign="top" width="32.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44189784"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44189784"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44189784"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="67.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22602779"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22602779"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22602779"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row18885790"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53353993"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53353993"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53353993"></a>\prompt     [TEXT] NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20243739"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20243739"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20243739"></a>Prompts the user to use texts to specify a variable name.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row39029041"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7235720"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7235720"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7235720"></a>\set     [NAME [VALUE]]</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17332671"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17332671"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17332671"></a>Sets the <em id="i842352697192517"><a name="i842352697192517"></a><a name="i842352697192517"></a>NAME</em> internal variable to <strong id="b842352706192521"><a name="b842352706192521"></a><a name="b842352706192521"></a>VALUE</strong>. If more than one value is provided, <em id="i202823273019275"><a name="i202823273019275"></a><a name="i202823273019275"></a>NAME</em> is set to the concatenation of all of them. If no second argument is given, the variable is just set with no value.</p>
<p id="en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"><a name="en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a><a name="en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a>Some common variables are processed differently in <strong id="b842352706193434"><a name="b842352706193434"></a><a name="b842352706193434"></a>gsql</strong> and they are combinations of uppercase letters, numbers and underscores. <a href="#en-us_topic_0059778645_t03d91a7973ee453b918f0b755284f04d">Table 11</a> describes a list of variables that are processed in a way different from other variables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row40349036"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47046458"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47046458"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47046458"></a>\unset NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p11128665"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11128665"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11128665"></a>Deletes the variable name of <strong id="b1185745691183446"><a name="b1185745691183446"></a><a name="b1185745691183446"></a>gsql</strong>.</p>
</td>
</tr>
</tbody>
</table>

**Table  11**  Common  **\\set**  commands

<a name="en-us_topic_0059778645_t03d91a7973ee453b918f0b755284f04d"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_r19e99ba6f3f04b6f97fd0ad130d78d0f"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"><a name="en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a><a name="en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a>Command</p>
</th>
<th class="cellrowborder" valign="top" width="56.769999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"><a name="en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a><a name="en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="19.919999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_r0208fc73fe24438cb17ad61db02a099d"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"></a>\set VERBOSITY value</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"><a name="en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a><a name="en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a>This variable can be set to <strong id="b971622125018"><a name="b971622125018"></a><a name="b971622125018"></a>default</strong>, <strong id="b17214285014"><a name="b17214285014"></a><a name="b17214285014"></a>verbose</strong>, or <strong id="b20721529502"><a name="b20721529502"></a><a name="b20721529502"></a>terse</strong> to control redundant lines of error reports.</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"></a>Value range: <strong id="b1883964265210"><a name="b1883964265210"></a><a name="b1883964265210"></a>default</strong>, <strong id="b4661204525219"><a name="b4661204525219"></a><a name="b4661204525219"></a>verbose</strong>, and <strong id="b15427151125214"><a name="b15427151125214"></a><a name="b15427151125214"></a>terse</strong></p>
</td>
</tr>
<tr id="en-us_topic_0059778645_ra1695111fa224cd0bb92c833a2fecada"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"><a name="en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a><a name="en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a>\set ON_ERROR_STOP value</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"></a></p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"></a>If this variable is set, the script execution stops immediately. If this script is invoked from another script, that script will be stopped immediately as well. If the primary script is invoked using the <strong id="b842352706195039"><a name="b842352706195039"></a><a name="b842352706195039"></a>-f</strong> option rather than from one <strong id="b842352706104518"><a name="b842352706104518"></a><a name="b842352706104518"></a>gsql</strong> session, <strong id="b842352706104531"><a name="b842352706104531"></a><a name="b842352706104531"></a>gsql</strong> will return error code <strong id="b1582491711530"><a name="b1582491711530"></a><a name="b1582491711530"></a>3</strong>, indicating the difference between the current error and critical errors. (The error code for critical errors is <strong id="b9872112416530"><a name="b9872112416530"></a><a name="b9872112416530"></a>1</strong>.)</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"></a>Value range: <strong id="b842352706183844"><a name="b842352706183844"></a><a name="b842352706183844"></a>on/off</strong>, <strong id="b842352706183848"><a name="b842352706183848"></a><a name="b842352706183848"></a>true/false</strong>, <strong id="b842352706183855"><a name="b842352706183855"></a><a name="b842352706183855"></a>yes/no</strong>, and <strong id="b842352706183858"><a name="b842352706183858"></a><a name="b842352706183858"></a>1/0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r6f491220dd854416aa6e9743fdba68ab"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"><a name="en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a><a name="en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a>\set RETRY [retry_times]</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"><a name="en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a><a name="en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a>Determines whether to enable the retry function if statement execution encounters errors. The parameter <strong id="b84235270620359"><a name="b84235270620359"></a><a name="b84235270620359"></a>retry_times</strong> specifies the maximum number of retry times and the default value is <strong id="b84235270620456"><a name="b84235270620456"></a><a name="b84235270620456"></a>5</strong>. Its value ranges from <strong id="b842352706201318"><a name="b842352706201318"></a><a name="b842352706201318"></a>5</strong> to <strong id="b842352706201322"><a name="b842352706201322"></a><a name="b842352706201322"></a>10</strong>. If the retry function has been enabled, when you run the <strong id="b69863613135824"><a name="b69863613135824"></a><a name="b69863613135824"></a>\set RETRY</strong> command again, the retry function will be disabled.</p>
<p id="en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"><a name="en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a><a name="en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a>The configuration file <strong id="b84235270620738"><a name="b84235270620738"></a><a name="b84235270620738"></a>retry_errcodes.conf</strong> shows a list of errors. If these errors occur, retry is required. This configuration file is placed in the same directory as that for executable programs. This configuration file is configured by the system rather than by users and cannot be modified by the users.</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"></a>The retry function can be used in the following error scenarios:</p>
<a name="en-us_topic_0059778645_udf951c403c774faa9781472afc924066"></a><a name="en-us_topic_0059778645_udf951c403c774faa9781472afc924066"></a><ul id="en-us_topic_0059778645_udf951c403c774faa9781472afc924066"><li><strong id="b163654433541"><a name="b163654433541"></a><a name="b163654433541"></a>YY002</strong>: TCP communication errors. Print information: <strong id="b842352706141446"><a name="b842352706141446"></a><a name="b842352706141446"></a>Connection reset by peer</strong>. (reset between <span id="text517248161719"><a name="text517248161719"></a><a name="text517248161719"></a>DN</span>s)</li><li><strong id="b310114615542"><a name="b310114615542"></a><a name="b310114615542"></a>YY003</strong>: Lock timeout. Print information: <strong id="b128759450547"><a name="b128759450547"></a><a name="b128759450547"></a>Lock wait timeout.../wait transaction </strong><em id="i7880144595419"><a name="i7880144595419"></a><a name="i7880144595419"></a>xxx</em><strong id="b3881114555418"><a name="b3881114555418"></a><a name="b3881114555418"></a> sync time exceed </strong><em id="i1888234516546"><a name="i1888234516546"></a><a name="i1888234516546"></a>xxx</em>.</li><li><strong id="b15723185811549"><a name="b15723185811549"></a><a name="b15723185811549"></a>YY004</strong>: TCP communication errors. Print information: <strong id="b84235270614151"><a name="b84235270614151"></a><a name="b84235270614151"></a>Connection timed out</strong>.</li><li><strong id="b1919914317558"><a name="b1919914317558"></a><a name="b1919914317558"></a>YY005</strong>: Failed to issue SET commands. Print information: <strong id="b108742285515"><a name="b108742285515"></a><a name="b108742285515"></a>ERROR SET query</strong>.</li><li><strong id="b262119905510"><a name="b262119905510"></a><a name="b262119905510"></a>YY006</strong>: Failed to apply for memory. Print information: <strong id="b842352706141534"><a name="b842352706141534"></a><a name="b842352706141534"></a>memory is temporarily unavailable</strong>.</li><li><strong id="b1775141325515"><a name="b1775141325515"></a><a name="b1775141325515"></a>YY007</strong>: Communication library error. Print information: <strong id="b195561213155513"><a name="b195561213155513"></a><a name="b195561213155513"></a>Memory allocate error</strong>.</li><li><strong id="b10279818145511"><a name="b10279818145511"></a><a name="b10279818145511"></a>YY008</strong>: Communication library error. Print information: <strong id="b145418189552"><a name="b145418189552"></a><a name="b145418189552"></a>No data in buffer</strong>.</li><li><strong id="b7359112225517"><a name="b7359112225517"></a><a name="b7359112225517"></a>YY009</strong>: Communication library error. Print information: <strong id="b8104182215556"><a name="b8104182215556"></a><a name="b8104182215556"></a>Close because release memory</strong>.</li><li><strong id="b153941226175518"><a name="b153941226175518"></a><a name="b153941226175518"></a>YY010</strong>: Communication library error. Print information: <strong id="b8197122675519"><a name="b8197122675519"></a><a name="b8197122675519"></a>TCP disconnect</strong>.</li><li><strong id="b19942142915559"><a name="b19942142915559"></a><a name="b19942142915559"></a>YY011</strong>: Communication library error. Print information: <strong id="b4764182915516"><a name="b4764182915516"></a><a name="b4764182915516"></a>SCTP disconnect</strong>.</li><li><strong id="b17169113216557"><a name="b17169113216557"></a><a name="b17169113216557"></a>YY012</strong>: Communication library error. Print information: <strong id="b19972173112555"><a name="b19972173112555"></a><a name="b19972173112555"></a>Stream closed by remote</strong>.</li><li><strong id="b15101133845517"><a name="b15101133845517"></a><a name="b15101133845517"></a>YY013</strong>: Communication library error. Print information: <strong id="b1785313725515"><a name="b1785313725515"></a><a name="b1785313725515"></a>Wait poll unknown error</strong>.</li></ul>
<p id="en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"><a name="en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a><a name="en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a>If an error occurs, <strong id="b178371826154717"><a name="b178371826154717"></a><a name="b178371826154717"></a>gsql</strong> queries connection status of all DNs. If the connection status is abnormal, <strong id="b1684202615477"><a name="b1684202615477"></a><a name="b1684202615477"></a>gsql</strong> sleeps for 1 minute and tries again. In this case, the retries in most of the primary/standby switchover scenarios are involved.</p>
<div class="note" id="en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"><a name="en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><a name="en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><a name="en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><ol id="en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"><li>Statements in transaction blocks cannot be retried upon a failure.</li><li>Retry is not supported if errors are found using ODBC or JDBC.</li><li>For SQL statements with unlogged tables, the retry is not supported if a node is faulty.</li><li>For <strong id="b228015055517"><a name="b228015055517"></a><a name="b228015055517"></a>gsql</strong> client faults, the retry is not supported.</li></ol>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"></a>Value range of <strong id="b842352706203210"><a name="b842352706203210"></a><a name="b842352706203210"></a>retry_times</strong>: <strong id="b842352706145951"><a name="b842352706145951"></a><a name="b842352706145951"></a>5</strong> to <strong id="b842352706145953"><a name="b842352706145953"></a><a name="b842352706145953"></a>10</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  12**  Large object meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table55465693"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row47399046"><th class="cellrowborder" valign="top" width="28.249999999999996%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p14117557"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14117557"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14117557"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="71.75%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p2671501"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2671501"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2671501"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5164076"><td class="cellrowborder" valign="top" width="28.249999999999996%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15636991"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636991"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636991"></a>\lo_list</p>
</td>
<td class="cellrowborder" valign="top" width="71.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58636730"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636730"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636730"></a>Displays a list of all <span id="text5179161743020"><a name="text5179161743020"></a><a name="text5179161743020"></a><span id="text18179111714306"><a name="text18179111714306"></a><a name="text18179111714306"></a>openGauss</span></span> large objects stored in the database, along with the comments provided for them.</p>
</td>
</tr>
</tbody>
</table>

## PATTERN<a name="section363084334814"></a>

The various  **\\d**  commands accept a  **PATTERN**  parameter to specify the object name to be displayed. In the simplest case, PATTERN is the exact name of the object. Characters in  **PATTERN**  are usually converted to lowercase \(as in SQL names\), for example,  **\\dt FOO**  will display a table named  **foo**. As in SQL names, placing double quotation marks \("\) around a pattern prevents them being folded to lower case. If you need to include a double quotation mark \("\) in a pattern, write it as a pair of double quotation marks \(""\) within a double-quote sequence, which is in accordance with the rules for SQL quoted identifiers. For example,  **\\dt "FOO""BAR"**  will be displayed as a table named  **FOO"BAR**  instead of  **foo"bar**. You cannot put double quotation marks around just part of a pattern, which is different from the normal rules for SQL names. For example,  **\\dt FOO"FOO"BAR**  will be displayed as a table named  **fooFOObar**  if just part of a pattern is quoted.

Whenever the  **PATTERN**  parameter is omitted completely, the  **\\d **commands display all objects that are visible in the current schema search path, which is equivalent to using an asterisk \(\*\) as the pattern. An object is regarded to be visible if it can be referenced by name without explicit schema qualification. To see all objects in the database regardless of their visibility, use a dot within double quotation marks \(\*.\*\) as the pattern.

Within a pattern, the asterisk \(\*\) matches any sequence of characters \(including no characters\) and a question mark \(?\) matches any single character. This notation is comparable to Unix shell file name patterns. For example,  **\\dt int\***  displays tables whose names start with  **int**. But within double quotation marks, the asterisk \(\*\) and the question mark \(?\) lose these special meanings and are just matched literally.

A pattern that contains a dot \(.\) is interpreted as a schema name pattern followed by an object name pattern. For example,  **\\dt foo\*.\*bar\***  displays all tables \(whose names include  **bar**\) in schemas starting with  **foo**. If no dot appears, then the pattern matches only visible objects in the current schema search path. Likewise, the dot within double quotation marks loses its special meaning and becomes an ordinary character.

Senior users can use regular-expression notations, such as character classes. For example \[0-9\] can be used to match any digit. All regular-expression special characters work as specified in POSIX. The following characters are excluded:

-   A dot \(.\) is used as a separator.
-   An asterisk \(\*\) is translated into an asterisk prefixed with a dot \(.\*\), which is a regular-expression marking.
-   A question mark \(?\) is translated into a dot \(.\).
-   A dollar sign \($\) is matched literally.

You can write ?, \(_R_+|\), \(_R_|\), and  _R_  to the following pattern characters: .,  _R_\*, and  _R_?. The dollar sign \($\) does not need to be used as a regular expression character because  **PATTERN**  must match the entire name instead of being interpreted as a regular expression \(in other words, $ is automatically appended to  **PATTERN**\). If you do not expect a pattern to be anchored, write an asterisk \(\*\) at its beginning or end. All regular-expression special characters within double quotation marks lose their special meanings and are matched literally. Regular-expression special characters in operator name patterns \(such as the  **\\do**  parameter\) are also matched literally.

