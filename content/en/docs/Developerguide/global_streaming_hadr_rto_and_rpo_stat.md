# global\_streaming\_hadr\_rto\_and\_rpo\_stat

**global\_streaming\_hadr\_rto\_and\_rpo\_stat** displays the log flow control information about the primary and standby database instances for streaming DR. This view can be used only by primary database node of the primary database instance. Statistics cannot be obtained from the standby database node or standby database instance.

**Table 1** global\_streaming\_hadr\_rto\_and\_rpo\_stat parameters

<a name="table10801171214386"></a>
<table><thead align="left"><tr id="row1580101219385"><th class="cellrowborder" valign="top" width="21.952195219521954%" id="mcps1.2.4.1.1"><p id="p08016122388"><a name="p08016122388"></a><a name="p08016122388"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="6.450645064506451%" id="mcps1.2.4.1.2"><p id="p208011312193819"><a name="p208011312193819"></a><a name="p208011312193819"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="71.59715971597159%" id="mcps1.2.4.1.3"><p id="p19802101212385"><a name="p19802101212385"></a><a name="p19802101212385"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1180281283818"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p128021612193813"><a name="p128021612193813"></a><a name="p128021612193813"></a>hadr_sender_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p1980211223816"><a name="p1980211223816"></a><a name="p1980211223816"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p1780241243813"><a name="p1780241243813"></a><a name="p1780241243813"></a>Node name, including the primary database instance and the first standby node of the standby database instance.</p>
</td>
</tr>
<tr id="row48029122388"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p1280271213386"><a name="p1280271213386"></a><a name="p1280271213386"></a>hadr_receiver_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p19802412183820"><a name="p19802412183820"></a><a name="p19802412183820"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p10802121233818"><a name="p10802121233818"></a><a name="p10802121233818"></a>Name of the first standby node of the standby database instance.</p>
</td>
</tr>
<tr id="row6475459214"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p17475855212"><a name="p17475855212"></a><a name="p17475855212"></a>current_rto</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p18475157218"><a name="p18475157218"></a><a name="p18475157218"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p1475125122112"><a name="p1475125122112"></a><a name="p1475125122112"></a>Flow control information, that is, log RTO time of the current primary and standby database instances (unit: second).</p>
</td>
</tr>
<tr id="row145698912223"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p1057018910223"><a name="p1057018910223"></a><a name="p1057018910223"></a>target_rto</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p135705932214"><a name="p135705932214"></a><a name="p135705932214"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p357018910224"><a name="p357018910224"></a><a name="p357018910224"></a>Flow control information, that is, the RTO time between the target primary and standby database instances (unit: second).</p>
</td>
</tr>
<tr id="row9120115932216"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p1512135919223"><a name="p1512135919223"></a><a name="p1512135919223"></a>current_rpo</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p181211959132215"><a name="p181211959132215"></a><a name="p181211959132215"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p1412185982213"><a name="p1412185982213"></a><a name="p1412185982213"></a>Flow control information, that is, log RPO time of the current primary and standby database instances (unit: second).</p>
</td>
</tr>
<tr id="row10456183972314"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p1145616390234"><a name="p1145616390234"></a><a name="p1145616390234"></a>target_rpo</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p545693916234"><a name="p545693916234"></a><a name="p545693916234"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p1145663914230"><a name="p1145663914230"></a><a name="p1145663914230"></a>Flow control information, that is, the RPO time between the target primary and standby database instances (unit: second).</p>
</td>
</tr>
<tr id="row6335325112414"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p1733532592416"><a name="p1733532592416"></a><a name="p1733532592416"></a>rto_sleep_time</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p16335192592414"><a name="p16335192592414"></a><a name="p16335192592414"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p633552512248"><a name="p633552512248"></a><a name="p633552512248"></a>RTO flow control information, that is, the expected sleep time (unit: μs) required by walsender on the host to reach the specified RTO.</p>
</td>
</tr>
<tr id="row151261273014"><td class="cellrowborder" valign="top" width="21.952195219521954%" headers="mcps1.2.4.1.1 "><p id="p1612620271706"><a name="p1612620271706"></a><a name="p1612620271706"></a>rpo_sleep_time</p>
</td>
<td class="cellrowborder" valign="top" width="6.450645064506451%" headers="mcps1.2.4.1.2 "><p id="p112619271506"><a name="p112619271506"></a><a name="p112619271506"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.59715971597159%" headers="mcps1.2.4.1.3 "><p id="p6126162714012"><a name="p6126162714012"></a><a name="p6126162714012"></a>RPO flow control information, that is, the expected sleep time (unit: μs) required by xlogInsert on the host to reach the specified RPO.</p>
</td>
</tr>
</tbody>
</table>
