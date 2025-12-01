# PG\_STAT\_SUBSCRIPTION<a name="ZH-CN_TOPIC_0000001243798253"></a>

获取订阅的详细同步信息。

**表 1**  PG\_STAT\_SUBSCRIPTION字段

<a name="table144308125331"></a>
<table><thead align="left"><tr id="row19430112183315"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1243121214330"><a name="p1243121214330"></a><a name="p1243121214330"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p743171213337"><a name="p743171213337"></a><a name="p743171213337"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p124312126331"><a name="p124312126331"></a><a name="p124312126331"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row5431181213332"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p144311212193315"><a name="p144311212193315"></a><a name="p144311212193315"></a>subid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p143131213310"><a name="p143131213310"></a><a name="p143131213310"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p943161283310"><a name="p943161283310"></a><a name="p943161283310"></a>订阅的oid。</p>
</td>
</tr>
<tr id="row2043241211337"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1143221214334"><a name="p1143221214334"></a><a name="p1143221214334"></a>subname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p15432812153319"><a name="p15432812153319"></a><a name="p15432812153319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4432121203311"><a name="p4432121203311"></a><a name="p4432121203311"></a>订阅的名称。</p>
</td>
</tr>
<tr id="row5432151218335"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13433111253312"><a name="p13433111253312"></a><a name="p13433111253312"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p04332012143311"><a name="p04332012143311"></a><a name="p04332012143311"></a>thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p6433121218331"><a name="p6433121218331"></a><a name="p6433121218331"></a>后台apply线程的thread id。</p>
</td>
</tr>
<tr id="row343351273310"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p843311213313"><a name="p843311213313"></a><a name="p843311213313"></a>received_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5433812173319"><a name="p5433812173319"></a><a name="p5433812173319"></a>LSN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p643312125338"><a name="p643312125338"></a><a name="p643312125338"></a>从发布端接收到的最近的lsn。</p>
</td>
</tr>
<tr id="row14434212113311"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44348121337"><a name="p44348121337"></a><a name="p44348121337"></a>last_msg_send_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p134341312183319"><a name="p134341312183319"></a><a name="p134341312183319"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p743441263315"><a name="p743441263315"></a><a name="p743441263315"></a>最近发布端发送消息的时间。</p>
</td>
</tr>
<tr id="row644914253349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p144508253341"><a name="p144508253341"></a><a name="p144508253341"></a>last_msg_receipt_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1745119256349"><a name="p1745119256349"></a><a name="p1745119256349"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p84511225153416"><a name="p84511225153416"></a><a name="p84511225153416"></a>最新订阅端收到消息的时间。</p>
</td>
</tr>
<tr id="row6307122803410"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1430715285344"><a name="p1430715285344"></a><a name="p1430715285344"></a>latest_end_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5493145483516"><a name="p5493145483516"></a><a name="p5493145483516"></a>LSN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p03083286340"><a name="p03083286340"></a><a name="p03083286340"></a>最近一次收到保活消息时发布端的lsn。</p>
</td>
</tr>
<tr id="row07921730163414"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p279253093411"><a name="p279253093411"></a><a name="p279253093411"></a>latest_end_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p279283020348"><a name="p279283020348"></a><a name="p279283020348"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p379213033413"><a name="p379213033413"></a><a name="p379213033413"></a>最近一次收到保活消息的时间。</p>
</td>
</tr>
</tbody>
</table>

