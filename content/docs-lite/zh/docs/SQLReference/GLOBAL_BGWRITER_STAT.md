# GLOBAL\_BGWRITER\_STAT<a name="ZH-CN_TOPIC_0289900941"></a>

GLOBAL\_BGWRITER\_STAT视图显示各节点关于后端写进程活动的统计信息。

**表 1**  GLOBAL\_BGWRITER\_STAT字段

<a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_table65420175487"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row1518711172483"><th class="cellrowborder" valign="top" width="30.29%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p11188131714486"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p11188131714486"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p11188131714486"></a><strong id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b12188617144814"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b12188617144814"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b12188617144814"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.900000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1018815174483"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1018815174483"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1018815174483"></a><strong id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b118818171485"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b118818171485"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b118818171485"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="43.81%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p11188617184816"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p11188617184816"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p11188617184816"></a><strong id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b14188417144812"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b14188417144812"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_b14188417144812"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row1618831718487"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p318851710488"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p318851710488"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p318851710488"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1818881717480"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1818881717480"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1818881717480"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p318881717485"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p318881717485"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p318881717485"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row8188131784816"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1618961716481"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1618961716481"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1618961716481"></a>checkpoints_timed</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p718961784811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p718961784811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p718961784811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p7189217174818"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p7189217174818"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p7189217174818"></a>执行的定期检查点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row171891117114813"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p018941784819"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p018941784819"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p018941784819"></a>checkpoints_req</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p818915179482"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p818915179482"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p818915179482"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p15189201784811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p15189201784811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p15189201784811"></a>执行的需求检查点数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row7189121744816"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p131896178487"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p131896178487"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p131896178487"></a>checkpoint_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p191891617184811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p191891617184811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p191891617184811"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p6189191720480"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p6189191720480"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p6189191720480"></a>花费在检查点处理部分的时间总量，其中文件被写入到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row019041718481"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1190117104814"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1190117104814"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1190117104814"></a>checkpoint_sync_time</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1619001720485"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1619001720485"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1619001720485"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p619071715483"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p619071715483"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p619071715483"></a>花费在检查点处理部分的时间总量，其中文件被同步到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row6190217104811"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p151901917164811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p151901917164811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p151901917164811"></a>buffers_checkpoint</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p12190191713481"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p12190191713481"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p12190191713481"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1519021714483"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1519021714483"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1519021714483"></a>检查点写缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row171901617164819"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p18190111713482"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p18190111713482"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p18190111713482"></a>buffers_clean</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p5190181712481"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p5190181712481"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p5190181712481"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p319119171482"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p319119171482"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p319119171482"></a>后端写进程写缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row819101714481"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p3191417204811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p3191417204811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p3191417204811"></a>maxwritten_clean</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p12191161714814"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p12191161714814"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p12191161714814"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p191919178489"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p191919178489"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p191919178489"></a>后端写进程停止清理扫描时间数，因为它写了太多缓冲区。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row18191617114817"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p419191714811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p419191714811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p419191714811"></a>buffers_backend</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p419121774811"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p419121774811"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p419121774811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p219151715483"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p219151715483"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p219151715483"></a>通过后端直接写缓冲区数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row919141784818"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p119181716487"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p119181716487"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p119181716487"></a>buffers_backend_fsync</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p41928172483"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p41928172483"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p41928172483"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p141929174482"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p141929174482"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p141929174482"></a>后端不得不执行自己的fsync调用的时间数（通常后端写进程处理这些即使后端确实自己写）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row11192817114812"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1719216172489"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1719216172489"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1719216172489"></a>buffers_alloc</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p10192101715486"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p10192101715486"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p10192101715486"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p17192101794813"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p17192101794813"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p17192101794813"></a>分配的缓冲区数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_row819201794814"><td class="cellrowborder" valign="top" width="30.29%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1819217174484"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1819217174484"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p1819217174484"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="25.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p13192217104820"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p13192217104820"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p13192217104820"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.81%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p91922017104819"><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p91922017104819"></a><a name="zh-cn_topic_0283137621_zh-cn_topic_0237122713_p91922017104819"></a>这些统计被重置的时间。</p>
</td>
</tr>
</tbody>
</table>

