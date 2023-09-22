# PG\_SET

PG\_SET系统表存储SET数据类型定义的元数据。

**表 1**  PG\_SET字段

<a name="table41631981237"></a>
<table><thead align="left"><tr id="row716314811310"><th class="cellrowborder" valign="top" width="18.38183818381838%" id="mcps1.2.4.1.1"><p id="p111631485315"><a name="p111631485315"></a><a name="p111631485315"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="15.45154515451545%" id="mcps1.2.4.1.2"><p id="p121631781034"><a name="p121631781034"></a><a name="p121631781034"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="66.16661666166617%" id="mcps1.2.4.1.3"><p id="p10163280312"><a name="p10163280312"></a><a name="p10163280312"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row4163686312"><td class="cellrowborder" valign="top" width="18.38183818381838%" headers="mcps1.2.4.1.1 "><p id="p127561548935"><a name="p127561548935"></a><a name="p127561548935"></a>settypid</p>
</td>
<td class="cellrowborder" valign="top" width="15.45154515451545%" headers="mcps1.2.4.1.2 "><p id="p19163108535"><a name="p19163108535"></a><a name="p19163108535"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.16661666166617%" headers="mcps1.2.4.1.3 "><p id="p13163488318"><a name="p13163488318"></a><a name="p13163488318"></a>SET数据类型的OID。</p>
</td>
</tr>
<tr id="row7163188732"><td class="cellrowborder" valign="top" width="18.38183818381838%" headers="mcps1.2.4.1.1 "><p id="p639619522317"><a name="p639619522317"></a><a name="p639619522317"></a>setnum</p>
</td>
<td class="cellrowborder" valign="top" width="15.45154515451545%" headers="mcps1.2.4.1.2 "><p id="p93862121949"><a name="p93862121949"></a><a name="p93862121949"></a>int1</p>
</td>
<td class="cellrowborder" valign="top" width="66.16661666166617%" headers="mcps1.2.4.1.3 "><p id="p1016368834"><a name="p1016368834"></a><a name="p1016368834"></a>SET数据类型的成员数量，最大64个成员。</p>
</td>
</tr>
<tr id="row12163281135"><td class="cellrowborder" valign="top" width="18.38183818381838%" headers="mcps1.2.4.1.1 "><p id="p159241055631"><a name="p159241055631"></a><a name="p159241055631"></a>setsortorder</p>
</td>
<td class="cellrowborder" valign="top" width="15.45154515451545%" headers="mcps1.2.4.1.2 "><p id="p12234121113416"><a name="p12234121113416"></a><a name="p12234121113416"></a>int1</p>
</td>
<td class="cellrowborder" valign="top" width="66.16661666166617%" headers="mcps1.2.4.1.3 "><p id="p4163118931"><a name="p4163118931"></a><a name="p4163118931"></a>SET数据类型定义时成员的排序位置，从0开始编号。</p>
</td>
</tr>
<tr id="row4163481035"><td class="cellrowborder" valign="top" width="18.38183818381838%" headers="mcps1.2.4.1.1 "><p id="p949015591038"><a name="p949015591038"></a><a name="p949015591038"></a>setlabel</p>
</td>
<td class="cellrowborder" valign="top" width="15.45154515451545%" headers="mcps1.2.4.1.2 "><p id="p10163783319"><a name="p10163783319"></a><a name="p10163783319"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="66.16661666166617%" headers="mcps1.2.4.1.3 "><p id="p161641281531"><a name="p161641281531"></a><a name="p161641281531"></a>SET数据类型的成员名称。</p>
</td>
</tr>
</tbody>
</table>

