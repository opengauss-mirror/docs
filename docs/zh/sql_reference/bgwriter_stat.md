# BGWRITER\_STAT

BGWRITER\_STAT视图显示关于后端写进程活动的统计信息。

**表 1**  BGWRITER\_STAT字段

<a name="zh-cn_topic_0237122712_table14889184316463"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122712_row599220432469"><th class="cellrowborder" valign="top" width="19.06%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122712_p169921743144611"><a name="zh-cn_topic_0237122712_p169921743144611"></a><a name="zh-cn_topic_0237122712_p169921743144611"></a><strong id="zh-cn_topic_0237122712_b799244310464"><a name="zh-cn_topic_0237122712_b799244310464"></a><a name="zh-cn_topic_0237122712_b799244310464"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="23.29%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122712_p139931043194616"><a name="zh-cn_topic_0237122712_p139931043194616"></a><a name="zh-cn_topic_0237122712_p139931043194616"></a><strong id="zh-cn_topic_0237122712_b29932430465"><a name="zh-cn_topic_0237122712_b29932430465"></a><a name="zh-cn_topic_0237122712_b29932430465"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="57.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122712_p99937433466"><a name="zh-cn_topic_0237122712_p99937433466"></a><a name="zh-cn_topic_0237122712_p99937433466"></a><strong id="zh-cn_topic_0237122712_b11993184374614"><a name="zh-cn_topic_0237122712_b11993184374614"></a><a name="zh-cn_topic_0237122712_b11993184374614"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122712_row399354318466"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p999384334617"><a name="zh-cn_topic_0237122712_p999384334617"></a><a name="zh-cn_topic_0237122712_p999384334617"></a>checkpoints_timed</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p6993184314616"><a name="zh-cn_topic_0237122712_p6993184314616"></a><a name="zh-cn_topic_0237122712_p6993184314616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p8993144354613"><a name="zh-cn_topic_0237122712_p8993144354613"></a><a name="zh-cn_topic_0237122712_p8993144354613"></a>执行的定期检查点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row29931443194614"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p1999314324616"><a name="zh-cn_topic_0237122712_p1999314324616"></a><a name="zh-cn_topic_0237122712_p1999314324616"></a>checkpoints_req</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p10994134314466"><a name="zh-cn_topic_0237122712_p10994134314466"></a><a name="zh-cn_topic_0237122712_p10994134314466"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p10994174324614"><a name="zh-cn_topic_0237122712_p10994174324614"></a><a name="zh-cn_topic_0237122712_p10994174324614"></a>执行的需求检查点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row6994343124617"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p49941843194619"><a name="zh-cn_topic_0237122712_p49941843194619"></a><a name="zh-cn_topic_0237122712_p49941843194619"></a>checkpoint_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p399410431463"><a name="zh-cn_topic_0237122712_p399410431463"></a><a name="zh-cn_topic_0237122712_p399410431463"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p19994243114615"><a name="zh-cn_topic_0237122712_p19994243114615"></a><a name="zh-cn_topic_0237122712_p19994243114615"></a>花费在检查点处理部分的时间总量，其中文件被写入到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row79941343184616"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p139941443194610"><a name="zh-cn_topic_0237122712_p139941443194610"></a><a name="zh-cn_topic_0237122712_p139941443194610"></a>checkpoint_sync_time</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p199941443104613"><a name="zh-cn_topic_0237122712_p199941443104613"></a><a name="zh-cn_topic_0237122712_p199941443104613"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p1099534315464"><a name="zh-cn_topic_0237122712_p1099534315464"></a><a name="zh-cn_topic_0237122712_p1099534315464"></a>花费在检查点处理部分的时间总量，其中文件被同步到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row1099512432465"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p19995143144618"><a name="zh-cn_topic_0237122712_p19995143144618"></a><a name="zh-cn_topic_0237122712_p19995143144618"></a>buffers_checkpoint</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p59951432462"><a name="zh-cn_topic_0237122712_p59951432462"></a><a name="zh-cn_topic_0237122712_p59951432462"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p209956438466"><a name="zh-cn_topic_0237122712_p209956438466"></a><a name="zh-cn_topic_0237122712_p209956438466"></a>检查点写缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row4995164384618"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p9995543204614"><a name="zh-cn_topic_0237122712_p9995543204614"></a><a name="zh-cn_topic_0237122712_p9995543204614"></a>buffers_clean</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p19952433462"><a name="zh-cn_topic_0237122712_p19952433462"></a><a name="zh-cn_topic_0237122712_p19952433462"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p599613433465"><a name="zh-cn_topic_0237122712_p599613433465"></a><a name="zh-cn_topic_0237122712_p599613433465"></a>后端写进程写缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row6996043114611"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p12996134344615"><a name="zh-cn_topic_0237122712_p12996134344615"></a><a name="zh-cn_topic_0237122712_p12996134344615"></a>maxwritten_clean</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p0996164320467"><a name="zh-cn_topic_0237122712_p0996164320467"></a><a name="zh-cn_topic_0237122712_p0996164320467"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p599624317465"><a name="zh-cn_topic_0237122712_p599624317465"></a><a name="zh-cn_topic_0237122712_p599624317465"></a>后端写进程停止清理扫描时间数，因为它写了太多缓冲区。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row1899619433466"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p19996143124610"><a name="zh-cn_topic_0237122712_p19996143124610"></a><a name="zh-cn_topic_0237122712_p19996143124610"></a>buffers_backend</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p499764314467"><a name="zh-cn_topic_0237122712_p499764314467"></a><a name="zh-cn_topic_0237122712_p499764314467"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p4997743204620"><a name="zh-cn_topic_0237122712_p4997743204620"></a><a name="zh-cn_topic_0237122712_p4997743204620"></a>通过后端直接写缓冲区数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row13997543114610"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p59977438461"><a name="zh-cn_topic_0237122712_p59977438461"></a><a name="zh-cn_topic_0237122712_p59977438461"></a>buffers_backend_fsync</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p179971431468"><a name="zh-cn_topic_0237122712_p179971431468"></a><a name="zh-cn_topic_0237122712_p179971431468"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p999754374615"><a name="zh-cn_topic_0237122712_p999754374615"></a><a name="zh-cn_topic_0237122712_p999754374615"></a>后端不得不执行自己的fsync调用的时间数（通常后端写进程处理这些即使后端确实自己写）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row1599719434462"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p09971743124613"><a name="zh-cn_topic_0237122712_p09971743124613"></a><a name="zh-cn_topic_0237122712_p09971743124613"></a>buffers_alloc</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p199971243104616"><a name="zh-cn_topic_0237122712_p199971243104616"></a><a name="zh-cn_topic_0237122712_p199971243104616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p59971443124612"><a name="zh-cn_topic_0237122712_p59971443124612"></a><a name="zh-cn_topic_0237122712_p59971443124612"></a>分配的缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122712_row9998243184619"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122712_p099817438469"><a name="zh-cn_topic_0237122712_p099817438469"></a><a name="zh-cn_topic_0237122712_p099817438469"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122712_p9998124311469"><a name="zh-cn_topic_0237122712_p9998124311469"></a><a name="zh-cn_topic_0237122712_p9998124311469"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122712_p2099810433465"><a name="zh-cn_topic_0237122712_p2099810433465"></a><a name="zh-cn_topic_0237122712_p2099810433465"></a>这些统计被重置的时间。</p>
</td>
</tr>
</tbody>
</table>
