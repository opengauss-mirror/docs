# Command Reference<a name="EN-US_TOPIC_0000001195271250"></a>

**Table 1** Parameters of the gs\_dbmind component forecast command line

<a name="table99309405415"></a>
<table><thead align="left"><tr id="row1693034011419"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p893012401447"><a name="p893012401447"></a><a name="p893012401447"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p129305403416"><a name="p129305403416"></a><a name="p129305403416"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p693018405410"><a name="p693018405410"></a><a name="p693018405410"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row5930174015412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p149307406411"><a name="p149307406411"></a><a name="p149307406411"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p179309401845"><a name="p179309401845"></a><a name="p179309401845"></a>Help command.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p39301240440"><a name="p39301240440"></a><a name="p39301240440"></a>-</p>
</td>
</tr>
<tr id="row12300134621117"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p87747524110"><a name="p87747524110"></a><a name="p87747524110"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14426194115176"><a name="p14426194115176"></a><a name="p14426194115176"></a>Action parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="ul950211292914"></a><a name="ul950211292914"></a><ul id="ul950211292914"><li><strong>show</strong>: displays results.</li><li><strong>clean</strong>: clears results.</li><li><strong>early-warning</strong>: reports alarms.</li></ul>
</td>
</tr>
<tr id="row11910554101219"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1133111208135"><a name="p1133111208135"></a><a name="p1133111208135"></a>-c,--conf</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18143163410134"><a name="p18143163410134"></a><a name="p18143163410134"></a>Configuration directory.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1616065113189"><a name="p1616065113189"></a><a name="p1616065113189"></a>-</p>
</td>
</tr>
<tr id="row1293018401245"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5441135310139"><a name="p5441135310139"></a><a name="p5441135310139"></a>--metric-name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p159301401846"><a name="p159301401846"></a><a name="p159301401846"></a>Name of the metric to be displayed, which is used for filtering.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2620105261812"><a name="p2620105261812"></a><a name="p2620105261812"></a>-</p>
</td>
</tr>
<tr id="row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p25301029171419"><a name="p25301029171419"></a><a name="p25301029171419"></a>--host</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3530729111413"><a name="p3530729111413"></a><a name="p3530729111413"></a>Service IP address and port number for filtering.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2800853131818"><a name="p2800853131818"></a><a name="p2800853131818"></a>-</p>
</td>
</tr>

<tr id="row45291529201416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p25301029171419"><a name="p25301029171419"></a><a name="p25301029171419"></a>--labels</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3530729111413"><a name="p3530729111413"></a><a name="p3530729111413"></a>Labels used by alarm information. The format is key-value pairs, which are separated by commas (,).</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2800853131818"><a name="p2800853131818"></a><a name="p2800853131818"></a>-</p>
</td>
</tr>

<tr id="row627105315153"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p192811539157"><a name="p192811539157"></a><a name="p192811539157"></a>--start-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1544145713182"><a name="p1544145713182"></a><a name="p1544145713182"></a>Timestamp of the start time, in milliseconds. Alternatively, the date and time format is %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1095712011916"><a name="p1095712011916"></a><a name="p1095712011916"></a>Positive integer or date and time format.</p>
</td>
</tr>
<tr id="row81421205167"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1114219081616"><a name="p1114219081616"></a><a name="p1114219081616"></a>--end-time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18836027812"><a name="p18836027812"></a><a name="p18836027812"></a>Timestamp of the start time, in milliseconds. Alternatively, the date and time format is %Y-%m-%d %H:%M:%S.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p383632711114"><a name="p383632711114"></a><a name="p383632711114"></a>Positive integer or date and time format.</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--retention-days</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Number of days for storing results.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>Non-negative real number.</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--upper</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Upper limit of the alarm threshold.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>Real number.</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--lower</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Lower limit of the alarm threshold.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>Real number.</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--warning-hours</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Time range of the predicted value alarm (unit: hour).</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>Positive integer.</p>
</td>
</tr>
<tr id="row8930340846"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9930640443"><a name="p9930640443"></a><a name="p9930640443"></a>--csv-dump-path</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7930154013410"><a name="p7930154013410"></a><a name="p7930154013410"></a>Path of the exported CSV file.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1595617014197"><a name="p1595617014197"></a><a name="p1595617014197"></a>-</p>
</td>
</tr>
</tbody>
</table>
