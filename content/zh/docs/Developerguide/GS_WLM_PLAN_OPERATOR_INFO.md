# GS\_WLM\_PLAN\_OPERATOR\_INFO<a name="ZH-CN_TOPIC_0289900711"></a>

GS\_WLM\_PLAN\_OPERATOR\_INFO系统表显示执行作业结束后计划算子级的相关的记录。此数据是从内核中转储到系统表中的数据。

**表 1**  GS\_WLM\_PLAN\_OPERATOR\_INFO的字段

<a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_table85181143511"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_row12518114125110"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7518161415512"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7518161415512"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7518161415512"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p651816147513"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p651816147513"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p651816147513"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1351919149511"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1351919149511"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1351919149511"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136905_row6637211133811"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p1863711163818"><a name="zh-cn_topic_0283136905_p1863711163818"></a><a name="zh-cn_topic_0283136905_p1863711163818"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p863751193814"><a name="zh-cn_topic_0283136905_p863751193814"></a><a name="zh-cn_topic_0283136905_p863751193814"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p563816113389"><a name="zh-cn_topic_0283136905_p563816113389"></a><a name="zh-cn_topic_0283136905_p563816113389"></a>收集计划信息所在的database名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_row155196149514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p2519314135114"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p2519314135114"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p2519314135114"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1651921418517"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1651921418517"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1651921418517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p4519141415115"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p4519141415115"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p4519141415115"></a>语句执行使用的内部query_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_row551921411518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p85191414155117"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p85191414155117"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p85191414155117"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1951991455112"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1951991455112"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1951991455112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p3519101415516"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p3519101415516"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p3519101415516"></a>查询对应的执行计划的plan node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_row251961411512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p10519171455119"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p10519171455119"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p10519171455119"></a>startup_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p10519314105112"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p10519314105112"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p10519314105112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p751971405113"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p751971405113"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p751971405113"></a>该算子处理第一条数据的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_row15191214175110"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7519141412514"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7519141412514"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7519141412514"></a>total_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p205191014155120"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p205191014155120"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p205191014155120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1451971495114"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1451971495114"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1451971495114"></a>该算子到结束时候总的执行时间（ms）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row4120813174216"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p19121191334215"><a name="zh-cn_topic_0283136905_p19121191334215"></a><a name="zh-cn_topic_0283136905_p19121191334215"></a>actual_rows</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p191212131422"><a name="zh-cn_topic_0283136905_p191212131422"></a><a name="zh-cn_topic_0283136905_p191212131422"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p9121131344215"><a name="zh-cn_topic_0283136905_p9121131344215"></a><a name="zh-cn_topic_0283136905_p9121131344215"></a>实际执行的行数信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row66019017433"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p14601180174310"><a name="zh-cn_topic_0283136905_p14601180174310"></a><a name="zh-cn_topic_0283136905_p14601180174310"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p136011309436"><a name="zh-cn_topic_0283136905_p136011309436"></a><a name="zh-cn_topic_0283136905_p136011309436"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p260170144313"><a name="zh-cn_topic_0283136905_p260170144313"></a><a name="zh-cn_topic_0283136905_p260170144313"></a>当前算子在数据库节点上的最大内存峰值（MB）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_row15519614165115"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1451911141518"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1451911141518"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p1451911141518"></a>query_dop</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7519514155119"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7519514155119"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p7519514155119"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p8519111485115"><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p8519111485115"></a><a name="zh-cn_topic_0283136905_zh-cn_topic_0111176227_p8519111485115"></a>当前算子执行时的并行度。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row11688205316437"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p116886535438"><a name="zh-cn_topic_0283136905_p116886535438"></a><a name="zh-cn_topic_0283136905_p116886535438"></a>parent_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p2688353204315"><a name="zh-cn_topic_0283136905_p2688353204315"></a><a name="zh-cn_topic_0283136905_p2688353204315"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p1768805364318"><a name="zh-cn_topic_0283136905_p1768805364318"></a><a name="zh-cn_topic_0283136905_p1768805364318"></a>当前算子的父节点node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row168131353164410"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p181335384413"><a name="zh-cn_topic_0283136905_p181335384413"></a><a name="zh-cn_topic_0283136905_p181335384413"></a>left_child_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p16813185374414"><a name="zh-cn_topic_0283136905_p16813185374414"></a><a name="zh-cn_topic_0283136905_p16813185374414"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p1981425312443"><a name="zh-cn_topic_0283136905_p1981425312443"></a><a name="zh-cn_topic_0283136905_p1981425312443"></a>当前算子的左孩子节点node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row14793821194512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p67937218450"><a name="zh-cn_topic_0283136905_p67937218450"></a><a name="zh-cn_topic_0283136905_p67937218450"></a>right_child_id</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p187939211453"><a name="zh-cn_topic_0283136905_p187939211453"></a><a name="zh-cn_topic_0283136905_p187939211453"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p1579313212459"><a name="zh-cn_topic_0283136905_p1579313212459"></a><a name="zh-cn_topic_0283136905_p1579313212459"></a>当前算子的右孩子节点node id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row11384912154618"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p2384191274610"><a name="zh-cn_topic_0283136905_p2384191274610"></a><a name="zh-cn_topic_0283136905_p2384191274610"></a>operation</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p17384612194617"><a name="zh-cn_topic_0283136905_p17384612194617"></a><a name="zh-cn_topic_0283136905_p17384612194617"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p13384161204616"><a name="zh-cn_topic_0283136905_p13384161204616"></a><a name="zh-cn_topic_0283136905_p13384161204616"></a>当前算子进行的操作名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row16649191225112"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p1464971255114"><a name="zh-cn_topic_0283136905_p1464971255114"></a><a name="zh-cn_topic_0283136905_p1464971255114"></a>orientation</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p13650131275114"><a name="zh-cn_topic_0283136905_p13650131275114"></a><a name="zh-cn_topic_0283136905_p13650131275114"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p1650121216516"><a name="zh-cn_topic_0283136905_p1650121216516"></a><a name="zh-cn_topic_0283136905_p1650121216516"></a>当前算子的对齐方式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row277218505519"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p57734502511"><a name="zh-cn_topic_0283136905_p57734502511"></a><a name="zh-cn_topic_0283136905_p57734502511"></a>strategy</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p2077385014516"><a name="zh-cn_topic_0283136905_p2077385014516"></a><a name="zh-cn_topic_0283136905_p2077385014516"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p1077355019513"><a name="zh-cn_topic_0283136905_p1077355019513"></a><a name="zh-cn_topic_0283136905_p1077355019513"></a>当前算子操作的实现方法。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row15324193720523"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p19324133745214"><a name="zh-cn_topic_0283136905_p19324133745214"></a><a name="zh-cn_topic_0283136905_p19324133745214"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p9324153716523"><a name="zh-cn_topic_0283136905_p9324153716523"></a><a name="zh-cn_topic_0283136905_p9324153716523"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p1632413714523"><a name="zh-cn_topic_0283136905_p1632413714523"></a><a name="zh-cn_topic_0283136905_p1632413714523"></a>当前算子操作的选择方式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row814712516543"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p2014811252549"><a name="zh-cn_topic_0283136905_p2014811252549"></a><a name="zh-cn_topic_0283136905_p2014811252549"></a>condition</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p51481925195411"><a name="zh-cn_topic_0283136905_p51481925195411"></a><a name="zh-cn_topic_0283136905_p51481925195411"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p3148925155419"><a name="zh-cn_topic_0283136905_p3148925155419"></a><a name="zh-cn_topic_0283136905_p3148925155419"></a>当前算子操作的过滤条件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136905_row1029117105510"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136905_p82911615551"><a name="zh-cn_topic_0283136905_p82911615551"></a><a name="zh-cn_topic_0283136905_p82911615551"></a>projection</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136905_p129118125513"><a name="zh-cn_topic_0283136905_p129118125513"></a><a name="zh-cn_topic_0283136905_p129118125513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136905_p5291191155512"><a name="zh-cn_topic_0283136905_p5291191155512"></a><a name="zh-cn_topic_0283136905_p5291191155512"></a>当前算子的映射关系。</p>
</td>
</tr>
</tbody>
</table>

