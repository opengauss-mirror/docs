# WORKLOAD\_SQL\_ELAPSE\_TIME<a name="EN-US_TOPIC_0245374728"></a>

**WORKLOAD\_SQL\_ELAPSE\_TIME**  collects statistics about SUIDs in workloads.

**Table  1**  WORKLOAD\_SQL\_ELAPSE\_TIME columns

<a name="en-us_topic_0237122624_table12889928105915"></a>
<table><thead align="left"><tr id="en-us_topic_0237122624_row16113182916591"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122624_p131131229185913"><a name="en-us_topic_0237122624_p131131229185913"></a><a name="en-us_topic_0237122624_p131131229185913"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.16%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122624_p21139292596"><a name="en-us_topic_0237122624_p21139292596"></a><a name="en-us_topic_0237122624_p21139292596"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.84%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122624_p1311362918594"><a name="en-us_topic_0237122624_p1311362918594"></a><a name="en-us_topic_0237122624_p1311362918594"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122624_row51144296593"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p81141029185910"><a name="en-us_topic_0237122624_p81141029185910"></a><a name="en-us_topic_0237122624_p81141029185910"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p1111492916594"><a name="en-us_topic_0237122624_p1111492916594"></a><a name="en-us_topic_0237122624_p1111492916594"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p11142298594"><a name="en-us_topic_0237122624_p11142298594"></a><a name="en-us_topic_0237122624_p11142298594"></a>Workload name</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row5114162985917"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p171148297590"><a name="en-us_topic_0237122624_p171148297590"></a><a name="en-us_topic_0237122624_p171148297590"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p19114102913598"><a name="en-us_topic_0237122624_p19114102913598"></a><a name="en-us_topic_0237122624_p19114102913598"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p10115929195910"><a name="en-us_topic_0237122624_p10115929195910"></a><a name="en-us_topic_0237122624_p10115929195910"></a>Total response time of <strong id="en-us_topic_0237122624_b123813256340"><a name="en-us_topic_0237122624_b123813256340"></a><a name="en-us_topic_0237122624_b123813256340"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row1911510292599"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p17115112935912"><a name="en-us_topic_0237122624_p17115112935912"></a><a name="en-us_topic_0237122624_p17115112935912"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p91151329165917"><a name="en-us_topic_0237122624_p91151329165917"></a><a name="en-us_topic_0237122624_p91151329165917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p11115029105911"><a name="en-us_topic_0237122624_p11115029105911"></a><a name="en-us_topic_0237122624_p11115029105911"></a>Maximum response time of <strong id="en-us_topic_0237122624_b1688316816405"><a name="en-us_topic_0237122624_b1688316816405"></a><a name="en-us_topic_0237122624_b1688316816405"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row14115122975915"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p411562911592"><a name="en-us_topic_0237122624_p411562911592"></a><a name="en-us_topic_0237122624_p411562911592"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p71151129175913"><a name="en-us_topic_0237122624_p71151129175913"></a><a name="en-us_topic_0237122624_p71151129175913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p6115122913590"><a name="en-us_topic_0237122624_p6115122913590"></a><a name="en-us_topic_0237122624_p6115122913590"></a>Minimum response time of <strong id="en-us_topic_0237122624_b958691219403"><a name="en-us_topic_0237122624_b958691219403"></a><a name="en-us_topic_0237122624_b958691219403"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row711519298595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p611582945917"><a name="en-us_topic_0237122624_p611582945917"></a><a name="en-us_topic_0237122624_p611582945917"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p11115102918598"><a name="en-us_topic_0237122624_p11115102918598"></a><a name="en-us_topic_0237122624_p11115102918598"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p121161529155913"><a name="en-us_topic_0237122624_p121161529155913"></a><a name="en-us_topic_0237122624_p121161529155913"></a>Average response time of <strong id="en-us_topic_0237122624_b78781515194016"><a name="en-us_topic_0237122624_b78781515194016"></a><a name="en-us_topic_0237122624_b78781515194016"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row5116102915919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p121165297593"><a name="en-us_topic_0237122624_p121165297593"></a><a name="en-us_topic_0237122624_p121165297593"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p1611662925916"><a name="en-us_topic_0237122624_p1611662925916"></a><a name="en-us_topic_0237122624_p1611662925916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p611610291593"><a name="en-us_topic_0237122624_p611610291593"></a><a name="en-us_topic_0237122624_p611610291593"></a>Total response time of <strong id="en-us_topic_0237122624_b11413946114017"><a name="en-us_topic_0237122624_b11413946114017"></a><a name="en-us_topic_0237122624_b11413946114017"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row1011620297596"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p2116172917593"><a name="en-us_topic_0237122624_p2116172917593"></a><a name="en-us_topic_0237122624_p2116172917593"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p211732995913"><a name="en-us_topic_0237122624_p211732995913"></a><a name="en-us_topic_0237122624_p211732995913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p12117229135913"><a name="en-us_topic_0237122624_p12117229135913"></a><a name="en-us_topic_0237122624_p12117229135913"></a>Maximum response time of <strong id="en-us_topic_0237122624_b2730755204017"><a name="en-us_topic_0237122624_b2730755204017"></a><a name="en-us_topic_0237122624_b2730755204017"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row151171293592"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p211732915919"><a name="en-us_topic_0237122624_p211732915919"></a><a name="en-us_topic_0237122624_p211732915919"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p141171129105919"><a name="en-us_topic_0237122624_p141171129105919"></a><a name="en-us_topic_0237122624_p141171129105919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p141171829165917"><a name="en-us_topic_0237122624_p141171829165917"></a><a name="en-us_topic_0237122624_p141171829165917"></a>Minimum response time of <strong id="en-us_topic_0237122624_b1291659174014"><a name="en-us_topic_0237122624_b1291659174014"></a><a name="en-us_topic_0237122624_b1291659174014"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row8117152912594"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p8117172985915"><a name="en-us_topic_0237122624_p8117172985915"></a><a name="en-us_topic_0237122624_p8117172985915"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p5117132911597"><a name="en-us_topic_0237122624_p5117132911597"></a><a name="en-us_topic_0237122624_p5117132911597"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p1111772911592"><a name="en-us_topic_0237122624_p1111772911592"></a><a name="en-us_topic_0237122624_p1111772911592"></a>Average response time of <strong id="en-us_topic_0237122624_b7284214118"><a name="en-us_topic_0237122624_b7284214118"></a><a name="en-us_topic_0237122624_b7284214118"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row1117192965917"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p211822955910"><a name="en-us_topic_0237122624_p211822955910"></a><a name="en-us_topic_0237122624_p211822955910"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p1111817293595"><a name="en-us_topic_0237122624_p1111817293595"></a><a name="en-us_topic_0237122624_p1111817293595"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p511882995916"><a name="en-us_topic_0237122624_p511882995916"></a><a name="en-us_topic_0237122624_p511882995916"></a>Total response time of <strong id="en-us_topic_0237122624_b370041824117"><a name="en-us_topic_0237122624_b370041824117"></a><a name="en-us_topic_0237122624_b370041824117"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row11118192919599"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p10118142965919"><a name="en-us_topic_0237122624_p10118142965919"></a><a name="en-us_topic_0237122624_p10118142965919"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p15118192955912"><a name="en-us_topic_0237122624_p15118192955912"></a><a name="en-us_topic_0237122624_p15118192955912"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p12118192911591"><a name="en-us_topic_0237122624_p12118192911591"></a><a name="en-us_topic_0237122624_p12118192911591"></a>Maximum response time of <strong id="en-us_topic_0237122624_b19261128104111"><a name="en-us_topic_0237122624_b19261128104111"></a><a name="en-us_topic_0237122624_b19261128104111"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row811852913597"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p1711852914592"><a name="en-us_topic_0237122624_p1711852914592"></a><a name="en-us_topic_0237122624_p1711852914592"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p21181929175913"><a name="en-us_topic_0237122624_p21181929175913"></a><a name="en-us_topic_0237122624_p21181929175913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p131191929205916"><a name="en-us_topic_0237122624_p131191929205916"></a><a name="en-us_topic_0237122624_p131191929205916"></a>Minimum response time of <strong id="en-us_topic_0237122624_b1592213016418"><a name="en-us_topic_0237122624_b1592213016418"></a><a name="en-us_topic_0237122624_b1592213016418"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row111191429165919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p711972975912"><a name="en-us_topic_0237122624_p711972975912"></a><a name="en-us_topic_0237122624_p711972975912"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p151191929115916"><a name="en-us_topic_0237122624_p151191929115916"></a><a name="en-us_topic_0237122624_p151191929115916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p15119122915913"><a name="en-us_topic_0237122624_p15119122915913"></a><a name="en-us_topic_0237122624_p15119122915913"></a>Average response time of <strong id="en-us_topic_0237122624_b132611834114110"><a name="en-us_topic_0237122624_b132611834114110"></a><a name="en-us_topic_0237122624_b132611834114110"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row5119129115914"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p51192029135912"><a name="en-us_topic_0237122624_p51192029135912"></a><a name="en-us_topic_0237122624_p51192029135912"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p15119729125912"><a name="en-us_topic_0237122624_p15119729125912"></a><a name="en-us_topic_0237122624_p15119729125912"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p121191729125914"><a name="en-us_topic_0237122624_p121191729125914"></a><a name="en-us_topic_0237122624_p121191729125914"></a>Total response time of <strong id="en-us_topic_0237122624_b1334205734114"><a name="en-us_topic_0237122624_b1334205734114"></a><a name="en-us_topic_0237122624_b1334205734114"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row311992911599"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p181191229135915"><a name="en-us_topic_0237122624_p181191229135915"></a><a name="en-us_topic_0237122624_p181191229135915"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p161201029165910"><a name="en-us_topic_0237122624_p161201029165910"></a><a name="en-us_topic_0237122624_p161201029165910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p912032917591"><a name="en-us_topic_0237122624_p912032917591"></a><a name="en-us_topic_0237122624_p912032917591"></a>Maximum response time of <strong id="en-us_topic_0237122624_b646611179422"><a name="en-us_topic_0237122624_b646611179422"></a><a name="en-us_topic_0237122624_b646611179422"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row111200294595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p81207297593"><a name="en-us_topic_0237122624_p81207297593"></a><a name="en-us_topic_0237122624_p81207297593"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p12120142945914"><a name="en-us_topic_0237122624_p12120142945914"></a><a name="en-us_topic_0237122624_p12120142945914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p1012042915915"><a name="en-us_topic_0237122624_p1012042915915"></a><a name="en-us_topic_0237122624_p1012042915915"></a>Minimum response time of <strong id="en-us_topic_0237122624_b1569012215423"><a name="en-us_topic_0237122624_b1569012215423"></a><a name="en-us_topic_0237122624_b1569012215423"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122624_row4120529155914"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122624_p612062925912"><a name="en-us_topic_0237122624_p612062925912"></a><a name="en-us_topic_0237122624_p612062925912"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122624_p2120142914591"><a name="en-us_topic_0237122624_p2120142914591"></a><a name="en-us_topic_0237122624_p2120142914591"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122624_p1812082925920"><a name="en-us_topic_0237122624_p1812082925920"></a><a name="en-us_topic_0237122624_p1812082925920"></a>Average response time of <strong id="en-us_topic_0237122624_b14391132904212"><a name="en-us_topic_0237122624_b14391132904212"></a><a name="en-us_topic_0237122624_b14391132904212"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

