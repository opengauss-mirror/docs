# javax.sql.ConnectionPoolDataSource<a name="EN-US_TOPIC_0289900321"></a>

This section describes  **javax.sql.ConnectionPoolDataSource**, the API for data source connection pools.

**Table  1**  Support status for javax.sql.ConnectionPoolDataSource

<a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_table65325366"></a>
<table><thead align="left"><tr id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_row55348029"><th class="cellrowborder" valign="top" width="30.696930306969307%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p61844299"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p61844299"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p61844299"></a>Method Name</p>
</th>
<th class="cellrowborder" valign="top" width="41.38586141385861%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p44403242"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p44403242"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p44403242"></a>Return Type</p>
</th>
<th class="cellrowborder" valign="top" width="27.917208279172083%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p10221863"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p10221863"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p10221863"></a>JDBC 4 Is Supported Or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_row60351727"><td class="cellrowborder" valign="top" width="30.696930306969307%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p64293409"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p64293409"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p64293409"></a>getPooledConnection()</p>
</td>
<td class="cellrowborder" valign="top" width="41.38586141385861%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p29933340"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p29933340"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p29933340"></a>PooledConnection</p>
</td>
<td class="cellrowborder" valign="top" width="27.917208279172083%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p22495471"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p22495471"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p22495471"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_row51409279"><td class="cellrowborder" valign="top" width="30.696930306969307%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p54769903"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p54769903"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p54769903"></a>getPooledConnection(String user,String password)</p>
</td>
<td class="cellrowborder" valign="top" width="41.38586141385861%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p56871392"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p56871392"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p56871392"></a>PooledConnection</p>
</td>
<td class="cellrowborder" valign="top" width="27.917208279172083%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p37916637"><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p37916637"></a><a name="en-us_topic_0237120399_en-us_topic_0213179165_en-us_topic_0189251794_en-us_topic_0059778247_en-us_topic_0058965221_p37916637"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

