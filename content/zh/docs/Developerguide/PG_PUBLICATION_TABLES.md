# PG\_PUBLICATION\_TABLES<a name="ZH-CN_TOPIC_0000001242232345"></a>

视图PG\_PUBLICATION\_TABLES提供publication与其所发布的表之间的映射信息。和底层的系统表pg\_publication\_rel不同，这个视图展开了定义为FOR ALL TABLES的publication，这样对这类publication来说，每一个合格的表都有一行。

**表 1**  PG\_PUBLICATION\_TABLES字段

<a name="table6896199462"></a>
<table><thead align="left"><tr id="row1190151924612"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p49081915463"><a name="p49081915463"></a><a name="p49081915463"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p15907192468"><a name="p15907192468"></a><a name="p15907192468"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p69111194465"><a name="p69111194465"></a><a name="p69111194465"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row13918196469"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p29161912468"><a name="p29161912468"></a><a name="p29161912468"></a>pubname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1791161924619"><a name="p1791161924619"></a><a name="p1791161924619"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1091181916468"><a name="p1091181916468"></a><a name="p1091181916468"></a>发布的名称。</p>
</td>
</tr>
<tr id="row991111934613"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p391151914468"><a name="p391151914468"></a><a name="p391151914468"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p129181974616"><a name="p129181974616"></a><a name="p129181974616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p892121914617"><a name="p892121914617"></a><a name="p892121914617"></a>包含表的模式名称。</p>
</td>
</tr>
<tr id="row179213192469"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p109219190466"><a name="p109219190466"></a><a name="p109219190466"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1392719114618"><a name="p1392719114618"></a><a name="p1392719114618"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8921019174616"><a name="p8921019174616"></a><a name="p8921019174616"></a>表的名称。</p>
</td>
</tr>
</tbody>
</table>
