# REPLICATION\_STAT<a name="EN-US_TOPIC_0245374812"></a>

**REPLICATION\_STAT**  describes information about log synchronization status, such as the locations where the sender sends logs and where the receiver receives logs.

**Table  1**  REPLICATION\_STAT columns

<a name="en-us_topic_0237122708_table9316111918418"></a>
<table><thead align="left"><tr id="en-us_topic_0237122708_row3493419174115"><th class="cellrowborder" valign="top" width="30.91%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122708_p17493181916414"><a name="en-us_topic_0237122708_p17493181916414"></a><a name="en-us_topic_0237122708_p17493181916414"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.44%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122708_p1449331944111"><a name="en-us_topic_0237122708_p1449331944111"></a><a name="en-us_topic_0237122708_p1449331944111"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="50.64999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122708_p1449361919412"><a name="en-us_topic_0237122708_p1449361919412"></a><a name="en-us_topic_0237122708_p1449361919412"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122708_row19494819174114"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p17494119104110"><a name="en-us_topic_0237122708_p17494119104110"></a><a name="en-us_topic_0237122708_p17494119104110"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p14494919164112"><a name="en-us_topic_0237122708_p14494919164112"></a><a name="en-us_topic_0237122708_p14494919164112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p19494141914410"><a name="en-us_topic_0237122708_p19494141914410"></a><a name="en-us_topic_0237122708_p19494141914410"></a>Process ID of the thread</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row1649415195414"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p249431911416"><a name="en-us_topic_0237122708_p249431911416"></a><a name="en-us_topic_0237122708_p249431911416"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p174940198411"><a name="en-us_topic_0237122708_p174940198411"></a><a name="en-us_topic_0237122708_p174940198411"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p1549411934112"><a name="en-us_topic_0237122708_p1549411934112"></a><a name="en-us_topic_0237122708_p1549411934112"></a>User system ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row1049414195412"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p17494219174116"><a name="en-us_topic_0237122708_p17494219174116"></a><a name="en-us_topic_0237122708_p17494219174116"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p5495141920412"><a name="en-us_topic_0237122708_p5495141920412"></a><a name="en-us_topic_0237122708_p5495141920412"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p114951819124111"><a name="en-us_topic_0237122708_p114951819124111"></a><a name="en-us_topic_0237122708_p114951819124111"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row174953194411"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p184956191414"><a name="en-us_topic_0237122708_p184956191414"></a><a name="en-us_topic_0237122708_p184956191414"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p1349521913417"><a name="en-us_topic_0237122708_p1349521913417"></a><a name="en-us_topic_0237122708_p1349521913417"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p9495151920412"><a name="en-us_topic_0237122708_p9495151920412"></a><a name="en-us_topic_0237122708_p9495151920412"></a>Program name</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row1449631954116"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p114961519154114"><a name="en-us_topic_0237122708_p114961519154114"></a><a name="en-us_topic_0237122708_p114961519154114"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p16496131918416"><a name="en-us_topic_0237122708_p16496131918416"></a><a name="en-us_topic_0237122708_p16496131918416"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p849616197418"><a name="en-us_topic_0237122708_p849616197418"></a><a name="en-us_topic_0237122708_p849616197418"></a>Client address</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row13496219154115"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p14496161914113"><a name="en-us_topic_0237122708_p14496161914113"></a><a name="en-us_topic_0237122708_p14496161914113"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p74964198419"><a name="en-us_topic_0237122708_p74964198419"></a><a name="en-us_topic_0237122708_p74964198419"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p12497151920415"><a name="en-us_topic_0237122708_p12497151920415"></a><a name="en-us_topic_0237122708_p12497151920415"></a>Client name</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row3497161914117"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p54971719114115"><a name="en-us_topic_0237122708_p54971719114115"></a><a name="en-us_topic_0237122708_p54971719114115"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p649711199411"><a name="en-us_topic_0237122708_p649711199411"></a><a name="en-us_topic_0237122708_p649711199411"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p2497131914412"><a name="en-us_topic_0237122708_p2497131914412"></a><a name="en-us_topic_0237122708_p2497131914412"></a>Port of the client</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row74971619144116"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p649751912418"><a name="en-us_topic_0237122708_p649751912418"></a><a name="en-us_topic_0237122708_p649751912418"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p17497919164110"><a name="en-us_topic_0237122708_p17497919164110"></a><a name="en-us_topic_0237122708_p17497919164110"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p1749818191411"><a name="en-us_topic_0237122708_p1749818191411"></a><a name="en-us_topic_0237122708_p1749818191411"></a>Start time of the program</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row1549818191415"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p154981519164112"><a name="en-us_topic_0237122708_p154981519164112"></a><a name="en-us_topic_0237122708_p154981519164112"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p7498191974118"><a name="en-us_topic_0237122708_p7498191974118"></a><a name="en-us_topic_0237122708_p7498191974118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p249861917416"><a name="en-us_topic_0237122708_p249861917416"></a><a name="en-us_topic_0237122708_p249861917416"></a>Log replication state (catch-up or consistent streaming)</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row19498141915416"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p174981919114117"><a name="en-us_topic_0237122708_p174981919114117"></a><a name="en-us_topic_0237122708_p174981919114117"></a>sender_sent_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p15498111918418"><a name="en-us_topic_0237122708_p15498111918418"></a><a name="en-us_topic_0237122708_p15498111918418"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p18498121984110"><a name="en-us_topic_0237122708_p18498121984110"></a><a name="en-us_topic_0237122708_p18498121984110"></a>Location where the sender sends logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row194991119164111"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p5499619144114"><a name="en-us_topic_0237122708_p5499619144114"></a><a name="en-us_topic_0237122708_p5499619144114"></a>receiver_write_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p1649911911415"><a name="en-us_topic_0237122708_p1649911911415"></a><a name="en-us_topic_0237122708_p1649911911415"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p10499319184110"><a name="en-us_topic_0237122708_p10499319184110"></a><a name="en-us_topic_0237122708_p10499319184110"></a>Location where the receiver writes logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row449951912414"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p849991994115"><a name="en-us_topic_0237122708_p849991994115"></a><a name="en-us_topic_0237122708_p849991994115"></a>receiver_flush_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p9499119114111"><a name="en-us_topic_0237122708_p9499119114111"></a><a name="en-us_topic_0237122708_p9499119114111"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p115001019144117"><a name="en-us_topic_0237122708_p115001019144117"></a><a name="en-us_topic_0237122708_p115001019144117"></a>Location where the receiver flushes logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row15500819114117"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p16500919154114"><a name="en-us_topic_0237122708_p16500919154114"></a><a name="en-us_topic_0237122708_p16500919154114"></a>receiver_replay_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p18500219184116"><a name="en-us_topic_0237122708_p18500219184116"></a><a name="en-us_topic_0237122708_p18500219184116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p16500319124115"><a name="en-us_topic_0237122708_p16500319124115"></a><a name="en-us_topic_0237122708_p16500319124115"></a>Location where the receiver replays logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row25001194412"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p10500019104116"><a name="en-us_topic_0237122708_p10500019104116"></a><a name="en-us_topic_0237122708_p10500019104116"></a>sync_priority</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p850015197416"><a name="en-us_topic_0237122708_p850015197416"></a><a name="en-us_topic_0237122708_p850015197416"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p9500151934117"><a name="en-us_topic_0237122708_p9500151934117"></a><a name="en-us_topic_0237122708_p9500151934117"></a>Priority of synchronous duplication (<strong id="en-us_topic_0237122708_b13205120141719"><a name="en-us_topic_0237122708_b13205120141719"></a><a name="en-us_topic_0237122708_b13205120141719"></a>0</strong> indicates asynchronization.)</p>
</td>
</tr>
<tr id="en-us_topic_0237122708_row2500319164115"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122708_p145001819204111"><a name="en-us_topic_0237122708_p145001819204111"></a><a name="en-us_topic_0237122708_p145001819204111"></a>sync_state</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122708_p850191918412"><a name="en-us_topic_0237122708_p850191918412"></a><a name="en-us_topic_0237122708_p850191918412"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122708_p11501191920414"><a name="en-us_topic_0237122708_p11501191920414"></a><a name="en-us_topic_0237122708_p11501191920414"></a>Synchronization state (asynchronous duplication, synchronous duplication, or potential synchronization)</p>
</td>
</tr>
</tbody>
</table>

