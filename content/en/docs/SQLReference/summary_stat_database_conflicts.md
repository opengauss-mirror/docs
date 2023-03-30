# SUMMARY\_STAT\_DATABASE\_CONFLICTS<a name="EN-US_TOPIC_0245374702"></a>

**SUMMARY\_STAT\_DATABASE\_CONFLICTS**  displays statistics about database conflicts in openGauss. 

**Table  1**  SUMMARY\_STAT\_DATABASE\_CONFLICTS columns

<a name="en-us_topic_0237122598_table1212791117569"></a>
<table><thead align="left"><tr id="en-us_topic_0237122598_row919731185614"><th class="cellrowborder" valign="top" width="22.78%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122598_p16197121165612"><a name="en-us_topic_0237122598_p16197121165612"></a><a name="en-us_topic_0237122598_p16197121165612"></a><strong id="b1362035710471"><a name="b1362035710471"></a><a name="b1362035710471"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.869999999999997%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122598_p11197101115568"><a name="en-us_topic_0237122598_p11197101115568"></a><a name="en-us_topic_0237122598_p11197101115568"></a><strong id="b10429185834713"><a name="b10429185834713"></a><a name="b10429185834713"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="60.35%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122598_p1419791110564"><a name="en-us_topic_0237122598_p1419791110564"></a><a name="en-us_topic_0237122598_p1419791110564"></a><strong id="b1365115916473"><a name="b1365115916473"></a><a name="b1365115916473"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122598_row2197151112562"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122598_p91971011125614"><a name="en-us_topic_0237122598_p91971011125614"></a><a name="en-us_topic_0237122598_p91971011125614"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122598_p1819713117566"><a name="en-us_topic_0237122598_p1819713117566"></a><a name="en-us_topic_0237122598_p1819713117566"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122598_p1519801185613"><a name="en-us_topic_0237122598_p1519801185613"></a><a name="en-us_topic_0237122598_p1519801185613"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0237122598_row1119801113566"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122598_p919841115619"><a name="en-us_topic_0237122598_p919841115619"></a><a name="en-us_topic_0237122598_p919841115619"></a>confl_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122598_p31982119567"><a name="en-us_topic_0237122598_p31982119567"></a><a name="en-us_topic_0237122598_p31982119567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122598_p9198191185616"><a name="en-us_topic_0237122598_p9198191185616"></a><a name="en-us_topic_0237122598_p9198191185616"></a>Number of conflicting tablespaces</p>
</td>
</tr>
<tr id="en-us_topic_0237122598_row19198131117569"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122598_p1519812110562"><a name="en-us_topic_0237122598_p1519812110562"></a><a name="en-us_topic_0237122598_p1519812110562"></a>confl_lock</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122598_p1219881145610"><a name="en-us_topic_0237122598_p1219881145610"></a><a name="en-us_topic_0237122598_p1219881145610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122598_p91999114563"><a name="en-us_topic_0237122598_p91999114563"></a><a name="en-us_topic_0237122598_p91999114563"></a>Number of conflicting locks</p>
</td>
</tr>
<tr id="en-us_topic_0237122598_row21996115566"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122598_p111998112566"><a name="en-us_topic_0237122598_p111998112566"></a><a name="en-us_topic_0237122598_p111998112566"></a>confl_snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122598_p2019961135619"><a name="en-us_topic_0237122598_p2019961135619"></a><a name="en-us_topic_0237122598_p2019961135619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122598_p019971115618"><a name="en-us_topic_0237122598_p019971115618"></a><a name="en-us_topic_0237122598_p019971115618"></a>Number of conflicting snapshots</p>
</td>
</tr>
<tr id="en-us_topic_0237122598_row161991911175613"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122598_p1719951115613"><a name="en-us_topic_0237122598_p1719951115613"></a><a name="en-us_topic_0237122598_p1719951115613"></a>confl_bufferpin</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122598_p52001611185618"><a name="en-us_topic_0237122598_p52001611185618"></a><a name="en-us_topic_0237122598_p52001611185618"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122598_p1120012114566"><a name="en-us_topic_0237122598_p1120012114566"></a><a name="en-us_topic_0237122598_p1120012114566"></a>Number of conflicting buffers</p>
</td>
</tr>
<tr id="en-us_topic_0237122598_row4200611175619"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122598_p7200711125612"><a name="en-us_topic_0237122598_p7200711125612"></a><a name="en-us_topic_0237122598_p7200711125612"></a>confl_deadlock</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122598_p620017110564"><a name="en-us_topic_0237122598_p620017110564"></a><a name="en-us_topic_0237122598_p620017110564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122598_p9200111175614"><a name="en-us_topic_0237122598_p9200111175614"></a><a name="en-us_topic_0237122598_p9200111175614"></a>Number of conflicting deadlocks</p>
</td>
</tr>
</tbody>
</table>

