# SUMMARY\_WORKLOAD\_SQL\_ELAPSE\_TIME<a name="EN-US_TOPIC_0245374729"></a>

**SUMMARY\_WORKLOAD\_SQL\_ELAPSE\_TIME**  collects statistics about SUIDs in workloads on the primary database node. 

**Table  1**  SUMMARY\_WORKLOAD\_SQL\_ELAPSE\_TIM columns

<a name="en-us_topic_0237122625_table05816371592"></a>
<table><thead align="left"><tr id="en-us_topic_0237122625_row4777193715917"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122625_p207775379598"><a name="en-us_topic_0237122625_p207775379598"></a><a name="en-us_topic_0237122625_p207775379598"></a><strong id="b36921044476"><a name="b36921044476"></a><a name="b36921044476"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.16%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122625_p20777537115914"><a name="en-us_topic_0237122625_p20777537115914"></a><a name="en-us_topic_0237122625_p20777537115914"></a><strong id="b121101454987"><a name="b121101454987"></a><a name="b121101454987"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.84%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122625_p477703713596"><a name="en-us_topic_0237122625_p477703713596"></a><a name="en-us_topic_0237122625_p477703713596"></a><strong id="b202211755883"><a name="b202211755883"></a><a name="b202211755883"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122625_row27779373591"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p1477763755918"><a name="en-us_topic_0237122625_p1477763755918"></a><a name="en-us_topic_0237122625_p1477763755918"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p7777137195910"><a name="en-us_topic_0237122625_p7777137195910"></a><a name="en-us_topic_0237122625_p7777137195910"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p117781737115913"><a name="en-us_topic_0237122625_p117781737115913"></a><a name="en-us_topic_0237122625_p117781737115913"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row2077820375590"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p2077820371594"><a name="en-us_topic_0237122625_p2077820371594"></a><a name="en-us_topic_0237122625_p2077820371594"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p1577818371596"><a name="en-us_topic_0237122625_p1577818371596"></a><a name="en-us_topic_0237122625_p1577818371596"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p977823775912"><a name="en-us_topic_0237122625_p977823775912"></a><a name="en-us_topic_0237122625_p977823775912"></a>Workload name</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row4778637175917"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p3778637105920"><a name="en-us_topic_0237122625_p3778637105920"></a><a name="en-us_topic_0237122625_p3778637105920"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p19778153714599"><a name="en-us_topic_0237122625_p19778153714599"></a><a name="en-us_topic_0237122625_p19778153714599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p4778123714595"><a name="en-us_topic_0237122625_p4778123714595"></a><a name="en-us_topic_0237122625_p4778123714595"></a>Total response time of <strong id="b1435819586814"><a name="b1435819586814"></a><a name="b1435819586814"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row1077818376595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p0778173735910"><a name="en-us_topic_0237122625_p0778173735910"></a><a name="en-us_topic_0237122625_p0778173735910"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p1377816374599"><a name="en-us_topic_0237122625_p1377816374599"></a><a name="en-us_topic_0237122625_p1377816374599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p10779183755918"><a name="en-us_topic_0237122625_p10779183755918"></a><a name="en-us_topic_0237122625_p10779183755918"></a>Maximum response time of <strong id="b979114121912"><a name="b979114121912"></a><a name="b979114121912"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row1777913715593"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p3779203717598"><a name="en-us_topic_0237122625_p3779203717598"></a><a name="en-us_topic_0237122625_p3779203717598"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p177993785919"><a name="en-us_topic_0237122625_p177993785919"></a><a name="en-us_topic_0237122625_p177993785919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p1677915374591"><a name="en-us_topic_0237122625_p1677915374591"></a><a name="en-us_topic_0237122625_p1677915374591"></a>Minimum response time of <strong id="b64948147916"><a name="b64948147916"></a><a name="b64948147916"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row1577914378591"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p1577903755915"><a name="en-us_topic_0237122625_p1577903755915"></a><a name="en-us_topic_0237122625_p1577903755915"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p277916374592"><a name="en-us_topic_0237122625_p277916374592"></a><a name="en-us_topic_0237122625_p277916374592"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p87791737155913"><a name="en-us_topic_0237122625_p87791737155913"></a><a name="en-us_topic_0237122625_p87791737155913"></a>Average response time of <strong id="b211013161299"><a name="b211013161299"></a><a name="b211013161299"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row1177953795914"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p1577933713593"><a name="en-us_topic_0237122625_p1577933713593"></a><a name="en-us_topic_0237122625_p1577933713593"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p77802370594"><a name="en-us_topic_0237122625_p77802370594"></a><a name="en-us_topic_0237122625_p77802370594"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p57802373595"><a name="en-us_topic_0237122625_p57802373595"></a><a name="en-us_topic_0237122625_p57802373595"></a>Total response time of <strong id="b10967217492"><a name="b10967217492"></a><a name="b10967217492"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row978073755918"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p197801537135912"><a name="en-us_topic_0237122625_p197801537135912"></a><a name="en-us_topic_0237122625_p197801537135912"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p97801237185919"><a name="en-us_topic_0237122625_p97801237185919"></a><a name="en-us_topic_0237122625_p97801237185919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p1878093711596"><a name="en-us_topic_0237122625_p1878093711596"></a><a name="en-us_topic_0237122625_p1878093711596"></a>Maximum response time of <strong id="b2081012018913"><a name="b2081012018913"></a><a name="b2081012018913"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row47801337165913"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p127801837105917"><a name="en-us_topic_0237122625_p127801837105917"></a><a name="en-us_topic_0237122625_p127801837105917"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p9780183711590"><a name="en-us_topic_0237122625_p9780183711590"></a><a name="en-us_topic_0237122625_p9780183711590"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p18780183745918"><a name="en-us_topic_0237122625_p18780183745918"></a><a name="en-us_topic_0237122625_p18780183745918"></a>Minimum response time of <strong id="b12289142310916"><a name="b12289142310916"></a><a name="b12289142310916"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row1078023715919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p67805375591"><a name="en-us_topic_0237122625_p67805375591"></a><a name="en-us_topic_0237122625_p67805375591"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p9781937175910"><a name="en-us_topic_0237122625_p9781937175910"></a><a name="en-us_topic_0237122625_p9781937175910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p1278113713598"><a name="en-us_topic_0237122625_p1278113713598"></a><a name="en-us_topic_0237122625_p1278113713598"></a>Average response time of <strong id="b6227251996"><a name="b6227251996"></a><a name="b6227251996"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row1578133765912"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p27811237125912"><a name="en-us_topic_0237122625_p27811237125912"></a><a name="en-us_topic_0237122625_p27811237125912"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p12781237205914"><a name="en-us_topic_0237122625_p12781237205914"></a><a name="en-us_topic_0237122625_p12781237205914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p11781737105919"><a name="en-us_topic_0237122625_p11781737105919"></a><a name="en-us_topic_0237122625_p11781737105919"></a>Total response time of <strong id="b1629622711910"><a name="b1629622711910"></a><a name="b1629622711910"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row19781737115910"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p17811437195919"><a name="en-us_topic_0237122625_p17811437195919"></a><a name="en-us_topic_0237122625_p17811437195919"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p14832371142"><a name="en-us_topic_0237122625_p14832371142"></a><a name="en-us_topic_0237122625_p14832371142"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p107816377592"><a name="en-us_topic_0237122625_p107816377592"></a><a name="en-us_topic_0237122625_p107816377592"></a>Maximum response time of <strong id="b441982919919"><a name="b441982919919"></a><a name="b441982919919"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row15781037145919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p207827370599"><a name="en-us_topic_0237122625_p207827370599"></a><a name="en-us_topic_0237122625_p207827370599"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p5782133775914"><a name="en-us_topic_0237122625_p5782133775914"></a><a name="en-us_topic_0237122625_p5782133775914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p5782133716591"><a name="en-us_topic_0237122625_p5782133716591"></a><a name="en-us_topic_0237122625_p5782133716591"></a>Minimum response time of <strong id="b172041731296"><a name="b172041731296"></a><a name="b172041731296"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row16782163755915"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p167821737125918"><a name="en-us_topic_0237122625_p167821737125918"></a><a name="en-us_topic_0237122625_p167821737125918"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p15782143785910"><a name="en-us_topic_0237122625_p15782143785910"></a><a name="en-us_topic_0237122625_p15782143785910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p117821637165920"><a name="en-us_topic_0237122625_p117821637165920"></a><a name="en-us_topic_0237122625_p117821637165920"></a>Average response time of <strong id="b176563337914"><a name="b176563337914"></a><a name="b176563337914"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row178212371595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p67821137185912"><a name="en-us_topic_0237122625_p67821137185912"></a><a name="en-us_topic_0237122625_p67821137185912"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p127828370592"><a name="en-us_topic_0237122625_p127828370592"></a><a name="en-us_topic_0237122625_p127828370592"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p878243795916"><a name="en-us_topic_0237122625_p878243795916"></a><a name="en-us_topic_0237122625_p878243795916"></a>Total response time of <strong id="b2378193610913"><a name="b2378193610913"></a><a name="b2378193610913"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row18782193715919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p19783737175915"><a name="en-us_topic_0237122625_p19783737175915"></a><a name="en-us_topic_0237122625_p19783737175915"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p7783103710599"><a name="en-us_topic_0237122625_p7783103710599"></a><a name="en-us_topic_0237122625_p7783103710599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p778316374595"><a name="en-us_topic_0237122625_p778316374595"></a><a name="en-us_topic_0237122625_p778316374595"></a>Maximum response time of <strong id="b5700838292"><a name="b5700838292"></a><a name="b5700838292"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row178393705911"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p6783037115918"><a name="en-us_topic_0237122625_p6783037115918"></a><a name="en-us_topic_0237122625_p6783037115918"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p1478318377597"><a name="en-us_topic_0237122625_p1478318377597"></a><a name="en-us_topic_0237122625_p1478318377597"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p167836376591"><a name="en-us_topic_0237122625_p167836376591"></a><a name="en-us_topic_0237122625_p167836376591"></a>Minimum response time of <strong id="b04121741190"><a name="b04121741190"></a><a name="b04121741190"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122625_row778318375595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122625_p278383745918"><a name="en-us_topic_0237122625_p278383745918"></a><a name="en-us_topic_0237122625_p278383745918"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122625_p1178314376595"><a name="en-us_topic_0237122625_p1178314376595"></a><a name="en-us_topic_0237122625_p1178314376595"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122625_p278343712592"><a name="en-us_topic_0237122625_p278343712592"></a><a name="en-us_topic_0237122625_p278343712592"></a>Average response time of <strong id="b189471443797"><a name="b189471443797"></a><a name="b189471443797"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

