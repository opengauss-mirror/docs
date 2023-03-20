# STATEMENT\_HISTORY<a name="ZH-CN_TOPIC_0301824804"></a>

获得当前节点的执行语句的信息。查询系统表必须具有sysadmin权限。只可在系统库中查询到结果，用户库中无法查询。

对于此系统表查询有如下约束：

-   必须在postgres库内查询，其它库中不存数据。
-   此系统表受track\_stmt\_stat\_level控制，默认为“OFF,L0”，第一部分控制Full SQL，第二部分控制Slow SQL，具体字段记录级别见下表。考虑性能影响，更改该参数的值时建议通过set方式设置，使该参数仅对当前会话生效。
-   对于Slow SQL，当track\_stmt\_stat\_level的值为非OFF时，且SQL执行时间超过log\_min\_duration\_statement，会记录为慢SQL。
对于存储过程内的SQL语句(parent_unique_sql_id非0)，n_soft_parse、n_hard_parse、n_returned_rows需要设置参数instr_unique_sql_track_type为all才能记录，n_tuples_fetched、n_tuples_returned、n_tuples_inserted、n_tuples_updated、n_tuples_deleted、n_blocks_fetched、n_blocks_hit、db_time、pu_time、execution_time、parse_time、plan_time、rewrite_time、pl_execution_time、pl_compilation_time、data_io_time、net_send_info、net_recv_info、net_stream_send_info、net_stream_recv_info、lock_wait_count、lock_wait_time、lwlock_count、lwlock_wait_count、lwlock_ti、lwlock_wait_time、details、trace_id、advise列不支持，记录的值没有实际意义。

**表 1**  STATEMENT\_HISTORY字段

<a name="table949020817280"></a>
<table><thead align="left"><tr id="row44901885283"><th class="cellrowborder" valign="top" width="20.46795320467953%" id="mcps1.2.5.1.1"><p id="p204912089289"><a name="p204912089289"></a><a name="p204912089289"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.998000199980005%" id="mcps1.2.5.1.2"><p id="p17491108122820"><a name="p17491108122820"></a><a name="p17491108122820"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="49.05509449055094%" id="mcps1.2.5.1.3"><p id="p13491282281"><a name="p13491282281"></a><a name="p13491282281"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="10.47895210478952%" id="mcps1.2.5.1.4"><p id="p1528612136307"><a name="p1528612136307"></a><a name="p1528612136307"></a>记录级别</p>
</th>
</tr>
</thead>
<tbody><tr id="row16491158192819"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1149178122814"><a name="p1149178122814"></a><a name="p1149178122814"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p124911782289"><a name="p124911782289"></a><a name="p124911782289"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p1445326163513"><a name="p1445326163513"></a><a name="p1445326163513"></a>数据库名称。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p028618138308"><a name="p028618138308"></a><a name="p028618138308"></a>L0</p>
</td>
</tr>
<tr id="row14915892817"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p174910812286"><a name="p174910812286"></a><a name="p174910812286"></a>schema_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1949128172817"><a name="p1949128172817"></a><a name="p1949128172817"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p164911589285"><a name="p164911589285"></a><a name="p164911589285"></a>schema名称。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1328616134303"><a name="p1328616134303"></a><a name="p1328616134303"></a>L0</p>
</td>
</tr>
<tr id="row749113817286"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1749115882810"><a name="p1749115882810"></a><a name="p1749115882810"></a>origin_node</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p449148162820"><a name="p449148162820"></a><a name="p449148162820"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p16491108182819"><a name="p16491108182819"></a><a name="p16491108182819"></a>节点名称。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p19286111393017"><a name="p19286111393017"></a><a name="p19286111393017"></a>L0</p>
</td>
</tr>
<tr id="row649168132810"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p44917817289"><a name="p44917817289"></a><a name="p44917817289"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p194912810285"><a name="p194912810285"></a><a name="p194912810285"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p134914811289"><a name="p134914811289"></a><a name="p134914811289"></a>用户名。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p9286161313016"><a name="p9286161313016"></a><a name="p9286161313016"></a>L0</p>
</td>
</tr>
<tr id="row249116815283"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p165338590242"><a name="p165338590242"></a><a name="p165338590242"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p195321859102416"><a name="p195321859102416"></a><a name="p195321859102416"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p105321759202415"><a name="p105321759202415"></a><a name="p105321759202415"></a>用户发起的请求的应用程序名称。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1528671363015"><a name="p1528671363015"></a><a name="p1528671363015"></a>L0</p>
</td>
</tr>
<tr id="row7491288288"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1353125916241"><a name="p1353125916241"></a><a name="p1353125916241"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p14530125919243"><a name="p14530125919243"></a><a name="p14530125919243"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p153025992418"><a name="p153025992418"></a><a name="p153025992418"></a>用户发起的请求的客户端地址。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p0286181333019"><a name="p0286181333019"></a><a name="p0286181333019"></a>L0</p>
</td>
</tr>
<tr id="row1749158112812"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1652975902410"><a name="p1652975902410"></a><a name="p1652975902410"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p2529859102410"><a name="p2529859102410"></a><a name="p2529859102410"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p252865911245"><a name="p252865911245"></a><a name="p252865911245"></a>用户发起的请求的客户端端口。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p132861413123018"><a name="p132861413123018"></a><a name="p132861413123018"></a>L0</p>
</td>
</tr>
<tr id="row148912328303"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p452716597243"><a name="p452716597243"></a><a name="p452716597243"></a>unique_query_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p115271059112417"><a name="p115271059112417"></a><a name="p115271059112417"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p1752618596243"><a name="p1752618596243"></a><a name="p1752618596243"></a>归一化SQL ID。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1528631383020"><a name="p1528631383020"></a><a name="p1528631383020"></a>L0</p>
</td>
</tr>
<tr id="row3770204193018"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p3525059192414"><a name="p3525059192414"></a><a name="p3525059192414"></a>debug_query_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p19525195982418"><a name="p19525195982418"></a><a name="p19525195982418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p9524359162416"><a name="p9524359162416"></a><a name="p9524359162416"></a>唯一SQL ID。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p10286101318302"><a name="p10286101318302"></a><a name="p10286101318302"></a>L0</p>
</td>
</tr>
<tr id="row1024411583535"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p124416583539"><a name="p124416583539"></a><a name="p124416583539"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p024495835312"><a name="p024495835312"></a><a name="p024495835312"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p192447585532"><a name="p192447585532"></a><a name="p192447585532"></a>归一化SQL。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1428681313019"><a name="p1428681313019"></a><a name="p1428681313019"></a>L0</p>
</td>
</tr>
<tr id="row3114174743016"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p10523459142411"><a name="p10523459142411"></a><a name="p10523459142411"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1752305914246"><a name="p1752305914246"></a><a name="p1752305914246"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p952265920244"><a name="p952265920244"></a><a name="p952265920244"></a>语句启动的时间。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p0286151314305"><a name="p0286151314305"></a><a name="p0286151314305"></a>L0</p>
</td>
</tr>
<tr id="row769485863017"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p155224594242"><a name="p155224594242"></a><a name="p155224594242"></a>finish_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p752117599242"><a name="p752117599242"></a><a name="p752117599242"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p1952065952411"><a name="p1952065952411"></a><a name="p1952065952411"></a>语句结束的时间。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p17286201317309"><a name="p17286201317309"></a><a name="p17286201317309"></a>L0</p>
</td>
</tr>
<tr id="row254515130314"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1752095917241"><a name="p1752095917241"></a><a name="p1752095917241"></a>slow_sql_threshold</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p185191059122416"><a name="p185191059122416"></a><a name="p185191059122416"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p35181759122420"><a name="p35181759122420"></a><a name="p35181759122420"></a>语句执行时慢SQL的标准。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p11286171373011"><a name="p11286171373011"></a><a name="p11286171373011"></a>L0</p>
</td>
</tr>
<tr id="row4589123123110"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p4518559182412"><a name="p4518559182412"></a><a name="p4518559182412"></a>transaction_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p5517185952411"><a name="p5517185952411"></a><a name="p5517185952411"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p2517125922414"><a name="p2517125922414"></a><a name="p2517125922414"></a>事务ID。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p928621319302"><a name="p928621319302"></a><a name="p928621319302"></a>L0</p>
</td>
</tr>
<tr id="row858902319313"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p15516145982414"><a name="p15516145982414"></a><a name="p15516145982414"></a>thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p20515659162415"><a name="p20515659162415"></a><a name="p20515659162415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p55151659102410"><a name="p55151659102410"></a><a name="p55151659102410"></a>执行线程ID。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1428651323019"><a name="p1428651323019"></a><a name="p1428651323019"></a>L0</p>
</td>
</tr>
<tr id="row358810234313"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1251416594243"><a name="p1251416594243"></a><a name="p1251416594243"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p205131359172418"><a name="p205131359172418"></a><a name="p205131359172418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p185131159202420"><a name="p185131159202420"></a><a name="p185131159202420"></a>用户session id。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p12286813103010"><a name="p12286813103010"></a><a name="p12286813103010"></a>L0</p>
</td>
</tr>
<tr id="row1858812314315"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p35121459142416"><a name="p35121459142416"></a><a name="p35121459142416"></a>n_soft_parse</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p105113599242"><a name="p105113599242"></a><a name="p105113599242"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p172795294391"><a name="p172795294391"></a><a name="p172795294391"></a>软解析次数，n_soft_parse + n_hard_parse可能大于n_calls，因为子查询未计入n_calls。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1286161310302"><a name="p1286161310302"></a><a name="p1286161310302"></a>L0</p>
</td>
</tr>
<tr id="row13775115215319"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p135106596249"><a name="p135106596249"></a><a name="p135106596249"></a>n_hard_parse</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p951015915249"><a name="p951015915249"></a><a name="p951015915249"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p18230133983919"><a name="p18230133983919"></a><a name="p18230133983919"></a>硬解析次数，n_soft_parse + n_hard_parse可能大于n_calls，因为子查询未计入n_calls。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p3286181310305"><a name="p3286181310305"></a><a name="p3286181310305"></a>L0</p>
</td>
</tr>
<tr id="row877515216319"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p135081059162412"><a name="p135081059162412"></a><a name="p135081059162412"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p18508185911243"><a name="p18508185911243"></a><a name="p18508185911243"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p150795912247"><a name="p150795912247"></a><a name="p150795912247"></a>语句执行计划。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1328731383018"><a name="p1328731383018"></a><a name="p1328731383018"></a>L1</p>
</td>
</tr>
<tr id="row17775052123118"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1250610593248"><a name="p1250610593248"></a><a name="p1250610593248"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1150610599240"><a name="p1150610599240"></a><a name="p1150610599240"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p19505155942415"><a name="p19505155942415"></a><a name="p19505155942415"></a>SELECT返回的结果集行数。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1628716136303"><a name="p1628716136303"></a><a name="p1628716136303"></a>L0</p>
</td>
</tr>
<tr id="row1977515273114"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p45042059132410"><a name="p45042059132410"></a><a name="p45042059132410"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1450495913244"><a name="p1450495913244"></a><a name="p1450495913244"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p19503195917240"><a name="p19503195917240"></a><a name="p19503195917240"></a>随机扫描行。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p42877136308"><a name="p42877136308"></a><a name="p42877136308"></a>L0</p>
</td>
</tr>
<tr id="row1677535213111"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p250235912413"><a name="p250235912413"></a><a name="p250235912413"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p185021959192418"><a name="p185021959192418"></a><a name="p185021959192418"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p350120599248"><a name="p350120599248"></a><a name="p350120599248"></a>顺序扫描行。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p8287413143018"><a name="p8287413143018"></a><a name="p8287413143018"></a>L0</p>
</td>
</tr>
<tr id="row777417524311"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p16500195992414"><a name="p16500195992414"></a><a name="p16500195992414"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1150019594246"><a name="p1150019594246"></a><a name="p1150019594246"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p948105916244"><a name="p948105916244"></a><a name="p948105916244"></a>插入行。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p22871135302"><a name="p22871135302"></a><a name="p22871135302"></a>L0</p>
</td>
</tr>
<tr id="row677415293112"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p2498222251"><a name="p2498222251"></a><a name="p2498222251"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p749722192515"><a name="p749722192515"></a><a name="p749722192515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p549713212254"><a name="p549713212254"></a><a name="p549713212254"></a>更新行。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p628721314301"><a name="p628721314301"></a><a name="p628721314301"></a>L0</p>
</td>
</tr>
<tr id="row1774185218312"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p749611272519"><a name="p749611272519"></a><a name="p749611272519"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p349513202519"><a name="p349513202519"></a><a name="p349513202519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p17495923250"><a name="p17495923250"></a><a name="p17495923250"></a>删除行。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p4287111343014"><a name="p4287111343014"></a><a name="p4287111343014"></a>L0</p>
</td>
</tr>
<tr id="row277420523319"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p94943242512"><a name="p94943242512"></a><a name="p94943242512"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p749317222510"><a name="p749317222510"></a><a name="p749317222510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p449282182511"><a name="p449282182511"></a><a name="p449282182511"></a>buffer的块访问次数。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p5287131333016"><a name="p5287131333016"></a><a name="p5287131333016"></a>L0</p>
</td>
</tr>
<tr id="row57742052153113"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p749211282517"><a name="p749211282517"></a><a name="p749211282517"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p849132102510"><a name="p849132102510"></a><a name="p849132102510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p749012242515"><a name="p749012242515"></a><a name="p749012242515"></a>buffer的块命中次数。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p82871813143014"><a name="p82871813143014"></a><a name="p82871813143014"></a>L0</p>
</td>
</tr>
<tr id="row777455214319"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p184893272519"><a name="p184893272519"></a><a name="p184893272519"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p24891427257"><a name="p24891427257"></a><a name="p24891427257"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p1771542215411"><a name="p1771542215411"></a><a name="p1771542215411"></a>有效的DB时间花费，多线程将累加（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p14287131318305"><a name="p14287131318305"></a><a name="p14287131318305"></a>L0</p>
</td>
</tr>
<tr id="row197745525319"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1448713252518"><a name="p1448713252518"></a><a name="p1448713252518"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p15486922257"><a name="p15486922257"></a><a name="p15486922257"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p948622132512"><a name="p948622132512"></a><a name="p948622132512"></a>CPU时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p182871113103018"><a name="p182871113103018"></a><a name="p182871113103018"></a>L0</p>
</td>
</tr>
<tr id="row7761050202716"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p14761650132718"><a name="p14761650132718"></a><a name="p14761650132718"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1276125014277"><a name="p1276125014277"></a><a name="p1276125014277"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p1976118507270"><a name="p1976118507270"></a><a name="p1976118507270"></a>执行器内执行时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p18287213183013"><a name="p18287213183013"></a><a name="p18287213183013"></a>L0</p>
</td>
</tr>
<tr id="row96551157152710"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p765618575270"><a name="p765618575270"></a><a name="p765618575270"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p3656185752712"><a name="p3656185752712"></a><a name="p3656185752712"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p106561157142716"><a name="p106561157142716"></a><a name="p106561157142716"></a>SQL解析时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p6287161319308"><a name="p6287161319308"></a><a name="p6287161319308"></a>L0</p>
</td>
</tr>
<tr id="row386316372814"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p98641331289"><a name="p98641331289"></a><a name="p98641331289"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1686416312283"><a name="p1686416312283"></a><a name="p1686416312283"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p198640320288"><a name="p198640320288"></a><a name="p198640320288"></a>SQL生成计划时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p728751313307"><a name="p728751313307"></a><a name="p728751313307"></a>L0</p>
</td>
</tr>
<tr id="row1236810134287"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p12368141313288"><a name="p12368141313288"></a><a name="p12368141313288"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p143681413202810"><a name="p143681413202810"></a><a name="p143681413202810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p936861372810"><a name="p936861372810"></a><a name="p936861372810"></a>SQL重写时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1287191312304"><a name="p1287191312304"></a><a name="p1287191312304"></a>L0</p>
</td>
</tr>
<tr id="row1831252022816"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p14312102010285"><a name="p14312102010285"></a><a name="p14312102010285"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p63121020102811"><a name="p63121020102811"></a><a name="p63121020102811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p33121020172816"><a name="p33121020172816"></a><a name="p33121020172816"></a>plpgsql上的执行时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p128731312309"><a name="p128731312309"></a><a name="p128731312309"></a>L0</p>
</td>
</tr>
<tr id="row12287162622811"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p18287182642811"><a name="p18287182642811"></a><a name="p18287182642811"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1428782692815"><a name="p1428782692815"></a><a name="p1428782692815"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p628712617287"><a name="p628712617287"></a><a name="p628712617287"></a>plpgsql上的编译时间（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p102871113163013"><a name="p102871113163013"></a><a name="p102871113163013"></a>L0</p>
</td>
</tr>
<tr id="row9895133272810"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p12895193212813"><a name="p12895193212813"></a><a name="p12895193212813"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p6895103242810"><a name="p6895103242810"></a><a name="p6895103242810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p10895203212289"><a name="p10895203212289"></a><a name="p10895203212289"></a>IO上的时间花费（单位：微秒）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p1287181383013"><a name="p1287181383013"></a><a name="p1287181383013"></a>L0</p>
</td>
</tr>
<tr id="row19021825295"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p790215242915"><a name="p790215242915"></a><a name="p790215242915"></a>net_send_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p19022242917"><a name="p19022242917"></a><a name="p19022242917"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p166675265421"><a name="p166675265421"></a><a name="p166675265421"></a>通过物理连接发送消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p202871513143012"><a name="p202871513143012"></a><a name="p202871513143012"></a>L0</p>
</td>
</tr>
<tr id="row1597621252919"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p129761512172910"><a name="p129761512172910"></a><a name="p129761512172910"></a>net_recv_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p19976131232915"><a name="p19976131232915"></a><a name="p19976131232915"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p16967114513427"><a name="p16967114513427"></a><a name="p16967114513427"></a>通过物理连接接收消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p15287413123014"><a name="p15287413123014"></a><a name="p15287413123014"></a>L0</p>
</td>
</tr>
<tr id="row2051215917299"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p2051269132917"><a name="p2051269132917"></a><a name="p2051269132917"></a>net_stream_send_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1451215911291"><a name="p1451215911291"></a><a name="p1451215911291"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p695315818427"><a name="p695315818427"></a><a name="p695315818427"></a>通过逻辑连接发送消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p192871113113013"><a name="p192871113113013"></a><a name="p192871113113013"></a>L0</p>
</td>
</tr>
<tr id="row1978203162913"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p167818317296"><a name="p167818317296"></a><a name="p167818317296"></a>net_stream_recv_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1578173110298"><a name="p1578173110298"></a><a name="p1578173110298"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p292014112436"><a name="p292014112436"></a><a name="p292014112436"></a>通过逻辑连接接收消息的网络状态，包含时间（微秒）、调用次数、吞吐量（字节）。通过该字段可以分析SQL在分布式系统下的网络开销，单机模式下不支持该字段。例如：{"time":xxx, "n_calls":xxx, "size":xxx}。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p5287131303020"><a name="p5287131303020"></a><a name="p5287131303020"></a>L0</p>
</td>
</tr>
<tr id="row15401123892910"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p154011138192918"><a name="p154011138192918"></a><a name="p154011138192918"></a>lock_count</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1440123818299"><a name="p1440123818299"></a><a name="p1440123818299"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p840113386291"><a name="p840113386291"></a><a name="p840113386291"></a>加锁次数。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p16287141393017"><a name="p16287141393017"></a><a name="p16287141393017"></a>L0</p>
</td>
</tr>
<tr id="row17958944152917"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p19958204410298"><a name="p19958204410298"></a><a name="p19958204410298"></a>lock_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p69582044122918"><a name="p69582044122918"></a><a name="p69582044122918"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p12958344142919"><a name="p12958344142919"></a><a name="p12958344142919"></a>加锁耗时。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p428713136307"><a name="p428713136307"></a><a name="p428713136307"></a>L1</p>
</td>
</tr>
<tr id="row4438148112918"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1043884818295"><a name="p1043884818295"></a><a name="p1043884818295"></a>lock_wait_count</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1743816482294"><a name="p1743816482294"></a><a name="p1743816482294"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p11438144832911"><a name="p11438144832911"></a><a name="p11438144832911"></a>加锁等待次数。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p7287141313019"><a name="p7287141313019"></a><a name="p7287141313019"></a>L0</p>
</td>
</tr>
<tr id="row12165137203010"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p01662710309"><a name="p01662710309"></a><a name="p01662710309"></a>lock_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p11166379302"><a name="p11166379302"></a><a name="p11166379302"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p2016677173010"><a name="p2016677173010"></a><a name="p2016677173010"></a>加锁等待耗时。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p228791343012"><a name="p228791343012"></a><a name="p228791343012"></a>L1</p>
</td>
</tr>
<tr id="row1594391063014"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p139437103309"><a name="p139437103309"></a><a name="p139437103309"></a>lock_max_count</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p3943910163018"><a name="p3943910163018"></a><a name="p3943910163018"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p394311015303"><a name="p394311015303"></a><a name="p394311015303"></a>最大持锁数量。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p228761311308"><a name="p228761311308"></a><a name="p228761311308"></a>L0</p>
</td>
</tr>
<tr id="row15933436143016"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p199331936153019"><a name="p199331936153019"></a><a name="p199331936153019"></a>lwlock_count</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p5933183683016"><a name="p5933183683016"></a><a name="p5933183683016"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p893393612304"><a name="p893393612304"></a><a name="p893393612304"></a>轻量级加锁次数（预留）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p02879138309"><a name="p02879138309"></a><a name="p02879138309"></a>L0</p>
</td>
</tr>
<tr id="row92451440133019"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p624512407308"><a name="p624512407308"></a><a name="p624512407308"></a>lwlock_wait_count</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p1024613403300"><a name="p1024613403300"></a><a name="p1024613403300"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p162462407306"><a name="p162462407306"></a><a name="p162462407306"></a>轻量级等锁次数。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p0288161316307"><a name="p0288161316307"></a><a name="p0288161316307"></a>L0</p>
</td>
</tr>
<tr id="row10701104318302"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1470184333016"><a name="p1470184333016"></a><a name="p1470184333016"></a>lwlock_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p870104318305"><a name="p870104318305"></a><a name="p870104318305"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p17701543103012"><a name="p17701543103012"></a><a name="p17701543103012"></a>轻量级加锁时间（预留）。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p17288111343017"><a name="p17288111343017"></a><a name="p17288111343017"></a>L1</p>
</td>
</tr>
<tr id="row551915663018"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p25199565301"><a name="p25199565301"></a><a name="p25199565301"></a>lwlock_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p8519145615307"><a name="p8519145615307"></a><a name="p8519145615307"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p195190563305"><a name="p195190563305"></a><a name="p195190563305"></a>轻量级等锁时间。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p628881320304"><a name="p628881320304"></a><a name="p628881320304"></a>L1</p>
</td>
</tr>
<tr id="row1139711323112"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p73972034315"><a name="p73972034315"></a><a name="p73972034315"></a>details</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p339717319319"><a name="p339717319319"></a><a name="p339717319319"></a>bytea</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p43971231315"><a name="p43971231315"></a><a name="p43971231315"></a>等待事件和语句锁事件的列表。</p><p id="p43971231315"><a name="p43971231315"></a><a name="p43971231315"></a>记录级别的值是L0时，开始记录等待事件的列表。显示当前语句event等待相关的统计信息。具体事件信息见<a href="PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4">等待状态列表</a>、<a href="PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table38811324183420">轻量级锁等待事件列表</a>、<a href="PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table124603113369">IO等待事件列表</a>和<a href="PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table11826123533718">事务锁等待事件列表</a>。关于每种事务锁对业务的影响程度，请参考<a href="LOCK-1.md">LOCK</a>语法小节的详细描述。</p><p id="p43971231315"><a name="p43971231315"></a><a name="p43971231315"></a>记录级别的值是L2时，开始记录语句锁事件的列表。该列表按时间顺序记录事件，记录的数量受参数track_stmt_details_size的影响。该字段为二进制，需要借助解析函数pg_catalog.statement_detail_decode读取，见（<a href="其它函数.md#table9745177191215">表6</a>）。</p>
<p id="p206443813496"><a name="p206443813496"></a><a name="p206443813496"></a>事件包括：</p>
<a name="ul1619215224171"></a><a name="ul1619215224171"></a><ul id="ul1619215224171"><li>加锁开始</li><li>加锁结束</li><li>等锁开始</li><li>等锁结束</li><li>放锁开始</li><li>放锁结束</li><li>轻量级等锁开始</li><li>轻量级等锁结束</li></ul>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p162884132309"><a name="p162884132309"></a><a name="p162884132309"></a>L0</p>
</td>
</tr>
<tr id="row1146417610552"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p174641163550"><a name="p174641163550"></a><a name="p174641163550"></a>is_slow_sql</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p44649617558"><a name="p44649617558"></a><a name="p44649617558"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p13464660559"><a name="p13464660559"></a><a name="p13464660559"></a>该SQL是否为slow SQL。</p>
<a name="ul21561963304"></a><a name="ul21561963304"></a><ul id="ul21561963304"><li>t（true）：表示是。</li><li>f（false）：表示不是。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p17288713183018"><a name="p17288713183018"></a><a name="p17288713183018"></a>L0</p>
</td>
</tr>
<tr id="row16949138161715"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1895014383177"><a name="p1895014383177"></a><a name="p1895014383177"></a>trace_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p13950113891718"><a name="p13950113891718"></a><a name="p13950113891718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p4950638101710"><a name="p4950638101710"></a><a name="p4950638101710"></a>驱动传入的trace id，与应用的一次请求相关联。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p3950193841719"><a name="p3950193841719"></a><a name="p3950193841719"></a>L0</p>
</td>
</tr>
<tr id="row16949138161715"><td class="cellrowborder" valign="top" width="20.46795320467953%" headers="mcps1.2.5.1.1 "><p id="p1895014383177"><a name="p1895014383177"></a><a name="p1895014383177"></a>advise text</p>
</td>
<td class="cellrowborder" valign="top" width="19.998000199980005%" headers="mcps1.2.5.1.2 "><p id="p13950113891718"><a name="p13950113891718"></a><a name="p13950113891718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.05509449055094%" headers="mcps1.2.5.1.3 "><p id="p4950638101710"><a name="p4950638101710"></a><a name="p4950638101710"></a>可能导致该SQL为slow SQL的风险信息。</p>
</td>
<td class="cellrowborder" valign="top" width="10.47895210478952%" headers="mcps1.2.5.1.4 "><p id="p3950193841719"><a name="p3950193841719"></a><a name="p3950193841719"></a>L0</p>
</td>
</tr>
</tbody>
</table>

