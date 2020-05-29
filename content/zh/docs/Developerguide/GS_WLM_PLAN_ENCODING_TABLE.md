# GS\_WLM\_PLAN\_ENCODING\_TABLE<a name="ZH-CN_TOPIC_0243595910"></a>

GS\_WLM\_PLAN\_ENCODING\_TABLE系统表显示计划算子级的编码信息，为机器学习模型的提供包括startup time, total time, peak memory, rows等标签值的训练、预测集。

**表 1** GS\_WLM\_PLAN\_ENCODING\_TABLE的字段

<a name="zh-cn_topic_0111176227_table85181143511"></a>
<table><thead align="left"><tr id="zh-cn_topic_0111176227_row12518114125110"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0111176227_p7518161415512"><a name="zh-cn_topic_0111176227_p7518161415512"></a><a name="zh-cn_topic_0111176227_p7518161415512"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0111176227_p651816147513"><a name="zh-cn_topic_0111176227_p651816147513"></a><a name="zh-cn_topic_0111176227_p651816147513"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0111176227_p1351919149511"><a name="zh-cn_topic_0111176227_p1351919149511"></a><a name="zh-cn_topic_0111176227_p1351919149511"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0111176227_row155196149514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p2519314135114"><a name="zh-cn_topic_0111176227_p2519314135114"></a><a name="zh-cn_topic_0111176227_p2519314135114"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0111176227_p1651921418517"><a name="zh-cn_topic_0111176227_p1651921418517"></a><a name="zh-cn_topic_0111176227_p1651921418517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0111176227_p4519141415115"><a name="zh-cn_topic_0111176227_p4519141415115"></a><a name="zh-cn_topic_0111176227_p4519141415115"></a>语句执行使用的内部query_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row551921411518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p85191414155117"><a name="zh-cn_topic_0111176227_p85191414155117"></a><a name="zh-cn_topic_0111176227_p85191414155117"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0111176227_p1951991455112"><a name="zh-cn_topic_0111176227_p1951991455112"></a><a name="zh-cn_topic_0111176227_p1951991455112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0111176227_p3519101415516"><a name="zh-cn_topic_0111176227_p3519101415516"></a><a name="zh-cn_topic_0111176227_p3519101415516"></a>查询对应的执行计划的plan node id。</p>
</td>
</tr>
<tr id="row113613816272"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p151129992712"><a name="p151129992712"></a><a name="p151129992712"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p811216952712"><a name="p811216952712"></a><a name="p811216952712"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p111126952716"><a name="p111126952716"></a><a name="p111126952716"></a>查询对应的执行计划的plan node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row251961411512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p10519171455119"><a name="zh-cn_topic_0111176227_p10519171455119"></a><a name="zh-cn_topic_0111176227_p10519171455119"></a>start<span id="ph9179249122913"><a name="ph9179249122913"></a><a name="ph9179249122913"></a>up</span>_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0111176227_p10519314105112"><a name="zh-cn_topic_0111176227_p10519314105112"></a><a name="zh-cn_topic_0111176227_p10519314105112"></a><span id="ph38091314300"><a name="ph38091314300"></a><a name="ph38091314300"></a>bignit</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0111176227_p751971405113"><a name="zh-cn_topic_0111176227_p751971405113"></a><a name="zh-cn_topic_0111176227_p751971405113"></a>该算子处理第一条数据的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row15191214175110"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p14772122852711"><a name="p14772122852711"></a><a name="p14772122852711"></a><span id="ph15293731154112"><a name="ph15293731154112"></a><a name="ph15293731154112"></a>total_time</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p1777362810279"><a name="p1777362810279"></a><a name="p1777362810279"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p19773152842718"><a name="p19773152842718"></a><a name="p19773152842718"></a>该算子到结束时候总的执行时间(ms)。</p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row15519614165115"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p19121191334215"><a name="p19121191334215"></a><a name="p19121191334215"></a><span id="ph541861704213"><a name="ph541861704213"></a><a name="ph541861704213"></a>rows</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p191212131422"><a name="p191212131422"></a><a name="p191212131422"></a><span id="ph18552202218421"><a name="ph18552202218421"></a><a name="ph18552202218421"></a>bigint</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p9121131344215"><a name="p9121131344215"></a><a name="p9121131344215"></a><span id="ph15681328144215"><a name="ph15681328144215"></a><a name="ph15681328144215"></a>当前算子执行的行数信息。</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row13519514115111"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p14601180174310"><a name="p14601180174310"></a><a name="p14601180174310"></a><span id="ph131081021439"><a name="ph131081021439"></a><a name="ph131081021439"></a>peak_memory</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p136011309436"><a name="p136011309436"></a><a name="p136011309436"></a><span id="ph2014172433"><a name="ph2014172433"></a><a name="ph2014172433"></a>integer</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p260170144313"><a name="p260170144313"></a><a name="p260170144313"></a><span id="ph188071712164312"><a name="ph188071712164312"></a><a name="ph188071712164312"></a>当前算子在</span><span id="ph178071612114314"><a name="ph178071612114314"></a><a name="ph178071612114314"></a>数据库节点</span><span id="ph14808712184316"><a name="ph14808712184316"></a><a name="ph14808712184316"></a>上的最大内存峰值(MB)。</span></p>
</td>
</tr>
<tr id="row79205911292"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p1292011918298"><a name="p1292011918298"></a><a name="p1292011918298"></a><span id="ph22482134292"><a name="ph22482134292"></a><a name="ph22482134292"></a>encode</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p9920159122915"><a name="p9920159122915"></a><a name="p9920159122915"></a><span id="ph771011613292"><a name="ph771011613292"></a><a name="ph771011613292"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p139201894298"><a name="p139201894298"></a><a name="p139201894298"></a><span id="ph223872312920"><a name="ph223872312920"></a><a name="ph223872312920"></a>当前计划算子的编码信息。</span></p>
</td>
</tr>
</tbody>
</table>

