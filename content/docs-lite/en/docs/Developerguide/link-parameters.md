# Link Parameters<a name="EN-US_TOPIC_0289900649"></a>

**Table  1**  Link parameters

<a name="en-us_topic_0283137650_en-us_topic_0241716355_table158814501407"></a>
<table><thead align="left"><tr id="en-us_topic_0283137650_en-us_topic_0241716355_row6888503015"><th class="cellrowborder" valign="top" width="17.53%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137650_en-us_topic_0241716355_p288750407"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p288750407"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p288750407"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="82.47%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137650_en-us_topic_0241716355_p208814501407"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p208814501407"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p208814501407"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137650_en-us_topic_0241716355_row168855011011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p14885505013"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p14885505013"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p14885505013"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p17887501308"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p17887501308"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p17887501308"></a>Name of the host to connect to. If the host name starts with a slash (/), Unix-domain socket communications instead of TCP/IP communications are used. The value is the directory where the socket file is stored. If <strong id="en-us_topic_0241716355_b424014303208"><a name="en-us_topic_0241716355_b424014303208"></a><a name="en-us_topic_0241716355_b424014303208"></a>host</strong> is not specified, the default behavior is to connect to the Unix-domain socket in the <strong id="en-us_topic_0241716355_b14249195814206"><a name="en-us_topic_0241716355_b14249195814206"></a><a name="en-us_topic_0241716355_b14249195814206"></a>/tmp</strong> directory (or the socket directory specified during database installation). On a machine without a Unix-domain socket, the default behavior is to connect to <strong id="en-us_topic_0241716355_b1660434265619"><a name="en-us_topic_0241716355_b1660434265619"></a><a name="en-us_topic_0241716355_b1660434265619"></a>localhost</strong>.</p>
<p id="p1295418162219"><a name="p1295418162219"></a><a name="p1295418162219"></a>You can specify multiple host names by using a character string separated by commas (,). Multiple host names can be specified.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row168915019011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p38935016014"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p38935016014"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p38935016014"></a>hostaddr</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p12151325122"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p12151325122"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p12151325122"></a>IP address of the host to connect to. The value is in standard IPv4 address format, for example, 172.28.40.9. If the machine supports IPv6, IPv6 address can also be used. If a non-null string is specified, TCP/IP communications are used.</p>
<p id="p1229945672316"><a name="p1229945672316"></a><a name="p1229945672316"></a>You can specify multiple IP addresses by using a character string separated by commas (,). Multiple IP addresses can be specified.</p>
<p id="en-us_topic_0283137650_en-us_topic_0241716355_p54051709317"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p54051709317"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p54051709317"></a>Replacing <strong id="en-us_topic_0241716355_b8399102292213"><a name="en-us_topic_0241716355_b8399102292213"></a><a name="en-us_topic_0241716355_b8399102292213"></a>host</strong> with <strong id="en-us_topic_0241716355_b2895192482218"><a name="en-us_topic_0241716355_b2895192482218"></a><a name="en-us_topic_0241716355_b2895192482218"></a>hostaddr</strong> can prevent applications from querying host names, which may be important for applications with time constraints. However, a host name is required for GSSAPI or SSPI authentication methods. Therefore, the following rules are used:</p>
<a name="en-us_topic_0283137650_en-us_topic_0241716355_ol142972054436"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_ol142972054436"></a><ol id="en-us_topic_0283137650_en-us_topic_0241716355_ol142972054436"><li>If <strong id="en-us_topic_0241716355_b1363195892212"><a name="en-us_topic_0241716355_b1363195892212"></a><a name="en-us_topic_0241716355_b1363195892212"></a>host</strong> is specified but <strong id="en-us_topic_0241716355_b202585548226"><a name="en-us_topic_0241716355_b202585548226"></a><a name="en-us_topic_0241716355_b202585548226"></a>hostaddr</strong> is not, a query for the host name will be executed.</li><li>If <strong id="en-us_topic_0241716355_b111418171593"><a name="en-us_topic_0241716355_b111418171593"></a><a name="en-us_topic_0241716355_b111418171593"></a>hostaddr</strong> is specified but <strong id="en-us_topic_0241716355_b177191434152419"><a name="en-us_topic_0241716355_b177191434152419"></a><a name="en-us_topic_0241716355_b177191434152419"></a>host</strong> is not, the value of <strong id="en-us_topic_0241716355_b18879343112311"><a name="en-us_topic_0241716355_b18879343112311"></a><a name="en-us_topic_0241716355_b18879343112311"></a>hostaddr</strong> is the server network address. If the host name is required by authentication, the connection attempt fails.</li><li>If both <strong id="en-us_topic_0241716355_b13456181962417"><a name="en-us_topic_0241716355_b13456181962417"></a><a name="en-us_topic_0241716355_b13456181962417"></a>host</strong> and <strong id="en-us_topic_0241716355_b10359152632411"><a name="en-us_topic_0241716355_b10359152632411"></a><a name="en-us_topic_0241716355_b10359152632411"></a>hostaddr</strong> are specified, the value of <strong id="en-us_topic_0241716355_b461574612241"><a name="en-us_topic_0241716355_b461574612241"></a><a name="en-us_topic_0241716355_b461574612241"></a>hostaddr</strong> is the server network address. The value of <strong id="en-us_topic_0241716355_b68171452122414"><a name="en-us_topic_0241716355_b68171452122414"></a><a name="en-us_topic_0241716355_b68171452122414"></a>host</strong> is ignored unless it is required by authentication, in which case it is used as the host name.<div class="notice" id="en-us_topic_0283137650_en-us_topic_0241716355_note315429249"><a name="en-us_topic_0283137650_en-us_topic_0241716355_note315429249"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_note315429249"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="en-us_topic_0283137650_en-us_topic_0241716355_ul18372164011410"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_ul18372164011410"></a><ul id="en-us_topic_0283137650_en-us_topic_0241716355_ul18372164011410"><li>If <strong id="en-us_topic_0241716355_b1971172511487"><a name="en-us_topic_0241716355_b1971172511487"></a><a name="en-us_topic_0241716355_b1971172511487"></a>host</strong> is not the server name in the network address specified by <strong id="en-us_topic_0241716355_b17939204019255"><a name="en-us_topic_0241716355_b17939204019255"></a><a name="en-us_topic_0241716355_b17939204019255"></a>hostaddr</strong>, the authentication may fail.</li><li>If neither <strong id="en-us_topic_0241716355_b15690150152514"><a name="en-us_topic_0241716355_b15690150152514"></a><a name="en-us_topic_0241716355_b15690150152514"></a>host</strong> nor <strong id="en-us_topic_0241716355_b143666015265"><a name="en-us_topic_0241716355_b143666015265"></a><a name="en-us_topic_0241716355_b143666015265"></a>hostaddr</strong> is specified, libpq will use a local Unix-domain socket for connection. If the machine does not have a Unix-domain socket, it will attempt to connect to <strong id="en-us_topic_0241716355_b20818164674911"><a name="en-us_topic_0241716355_b20818164674911"></a><a name="en-us_topic_0241716355_b20818164674911"></a>localhost</strong>.</li></ul>
</div></div>
</li></ol>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row1789115013010"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p6890501503"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p6890501503"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p6890501503"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p108911504015"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p108911504015"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p108911504015"></a>Port number of the host server, or the socket file name extension for Unix-domain connections.</p>
<p id="p15583194402612"><a name="p15583194402612"></a><a name="p15583194402612"></a>You can specify multiple port numbers by using a character string separated by commas (,). Multiple port numbers can be specified.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row1892503013"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p17895501806"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p17895501806"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p17895501806"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p10891750109"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p10891750109"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p10891750109"></a>Name of the user to connect as. By default, the username is the same as the operating system name of the user running the application.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row810313382544"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p410363845411"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p410363845411"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p410363845411"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p610418382548"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p610418382548"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p610418382548"></a>Database name. The default value is the same as the username.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row089155013011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p108916501406"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p108916501406"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p108916501406"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p17891450708"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p17891450708"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p17891450708"></a>Password to be used if the server requires password authentication.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row13897502012"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p6899508011"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p6899508011"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p6899508011"></a>connect_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p58914501206"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p58914501206"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p58914501206"></a>Maximum timeout period of the connection, in seconds (in decimal integer string). The value <strong id="b962561316448"><a name="b962561316448"></a><a name="b962561316448"></a>0</strong> or null indicates infinity. You are not advised to set the connection timeout period to a value less than 2 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row138918501207"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p38918501609"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p38918501609"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p38918501609"></a>client_encoding</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p8891750803"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p8891750803"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p8891750803"></a>Client encoding for the connection. In addition to the values accepted by the corresponding server options, you can use <strong id="b632285125413"><a name="b632285125413"></a><a name="b632285125413"></a>auto</strong> to determine the correct encoding from the current environment in the client (the <em id="i1032920511546"><a name="i1032920511546"></a><a name="i1032920511546"></a>LC_CTYPE</em> environment variable in the Unix system).</p>
</td>
</tr>
<tr id="row816911175111"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p1169141119517"><a name="p1169141119517"></a><a name="p1169141119517"></a>tty</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p181691011155110"><a name="p181691011155110"></a><a name="p181691011155110"></a>This parameter can be ignored. (This parameter was used to specify the location to which the debugging output of the server was sent).</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row9893500011"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p38914501305"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p38914501305"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p38914501305"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p7893501701"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p7893501701"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p7893501701"></a>Adds command-line options to send to the server at runtime.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row13894504017"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p08965016016"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p08965016016"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p08965016016"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p7892050207"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p7892050207"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p7892050207"></a>Current user identity.</p>
</td>
</tr>
<tr id="row85007318525"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p150093175218"><a name="p150093175218"></a><a name="p150093175218"></a>fallback_application_name</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p1450018317528"><a name="p1450018317528"></a><a name="p1450018317528"></a>Specifies a backup value for the <a href="http://www.postgres.cn/docs/12/runtime-config-logging.html#GUC-APPLICATION-NAME" target="_blank" rel="noopener noreferrer"><strong id="b1643254111419"><a name="b1643254111419"></a><a name="b1643254111419"></a>application_name</strong></a> parameter. This value is used if no value is set for <strong id="b1894618493351"><a name="b1894618493351"></a><a name="b1894618493351"></a>application_name</strong> through a connection parameter or the <em id="i1194624917357"><a name="i1194624917357"></a><a name="i1194624917357"></a>PGAPPNAME</em> environment variable. It is useful to specify a backup value in a common tool program that wants to set a default application name but does not want it to be overwritten by the user.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row3891350509"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p1895501301"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1895501301"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1895501301"></a>keepalives</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p1089450404"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1089450404"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1089450404"></a>Whether TCP keepalive is enabled on the client side. The default value is <strong id="en-us_topic_0241716355_b1852105323110"><a name="en-us_topic_0241716355_b1852105323110"></a><a name="en-us_topic_0241716355_b1852105323110"></a>1</strong>, indicating that the function is enabled. The value <strong id="en-us_topic_0241716355_b1417231910328"><a name="en-us_topic_0241716355_b1417231910328"></a><a name="en-us_topic_0241716355_b1417231910328"></a>0</strong> indicates that the function is disabled. Ignore this parameter for Unix-domain connections.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row021915419911"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p1522010414918"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1522010414918"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1522010414918"></a>keepalives_idle</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p822044117917"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p822044117917"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p822044117917"></a>The number of seconds of inactivity after which TCP should send a keepalive message to the server. The value <strong id="en-us_topic_0241716355_b155782843315"><a name="en-us_topic_0241716355_b155782843315"></a><a name="en-us_topic_0241716355_b155782843315"></a>0</strong> indicates that the default value is used. Ignore this parameter for Unix-domain connections or if keep-alive is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row23626470912"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p73626471492"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p73626471492"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p73626471492"></a>keepalives_interval</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p494416224357"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p494416224357"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p494416224357"></a>The number of seconds after which a TCP keepalive message that is not acknowledged by the server should be retransmitted. The value <strong id="en-us_topic_0241716355_b15946149105114"><a name="en-us_topic_0241716355_b15946149105114"></a><a name="en-us_topic_0241716355_b15946149105114"></a>0</strong> indicates that the default value is used. Ignore this parameter for Unix-domain connections or if keep-alive is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0283137650_en-us_topic_0241716355_row759020441191"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p1059054419919"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1059054419919"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p1059054419919"></a>keepalives_count</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137650_en-us_topic_0241716355_p24777515373"><a name="en-us_topic_0283137650_en-us_topic_0241716355_p24777515373"></a><a name="en-us_topic_0283137650_en-us_topic_0241716355_p24777515373"></a>Adds command-line options to send to the server at runtime. For example, adding <strong id="b89869033615"><a name="b89869033615"></a><a name="b89869033615"></a>-c comm_debug_mode=off</strong> to set the value of the GUC parameter <strong id="b179866093610"><a name="b179866093610"></a><a name="b179866093610"></a>comm_debug_mode</strong> to <strong id="b09861609361"><a name="b09861609361"></a><a name="b09861609361"></a>off</strong>.</p>
</td>
</tr>
<tr id="row1765822885215"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p1658172885211"><a name="p1658172885211"></a><a name="p1658172885211"></a>rw_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p1865862875220"><a name="p1865862875220"></a><a name="p1865862875220"></a>Sets the read and write timeout interval of the client connection.</p>
</td>
</tr>
<tr id="row19461047182114"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p893701625117"><a name="p893701625117"></a><a name="p893701625117"></a>sslmode</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p119370163511"><a name="p119370163511"></a><a name="p119370163511"></a>Specifies whether to enable SSL encryption.</p>
<a name="ul1143894124913"></a><a name="ul1143894124913"></a><ul id="ul1143894124913"><li><strong id="b1283131719361"><a name="b1283131719361"></a><a name="b1283131719361"></a>disable</strong>: SSL connection is disabled.</li><li><strong id="b373521983618"><a name="b373521983618"></a><a name="b373521983618"></a>allow</strong>: If the database server requires SSL connection, SSL connection can be enabled. However, authenticity of the database server will not be verified.</li><li><strong id="b133338264365"><a name="b133338264365"></a><a name="b133338264365"></a>prefer</strong>: If the database supports SSL connection, SSL connection is preferred. However, authenticity of the database server will not be verified.</li><li><strong id="b18766163611361"><a name="b18766163611361"></a><a name="b18766163611361"></a>require</strong>: SSL connection is required and data is encrypted. However, authenticity of the database server will not be verified.</li><li><strong id="b8261142113611"><a name="b8261142113611"></a><a name="b8261142113611"></a>verify-ca</strong>: SSL connection is required. Currently, Windows ODBC does not support cert authentication.</li><li><strong id="b169646512365"><a name="b169646512365"></a><a name="b169646512365"></a>verify-full</strong>: SSL connection is required. Currently, Windows ODBC does not support cert authentication.</li></ul>
</td>
</tr>
<tr id="row8946184792116"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p76819206581"><a name="p76819206581"></a><a name="p76819206581"></a>sslcompression</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p6681720175817"><a name="p6681720175817"></a><a name="p6681720175817"></a>If this parameter is set to <strong id="b128205863612"><a name="b128205863612"></a><a name="b128205863612"></a>1</strong> (default value), the data transmitted over the SSL connection is compressed (this requires that the OpenSSL version be 0.9.8 or later). If this parameter is set to <strong id="b2364187153719"><a name="b2364187153719"></a><a name="b2364187153719"></a>0</strong>, compression will be disabled (this requires OpenSSL 1.0.0 or later). If a connection without SSL is established, this parameter is ignored. If the OpenSSL version in use does not support this parameter, it will also be ignored. Compression takes up CPU time, but it increases throughput when the bottleneck is the network. If CPU performance is a limiting factor, disabling compression can improve response time and throughput.</p>
</td>
</tr>
<tr id="row14946174715219"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p78589374594"><a name="p78589374594"></a><a name="p78589374594"></a>sslcert</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p485811371596"><a name="p485811371596"></a><a name="p485811371596"></a>This parameter specifies the file name of the client SSL certificate. It replaces the default <strong id="b11490127113711"><a name="b11490127113711"></a><a name="b11490127113711"></a>~/.postgresql/postgresql.crt</strong>. If no SSL connection is established, this parameter is ignored.</p>
</td>
</tr>
<tr id="row1794664722117"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p6104694010"><a name="p6104694010"></a><a name="p6104694010"></a>sslkey</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p201040918019"><a name="p201040918019"></a><a name="p201040918019"></a>This parameter specifies the location of the key used for the client certificate. It can specify the name of a file used to replace the default <strong id="b4464663710"><a name="b4464663710"></a><a name="b4464663710"></a>~/.postgresql/postgresql.key</strong>, or specify a key obtained from an external "engine" that is a loadable module of OpenSSL. The description of an external engine should consist of a colon-separated engine name and an engine-related key identifier. If no SSL connection is established, this parameter is ignored.</p>
</td>
</tr>
<tr id="row19461647162110"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p0934114618013"><a name="p0934114618013"></a><a name="p0934114618013"></a>sslrootcert</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p29341461502"><a name="p29341461502"></a><a name="p29341461502"></a>This parameter specifies the name of a file that contains the SSL Certificate Authority (CA) certificate. If the file exists, the system authenticates the server certificate issued by one of these authorities. The default value is <strong id="b1199917109388"><a name="b1199917109388"></a><a name="b1199917109388"></a>~/.postgresql/root.crt</strong>.</p>
</td>
</tr>
<tr id="row5946174714219"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p194508411418"><a name="p194508411418"></a><a name="p194508411418"></a>sslcrl</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p134508418115"><a name="p134508418115"></a><a name="p134508418115"></a>This parameter specifies the file name of the SSL Certificate Revocation List (CRL). If a certificate listed in this file exists, the server certificate authentication will be rejected. The default value is <strong id="b4462162993818"><a name="b4462162993818"></a><a name="b4462162993818"></a>~/.postgresql/root.crl</strong>.</p>
</td>
</tr>
<tr id="row189464475219"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p7586855528"><a name="p7586855528"></a><a name="p7586855528"></a>requirepeer</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p25863556218"><a name="p25863556218"></a><a name="p25863556218"></a>This parameter specifies the OS user of the server, for example, <strong id="b960353463816"><a name="b960353463816"></a><a name="b960353463816"></a>requirepeer=postgres</strong>. When a Unix-domain socket connection is established, if this parameter is set, the client checks whether the server process is running under the specified username at the beginning of the connection. If not, the connection will be interrupted by an error. This parameter can be used to provide server authentication similar to that of the SSL certificate on TCP/IP connections. (Note that if the Unix domain socket is in <strong id="b025146133913"><a name="b025146133913"></a><a name="b025146133913"></a>/tmp</strong> or another public writable location, any user can start a server for listening to the location. Use this parameter to ensure that your device is connected to a server that is run by a trusted user.) This option is supported only on platforms that implement the peer authentication method.</p>
</td>
</tr>
<tr id="row139468473213"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p19977233339"><a name="p19977233339"></a><a name="p19977233339"></a>krbsrvname</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p3977123313317"><a name="p3977123313317"></a><a name="p3977123313317"></a>This parameter specifies the Kerberos service name used for GSSAPI authentication. For successful Kerberos authentication, this value must match the service name specified in the server configuration.</p>
<div class="note" id="note25962441579"><a name="note25962441579"></a><a name="note25962441579"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p10596124455716"><a name="p10596124455716"></a><a name="p10596124455716"></a>In the <span id="text1558615111816"><a name="text1558615111816"></a><a name="text1558615111816"></a>Lite</span> scenario, openGauss does not support GSSAPI authentication.</p>
</div></div>
</td>
</tr>
<tr id="row894634752113"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p83597566314"><a name="p83597566314"></a><a name="p83597566314"></a>gsslib</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p193592566319"><a name="p193592566319"></a><a name="p193592566319"></a>This parameter specifies the GSS library used for GSSAPI authentication. It is used only in the Windows OS. If this parameter is set to <strong id="b711945413391"><a name="b711945413391"></a><a name="b711945413391"></a>gssapi</strong>, <strong id="b111193543394"><a name="b111193543394"></a><a name="b111193543394"></a>libpq</strong> is forced to use the GSSAPI library to replace the default SSPI for authentication.</p>
<div class="note" id="note1371211128584"><a name="note1371211128584"></a><a name="note1371211128584"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p471211255816"><a name="p471211255816"></a><a name="p471211255816"></a>In the <span id="text17541201811521"><a name="text17541201811521"></a><a name="text17541201811521"></a>Lite</span> scenario, openGauss does not support GSSAPI authentication.</p>
</div></div>
</td>
</tr>
<tr id="row294574732119"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p862916218417"><a name="p862916218417"></a><a name="p862916218417"></a>service</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p1862952116412"><a name="p1862952116412"></a><a name="p1862952116412"></a>This parameter specifies the name of the service for which the additional parameter is used. It specifies a service name in <strong id="b1519921014011"><a name="b1519921014011"></a><a name="b1519921014011"></a>pg_service.conf</strong> that holds the additional connection parameters. This allows the application to specify only one service name so that the connection parameters can be centrally maintained.</p>
</td>
</tr>
<tr id="row31444919524"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p584901327"><a name="p584901327"></a><a name="p584901327"></a>authtype</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p584140322"><a name="p584140322"></a><a name="p584140322"></a><strong id="b19131217409"><a name="b19131217409"></a><a name="b19131217409"></a>authtype</strong> is no longer used, so it is marked as a parameter not to be displayed. It is retained in an array so as not to reject the <strong id="b2038711269406"><a name="b2038711269406"></a><a name="b2038711269406"></a>conninfo</strong> string from old applications that might still try to set it.</p>
</td>
</tr>
<tr id="row1314114995210"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p1641315828"><a name="p1641315828"></a><a name="p1641315828"></a>remote_nodename</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p1945151924"><a name="p1945151924"></a><a name="p1945151924"></a>Specifies the name of the remote node connected to the local node.</p>
</td>
</tr>
<tr id="row11144494520"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p02941320211"><a name="p02941320211"></a><a name="p02941320211"></a>localhost</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p1829463220220"><a name="p1829463220220"></a><a name="p1829463220220"></a>Specifies the local host in a connection channel.</p>
</td>
</tr>
<tr id="row14147493523"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p13771164311214"><a name="p13771164311214"></a><a name="p13771164311214"></a>localport</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p167711143229"><a name="p167711143229"></a><a name="p167711143229"></a>Specifies the local port in a connection channel.</p>
</td>
</tr>
<tr id="row1414124916528"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p16912618637"><a name="p16912618637"></a><a name="p16912618637"></a>fencedUdfRPCMode</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p119121518235"><a name="p119121518235"></a><a name="p119121518235"></a>Specifies whether the fenced udf RPC protocol uses UNIX domain sockets or special socket file names. The default value is <strong id="b13773154217522"><a name="b13773154217522"></a><a name="b13773154217522"></a>0</strong>, indicating that the UNIX domain socket mode is used and the file type is .s.PGSQL.%d. To use the fenced UDF mode, set this parameter to <strong id="b177801442135212"><a name="b177801442135212"></a><a name="b177801442135212"></a>1</strong>. In this case, the file type is .s.fencedMaster_unixdomain.</p>
<div class="note" id="note16875454715"><a name="note16875454715"></a><a name="note16875454715"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p209175444714"><a name="p209175444714"></a><a name="p209175444714"></a>In the <span id="text1479161801819"><a name="text1479161801819"></a><a name="text1479161801819"></a>Lite</span> scenario, openGauss does not support the Java UDF.</p>
</div></div>
</td>
</tr>
<tr id="row11434975216"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p923618371631"><a name="p923618371631"></a><a name="p923618371631"></a>replication</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p423673715313"><a name="p423673715313"></a><a name="p423673715313"></a>Specifies whether the connection should use replication protocols instead of common protocols. Protocols with this parameter configured are internal protocols used for PostgreSQL replication connections and tools such as <strong id="b17736157174116"><a name="b17736157174116"></a><a name="b17736157174116"></a>pg_basebackup</strong>, while they can also be used by third-party applications. The following values, which are case-insensitive, are supported:</p>
<a name="ul5843192711282"></a><a name="ul5843192711282"></a><ul id="ul5843192711282"><li><strong id="b153105812426"><a name="b153105812426"></a><a name="b153105812426"></a>true</strong>, <strong id="b2063341024212"><a name="b2063341024212"></a><a name="b2063341024212"></a>on</strong>, <strong id="b74466134424"><a name="b74466134424"></a><a name="b74466134424"></a>yes</strong>, and <strong id="b1096571817428"><a name="b1096571817428"></a><a name="b1096571817428"></a>1</strong>: Specify that the physical replication mode is connected.</li></ul>
<a name="ul167510399296"></a><a name="ul167510399296"></a><ul id="ul167510399296"><li><strong id="b2642527204313"><a name="b2642527204313"></a><a name="b2642527204313"></a>database</strong>: Specifies that the logical replication mode and the database specified by <strong id="b11538349134217"><a name="b11538349134217"></a><a name="b11538349134217"></a>dbname</strong> are connected.</li></ul>
<a name="ul967131772919"></a><a name="ul967131772919"></a><ul id="ul967131772919"><li><strong id="b6731639124314"><a name="b6731639124314"></a><a name="b6731639124314"></a>false</strong>, <strong id="b161121441194310"><a name="b161121441194310"></a><a name="b161121441194310"></a>off</strong>, <strong id="b2028764318434"><a name="b2028764318434"></a><a name="b2028764318434"></a>no</strong>, and <strong id="b1612314488436"><a name="b1612314488436"></a><a name="b1612314488436"></a>0</strong>: Specify that the connection is a regular connection, which is the default behavior.</li></ul>
<p id="p164201343270"><a name="p164201343270"></a><a name="p164201343270"></a>In physical or logical replication mode, only simple query protocols can be used.</p>
</td>
</tr>
<tr id="row181415491523"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p1717923013416"><a name="p1717923013416"></a><a name="p1717923013416"></a>backend_version</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p317913304413"><a name="p317913304413"></a><a name="p317913304413"></a>Specifies the backend version to be passed to the remote end.</p>
</td>
</tr>
<tr id="row31414496526"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p322143915410"><a name="p322143915410"></a><a name="p322143915410"></a>prototype</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p222193913410"><a name="p222193913410"></a><a name="p222193913410"></a>Sets the current protocol level. The default value is <strong id="b1870713447442"><a name="b1870713447442"></a><a name="b1870713447442"></a>PROTO_TCP</strong>.</p>
</td>
</tr>
<tr id="row151484945218"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p1680185213410"><a name="p1680185213410"></a><a name="p1680185213410"></a>enable_ce</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p2809521549"><a name="p2809521549"></a><a name="p2809521549"></a>Specifies whether a client is allowed to connect to a fully encrypted database. The default value is <strong id="b716714561445"><a name="b716714561445"></a><a name="b716714561445"></a>0</strong>. To enable this function, change the value to <strong id="b2016714564449"><a name="b2016714564449"></a><a name="b2016714564449"></a>1</strong>.</p>
<div class="note" id="note189792235307"><a name="note189792235307"></a><a name="note189792235307"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p119791123143019"><a name="p119791123143019"></a><a name="p119791123143019"></a>In the <span id="text15904157115716"><a name="text15904157115716"></a><a name="text15904157115716"></a>Lite</span> scenario, openGauss does not support encrypted databases.</p>
</div></div>
</td>
</tr>
<tr id="row18142498528"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p138245915411"><a name="p138245915411"></a><a name="p138245915411"></a>connection_info</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p19382115911416"><a name="p19382115911416"></a><a name="p19382115911416"></a>The value of <strong id="b137621259184414"><a name="b137621259184414"></a><a name="b137621259184414"></a>connection_info</strong> is a JSON character string consisting of <strong id="b11762259104418"><a name="b11762259104418"></a><a name="b11762259104418"></a>driver_name</strong>, <strong id="b1876245919445"><a name="b1876245919445"></a><a name="b1876245919445"></a>driver_version</strong>, <strong id="b7762145994414"><a name="b7762145994414"></a><a name="b7762145994414"></a>driver_path</strong>, and <strong id="b147631959164411"><a name="b147631959164411"></a><a name="b147631959164411"></a>os_user</strong>.</p>
<p id="p869462211811"><a name="p869462211811"></a><a name="p869462211811"></a>If the value is not null, use <strong id="b172121678455"><a name="b172121678455"></a><a name="b172121678455"></a>connection_info</strong> and ignore <strong id="b172123713452"><a name="b172123713452"></a><a name="b172123713452"></a>connectionExtraInf</strong>.</p>
<p id="p56869911911"><a name="p56869911911"></a><a name="p56869911911"></a>If the value is null, a connection information string related to <strong id="b670101212452"><a name="b670101212452"></a><a name="b670101212452"></a>libpq</strong> is generated. When <strong id="b7702131213458"><a name="b7702131213458"></a><a name="b7702131213458"></a>connectionExtraInf</strong> is set to <strong id="b137021212114512"><a name="b137021212114512"></a><a name="b137021212114512"></a>false</strong>, the value of <strong id="b6702112184510"><a name="b6702112184510"></a><a name="b6702112184510"></a>connection_info</strong> consists of only <strong id="b117021012164514"><a name="b117021012164514"></a><a name="b117021012164514"></a>driver_name</strong> and <strong id="b770313125454"><a name="b770313125454"></a><a name="b770313125454"></a>driver_version</strong>.</p>
</td>
</tr>
<tr id="row014144913523"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p165241777513"><a name="p165241777513"></a><a name="p165241777513"></a>connectionExtraInf</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p1052477758"><a name="p1052477758"></a><a name="p1052477758"></a>Specifies whether the value of <strong id="b178722812456"><a name="b178722812456"></a><a name="b178722812456"></a>connection_info</strong> contains extension information. The default value is <strong id="b118810280451"><a name="b118810280451"></a><a name="b118810280451"></a>0</strong>. If the value contains other information, set this parameter to <strong id="b888122811455"><a name="b888122811455"></a><a name="b888122811455"></a>1</strong>.</p>
</td>
</tr>
<tr id="row13743329173315"><td class="cellrowborder" valign="top" width="17.53%" headers="mcps1.2.3.1.1 "><p id="p197441229183312"><a name="p197441229183312"></a><a name="p197441229183312"></a>target_session_attrs</p>
</td>
<td class="cellrowborder" valign="top" width="82.47%" headers="mcps1.2.3.1.2 "><p id="p87441829123311"><a name="p87441829123311"></a><a name="p87441829123311"></a>Specifies the type of the host to be connected. The connection is successful only when the host type is the same as the configured value. The rules for setting <strong id="b132561826125"><a name="b132561826125"></a><a name="b132561826125"></a>target_session_attrs</strong> are as follows:</p>
<a name="ul44624653710"></a><a name="ul44624653710"></a><ul id="ul44624653710"><li><strong id="b13880206115816"><a name="b13880206115816"></a><a name="b13880206115816"></a>any</strong> (default value): All types of hosts can be connected.</li><li><strong id="b224481241212"><a name="b224481241212"></a><a name="b224481241212"></a>read-write</strong>: The connection is set up only when the connected host is readable and writable.</li><li><strong id="b16591525191210"><a name="b16591525191210"></a><a name="b16591525191210"></a>read-only</strong>: Only readable hosts can be connected.</li><li><strong id="b37211298129"><a name="b37211298129"></a><a name="b37211298129"></a>primary</strong>: Only the primary server in the primary/standby systems can be connected.</li><li><strong id="b4619553101212"><a name="b4619553101212"></a><a name="b4619553101212"></a>standby</strong>: Only the standby server in the primary/standby systems can be connected.</li><li><strong id="b9241650121311"><a name="b9241650121311"></a><a name="b9241650121311"></a>prefer-standby</strong>: The system first attempts to find a standby node for connection. If all hosts in the <strong id="b20266972143"><a name="b20266972143"></a><a name="b20266972143"></a>hosts</strong> list fail to be connected, try the <strong id="b1154081171417"><a name="b1154081171417"></a><a name="b1154081171417"></a>any</strong> mode.</li></ul>
</td>
</tr>
</tbody>
</table>

