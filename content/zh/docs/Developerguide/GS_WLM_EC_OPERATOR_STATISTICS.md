# GS\_WLM\_EC\_OPERATOR\_STATISTICS<a name="ZH-CN_TOPIC_0000001163041099"></a>

GS\_WLM\_EC\_OPERATOR\_STATISTICS视图显示当前用户正在执行的EC（Extension Connector）作业的算子相关信息。查询该视图需要sysadmin权限。

**表 1** **表1 **GS\_WLM\_EC\_OPERATOR\_STATISTICS的字段

<a name="table33042210324"></a>
<table><thead align="left"><tr id="row4340721123215"><th class="cellrowborder" valign="top" width="24.310000000000002%" id="mcps1.2.4.1.1"><p id="p13341202173211"><a name="p13341202173211"></a><a name="p13341202173211"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.119999999999997%" id="mcps1.2.4.1.2"><p id="p93411221173212"><a name="p93411221173212"></a><a name="p93411221173212"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="52.56999999999999%" id="mcps1.2.4.1.3"><p id="p203416212324"><a name="p203416212324"></a><a name="p203416212324"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1734172133218"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p12341122153218"><a name="p12341122153218"></a><a name="p12341122153218"></a>queryid</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p634102193212"><a name="p634102193212"></a><a name="p634102193212"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p17341192163213"><a name="p17341192163213"></a><a name="p17341192163213"></a>EC语句执行使用的内部query_id。</p>
</td>
</tr>
<tr id="row7341112163218"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p1341421123215"><a name="p1341421123215"></a><a name="p1341421123215"></a>plan_node_id</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p83411921203214"><a name="p83411921203214"></a><a name="p83411921203214"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p83415218327"><a name="p83415218327"></a><a name="p83415218327"></a>EC算子对应的执行计划的plan node id。</p>
</td>
</tr>
<tr id="row123411821133214"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p18341172153215"><a name="p18341172153215"></a><a name="p18341172153215"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p1341192133210"><a name="p1341192133210"></a><a name="p1341192133210"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p16341321193218"><a name="p16341321193218"></a><a name="p16341321193218"></a>EC算子处理第一条数据的开始时间。</p>
</td>
</tr>
<tr id="row2341921123213"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p1334110213326"><a name="p1334110213326"></a><a name="p1334110213326"></a>ec_status</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p18341921193216"><a name="p18341921193216"></a><a name="p18341921193216"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p1341102173217"><a name="p1341102173217"></a><a name="p1341102173217"></a>EC作业的执行状态。</p>
<a name="ul23411421183217"></a><a name="ul23411421183217"></a><ul id="ul23411421183217"><li>EC_STATUS_INIT：初始化。</li><li>EC_STATUS_CONNECTED：已连接。</li><li>EC_STATUS_EXECUTED：已执行。</li><li>EC_STATUS_FETCHING：获取中。</li><li>EC_STATUS_END：已结束。</li></ul>
</td>
</tr>
<tr id="row834110217323"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p16341021103212"><a name="p16341021103212"></a><a name="p16341021103212"></a>ec_execute_datanode</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p23410217322"><a name="p23410217322"></a><a name="p23410217322"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p8341122110328"><a name="p8341122110328"></a><a name="p8341122110328"></a>执行EC作业的DN名称。</p>
</td>
</tr>
<tr id="row1134118211328"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p334115214326"><a name="p334115214326"></a><a name="p334115214326"></a>ec_dsn</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p834120211324"><a name="p834120211324"></a><a name="p834120211324"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p334172163213"><a name="p334172163213"></a><a name="p334172163213"></a>EC作业所使用的DSN。</p>
</td>
</tr>
<tr id="row12341202117323"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p15342821183213"><a name="p15342821183213"></a><a name="p15342821183213"></a>ec_username</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p143426215325"><a name="p143426215325"></a><a name="p143426215325"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p17342122116322"><a name="p17342122116322"></a><a name="p17342122116322"></a>EC作业访问远端数据库实例的USERNAME（远端集群为SPARK类型时该值为空）。</p>
</td>
</tr>
<tr id="row634211212328"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p934222103218"><a name="p934222103218"></a><a name="p934222103218"></a>ec_query</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p3342621123215"><a name="p3342621123215"></a><a name="p3342621123215"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p10342102193210"><a name="p10342102193210"></a><a name="p10342102193210"></a>EC作业发送给远端数据库实例执行的语句。</p>
</td>
</tr>
<tr id="row123421214326"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p18342122163210"><a name="p18342122163210"></a><a name="p18342122163210"></a>ec_libodbc_type</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p1534220214324"><a name="p1534220214324"></a><a name="p1534220214324"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p1634272112327"><a name="p1634272112327"></a><a name="p1634272112327"></a>EC作业使用的unixODBC驱动类型。</p>
<a name="ul534252113216"></a><a name="ul534252113216"></a><ul id="ul534252113216"><li>类型1：对应 libodbc.so.1。</li><li>类型2：对应 libodbc.so.2。</li></ul>
</td>
</tr>
<tr id="row143426219326"><td class="cellrowborder" valign="top" width="24.310000000000002%" headers="mcps1.2.4.1.1 "><p id="p1434242173218"><a name="p1434242173218"></a><a name="p1434242173218"></a>ec_fetch_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.119999999999997%" headers="mcps1.2.4.1.2 "><p id="p2342122114329"><a name="p2342122114329"></a><a name="p2342122114329"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.3 "><p id="p103425211327"><a name="p103425211327"></a><a name="p103425211327"></a>EC作业当前处理的数据条数。</p>
</td>
</tr>
</tbody>
</table>
