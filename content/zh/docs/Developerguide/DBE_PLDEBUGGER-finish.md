# DBE\_PLDEBUGGER.finish<a name="ZH-CN_TOPIC_0000001152478332"></a>

执行存储过程中当前的SQL直到下一个断点触发或执行到上层栈的下一行。

**表 1**  finish入参和返回值列表

<a name="table14536172012446"></a>
<table><thead align="left"><tr id="row1153620205446"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row82533113275"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p15563121373311"><a name="p15563121373311"></a><a name="p15563121373311"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2563201363316"><a name="p2563201363316"></a><a name="p2563201363316"></a>OUT oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1563813143311"><a name="p1563813143311"></a><a name="p1563813143311"></a>函数id。</p>
</td>
</tr>
<tr id="row2025310117276"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p166021312267"><a name="p166021312267"></a><a name="p166021312267"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1560213132616"><a name="p1560213132616"></a><a name="p1560213132616"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p760213102612"><a name="p760213102612"></a><a name="p760213102612"></a>函数名。</p>
</td>
</tr>
<tr id="row125311172712"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p281514567234"><a name="p281514567234"></a><a name="p281514567234"></a>lineno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p158158560231"><a name="p158158560231"></a><a name="p158158560231"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p198151956162315"><a name="p198151956162315"></a><a name="p198151956162315"></a>当前调试运行的下一行行号。</p>
</td>
</tr>
<tr id="row12521411142718"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p78551349162514"><a name="p78551349162514"></a><a name="p78551349162514"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p9855144913254"><a name="p9855144913254"></a><a name="p9855144913254"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p385594912254"><a name="p385594912254"></a><a name="p385594912254"></a>当前调试的下一行函数源码。</p>
</td>
</tr>
</tbody>
</table>
