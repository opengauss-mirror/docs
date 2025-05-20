# API接口说明<a name="ZH-CN_TOPIC_0000002258486280"></a>

本节将介绍知识库管理模块提供的RESTful API接口。

## API: /v1/api/serve/knowledge\_base/add<a name="section7251917174211"></a>

功能描述：上传文档构建自定义知识库，用于对应文档的智能问答。

请求方式：POST

参数及其解释：如下表所示：

**表 1**  接口参数说明

<a name="table19263247103120"></a>
<table><thead align="left"><tr id="row132637471318"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1526324717315"><a name="p1526324717315"></a><a name="p1526324717315"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p10263124711315"><a name="p10263124711315"></a><a name="p10263124711315"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p1926344743114"><a name="p1926344743114"></a><a name="p1926344743114"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p3264547173111"><a name="p3264547173111"></a><a name="p3264547173111"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1226434712315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p3442111017438"><a name="p3442111017438"></a><a name="p3442111017438"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p4442110154312"><a name="p4442110154312"></a><a name="p4442110154312"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p124421610134312"><a name="p124421610134312"></a><a name="p124421610134312"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14424101433"><a name="p14424101433"></a><a name="p14424101433"></a>知识库名称。</p>
</td>
</tr>
<tr id="row202131151123116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p6442151084310"><a name="p6442151084310"></a><a name="p6442151084310"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1644214105431"><a name="p1644214105431"></a><a name="p1644214105431"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p54421710104313"><a name="p54421710104313"></a><a name="p54421710104313"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p10442181054317"><a name="p10442181054317"></a><a name="p10442181054317"></a>知识库用户ID，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
<tr id="row14741043436"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p20442310144319"><a name="p20442310144319"></a><a name="p20442310144319"></a>file</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p8443191019435"><a name="p8443191019435"></a><a name="p8443191019435"></a>List[UploadFile]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p7443141064316"><a name="p7443141064316"></a><a name="p7443141064316"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6443111015439"><a name="p6443111015439"></a><a name="p6443111015439"></a>上传的数据源列表。</p>
</td>
</tr>
<tr id="row9562142164311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p194431110144314"><a name="p194431110144314"></a><a name="p194431110144314"></a>kb_type</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1443010174312"><a name="p1443010174312"></a><a name="p1443010174312"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1544381064313"><a name="p1544381064313"></a><a name="p1544381064313"></a>否，默认为QA，支持范围[QA, OM]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p74431100436"><a name="p74431100436"></a><a name="p74431100436"></a>知识库类型。</p>
</td>
</tr>
<tr id="row7634507431"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p544321014435"><a name="p544321014435"></a><a name="p544321014435"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p2443131084312"><a name="p2443131084312"></a><a name="p2443131084312"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p10443810104311"><a name="p10443810104311"></a><a name="p10443810104311"></a>否，默认为""</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18443141024319"><a name="p18443141024319"></a><a name="p18443141024319"></a>知识库描述。</p>
</td>
</tr>
<tr id="row1526410477314"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1144351094312"><a name="p1144351094312"></a><a name="p1144351094312"></a>context</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p84438103435"><a name="p84438103435"></a><a name="p84438103435"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p17443141084316"><a name="p17443141084316"></a><a name="p17443141084316"></a>否，默认为""</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6443110204319"><a name="p6443110204319"></a><a name="p6443110204319"></a>知识库参数上下文。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'POST' 'https://host:port/v1/api/serve/knowledge_base/add?name=kb1&user_id=test&kb_type=QA&description=kbfile&context=123'  -H 'accept: application/json' -H "Content-Type: multipart/form-data" -F "file=@tmp.md" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"add knowledge success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/knowledge\_base/update<a name="section1712518438459"></a>

功能描述：更新知识库的名称、描述与参数信息。

请求方式：PUT

参数及其解释：如下表所示：

**表 2**  接口参数说明

<a name="table139319534710"></a>
<table><thead align="left"><tr id="row23935544718"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p16393205134718"><a name="p16393205134718"></a><a name="p16393205134718"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p1939325194715"><a name="p1939325194715"></a><a name="p1939325194715"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p139319514477"><a name="p139319514477"></a><a name="p139319514477"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1839345174710"><a name="p1839345174710"></a><a name="p1839345174710"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row739315519473"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p2828114124715"><a name="p2828114124715"></a><a name="p2828114124715"></a>kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p178281714194711"><a name="p178281714194711"></a><a name="p178281714194711"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p382817148477"><a name="p382817148477"></a><a name="p382817148477"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p7828314184714"><a name="p7828314184714"></a><a name="p7828314184714"></a>知识库ID。</p>
</td>
</tr>
<tr id="row203939514471"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1828141414476"><a name="p1828141414476"></a><a name="p1828141414476"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p13828131418472"><a name="p13828131418472"></a><a name="p13828131418472"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1282861484715"><a name="p1282861484715"></a><a name="p1282861484715"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18828121415474"><a name="p18828121415474"></a><a name="p18828121415474"></a>知识库用户ID，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
<tr id="row1223309124714"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p882941454716"><a name="p882941454716"></a><a name="p882941454716"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p9829214124710"><a name="p9829214124710"></a><a name="p9829214124710"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p7829214154712"><a name="p7829214154712"></a><a name="p7829214154712"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p782910144476"><a name="p782910144476"></a><a name="p782910144476"></a>更新后知识库名称。</p>
</td>
</tr>
<tr id="row153939511473"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1882941411472"><a name="p1882941411472"></a><a name="p1882941411472"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1829161413471"><a name="p1829161413471"></a><a name="p1829161413471"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p18291414114711"><a name="p18291414114711"></a><a name="p18291414114711"></a>否，默认为""</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1829914134714"><a name="p1829914134714"></a><a name="p1829914134714"></a>更新后知识库描述。</p>
</td>
</tr>
<tr id="row13943574720"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1182991454717"><a name="p1182991454717"></a><a name="p1182991454717"></a>context</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p382921494716"><a name="p382921494716"></a><a name="p382921494716"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p17829151419479"><a name="p17829151419479"></a><a name="p17829151419479"></a>否，默认为""</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1882941412474"><a name="p1882941412474"></a><a name="p1882941412474"></a>更新后知识库参数上下文。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'PUT' 'https://host:port/v1/api/serve/knowledge_base/update'  -H 'accept: application/json' -H "Content-Type: application/json" -d '{"kb_id": 2, "user_id": "test", "name": "kb2", "description": "kb2file", "context": "1234"}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"update knowledge success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/server/knowledge\_base/delete<a name="section9805184011515"></a>

功能描述：删除指定知识库。

请求方式：DELETE

参数及其解释：如下表所示：

**表 3**  接口参数说明

<a name="table141316992218"></a>
<table><thead align="left"><tr id="row14138920224"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p313189182212"><a name="p313189182212"></a><a name="p313189182212"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p161379192220"><a name="p161379192220"></a><a name="p161379192220"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p171379182219"><a name="p171379182219"></a><a name="p171379182219"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p213129132211"><a name="p213129132211"></a><a name="p213129132211"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row713192229"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13212166220"><a name="p13212166220"></a><a name="p13212166220"></a>kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p16213162229"><a name="p16213162229"></a><a name="p16213162229"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1122016172220"><a name="p1122016172220"></a><a name="p1122016172220"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p126168223"><a name="p126168223"></a><a name="p126168223"></a>知识库ID。</p>
</td>
</tr>
<tr id="row121310912223"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p2251619227"><a name="p2251619227"></a><a name="p2251619227"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1426166228"><a name="p1426166228"></a><a name="p1426166228"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p7231692218"><a name="p7231692218"></a><a name="p7231692218"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p32616112210"><a name="p32616112210"></a><a name="p32616112210"></a>知识库用户ID，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'DELETE' 'https://host:port/v1/api/serve/knowledge_base/delete?kb_id=2&user_id=test'  -H 'accept: application/json' -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"delete knowledge success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/knowledge\_base/get<a name="section562110257235"></a>

功能描述：查询指定知识库。

请求方式：GET

参数及其解释：如下表所示：

**表 4**  接口参数说明

<a name="table483493753115"></a>
<table><thead align="left"><tr id="row383423713110"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p18341037193116"><a name="p18341037193116"></a><a name="p18341037193116"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p1183483743114"><a name="p1183483743114"></a><a name="p1183483743114"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p148341737103118"><a name="p148341737103118"></a><a name="p148341737103118"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p10834113714316"><a name="p10834113714316"></a><a name="p10834113714316"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1583463718316"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p8834113773113"><a name="p8834113773113"></a><a name="p8834113773113"></a>kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1583433716312"><a name="p1583433716312"></a><a name="p1583433716312"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p198341737193111"><a name="p198341737193111"></a><a name="p198341737193111"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p78344372315"><a name="p78344372315"></a><a name="p78344372315"></a>知识库ID。</p>
</td>
</tr>
<tr id="row8834637163120"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1083463712313"><a name="p1083463712313"></a><a name="p1083463712313"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1083443723117"><a name="p1083443723117"></a><a name="p1083443723117"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p5834337133117"><a name="p5834337133117"></a><a name="p5834337133117"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p383483716312"><a name="p383483716312"></a><a name="p383483716312"></a>知识库用户ID，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'GET' 'https://host:port/v1/api/serve/knowledge_base/get?kb_id=2&user_id=test'  -H 'accept: application/json' -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":[{"context":"123","create_time":"2024-09-11 17:09:55.266541","description":"kbfile","kb_id":1,"kb_type":"QA","name":"kb1","update_time":"2024-09-11 17:09:55.266541","user_id":"test"}],"success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/knowledge\_base/list<a name="section944016126328"></a>

功能描述：展示用户下所有知识库。

请求方式：GET

参数及其解释：如下表所示：

**表 5**  接口参数说明

<a name="table11861517913"></a>
<table><thead align="left"><tr id="row58631716111"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1186141711112"><a name="p1186141711112"></a><a name="p1186141711112"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p128618171618"><a name="p128618171618"></a><a name="p128618171618"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p786717611"><a name="p786717611"></a><a name="p786717611"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p148611171615"><a name="p148611171615"></a><a name="p148611171615"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row11862171013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p961417228114"><a name="p961417228114"></a><a name="p961417228114"></a>user_id: str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p96145221718"><a name="p96145221718"></a><a name="p96145221718"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p14614172214110"><a name="p14614172214110"></a><a name="p14614172214110"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p136148221110"><a name="p136148221110"></a><a name="p136148221110"></a>知识库用户ID，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'GET' 'https://host:port/v1/api/serve/knowledge_base/list?user_id=test'  -H 'accept: application/json' -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":[{"context":"123","create_time":"2024-09-11 17:09:55.266541","description":"kbfile","kb_id":1,"kb_type":"QA","name":"kb1","update_time":"2024-09-11 17:09:55.266541","user_id":"test"}],"success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/datasource/add<a name="section45420291942"></a>

功能描述：上传文档，增加新数据源到自定义知识库，扩充智能问答检索空间。

请求方式：POST

参数及其解释：如下表所示：

**表 6**  接口参数说明

<a name="table339321217613"></a>
<table><thead align="left"><tr id="row183941912667"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p939410123611"><a name="p939410123611"></a><a name="p939410123611"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p13941712263"><a name="p13941712263"></a><a name="p13941712263"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p173941112769"><a name="p173941112769"></a><a name="p173941112769"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p19394212264"><a name="p19394212264"></a><a name="p19394212264"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row728313191265"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p831010281267"><a name="p831010281267"></a><a name="p831010281267"></a>related_kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p231002815616"><a name="p231002815616"></a><a name="p231002815616"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p14310162815619"><a name="p14310162815619"></a><a name="p14310162815619"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1531010281769"><a name="p1531010281769"></a><a name="p1531010281769"></a>数据源对应知识库ID。</p>
</td>
</tr>
<tr id="row534916211661"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13310132818615"><a name="p13310132818615"></a><a name="p13310132818615"></a>file</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p131016281164"><a name="p131016281164"></a><a name="p131016281164"></a>List[UploadFile]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1431016281769"><a name="p1431016281769"></a><a name="p1431016281769"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1231062819619"><a name="p1231062819619"></a><a name="p1231062819619"></a>上传的数据源列表。</p>
</td>
</tr>
<tr id="row1619641716615"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p193103281064"><a name="p193103281064"></a><a name="p193103281064"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1831042810612"><a name="p1831042810612"></a><a name="p1831042810612"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1831012289610"><a name="p1831012289610"></a><a name="p1831012289610"></a>否，默认为文件名（无后缀）</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p4310192815610"><a name="p4310192815610"></a><a name="p4310192815610"></a>数据源名称。</p>
</td>
</tr>
<tr id="row93945122619"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p431016281461"><a name="p431016281461"></a><a name="p431016281461"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p03101928267"><a name="p03101928267"></a><a name="p03101928267"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1310112817616"><a name="p1310112817616"></a><a name="p1310112817616"></a>否，默认为""</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p93107288614"><a name="p93107288614"></a><a name="p93107288614"></a>数据源描述。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'POST' 'https://host:port/v1/api/serve/datasource/add?related_kb_id=2&name=ds_test&description=kbfile' -H 'accept: application/json' -H "Content-Type: multipart/form-data" -F "file=@tmp.md" -F "file=@tmp2.md" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"add datasource success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/datasource/update<a name="section3472131417163"></a>

功能描述：更新数据源的名称与描述。

请求方式：PUT

参数及其解释：如下表所示：

**表 7**  接口参数说明

<a name="table13118155951610"></a>
<table><thead align="left"><tr id="row41181559151613"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p17118659151619"><a name="p17118659151619"></a><a name="p17118659151619"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p21181559101619"><a name="p21181559101619"></a><a name="p21181559101619"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p1611805911615"><a name="p1611805911615"></a><a name="p1611805911615"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p41191859121615"><a name="p41191859121615"></a><a name="p41191859121615"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row3119125918164"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1356181381720"><a name="p1356181381720"></a><a name="p1356181381720"></a>ds_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1435671331717"><a name="p1435671331717"></a><a name="p1435671331717"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p0356111371714"><a name="p0356111371714"></a><a name="p0356111371714"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1735601321715"><a name="p1735601321715"></a><a name="p1735601321715"></a>数据源ID。</p>
</td>
</tr>
<tr id="row191198594166"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13561613111719"><a name="p13561613111719"></a><a name="p13561613111719"></a>related_kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p135641351710"><a name="p135641351710"></a><a name="p135641351710"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1635614137175"><a name="p1635614137175"></a><a name="p1635614137175"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p183568138173"><a name="p183568138173"></a><a name="p183568138173"></a>数据源对应知识库ID。</p>
</td>
</tr>
<tr id="row13119159101614"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1535691361718"><a name="p1535691361718"></a><a name="p1535691361718"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p13356191361715"><a name="p13356191361715"></a><a name="p13356191361715"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13356181317177"><a name="p13356181317177"></a><a name="p13356181317177"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p33567135177"><a name="p33567135177"></a><a name="p33567135177"></a>更新后数据源名称。</p>
</td>
</tr>
<tr id="row16119459141619"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p11356111318173"><a name="p11356111318173"></a><a name="p11356111318173"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p93568137172"><a name="p93568137172"></a><a name="p93568137172"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p2356101316178"><a name="p2356101316178"></a><a name="p2356101316178"></a>否，默认为""</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p8356151311712"><a name="p8356151311712"></a><a name="p8356151311712"></a>更新后数据源描述。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'PUT' 'https://host:port/v1/api/serve/datasource/update' -H 'accept: application/json' -H "Content-Type: application/json" -d '{"ds_id": 3, "name": "ds3", "related_kb_id": 2, "description": "ds3file"}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"update datasource success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/datasource/delete<a name="section1669845651812"></a>

功能描述：删除指定数据源。

请求方式：DELETE

参数及其解释：如下表所示：

**表 8**  接口参数说明

<a name="table20585163318284"></a>
<table><thead align="left"><tr id="row175851033202814"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p16585113342813"><a name="p16585113342813"></a><a name="p16585113342813"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p858563312284"><a name="p858563312284"></a><a name="p858563312284"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p13585933122817"><a name="p13585933122817"></a><a name="p13585933122817"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p15851633142811"><a name="p15851633142811"></a><a name="p15851633142811"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row11585833192812"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p143601412165612"><a name="p143601412165612"></a><a name="p143601412165612"></a>ds_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10360171235610"><a name="p10360171235610"></a><a name="p10360171235610"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p15360181235611"><a name="p15360181235611"></a><a name="p15360181235611"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p13360141255616"><a name="p13360141255616"></a><a name="p13360141255616"></a>数据源ID。</p>
</td>
</tr>
<tr id="row6585113319282"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p99713119546"><a name="p99713119546"></a><a name="p99713119546"></a>related_kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p12971141105418"><a name="p12971141105418"></a><a name="p12971141105418"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p497117110547"><a name="p497117110547"></a><a name="p497117110547"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1697141185413"><a name="p1697141185413"></a><a name="p1697141185413"></a>数据源对应知识库ID。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'DELETE' 'https://host:port/v1/api/serve/datasource/delete?ds_id=3&related_kb_id=2'  -H 'accept: application/json' -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"delete datasource success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/datasource/get<a name="section73808580291"></a>

功能描述：查询指定数据源。

请求方式：GET

参数及其解释：如下表所示：

**表 9**  接口参数说明

<a name="table176537473120"></a>
<table><thead align="left"><tr id="row865344153116"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p12653154153116"><a name="p12653154153116"></a><a name="p12653154153116"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p66531143313"><a name="p66531143313"></a><a name="p66531143313"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p16532483113"><a name="p16532483113"></a><a name="p16532483113"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p765312411319"><a name="p765312411319"></a><a name="p765312411319"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row46531345313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1065319433111"><a name="p1065319433111"></a><a name="p1065319433111"></a>ds_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p565315483118"><a name="p565315483118"></a><a name="p565315483118"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p126531046313"><a name="p126531046313"></a><a name="p126531046313"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p565318415312"><a name="p565318415312"></a><a name="p565318415312"></a>数据源ID。</p>
</td>
</tr>
<tr id="row56541744318"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p46540433112"><a name="p46540433112"></a><a name="p46540433112"></a>related_kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p6654142313"><a name="p6654142313"></a><a name="p6654142313"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p36541545316"><a name="p36541545316"></a><a name="p36541545316"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p46541445314"><a name="p46541445314"></a><a name="p46541445314"></a>数据源对应知识库ID。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'GET' 'https://host:port/v1/api/serve/datasource/get?ds_id=3&related_kb_id=2' -H 'accept: application/json' -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":[{"create_time":"2024-09-12 16:34:58.054142","description":"ds3file","ds_id":3,"file_name":"xxx.md","name":"ds3","related_kb_id":2,"update_time":"2024-09-12 16:34:58.054142"}],"success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/datasource/list<a name="section166931169313"></a>

功能描述：展示知识库下的所有数据源。

请求方式：GET

参数及其解释：如下表所示：

**表 10**  接口参数说明

<a name="table1547105311314"></a>
<table><thead align="left"><tr id="row34711853113118"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p247210538319"><a name="p247210538319"></a><a name="p247210538319"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p4472125323111"><a name="p4472125323111"></a><a name="p4472125323111"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p447255323118"><a name="p447255323118"></a><a name="p447255323118"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p647213537313"><a name="p647213537313"></a><a name="p647213537313"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row6472155383117"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1438055617313"><a name="p1438055617313"></a><a name="p1438055617313"></a>related_kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p938010561318"><a name="p938010561318"></a><a name="p938010561318"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1938118567313"><a name="p1938118567313"></a><a name="p1938118567313"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p33816563310"><a name="p33816563310"></a><a name="p33816563310"></a>数据源对应知识库ID。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'GET' 'https://host:port/v1/api/serve/datasource/list?related_kb_id=2'  -H 'accept: application/json' -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":[{"create_time":"2024-09-12 16:34:58.054142","description":"ds3file","ds_id":3,"file_name":"xxx.md","name":"ds3","related_kb_id":2,"update_time":"2024-09-12 16:34:58.054142"}],"success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/knowledge\_base/batch\_delete<a name="section124158623917"></a>

功能描述：批量删除指定知识库。

请求方式：POST

参数及其解释：如下表所示：

**表 11**  接口参数说明

<a name="table961021104011"></a>
<table><thead align="left"><tr id="row186101215409"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1661113134017"><a name="p1661113134017"></a><a name="p1661113134017"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p15611131174014"><a name="p15611131174014"></a><a name="p15611131174014"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p2611614401"><a name="p2611614401"></a><a name="p2611614401"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p361114184011"><a name="p361114184011"></a><a name="p361114184011"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row17841186174017"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p352621284013"><a name="p352621284013"></a><a name="p352621284013"></a>kb_id_list</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p175271712134020"><a name="p175271712134020"></a><a name="p175271712134020"></a>List[int]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p9527111216404"><a name="p9527111216404"></a><a name="p9527111216404"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p45277128403"><a name="p45277128403"></a><a name="p45277128403"></a>知识库ID列表。</p>
</td>
</tr>
<tr id="row1861115110409"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p6527181219400"><a name="p6527181219400"></a><a name="p6527181219400"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p4527141264014"><a name="p4527141264014"></a><a name="p4527141264014"></a>str</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p152751217404"><a name="p152751217404"></a><a name="p152751217404"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p145271122402"><a name="p145271122402"></a><a name="p145271122402"></a>知识库用户ID，要求长度大于等于2，只能由字符、数字和下划线组成。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'POST' 'https://host:port/v1/api/serve/knowledge_base/batch_delete?user_id=test'  -H 'accept: application/json' -H "Content-Type: application/json" -d '[3, 4]' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"batch delete knowledge success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

## API: /v1/api/serve/datasource/batch\_delete<a name="section84642440417"></a>

功能描述：批量删除指定数据源。

请求方式：POST

参数及其解释：如下表所示：

**表 12**  接口参数说明

<a name="table1031514509426"></a>
<table><thead align="left"><tr id="row5315135011428"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p231516504423"><a name="p231516504423"></a><a name="p231516504423"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p3315195018429"><a name="p3315195018429"></a><a name="p3315195018429"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p63161250154210"><a name="p63161250154210"></a><a name="p63161250154210"></a>是否必填</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p2316205017429"><a name="p2316205017429"></a><a name="p2316205017429"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1231655017422"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1987835384213"><a name="p1987835384213"></a><a name="p1987835384213"></a>ds_id_list</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1587885315425"><a name="p1587885315425"></a><a name="p1587885315425"></a>List[int]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p987813532422"><a name="p987813532422"></a><a name="p987813532422"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p78781153124215"><a name="p78781153124215"></a><a name="p78781153124215"></a>数据源ID列表。</p>
</td>
</tr>
<tr id="row1031614501422"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18878165311425"><a name="p18878165311425"></a><a name="p18878165311425"></a>related_kb_id: int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p687865310425"><a name="p687865310425"></a><a name="p687865310425"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p178781653174217"><a name="p178781653174217"></a><a name="p178781653174217"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p12879553134218"><a name="p12879553134218"></a><a name="p12879553134218"></a>数据源对应知识库ID。</p>
</td>
</tr>
</tbody>
</table>

接口示例：

```
curl -X 'POST' 'https://host:port/v1/api/serve/datasource/batch_delete?related_kb_id=2' -H 'accept: application/json' -H "Content-Type: application/json" -d '[4, 5]' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

参考返回结果：

```
{"data":"batch delete datasource success.","success":true}
```

错误示例：

```
{"msg":"Internal server error.","success":false}
```

