# LOCAL\_REL\_IOSTAT<a name="EN-US_TOPIC_0289899847"></a>

**LOCAL\_REL\_IOSTAT**  displays the accumulated I/O status of all data files on the current node.

**Table  1**  LOCAL\_REL\_IOSTAT columns

<a name="en-us_topic_0283137181_en-us_topic_0237122572_table565454216136"></a>
<table><thead align="left"><tr id="en-us_topic_0283137181_en-us_topic_0237122572_row17754194211313"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137181_en-us_topic_0237122572_p675412429138"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p675412429138"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p675412429138"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137181_en-us_topic_0237122572_p1075414420133"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p1075414420133"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p1075414420133"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137181_en-us_topic_0237122572_p275416428136"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p275416428136"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p275416428136"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137181_en-us_topic_0237122572_row775664271313"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p1375664220131"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p1375664220131"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p1375664220131"></a>phyrds</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p187571042131312"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p187571042131312"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p187571042131312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p2757184291317"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p2757184291317"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p2757184291317"></a>Number of times of reading physical files</p>
</td>
</tr>
<tr id="en-us_topic_0283137181_en-us_topic_0237122572_row9757144201317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p77575422136"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p77575422136"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p77575422136"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p147571342141313"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p147571342141313"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p147571342141313"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p187572428133"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p187572428133"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p187572428133"></a>Number of times of writing into physical files</p>
</td>
</tr>
<tr id="en-us_topic_0283137181_en-us_topic_0237122572_row12758174291316"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p3758742151319"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p3758742151319"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p3758742151319"></a>phyblkrd</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p207581042131314"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p207581042131314"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p207581042131314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p167580429137"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p167580429137"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p167580429137"></a>Number of times of reading physical file blocks</p>
</td>
</tr>
<tr id="en-us_topic_0283137181_en-us_topic_0237122572_row975814426133"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p5758164215137"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p5758164215137"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p5758164215137"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p97581942111311"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p97581942111311"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p97581942111311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137181_en-us_topic_0237122572_p1675854216131"><a name="en-us_topic_0283137181_en-us_topic_0237122572_p1675854216131"></a><a name="en-us_topic_0283137181_en-us_topic_0237122572_p1675854216131"></a>Number of times of writing into physical file blocks</p>
</td>
</tr>
</tbody>
</table>

