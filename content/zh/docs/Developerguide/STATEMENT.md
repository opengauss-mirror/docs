# STATEMENT<a name="ZH-CN_TOPIC_0289900054"></a>

获得当前节点的执行语句（归一化SQL）的信息。查询视图必须具有sysadmin权限或者monitor admin权限。数据库主节点上可以看到此数据库主节点接收到的归一化的SQL的全量统计信息（包含数据库节点）；数据库节点上仅可看到归一化的SQL的此节点执行的统计信息。

**表 1**  STATEMENT字段

<a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_table1097962175514"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row15149337559"><th class="cellrowborder" valign="top" width="26.58%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1114916305510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1114916305510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1114916305510"></a><strong id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b21491139558"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b21491139558"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b21491139558"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.81%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p201493317555"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p201493317555"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p201493317555"></a><strong id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b121490325513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b121490325513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b121490325513"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.61000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p141491136556"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p141491136556"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p141491136556"></a><strong id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b1149183115510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b1149183115510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_b1149183115510"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row161496314551"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p111495311559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p111495311559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p111495311559"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71491634559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71491634559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71491634559"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2014911385516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2014911385516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2014911385516"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row71499395519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10149035559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10149035559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10149035559"></a>node_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1514914325516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1514914325516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1514914325516"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p41507317557"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p41507317557"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p41507317557"></a>节点的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row81506325514"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615011365513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615011365513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615011365513"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p191501135557"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p191501135557"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p191501135557"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1115013365511"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1115013365511"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1115013365511"></a>用户名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row615023155519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1915011365512"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1915011365512"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1915011365512"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p01509335513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p01509335513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p01509335513"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7150534552"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7150534552"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7150534552"></a>用户OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row1150183155512"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p111501338555"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p111501338555"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p111501338555"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p215013385516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p215013385516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p215013385516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8150331559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8150331559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8150331559"></a>归一化的SQL ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row12150113125518"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91507317551"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91507317551"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91507317551"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2150183165513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2150183165513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2150183165513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p19150153195513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p19150153195513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p19150153195513"></a>归一化的SQL。</p>
<p id="p19360123918375"><a name="p19360123918375"></a><a name="p19360123918375"></a>备注：长度受track_activity_query_size控制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row19150437555"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71505355516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71505355516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71505355516"></a>n_calls</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p13150133175512"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p13150133175512"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p13150133175512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1815011311556"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1815011311556"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1815011311556"></a>调用次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row61509312550"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10150339551"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10150339551"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10150339551"></a>min_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p315015305511"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p315015305511"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p315015305511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11511039557"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11511039557"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11511039557"></a>SQL在内核内的最小运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row015123165518"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p215113325517"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p215113325517"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p215113325517"></a>max_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91515355516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91515355516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91515355516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1415116318558"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1415116318558"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1415116318558"></a>SQL在内核内的最大运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row515112312552"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p19151163165516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p19151163165516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p19151163165516"></a>total_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015153165510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015153165510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015153165510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11151837553"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11151837553"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11151837553"></a>SQL在内核内的总运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row161519335516"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p12151173155516"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p12151173155516"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p12151173155516"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1215110317558"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1215110317558"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1215110317558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8151173125511"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8151173125511"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8151173125511"></a>SELECT返回的结果集行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row171519317552"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1515113325519"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1515113325519"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1515113325519"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p715153105514"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p715153105514"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p715153105514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p61511320551"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p61511320551"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p61511320551"></a>随机扫描行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row1151203125520"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p21511732557"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p21511732557"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p21511732557"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p161511133551"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p161511133551"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p161511133551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p16151336552"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p16151336552"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p16151336552"></a>顺序扫描行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row1152338558"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p61521338554"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p61521338554"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p61521338554"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7152432558"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7152432558"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7152432558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71521339553"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71521339553"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p71521339553"></a>插入行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row21522039553"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91521639553"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91521639553"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p91521639553"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615233165512"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615233165512"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615233165512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p815211345520"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p815211345520"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p815211345520"></a>更新行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row16152939554"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p20152031552"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p20152031552"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p20152031552"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1152431552"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1152431552"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1152431552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1215220311554"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1215220311554"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1215220311554"></a>删除行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row61522365519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615218355510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615218355510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1615218355510"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015210319559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015210319559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015210319559"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515213345510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515213345510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515213345510"></a>buffer的块访问次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row1415253135515"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8152113135510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8152113135510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p8152113135510"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p21521534556"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p21521534556"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p21521534556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11152103195519"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11152103195519"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11152103195519"></a>buffer的块命中次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row1015214315520"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115243195515"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115243195515"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115243195515"></a>n_soft_parse</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p41531437551"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p41531437551"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p41531437551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115315315520"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115315315520"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115315315520"></a>软解析次数，n_soft_parse + n_hard_parse可能大于n_calls，因为子查询未计入n_calls。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row11153193155520"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015312318558"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015312318558"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p2015312318558"></a>n_hard_parse</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p51532315515"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p51532315515"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p51532315515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p171532375513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p171532375513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p171532375513"></a>硬解析次数，n_soft_parse + n_hard_parse可能大于n_calls，因为子查询未计入n_calls。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row9153183195512"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1415317355520"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1415317355520"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1415317355520"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p9153103105515"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p9153103105515"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p9153103105515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515317316559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515317316559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515317316559"></a>有效的DB时间花费，多线程将累加（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row4153133155510"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1515316385515"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1515316385515"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1515316385515"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p51536395513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p51536395513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p51536395513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p12153237557"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p12153237557"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p12153237557"></a>CPU时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row21531837559"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115393205519"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115393205519"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p115393205519"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p915317365511"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p915317365511"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p915317365511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p191535318556"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p191535318556"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p191535318556"></a>执行器内执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row181530395519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1815318310553"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1815318310553"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1815318310553"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11153143195510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11153143195510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p11153143195510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p31537355517"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p31537355517"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p31537355517"></a>SQL解析时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row2154339559"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p16154153205517"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p16154153205517"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p16154153205517"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p131540312555"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p131540312555"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p131540312555"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p81548385513"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p81548385513"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p81548385513"></a>SQL生成计划时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row61547314551"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p15154039555"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p15154039555"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p15154039555"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515453165514"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515453165514"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515453165514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1154733558"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1154733558"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1154733558"></a>SQL重写时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row1115416355512"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515493165512"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515493165512"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p515493165512"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p13154173195517"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p13154173195517"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p13154173195517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10154153115511"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10154153115511"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p10154153115511"></a>plpgsql上的执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row41541236558"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p9154239559"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p9154239559"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p9154239559"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p6154163165511"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p6154163165511"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p6154163165511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p415433125510"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p415433125510"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p415433125510"></a>plpgsql上的编译时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_row15154193135511"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7155113115519"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7155113115519"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p7155113115519"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p161551037552"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p161551037552"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p161551037552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1115543145517"><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1115543145517"></a><a name="zh-cn_topic_0283136928_zh-cn_topic_0237122654_p1115543145517"></a>IO上的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="row5375164919433"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p113761549184315"><a name="p113761549184315"></a><a name="p113761549184315"></a><span id="ph1360819612447"><a name="ph1360819612447"></a><a name="ph1360819612447"></a>net_send_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p137634904319"><a name="p137634904319"></a><a name="p137634904319"></a><span id="ph1272212104442"><a name="ph1272212104442"></a><a name="ph1272212104442"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1637616499431"><a name="p1637616499431"></a><a name="p1637616499431"></a><span id="ph851071764417"><a name="ph851071764417"></a><a name="ph851071764417"></a>通过物理连接发送消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</span></p>
</td>
</tr>
<tr id="row59922094411"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p109922006445"><a name="p109922006445"></a><a name="p109922006445"></a><span id="ph17839132218442"><a name="ph17839132218442"></a><a name="ph17839132218442"></a>net_recv_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p199211016445"><a name="p199211016445"></a><a name="p199211016445"></a><span id="ph142145261447"><a name="ph142145261447"></a><a name="ph142145261447"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1992606448"><a name="p1992606448"></a><a name="p1992606448"></a><span id="ph19500532134413"><a name="ph19500532134413"></a><a name="ph19500532134413"></a>通过物理连接接收消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</span></p>
</td>
</tr>
<tr id="row19284145714319"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p13284357144314"><a name="p13284357144314"></a><a name="p13284357144314"></a><span id="ph114010383442"><a name="ph114010383442"></a><a name="ph114010383442"></a>net_stream_send_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p1328410571436"><a name="p1328410571436"></a><a name="p1328410571436"></a><span id="ph873113412448"><a name="ph873113412448"></a><a name="ph873113412448"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p728495719439"><a name="p728495719439"></a><a name="p728495719439"></a><span id="ph7587552174410"><a name="ph7587552174410"></a><a name="ph7587552174410"></a>通过逻辑连接发送消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</span></p>
</td>
</tr>
<tr id="row1844175316434"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p6844155334313"><a name="p6844155334313"></a><a name="p6844155334313"></a><span id="ph87757314457"><a name="ph87757314457"></a><a name="ph87757314457"></a>net_stream_recv_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p284412532432"><a name="p284412532432"></a><a name="p284412532432"></a><span id="ph1843016426440"><a name="ph1843016426440"></a><a name="ph1843016426440"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p084410534431"><a name="p084410534431"></a><a name="p084410534431"></a><span id="ph0941145914411"><a name="ph0941145914411"></a><a name="ph0941145914411"></a>通过逻辑连接接收消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</span></p>
</td>
</tr>
<tr id="row16379469100"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p383015593117"><a name="p383015593117"></a><a name="p383015593117"></a>sort_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p1283015951115"><a name="p1283015951115"></a><a name="p1283015951115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p138301159171120"><a name="p138301159171120"></a><a name="p138301159171120"></a>排序执行的次数。</p>
</td>
</tr>
<tr id="row1848425212100"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p18301559171120"><a name="p18301559171120"></a><a name="p18301559171120"></a>sort_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p583025919115"><a name="p583025919115"></a><a name="p583025919115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1683085941119"><a name="p1683085941119"></a><a name="p1683085941119"></a>排序执行的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row74061654131017"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p118301591110"><a name="p118301591110"></a><a name="p118301591110"></a>sort_mem_used</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p983019595111"><a name="p983019595111"></a><a name="p983019595111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p4830155916110"><a name="p4830155916110"></a><a name="p4830155916110"></a>排序过程中使用的work memory大小（单位：KB）。</p>
</td>
</tr>
<tr id="row51320111117"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p28301059101117"><a name="p28301059101117"></a><a name="p28301059101117"></a>sort_spill_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p13830165910117"><a name="p13830165910117"></a><a name="p13830165910117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1883075971117"><a name="p1883075971117"></a><a name="p1883075971117"></a>排序过程中，若发生落盘，写文件的次数。</p>
</td>
</tr>
<tr id="row9674988119"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p1183015592119"><a name="p1183015592119"></a><a name="p1183015592119"></a>sort_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p183065971112"><a name="p183065971112"></a><a name="p183065971112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p48302059111118"><a name="p48302059111118"></a><a name="p48302059111118"></a>排序过程中，若发生落盘，使用的文件大小（单位：KB）。</p>
</td>
</tr>
<tr id="row127818116119"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p1083045911118"><a name="p1083045911118"></a><a name="p1083045911118"></a>hash_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p28301359151112"><a name="p28301359151112"></a><a name="p28301359151112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p158311459131119"><a name="p158311459131119"></a><a name="p158311459131119"></a>hash执行的次数。</p>
</td>
</tr>
<tr id="row788815518113"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p11831459101115"><a name="p11831459101115"></a><a name="p11831459101115"></a>hash_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p683195917112"><a name="p683195917112"></a><a name="p683195917112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p13831135971120"><a name="p13831135971120"></a><a name="p13831135971120"></a>hash执行的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1394401731113"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p4831145901111"><a name="p4831145901111"></a><a name="p4831145901111"></a>hash_mem_used</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p13831125912115"><a name="p13831125912115"></a><a name="p13831125912115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p7831205991111"><a name="p7831205991111"></a><a name="p7831205991111"></a>hash过程中使用的work memory大小（单位：KB）。</p>
</td>
</tr>
<tr id="row17560221161114"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p1583118599116"><a name="p1583118599116"></a><a name="p1583118599116"></a>hash_spill_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p7831115961117"><a name="p7831115961117"></a><a name="p7831115961117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p19831135921119"><a name="p19831135921119"></a><a name="p19831135921119"></a>hash过程中，若发生落盘，写文件的次数。</p>
</td>
</tr>
<tr id="row421782914119"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p11831159191112"><a name="p11831159191112"></a><a name="p11831159191112"></a>hash_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p48312598118"><a name="p48312598118"></a><a name="p48312598118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p9831459101120"><a name="p9831459101120"></a><a name="p9831459101120"></a>hash过程中，若发生落盘，使用的文件大小（单位：KB）。</p>
</td>
</tr>
<tr id="row19410184911116"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p9214257135413"><a name="p9214257135413"></a><a name="p9214257135413"></a>last_updated</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p5214257155418"><a name="p5214257155418"></a><a name="p5214257155418"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p2021410575548"><a name="p2021410575548"></a><a name="p2021410575548"></a>最后一次更新该语句的时间。</p>
</td>
</tr>
</tbody>
</table>
## 查询记录相关特性

对应系统函数get_instr_unique_sql。其主要目的是保留数据库启动后，运行的SQL的状态记录。

一般使用形式：

```
select * from dbe_perf.statement
```

主要受到以下参数控制：

- enable_resource_track：允许运行时候的资源使用追踪。

- instr_unique_sql_count：允许记录在内存中的SQL总数量。每次修改这个参数，都会重置掉内存中已经存在的所有unique sql。

- instr_unique_sql_track_type：唯一SQL追踪的方式，参数有top，和all，目前仅支持top，对于存储过程，仅记录最外层调用而非所有SQL。

- enable_auto_clean_unique_sql：是否打开unique sql的自动清理机制，当记录达到上限后，可以自动随机清理其中10%的记录。如果不打开，则会记录错误日志，SQL相关内容也不会记录到内存中。
