# STATEMENT<a name="EN-US_TOPIC_0289900054"></a>

**STATEMENT**  obtains information about execution statements \(unique SQL statements\) on the current node. To query this view, you must have the  **sysadmin**  permission. You can view all statistics about unique SQL statements received by the primary database node and other database nodes, whereas you can view only the statistics about unique SQL statements executed on other database nodes.

**Table  1**  STATEMENT columns

<a name="en-us_topic_0283136928_en-us_topic_0237122654_table1097962175514"></a>
<table><thead align="left"><tr id="en-us_topic_0283136928_en-us_topic_0237122654_row15149337559"><th class="cellrowborder" valign="top" width="26.58%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1114916305510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1114916305510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1114916305510"></a><strong id="b140982602211"><a name="b140982602211"></a><a name="b140982602211"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.81%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136928_en-us_topic_0237122654_p201493317555"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p201493317555"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p201493317555"></a><strong id="b7335027152218"><a name="b7335027152218"></a><a name="b7335027152218"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.61000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136928_en-us_topic_0237122654_p141491136556"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p141491136556"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p141491136556"></a><strong id="b15962289222"><a name="b15962289222"></a><a name="b15962289222"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136928_en-us_topic_0237122654_row161496314551"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p111495311559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p111495311559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p111495311559"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p71491634559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p71491634559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p71491634559"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p2014911385516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2014911385516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2014911385516"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row71499395519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p10149035559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p10149035559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p10149035559"></a>node_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1514914325516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1514914325516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1514914325516"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p41507317557"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p41507317557"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p41507317557"></a>Node ID (<strong id="b2092833014223"><a name="b2092833014223"></a><a name="b2092833014223"></a>node_id</strong> in <strong id="b69331030102217"><a name="b69331030102217"></a><a name="b69331030102217"></a>pgxc_node</strong>)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row81506325514"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1615011365513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1615011365513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1615011365513"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p191501135557"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p191501135557"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p191501135557"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1115013365511"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1115013365511"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1115013365511"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row615023155519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1915011365512"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1915011365512"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1915011365512"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p01509335513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p01509335513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p01509335513"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p7150534552"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p7150534552"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p7150534552"></a>OID of the user</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row1150183155512"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p111501338555"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p111501338555"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p111501338555"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p215013385516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p215013385516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p215013385516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p8150331559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p8150331559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p8150331559"></a>ID of the unique SQL statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row12150113125518"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p91507317551"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p91507317551"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p91507317551"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p2150183165513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2150183165513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2150183165513"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p19150153195513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p19150153195513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p19150153195513"></a>Normalized SQL statement</p>
<p id="p19360123918375"><a name="p19360123918375"></a><a name="p19360123918375"></a>Note: The length is controlled by <strong>track_activity_query_size</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row19150437555"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p71505355516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p71505355516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p71505355516"></a>n_calls</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p13150133175512"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p13150133175512"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p13150133175512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1815011311556"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1815011311556"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1815011311556"></a>Number of calls</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row61509312550"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p10150339551"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p10150339551"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p10150339551"></a>min_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p315015305511"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p315015305511"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p315015305511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p11511039557"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11511039557"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11511039557"></a>Minimum execution time of the SQL statement in the kernel (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row015123165518"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p215113325517"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p215113325517"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p215113325517"></a>max_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p91515355516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p91515355516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p91515355516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1415116318558"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1415116318558"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1415116318558"></a>Maximum execution time of the SQL statement in the kernel (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row515112312552"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p19151163165516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p19151163165516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p19151163165516"></a>total_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p2015153165510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2015153165510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2015153165510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p11151837553"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11151837553"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11151837553"></a>Total execution time of the SQL statement in the kernel (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row161519335516"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p12151173155516"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p12151173155516"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p12151173155516"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1215110317558"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1215110317558"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1215110317558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p8151173125511"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p8151173125511"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p8151173125511"></a>Number of rows in the result set returned by the <strong id="b1557811812320"><a name="b1557811812320"></a><a name="b1557811812320"></a>SELECT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row171519317552"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1515113325519"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1515113325519"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1515113325519"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p715153105514"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p715153105514"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p715153105514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p61511320551"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p61511320551"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p61511320551"></a>Number of rows randomly scanned</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row1151203125520"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p21511732557"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p21511732557"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p21511732557"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p161511133551"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p161511133551"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p161511133551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p16151336552"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p16151336552"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p16151336552"></a>Number of rows sequentially scanned</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row1152338558"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p61521338554"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p61521338554"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p61521338554"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p7152432558"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p7152432558"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p7152432558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p71521339553"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p71521339553"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p71521339553"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row21522039553"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p91521639553"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p91521639553"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p91521639553"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1615233165512"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1615233165512"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1615233165512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p815211345520"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p815211345520"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p815211345520"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row16152939554"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p20152031552"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p20152031552"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p20152031552"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1152431552"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1152431552"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1152431552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1215220311554"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1215220311554"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1215220311554"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row61522365519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1615218355510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1615218355510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1615218355510"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p2015210319559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2015210319559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2015210319559"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p515213345510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515213345510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515213345510"></a>Number of buffer block access times</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row1415253135515"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p8152113135510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p8152113135510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p8152113135510"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p21521534556"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p21521534556"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p21521534556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p11152103195519"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11152103195519"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11152103195519"></a>Number of buffer block hits</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row1015214315520"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p115243195515"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p115243195515"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p115243195515"></a>n_soft_parse</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p41531437551"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p41531437551"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p41531437551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p115315315520"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p115315315520"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p115315315520"></a>Number of soft parsing times. The value of <strong id="b17292193917237"><a name="b17292193917237"></a><a name="b17292193917237"></a>n_soft_parse</strong> plus the value of <strong id="b1529712395238"><a name="b1529712395238"></a><a name="b1529712395238"></a>n_hard_parse</strong> may be greater than the value of <strong id="b32976397231"><a name="b32976397231"></a><a name="b32976397231"></a>n_calls</strong> because the number of subqueries is not counted in the value of <strong id="b1329803942315"><a name="b1329803942315"></a><a name="b1329803942315"></a>n_calls</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row11153193155520"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p2015312318558"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2015312318558"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p2015312318558"></a>n_hard_parse</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p51532315515"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p51532315515"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p51532315515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p171532375513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p171532375513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p171532375513"></a>Number of hard parsing times. The value of <strong id="b16771325132414"><a name="b16771325132414"></a><a name="b16771325132414"></a>n_soft_parse</strong> plus the value of <strong id="b378172510248"><a name="b378172510248"></a><a name="b378172510248"></a>n_hard_parse</strong> may be greater than the value of <strong id="b1078192512415"><a name="b1078192512415"></a><a name="b1078192512415"></a>n_calls</strong> because the number of subqueries is not counted in the value of <strong id="b8798259248"><a name="b8798259248"></a><a name="b8798259248"></a>n_calls</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row9153183195512"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1415317355520"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1415317355520"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1415317355520"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p9153103105515"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p9153103105515"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p9153103105515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p515317316559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515317316559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515317316559"></a>Valid DB time, which is accumulated if multiple threads are involved (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row4153133155510"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1515316385515"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1515316385515"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1515316385515"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p51536395513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p51536395513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p51536395513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p12153237557"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p12153237557"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p12153237557"></a>CPU time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row21531837559"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p115393205519"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p115393205519"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p115393205519"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p915317365511"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p915317365511"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p915317365511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p191535318556"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p191535318556"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p191535318556"></a>Execution time in the executor (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row181530395519"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1815318310553"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1815318310553"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1815318310553"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p11153143195510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11153143195510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p11153143195510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p31537355517"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p31537355517"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p31537355517"></a>SQL parsing time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row2154339559"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p16154153205517"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p16154153205517"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p16154153205517"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p131540312555"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p131540312555"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p131540312555"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p81548385513"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p81548385513"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p81548385513"></a>SQL plan generation time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row61547314551"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p15154039555"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p15154039555"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p15154039555"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p515453165514"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515453165514"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515453165514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1154733558"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1154733558"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1154733558"></a>SQL rewriting time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row1115416355512"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p515493165512"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515493165512"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p515493165512"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p13154173195517"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p13154173195517"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p13154173195517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p10154153115511"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p10154153115511"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p10154153115511"></a>Execution time of PL/pgSQL (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row41541236558"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p9154239559"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p9154239559"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p9154239559"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p6154163165511"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p6154163165511"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p6154163165511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p415433125510"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p415433125510"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p415433125510"></a>Compilation time of PL/pgSQL (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283136928_en-us_topic_0237122654_row15154193135511"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p7155113115519"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p7155113115519"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p7155113115519"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p161551037552"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p161551037552"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p161551037552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136928_en-us_topic_0237122654_p1115543145517"><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1115543145517"></a><a name="en-us_topic_0283136928_en-us_topic_0237122654_p1115543145517"></a>I/O time (unit: μs).</p>
</td>
</tr>
<tr id="row5375164919433"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p113761549184315"><a name="p113761549184315"></a><a name="p113761549184315"></a><span id="ph1360819612447"><a name="ph1360819612447"></a><a name="ph1360819612447"></a>net_send_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p137634904319"><a name="p137634904319"></a><a name="p137634904319"></a><span id="ph1272212104442"><a name="ph1272212104442"></a><a name="ph1272212104442"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1637616499431"><a name="p1637616499431"></a><a name="p1637616499431"></a><span id="ph851071764417"><a name="ph851071764417"></a><a name="ph851071764417"></a>Network status of messages sent through a physical connection, including the time (unit: μs), number of calls, and throughput (unit: byte). This column can be used to analyze the network overhead of SQL in a distributed system. This column is not supported in a standalone mode. Example: {"time":xxx, "n_calls":xxx, "size":xxx}.</span></p>
</td>
</tr>
<tr id="row59922094411"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p109922006445"><a name="p109922006445"></a><a name="p109922006445"></a><span id="ph17839132218442"><a name="ph17839132218442"></a><a name="ph17839132218442"></a>net_recv_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p199211016445"><a name="p199211016445"></a><a name="p199211016445"></a><span id="ph142145261447"><a name="ph142145261447"></a><a name="ph142145261447"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1992606448"><a name="p1992606448"></a><a name="p1992606448"></a><span id="ph19500532134413"><a name="ph19500532134413"></a><a name="ph19500532134413"></a>Network status of messages received through a physical connection, including the time (unit: μs), number of calls, and throughput (unit: byte). This column can be used to analyze the network overhead of SQL in a distributed system. This column is not supported in a standalone mode. Example: {"time":xxx, "n_calls":xxx, "size":xxx}.</span></p>
</td>
</tr>
<tr id="row19284145714319"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p13284357144314"><a name="p13284357144314"></a><a name="p13284357144314"></a><span id="ph114010383442"><a name="ph114010383442"></a><a name="ph114010383442"></a>net_stream_send_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p1328410571436"><a name="p1328410571436"></a><a name="p1328410571436"></a><span id="ph873113412448"><a name="ph873113412448"></a><a name="ph873113412448"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p728495719439"><a name="p728495719439"></a><a name="p728495719439"></a><span id="ph7587552174410"><a name="ph7587552174410"></a><a name="ph7587552174410"></a>Network status of messages sent through a logical connection, including the time (unit: μs), number of calls, and throughput (unit: byte). This column can be used to analyze the network overhead of SQL in a distributed system. This column is not supported in a standalone mode. Example: {"time":xxx, "n_calls":xxx, "size":xxx}.</span></p>
</td>
</tr>
<tr id="row1844175316434"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p6844155334313"><a name="p6844155334313"></a><a name="p6844155334313"></a><span id="ph87757314457"><a name="ph87757314457"></a><a name="ph87757314457"></a>net_stream_recv_info</span></p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p284412532432"><a name="p284412532432"></a><a name="p284412532432"></a><span id="ph1843016426440"><a name="ph1843016426440"></a><a name="ph1843016426440"></a>text</span></p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p084410534431"><a name="p084410534431"></a><a name="p084410534431"></a><span id="ph0941145914411"><a name="ph0941145914411"></a><a name="ph0941145914411"></a>Network status of messages received through a logical connection, including the time (unit: μs), number of calls, and throughput (unit: byte). This column can be used to analyze the network overhead of SQL in a distributed system. This column is not supported in a standalone mode. Example: {"time":xxx, "n_calls":xxx, "size":xxx}.</span></p>
</td>
</tr>
<tr id="row16379469100"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p383015593117"><a name="p383015593117"></a><a name="p383015593117"></a>sort_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p1283015951115"><a name="p1283015951115"></a><a name="p1283015951115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p138301159171120"><a name="p138301159171120"></a><a name="p138301159171120"></a>Sorting count</p>
</td>
</tr>
<tr id="row1848425212100"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p18301559171120"><a name="p18301559171120"></a><a name="p18301559171120"></a>sort_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p583025919115"><a name="p583025919115"></a><a name="p583025919115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1683085941119"><a name="p1683085941119"></a><a name="p1683085941119"></a>Sorting duration (unit: μs) </p>
</td>
</tr>
<tr id="row74061654131017"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p118301591110"><a name="p118301591110"></a><a name="p118301591110"></a>sort_mem_used</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p983019595111"><a name="p983019595111"></a><a name="p983019595111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p4830155916110"><a name="p4830155916110"></a><a name="p4830155916110"></a>Size of work memory used during sorting (unit: KB)</p>
</td>
</tr>
<tr id="row51320111117"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p28301059101117"><a name="p28301059101117"></a><a name="p28301059101117"></a>sort_spill_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p13830165910117"><a name="p13830165910117"></a><a name="p13830165910117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p1883075971117"><a name="p1883075971117"></a><a name="p1883075971117"></a>Count of file writing when data is flushed to disks during sorting</p>
</td>
</tr>
<tr id="row9674988119"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p1183015592119"><a name="p1183015592119"></a><a name="p1183015592119"></a>sort_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p183065971112"><a name="p183065971112"></a><a name="p183065971112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p48302059111118"><a name="p48302059111118"></a><a name="p48302059111118"></a>File size used when data is flushed to disks during sorting (unit: KB)</p>
</td>
</tr>
<tr id="row127818116119"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p1083045911118"><a name="p1083045911118"></a><a name="p1083045911118"></a>hash_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p28301359151112"><a name="p28301359151112"></a><a name="p28301359151112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p158311459131119"><a name="p158311459131119"></a><a name="p158311459131119"></a>Hashing count</p>
</td>
</tr>
<tr id="row788815518113"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p11831459101115"><a name="p11831459101115"></a><a name="p11831459101115"></a>hash_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p683195917112"><a name="p683195917112"></a><a name="p683195917112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p13831135971120"><a name="p13831135971120"></a><a name="p13831135971120"></a>Hashing duration (unit: μs)</p>
</td>
</tr>
<tr id="row1394401731113"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p4831145901111"><a name="p4831145901111"></a><a name="p4831145901111"></a>hash_mem_used</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p13831125912115"><a name="p13831125912115"></a><a name="p13831125912115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p7831205991111"><a name="p7831205991111"></a><a name="p7831205991111"></a>Size of work memory used during hashing (unit: KB)</p>
</td>
</tr>
<tr id="row17560221161114"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p1583118599116"><a name="p1583118599116"></a><a name="p1583118599116"></a>hash_spill_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p7831115961117"><a name="p7831115961117"></a><a name="p7831115961117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p19831135921119"><a name="p19831135921119"></a><a name="p19831135921119"></a>Count of file writing when data is flushed to disks during hashing</p>
</td>
</tr>
<tr id="row421782914119"><td class="cellrowborder" valign="top" width="26.58%" headers="mcps1.2.4.1.1 "><p id="p11831159191112"><a name="p11831159191112"></a><a name="p11831159191112"></a>hash_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.81%" headers="mcps1.2.4.1.2 "><p id="p48312598118"><a name="p48312598118"></a><a name="p48312598118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.61000000000001%" headers="mcps1.2.4.1.3 "><p id="p9831459101120"><a name="p9831459101120"></a><a name="p9831459101120"></a>File size used when data is flushed to disks during hashing (unit: KB)</p>
</td>
</tr>
</tbody>
</table>

## Related Feature

This feature corresponds to the system function `get_instr_unique_sql`, which is used to store status records of SQL statements that run after the database is started.

General usage syntax:

```
openGauss=# select * from dbe_perf.statement;
```

It is mainly controlled by the following parameters:

- `enable_resource_track`: tracks resource usage at runtime.

- `instr_unique_sql_count`: indicates the total number of SQL statements that can be recorded in the memory. Each time this parameter is modified, all unique SQL statements in the memory are reset.

- `instr_unique_sql_track_type`: indicates the unique SQL tracing mode. The value can be `top` or `all`. Currently, only `top` is supported. For stored procedures, only the outermost call is recorded.

- `enable_auto_clean_unique_sql`: indicates whether to enable the auto cleanup mechanism of unique SQL. It can automatically clean up 10% of the records randomly when the upper limit is reached. If it is not enabled, error logs will be recorded and SQL related content will not be recorded in memory.

For details, see [GUC parameter: Query](query-62.md#EN-US_TOPIC_0289900490).
