# SUMMARY\_FILE\_IOSTAT<a name="EN-US_TOPIC_0245374671"></a>

**SUMMARY\_FILE\_IOSTAT**  records statistics about data file I/Os in openGauss to indicate I/O performance and detect performance problems such as abnormal I/O operations. 

**Table  1**  SUMMARY\_FILE\_IOSTAT columns

<a name="en-us_topic_0237122567_table126169597116"></a>
<table><thead align="left"><tr id="en-us_topic_0237122567_row2076414591719"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122567_p276465912111"><a name="en-us_topic_0237122567_p276465912111"></a><a name="en-us_topic_0237122567_p276465912111"></a><strong id="b185311034194919"><a name="b185311034194919"></a><a name="b185311034194919"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122567_p1076519591718"><a name="en-us_topic_0237122567_p1076519591718"></a><a name="en-us_topic_0237122567_p1076519591718"></a><strong id="b5824113512496"><a name="b5824113512496"></a><a name="b5824113512496"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122567_p476517593119"><a name="en-us_topic_0237122567_p476517593119"></a><a name="en-us_topic_0237122567_p476517593119"></a><strong id="b1350473634918"><a name="b1350473634918"></a><a name="b1350473634918"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122567_row157654591311"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p1176517591616"><a name="en-us_topic_0237122567_p1176517591616"></a><a name="en-us_topic_0237122567_p1176517591616"></a>filenum</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p47655592120"><a name="en-us_topic_0237122567_p47655592120"></a><a name="en-us_topic_0237122567_p47655592120"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p11765159712"><a name="en-us_topic_0237122567_p11765159712"></a><a name="en-us_topic_0237122567_p11765159712"></a>File ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row47651459814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p1576615597119"><a name="en-us_topic_0237122567_p1576615597119"></a><a name="en-us_topic_0237122567_p1576615597119"></a>dbid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p1076617599120"><a name="en-us_topic_0237122567_p1076617599120"></a><a name="en-us_topic_0237122567_p1076617599120"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p5766165911117"><a name="en-us_topic_0237122567_p5766165911117"></a><a name="en-us_topic_0237122567_p5766165911117"></a>Database ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row1676615595111"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p37661459413"><a name="en-us_topic_0237122567_p37661459413"></a><a name="en-us_topic_0237122567_p37661459413"></a>spcid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p4766135912112"><a name="en-us_topic_0237122567_p4766135912112"></a><a name="en-us_topic_0237122567_p4766135912112"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p476617591612"><a name="en-us_topic_0237122567_p476617591612"></a><a name="en-us_topic_0237122567_p476617591612"></a>Tablespace ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row27665591717"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p1676614591411"><a name="en-us_topic_0237122567_p1676614591411"></a><a name="en-us_topic_0237122567_p1676614591411"></a>phyrds</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p1876719591313"><a name="en-us_topic_0237122567_p1876719591313"></a><a name="en-us_topic_0237122567_p1876719591313"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p47673595118"><a name="en-us_topic_0237122567_p47673595118"></a><a name="en-us_topic_0237122567_p47673595118"></a>Number of times of reading physical files</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row1476795917119"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p77674591310"><a name="en-us_topic_0237122567_p77674591310"></a><a name="en-us_topic_0237122567_p77674591310"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p137027016577"><a name="p137027016577"></a><a name="p137027016577"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p147671859616"><a name="en-us_topic_0237122567_p147671859616"></a><a name="en-us_topic_0237122567_p147671859616"></a>Number of times of writing into physical files</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row97671659912"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p67679591418"><a name="en-us_topic_0237122567_p67679591418"></a><a name="en-us_topic_0237122567_p67679591418"></a>phyblkrd</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p1263814475716"><a name="p1263814475716"></a><a name="p1263814475716"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p1176819593113"><a name="en-us_topic_0237122567_p1176819593113"></a><a name="en-us_topic_0237122567_p1176819593113"></a>Number of times of reading physical file blocks</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row18768959712"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p7769185912114"><a name="en-us_topic_0237122567_p7769185912114"></a><a name="en-us_topic_0237122567_p7769185912114"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p11170685572"><a name="p11170685572"></a><a name="p11170685572"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p1576913590111"><a name="en-us_topic_0237122567_p1576913590111"></a><a name="en-us_topic_0237122567_p1576913590111"></a>Number of times of writing into physical file blocks</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row47698597112"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p18769159313"><a name="en-us_topic_0237122567_p18769159313"></a><a name="en-us_topic_0237122567_p18769159313"></a>readtim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p155625140579"><a name="p155625140579"></a><a name="p155625140579"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p207691859014"><a name="en-us_topic_0237122567_p207691859014"></a><a name="en-us_topic_0237122567_p207691859014"></a>Total duration of reading (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row276920598112"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p1777018591611"><a name="en-us_topic_0237122567_p1777018591611"></a><a name="en-us_topic_0237122567_p1777018591611"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="p1283217309575"><a name="p1283217309575"></a><a name="p1283217309575"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p67701059919"><a name="en-us_topic_0237122567_p67701059919"></a><a name="en-us_topic_0237122567_p67701059919"></a>Total duration of writing (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row1377010591715"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p1770559618"><a name="en-us_topic_0237122567_p1770559618"></a><a name="en-us_topic_0237122567_p1770559618"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p177014591713"><a name="en-us_topic_0237122567_p177014591713"></a><a name="en-us_topic_0237122567_p177014591713"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p20770959715"><a name="en-us_topic_0237122567_p20770959715"></a><a name="en-us_topic_0237122567_p20770959715"></a>Average duration of reading and writing (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row9770759213"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p27701159015"><a name="en-us_topic_0237122567_p27701159015"></a><a name="en-us_topic_0237122567_p27701159015"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p9771185913114"><a name="en-us_topic_0237122567_p9771185913114"></a><a name="en-us_topic_0237122567_p9771185913114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p0771259513"><a name="en-us_topic_0237122567_p0771259513"></a><a name="en-us_topic_0237122567_p0771259513"></a>Duration of the last file reading (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row27718593113"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p077110595112"><a name="en-us_topic_0237122567_p077110595112"></a><a name="en-us_topic_0237122567_p077110595112"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p477285910117"><a name="en-us_topic_0237122567_p477285910117"></a><a name="en-us_topic_0237122567_p477285910117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p187725591218"><a name="en-us_topic_0237122567_p187725591218"></a><a name="en-us_topic_0237122567_p187725591218"></a>Minimum duration of reading and writing (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122567_row6772559616"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122567_p1177214591211"><a name="en-us_topic_0237122567_p1177214591211"></a><a name="en-us_topic_0237122567_p1177214591211"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122567_p1772359213"><a name="en-us_topic_0237122567_p1772359213"></a><a name="en-us_topic_0237122567_p1772359213"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122567_p12772659015"><a name="en-us_topic_0237122567_p12772659015"></a><a name="en-us_topic_0237122567_p12772659015"></a>Maximum duration of reading and writing (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

