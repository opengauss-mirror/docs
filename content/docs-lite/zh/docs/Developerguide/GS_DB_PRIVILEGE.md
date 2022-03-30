# GS\_DB\_PRIVILEGE<a name="ZH-CN_TOPIC_0000001195704008"></a>

GS\_DB\_PRIVILEGE系统表记录ANY权限的授予情况，每条记录对应一条授权信息。

**表 1**  GS\_DB\_PRIVILEGE字段

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1850764745915"><a name="p1850764745915"></a><a name="p1850764745915"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p09253402276"><a name="p09253402276"></a><a name="p09253402276"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p10300132843314"><a name="p10300132843314"></a><a name="p10300132843314"></a>行标识符（隐含字段，必须明确选择）。</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1175774414260"><a name="p1175774414260"></a><a name="p1175774414260"></a>roleid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p20923134017277"><a name="p20923134017277"></a><a name="p20923134017277"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p99221740202720"><a name="p99221740202720"></a><a name="p99221740202720"></a>用户标识。</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1698345216263"><a name="p1698345216263"></a><a name="p1698345216263"></a>privilege_type</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p12921140112719"><a name="p12921140112719"></a><a name="p12921140112719"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p79211402278"><a name="p79211402278"></a><a name="p79211402278"></a>用户拥有的ANY权限，取值参考<a href="GRANT.md#table1360121832117">表1</a>。</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>admin_option</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p7920144002716"><a name="p7920144002716"></a><a name="p7920144002716"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p1873817495401"><a name="p1873817495401"></a><a name="p1873817495401"></a>是否具有privilege_type列记录的ANY权限的再授权权限。</p>
<a name="ul949834121518"></a><a name="ul949834121518"></a><ul id="ul949834121518"><li>t：表示具有。</li><li>f：表示不具有。</li></ul>
</td>
</tr>
</tbody>
</table>

