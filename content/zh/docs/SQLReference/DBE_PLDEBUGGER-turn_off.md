# DBE\_PLDEBUGGER.turn\_off

用于去掉turn\_on添加的调试标记，返回值表示成功或失败。可通过DBE\_PLDEBUGGER.local\_debug\_server\_info查找已经turn\_on的存储过程oid。

函数原型为：

```
DBE_PLDEBUGGER.turn_off(Oid)
RETURN boolean;
```

**表 1**  turn\_off 入参和返回值列表

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
<tr id="row1277121911516"><td class="cellrowborder" valign="top" width="27.652765276527653%" headers="mcps1.2.4.1.1 "><p id="p1777181917157"><a name="p1777181917157"></a><a name="p1777181917157"></a>turn_off</p>
</td>
<td class="cellrowborder" valign="top" width="38.693869386938694%" headers="mcps1.2.4.1.2 "><p id="p1677171914150"><a name="p1677171914150"></a><a name="p1677171914150"></a>OUT boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.65336533653365%" headers="mcps1.2.4.1.3 "><p id="p877191911517"><a name="p877191911517"></a><a name="p877191911517"></a>turn off是否成功。</p>
</td>
</tr>
</tbody>
</table>

