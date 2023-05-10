# THREAD\_WAIT\_STATUS

通过该视图可以检测当前实例中工作线程（backend thread）以及辅助线程（auxiliary thread）的阻塞等待情况，具体事件信息请参见[15.3.67-表2 等待状态列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4)、[15.3.67-表3 轻量级锁等待事件列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table38811324183420)、[15.3.67-表4 IO等待事件列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table124603113369)和[15.3.67-表5 事务锁等待事件列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table11826123533718)。

**表 1**  THREAD\_WAIT\_STATUS字段

<a name="zh-cn_topic_0237122639_table83561627142816"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122639_row195051327102812"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122639_p95051627152820"><a name="zh-cn_topic_0237122639_p95051627152820"></a><a name="zh-cn_topic_0237122639_p95051627152820"></a><strong id="zh-cn_topic_0237122639_b6505182710285"><a name="zh-cn_topic_0237122639_b6505182710285"></a><a name="zh-cn_topic_0237122639_b6505182710285"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122639_p115061327102818"><a name="zh-cn_topic_0237122639_p115061327102818"></a><a name="zh-cn_topic_0237122639_p115061327102818"></a><strong id="zh-cn_topic_0237122639_b450632710281"><a name="zh-cn_topic_0237122639_b450632710281"></a><a name="zh-cn_topic_0237122639_b450632710281"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122639_p1250632710289"><a name="zh-cn_topic_0237122639_p1250632710289"></a><a name="zh-cn_topic_0237122639_p1250632710289"></a><strong id="zh-cn_topic_0237122639_b1950622712817"><a name="zh-cn_topic_0237122639_b1950622712817"></a><a name="zh-cn_topic_0237122639_b1950622712817"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122639_row2506142720281"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p135061027182815"><a name="zh-cn_topic_0237122639_p135061027182815"></a><a name="zh-cn_topic_0237122639_p135061027182815"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p55071827142814"><a name="zh-cn_topic_0237122639_p55071827142814"></a><a name="zh-cn_topic_0237122639_p55071827142814"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p250762782818"><a name="zh-cn_topic_0237122639_p250762782818"></a><a name="zh-cn_topic_0237122639_p250762782818"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row050722711287"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p9508132714282"><a name="zh-cn_topic_0237122639_p9508132714282"></a><a name="zh-cn_topic_0237122639_p9508132714282"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p115081327112815"><a name="zh-cn_topic_0237122639_p115081327112815"></a><a name="zh-cn_topic_0237122639_p115081327112815"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p145085273280"><a name="zh-cn_topic_0237122639_p145085273280"></a><a name="zh-cn_topic_0237122639_p145085273280"></a>数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row850812274285"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p650822792818"><a name="zh-cn_topic_0237122639_p650822792818"></a><a name="zh-cn_topic_0237122639_p650822792818"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p050822792819"><a name="zh-cn_topic_0237122639_p050822792819"></a><a name="zh-cn_topic_0237122639_p050822792819"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p195091727172810"><a name="zh-cn_topic_0237122639_p195091727172810"></a><a name="zh-cn_topic_0237122639_p195091727172810"></a>线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row1850912712814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p250912712816"><a name="zh-cn_topic_0237122639_p250912712816"></a><a name="zh-cn_topic_0237122639_p250912712816"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p150922716285"><a name="zh-cn_topic_0237122639_p150922716285"></a><a name="zh-cn_topic_0237122639_p150922716285"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p10509627172814"><a name="zh-cn_topic_0237122639_p10509627172814"></a><a name="zh-cn_topic_0237122639_p10509627172814"></a>查询ID，对应debug_query_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row65091927182811"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p1151092711284"><a name="zh-cn_topic_0237122639_p1151092711284"></a><a name="zh-cn_topic_0237122639_p1151092711284"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p951013273281"><a name="zh-cn_topic_0237122639_p951013273281"></a><a name="zh-cn_topic_0237122639_p951013273281"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p051072712282"><a name="zh-cn_topic_0237122639_p051072712282"></a><a name="zh-cn_topic_0237122639_p051072712282"></a>当前线程的线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row3510172720287"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p18510112752813"><a name="zh-cn_topic_0237122639_p18510112752813"></a><a name="zh-cn_topic_0237122639_p18510112752813"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p451062712281"><a name="zh-cn_topic_0237122639_p451062712281"></a><a name="zh-cn_topic_0237122639_p451062712281"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p65111627122812"><a name="zh-cn_topic_0237122639_p65111627122812"></a><a name="zh-cn_topic_0237122639_p65111627122812"></a>session的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row1451122732811"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p251113278286"><a name="zh-cn_topic_0237122639_p251113278286"></a><a name="zh-cn_topic_0237122639_p251113278286"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p55112027182816"><a name="zh-cn_topic_0237122639_p55112027182816"></a><a name="zh-cn_topic_0237122639_p55112027182816"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p851111278285"><a name="zh-cn_topic_0237122639_p851111278285"></a><a name="zh-cn_topic_0237122639_p851111278285"></a>当前线程的轻量级线程号。</p>
</td>
</tr>
<tr id="row83163011165"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1841630191617"><a name="p1841630191617"></a><a name="p1841630191617"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1251930161615"><a name="p1251930161615"></a><a name="p1251930161615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p195129277281"><a name="p195129277281"></a><a name="p195129277281"></a>streaming线程的父线程。</p>
</td>
</tr>
<tr id="row1448713451613"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1488234151618"><a name="p1488234151618"></a><a name="p1488234151618"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p15488134151619"><a name="p15488134151619"></a><a name="p15488134151619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p10488183411165"><a name="p10488183411165"></a><a name="p10488183411165"></a>streaming线程的层级。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row951217272282"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p9513192713285"><a name="zh-cn_topic_0237122639_p9513192713285"></a><a name="zh-cn_topic_0237122639_p9513192713285"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p85131327182810"><a name="zh-cn_topic_0237122639_p85131327182810"></a><a name="zh-cn_topic_0237122639_p85131327182810"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p18513112712281"><a name="zh-cn_topic_0237122639_p18513112712281"></a><a name="zh-cn_topic_0237122639_p18513112712281"></a>并行线程的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row10513132716289"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p251312716289"><a name="zh-cn_topic_0237122639_p251312716289"></a><a name="zh-cn_topic_0237122639_p251312716289"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p1551352718284"><a name="zh-cn_topic_0237122639_p1551352718284"></a><a name="zh-cn_topic_0237122639_p1551352718284"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p951322714281"><a name="zh-cn_topic_0237122639_p951322714281"></a><a name="zh-cn_topic_0237122639_p951322714281"></a>当前线程的等待状态。等待状态的详细信息请参见<a href="../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4">15.3.67-表2 等待状态列表</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122639_row16514172762814"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122639_p151472711288"><a name="zh-cn_topic_0237122639_p151472711288"></a><a name="zh-cn_topic_0237122639_p151472711288"></a>wait_event</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122639_p11514227192819"><a name="zh-cn_topic_0237122639_p11514227192819"></a><a name="zh-cn_topic_0237122639_p11514227192819"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122639_p15514152772812"><a name="zh-cn_topic_0237122639_p15514152772812"></a><a name="zh-cn_topic_0237122639_p15514152772812"></a>如果wait_status是acquire lock、acquire lwlock、wait io三种类型，此列描述具体的锁、轻量级锁、IO的信息。否则为空。</p>
</td>
</tr>
</tbody>
</table>

