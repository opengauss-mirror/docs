# GS\_CLIENT\_GLOBAL\_KEYS\_ARGS

GS\_CLIENT\_GLOBAL\_KEYS\_ARGS系统表记录密态等值特性中客户端加密主密钥相关元数据信息，每条记录对应客户端加密主密钥的一个键值对信息。

**表 1**  GS\_CLIENT\_GLOBAL\_KEYS\_ARGS字段

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row8273165910915"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"><a name="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a><a name="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"><a name="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a><a name="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"><a name="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a><a name="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a>行标识符（隐含字段）。</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>global_key_id</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>客户端加密主密钥（cmk）oid。</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>function_name</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p84761096534"><a name="p84761096534"></a><a name="p84761096534"></a>值为encryption。</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p10712105012310"><a name="p10712105012310"></a><a name="p10712105012310"></a>key</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p0883744141916"><a name="p0883744141916"></a><a name="p0883744141916"></a>客户端加密主密钥（cmk）的元数据信息对应的名称。</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>bytea</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p5442184019342"><a name="p5442184019342"></a><a name="p5442184019342"></a>客户端加密主密钥（cmk）的元数据信息名称的值。</p>
</td>
</tr>
</tbody>
</table>

