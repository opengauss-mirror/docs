# SUMMARY\_WORKLOAD\_SQL\_ELAPSE\_TIME<a name="ZH-CN_TOPIC_0245374729"></a>

SUMMARY\_WORKLOAD\_SQL\_ELAPSE\_TIME用来统计数据库主节点上workload（业务）负载的SUID信息。

**表 1**  SUMMARY\_WORKLOAD\_SQL\_ELAPSE\_TIM字段

<a name="zh-cn_topic_0237122625_table05816371592"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122625_row4777193715917"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122625_p207775379598"><a name="zh-cn_topic_0237122625_p207775379598"></a><a name="zh-cn_topic_0237122625_p207775379598"></a><strong id="zh-cn_topic_0237122625_b7777193717596"><a name="zh-cn_topic_0237122625_b7777193717596"></a><a name="zh-cn_topic_0237122625_b7777193717596"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.16%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122625_p20777537115914"><a name="zh-cn_topic_0237122625_p20777537115914"></a><a name="zh-cn_topic_0237122625_p20777537115914"></a><strong id="zh-cn_topic_0237122625_b1777133711599"><a name="zh-cn_topic_0237122625_b1777133711599"></a><a name="zh-cn_topic_0237122625_b1777133711599"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.84%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122625_p477703713596"><a name="zh-cn_topic_0237122625_p477703713596"></a><a name="zh-cn_topic_0237122625_p477703713596"></a><strong id="zh-cn_topic_0237122625_b377715375595"><a name="zh-cn_topic_0237122625_b377715375595"></a><a name="zh-cn_topic_0237122625_b377715375595"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122625_row27779373591"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p1477763755918"><a name="zh-cn_topic_0237122625_p1477763755918"></a><a name="zh-cn_topic_0237122625_p1477763755918"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p7777137195910"><a name="zh-cn_topic_0237122625_p7777137195910"></a><a name="zh-cn_topic_0237122625_p7777137195910"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p117781737115913"><a name="zh-cn_topic_0237122625_p117781737115913"></a><a name="zh-cn_topic_0237122625_p117781737115913"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row2077820375590"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p2077820371594"><a name="zh-cn_topic_0237122625_p2077820371594"></a><a name="zh-cn_topic_0237122625_p2077820371594"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p1577818371596"><a name="zh-cn_topic_0237122625_p1577818371596"></a><a name="zh-cn_topic_0237122625_p1577818371596"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p977823775912"><a name="zh-cn_topic_0237122625_p977823775912"></a><a name="zh-cn_topic_0237122625_p977823775912"></a>workload（业务负载）名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row4778637175917"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p3778637105920"><a name="zh-cn_topic_0237122625_p3778637105920"></a><a name="zh-cn_topic_0237122625_p3778637105920"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p19778153714599"><a name="zh-cn_topic_0237122625_p19778153714599"></a><a name="zh-cn_topic_0237122625_p19778153714599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p4778123714595"><a name="zh-cn_topic_0237122625_p4778123714595"></a><a name="zh-cn_topic_0237122625_p4778123714595"></a>总select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row1077818376595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p0778173735910"><a name="zh-cn_topic_0237122625_p0778173735910"></a><a name="zh-cn_topic_0237122625_p0778173735910"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p1377816374599"><a name="zh-cn_topic_0237122625_p1377816374599"></a><a name="zh-cn_topic_0237122625_p1377816374599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p10779183755918"><a name="zh-cn_topic_0237122625_p10779183755918"></a><a name="zh-cn_topic_0237122625_p10779183755918"></a>最大select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row1777913715593"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p3779203717598"><a name="zh-cn_topic_0237122625_p3779203717598"></a><a name="zh-cn_topic_0237122625_p3779203717598"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p177993785919"><a name="zh-cn_topic_0237122625_p177993785919"></a><a name="zh-cn_topic_0237122625_p177993785919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p1677915374591"><a name="zh-cn_topic_0237122625_p1677915374591"></a><a name="zh-cn_topic_0237122625_p1677915374591"></a>最小select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row1577914378591"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p1577903755915"><a name="zh-cn_topic_0237122625_p1577903755915"></a><a name="zh-cn_topic_0237122625_p1577903755915"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p277916374592"><a name="zh-cn_topic_0237122625_p277916374592"></a><a name="zh-cn_topic_0237122625_p277916374592"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p87791737155913"><a name="zh-cn_topic_0237122625_p87791737155913"></a><a name="zh-cn_topic_0237122625_p87791737155913"></a>平均select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row1177953795914"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p1577933713593"><a name="zh-cn_topic_0237122625_p1577933713593"></a><a name="zh-cn_topic_0237122625_p1577933713593"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p77802370594"><a name="zh-cn_topic_0237122625_p77802370594"></a><a name="zh-cn_topic_0237122625_p77802370594"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p57802373595"><a name="zh-cn_topic_0237122625_p57802373595"></a><a name="zh-cn_topic_0237122625_p57802373595"></a>总update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row978073755918"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p197801537135912"><a name="zh-cn_topic_0237122625_p197801537135912"></a><a name="zh-cn_topic_0237122625_p197801537135912"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p97801237185919"><a name="zh-cn_topic_0237122625_p97801237185919"></a><a name="zh-cn_topic_0237122625_p97801237185919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p1878093711596"><a name="zh-cn_topic_0237122625_p1878093711596"></a><a name="zh-cn_topic_0237122625_p1878093711596"></a>最大update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row47801337165913"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p127801837105917"><a name="zh-cn_topic_0237122625_p127801837105917"></a><a name="zh-cn_topic_0237122625_p127801837105917"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p9780183711590"><a name="zh-cn_topic_0237122625_p9780183711590"></a><a name="zh-cn_topic_0237122625_p9780183711590"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p18780183745918"><a name="zh-cn_topic_0237122625_p18780183745918"></a><a name="zh-cn_topic_0237122625_p18780183745918"></a>最小update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row1078023715919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p67805375591"><a name="zh-cn_topic_0237122625_p67805375591"></a><a name="zh-cn_topic_0237122625_p67805375591"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p9781937175910"><a name="zh-cn_topic_0237122625_p9781937175910"></a><a name="zh-cn_topic_0237122625_p9781937175910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p1278113713598"><a name="zh-cn_topic_0237122625_p1278113713598"></a><a name="zh-cn_topic_0237122625_p1278113713598"></a>平均update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row1578133765912"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p27811237125912"><a name="zh-cn_topic_0237122625_p27811237125912"></a><a name="zh-cn_topic_0237122625_p27811237125912"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p12781237205914"><a name="zh-cn_topic_0237122625_p12781237205914"></a><a name="zh-cn_topic_0237122625_p12781237205914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p11781737105919"><a name="zh-cn_topic_0237122625_p11781737105919"></a><a name="zh-cn_topic_0237122625_p11781737105919"></a>总insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row19781737115910"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p17811437195919"><a name="zh-cn_topic_0237122625_p17811437195919"></a><a name="zh-cn_topic_0237122625_p17811437195919"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p14832371142"><a name="zh-cn_topic_0237122625_p14832371142"></a><a name="zh-cn_topic_0237122625_p14832371142"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p107816377592"><a name="zh-cn_topic_0237122625_p107816377592"></a><a name="zh-cn_topic_0237122625_p107816377592"></a>最大insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row15781037145919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p207827370599"><a name="zh-cn_topic_0237122625_p207827370599"></a><a name="zh-cn_topic_0237122625_p207827370599"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p5782133775914"><a name="zh-cn_topic_0237122625_p5782133775914"></a><a name="zh-cn_topic_0237122625_p5782133775914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p5782133716591"><a name="zh-cn_topic_0237122625_p5782133716591"></a><a name="zh-cn_topic_0237122625_p5782133716591"></a>最小insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row16782163755915"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p167821737125918"><a name="zh-cn_topic_0237122625_p167821737125918"></a><a name="zh-cn_topic_0237122625_p167821737125918"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p15782143785910"><a name="zh-cn_topic_0237122625_p15782143785910"></a><a name="zh-cn_topic_0237122625_p15782143785910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p117821637165920"><a name="zh-cn_topic_0237122625_p117821637165920"></a><a name="zh-cn_topic_0237122625_p117821637165920"></a>平均insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row178212371595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p67821137185912"><a name="zh-cn_topic_0237122625_p67821137185912"></a><a name="zh-cn_topic_0237122625_p67821137185912"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p127828370592"><a name="zh-cn_topic_0237122625_p127828370592"></a><a name="zh-cn_topic_0237122625_p127828370592"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p878243795916"><a name="zh-cn_topic_0237122625_p878243795916"></a><a name="zh-cn_topic_0237122625_p878243795916"></a>总delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row18782193715919"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p19783737175915"><a name="zh-cn_topic_0237122625_p19783737175915"></a><a name="zh-cn_topic_0237122625_p19783737175915"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p7783103710599"><a name="zh-cn_topic_0237122625_p7783103710599"></a><a name="zh-cn_topic_0237122625_p7783103710599"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p778316374595"><a name="zh-cn_topic_0237122625_p778316374595"></a><a name="zh-cn_topic_0237122625_p778316374595"></a>最大delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row178393705911"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p6783037115918"><a name="zh-cn_topic_0237122625_p6783037115918"></a><a name="zh-cn_topic_0237122625_p6783037115918"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p1478318377597"><a name="zh-cn_topic_0237122625_p1478318377597"></a><a name="zh-cn_topic_0237122625_p1478318377597"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p167836376591"><a name="zh-cn_topic_0237122625_p167836376591"></a><a name="zh-cn_topic_0237122625_p167836376591"></a>最小delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122625_row778318375595"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122625_p278383745918"><a name="zh-cn_topic_0237122625_p278383745918"></a><a name="zh-cn_topic_0237122625_p278383745918"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122625_p1178314376595"><a name="zh-cn_topic_0237122625_p1178314376595"></a><a name="zh-cn_topic_0237122625_p1178314376595"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122625_p278343712592"><a name="zh-cn_topic_0237122625_p278343712592"></a><a name="zh-cn_topic_0237122625_p278343712592"></a>平均delete的时间花费（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
