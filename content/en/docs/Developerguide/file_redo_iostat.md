# FILE\_REDO\_IOSTAT<a name="EN-US_TOPIC_0245374673"></a>

**FILE\_REDO\_IOSTAT**  records statistics about redo logs \(WALs\) on the current node.

**Table  1**  FILE\_REDO\_IOSTAT columns

<a name="en-us_topic_0237122569_table1760317275515"></a>
<table><thead align="left"><tr id="en-us_topic_0237122569_row771612717511"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122569_p1071611278515"><a name="en-us_topic_0237122569_p1071611278515"></a><a name="en-us_topic_0237122569_p1071611278515"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122569_p167161827558"><a name="en-us_topic_0237122569_p167161827558"></a><a name="en-us_topic_0237122569_p167161827558"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122569_p17169271158"><a name="en-us_topic_0237122569_p17169271158"></a><a name="en-us_topic_0237122569_p17169271158"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122569_row27160279514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p17717827751"><a name="en-us_topic_0237122569_p17717827751"></a><a name="en-us_topic_0237122569_p17717827751"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p17171271458"><a name="en-us_topic_0237122569_p17171271458"></a><a name="en-us_topic_0237122569_p17171271458"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p197171627156"><a name="en-us_topic_0237122569_p197171627156"></a><a name="en-us_topic_0237122569_p197171627156"></a>Number of times writing into the WAL buffer</p>
</td>
</tr>
<tr id="en-us_topic_0237122569_row37174279511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p171719273512"><a name="en-us_topic_0237122569_p171719273512"></a><a name="en-us_topic_0237122569_p171719273512"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p97176271157"><a name="en-us_topic_0237122569_p97176271157"></a><a name="en-us_topic_0237122569_p97176271157"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p1071714271556"><a name="en-us_topic_0237122569_p1071714271556"></a><a name="en-us_topic_0237122569_p1071714271556"></a>Number of blocks written into the WAL buffer</p>
</td>
</tr>
<tr id="en-us_topic_0237122569_row1371712271754"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p971714273511"><a name="en-us_topic_0237122569_p971714273511"></a><a name="en-us_topic_0237122569_p971714273511"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p13717927558"><a name="en-us_topic_0237122569_p13717927558"></a><a name="en-us_topic_0237122569_p13717927558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p13718132712515"><a name="en-us_topic_0237122569_p13718132712515"></a><a name="en-us_topic_0237122569_p13718132712515"></a>Duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122569_row7718627555"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p071814271650"><a name="en-us_topic_0237122569_p071814271650"></a><a name="en-us_topic_0237122569_p071814271650"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p87189271754"><a name="en-us_topic_0237122569_p87189271754"></a><a name="en-us_topic_0237122569_p87189271754"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p371816272514"><a name="en-us_topic_0237122569_p371816272514"></a><a name="en-us_topic_0237122569_p371816272514"></a>Average duration of writing into XLOG files (unit: μs). <strong id="en-us_topic_0237122569_b11043965917"><a name="en-us_topic_0237122569_b11043965917"></a><a name="en-us_topic_0237122569_b11043965917"></a>avgiotim</strong> = <strong id="en-us_topic_0237122569_b18393195525810"><a name="en-us_topic_0237122569_b18393195525810"></a><a name="en-us_topic_0237122569_b18393195525810"></a>writetim</strong>/<strong id="en-us_topic_0237122569_b8866851185817"><a name="en-us_topic_0237122569_b8866851185817"></a><a name="en-us_topic_0237122569_b8866851185817"></a>phywrts</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122569_row16718122716510"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p7718127258"><a name="en-us_topic_0237122569_p7718127258"></a><a name="en-us_topic_0237122569_p7718127258"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p14718152720517"><a name="en-us_topic_0237122569_p14718152720517"></a><a name="en-us_topic_0237122569_p14718152720517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p6719127156"><a name="en-us_topic_0237122569_p6719127156"></a><a name="en-us_topic_0237122569_p6719127156"></a>Duration of the last writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122569_row10719527859"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p37191627958"><a name="en-us_topic_0237122569_p37191627958"></a><a name="en-us_topic_0237122569_p37191627958"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p1071914278516"><a name="en-us_topic_0237122569_p1071914278516"></a><a name="en-us_topic_0237122569_p1071914278516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p871992716511"><a name="en-us_topic_0237122569_p871992716511"></a><a name="en-us_topic_0237122569_p871992716511"></a>Minimum duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122569_row77200278520"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122569_p872018271951"><a name="en-us_topic_0237122569_p872018271951"></a><a name="en-us_topic_0237122569_p872018271951"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122569_p472120277515"><a name="en-us_topic_0237122569_p472120277515"></a><a name="en-us_topic_0237122569_p472120277515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122569_p9721627752"><a name="en-us_topic_0237122569_p9721627752"></a><a name="en-us_topic_0237122569_p9721627752"></a>Maximum duration of writing into XLOG files (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

