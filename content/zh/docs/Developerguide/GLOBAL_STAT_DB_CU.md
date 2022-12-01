# GLOBAL\_STAT\_DB\_CU<a name="ZH-CN_TOPIC_0245374800"></a>

GLOBAL\_STAT\_DB\_CU视图用于查询openGauss，每个数据库的CU命中情况。可以通过pg\_stat\_reset\(\)进行清零。

**表 1**  GLOBAL\_STAT\_DB\_CU字段

<a name="zh-cn_topic_0237122696_table974813810284"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122696_row16829163813288"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122696_p11830238162818"><a name="zh-cn_topic_0237122696_p11830238162818"></a><a name="zh-cn_topic_0237122696_p11830238162818"></a><strong id="zh-cn_topic_0237122696_b1583016388287"><a name="zh-cn_topic_0237122696_b1583016388287"></a><a name="zh-cn_topic_0237122696_b1583016388287"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122696_p68301383285"><a name="zh-cn_topic_0237122696_p68301383285"></a><a name="zh-cn_topic_0237122696_p68301383285"></a><strong id="zh-cn_topic_0237122696_b1483063810289"><a name="zh-cn_topic_0237122696_b1483063810289"></a><a name="zh-cn_topic_0237122696_b1483063810289"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122696_p6830538142815"><a name="zh-cn_topic_0237122696_p6830538142815"></a><a name="zh-cn_topic_0237122696_p6830538142815"></a><strong id="zh-cn_topic_0237122696_b208301238122812"><a name="zh-cn_topic_0237122696_b208301238122812"></a><a name="zh-cn_topic_0237122696_b208301238122812"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122696_row3830203811289"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122696_p1483033862815"><a name="zh-cn_topic_0237122696_p1483033862815"></a><a name="zh-cn_topic_0237122696_p1483033862815"></a>node_name1</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122696_p5830193832818"><a name="zh-cn_topic_0237122696_p5830193832818"></a><a name="zh-cn_topic_0237122696_p5830193832818"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122696_p1283020386282"><a name="zh-cn_topic_0237122696_p1283020386282"></a><a name="zh-cn_topic_0237122696_p1283020386282"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122696_row883163813281"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122696_p14831838182812"><a name="zh-cn_topic_0237122696_p14831838182812"></a><a name="zh-cn_topic_0237122696_p14831838182812"></a>db_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122696_p1883113382284"><a name="zh-cn_topic_0237122696_p1883113382284"></a><a name="zh-cn_topic_0237122696_p1883113382284"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122696_p9831163811285"><a name="zh-cn_topic_0237122696_p9831163811285"></a><a name="zh-cn_topic_0237122696_p9831163811285"></a>数据库名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122696_row1783183816282"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122696_p17831133819289"><a name="zh-cn_topic_0237122696_p17831133819289"></a><a name="zh-cn_topic_0237122696_p17831133819289"></a>mem_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122696_p128311538182816"><a name="zh-cn_topic_0237122696_p128311538182816"></a><a name="zh-cn_topic_0237122696_p128311538182816"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122696_p18831173812819"><a name="zh-cn_topic_0237122696_p18831173812819"></a><a name="zh-cn_topic_0237122696_p18831173812819"></a>内存命中次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122696_row12831103813286"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122696_p1883119380288"><a name="zh-cn_topic_0237122696_p1883119380288"></a><a name="zh-cn_topic_0237122696_p1883119380288"></a>hdd_sync_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122696_p583293842818"><a name="zh-cn_topic_0237122696_p583293842818"></a><a name="zh-cn_topic_0237122696_p583293842818"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122696_p198321638122814"><a name="zh-cn_topic_0237122696_p198321638122814"></a><a name="zh-cn_topic_0237122696_p198321638122814"></a>硬盘同步读次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122696_row188324385286"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122696_p9832738142813"><a name="zh-cn_topic_0237122696_p9832738142813"></a><a name="zh-cn_topic_0237122696_p9832738142813"></a>hdd_asyn_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122696_p15832338162811"><a name="zh-cn_topic_0237122696_p15832338162811"></a><a name="zh-cn_topic_0237122696_p15832338162811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122696_p583243816287"><a name="zh-cn_topic_0237122696_p583243816287"></a><a name="zh-cn_topic_0237122696_p583243816287"></a>硬盘异步读次数。</p>
</td>
</tr>
</tbody>
</table>
