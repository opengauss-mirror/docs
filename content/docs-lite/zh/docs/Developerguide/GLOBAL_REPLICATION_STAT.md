# GLOBAL\_REPLICATION\_STAT<a name="ZH-CN_TOPIC_0289900243"></a>

GLOBAL\_REPLICATION\_STAT视图用于获得各节点描述日志同步状态信息，如发起端发送日志位置，接收端接收日志位置等。

**表 1**  GLOBAL\_REPLICATION\_STAT字段

<a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_table15385930114214"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row25301030174219"><th class="cellrowborder" valign="top" width="25.319999999999997%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p553053054218"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p553053054218"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p553053054218"></a><strong id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b7531203016428"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b7531203016428"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b7531203016428"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.14%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p125311230164211"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p125311230164211"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p125311230164211"></a><strong id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b1531830114220"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b1531830114220"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b1531830114220"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="49.54%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p16531630164216"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p16531630164216"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p16531630164216"></a><strong id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b8531153044210"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b8531153044210"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_b8531153044210"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row1853133014429"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p5531103017425"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p5531103017425"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p5531103017425"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p05317309428"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p05317309428"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p05317309428"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p16531193064211"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p16531193064211"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p16531193064211"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row125319302421"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p65327304427"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p65327304427"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p65327304427"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p19532103020426"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p19532103020426"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p19532103020426"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1532123014214"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1532123014214"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1532123014214"></a>线程的PID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row95324304424"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155323301428"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155323301428"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155323301428"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p95325307424"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p95325307424"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p95325307424"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135328304425"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135328304425"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135328304425"></a>用户系统ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row7532330144214"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p15321730164216"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p15321730164216"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p15321730164216"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p853211308426"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p853211308426"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p853211308426"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p453223012422"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p453223012422"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p453223012422"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row953333024211"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1253303014212"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1253303014212"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1253303014212"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1353303064215"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1353303064215"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1353303064215"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p125334305429"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p125334305429"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p125334305429"></a>程序名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row155339307427"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155331730174219"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155331730174219"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155331730174219"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1853383094215"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1853383094215"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1853383094215"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p253333011424"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p253333011424"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p253333011424"></a>客户端地址。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row15533730144215"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p14534133094210"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p14534133094210"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p14534133094210"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653473074219"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653473074219"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653473074219"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1353417309428"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1353417309428"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1353417309428"></a>客户端名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row553414307424"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p13534153011424"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p13534153011424"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p13534153011424"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135341230144220"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135341230144220"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135341230144220"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1535113017428"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1535113017428"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1535113017428"></a>客户端端口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row5535113064217"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p653573015425"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p653573015425"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p653573015425"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653514304429"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653514304429"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653514304429"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p85351230104217"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p85351230104217"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p85351230104217"></a>程序启动时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row115351830104215"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p7535530184217"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p7535530184217"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p7535530184217"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p2535183018426"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p2535183018426"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p2535183018426"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_p138712111707"><a name="zh-cn_topic_0283137475_p138712111707"></a><a name="zh-cn_topic_0283137475_p138712111707"></a>日志复制的状态：</p>
<a name="zh-cn_topic_0283137475_ul15662102814017"></a><a name="zh-cn_topic_0283137475_ul15662102814017"></a><ul id="zh-cn_topic_0283137475_ul15662102814017"><li>追赶状态</li><li>一致的流状态</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row16536153094213"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p153612309429"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p153612309429"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p153612309429"></a>sender_sent_location</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1536143014218"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1536143014218"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1536143014218"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p353663015427"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p353663015427"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p353663015427"></a>发送端发送日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row115363306428"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p12536143084212"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p12536143084212"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p12536143084212"></a>receiver_write_location</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1853623010424"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1853623010424"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1853623010424"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p4536530134215"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p4536530134215"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p4536530134215"></a>接收端write日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row175361030204217"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155361830154214"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155361830154214"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p155361830154214"></a>receiver_flush_location</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1553693064214"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1553693064214"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1553693064214"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p145374303424"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p145374303424"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p145374303424"></a>接收端flush日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row11537153034217"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135371130134218"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135371130134218"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p135371130134218"></a>receiver_replay_location</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p353733010421"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p353733010421"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p353733010421"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p35371130124215"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p35371130124215"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p35371130124215"></a>接收端replay日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row115371301428"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p14537153024215"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p14537153024215"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p14537153024215"></a>sync_priority</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p55379301429"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p55379301429"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p55379301429"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p553719307429"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p553719307429"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p553719307429"></a>同步复制的优先级（0表示异步）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_row1253723054217"><td class="cellrowborder" valign="top" width="25.319999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653733034210"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653733034210"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1653733034210"></a>sync_state</p>
</td>
<td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p7537130144210"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p7537130144210"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p7537130144210"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="49.54%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1923818314818"><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1923818314818"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_p1923818314818"></a>同步状态：<a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_ul2985161910480"></a><a name="zh-cn_topic_0283137475_zh-cn_topic_0237122709_ul2985161910480"></a><ul id="zh-cn_topic_0283137475_zh-cn_topic_0237122709_ul2985161910480"><li>异步复制</li><li>同步复制</li><li>潜在同步者</li></ul>
</div>
</td>
</tr>
</tbody>
</table>

