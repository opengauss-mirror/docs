# javax.sql.PooledConnection<a name="ZH-CN_TOPIC_0289900426"></a>

javax.sql.PooledConnection是由连接池创建的连接接口。

**表 1**  对javax.sql.PooledConnection的支持情况

<a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_table28587499"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_row14217013"><th class="cellrowborder" valign="top" width="48.51%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p18823619"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p18823619"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p18823619"></a>方法名</p>
</th>
<th class="cellrowborder" valign="top" width="24.89%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p45374687"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p45374687"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p45374687"></a>返回值类型</p>
</th>
<th class="cellrowborder" valign="top" width="26.6%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p24911827"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p24911827"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p24911827"></a>支持JDBC 4</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_row49886765"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p29638296"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p29638296"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p29638296"></a>addConnectionEventListener (ConnectionEventListener listener)</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p16533441"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p16533441"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p16533441"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p46568899"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p46568899"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p46568899"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_row52232580"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p51594836"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p51594836"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p51594836"></a>close()</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p36349870"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p36349870"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p36349870"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p50397114"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p50397114"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p50397114"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_row53801354"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p61415408"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p61415408"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p61415408"></a>getConnection()</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p32350477"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p32350477"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p32350477"></a>Connection</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p50355285"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p50355285"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p50355285"></a>Yes</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_row51584444"><td class="cellrowborder" valign="top" width="48.51%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p7543180"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p7543180"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p7543180"></a>removeConnectionEventListener (ConnectionEventListener listener)</p>
</td>
<td class="cellrowborder" valign="top" width="24.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p34446356"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p34446356"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p34446356"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p21665867"><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p21665867"></a><a name="zh-cn_topic_0237120401_zh-cn_topic_0213179167_zh-cn_topic_0189250547_zh-cn_topic_0059777419_zh-cn_topic_0058965236_p21665867"></a>Yes</p>
</td>
</tr>
</tbody>
</table>
