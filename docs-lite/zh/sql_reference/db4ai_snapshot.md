# DB4AI.SNAPSHOT<a name="ZH-CN_TOPIC_0000001195271241"></a>

SNAPSHOT表记录当前用户通过特性DB4AI.SNAPSHOT存储的快照。

**表 1**  db4ai.snapshot表属性

<a name="table7264162193119"></a>
<table><thead align="left"><tr id="row1126472111314"><th class="cellrowborder" valign="top" width="13.38%" id="mcps1.2.5.1.1"><p id="p102641421133116"><a name="p102641421133116"></a><a name="p102641421133116"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.21%" id="mcps1.2.5.1.2"><p id="p52641621173113"><a name="p52641621173113"></a><a name="p52641621173113"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="38.379999999999995%" id="mcps1.2.5.1.3"><p id="p15264321153114"><a name="p15264321153114"></a><a name="p15264321153114"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25.03%" id="mcps1.2.5.1.4"><p id="p72641421163110"><a name="p72641421163110"></a><a name="p72641421163110"></a>实例</p>
</th>
</tr>
</thead>
<tbody><tr id="row2026410215315"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p152651218315"><a name="p152651218315"></a><a name="p152651218315"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p8265162183114"><a name="p8265162183114"></a><a name="p8265162183114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p1226542123114"><a name="p1226542123114"></a><a name="p1226542123114"></a>当前快照的ID。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p112651621133115"><a name="p112651621133115"></a><a name="p112651621133115"></a>1</p>
</td>
</tr>
<tr id="row126552120317"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1326532116318"><a name="p1326532116318"></a><a name="p1326532116318"></a>parent_id</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p32650215317"><a name="p32650215317"></a><a name="p32650215317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p15265172117319"><a name="p15265172117319"></a><a name="p15265172117319"></a>父快照的ID。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p1426592143111"><a name="p1426592143111"></a><a name="p1426592143111"></a>0</p>
</td>
</tr>
<tr id="row9265162111316"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p2265521133119"><a name="p2265521133119"></a><a name="p2265521133119"></a>matrix_id</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p12265521103114"><a name="p12265521103114"></a><a name="p12265521103114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p15265182173110"><a name="p15265182173110"></a><a name="p15265182173110"></a>CSS模式下快照的矩阵ID，否则为NULL。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p7265142117313"><a name="p7265142117313"></a><a name="p7265142117313"></a>0</p>
</td>
</tr>
<tr id="row826542116318"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p2265421103116"><a name="p2265421103116"></a><a name="p2265421103116"></a>root_id</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p14528134563515"><a name="p14528134563515"></a><a name="p14528134563515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p10451184313399"><a name="p10451184313399"></a><a name="p10451184313399"></a>初始快照的ID，通过db4ai.create_snapshot()从操作数据构建。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p626522114319"><a name="p626522114319"></a><a name="p626522114319"></a>0</p>
</td>
</tr>
<tr id="row142652215311"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1426552115314"><a name="p1426552115314"></a><a name="p1426552115314"></a>schema</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p18265192123114"><a name="p18265192123114"></a><a name="p18265192123114"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p11265122111318"><a name="p11265122111318"></a><a name="p11265122111318"></a>导出快照视图的模式。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p1926512116314"><a name="p1926512116314"></a><a name="p1926512116314"></a>public</p>
</td>
</tr>
<tr id="row13265162118312"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1726516210317"><a name="p1726516210317"></a><a name="p1726516210317"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p1226562153110"><a name="p1226562153110"></a><a name="p1226562153110"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p18265142112317"><a name="p18265142112317"></a><a name="p18265142112317"></a>快照的名称，包括版本后缀。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p42651721153114"><a name="p42651721153114"></a><a name="p42651721153114"></a>example0@1.1.0</p>
</td>
</tr>
<tr id="row02652218313"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1265122111312"><a name="p1265122111312"></a><a name="p1265122111312"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p726512163110"><a name="p726512163110"></a><a name="p726512163110"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p10265142115312"><a name="p10265142115312"></a><a name="p10265142115312"></a>创建此快照的用户的名称。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p5265132113117"><a name="p5265132113117"></a><a name="p5265132113117"></a>nw</p>
</td>
</tr>
<tr id="row67081539113217"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1270812391322"><a name="p1270812391322"></a><a name="p1270812391322"></a>commands</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p0708239113217"><a name="p0708239113217"></a><a name="p0708239113217"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p570843953212"><a name="p570843953212"></a><a name="p570843953212"></a>记录如何从其根快照生成到此快照的SQL语句的完整列表。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p17087391326"><a name="p17087391326"></a><a name="p17087391326"></a>{DELETE,"WHERE id &gt; 7"}</p>
</td>
</tr>
<tr id="row201441045163216"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p11144645113217"><a name="p11144645113217"></a><a name="p11144645113217"></a>comment</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p1614414519325"><a name="p1614414519325"></a><a name="p1614414519325"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p6144134511323"><a name="p6144134511323"></a><a name="p6144134511323"></a>快照说明。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p1741313210120"><a name="p1741313210120"></a><a name="p1741313210120"></a>inherits from @1.0.0</p>
</td>
</tr>
<tr id="row03091552173216"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p2031025219323"><a name="p2031025219323"></a><a name="p2031025219323"></a>published</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p1431085253214"><a name="p1431085253214"></a><a name="p1431085253214"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p531035216328"><a name="p531035216328"></a><a name="p531035216328"></a>TRUE，当且仅当快照当前已发布。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p14310552163215"><a name="p14310552163215"></a><a name="p14310552163215"></a>f</p>
</td>
</tr>
<tr id="row9175165623219"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1517519561329"><a name="p1517519561329"></a><a name="p1517519561329"></a>archived</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p16175105616321"><a name="p16175105616321"></a><a name="p16175105616321"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p7175135618328"><a name="p7175135618328"></a><a name="p7175135618328"></a>TRUE，当且仅当快照当前已存档。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p217535623219"><a name="p217535623219"></a><a name="p217535623219"></a>f</p>
</td>
</tr>
<tr id="row9253512143316"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p22530124338"><a name="p22530124338"></a><a name="p22530124338"></a>created</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p12531512133313"><a name="p12531512133313"></a><a name="p12531512133313"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p4253151215332"><a name="p4253151215332"></a><a name="p4253151215332"></a>快照创建日期的时间戳。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p12253212103314"><a name="p12253212103314"></a><a name="p12253212103314"></a>2021-08-25 10:59:52.955604</p>
</td>
</tr>
<tr id="row199465153331"><td class="cellrowborder" valign="top" width="13.38%" headers="mcps1.2.5.1.1 "><p id="p1394621553317"><a name="p1394621553317"></a><a name="p1394621553317"></a>row_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.21%" headers="mcps1.2.5.1.2 "><p id="p159468159332"><a name="p159468159332"></a><a name="p159468159332"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="38.379999999999995%" headers="mcps1.2.5.1.3 "><p id="p1094619155331"><a name="p1094619155331"></a><a name="p1094619155331"></a>此快照中的数据行数。</p>
</td>
<td class="cellrowborder" valign="top" width="25.03%" headers="mcps1.2.5.1.4 "><p id="p794610152331"><a name="p794610152331"></a><a name="p794610152331"></a>8</p>
</td>
</tr>
</tbody>
</table>
