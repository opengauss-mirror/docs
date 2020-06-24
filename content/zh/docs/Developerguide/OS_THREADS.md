# OS\_THREADS<a name="ZH-CN_TOPIC_0245374658"></a>

提供当前节点下所有线程的状态信息。

**表 1**  OS\_THREADS字段

<a name="zh-cn_topic_0237122554_table1626623615299"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122554_row1242793672913"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122554_p10427173616298"><a name="zh-cn_topic_0237122554_p10427173616298"></a><a name="zh-cn_topic_0237122554_p10427173616298"></a><strong id="zh-cn_topic_0237122554_b54279366290"><a name="zh-cn_topic_0237122554_b54279366290"></a><a name="zh-cn_topic_0237122554_b54279366290"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122554_p1428123652918"><a name="zh-cn_topic_0237122554_p1428123652918"></a><a name="zh-cn_topic_0237122554_p1428123652918"></a><strong id="zh-cn_topic_0237122554_b14428036132911"><a name="zh-cn_topic_0237122554_b14428036132911"></a><a name="zh-cn_topic_0237122554_b14428036132911"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122554_p144281436202911"><a name="zh-cn_topic_0237122554_p144281436202911"></a><a name="zh-cn_topic_0237122554_p144281436202911"></a><strong id="zh-cn_topic_0237122554_b134281361295"><a name="zh-cn_topic_0237122554_b134281361295"></a><a name="zh-cn_topic_0237122554_b134281361295"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122554_row84281136192915"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122554_p1942811368292"><a name="zh-cn_topic_0237122554_p1942811368292"></a><a name="zh-cn_topic_0237122554_p1942811368292"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122554_p144284366295"><a name="zh-cn_topic_0237122554_p144284366295"></a><a name="zh-cn_topic_0237122554_p144284366295"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122554_p1342823619292"><a name="zh-cn_topic_0237122554_p1342823619292"></a><a name="zh-cn_topic_0237122554_p1342823619292"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122554_row15428123619296"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122554_p8428173692911"><a name="zh-cn_topic_0237122554_p8428173692911"></a><a name="zh-cn_topic_0237122554_p8428173692911"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122554_p142914367291"><a name="zh-cn_topic_0237122554_p142914367291"></a><a name="zh-cn_topic_0237122554_p142914367291"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122554_p342916366293"><a name="zh-cn_topic_0237122554_p342916366293"></a><a name="zh-cn_topic_0237122554_p342916366293"></a>数据库进程中正在运行的线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122554_row124291936122917"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122554_p1742973652919"><a name="zh-cn_topic_0237122554_p1742973652919"></a><a name="zh-cn_topic_0237122554_p1742973652919"></a>lwpid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122554_p12429193616291"><a name="zh-cn_topic_0237122554_p12429193616291"></a><a name="zh-cn_topic_0237122554_p12429193616291"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122554_p6429636202920"><a name="zh-cn_topic_0237122554_p6429636202920"></a><a name="zh-cn_topic_0237122554_p6429636202920"></a>与pid对应的轻量级线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122554_row10429336182913"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122554_p94291361292"><a name="zh-cn_topic_0237122554_p94291361292"></a><a name="zh-cn_topic_0237122554_p94291361292"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122554_p743012365295"><a name="zh-cn_topic_0237122554_p743012365295"></a><a name="zh-cn_topic_0237122554_p743012365295"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122554_p1443093618291"><a name="zh-cn_topic_0237122554_p1443093618291"></a><a name="zh-cn_topic_0237122554_p1443093618291"></a>与pid对应的线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122554_row12430143672916"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122554_p1543018364294"><a name="zh-cn_topic_0237122554_p1543018364294"></a><a name="zh-cn_topic_0237122554_p1543018364294"></a>creation_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122554_p18430173613295"><a name="zh-cn_topic_0237122554_p18430173613295"></a><a name="zh-cn_topic_0237122554_p18430173613295"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122554_p134301836152916"><a name="zh-cn_topic_0237122554_p134301836152916"></a><a name="zh-cn_topic_0237122554_p134301836152916"></a>与pid对应的线程创建的时间。</p>
</td>
</tr>
</tbody>
</table>

