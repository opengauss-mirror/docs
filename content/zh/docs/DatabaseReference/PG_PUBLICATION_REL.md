# PG\_PUBLICATION\_REL<a name="ZH-CN_TOPIC_0000001197430692"></a>

系统表PG\_PUBLICATION\_REL包含当前数据库中的表和publication之间的映射，这是一种多对多映射。

**表 1**  PG\_PUBLICATION\_REL字段

<a name="table14568010193012"></a>
<table><thead align="left"><tr id="row17568111093012"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p16568810143019"><a name="p16568810143019"></a><a name="p16568810143019"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.58%" id="mcps1.2.5.1.2"><p id="p1756915108308"><a name="p1756915108308"></a><a name="p1756915108308"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="11.28%" id="mcps1.2.5.1.3"><p id="p17569410133019"><a name="p17569410133019"></a><a name="p17569410133019"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="51.13999999999999%" id="mcps1.2.5.1.4"><p id="p145694109300"><a name="p145694109300"></a><a name="p145694109300"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row78611571538"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.58%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.3 ">&nbsp;</td>
<td class="cellrowborder" valign="top" width="51.13999999999999%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p0334429173619"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p0334429173619"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p0334429173619"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
    <tr id="row3569181053017"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p3569191063018"><a name="p3569191063018"></a><a name="p3569191063018"></a>prpubid</p>
</td>
<td class="cellrowborder" valign="top" width="12.58%" headers="mcps1.2.5.1.2 "><p id="p175691710143010"><a name="p175691710143010"></a><a name="p175691710143010"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.3 "><p id="p205691410163012"><a name="p205691410163012"></a><a name="p205691410163012"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="51.13999999999999%" headers="mcps1.2.5.1.4 "><p id="p956961083015"><a name="p956961083015"></a><a name="p956961083015"></a>对publication的引用。</p>
</td>
</tr>
<tr id="row656914102306"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p256910104303"><a name="p256910104303"></a><a name="p256910104303"></a>prrelid</p>
</td>
<td class="cellrowborder" valign="top" width="12.58%" headers="mcps1.2.5.1.2 "><p id="p1156921017309"><a name="p1156921017309"></a><a name="p1156921017309"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.3 "><p id="p195691108302"><a name="p195691108302"></a><a name="p195691108302"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="51.13999999999999%" headers="mcps1.2.5.1.4 "><p id="p205701910163015"><a name="p205701910163015"></a><a name="p205701910163015"></a>对表的引用。</p>
</td>
</tr>
</tbody>
</table>


