# GS\_WLM\_SESSION\_HISTORY<a name="EN-US_TOPIC_0000001105522102"></a>

**GS\_WLM\_SESSION\_HISTORY**  displays load management information about all completed jobs executed by the current user on database instances. Only users with the** sysadmin**  or** monitor admin**  permission can query this view.

**Table  1**  GS\_WLM\_SESSION\_HISTORY columns

<a name="en-us_topic_0112535431_table75981925115018"></a>
<table><thead align="left"><tr id="en-us_topic_0112535431_row14599225175020"><th class="cellrowborder" valign="top" width="21.782178217821784%" id="mcps1.2.4.1.1"><p id="en-us_topic_0112535431_p1359922545010"><a name="en-us_topic_0112535431_p1359922545010"></a><a name="en-us_topic_0112535431_p1359922545010"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.81188118811881%" id="mcps1.2.4.1.2"><p id="en-us_topic_0112535431_p3599182520502"><a name="en-us_topic_0112535431_p3599182520502"></a><a name="en-us_topic_0112535431_p3599182520502"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="59.4059405940594%" id="mcps1.2.4.1.3"><p id="en-us_topic_0112535431_p175991225195015"><a name="en-us_topic_0112535431_p175991225195015"></a><a name="en-us_topic_0112535431_p175991225195015"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0112535431_row11156641395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p6601473915"><a name="en-us_topic_0112535431_p6601473915"></a><a name="en-us_topic_0112535431_p6601473915"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p36013463914"><a name="en-us_topic_0112535431_p36013463914"></a><a name="en-us_topic_0112535431_p36013463914"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p16084113913"><a name="en-us_topic_0112535431_p16084113913"></a><a name="en-us_topic_0112535431_p16084113913"></a>OID of the database this backend is connected to.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row3156134123918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p12609418397"><a name="en-us_topic_0112535431_p12609418397"></a><a name="en-us_topic_0112535431_p12609418397"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p3606417399"><a name="en-us_topic_0112535431_p3606417399"></a><a name="en-us_topic_0112535431_p3606417399"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p1160114143914"><a name="en-us_topic_0112535431_p1160114143914"></a><a name="en-us_topic_0112535431_p1160114143914"></a>Name of the database the backend is connected to.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row41569413919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p560348390"><a name="en-us_topic_0112535431_p560348390"></a><a name="en-us_topic_0112535431_p560348390"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p10605483915"><a name="en-us_topic_0112535431_p10605483915"></a><a name="en-us_topic_0112535431_p10605483915"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p6601744397"><a name="en-us_topic_0112535431_p6601744397"></a><a name="en-us_topic_0112535431_p6601744397"></a>Schema name.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1915619413390"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p17602418392"><a name="en-us_topic_0112535431_p17602418392"></a><a name="en-us_topic_0112535431_p17602418392"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p1660134133912"><a name="en-us_topic_0112535431_p1660134133912"></a><a name="en-us_topic_0112535431_p1660134133912"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p146015473916"><a name="en-us_topic_0112535431_p146015473916"></a><a name="en-us_topic_0112535431_p146015473916"></a>Name of the database instance where the statement is executed.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row215654103910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p15601141394"><a name="en-us_topic_0112535431_p15601141394"></a><a name="en-us_topic_0112535431_p15601141394"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p156034123911"><a name="en-us_topic_0112535431_p156034123911"></a><a name="en-us_topic_0112535431_p156034123911"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p1860649397"><a name="en-us_topic_0112535431_p1860649397"></a><a name="en-us_topic_0112535431_p1860649397"></a>Username used for connecting to the backend.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row101561410393"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p26019419397"><a name="en-us_topic_0112535431_p26019419397"></a><a name="en-us_topic_0112535431_p26019419397"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p15601246399"><a name="en-us_topic_0112535431_p15601246399"></a><a name="en-us_topic_0112535431_p15601246399"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p7626415391"><a name="en-us_topic_0112535431_p7626415391"></a><a name="en-us_topic_0112535431_p7626415391"></a>Name of the application connected to the backend.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row915624113919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p116216453913"><a name="en-us_topic_0112535431_p116216453913"></a><a name="en-us_topic_0112535431_p116216453913"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p166219413396"><a name="en-us_topic_0112535431_p166219413396"></a><a name="en-us_topic_0112535431_p166219413396"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p11628410399"><a name="en-us_topic_0112535431_p11628410399"></a><a name="en-us_topic_0112535431_p11628410399"></a>IP address of the client connected to the backend. If this column is null, it indicates either the client is connected via a Unix socket on the server or this is an internal process, such as autovacuum.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row91546443918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1362184103911"><a name="en-us_topic_0112535431_p1362184103911"></a><a name="en-us_topic_0112535431_p1362184103911"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p562174113919"><a name="en-us_topic_0112535431_p562174113919"></a><a name="en-us_topic_0112535431_p562174113919"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p262643393"><a name="en-us_topic_0112535431_p262643393"></a><a name="en-us_topic_0112535431_p262643393"></a>Host name of the connected client, as reported by a reverse DNS lookup of <strong id="b1388812301288"><a name="b1388812301288"></a><a name="b1388812301288"></a>client_addr</strong>. This column will be non-null only for IP connections and only when <strong id="b154721132983"><a name="b154721132983"></a><a name="b154721132983"></a>log_hostname</strong> is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row415404143917"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p146254113911"><a name="en-us_topic_0112535431_p146254113911"></a><a name="en-us_topic_0112535431_p146254113911"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p1362204103917"><a name="en-us_topic_0112535431_p1362204103917"></a><a name="en-us_topic_0112535431_p1362204103917"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p86216411395"><a name="en-us_topic_0112535431_p86216411395"></a><a name="en-us_topic_0112535431_p86216411395"></a>TCP port number that the client uses for communication with this backend (<strong id="b12326142262"><a name="b12326142262"></a><a name="b12326142262"></a>–1</strong> if a Unix socket is used)</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row515411433910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p9621544396"><a name="en-us_topic_0112535431_p9621544396"></a><a name="en-us_topic_0112535431_p9621544396"></a>query_band</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p136210419393"><a name="en-us_topic_0112535431_p136210419393"></a><a name="en-us_topic_0112535431_p136210419393"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p106213410394"><a name="en-us_topic_0112535431_p106213410394"></a><a name="en-us_topic_0112535431_p106213410394"></a>Job type, which is specified by the GUC parameter <strong id="b11761173512820"><a name="b11761173512820"></a><a name="b11761173512820"></a>query_band</strong>. The default value is a null string.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1415416417394"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p116218463915"><a name="en-us_topic_0112535431_p116218463915"></a><a name="en-us_topic_0112535431_p116218463915"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p1462104103916"><a name="en-us_topic_0112535431_p1462104103916"></a><a name="en-us_topic_0112535431_p1462104103916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1562813408418"><a name="p1562813408418"></a><a name="p1562813408418"></a>Duration that the statement is blocked before being executed, including the statement parsing and optimization duration (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row31541045391"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p4621749395"><a name="en-us_topic_0112535431_p4621749395"></a><a name="en-us_topic_0112535431_p4621749395"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_a58bfa63ef6bd442b8e58362f3c0f048c"><a name="en-us_topic_0112535431_a58bfa63ef6bd442b8e58362f3c0f048c"></a><a name="en-us_topic_0112535431_a58bfa63ef6bd442b8e58362f3c0f048c"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p10629483918"><a name="en-us_topic_0112535431_p10629483918"></a><a name="en-us_topic_0112535431_p10629483918"></a>Time when the statement starts to be run.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row15154747399"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p19628493917"><a name="en-us_topic_0112535431_p19628493917"></a><a name="en-us_topic_0112535431_p19628493917"></a>finish_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p183487172297"><a name="en-us_topic_0112535431_p183487172297"></a><a name="en-us_topic_0112535431_p183487172297"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p1862154193918"><a name="en-us_topic_0112535431_p1862154193918"></a><a name="en-us_topic_0112535431_p1862154193918"></a>Time when the statement execution ends.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row91541346395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p2629433911"><a name="en-us_topic_0112535431_p2629433911"></a><a name="en-us_topic_0112535431_p2629433911"></a>duration</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p162104133913"><a name="en-us_topic_0112535431_p162104133913"></a><a name="en-us_topic_0112535431_p162104133913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p1262134123918"><a name="en-us_topic_0112535431_p1262134123918"></a><a name="en-us_topic_0112535431_p1262134123918"></a>Execution time of a statement. The unit is ms.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row131545453919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p11621417398"><a name="en-us_topic_0112535431_p11621417398"></a><a name="en-us_topic_0112535431_p11621417398"></a>estimate_total_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p15629416394"><a name="en-us_topic_0112535431_p15629416394"></a><a name="en-us_topic_0112535431_p15629416394"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p762147398"><a name="en-us_topic_0112535431_p762147398"></a><a name="en-us_topic_0112535431_p762147398"></a>Estimated execution time of a statement. The unit is ms.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row17154748398"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p46211417392"><a name="en-us_topic_0112535431_p46211417392"></a><a name="en-us_topic_0112535431_p46211417392"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p11620412392"><a name="en-us_topic_0112535431_p11620412392"></a><a name="en-us_topic_0112535431_p11620412392"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p13627420397"><a name="en-us_topic_0112535431_p13627420397"></a><a name="en-us_topic_0112535431_p13627420397"></a>Final statement execution status, which can be <strong id="b135376405820"><a name="b135376405820"></a><a name="b135376405820"></a>finished</strong> (normal) or <strong id="b75387401889"><a name="b75387401889"></a><a name="b75387401889"></a>aborted</strong> (abnormal).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1715414193918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p106214410393"><a name="en-us_topic_0112535431_p106214410393"></a><a name="en-us_topic_0112535431_p106214410393"></a>abort_info</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p146218415395"><a name="en-us_topic_0112535431_p146218415395"></a><a name="en-us_topic_0112535431_p146218415395"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p1462144123919"><a name="en-us_topic_0112535431_p1462144123919"></a><a name="en-us_topic_0112535431_p1462144123919"></a>Exception information displayed if the final statement execution status is <strong id="b8210144212814"><a name="b8210144212814"></a><a name="b8210144212814"></a>aborted</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1015413416396"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p5629433913"><a name="en-us_topic_0112535431_p5629433913"></a><a name="en-us_topic_0112535431_p5629433913"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p106219420393"><a name="en-us_topic_0112535431_p106219420393"></a><a name="en-us_topic_0112535431_p106219420393"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p146210416394"><a name="en-us_topic_0112535431_p146210416394"></a><a name="en-us_topic_0112535431_p146210416394"></a>Resource pool used by the user.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row161543413913"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p96414417397"><a name="en-us_topic_0112535431_p96414417397"></a><a name="en-us_topic_0112535431_p96414417397"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p106415413910"><a name="en-us_topic_0112535431_p106415413910"></a><a name="en-us_topic_0112535431_p106415413910"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p206412414397"><a name="en-us_topic_0112535431_p206412414397"></a><a name="en-us_topic_0112535431_p206412414397"></a>Cgroup used by the statement.</p>
</td>
</tr>
<tr id="row14465758135216"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1467458165210"><a name="p1467458165210"></a><a name="p1467458165210"></a>estimate_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1046785815212"><a name="p1046785815212"></a><a name="p1046785815212"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p10467145811529"><a name="p10467145811529"></a><a name="p10467145811529"></a>Estimated memory size of the statement.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row51547419390"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p126417433914"><a name="en-us_topic_0112535431_p126417433914"></a><a name="en-us_topic_0112535431_p126417433914"></a>min_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p96412416392"><a name="en-us_topic_0112535431_p96412416392"></a><a name="en-us_topic_0112535431_p96412416392"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p164114133911"><a name="en-us_topic_0112535431_p164114133911"></a><a name="en-us_topic_0112535431_p164114133911"></a>Minimum memory peak of the statement across the database instances, in MB.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row12154144183915"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1464124173911"><a name="en-us_topic_0112535431_p1464124173911"></a><a name="en-us_topic_0112535431_p1464124173911"></a>max_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p156413433912"><a name="en-us_topic_0112535431_p156413433912"></a><a name="en-us_topic_0112535431_p156413433912"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p7641443915"><a name="en-us_topic_0112535431_p7641443915"></a><a name="en-us_topic_0112535431_p7641443915"></a>Maximum memory peak of the statement across the database instances, in MB.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1615444123919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p18641942392"><a name="en-us_topic_0112535431_p18641942392"></a><a name="en-us_topic_0112535431_p18641942392"></a>average_peak_memory</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p8646433911"><a name="en-us_topic_0112535431_p8646433911"></a><a name="en-us_topic_0112535431_p8646433911"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p15644433913"><a name="en-us_topic_0112535431_p15644433913"></a><a name="en-us_topic_0112535431_p15644433913"></a>Average memory usage during statement execution. The unit is MB.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row31543473918"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p56418413398"><a name="en-us_topic_0112535431_p56418413398"></a><a name="en-us_topic_0112535431_p56418413398"></a>memory_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p186418411391"><a name="en-us_topic_0112535431_p186418411391"></a><a name="en-us_topic_0112535431_p186418411391"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p6641641390"><a name="en-us_topic_0112535431_p6641641390"></a><a name="en-us_topic_0112535431_p6641641390"></a>Memory usage skew of the statement among the database instances.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row131548412391"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p146412415396"><a name="en-us_topic_0112535431_p146412415396"></a><a name="en-us_topic_0112535431_p146412415396"></a>spill_info</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p4645493920"><a name="en-us_topic_0112535431_p4645493920"></a><a name="en-us_topic_0112535431_p4645493920"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0112535431_p166414433910"><a name="en-us_topic_0112535431_p166414433910"></a><a name="en-us_topic_0112535431_p166414433910"></a>Information about statement spill to the database instances:<a name="ul184242191366"></a><a name="ul184242191366"></a><ul id="ul184242191366"><li><strong id="b1322518491583"><a name="b1322518491583"></a><a name="b1322518491583"></a>None</strong>: The statement has not been spilled to disks on the database instances.</li><li><strong id="b5849856183"><a name="b5849856183"></a><a name="b5849856183"></a>All</strong>: The statement has been spilled to disks on the database instances.</li><li><em id="i13410160395"><a name="i13410160395"></a><a name="i13410160395"></a>[a:b]</em>: The statement has been spilled to disks on <em id="i44101705910"><a name="i44101705910"></a><a name="i44101705910"></a>a</em> of <em id="i1041016012920"><a name="i1041016012920"></a><a name="i1041016012920"></a>b</em> database instances.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0112535431_row4154184143910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p06415419392"><a name="en-us_topic_0112535431_p06415419392"></a><a name="en-us_topic_0112535431_p06415419392"></a>min_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p1964174143914"><a name="en-us_topic_0112535431_p1964174143914"></a><a name="en-us_topic_0112535431_p1964174143914"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p1945114475411"><a name="en-us_topic_0112535431_p1945114475411"></a><a name="en-us_topic_0112535431_p1945114475411"></a>Minimum spilled data among database instances when a spill occurs (unit: MB). Default value: <strong id="b193612031499"><a name="b193612031499"></a><a name="b193612031499"></a>0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row181541048395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1564541398"><a name="en-us_topic_0112535431_p1564541398"></a><a name="en-us_topic_0112535431_p1564541398"></a>max_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p126412443912"><a name="en-us_topic_0112535431_p126412443912"></a><a name="en-us_topic_0112535431_p126412443912"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p645212465415"><a name="en-us_topic_0112535431_p645212465415"></a><a name="en-us_topic_0112535431_p645212465415"></a>Maximum spilled data among database instances when a spill occurs (unit: MB). Default value: <strong id="b13168002994314"><a name="b13168002994314"></a><a name="b13168002994314"></a>0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row615416413913"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p15641413399"><a name="en-us_topic_0112535431_p15641413399"></a><a name="en-us_topic_0112535431_p15641413399"></a>average_spill_size</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p20641949398"><a name="en-us_topic_0112535431_p20641949398"></a><a name="en-us_topic_0112535431_p20641949398"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p945204125410"><a name="en-us_topic_0112535431_p945204125410"></a><a name="en-us_topic_0112535431_p945204125410"></a>Average spilled data among database instances when a spill occurs (unit: MB). Default value: <strong id="b51290617918"><a name="b51290617918"></a><a name="b51290617918"></a>0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row101541847398"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1164194173910"><a name="en-us_topic_0112535431_p1164194173910"></a><a name="en-us_topic_0112535431_p1164194173910"></a>spill_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p9648493918"><a name="en-us_topic_0112535431_p9648493918"></a><a name="en-us_topic_0112535431_p9648493918"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p56411418394"><a name="en-us_topic_0112535431_p56411418394"></a><a name="en-us_topic_0112535431_p56411418394"></a>Database instance spill skew when a spill occurs.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1915454123919"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p186694153912"><a name="en-us_topic_0112535431_p186694153912"></a><a name="en-us_topic_0112535431_p186694153912"></a>min_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p86684103910"><a name="en-us_topic_0112535431_p86684103910"></a><a name="en-us_topic_0112535431_p86684103910"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p96612433918"><a name="en-us_topic_0112535431_p96612433918"></a><a name="en-us_topic_0112535431_p96612433918"></a>Minimum execution time of the statement across the database instances (unit: ms).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row31521644398"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p16661443392"><a name="en-us_topic_0112535431_p16661443392"></a><a name="en-us_topic_0112535431_p16661443392"></a>max_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p366114193918"><a name="en-us_topic_0112535431_p366114193918"></a><a name="en-us_topic_0112535431_p366114193918"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p166610410391"><a name="en-us_topic_0112535431_p166610410391"></a><a name="en-us_topic_0112535431_p166610410391"></a>Maximum execution time of the statement across the database instances (unit: ms).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row415217443910"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p146612412392"><a name="en-us_topic_0112535431_p146612412392"></a><a name="en-us_topic_0112535431_p146612412392"></a>average_dn_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p1766949395"><a name="en-us_topic_0112535431_p1766949395"></a><a name="en-us_topic_0112535431_p1766949395"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p766114173911"><a name="en-us_topic_0112535431_p766114173911"></a><a name="en-us_topic_0112535431_p766114173911"></a>Average execution time of the statement across the database instances (unit: ms).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row1715212420392"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p186619414398"><a name="en-us_topic_0112535431_p186619414398"></a><a name="en-us_topic_0112535431_p186619414398"></a>dntime_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p166616433915"><a name="en-us_topic_0112535431_p166616433915"></a><a name="en-us_topic_0112535431_p166616433915"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p15661641394"><a name="en-us_topic_0112535431_p15661641394"></a><a name="en-us_topic_0112535431_p15661641394"></a>Execution time skew of the statement among the database instances.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row215214416394"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p76618419395"><a name="en-us_topic_0112535431_p76618419395"></a><a name="en-us_topic_0112535431_p76618419395"></a>min_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p5666403919"><a name="en-us_topic_0112535431_p5666403919"></a><a name="en-us_topic_0112535431_p5666403919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p196694133917"><a name="en-us_topic_0112535431_p196694133917"></a><a name="en-us_topic_0112535431_p196694133917"></a>Minimum CPU time of the statement across the database instances (unit: ms).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row161528417392"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p20661413399"><a name="en-us_topic_0112535431_p20661413399"></a><a name="en-us_topic_0112535431_p20661413399"></a>max_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p96644143916"><a name="en-us_topic_0112535431_p96644143916"></a><a name="en-us_topic_0112535431_p96644143916"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p13661948399"><a name="en-us_topic_0112535431_p13661948399"></a><a name="en-us_topic_0112535431_p13661948399"></a>Maximum CPU time of the statement across the database instances (unit: ms).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row115219413394"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p176613483914"><a name="en-us_topic_0112535431_p176613483914"></a><a name="en-us_topic_0112535431_p176613483914"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p66624193917"><a name="en-us_topic_0112535431_p66624193917"></a><a name="en-us_topic_0112535431_p66624193917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p9660419393"><a name="en-us_topic_0112535431_p9660419393"></a><a name="en-us_topic_0112535431_p9660419393"></a>Total CPU time of the statement across the database instances (unit: ms).</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row41525416393"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p17661453919"><a name="en-us_topic_0112535431_p17661453919"></a><a name="en-us_topic_0112535431_p17661453919"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p2667415395"><a name="en-us_topic_0112535431_p2667415395"></a><a name="en-us_topic_0112535431_p2667415395"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p8668413919"><a name="en-us_topic_0112535431_p8668413919"></a><a name="en-us_topic_0112535431_p8668413919"></a>CPU time skew of the statement among the database instances.</p>
</td>
</tr>
<tr id="row19498105011260"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1880915202270"><a name="p1880915202270"></a><a name="p1880915202270"></a>min_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1480919206276"><a name="p1480919206276"></a><a name="p1480919206276"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1380982018278"><a name="p1380982018278"></a><a name="p1380982018278"></a>Minimum IOPS peak of the statement across the database instances. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="row19149101072913"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1912116233291"><a name="p1912116233291"></a><a name="p1912116233291"></a>max_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p9121123172913"><a name="p9121123172913"></a><a name="p9121123172913"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p191238239292"><a name="p191238239292"></a><a name="p191238239292"></a>Maximum IOPS peak of the statement across the database instances. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="row4897202782912"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p36526352291"><a name="p36526352291"></a><a name="p36526352291"></a>average_peak_iops</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p13652103519299"><a name="p13652103519299"></a><a name="p13652103519299"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1652113517293"><a name="p1652113517293"></a><a name="p1652113517293"></a>Average IOPS peak of the statement across the database instances. It is counted by ones in a column-store table and by ten thousands in a row-store table.</p>
</td>
</tr>
<tr id="row15463154013294"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1557874882911"><a name="p1557874882911"></a><a name="p1557874882911"></a>iops_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1757874892918"><a name="p1757874892918"></a><a name="p1757874892918"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p16578184872911"><a name="p16578184872911"></a><a name="p16578184872911"></a>I/O skew of the statement among the database instances.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row131528433911"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1167134133919"><a name="en-us_topic_0112535431_p1167134133919"></a><a name="en-us_topic_0112535431_p1167134133919"></a>warning</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p76724153911"><a name="en-us_topic_0112535431_p76724153911"></a><a name="en-us_topic_0112535431_p76724153911"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0112535431_p1367104103912"><a name="en-us_topic_0112535431_p1367104103912"></a><a name="en-us_topic_0112535431_p1367104103912"></a>Warning. The following warnings are displayed:<a name="ul1751385241714"></a><a name="ul1751385241714"></a><ul id="ul1751385241714"><li>Spill file size large than 256MB</li><li>Broadcast size large than 100MB</li><li>Early spill</li><li>Spill times is greater than 3</li><li>Spill on memory adaptive</li><li>Hash table conflict</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0112535431_row115244133914"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p46720416397"><a name="en-us_topic_0112535431_p46720416397"></a><a name="en-us_topic_0112535431_p46720416397"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p8674453918"><a name="en-us_topic_0112535431_p8674453918"></a><a name="en-us_topic_0112535431_p8674453918"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p5671843393"><a name="en-us_topic_0112535431_p5671843393"></a><a name="en-us_topic_0112535431_p5671843393"></a>Internal query ID used for statement execution.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row0152846395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1667749393"><a name="en-us_topic_0112535431_p1667749393"></a><a name="en-us_topic_0112535431_p1667749393"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p367545392"><a name="en-us_topic_0112535431_p367545392"></a><a name="en-us_topic_0112535431_p367545392"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p867114173913"><a name="en-us_topic_0112535431_p867114173913"></a><a name="en-us_topic_0112535431_p867114173913"></a>Statement executed.</p>
</td>
</tr>
<tr id="en-us_topic_0112535431_row01502044395"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0112535431_p1767841391"><a name="en-us_topic_0112535431_p1767841391"></a><a name="en-us_topic_0112535431_p1767841391"></a>query_plan</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0112535431_p3671242399"><a name="en-us_topic_0112535431_p3671242399"></a><a name="en-us_topic_0112535431_p3671242399"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0112535431_p196818412396"><a name="en-us_topic_0112535431_p196818412396"></a><a name="en-us_topic_0112535431_p196818412396"></a>Execution plan of a statement.</p>
</td>
</tr>
<tr id="row115501321134518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p20550152119453"><a name="p20550152119453"></a><a name="p20550152119453"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p2550122184511"><a name="p2550122184511"></a><a name="p2550122184511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p4550152115450"><a name="p4550152115450"></a><a name="p4550152115450"></a>Logical database instance of the user to which the statement belongs.</p>
</td>
</tr>
<tr id="row1089134535015"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p2901345125016"><a name="p2901345125016"></a><a name="p2901345125016"></a>cpu_top1_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p13901545205019"><a name="p13901545205019"></a><a name="p13901545205019"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p19901945115015"><a name="p19901945115015"></a><a name="p19901945115015"></a>Name of the node with the 1st CPU usage.</p>
</td>
</tr>
<tr id="row4642163215111"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1664314329515"><a name="p1664314329515"></a><a name="p1664314329515"></a>cpu_top2_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1564383215113"><a name="p1564383215113"></a><a name="p1564383215113"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p26432323516"><a name="p26432323516"></a><a name="p26432323516"></a>Name of the node with the 2nd CPU usage.</p>
</td>
</tr>
<tr id="row136319518512"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p116465135111"><a name="p116465135111"></a><a name="p116465135111"></a>cpu_top3_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p126418575114"><a name="p126418575114"></a><a name="p126418575114"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p13641151515"><a name="p13641151515"></a><a name="p13641151515"></a>Name of the node with the 3rd CPU usage.</p>
</td>
</tr>
<tr id="row123351218195215"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p033512187522"><a name="p033512187522"></a><a name="p033512187522"></a>cpu_top4_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p633515186527"><a name="p633515186527"></a><a name="p633515186527"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p20335141895212"><a name="p20335141895212"></a><a name="p20335141895212"></a>Name of the node with the 4th CPU usage.</p>
</td>
</tr>
<tr id="row839132115214"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p124072145217"><a name="p124072145217"></a><a name="p124072145217"></a>cpu_top5_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p17401621155210"><a name="p17401621155210"></a><a name="p17401621155210"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p19405214526"><a name="p19405214526"></a><a name="p19405214526"></a>Name of the node with the 5th CPU usage.</p>
</td>
</tr>
<tr id="row209162215555"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p109171212557"><a name="p109171212557"></a><a name="p109171212557"></a>mem_top1_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p199181926556"><a name="p199181926556"></a><a name="p199181926556"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p199181215556"><a name="p199181215556"></a><a name="p199181215556"></a>Name of the node with the 1st memory usage.</p>
</td>
</tr>
<tr id="row121491067555"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1115026165519"><a name="p1115026165519"></a><a name="p1115026165519"></a>mem_top2_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p41501615510"><a name="p41501615510"></a><a name="p41501615510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p915014613553"><a name="p915014613553"></a><a name="p915014613553"></a>Name of the node with the 2nd memory usage.</p>
</td>
</tr>
<tr id="row1532378115518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1332318845518"><a name="p1332318845518"></a><a name="p1332318845518"></a>mem_top3_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p183233825520"><a name="p183233825520"></a><a name="p183233825520"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1032478105519"><a name="p1032478105519"></a><a name="p1032478105519"></a>Name of the node with the 3rd memory usage.</p>
</td>
</tr>
<tr id="row621941095518"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p221916106554"><a name="p221916106554"></a><a name="p221916106554"></a>mem_top4_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p20219101095515"><a name="p20219101095515"></a><a name="p20219101095515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p172206104551"><a name="p172206104551"></a><a name="p172206104551"></a>Name of the node with the 4th memory usage.</p>
</td>
</tr>
<tr id="row512418122556"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p10124171255514"><a name="p10124171255514"></a><a name="p10124171255514"></a>mem_top5_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p7125812185510"><a name="p7125812185510"></a><a name="p7125812185510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1712541212552"><a name="p1712541212552"></a><a name="p1712541212552"></a>Name of the node with the 5th memory usage.</p>
</td>
</tr>
<tr id="row9633617125611"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p4634111755618"><a name="p4634111755618"></a><a name="p4634111755618"></a>cpu_top1_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p76340176568"><a name="p76340176568"></a><a name="p76340176568"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p963481735614"><a name="p963481735614"></a><a name="p963481735614"></a>CPU usage.</p>
</td>
</tr>
<tr id="row12833112011567"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1683342011564"><a name="p1683342011564"></a><a name="p1683342011564"></a>cpu_top2_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1883432065613"><a name="p1883432065613"></a><a name="p1883432065613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p6834142019561"><a name="p6834142019561"></a><a name="p6834142019561"></a>CPU usage.</p>
</td>
</tr>
<tr id="row7878237563"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p48715238566"><a name="p48715238566"></a><a name="p48715238566"></a>cpu_top3_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p18782314564"><a name="p18782314564"></a><a name="p18782314564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1487023155614"><a name="p1487023155614"></a><a name="p1487023155614"></a>CPU usage.</p>
</td>
</tr>
<tr id="row3850162419568"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p385013244565"><a name="p385013244565"></a><a name="p385013244565"></a>cpu_top4_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p485082435611"><a name="p485082435611"></a><a name="p485082435611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p785052416564"><a name="p785052416564"></a><a name="p785052416564"></a>CPU usage.</p>
</td>
</tr>
<tr id="row1946532635616"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1946552612561"><a name="p1946552612561"></a><a name="p1946552612561"></a>cpu_top5_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p144658262567"><a name="p144658262567"></a><a name="p144658262567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p846662620563"><a name="p846662620563"></a><a name="p846662620563"></a>CPU usage.</p>
</td>
</tr>
<tr id="row7586101811580"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p5587111815589"><a name="p5587111815589"></a><a name="p5587111815589"></a>mem_top1_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p20587111865815"><a name="p20587111865815"></a><a name="p20587111865815"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p1558791865820"><a name="p1558791865820"></a><a name="p1558791865820"></a>Memory usage.</p>
</td>
</tr>
<tr id="row116295226588"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p15630422195813"><a name="p15630422195813"></a><a name="p15630422195813"></a>mem_top2_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p156301722155817"><a name="p156301722155817"></a><a name="p156301722155817"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p8630162285814"><a name="p8630162285814"></a><a name="p8630162285814"></a>Memory usage.</p>
</td>
</tr>
<tr id="row17121224115812"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p12712924165818"><a name="p12712924165818"></a><a name="p12712924165818"></a>mem_top3_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p37131324105816"><a name="p37131324105816"></a><a name="p37131324105816"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p67131124125819"><a name="p67131124125819"></a><a name="p67131124125819"></a>Memory usage.</p>
</td>
</tr>
<tr id="row46762026175816"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p1767662610583"><a name="p1767662610583"></a><a name="p1767662610583"></a>mem_top4_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p1767613260587"><a name="p1767613260587"></a><a name="p1767613260587"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p4677726105818"><a name="p4677726105818"></a><a name="p4677726105818"></a>Memory usage.</p>
</td>
</tr>
<tr id="row14367182814589"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p133671428175818"><a name="p133671428175818"></a><a name="p133671428175818"></a>mem_top5_value</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p10367122813587"><a name="p10367122813587"></a><a name="p10367122813587"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p836812845815"><a name="p836812845815"></a><a name="p836812845815"></a>Memory usage.</p>
</td>
</tr>
<tr id="row845161112597"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p11461811155914"><a name="p11461811155914"></a><a name="p11461811155914"></a>top_mem_dn</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p646111195912"><a name="p646111195912"></a><a name="p646111195912"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p124651118592"><a name="p124651118592"></a><a name="p124651118592"></a>Top <em id="i14386185031010"><a name="i14386185031010"></a><a name="i14386185031010"></a>N</em> memory usage.</p>
</td>
</tr>
<tr id="row1928591316595"><td class="cellrowborder" valign="top" width="21.782178217821784%" headers="mcps1.2.4.1.1 "><p id="p628521318590"><a name="p628521318590"></a><a name="p628521318590"></a>top_cpu_dn</p>
</td>
<td class="cellrowborder" valign="top" width="18.81188118811881%" headers="mcps1.2.4.1.2 "><p id="p182861313165916"><a name="p182861313165916"></a><a name="p182861313165916"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.4059405940594%" headers="mcps1.2.4.1.3 "><p id="p10286101313597"><a name="p10286101313597"></a><a name="p10286101313597"></a>Top <em id="i5201688874314"><a name="i5201688874314"></a><a name="i5201688874314"></a>N</em> CPU usage.</p>
</td>
</tr>
</tbody>
</table>

