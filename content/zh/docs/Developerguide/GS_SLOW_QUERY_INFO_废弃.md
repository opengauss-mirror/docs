# GS\_SLOW\_QUERY\_INFO（废弃）<a name="ZH-CN_TOPIC_0000001151141798"></a>

GS\_SLOW\_QUERY\_INFO视图显示当前节点上已经转储的慢查询信息。此数据是从内核中转储到系统表中的数据。当设置GUC参数enable\_resource\_record为on时，系统会定时（周期为3分钟）将内核中query信息导入GS\_WLM\_SESSION\_QUERY\_INFO\_ALL系统表，开启此功能会占用系统存储空间并对性能有一定影响。用户通过查询GS\_SLOW\_QUERY\_INFO视图，可以查看已经转储的慢查询信息，本版本中已废弃。

**表 1**  GS\_SLOW\_QUERY\_INFO字段

<a name="table949020817280"></a>
<table><thead align="left"><tr id="row44901885283"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p204912089289"><a name="p204912089289"></a><a name="p204912089289"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p17491108122820"><a name="p17491108122820"></a><a name="p17491108122820"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p13491282281"><a name="p13491282281"></a><a name="p13491282281"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row16491158192819"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1149178122814"><a name="p1149178122814"></a><a name="p1149178122814"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p124911782289"><a name="p124911782289"></a><a name="p124911782289"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1449128112816"><a name="p1449128112816"></a><a name="p1449128112816"></a>数据库名称。</p>
</td>
</tr>
<tr id="row14915892817"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p174910812286"><a name="p174910812286"></a><a name="p174910812286"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1949128172817"><a name="p1949128172817"></a><a name="p1949128172817"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p164911589285"><a name="p164911589285"></a><a name="p164911589285"></a>schema名称。</p>
</td>
</tr>
<tr id="row749113817286"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1749115882810"><a name="p1749115882810"></a><a name="p1749115882810"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p449148162820"><a name="p449148162820"></a><a name="p449148162820"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16491108182819"><a name="p16491108182819"></a><a name="p16491108182819"></a>节点名称。</p>
</td>
</tr>
<tr id="row649168132810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44917817289"><a name="p44917817289"></a><a name="p44917817289"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p194912810285"><a name="p194912810285"></a><a name="p194912810285"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p134914811289"><a name="p134914811289"></a><a name="p134914811289"></a>用户名。</p>
</td>
</tr>
<tr id="row249116815283"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p134910815282"><a name="p134910815282"></a><a name="p134910815282"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1649113815280"><a name="p1649113815280"></a><a name="p1649113815280"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p949120810288"><a name="p949120810288"></a><a name="p949120810288"></a>归一化ID。</p>
</td>
</tr>
<tr id="row7491288288"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p649138162814"><a name="p649138162814"></a><a name="p649138162814"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12920249144711"><a name="p12920249144711"></a><a name="p12920249144711"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2049138172819"><a name="p2049138172819"></a><a name="p2049138172819"></a>query语句。</p>
</td>
</tr>
<tr id="row1749158112812"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p94911817284"><a name="p94911817284"></a><a name="p94911817284"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p949278162812"><a name="p949278162812"></a><a name="p949278162812"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1649228122813"><a name="p1649228122813"></a><a name="p1649228122813"></a>开始执行时间。</p>
</td>
</tr>
<tr id="row148912328303"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2891032143017"><a name="p2891032143017"></a><a name="p2891032143017"></a>finish_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p09003263014"><a name="p09003263014"></a><a name="p09003263014"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1890163243010"><a name="p1890163243010"></a><a name="p1890163243010"></a>结束执行时间。</p>
</td>
</tr>
<tr id="row3770204193018"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5770641103019"><a name="p5770641103019"></a><a name="p5770641103019"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p85624396475"><a name="p85624396475"></a><a name="p85624396475"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7770104153020"><a name="p7770104153020"></a><a name="p7770104153020"></a>执行持续时间（毫秒）。</p>
</td>
</tr>
<tr id="row3114174743016"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1411404713018"><a name="p1411404713018"></a><a name="p1411404713018"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p191141047123017"><a name="p191141047123017"></a><a name="p191141047123017"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1411418474306"><a name="p1411418474306"></a><a name="p1411418474306"></a>计划信息。</p>
</td>
</tr>
<tr id="row769485863017"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1694058123014"><a name="p1694058123014"></a><a name="p1694058123014"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p136951758203017"><a name="p136951758203017"></a><a name="p136951758203017"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p136958585305"><a name="p136958585305"></a><a name="p136958585305"></a>Select返回的结果集行数。</p>
</td>
</tr>
<tr id="row254515130314"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p154531312315"><a name="p154531312315"></a><a name="p154531312315"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p95466136313"><a name="p95466136313"></a><a name="p95466136313"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1654618139317"><a name="p1654618139317"></a><a name="p1654618139317"></a>随机扫描行数。</p>
</td>
</tr>
<tr id="row4589123123110"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p114831522183112"><a name="p114831522183112"></a><a name="p114831522183112"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p8483112293110"><a name="p8483112293110"></a><a name="p8483112293110"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1483152243117"><a name="p1483152243117"></a><a name="p1483152243117"></a>顺序扫描行数。</p>
</td>
</tr>
<tr id="row858902319313"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5483722183119"><a name="p5483722183119"></a><a name="p5483722183119"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18483152223112"><a name="p18483152223112"></a><a name="p18483152223112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p54831322143113"><a name="p54831322143113"></a><a name="p54831322143113"></a>插入行数。</p>
</td>
</tr>
<tr id="row358810234313"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p148392243112"><a name="p148392243112"></a><a name="p148392243112"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1483162273115"><a name="p1483162273115"></a><a name="p1483162273115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1348382214319"><a name="p1348382214319"></a><a name="p1348382214319"></a>更新行数。</p>
</td>
</tr>
<tr id="row1858812314315"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p34831522153119"><a name="p34831522153119"></a><a name="p34831522153119"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p848382293118"><a name="p848382293118"></a><a name="p848382293118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p144831622133115"><a name="p144831622133115"></a><a name="p144831622133115"></a>删除行数。</p>
</td>
</tr>
<tr id="row13775115215319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p137581251173114"><a name="p137581251173114"></a><a name="p137581251173114"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5758105193120"><a name="p5758105193120"></a><a name="p5758105193120"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p20758125173116"><a name="p20758125173116"></a><a name="p20758125173116"></a>Cache加载次数。</p>
</td>
</tr>
<tr id="row877515216319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4758251113120"><a name="p4758251113120"></a><a name="p4758251113120"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11758165113112"><a name="p11758165113112"></a><a name="p11758165113112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p147583518312"><a name="p147583518312"></a><a name="p147583518312"></a>Cache命中数。</p>
</td>
</tr>
<tr id="row17775052123118"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2758551153112"><a name="p2758551153112"></a><a name="p2758551153112"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p275813514314"><a name="p275813514314"></a><a name="p275813514314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5759551123111"><a name="p5759551123111"></a><a name="p5759551123111"></a>有效的DB时间花费，多线程将累加（单位：微秒）。</p>
</td>
</tr>
<tr id="row1977515273114"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p375955117319"><a name="p375955117319"></a><a name="p375955117319"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4759165183112"><a name="p4759165183112"></a><a name="p4759165183112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p67597519311"><a name="p67597519311"></a><a name="p67597519311"></a>CPU时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1677535213111"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13759551183114"><a name="p13759551183114"></a><a name="p13759551183114"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11759185114317"><a name="p11759185114317"></a><a name="p11759185114317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1775905117312"><a name="p1775905117312"></a><a name="p1775905117312"></a>执行器内执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row777417524311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p175911519310"><a name="p175911519310"></a><a name="p175911519310"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p137591251153110"><a name="p137591251153110"></a><a name="p137591251153110"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p77591851113116"><a name="p77591851113116"></a><a name="p77591851113116"></a>SQL解析时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row677415293112"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p475975123120"><a name="p475975123120"></a><a name="p475975123120"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p47596513312"><a name="p47596513312"></a><a name="p47596513312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1675914519315"><a name="p1675914519315"></a><a name="p1675914519315"></a>SQL生成计划时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1774185218312"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p975945173112"><a name="p975945173112"></a><a name="p975945173112"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9759251153115"><a name="p9759251153115"></a><a name="p9759251153115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15759151103118"><a name="p15759151103118"></a><a name="p15759151103118"></a>SQL重写时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row277420523319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1975975114311"><a name="p1975975114311"></a><a name="p1975975114311"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1775965110312"><a name="p1775965110312"></a><a name="p1775965110312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17759145163113"><a name="p17759145163113"></a><a name="p17759145163113"></a>plpgsql上的执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row57742052153113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14759651123117"><a name="p14759651123117"></a><a name="p14759651123117"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17759451113118"><a name="p17759451113118"></a><a name="p17759451113118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14760195153115"><a name="p14760195153115"></a><a name="p14760195153115"></a>plpgsql上的编译时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row777455214319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1876012513310"><a name="p1876012513310"></a><a name="p1876012513310"></a>net_send_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1576045153115"><a name="p1576045153115"></a><a name="p1576045153115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19760851193119"><a name="p19760851193119"></a><a name="p19760851193119"></a>网络上的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="row197745525319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1076035118311"><a name="p1076035118311"></a><a name="p1076035118311"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p3760155163117"><a name="p3760155163117"></a><a name="p3760155163117"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16760751163115"><a name="p16760751163115"></a><a name="p16760751163115"></a>IO上的时间花费(单位：微秒)。</p>
</td>
</tr>
</tbody>
</table>

