# REPLICATION\_STAT<a name="ZH-CN_TOPIC_0289900473"></a>

REPLICATION\_STAT用于描述日志同步状态信息，如发起端发送日志位置，接收端接收日志位置等。

**表 1**  REPLICATION\_STAT字段

<a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_table9316111918418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row3493419174115"><th class="cellrowborder" valign="top" width="30.91%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17493181916414"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17493181916414"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17493181916414"></a><strong id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b1349315196413"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b1349315196413"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b1349315196413"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.44%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1449331944111"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1449331944111"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1449331944111"></a><strong id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b134937195417"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b134937195417"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b134937195417"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="50.64999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1449361919412"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1449361919412"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1449361919412"></a><strong id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b249417194417"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b249417194417"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_b249417194417"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row19494819174114"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17494119104110"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17494119104110"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17494119104110"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p14494919164112"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p14494919164112"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p14494919164112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p19494141914410"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p19494141914410"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p19494141914410"></a>线程的PID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row1649415195414"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p249431911416"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p249431911416"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p249431911416"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p174940198411"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p174940198411"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p174940198411"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1549411934112"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1549411934112"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1549411934112"></a>用户系统ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row1049414195412"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17494219174116"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17494219174116"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17494219174116"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p5495141920412"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p5495141920412"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p5495141920412"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p114951819124111"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p114951819124111"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p114951819124111"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row174953194411"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p184956191414"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p184956191414"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p184956191414"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1349521913417"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1349521913417"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1349521913417"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9495151920412"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9495151920412"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9495151920412"></a>程序名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row1449631954116"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p114961519154114"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p114961519154114"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p114961519154114"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16496131918416"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16496131918416"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16496131918416"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p849616197418"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p849616197418"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p849616197418"></a>客户端地址。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row13496219154115"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p14496161914113"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p14496161914113"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p14496161914113"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p74964198419"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p74964198419"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p74964198419"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p12497151920415"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p12497151920415"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p12497151920415"></a>客户端名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row3497161914117"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p54971719114115"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p54971719114115"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p54971719114115"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p649711199411"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p649711199411"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p649711199411"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p2497131914412"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p2497131914412"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p2497131914412"></a>客户端端口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row74971619144116"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p649751912418"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p649751912418"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p649751912418"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17497919164110"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17497919164110"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p17497919164110"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1749818191411"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1749818191411"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1749818191411"></a>程序启动时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row1549818191415"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p154981519164112"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p154981519164112"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p154981519164112"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p7498191974118"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p7498191974118"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p7498191974118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_p44611517205917"><a name="zh-cn_topic_0283137511_p44611517205917"></a><a name="zh-cn_topic_0283137511_p44611517205917"></a>日志复制的状态：</p>
<a name="zh-cn_topic_0283137511_ul513314355592"></a><a name="zh-cn_topic_0283137511_ul513314355592"></a><ul id="zh-cn_topic_0283137511_ul513314355592"><li>追赶状态</li><li>一致的流状态</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row19498141915416"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p174981919114117"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p174981919114117"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p174981919114117"></a>sender_sent_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p15498111918418"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p15498111918418"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p15498111918418"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p18498121984110"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p18498121984110"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p18498121984110"></a>发送端发送日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row194991119164111"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p5499619144114"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p5499619144114"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p5499619144114"></a>receiver_write_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1649911911415"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1649911911415"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p1649911911415"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p10499319184110"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p10499319184110"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p10499319184110"></a>接收端write日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row449951912414"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p849991994115"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p849991994115"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p849991994115"></a>receiver_flush_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9499119114111"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9499119114111"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9499119114111"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p115001019144117"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p115001019144117"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p115001019144117"></a>接收端flush日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row15500819114117"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16500919154114"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16500919154114"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16500919154114"></a>receiver_replay_location</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p18500219184116"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p18500219184116"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p18500219184116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16500319124115"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16500319124115"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p16500319124115"></a>接收端replay日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row25001194412"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p10500019104116"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p10500019104116"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p10500019104116"></a>sync_priority</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p850015197416"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p850015197416"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p850015197416"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9500151934117"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9500151934117"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p9500151934117"></a>同步复制的优先级（0表示异步）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_row2500319164115"><td class="cellrowborder" valign="top" width="30.91%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p145001819204111"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p145001819204111"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p145001819204111"></a>sync_state</p>
</td>
<td class="cellrowborder" valign="top" width="18.44%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p850191918412"><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p850191918412"></a><a name="zh-cn_topic_0283137511_zh-cn_topic_0237122708_p850191918412"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="50.64999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137511_p1679093975918"><a name="zh-cn_topic_0283137511_p1679093975918"></a><a name="zh-cn_topic_0283137511_p1679093975918"></a>同步状态：</p>
<a name="zh-cn_topic_0283137511_ul124225616599"></a><a name="zh-cn_topic_0283137511_ul124225616599"></a><ul id="zh-cn_topic_0283137511_ul124225616599"><li>异步复制</li><li>同步复制</li><li>潜在同步者</li></ul>
</td>
</tr>
</tbody>
</table>

