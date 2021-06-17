# GLOBAL\_SESSION\_MEMORY<a name="ZH-CN_TOPIC_0245374738"></a>

统计各节点的Session级别的内存使用情况，包含执行作业在数据节点上openGauss线程和Stream线程分配的所有内存，单位为MB。

**表 1**  GLOBAL\_SESSION\_MEMORY字段

<a name="zh-cn_topic_0237122634_table1751318181249"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122634_row75853187240"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122634_p2585161812412"><a name="zh-cn_topic_0237122634_p2585161812412"></a><a name="zh-cn_topic_0237122634_p2585161812412"></a><strong id="zh-cn_topic_0237122634_b1658518186241"><a name="zh-cn_topic_0237122634_b1658518186241"></a><a name="zh-cn_topic_0237122634_b1658518186241"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122634_p658591832420"><a name="zh-cn_topic_0237122634_p658591832420"></a><a name="zh-cn_topic_0237122634_p658591832420"></a><strong id="zh-cn_topic_0237122634_b1958571832416"><a name="zh-cn_topic_0237122634_b1958571832416"></a><a name="zh-cn_topic_0237122634_b1958571832416"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122634_p165861918112411"><a name="zh-cn_topic_0237122634_p165861918112411"></a><a name="zh-cn_topic_0237122634_p165861918112411"></a><strong id="zh-cn_topic_0237122634_b1258651810247"><a name="zh-cn_topic_0237122634_b1258651810247"></a><a name="zh-cn_topic_0237122634_b1258651810247"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122634_row1458631811245"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122634_p05861718122413"><a name="zh-cn_topic_0237122634_p05861718122413"></a><a name="zh-cn_topic_0237122634_p05861718122413"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122634_p20586318122411"><a name="zh-cn_topic_0237122634_p20586318122411"></a><a name="zh-cn_topic_0237122634_p20586318122411"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122634_p35861818162410"><a name="zh-cn_topic_0237122634_p35861818162410"></a><a name="zh-cn_topic_0237122634_p35861818162410"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122634_row3586141811244"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122634_p1158610180245"><a name="zh-cn_topic_0237122634_p1158610180245"></a><a name="zh-cn_topic_0237122634_p1158610180245"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122634_p458611852416"><a name="zh-cn_topic_0237122634_p458611852416"></a><a name="zh-cn_topic_0237122634_p458611852416"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122634_p55861318162410"><a name="zh-cn_topic_0237122634_p55861318162410"></a><a name="zh-cn_topic_0237122634_p55861318162410"></a>线程启动时间+线程标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122634_row12587181810242"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122634_p0587181882419"><a name="zh-cn_topic_0237122634_p0587181882419"></a><a name="zh-cn_topic_0237122634_p0587181882419"></a>init_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122634_p758771892415"><a name="zh-cn_topic_0237122634_p758771892415"></a><a name="zh-cn_topic_0237122634_p758771892415"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122634_p1058791810248"><a name="zh-cn_topic_0237122634_p1058791810248"></a><a name="zh-cn_topic_0237122634_p1058791810248"></a>当前正在执行作业进入执行器前已分配的内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122634_row125871418102415"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122634_p2587111820245"><a name="zh-cn_topic_0237122634_p2587111820245"></a><a name="zh-cn_topic_0237122634_p2587111820245"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122634_p195871618152419"><a name="zh-cn_topic_0237122634_p195871618152419"></a><a name="zh-cn_topic_0237122634_p195871618152419"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122634_p1158741819241"><a name="zh-cn_topic_0237122634_p1158741819241"></a><a name="zh-cn_topic_0237122634_p1158741819241"></a>当前正在执行作业已分配的内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122634_row125871518202415"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122634_p18588191818240"><a name="zh-cn_topic_0237122634_p18588191818240"></a><a name="zh-cn_topic_0237122634_p18588191818240"></a>peak_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122634_p145889184242"><a name="zh-cn_topic_0237122634_p145889184242"></a><a name="zh-cn_topic_0237122634_p145889184242"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122634_p158821814245"><a name="zh-cn_topic_0237122634_p158821814245"></a><a name="zh-cn_topic_0237122634_p158821814245"></a>当前正在执行作业已分配的内存峰值。</p>
</td>
</tr>
</tbody>
</table>

