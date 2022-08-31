# gaussdb<a name="EN-US_TOPIC_0249632245"></a>

## Background<a name="en-us_topic_0237152404_en-us_topic_0059777816_section2761723143810"></a>

**gaussdb**  is a major process of openGauss and also an executable command. A database process can be started using gaussdb.

## Syntax<a name="en-us_topic_0237152404_en-us_topic_0059777816_s2298a1889844418daec3743b9a4b57fb"></a>

```
gaussdb [OPTION]...
```

## Description<a name="en-us_topic_0237152404_en-us_topic_0059777816_s432f3836cff44ad28b00d2b4c01dfd43"></a>

To access the database, the client application connects \(over a local network or the Internet\) to a running gaussdb process. Then the process starts an independent thread to handle the connection.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>When starting the database using  **gaussdb**, you also need to open another window to connect to the database or use & to enable the application to run in the background.  

A  **gaussdb**  process manages all data in a database. A system can operate multiple  **gaussdb**  processes using different data directories and port numbers. When  **gaussdb** is started, the data directory must be specified using the  **--data-dir**  option. Typically,  **-D**  points directly to the database directory created by  **gs\_initdb**.

By default,  **gaussdb**  starts in the foreground and prints log messages to the standard error stream. In practical applications,  **gaussdb**  should be automatically started as a background process at boot time in most cases.

The  **gaussdb**  command can also be called in single-user mode. The primary use for this mode is during the initialization of gs\_initdb. Sometimes, it is used for debugging or disaster recovery. However, running a single-user server is not truly suitable for debugging the server, because no realistic inter-process communication and locking happens. When the  **gaussdb**  command is called in single-user mode from the shell, you can enter queries, and the results will be printed to the screen, but in a form that is more useful for developers rather than common users. In single user mode, the session user ID is set to  **1**  and given the administrator rights. The user does not need to be existent. Therefore, servers in single user mode can be used to manually recover damaged system catalogs.

## Options<a name="en-us_topic_0237152404_en-us_topic_0059777816_sad67edabbbd34d599e18ec0034923e22"></a>

**gaussdb**  supports command-line parameters listed in  [Table 1](#en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_table57797050).

**Table  1**  Parameter description

<a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_table57797050"></a>
<table><thead align="left"><tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row43670834"><th class="cellrowborder" valign="top" width="25.31%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p29628404"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p29628404"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p29628404"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="44.800000000000004%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p2404378"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p2404378"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p2404378"></a>Parameter Description</p>
</th>
<th class="cellrowborder" valign="top" width="29.89%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152404_en-us_topic_0059777816_aa06a14c37bd040cd97448b9000ef3aaf"><a name="en-us_topic_0237152404_en-us_topic_0059777816_aa06a14c37bd040cd97448b9000ef3aaf"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_aa06a14c37bd040cd97448b9000ef3aaf"></a>Value Range</p>
</th>
</tr>
</thead>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row21908749"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p56666625"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p56666625"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p56666625"></a>-B NBUFFERS</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p26900760"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p26900760"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p26900760"></a>Sets the number of shared buffers to be used by the server processes.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a2e8fae2a2e094d14800248e24130ba54"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a2e8fae2a2e094d14800248e24130ba54"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a2e8fae2a2e094d14800248e24130ba54"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_row83115131926"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_p163122131828"><a name="en-us_topic_0237152404_p163122131828"></a><a name="en-us_topic_0237152404_p163122131828"></a>-b BINARY UPGRADES</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_p131215137218"><a name="en-us_topic_0237152404_p131215137218"></a><a name="en-us_topic_0237152404_p131215137218"></a>Specifies binary upgrade.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_p113120134214"><a name="en-us_topic_0237152404_p113120134214"></a><a name="en-us_topic_0237152404_p113120134214"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row43068867"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p60700683"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p60700683"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p60700683"></a>-c  NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p48997190"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p48997190"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p48997190"></a>Assigns a value to a running parameter. <strong id="b11510113318202"><a name="b11510113318202"></a><a name="b11510113318202"></a>-c</strong> can appear multiple times to set multiple parameters.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_ab12f30d93c014606a8e9b6a89f15ca8b"><a name="en-us_topic_0237152404_en-us_topic_0059777816_ab12f30d93c014606a8e9b6a89f15ca8b"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_ab12f30d93c014606a8e9b6a89f15ca8b"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row52052080"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p20341076"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p20341076"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p20341076"></a>-C NAME</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50779386"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50779386"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50779386"></a>Prints the value of a named run-time parameter and then exits. It can be used on a running server, and returns values from <strong>postgresql.conf</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a57274bec29e3474fae274180f2490dff"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a57274bec29e3474fae274180f2490dff"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a57274bec29e3474fae274180f2490dff"></a>The value can be the value of any parameter in the <strong id="b1699219542522"><a name="b1699219542522"></a><a name="b1699219542522"></a>postgresql.conf</strong> file.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row5161960"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p45836335"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p45836335"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p45836335"></a>-d 1-5</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p61613065"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p61613065"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p61613065"></a>Sets the debug level. The value ranges from <strong id="b52220100105039"><a name="b52220100105039"></a><a name="b52220100105039"></a>1</strong> to <strong id="b218855105039"><a name="b218855105039"></a><a name="b218855105039"></a>5</strong> indicates debug level information recorded. The higher this value is set, the more debugging output is written to the server logs.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_ae0032c8bc9564970a115e553267fdc95"><a name="en-us_topic_0237152404_en-us_topic_0059777816_ae0032c8bc9564970a115e553267fdc95"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_ae0032c8bc9564970a115e553267fdc95"></a>Value range: 1 to 5</p>
<div class="note" id="en-us_topic_0237152404_en-us_topic_0059777816_n8d7a35f1e7d748ae95fa1fbe8279338e"><a name="en-us_topic_0237152404_en-us_topic_0059777816_n8d7a35f1e7d748ae95fa1fbe8279338e"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_n8d7a35f1e7d748ae95fa1fbe8279338e"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237152404_en-us_topic_0059777816_a8b2faa2dd515447a8784e2c4488ace34"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a8b2faa2dd515447a8784e2c4488ace34"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a8b2faa2dd515447a8784e2c4488ace34"></a>If the value is less than or equal to <strong id="b84235270610177"><a name="b84235270610177"></a><a name="b84235270610177"></a>0</strong>, only notice-level information is recorded.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row66250175"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18662833"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18662833"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18662833"></a>-D DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p47850758"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p47850758"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p47850758"></a>Specifies the data directory or location of configuration files.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a5fda7f28bf144d3d9815d536948c645c"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5fda7f28bf144d3d9815d536948c645c"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5fda7f28bf144d3d9815d536948c645c"></a>User-defined value.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row62985800"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32636334"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32636334"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32636334"></a>-e</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p43794247"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p43794247"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p43794247"></a>Sets the default date style to <strong id="b138311719229"><a name="b138311719229"></a><a name="b138311719229"></a>European</strong>, that is DMY ordering of input date fields. It also prints the day before the month in certain date output formats.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_abd2013cc2b63455b933888eccc77bb56"><a name="en-us_topic_0237152404_en-us_topic_0059777816_abd2013cc2b63455b933888eccc77bb56"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_abd2013cc2b63455b933888eccc77bb56"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row65543320"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p66335417"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p66335417"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p66335417"></a>-F</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22003934"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22003934"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22003934"></a>Disables fsync calls for improved performance, at the risk of data corruption in the event of a system crash. Specifying this option is equivalent to disabling the fsync parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_ae62fa0d7e1884eca88a79bbed8d7595c"><a name="en-us_topic_0237152404_en-us_topic_0059777816_ae62fa0d7e1884eca88a79bbed8d7595c"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_ae62fa0d7e1884eca88a79bbed8d7595c"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row4450947"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16415272"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16415272"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16415272"></a>-h HOSTNAME</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p20165279"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p20165279"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p20165279"></a>Specifies the host name or IP address on which <strong>gaussdb</strong> listens to TCP/IP connections from client applications.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a38862312ce074cf793ad05c6e3e4de54"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a38862312ce074cf793ad05c6e3e4de54"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a38862312ce074cf793ad05c6e3e4de54"></a>Existing host name or IP address at the front-end.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row48574620"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p59568141"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p59568141"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p59568141"></a>-i</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p14117920"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p14117920"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p14117920"></a>Allows remote clients to communicate with the server through TCP/IP (Internet domain socket) connections.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a4521d849e6d54c4397402074b97fc7d2"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a4521d849e6d54c4397402074b97fc7d2"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a4521d849e6d54c4397402074b97fc7d2"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row7150838"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p56403632"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p56403632"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p56403632"></a>-k DIRECTORY</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p66541932"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p66541932"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p66541932"></a>Specifies the directory of the Unix domain socket on which gaussdb listens to connections from client applications.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a5a36d1ab250e4e8fbe847333a247d060"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5a36d1ab250e4e8fbe847333a247d060"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5a36d1ab250e4e8fbe847333a247d060"></a>The default value is normally <strong>/tmp</strong>, but it can be changed during compilation.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_r88198e66fc19401db0e845f7e24aa123"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a0b42e13c8a8640b9849b6e7d01e3578e"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a0b42e13c8a8640b9849b6e7d01e3578e"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a0b42e13c8a8640b9849b6e7d01e3578e"></a>-l</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a4a165d1abee64cc8b82fecb1c9c19699"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a4a165d1abee64cc8b82fecb1c9c19699"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a4a165d1abee64cc8b82fecb1c9c19699"></a>Allows remote clients to connect to the server via secure socket layer (SSL).</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_ab662c7ef619a4fab823006a09d276920"><a name="en-us_topic_0237152404_en-us_topic_0059777816_ab662c7ef619a4fab823006a09d276920"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_ab662c7ef619a4fab823006a09d276920"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_r641db91b7b4049acadac433beacb7983"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p42890274"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p42890274"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p42890274"></a>-N MAX-CONNECT</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p34552299"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p34552299"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p34552299"></a>Sets the maximum number of client connections that this server will accept. The default value of this parameter is automatically chosen by gs_initdb. Specifying this option is equivalent to setting the max_connections configuration parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a2630f0c949054c57886df67dba01da8b"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a2630f0c949054c57886df67dba01da8b"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a2630f0c949054c57886df67dba01da8b"></a>Value range: a positive integer.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_r4e1cb43bf0d44c8e9a93c46a53a0a915"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_ad57b0b6ed99346d0bef75d279d4df5d6"><a name="en-us_topic_0237152404_en-us_topic_0059777816_ad57b0b6ed99346d0bef75d279d4df5d6"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_ad57b0b6ed99346d0bef75d279d4df5d6"></a>-M SERVERMODE</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a28f079c7f4e24fa39c3b17051fa1711f"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a28f079c7f4e24fa39c3b17051fa1711f"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a28f079c7f4e24fa39c3b17051fa1711f"></a>Specifies the startup mode.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_ad48af41abfc847d4be5addc3a2eab10c"><a name="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_ad48af41abfc847d4be5addc3a2eab10c"></a><a name="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_ad48af41abfc847d4be5addc3a2eab10c"></a>Values:</p>
<a name="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_u3805d8a1137d446ab9ec6cdaf4c55193"></a><a name="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_u3805d8a1137d446ab9ec6cdaf4c55193"></a><ul id="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_u3805d8a1137d446ab9ec6cdaf4c55193"><li><strong id="b8517113145220"><a name="b8517113145220"></a><a name="b8517113145220"></a>primary</strong>: The server starts in primary mode.</li><li><strong id="b4932184157"><a name="b4932184157"></a><a name="b4932184157"></a>standby</strong>: The server starts in standby mode.</li><li><strong id="b84235270612544"><a name="b84235270612544"></a><a name="b84235270612544"></a>cascade_standby</strong>: The local server starts as a cascaded standby server.</li><li><strong id="b150273061512"><a name="b150273061512"></a><a name="b150273061512"></a>pending</strong>: The server is in pending mode to be promoted to a primary server or a standby server.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row40407089"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p45114348"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p45114348"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p45114348"></a>-p PORT</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p5843465"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p5843465"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p5843465"></a>Specifies the TCP/IP port or local Unix domain socket file extension on which gaussdb is to listen for connections from client applications. The default port ID is <span id="en-us_topic_0237152404_text10283141215615"><a name="en-us_topic_0237152404_text10283141215615"></a><a name="en-us_topic_0237152404_text10283141215615"></a>5432</span>.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p748137203944"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p748137203944"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p748137203944"></a>A positive integer within the port range supported by the OS.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row4407977"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p47462893"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p47462893"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p47462893"></a>-s</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p7555059"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p7555059"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p7555059"></a>Prints time information and other statistics at the end of each command.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_af9a75fd9d2b74f04a5e5e602f92da1e2"><a name="en-us_topic_0237152404_en-us_topic_0059777816_af9a75fd9d2b74f04a5e5e602f92da1e2"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_af9a75fd9d2b74f04a5e5e602f92da1e2"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row34653585"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p55376440"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p55376440"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p55376440"></a>-S WORK-MEM</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16173682"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16173682"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16173682"></a>Specifies the size of memory to be used by internal sorts and hashes before resorting to temporary disk files.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a853d9c21b7954bf492783f20c45425c2"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a853d9c21b7954bf492783f20c45425c2"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a853d9c21b7954bf492783f20c45425c2"></a>The unit is KB.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_row145281213145513"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_p1652931385513"><a name="en-us_topic_0237152404_p1652931385513"></a><a name="en-us_topic_0237152404_p1652931385513"></a>--single_node</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_p18529191355511"><a name="en-us_topic_0237152404_p18529191355511"></a><a name="en-us_topic_0237152404_p18529191355511"></a>Start a single-node database.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_p10529121325516"><a name="en-us_topic_0237152404_p10529121325516"></a><a name="en-us_topic_0237152404_p10529121325516"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row54312920"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p12798506"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p12798506"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p12798506"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p60463071"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p60463071"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p60463071"></a>Prints the <strong id="b679816992611"><a name="b679816992611"></a><a name="b679816992611"></a>gaussdb</strong> version and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a34ea1c813777432b8f7110528402ca8f"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a34ea1c813777432b8f7110528402ca8f"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a34ea1c813777432b8f7110528402ca8f"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row9900497"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p14556567"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p14556567"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p14556567"></a>--NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53708688"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53708688"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53708688"></a>Assigns a value to a running parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a60944fd37dae43eea7f454a568a3d180"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a60944fd37dae43eea7f454a568a3d180"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a60944fd37dae43eea7f454a568a3d180"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row14480017"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p4130578"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p4130578"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p4130578"></a>--describe-config</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p48074570"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p48074570"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p48074570"></a>Describes configuration parameters and then exits.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a620e8e59e1e54cd6944678134188fa6a"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a620e8e59e1e54cd6944678134188fa6a"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a620e8e59e1e54cd6944678134188fa6a"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row23184364"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32410609"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32410609"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32410609"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p38699208"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p38699208"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p38699208"></a>Displays help about the <strong id="b11153114541019"><a name="b11153114541019"></a><a name="b11153114541019"></a>gaussdb</strong> command line arguments and then exits.</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a5744e23c516c423096014bba0779f15c"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5744e23c516c423096014bba0779f15c"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5744e23c516c423096014bba0779f15c"></a>-</p>
</td>
</tr>
</tbody>
</table>



Parameters described in  [Table 2](#en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_table56695537)  are used for debugging purposes, and in some cases for assisting in recovering severely damaged databases. Do not use these parameters for debugging if databases are providing services for applications.

**Table  2**  Developer options

<a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_table56695537"></a>
<table><thead align="left"><tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row31159014"><th class="cellrowborder" valign="top" width="11.85%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53518268"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53518268"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53518268"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="60.89%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50997798"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50997798"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50997798"></a>Parameter Description</p>
</th>
<th class="cellrowborder" valign="top" width="27.26%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152404_en-us_topic_0059777816_af9875d1925fb4266b040111fb34d1306"><a name="en-us_topic_0237152404_en-us_topic_0059777816_af9875d1925fb4266b040111fb34d1306"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_af9875d1925fb4266b040111fb34d1306"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row39146563"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p38489139"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p38489139"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p38489139"></a>-f s|i|n|m|h</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p3517461"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p3517461"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p3517461"></a>Forbids the use of particular scan and join methods.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a481c8f570a5c4ebfb5f457bc2890783e"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a481c8f570a5c4ebfb5f457bc2890783e"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a481c8f570a5c4ebfb5f457bc2890783e"></a>Value range:</p>
<a name="en-us_topic_0237152404_ul20661184463014"></a><a name="en-us_topic_0237152404_ul20661184463014"></a><ul id="en-us_topic_0237152404_ul20661184463014"><li><strong id="b1616122652714"><a name="b1616122652714"></a><a name="b1616122652714"></a>s</strong>: stop sequence</li><li><strong id="b15184182982716"><a name="b15184182982716"></a><a name="b15184182982716"></a>i</strong>: index scanning</li><li><strong id="b62121830142713"><a name="b62121830142713"></a><a name="b62121830142713"></a>n</strong>: nested loop is disabled.</li><li><strong id="b1013013112713"><a name="b1013013112713"></a><a name="b1013013112713"></a>m</strong>: merge join</li><li><strong id="b1920310329279"><a name="b1920310329279"></a><a name="b1920310329279"></a>h</strong>: hash join</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row38137908"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32627775"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32627775"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p32627775"></a>-n</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p23245326"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p23245326"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p23245326"></a>Debugs problems that cause a server process breakdown. The ordinary strategy in this situation is to instruct all other server processes to terminate and then reinitialize the shared memory and semaphores. This option specifies that <strong>gaussdb</strong> will not reinitialize shared memory.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_aa0e429d7c28741e6a35f443371d29a59"><a name="en-us_topic_0237152404_en-us_topic_0059777816_aa0e429d7c28741e6a35f443371d29a59"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_aa0e429d7c28741e6a35f443371d29a59"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row46904138"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p8163685"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p8163685"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p8163685"></a>-P</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p5219810"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p5219810"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p5219810"></a>Ignores system indexes when reading system tables, but still updates the indexes when modifying the tables.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a826e2a4e530043b8a80e966448e23072"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a826e2a4e530043b8a80e966448e23072"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a826e2a4e530043b8a80e966448e23072"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row54444120"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p59374438"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p59374438"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p59374438"></a>-t pa|pl|ex</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18798502"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18798502"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18798502"></a>Prints timing statistics for each query relating to each of the major system modules.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a58f89b0a01734c1ea83da1f0f2437cef"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a58f89b0a01734c1ea83da1f0f2437cef"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a58f89b0a01734c1ea83da1f0f2437cef"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row48711404"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p52440629"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p52440629"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p52440629"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p13722753"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p13722753"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p13722753"></a>Debugs problems that cause a server process breakdown. This option specifies that gaussdb will stop all other server processes by sending the signal SIGSTOP, but will not cause them to exit. This permits system programmers to manually collect core dumps from all server processes.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a8ebe9a0a360340019e58fa6835a5e941"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a8ebe9a0a360340019e58fa6835a5e941"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a8ebe9a0a360340019e58fa6835a5e941"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row33887928"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p28973648"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p28973648"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p28973648"></a>-W NUM</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p40948108"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p40948108"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p40948108"></a>Specifies the number of seconds to wait before a new server process is started.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p535752120417"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p535752120417"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p535752120417"></a>Unit: second</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_r6ae3f55cfed84785ac7effeb32e75571"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"></a>--localxid</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a291aaa21611849249849fc2e61739a7c"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a291aaa21611849249849fc2e61739a7c"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a291aaa21611849249849fc2e61739a7c"></a>Uses the local transaction ID instead of the global transaction ID.</p>
<div class="notice" id="en-us_topic_0237152404_en-us_topic_0059777816_na0a910f47c584f82bc1782609720a98d"><a name="en-us_topic_0237152404_en-us_topic_0059777816_na0a910f47c584f82bc1782609720a98d"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_na0a910f47c584f82bc1782609720a98d"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><p id="en-us_topic_0237152404_en-us_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"></a>This option is used only for <strong>gs_initdb</strong>. Using this option may cause database inconsistency.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"></a>Existing local transaction ID.</p>
</td>
</tr>
</tbody>
</table>

Options listed in  [Table 3](#en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_table57361376)  apply only to the single user mode.

**Table  3**  Options for the single-user mode

<a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_table57361376"></a>
<table><thead align="left"><tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row24663889"><th class="cellrowborder" valign="top" width="11.790000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p4225720"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p4225720"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p4225720"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="61.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p28085520"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p28085520"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p28085520"></a>Parameter Description</p>
</th>
<th class="cellrowborder" valign="top" width="26.88%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p343555438439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p343555438439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p343555438439"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row27773324"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p12786982"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p12786982"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p12786982"></a>--single</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53094849"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53094849"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p53094849"></a>Selects the single user mode. This must be the first argument on the command line.</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p313355808439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p313355808439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p313355808439"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row57770046"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22600384"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22600384"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22600384"></a>DBNAME</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p57480283"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p57480283"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p57480283"></a>Specifies the name of the database to be accessed.This must be the last argument on the command line.</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p551540668439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p551540668439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p551540668439"></a>A character string. The default value is the user name.</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row30757183"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p8303908"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p8303908"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p8303908"></a>-d 0-5</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p1527933"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p1527933"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p1527933"></a>Re-specifies the debug level.</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p382943688439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p382943688439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p382943688439"></a>0-5</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row64458347"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16383953"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16383953"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p16383953"></a>-E</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22820875"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22820875"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p22820875"></a>Echoes all commands.</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p148361438439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p148361438439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p148361438439"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row31082150"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50154537"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50154537"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p50154537"></a>-j</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p33553567"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p33553567"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p33553567"></a>Disables use of newline as a statement delimiter.</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p608769678439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p608769678439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p608769678439"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_row53800517"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p9556098"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p9556098"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p9556098"></a>-r  FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18925060"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18925060"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p18925060"></a>Saves all server standard output and standard errors to <strong>filename</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p320872798439"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p320872798439"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p320872798439"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Automatic startup mode options

<a name="en-us_topic_0237152404_en-us_topic_0059777816_tddeddd4cc1554b5e8aff332d9c106cb8"></a>
<table><thead align="left"><tr id="en-us_topic_0237152404_en-us_topic_0059777816_r89f00392806e449cb2678cbc9c059ab9"><th class="cellrowborder" valign="top" width="11.790000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152404_en-us_topic_0059777816_a5917552e9a354513afc75e72b5c418ba"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5917552e9a354513afc75e72b5c418ba"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a5917552e9a354513afc75e72b5c418ba"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="60.95%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152404_en-us_topic_0059777816_a6cd98232859446d886afe4dbafb3b344"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a6cd98232859446d886afe4dbafb3b344"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a6cd98232859446d886afe4dbafb3b344"></a>Parameter Description</p>
</th>
<th class="cellrowborder" valign="top" width="27.26%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152404_en-us_topic_0059777816_a493c4d1abad440f0a005b300848e439c"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a493c4d1abad440f0a005b300848e439c"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a493c4d1abad440f0a005b300848e439c"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152404_en-us_topic_0059777816_r18a6a1211ff54d9cb34e127dadba1385"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a39974e9b41754e7bb5146cdc0c95ebfa"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a39974e9b41754e7bb5146cdc0c95ebfa"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a39974e9b41754e7bb5146cdc0c95ebfa"></a>--boot</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a30a98faac5734d92a5bd2b61a582ca27"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a30a98faac5734d92a5bd2b61a582ca27"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a30a98faac5734d92a5bd2b61a582ca27"></a>Enables the automatic startup mode. This must be the first argument on the command line. This parameter initializes parameter variables and related configurations. It is usually used in the database installation process and is unperceivable.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a70c27505e4d94541aa237a5d8e3911ba"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a70c27505e4d94541aa237a5d8e3911ba"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a70c27505e4d94541aa237a5d8e3911ba"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_rc9192b5995a149bcbacb94b5c709df69"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p612884019308"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p612884019308"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p612884019308"></a>-r  FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_ad82845a4d1bc4d8a925009c0abbe0590"><a name="en-us_topic_0237152404_en-us_topic_0059777816_ad82845a4d1bc4d8a925009c0abbe0590"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_ad82845a4d1bc4d8a925009c0abbe0590"></a>Saves all server standard output and standard errors to <strong>filename</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a81311e2db7aa4aaf84820cf543610bf5"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a81311e2db7aa4aaf84820cf543610bf5"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a81311e2db7aa4aaf84820cf543610bf5"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152404_en-us_topic_0059777816_r5186b8c372584c2282458855ea67b34f"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p842204719308"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p842204719308"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p842204719308"></a>-x NUM</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_a622cbfce2b26480db6122d638c570287"><a name="en-us_topic_0237152404_en-us_topic_0059777816_a622cbfce2b26480db6122d638c570287"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_a622cbfce2b26480db6122d638c570287"></a>Specifies a new server thread type. The automatic startup mode can be used during database initialization. This parameter starts various threads to execute different logics. Generally, this parameter is not used because the automatic startup mode is seldom used.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p589777684644"><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p589777684644"></a><a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_p589777684644"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  5**  Upgrade mode options

<a name="en-us_topic_0237152404_table1473115131212"></a>
<table><thead align="left"><tr id="en-us_topic_0237152404_row1791171111214"><th class="cellrowborder" valign="top" width="11.790000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152404_p780741171211"><a name="en-us_topic_0237152404_p780741171211"></a><a name="en-us_topic_0237152404_p780741171211"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="60.95%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152404_p1682381171211"><a name="en-us_topic_0237152404_p1682381171211"></a><a name="en-us_topic_0237152404_p1682381171211"></a>Parameter Description</p>
</th>
<th class="cellrowborder" valign="top" width="27.26%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152404_p14839121151218"><a name="en-us_topic_0237152404_p14839121151218"></a><a name="en-us_topic_0237152404_p14839121151218"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152404_row108640191215"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152404_p11885710122"><a name="en-us_topic_0237152404_p11885710122"></a><a name="en-us_topic_0237152404_p11885710122"></a>-u NUM</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152404_p190312111213"><a name="en-us_topic_0237152404_p190312111213"></a><a name="en-us_topic_0237152404_p190312111213"></a>Specifies the database kernel version before the upgrade.</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152404_p16926171121218"><a name="en-us_topic_0237152404_p16926171121218"></a><a name="en-us_topic_0237152404_p16926171121218"></a>-</p>
</td>
</tr>
</tbody>
</table>

In addition to the preceding parameters, all parameters in postgres.conf can be transferred to  **gaussdb** using **--guc\_name=guc\_value**  when  **gaussdb**  is started. For example:  **--enable\_fast\_query\_shipping=off**.

## Environment Variables<a name="en-us_topic_0237152404_en-us_topic_0059777816_sac6ef2b8033a4b3687c3968ca3692932"></a>

-   **PGLINETENCODING**: default character encoding used by clients. Clients can overwrite it individually. This value can also be set in the configuration file.
-   **PGDATESTYLE**: default value of the run-time  **DateStyle**  parameter. The use of this environment variable is deprecated.
-   **TZ**: server time zone.

## Error Handling<a name="en-us_topic_0237152404_en-us_topic_0059777816_s93533ab12cab4b3cbdcc08cd129fe243"></a>

A failure message mentioning  **semget**  or  **shmget**  probably indicates that you need to reconfigure your kernel to provide adequate shared memory and semaphores. You can decrease  **shared\_buffers**  to reduce the shared memory consumption of openGauss, or decrease  **max\_connections**  to reduce the semaphore consumption of openGauss.

If a failure message suggesting that another server is running is reported, check the system using the following command based on your system:

```
ps ax | grep gaussdb
```

or

```
ps -ef | grep gaussdb
```

If you are certain that no conflicting server is running, you can remove the lock file mentioned in the message and try again.

A failure message indicating inability to bind to a port might indicate that the port is already in use by a non-openGauss process. This message may also be reported if you terminate  **gaussdb** and immediately restart it using the same port. In this case, you must simply wait a few seconds until the operating system closes the port before trying again. Finally, you may get this error if you specify a port number that your operating system considers it to be reserved. For example, the Unix considers ports whose IDs are under 1024 to be "trusted" and permits only Unix administrators to access the Unix.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   If possible, do not use SIGKILL to stop the main process. because the operation prevents  **gaussdb** from releasing system resources \(such as shared memory and semaphores\) that it holds before terminating. This might cause problems for starting a fresh process.  
>-   To properly terminate the server process, signals  **SIGTERM**,  **SIGINT**, and  **SIGQUIT** can be used.  **SIGTERM**  will wait for all clients to terminate before exit.  **SIGINT**  will forcibly disconnect all clients, and  **SIGQUIT**  will exit immediately without proper shutdown, resulting in a recovery run during restart.  
>-   The SIGHUP signal will reload the server configuration files. It is also possible to send  **SIGHUP** to an individual server process, but that is usually not sensible.  
>-   To cancel a running query, send the  **SIGINT** signal to the process running that command.  
>-   The main server process uses  **SIGTERM** to tell its subordinate server processes to quit properly and SIGQUIT to terminate without a cleanup. These signals should not be used by users. It is also unwise to send SIGKILL to a server process: The main process will interpret this as a crash and will force all the subordinate processes to quit as part of its standard crash-recovery procedure.  

## **Usage**<a name="en-us_topic_0237152404_en-us_topic_0059777816_s188b513ab6fb4938a75c0cd8a49cc38c"></a>

Run the following command to start a server in single-user mode:

```
gaussdb --single -D /usr/local/pgsql/data other-options my_database
```

Use  **-D**  to provide the correct path of the database directory for the server. Besides, specify the name of the existing particular database.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   In most cases, the single-user mode server treats newline as the command entry terminator. To continue a command across multiple lines, you must type a backslash just before each newline except the last one.  
>-   If you use the -j command line option, then newline does not terminate command entry. In this case, the server will read the standard input until the end-of-file \(EOF\) marker, then process the input as a single command string. Backslashes and newlines are treated as common characters in this case.  
>-   To quit the session, type EOF \(Control+D\). If you have used -j, two consecutive EOFs are needed to exit.  
>-   The single-user mode server does not provide complex line-editing functions \(no command history, for example\). The single-user mode also does not do any background processing, like automatic checkpoints.  

## Example<a name="en-us_topic_0237152404_en-us_topic_0059777816_en-us_topic_0058968126_section367683"></a>

1.  Run the following command to start gaussdb in the background using default values:

    ```
    nohup gaussdb >logfile 2>&1 </dev/null  &
    ```

2.  Run the following command to start gaussdb with a specified port, for example, 1234:

    ```
    gaussdb --single_node -p 1234 -D data_dir
    ```

    To connect to this server using gsql, specify this port with the -p option:

    ```
    gsql -d postgres -p 1234
    ```


