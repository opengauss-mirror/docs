# Operation Auditing<a name="EN-US_TOPIC_0251900975"></a>

## audit\_system\_object<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_s05a5cf2a231d43d8aa731caae59abb33"></a>

**Parameter description**: Specifies whether to audit the CREATE, DROP, and ALTER operations on openGauss database objects. openGauss database objects include DATABASE, USER, Schema, and TABLE. The operations on the database object can be audited by changing the value of this parameter.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 524287

-   **0**  indicates that the function of auditing the CREATE, DROP, and ALTER operations on openGauss database objects is disabled.
-   Other values indicate that the CREATE, DROP, and ALTER operations on a certain or some openGauss database objects are audited.

**Value description:**

The value of this parameter is calculated by 19 binary bits. The 19 binary bits represent 19 types of openGauss database objects. If the corresponding binary bit is set to  **0**, the CREATE, DROP, and ALTER operations on corresponding database objects are not audited. If it is set to  **1**, the CREATE, DROP, and ALTER operations are audited. For details about the audit contents represented by these 19 binary bits, see  [Table 1](#en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_table53712060).

**Default value**:  **12295**

**Table  1**  Meaning of each value for the  **audit\_system\_object**  parameter

<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_table53712060"></a>
<table><thead align="left"><tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row56018257"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.1"><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"></a><strong id="en-us_topic_0242371537_b14195183114412"><a name="en-us_topic_0242371537_b14195183114412"></a><a name="en-us_topic_0242371537_b14195183114412"></a>Binary Bit</strong></p>
</th>
<th class="cellrowborder" valign="top" width="34.64%" id="mcps1.2.4.1.2"><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="47.13%" id="mcps1.2.4.1.3"><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"></a>Value Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Bit 0</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>Whether to audit the CREATE, DROP, and ALTER operations on databases.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"><li><strong id="en-us_topic_0242371537_b49682038442"><a name="en-us_topic_0242371537_b49682038442"></a><a name="en-us_topic_0242371537_b49682038442"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b177504119413"><a name="en-us_topic_0242371537_b177504119413"></a><a name="en-us_topic_0242371537_b177504119413"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row31699233"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p17501110"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p17501110"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p17501110"></a>Bit 1</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p8303828"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p8303828"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p8303828"></a>Whether to audit the CREATE, DROP, and ALTER operations on schemas.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul30259591"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul30259591"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul30259591"><li><strong id="en-us_topic_0242371537_b169324468417"><a name="en-us_topic_0242371537_b169324468417"></a><a name="en-us_topic_0242371537_b169324468417"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b1685705315420"><a name="en-us_topic_0242371537_b1685705315420"></a><a name="en-us_topic_0242371537_b1685705315420"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row13692978"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p35389452"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p35389452"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p35389452"></a>Bit 2</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47973354"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47973354"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47973354"></a>Whether to audit the CREATE, DROP, and ALTER operations on users.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul54173819"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul54173819"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul54173819"><li><strong id="en-us_topic_0242371537_b1925811317513"><a name="en-us_topic_0242371537_b1925811317513"></a><a name="en-us_topic_0242371537_b1925811317513"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b12905939513"><a name="en-us_topic_0242371537_b12905939513"></a><a name="en-us_topic_0242371537_b12905939513"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row8857310"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p46353527"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p46353527"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p46353527"></a>Bit 3</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p42805474"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p42805474"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p42805474"></a>Whether to audit the CREATE, DROP, ALTER, and TRUNCATE operations on tables.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul41479892"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul41479892"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul41479892"><li><strong id="en-us_topic_0242371537_b1558215171253"><a name="en-us_topic_0242371537_b1558215171253"></a><a name="en-us_topic_0242371537_b1558215171253"></a>0</strong> indicates that the CREATE, DROP, ALTER, and TRUNCATE operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b104512195513"><a name="en-us_topic_0242371537_b104512195513"></a><a name="en-us_topic_0242371537_b104512195513"></a>1</strong> indicates that the CREATE, DROP, ALTER, and TRUNCATE operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row27295292"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p63435069"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p63435069"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p63435069"></a>Bit 4</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p37967003"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p37967003"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p37967003"></a>Whether to audit the CREATE, DROP, and ALTER operations on indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul24431043"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul24431043"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul24431043"><li><strong id="en-us_topic_0242371537_b153941728151"><a name="en-us_topic_0242371537_b153941728151"></a><a name="en-us_topic_0242371537_b153941728151"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b19859123017520"><a name="en-us_topic_0242371537_b19859123017520"></a><a name="en-us_topic_0242371537_b19859123017520"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row29093676"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7777519"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7777519"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7777519"></a>Bit 5</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p25999340"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p25999340"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p25999340"></a>Whether to audit the CREATE and DROP operations on views.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul35382789"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul35382789"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul35382789"><li><strong id="en-us_topic_0242371537_b1654913341056"><a name="en-us_topic_0242371537_b1654913341056"></a><a name="en-us_topic_0242371537_b1654913341056"></a>0</strong> indicates that the CREATE and DROP operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b577173613515"><a name="en-us_topic_0242371537_b577173613515"></a><a name="en-us_topic_0242371537_b577173613515"></a>1</strong> indicates that the CREATE and DROP operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row28819475"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p52676132"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p52676132"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p52676132"></a>Bit 6</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p38908265"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p38908265"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p38908265"></a>Whether to audit the CREATE, DROP, and ALTER operations on triggers.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul12934597"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul12934597"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul12934597"><li><strong id="en-us_topic_0242371537_b8317123918516"><a name="en-us_topic_0242371537_b8317123918516"></a><a name="en-us_topic_0242371537_b8317123918516"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b614719401651"><a name="en-us_topic_0242371537_b614719401651"></a><a name="en-us_topic_0242371537_b614719401651"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row62229916"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7458427"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7458427"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7458427"></a>Bit 7</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p152875"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p152875"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p152875"></a>Whether to audit the CREATE, DROP, and ALTER operations on procedures/functions.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul38969374"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul38969374"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul38969374"><li><strong id="en-us_topic_0242371537_b450314421853"><a name="en-us_topic_0242371537_b450314421853"></a><a name="en-us_topic_0242371537_b450314421853"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b162547431150"><a name="en-us_topic_0242371537_b162547431150"></a><a name="en-us_topic_0242371537_b162547431150"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row46417880"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p1751916"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p1751916"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p1751916"></a>Bit 8</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7687501"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7687501"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p7687501"></a>Whether to audit the CREATE, DROP, and ALTER operations on tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul5713298"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul5713298"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul5713298"><li><strong id="en-us_topic_0242371537_b156018453512"><a name="en-us_topic_0242371537_b156018453512"></a><a name="en-us_topic_0242371537_b156018453512"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b1216684620513"><a name="en-us_topic_0242371537_b1216684620513"></a><a name="en-us_topic_0242371537_b1216684620513"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_r85ac8cf5ffd24586b86a4fe0f6f52fa9"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a8c15e227bb55406aa6816c13032b2e4c"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a8c15e227bb55406aa6816c13032b2e4c"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a8c15e227bb55406aa6816c13032b2e4c"></a>Bit 9</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a6596abe2607545748dccf5998bce712b"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a6596abe2607545748dccf5998bce712b"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a6596abe2607545748dccf5998bce712b"></a>Whether to audit the CREATE, DROP, and ALTER operations on resource pools.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_uf74aa6a210e745918dcb7f3160feb845"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_uf74aa6a210e745918dcb7f3160feb845"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_uf74aa6a210e745918dcb7f3160feb845"><li><strong id="en-us_topic_0242371537_b12501048155"><a name="en-us_topic_0242371537_b12501048155"></a><a name="en-us_topic_0242371537_b12501048155"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b116011491659"><a name="en-us_topic_0242371537_b116011491659"></a><a name="en-us_topic_0242371537_b116011491659"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_r54478e2f5f6a48779068c9a6a1b03c30"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a6ded89adfc8e4cf292d8eb6442a9706b"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a6ded89adfc8e4cf292d8eb6442a9706b"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a6ded89adfc8e4cf292d8eb6442a9706b"></a>Bit 10</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_ab049cc696476461aaa8fed0a6e912b1b"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_ab049cc696476461aaa8fed0a6e912b1b"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_ab049cc696476461aaa8fed0a6e912b1b"></a>Whether to audit the CREATE, DROP, and ALTER operations on workloads.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_u69d8d7c50483457f970bb4755d9f2698"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_u69d8d7c50483457f970bb4755d9f2698"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_u69d8d7c50483457f970bb4755d9f2698"><li><strong id="en-us_topic_0242371537_b2052765015510"><a name="en-us_topic_0242371537_b2052765015510"></a><a name="en-us_topic_0242371537_b2052765015510"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b626025111519"><a name="en-us_topic_0242371537_b626025111519"></a><a name="en-us_topic_0242371537_b626025111519"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_r99061dfc4a9d4f05abf1e69fc1382192"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a199214d2361646528feaf737b1da47f9"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a199214d2361646528feaf737b1da47f9"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a199214d2361646528feaf737b1da47f9"></a>Bit 11</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a004baa0918924c31a6956a8068ef8cf2"><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a004baa0918924c31a6956a8068ef8cf2"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_a004baa0918924c31a6956a8068ef8cf2"></a>Whether to audit the CREATE, DROP, and ALTER operations on SERVER FOR HADOOP objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_u2c107e449bf9493b827cac6454cfd587"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_u2c107e449bf9493b827cac6454cfd587"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_u2c107e449bf9493b827cac6454cfd587"><li><strong id="en-us_topic_0242371537_b15999652852"><a name="en-us_topic_0242371537_b15999652852"></a><a name="en-us_topic_0242371537_b15999652852"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b1972110531956"><a name="en-us_topic_0242371537_b1972110531956"></a><a name="en-us_topic_0242371537_b1972110531956"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row18587823135616"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p18588723165618"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p18588723165618"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p18588723165618"></a>Bit 12</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p8588112385617"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p8588112385617"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p8588112385617"></a>Whether to audit the CREATE, DROP, and ALTER operations on data sources.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul414819581"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul414819581"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul414819581"><li><strong id="en-us_topic_0242371537_b026545519512"><a name="en-us_topic_0242371537_b026545519512"></a><a name="en-us_topic_0242371537_b026545519512"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li></ul>
<a name="en-us_topic_0242371537_en-us_topic_0237124747_ul979823312575"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul979823312575"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul979823312575"><li><strong id="en-us_topic_0242371537_b78498551859"><a name="en-us_topic_0242371537_b78498551859"></a><a name="en-us_topic_0242371537_b78498551859"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row14996171520226"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p13997415182219"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p13997415182219"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p13997415182219"></a>Bit 13</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p10997171592219"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p10997171592219"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p10997171592219"></a>Whether to audit the CREATE and DROP operations on Node Group objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul1984414587225"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul1984414587225"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul1984414587225"><li><strong id="en-us_topic_0242371537_b199611618616"><a name="en-us_topic_0242371537_b199611618616"></a><a name="en-us_topic_0242371537_b199611618616"></a>0</strong> indicates that the CREATE and DROP operations on these objects are not audited.</li></ul>
<a name="en-us_topic_0242371537_en-us_topic_0237124747_ul7846158102211"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul7846158102211"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul7846158102211"><li><strong id="en-us_topic_0242371537_b11916931261"><a name="en-us_topic_0242371537_b11916931261"></a><a name="en-us_topic_0242371537_b11916931261"></a>1</strong> indicates that the CREATE and DROP operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row186561926144118"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p12658192619413"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p12658192619413"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p12658192619413"></a>Bit 14</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p265872613415"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p265872613415"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p265872613415"></a>Whether to audit the CREATE, DROP, and ALTER operations on ROW LEVEL SECURITY objects.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul9841936124412"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul9841936124412"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul9841936124412"><li><strong id="en-us_topic_0242371537_b4170186767"><a name="en-us_topic_0242371537_b4170186767"></a><a name="en-us_topic_0242371537_b4170186767"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are not audited.</li><li><strong id="en-us_topic_0242371537_b10728063617"><a name="en-us_topic_0242371537_b10728063617"></a><a name="en-us_topic_0242371537_b10728063617"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on these objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row4808247102118"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p1680944712110"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p1680944712110"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p1680944712110"></a>Bit 15</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p128093473217"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p128093473217"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p128093473217"></a>Whether to audit the CREATE, DROP, and ALTER operations on types.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul15303111582319"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul15303111582319"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul15303111582319"><li><strong id="en-us_topic_0242371537_b102669917613"><a name="en-us_topic_0242371537_b102669917613"></a><a name="en-us_topic_0242371537_b102669917613"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on types are not audited.</li><li><strong id="en-us_topic_0242371537_b1116412103620"><a name="en-us_topic_0242371537_b1116412103620"></a><a name="en-us_topic_0242371537_b1116412103620"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on types are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row191581657111714"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p777252101717"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p777252101717"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p777252101717"></a>Bit 16</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p17771252171710"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p17771252171710"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p17771252171710"></a>Whether to audit the CREATE, DROP, and ALTER operations on text search objects (CONFIGURATION and DICTIONARY).</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul7781052121710"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul7781052121710"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul7781052121710"><li><strong id="en-us_topic_0242371537_b68410121764"><a name="en-us_topic_0242371537_b68410121764"></a><a name="en-us_topic_0242371537_b68410121764"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on text search objects are not audited.</li><li><strong id="en-us_topic_0242371537_b1251211132619"><a name="en-us_topic_0242371537_b1251211132619"></a><a name="en-us_topic_0242371537_b1251211132619"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on text search objects are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row9578135522119"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p457918556215"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p457918556215"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p457918556215"></a>Bit 17</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p145791855132118"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p145791855132118"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p145791855132118"></a>Whether to audit the CREATE, DROP, and ALTER operations on directories.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul87171831122315"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul87171831122315"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul87171831122315"><li><strong id="en-us_topic_0242371537_b1557611161164"><a name="en-us_topic_0242371537_b1557611161164"></a><a name="en-us_topic_0242371537_b1557611161164"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on directories are not audited.</li><li><strong id="en-us_topic_0242371537_b563781718614"><a name="en-us_topic_0242371537_b563781718614"></a><a name="en-us_topic_0242371537_b563781718614"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on directories are audited.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0242371537_en-us_topic_0237124747_row11776411216"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p18781048124"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p18781048124"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p18781048124"></a>Bit 18</p>
</td>
<td class="cellrowborder" valign="top" width="34.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0242371537_en-us_topic_0237124747_p678114121210"><a name="en-us_topic_0242371537_en-us_topic_0237124747_p678114121210"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_p678114121210"></a>Whether to audit the CREATE, DROP, and ALTER operations on workloads.</p>
</td>
<td class="cellrowborder" valign="top" width="47.13%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul2222131763217"></a><a name="en-us_topic_0242371537_en-us_topic_0237124747_ul2222131763217"></a><ul id="en-us_topic_0242371537_en-us_topic_0237124747_ul2222131763217"><li><strong id="en-us_topic_0242371537_b52743201863"><a name="en-us_topic_0242371537_b52743201863"></a><a name="en-us_topic_0242371537_b52743201863"></a>0</strong> indicates that the CREATE, DROP, and ALTER operations on types are not audited.</li><li><strong id="en-us_topic_0242371537_b89451520365"><a name="en-us_topic_0242371537_b89451520365"></a><a name="en-us_topic_0242371537_b89451520365"></a>1</strong> indicates that the CREATE, DROP, and ALTER operations on types are audited.</li></ul>
</td>
</tr>
</tbody>
</table>

## audit\_dml\_state<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_s761d19195b7b48e0b74f40375efd4ea7"></a>

**Parameter description**: Specifies whether to audit the INSERT, UPDATE, and DELETE operations on a specific table.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing the DML operations \(except SELECT\) is disabled.
-   **1**  indicates that the function of auditing the DML operations \(except SELECT\) is enabled.

**Default value**:  **0**

## audit\_dml\_state\_select<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_sdfed1641d0c54ed7bf034d9207ad4fc2"></a>

**Parameter description**: Specifies whether to audit the SELECT operation.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the SELECT auditing function is disabled.
-   **1**  indicates that the SELECT auditing function is enabled.

**Default value**:  **0**

## audit\_function\_exec<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_sfdce4770ba2543668b1e7d24d2738c13"></a>

**Parameter description**: Specifies whether to record the audit information during the execution of the stored procedures, anonymous blocks, or user-defined functions \(excluding system functions\).

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the function of auditing the procedure or function execution is disabled.
-   **1**  indicates that the function of auditing the procedure or function execution is enabled.

**Default value**:  **0**

## audit\_copy\_exec<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_s43b8457f811e417b9ad155b6218517a2"></a>

**Parameter description**: Specifies whether to audit the COPY operation.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the COPY auditing function is disabled.
-   **1**  indicates that the COPY auditing function is enabled.

**Default value**:  **0**

## audit\_set\_parameter<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e"></a>

**Parameter description**: Specifies whether to audit the SET operation.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** **0**  or  **1**

-   **0**  indicates that the SET auditing function is disabled.
-   **1**  indicates that the SET auditing function is enabled.

**Default value**:  **1**

## sql\_compatibility<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_s958d1528cca84889924d67c2c4cdd944"></a>

**Parameter description**: Specifies the type of mainstream database with which the SQL syntax and statement behavior of the database is compatible.

This parameter is an INTERNAL parameter. The value of this parameter cannot be modified.

**Value range**: enumerated values

-   **A**  indicates that the database is compatible with database A.
-   **B**  indicates that the database is compatible with database B.
-   **C**  indicates that the database is compatible with database C.

**Default value**:  **A**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>In the database, this parameter must be set to a specific value. It can be set to  **A**  or  **B**  and cannot be changed randomly. Otherwise, the setting is not consistent with the database behavior.  

## enableSeparationOfDuty<a name="en-us_topic_0242371537_en-us_topic_0237124747_en-us_topic_0059777487_s0a79ea55efa1431d8e3e06e4b8219cd6"></a>

**Parameter description**: Specifies whether the separation of three duties is enabled.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the separation of three duties is enabled.
-   **off**  indicates that the separation of three duties is disabled.

**Default value**:  **off**

## enable\_nonsysadmin\_execute\_direct<a name="en-us_topic_0242371537_en-us_topic_0237124747_section177987452106"></a>

**Parameter description**: Specifies whether non-system administrators are allowed to execute the EXECUTE DIRECT ON statement.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that any user is allowed to execute the EXECUTE DIRECT ON statement.
-   **off**  indicates that only the system administrator is allowed to execute the EXECUTE DIRECT ON statement.

**Default value**:  **off**

## enable\_copy\_server\_files<a name="en-us_topic_0242371537_en-us_topic_0237124747_section176091434269"></a>

**Parameter description**: Specifies whether to enable the permission to copy server files.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the permission to copy server files is enabled.
-   **off**  indicates that the permission to copy server files is disabled.

**Default value**:  **off**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>The copy from/to file function can be used only by users with system administrator permissions or initial users. However, when  **enableSeparationOfDuty**  is set to  **on**, system administrators and initial users have different permissions. You can use  **enable\_copy\_server\_file**  to control the copy permission of the system administrator. By default, the system administrators are not allowed to copy files. They can perform this operation only after this parameter is set to  **on**.  

## enable\_access\_server\_directory<a name="en-us_topic_0242371537_en-us_topic_0237124747_section4279164545515"></a>

**Parameter description**: Specifies whether the system administrator has the permissions to create and delete DIRECTORY objects.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the system administrator has the permission to create and delete DIRECTORY objects.
-   **off**  indicates that the system administrator does not have the permissions to create and delete DIRECTORY objects.

**Default value**:  **off**

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>-   For security purposes, only initial users can create and delete DIRECTORY objects by default.  
>-   If  **enable\_access\_server\_directory**  is set to  **on**, system administrators \(including initial users\) can create and delete DIRECTORY objects when  **enableSeparationOfDuty**  is set to  **off**. When  **enableSeparationOfDuty**  is set to  **on**, only the initial users can create and delete DIRECTORY objects.  

