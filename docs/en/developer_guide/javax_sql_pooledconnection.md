# javax.sql.PooledConnection<a name="EN-US_TOPIC_0289900426"></a>

This section describes  **javax.sql.PooledConnection**, the connection API created by a connection pool.

**Table  1**  Support status for javax.sql.PooledConnection

<a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_table28587499"></a>
<table><thead align="left"><tr id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_row14217013"><th class="cellrowborder" valign="top" width="48.51%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p18823619"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p18823619"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p18823619"></a>Method Name</p>
</th>
<th class="cellrowborder" valign="top" width="24.89%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p45374687"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p45374687"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p45374687"></a>Return Type</p>
</th>
<th class="cellrowborder" valign="top" width="26.6%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p24911827"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p24911827"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p24911827"></a>JDBC 4 Is Supported Or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_row49886765"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p29638296"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p29638296"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p29638296"></a>addConnectionEventListener (ConnectionEventListener listener)</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p16533441"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p16533441"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p16533441"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p46568899"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p46568899"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p46568899"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_row52232580"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p51594836"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p51594836"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p51594836"></a>close()</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p36349870"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p36349870"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p36349870"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p50397114"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p50397114"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p50397114"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_row53801354"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p61415408"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p61415408"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p61415408"></a>getConnection()</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p32350477"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p32350477"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p32350477"></a>Connection</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p50355285"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p50355285"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p50355285"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_row51584444"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p7543180"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p7543180"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p7543180"></a>removeConnectionEventListener (ConnectionEventListener listener)</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p34446356"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p34446356"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p34446356"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p21665867"><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p21665867"></a><a name="en-us_topic_0237120401_en-us_topic_0213179167_en-us_topic_0189250547_en-us_topic_0059777419_en-us_topic_0058965236_p21665867"></a>Yes</p>
</td>
</tr>
</tbody>
</table>

