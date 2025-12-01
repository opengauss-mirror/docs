# DB4AI.PUBLISH\_SNAPSHOT<a name="ZH-CN_TOPIC_0000001149551354"></a>

PUBLISH\_SNAPSHOT是DB4AI特性用于发布快照的接口函数。通过语法PUBLISH SNAPSHOT调用。

**表 1**  DB4AI.PUBLISH\_SNAPSHOT入参和返回值列表

<a name="table1293823663517"></a>
<table><thead align="left"><tr id="row693863617358"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p993823611357"><a name="p993823611357"></a><a name="p993823611357"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p15938173613350"><a name="p15938173613350"></a><a name="p15938173613350"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1993893633517"><a name="p1993893633517"></a><a name="p1993893633517"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row79381836203510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p147301565368"><a name="p147301565368"></a><a name="p147301565368"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p159381336103512"><a name="p159381336103512"></a><a name="p159381336103512"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p169381236173517"><a name="p169381236173517"></a><a name="p169381236173517"></a>快照存储的模式名字，默认值是当前用户或者PUBLIC</p>
</td>
</tr>
<tr id="row193883614359"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p281718943610"><a name="p281718943610"></a><a name="p281718943610"></a>i_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9938936193511"><a name="p9938936193511"></a><a name="p9938936193511"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17938133613519"><a name="p17938133613519"></a><a name="p17938133613519"></a>快照名称</p>
</td>
</tr>
<tr id="row93018130364"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11594419103613"><a name="p11594419103613"></a><a name="p11594419103613"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p193071316368"><a name="p193071316368"></a><a name="p193071316368"></a>OUT db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p830113113617"><a name="p830113113617"></a><a name="p830113113617"></a>结果</p>
</td>
</tr>
</tbody>
</table>
