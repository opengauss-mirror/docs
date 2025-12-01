# GS\_WLM\_INSTANCE\_HISTORY<a name="EN-US_TOPIC_0289900166"></a>

**GS\_WLM\_INSTANCE\_HISTORY**  records information about resource usage related to instances \(primary database node or database node\). Each record in this system catalog indicates resource usage of an instance at a specific time point, including the memory, number of CPU cores, disk I/O, physical I/O of the process, and logical I/O of the process. This system catalog can be queried by users with the  **sysadmin**  permission only in Postgres.

**Table  1**  GS\_WLM\_INSTANCE\_HISTORY columns

<a name="en-us_topic_0283136549_en-us_topic_0237122262_table175231552565"></a>
<table><thead align="left"><tr id="en-us_topic_0283136549_en-us_topic_0237122262_row85231552065"><th class="cellrowborder" valign="top" width="17.43%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136549_en-us_topic_0237122262_p652335213618"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p652335213618"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p652335213618"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="22.57%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136549_en-us_topic_0237122262_p952315216614"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p952315216614"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p952315216614"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="60%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136549_en-us_topic_0237122262_p195238521862"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p195238521862"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p195238521862"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136549_en-us_topic_0237122262_row1452314522062"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p85233528619"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p85233528619"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p85233528619"></a>instancename</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p45239521366"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p45239521366"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p45239521366"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p135233522061"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p135233522061"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p135233522061"></a>Instance name</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row952325215615"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1352375216616"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1352375216616"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1352375216616"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1252375216617"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1252375216617"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1252375216617"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p7523145212618"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p7523145212618"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p7523145212618"></a>Timestamp</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row752395218615"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p05231752360"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p05231752360"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p05231752360"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p14523952163"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p14523952163"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p14523952163"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p135232521165"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p135232521165"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p135232521165"></a>CPU usage of the instance</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row2052325218610"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p752355218614"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p752355218614"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p752355218614"></a>free_mem</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1452319522618"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1452319522618"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1452319522618"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p452416520620"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p452416520620"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p452416520620"></a>Unused memory of the instance, in MB</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row10524165216615"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1524252462"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1524252462"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1524252462"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1652416524617"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1652416524617"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1652416524617"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p185248526611"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p185248526611"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p185248526611"></a>Used memory of the instance, in MB</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row9524175219610"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1952417521162"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1952417521162"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1952417521162"></a>io_await</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p55241852463"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p55241852463"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p55241852463"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p252411521265"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p252411521265"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p252411521265"></a>Average wait time for an I/O operation on the disk used by the instance. The average value is within 10 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row12524752562"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p75248521661"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p75248521661"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p75248521661"></a>io_util</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p105246521764"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p105246521764"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p105246521764"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1524952167"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1524952167"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1524952167"></a>io_util value of the disk used by the instance. The average value is within 10 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row195241521669"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1052455218611"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1052455218611"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1052455218611"></a>disk_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1052417527615"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1052417527615"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1052417527615"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p577545873512"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p577545873512"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p577545873512"></a>Disk read rate of the instance, in KB/s. The average value is within 10 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row452418528614"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p15524145214619"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p15524145214619"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p15524145214619"></a>disk_write</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p55244521963"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p55244521963"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p55244521963"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p852411521064"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p852411521064"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p852411521064"></a>Disk write rate of the instance, in KB/s. The average value is within 10 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row05241952968"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1152414529615"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1152414529615"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1152414529615"></a>process_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p352410521067"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p352410521067"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p352410521067"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1452410528610"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1452410528610"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1452410528610"></a>Read rate (excluding the number of bytes read from the disk pagecache) of the corresponding instance process that reads data from a disk within 10 seconds, in KB/s</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row185242528614"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p952435210618"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p952435210618"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p952435210618"></a>process_write</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p145243524611"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p145243524611"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p145243524611"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p145245521961"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p145245521961"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p145245521961"></a>Write rate (excluding the number of bytes written to the disk pagecache) of the corresponding instance process that writes data to a disk within 10 seconds, in KB/s</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row7524952862"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p952417521767"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p952417521767"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p952417521767"></a>logical_read</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p252414526615"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p252414526615"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p252414526615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p497345154017"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p497345154017"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p497345154017"></a><span id="en-us_topic_0237122262_text101735572163"><a name="en-us_topic_0237122262_text101735572163"></a><a name="en-us_topic_0237122262_text101735572163"></a>Primary database node</span> instance: not collected</p>
<p id="en-us_topic_0283136549_en-us_topic_0237122262_p79731451154010"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p79731451154010"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p79731451154010"></a>Database node instance: logical read byte rate of the instance within the statistical interval (10 seconds), in KB/s</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row135252052966"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p052511521460"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p052511521460"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p052511521460"></a>logical_write</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p45251521366"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p45251521366"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p45251521366"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p10400171410419"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p10400171410419"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p10400171410419"></a>Primary database node instance: not collected</p>
<p id="en-us_topic_0283136549_en-us_topic_0237122262_p12401914134118"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p12401914134118"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p12401914134118"></a>Database node instance: logical write byte rate of the instance within the statistical interval (10 seconds), in KB/s</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row852513521069"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p195252524616"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p195252524616"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p195252524616"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p1525105219612"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1525105219612"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p1525105219612"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p11861122217413"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p11861122217413"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p11861122217413"></a>Primary database node instance: not collected</p>
<p id="en-us_topic_0283136549_en-us_topic_0237122262_p20861182210416"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p20861182210416"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p20861182210416"></a>Database node instance: total number of logical read operations of the instance within the statistical interval (10 seconds)</p>
</td>
</tr>
<tr id="en-us_topic_0283136549_en-us_topic_0237122262_row8525052867"><td class="cellrowborder" valign="top" width="17.43%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p852519521066"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p852519521066"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p852519521066"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="22.57%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p05256521619"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p05256521619"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p05256521619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136549_en-us_topic_0237122262_p65004318417"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p65004318417"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p65004318417"></a>Primary database node instance: not collected</p>
<p id="en-us_topic_0283136549_en-us_topic_0237122262_p3500931204113"><a name="en-us_topic_0283136549_en-us_topic_0237122262_p3500931204113"></a><a name="en-us_topic_0283136549_en-us_topic_0237122262_p3500931204113"></a>Database node instance: total number of logical write operations of the instance within the statistical interval (10 seconds)</p>
</td>
</tr>
</tbody>
</table>

