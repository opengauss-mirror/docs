# GS\_WLM\_INSTANCE\_HISTORY

GS\_WLM\_INSTANCE\_HISTORY系统表存储与实例（数据库主节点或数据库节点）相关的资源使用相关信息。该系统表里每条记录都是对应时间点某实例资源使用情况，包括：内存、CPU核数、磁盘IO、进程物理IO和进程逻辑IO信息。查询该系统表需要sysadmin权限，且仅在数据库postgres下面查询时有数据。（IO等资源使用的相关统计仅在分布式生效，集中式不生效）

**表 1**  GS\_WLM\_INSTANCE\_HISTORY字段

<a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_table175231552565"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row85231552065"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p652335213618"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p652335213618"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p652335213618"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952315216614"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952315216614"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952315216614"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p195238521862"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p195238521862"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p195238521862"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row1452314522062"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p85233528619"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p85233528619"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p85233528619"></a>instancename</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p45239521366"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p45239521366"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p45239521366"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p135233522061"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p135233522061"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p135233522061"></a>实例名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row952325215615"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1352375216616"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1352375216616"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1352375216616"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1252375216617"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1252375216617"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1252375216617"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p7523145212618"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p7523145212618"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p7523145212618"></a>时间戳。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row752395218615"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p05231752360"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p05231752360"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p05231752360"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p14523952163"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p14523952163"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p14523952163"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p135232521165"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p135232521165"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p135232521165"></a>实例使用CPU所占用的百分比。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row2052325218610"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p752355218614"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p752355218614"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p752355218614"></a>free_mem</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1452319522618"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1452319522618"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1452319522618"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p452416520620"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p452416520620"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p452416520620"></a>实例未使用的内存大小，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row10524165216615"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1524252462"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1524252462"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1524252462"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1652416524617"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1652416524617"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1652416524617"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p185248526611"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p185248526611"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p185248526611"></a>实例已使用的内存大小，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row9524175219610"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1952417521162"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1952417521162"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1952417521162"></a>io_await</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p55241852463"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p55241852463"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p55241852463"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p252411521265"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p252411521265"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p252411521265"></a>实例所使用磁盘的io_wait值（10秒均值）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row12524752562"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p75248521661"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p75248521661"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p75248521661"></a>io_util</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p105246521764"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p105246521764"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p105246521764"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1524952167"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1524952167"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1524952167"></a>实例所使用磁盘的io_util值（10秒均值）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row195241521669"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1052455218611"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1052455218611"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1052455218611"></a>disk_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1052417527615"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1052417527615"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1052417527615"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p577545873512"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p577545873512"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p577545873512"></a>实例所使用磁盘的读速率（10秒均值），单位KB/s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row452418528614"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p15524145214619"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p15524145214619"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p15524145214619"></a>disk_write</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p55244521963"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p55244521963"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p55244521963"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p852411521064"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p852411521064"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p852411521064"></a>实例所使用磁盘的写速率（10秒均值），单位KB/s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row05241952968"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1152414529615"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1152414529615"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1152414529615"></a>process_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p352410521067"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p352410521067"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p352410521067"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1452410528610"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1452410528610"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1452410528610"></a>实例对应进程从磁盘读数据的读速率（不包括从磁盘pagecache中读取的字节数，10秒均值），单位KB/s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row185242528614"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952435210618"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952435210618"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952435210618"></a>process_write</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p145243524611"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p145243524611"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p145243524611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p145245521961"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p145245521961"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p145245521961"></a>实例对应进程向磁盘写数据的写速率（不包括向磁盘pagecache中写入的字节数，10秒均值），单位KB/s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row7524952862"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952417521767"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952417521767"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p952417521767"></a>logical_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p252414526615"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p252414526615"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p252414526615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p497345154017"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p497345154017"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p497345154017"></a><span id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_text101735572163"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_text101735572163"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_text101735572163"></a>数据库主节点</span>实例：不统计。</p>
<p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p79731451154010"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p79731451154010"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p79731451154010"></a>数据库节点实例：该实例在本次统计间隙（10秒）内逻辑读字节速率，单位KB/s。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row135252052966"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p052511521460"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p052511521460"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p052511521460"></a>logical_write</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p45251521366"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p45251521366"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p45251521366"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p10400171410419"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p10400171410419"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p10400171410419"></a>数据库主节点实例：不统计。</p>
<p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p12401914134118"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p12401914134118"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p12401914134118"></a>数据库节点实例：该实例在本次统计间隙（10秒）内逻辑写字节速率，单位KB/s。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row852513521069"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p195252524616"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p195252524616"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p195252524616"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1525105219612"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1525105219612"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p1525105219612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p11861122217413"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p11861122217413"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p11861122217413"></a>数据库主节点实例：不统计。</p>
<p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p20861182210416"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p20861182210416"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p20861182210416"></a>数据库节点实例：该实例在本次统计间隙（10秒）内逻辑读操作次数之和，单位次。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_row8525052867"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p852519521066"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p852519521066"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p852519521066"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p05256521619"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p05256521619"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p05256521619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p65004318417"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p65004318417"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p65004318417"></a>数据库主节点实例：不统计。</p>
<p id="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p3500931204113"><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p3500931204113"></a><a name="zh-cn_topic_0283136549_zh-cn_topic_0237122262_p3500931204113"></a>数据库节点实例：该实例在本次统计间隙（10秒）内逻辑写操作次数之和，单位次。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
</tbody>
</table>

