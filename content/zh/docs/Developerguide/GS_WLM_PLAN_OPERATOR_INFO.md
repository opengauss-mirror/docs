# GS\_WLM\_PLAN\_OPERATOR\_INFO<a name="ZH-CN_TOPIC_0243595911"></a>

GS\_WLM\_PLAN\_OPERATOR\_INFO系统表显示执行作业结束后计划算子级的相关的记录。此数据是从内核中转储到系统表中的数据。当设置GUC参数[enable\_resource\_record](负载管理.md#zh-cn_topic_0237124729_zh-cn_topic_0059777791_s77bd1023b63c4cd489760aa33f08d1ea)为on时，系统会定时（周期为3分钟）将[GS\_WLM\_PLAN\_OPERATOR\_HISTORY](GS_WLM_PLAN_OPERATOR_HISTORY.md)中的记录导入此系统表，开启此功能会占用系统存储空间并对性能有一定影响，不建议用户使用。

**表 1**  GS\_WLM\_PLAN\_OPERATOR\_INFO的字段

<a name="zh-cn_topic_0111176227_table85181143511"></a>
<table><thead align="left"><tr id="zh-cn_topic_0111176227_row12518114125110"><th class="cellrowborder" valign="top" width="22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0111176227_p7518161415512"><a name="zh-cn_topic_0111176227_p7518161415512"></a><a name="zh-cn_topic_0111176227_p7518161415512"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0111176227_p651816147513"><a name="zh-cn_topic_0111176227_p651816147513"></a><a name="zh-cn_topic_0111176227_p651816147513"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0111176227_p1351919149511"><a name="zh-cn_topic_0111176227_p1351919149511"></a><a name="zh-cn_topic_0111176227_p1351919149511"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row6637211133811"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p1863711163818"><a name="p1863711163818"></a><a name="p1863711163818"></a><span id="ph16772192973817"><a name="ph16772192973817"></a><a name="ph16772192973817"></a>datname</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p863751193814"><a name="p863751193814"></a><a name="p863751193814"></a><span id="ph39103923810"><a name="ph39103923810"></a><a name="ph39103923810"></a>name</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p563816113389"><a name="p563816113389"></a><a name="p563816113389"></a><span id="ph19693443383"><a name="ph19693443383"></a><a name="ph19693443383"></a>收集计划信息所在的database名</span><span id="ph02991520143911"><a name="ph02991520143911"></a><a name="ph02991520143911"></a>。</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row155196149514"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p2519314135114"><a name="zh-cn_topic_0111176227_p2519314135114"></a><a name="zh-cn_topic_0111176227_p2519314135114"></a>queryid</p>
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
<tr id="zh-cn_topic_0111176227_row251961411512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p10519171455119"><a name="zh-cn_topic_0111176227_p10519171455119"></a><a name="zh-cn_topic_0111176227_p10519171455119"></a>start<span id="ph1051515363913"><a name="ph1051515363913"></a><a name="ph1051515363913"></a>up</span>_time</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0111176227_p10519314105112"><a name="zh-cn_topic_0111176227_p10519314105112"></a><a name="zh-cn_topic_0111176227_p10519314105112"></a><span id="ph4692738402"><a name="ph4692738402"></a><a name="ph4692738402"></a>bigint</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0111176227_p751971405113"><a name="zh-cn_topic_0111176227_p751971405113"></a><a name="zh-cn_topic_0111176227_p751971405113"></a>该算子处理第一条数据的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row15191214175110"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p7519141412514"><a name="zh-cn_topic_0111176227_p7519141412514"></a><a name="zh-cn_topic_0111176227_p7519141412514"></a><span id="ph15293731154112"><a name="ph15293731154112"></a><a name="ph15293731154112"></a>total_time</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0111176227_p205191014155120"><a name="zh-cn_topic_0111176227_p205191014155120"></a><a name="zh-cn_topic_0111176227_p205191014155120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0111176227_p1451971495114"><a name="zh-cn_topic_0111176227_p1451971495114"></a><a name="zh-cn_topic_0111176227_p1451971495114"></a>该算子到结束时候总的执行时间(ms)。</p>
</td>
</tr>
<tr id="row4120813174216"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p19121191334215"><a name="p19121191334215"></a><a name="p19121191334215"></a><span id="ph541861704213"><a name="ph541861704213"></a><a name="ph541861704213"></a>actual_rows</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p191212131422"><a name="p191212131422"></a><a name="p191212131422"></a><span id="ph18552202218421"><a name="ph18552202218421"></a><a name="ph18552202218421"></a>bigint</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p9121131344215"><a name="p9121131344215"></a><a name="p9121131344215"></a><span id="ph15681328144215"><a name="ph15681328144215"></a><a name="ph15681328144215"></a>实际执行的行数信息。</span></p>
</td>
</tr>
<tr id="row66019017433"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p14601180174310"><a name="p14601180174310"></a><a name="p14601180174310"></a><span id="ph131081021439"><a name="ph131081021439"></a><a name="ph131081021439"></a>max_peak_memory</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p136011309436"><a name="p136011309436"></a><a name="p136011309436"></a><span id="ph2014172433"><a name="ph2014172433"></a><a name="ph2014172433"></a>integer</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p260170144313"><a name="p260170144313"></a><a name="p260170144313"></a><span id="ph188071712164312"><a name="ph188071712164312"></a><a name="ph188071712164312"></a>当前算子在</span><span id="ph178071612114314"><a name="ph178071612114314"></a><a name="ph178071612114314"></a>数据库节点</span><span id="ph14808712184316"><a name="ph14808712184316"></a><a name="ph14808712184316"></a>上的最大内存峰值(MB)。</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0111176227_row15519614165115"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0111176227_p1451911141518"><a name="zh-cn_topic_0111176227_p1451911141518"></a><a name="zh-cn_topic_0111176227_p1451911141518"></a>query_dop</p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0111176227_p7519514155119"><a name="zh-cn_topic_0111176227_p7519514155119"></a><a name="zh-cn_topic_0111176227_p7519514155119"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0111176227_p8519111485115"><a name="zh-cn_topic_0111176227_p8519111485115"></a><a name="zh-cn_topic_0111176227_p8519111485115"></a>当前算子执行时的并行度。</p>
</td>
</tr>
<tr id="row11688205316437"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p116886535438"><a name="p116886535438"></a><a name="p116886535438"></a><span id="ph2057684104418"><a name="ph2057684104418"></a><a name="ph2057684104418"></a>parent_node_id</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p2688353204315"><a name="p2688353204315"></a><a name="p2688353204315"></a><span id="ph15602138154412"><a name="ph15602138154412"></a><a name="ph15602138154412"></a>integer</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1768805364318"><a name="p1768805364318"></a><a name="p1768805364318"></a><span id="ph615313054410"><a name="ph615313054410"></a><a name="ph615313054410"></a>当前算子的父节点node id。</span></p>
</td>
</tr>
<tr id="row168131353164410"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p181335384413"><a name="p181335384413"></a><a name="p181335384413"></a><span id="ph747335714447"><a name="ph747335714447"></a><a name="ph747335714447"></a>left_child_id</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p16813185374414"><a name="p16813185374414"></a><a name="p16813185374414"></a><span id="ph4786155914418"><a name="ph4786155914418"></a><a name="ph4786155914418"></a>integer</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1981425312443"><a name="p1981425312443"></a><a name="p1981425312443"></a><span id="ph195513384512"><a name="ph195513384512"></a><a name="ph195513384512"></a>当前算子的左孩子节点node id。</span></p>
</td>
</tr>
<tr id="row14793821194512"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p67937218450"><a name="p67937218450"></a><a name="p67937218450"></a><span id="ph18668028194516"><a name="ph18668028194516"></a><a name="ph18668028194516"></a>right_child_id</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p187939211453"><a name="p187939211453"></a><a name="p187939211453"></a><span id="ph1584423214515"><a name="ph1584423214515"></a><a name="ph1584423214515"></a>integer</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1579313212459"><a name="p1579313212459"></a><a name="p1579313212459"></a><span id="ph97741839154516"><a name="ph97741839154516"></a><a name="ph97741839154516"></a>当前算子的右孩子节点node id</span><span id="ph1762417458456"><a name="ph1762417458456"></a><a name="ph1762417458456"></a>。</span></p>
</td>
</tr>
<tr id="row11384912154618"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p2384191274610"><a name="p2384191274610"></a><a name="p2384191274610"></a><span id="ph13996161734614"><a name="ph13996161734614"></a><a name="ph13996161734614"></a>operation</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p17384612194617"><a name="p17384612194617"></a><a name="p17384612194617"></a><span id="ph17738623114611"><a name="ph17738623114611"></a><a name="ph17738623114611"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p13384161204616"><a name="p13384161204616"></a><a name="p13384161204616"></a><span id="ph19393196164719"><a name="ph19393196164719"></a><a name="ph19393196164719"></a>当前算子进行的操作名称。</span></p>
</td>
</tr>
<tr id="row16649191225112"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p1464971255114"><a name="p1464971255114"></a><a name="p1464971255114"></a><span id="ph976542825118"><a name="ph976542825118"></a><a name="ph976542825118"></a>orientation</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p13650131275114"><a name="p13650131275114"></a><a name="p13650131275114"></a><span id="ph67371934145111"><a name="ph67371934145111"></a><a name="ph67371934145111"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1650121216516"><a name="p1650121216516"></a><a name="p1650121216516"></a><span id="ph28598373519"><a name="ph28598373519"></a><a name="ph28598373519"></a>当前算子的对齐方式。</span></p>
</td>
</tr>
<tr id="row277218505519"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p57734502511"><a name="p57734502511"></a><a name="p57734502511"></a><span id="ph1637715515511"><a name="ph1637715515511"></a><a name="ph1637715515511"></a>strategy</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p2077385014516"><a name="p2077385014516"></a><a name="p2077385014516"></a><span id="ph74565825110"><a name="ph74565825110"></a><a name="ph74565825110"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1077355019513"><a name="p1077355019513"></a><a name="p1077355019513"></a><span id="ph98758085218"><a name="ph98758085218"></a><a name="ph98758085218"></a>当前算子操作的实现方法。</span></p>
</td>
</tr>
<tr id="row15324193720523"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p19324133745214"><a name="p19324133745214"></a><a name="p19324133745214"></a><span id="ph1396813416526"><a name="ph1396813416526"></a><a name="ph1396813416526"></a>options</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p9324153716523"><a name="p9324153716523"></a><a name="p9324153716523"></a><span id="ph19956571529"><a name="ph19956571529"></a><a name="ph19956571529"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p1632413714523"><a name="p1632413714523"></a><a name="p1632413714523"></a><span id="ph43959514533"><a name="ph43959514533"></a><a name="ph43959514533"></a>当前算子操作的选择方式。</span></p>
</td>
</tr>
<tr id="row814712516543"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p2014811252549"><a name="p2014811252549"></a><a name="p2014811252549"></a><span id="ph2601531155411"><a name="ph2601531155411"></a><a name="ph2601531155411"></a>condition</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p51481925195411"><a name="p51481925195411"></a><a name="p51481925195411"></a><span id="ph1169343616543"><a name="ph1169343616543"></a><a name="ph1169343616543"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p3148925155419"><a name="p3148925155419"></a><a name="p3148925155419"></a><span id="ph1385739195418"><a name="ph1385739195418"></a><a name="ph1385739195418"></a>当前算子操作的过滤条件。</span></p>
</td>
</tr>
<tr id="row1029117105510"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.2.4.1.1 "><p id="p82911615551"><a name="p82911615551"></a><a name="p82911615551"></a><span id="ph145251954559"><a name="ph145251954559"></a><a name="ph145251954559"></a>projection</span></p>
</td>
<td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.4.1.2 "><p id="p129118125513"><a name="p129118125513"></a><a name="p129118125513"></a><span id="ph914429165518"><a name="ph914429165518"></a><a name="ph914429165518"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="59%" headers="mcps1.2.4.1.3 "><p id="p5291191155512"><a name="p5291191155512"></a><a name="p5291191155512"></a><span id="ph192361012125514"><a name="ph192361012125514"></a><a name="ph192361012125514"></a>当前算子的映射关系。</span></p>
</td>
</tr>
</tbody>
</table>

