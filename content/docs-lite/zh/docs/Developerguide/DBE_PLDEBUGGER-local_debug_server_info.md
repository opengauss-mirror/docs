# DBE\_PLDEBUGGER.local\_debug\_server\_info<a name="ZH-CN_TOPIC_0000001148137961"></a>

用于查找当前连接中已经turn\_on的存储过程oid。便于用户确认在调试哪些存储过程，需要通过funcoid和pg\_proc配合使用。

**表 1**  local\_debug\_server\_info 返回值列表

<a name="table7507113224615"></a>
<table><thead align="left"><tr id="row12507163244618"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row750715321464"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7507432164611"><a name="p7507432164611"></a><a name="p7507432164611"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14507432124611"><a name="p14507432124611"></a><a name="p14507432124611"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5507133218467"><a name="p5507133218467"></a><a name="p5507133218467"></a>节点名称</p>
</td>
</tr>
<tr id="row1050717322463"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p55079325462"><a name="p55079325462"></a><a name="p55079325462"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p75081232184616"><a name="p75081232184616"></a><a name="p75081232184616"></a>OUT bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1050813244613"><a name="p1050813244613"></a><a name="p1050813244613"></a>端口号</p>
</td>
</tr>
<tr id="row4508113218465"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p950817324463"><a name="p950817324463"></a><a name="p950817324463"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p105081325460"><a name="p105081325460"></a><a name="p105081325460"></a>OUT oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p155081232124611"><a name="p155081232124611"></a><a name="p155081232124611"></a>存储过程oid</p>
</td>
</tr>
</tbody>
</table>

