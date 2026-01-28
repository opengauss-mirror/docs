# Database Stat<a name="ZH-CN_TOPIC_0000001259955049"></a>

Database Stat列名称及描述如下表所示。

**表 1**  Database Stat报表主要内容

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p118921533202610"><a name="p118921533202610"></a><a name="p118921533202610"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p155454652619"><a name="p155454652619"></a><a name="p155454652619"></a>数据库名称。</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p96561806256"><a name="p96561806256"></a><a name="p96561806256"></a>Backends</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p0656180132519"><a name="p0656180132519"></a><a name="p0656180132519"></a>连接到该数据库的后端数。</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5656180172513"><a name="p5656180172513"></a><a name="p5656180172513"></a>Xact Commit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1656170132517"><a name="p1656170132517"></a><a name="p1656170132517"></a>此数据库中已经提交的事务数。</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p96565012254"><a name="p96565012254"></a><a name="p96565012254"></a>Xact Rollback</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p76567012253"><a name="p76567012253"></a><a name="p76567012253"></a>此数据库中已经回滚的事务数。</p>
</td>
</tr>
<tr id="row1523145815238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p065614092517"><a name="p065614092517"></a><a name="p065614092517"></a>Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p10656806250"><a name="p10656806250"></a><a name="p10656806250"></a>在这个数据库中读取的磁盘块的数量。</p>
</td>
</tr>
<tr id="row4231125862312"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p206567092510"><a name="p206567092510"></a><a name="p206567092510"></a>Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p116561603257"><a name="p116561603257"></a><a name="p116561603257"></a>高速缓存中已经发现的磁盘块的次数。</p>
</td>
</tr>
<tr id="row19231558172318"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p56565012253"><a name="p56565012253"></a><a name="p56565012253"></a>Tuple Returned</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3656140152510"><a name="p3656140152510"></a><a name="p3656140152510"></a>顺序扫描的行数。</p>
</td>
</tr>
<tr id="row1425411209253"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p53101754182516"><a name="p53101754182516"></a><a name="p53101754182516"></a>Tuple Fetched</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14374191912711"><a name="p14374191912711"></a><a name="p14374191912711"></a>随机扫描的行数。</p>
</td>
</tr>
<tr id="row1483523102517"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p163102054202519"><a name="p163102054202519"></a><a name="p163102054202519"></a>Tuple Inserted</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p931025492518"><a name="p931025492518"></a><a name="p931025492518"></a>通过数据库查询插入的行数。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p7310954172510"><a name="p7310954172510"></a><a name="p7310954172510"></a>Tuple Updated</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p631012543256"><a name="p631012543256"></a><a name="p631012543256"></a>通过数据库查询更新的行数。</p>
</td>
</tr>
<tr id="row62089819127"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5208188181219"><a name="p5208188181219"></a><a name="p5208188181219"></a>Tup Deleted</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p32083811128"><a name="p32083811128"></a><a name="p32083811128"></a>通过数据库查询删除的行数。</p>
</td>
</tr>
<tr id="row1119733002519"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1531025432510"><a name="p1531025432510"></a><a name="p1531025432510"></a>Conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p73101954142512"><a name="p73101954142512"></a><a name="p73101954142512"></a>由于数据库恢复冲突取消的查询数量。</p>
</td>
</tr>
<tr id="row3539163272511"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p93101654152515"><a name="p93101654152515"></a><a name="p93101654152515"></a>Temp Files</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1931016548256"><a name="p1931016548256"></a><a name="p1931016548256"></a>通过数据库查询创建的临时文件数量。</p>
</td>
</tr>
<tr id="row14673122518255"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1031035482512"><a name="p1031035482512"></a><a name="p1031035482512"></a>Temp Bytes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p43101054172510"><a name="p43101054172510"></a><a name="p43101054172510"></a>通过数据库查询写入临时文件的数据总量。</p>
</td>
</tr>
<tr id="row879314172519"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p144421511263"><a name="p144421511263"></a><a name="p144421511263"></a>Deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p844241142613"><a name="p844241142613"></a><a name="p844241142613"></a>在该数据库中检索的死锁数。</p>
</td>
</tr>
<tr id="row0875134313254"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p9442171112612"><a name="p9442171112612"></a><a name="p9442171112612"></a>Blk Read Time</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p174422182619"><a name="p174422182619"></a><a name="p174422182619"></a>通过数据库后端读取数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="row198061645112515"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p204420162614"><a name="p204420162614"></a><a name="p204420162614"></a>Blk Write Time</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1344251192617"><a name="p1344251192617"></a><a name="p1344251192617"></a>通过数据库后端写入数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="row4723104742515"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p184421132616"><a name="p184421132616"></a><a name="p184421132616"></a>Stats Reset</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p194425152620"><a name="p194425152620"></a><a name="p194425152620"></a>重置当前状态统计的时间。</p>
</td>
</tr>
</tbody>
</table>
