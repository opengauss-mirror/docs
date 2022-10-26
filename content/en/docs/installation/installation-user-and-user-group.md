# Installation User and User Group<a name="EN-US_TOPIC_0249784587"></a>

To minimize the installation account permissions during the installation and ensure system running security of openGauss after the installation, the installation scripts automatically create a user-specified installation user and this user will be used as the administrator for subsequent running and maintenance of the openGauss.

<a name="en-us_topic_0241802568_table17383868"></a>
<table><thead align="left"><tr id="en-us_topic_0241802568_row16223649"><th class="cellrowborder" valign="top" width="21.997800219978004%" id="mcps1.1.4.1.1"><p id="en-us_topic_0241802568_p64251046"><a name="en-us_topic_0241802568_p64251046"></a><a name="en-us_topic_0241802568_p64251046"></a>User/Group Name</p>
</th>
<th class="cellrowborder" valign="top" width="19.208079192080792%" id="mcps1.1.4.1.2"><p id="en-us_topic_0241802568_p47070262"><a name="en-us_topic_0241802568_p47070262"></a><a name="en-us_topic_0241802568_p47070262"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="58.7941205879412%" id="mcps1.1.4.1.3"><p id="en-us_topic_0241802568_p14680522"><a name="en-us_topic_0241802568_p14680522"></a><a name="en-us_topic_0241802568_p14680522"></a>Suggestion</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241802568_row41482117"><td class="cellrowborder" valign="top" width="21.997800219978004%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0241802568_p14919978"><a name="en-us_topic_0241802568_p14919978"></a><a name="en-us_topic_0241802568_p14919978"></a><span id="en-us_topic_0241802568_text10686081285"><a name="en-us_topic_0241802568_text10686081285"></a><a name="en-us_topic_0241802568_text10686081285"></a>dbgrp</span></p>
</td>
<td class="cellrowborder" valign="top" width="19.208079192080792%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0241802568_p24355590"><a name="en-us_topic_0241802568_p24355590"></a><a name="en-us_topic_0241802568_p24355590"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="58.7941205879412%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0241802568_p56806487"><a name="en-us_topic_0241802568_p56806487"></a><a name="en-us_topic_0241802568_p56806487"></a>You are advised to plan the user group <strong id="b177512221612"><a name="b177512221612"></a><a name="b177512221612"></a><span id="text17630802143437"><a name="text17630802143437"></a><a name="text17630802143437"></a>dbgrp</span></strong> independently.</p>
<p id="en-us_topic_0241802568_p1786914110717"><a name="en-us_topic_0241802568_p1786914110717"></a><a name="en-us_topic_0241802568_p1786914110717"></a>This user group is specified by the <strong id="b1105142512334"><a name="b1105142512334"></a><a name="b1105142512334"></a>-G</strong> parameter in <a href="initializing-the-installation-environment.md">Initializing the Installation Environment</a>. If this user group does not exist, the installation script automatically creates it. Alternatively, you can create the user group before the installation. User permissions are checked when the <strong id="b842352706144522"><a name="b842352706144522"></a><a name="b842352706144522"></a>gs_preinstall</strong> script is executed. The <strong id="b1236643107144610"><a name="b1236643107144610"></a><a name="b1236643107144610"></a>gs_preinstall</strong> script automatically grants access and execution permissions on the installation directory and data directory to all users in this user group.</p>
<p id="p6708570365"><a name="p6708570365"></a><a name="p6708570365"></a>Run the following command to create the user group <strong id="b208201058183314"><a name="b208201058183314"></a><a name="b208201058183314"></a>dbgrp</strong>:</p>
<pre class="screen" id="en-us_topic_0241802568_screen137141497719"><a name="en-us_topic_0241802568_screen137141497719"></a><a name="en-us_topic_0241802568_screen137141497719"></a><strong id="en-us_topic_0241802568_b1385513131272"><a name="en-us_topic_0241802568_b1385513131272"></a><a name="en-us_topic_0241802568_b1385513131272"></a>groupadd</strong> <span id="en-us_topic_0241802568_text585511131672"><a name="en-us_topic_0241802568_text585511131672"></a><a name="en-us_topic_0241802568_text585511131672"></a>dbgrp</span></pre>
</td>
</tr>
<tr id="row8515844153317"><td class="cellrowborder" valign="top" width="21.997800219978004%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0241802568_p34244382"><a name="en-us_topic_0241802568_p34244382"></a><a name="en-us_topic_0241802568_p34244382"></a>omm</p>
</td>
<td class="cellrowborder" valign="top" width="19.208079192080792%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0241802568_p38573212"><a name="en-us_topic_0241802568_p38573212"></a><a name="en-us_topic_0241802568_p38573212"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="58.7941205879412%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0241802568_p135087814920"><a name="en-us_topic_0241802568_p135087814920"></a><a name="en-us_topic_0241802568_p135087814920"></a>You are advised to plan the user <strong id="b145837179346"><a name="b145837179346"></a><a name="b145837179346"></a>omm</strong> for <span id="text1888412150568"><a name="text1888412150568"></a><a name="text1888412150568"></a>openGauss</span> operation and maintenance.</p>
<p id="en-us_topic_0241802568_p34816564"><a name="en-us_topic_0241802568_p34816564"></a><a name="en-us_topic_0241802568_p34816564"></a>This user is the OS user specified by the <strong id="b150883819346"><a name="b150883819346"></a><a name="b150883819346"></a>-U</strong> parameter in <a href="initializing-the-installation-environment.md">Initializing the Installation Environment</a>. If this user exists, delete it or change the initial user. For security purposes, the user group is planned as follows:</p>
<p id="p229710322349"><a name="p229710322349"></a><a name="p229710322349"></a>Group: <strong id="b1869310393511"><a name="b1869310393511"></a><a name="b1869310393511"></a>dbgrp</strong></p>
</td>
</tr>
</tbody>
</table>

During the openGauss installation, when  **gs\_preinstall**  is executed, a database user  **omm**  with the same name as the installation user is created. This user has the highest operation permissions on the database. The initial password of this user is specified by the user.

