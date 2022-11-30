# DB4AI.MANAGE\_SNAPSHOT\_INTERNAL<a name="ZH-CN_TOPIC_0000001149391560"></a>

MANAGE\_SNAPSHOT\_INTERNAL是DB4AI.PUBLISH\_SNAPSHOT和DB4AI.ARCHIVE\_SNAPSHOT函数的内置执行函数。函数存在信息校验，无法直接调用。

**表 1**  DB4AI.MANAGE\_SNAPSHOT\_INTERNAL入参和返回值列表

<a name="table172076279395"></a>
<table><thead align="left"><tr id="row320752716393"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p993823611357"><a name="p993823611357"></a><a name="p993823611357"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p14207172753914"><a name="p14207172753914"></a><a name="p14207172753914"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p820772712398"><a name="p820772712398"></a><a name="p820772712398"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row12077277394"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p17721917401"><a name="p17721917401"></a><a name="p17721917401"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0208172733914"><a name="p0208172733914"></a><a name="p0208172733914"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p42081327183911"><a name="p42081327183911"></a><a name="p42081327183911"></a>快照存储的模式名字</p>
</td>
</tr>
<tr id="row1020832718398"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p92411847401"><a name="p92411847401"></a><a name="p92411847401"></a>i_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1920822719390"><a name="p1920822719390"></a><a name="p1920822719390"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4208127173914"><a name="p4208127173914"></a><a name="p4208127173914"></a>快照名称</p>
</td>
</tr>
<tr id="row42081227123915"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1511910714011"><a name="p1511910714011"></a><a name="p1511910714011"></a>publish</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5208132773920"><a name="p5208132773920"></a><a name="p5208132773920"></a>IN BOOLEN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p62081027103914"><a name="p62081027103914"></a><a name="p62081027103914"></a>是否是发布状态</p>
</td>
</tr>
<tr id="row172081827173913"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1920822710392"><a name="p1920822710392"></a><a name="p1920822710392"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p16208142715391"><a name="p16208142715391"></a><a name="p16208142715391"></a>OUT  db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15208192715391"><a name="p15208192715391"></a><a name="p15208192715391"></a>结果</p>
</td>
</tr>
</tbody>
</table>
