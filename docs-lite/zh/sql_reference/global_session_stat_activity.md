# GLOBAL\_SESSION\_STAT\_ACTIVITY<a name="ZH-CN_TOPIC_0289900735"></a>

显示openGauss内各节点上正在运行的线程相关的信息。

**表 1**  GLOBAL\_SESSION\_STAT\_ACTIVITY字段

<a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_table114813420279"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row1440113342272"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p6401103412712"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p6401103412712"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p6401103412712"></a><strong id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b16401334112719"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b16401334112719"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b16401334112719"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.669999999999998%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1740216349279"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1740216349279"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1740216349279"></a><strong id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b134024340272"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b134024340272"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b134024340272"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.279999999999994%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p04029344279"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p04029344279"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p04029344279"></a><strong id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b4402153411272"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b4402153411272"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_b4402153411272"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row194021334152716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p5402173416279"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p5402173416279"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p5402173416279"></a>coorname</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p134021343277"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p134021343277"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p134021343277"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14021334192715"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14021334192715"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14021334192715"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row14402133452711"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p134021344272"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p134021344272"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p134021344272"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p13403133410278"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p13403133410278"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p13403133410278"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1340363452715"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1340363452715"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1340363452715"></a>用户会话在后台连接到的数据库OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row7403123415275"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p17403123417273"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p17403123417273"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p17403123417273"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1040313442716"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1040313442716"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1040313442716"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p7403534142717"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p7403534142717"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p7403534142717"></a>用户会话在后台连接到的数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row1740323419272"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p174031834132710"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p174031834132710"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p174031834132710"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p17403834132714"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p17403834132714"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p17403834132714"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10404234192710"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10404234192710"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10404234192710"></a>后台线程ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row54041934182718"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p3404203462711"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p3404203462711"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p3404203462711"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1340418342278"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1340418342278"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1340418342278"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1240412342270"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1240412342270"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1240412342270"></a>登录该后台的用户OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row340413418272"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p144042346275"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p144042346275"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p144042346275"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1540573432711"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1540573432711"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1540573432711"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740553422711"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740553422711"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740553422711"></a>登录该后台的用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row3405173462716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p18406534152716"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p18406534152716"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p18406534152716"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p104061934112718"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p104061934112718"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p104061934112718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p540673410279"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p540673410279"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p540673410279"></a>连接到该后台的应用名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row164061334112717"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p3407234142717"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p3407234142717"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p3407234142717"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12407143417278"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12407143417278"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12407143417278"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1140753412715"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1140753412715"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1140753412715"></a>连接到该后台的客户端的IP地址。如果此字段是null，它表明通过服务器机器上UNIX套接字连接客户端或者这是内部进程，如autovacuum。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row1040743417279"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1407334182714"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1407334182714"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1407334182714"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p18407934192717"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p18407934192717"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p18407934192717"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1740714341276"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1740714341276"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1740714341276"></a>客户端的主机名，这个字段是通过client_addr的反向DNS查找得到。这个字段只有在启动log_hostname且使用IP连接时才非空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row440814346273"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p140873472719"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p140873472719"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p140873472719"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p194082034122712"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p194082034122712"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p194082034122712"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p5408234182717"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p5408234182717"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p5408234182717"></a>客户端用于与后台通讯的TCP端口号，如果使用Unix套接字，则为-1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row18408153411272"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740820347276"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740820347276"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740820347276"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p940810349271"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p940810349271"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p940810349271"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1440817344272"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1440817344272"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1440817344272"></a>该过程开始的时间，即当客户端连接服务器时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row11408034142719"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p240893410272"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p240893410272"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p240893410272"></a>xact_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p20409434202711"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p20409434202711"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p20409434202711"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12409934112710"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12409934112710"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12409934112710"></a>启动当前事务的时间，如果没有事务是活跃的，则为null。如果当前查询是首个事务，则这列等同于query_start列。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row2409334162716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p164091034102710"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p164091034102710"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p164091034102710"></a>query_start</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p64091334142713"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p64091334142713"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p64091334142713"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p184097347273"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p184097347273"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p184097347273"></a>开始当前活跃查询的时间，如果state的值不是active，则这个值是上一个查询的开始时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row84091434152716"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p540973432713"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p540973432713"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p540973432713"></a>state_change</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740973410278"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740973410278"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p740973410278"></a>timestampwith time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p94101034122719"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p94101034122719"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p94101034122719"></a>上次状态改变的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row441016348278"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p6410173462712"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p6410173462712"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p6410173462712"></a>waiting</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841015342276"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841015342276"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841015342276"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1041053412715"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1041053412715"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1041053412715"></a>如果后台当前正等待锁则为true。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row10410134202715"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14101834172713"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14101834172713"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14101834172713"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10410143413278"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10410143413278"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10410143413278"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122637_p153301633152616"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122637_p153301633152616"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122637_p153301633152616"></a>该字段不支持</p>
<p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p13410143417278"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p13410143417278"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p13410143417278"></a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row1441093419275"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p164111534192717"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p164111534192717"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p164111534192717"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1141110343271"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1141110343271"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1141110343271"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12411234142718"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12411234142718"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p12411234142718"></a>该后台当前总体状态。可能值是：<a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_ul17411123412274"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_ul17411123412274"></a><ul id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_ul17411123412274"><li>active：后台正在执行一个查询。</li><li>idle：后台正在等待一个新的客户端命令。</li><li>idle in transaction：后台在事务中，但是目前无法执行查询。</li><li>idle in transaction (aborted)：这个状态除说明事务中有某个语句导致了错误外，类似于idle in transaction</li><li>fastpath function call：后台正在执行一个fast-path函数。</li><li>disabled：如果后台禁用track_activities，则报告这个状态。<div class="note" id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_note862031142110"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_note862031142110"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_note862031142110"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p94121344272"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p94121344272"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p94121344272"></a>普通用户只能查看到自己帐户所对应的会话状态。即其他帐户的state信息为空。例如以judy用户连接数据库后，在pg_stat_activity中查看到的普通用户joe及初始用户omm的state信息为空。</p>
<pre class="screen" id="zh-cn_topic_0283137277_screen5852193110511"><a name="zh-cn_topic_0283137277_screen5852193110511"></a><a name="zh-cn_topic_0283137277_screen5852193110511"></a>openGauss=# SELECT datname, usename, usesysid,state,pid FROM pg_stat_activity;
datname    | usename | usesysid | state    |       pid
----------+---------+----------+--------+-----------------postgres  | omm       | 10       |        |139968752121616
postgres  | omm       | 10       |        |139968903116560
db_tpcds  | judy      | 16398    | active |139968391403280
postgres  | omm       | 10       |        |139968643069712
postgres  | omm       | 10       |        |139968680818448
postgres  | joe       | 16390    |        |139968563377936
(6 rows)</pre>
</div></div>
</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row1413134182714"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1641333412271"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1641333412271"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1641333412271"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841319348279"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841319348279"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841319348279"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p741353462710"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p741353462710"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p741353462710"></a>用户使用的资源池。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row1841313411273"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14413734192716"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14413734192716"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p14413734192716"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10413134132714"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10413134132714"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p10413134132714"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p54131234192719"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p54131234192719"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p54131234192719"></a>查询语句的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_row114130349271"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p11413934192713"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p11413934192713"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p11413934192713"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p24145347279"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p24145347279"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p24145347279"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841443419270"><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841443419270"></a><a name="zh-cn_topic_0283137277_zh-cn_topic_0237122638_p1841443419270"></a>该后台的最新查询。如果state状态是active（活跃的），此字段显示当前正在执行的查询。所有其他情况表示上一个查询。</p>
</td>
</tr>
<tr id="row1084965423212"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p9849165416321"><a name="p9849165416321"></a><a name="p9849165416321"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="p684965413210"><a name="p684965413210"></a><a name="p684965413210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="p384925415323"><a name="p384925415323"></a><a name="p384925415323"></a>语句的unique sql id。</p>
</td>
</tr>
<tr id="row551112665818"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p1251110645816"><a name="p1251110645816"></a><a name="p1251110645816"></a>trace_id</p>
</td>
<td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.4.1.2 "><p id="p1751110613588"><a name="p1751110613588"></a><a name="p1751110613588"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.279999999999994%" headers="mcps1.2.4.1.3 "><p id="p18511136205819"><a name="p18511136205819"></a><a name="p18511136205819"></a>驱动传入的trace id，与应用的一次请求相关联。</p>
</td>
</tr>
</tbody>
</table>
