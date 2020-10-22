# GLOBAL\_SHARED\_MEMORY\_DETAIL<a name="EN-US_TOPIC_0245374668"></a>

**GLOBAL\_SHARED\_MEMORY\_DETAIL**  is used to query the usage of shared memory contexts on all normal nodes in openGauss.

**Table  1**  GLOBAL\_SHARED\_MEMORY\_DETAIL columns

<a name="en-us_topic_0237122564_table13364435155820"></a>
<table><thead align="left"><tr id="en-us_topic_0237122564_row9562135125818"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122564_p1756211352582"><a name="en-us_topic_0237122564_p1756211352582"></a><a name="en-us_topic_0237122564_p1756211352582"></a><strong id="b178115513617"><a name="b178115513617"></a><a name="b178115513617"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122564_p105621335135815"><a name="en-us_topic_0237122564_p105621335135815"></a><a name="en-us_topic_0237122564_p105621335135815"></a><strong id="b118554569388"><a name="b118554569388"></a><a name="b118554569388"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122564_p1356223515817"><a name="en-us_topic_0237122564_p1356223515817"></a><a name="en-us_topic_0237122564_p1356223515817"></a><strong id="b10615657203816"><a name="b10615657203816"></a><a name="b10615657203816"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122564_row1956220352589"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p15563123595820"><a name="en-us_topic_0237122564_p15563123595820"></a><a name="en-us_topic_0237122564_p15563123595820"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p056343513586"><a name="en-us_topic_0237122564_p056343513586"></a><a name="en-us_topic_0237122564_p056343513586"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p3563143519588"><a name="en-us_topic_0237122564_p3563143519588"></a><a name="en-us_topic_0237122564_p3563143519588"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122564_row55636359585"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p1756314356587"><a name="en-us_topic_0237122564_p1756314356587"></a><a name="en-us_topic_0237122564_p1756314356587"></a>contextname</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p11563143525810"><a name="en-us_topic_0237122564_p11563143525810"></a><a name="en-us_topic_0237122564_p11563143525810"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p45632035165819"><a name="en-us_topic_0237122564_p45632035165819"></a><a name="en-us_topic_0237122564_p45632035165819"></a>Name of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122564_row8563335115812"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p6564835185810"><a name="en-us_topic_0237122564_p6564835185810"></a><a name="en-us_topic_0237122564_p6564835185810"></a>level</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p175641235195813"><a name="en-us_topic_0237122564_p175641235195813"></a><a name="en-us_topic_0237122564_p175641235195813"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p1856463585811"><a name="en-us_topic_0237122564_p1856463585811"></a><a name="en-us_topic_0237122564_p1856463585811"></a>Level of the memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122564_row5564113535818"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p14564203511581"><a name="en-us_topic_0237122564_p14564203511581"></a><a name="en-us_topic_0237122564_p14564203511581"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p3564103585815"><a name="en-us_topic_0237122564_p3564103585815"></a><a name="en-us_topic_0237122564_p3564103585815"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p14564435175818"><a name="en-us_topic_0237122564_p14564435175818"></a><a name="en-us_topic_0237122564_p14564435175818"></a>Name of the parent memory context</p>
</td>
</tr>
<tr id="en-us_topic_0237122564_row14564435115819"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p1256473515586"><a name="en-us_topic_0237122564_p1256473515586"></a><a name="en-us_topic_0237122564_p1256473515586"></a>totalsize</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p75643359585"><a name="en-us_topic_0237122564_p75643359585"></a><a name="en-us_topic_0237122564_p75643359585"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p1356593505817"><a name="en-us_topic_0237122564_p1356593505817"></a><a name="en-us_topic_0237122564_p1356593505817"></a>Total size of the shared memory (unit: byte)</p>
</td>
</tr>
<tr id="en-us_topic_0237122564_row12565135115816"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p1456593565815"><a name="en-us_topic_0237122564_p1456593565815"></a><a name="en-us_topic_0237122564_p1456593565815"></a>freesize</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p1565103565817"><a name="en-us_topic_0237122564_p1565103565817"></a><a name="en-us_topic_0237122564_p1565103565817"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p145651135125816"><a name="en-us_topic_0237122564_p145651135125816"></a><a name="en-us_topic_0237122564_p145651135125816"></a>Remaining size of the shared memory (unit: byte)</p>
</td>
</tr>
<tr id="en-us_topic_0237122564_row6565153514587"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122564_p1856563515819"><a name="en-us_topic_0237122564_p1856563515819"></a><a name="en-us_topic_0237122564_p1856563515819"></a>usedsize</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122564_p356573519583"><a name="en-us_topic_0237122564_p356573519583"></a><a name="en-us_topic_0237122564_p356573519583"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122564_p7565435145810"><a name="en-us_topic_0237122564_p7565435145810"></a><a name="en-us_topic_0237122564_p7565435145810"></a>Used size of the shared memory (unit: byte)</p>
</td>
</tr>
</tbody>
</table>

