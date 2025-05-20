# API接口说明<a name="ZH-CN_TOPIC_0000002293119509"></a>

本章节介绍智能运维模块提供的RESTful API接口。

## API: /v1/api/app/intelligent-interaction<a name="section95391566019"></a>

功能描述：通过交互的方式使用运维工具。

请求方式：POST

参数及其解释：如下表所示：

**表 1**  接口参数说明

<a name="table27279341968"></a>
<table><thead align="left"><tr id="row3727163414616"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1211735110248"><a name="p1211735110248"></a><a name="p1211735110248"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p21179514243"><a name="p21179514243"></a><a name="p21179514243"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p7117451132414"><a name="p7117451132414"></a><a name="p7117451132414"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p0117105192415"><a name="p0117105192415"></a><a name="p0117105192415"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1972718342062"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1811765116248"><a name="p1811765116248"></a><a name="p1811765116248"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1117165192410"><a name="p1117165192410"></a><a name="p1117165192410"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p91171951142414"><a name="p91171951142414"></a><a name="p91171951142414"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p3117145142418"><a name="p3117145142418"></a><a name="p3117145142418"></a>用户的问题。</p>
</td>
</tr>
<tr id="row07271534366"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p181171751182419"><a name="p181171751182419"></a><a name="p181171751182419"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p181177516247"><a name="p181177516247"></a><a name="p181177516247"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1311714511249"><a name="p1311714511249"></a><a name="p1311714511249"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p121171551182419"><a name="p121171551182419"></a><a name="p121171551182419"></a>用户id，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
<tr id="row19727163414610"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p6118185116245"><a name="p6118185116245"></a><a name="p6118185116245"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p181181951122415"><a name="p181181951122415"></a><a name="p181181951122415"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p3118951192410"><a name="p3118951192410"></a><a name="p3118951192410"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p21182051122416"><a name="p21182051122416"></a><a name="p21182051122416"></a>会话id，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
<tr id="row972719344610"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p911835122419"><a name="p911835122419"></a><a name="p911835122419"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p14118195113243"><a name="p14118195113243"></a><a name="p14118195113243"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p411845162410"><a name="p411845162410"></a><a name="p411845162410"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p4118165116247"><a name="p4118165116247"></a><a name="p4118165116247"></a>交互类型，可选范围为['tool_interaction', 'fault_diagnostic']。</p>
<a name="ul9638293714"></a><a name="ul9638293714"></a><ul id="ul9638293714"><li>'tool_interaction'：工具交互模式。</li><li>'fault_diagnostic'：故障诊断模式。</li></ul>
</td>
</tr>
<tr id="row12727334764"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p14118751142413"><a name="p14118751142413"></a><a name="p14118751142413"></a>history_len</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1611819517245"><a name="p1611819517245"></a><a name="p1611819517245"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1511825115244"><a name="p1511825115244"></a><a name="p1511825115244"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p141181051192413"><a name="p141181051192413"></a><a name="p141181051192413"></a>历史对话轮数，默认为1，可选范围[1, 2, 3]。</p>
</td>
</tr>
</tbody>
</table>

返回结果类型：流式event

测试接口样例1：

```
curl -X 'POST' 'https://x.x.x.x:x/v1/api/app/intelligent-interaction' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{
"query":"数据库test_db中有条sql语句select* from t1 where id = 10000;请帮我进行一下索引推荐",
     "mode":"tool_interaction",
     "user_id":"user123",
     "session_id":"session123",
     "history_len":1
}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式：

```
data:{"data":[{"content":"工具匹配中...","type":"progress"}],"success":true}\n\n
data:{"data":[{"content":"提取参数中...","type":"progress"}],"success":true}\n\n
data:{"data":[{"content":"工具调用中...","type":"progress"}],"success":true}\n\n
data:{"data":[{"color":"black","content":"推荐的索引如下表所示：","type":"str"},{"content":{"headers":["索引描述","预计占用","预计提升"],"rows":[["CREATEINDEX idx_t1_id ON public.t1(id);","2.49MB","99.91%"]]},"type":"table"}],"success":true}\n\n
data:{"data":[{"content":"DONE","type":"progress"}],"success":true}\n\n
```

测试接口样例2（query参数值可通过工具交互的告警查询结果获取）：

```
curl -X 'POST' 'https://x.x.x.x:x/v1/api/app/intelligent-interaction' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{
     "query":"{\"history_alarm_id\": \"c_190471\", \"metric_name\": \"gaussdb_cluster_state\", \"instance\": \"10.90.56.xx\", \"alarm_type\": \"ALARM\", \"alarm_level\": 20, \"start_time\": \"2024-09-05 15:28:56\", \"alarm_content\": \"10.90.56.xx(dn   ): {\\\"ping\\\": 0, \\\"dn_status\\\": 1, \\\"bind_ip_failed\\\": 0, \\\"dn_ping_standby\\\": 0, \\\"ffic_updated\\\": 0, \\\"cms_phonydead_restart\\\": 0, \\\"cms_restart_pending\\\": 0, \\\"dn_read_only\\\": 0, \\\"dn_manual_stop\\\": 0, \\\"dn_disk_damage\\\": 0, \\\"dn_nic_down\\\": 0, \\\"dn_port_conflict\\\": 0, \\\"dn_writable\\\": 0} Unknown\", \"source\": \"dbmind\", \"status\": 0}",
     "mode":"fault_diagnostic",
     "model_name":"pangu",
     "user_id":"user123",
     "session_id":"session123"
}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式：

```
    data:{"data":[{"content":"查询故障树...","type":"progress"}],"success":true}
    data:{"data":[{"content":"异常告警信息识别中...","type":"progress"}],"success":true}
    data:{"data":[{"content":"参数识别中...","type":"progress"}],"success":true}
    data:{"data":[{"color":"black","content":"'cluster_feature'","type":"str"}],"success":true}
    data:{"data":[{"content":"DONE","type":"progress"}], "success": true}
```

异常情况：

```
    data:{"data":[{"content":"工具执行异常","type":"str"}],"success":true}\n\n
    data:{"data":[{"content":"大模型服务异常","type":"str"}],"success":true}\n\n
    data:{"data":[{"content":"运维知识库异常","type":"str"}],"success":true}\n\n
```

## API: /v1/api/llms<a name="section148895305817"></a>

功能描述：获取所有可用的大语言模型列表。

请求方式：GET

参数及其解释：无

测试接口样例：

```
curl -X 'GET' 'https://x.x.x.x:x/v1/api/llms' -H 'accept: application/json' -H 'Content-Type: application/json' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式：

获取成功1：

```
{"data":{"local":[],"online":["pangu_cloud_sigma_unify_plugin_38b","Llama3-8B-Chinese-Chat"]},"success":true}
```

获取成功2：

```
{"data":true,"success":true}
```

## API: /v1/api/llms<a name="section14812403135"></a>

功能描述：切换大模型。

请求方式：PUT

参数及其解释：如下表所示：

**表 2**  接口参数说明

<a name="table4550125315134"></a>
<table><thead align="left"><tr id="row755119536133"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p028313221413"><a name="p028313221413"></a><a name="p028313221413"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p1928312101410"><a name="p1928312101410"></a><a name="p1928312101410"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p728312141415"><a name="p728312141415"></a><a name="p728312141415"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1128311211142"><a name="p1128311211142"></a><a name="p1128311211142"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row7551145331319"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p82831323142"><a name="p82831323142"></a><a name="p82831323142"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p0283152111416"><a name="p0283152111416"></a><a name="p0283152111416"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p2283112141411"><a name="p2283112141411"></a><a name="p2283112141411"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p028314261410"><a name="p028314261410"></a><a name="p028314261410"></a>大模型名称。</p>
</td>
</tr>
<tr id="row12551453191315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p128311215147"><a name="p128311215147"></a><a name="p128311215147"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p128342171415"><a name="p128342171415"></a><a name="p128342171415"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p182834231416"><a name="p182834231416"></a><a name="p182834231416"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p172832027146"><a name="p172832027146"></a><a name="p172832027146"></a>用户id，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
<tr id="row11551135301314"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1028342131410"><a name="p1028342131410"></a><a name="p1028342131410"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p13283112161418"><a name="p13283112161418"></a><a name="p13283112161418"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p22838251419"><a name="p22838251419"></a><a name="p22838251419"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2283172161414"><a name="p2283172161414"></a><a name="p2283172161414"></a>会话id，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
</tbody>
</table>

测试接口样例：

```
curl -X 'PUT' 'https://x.x.x.x:x/v1/api/llms?name=pangu&user_id=xxx&session_id=xxx' -H 'accept: application/json' -H 'Content-Type: application/json' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式：

切换成功：

```
{"data":true,"success":true}
```

切换失败1（模型切换失败的详细原因记录在日志中）：

```
{"data":false,"success":true}
```

切换失败2：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/clusters<a name="section192711489183"></a>

功能描述：获取DBMind纳管的所有数据库集群信息。

请求方式：GET

参数及其解释：无

测试接口样例：

```
curl -X 'GET' 'https://x.x.x.x:x/v1/api/clusters' -H 'accept: application/json' -H 'Content-Type: application/json' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式：

获取成功1：

```
{"data":{"x.x.x.x:x":{"cluster_name":"cluster1","intances":["x.x.x.x:x","x.x.x.x:x"],"managed":true},"x.x.x.x:x":{"cluster_name":"cluster2","intances":["x.x.x.x:x","x.x.x.x:x"],"managed":false}},"success":true}
```

获取成功2：

```
{"data":{},"success":true}
```

获取失败：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/clusters<a name="section1767886491"></a>

功能描述：切换当前监控的数据库集群

请求方式：PUT

参数及其解释：如下表所示：

**表 3**  接口参数说明

<a name="table1799374474916"></a>
<table><thead align="left"><tr id="row1399334418493"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p19993124411496"><a name="p19993124411496"></a><a name="p19993124411496"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p499319440499"><a name="p499319440499"></a><a name="p499319440499"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p11994164494910"><a name="p11994164494910"></a><a name="p11994164494910"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p4994184494918"><a name="p4994184494918"></a><a name="p4994184494918"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row7994544164917"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p253420511498"><a name="p253420511498"></a><a name="p253420511498"></a>instance</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1853417514497"><a name="p1853417514497"></a><a name="p1853417514497"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p85359514494"><a name="p85359514494"></a><a name="p85359514494"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p75351951154918"><a name="p75351951154918"></a><a name="p75351951154918"></a>数据库实例ip地址，需要带端口号，例如：192.168.100.100:8080</p>
</td>
</tr>
<tr id="row2099454494915"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p25351351124910"><a name="p25351351124910"></a><a name="p25351351124910"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p453515111498"><a name="p453515111498"></a><a name="p453515111498"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p11535125164914"><a name="p11535125164914"></a><a name="p11535125164914"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1153535114911"><a name="p1153535114911"></a><a name="p1153535114911"></a>用户id，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
<tr id="row17994144184918"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p85354519493"><a name="p85354519493"></a><a name="p85354519493"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p0535195118492"><a name="p0535195118492"></a><a name="p0535195118492"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1253575114498"><a name="p1253575114498"></a><a name="p1253575114498"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1753545114916"><a name="p1753545114916"></a><a name="p1753545114916"></a>会话id，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
</tbody>
</table>

测试接口样例：

```
curl -X 'PUT' 'https://x.x.x.x:x/v1/api/clusters?instance=x.x.x.x:x&user_id=xxx&session_id=xxx' -H 'accept: application/json' -H 'Content-Type: application/json' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式：

切换成功：

```
{"data":true,"success":true}
```

切换失败1：

```
{"data":false,"success":true}
```

切换失败2：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/clusters/register<a name="section11816193111408"></a>

功能描述：注册dbmind纳管范围的数据库集群。

请求方式：POST

参数及其解释：如下表所示：

**表 4**  接口参数说明

<a name="table941991617422"></a>
<table><thead align="left"><tr id="row3420101624211"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p14420161615425"><a name="p14420161615425"></a><a name="p14420161615425"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p8420716124212"><a name="p8420716124212"></a><a name="p8420716124212"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p842051604212"><a name="p842051604212"></a><a name="p842051604212"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1842091664211"><a name="p1842091664211"></a><a name="p1842091664211"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row5545528124214"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p2765143514422"><a name="p2765143514422"></a><a name="p2765143514422"></a>cluster_name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17651235104219"><a name="p17651235104219"></a><a name="p17651235104219"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p177651935194214"><a name="p177651935194214"></a><a name="p177651935194214"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p8765103514428"><a name="p8765103514428"></a><a name="p8765103514428"></a>集群名称。</p>
</td>
</tr>
<tr id="row16864531124211"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p976523554216"><a name="p976523554216"></a><a name="p976523554216"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17651235154219"><a name="p17651235154219"></a><a name="p17651235154219"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p2076563574219"><a name="p2076563574219"></a><a name="p2076563574219"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p16765143519427"><a name="p16765143519427"></a><a name="p16765143519427"></a>数据库IP（集群内的任意一个IP即可）。</p>
</td>
</tr>
<tr id="row04871830144211"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p16765193513424"><a name="p16765193513424"></a><a name="p16765193513424"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1676683516425"><a name="p1676683516425"></a><a name="p1676683516425"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p576617350426"><a name="p576617350426"></a><a name="p576617350426"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1676673518427"><a name="p1676673518427"></a><a name="p1676673518427"></a>端口。</p>
</td>
</tr>
<tr id="row242072517420"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p776673518426"><a name="p776673518426"></a><a name="p776673518426"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p6766113510421"><a name="p6766113510421"></a><a name="p6766113510421"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1176615359426"><a name="p1176615359426"></a><a name="p1176615359426"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p676613554218"><a name="p676613554218"></a><a name="p676613554218"></a>数据库用户名。</p>
</td>
</tr>
<tr id="row842017167426"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p19766103520420"><a name="p19766103520420"></a><a name="p19766103520420"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p87665355428"><a name="p87665355428"></a><a name="p87665355428"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p17665351422"><a name="p17665351422"></a><a name="p17665351422"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p4766113514421"><a name="p4766113514421"></a><a name="p4766113514421"></a>数据库密码。</p>
</td>
</tr>
</tbody>
</table>

测试接口样例：

```
curl -X 'POST' 'https://x.x.x.x:x/v1/api/clusters/register' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{ "cluster_name": "cluster1", "host": "db_host_ip", "port": "5432", "username": "db_user", "password": "db_password"}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果格式

注册成功：

```
{"data":{"msg":"注册成功","status":0},"success":true}
```

注册集群的账号密码错误：

```
{"data":{"msg":"无法连接到此集群","status":503},"success":true}
```

注册集群不在dbmind纳管范围：

```
{"data":{"msg":"dbmind没有纳管此集群，无法注册","status":1001},"success":true}
```

注册集群的名字重复：

```
{"data":{"msg":"该集群名已被占用","status":1002},"success":true}
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>注册成功后，集群信息存储在集群管理表，表接口参考第5章节附录中[表6](附录.md#table56641357133711)。

