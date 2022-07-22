# Operation Auditing<a name="EN-US_TOPIC_0289900107"></a>

## audit\_system\_object<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_s05a5cf2a231d43d8aa731caae59abb33"></a>

**Parameter description**: Specifies whether to audit the CREATE, DROP, and ALTER operations on the openGauss database object. The openGauss database objects include databases, users, schemas, and tables. The operations on the database object can be audited by changing the value of this parameter.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 67108863

-   **0**  indicates that the function of auditing the CREATE, DROP, and ALTER operations on the openGauss database object can be disabled.
-   Other values indicate that the CREATE, DROP, and ALTER operations on a certain or some openGauss database objects are audited.

**Value description:**

The value of this parameter is calculated by 26 binary bits. The 26 binary bits represent 26 types of openGauss objects. If the corresponding binary bit is set to  **0**, the CREATE, DROP, and ALTER operations on corresponding database objects are not audited. If it is set to  **1**, the CREATE, DROP, and ALTER operations are audited. For details about the audit contents represented by these 26 binary bits, see  [Table 1](#en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_table53712060).

**Default value**:  **12295**

**Table  1**  Meaning of each value for the  **audit\_system\_object**  parameter

<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_table53712060"></a>
<table><thead align="left"><tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row56018257"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"></a><strong id="b84235270619197"><a name="b84235270619197"></a><a name="b84235270619197"></a>Binary Bit</strong></p>
</th>
<th class="cellrowborder" valign="top" width="34.54%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.23%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"></a>Value Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Bit 0</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>Whether to audit the CREATE, DROP, and ALTER operations on databases.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"><li><strong id="b299841715592"><a name="b299841715592"></a><a name="b299841715592"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b831142011593"><a name="b831142011593"></a><a name="b831142011593"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row31699233"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p17501110"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p17501110"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p17501110"></a>Bit 1</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p8303828"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p8303828"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p8303828"></a>Whether to audit the CREATE, DROP, and ALTER operations on schemas.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul30259591"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul30259591"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul30259591"><li><strong id="b1290062365913"><a name="b1290062365913"></a><a name="b1290062365913"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b1973315243593"><a name="b1973315243593"></a><a name="b1973315243593"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row13692978"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p35389452"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p35389452"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p35389452"></a>Bit 2</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47973354"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47973354"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47973354"></a>Whether to audit the CREATE, DROP, and ALTER operations on users.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul54173819"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul54173819"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul54173819"><li><strong id="b301727155916"><a name="b301727155916"></a><a name="b301727155916"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b3755132785911"><a name="b3755132785911"></a><a name="b3755132785911"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row8857310"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p46353527"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p46353527"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p46353527"></a>Bit 3</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p42805474"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p42805474"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p42805474"></a>Whether to audit the CREATE, DROP, ALTER, and TRUNCATE operations on tables.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul41479892"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul41479892"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul41479892"><li><strong id="b84235270616132"><a name="b84235270616132"></a><a name="b84235270616132"></a>0</strong> indicates that the CREATE, DROP, ALTER, and TRUNCATE operations on these objects are not audited.</li><li><strong id="b842352706161328"><a name="b842352706161328"></a><a name="b842352706161328"></a>1</strong> indicates that the CREATE, DROP, ALTER, and TRUNCATE operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row27295292"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p63435069"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p63435069"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p63435069"></a>Bit 4</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p37967003"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p37967003"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p37967003"></a>Whether to audit the CREATE, DROP, and ALTER operations on indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul24431043"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul24431043"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul24431043"><li><strong id="b828133412594"><a name="b828133412594"></a><a name="b828133412594"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b103403510595"><a name="b103403510595"></a><a name="b103403510595"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row29093676"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7777519"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7777519"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7777519"></a>Bit 5</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p25999340"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p25999340"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p25999340"></a>Whether to audit the CREATE and DROP operations on VIEW and MATVIEW objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul35382789"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul35382789"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul35382789"><li><strong id="b101216388594"><a name="b101216388594"></a><a name="b101216388594"></a>0</strong> indicates that the CREATE and DROP operations on these objects are not audited.</li><li><strong id="b109821038185919"><a name="b109821038185919"></a><a name="b109821038185919"></a>1</strong> indicates that the CREATE and DROP operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row28819475"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p52676132"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p52676132"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p52676132"></a>Bit 6</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p38908265"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p38908265"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p38908265"></a>Whether to audit the CREATE, DROP, and ALTER operations on triggers.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul12934597"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul12934597"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul12934597"><li><strong id="b31671141105917"><a name="b31671141105917"></a><a name="b31671141105917"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b5552941145917"><a name="b5552941145917"></a><a name="b5552941145917"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row62229916"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7458427"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7458427"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7458427"></a>Bit 7</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p152875"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p152875"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p152875"></a>Whether to audit the CREATE, DROP, and ALTER operations on procedures/functions.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul38969374"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul38969374"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul38969374"><li><strong id="b1866010455599"><a name="b1866010455599"></a><a name="b1866010455599"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b1514214685912"><a name="b1514214685912"></a><a name="b1514214685912"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row46417880"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p1751916"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p1751916"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p1751916"></a>Bit 8</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7687501"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7687501"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7687501"></a>Whether to audit the CREATE, DROP, and ALTER operations on tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul5713298"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul5713298"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul5713298"><li><strong id="b9428184819595"><a name="b9428184819595"></a><a name="b9428184819595"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b859649135919"><a name="b859649135919"></a><a name="b859649135919"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_r85ac8cf5ffd24586b86a4fe0f6f52fa9"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a8c15e227bb55406aa6816c13032b2e4c"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a8c15e227bb55406aa6816c13032b2e4c"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a8c15e227bb55406aa6816c13032b2e4c"></a>Bit 9</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a6596abe2607545748dccf5998bce712b"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a6596abe2607545748dccf5998bce712b"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a6596abe2607545748dccf5998bce712b"></a>Whether to audit the CREATE, DROP, and ALTER operations on resource pools.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_uf74aa6a210e745918dcb7f3160feb845"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_uf74aa6a210e745918dcb7f3160feb845"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_uf74aa6a210e745918dcb7f3160feb845"><li><strong id="b1133519102005"><a name="b1133519102005"></a><a name="b1133519102005"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b1863813113013"><a name="b1863813113013"></a><a name="b1863813113013"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_r54478e2f5f6a48779068c9a6a1b03c30"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a6ded89adfc8e4cf292d8eb6442a9706b"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a6ded89adfc8e4cf292d8eb6442a9706b"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a6ded89adfc8e4cf292d8eb6442a9706b"></a>Bit 10</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_ab049cc696476461aaa8fed0a6e912b1b"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_ab049cc696476461aaa8fed0a6e912b1b"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_ab049cc696476461aaa8fed0a6e912b1b"></a>Whether to audit the CREATE, DROP, and ALTER operations on workloads.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_u69d8d7c50483457f970bb4755d9f2698"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_u69d8d7c50483457f970bb4755d9f2698"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_u69d8d7c50483457f970bb4755d9f2698"><li><strong id="b67921213203"><a name="b67921213203"></a><a name="b67921213203"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b8644171415019"><a name="b8644171415019"></a><a name="b8644171415019"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_r99061dfc4a9d4f05abf1e69fc1382192"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a199214d2361646528feaf737b1da47f9"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a199214d2361646528feaf737b1da47f9"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a199214d2361646528feaf737b1da47f9"></a>Bit 11</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a004baa0918924c31a6956a8068ef8cf2"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a004baa0918924c31a6956a8068ef8cf2"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_a004baa0918924c31a6956a8068ef8cf2"></a>Reserved.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_u2c107e449bf9493b827cac6454cfd587"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_u2c107e449bf9493b827cac6454cfd587"></a><p>-</p>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row18587823135616"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p18588723165618"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p18588723165618"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p18588723165618"></a>Bit 12</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p8588112385617"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p8588112385617"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p8588112385617"></a>Whether to audit the CREATE, DROP, and ALTER operations on data sources.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul414819581"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul414819581"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul414819581"><li><strong id="b990111191207"><a name="b990111191207"></a><a name="b990111191207"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li></ul>
<a name="en-us_topic_0283136929_en-us_topic_0237124747_ul979823312575"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul979823312575"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul979823312575"><li><strong id="b1653111204015"><a name="b1653111204015"></a><a name="b1653111204015"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row14996171520226"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p13997415182219"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p13997415182219"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p13997415182219"></a>Bit 13</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p10997171592219"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p10997171592219"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p10997171592219"></a>Reserved.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul1984414587225"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul1984414587225"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul1984414587225"><li><strong id="b61094371403"><a name="b61094371403"></a><a name="b61094371403"></a>0</strong> indicates that the CREATE and DROP operations on these objects are not audited.</li></ul>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul1984414587225"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul1984414587225"></a>
<a name="en-us_topic_0283136929_en-us_topic_0237124747_ul7846158102211"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul7846158102211"></a><p>-</p>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row186561926144118"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p12658192619413"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p12658192619413"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p12658192619413"></a>Bit 14</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p265872613415"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p265872613415"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p265872613415"></a>Whether to audit the CREATE, DROP, and ALTER operations on ROW LEVEL SECURITY objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul9841936124412"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul9841936124412"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul9841936124412"><li><strong id="b105959447016"><a name="b105959447016"></a><a name="b105959447016"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="b7890344305"><a name="b7890344305"></a><a name="b7890344305"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row4808247102118"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p1680944712110"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p1680944712110"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p1680944712110"></a>Bit 15</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p128093473217"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p128093473217"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p128093473217"></a>Whether to audit the CREATE, DROP, and ALTER operations on types.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul15303111582319"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul15303111582319"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul15303111582319"><li><strong id="b92871948008"><a name="b92871948008"></a><a name="b92871948008"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on types are not audited.</li><li><strong id="b1138034913019"><a name="b1138034913019"></a><a name="b1138034913019"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on types are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row191581657111714"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p777252101717"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p777252101717"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p777252101717"></a>Bit 16</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p17771252171710"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p17771252171710"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p17771252171710"></a>Whether to audit the CREATE, DROP, and ALTER operations on text search objects (CONFIGURATION and DICTIONARY).</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul7781052121710"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul7781052121710"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul7781052121710"><li><strong id="b16336852102"><a name="b16336852102"></a><a name="b16336852102"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on text search objects are not audited.</li><li><strong id="b3324153405"><a name="b3324153405"></a><a name="b3324153405"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on text search objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row9578135522119"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p457918556215"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p457918556215"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p457918556215"></a>Bit 17</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p145791855132118"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p145791855132118"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p145791855132118"></a>Whether to audit the CREATE, DROP, and ALTER operations on directories.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul87171831122315"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul87171831122315"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul87171831122315"><li><strong id="b8829125518018"><a name="b8829125518018"></a><a name="b8829125518018"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on directories are not audited.</li><li><strong id="b108811756904"><a name="b108811756904"></a><a name="b108811756904"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on directories are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_row11776411216"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p18781048124"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p18781048124"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p18781048124"></a>Bit 18</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_p678114121210"><a name="en-us_topic_0283136929_en-us_topic_0237124747_p678114121210"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_p678114121210"></a>Whether to audit the CREATE, DROP, and ALTER operations on synonyms.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul2222131763217"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_ul2222131763217"></a><ul id="en-us_topic_0283136929_en-us_topic_0237124747_ul2222131763217"><li><strong id="b12462410111"><a name="b12462410111"></a><a name="b12462410111"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on types are not audited.</li><li><strong id="b8876182520118"><a name="b8876182520118"></a><a name="b8876182520118"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on types are audited.</li></ul>
</td>
</tr>
<tr id="row179969551391"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p19552112941013"><a name="p19552112941013"></a><a name="p19552112941013"></a>Bit 19</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p17304122601018"><a name="p17304122601018"></a><a name="p17304122601018"></a>Whether to audit the CREATE, DROP, and ALTER operations on sequences.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="ul159761016111016"></a><a name="ul159761016111016"></a><ul id="ul159761016111016"><li><strong id="b329985610566"><a name="b329985610566"></a><a name="b329985610566"></a>0</strong> indicates that the operations are not audited.</li><li><strong id="b1280375795612"><a name="b1280375795612"></a><a name="b1280375795612"></a>1</strong> indicates that the operations are audited.</li></ul>
</td>
</tr>
<tr id="row18320121732312"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p195227212230"><a name="p195227212230"></a><a name="p195227212230"></a>Bit 20</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p852217217234"><a name="p852217217234"></a><a name="p852217217234"></a>Reserved</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><p id="p8320131713234"><a name="p8320131713234"></a><a name="p8320131713234"></a>-</p>
</td>
</tr>
<tr id="row262715591644"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p61782117513"><a name="p61782117513"></a><a name="p61782117513"></a>Bit 21</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p117813111656"><a name="p117813111656"></a><a name="p117813111656"></a>Whether to audit the CREATE, DROP, and ALTER operations on PACKAGE objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="ul121781111750"></a><a name="ul121781111750"></a><ul id="ul121781111750"><li><strong id="b873213487338"><a name="b873213487338"></a><a name="b873213487338"></a>0</strong> indicates that the operations are not audited.</li><li><strong id="b55837133816"><a name="b55837133816"></a><a name="b55837133816"></a>1</strong> indicates that the operations are audited.</li></ul>
</td>
</tr>
<tr id="row0949155512314"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p19501430242"><a name="p19501430242"></a><a name="p19501430242"></a>Bit 22</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p1495011392414"><a name="p1495011392414"></a><a name="p1495011392414"></a>Reserved</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><p id="p4949155512235"><a name="p4949155512235"></a><a name="p4949155512235"></a>-</p>
</td>
</tr>
<tr id="row12560824152414"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p65371631182413"><a name="p65371631182413"></a><a name="p65371631182413"></a>Bit 22</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p153883112410"><a name="p153883112410"></a><a name="p153883112410"></a>Reserved</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><p id="p25601924182411"><a name="p25601924182411"></a><a name="p25601924182411"></a>-</p>
</td>
</tr>
<tr id="row195313321903"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p14541432203"><a name="p14541432203"></a><a name="p14541432203"></a>Bit 24</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p25423210015"><a name="p25423210015"></a><a name="p25423210015"></a>Whether to audit the ALTER and DROP operations on the <strong id="b0443117183817"><a name="b0443117183817"></a><a name="b0443117183817"></a>gs_global_config</strong> objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="ul2561910115"></a><a name="ul2561910115"></a><ul id="ul2561910115"><li><strong id="b33471349183915"><a name="b33471349183915"></a><a name="b33471349183915"></a>0</strong> indicates that the ALTER and DROP operations are not audited.</li><li><strong id="b1068414534393"><a name="b1068414534393"></a><a name="b1068414534393"></a>1</strong> indicates that the ALTER and DROP operations are audited.</li></ul>
</td>
</tr>
<tr id="row5933105618381"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="p2017511561382"><a name="p2017511561382"></a><a name="p2017511561382"></a>Bit 25</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="p141761956153815"><a name="p141761956153815"></a><a name="p141761956153815"></a>Whether to audit the CREATE, DROP, and ALTER operations on FOREIGN DATA WRAPPER objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="ul181438412349"></a><a name="ul181438412349"></a><ul id="ul181438412349"><li><strong id="b5752183814457"><a name="b5752183814457"></a><a name="b5752183814457"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations are not audited.</li><li><strong id="b1966524117450"><a name="b1966524117450"></a><a name="b1966524117450"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations are audited.</li></ul>
</td>
</tr>
</tbody>
</table>

## audit\_dml\_state<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_s761d19195b7b48e0b74f40375efd4ea7"></a>

**Parameter description**: Specifies whether to audit the INSERT, UPDATE, and DELETE operations on a specific table.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing the DML operations \(except SELECT\) is disabled.
-   **1**  indicates that the function of auditing the DML operations \(except SELECT\) is enabled.

**Default value**:  **0**

## audit\_dml\_state\_select<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_sdfed1641d0c54ed7bf034d9207ad4fc2"></a>

**Parameter description**: Specifies whether to audit the SELECT operation.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the SELECT auditing function is disabled.
-   **1**  indicates that the SELECT auditing function is enabled.

**Default value**:  **0**

## audit\_function\_exec<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_sfdce4770ba2543668b1e7d24d2738c13"></a>

**Parameter description**: Specifies whether to record the audit information during the execution of the stored procedures, anonymous blocks, or user-defined functions \(excluding system functions\).

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing the procedure or function execution is disabled.
-   **1**  indicates that the function of auditing the procedure or function execution is enabled.

**Default value**:  **0**

## audit\_copy\_exec<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_s43b8457f811e417b9ad155b6218517a2"></a>

**Parameter description**: Specifies whether to audit the COPY operation.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the COPY auditing function is disabled.
-   **1**  indicates that the COPY auditing function is enabled.

**Default value**:  **1**

## audit\_set\_parameter<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e"></a>

**Parameter description**: Specifies whether to audit the SET operation.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the SET auditing function is disabled.
-   **1**  indicates that the SET auditing function is enabled.

**Default value**:  **1**

## audit\_xid\_info<a name="section17588151016"></a>

**Parameter description**: Specifies whether to record the transaction ID of the SQL statement in the  **detail\_info**  column of the audit log.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of recording transaction IDs in audit logs is disabled.
-   **1**  indicates that the function of recording transaction IDs in audit logs is enabled.

**Default value**:  **0**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If this function is enabled, the  **detail\_info**  information in audit logs starts with  *xid*. For example:
>```
>detail_info: xid=14619 , create table t1(id int);
>```
>If transaction IDs do not exist,  *xid*  is recorded as  **NA**  in audit logs.

## enableSeparationOfDuty<a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_s0a79ea55efa1431d8e3e06e4b8219cd6"></a>

**Parameter description**: Specifies whether the separation of three duties is enabled.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the separation of three duties is enabled.
-   **off**  indicates that the separation of three duties is disabled.

**Default value**:  **off**

## enable\_nonsysadmin\_execute\_direct<a name="en-us_topic_0283136929_en-us_topic_0237124747_section177987452106"></a>

**Parameter description**: Specifies whether non-system administrators and non-monitoring administrator are allowed to execute the EXECUTE DIRECT ON statement.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that any user is allowed to execute the EXECUTE DIRECT ON statement.
-   **off**  indicates that only the system administrators and monitoring administrators are allowed to execute the EXECUTE DIRECT ON statement.

**Default value**:  **off**

## enable\_access\_server\_directory<a name="en-us_topic_0283136929_en-us_topic_0237124747_section4279164545515"></a>

**Parameter description**: Specifies whether to allow non-initial users to create, modify, and delete directories.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that non-initial users have the permission to create, modify, and delete directories.
-   **off**  indicates that non-initial users do not have the permission to create, modify, and delete directories.

**Default value**:  **off**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   For security purposes, only the initial user can create, modify, and delete DIRECTORY objects by default.
>-   If  **enable\_access\_server\_directory**  is enabled, users with the SYSADMIN permission and users who inherit the  **gs\_role\_directory\_create**  permission of the built-in role can create directory objects. A user with the SYSADMIN permission, the owner of a directory, a user who is granted with the DROP permission for the directory, or a user who inherits the  **gs\_role\_directory\_drop**  permission of the built-in role can delete a directory. A user with the SYSADMIN permission and the owner of a directory object can change the owner of the directory object, and the user must be a member of the new owner.
