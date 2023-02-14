# GS\_SQL\_PATCH

GS\_SQL\_PATCH系统表存储所有SQL\_PATCH的状态信息。

**表 1**  GS\_SQL\_PATCH字段

<a name="table1295815488219"></a>
<table><thead align="left"><tr id="row49590483218"><th class="cellrowborder" valign="top" width="18.74187418741874%" id="mcps1.2.4.1.1"><p id="p1495913481323"><a name="p1495913481323"></a><a name="p1495913481323"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.77177717771777%" id="mcps1.2.4.1.2"><p id="p1795917488218"><a name="p1795917488218"></a><a name="p1795917488218"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63.48634863486349%" id="mcps1.2.4.1.3"><p id="p8959184814217"><a name="p8959184814217"></a><a name="p8959184814217"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row9959848827"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p13959174812211"><a name="p13959174812211"></a><a name="p13959174812211"></a>patch_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p595924812216"><a name="p595924812216"></a><a name="p595924812216"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p6959348726"><a name="p6959348726"></a><a name="p6959348726"></a>PATCH名称。</p>
</td>
</tr>
<tr id="row89591548126"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p11959174819219"><a name="p11959174819219"></a><a name="p11959174819219"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p29591248921"><a name="p29591248921"></a><a name="p29591248921"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p11959548722"><a name="p11959548722"></a><a name="p11959548722"></a>查询全局唯一ID。</p>
</td>
</tr>
<tr id="row57461749192117"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p15746249102119"><a name="p15746249102119"></a><a name="p15746249102119"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p13746104913219"><a name="p13746104913219"></a><a name="p13746104913219"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1574664962111"><a name="p1574664962111"></a><a name="p1574664962111"></a>PATCH的创建用户ID。</p>
</td>
</tr>
<tr id="row52941515106"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p82941551161014"><a name="p82941551161014"></a><a name="p82941551161014"></a>enable</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p729495161016"><a name="p729495161016"></a><a name="p729495161016"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p122941051161016"><a name="p122941051161016"></a><a name="p122941051161016"></a>PATCH是否生效。</p>
</td>
</tr>
<tr id="row11764201522310"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p976411542311"><a name="p976411542311"></a><a name="p976411542311"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p67644158236"><a name="p67644158236"></a><a name="p67644158236"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p8764171552316"><a name="p8764171552316"></a><a name="p8764171552316"></a>PATCH的状态（预留字段）。</p>
</td>
</tr>
<tr id="row718483141116"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p201845317117"><a name="p201845317117"></a><a name="p201845317117"></a>abort</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p201841931121115"><a name="p201841931121115"></a><a name="p201841931121115"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p9184173113116"><a name="p9184173113116"></a><a name="p9184173113116"></a>是否是AbortHint。</p>
</td>
</tr>
<tr id="row168971594114"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p12897165981120"><a name="p12897165981120"></a><a name="p12897165981120"></a>hint_string</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p28977592118"><a name="p28977592118"></a><a name="p28977592118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p11897195961119"><a name="p11897195961119"></a><a name="p11897195961119"></a>Hint文本。</p>
</td>
</tr>
<tr id="row13214142271213"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p12141622111213"><a name="p12141622111213"></a><a name="p12141622111213"></a>hint_node</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p17214102212120"><a name="p17214102212120"></a><a name="p17214102212120"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1214182231219"><a name="p1214182231219"></a><a name="p1214182231219"></a>Hint解析&amp;序列化的结果。</p>
</td>
</tr>
<tr id="row1643769111312"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p114381391136"><a name="p114381391136"></a><a name="p114381391136"></a>original_query</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p44381499139"><a name="p44381499139"></a><a name="p44381499139"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1643819917132"><a name="p1643819917132"></a><a name="p1643819917132"></a>原始语句（预留字段）。</p>
</td>
</tr>
<tr id="row197617438139"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p12976943201312"><a name="p12976943201312"></a><a name="p12976943201312"></a>patched_query</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p1497694317131"><a name="p1497694317131"></a><a name="p1497694317131"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p14976134317139"><a name="p14976134317139"></a><a name="p14976134317139"></a>PATCH之后的语句（预留字段）。</p>
</td>
</tr>
<tr id="row8661171961419"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p1566112191149"><a name="p1566112191149"></a><a name="p1566112191149"></a>original_query_tree</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p3662141911144"><a name="p3662141911144"></a><a name="p3662141911144"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p13662171912147"><a name="p13662171912147"></a><a name="p13662171912147"></a>原始语句的解析结果（预留字段）。</p>
</td>
</tr>
<tr id="row1964617331145"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p788653881418"><a name="p788653881418"></a><a name="p788653881418"></a>patched_query_tree</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p1364615332144"><a name="p1364615332144"></a><a name="p1364615332144"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p126467333140"><a name="p126467333140"></a><a name="p126467333140"></a>PATCH之后语句的解析结果（预留字段）。</p>
</td>
</tr>
<tr id="row4488153014154"><td class="cellrowborder" valign="top" width="18.74187418741874%" headers="mcps1.2.4.1.1 "><p id="p34885308158"><a name="p34885308158"></a><a name="p34885308158"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="17.77177717771777%" headers="mcps1.2.4.1.2 "><p id="p12488163020158"><a name="p12488163020158"></a><a name="p12488163020158"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63.48634863486349%" headers="mcps1.2.4.1.3 "><p id="p1148817303152"><a name="p1148817303152"></a><a name="p1148817303152"></a>PATCH的备注。</p>
</td>
</tr>
</tbody>
</table>

