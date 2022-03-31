# STAT\_BAD\_BLOCK<a name="EN-US_TOPIC_0289900375"></a>

**STAT\_BAD\_BLOCK**  displays information about table and index read failures on the current node.

**Table  1**  STAT\_BAD\_BLOCK columns

<a name="en-us_topic_0283136921_en-us_topic_0237122612_table131262044171211"></a>
<table><thead align="left"><tr id="en-us_topic_0283136921_en-us_topic_0237122612_row1921714417121"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136921_en-us_topic_0237122612_p721704451214"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p721704451214"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p721704451214"></a><strong id="en-us_topic_0283136921_b1367733444812"><a name="en-us_topic_0283136921_b1367733444812"></a><a name="en-us_topic_0283136921_b1367733444812"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="28.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136921_en-us_topic_0237122612_p32171244141215"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p32171244141215"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p32171244141215"></a><strong id="en-us_topic_0283136921_b203161735174810"><a name="en-us_topic_0283136921_b203161735174810"></a><a name="en-us_topic_0283136921_b203161735174810"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="54%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136921_en-us_topic_0237122612_p16217174411122"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p16217174411122"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p16217174411122"></a><strong id="en-us_topic_0283136921_b33251636124813"><a name="en-us_topic_0283136921_b33251636124813"></a><a name="en-us_topic_0283136921_b33251636124813"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136921_en-us_topic_0237122612_row7217194441210"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p1621794491211"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1621794491211"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1621794491211"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p2218174401218"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p2218174401218"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p2218174401218"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p1218844161218"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1218844161218"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1218844161218"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row621854451212"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p4218184471216"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4218184471216"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4218184471216"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p1218194419121"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1218194419121"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1218194419121"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p142181044161213"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p142181044161213"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p142181044161213"></a>OID of the database</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row1321874417126"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p4218154414124"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4218154414124"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4218154414124"></a>tablespaceid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p6218174411215"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p6218174411215"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p6218174411215"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p10218184415129"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p10218184415129"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p10218184415129"></a>OID of the tablespace</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row82181944131218"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p12219124414121"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p12219124414121"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p12219124414121"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p142191644161214"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p142191644161214"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p142191644161214"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p14219134418120"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p14219134418120"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p14219134418120"></a>File node of this relation</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_row313210192173"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122443_p18806205716524"><a name="en-us_topic_0283136921_en-us_topic_0237122443_p18806205716524"></a><a name="en-us_topic_0283136921_en-us_topic_0237122443_p18806205716524"></a>bucketid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122443_p6806957115211"><a name="en-us_topic_0283136921_en-us_topic_0237122443_p6806957115211"></a><a name="en-us_topic_0283136921_en-us_topic_0237122443_p6806957115211"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122443_p1180655775215"><a name="en-us_topic_0283136921_en-us_topic_0237122443_p1180655775215"></a><a name="en-us_topic_0283136921_en-us_topic_0237122443_p1180655775215"></a>ID of the bucket for consistent hashing</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row1521954416128"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p92191445121"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p92191445121"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p92191445121"></a>forknum</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p4219114419122"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4219114419122"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4219114419122"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p52190447127"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p52190447127"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p52190447127"></a>Fork number</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row132191544121217"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p19219144171211"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p19219144171211"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p19219144171211"></a>error_count</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p4219644101210"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4219644101210"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p4219644101210"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p1921974418129"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1921974418129"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p1921974418129"></a>Number of errors</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row7220124416126"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p12220244151214"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p12220244151214"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p12220244151214"></a>first_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p122020448123"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p122020448123"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p122020448123"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p13220154419129"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p13220154419129"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p13220154419129"></a>Time when the first bad block occurred</p>
</td>
</tr>
<tr id="en-us_topic_0283136921_en-us_topic_0237122612_row14220144431213"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p13220114451211"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p13220114451211"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p13220114451211"></a>last_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p322014441216"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p322014441216"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p322014441216"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136921_en-us_topic_0237122612_p722064420123"><a name="en-us_topic_0283136921_en-us_topic_0237122612_p722064420123"></a><a name="en-us_topic_0283136921_en-us_topic_0237122612_p722064420123"></a>Time when the last bad block occurred</p>
</td>
</tr>
</tbody>
</table>

