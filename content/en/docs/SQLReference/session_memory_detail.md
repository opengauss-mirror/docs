# SESSION\_MEMORY\_DETAIL<a name="EN-US_TOPIC_0245374739"></a>

**SESSION\_MEMORY\_DETAIL**  collects statistics about thread memory usage by MemoryContext node.

**Table  1**  SESSION\_MEMORY\_DETAIL columns

<a name="en-us_topic_0237122635_table96720852512"></a>
<table><thead align="left"><tr id="en-us_topic_0237122635_row2078148112515"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122635_p1278113862519"><a name="en-us_topic_0237122635_p1278113862519"></a><a name="en-us_topic_0237122635_p1278113862519"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.740000000000002%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122635_p107825842514"><a name="en-us_topic_0237122635_p107825842514"></a><a name="en-us_topic_0237122635_p107825842514"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122635_p6782988251"><a name="en-us_topic_0237122635_p6782988251"></a><a name="en-us_topic_0237122635_p6782988251"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122635_row37821811257"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p77822832513"><a name="en-us_topic_0237122635_p77822832513"></a><a name="en-us_topic_0237122635_p77822832513"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p178328142520"><a name="en-us_topic_0237122635_p178328142520"></a><a name="en-us_topic_0237122635_p178328142520"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p3783198132516"><a name="en-us_topic_0237122635_p3783198132516"></a><a name="en-us_topic_0237122635_p3783198132516"></a>Thread start time and ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row7783482252"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p778313862519"><a name="en-us_topic_0237122635_p778313862519"></a><a name="en-us_topic_0237122635_p778313862519"></a>sesstype</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p2078348172518"><a name="en-us_topic_0237122635_p2078348172518"></a><a name="en-us_topic_0237122635_p2078348172518"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p1678412892515"><a name="en-us_topic_0237122635_p1678412892515"></a><a name="en-us_topic_0237122635_p1678412892515"></a>Thread name</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row2078417818251"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p15784158112513"><a name="en-us_topic_0237122635_p15784158112513"></a><a name="en-us_topic_0237122635_p15784158112513"></a>contextname</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p107846817257"><a name="en-us_topic_0237122635_p107846817257"></a><a name="en-us_topic_0237122635_p107846817257"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p1784981254"><a name="en-us_topic_0237122635_p1784981254"></a><a name="en-us_topic_0237122635_p1784981254"></a>Name of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row978416822511"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p15786108162517"><a name="en-us_topic_0237122635_p15786108162517"></a><a name="en-us_topic_0237122635_p15786108162517"></a>level</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p1978618112519"><a name="en-us_topic_0237122635_p1978618112519"></a><a name="en-us_topic_0237122635_p1978618112519"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p1478628122513"><a name="en-us_topic_0237122635_p1478628122513"></a><a name="en-us_topic_0237122635_p1478628122513"></a>Level of memory context importance</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row1786480258"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p2078610815250"><a name="en-us_topic_0237122635_p2078610815250"></a><a name="en-us_topic_0237122635_p2078610815250"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p878668172515"><a name="en-us_topic_0237122635_p878668172515"></a><a name="en-us_topic_0237122635_p878668172515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p278610811253"><a name="en-us_topic_0237122635_p278610811253"></a><a name="en-us_topic_0237122635_p278610811253"></a>Name of the parent memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row177861888254"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p2786178132510"><a name="en-us_topic_0237122635_p2786178132510"></a><a name="en-us_topic_0237122635_p2786178132510"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p7787183251"><a name="en-us_topic_0237122635_p7787183251"></a><a name="en-us_topic_0237122635_p7787183251"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p678712812510"><a name="en-us_topic_0237122635_p678712812510"></a><a name="en-us_topic_0237122635_p678712812510"></a>Size of the applied memory (unit: byte)</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row27873815257"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p1578718842519"><a name="en-us_topic_0237122635_p1578718842519"></a><a name="en-us_topic_0237122635_p1578718842519"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p1378718892518"><a name="en-us_topic_0237122635_p1378718892518"></a><a name="en-us_topic_0237122635_p1378718892518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p4787188152518"><a name="en-us_topic_0237122635_p4787188152518"></a><a name="en-us_topic_0237122635_p4787188152518"></a>Size of the idle memory (unit: byte)</p>
</td>
</tr>
<tr id="en-us_topic_0237122635_row978715814252"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122635_p278728102514"><a name="en-us_topic_0237122635_p278728102514"></a><a name="en-us_topic_0237122635_p278728102514"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="17.740000000000002%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122635_p578778192511"><a name="en-us_topic_0237122635_p578778192511"></a><a name="en-us_topic_0237122635_p578778192511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122635_p378718142515"><a name="en-us_topic_0237122635_p378718142515"></a><a name="en-us_topic_0237122635_p378718142515"></a>Size of the used memory (unit: byte)</p>
</td>
</tr>
</tbody>
</table>

