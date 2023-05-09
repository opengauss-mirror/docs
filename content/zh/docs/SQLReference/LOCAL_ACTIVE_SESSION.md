# LOCAL\_ACTIVE\_SESSION

LOCAL\_ACTIVE\_SESSION视图显示本节点上的ACTIVE SESSION PROFILE内存中的样本。

**表 1**  LOCAL\_ACTIVE\_SESSION字段

<a name="table9867104916817"></a>
<table><thead align="left"><tr id="row1286719494812"><th class="cellrowborder" valign="top" width="23.75%" id="mcps1.2.4.1.1"><p id="p08670491887"><a name="p08670491887"></a><a name="p08670491887"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="30.990000000000002%" id="mcps1.2.4.1.2"><p id="p138674491882"><a name="p138674491882"></a><a name="p138674491882"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="45.26%" id="mcps1.2.4.1.3"><p id="p188671149288"><a name="p188671149288"></a><a name="p188671149288"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row8867184910813"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p186844913816"><a name="p186844913816"></a><a name="p186844913816"></a>sampleid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p138689499814"><a name="p138689499814"></a><a name="p138689499814"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p8868174916814"><a name="p8868174916814"></a><a name="p8868174916814"></a>采样ID。</p>
</td>
</tr>
<tr id="row108686491289"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p108681349183"><a name="p108681349183"></a><a name="p108681349183"></a>sample_time</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p20868749887"><a name="p20868749887"></a><a name="p20868749887"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p6868849586"><a name="p6868849586"></a><a name="p6868849586"></a>采样的时间。</p>
</td>
</tr>
<tr id="row5868124911810"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p486813491687"><a name="p486813491687"></a><a name="p486813491687"></a>need_flush_sample</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p286817496810"><a name="p286817496810"></a><a name="p286817496810"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p148681549789"><a name="p148681549789"></a><a name="p148681549789"></a>该样本是否需要刷新的磁盘。</p>
</td>
</tr>
<tr id="row11868204915812"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p6868449586"><a name="p6868449586"></a><a name="p6868449586"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p2868194918818"><a name="p2868194918818"></a><a name="p2868194918818"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p3868144920815"><a name="p3868144920815"></a><a name="p3868144920815"></a>数据库ID。</p>
</td>
</tr>
<tr id="row78680491682"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p178685491285"><a name="p178685491285"></a><a name="p178685491285"></a>thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1586844918817"><a name="p1586844918817"></a><a name="p1586844918817"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p1086810491285"><a name="p1086810491285"></a><a name="p1086810491285"></a>线程的ID。</p>
</td>
</tr>
<tr id="row148685492819"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p786824912818"><a name="p786824912818"></a><a name="p786824912818"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1886811492810"><a name="p1886811492810"></a><a name="p1886811492810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p8868184912813"><a name="p8868184912813"></a><a name="p8868184912813"></a>会话的ID。</p>
</td>
</tr>
<tr id="row128682049383"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p686810491183"><a name="p686810491183"></a><a name="p686810491183"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p6868349989"><a name="p6868349989"></a><a name="p6868349989"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p1486819493813"><a name="p1486819493813"></a><a name="p1486819493813"></a>会话的启动时间。</p>
</td>
</tr>
<tr id="row886813491985"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p686813491814"><a name="p686813491814"></a><a name="p686813491814"></a>event</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p8868949382"><a name="p8868949382"></a><a name="p8868949382"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p1886812493815"><a name="p1886812493815"></a><a name="p1886812493815"></a>具体的事件名称。</p>
</td>
</tr>
<tr id="row2086819498812"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p4868104912810"><a name="p4868104912810"></a><a name="p4868104912810"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1586813491486"><a name="p1586813491486"></a><a name="p1586813491486"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p08681049487"><a name="p08681049487"></a><a name="p08681049487"></a>当前线程的轻量级线程号。</p>
</td>
</tr>
<tr id="row1586816491684"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p186824912816"><a name="p186824912816"></a><a name="p186824912816"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1086914491488"><a name="p1086914491488"></a><a name="p1086914491488"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p286904916820"><a name="p286904916820"></a><a name="p286904916820"></a>streaming线程的父线程。</p>
</td>
</tr>
<tr id="row58692049183"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1586964915814"><a name="p1586964915814"></a><a name="p1586964915814"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p198699493819"><a name="p198699493819"></a><a name="p198699493819"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p18698491482"><a name="p18698491482"></a><a name="p18698491482"></a>streaming线程的层级。与执行计划的层级（ID）相对应。</p>
</td>
</tr>
<tr id="row1869144920819"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1986915498818"><a name="p1986915498818"></a><a name="p1986915498818"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p88696491183"><a name="p88696491183"></a><a name="p88696491183"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p586916492084"><a name="p586916492084"></a><a name="p586916492084"></a>smp执行模式下并行线程的并行编号。</p>
</td>
</tr>
<tr id="row178691549889"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p7869449886"><a name="p7869449886"></a><a name="p7869449886"></a>userid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p2086924913815"><a name="p2086924913815"></a><a name="p2086924913815"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p1986914491789"><a name="p1986914491789"></a><a name="p1986914491789"></a>session用户的ID。</p>
</td>
</tr>
<tr id="row786919491080"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p78699492819"><a name="p78699492819"></a><a name="p78699492819"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p7869114915818"><a name="p7869114915818"></a><a name="p7869114915818"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p12869124919819"><a name="p12869124919819"></a><a name="p12869124919819"></a>应用的名称。</p>
</td>
</tr>
<tr id="row1086974917817"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1786913491083"><a name="p1786913491083"></a><a name="p1786913491083"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p08691849781"><a name="p08691849781"></a><a name="p08691849781"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p786934910820"><a name="p786934910820"></a><a name="p786934910820"></a>client端的地址。</p>
</td>
</tr>
<tr id="row1186920491088"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p138693495819"><a name="p138693495819"></a><a name="p138693495819"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p14869194910819"><a name="p14869194910819"></a><a name="p14869194910819"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p1886917492820"><a name="p1886917492820"></a><a name="p1886917492820"></a>client端的名称。</p>
</td>
</tr>
<tr id="row108697491685"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p6869164920818"><a name="p6869164920818"></a><a name="p6869164920818"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1686994915813"><a name="p1686994915813"></a><a name="p1686994915813"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p15869104914817"><a name="p15869104914817"></a><a name="p15869104914817"></a>客户端用于与后端通讯的TCP端口号。</p>
</td>
</tr>
<tr id="row68699494815"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p188691491989"><a name="p188691491989"></a><a name="p188691491989"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p586994918818"><a name="p586994918818"></a><a name="p586994918818"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p168691749986"><a name="p168691749986"></a><a name="p168691749986"></a>debug query id。</p>
</td>
</tr>
<tr id="row138691249480"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p886912498817"><a name="p886912498817"></a><a name="p886912498817"></a>unique_query_id</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p138705491811"><a name="p138705491811"></a><a name="p138705491811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p487016491287"><a name="p487016491287"></a><a name="p487016491287"></a>unique query id。</p>
</td>
</tr>
<tr id="row28701749183"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p387012490813"><a name="p387012490813"></a><a name="p387012490813"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p6870144910810"><a name="p6870144910810"></a><a name="p6870144910810"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p887013497813"><a name="p887013497813"></a><a name="p887013497813"></a>unique query的key中的user_id。</p>
</td>
</tr>
<tr id="row1487014918813"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1187016491580"><a name="p1187016491580"></a><a name="p1187016491580"></a>cn_id</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1887094916817"><a name="p1887094916817"></a><a name="p1887094916817"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p128701849288"><a name="p128701849288"></a><a name="p128701849288"></a>cn id，在DN上表示下发该unique sql的节点id，unique query的key中的cn_id。</p>
</td>
</tr>
<tr id="row148706497819"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p2870124911812"><a name="p2870124911812"></a><a name="p2870124911812"></a>unique_query</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p6870194912810"><a name="p6870194912810"></a><a name="p6870194912810"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p1870849181"><a name="p1870849181"></a><a name="p1870849181"></a>规范化后的UniqueSQL文本串。</p>
</td>
</tr>
<tr id="row108704491483"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p18701849884"><a name="p18701849884"></a><a name="p18701849884"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p1870649289"><a name="p1870649289"></a><a name="p1870649289"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p138701249783"><a name="p138701249783"></a><a name="p138701249783"></a>会话等待锁信息，可通过locktag_decode解析。</p>
</td>
</tr>
<tr id="row68708491184"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p987012499816"><a name="p987012499816"></a><a name="p987012499816"></a>lockmode</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p168704491982"><a name="p168704491982"></a><a name="p168704491982"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p18709491882"><a name="p18709491882"></a><a name="p18709491882"></a>会话等待锁模式。</p>
</td>
</tr>
<tr id="row188701849183"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p88703491380"><a name="p88703491380"></a><a name="p88703491380"></a>block_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p188701349882"><a name="p188701349882"></a><a name="p188701349882"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p88703494819"><a name="p88703494819"></a><a name="p88703494819"></a>如果会话正在等待锁，阻塞该会话获取锁的会话标识。</p>
</td>
</tr>
<tr id="row28701491387"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1187010498815"><a name="p1187010498815"></a><a name="p1187010498815"></a>final_block_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p287054910816"><a name="p287054910816"></a><a name="p287054910816"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p28701449689"><a name="p28701449689"></a><a name="p28701449689"></a>表示源头阻塞会话ID。</p>
</td>
</tr>
<tr id="row3870184911816"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p787084916814"><a name="p787084916814"></a><a name="p787084916814"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p987015492820"><a name="p987015492820"></a><a name="p987015492820"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p158700492816"><a name="p158700492816"></a><a name="p158700492816"></a>描述event列的更多详细信息。</p>
</td>
</tr>
<tr id="row887111495812"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p487104912816"><a name="p487104912816"></a><a name="p487104912816"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="30.990000000000002%" headers="mcps1.2.4.1.2 "><p id="p08711049881"><a name="p08711049881"></a><a name="p08711049881"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.26%" headers="mcps1.2.4.1.3 "><p id="p587111491981"><a name="p587111491981"></a><a name="p587111491981"></a>全局会话ID。</p>
</td>
</tr>
</tbody>
</table>

