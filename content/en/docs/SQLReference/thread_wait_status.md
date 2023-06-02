# THREAD\_WAIT\_STATUS<a name="EN-US_TOPIC_0245374743"></a>

**THREAD\_WAIT\_STATUS**  allows you to test the block waiting status of the backend thread and auxiliary thread in the current instance. For details about events, see  [Table 2](../DatabaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4),  [Table 3](../DatabaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_table38811324183420),  [Table 4](../DatabaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_table124603113369), and  [Table 5](../DatabaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_table11826123533718).

**Table  1**  THREAD\_WAIT\_STATUS columns

<a name="en-us_topic_0237122639_table83561627142816"></a>
<table><thead align="left"><tr id="en-us_topic_0237122639_row195051327102812"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122639_p95051627152820"><a name="en-us_topic_0237122639_p95051627152820"></a><a name="en-us_topic_0237122639_p95051627152820"></a><strong id="b1275812710328"><a name="b1275812710328"></a><a name="b1275812710328"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122639_p115061327102818"><a name="en-us_topic_0237122639_p115061327102818"></a><a name="en-us_topic_0237122639_p115061327102818"></a><strong id="b18481142893212"><a name="b18481142893212"></a><a name="b18481142893212"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122639_p1250632710289"><a name="en-us_topic_0237122639_p1250632710289"></a><a name="en-us_topic_0237122639_p1250632710289"></a><strong id="b1015052913320"><a name="b1015052913320"></a><a name="b1015052913320"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122639_row2506142720281"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p135061027182815"><a name="en-us_topic_0237122639_p135061027182815"></a><a name="en-us_topic_0237122639_p135061027182815"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p55071827142814"><a name="en-us_topic_0237122639_p55071827142814"></a><a name="en-us_topic_0237122639_p55071827142814"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p250762782818"><a name="en-us_topic_0237122639_p250762782818"></a><a name="en-us_topic_0237122639_p250762782818"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row050722711287"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p9508132714282"><a name="en-us_topic_0237122639_p9508132714282"></a><a name="en-us_topic_0237122639_p9508132714282"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p115081327112815"><a name="en-us_topic_0237122639_p115081327112815"></a><a name="en-us_topic_0237122639_p115081327112815"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p145085273280"><a name="en-us_topic_0237122639_p145085273280"></a><a name="en-us_topic_0237122639_p145085273280"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row850812274285"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p650822792818"><a name="en-us_topic_0237122639_p650822792818"></a><a name="en-us_topic_0237122639_p650822792818"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p050822792819"><a name="en-us_topic_0237122639_p050822792819"></a><a name="en-us_topic_0237122639_p050822792819"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p195091727172810"><a name="en-us_topic_0237122639_p195091727172810"></a><a name="en-us_topic_0237122639_p195091727172810"></a>Thread name</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row1850912712814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p250912712816"><a name="en-us_topic_0237122639_p250912712816"></a><a name="en-us_topic_0237122639_p250912712816"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p150922716285"><a name="en-us_topic_0237122639_p150922716285"></a><a name="en-us_topic_0237122639_p150922716285"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p10509627172814"><a name="en-us_topic_0237122639_p10509627172814"></a><a name="en-us_topic_0237122639_p10509627172814"></a>Query ID. The value of this column is the same as that of <strong id="b1585012327326"><a name="b1585012327326"></a><a name="b1585012327326"></a>debug_query_id</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row65091927182811"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p1151092711284"><a name="en-us_topic_0237122639_p1151092711284"></a><a name="en-us_topic_0237122639_p1151092711284"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p951013273281"><a name="en-us_topic_0237122639_p951013273281"></a><a name="en-us_topic_0237122639_p951013273281"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p051072712282"><a name="en-us_topic_0237122639_p051072712282"></a><a name="en-us_topic_0237122639_p051072712282"></a>Thread ID of the current thread</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row3510172720287"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p18510112752813"><a name="en-us_topic_0237122639_p18510112752813"></a><a name="en-us_topic_0237122639_p18510112752813"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p451062712281"><a name="en-us_topic_0237122639_p451062712281"></a><a name="en-us_topic_0237122639_p451062712281"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p65111627122812"><a name="en-us_topic_0237122639_p65111627122812"></a><a name="en-us_topic_0237122639_p65111627122812"></a>Session ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row1451122732811"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p251113278286"><a name="en-us_topic_0237122639_p251113278286"></a><a name="en-us_topic_0237122639_p251113278286"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p55112027182816"><a name="en-us_topic_0237122639_p55112027182816"></a><a name="en-us_topic_0237122639_p55112027182816"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p851111278285"><a name="en-us_topic_0237122639_p851111278285"></a><a name="en-us_topic_0237122639_p851111278285"></a>Lightweight thread ID of the current thread</p>
</td>
</tr>
<tr id="row83163011165"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1841630191617"><a name="p1841630191617"></a><a name="p1841630191617"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1251930161615"><a name="p1251930161615"></a><a name="p1251930161615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p195129277281"><a name="p195129277281"></a><a name="p195129277281"></a>Parent thread of the streaming thread</p>
</td>
</tr>
<tr id="row1448713451613"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1488234151618"><a name="p1488234151618"></a><a name="p1488234151618"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p15488134151619"><a name="p15488134151619"></a><a name="p15488134151619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p10488183411165"><a name="p10488183411165"></a><a name="p10488183411165"></a>Level of the streaming thread</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row951217272282"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p9513192713285"><a name="en-us_topic_0237122639_p9513192713285"></a><a name="en-us_topic_0237122639_p9513192713285"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p85131327182810"><a name="en-us_topic_0237122639_p85131327182810"></a><a name="en-us_topic_0237122639_p85131327182810"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p18513112712281"><a name="en-us_topic_0237122639_p18513112712281"></a><a name="en-us_topic_0237122639_p18513112712281"></a>Concurrent thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row10513132716289"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p251312716289"><a name="en-us_topic_0237122639_p251312716289"></a><a name="en-us_topic_0237122639_p251312716289"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p1551352718284"><a name="en-us_topic_0237122639_p1551352718284"></a><a name="en-us_topic_0237122639_p1551352718284"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p951322714281"><a name="en-us_topic_0237122639_p951322714281"></a><a name="en-us_topic_0237122639_p951322714281"></a>Waiting status of the current thread. For details about the waiting status, see <a href="../DatabaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122639_row16514172762814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122639_p151472711288"><a name="en-us_topic_0237122639_p151472711288"></a><a name="en-us_topic_0237122639_p151472711288"></a>wait_event</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122639_p11514227192819"><a name="en-us_topic_0237122639_p11514227192819"></a><a name="en-us_topic_0237122639_p11514227192819"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122639_p15514152772812"><a name="en-us_topic_0237122639_p15514152772812"></a><a name="en-us_topic_0237122639_p15514152772812"></a>If <strong id="b8849131623312"><a name="b8849131623312"></a><a name="b8849131623312"></a>wait_status</strong> is <strong id="b13854916193311"><a name="b13854916193311"></a><a name="b13854916193311"></a>acquire lock</strong>, <strong id="b1985481623315"><a name="b1985481623315"></a><a name="b1985481623315"></a>acquire lwlock</strong>, or <strong id="b198555168332"><a name="b198555168332"></a><a name="b198555168332"></a>wait io</strong>, this column describes the lock, lightweight lock, and I/O information, respectively. If <strong id="b19855171616339"><a name="b19855171616339"></a><a name="b19855171616339"></a>wait_status</strong> is not any of the three values, this column is empty.</p>
</td>
</tr>
</tbody>
</table>

