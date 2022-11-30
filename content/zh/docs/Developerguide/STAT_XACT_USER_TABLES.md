# STAT\_XACT\_USER\_TABLES<a name="ZH-CN_TOPIC_0245374710"></a>

显示当前节点命名空间中用户表的事务状态信息。

**表 1**  STAT\_XACT\_USER\_TABLES字段

<a name="zh-cn_topic_0237122606_table19435202513310"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122606_row19532125437"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122606_p85323251234"><a name="zh-cn_topic_0237122606_p85323251234"></a><a name="zh-cn_topic_0237122606_p85323251234"></a><strong id="zh-cn_topic_0237122606_b105321625833"><a name="zh-cn_topic_0237122606_b105321625833"></a><a name="zh-cn_topic_0237122606_b105321625833"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122606_p25331252030"><a name="zh-cn_topic_0237122606_p25331252030"></a><a name="zh-cn_topic_0237122606_p25331252030"></a><strong id="zh-cn_topic_0237122606_b45332251739"><a name="zh-cn_topic_0237122606_b45332251739"></a><a name="zh-cn_topic_0237122606_b45332251739"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122606_p653414251833"><a name="zh-cn_topic_0237122606_p653414251833"></a><a name="zh-cn_topic_0237122606_p653414251833"></a><strong id="zh-cn_topic_0237122606_b18534725737"><a name="zh-cn_topic_0237122606_b18534725737"></a><a name="zh-cn_topic_0237122606_b18534725737"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122606_row1653442517315"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p135346251438"><a name="zh-cn_topic_0237122606_p135346251438"></a><a name="zh-cn_topic_0237122606_p135346251438"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p105348253315"><a name="zh-cn_topic_0237122606_p105348253315"></a><a name="zh-cn_topic_0237122606_p105348253315"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p13534182516318"><a name="zh-cn_topic_0237122606_p13534182516318"></a><a name="zh-cn_topic_0237122606_p13534182516318"></a>表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row1053482510313"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p185356256318"><a name="zh-cn_topic_0237122606_p185356256318"></a><a name="zh-cn_topic_0237122606_p185356256318"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p053522511312"><a name="zh-cn_topic_0237122606_p053522511312"></a><a name="zh-cn_topic_0237122606_p053522511312"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p153520253315"><a name="zh-cn_topic_0237122606_p153520253315"></a><a name="zh-cn_topic_0237122606_p153520253315"></a>该表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row175352254319"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p253514251731"><a name="zh-cn_topic_0237122606_p253514251731"></a><a name="zh-cn_topic_0237122606_p253514251731"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p1535142520316"><a name="zh-cn_topic_0237122606_p1535142520316"></a><a name="zh-cn_topic_0237122606_p1535142520316"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p653617251318"><a name="zh-cn_topic_0237122606_p653617251318"></a><a name="zh-cn_topic_0237122606_p653617251318"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row13536122518318"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p1153612513315"><a name="zh-cn_topic_0237122606_p1153612513315"></a><a name="zh-cn_topic_0237122606_p1153612513315"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p17536172512312"><a name="zh-cn_topic_0237122606_p17536172512312"></a><a name="zh-cn_topic_0237122606_p17536172512312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p155362025938"><a name="zh-cn_topic_0237122606_p155362025938"></a><a name="zh-cn_topic_0237122606_p155362025938"></a>该表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row1153612252313"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p1536192517316"><a name="zh-cn_topic_0237122606_p1536192517316"></a><a name="zh-cn_topic_0237122606_p1536192517316"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p13536172513311"><a name="zh-cn_topic_0237122606_p13536172513311"></a><a name="zh-cn_topic_0237122606_p13536172513311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p553772513312"><a name="zh-cn_topic_0237122606_p553772513312"></a><a name="zh-cn_topic_0237122606_p553772513312"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row10537162517312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p253716257316"><a name="zh-cn_topic_0237122606_p253716257316"></a><a name="zh-cn_topic_0237122606_p253716257316"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p1653710255314"><a name="zh-cn_topic_0237122606_p1653710255314"></a><a name="zh-cn_topic_0237122606_p1653710255314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p17537142519317"><a name="zh-cn_topic_0237122606_p17537142519317"></a><a name="zh-cn_topic_0237122606_p17537142519317"></a>该表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row753715257315"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p1853814251533"><a name="zh-cn_topic_0237122606_p1853814251533"></a><a name="zh-cn_topic_0237122606_p1853814251533"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p205389252313"><a name="zh-cn_topic_0237122606_p205389252313"></a><a name="zh-cn_topic_0237122606_p205389252313"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p18538825336"><a name="zh-cn_topic_0237122606_p18538825336"></a><a name="zh-cn_topic_0237122606_p18538825336"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row9538025536"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p11538225933"><a name="zh-cn_topic_0237122606_p11538225933"></a><a name="zh-cn_topic_0237122606_p11538225933"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p105381251636"><a name="zh-cn_topic_0237122606_p105381251636"></a><a name="zh-cn_topic_0237122606_p105381251636"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p105381025839"><a name="zh-cn_topic_0237122606_p105381025839"></a><a name="zh-cn_topic_0237122606_p105381025839"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row35389254317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p18538182513314"><a name="zh-cn_topic_0237122606_p18538182513314"></a><a name="zh-cn_topic_0237122606_p18538182513314"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p95384253315"><a name="zh-cn_topic_0237122606_p95384253315"></a><a name="zh-cn_topic_0237122606_p95384253315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p1553911251938"><a name="zh-cn_topic_0237122606_p1553911251938"></a><a name="zh-cn_topic_0237122606_p1553911251938"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row1653910251336"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p12539425637"><a name="zh-cn_topic_0237122606_p12539425637"></a><a name="zh-cn_topic_0237122606_p12539425637"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p35399258311"><a name="zh-cn_topic_0237122606_p35399258311"></a><a name="zh-cn_topic_0237122606_p35399258311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p17539132511314"><a name="zh-cn_topic_0237122606_p17539132511314"></a><a name="zh-cn_topic_0237122606_p17539132511314"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122606_row353918251037"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122606_p135394251237"><a name="zh-cn_topic_0237122606_p135394251237"></a><a name="zh-cn_topic_0237122606_p135394251237"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122606_p2539625832"><a name="zh-cn_topic_0237122606_p2539625832"></a><a name="zh-cn_topic_0237122606_p2539625832"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122606_p135395251313"><a name="zh-cn_topic_0237122606_p135395251313"></a><a name="zh-cn_topic_0237122606_p135395251313"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
</tbody>
</table>
