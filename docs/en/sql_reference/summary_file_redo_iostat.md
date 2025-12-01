# SUMMARY\_FILE\_REDO\_IOSTAT<a name="EN-US_TOPIC_0245374674"></a>

**SUMMARY\_FILE\_REDO\_IOSTAT**  records statistics about all redo logs and WALs in openGauss. 

**Table  1**  SUMMARY\_FILE\_REDO\_IOSTAT columns

<a name="en-us_topic_0237122570_table18353189131118"></a>
<table><thead align="left"><tr id="en-us_topic_0237122570_row845279141114"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122570_p945239191120"><a name="en-us_topic_0237122570_p945239191120"></a><a name="en-us_topic_0237122570_p945239191120"></a><strong id="b7313134765310"><a name="b7313134765310"></a><a name="b7313134765310"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122570_p04528917111"><a name="en-us_topic_0237122570_p04528917111"></a><a name="en-us_topic_0237122570_p04528917111"></a><strong id="b1328814885320"><a name="b1328814885320"></a><a name="b1328814885320"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122570_p114526913119"><a name="en-us_topic_0237122570_p114526913119"></a><a name="en-us_topic_0237122570_p114526913119"></a><strong id="b18875124855315"><a name="b18875124855315"></a><a name="b18875124855315"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122570_row9453095118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p11453159161120"><a name="en-us_topic_0237122570_p11453159161120"></a><a name="en-us_topic_0237122570_p11453159161120"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p545318913118"><a name="en-us_topic_0237122570_p545318913118"></a><a name="en-us_topic_0237122570_p545318913118"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p10453795113"><a name="en-us_topic_0237122570_p10453795113"></a><a name="en-us_topic_0237122570_p10453795113"></a>Number of times writing into the WAL buffer</p>
</td>
</tr>
<tr id="en-us_topic_0237122570_row16453129111120"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p16453129161119"><a name="en-us_topic_0237122570_p16453129161119"></a><a name="en-us_topic_0237122570_p16453129161119"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p8453998116"><a name="en-us_topic_0237122570_p8453998116"></a><a name="en-us_topic_0237122570_p8453998116"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p1745369151120"><a name="en-us_topic_0237122570_p1745369151120"></a><a name="en-us_topic_0237122570_p1745369151120"></a>Number of blocks written into the WAL buffer</p>
</td>
</tr>
<tr id="en-us_topic_0237122570_row1345339161115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p3454119121117"><a name="en-us_topic_0237122570_p3454119121117"></a><a name="en-us_topic_0237122570_p3454119121117"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p84541911112"><a name="en-us_topic_0237122570_p84541911112"></a><a name="en-us_topic_0237122570_p84541911112"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p1145469151113"><a name="en-us_topic_0237122570_p1145469151113"></a><a name="en-us_topic_0237122570_p1145469151113"></a>Duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122570_row1845429171115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p124547931114"><a name="en-us_topic_0237122570_p124547931114"></a><a name="en-us_topic_0237122570_p124547931114"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p745415911113"><a name="en-us_topic_0237122570_p745415911113"></a><a name="en-us_topic_0237122570_p745415911113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p645479121110"><a name="en-us_topic_0237122570_p645479121110"></a><a name="en-us_topic_0237122570_p645479121110"></a>Average duration of writing into XLOG files (unit: μs). <strong id="b79533286552"><a name="b79533286552"></a><a name="b79533286552"></a>avgiotim</strong> = <strong id="b14958122815557"><a name="b14958122815557"></a><a name="b14958122815557"></a>writetim</strong>/<strong id="b695917287553"><a name="b695917287553"></a><a name="b695917287553"></a>phywrts</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122570_row1145412914118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p194548901116"><a name="en-us_topic_0237122570_p194548901116"></a><a name="en-us_topic_0237122570_p194548901116"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p64554941113"><a name="en-us_topic_0237122570_p64554941113"></a><a name="en-us_topic_0237122570_p64554941113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p145518917111"><a name="en-us_topic_0237122570_p145518917111"></a><a name="en-us_topic_0237122570_p145518917111"></a>Duration of the last writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122570_row94551998113"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p8455692114"><a name="en-us_topic_0237122570_p8455692114"></a><a name="en-us_topic_0237122570_p8455692114"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p145509151118"><a name="en-us_topic_0237122570_p145509151118"></a><a name="en-us_topic_0237122570_p145509151118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p1145519161119"><a name="en-us_topic_0237122570_p1145519161119"></a><a name="en-us_topic_0237122570_p1145519161119"></a>Minimum duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122570_row0455795115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122570_p17455169191114"><a name="en-us_topic_0237122570_p17455169191114"></a><a name="en-us_topic_0237122570_p17455169191114"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122570_p1845517920111"><a name="en-us_topic_0237122570_p1845517920111"></a><a name="en-us_topic_0237122570_p1845517920111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122570_p1145549201110"><a name="en-us_topic_0237122570_p1145549201110"></a><a name="en-us_topic_0237122570_p1145549201110"></a>Maximum duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

