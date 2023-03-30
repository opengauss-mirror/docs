# SUMMARY\_STAT\_BAD\_BLOCK<a name="EN-US_TOPIC_0245374717"></a>

**SUMMARY\_STAT\_BAD\_BLOCK**  displays information about table and index read failures in openGauss. 

**Table  1**  SUMMARY\_STAT\_BAD\_BLOCK columns

<a name="en-us_topic_0237122613_table6228201714131"></a>
<table><thead align="left"><tr id="en-us_topic_0237122613_row183151917191320"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122613_p1031561710138"><a name="en-us_topic_0237122613_p1031561710138"></a><a name="en-us_topic_0237122613_p1031561710138"></a><strong id="b7890516504"><a name="b7890516504"></a><a name="b7890516504"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="29.21%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122613_p13316191771318"><a name="en-us_topic_0237122613_p13316191771318"></a><a name="en-us_topic_0237122613_p13316191771318"></a><strong id="b97671216501"><a name="b97671216501"></a><a name="b97671216501"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.18000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122613_p33161917121314"><a name="en-us_topic_0237122613_p33161917121314"></a><a name="en-us_topic_0237122613_p33161917121314"></a><strong id="b841223135017"><a name="b841223135017"></a><a name="b841223135017"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122613_row331691710138"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p331611716136"><a name="en-us_topic_0237122613_p331611716136"></a><a name="en-us_topic_0237122613_p331611716136"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p143161917121319"><a name="en-us_topic_0237122613_p143161917121319"></a><a name="en-us_topic_0237122613_p143161917121319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p18317171717139"><a name="en-us_topic_0237122613_p18317171717139"></a><a name="en-us_topic_0237122613_p18317171717139"></a>OID of the database</p>
</td>
</tr>
<tr id="en-us_topic_0237122613_row6317131761319"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p63171817101313"><a name="en-us_topic_0237122613_p63171817101313"></a><a name="en-us_topic_0237122613_p63171817101313"></a>tablespaceid</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p12317121771319"><a name="en-us_topic_0237122613_p12317121771319"></a><a name="en-us_topic_0237122613_p12317121771319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p1731721714131"><a name="en-us_topic_0237122613_p1731721714131"></a><a name="en-us_topic_0237122613_p1731721714131"></a>OID of the tablespace</p>
</td>
</tr>
<tr id="en-us_topic_0237122613_row3317517181315"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p1031761761314"><a name="en-us_topic_0237122613_p1031761761314"></a><a name="en-us_topic_0237122613_p1031761761314"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p11318161719137"><a name="en-us_topic_0237122613_p11318161719137"></a><a name="en-us_topic_0237122613_p11318161719137"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p55571710175414"><a name="en-us_topic_0237122613_p55571710175414"></a><a name="en-us_topic_0237122613_p55571710175414"></a>File node of this relation</p>
</td>
</tr>
<tr id="en-us_topic_0237122613_row2031812175136"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p43181317101318"><a name="en-us_topic_0237122613_p43181317101318"></a><a name="en-us_topic_0237122613_p43181317101318"></a>forknum</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p531851715134"><a name="en-us_topic_0237122613_p531851715134"></a><a name="en-us_topic_0237122613_p531851715134"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p13318141719131"><a name="en-us_topic_0237122613_p13318141719131"></a><a name="en-us_topic_0237122613_p13318141719131"></a>Fork number</p>
</td>
</tr>
<tr id="en-us_topic_0237122613_row103181617201320"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p20319117191312"><a name="en-us_topic_0237122613_p20319117191312"></a><a name="en-us_topic_0237122613_p20319117191312"></a>error_count</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p33191017161319"><a name="en-us_topic_0237122613_p33191017161319"></a><a name="en-us_topic_0237122613_p33191017161319"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p9319717131318"><a name="en-us_topic_0237122613_p9319717131318"></a><a name="en-us_topic_0237122613_p9319717131318"></a>Number of errors</p>
</td>
</tr>
<tr id="en-us_topic_0237122613_row5319161761316"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p1131971771317"><a name="en-us_topic_0237122613_p1131971771317"></a><a name="en-us_topic_0237122613_p1131971771317"></a>first_time</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p8319131731314"><a name="en-us_topic_0237122613_p8319131731314"></a><a name="en-us_topic_0237122613_p8319131731314"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p2320171715139"><a name="en-us_topic_0237122613_p2320171715139"></a><a name="en-us_topic_0237122613_p2320171715139"></a>Time when the first bad block occurred</p>
</td>
</tr>
<tr id="en-us_topic_0237122613_row2320217151316"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122613_p232061731311"><a name="en-us_topic_0237122613_p232061731311"></a><a name="en-us_topic_0237122613_p232061731311"></a>last_time</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122613_p6320171719135"><a name="en-us_topic_0237122613_p6320171719135"></a><a name="en-us_topic_0237122613_p6320171719135"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122613_p532021714138"><a name="en-us_topic_0237122613_p532021714138"></a><a name="en-us_topic_0237122613_p532021714138"></a>Time when the last bad block occurred</p>
</td>
</tr>
</tbody>
</table>

