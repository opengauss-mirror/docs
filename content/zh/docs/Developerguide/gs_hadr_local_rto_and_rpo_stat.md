# gs\_hadr\_local\_rto\_and\_rpo\_stat<a name="ZH-CN_TOPIC_0000001196498547"></a>

gs\_hadr\_local\_rto\_and\_rpo\_stat视图显示流式容灾的主数据库实例和备数据库实例日志流控信息（只可在主数据库实例的数据库主节点使用，数据库备节点以及备数据库实例均上不可获取到统计信息）。

**表 1**  gs\_hadr\_local\_rto\_and\_rpo\_stat参数说明

<a name="table15134111812494"></a>
<table><thead align="left"><tr id="row5134121820495"><th class="cellrowborder" valign="top" width="22.522252225222523%" id="mcps1.2.4.1.1"><p id="p121343182495"><a name="p121343182495"></a><a name="p121343182495"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="5.98059805980598%" id="mcps1.2.4.1.2"><p id="p913416187492"><a name="p913416187492"></a><a name="p913416187492"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="71.4971497149715%" id="mcps1.2.4.1.3"><p id="p13134918164910"><a name="p13134918164910"></a><a name="p13134918164910"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row8134718184910"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p201348186492"><a name="p201348186492"></a><a name="p201348186492"></a>hadr_sender_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p1313461884916"><a name="p1313461884916"></a><a name="p1313461884916"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p1013411884914"><a name="p1013411884914"></a><a name="p1013411884914"></a>节点的名称，包含主数据库实例和备数据库实例首备。</p>
</td>
</tr>
<tr id="row1813412189494"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p1213415186491"><a name="p1213415186491"></a><a name="p1213415186491"></a>hadr_receiver_node_name</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p1213410186494"><a name="p1213410186494"></a><a name="p1213410186494"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p13134191814917"><a name="p13134191814917"></a><a name="p13134191814917"></a>备数据库实例首备名称。</p>
</td>
</tr>
<tr id="row54491043184917"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p3449194324911"><a name="p3449194324911"></a><a name="p3449194324911"></a>source_ip</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p1144924311491"><a name="p1144924311491"></a><a name="p1144924311491"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p12449144364910"><a name="p12449144364910"></a><a name="p12449144364910"></a>主数据库实例数据库主节点 IP地址。</p>
</td>
</tr>
<tr id="row1074664714912"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p6746347134914"><a name="p6746347134914"></a><a name="p6746347134914"></a>source_port</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p1174694764917"><a name="p1174694764917"></a><a name="p1174694764917"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p18746104724911"><a name="p18746104724911"></a><a name="p18746104724911"></a>主数据库实例数据库主节点通信端口。</p>
</td>
</tr>
<tr id="row1340403155015"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p4404173105011"><a name="p4404173105011"></a><a name="p4404173105011"></a>dest_ip</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p940493155014"><a name="p940493155014"></a><a name="p940493155014"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p740414318507"><a name="p740414318507"></a><a name="p740414318507"></a>备数据库实例首数据库备节点 IP地址。</p>
</td>
</tr>
<tr id="row13451157195017"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p845120725017"><a name="p845120725017"></a><a name="p845120725017"></a>dest_port</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p1045187125011"><a name="p1045187125011"></a><a name="p1045187125011"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p1245157115010"><a name="p1245157115010"></a><a name="p1245157115010"></a>备数据库实例首数据备节点通信端口。</p>
</td>
</tr>
<tr id="row1313418181491"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p101346186492"><a name="p101346186492"></a><a name="p101346186492"></a>current_rto</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p18134191814916"><a name="p18134191814916"></a><a name="p18134191814916"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p11345189496"><a name="p11345189496"></a><a name="p11345189496"></a>流控的信息，当前主备数据库实例的日志rto时间（单位：秒）。</p>
</td>
</tr>
<tr id="row91341182499"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p513417180492"><a name="p513417180492"></a><a name="p513417180492"></a>target_rto</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p13134121818493"><a name="p13134121818493"></a><a name="p13134121818493"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p161341218154913"><a name="p161341218154913"></a><a name="p161341218154913"></a>流控的信息，目标主备数据库实例间的rto时间（单位：秒）。</p>
</td>
</tr>
<tr id="row113461894912"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p5134121812496"><a name="p5134121812496"></a><a name="p5134121812496"></a>current_rpo</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p6134101814919"><a name="p6134101814919"></a><a name="p6134101814919"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p101341418194914"><a name="p101341418194914"></a><a name="p101341418194914"></a>流控的信息，当前主备数据库实例的日志rpo时间（单位：秒）。</p>
</td>
</tr>
<tr id="row1613461815498"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p213441816494"><a name="p213441816494"></a><a name="p213441816494"></a>target_rpo</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p3134161864913"><a name="p3134161864913"></a><a name="p3134161864913"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p713521818499"><a name="p713521818499"></a><a name="p713521818499"></a>流控的信息，目标主备数据库实例间的rpo时间（单位：秒）。</p>
</td>
</tr>
<tr id="row15135101854912"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p6135618174914"><a name="p6135618174914"></a><a name="p6135618174914"></a>rto_sleep_time</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p6135171894915"><a name="p6135171894915"></a><a name="p6135171894915"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p13135111818493"><a name="p13135111818493"></a><a name="p13135111818493"></a>RTO流控信息，为了达到目标rto，预期主机walsender所需要的睡眠时间（单位：微秒）。</p>
</td>
</tr>
<tr id="row4444192165818"><td class="cellrowborder" valign="top" width="22.522252225222523%" headers="mcps1.2.4.1.1 "><p id="p13445924588"><a name="p13445924588"></a><a name="p13445924588"></a>rpo_sleep_time</p>
</td>
<td class="cellrowborder" valign="top" width="5.98059805980598%" headers="mcps1.2.4.1.2 "><p id="p10445725588"><a name="p10445725588"></a><a name="p10445725588"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="71.4971497149715%" headers="mcps1.2.4.1.3 "><p id="p1044510225811"><a name="p1044510225811"></a><a name="p1044510225811"></a>RPO流控信息，为了达到目标rpo，预期主机xlogInsert所需要的睡眠时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
