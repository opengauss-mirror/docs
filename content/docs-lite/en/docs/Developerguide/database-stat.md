# Database Stat<a name="EN-US_TOPIC_0000001259955049"></a>

The following table describes columns in the Database Stat report.

**Table  1**  Columns in the Database Stat report

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p118921533202610"><a name="p118921533202610"></a><a name="p118921533202610"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p155454652619"><a name="p155454652619"></a><a name="p155454652619"></a>Database name.</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p96561806256"><a name="p96561806256"></a><a name="p96561806256"></a>Backends</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p0656180132519"><a name="p0656180132519"></a><a name="p0656180132519"></a>Number of backends connected to this database.</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5656180172513"><a name="p5656180172513"></a><a name="p5656180172513"></a>Xact Commit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1656170132517"><a name="p1656170132517"></a><a name="p1656170132517"></a>Number of transactions in this database that have been committed.</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p96565012254"><a name="p96565012254"></a><a name="p96565012254"></a>Xact Rollback</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p76567012253"><a name="p76567012253"></a><a name="p76567012253"></a>Number of transactions in this database that have been rolled back.</p>
</td>
</tr>
<tr id="row1523145815238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p065614092517"><a name="p065614092517"></a><a name="p065614092517"></a>Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p10656806250"><a name="p10656806250"></a><a name="p10656806250"></a>Number of disk blocks read in this database.</p>
</td>
</tr>
<tr id="row4231125862312"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p206567092510"><a name="p206567092510"></a><a name="p206567092510"></a>Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p116561603257"><a name="p116561603257"></a><a name="p116561603257"></a>Number of times that disk blocks have been found in the cache.</p>
</td>
</tr>
<tr id="row19231558172318"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p56565012253"><a name="p56565012253"></a><a name="p56565012253"></a>Tuple Returned</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p3656140152510"><a name="p3656140152510"></a><a name="p3656140152510"></a>Number of rows sequentially scanned.</p>
</td>
</tr>
<tr id="row1425411209253"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p53101754182516"><a name="p53101754182516"></a><a name="p53101754182516"></a>Tuple Fetched</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14374191912711"><a name="p14374191912711"></a><a name="p14374191912711"></a>Number of rows randomly scanned.</p>
</td>
</tr>
<tr id="row1483523102517"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p163102054202519"><a name="p163102054202519"></a><a name="p163102054202519"></a>Tuple Inserted</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p931025492518"><a name="p931025492518"></a><a name="p931025492518"></a>Number of rows inserted by queries in this database.</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p7310954172510"><a name="p7310954172510"></a><a name="p7310954172510"></a>Tuple Updated</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p631012543256"><a name="p631012543256"></a><a name="p631012543256"></a>Number of rows updated by queries in this database.</p>
</td>
</tr>
<tr id="row62089819127"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p5208188181219"><a name="p5208188181219"></a><a name="p5208188181219"></a>Tup Deleted</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p32083811128"><a name="p32083811128"></a><a name="p32083811128"></a>Number of rows deleted by queries in this database.</p>
</td>
</tr>
<tr id="row1119733002519"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1531025432510"><a name="p1531025432510"></a><a name="p1531025432510"></a>Conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p73101954142512"><a name="p73101954142512"></a><a name="p73101954142512"></a>Number of queries canceled due to conflicts.</p>
</td>
</tr>
<tr id="row3539163272511"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p93101654152515"><a name="p93101654152515"></a><a name="p93101654152515"></a>Temp Files</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1931016548256"><a name="p1931016548256"></a><a name="p1931016548256"></a>Number of temporary files created by queries in this database.</p>
</td>
</tr>
<tr id="row14673122518255"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1031035482512"><a name="p1031035482512"></a><a name="p1031035482512"></a>Temp Bytes</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p43101054172510"><a name="p43101054172510"></a><a name="p43101054172510"></a>Total amount of data written to temporary files by queries in this database.</p>
</td>
</tr>
<tr id="row879314172519"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p144421511263"><a name="p144421511263"></a><a name="p144421511263"></a>Deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p844241142613"><a name="p844241142613"></a><a name="p844241142613"></a>Number of deadlocks detected in this database.</p>
</td>
</tr>
<tr id="row0875134313254"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p9442171112612"><a name="p9442171112612"></a><a name="p9442171112612"></a>Blk Read Time</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p174422182619"><a name="p174422182619"></a><a name="p174422182619"></a>Time spent reading data file blocks by backends in this database (unit: ms).</p>
</td>
</tr>
<tr id="row198061645112515"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p204420162614"><a name="p204420162614"></a><a name="p204420162614"></a>Blk Write Time</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1344251192617"><a name="p1344251192617"></a><a name="p1344251192617"></a>Time spent writing into data file blocks by backends in this database (unit: ms).</p>
</td>
</tr>
<tr id="row4723104742515"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p184421132616"><a name="p184421132616"></a><a name="p184421132616"></a>Stats Reset</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p194425152620"><a name="p194425152620"></a><a name="p194425152620"></a>Time at which the current statistics were reset.</p>
</td>
</tr>
</tbody>
</table>

