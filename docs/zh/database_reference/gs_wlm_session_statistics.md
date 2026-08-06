# GS\_WLM\_SESSION\_STATISTICS

GS\_WLM\_SESSION\_STATISTICS视图显示当前用户在数据库实例上正在执行的作业的负载管理记录。查询该视图需要sysadmin权限。

**表 1**  GS\_WLM\_SESSION\_STATISTICS的字段

<a name="table9446192117461"></a>
<table><thead align="left"><tr id="row1544642110461"><th class="cellrowborder" valign="top" width="23.02%" id="mcps1.2.4.1.1"><p id="p1359922545010"><a name="p1359922545010"></a><a name="p1359922545010"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.98%" id="mcps1.2.4.1.2"><p id="p3599182520502"><a name="p3599182520502"></a><a name="p3599182520502"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.1.3"><p id="p175991225195015"><a name="p175991225195015"></a><a name="p175991225195015"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row17446162114468"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p7825161515615"><a name="p7825161515615"></a><a name="p7825161515615"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p158251415661"><a name="p158251415661"></a><a name="p158251415661"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1282581516620"><a name="p1282581516620"></a><a name="p1282581516620"></a>连接后端的数据OID。</p>
</td>
</tr>
<tr id="row75751994710"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p17826315164"><a name="p17826315164"></a><a name="p17826315164"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p17826201510620"><a name="p17826201510620"></a><a name="p17826201510620"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1182612150618"><a name="p1182612150618"></a><a name="p1182612150618"></a>连接后端的数据库名称。</p>
</td>
</tr>
<tr id="row9571319154713"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p11826415869"><a name="p11826415869"></a><a name="p11826415869"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p10826015362"><a name="p10826015362"></a><a name="p10826015362"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p182613154612"><a name="p182613154612"></a><a name="p182613154612"></a>模式的名称。</p>
</td>
</tr>
<tr id="row15771915477"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p68261715961"><a name="p68261715961"></a><a name="p68261715961"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p108264151361"><a name="p108264151361"></a><a name="p108264151361"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1682619154610"><a name="p1682619154610"></a><a name="p1682619154610"></a>语句执行的数据库实例名称。</p>
</td>
</tr>
<tr id="row1456161919474"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p138263151561"><a name="p138263151561"></a><a name="p138263151561"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p19827121514616"><a name="p19827121514616"></a><a name="p19827121514616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1482741518615"><a name="p1482741518615"></a><a name="p1482741518615"></a>连接到后端的用户名。</p>
</td>
</tr>
<tr id="row18568199473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1182716154617"><a name="p1182716154617"></a><a name="p1182716154617"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p168272153616"><a name="p168272153616"></a><a name="p168272153616"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1582717155620"><a name="p1582717155620"></a><a name="p1582717155620"></a>连接到后端的应用名。</p>
</td>
</tr>
<tr id="row18561119144717"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p68277151565"><a name="p68277151565"></a><a name="p68277151565"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p88271415966"><a name="p88271415966"></a><a name="p88271415966"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p10827121511613"><a name="p10827121511613"></a><a name="p10827121511613"></a>连接到后端的客户端的IP地址。如果此字段是null，它表明通过服务器机器上UNIX套接字连接客户端或者这是内部进程，如autovacuum。</p>
</td>
</tr>
<tr id="row17561419164719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p28277151166"><a name="p28277151166"></a><a name="p28277151166"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p18271615169"><a name="p18271615169"></a><a name="p18271615169"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p19827101512614"><a name="p19827101512614"></a><a name="p19827101512614"></a>客户端的主机名，这个字段是通过client_addr的反向DNS查找得到。这个字段只有在启动log_hostname且使用IP连接时才非空。</p>
</td>
</tr>
<tr id="row256119114713"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p158288150611"><a name="p158288150611"></a><a name="p158288150611"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p282813151865"><a name="p282813151865"></a><a name="p282813151865"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1082851515610"><a name="p1082851515610"></a><a name="p1082851515610"></a>客户端用于与后端通讯的TCP端口号，如果使用Unix套接字，则为-1。</p>
</td>
</tr>
<tr id="row854419184710"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1482851518615"><a name="p1482851518615"></a><a name="p1482851518615"></a>query_band</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p982811156614"><a name="p982811156614"></a><a name="p982811156614"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p58281815765"><a name="p58281815765"></a><a name="p58281815765"></a>用于标示作业类型，可通过GUC参数query_band进行设置，默认为空字符串。</p>
</td>
</tr>
<tr id="row854151911475"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p882811158619"><a name="p882811158619"></a><a name="p882811158619"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1828615167"><a name="p1828615167"></a><a name="p1828615167"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1482819159617"><a name="p1482819159617"></a><a name="p1482819159617"></a>后端线程ID。</p>
</td>
</tr>
<tr id="row0804174414228"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p9804144142212"><a name="p9804144142212"></a><a name="p9804144142212"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p880510448229"><a name="p880510448229"></a><a name="p880510448229"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p19805744132215"><a name="p19805744132215"></a><a name="p19805744132215"></a>会话ID。</p>
</td>
</tr>
<tr id="row1154419204719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1782841517610"><a name="p1782841517610"></a><a name="p1782841517610"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p128280153615"><a name="p128280153615"></a><a name="p128280153615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p282861518615"><a name="p282861518615"></a><a name="p282861518615"></a>语句执行前的阻塞时间，单位ms。</p>
</td>
</tr>
<tr id="row15534197479"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p128291151662"><a name="p128291151662"></a><a name="p128291151662"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p982917151863"><a name="p982917151863"></a><a name="p982917151863"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1382951513612"><a name="p1382951513612"></a><a name="p1382951513612"></a>语句执行的开始时间。</p>
</td>
</tr>
<tr id="row1053111916473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p182931517620"><a name="p182931517620"></a><a name="p182931517620"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p148296154619"><a name="p148296154619"></a><a name="p148296154619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1382916151764"><a name="p1382916151764"></a><a name="p1382916151764"></a>语句已经执行的时间，单位ms。</p>
</td>
</tr>
<tr id="row1752101954720"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1282981517617"><a name="p1282981517617"></a><a name="p1282981517617"></a>estimate_total_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p38294155619"><a name="p38294155619"></a><a name="p38294155619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p7829201515612"><a name="p7829201515612"></a><a name="p7829201515612"></a>语句执行预估总时间，单位ms。</p>
</td>
</tr>
<tr id="row052161918471"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p188291115566"><a name="p188291115566"></a><a name="p188291115566"></a>estimate_left_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p18829101517611"><a name="p18829101517611"></a><a name="p18829101517611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1282916159618"><a name="p1282916159618"></a><a name="p1282916159618"></a>语句执行预估剩余时间，单位ms。</p>
</td>
</tr>
<tr id="row13513195474"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p68291150610"><a name="p68291150610"></a><a name="p68291150610"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p483013151568"><a name="p483013151568"></a><a name="p483013151568"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1983010152615"><a name="p1983010152615"></a><a name="p1983010152615"></a>工作负载管理资源状态。</p>
</td>
</tr>
<tr id="row851111964715"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p2830115961"><a name="p2830115961"></a><a name="p2830115961"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p178301151867"><a name="p178301151867"></a><a name="p178301151867"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p783010151565"><a name="p783010151565"></a><a name="p783010151565"></a>用户使用的资源池。</p>
</td>
</tr>
<tr id="row175071916474"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1083014151063"><a name="p1083014151063"></a><a name="p1083014151063"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p38305151363"><a name="p38305151363"></a><a name="p38305151363"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p198301315264"><a name="p198301315264"></a><a name="p198301315264"></a>语句所使用的Cgroup。</p>
</td>
</tr>
<tr id="row17326153612488"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1361044194819"><a name="p1361044194819"></a><a name="p1361044194819"></a>estimate_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1437124414481"><a name="p1437124414481"></a><a name="p1437124414481"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p2038719505436"><a name="p2038719505436"></a><a name="p2038719505436"></a>语句预估使用内存，单位MB。</p>
</td>
</tr>
<tr id="row95091994717"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p58301015569"><a name="p58301015569"></a><a name="p58301015569"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1583016153616"><a name="p1583016153616"></a><a name="p1583016153616"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p883013156617"><a name="p883013156617"></a><a name="p883013156617"></a>语句在数据库实例上的最小内存峰值，单位MB。</p>
</td>
</tr>
<tr id="row450219184717"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p18305151266"><a name="p18305151266"></a><a name="p18305151266"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p148301115362"><a name="p148301115362"></a><a name="p148301115362"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p78303151267"><a name="p78303151267"></a><a name="p78303151267"></a>语句在数据库实例上的最大内存峰值，单位MB。</p>
</td>
</tr>
<tr id="row849131944716"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p88302151869"><a name="p88302151869"></a><a name="p88302151869"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p158301315266"><a name="p158301315266"></a><a name="p158301315266"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p383010156615"><a name="p383010156615"></a><a name="p383010156615"></a>语句执行过程中的内存使用平均值，单位MB。</p>
</td>
</tr>
<tr id="row19491619144720"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p183017151062"><a name="p183017151062"></a><a name="p183017151062"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p98311615568"><a name="p98311615568"></a><a name="p98311615568"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p58317151165"><a name="p58317151165"></a><a name="p58317151165"></a>语句在数据库实例间的内存使用倾斜率。</p>
</td>
</tr>
<tr id="row1249141914714"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p148311615563"><a name="p148311615563"></a><a name="p148311615563"></a>spill_info</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p16831215669"><a name="p16831215669"></a><a name="p16831215669"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><div class="p" id="p8831191516616"><a name="p8831191516616"></a><a name="p8831191516616"></a>语句在数据库实例上的下盘信息：<a name="ul6514195310143"></a><a name="ul6514195310143"></a><ul id="ul6514195310143"><li>None：数据库实例均未下盘。</li><li>All：数据库实例均下盘。</li><li>[a:b]：数量为b个数据库实例中有a个数据库实例下盘。</li></ul>
</div>
</td>
</tr>
<tr id="row94911195475"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1483111516610"><a name="p1483111516610"></a><a name="p1483111516610"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p20831121510611"><a name="p20831121510611"></a><a name="p20831121510611"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p142431040125415"><a name="p142431040125415"></a><a name="p142431040125415"></a>若发生下盘，数据库实例上下盘的最小数据量，单位MB，默认为0。</p>
</td>
</tr>
<tr id="row2048619104719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p17831141517610"><a name="p17831141517610"></a><a name="p17831141517610"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p10831915160"><a name="p10831915160"></a><a name="p10831915160"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p224304075413"><a name="p224304075413"></a><a name="p224304075413"></a>若发生下盘，数据库实例上下盘的最大数据量，单位MB，默认为0。</p>
</td>
</tr>
<tr id="row548719204719"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p208311915262"><a name="p208311915262"></a><a name="p208311915262"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1183171519611"><a name="p1183171519611"></a><a name="p1183171519611"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p12431840105418"><a name="p12431840105418"></a><a name="p12431840105418"></a>若发生下盘，数据库实例上下盘的平均数据量，单位MB，默认为0。</p>
</td>
</tr>
<tr id="row1547101914720"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1283112154614"><a name="p1283112154614"></a><a name="p1283112154614"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p583111152068"><a name="p583111152068"></a><a name="p583111152068"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p58311615463"><a name="p58311615463"></a><a name="p58311615463"></a>若发生下盘，数据库实例间下盘倾斜率。</p>
</td>
</tr>
<tr id="row19471619184718"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p38323151768"><a name="p38323151768"></a><a name="p38323151768"></a>min_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p983214151864"><a name="p983214151864"></a><a name="p983214151864"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p683291513618"><a name="p683291513618"></a><a name="p683291513618"></a>语句在数据库实例上的最小执行时间，单位ms。</p>
</td>
</tr>
<tr id="row847131904714"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p5832171514615"><a name="p5832171514615"></a><a name="p5832171514615"></a>max_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p128321415466"><a name="p128321415466"></a><a name="p128321415466"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p883231517611"><a name="p883231517611"></a><a name="p883231517611"></a>语句在数据库实例上的最大执行时间，单位ms。</p>
</td>
</tr>
<tr id="row104710193476"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p15832101516615"><a name="p15832101516615"></a><a name="p15832101516615"></a>average_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p8832111515617"><a name="p8832111515617"></a><a name="p8832111515617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p14832615665"><a name="p14832615665"></a><a name="p14832615665"></a>语句在数据库实例上的平均执行时间，单位ms。</p>
</td>
</tr>
<tr id="row44751920470"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p983212151618"><a name="p983212151618"></a><a name="p983212151618"></a>dntime_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p783281511617"><a name="p783281511617"></a><a name="p783281511617"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p20832191514617"><a name="p20832191514617"></a><a name="p20832191514617"></a>语句在数据库实例间的执行时间倾斜率。</p>
</td>
</tr>
<tr id="row184718194473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p5832415264"><a name="p5832415264"></a><a name="p5832415264"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p138329151661"><a name="p138329151661"></a><a name="p138329151661"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p16832215861"><a name="p16832215861"></a><a name="p16832215861"></a>语句在数据库实例上的最小CPU时间，单位ms。</p>
</td>
</tr>
<tr id="row20451619144710"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p38321715166"><a name="p38321715166"></a><a name="p38321715166"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p13832715366"><a name="p13832715366"></a><a name="p13832715366"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p983318159616"><a name="p983318159616"></a><a name="p983318159616"></a>语句在数据库实例上的最大CPU时间，单位ms。</p>
</td>
</tr>
<tr id="row174561916473"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1983351513616"><a name="p1983351513616"></a><a name="p1983351513616"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p683317151761"><a name="p683317151761"></a><a name="p683317151761"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1833161518617"><a name="p1833161518617"></a><a name="p1833161518617"></a>语句在数据库实例上的CPU总时间，单位ms。</p>
</td>
</tr>
<tr id="row1244201918476"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p3833151513616"><a name="p3833151513616"></a><a name="p3833151513616"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p6833115267"><a name="p6833115267"></a><a name="p6833115267"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p128335152614"><a name="p128335152614"></a><a name="p128335152614"></a>语句在数据库实例间的CPU时间倾斜率。</p>
</td>
</tr>
<tr id="row86001914135213"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p10621338205213"><a name="p10621338205213"></a><a name="p10621338205213"></a>min_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1062113812524"><a name="p1062113812524"></a><a name="p1062113812524"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p96211389521"><a name="p96211389521"></a><a name="p96211389521"></a>语句在数据库实例上的每秒最小IO峰值（列存单位是次/s，行存单位是万次/s）。</p>
</td>
</tr>
<tr id="row518319212523"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p66343810522"><a name="p66343810522"></a><a name="p66343810522"></a>max_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p196353816526"><a name="p196353816526"></a><a name="p196353816526"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1963153845212"><a name="p1963153845212"></a><a name="p1963153845212"></a>语句在数据库实例上的每秒最大IO峰值（列存单位是次/s，行存单位是万次/s）。</p>
</td>
</tr>
<tr id="row19456325165215"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1763838175213"><a name="p1763838175213"></a><a name="p1763838175213"></a>average_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p26319381526"><a name="p26319381526"></a><a name="p26319381526"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p106316389520"><a name="p106316389520"></a><a name="p106316389520"></a>语句在数据库实例上的每秒平均IO峰值（列存单位是次/s，行存单位是万次/s）。</p>
</td>
</tr>
<tr id="row221630165216"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1063143815214"><a name="p1063143815214"></a><a name="p1063143815214"></a>iops_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1631738155219"><a name="p1631738155219"></a><a name="p1631738155219"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p66343815215"><a name="p66343815215"></a><a name="p66343815215"></a>语句在数据库实例间的IO倾斜率。</p>
</td>
</tr>
<tr id="row104411924718"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p118332151863"><a name="p118332151863"></a><a name="p118332151863"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1383318153613"><a name="p1383318153613"></a><a name="p1383318153613"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><div class="p" id="p18833191517617"><a name="p18833191517617"></a><a name="p18833191517617"></a>主要显示如下几类告警信息：<a name="ul0986145181819"></a><a name="ul0986145181819"></a><ul id="ul0986145181819"><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</div>
</td>
</tr>
<tr id="row544161910477"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1583301514611"><a name="p1583301514611"></a><a name="p1583301514611"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1833101519610"><a name="p1833101519610"></a><a name="p1833101519610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p98336151469"><a name="p98336151469"></a><a name="p98336151469"></a>语句执行使用的内部query id。</p>
</td>
</tr>
<tr id="row1143181934718"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p178331215466"><a name="p178331215466"></a><a name="p178331215466"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p883313158618"><a name="p883313158618"></a><a name="p883313158618"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p9833111510613"><a name="p9833111510613"></a><a name="p9833111510613"></a>正在执行的语句。</p>
</td>
</tr>
<tr id="row1542619144715"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p1383471518620"><a name="p1383471518620"></a><a name="p1383471518620"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p1483451513610"><a name="p1483451513610"></a><a name="p1483451513610"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p1883421516614"><a name="p1883421516614"></a><a name="p1883421516614"></a>语句的执行计划。</p>
</td>
</tr>
<tr id="row178973320279"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p589718317273"><a name="p589718317273"></a><a name="p589718317273"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p6897431270"><a name="p6897431270"></a><a name="p6897431270"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p789717311275"><a name="p789717311275"></a><a name="p789717311275"></a>语句所属用户对应的逻辑数据库实例。</p>
</td>
</tr>
<tr id="row1655215718013"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p628521318590"><a name="p628521318590"></a><a name="p628521318590"></a>top_cpu_dn</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p182861313165916"><a name="p182861313165916"></a><a name="p182861313165916"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p10286101313597"><a name="p10286101313597"></a><a name="p10286101313597"></a>cpu使用量topN信息。</p>
</td>
</tr>
<tr id="row8849163516505"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.4.1.1 "><p id="p9865638145012"><a name="p9865638145012"></a><a name="p9865638145012"></a>top_mem_dn</p>
</td>
<td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.4.1.2 "><p id="p158502035165011"><a name="p158502035165011"></a><a name="p158502035165011"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="p58501135195015"><a name="p58501135195015"></a><a name="p58501135195015"></a>内存使用量topN信息。</p>
</td>
</tr>
</tbody>
</table>
