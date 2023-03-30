# SUMMARY\_STAT\_DATABASE<a name="ZH-CN_TOPIC_0289900276"></a>

视图将包含数据库内汇聚的每个数据库的每一行，显示数据库统计。

**表 1**  SUMMARY\_STAT\_DATABASE

<a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_table15180120145411"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row9380102549"><th class="cellrowborder" valign="top" width="18.921892189218923%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1238010018540"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1238010018540"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1238010018540"></a><strong id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b93801055412"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b93801055412"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b93801055412"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.602760276027606%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p538014014544"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p538014014544"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p538014014544"></a><strong id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b12380120145419"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b12380120145419"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b12380120145419"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.47534753475347%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1038090195412"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1038090195412"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1038090195412"></a><strong id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b1338070155420"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b1338070155420"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_b1338070155420"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row03804017544"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p238114018542"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p238114018542"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p238114018542"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p16381120175412"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p16381120175412"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p16381120175412"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p143814095420"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p143814095420"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p143814095420"></a>这个数据库的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row203817011541"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1538112015547"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1538112015547"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1538112015547"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p038118015418"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p038118015418"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p038118015418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638113014542"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638113014542"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638113014542"></a>当前连接到该数据库的后端数。这是在返回一个反映目前状态值的视图中唯一的列；自上次重置所有其他列返回累积值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row23819075418"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p17381140135420"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p17381140135420"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p17381140135420"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p93821603543"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p93821603543"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p93821603543"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1838217075419"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1838217075419"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1838217075419"></a>此数据库中已经提交的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row33821002540"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1382100135414"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1382100135414"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1382100135414"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p63828065410"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p63828065410"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p63828065410"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p153821307541"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p153821307541"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p153821307541"></a>此数据库中已经回滚的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row6382607549"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p038212015541"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p038212015541"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p038212015541"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p14382603540"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p14382603540"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p14382603540"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183821604544"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183821604544"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183821604544"></a>在这个数据库中读取的磁盘块的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row238216020547"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183833014545"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183833014545"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183833014545"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p738390125411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p738390125411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p738390125411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p113834017549"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p113834017549"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p113834017549"></a>高速缓存中已经发现的磁盘块的次数，这样读取是不必要的（这只包括openGauss缓冲区高速缓存，没有操作系统的文件系统缓存）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row1238318025415"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p11383140125411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p11383140125411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p11383140125411"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p19383190135419"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p19383190135419"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p19383190135419"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p19383100115411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p19383100115411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p19383100115411"></a>通过数据库查询返回的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row13383170115414"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p938313075411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p938313075411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p938313075411"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p113837015412"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p113837015412"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p113837015412"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638317045416"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638317045416"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638317045416"></a>通过数据库查询抓取的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row3384170135414"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p9384170155419"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p9384170155419"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p9384170155419"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1538419095419"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1538419095419"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1538419095419"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1138416017549"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1138416017549"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1138416017549"></a>通过数据库查询插入的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row16384160195416"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p173840075413"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p173840075413"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p173840075413"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p43843011548"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p43843011548"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p43843011548"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1438411011547"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1438411011547"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1438411011547"></a>通过数据库查询更新的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row193845013546"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p938412035414"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p938412035414"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p938412035414"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p103845017546"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p103845017546"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p103845017546"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p17385100145414"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p17385100145414"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p17385100145414"></a>通过数据库查询删除的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row83851601549"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p12385104548"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p12385104548"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p12385104548"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p163851207541"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p163851207541"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p163851207541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p53851903545"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p53851903545"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p53851903545"></a>由于数据库恢复冲突取消的查询数量（只在备用服务器发生的冲突）。请参见<a href="STAT_DATABASE_CONFLICTS.md">STAT_DATABASE_CONFLICTS</a>获取更多信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row14385140165412"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1738513095411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1738513095411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p1738513095411"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p7385402546"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p7385402546"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p7385402546"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p18385180145413"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p18385180145413"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p18385180145413"></a>通过数据库查询创建的临时文件数量。计算所有临时文件，不论为什么创建临时文件（比如排序或者哈希），而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row138610065411"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p23866012543"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p23866012543"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p23866012543"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p163863075411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p163863075411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p163863075411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638670155417"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638670155417"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638670155417"></a>通过数据库查询写入临时文件的数据总量。计算所有临时文件，不论为什么创建临时文件，而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row1538618055418"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p23868010542"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p23868010542"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p23868010542"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638610105415"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638610105415"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p638610105415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p138612017542"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p138612017542"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p138612017542"></a>在该数据库中检索的死锁数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row53861500546"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p53861201549"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p53861201549"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p53861201549"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183864075412"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183864075412"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p183864075412"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p13878015412"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p13878015412"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p13878015412"></a>通过数据库后端读取数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row538790155417"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p10387160105410"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p10387160105410"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p10387160105410"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p738760125420"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p738760125420"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p738760125420"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p143874016547"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p143874016547"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p143874016547"></a>通过数据库后端写入数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_row5387004547"><td class="cellrowborder" valign="top" width="18.921892189218923%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p838719014549"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p838719014549"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p838719014549"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="27.602760276027606%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p18387100155411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p18387100155411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p18387100155411"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="53.47534753475347%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p11387190115411"><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p11387190115411"></a><a name="zh-cn_topic_0283136739_zh-cn_topic_0237122595_p11387190115411"></a>重置当前状态统计的时间。</p>
</td>
</tr>
</tbody>
</table>

