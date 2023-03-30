# SHARED\_MEMORY\_DETAIL<a name="EN-US_TOPIC_0245374667"></a>

**SHARED\_MEMORY\_DETAIL**  queries the usage information about shared memory contexts on the current node.

**Table  1**  SHARED\_MEMORY\_DETAIL columns

<a name="en-us_topic_0237122563_table1275129115118"></a>
<table><thead align="left"><tr id="en-us_topic_0237122563_row1782510920511"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122563_p98251193519"><a name="en-us_topic_0237122563_p98251193519"></a><a name="en-us_topic_0237122563_p98251193519"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122563_p168251699519"><a name="en-us_topic_0237122563_p168251699519"></a><a name="en-us_topic_0237122563_p168251699519"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122563_p18250918516"><a name="en-us_topic_0237122563_p18250918516"></a><a name="en-us_topic_0237122563_p18250918516"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122563_row12826292513"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122563_p48261995516"><a name="en-us_topic_0237122563_p48261995516"></a><a name="en-us_topic_0237122563_p48261995516"></a>contextname</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122563_p17826898514"><a name="en-us_topic_0237122563_p17826898514"></a><a name="en-us_topic_0237122563_p17826898514"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122563_p188263905116"><a name="en-us_topic_0237122563_p188263905116"></a><a name="en-us_topic_0237122563_p188263905116"></a>Name of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122563_row58264945119"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122563_p98261394512"><a name="en-us_topic_0237122563_p98261394512"></a><a name="en-us_topic_0237122563_p98261394512"></a>level</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122563_p1582619985120"><a name="en-us_topic_0237122563_p1582619985120"></a><a name="en-us_topic_0237122563_p1582619985120"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122563_p1082611915516"><a name="en-us_topic_0237122563_p1082611915516"></a><a name="en-us_topic_0237122563_p1082611915516"></a>Level of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122563_row28265917518"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122563_p11826199105110"><a name="en-us_topic_0237122563_p11826199105110"></a><a name="en-us_topic_0237122563_p11826199105110"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122563_p1482719910518"><a name="en-us_topic_0237122563_p1482719910518"></a><a name="en-us_topic_0237122563_p1482719910518"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122563_p4827119195113"><a name="en-us_topic_0237122563_p4827119195113"></a><a name="en-us_topic_0237122563_p4827119195113"></a>Name of the parent memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122563_row58272912517"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122563_p188272911518"><a name="en-us_topic_0237122563_p188272911518"></a><a name="en-us_topic_0237122563_p188272911518"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122563_p1482769125120"><a name="en-us_topic_0237122563_p1482769125120"></a><a name="en-us_topic_0237122563_p1482769125120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122563_p28274910516"><a name="en-us_topic_0237122563_p28274910516"></a><a name="en-us_topic_0237122563_p28274910516"></a>Total size of the shared memory (unit: byte)</p>
</td>
</tr>
<tr id="en-us_topic_0237122563_row1082779155117"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122563_p1982710985119"><a name="en-us_topic_0237122563_p1982710985119"></a><a name="en-us_topic_0237122563_p1982710985119"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122563_p082711925117"><a name="en-us_topic_0237122563_p082711925117"></a><a name="en-us_topic_0237122563_p082711925117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122563_p1382712925114"><a name="en-us_topic_0237122563_p1382712925114"></a><a name="en-us_topic_0237122563_p1382712925114"></a>Remaining size of the shared memory (unit: byte)</p>
</td>
</tr>
<tr id="en-us_topic_0237122563_row128281955119"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122563_p682811955110"><a name="en-us_topic_0237122563_p682811955110"></a><a name="en-us_topic_0237122563_p682811955110"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122563_p28285915516"><a name="en-us_topic_0237122563_p28285915516"></a><a name="en-us_topic_0237122563_p28285915516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122563_p1682814985114"><a name="en-us_topic_0237122563_p1682814985114"></a><a name="en-us_topic_0237122563_p1682814985114"></a>Used size of the shared memory (unit: byte)</p>
</td>
</tr>
</tbody>
</table>

