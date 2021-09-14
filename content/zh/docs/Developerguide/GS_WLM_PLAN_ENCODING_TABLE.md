# GS\_WLM\_PLAN\_ENCODING\_TABLE<a name="ZH-CN_TOPIC_0289899943"></a>

GS\_WLM\_PLAN\_ENCODING\_TABLE系统表显示计划算子级的编码信息，为机器学习模型的提供包括startup time, total time, peak memory, rows等标签值的训练、预测集。

**表 1**  GS\_WLM\_PLAN\_ENCODING\_TABLE的字段

<a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_table85181143511"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row12518114125110"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p7518161415512"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p7518161415512"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p7518161415512"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p651816147513"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p651816147513"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p651816147513"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1351919149511"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1351919149511"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1351919149511"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row155196149514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p2519314135114"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p2519314135114"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p2519314135114"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1651921418517"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1651921418517"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1651921418517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p4519141415115"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p4519141415115"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p4519141415115"></a>语句执行使用的内部query_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row551921411518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p85191414155117"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p85191414155117"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p85191414155117"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1951991455112"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1951991455112"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p1951991455112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p3519101415516"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p3519101415516"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p3519101415516"></a>查询对应的执行计划的plan node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_row172665311524"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_p326718311523"><a name="zh-cn_topic_0283136898_p326718311523"></a><a name="zh-cn_topic_0283136898_p326718311523"></a>parent_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_p11268173195216"><a name="zh-cn_topic_0283136898_p11268173195216"></a><a name="zh-cn_topic_0283136898_p11268173195216"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_p62685325216"><a name="zh-cn_topic_0283136898_p62685325216"></a><a name="zh-cn_topic_0283136898_p62685325216"></a>当前算子的父节点node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row251961411512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p10519171455119"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p10519171455119"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p10519171455119"></a>startup_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p10519314105112"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p10519314105112"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p10519314105112"></a>bignit</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p751971405113"><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p751971405113"></a><a name="zh-cn_topic_0283136898_zh-cn_topic_0111176227_p751971405113"></a>该算子处理第一条数据的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row15191214175110"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_p14772122852711"><a name="zh-cn_topic_0283136898_p14772122852711"></a><a name="zh-cn_topic_0283136898_p14772122852711"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_p1777362810279"><a name="zh-cn_topic_0283136898_p1777362810279"></a><a name="zh-cn_topic_0283136898_p1777362810279"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_p19773152842718"><a name="zh-cn_topic_0283136898_p19773152842718"></a><a name="zh-cn_topic_0283136898_p19773152842718"></a>该算子到结束时候总的执行时间（ms）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row15519614165115"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_p19121191334215"><a name="zh-cn_topic_0283136898_p19121191334215"></a><a name="zh-cn_topic_0283136898_p19121191334215"></a>rows</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_p191212131422"><a name="zh-cn_topic_0283136898_p191212131422"></a><a name="zh-cn_topic_0283136898_p191212131422"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_p9121131344215"><a name="zh-cn_topic_0283136898_p9121131344215"></a><a name="zh-cn_topic_0283136898_p9121131344215"></a>当前算子执行的行数信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_zh-cn_topic_0111176227_row13519514115111"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_p14601180174310"><a name="zh-cn_topic_0283136898_p14601180174310"></a><a name="zh-cn_topic_0283136898_p14601180174310"></a>peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_p136011309436"><a name="zh-cn_topic_0283136898_p136011309436"></a><a name="zh-cn_topic_0283136898_p136011309436"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_p260170144313"><a name="zh-cn_topic_0283136898_p260170144313"></a><a name="zh-cn_topic_0283136898_p260170144313"></a>当前算子在数据库节点上的最大内存峰值（MB）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136898_row79205911292"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136898_p1292011918298"><a name="zh-cn_topic_0283136898_p1292011918298"></a><a name="zh-cn_topic_0283136898_p1292011918298"></a>encode</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136898_p9920159122915"><a name="zh-cn_topic_0283136898_p9920159122915"></a><a name="zh-cn_topic_0283136898_p9920159122915"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136898_p139201894298"><a name="zh-cn_topic_0283136898_p139201894298"></a><a name="zh-cn_topic_0283136898_p139201894298"></a>当前计划算子的编码信息。</p>
</td>
</tr>
</tbody>
</table>

