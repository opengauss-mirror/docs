# GS\_COLUMN\_KEYS

GS\_COLUMN\_KEYS系统表记录密态等值特性中列加密密钥相关信息，每条记录对应一个列加密密钥。

**表 1**  GS\_COLUMN\_KEYS字段

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.12281228122812%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="26.72267226722672%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row185471017141017"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"><a name="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a><a name="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"><a name="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a><a name="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"><a name="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a><a name="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a>行标识符（隐含字段）。</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>column_key_name</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>列加密密钥（cek）名称。</p>
</td>
</tr>
<tr id="row988420582379"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p2060715083816"><a name="p2060715083816"></a><a name="p2060715083816"></a>column_key_distributed_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p7884458103720"><a name="p7884458103720"></a><a name="p7884458103720"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p988495823710"><a name="p988495823710"></a><a name="p988495823710"></a>根据加密密钥（cek）全称域名hash值得到的id。</p>
</td>
</tr>
<tr id="row8695719203810"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p16647142015383"><a name="p16647142015383"></a><a name="p16647142015383"></a>global_key_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p116969196381"><a name="p116969196381"></a><a name="p116969196381"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p1369611973814"><a name="p1369611973814"></a><a name="p1369611973814"></a>外键。客户端加密主密钥（cmk）的oid。</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>key_namespace</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p84761096534"><a name="p84761096534"></a><a name="p84761096534"></a>包含此列加密密钥（cek）的命名空间oid。</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p10712105012310"><a name="p10712105012310"></a><a name="p10712105012310"></a>key_owner</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p0883744141916"><a name="p0883744141916"></a><a name="p0883744141916"></a>列加密密钥（cek）的所有者。</p>
</td>
</tr>
<tr id="row3901113963819"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p890120391386"><a name="p890120391386"></a><a name="p890120391386"></a>create_date</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p17901153910389"><a name="p17901153910389"></a><a name="p17901153910389"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p5901539103813"><a name="p5901539103813"></a><a name="p5901539103813"></a>创建列加密密钥的时间。</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.12281228122812%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>key_acl</p>
</td>
<td class="cellrowborder" valign="top" width="26.72267226722672%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>aclitem[]</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>创建该列加密密钥时所拥有的访问权限。</p>
</td>
</tr>
</tbody>
</table>
