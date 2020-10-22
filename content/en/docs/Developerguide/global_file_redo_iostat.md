# GLOBAL\_FILE\_REDO\_IOSTAT<a name="EN-US_TOPIC_0245374675"></a>

**GLOBAL\_FILE\_REDO\_IOSTAT**  records statistics about redo logs and WALs on each node in openGauss. 

**Table  1**  GLOBALXC\_FILE\_REDO\_IOSTAT columns

<a name="en-us_topic_0237122571_table565454216136"></a>
<table><thead align="left"><tr id="en-us_topic_0237122571_row17754194211313"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122571_p675412429138"><a name="en-us_topic_0237122571_p675412429138"></a><a name="en-us_topic_0237122571_p675412429138"></a><strong id="b1869915583578"><a name="b1869915583578"></a><a name="b1869915583578"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122571_p1075414420133"><a name="en-us_topic_0237122571_p1075414420133"></a><a name="en-us_topic_0237122571_p1075414420133"></a><strong id="b1336295915718"><a name="b1336295915718"></a><a name="b1336295915718"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122571_p275416428136"><a name="en-us_topic_0237122571_p275416428136"></a><a name="en-us_topic_0237122571_p275416428136"></a><strong id="b6977205935718"><a name="b6977205935718"></a><a name="b6977205935718"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122571_row4755114271312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p13755144218138"><a name="en-us_topic_0237122571_p13755144218138"></a><a name="en-us_topic_0237122571_p13755144218138"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p1175534212138"><a name="en-us_topic_0237122571_p1175534212138"></a><a name="en-us_topic_0237122571_p1175534212138"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p875584231315"><a name="en-us_topic_0237122571_p875584231315"></a><a name="en-us_topic_0237122571_p875584231315"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row775664271313"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p1375664220131"><a name="en-us_topic_0237122571_p1375664220131"></a><a name="en-us_topic_0237122571_p1375664220131"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p187571042131312"><a name="en-us_topic_0237122571_p187571042131312"></a><a name="en-us_topic_0237122571_p187571042131312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p2757184291317"><a name="en-us_topic_0237122571_p2757184291317"></a><a name="en-us_topic_0237122571_p2757184291317"></a>Number of times writing into the WAL buffer</p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row9757144201317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p77575422136"><a name="en-us_topic_0237122571_p77575422136"></a><a name="en-us_topic_0237122571_p77575422136"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p147571342141313"><a name="en-us_topic_0237122571_p147571342141313"></a><a name="en-us_topic_0237122571_p147571342141313"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p187572428133"><a name="en-us_topic_0237122571_p187572428133"></a><a name="en-us_topic_0237122571_p187572428133"></a>Number of blocks written into the WAL buffer</p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row12758174291316"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p3758742151319"><a name="en-us_topic_0237122571_p3758742151319"></a><a name="en-us_topic_0237122571_p3758742151319"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p207581042131314"><a name="en-us_topic_0237122571_p207581042131314"></a><a name="en-us_topic_0237122571_p207581042131314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p167580429137"><a name="en-us_topic_0237122571_p167580429137"></a><a name="en-us_topic_0237122571_p167580429137"></a>Duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row975814426133"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p5758164215137"><a name="en-us_topic_0237122571_p5758164215137"></a><a name="en-us_topic_0237122571_p5758164215137"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p97581942111311"><a name="en-us_topic_0237122571_p97581942111311"></a><a name="en-us_topic_0237122571_p97581942111311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p1675854216131"><a name="en-us_topic_0237122571_p1675854216131"></a><a name="en-us_topic_0237122571_p1675854216131"></a>Average duration of writing into XLOG files (unit: μs). <strong id="b1879281219589"><a name="b1879281219589"></a><a name="b1879281219589"></a>avgiotim</strong> = <strong id="b1779761265813"><a name="b1779761265813"></a><a name="b1779761265813"></a>writetim</strong>/<strong id="b7797112115816"><a name="b7797112115816"></a><a name="b7797112115816"></a>phywrts</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row10758124251314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p27581442181313"><a name="en-us_topic_0237122571_p27581442181313"></a><a name="en-us_topic_0237122571_p27581442181313"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p187591942161315"><a name="en-us_topic_0237122571_p187591942161315"></a><a name="en-us_topic_0237122571_p187591942161315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p147599429135"><a name="en-us_topic_0237122571_p147599429135"></a><a name="en-us_topic_0237122571_p147599429135"></a>Duration of the last writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row1775918428134"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p97594422138"><a name="en-us_topic_0237122571_p97594422138"></a><a name="en-us_topic_0237122571_p97594422138"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p1675944210133"><a name="en-us_topic_0237122571_p1675944210133"></a><a name="en-us_topic_0237122571_p1675944210133"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p6759134210137"><a name="en-us_topic_0237122571_p6759134210137"></a><a name="en-us_topic_0237122571_p6759134210137"></a>Minimum duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122571_row177591942181312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122571_p575910425136"><a name="en-us_topic_0237122571_p575910425136"></a><a name="en-us_topic_0237122571_p575910425136"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122571_p975974271316"><a name="en-us_topic_0237122571_p975974271316"></a><a name="en-us_topic_0237122571_p975974271316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122571_p4759242171310"><a name="en-us_topic_0237122571_p4759242171310"></a><a name="en-us_topic_0237122571_p4759242171310"></a>Maximum duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

