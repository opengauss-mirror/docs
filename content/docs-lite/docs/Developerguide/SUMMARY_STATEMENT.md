# SUMMARY\_STATEMENT<a name="ZH-CN_TOPIC_0289900134"></a>

获得各数据库主节点的执行语句（归一化SQL）的全量信息（包含数据库节点）。

**表 1**  SUMMARY\_STATEMENT字段

<a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_table1885642955515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row109937298552"><th class="cellrowborder" valign="top" width="26.669999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p2993152915559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p2993152915559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p2993152915559"></a><strong id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b12993142915554"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b12993142915554"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b12993142915554"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.54%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p18993429135515"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p18993429135515"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p18993429135515"></a><strong id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b10993172912559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b10993172912559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b10993172912559"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.78999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11993229195514"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11993229195514"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11993229195514"></a><strong id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b899392935518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b899392935518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_b899392935518"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row399314299557"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3993122915554"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3993122915554"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3993122915554"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199319292552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199319292552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199319292552"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79933290551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79933290551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79933290551"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1899322917554"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p699314290553"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p699314290553"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p699314290553"></a>node_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p39931729165511"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p39931729165511"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p39931729165511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599372910559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599372910559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599372910559"></a>节点的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row17993202910557"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11994329205516"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11994329205516"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11994329205516"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99941429185510"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99941429185510"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99941429185510"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399422912551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399422912551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399422912551"></a>用户名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row20994192911555"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p179946295551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p179946295551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p179946295551"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149947298552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149947298552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149947298552"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p15994152955511"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p15994152955511"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p15994152955511"></a>用户OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row999402919555"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p899411298557"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p899411298557"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p899411298557"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199944296556"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199944296556"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199944296556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p17994429115511"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p17994429115511"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p17994429115511"></a>归一化的SQL ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1099442918553"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p5994132916554"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p5994132916554"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p5994132916554"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p09940294554"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p09940294554"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p09940294554"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399411292550"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399411292550"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399411292550"></a>归一化的SQL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row15994142965520"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599412297555"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599412297555"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599412297555"></a>n_calls</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p09941829115515"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p09941829115515"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p09941829115515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p89941329125515"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p89941329125515"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p89941329125515"></a>调用次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row17994329105512"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p399492913551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p399492913551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p399492913551"></a>min_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499432917555"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499432917555"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499432917555"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p099413298558"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p099413298558"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p099413298558"></a>SQL在内核内的最小运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row17994122918553"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1099402975518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1099402975518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1099402975518"></a>max_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199941029125517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199941029125517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199941029125517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199951129155518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199951129155518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p199951129155518"></a>SQL在内核内的最大运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row199515290559"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p2995192910558"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p2995192910558"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p2995192910558"></a>total_elapse_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11995429135517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11995429135517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11995429135517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79951298551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79951298551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79951298551"></a>SQL在内核内的总运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row159951129205514"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0995429185512"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0995429185512"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0995429185512"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p49950292557"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p49950292557"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p49950292557"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p59951329135517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p59951329135517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p59951329135517"></a>SELECT返回的结果集行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row799532918551"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p299532905513"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p299532905513"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p299532905513"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p14995172919552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p14995172919552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p14995172919552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p17995132975520"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p17995132975520"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p17995132975520"></a>随机扫描行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row17995132920555"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p6995529165518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p6995529165518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p6995529165518"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p499532955517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p499532955517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p499532955517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1899522955518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1899522955518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1899522955518"></a>顺序扫描行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row13995182917559"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3995929135514"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3995929135514"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3995929135514"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p699572920552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p699572920552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p699572920552"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0995122905513"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0995122905513"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0995122905513"></a>插入行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1399514296553"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p18995202915558"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p18995202915558"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p18995202915558"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p89951729155510"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p89951729155510"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p89951729155510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p119964296553"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p119964296553"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p119964296553"></a>更新行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row7996112975515"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999642915553"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999642915553"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999642915553"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79961629195518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79961629195518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79961629195518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3996529205512"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3996529205512"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3996529205512"></a>删除行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1699622917551"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1799662919559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1799662919559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1799662919559"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p13996182910557"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p13996182910557"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p13996182910557"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1599612299550"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1599612299550"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1599612299550"></a>buffer的块访问次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row99961729175518"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p10996429205517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p10996429205517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p10996429205517"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1996112985512"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1996112985512"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1996112985512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11996142945515"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11996142945515"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p11996142945515"></a>buffer的块命中次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row189962029105511"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p10996122915516"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p10996122915516"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p10996122915516"></a>n_soft_parse</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p799622915559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p799622915559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p799622915559"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999619294555"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999619294555"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999619294555"></a>软解析次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row199622915556"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p14996192920550"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p14996192920550"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p14996192920550"></a>n_hard_parse</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149960297559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149960297559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149960297559"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0996029145510"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0996029145510"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p0996029145510"></a>硬解析次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row10996152995515"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p4996142910552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p4996142910552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p4996142910552"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149961229135516"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149961229135516"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p149961229135516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p20996152975513"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p20996152975513"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p20996152975513"></a>有效的DB时间花费，多线程将累加（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row0996102925515"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p109971929195517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p109971929195517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p109971929195517"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1299772919551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1299772919551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1299772919551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79971129135518"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79971129135518"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p79971129135518"></a>CPU时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1299712916558"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499712911552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499712911552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499712911552"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1299772945516"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1299772945516"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1299772945516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99971529165519"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99971529165519"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99971529165519"></a>执行器内执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row17997629205512"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p16997132975512"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p16997132975512"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p16997132975512"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499712995517"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499712995517"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499712995517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1099719295558"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1099719295558"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1099719295558"></a>SQL解析时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1399710294556"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p69978293552"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p69978293552"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p69978293552"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599752915520"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599752915520"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p599752915520"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p899722916556"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p899722916556"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p899722916556"></a>SQL生成计划时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row13997229185514"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p099722914555"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p099722914555"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p099722914555"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999762935516"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999762935516"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p999762935516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p49979297554"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p49979297554"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p49979297554"></a>SQL重写时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row99971829165520"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3997182917551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3997182917551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p3997182917551"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1699762915510"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1699762915510"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1699762915510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p19977294553"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p19977294553"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p19977294553"></a>plpgsql上的执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1799717299557"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399712297550"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399712297550"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1399712297550"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p12998152910551"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p12998152910551"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p12998152910551"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1699820292553"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1699820292553"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1699820292553"></a>plpgsql上的编译时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row1699832913554"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p19998529185511"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p19998529185511"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p19998529185511"></a>net_send_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p179981329175511"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p179981329175511"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p179981329175511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p399872919553"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p399872919553"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p399872919553"></a>网络上的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_row5998122915513"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99981529145514"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99981529145514"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p99981529145514"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499816296559"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499816296559"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1499816296559"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1799872965520"><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1799872965520"></a><a name="zh-cn_topic_0283136803_zh-cn_topic_0237122655_p1799872965520"></a>IO上的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="row97389591219"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p9214257135413"><a name="p9214257135413"></a><a name="p9214257135413"></a>last_updated</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p5214257155418"><a name="p5214257155418"></a><a name="p5214257155418"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p2021410575548"><a name="p2021410575548"></a><a name="p2021410575548"></a>最后一次更新该语句的时间。</p>
</td>
</tr>
<tr id="row35066554125"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p383015593117"><a name="p383015593117"></a><a name="p383015593117"></a>sort_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p1283015951115"><a name="p1283015951115"></a><a name="p1283015951115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p138301159171120"><a name="p138301159171120"></a><a name="p138301159171120"></a>排序执行的次数。</p>
</td>
</tr>
<tr id="row85061555181217"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p18301559171120"><a name="p18301559171120"></a><a name="p18301559171120"></a>sort_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p583025919115"><a name="p583025919115"></a><a name="p583025919115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p1683085941119"><a name="p1683085941119"></a><a name="p1683085941119"></a>排序执行的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row3506135515127"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p118301591110"><a name="p118301591110"></a><a name="p118301591110"></a>sort_mem_used</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p983019595111"><a name="p983019595111"></a><a name="p983019595111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p4830155916110"><a name="p4830155916110"></a><a name="p4830155916110"></a>排序过程中使用的work memory大小（单位：KB）。</p>
</td>
</tr>
<tr id="row1750616551121"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p28301059101117"><a name="p28301059101117"></a><a name="p28301059101117"></a>sort_spill_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p13830165910117"><a name="p13830165910117"></a><a name="p13830165910117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p1883075971117"><a name="p1883075971117"></a><a name="p1883075971117"></a>排序过程中，若发生落盘，写文件的次数。</p>
</td>
</tr>
<tr id="row125069552122"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p1183015592119"><a name="p1183015592119"></a><a name="p1183015592119"></a>sort_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p183065971112"><a name="p183065971112"></a><a name="p183065971112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p48302059111118"><a name="p48302059111118"></a><a name="p48302059111118"></a>排序过程中，若发生落盘，使用的文件大小（单位：KB）。</p>
</td>
</tr>
<tr id="row85051955111218"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p1083045911118"><a name="p1083045911118"></a><a name="p1083045911118"></a>hash_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p28301359151112"><a name="p28301359151112"></a><a name="p28301359151112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p158311459131119"><a name="p158311459131119"></a><a name="p158311459131119"></a>hash执行的次数。</p>
</td>
</tr>
<tr id="row750520554129"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p11831459101115"><a name="p11831459101115"></a><a name="p11831459101115"></a>hash_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p683195917112"><a name="p683195917112"></a><a name="p683195917112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p13831135971120"><a name="p13831135971120"></a><a name="p13831135971120"></a>hash执行的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row11505135515126"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p4831145901111"><a name="p4831145901111"></a><a name="p4831145901111"></a>hash_mem_used</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p13831125912115"><a name="p13831125912115"></a><a name="p13831125912115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p7831205991111"><a name="p7831205991111"></a><a name="p7831205991111"></a>hash过程中使用的work memory大小（单位：KB）。</p>
</td>
</tr>
<tr id="row750595571215"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p1583118599116"><a name="p1583118599116"></a><a name="p1583118599116"></a>hash_spill_count</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p7831115961117"><a name="p7831115961117"></a><a name="p7831115961117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p19831135921119"><a name="p19831135921119"></a><a name="p19831135921119"></a>hash过程中，若发生落盘，写文件的次数。</p>
</td>
</tr>
<tr id="row050425519126"><td class="cellrowborder" valign="top" width="26.669999999999998%" headers="mcps1.2.4.1.1 "><p id="p11831159191112"><a name="p11831159191112"></a><a name="p11831159191112"></a>hash_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="17.54%" headers="mcps1.2.4.1.2 "><p id="p48312598118"><a name="p48312598118"></a><a name="p48312598118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.78999999999999%" headers="mcps1.2.4.1.3 "><p id="p9831459101120"><a name="p9831459101120"></a><a name="p9831459101120"></a>hash过程中，若发生落盘，使用的文件大小（单位：KB）。</p>
</td>
</tr>
</tbody>
</table>

