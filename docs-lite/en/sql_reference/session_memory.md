# SESSION\_MEMORY<a name="EN-US_TOPIC_0289900991"></a>

**SESSION\_MEMORY**  collects statistics about memory usage at the session level in the unit of MB, including all the memory allocated to openGauss and stream threads on DNs for jobs currently executed by users.

**Table  1**  SESSION\_MEMORY columns

<a name="en-us_topic_0283136985_en-us_topic_0237122633_table1628492552316"></a>
<table><thead align="left"><tr id="en-us_topic_0283136985_en-us_topic_0237122633_row93521256238"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136985_en-us_topic_0237122633_p173531225142313"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p173531225142313"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p173531225142313"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136985_en-us_topic_0237122633_p33531325192314"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p33531325192314"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p33531325192314"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136985_en-us_topic_0237122633_p1635310251230"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p1635310251230"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p1635310251230"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136985_en-us_topic_0237122633_row835482542310"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p10354162552312"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p10354162552312"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p10354162552312"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p123547256237"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p123547256237"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p123547256237"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p153541025172319"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p153541025172319"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p153541025172319"></a>Thread start time and ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136985_en-us_topic_0237122633_row143547259239"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p17354825162318"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p17354825162318"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p17354825162318"></a>init_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p20354625162311"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p20354625162311"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p20354625162311"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p1235422520238"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p1235422520238"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p1235422520238"></a>Memory allocated to the currently executed job before the job enters the executor</p>
</td>
</tr>
<tr id="en-us_topic_0283136985_en-us_topic_0237122633_row1835512542318"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p3355202532314"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p3355202532314"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p3355202532314"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p13551125142319"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p13551125142319"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p13551125142319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p135592552311"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p135592552311"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p135592552311"></a>Memory allocated to the currently executed job</p>
</td>
</tr>
<tr id="en-us_topic_0283136985_en-us_topic_0237122633_row73556253239"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p83558250234"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p83558250234"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p83558250234"></a>peak_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p835592572316"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p835592572316"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p835592572316"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136985_en-us_topic_0237122633_p5355192515232"><a name="en-us_topic_0283136985_en-us_topic_0237122633_p5355192515232"></a><a name="en-us_topic_0283136985_en-us_topic_0237122633_p5355192515232"></a>Peak memory allocated to the currently executed job</p>
</td>
</tr>
</tbody>
</table>

