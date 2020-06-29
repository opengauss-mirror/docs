# Connection Characters<a name="EN-US_TOPIC_0242848655"></a>

**Table  1**  Connection strings

<a name="en-us_topic_0241716355_table158814501407"></a>
<table><thead align="left"><tr id="en-us_topic_0241716355_row6888503015"><th class="cellrowborder" valign="top" width="17.53%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241716355_p288750407"><a name="en-us_topic_0241716355_p288750407"></a><a name="en-us_topic_0241716355_p288750407"></a>Character String</p>
</th>
<th class="cellrowborder" valign="top" width="82.47%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241716355_p208814501407"><a name="en-us_topic_0241716355_p208814501407"></a><a name="en-us_topic_0241716355_p208814501407"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241716355_row168855011011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p14885505013"><a name="en-us_topic_0241716355_p14885505013"></a><a name="en-us_topic_0241716355_p14885505013"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p17887501308"><a name="en-us_topic_0241716355_p17887501308"></a><a name="en-us_topic_0241716355_p17887501308"></a>Name of the host to connect to. If the host name starts with a slash (/), Unix-domain socket communications instead of TCP/IP communications are used. The value is the directory where the socket file is stored. If <strong id="en-us_topic_0241716355_b424014303208"><a name="en-us_topic_0241716355_b424014303208"></a><a name="en-us_topic_0241716355_b424014303208"></a>host</strong> is not specified, the default behavior is to connect to the Unix-domain socket in the <strong id="en-us_topic_0241716355_b14249195814206"><a name="en-us_topic_0241716355_b14249195814206"></a><a name="en-us_topic_0241716355_b14249195814206"></a>/tmp</strong> directory (or the socket directory specified during GaussDB installation). On a machine without a Unix-domain socket, the default behavior is to connect to <strong id="en-us_topic_0241716355_b1660434265619"><a name="en-us_topic_0241716355_b1660434265619"></a><a name="en-us_topic_0241716355_b1660434265619"></a>localhost</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row168915019011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p38935016014"><a name="en-us_topic_0241716355_p38935016014"></a><a name="en-us_topic_0241716355_p38935016014"></a>hostaddr</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p12151325122"><a name="en-us_topic_0241716355_p12151325122"></a><a name="en-us_topic_0241716355_p12151325122"></a>IP address of the host to connect to. The value is in standard IPv4 address format, for example, 172.28.40.9. If your machine supports IPv6, IPv6 address can also be used. If a non-null string is specified, TCP/IP communications are used.</p>
<p id="en-us_topic_0241716355_p54051709317"><a name="en-us_topic_0241716355_p54051709317"></a><a name="en-us_topic_0241716355_p54051709317"></a>Replacing <strong id="en-us_topic_0241716355_b8399102292213"><a name="en-us_topic_0241716355_b8399102292213"></a><a name="en-us_topic_0241716355_b8399102292213"></a>host</strong> with <strong id="en-us_topic_0241716355_b2895192482218"><a name="en-us_topic_0241716355_b2895192482218"></a><a name="en-us_topic_0241716355_b2895192482218"></a>hostaddr</strong> can prevent applications from querying host names, which may be important for applications with time constraints. However, a host name is required for GSSAPI or SSPI authentication methods. Therefore, the following rules are used:</p>
<a name="en-us_topic_0241716355_ol142972054436"></a><a name="en-us_topic_0241716355_ol142972054436"></a><ol id="en-us_topic_0241716355_ol142972054436"><li>If <strong id="en-us_topic_0241716355_b1363195892212"><a name="en-us_topic_0241716355_b1363195892212"></a><a name="en-us_topic_0241716355_b1363195892212"></a>host</strong> is specified but <strong id="en-us_topic_0241716355_b202585548226"><a name="en-us_topic_0241716355_b202585548226"></a><a name="en-us_topic_0241716355_b202585548226"></a>hostaddr</strong> is not, a query for the host name will be executed.</li><li>If <strong id="en-us_topic_0241716355_b111418171593"><a name="en-us_topic_0241716355_b111418171593"></a><a name="en-us_topic_0241716355_b111418171593"></a>hostaddr</strong> is specified but <strong id="en-us_topic_0241716355_b177191434152419"><a name="en-us_topic_0241716355_b177191434152419"></a><a name="en-us_topic_0241716355_b177191434152419"></a>host</strong> is not, the value of <strong id="en-us_topic_0241716355_b18879343112311"><a name="en-us_topic_0241716355_b18879343112311"></a><a name="en-us_topic_0241716355_b18879343112311"></a>hostaddr</strong> is the server network address. If the host name is required by authentication, the connection attempt fails.</li><li>If both <strong id="en-us_topic_0241716355_b13456181962417"><a name="en-us_topic_0241716355_b13456181962417"></a><a name="en-us_topic_0241716355_b13456181962417"></a>host</strong> and <strong id="en-us_topic_0241716355_b10359152632411"><a name="en-us_topic_0241716355_b10359152632411"></a><a name="en-us_topic_0241716355_b10359152632411"></a>hostaddr</strong> are specified, the value of <strong id="en-us_topic_0241716355_b461574612241"><a name="en-us_topic_0241716355_b461574612241"></a><a name="en-us_topic_0241716355_b461574612241"></a>hostaddr</strong> is the server network address. The value of <strong id="en-us_topic_0241716355_b68171452122414"><a name="en-us_topic_0241716355_b68171452122414"></a><a name="en-us_topic_0241716355_b68171452122414"></a>host</strong> is ignored unless it is required by authentication, in which case it is used as the host name.<div class="notice" id="en-us_topic_0241716355_note315429249"><a name="en-us_topic_0241716355_note315429249"></a><a name="en-us_topic_0241716355_note315429249"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="en-us_topic_0241716355_ul18372164011410"></a><a name="en-us_topic_0241716355_ul18372164011410"></a><ul id="en-us_topic_0241716355_ul18372164011410"><li>If <strong id="en-us_topic_0241716355_b1971172511487"><a name="en-us_topic_0241716355_b1971172511487"></a><a name="en-us_topic_0241716355_b1971172511487"></a>host</strong> is not the server name in the network address specified by <strong id="en-us_topic_0241716355_b17939204019255"><a name="en-us_topic_0241716355_b17939204019255"></a><a name="en-us_topic_0241716355_b17939204019255"></a>hostaddr</strong>, the authentication may fail.</li><li>If neither <strong id="en-us_topic_0241716355_b15690150152514"><a name="en-us_topic_0241716355_b15690150152514"></a><a name="en-us_topic_0241716355_b15690150152514"></a>host</strong> nor <strong id="en-us_topic_0241716355_b143666015265"><a name="en-us_topic_0241716355_b143666015265"></a><a name="en-us_topic_0241716355_b143666015265"></a>hostaddr</strong> is specified, libpq will use a local Unix-domain socket for connection. If the machine does not have a Unix-domain socket, it will attempt to connect to <strong id="en-us_topic_0241716355_b20818164674911"><a name="en-us_topic_0241716355_b20818164674911"></a><a name="en-us_topic_0241716355_b20818164674911"></a>localhost</strong>.</li></ul>
</div></div>
</li></ol>
</td>
</tr>
<tr id="en-us_topic_0241716355_row1789115013010"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p6890501503"><a name="en-us_topic_0241716355_p6890501503"></a><a name="en-us_topic_0241716355_p6890501503"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p108911504015"><a name="en-us_topic_0241716355_p108911504015"></a><a name="en-us_topic_0241716355_p108911504015"></a>Port number of the host server, or the socket file name extension for Unix-domain connections.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row1892503013"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p17895501806"><a name="en-us_topic_0241716355_p17895501806"></a><a name="en-us_topic_0241716355_p17895501806"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p10891750109"><a name="en-us_topic_0241716355_p10891750109"></a><a name="en-us_topic_0241716355_p10891750109"></a>Name of the user to connect as. By default, the username is the same as the operating system name of the user running the application.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row810313382544"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p410363845411"><a name="en-us_topic_0241716355_p410363845411"></a><a name="en-us_topic_0241716355_p410363845411"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p610418382548"><a name="en-us_topic_0241716355_p610418382548"></a><a name="en-us_topic_0241716355_p610418382548"></a>Database name. The default value is the same as the username.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row089155013011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p108916501406"><a name="en-us_topic_0241716355_p108916501406"></a><a name="en-us_topic_0241716355_p108916501406"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p17891450708"><a name="en-us_topic_0241716355_p17891450708"></a><a name="en-us_topic_0241716355_p17891450708"></a>Password to be used if the server requires password authentication.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row13897502012"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p6899508011"><a name="en-us_topic_0241716355_p6899508011"></a><a name="en-us_topic_0241716355_p6899508011"></a>connect_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p58914501206"><a name="en-us_topic_0241716355_p58914501206"></a><a name="en-us_topic_0241716355_p58914501206"></a>Maximum timeout period of the connection, in seconds (in decimal integer string). The value <strong id="b962561316448"><a name="b962561316448"></a><a name="b962561316448"></a>0</strong> or null indicates infinity. You are not advised to set the connection timeout period to a value less than 2 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row138918501207"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p38918501609"><a name="en-us_topic_0241716355_p38918501609"></a><a name="en-us_topic_0241716355_p38918501609"></a>client_encoding</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p8891750803"><a name="en-us_topic_0241716355_p8891750803"></a><a name="en-us_topic_0241716355_p8891750803"></a>Client encoding for the connection. In addition to the values accepted by the corresponding server options, you can use <strong id="en-us_topic_0241716355_b15122152918307"><a name="en-us_topic_0241716355_b15122152918307"></a><a name="en-us_topic_0241716355_b15122152918307"></a>auto</strong> to determine the correct encoding from the current environment in the client (the LC_CTYPE environment variable in the Unix system).</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row9893500011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p38914501305"><a name="en-us_topic_0241716355_p38914501305"></a><a name="en-us_topic_0241716355_p38914501305"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p7893501701"><a name="en-us_topic_0241716355_p7893501701"></a><a name="en-us_topic_0241716355_p7893501701"></a>Adds command-line options to send to the server at runtime.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row13894504017"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p08965016016"><a name="en-us_topic_0241716355_p08965016016"></a><a name="en-us_topic_0241716355_p08965016016"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p7892050207"><a name="en-us_topic_0241716355_p7892050207"></a><a name="en-us_topic_0241716355_p7892050207"></a>Current user identity.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row3891350509"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p1895501301"><a name="en-us_topic_0241716355_p1895501301"></a><a name="en-us_topic_0241716355_p1895501301"></a>keepalives</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p1089450404"><a name="en-us_topic_0241716355_p1089450404"></a><a name="en-us_topic_0241716355_p1089450404"></a>Whether TCP keepalive is enabled on the client side. The default value is <strong id="en-us_topic_0241716355_b1852105323110"><a name="en-us_topic_0241716355_b1852105323110"></a><a name="en-us_topic_0241716355_b1852105323110"></a>1</strong>, indicating that the function is enabled. The value <strong id="en-us_topic_0241716355_b1417231910328"><a name="en-us_topic_0241716355_b1417231910328"></a><a name="en-us_topic_0241716355_b1417231910328"></a>0</strong> indicates that the function is disabled. Ignore this parameter for Unix-domain connections.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row021915419911"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p1522010414918"><a name="en-us_topic_0241716355_p1522010414918"></a><a name="en-us_topic_0241716355_p1522010414918"></a>keepalives_idle</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p822044117917"><a name="en-us_topic_0241716355_p822044117917"></a><a name="en-us_topic_0241716355_p822044117917"></a>The number of seconds of inactivity after which TCP should send a keepalive message to the server. The value <strong id="en-us_topic_0241716355_b155782843315"><a name="en-us_topic_0241716355_b155782843315"></a><a name="en-us_topic_0241716355_b155782843315"></a>0</strong> indicates that the default value is used. Ignore this parameter for Unix-domain connections or if keep-alive is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row23626470912"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p73626471492"><a name="en-us_topic_0241716355_p73626471492"></a><a name="en-us_topic_0241716355_p73626471492"></a>keepalives_interval</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p494416224357"><a name="en-us_topic_0241716355_p494416224357"></a><a name="en-us_topic_0241716355_p494416224357"></a>The number of seconds after which a TCP keepalive message that is not acknowledged by the server should be retransmitted. The value <strong id="en-us_topic_0241716355_b15946149105114"><a name="en-us_topic_0241716355_b15946149105114"></a><a name="en-us_topic_0241716355_b15946149105114"></a>0</strong> indicates that the default value is used. Ignore this parameter for Unix-domain connections or if keep-alive is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0241716355_row759020441191"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241716355_p1059054419919"><a name="en-us_topic_0241716355_p1059054419919"></a><a name="en-us_topic_0241716355_p1059054419919"></a>keepalives_count</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241716355_p24777515373"><a name="en-us_topic_0241716355_p24777515373"></a><a name="en-us_topic_0241716355_p24777515373"></a>Adds command-line options to send to the server at runtime. For example, adding <strong id="en-us_topic_0241716355_b090526164217"><a name="en-us_topic_0241716355_b090526164217"></a><a name="en-us_topic_0241716355_b090526164217"></a>-c comm_debug_mode=off</strong> to set the value of the GUC parameter <strong id="en-us_topic_0241716355_b119055694210"><a name="en-us_topic_0241716355_b119055694210"></a><a name="en-us_topic_0241716355_b119055694210"></a>comm_debug_mode</strong> to <strong id="en-us_topic_0241716355_b129059610427"><a name="en-us_topic_0241716355_b129059610427"></a><a name="en-us_topic_0241716355_b129059610427"></a>off</strong>.</p>
</td>
</tr>
</tbody>
</table>

