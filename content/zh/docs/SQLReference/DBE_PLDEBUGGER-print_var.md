# DBE\_PLDEBUGGER.print\_var<a name="ZH-CN_TOPIC_0000001116086114"></a>

debug端调试过程中，调用print\_var，打印当前存储过程内变量中指定的变量名及其取值。该函数入参frameno表示查询遍历的栈层数，支持不加入该参数调用，缺省为查看最上层栈变量。

**表 1**  print\_var入参和返回值列表

<a name="table8940114934019"></a>
<table><thead align="left"><tr id="row1294094911409"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row988215715717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7589154265713"><a name="p7589154265713"></a><a name="p7589154265713"></a>var_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1388347165712"><a name="p1388347165712"></a><a name="p1388347165712"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1088367115715"><a name="p1088367115715"></a><a name="p1088367115715"></a>变量。</p>
</td>
</tr>
<tr id="row167393942113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p473913932115"><a name="p473913932115"></a><a name="p473913932115"></a>frameno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p373917982114"><a name="p373917982114"></a><a name="p373917982114"></a>IN integer（可选）</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p373916992116"><a name="p373916992116"></a><a name="p373916992116"></a>指定的栈层数，缺省为最顶层。</p>
</td>
</tr>
<tr id="row19940249184016"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p39401949114016"><a name="p39401949114016"></a><a name="p39401949114016"></a>varname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p894044912405"><a name="p894044912405"></a><a name="p894044912405"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p894094914016"><a name="p894094914016"></a><a name="p894094914016"></a>变量名。</p>
</td>
</tr>
<tr id="row29401490408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p694014964011"><a name="p694014964011"></a><a name="p694014964011"></a>vartype</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p49401449144013"><a name="p49401449144013"></a><a name="p49401449144013"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p294084914012"><a name="p294084914012"></a><a name="p294084914012"></a>变量类型。</p>
</td>
</tr>
<tr id="row694020497402"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5940144910409"><a name="p5940144910409"></a><a name="p5940144910409"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1294019492408"><a name="p1294019492408"></a><a name="p1294019492408"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11941144910409"><a name="p11941144910409"></a><a name="p11941144910409"></a>变量值。</p>
</td>
</tr>
<tr id="row11941249204011"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2941134984017"><a name="p2941134984017"></a><a name="p2941134984017"></a>package_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2941154911400"><a name="p2941154911400"></a><a name="p2941154911400"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17941049134010"><a name="p17941049134010"></a><a name="p17941049134010"></a>变量对应的package名，预留使用，当前均为空。</p>
</td>
</tr>
<tr id="row1740345632214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p134041568229"><a name="p134041568229"></a><a name="p134041568229"></a>isconst</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5404656132216"><a name="p5404656132216"></a><a name="p5404656132216"></a>OUT boolean</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2040465622217"><a name="p2040465622217"></a><a name="p2040465622217"></a>是否为常量。</p>
</td>
</tr>
</tbody>
</table>

