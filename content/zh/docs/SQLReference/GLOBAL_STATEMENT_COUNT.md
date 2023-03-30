# GLOBAL\_STATEMENT\_COUNT<a name="ZH-CN_TOPIC_0245374761"></a>

显示数据库各节点当前时刻执行的五类语句（SELECT、INSERT、UPDATE、DELETE、MERGE INTO）和（DDL、DML、DCL）统计信息。

**表 1**  GLOBAL\_STATEMENT\_COUNT字段

<a name="zh-cn_topic_0237122657_table2708758165610"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122657_row1294313584563"><th class="cellrowborder" valign="top" width="28.03%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122657_p294375812560"><a name="zh-cn_topic_0237122657_p294375812560"></a><a name="zh-cn_topic_0237122657_p294375812560"></a><strong id="zh-cn_topic_0237122657_b1894313587560"><a name="zh-cn_topic_0237122657_b1894313587560"></a><a name="zh-cn_topic_0237122657_b1894313587560"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.44%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122657_p1294318584562"><a name="zh-cn_topic_0237122657_p1294318584562"></a><a name="zh-cn_topic_0237122657_p1294318584562"></a><strong id="zh-cn_topic_0237122657_b1494315815566"><a name="zh-cn_topic_0237122657_b1494315815566"></a><a name="zh-cn_topic_0237122657_b1494315815566"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.53%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122657_p69431358105616"><a name="zh-cn_topic_0237122657_p69431358105616"></a><a name="zh-cn_topic_0237122657_p69431358105616"></a><strong id="zh-cn_topic_0237122657_b5944658105614"><a name="zh-cn_topic_0237122657_b5944658105614"></a><a name="zh-cn_topic_0237122657_b5944658105614"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122657_row109448588567"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p139441558195618"><a name="zh-cn_topic_0237122657_p139441558195618"></a><a name="zh-cn_topic_0237122657_p139441558195618"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p14944258115620"><a name="zh-cn_topic_0237122657_p14944258115620"></a><a name="zh-cn_topic_0237122657_p14944258115620"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p2944135813567"><a name="zh-cn_topic_0237122657_p2944135813567"></a><a name="zh-cn_topic_0237122657_p2944135813567"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row39441058105610"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p694445812568"><a name="zh-cn_topic_0237122657_p694445812568"></a><a name="zh-cn_topic_0237122657_p694445812568"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p39444581564"><a name="zh-cn_topic_0237122657_p39444581564"></a><a name="zh-cn_topic_0237122657_p39444581564"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p994416581562"><a name="zh-cn_topic_0237122657_p994416581562"></a><a name="zh-cn_topic_0237122657_p994416581562"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row89441458105613"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1594415845619"><a name="zh-cn_topic_0237122657_p1594415845619"></a><a name="zh-cn_topic_0237122657_p1594415845619"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p13944105815563"><a name="zh-cn_topic_0237122657_p13944105815563"></a><a name="zh-cn_topic_0237122657_p13944105815563"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p9944115818564"><a name="zh-cn_topic_0237122657_p9944115818564"></a><a name="zh-cn_topic_0237122657_p9944115818564"></a>select语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row3944155810563"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p18944115818561"><a name="zh-cn_topic_0237122657_p18944115818561"></a><a name="zh-cn_topic_0237122657_p18944115818561"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p6944558175617"><a name="zh-cn_topic_0237122657_p6944558175617"></a><a name="zh-cn_topic_0237122657_p6944558175617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p194475835617"><a name="zh-cn_topic_0237122657_p194475835617"></a><a name="zh-cn_topic_0237122657_p194475835617"></a>update语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row094475835612"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1094411589565"><a name="zh-cn_topic_0237122657_p1094411589565"></a><a name="zh-cn_topic_0237122657_p1094411589565"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p3944358145616"><a name="zh-cn_topic_0237122657_p3944358145616"></a><a name="zh-cn_topic_0237122657_p3944358145616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p10944185813569"><a name="zh-cn_topic_0237122657_p10944185813569"></a><a name="zh-cn_topic_0237122657_p10944185813569"></a>insert语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row794495815620"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p4944195845613"><a name="zh-cn_topic_0237122657_p4944195845613"></a><a name="zh-cn_topic_0237122657_p4944195845613"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p1694411584564"><a name="zh-cn_topic_0237122657_p1694411584564"></a><a name="zh-cn_topic_0237122657_p1694411584564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p16944185895613"><a name="zh-cn_topic_0237122657_p16944185895613"></a><a name="zh-cn_topic_0237122657_p16944185895613"></a>delete语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row8944458165617"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p189459585560"><a name="zh-cn_topic_0237122657_p189459585560"></a><a name="zh-cn_topic_0237122657_p189459585560"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p394595813564"><a name="zh-cn_topic_0237122657_p394595813564"></a><a name="zh-cn_topic_0237122657_p394595813564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p194585885614"><a name="zh-cn_topic_0237122657_p194585885614"></a><a name="zh-cn_topic_0237122657_p194585885614"></a>merge into语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row5945105815568"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p10945258205616"><a name="zh-cn_topic_0237122657_p10945258205616"></a><a name="zh-cn_topic_0237122657_p10945258205616"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p109451658125612"><a name="zh-cn_topic_0237122657_p109451658125612"></a><a name="zh-cn_topic_0237122657_p109451658125612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p794575895613"><a name="zh-cn_topic_0237122657_p794575895613"></a><a name="zh-cn_topic_0237122657_p794575895613"></a>DDL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row794535815569"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p11945185815616"><a name="zh-cn_topic_0237122657_p11945185815616"></a><a name="zh-cn_topic_0237122657_p11945185815616"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p179451058185616"><a name="zh-cn_topic_0237122657_p179451058185616"></a><a name="zh-cn_topic_0237122657_p179451058185616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p9945458105612"><a name="zh-cn_topic_0237122657_p9945458105612"></a><a name="zh-cn_topic_0237122657_p9945458105612"></a>DML语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row194575865611"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p119451958125615"><a name="zh-cn_topic_0237122657_p119451958125615"></a><a name="zh-cn_topic_0237122657_p119451958125615"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p9945175810567"><a name="zh-cn_topic_0237122657_p9945175810567"></a><a name="zh-cn_topic_0237122657_p9945175810567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p159451358155611"><a name="zh-cn_topic_0237122657_p159451358155611"></a><a name="zh-cn_topic_0237122657_p159451358155611"></a>DCL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row79452058135619"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p7945195818569"><a name="zh-cn_topic_0237122657_p7945195818569"></a><a name="zh-cn_topic_0237122657_p7945195818569"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p13945758105614"><a name="zh-cn_topic_0237122657_p13945758105614"></a><a name="zh-cn_topic_0237122657_p13945758105614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p9945858175612"><a name="zh-cn_topic_0237122657_p9945858175612"></a><a name="zh-cn_topic_0237122657_p9945858175612"></a>总select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row99459588562"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p169451358155616"><a name="zh-cn_topic_0237122657_p169451358155616"></a><a name="zh-cn_topic_0237122657_p169451358155616"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p794585815562"><a name="zh-cn_topic_0237122657_p794585815562"></a><a name="zh-cn_topic_0237122657_p794585815562"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p19945155815563"><a name="zh-cn_topic_0237122657_p19945155815563"></a><a name="zh-cn_topic_0237122657_p19945155815563"></a>平均select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row49451058145615"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1894510583566"><a name="zh-cn_topic_0237122657_p1894510583566"></a><a name="zh-cn_topic_0237122657_p1894510583566"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p1494525819563"><a name="zh-cn_topic_0237122657_p1494525819563"></a><a name="zh-cn_topic_0237122657_p1494525819563"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p169451158155614"><a name="zh-cn_topic_0237122657_p169451158155614"></a><a name="zh-cn_topic_0237122657_p169451158155614"></a>最大select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row19451558155615"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p10946158115611"><a name="zh-cn_topic_0237122657_p10946158115611"></a><a name="zh-cn_topic_0237122657_p10946158115611"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p1194616586565"><a name="zh-cn_topic_0237122657_p1194616586565"></a><a name="zh-cn_topic_0237122657_p1194616586565"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p294625875618"><a name="zh-cn_topic_0237122657_p294625875618"></a><a name="zh-cn_topic_0237122657_p294625875618"></a>最小select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row29468588568"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p199461158195611"><a name="zh-cn_topic_0237122657_p199461158195611"></a><a name="zh-cn_topic_0237122657_p199461158195611"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p59461158135618"><a name="zh-cn_topic_0237122657_p59461158135618"></a><a name="zh-cn_topic_0237122657_p59461158135618"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p20946185810560"><a name="zh-cn_topic_0237122657_p20946185810560"></a><a name="zh-cn_topic_0237122657_p20946185810560"></a>总update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row1094655845617"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p594665885615"><a name="zh-cn_topic_0237122657_p594665885615"></a><a name="zh-cn_topic_0237122657_p594665885615"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p19461358115612"><a name="zh-cn_topic_0237122657_p19461358115612"></a><a name="zh-cn_topic_0237122657_p19461358115612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p1294619588566"><a name="zh-cn_topic_0237122657_p1294619588566"></a><a name="zh-cn_topic_0237122657_p1294619588566"></a>平均update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row10946958135616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1946155845619"><a name="zh-cn_topic_0237122657_p1946155845619"></a><a name="zh-cn_topic_0237122657_p1946155845619"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p1294610582566"><a name="zh-cn_topic_0237122657_p1294610582566"></a><a name="zh-cn_topic_0237122657_p1294610582566"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p149461158105618"><a name="zh-cn_topic_0237122657_p149461158105618"></a><a name="zh-cn_topic_0237122657_p149461158105618"></a>最大update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row12946165812563"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p694615812569"><a name="zh-cn_topic_0237122657_p694615812569"></a><a name="zh-cn_topic_0237122657_p694615812569"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p99465586567"><a name="zh-cn_topic_0237122657_p99465586567"></a><a name="zh-cn_topic_0237122657_p99465586567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p0946155819562"><a name="zh-cn_topic_0237122657_p0946155819562"></a><a name="zh-cn_topic_0237122657_p0946155819562"></a>最小update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row894685875616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p16946458145612"><a name="zh-cn_topic_0237122657_p16946458145612"></a><a name="zh-cn_topic_0237122657_p16946458145612"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p6946145885613"><a name="zh-cn_topic_0237122657_p6946145885613"></a><a name="zh-cn_topic_0237122657_p6946145885613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p89468581568"><a name="zh-cn_topic_0237122657_p89468581568"></a><a name="zh-cn_topic_0237122657_p89468581568"></a>总insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row9946195845611"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1294695855611"><a name="zh-cn_topic_0237122657_p1294695855611"></a><a name="zh-cn_topic_0237122657_p1294695855611"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p494695855614"><a name="zh-cn_topic_0237122657_p494695855614"></a><a name="zh-cn_topic_0237122657_p494695855614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p994665810568"><a name="zh-cn_topic_0237122657_p994665810568"></a><a name="zh-cn_topic_0237122657_p994665810568"></a>平均insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row49461858105619"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p8946165815617"><a name="zh-cn_topic_0237122657_p8946165815617"></a><a name="zh-cn_topic_0237122657_p8946165815617"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p1694713584565"><a name="zh-cn_topic_0237122657_p1694713584565"></a><a name="zh-cn_topic_0237122657_p1694713584565"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p9947145813565"><a name="zh-cn_topic_0237122657_p9947145813565"></a><a name="zh-cn_topic_0237122657_p9947145813565"></a>最大insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row1947145835616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p494716584564"><a name="zh-cn_topic_0237122657_p494716584564"></a><a name="zh-cn_topic_0237122657_p494716584564"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p7947558155612"><a name="zh-cn_topic_0237122657_p7947558155612"></a><a name="zh-cn_topic_0237122657_p7947558155612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p149471758125617"><a name="zh-cn_topic_0237122657_p149471758125617"></a><a name="zh-cn_topic_0237122657_p149471758125617"></a>最小insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row20947258175616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1894719588567"><a name="zh-cn_topic_0237122657_p1894719588567"></a><a name="zh-cn_topic_0237122657_p1894719588567"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p0947105811564"><a name="zh-cn_topic_0237122657_p0947105811564"></a><a name="zh-cn_topic_0237122657_p0947105811564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p169476584563"><a name="zh-cn_topic_0237122657_p169476584563"></a><a name="zh-cn_topic_0237122657_p169476584563"></a>总delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row1094755815561"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p594715805617"><a name="zh-cn_topic_0237122657_p594715805617"></a><a name="zh-cn_topic_0237122657_p594715805617"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p49471587567"><a name="zh-cn_topic_0237122657_p49471587567"></a><a name="zh-cn_topic_0237122657_p49471587567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p15947165815614"><a name="zh-cn_topic_0237122657_p15947165815614"></a><a name="zh-cn_topic_0237122657_p15947165815614"></a>平均delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row3947115855617"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p0947195805615"><a name="zh-cn_topic_0237122657_p0947195805615"></a><a name="zh-cn_topic_0237122657_p0947195805615"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p1947165813569"><a name="zh-cn_topic_0237122657_p1947165813569"></a><a name="zh-cn_topic_0237122657_p1947165813569"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p1294715818563"><a name="zh-cn_topic_0237122657_p1294715818563"></a><a name="zh-cn_topic_0237122657_p1294715818563"></a>最大delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122657_row3947155875618"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122657_p1294765815614"><a name="zh-cn_topic_0237122657_p1294765815614"></a><a name="zh-cn_topic_0237122657_p1294765815614"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122657_p11947858205612"><a name="zh-cn_topic_0237122657_p11947858205612"></a><a name="zh-cn_topic_0237122657_p11947858205612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122657_p5947135805612"><a name="zh-cn_topic_0237122657_p5947135805612"></a><a name="zh-cn_topic_0237122657_p5947135805612"></a>最小delete的时间花费（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
