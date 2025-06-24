# GS\_SQL\_LIMIT

GS\_SQL\_LIMIT系统表存储所有SQL防火墙规则的信息。

**表 1**  GS\_SQL\_LIMIT字段

<a name="table1295815488219"></a>
<table><thead align="left"><tr id="row49590483218"><th class="cellrowborder" valign="top" width="18.74187418741874%" id="mcps1.2.4.1.1"><p id="p1495913481323"><a name="p1495913481323"></a><a name="p1495913481323"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.77177717771777%" id="mcps1.2.4.1.2"><p id="p1795917488218"><a name="p1795917488218"></a><a name="p1795917488218"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63.48634863486349%" id="mcps1.2.4.1.3"><p id="p8959184814217"><a name="p8959184814217"></a><a name="p8959184814217"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row9959848827"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p13959174812211"><a name="p13959174812211"></a><a name="p13959174812211"></a>limit_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p595924812216"><a name="p595924812216"></a><a name="p595924812216"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p6959348726"><a name="p6959348726"></a><a name="p6959348726"></a>规则ID。</p>
</td>
</tr>
<tr id="row89591548126"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p11959174819219"><a name="p11959174819219"></a><a name="p11959174819219"></a>limit_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p29591248921"><a name="p29591248921"></a><a name="p29591248921"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p11959548722"><a name="p11959548722"></a><a name="p11959548722"></a>规则名称。</p>
</td>
</tr>
<tr id="row57461749192117"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p15746249102119"><a name="p15746249102119"></a><a name="p15746249102119"></a>is_valid</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p13746104913219"><a name="p13746104913219"></a><a name="p13746104913219"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1574664962111"><a name="p1574664962111"></a><a name="p1574664962111"></a>是否生效。当时间范围无效或最大并发数为负时，表示不生效。</p>
</td>
</tr>
<tr id="row52941515106"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p82941551161014"><a name="p82941551161014"></a><a name="p82941551161014"></a>work_node</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p729495161016"><a name="p729495161016"></a><a name="p729495161016"></a>int1</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p122941051161016"><a name="p122941051161016"></a><a name="p122941051161016"></a>生效的节点。0表示生效所有节点，1表示生效主节点，2表示生效备节点。其他值默认生效备节点</p>
</td>
</tr>
<tr id="row11764201522310"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p976411542311"><a name="p976411542311"></a><a name="p976411542311"></a>max_concurrency</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p67644158236"><a name="p67644158236"></a><a name="p67644158236"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p8764171552316"><a name="p8764171552316"></a><a name="p8764171552316"></a>最大并发数。-1表示不生效。</p>
</td>
</tr>
<tr id="row718483141116"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p201845317117"><a name="p201845317117"></a><a name="p201845317117"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p201841931121115"><a name="p201841931121115"></a><a name="p201841931121115"></a>timestampTz</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p9184173113116"><a name="p9184173113116"></a><a name="p9184173113116"></a>生效时间。</p>
</td>
</tr>
<tr id="row168971594114"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p12897165981120"><a name="p12897165981120"></a><a name="p12897165981120"></a>end_time</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p28977592118"><a name="p28977592118"></a><a name="p28977592118"></a>timestampTz</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p11897195961119"><a name="p11897195961119"></a><a name="p11897195961119"></a>失效时间。</p>
</td>
</tr>
<tr id="row13214142271213"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p12141622111213"><a name="p12141622111213"></a><a name="p12141622111213"></a>limit_type</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p17214102212120"><a name="p17214102212120"></a><a name="p17214102212120"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1214182231219"><a name="p1214182231219"></a><a name="p1214182231219"></a>规则类型。支持sqlid，select，insert，update，delete。</p>
</td>
</tr>
<tr id="row1643769111312"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p114381391136"><a name="p114381391136"></a><a name="p114381391136"></a>databases</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p44381499139"><a name="p44381499139"></a><a name="p44381499139"></a>name[]</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1643819917132"><a name="p1643819917132"></a><a name="p1643819917132"></a>数据库列表。</p>
</td>
</tr>
<tr id="row197617438139"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p12976943201312"><a name="p12976943201312"></a><a name="p12976943201312"></a>users</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p1497694317131"><a name="p1497694317131"></a><a name="p1497694317131"></a>name[]</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p14976134317139"><a name="p14976134317139"></a><a name="p14976134317139"></a>用户列表。</p>
</td>
</tr>
<tr id="row8661171961419"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p1566112191149"><a name="p1566112191149"></a><a name="p1566112191149"></a>limit_opt</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p3662141911144"><a name="p3662141911144"></a><a name="p3662141911144"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p13662171912147"><a name="p13662171912147"></a><a name="p13662171912147"></a>规则具体内容。</p>
</td>
</tr>
</tbody>
</table>

