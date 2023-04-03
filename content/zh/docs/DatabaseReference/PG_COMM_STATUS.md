# PG\_COMM\_STATUS<a name="ZH-CN_TOPIC_0311526905"></a>

PG\_COMM\_STATUS视图展示节点的通信库状态。

**表 1**  PG\_COMM\_STATUS字段

<a name="zh-cn_topic_0059777625_t83ca540e925544c288cfd96db031d9b2"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059777625_r247338af0ec34d588088cff853ab2c54"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777625_a3b8bec16d0014fe0bb829486199e765a"><a name="zh-cn_topic_0059777625_a3b8bec16d0014fe0bb829486199e765a"></a><a name="zh-cn_topic_0059777625_a3b8bec16d0014fe0bb829486199e765a"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777625_ad8dea19ffa0f40c2855a8837cb813804"><a name="zh-cn_topic_0059777625_ad8dea19ffa0f40c2855a8837cb813804"></a><a name="zh-cn_topic_0059777625_ad8dea19ffa0f40c2855a8837cb813804"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777625_a1c45c10dd5364655a8d517672c28ea2d"><a name="zh-cn_topic_0059777625_a1c45c10dd5364655a8d517672c28ea2d"></a><a name="zh-cn_topic_0059777625_a1c45c10dd5364655a8d517672c28ea2d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row61291844171914"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p612914441193"><a name="p612914441193"></a><a name="p612914441193"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1212974431914"><a name="p1212974431914"></a><a name="p1212974431914"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p612917448196"><a name="p612917448196"></a><a name="p612917448196"></a>节点名称。</p>
</td>
</tr>
<tr id="row934819243200"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p11349182472019"><a name="p11349182472019"></a><a name="p11349182472019"></a>rxpck_rate</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p15349724172012"><a name="p15349724172012"></a><a name="p15349724172012"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p6349172412204"><a name="p6349172412204"></a><a name="p6349172412204"></a>节点通信库接收速率，单位Byte/s。</p>
</td>
</tr>
<tr id="row1923124122020"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p1792319417206"><a name="p1792319417206"></a><a name="p1792319417206"></a>txpck_rate</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p892324192020"><a name="p892324192020"></a><a name="p892324192020"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p10923441162011"><a name="p10923441162011"></a><a name="p10923441162011"></a>节点通信库发送速率，单位Byte/s。</p>
</td>
</tr>
<tr id="row1495218552013"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p129522562013"><a name="p129522562013"></a><a name="p129522562013"></a>rxkbyte_rate</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p89528542019"><a name="p89528542019"></a><a name="p89528542019"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p5952251208"><a name="p5952251208"></a><a name="p5952251208"></a>bigint节点通信库接收速率，单位KByte/s。</p>
</td>
</tr>
<tr id="row1375223462512"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p97527346253"><a name="p97527346253"></a><a name="p97527346253"></a>txkbyte_rate</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p14752123418250"><a name="p14752123418250"></a><a name="p14752123418250"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p7752934152519"><a name="p7752934152519"></a><a name="p7752934152519"></a>bigint节点通信库发送速率，单位KByte/s。</p>
</td>
</tr>
<tr id="row2827183122513"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p582733114256"><a name="p582733114256"></a><a name="p582733114256"></a>buffer</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1582713310252"><a name="p1582713310252"></a><a name="p1582713310252"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p5827131172513"><a name="p5827131172513"></a><a name="p5827131172513"></a>cmailbox的buffer大小。</p>
</td>
</tr>
<tr id="row7964165913255"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p596535932520"><a name="p596535932520"></a><a name="p596535932520"></a>memkbyte_libcomm</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p6965105912252"><a name="p6965105912252"></a><a name="p6965105912252"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p29651459192515"><a name="p29651459192515"></a><a name="p29651459192515"></a>libcomm进程通信内存大小，单位Byte。</p>
</td>
</tr>
<tr id="row84151914252"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p1541196259"><a name="p1541196259"></a><a name="p1541196259"></a>memkbyte_libpq</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p16413198256"><a name="p16413198256"></a><a name="p16413198256"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p1741719112516"><a name="p1741719112516"></a><a name="p1741719112516"></a>libpq进程通信内存大小，单位Byte。</p>
</td>
</tr>
<tr id="row36729154250"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p3672121512516"><a name="p3672121512516"></a><a name="p3672121512516"></a>used_pm</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p156721915102517"><a name="p156721915102517"></a><a name="p156721915102517"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p186721915122510"><a name="p186721915122510"></a><a name="p186721915122510"></a>postmaster线程实时使用率。</p>
</td>
</tr>
<tr id="row13632165172519"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p1863225117259"><a name="p1863225117259"></a><a name="p1863225117259"></a>used_sflow</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p463255182512"><a name="p463255182512"></a><a name="p463255182512"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p8632851162517"><a name="p8632851162517"></a><a name="p8632851162517"></a>gs_sender_flow_controller线程实时使用率。</p>
</td>
</tr>
<tr id="row1838154552015"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p98381745202010"><a name="p98381745202010"></a><a name="p98381745202010"></a>used_rflow</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1883813452206"><a name="p1883813452206"></a><a name="p1883813452206"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p783824518208"><a name="p783824518208"></a><a name="p783824518208"></a>gs_receiver_flow_controller线程实时使用率。</p>
</td>
</tr>
<tr id="row687741116256"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p6877111192511"><a name="p6877111192511"></a><a name="p6877111192511"></a>used_rloop</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p15877171112518"><a name="p15877171112518"></a><a name="p15877171112518"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p5877211182515"><a name="p5877211182515"></a><a name="p5877211182515"></a>多个gs_receivers_loop线程中高的实时使用率。</p>
</td>
</tr>
<tr id="row8733137202019"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="p17733037172011"><a name="p17733037172011"></a><a name="p17733037172011"></a>stream</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="p1573323716206"><a name="p1573323716206"></a><a name="p1573323716206"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="p17733337132013"><a name="p17733337132013"></a><a name="p17733337132013"></a>当前使用的逻辑连接总数。</p>
</td>
</tr>
</tbody>
</table>


