# GS\_ENCRYPTED\_COLUMNS

GS\_ENCRYPTED\_COLUMNS系统表记录密态等值特性中表的加密列相关信息，每条记录对应一条加密列信息。

**表 1**  GS\_ENCRYPTED\_COLUMNS字段

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="22.182218221822183%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.73127312731273%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.0865086508651%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row39301831121013"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"><a name="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a><a name="zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"><a name="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a><a name="zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"><a name="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a><a name="zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a>行标识符（隐含字段）。</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p1850764745915"><a name="p1850764745915"></a><a name="p1850764745915"></a>rel_id</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p09253402276"><a name="p09253402276"></a><a name="p09253402276"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p792404062710"><a name="p792404062710"></a><a name="p792404062710"></a>表的OID。</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p1175774414260"><a name="p1175774414260"></a><a name="p1175774414260"></a>column_name</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p20923134017277"><a name="p20923134017277"></a><a name="p20923134017277"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p99221740202720"><a name="p99221740202720"></a><a name="p99221740202720"></a>加密列的名称。</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p1698345216263"><a name="p1698345216263"></a><a name="p1698345216263"></a>column_key_id</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p12921140112719"><a name="p12921140112719"></a><a name="p12921140112719"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p79211402278"><a name="p79211402278"></a><a name="p79211402278"></a>外键，列加密密钥的OID。</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>encryption_type</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p7920144002716"><a name="p7920144002716"></a><a name="p7920144002716"></a>int1</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p7898134019272"><a name="p7898134019272"></a><a name="p7898134019272"></a>加密类型，取值为2（DETERMINISTIC）或者1（RANDOMIZED）。</p>
</td>
</tr>
<tr id="row16347113520"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p78819127356"><a name="p78819127356"></a><a name="p78819127356"></a>data_type_original_oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p15635713355"><a name="p15635713355"></a><a name="p15635713355"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p76347103519"><a name="p76347103519"></a><a name="p76347103519"></a>加密列的原始数据类型id，参考系统表<a href="PG_TYPE.md">PG_TYPE</a>中的oid。</p>
</td>
</tr>
<tr id="row149191821183516"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p1550316317400"><a name="p1550316317400"></a><a name="p1550316317400"></a>data_type_original_mod</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p15919421203519"><a name="p15919421203519"></a><a name="p15919421203519"></a>int4</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p119191921193514"><a name="p119191921193514"></a><a name="p119191921193514"></a>加密列的原始数据类型修饰符，参考系统表<a href="PG_ATTRIBUTE.md">PG_ATTRIBUTE</a>中的atttypmod。其值对那些不需要的类型data_type_original_mod通常为-1。</p>
</td>
</tr>
<tr id="row18615103614409"><td class="cellrowborder" valign="top" width="22.182218221822183%" headers="mcps1.2.4.1.1 "><p id="p1799441144010"><a name="p1799441144010"></a><a name="p1799441144010"></a>create_date</p>
</td>
<td class="cellrowborder" valign="top" width="12.73127312731273%" headers="mcps1.2.4.1.2 "><p id="p1847114713405"><a name="p1847114713405"></a><a name="p1847114713405"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="65.0865086508651%" headers="mcps1.2.4.1.3 "><p id="p1461683624011"><a name="p1461683624011"></a><a name="p1461683624011"></a>创建加密列的时间。</p>
</td>
</tr>
</tbody>
</table>

