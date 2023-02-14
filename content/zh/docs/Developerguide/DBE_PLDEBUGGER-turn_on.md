# DBE\_PLDEBUGGER.turn\_on

该函数用于标记某一存储过程为可调试，执行turn\_on后server端可以执行该存储过程来进行调试。需要用户根据系统表PG\_PROC手动获取存储过程oid，传入函数中。turn\_on后本session内执行该存储过程会停在第一条sql前等待debug端的调试操作。该设置会在session断连后默认被清理掉。目前不支持对启用自治事务的存储过程/函数进行调试。

函数原型为：

```
DBE_PLDEBUGGER.turn_on(Oid)
RETURN Record;
```

**表 1**  turn\_on 入参和返回值列表

<a name="table677041961510"></a>
<table><thead align="left"><tr id="row677141951520"><th class="cellrowborder" valign="top" width="27.652765276527653%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="38.693869386938694%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.65336533653365%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row13414141552612"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p16415415132612"><a name="p16415415132612"></a><a name="p16415415132612"></a>func_oid</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p174151715112614"><a name="p174151715112614"></a><a name="p174151715112614"></a>IN oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p174151615152616"><a name="p174151615152616"></a><a name="p174151615152616"></a>函数oid。</p>
</td>
</tr>
<tr id="row1277121911516"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p1777181917157"><a name="p1777181917157"></a><a name="p1777181917157"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p1677171914150"><a name="p1677171914150"></a><a name="p1677171914150"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p877191911517"><a name="p877191911517"></a><a name="p877191911517"></a>节点名称。</p>
</td>
</tr>
<tr id="row77715198156"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p6771171918154"><a name="p6771171918154"></a><a name="p6771171918154"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p1771819141512"><a name="p1771819141512"></a><a name="p1771819141512"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p1177171981510"><a name="p1177171981510"></a><a name="p1177171981510"></a>连接端口号。</p>
</td>
</tr>
</tbody>
</table>
