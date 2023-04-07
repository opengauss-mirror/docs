# GLOBAL\_THREAD\_WAIT\_STATUS<a name="EN-US_TOPIC_0245374744"></a>

**GLOBAL\_THREAD\_WAIT\_STATUS**  allows you to test the block waiting status of backend threads and auxiliary threads on all nodes.  For details about events, see  [Table 2](pg_thread_wait_status.md#en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4),  [Table 3](pg_thread_wait_status.md#en-us_topic_0237122466_table38811324183420),  [Table 4](pg_thread_wait_status.md#en-us_topic_0237122466_table124603113369), and  [Table 5](pg_thread_wait_status.md#en-us_topic_0237122466_table11826123533718).

In  **GLOBAL\_THREAD\_WAIT\_STATUS**, you can see all the call hierarchy relationships between threads of the SQL statements on all nodes in openGauss, and the block waiting status for each thread. With this view, you can easily locate the causes of process hang and similar issues.

The definitions of  **GLOBAL\_THREAD\_WAIT\_STATUS**  and  **THREAD\_WAIT\_STATUS**  are the same, because the  **GLOBAL\_THREAD\_WAIT\_STATUS**  view is essentially the query summary of the  **THREAD\_WAIT\_STATUS**  view on each node in openGauss.

**Table  1**  GLOBAL\_THREAD\_WAIT\_STATUS columns

<a name="en-us_topic_0237122640_table662933112916"></a>
<table><thead align="left"><tr id="en-us_topic_0237122640_row11222433122910"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122640_p122221533182917"><a name="en-us_topic_0237122640_p122221533182917"></a><a name="en-us_topic_0237122640_p122221533182917"></a><strong id="b56281743154818"><a name="b56281743154818"></a><a name="b56281743154818"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122640_p722317332297"><a name="en-us_topic_0237122640_p722317332297"></a><a name="en-us_topic_0237122640_p722317332297"></a><strong id="b4348164416489"><a name="b4348164416489"></a><a name="b4348164416489"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122640_p1822383316298"><a name="en-us_topic_0237122640_p1822383316298"></a><a name="en-us_topic_0237122640_p1822383316298"></a><strong id="b13141645144813"><a name="b13141645144813"></a><a name="b13141645144813"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122640_row7223153312916"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p222313312296"><a name="en-us_topic_0237122640_p222313312296"></a><a name="en-us_topic_0237122640_p222313312296"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p1222314339298"><a name="en-us_topic_0237122640_p1222314339298"></a><a name="en-us_topic_0237122640_p1222314339298"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p16224153352916"><a name="en-us_topic_0237122640_p16224153352916"></a><a name="en-us_topic_0237122640_p16224153352916"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row182241433152910"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p1722417336293"><a name="en-us_topic_0237122640_p1722417336293"></a><a name="en-us_topic_0237122640_p1722417336293"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p15224143318296"><a name="en-us_topic_0237122640_p15224143318296"></a><a name="en-us_topic_0237122640_p15224143318296"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p102241733202915"><a name="en-us_topic_0237122640_p102241733202915"></a><a name="en-us_topic_0237122640_p102241733202915"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row1922463311293"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p322443313294"><a name="en-us_topic_0237122640_p322443313294"></a><a name="en-us_topic_0237122640_p322443313294"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p13224133312299"><a name="en-us_topic_0237122640_p13224133312299"></a><a name="en-us_topic_0237122640_p13224133312299"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p7224173311290"><a name="en-us_topic_0237122640_p7224173311290"></a><a name="en-us_topic_0237122640_p7224173311290"></a>Thread name</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row1622433392914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p1922517336292"><a name="en-us_topic_0237122640_p1922517336292"></a><a name="en-us_topic_0237122640_p1922517336292"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p162251733182913"><a name="en-us_topic_0237122640_p162251733182913"></a><a name="en-us_topic_0237122640_p162251733182913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p322515333296"><a name="en-us_topic_0237122640_p322515333296"></a><a name="en-us_topic_0237122640_p322515333296"></a>Query ID. The value of this column is the same as that of <strong id="b1489194819488"><a name="b1489194819488"></a><a name="b1489194819488"></a>debug_query_id</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row522543322918"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p192254339290"><a name="en-us_topic_0237122640_p192254339290"></a><a name="en-us_topic_0237122640_p192254339290"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p1722543362919"><a name="en-us_topic_0237122640_p1722543362919"></a><a name="en-us_topic_0237122640_p1722543362919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p162251331296"><a name="en-us_topic_0237122640_p162251331296"></a><a name="en-us_topic_0237122640_p162251331296"></a>Thread ID of the current thread</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row12251333122918"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p182255333297"><a name="en-us_topic_0237122640_p182255333297"></a><a name="en-us_topic_0237122640_p182255333297"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p1722623310299"><a name="en-us_topic_0237122640_p1722623310299"></a><a name="en-us_topic_0237122640_p1722623310299"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p722633311293"><a name="en-us_topic_0237122640_p722633311293"></a><a name="en-us_topic_0237122640_p722633311293"></a>Session ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row16226183310293"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p32261339290"><a name="en-us_topic_0237122640_p32261339290"></a><a name="en-us_topic_0237122640_p32261339290"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p1222633352919"><a name="en-us_topic_0237122640_p1222633352919"></a><a name="en-us_topic_0237122640_p1222633352919"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p6226193311298"><a name="en-us_topic_0237122640_p6226193311298"></a><a name="en-us_topic_0237122640_p6226193311298"></a>Lightweight thread ID of the current thread</p>
</td>
</tr>
<tr id="row1866123820178"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1841630191617"><a name="p1841630191617"></a><a name="p1841630191617"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1251930161615"><a name="p1251930161615"></a><a name="p1251930161615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p195129277281"><a name="p195129277281"></a><a name="p195129277281"></a>Parent thread of the streaming thread</p>
</td>
</tr>
<tr id="row18737144231712"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1488234151618"><a name="p1488234151618"></a><a name="p1488234151618"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p15488134151619"><a name="p15488134151619"></a><a name="p15488134151619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p10488183411165"><a name="p10488183411165"></a><a name="p10488183411165"></a>Level of the streaming thread</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row162276331299"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p2227533192910"><a name="en-us_topic_0237122640_p2227533192910"></a><a name="en-us_topic_0237122640_p2227533192910"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p02277338290"><a name="en-us_topic_0237122640_p02277338290"></a><a name="en-us_topic_0237122640_p02277338290"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p1122823316298"><a name="en-us_topic_0237122640_p1122823316298"></a><a name="en-us_topic_0237122640_p1122823316298"></a>Concurrent thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row722812339294"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p16228183382912"><a name="en-us_topic_0237122640_p16228183382912"></a><a name="en-us_topic_0237122640_p16228183382912"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p192281733112915"><a name="en-us_topic_0237122640_p192281733112915"></a><a name="en-us_topic_0237122640_p192281733112915"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p1122820333294"><a name="en-us_topic_0237122640_p1122820333294"></a><a name="en-us_topic_0237122640_p1122820333294"></a>Waiting status of the current thread. For details about the waiting status, see <a href="../DataBaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237122640_row142282033152915"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122640_p3228113316292"><a name="en-us_topic_0237122640_p3228113316292"></a><a name="en-us_topic_0237122640_p3228113316292"></a>wait_event</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122640_p102281933132919"><a name="en-us_topic_0237122640_p102281933132919"></a><a name="en-us_topic_0237122640_p102281933132919"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122640_p122291833182913"><a name="en-us_topic_0237122640_p122291833182913"></a><a name="en-us_topic_0237122640_p122291833182913"></a>If <strong id="b71238513498"><a name="b71238513498"></a><a name="b71238513498"></a>wait_status</strong> is <strong id="b1124450496"><a name="b1124450496"></a><a name="b1124450496"></a>acquire lock</strong>, <strong id="b11250554911"><a name="b11250554911"></a><a name="b11250554911"></a>acquire lwlock</strong>, or <strong id="b612585154914"><a name="b612585154914"></a><a name="b612585154914"></a>wait io</strong>, this column describes the lock, lightweight lock, and I/O information, respectively. If <strong id="b148031712144912"><a name="b148031712144912"></a><a name="b148031712144912"></a>wait_status</strong> is not any of the three values, this column is empty.</p>
</td>
</tr>
</tbody>
</table>

