# GLOBAL\_STAT\_DATABASE<a name="ZH-CN_TOPIC_0289900380"></a>

视图将包含openGauss中各节点的每个数据库的每一行，显示数据库统计。

**表 1**  GLOBAL\_STAT\_DATABASE字段

<a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_table46552469546"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row988418461545"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9884124615548"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9884124615548"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9884124615548"></a><strong id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b1388484612543"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b1388484612543"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b1388484612543"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="28.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1888464625411"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1888464625411"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1888464625411"></a><strong id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b1188494618545"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b1188494618545"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b1188494618545"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="54%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p88849464549"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p88849464549"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p88849464549"></a><strong id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b0884184655420"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b0884184655420"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_b0884184655420"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row188841546175420"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7885144614541"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7885144614541"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7885144614541"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p688520468546"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p688520468546"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p688520468546"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p198861465548"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p198861465548"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p198861465548"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row148866462545"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p588644675416"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p588644675416"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p588644675416"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9886114620544"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9886114620544"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9886114620544"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11886446195413"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11886446195413"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11886446195413"></a>数据库的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row78861446145419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1688619463546"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1688619463546"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1688619463546"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p148861146125413"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p148861146125413"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p148861146125413"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p10886846165411"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p10886846165411"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p10886846165411"></a>这个数据库的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row18886144665420"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p13886154675418"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p13886154675418"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p13886154675418"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9887124613546"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9887124613546"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9887124613546"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1988774616547"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1988774616547"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1988774616547"></a>当前连接到该数据库的后端数。这是在返回一个反映目前状态值的视图中唯一的列；自上次重置所有其他列返回累积值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row1887946105416"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4887114618546"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4887114618546"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4887114618546"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1887144655418"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1887144655418"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1887144655418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1188794619544"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1188794619544"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1188794619544"></a>此数据库中已经提交的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row5887154619542"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p14888174611543"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p14888174611543"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p14888174611543"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p488864616541"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p488864616541"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p488864616541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11888164616549"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11888164616549"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11888164616549"></a>此数据库中已经回滚的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row17888144613540"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p38881461543"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p38881461543"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p38881461543"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1188813460541"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1188813460541"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1188813460541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9889104625418"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9889104625418"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9889104625418"></a>在这个数据库中读取的磁盘块的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row688904615414"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4889174675413"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4889174675413"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4889174675413"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p488918464548"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p488918464548"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p488918464548"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1588944613547"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1588944613547"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1588944613547"></a>高速缓存中已经发现的磁盘块的次数，这样读取是不必要的（这只包括数据库内核缓冲区高速缓存，没有操作系统的文件系统缓存）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row20889194615419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9889134611548"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9889134611548"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9889134611548"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7890164619542"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7890164619542"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7890164619542"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p178901046155417"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p178901046155417"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p178901046155417"></a>通过数据库查询返回的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row15890164620545"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7890164615417"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7890164615417"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7890164615417"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11891184645415"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11891184645415"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p11891184645415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1891104615414"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1891104615414"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1891104615414"></a>通过数据库查询抓取的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row78911946195416"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p18891184618545"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p18891184618545"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p18891184618545"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p789104616544"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p789104616544"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p789104616544"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6891134625414"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6891134625414"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6891134625414"></a>通过数据库查询插入的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row1089194645417"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p5892946115412"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p5892946115412"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p5892946115412"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p98925465542"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p98925465542"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p98925465542"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p689217463545"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p689217463545"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p689217463545"></a>通过数据库查询更新的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row1889216467548"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7892114618540"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7892114618540"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p7892114618540"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9892046165418"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9892046165418"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p9892046165418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p108931446115414"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p108931446115414"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p108931446115414"></a>通过数据库查询删除的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row9893154611543"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p10893174675411"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p10893174675411"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p10893174675411"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p13893134618547"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p13893134618547"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p13893134618547"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6893646205413"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6893646205413"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6893646205413"></a>由于数据库恢复冲突取消的查询数量（只在备用服务器发生的冲突）。请参见<a href="STAT_DATABASE_CONFLICTS.md">STAT_DATABASE_CONFLICTS</a>获取更多信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row2893446125410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p15894154625415"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p15894154625415"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p15894154625415"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1894204617541"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1894204617541"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1894204617541"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p5894104645420"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p5894104645420"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p5894104645420"></a>通过数据库查询创建的临时文件数量。计算所有临时文件，不论为什么创建临时文件（比如排序或者哈希），而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row13894446105413"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p389424665419"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p389424665419"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p389424665419"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6894144612547"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6894144612547"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6894144612547"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p889524612545"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p889524612545"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p889524612545"></a>通过数据库查询写入临时文件的数据总量。计算所有临时文件，不论为什么创建临时文件，而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row58959462541"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4895154675418"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4895154675418"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p4895154675418"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1589504635414"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1589504635414"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1589504635414"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6895124619546"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6895124619546"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p6895124619546"></a>在该数据库中检索的死锁数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row98951546205412"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1089574615545"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1089574615545"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1089574615545"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p178951046105411"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p178951046105411"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p178951046105411"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p16895746125416"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p16895746125416"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p16895746125416"></a>通过数据库后端读取数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row289644605410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p489619462549"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p489619462549"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p489619462549"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p14896646125416"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p14896646125416"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p14896646125416"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p089614468545"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p089614468545"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p089614468545"></a>通过数据库后端写入数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_row1896164685419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p16896144618546"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p16896144618546"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p16896144618546"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p168961646195410"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p168961646195410"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p168961646195410"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1389618467541"><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1389618467541"></a><a name="zh-cn_topic_0283136673_zh-cn_topic_0237122596_p1389618467541"></a>重置当前状态统计的时间。</p>
</td>
</tr>
</tbody>
</table>

