# javax.sql.ConnectionPoolDataSource<a name="ZH-CN_TOPIC_0289900321"></a>

javax.sql.ConnectionPoolDataSource是数据源连接池接口。

**表 1**  对javax.sql.ConnectionPoolDataSource的支持情况

<a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_table65325366"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_row55348029"><th class="cellrowborder" valign="top" width="30.696930306969307%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p61844299"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p61844299"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p61844299"></a><b>方法名</b></p>
</th>
<th class="cellrowborder" valign="top" width="41.38586141385861%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p44403242"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p44403242"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p44403242"></a><b>返回值类型</b></p>
</th>
<th class="cellrowborder" valign="top" width="27.917208279172083%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p10221863"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p10221863"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p10221863"></a><b>支持JDBC 4</b></p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_row60351727"><td class="cellrowborder" valign="top" width="30.696930306969307%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p64293409"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p64293409"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p64293409"></a>getPooledConnection()</p>
</td>
<td class="cellrowborder" valign="top" width="41.38586141385861%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p29933340"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p29933340"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p29933340"></a>PooledConnection</p>
</td>
<td class="cellrowborder" valign="top" width="27.917208279172083%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p22495471"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p22495471"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p22495471"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_row51409279"><td class="cellrowborder" valign="top" width="30.696930306969307%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p54769903"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p54769903"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p54769903"></a>getPooledConnection(String user,String password)</p>
</td>
<td class="cellrowborder" valign="top" width="41.38586141385861%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p56871392"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p56871392"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p56871392"></a>PooledConnection</p>
</td>
<td class="cellrowborder" valign="top" width="27.917208279172083%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p37916637"><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p37916637"></a><a name="zh-cn_topic_0237120399_zh-cn_topic_0213179165_zh-cn_topic_0189251794_zh-cn_topic_0059778247_zh-cn_topic_0058965221_p37916637"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

