# GS\_DB\_PRIVILEGE<a name="EN-US_TOPIC_0000001195704008"></a>

**GS\_DB\_PRIVILEGE**  records the granting of ANY permissions. Each record corresponds to a piece of authorization information.

**Table  1**  GS\_DB\_PRIVILEGE columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1850764745915"><a name="p1850764745915"></a><a name="p1850764745915"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p09253402276"><a name="p09253402276"></a><a name="p09253402276"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p10300132843314"><a name="p10300132843314"></a><a name="p10300132843314"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1175774414260"><a name="p1175774414260"></a><a name="p1175774414260"></a>roleid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p20923134017277"><a name="p20923134017277"></a><a name="p20923134017277"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p99221740202720"><a name="p99221740202720"></a><a name="p99221740202720"></a>User ID.</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1698345216263"><a name="p1698345216263"></a><a name="p1698345216263"></a>privilege_type</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p12921140112719"><a name="p12921140112719"></a><a name="p12921140112719"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p79211402278"><a name="p79211402278"></a><a name="p79211402278"></a>ANY permission of a user. For details about the value, see <a href="../SQLReference/grant.md#table1360121832117">Table 1</a>.</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>admin_option</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p7920144002716"><a name="p7920144002716"></a><a name="p7920144002716"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p1873817495401"><a name="p1873817495401"></a><a name="p1873817495401"></a>Whether the ANY permission recorded in the <strong id="b1249211743918"><a name="b1249211743918"></a><a name="b1249211743918"></a>privilege_type</strong> column can be re-granted.</p>
<a name="ul949834121518"></a><a name="ul949834121518"></a><ul id="ul949834121518"><li><strong id="b1899781915397"><a name="b1899781915397"></a><a name="b1899781915397"></a>t</strong>: yes.</li><li><strong id="b7146421153919"><a name="b7146421153919"></a><a name="b7146421153919"></a>f</strong>: no.</li></ul>
</td>
</tr>
</tbody>
</table>

