# GS\_WLM\_SESSION\_INFO\_ALL<a name="ZH-CN_TOPIC_0000001151962063"></a>

GS\_WLM\_SESSION\_INFO\_ALL视图显示在数据库实例上执行作业结束后的负载管理记录。查询该视图需要sysadmin或者monitor admin权限。

**表 1**  GS\_WLM\_SESSION\_INFO\_ALL的字段

<a name="table1825212132512"></a>
<table><thead align="left"><tr id="row925171222510"><th class="cellrowborder" valign="top" width="21.782178217821784%" id="mcps1.2.4.1.1"><p id="p1825112132513"><a name="p1825112132513"></a><a name="p1825112132513"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.81188118811881%" id="mcps1.2.4.1.2"><p id="p2253121254"><a name="p2253121254"></a><a name="p2253121254"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="59.4059405940594%" id="mcps1.2.4.1.3"><p id="p182561213259"><a name="p182561213259"></a><a name="p182561213259"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row2251312122520"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p6601473915"><a name="zh-cn_topic_0112535431_p6601473915"></a><a name="zh-cn_topic_0112535431_p6601473915"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p36013463914"><a name="zh-cn_topic_0112535431_p36013463914"></a><a name="zh-cn_topic_0112535431_p36013463914"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p16084113913"><a name="zh-cn_topic_0112535431_p16084113913"></a><a name="zh-cn_topic_0112535431_p16084113913"></a>连接后端的数据库OID。</p>
</td>
</tr>
<tr id="row325151218256"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p12609418397"><a name="zh-cn_topic_0112535431_p12609418397"></a><a name="zh-cn_topic_0112535431_p12609418397"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p3606417399"><a name="zh-cn_topic_0112535431_p3606417399"></a><a name="zh-cn_topic_0112535431_p3606417399"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p1160114143914"><a name="zh-cn_topic_0112535431_p1160114143914"></a><a name="zh-cn_topic_0112535431_p1160114143914"></a>连接后端的数据库名称。</p>
</td>
</tr>
<tr id="row326131213258"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p560348390"><a name="zh-cn_topic_0112535431_p560348390"></a><a name="zh-cn_topic_0112535431_p560348390"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p10605483915"><a name="zh-cn_topic_0112535431_p10605483915"></a><a name="zh-cn_topic_0112535431_p10605483915"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p6601744397"><a name="zh-cn_topic_0112535431_p6601744397"></a><a name="zh-cn_topic_0112535431_p6601744397"></a>模式的名称。</p>
</td>
</tr>
<tr id="row16265122259"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p17602418392"><a name="zh-cn_topic_0112535431_p17602418392"></a><a name="zh-cn_topic_0112535431_p17602418392"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p1660134133912"><a name="zh-cn_topic_0112535431_p1660134133912"></a><a name="zh-cn_topic_0112535431_p1660134133912"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p146015473916"><a name="zh-cn_topic_0112535431_p146015473916"></a><a name="zh-cn_topic_0112535431_p146015473916"></a>语句执行的<span id="text42089314193"><a name="text42089314193"></a><a name="text42089314193"></a>CN</span>名称。</p>
</td>
</tr>
<tr id="row1926111222518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p15601141394"><a name="zh-cn_topic_0112535431_p15601141394"></a><a name="zh-cn_topic_0112535431_p15601141394"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p156034123911"><a name="zh-cn_topic_0112535431_p156034123911"></a><a name="zh-cn_topic_0112535431_p156034123911"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p1860649397"><a name="zh-cn_topic_0112535431_p1860649397"></a><a name="zh-cn_topic_0112535431_p1860649397"></a>连接到后端的用户名。</p>
</td>
</tr>
<tr id="row14261612102511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p26019419397"><a name="zh-cn_topic_0112535431_p26019419397"></a><a name="zh-cn_topic_0112535431_p26019419397"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p15601246399"><a name="zh-cn_topic_0112535431_p15601246399"></a><a name="zh-cn_topic_0112535431_p15601246399"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p7626415391"><a name="zh-cn_topic_0112535431_p7626415391"></a><a name="zh-cn_topic_0112535431_p7626415391"></a>连接到后端的应用名。</p>
</td>
</tr>
<tr id="row826151242511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p116216453913"><a name="zh-cn_topic_0112535431_p116216453913"></a><a name="zh-cn_topic_0112535431_p116216453913"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p166219413396"><a name="zh-cn_topic_0112535431_p166219413396"></a><a name="zh-cn_topic_0112535431_p166219413396"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p11628410399"><a name="zh-cn_topic_0112535431_p11628410399"></a><a name="zh-cn_topic_0112535431_p11628410399"></a>连接到后端的客户端的IP地址。如果此字段是null，它表明通过服务器机器上UNIX套接字连接客户端或者这是内部进程，如autovacuum。</p>
</td>
</tr>
<tr id="row626191216257"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1362184103911"><a name="zh-cn_topic_0112535431_p1362184103911"></a><a name="zh-cn_topic_0112535431_p1362184103911"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p562174113919"><a name="zh-cn_topic_0112535431_p562174113919"></a><a name="zh-cn_topic_0112535431_p562174113919"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p262643393"><a name="zh-cn_topic_0112535431_p262643393"></a><a name="zh-cn_topic_0112535431_p262643393"></a>客户端的主机名，这个字段是通过client_addr的反向DNS查找得到。这个字段只有在启动log_hostname且使用IP连接时才非空。</p>
</td>
</tr>
<tr id="row62621252516"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p146254113911"><a name="zh-cn_topic_0112535431_p146254113911"></a><a name="zh-cn_topic_0112535431_p146254113911"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p1362204103917"><a name="zh-cn_topic_0112535431_p1362204103917"></a><a name="zh-cn_topic_0112535431_p1362204103917"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p86216411395"><a name="zh-cn_topic_0112535431_p86216411395"></a><a name="zh-cn_topic_0112535431_p86216411395"></a>客户端用于与后端通讯的TCP端口号，如果使用Unix套接字，则为-1。</p>
</td>
</tr>
<tr id="row1526111218251"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p9621544396"><a name="zh-cn_topic_0112535431_p9621544396"></a><a name="zh-cn_topic_0112535431_p9621544396"></a>query_band</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p136210419393"><a name="zh-cn_topic_0112535431_p136210419393"></a><a name="zh-cn_topic_0112535431_p136210419393"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p106213410394"><a name="zh-cn_topic_0112535431_p106213410394"></a><a name="zh-cn_topic_0112535431_p106213410394"></a>用于标示作业类型，可通过GUC参数query_band进行设置，默认为空字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row1415416417394"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p116218463915"><a name="zh-cn_topic_0112535431_p116218463915"></a><a name="zh-cn_topic_0112535431_p116218463915"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p1462104103916"><a name="zh-cn_topic_0112535431_p1462104103916"></a><a name="zh-cn_topic_0112535431_p1462104103916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1562813408418"><a name="p1562813408418"></a><a name="p1562813408418"></a>语句执行前的阻塞时间，包含语句解析和优化时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row31541045391"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p4621749395"><a name="zh-cn_topic_0112535431_p4621749395"></a><a name="zh-cn_topic_0112535431_p4621749395"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_a58bfa63ef6bd442b8e58362f3c0f048c"><a name="zh-cn_topic_0112535431_a58bfa63ef6bd442b8e58362f3c0f048c"></a><a name="zh-cn_topic_0112535431_a58bfa63ef6bd442b8e58362f3c0f048c"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p10629483918"><a name="zh-cn_topic_0112535431_p10629483918"></a><a name="zh-cn_topic_0112535431_p10629483918"></a>语句执行的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row15154747399"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p19628493917"><a name="zh-cn_topic_0112535431_p19628493917"></a><a name="zh-cn_topic_0112535431_p19628493917"></a>finish_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p183487172297"><a name="zh-cn_topic_0112535431_p183487172297"></a><a name="zh-cn_topic_0112535431_p183487172297"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p1862154193918"><a name="zh-cn_topic_0112535431_p1862154193918"></a><a name="zh-cn_topic_0112535431_p1862154193918"></a>语句执行的结束时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row91541346395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p2629433911"><a name="zh-cn_topic_0112535431_p2629433911"></a><a name="zh-cn_topic_0112535431_p2629433911"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p162104133913"><a name="zh-cn_topic_0112535431_p162104133913"></a><a name="zh-cn_topic_0112535431_p162104133913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p1262134123918"><a name="zh-cn_topic_0112535431_p1262134123918"></a><a name="zh-cn_topic_0112535431_p1262134123918"></a>语句实际执行的时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row131545453919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p11621417398"><a name="zh-cn_topic_0112535431_p11621417398"></a><a name="zh-cn_topic_0112535431_p11621417398"></a>estimate_total_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p15629416394"><a name="zh-cn_topic_0112535431_p15629416394"></a><a name="zh-cn_topic_0112535431_p15629416394"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p762147398"><a name="zh-cn_topic_0112535431_p762147398"></a><a name="zh-cn_topic_0112535431_p762147398"></a>语句预估执行时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row17154748398"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p46211417392"><a name="zh-cn_topic_0112535431_p46211417392"></a><a name="zh-cn_topic_0112535431_p46211417392"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p11620412392"><a name="zh-cn_topic_0112535431_p11620412392"></a><a name="zh-cn_topic_0112535431_p11620412392"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p13627420397"><a name="zh-cn_topic_0112535431_p13627420397"></a><a name="zh-cn_topic_0112535431_p13627420397"></a>语句执行结束状态：正常为finished，异常为aborted。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row1715414193918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p106214410393"><a name="zh-cn_topic_0112535431_p106214410393"></a><a name="zh-cn_topic_0112535431_p106214410393"></a>abort_info</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p146218415395"><a name="zh-cn_topic_0112535431_p146218415395"></a><a name="zh-cn_topic_0112535431_p146218415395"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p1462144123919"><a name="zh-cn_topic_0112535431_p1462144123919"></a><a name="zh-cn_topic_0112535431_p1462144123919"></a>语句执行结束状态为aborted时显示异常信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row1015413416396"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p5629433913"><a name="zh-cn_topic_0112535431_p5629433913"></a><a name="zh-cn_topic_0112535431_p5629433913"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p106219420393"><a name="zh-cn_topic_0112535431_p106219420393"></a><a name="zh-cn_topic_0112535431_p106219420393"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p146210416394"><a name="zh-cn_topic_0112535431_p146210416394"></a><a name="zh-cn_topic_0112535431_p146210416394"></a>用户使用的资源池。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row161543413913"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p96414417397"><a name="zh-cn_topic_0112535431_p96414417397"></a><a name="zh-cn_topic_0112535431_p96414417397"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p106415413910"><a name="zh-cn_topic_0112535431_p106415413910"></a><a name="zh-cn_topic_0112535431_p106415413910"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p206412414397"><a name="zh-cn_topic_0112535431_p206412414397"></a><a name="zh-cn_topic_0112535431_p206412414397"></a>语句所使用的Cgroup。</p>
</td>
</tr>
<tr id="row14465758135216"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1467458165210"><a name="p1467458165210"></a><a name="p1467458165210"></a>estimate_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1046785815212"><a name="p1046785815212"></a><a name="p1046785815212"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p10467145811529"><a name="p10467145811529"></a><a name="p10467145811529"></a>语句估算内存大小。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row51547419390"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p126417433914"><a name="zh-cn_topic_0112535431_p126417433914"></a><a name="zh-cn_topic_0112535431_p126417433914"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p96412416392"><a name="zh-cn_topic_0112535431_p96412416392"></a><a name="zh-cn_topic_0112535431_p96412416392"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p164114133911"><a name="zh-cn_topic_0112535431_p164114133911"></a><a name="zh-cn_topic_0112535431_p164114133911"></a>语句在<span id="text2087163413911"><a name="text2087163413911"></a><a name="text2087163413911"></a>所有DN</span>上的最小内存峰值，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row12154144183915"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1464124173911"><a name="zh-cn_topic_0112535431_p1464124173911"></a><a name="zh-cn_topic_0112535431_p1464124173911"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p156413433912"><a name="zh-cn_topic_0112535431_p156413433912"></a><a name="zh-cn_topic_0112535431_p156413433912"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p7641443915"><a name="zh-cn_topic_0112535431_p7641443915"></a><a name="zh-cn_topic_0112535431_p7641443915"></a>语句在<span id="text11134736103910"><a name="text11134736103910"></a><a name="text11134736103910"></a>所有DN</span>上的最大内存峰值，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row1615444123919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p18641942392"><a name="zh-cn_topic_0112535431_p18641942392"></a><a name="zh-cn_topic_0112535431_p18641942392"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p8646433911"><a name="zh-cn_topic_0112535431_p8646433911"></a><a name="zh-cn_topic_0112535431_p8646433911"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p15644433913"><a name="zh-cn_topic_0112535431_p15644433913"></a><a name="zh-cn_topic_0112535431_p15644433913"></a>语句执行过程中的内存使用平均值，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row31543473918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p56418413398"><a name="zh-cn_topic_0112535431_p56418413398"></a><a name="zh-cn_topic_0112535431_p56418413398"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p186418411391"><a name="zh-cn_topic_0112535431_p186418411391"></a><a name="zh-cn_topic_0112535431_p186418411391"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p6641641390"><a name="zh-cn_topic_0112535431_p6641641390"></a><a name="zh-cn_topic_0112535431_p6641641390"></a>语句<span id="text6547035423"><a name="text6547035423"></a><a name="text6547035423"></a>各DN</span>间的内存使用倾斜率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row131548412391"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p146412415396"><a name="zh-cn_topic_0112535431_p146412415396"></a><a name="zh-cn_topic_0112535431_p146412415396"></a>spill_info</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p4645493920"><a name="zh-cn_topic_0112535431_p4645493920"></a><a name="zh-cn_topic_0112535431_p4645493920"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0112535431_p166414433910"><a name="zh-cn_topic_0112535431_p166414433910"></a><a name="zh-cn_topic_0112535431_p166414433910"></a>语句在<span id="text1138213816392"><a name="text1138213816392"></a><a name="text1138213816392"></a>所有DN</span>上的下盘信息：<a name="ul184242191366"></a><a name="ul184242191366"></a><ul id="ul184242191366"><li>None：<span id="text2092916423399"><a name="text2092916423399"></a><a name="text2092916423399"></a>所有DN</span>均未下盘。</li><li>All：<span id="text9221124573911"><a name="text9221124573911"></a><a name="text9221124573911"></a>所有DN</span>均下盘。</li><li>[a:b]：数量为b个<span id="text16588143684816"><a name="text16588143684816"></a><a name="text16588143684816"></a>DN</span>中有a个<span id="text1265317370483"><a name="text1265317370483"></a><a name="text1265317370483"></a>DN</span>下盘。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row4154184143910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p06415419392"><a name="zh-cn_topic_0112535431_p06415419392"></a><a name="zh-cn_topic_0112535431_p06415419392"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p1964174143914"><a name="zh-cn_topic_0112535431_p1964174143914"></a><a name="zh-cn_topic_0112535431_p1964174143914"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p1945114475411"><a name="zh-cn_topic_0112535431_p1945114475411"></a><a name="zh-cn_topic_0112535431_p1945114475411"></a>若发生下盘，<span id="text2019477391"><a name="text2019477391"></a><a name="text2019477391"></a>所有DN</span>上下盘的最小数据量，单位MB，默认为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row181541048395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1564541398"><a name="zh-cn_topic_0112535431_p1564541398"></a><a name="zh-cn_topic_0112535431_p1564541398"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p126412443912"><a name="zh-cn_topic_0112535431_p126412443912"></a><a name="zh-cn_topic_0112535431_p126412443912"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p645212465415"><a name="zh-cn_topic_0112535431_p645212465415"></a><a name="zh-cn_topic_0112535431_p645212465415"></a>若发生下盘，<span id="text72629488398"><a name="text72629488398"></a><a name="text72629488398"></a>所有DN</span>上下盘的最大数据量，单位MB，默认为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row615416413913"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p15641413399"><a name="zh-cn_topic_0112535431_p15641413399"></a><a name="zh-cn_topic_0112535431_p15641413399"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p20641949398"><a name="zh-cn_topic_0112535431_p20641949398"></a><a name="zh-cn_topic_0112535431_p20641949398"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p945204125410"><a name="zh-cn_topic_0112535431_p945204125410"></a><a name="zh-cn_topic_0112535431_p945204125410"></a>若发生下盘，<span id="text10743124963919"><a name="text10743124963919"></a><a name="text10743124963919"></a>所有DN</span>上下盘的平均数据量，单位MB，默认为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row101541847398"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1164194173910"><a name="zh-cn_topic_0112535431_p1164194173910"></a><a name="zh-cn_topic_0112535431_p1164194173910"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p9648493918"><a name="zh-cn_topic_0112535431_p9648493918"></a><a name="zh-cn_topic_0112535431_p9648493918"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p56411418394"><a name="zh-cn_topic_0112535431_p56411418394"></a><a name="zh-cn_topic_0112535431_p56411418394"></a>若发生下盘，<span id="text1689544374817"><a name="text1689544374817"></a><a name="text1689544374817"></a>DN</span>间下盘倾斜率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row1915454123919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p186694153912"><a name="zh-cn_topic_0112535431_p186694153912"></a><a name="zh-cn_topic_0112535431_p186694153912"></a>min_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p86684103910"><a name="zh-cn_topic_0112535431_p86684103910"></a><a name="zh-cn_topic_0112535431_p86684103910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p96612433918"><a name="zh-cn_topic_0112535431_p96612433918"></a><a name="zh-cn_topic_0112535431_p96612433918"></a>语句在<span id="text17474151133913"><a name="text17474151133913"></a><a name="text17474151133913"></a>所有DN</span>上的最小执行时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row31521644398"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p16661443392"><a name="zh-cn_topic_0112535431_p16661443392"></a><a name="zh-cn_topic_0112535431_p16661443392"></a>max_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p366114193918"><a name="zh-cn_topic_0112535431_p366114193918"></a><a name="zh-cn_topic_0112535431_p366114193918"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p166610410391"><a name="zh-cn_topic_0112535431_p166610410391"></a><a name="zh-cn_topic_0112535431_p166610410391"></a>语句在<span id="text12852135313918"><a name="text12852135313918"></a><a name="text12852135313918"></a>所有DN</span>上的最大执行时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row415217443910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p146612412392"><a name="zh-cn_topic_0112535431_p146612412392"></a><a name="zh-cn_topic_0112535431_p146612412392"></a>average_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p1766949395"><a name="zh-cn_topic_0112535431_p1766949395"></a><a name="zh-cn_topic_0112535431_p1766949395"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p766114173911"><a name="zh-cn_topic_0112535431_p766114173911"></a><a name="zh-cn_topic_0112535431_p766114173911"></a>语句在<span id="text7797564399"><a name="text7797564399"></a><a name="text7797564399"></a>所有DN</span>上的平均执行时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row1715212420392"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p186619414398"><a name="zh-cn_topic_0112535431_p186619414398"></a><a name="zh-cn_topic_0112535431_p186619414398"></a>dntime_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p166616433915"><a name="zh-cn_topic_0112535431_p166616433915"></a><a name="zh-cn_topic_0112535431_p166616433915"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p15661641394"><a name="zh-cn_topic_0112535431_p15661641394"></a><a name="zh-cn_topic_0112535431_p15661641394"></a>语句在<span id="text172915144214"><a name="text172915144214"></a><a name="text172915144214"></a>各DN</span>间的执行时间倾斜率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row215214416394"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p76618419395"><a name="zh-cn_topic_0112535431_p76618419395"></a><a name="zh-cn_topic_0112535431_p76618419395"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p5666403919"><a name="zh-cn_topic_0112535431_p5666403919"></a><a name="zh-cn_topic_0112535431_p5666403919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p196694133917"><a name="zh-cn_topic_0112535431_p196694133917"></a><a name="zh-cn_topic_0112535431_p196694133917"></a>语句在<span id="text96260573392"><a name="text96260573392"></a><a name="text96260573392"></a>所有DN</span>上的最小CPU时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row161528417392"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p20661413399"><a name="zh-cn_topic_0112535431_p20661413399"></a><a name="zh-cn_topic_0112535431_p20661413399"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p96644143916"><a name="zh-cn_topic_0112535431_p96644143916"></a><a name="zh-cn_topic_0112535431_p96644143916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p13661948399"><a name="zh-cn_topic_0112535431_p13661948399"></a><a name="zh-cn_topic_0112535431_p13661948399"></a>语句在<span id="text37758581398"><a name="text37758581398"></a><a name="text37758581398"></a>所有DN</span>上的最大CPU时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row115219413394"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p176613483914"><a name="zh-cn_topic_0112535431_p176613483914"></a><a name="zh-cn_topic_0112535431_p176613483914"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p66624193917"><a name="zh-cn_topic_0112535431_p66624193917"></a><a name="zh-cn_topic_0112535431_p66624193917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p9660419393"><a name="zh-cn_topic_0112535431_p9660419393"></a><a name="zh-cn_topic_0112535431_p9660419393"></a>语句在<span id="text1911110184019"><a name="text1911110184019"></a><a name="text1911110184019"></a>所有DN</span>上的CPU总时间，单位ms。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row41525416393"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p17661453919"><a name="zh-cn_topic_0112535431_p17661453919"></a><a name="zh-cn_topic_0112535431_p17661453919"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p2667415395"><a name="zh-cn_topic_0112535431_p2667415395"></a><a name="zh-cn_topic_0112535431_p2667415395"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p8668413919"><a name="zh-cn_topic_0112535431_p8668413919"></a><a name="zh-cn_topic_0112535431_p8668413919"></a>语句在<span id="text1779655274811"><a name="text1779655274811"></a><a name="text1779655274811"></a>DN</span>间的CPU时间倾斜率。</p>
</td>
</tr>
<tr id="row19498105011260"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1880915202270"><a name="p1880915202270"></a><a name="p1880915202270"></a>min_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1480919206276"><a name="p1480919206276"></a><a name="p1480919206276"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1380982018278"><a name="p1380982018278"></a><a name="p1380982018278"></a>语句在<span id="text8671131114018"><a name="text8671131114018"></a><a name="text8671131114018"></a>所有DN</span>上的每秒最小IO峰值（列存单位是次/s，行存单位是万次/s）。</p>
</td>
</tr>
<tr id="row19149101072913"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1912116233291"><a name="p1912116233291"></a><a name="p1912116233291"></a>max_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p9121123172913"><a name="p9121123172913"></a><a name="p9121123172913"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p191238239292"><a name="p191238239292"></a><a name="p191238239292"></a>语句在<span id="text16212183154011"><a name="text16212183154011"></a><a name="text16212183154011"></a>所有DN</span>上的每秒最大IO峰值（列存单位是次/s，行存单位是万次/s）。</p>
</td>
</tr>
<tr id="row4897202782912"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p36526352291"><a name="p36526352291"></a><a name="p36526352291"></a>average_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p13652103519299"><a name="p13652103519299"></a><a name="p13652103519299"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1652113517293"><a name="p1652113517293"></a><a name="p1652113517293"></a>语句在<span id="text18461146407"><a name="text18461146407"></a><a name="text18461146407"></a>所有DN</span>上的每秒平均IO峰值（列存单位是次/s，行存单位是万次/s）。</p>
</td>
</tr>
<tr id="row15463154013294"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1557874882911"><a name="p1557874882911"></a><a name="p1557874882911"></a>iops_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1757874892918"><a name="p1757874892918"></a><a name="p1757874892918"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p16578184872911"><a name="p16578184872911"></a><a name="p16578184872911"></a>语句在<span id="text1767185713484"><a name="text1767185713484"></a><a name="text1767185713484"></a>DN</span>间的IO倾斜率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row131528433911"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1167134133919"><a name="zh-cn_topic_0112535431_p1167134133919"></a><a name="zh-cn_topic_0112535431_p1167134133919"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p76724153911"><a name="zh-cn_topic_0112535431_p76724153911"></a><a name="zh-cn_topic_0112535431_p76724153911"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0112535431_p1367104103912"><a name="zh-cn_topic_0112535431_p1367104103912"></a><a name="zh-cn_topic_0112535431_p1367104103912"></a>主要显示如下几类告警信息以及<a href="../PerformanceTuningGuide/SQL自诊断.md">SQL自诊断调优相关告警</a>：<a name="ul1751385241714"></a><a name="ul1751385241714"></a><ul id="ul1751385241714"><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row115244133914"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p46720416397"><a name="zh-cn_topic_0112535431_p46720416397"></a><a name="zh-cn_topic_0112535431_p46720416397"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p8674453918"><a name="zh-cn_topic_0112535431_p8674453918"></a><a name="zh-cn_topic_0112535431_p8674453918"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p5671843393"><a name="zh-cn_topic_0112535431_p5671843393"></a><a name="zh-cn_topic_0112535431_p5671843393"></a>语句执行使用的内部query id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row0152846395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1667749393"><a name="zh-cn_topic_0112535431_p1667749393"></a><a name="zh-cn_topic_0112535431_p1667749393"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p367545392"><a name="zh-cn_topic_0112535431_p367545392"></a><a name="zh-cn_topic_0112535431_p367545392"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p867114173913"><a name="zh-cn_topic_0112535431_p867114173913"></a><a name="zh-cn_topic_0112535431_p867114173913"></a>执行的语句。</p>
</td>
</tr>
<tr id="zh-cn_topic_0112535431_row01502044395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0112535431_p1767841391"><a name="zh-cn_topic_0112535431_p1767841391"></a><a name="zh-cn_topic_0112535431_p1767841391"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0112535431_p3671242399"><a name="zh-cn_topic_0112535431_p3671242399"></a><a name="zh-cn_topic_0112535431_p3671242399"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0112535431_p196818412396"><a name="zh-cn_topic_0112535431_p196818412396"></a><a name="zh-cn_topic_0112535431_p196818412396"></a>语句的执行计划。</p>
</td>
</tr>
<tr id="row115501321134518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p20550152119453"><a name="p20550152119453"></a><a name="p20550152119453"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p2550122184511"><a name="p2550122184511"></a><a name="p2550122184511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p4550152115450"><a name="p4550152115450"></a><a name="p4550152115450"></a>语句所属用户对应的逻辑<span id="text828991392810"><a name="text828991392810"></a><a name="text828991392810"></a>集群</span>。</p>
</td>
</tr>
<tr id="row1089134535015"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p2901345125016"><a name="p2901345125016"></a><a name="p2901345125016"></a>cpu_top1_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p13901545205019"><a name="p13901545205019"></a><a name="p13901545205019"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p19901945115015"><a name="p19901945115015"></a><a name="p19901945115015"></a>cpu使用率第1的节点名称。</p>
</td>
</tr>
<tr id="row4642163215111"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1664314329515"><a name="p1664314329515"></a><a name="p1664314329515"></a>cpu_top2_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1564383215113"><a name="p1564383215113"></a><a name="p1564383215113"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p26432323516"><a name="p26432323516"></a><a name="p26432323516"></a>cpu使用率第2的节点名称。</p>
</td>
</tr>
<tr id="row136319518512"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p116465135111"><a name="p116465135111"></a><a name="p116465135111"></a>cpu_top3_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p126418575114"><a name="p126418575114"></a><a name="p126418575114"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p13641151515"><a name="p13641151515"></a><a name="p13641151515"></a>cpu使用率第3的节点名称。</p>
</td>
</tr>
<tr id="row123351218195215"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p033512187522"><a name="p033512187522"></a><a name="p033512187522"></a>cpu_top4_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p633515186527"><a name="p633515186527"></a><a name="p633515186527"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p20335141895212"><a name="p20335141895212"></a><a name="p20335141895212"></a>cpu使用率第4的节点名称。</p>
</td>
</tr>
<tr id="row839132115214"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p124072145217"><a name="p124072145217"></a><a name="p124072145217"></a>cpu_top5_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p17401621155210"><a name="p17401621155210"></a><a name="p17401621155210"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p19405214526"><a name="p19405214526"></a><a name="p19405214526"></a>cpu使用率第5的节点名称。</p>
</td>
</tr>
<tr id="row209162215555"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p109171212557"><a name="p109171212557"></a><a name="p109171212557"></a>mem_top1_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p199181926556"><a name="p199181926556"></a><a name="p199181926556"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p199181215556"><a name="p199181215556"></a><a name="p199181215556"></a>内存使用量第1的节点名称。</p>
</td>
</tr>
<tr id="row121491067555"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1115026165519"><a name="p1115026165519"></a><a name="p1115026165519"></a>mem_top2_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p41501615510"><a name="p41501615510"></a><a name="p41501615510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p915014613553"><a name="p915014613553"></a><a name="p915014613553"></a>内存使用量第2的节点名称。</p>
</td>
</tr>
<tr id="row1532378115518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1332318845518"><a name="p1332318845518"></a><a name="p1332318845518"></a>mem_top3_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p183233825520"><a name="p183233825520"></a><a name="p183233825520"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1032478105519"><a name="p1032478105519"></a><a name="p1032478105519"></a>内存使用量第3的节点名称。</p>
</td>
</tr>
<tr id="row621941095518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p221916106554"><a name="p221916106554"></a><a name="p221916106554"></a>mem_top4_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p20219101095515"><a name="p20219101095515"></a><a name="p20219101095515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p172206104551"><a name="p172206104551"></a><a name="p172206104551"></a>内存使用量第4的节点名称。</p>
</td>
</tr>
<tr id="row512418122556"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p10124171255514"><a name="p10124171255514"></a><a name="p10124171255514"></a>mem_top5_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p7125812185510"><a name="p7125812185510"></a><a name="p7125812185510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1712541212552"><a name="p1712541212552"></a><a name="p1712541212552"></a>内存使用量第5的节点名称。</p>
</td>
</tr>
<tr id="row9633617125611"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p4634111755618"><a name="p4634111755618"></a><a name="p4634111755618"></a>cpu_top1_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p76340176568"><a name="p76340176568"></a><a name="p76340176568"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p963481735614"><a name="p963481735614"></a><a name="p963481735614"></a>cpu使用率。</p>
</td>
</tr>
<tr id="row12833112011567"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1683342011564"><a name="p1683342011564"></a><a name="p1683342011564"></a>cpu_top2_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1883432065613"><a name="p1883432065613"></a><a name="p1883432065613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p6834142019561"><a name="p6834142019561"></a><a name="p6834142019561"></a>cpu使用率。</p>
</td>
</tr>
<tr id="row7878237563"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p48715238566"><a name="p48715238566"></a><a name="p48715238566"></a>cpu_top3_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p18782314564"><a name="p18782314564"></a><a name="p18782314564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1487023155614"><a name="p1487023155614"></a><a name="p1487023155614"></a>cpu使用率。</p>
</td>
</tr>
<tr id="row3850162419568"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p385013244565"><a name="p385013244565"></a><a name="p385013244565"></a>cpu_top4_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p485082435611"><a name="p485082435611"></a><a name="p485082435611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p785052416564"><a name="p785052416564"></a><a name="p785052416564"></a>cpu使用率。</p>
</td>
</tr>
<tr id="row1946532635616"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1946552612561"><a name="p1946552612561"></a><a name="p1946552612561"></a>cpu_top5_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p144658262567"><a name="p144658262567"></a><a name="p144658262567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p846662620563"><a name="p846662620563"></a><a name="p846662620563"></a>cpu使用率。</p>
</td>
</tr>
<tr id="row7586101811580"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p5587111815589"><a name="p5587111815589"></a><a name="p5587111815589"></a>mem_top1_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p20587111865815"><a name="p20587111865815"></a><a name="p20587111865815"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1558791865820"><a name="p1558791865820"></a><a name="p1558791865820"></a>内存使用量。</p>
</td>
</tr>
<tr id="row116295226588"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p15630422195813"><a name="p15630422195813"></a><a name="p15630422195813"></a>mem_top2_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p156301722155817"><a name="p156301722155817"></a><a name="p156301722155817"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p8630162285814"><a name="p8630162285814"></a><a name="p8630162285814"></a>内存使用量。</p>
</td>
</tr>
<tr id="row17121224115812"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p12712924165818"><a name="p12712924165818"></a><a name="p12712924165818"></a>mem_top3_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p37131324105816"><a name="p37131324105816"></a><a name="p37131324105816"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p67131124125819"><a name="p67131124125819"></a><a name="p67131124125819"></a>内存使用量。</p>
</td>
</tr>
<tr id="row46762026175816"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1767662610583"><a name="p1767662610583"></a><a name="p1767662610583"></a>mem_top4_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1767613260587"><a name="p1767613260587"></a><a name="p1767613260587"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p4677726105818"><a name="p4677726105818"></a><a name="p4677726105818"></a>内存使用量。</p>
</td>
</tr>
<tr id="row14367182814589"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p133671428175818"><a name="p133671428175818"></a><a name="p133671428175818"></a>mem_top5_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10367122813587"><a name="p10367122813587"></a><a name="p10367122813587"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p836812845815"><a name="p836812845815"></a><a name="p836812845815"></a>内存使用量。</p>
</td>
</tr>
<tr id="row845161112597"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p11461811155914"><a name="p11461811155914"></a><a name="p11461811155914"></a>top_mem_dn</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p646111195912"><a name="p646111195912"></a><a name="p646111195912"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p124651118592"><a name="p124651118592"></a><a name="p124651118592"></a>内存使用量topN信息。</p>
</td>
</tr>
<tr id="row1928591316595"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p628521318590"><a name="p628521318590"></a><a name="p628521318590"></a>top_cpu_dn</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p182861313165916"><a name="p182861313165916"></a><a name="p182861313165916"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p10286101313597"><a name="p10286101313597"></a><a name="p10286101313597"></a>cpu使用量topN信息。</p>
</td>
</tr>
<tr id="row163161222514"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p123114122254"><a name="p123114122254"></a><a name="p123114122254"></a>n_returned_rows</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p231161214251"><a name="p231161214251"></a><a name="p231161214251"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p0318120257"><a name="p0318120257"></a><a name="p0318120257"></a>SELECT返回的结果集行数。</p>
</td>
</tr>
<tr id="row1631912172518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p43116128251"><a name="p43116128251"></a><a name="p43116128251"></a>n_tuples_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p173121211257"><a name="p173121211257"></a><a name="p173121211257"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p731141212254"><a name="p731141212254"></a><a name="p731141212254"></a>随机扫描行。</p>
</td>
</tr>
<tr id="row16316124257"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p6311912192516"><a name="p6311912192516"></a><a name="p6311912192516"></a>n_tuples_returned</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p143121212259"><a name="p143121212259"></a><a name="p143121212259"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p9321112132516"><a name="p9321112132516"></a><a name="p9321112132516"></a>顺序扫描行。</p>
</td>
</tr>
<tr id="row7329129254"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p43214126256"><a name="p43214126256"></a><a name="p43214126256"></a>n_tuples_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p14323128255"><a name="p14323128255"></a><a name="p14323128255"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1632101262515"><a name="p1632101262515"></a><a name="p1632101262515"></a>插入行。</p>
</td>
</tr>
<tr id="row332181202515"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1032121210251"><a name="p1032121210251"></a><a name="p1032121210251"></a>n_tuples_updated</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1432101212259"><a name="p1432101212259"></a><a name="p1432101212259"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p832212112515"><a name="p832212112515"></a><a name="p832212112515"></a>更新行。</p>
</td>
</tr>
<tr id="row113261252518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p83271216254"><a name="p83271216254"></a><a name="p83271216254"></a>n_tuples_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1432151213258"><a name="p1432151213258"></a><a name="p1432151213258"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p73219120254"><a name="p73219120254"></a><a name="p73219120254"></a>删除行。</p>
</td>
</tr>
<tr id="row1332612172518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1832101232514"><a name="p1832101232514"></a><a name="p1832101232514"></a>n_blocks_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p23281252519"><a name="p23281252519"></a><a name="p23281252519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p2328124252"><a name="p2328124252"></a><a name="p2328124252"></a>buffer的块访问次数。</p>
</td>
</tr>
<tr id="row1632712122518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p203201214253"><a name="p203201214253"></a><a name="p203201214253"></a>n_blocks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p103218120257"><a name="p103218120257"></a><a name="p103218120257"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p143211128258"><a name="p143211128258"></a><a name="p143211128258"></a>buffer的块命中次数。</p>
</td>
</tr>
<tr id="row11321212112515"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p193291252519"><a name="p193291252519"></a><a name="p193291252519"></a>db_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p193219129255"><a name="p193219129255"></a><a name="p193219129255"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1132412172517"><a name="p1132412172517"></a><a name="p1132412172517"></a>有效的DB时间花费，多线程将累加（单位：微秒）。</p>
</td>
</tr>
<tr id="row532141218253"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1832121213259"><a name="p1832121213259"></a><a name="p1832121213259"></a>cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1133151242514"><a name="p1133151242514"></a><a name="p1133151242514"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p183331213257"><a name="p183331213257"></a><a name="p183331213257"></a>CPU时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row93311292512"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p133141292512"><a name="p133141292512"></a><a name="p133141292512"></a>execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p333101218256"><a name="p333101218256"></a><a name="p333101218256"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p17331612152516"><a name="p17331612152516"></a><a name="p17331612152516"></a>执行器内执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row33371210258"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p17331912152510"><a name="p17331912152510"></a><a name="p17331912152510"></a>parse_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p143319127258"><a name="p143319127258"></a><a name="p143319127258"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p163331213259"><a name="p163331213259"></a><a name="p163331213259"></a>SQL解析时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1133101232519"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1333120259"><a name="p1333120259"></a><a name="p1333120259"></a>plan_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1233171213256"><a name="p1233171213256"></a><a name="p1233171213256"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1733181202512"><a name="p1733181202512"></a><a name="p1733181202512"></a>SQL生成计划时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row163371282519"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p203381282513"><a name="p203381282513"></a><a name="p203381282513"></a>rewrite_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p9331012162518"><a name="p9331012162518"></a><a name="p9331012162518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p163313127252"><a name="p163313127252"></a><a name="p163313127252"></a>SQL重写时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row1233112172517"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p6331112122518"><a name="p6331112122518"></a><a name="p6331112122518"></a>pl_execution_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1133412182519"><a name="p1133412182519"></a><a name="p1133412182519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p15331812162518"><a name="p15331812162518"></a><a name="p15331812162518"></a>plpgsql上的执行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row533181252513"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1933141213259"><a name="p1933141213259"></a><a name="p1933141213259"></a>pl_compilation_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p143351211253"><a name="p143351211253"></a><a name="p143351211253"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p134121218256"><a name="p134121218256"></a><a name="p134121218256"></a>plpgsql上的编译时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row934612132520"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1534212112513"><a name="p1534212112513"></a><a name="p1534212112513"></a>net_send_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p153413126256"><a name="p153413126256"></a><a name="p153413126256"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p133412127258"><a name="p133412127258"></a><a name="p133412127258"></a>网络上的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="row2034512182513"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p33441218259"><a name="p33441218259"></a><a name="p33441218259"></a>data_io_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p153419127253"><a name="p153419127253"></a><a name="p153419127253"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p17347124255"><a name="p17347124255"></a><a name="p17347124255"></a>IO上的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>is_slow_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>是否是慢SQL记录。</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt1_q</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>Q报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt2_simple_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>exec_simple_query执行耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt3_analyze_rewrite</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>pg_analyze_and_rewrite执行耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt4_plan_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>pg_plan_queries执行耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt5_light_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>exec_query_through_light_proxy执行耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt6_p</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>P报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt7_b</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>B报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt8_e</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>E报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt9_d</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>D报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt10_s</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>S报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt11_c</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>C报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt12_u</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>U报文执行的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt13_before_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>进入下一次报文处理前的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>srt14_after_query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>完成报文处理后的耗时（单位：微秒)</p>
</td>
</tr>
<tr id="row734912142511"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p19341412182516"><a name="p19341412182516"></a><a name="p19341412182516"></a>rtt_unknown</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10341212152518"><a name="p10341212152518"></a><a name="p10341212152518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p3347122252"><a name="p3347122252"></a><a name="p3347122252"></a>未知时间消耗，可能是session切换耗时（单位：微秒)</p>
</td>
</tr>
</tbody>
</table>


