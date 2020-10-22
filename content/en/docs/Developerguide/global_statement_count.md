# GLOBAL\_STATEMENT\_COUNT<a name="EN-US_TOPIC_0245374761"></a>

**GLOBAL\_STATEMENT\_COUNT**  displays statistics about five types of running statements \(**SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**, and  **MERGE INTO**\) as well as DDL, DML, and DCL statements on each node of the database. 

**Table  1**  GLOBAL\_STATEMENT\_COUNT columns

<a name="en-us_topic_0237122657_table2708758165610"></a>
<table><thead align="left"><tr id="en-us_topic_0237122657_row1294313584563"><th class="cellrowborder" valign="top" width="28.03%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122657_p294375812560"><a name="en-us_topic_0237122657_p294375812560"></a><a name="en-us_topic_0237122657_p294375812560"></a><strong id="b5512558193610"><a name="b5512558193610"></a><a name="b5512558193610"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.44%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122657_p1294318584562"><a name="en-us_topic_0237122657_p1294318584562"></a><a name="en-us_topic_0237122657_p1294318584562"></a><strong id="b321010599369"><a name="b321010599369"></a><a name="b321010599369"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.53%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122657_p69431358105616"><a name="en-us_topic_0237122657_p69431358105616"></a><a name="en-us_topic_0237122657_p69431358105616"></a><strong id="b2674502374"><a name="b2674502374"></a><a name="b2674502374"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122657_row109448588567"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p139441558195618"><a name="en-us_topic_0237122657_p139441558195618"></a><a name="en-us_topic_0237122657_p139441558195618"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p14944258115620"><a name="en-us_topic_0237122657_p14944258115620"></a><a name="en-us_topic_0237122657_p14944258115620"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p2944135813567"><a name="en-us_topic_0237122657_p2944135813567"></a><a name="en-us_topic_0237122657_p2944135813567"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row39441058105610"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p694445812568"><a name="en-us_topic_0237122657_p694445812568"></a><a name="en-us_topic_0237122657_p694445812568"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p39444581564"><a name="en-us_topic_0237122657_p39444581564"></a><a name="en-us_topic_0237122657_p39444581564"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p994416581562"><a name="en-us_topic_0237122657_p994416581562"></a><a name="en-us_topic_0237122657_p994416581562"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row89441458105613"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1594415845619"><a name="en-us_topic_0237122657_p1594415845619"></a><a name="en-us_topic_0237122657_p1594415845619"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p13944105815563"><a name="en-us_topic_0237122657_p13944105815563"></a><a name="en-us_topic_0237122657_p13944105815563"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p9944115818564"><a name="en-us_topic_0237122657_p9944115818564"></a><a name="en-us_topic_0237122657_p9944115818564"></a>Statistical result of the <strong id="b1078312183716"><a name="b1078312183716"></a><a name="b1078312183716"></a>SELECT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row3944155810563"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p18944115818561"><a name="en-us_topic_0237122657_p18944115818561"></a><a name="en-us_topic_0237122657_p18944115818561"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p6944558175617"><a name="en-us_topic_0237122657_p6944558175617"></a><a name="en-us_topic_0237122657_p6944558175617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p194475835617"><a name="en-us_topic_0237122657_p194475835617"></a><a name="en-us_topic_0237122657_p194475835617"></a>Statistical result of the <strong id="b8361134153717"><a name="b8361134153717"></a><a name="b8361134153717"></a>UPDATE</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row094475835612"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1094411589565"><a name="en-us_topic_0237122657_p1094411589565"></a><a name="en-us_topic_0237122657_p1094411589565"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p3944358145616"><a name="en-us_topic_0237122657_p3944358145616"></a><a name="en-us_topic_0237122657_p3944358145616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p10944185813569"><a name="en-us_topic_0237122657_p10944185813569"></a><a name="en-us_topic_0237122657_p10944185813569"></a>Statistical result of the <strong id="b631265193716"><a name="b631265193716"></a><a name="b631265193716"></a>INSERT</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row794495815620"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p4944195845613"><a name="en-us_topic_0237122657_p4944195845613"></a><a name="en-us_topic_0237122657_p4944195845613"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p1694411584564"><a name="en-us_topic_0237122657_p1694411584564"></a><a name="en-us_topic_0237122657_p1694411584564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p16944185895613"><a name="en-us_topic_0237122657_p16944185895613"></a><a name="en-us_topic_0237122657_p16944185895613"></a>Statistical result of the <strong id="b111996653712"><a name="b111996653712"></a><a name="b111996653712"></a>DELETE</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row8944458165617"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p189459585560"><a name="en-us_topic_0237122657_p189459585560"></a><a name="en-us_topic_0237122657_p189459585560"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p394595813564"><a name="en-us_topic_0237122657_p394595813564"></a><a name="en-us_topic_0237122657_p394595813564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p194585885614"><a name="en-us_topic_0237122657_p194585885614"></a><a name="en-us_topic_0237122657_p194585885614"></a>Statistical result of the <strong id="b81781077370"><a name="b81781077370"></a><a name="b81781077370"></a>MERGE INTO</strong> statement</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row5945105815568"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p10945258205616"><a name="en-us_topic_0237122657_p10945258205616"></a><a name="en-us_topic_0237122657_p10945258205616"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p109451658125612"><a name="en-us_topic_0237122657_p109451658125612"></a><a name="en-us_topic_0237122657_p109451658125612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p794575895613"><a name="en-us_topic_0237122657_p794575895613"></a><a name="en-us_topic_0237122657_p794575895613"></a>Number of DDL statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row794535815569"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p11945185815616"><a name="en-us_topic_0237122657_p11945185815616"></a><a name="en-us_topic_0237122657_p11945185815616"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p179451058185616"><a name="en-us_topic_0237122657_p179451058185616"></a><a name="en-us_topic_0237122657_p179451058185616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p9945458105612"><a name="en-us_topic_0237122657_p9945458105612"></a><a name="en-us_topic_0237122657_p9945458105612"></a>Number of DML statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row194575865611"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p119451958125615"><a name="en-us_topic_0237122657_p119451958125615"></a><a name="en-us_topic_0237122657_p119451958125615"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p9945175810567"><a name="en-us_topic_0237122657_p9945175810567"></a><a name="en-us_topic_0237122657_p9945175810567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p159451358155611"><a name="en-us_topic_0237122657_p159451358155611"></a><a name="en-us_topic_0237122657_p159451358155611"></a>Number of DCL statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row79452058135619"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p7945195818569"><a name="en-us_topic_0237122657_p7945195818569"></a><a name="en-us_topic_0237122657_p7945195818569"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p13945758105614"><a name="en-us_topic_0237122657_p13945758105614"></a><a name="en-us_topic_0237122657_p13945758105614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p9945858175612"><a name="en-us_topic_0237122657_p9945858175612"></a><a name="en-us_topic_0237122657_p9945858175612"></a>Total response time of <strong id="b37689232371"><a name="b37689232371"></a><a name="b37689232371"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row99459588562"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p169451358155616"><a name="en-us_topic_0237122657_p169451358155616"></a><a name="en-us_topic_0237122657_p169451358155616"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p794585815562"><a name="en-us_topic_0237122657_p794585815562"></a><a name="en-us_topic_0237122657_p794585815562"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p19945155815563"><a name="en-us_topic_0237122657_p19945155815563"></a><a name="en-us_topic_0237122657_p19945155815563"></a>Average response time of <strong id="b1174122573717"><a name="b1174122573717"></a><a name="b1174122573717"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row49451058145615"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1894510583566"><a name="en-us_topic_0237122657_p1894510583566"></a><a name="en-us_topic_0237122657_p1894510583566"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p1494525819563"><a name="en-us_topic_0237122657_p1494525819563"></a><a name="en-us_topic_0237122657_p1494525819563"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p169451158155614"><a name="en-us_topic_0237122657_p169451158155614"></a><a name="en-us_topic_0237122657_p169451158155614"></a>Maximum response time of <strong id="b4710112618379"><a name="b4710112618379"></a><a name="b4710112618379"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row19451558155615"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p10946158115611"><a name="en-us_topic_0237122657_p10946158115611"></a><a name="en-us_topic_0237122657_p10946158115611"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p1194616586565"><a name="en-us_topic_0237122657_p1194616586565"></a><a name="en-us_topic_0237122657_p1194616586565"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p294625875618"><a name="en-us_topic_0237122657_p294625875618"></a><a name="en-us_topic_0237122657_p294625875618"></a>Minimum response time of <strong id="b11636172773719"><a name="b11636172773719"></a><a name="b11636172773719"></a>SELECT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row29468588568"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p199461158195611"><a name="en-us_topic_0237122657_p199461158195611"></a><a name="en-us_topic_0237122657_p199461158195611"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p59461158135618"><a name="en-us_topic_0237122657_p59461158135618"></a><a name="en-us_topic_0237122657_p59461158135618"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p20946185810560"><a name="en-us_topic_0237122657_p20946185810560"></a><a name="en-us_topic_0237122657_p20946185810560"></a>Total response time of <strong id="b13664828123710"><a name="b13664828123710"></a><a name="b13664828123710"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row1094655845617"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p594665885615"><a name="en-us_topic_0237122657_p594665885615"></a><a name="en-us_topic_0237122657_p594665885615"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p19461358115612"><a name="en-us_topic_0237122657_p19461358115612"></a><a name="en-us_topic_0237122657_p19461358115612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p1294619588566"><a name="en-us_topic_0237122657_p1294619588566"></a><a name="en-us_topic_0237122657_p1294619588566"></a>Average response time of <strong id="b185251029103715"><a name="b185251029103715"></a><a name="b185251029103715"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row10946958135616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1946155845619"><a name="en-us_topic_0237122657_p1946155845619"></a><a name="en-us_topic_0237122657_p1946155845619"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p1294610582566"><a name="en-us_topic_0237122657_p1294610582566"></a><a name="en-us_topic_0237122657_p1294610582566"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p149461158105618"><a name="en-us_topic_0237122657_p149461158105618"></a><a name="en-us_topic_0237122657_p149461158105618"></a>Maximum response time of <strong id="b18391431113718"><a name="b18391431113718"></a><a name="b18391431113718"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row12946165812563"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p694615812569"><a name="en-us_topic_0237122657_p694615812569"></a><a name="en-us_topic_0237122657_p694615812569"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p99465586567"><a name="en-us_topic_0237122657_p99465586567"></a><a name="en-us_topic_0237122657_p99465586567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p0946155819562"><a name="en-us_topic_0237122657_p0946155819562"></a><a name="en-us_topic_0237122657_p0946155819562"></a>Minimum response time of <strong id="b995853219378"><a name="b995853219378"></a><a name="b995853219378"></a>UPDATE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row894685875616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p16946458145612"><a name="en-us_topic_0237122657_p16946458145612"></a><a name="en-us_topic_0237122657_p16946458145612"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p6946145885613"><a name="en-us_topic_0237122657_p6946145885613"></a><a name="en-us_topic_0237122657_p6946145885613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p89468581568"><a name="en-us_topic_0237122657_p89468581568"></a><a name="en-us_topic_0237122657_p89468581568"></a>Total response time of <strong id="b57441434133716"><a name="b57441434133716"></a><a name="b57441434133716"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row9946195845611"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1294695855611"><a name="en-us_topic_0237122657_p1294695855611"></a><a name="en-us_topic_0237122657_p1294695855611"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p494695855614"><a name="en-us_topic_0237122657_p494695855614"></a><a name="en-us_topic_0237122657_p494695855614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p994665810568"><a name="en-us_topic_0237122657_p994665810568"></a><a name="en-us_topic_0237122657_p994665810568"></a>Average response time of <strong id="b8940935183719"><a name="b8940935183719"></a><a name="b8940935183719"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row49461858105619"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p8946165815617"><a name="en-us_topic_0237122657_p8946165815617"></a><a name="en-us_topic_0237122657_p8946165815617"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p1694713584565"><a name="en-us_topic_0237122657_p1694713584565"></a><a name="en-us_topic_0237122657_p1694713584565"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p9947145813565"><a name="en-us_topic_0237122657_p9947145813565"></a><a name="en-us_topic_0237122657_p9947145813565"></a>Maximum response time of <strong id="b14524163773714"><a name="b14524163773714"></a><a name="b14524163773714"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row1947145835616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p494716584564"><a name="en-us_topic_0237122657_p494716584564"></a><a name="en-us_topic_0237122657_p494716584564"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p7947558155612"><a name="en-us_topic_0237122657_p7947558155612"></a><a name="en-us_topic_0237122657_p7947558155612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p149471758125617"><a name="en-us_topic_0237122657_p149471758125617"></a><a name="en-us_topic_0237122657_p149471758125617"></a>Minimum response time of <strong id="b323120392376"><a name="b323120392376"></a><a name="b323120392376"></a>INSERT</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row20947258175616"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1894719588567"><a name="en-us_topic_0237122657_p1894719588567"></a><a name="en-us_topic_0237122657_p1894719588567"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p0947105811564"><a name="en-us_topic_0237122657_p0947105811564"></a><a name="en-us_topic_0237122657_p0947105811564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p169476584563"><a name="en-us_topic_0237122657_p169476584563"></a><a name="en-us_topic_0237122657_p169476584563"></a>Total response time of <strong id="b17489114010373"><a name="b17489114010373"></a><a name="b17489114010373"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row1094755815561"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p594715805617"><a name="en-us_topic_0237122657_p594715805617"></a><a name="en-us_topic_0237122657_p594715805617"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p49471587567"><a name="en-us_topic_0237122657_p49471587567"></a><a name="en-us_topic_0237122657_p49471587567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p15947165815614"><a name="en-us_topic_0237122657_p15947165815614"></a><a name="en-us_topic_0237122657_p15947165815614"></a>Average response time of <strong id="b189451641193716"><a name="b189451641193716"></a><a name="b189451641193716"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row3947115855617"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p0947195805615"><a name="en-us_topic_0237122657_p0947195805615"></a><a name="en-us_topic_0237122657_p0947195805615"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p1947165813569"><a name="en-us_topic_0237122657_p1947165813569"></a><a name="en-us_topic_0237122657_p1947165813569"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p1294715818563"><a name="en-us_topic_0237122657_p1294715818563"></a><a name="en-us_topic_0237122657_p1294715818563"></a>Maximum response time of <strong id="b488443123711"><a name="b488443123711"></a><a name="b488443123711"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0237122657_row3947155875618"><td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122657_p1294765815614"><a name="en-us_topic_0237122657_p1294765815614"></a><a name="en-us_topic_0237122657_p1294765815614"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122657_p11947858205612"><a name="en-us_topic_0237122657_p11947858205612"></a><a name="en-us_topic_0237122657_p11947858205612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122657_p5947135805612"><a name="en-us_topic_0237122657_p5947135805612"></a><a name="en-us_topic_0237122657_p5947135805612"></a>Minimum response time of <strong id="b92026451378"><a name="b92026451378"></a><a name="b92026451378"></a>DELETE</strong> statements (unit: μs)</p>
</td>
</tr>
</tbody>
</table>

