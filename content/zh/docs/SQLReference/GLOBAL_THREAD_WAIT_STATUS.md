# GLOBAL\_THREAD\_WAIT\_STATUS<a name="ZH-CN_TOPIC_0245374744"></a>

通过该视图可以检测所有节点上工作线程（backend thread）以及辅助线程（auxiliary thread）的阻塞等待情况。具体事件信息请参见[15.3.67-表2 等待状态列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4)、[15.3.67-表3 轻量级锁等待事件列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table38811324183420)、[15.3.67-表4 IO等待事件列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table124603113369)和[15.3.67-表5 事务锁等待事件列表](../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_table11826123533718)。

通过GLOBAL\_THREAD\_WAIT\_STATUS视图，可以查看openGauss全局各个节点上所有SQL语句产生的线程之间的调用层次关系，以及各个线程的阻塞等待状态，从而更容易定位hang以及类似现象的原因。

GLOBAL\_THREAD\_WAIT\_STATUS视图和THREAD\_WAIT\_STATUS视图列定义完全相同，这是由于GLOBAL\_THREAD\_WAIT\_STATUS视图本质是到openGauss中各个节点上查询THREAD\_WAIT\_STATUS视图汇总的结果。

**表 1**  GLOBAL\_THREAD\_WAIT\_STATUS字段

<a name="zh-cn_topic_0237122640_table662933112916"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122640_row11222433122910"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122640_p122221533182917"><a name="zh-cn_topic_0237122640_p122221533182917"></a><a name="zh-cn_topic_0237122640_p122221533182917"></a><strong id="zh-cn_topic_0237122640_b9223233112913"><a name="zh-cn_topic_0237122640_b9223233112913"></a><a name="zh-cn_topic_0237122640_b9223233112913"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122640_p722317332297"><a name="zh-cn_topic_0237122640_p722317332297"></a><a name="zh-cn_topic_0237122640_p722317332297"></a><strong id="zh-cn_topic_0237122640_b1722313392912"><a name="zh-cn_topic_0237122640_b1722313392912"></a><a name="zh-cn_topic_0237122640_b1722313392912"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122640_p1822383316298"><a name="zh-cn_topic_0237122640_p1822383316298"></a><a name="zh-cn_topic_0237122640_p1822383316298"></a><strong id="zh-cn_topic_0237122640_b132231733182920"><a name="zh-cn_topic_0237122640_b132231733182920"></a><a name="zh-cn_topic_0237122640_b132231733182920"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122640_row7223153312916"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p222313312296"><a name="zh-cn_topic_0237122640_p222313312296"></a><a name="zh-cn_topic_0237122640_p222313312296"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p1222314339298"><a name="zh-cn_topic_0237122640_p1222314339298"></a><a name="zh-cn_topic_0237122640_p1222314339298"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p16224153352916"><a name="zh-cn_topic_0237122640_p16224153352916"></a><a name="zh-cn_topic_0237122640_p16224153352916"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row182241433152910"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p1722417336293"><a name="zh-cn_topic_0237122640_p1722417336293"></a><a name="zh-cn_topic_0237122640_p1722417336293"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p15224143318296"><a name="zh-cn_topic_0237122640_p15224143318296"></a><a name="zh-cn_topic_0237122640_p15224143318296"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p102241733202915"><a name="zh-cn_topic_0237122640_p102241733202915"></a><a name="zh-cn_topic_0237122640_p102241733202915"></a>数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row1922463311293"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p322443313294"><a name="zh-cn_topic_0237122640_p322443313294"></a><a name="zh-cn_topic_0237122640_p322443313294"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p13224133312299"><a name="zh-cn_topic_0237122640_p13224133312299"></a><a name="zh-cn_topic_0237122640_p13224133312299"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p7224173311290"><a name="zh-cn_topic_0237122640_p7224173311290"></a><a name="zh-cn_topic_0237122640_p7224173311290"></a>线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row1622433392914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p1922517336292"><a name="zh-cn_topic_0237122640_p1922517336292"></a><a name="zh-cn_topic_0237122640_p1922517336292"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p162251733182913"><a name="zh-cn_topic_0237122640_p162251733182913"></a><a name="zh-cn_topic_0237122640_p162251733182913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p322515333296"><a name="zh-cn_topic_0237122640_p322515333296"></a><a name="zh-cn_topic_0237122640_p322515333296"></a>查询ID，对应debug_query_id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row522543322918"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p192254339290"><a name="zh-cn_topic_0237122640_p192254339290"></a><a name="zh-cn_topic_0237122640_p192254339290"></a>tid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p1722543362919"><a name="zh-cn_topic_0237122640_p1722543362919"></a><a name="zh-cn_topic_0237122640_p1722543362919"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p162251331296"><a name="zh-cn_topic_0237122640_p162251331296"></a><a name="zh-cn_topic_0237122640_p162251331296"></a>当前线程的线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row12251333122918"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p182255333297"><a name="zh-cn_topic_0237122640_p182255333297"></a><a name="zh-cn_topic_0237122640_p182255333297"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p1722623310299"><a name="zh-cn_topic_0237122640_p1722623310299"></a><a name="zh-cn_topic_0237122640_p1722623310299"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p722633311293"><a name="zh-cn_topic_0237122640_p722633311293"></a><a name="zh-cn_topic_0237122640_p722633311293"></a>session的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row16226183310293"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p32261339290"><a name="zh-cn_topic_0237122640_p32261339290"></a><a name="zh-cn_topic_0237122640_p32261339290"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p1222633352919"><a name="zh-cn_topic_0237122640_p1222633352919"></a><a name="zh-cn_topic_0237122640_p1222633352919"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p6226193311298"><a name="zh-cn_topic_0237122640_p6226193311298"></a><a name="zh-cn_topic_0237122640_p6226193311298"></a>当前线程的轻量级线程号。</p>
</td>
</tr>
<tr id="row1866123820178"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1841630191617"><a name="p1841630191617"></a><a name="p1841630191617"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1251930161615"><a name="p1251930161615"></a><a name="p1251930161615"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p195129277281"><a name="p195129277281"></a><a name="p195129277281"></a>streaming线程的父线程。</p>
</td>
</tr>
<tr id="row18737144231712"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1488234151618"><a name="p1488234151618"></a><a name="p1488234151618"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p15488134151619"><a name="p15488134151619"></a><a name="p15488134151619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p10488183411165"><a name="p10488183411165"></a><a name="p10488183411165"></a>streaming线程的层级。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row162276331299"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p2227533192910"><a name="zh-cn_topic_0237122640_p2227533192910"></a><a name="zh-cn_topic_0237122640_p2227533192910"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p02277338290"><a name="zh-cn_topic_0237122640_p02277338290"></a><a name="zh-cn_topic_0237122640_p02277338290"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p1122823316298"><a name="zh-cn_topic_0237122640_p1122823316298"></a><a name="zh-cn_topic_0237122640_p1122823316298"></a>并行线程的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row722812339294"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p16228183382912"><a name="zh-cn_topic_0237122640_p16228183382912"></a><a name="zh-cn_topic_0237122640_p16228183382912"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p192281733112915"><a name="zh-cn_topic_0237122640_p192281733112915"></a><a name="zh-cn_topic_0237122640_p192281733112915"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p1122820333294"><a name="zh-cn_topic_0237122640_p1122820333294"></a><a name="zh-cn_topic_0237122640_p1122820333294"></a>当前线程的等待状态。等待状态的详细信息请参见<a href="../DatabaseReference/PG_THREAD_WAIT_STATUS.md#zh-cn_topic_0283136724_zh-cn_topic_0237122466_zh-cn_topic_0059777957_t794f802302c24514a5db22d51eabacc4">15.3.67-表2 等待状态列表</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122640_row142282033152915"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122640_p3228113316292"><a name="zh-cn_topic_0237122640_p3228113316292"></a><a name="zh-cn_topic_0237122640_p3228113316292"></a>wait_event</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122640_p102281933132919"><a name="zh-cn_topic_0237122640_p102281933132919"></a><a name="zh-cn_topic_0237122640_p102281933132919"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122640_p122291833182913"><a name="zh-cn_topic_0237122640_p122291833182913"></a><a name="zh-cn_topic_0237122640_p122291833182913"></a>如果wait_status是acquire lock、acquire lwlock、wait io三种类型，此列描述具体的锁、轻量级锁、IO的信息。否则是空。</p>
</td>
</tr>
</tbody>
</table>
