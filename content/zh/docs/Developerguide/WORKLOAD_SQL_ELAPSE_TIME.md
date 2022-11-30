# WORKLOAD\_SQL\_ELAPSE\_TIME<a name="ZH-CN_TOPIC_0245374728"></a>

WORKLOAD\_SQL\_ELAPSE\_TIME用来统计workload（业务负载）上的SUID信息。

**表 1**  WORKLOAD\_SQL\_ELAPSE\_TIME字段

<a name="zh-cn_topic_0237122624_table12889928105915"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122624_row16113182916591"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122624_p131131229185913"><a name="zh-cn_topic_0237122624_p131131229185913"></a><a name="zh-cn_topic_0237122624_p131131229185913"></a><strong id="zh-cn_topic_0237122624_b1811319293597"><a name="zh-cn_topic_0237122624_b1811319293597"></a><a name="zh-cn_topic_0237122624_b1811319293597"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.16%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122624_p21139292596"><a name="zh-cn_topic_0237122624_p21139292596"></a><a name="zh-cn_topic_0237122624_p21139292596"></a><strong id="zh-cn_topic_0237122624_b111312916596"><a name="zh-cn_topic_0237122624_b111312916596"></a><a name="zh-cn_topic_0237122624_b111312916596"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.84%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122624_p1311362918594"><a name="zh-cn_topic_0237122624_p1311362918594"></a><a name="zh-cn_topic_0237122624_p1311362918594"></a><strong id="zh-cn_topic_0237122624_b91135296596"><a name="zh-cn_topic_0237122624_b91135296596"></a><a name="zh-cn_topic_0237122624_b91135296596"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122624_row51144296593"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p81141029185910"><a name="zh-cn_topic_0237122624_p81141029185910"></a><a name="zh-cn_topic_0237122624_p81141029185910"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p1111492916594"><a name="zh-cn_topic_0237122624_p1111492916594"></a><a name="zh-cn_topic_0237122624_p1111492916594"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p11142298594"><a name="zh-cn_topic_0237122624_p11142298594"></a><a name="zh-cn_topic_0237122624_p11142298594"></a>workload（业务负载）名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row5114162985917"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p171148297590"><a name="zh-cn_topic_0237122624_p171148297590"></a><a name="zh-cn_topic_0237122624_p171148297590"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p19114102913598"><a name="zh-cn_topic_0237122624_p19114102913598"></a><a name="zh-cn_topic_0237122624_p19114102913598"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p10115929195910"><a name="zh-cn_topic_0237122624_p10115929195910"></a><a name="zh-cn_topic_0237122624_p10115929195910"></a>总select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row1911510292599"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p17115112935912"><a name="zh-cn_topic_0237122624_p17115112935912"></a><a name="zh-cn_topic_0237122624_p17115112935912"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p91151329165917"><a name="zh-cn_topic_0237122624_p91151329165917"></a><a name="zh-cn_topic_0237122624_p91151329165917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p11115029105911"><a name="zh-cn_topic_0237122624_p11115029105911"></a><a name="zh-cn_topic_0237122624_p11115029105911"></a>最大select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row14115122975915"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p411562911592"><a name="zh-cn_topic_0237122624_p411562911592"></a><a name="zh-cn_topic_0237122624_p411562911592"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p71151129175913"><a name="zh-cn_topic_0237122624_p71151129175913"></a><a name="zh-cn_topic_0237122624_p71151129175913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p6115122913590"><a name="zh-cn_topic_0237122624_p6115122913590"></a><a name="zh-cn_topic_0237122624_p6115122913590"></a>最小select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row711519298595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p611582945917"><a name="zh-cn_topic_0237122624_p611582945917"></a><a name="zh-cn_topic_0237122624_p611582945917"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p11115102918598"><a name="zh-cn_topic_0237122624_p11115102918598"></a><a name="zh-cn_topic_0237122624_p11115102918598"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p121161529155913"><a name="zh-cn_topic_0237122624_p121161529155913"></a><a name="zh-cn_topic_0237122624_p121161529155913"></a>平均select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row5116102915919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p121165297593"><a name="zh-cn_topic_0237122624_p121165297593"></a><a name="zh-cn_topic_0237122624_p121165297593"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p1611662925916"><a name="zh-cn_topic_0237122624_p1611662925916"></a><a name="zh-cn_topic_0237122624_p1611662925916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p611610291593"><a name="zh-cn_topic_0237122624_p611610291593"></a><a name="zh-cn_topic_0237122624_p611610291593"></a>总update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row1011620297596"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p2116172917593"><a name="zh-cn_topic_0237122624_p2116172917593"></a><a name="zh-cn_topic_0237122624_p2116172917593"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p211732995913"><a name="zh-cn_topic_0237122624_p211732995913"></a><a name="zh-cn_topic_0237122624_p211732995913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p12117229135913"><a name="zh-cn_topic_0237122624_p12117229135913"></a><a name="zh-cn_topic_0237122624_p12117229135913"></a>最大update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row151171293592"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p211732915919"><a name="zh-cn_topic_0237122624_p211732915919"></a><a name="zh-cn_topic_0237122624_p211732915919"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p141171129105919"><a name="zh-cn_topic_0237122624_p141171129105919"></a><a name="zh-cn_topic_0237122624_p141171129105919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p141171829165917"><a name="zh-cn_topic_0237122624_p141171829165917"></a><a name="zh-cn_topic_0237122624_p141171829165917"></a>最小update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row8117152912594"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p8117172985915"><a name="zh-cn_topic_0237122624_p8117172985915"></a><a name="zh-cn_topic_0237122624_p8117172985915"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p5117132911597"><a name="zh-cn_topic_0237122624_p5117132911597"></a><a name="zh-cn_topic_0237122624_p5117132911597"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p1111772911592"><a name="zh-cn_topic_0237122624_p1111772911592"></a><a name="zh-cn_topic_0237122624_p1111772911592"></a>平均update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row1117192965917"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p211822955910"><a name="zh-cn_topic_0237122624_p211822955910"></a><a name="zh-cn_topic_0237122624_p211822955910"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p1111817293595"><a name="zh-cn_topic_0237122624_p1111817293595"></a><a name="zh-cn_topic_0237122624_p1111817293595"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p511882995916"><a name="zh-cn_topic_0237122624_p511882995916"></a><a name="zh-cn_topic_0237122624_p511882995916"></a>总insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row11118192919599"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p10118142965919"><a name="zh-cn_topic_0237122624_p10118142965919"></a><a name="zh-cn_topic_0237122624_p10118142965919"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p15118192955912"><a name="zh-cn_topic_0237122624_p15118192955912"></a><a name="zh-cn_topic_0237122624_p15118192955912"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p12118192911591"><a name="zh-cn_topic_0237122624_p12118192911591"></a><a name="zh-cn_topic_0237122624_p12118192911591"></a>最大insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row811852913597"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p1711852914592"><a name="zh-cn_topic_0237122624_p1711852914592"></a><a name="zh-cn_topic_0237122624_p1711852914592"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p21181929175913"><a name="zh-cn_topic_0237122624_p21181929175913"></a><a name="zh-cn_topic_0237122624_p21181929175913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p131191929205916"><a name="zh-cn_topic_0237122624_p131191929205916"></a><a name="zh-cn_topic_0237122624_p131191929205916"></a>最小insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row111191429165919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p711972975912"><a name="zh-cn_topic_0237122624_p711972975912"></a><a name="zh-cn_topic_0237122624_p711972975912"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p151191929115916"><a name="zh-cn_topic_0237122624_p151191929115916"></a><a name="zh-cn_topic_0237122624_p151191929115916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p15119122915913"><a name="zh-cn_topic_0237122624_p15119122915913"></a><a name="zh-cn_topic_0237122624_p15119122915913"></a>平均insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row5119129115914"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p51192029135912"><a name="zh-cn_topic_0237122624_p51192029135912"></a><a name="zh-cn_topic_0237122624_p51192029135912"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p15119729125912"><a name="zh-cn_topic_0237122624_p15119729125912"></a><a name="zh-cn_topic_0237122624_p15119729125912"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p121191729125914"><a name="zh-cn_topic_0237122624_p121191729125914"></a><a name="zh-cn_topic_0237122624_p121191729125914"></a>总delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row311992911599"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p181191229135915"><a name="zh-cn_topic_0237122624_p181191229135915"></a><a name="zh-cn_topic_0237122624_p181191229135915"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p161201029165910"><a name="zh-cn_topic_0237122624_p161201029165910"></a><a name="zh-cn_topic_0237122624_p161201029165910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p912032917591"><a name="zh-cn_topic_0237122624_p912032917591"></a><a name="zh-cn_topic_0237122624_p912032917591"></a>最大delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row111200294595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p81207297593"><a name="zh-cn_topic_0237122624_p81207297593"></a><a name="zh-cn_topic_0237122624_p81207297593"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p12120142945914"><a name="zh-cn_topic_0237122624_p12120142945914"></a><a name="zh-cn_topic_0237122624_p12120142945914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p1012042915915"><a name="zh-cn_topic_0237122624_p1012042915915"></a><a name="zh-cn_topic_0237122624_p1012042915915"></a>最小delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122624_row4120529155914"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122624_p612062925912"><a name="zh-cn_topic_0237122624_p612062925912"></a><a name="zh-cn_topic_0237122624_p612062925912"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122624_p2120142914591"><a name="zh-cn_topic_0237122624_p2120142914591"></a><a name="zh-cn_topic_0237122624_p2120142914591"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122624_p1812082925920"><a name="zh-cn_topic_0237122624_p1812082925920"></a><a name="zh-cn_topic_0237122624_p1812082925920"></a>平均delete的时间花费（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
