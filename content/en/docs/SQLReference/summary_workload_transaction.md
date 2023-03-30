# SUMMARY\_WORKLOAD\_TRANSACTION<a name="EN-US_TOPIC_0245374726"></a>

**SUMMARY\_WORKLOAD\_TRANSACTION**  displays information about transactions loaded in openGauss. 

**Table  1**  SUMMARY\_WORKLOAD\_TRANSACTION columns

<a name="en-us_topic_0237122622_table14347174713173"></a>
<table><thead align="left"><tr id="en-us_topic_0237122622_row174991947111716"><th class="cellrowborder" valign="top" width="24.22%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122622_p1649924721712"><a name="en-us_topic_0237122622_p1649924721712"></a><a name="en-us_topic_0237122622_p1649924721712"></a><strong id="b0241832651"><a name="b0241832651"></a><a name="b0241832651"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.61%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122622_p1249984771711"><a name="en-us_topic_0237122622_p1249984771711"></a><a name="en-us_topic_0237122622_p1249984771711"></a><strong id="b22491333452"><a name="b22491333452"></a><a name="b22491333452"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="59.17%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122622_p1050017471170"><a name="en-us_topic_0237122622_p1050017471170"></a><a name="en-us_topic_0237122622_p1050017471170"></a><strong id="b189042333519"><a name="b189042333519"></a><a name="b189042333519"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122622_row850024719173"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p850004721718"><a name="en-us_topic_0237122622_p850004721718"></a><a name="en-us_topic_0237122622_p850004721718"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p1350044712177"><a name="en-us_topic_0237122622_p1350044712177"></a><a name="en-us_topic_0237122622_p1350044712177"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p1150024711179"><a name="en-us_topic_0237122622_p1150024711179"></a><a name="en-us_topic_0237122622_p1150024711179"></a>Workload name</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row1450114474177"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p6501124771714"><a name="en-us_topic_0237122622_p6501124771714"></a><a name="en-us_topic_0237122622_p6501124771714"></a>commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p115011147111710"><a name="en-us_topic_0237122622_p115011147111710"></a><a name="en-us_topic_0237122622_p115011147111710"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p2501047131717"><a name="en-us_topic_0237122622_p2501047131717"></a><a name="en-us_topic_0237122622_p2501047131717"></a>Number of user transactions committed</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row135015470176"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p2501124721711"><a name="en-us_topic_0237122622_p2501124721711"></a><a name="en-us_topic_0237122622_p2501124721711"></a>rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p3501114715173"><a name="en-us_topic_0237122622_p3501114715173"></a><a name="en-us_topic_0237122622_p3501114715173"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p45017479172"><a name="en-us_topic_0237122622_p45017479172"></a><a name="en-us_topic_0237122622_p45017479172"></a>Number of user transactions rolled back</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row3501124701718"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p17501174711174"><a name="en-us_topic_0237122622_p17501174711174"></a><a name="en-us_topic_0237122622_p17501174711174"></a>resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p750244719176"><a name="en-us_topic_0237122622_p750244719176"></a><a name="en-us_topic_0237122622_p750244719176"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p150219471179"><a name="en-us_topic_0237122622_p150219471179"></a><a name="en-us_topic_0237122622_p150219471179"></a>Minimum response time of user transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row8502134731717"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p10502104712176"><a name="en-us_topic_0237122622_p10502104712176"></a><a name="en-us_topic_0237122622_p10502104712176"></a>resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p4502104731716"><a name="en-us_topic_0237122622_p4502104731716"></a><a name="en-us_topic_0237122622_p4502104731716"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p1050215473170"><a name="en-us_topic_0237122622_p1050215473170"></a><a name="en-us_topic_0237122622_p1050215473170"></a>Maximum response time of user transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row6502174771717"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p750264714176"><a name="en-us_topic_0237122622_p750264714176"></a><a name="en-us_topic_0237122622_p750264714176"></a>resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p195028474176"><a name="en-us_topic_0237122622_p195028474176"></a><a name="en-us_topic_0237122622_p195028474176"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p1450284751710"><a name="en-us_topic_0237122622_p1450284751710"></a><a name="en-us_topic_0237122622_p1450284751710"></a>Average response time of user transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row4502194710170"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p165026476176"><a name="en-us_topic_0237122622_p165026476176"></a><a name="en-us_topic_0237122622_p165026476176"></a>resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p9503347131712"><a name="en-us_topic_0237122622_p9503347131712"></a><a name="en-us_topic_0237122622_p9503347131712"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p1503144718176"><a name="en-us_topic_0237122622_p1503144718176"></a><a name="en-us_topic_0237122622_p1503144718176"></a>Total response time of user transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row14503347161710"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p14503144711710"><a name="en-us_topic_0237122622_p14503144711710"></a><a name="en-us_topic_0237122622_p14503144711710"></a>bg_commit_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p1150324713177"><a name="en-us_topic_0237122622_p1150324713177"></a><a name="en-us_topic_0237122622_p1150324713177"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p3503124731718"><a name="en-us_topic_0237122622_p3503124731718"></a><a name="en-us_topic_0237122622_p3503124731718"></a>Number of background transactions committed</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row195031477175"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p10504347161711"><a name="en-us_topic_0237122622_p10504347161711"></a><a name="en-us_topic_0237122622_p10504347161711"></a>bg_rollback_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p450474719179"><a name="en-us_topic_0237122622_p450474719179"></a><a name="en-us_topic_0237122622_p450474719179"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p1150444712172"><a name="en-us_topic_0237122622_p1150444712172"></a><a name="en-us_topic_0237122622_p1150444712172"></a>Number of background transactions rolled back</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row1050444713179"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p950494715171"><a name="en-us_topic_0237122622_p950494715171"></a><a name="en-us_topic_0237122622_p950494715171"></a>bg_resp_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p2050454791716"><a name="en-us_topic_0237122622_p2050454791716"></a><a name="en-us_topic_0237122622_p2050454791716"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p35052475176"><a name="en-us_topic_0237122622_p35052475176"></a><a name="en-us_topic_0237122622_p35052475176"></a>Minimum response time of background transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row65051647131713"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p2505347101715"><a name="en-us_topic_0237122622_p2505347101715"></a><a name="en-us_topic_0237122622_p2505347101715"></a>bg_resp_max</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p18505847181717"><a name="en-us_topic_0237122622_p18505847181717"></a><a name="en-us_topic_0237122622_p18505847181717"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p20505104713173"><a name="en-us_topic_0237122622_p20505104713173"></a><a name="en-us_topic_0237122622_p20505104713173"></a>Maximum response time of background transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row4505847111719"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p75061247101711"><a name="en-us_topic_0237122622_p75061247101711"></a><a name="en-us_topic_0237122622_p75061247101711"></a>bg_resp_avg</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p10506144716177"><a name="en-us_topic_0237122622_p10506144716177"></a><a name="en-us_topic_0237122622_p10506144716177"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p05061147101719"><a name="en-us_topic_0237122622_p05061147101719"></a><a name="en-us_topic_0237122622_p05061147101719"></a>Average response time of background transactions (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122622_row1450664711174"><td class="cellrowborder" valign="top" width="24.22%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122622_p175068475171"><a name="en-us_topic_0237122622_p175068475171"></a><a name="en-us_topic_0237122622_p175068475171"></a>bg_resp_total</p>
</td>
<td class="cellrowborder" valign="top" width="16.61%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122622_p8506134715174"><a name="en-us_topic_0237122622_p8506134715174"></a><a name="en-us_topic_0237122622_p8506134715174"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="59.17%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122622_p1950710472175"><a name="en-us_topic_0237122622_p1950710472175"></a><a name="en-us_topic_0237122622_p1950710472175"></a>Total response time of background transactions (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

