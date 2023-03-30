# STAT\_DATABASE<a name="ZH-CN_TOPIC_0245374698"></a>

视图将包含本节点中每个数据库的统计信息。

**表 1**  STAT\_DATABASE字段

<a name="zh-cn_topic_0237122594_table1984711557512"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122594_row438656135111"><th class="cellrowborder" valign="top" width="17.270000000000003%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122594_p63820563515"><a name="zh-cn_topic_0237122594_p63820563515"></a><a name="zh-cn_topic_0237122594_p63820563515"></a><strong id="zh-cn_topic_0237122594_b1838195695120"><a name="zh-cn_topic_0237122594_b1838195695120"></a><a name="zh-cn_topic_0237122594_b1838195695120"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.830000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122594_p12381956185118"><a name="zh-cn_topic_0237122594_p12381956185118"></a><a name="zh-cn_topic_0237122594_p12381956185118"></a><strong id="zh-cn_topic_0237122594_b83914567510"><a name="zh-cn_topic_0237122594_b83914567510"></a><a name="zh-cn_topic_0237122594_b83914567510"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="56.900000000000006%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122594_p1239356135115"><a name="zh-cn_topic_0237122594_p1239356135115"></a><a name="zh-cn_topic_0237122594_p1239356135115"></a><strong id="zh-cn_topic_0237122594_b1039165685116"><a name="zh-cn_topic_0237122594_b1039165685116"></a><a name="zh-cn_topic_0237122594_b1039165685116"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122594_row10391656175113"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p13935635118"><a name="zh-cn_topic_0237122594_p13935635118"></a><a name="zh-cn_topic_0237122594_p13935635118"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p163985605115"><a name="zh-cn_topic_0237122594_p163985605115"></a><a name="zh-cn_topic_0237122594_p163985605115"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p1139156155111"><a name="zh-cn_topic_0237122594_p1139156155111"></a><a name="zh-cn_topic_0237122594_p1139156155111"></a>数据库的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row1140155645117"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p84045655117"><a name="zh-cn_topic_0237122594_p84045655117"></a><a name="zh-cn_topic_0237122594_p84045655117"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p740175620510"><a name="zh-cn_topic_0237122594_p740175620510"></a><a name="zh-cn_topic_0237122594_p740175620510"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p12403569514"><a name="zh-cn_topic_0237122594_p12403569514"></a><a name="zh-cn_topic_0237122594_p12403569514"></a>此数据库的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row240165616517"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p16405564519"><a name="zh-cn_topic_0237122594_p16405564519"></a><a name="zh-cn_topic_0237122594_p16405564519"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p0404569513"><a name="zh-cn_topic_0237122594_p0404569513"></a><a name="zh-cn_topic_0237122594_p0404569513"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p440956185113"><a name="zh-cn_topic_0237122594_p440956185113"></a><a name="zh-cn_topic_0237122594_p440956185113"></a>当前连接到该数据库的后端数。这是在返回一个反映目前状态值的视图中唯一的列；自上次重置所有其他列返回累积值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row184010560516"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p4401556115111"><a name="zh-cn_topic_0237122594_p4401556115111"></a><a name="zh-cn_topic_0237122594_p4401556115111"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p1740105605114"><a name="zh-cn_topic_0237122594_p1740105605114"></a><a name="zh-cn_topic_0237122594_p1740105605114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p154175611519"><a name="zh-cn_topic_0237122594_p154175611519"></a><a name="zh-cn_topic_0237122594_p154175611519"></a>此数据库中已经提交的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row144185645115"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p11411756175119"><a name="zh-cn_topic_0237122594_p11411756175119"></a><a name="zh-cn_topic_0237122594_p11411756175119"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p041135615114"><a name="zh-cn_topic_0237122594_p041135615114"></a><a name="zh-cn_topic_0237122594_p041135615114"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p19418563519"><a name="zh-cn_topic_0237122594_p19418563519"></a><a name="zh-cn_topic_0237122594_p19418563519"></a>此数据库中已经回滚的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row134118564517"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p1341205685113"><a name="zh-cn_topic_0237122594_p1341205685113"></a><a name="zh-cn_topic_0237122594_p1341205685113"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p12412056125118"><a name="zh-cn_topic_0237122594_p12412056125118"></a><a name="zh-cn_topic_0237122594_p12412056125118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p14175616516"><a name="zh-cn_topic_0237122594_p14175616516"></a><a name="zh-cn_topic_0237122594_p14175616516"></a>在这个数据库中读取的磁盘块的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row541115695118"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p84245611511"><a name="zh-cn_topic_0237122594_p84245611511"></a><a name="zh-cn_topic_0237122594_p84245611511"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p1042256195119"><a name="zh-cn_topic_0237122594_p1042256195119"></a><a name="zh-cn_topic_0237122594_p1042256195119"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p24211562513"><a name="zh-cn_topic_0237122594_p24211562513"></a><a name="zh-cn_topic_0237122594_p24211562513"></a>高速缓存中已经发现的磁盘块的次数，这样读取是不必要的（这只包括PostgreSQL缓冲区高速缓存，没有操作系统的文件系统缓存）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row942195620511"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p9425566512"><a name="zh-cn_topic_0237122594_p9425566512"></a><a name="zh-cn_topic_0237122594_p9425566512"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p842205616511"><a name="zh-cn_topic_0237122594_p842205616511"></a><a name="zh-cn_topic_0237122594_p842205616511"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p1343105619512"><a name="zh-cn_topic_0237122594_p1343105619512"></a><a name="zh-cn_topic_0237122594_p1343105619512"></a>通过数据库查询返回的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row12431456145116"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p643175665117"><a name="zh-cn_topic_0237122594_p643175665117"></a><a name="zh-cn_topic_0237122594_p643175665117"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p143556115112"><a name="zh-cn_topic_0237122594_p143556115112"></a><a name="zh-cn_topic_0237122594_p143556115112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p1443256185117"><a name="zh-cn_topic_0237122594_p1443256185117"></a><a name="zh-cn_topic_0237122594_p1443256185117"></a>通过数据库查询抓取的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row144056105111"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p644185665117"><a name="zh-cn_topic_0237122594_p644185665117"></a><a name="zh-cn_topic_0237122594_p644185665117"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p84417568517"><a name="zh-cn_topic_0237122594_p84417568517"></a><a name="zh-cn_topic_0237122594_p84417568517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p1441856185110"><a name="zh-cn_topic_0237122594_p1441856185110"></a><a name="zh-cn_topic_0237122594_p1441856185110"></a>通过数据库查询插入的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row5440567511"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p2441456125110"><a name="zh-cn_topic_0237122594_p2441456125110"></a><a name="zh-cn_topic_0237122594_p2441456125110"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p184485645113"><a name="zh-cn_topic_0237122594_p184485645113"></a><a name="zh-cn_topic_0237122594_p184485645113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p10451656185113"><a name="zh-cn_topic_0237122594_p10451656185113"></a><a name="zh-cn_topic_0237122594_p10451656185113"></a>通过数据库查询更新的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row1145956105117"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p194515562512"><a name="zh-cn_topic_0237122594_p194515562512"></a><a name="zh-cn_topic_0237122594_p194515562512"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p114512561516"><a name="zh-cn_topic_0237122594_p114512561516"></a><a name="zh-cn_topic_0237122594_p114512561516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p845656135120"><a name="zh-cn_topic_0237122594_p845656135120"></a><a name="zh-cn_topic_0237122594_p845656135120"></a>通过数据库查询删除的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row2045656195119"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p1145356145111"><a name="zh-cn_topic_0237122594_p1145356145111"></a><a name="zh-cn_topic_0237122594_p1145356145111"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p194620565518"><a name="zh-cn_topic_0237122594_p194620565518"></a><a name="zh-cn_topic_0237122594_p194620565518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p44619562518"><a name="zh-cn_topic_0237122594_p44619562518"></a><a name="zh-cn_topic_0237122594_p44619562518"></a>由于数据库恢复冲突取消的查询数量（只在备用服务器发生的冲突）。请参见<a href="STAT_DATABASE_CONFLICTS.md">STAT_DATABASE_CONFLICTS</a>获取更多信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row12467561514"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p1746856105116"><a name="zh-cn_topic_0237122594_p1746856105116"></a><a name="zh-cn_topic_0237122594_p1746856105116"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p1646185675113"><a name="zh-cn_topic_0237122594_p1646185675113"></a><a name="zh-cn_topic_0237122594_p1646185675113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p146145617514"><a name="zh-cn_topic_0237122594_p146145617514"></a><a name="zh-cn_topic_0237122594_p146145617514"></a>通过数据库查询创建的临时文件数量。计算所有临时文件，不论为什么创建临时文件（比如排序或者哈希），而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row114655614518"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p15472569517"><a name="zh-cn_topic_0237122594_p15472569517"></a><a name="zh-cn_topic_0237122594_p15472569517"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p12471556195113"><a name="zh-cn_topic_0237122594_p12471556195113"></a><a name="zh-cn_topic_0237122594_p12471556195113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p17478565516"><a name="zh-cn_topic_0237122594_p17478565516"></a><a name="zh-cn_topic_0237122594_p17478565516"></a>通过数据库查询写入临时文件的数据总量。计算所有临时文件，不论为什么创建临时文件，而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row74715619513"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p947135625113"><a name="zh-cn_topic_0237122594_p947135625113"></a><a name="zh-cn_topic_0237122594_p947135625113"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p147656105110"><a name="zh-cn_topic_0237122594_p147656105110"></a><a name="zh-cn_topic_0237122594_p147656105110"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p13471556155114"><a name="zh-cn_topic_0237122594_p13471556155114"></a><a name="zh-cn_topic_0237122594_p13471556155114"></a>在该数据库中检索的死锁数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row447165613515"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p174716569511"><a name="zh-cn_topic_0237122594_p174716569511"></a><a name="zh-cn_topic_0237122594_p174716569511"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p2047115605115"><a name="zh-cn_topic_0237122594_p2047115605115"></a><a name="zh-cn_topic_0237122594_p2047115605115"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p548256145118"><a name="zh-cn_topic_0237122594_p548256145118"></a><a name="zh-cn_topic_0237122594_p548256145118"></a>通过数据库后端读取数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row54816568514"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p17481456185117"><a name="zh-cn_topic_0237122594_p17481456185117"></a><a name="zh-cn_topic_0237122594_p17481456185117"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p248125665114"><a name="zh-cn_topic_0237122594_p248125665114"></a><a name="zh-cn_topic_0237122594_p248125665114"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p1248195611517"><a name="zh-cn_topic_0237122594_p1248195611517"></a><a name="zh-cn_topic_0237122594_p1248195611517"></a>通过数据库后端写入数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122594_row24813564513"><td class="cellrowborder" valign="top" width="17.270000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122594_p45025617518"><a name="zh-cn_topic_0237122594_p45025617518"></a><a name="zh-cn_topic_0237122594_p45025617518"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="25.830000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122594_p350145616519"><a name="zh-cn_topic_0237122594_p350145616519"></a><a name="zh-cn_topic_0237122594_p350145616519"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="56.900000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122594_p95045675112"><a name="zh-cn_topic_0237122594_p95045675112"></a><a name="zh-cn_topic_0237122594_p95045675112"></a>重置当前状态统计的时间。</p>
</td>
</tr>
</tbody>
</table>

