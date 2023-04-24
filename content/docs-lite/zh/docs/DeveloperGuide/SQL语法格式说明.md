# SQL语法格式说明<a name="ZH-CN_TOPIC_0000001487936854"></a>

**表 1**  SQL语法格式说明

<a name="table15716319173015"></a>
<table><thead align="left"><tr id="row16717101920303"><th class="cellrowborder" valign="top" width="21.26%" id="mcps1.2.3.1.1"><p id="p107176196307"><a name="p107176196307"></a><a name="p107176196307"></a>格式</p>
</th>
<th class="cellrowborder" valign="top" width="78.74%" id="mcps1.2.3.1.2"><p id="p971721993011"><a name="p971721993011"></a><a name="p971721993011"></a>意义</p>
</th>
</tr>
</thead>
<tbody><tr id="row5251946193019"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p72510463307"><a name="p72510463307"></a><a name="p72510463307"></a>[ ]</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p1525846193010"><a name="p1525846193010"></a><a name="p1525846193010"></a>表示用“[ ]”括起来的部分是可选的。</p>
</td>
</tr>
<tr id="row1371720190300"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p12717319133017"><a name="p12717319133017"></a><a name="p12717319133017"></a>...</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p1371713199308"><a name="p1371713199308"></a><a name="p1371713199308"></a>表示前面的元素可重复出现。</p>
</td>
</tr>
<tr id="row19717161983015"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p871717196301"><a name="p871717196301"></a><a name="p871717196301"></a>[ x | y | ... ]</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p1371751917302"><a name="p1371751917302"></a><a name="p1371751917302"></a>表示从两个或多个选项中选取一个或者不选。</p>
</td>
</tr>
<tr id="row3717181912308"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p9717201911309"><a name="p9717201911309"></a><a name="p9717201911309"></a>{ x | y | ... }</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p1717121933018"><a name="p1717121933018"></a><a name="p1717121933018"></a>表示从两个或多个选项中选取一个。</p>
</td>
</tr>
<tr id="row197177195302"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p1671731943019"><a name="p1671731943019"></a><a name="p1671731943019"></a>[x | y | ... ] [ ... ]</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p12717101911306"><a name="p12717101911306"></a><a name="p12717101911306"></a>表示可选多个参数或者不选，如果选择多个参数，则参数之间用空格分隔。</p>
</td>
</tr>
<tr id="row7381044173015"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p193811144123015"><a name="p193811144123015"></a><a name="p193811144123015"></a>[ x | y | ... ] [ ,... ]</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p20382194463019"><a name="p20382194463019"></a><a name="p20382194463019"></a>表示可选多个参数或者不选，如果选择多个参数，则参数之间用逗号分隔。</p>
</td>
</tr>
<tr id="row1439113603011"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p134394362302"><a name="p134394362302"></a><a name="p134394362302"></a>{ x | y | ... } [ ... ]</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p134391836143010"><a name="p134391836143010"></a><a name="p134391836143010"></a>表示可选多个参数，至少选一个，如果选择多个参数，则参数之间以空格分隔。</p>
</td>
</tr>
<tr id="row1479242123010"><td class="cellrowborder" valign="top" width="21.26%" headers="mcps1.2.3.1.1 "><p id="p279144210302"><a name="p279144210302"></a><a name="p279144210302"></a>{ x | y | ... } [ ,... ]</p>
</td>
<td class="cellrowborder" valign="top" width="78.74%" headers="mcps1.2.3.1.2 "><p id="p138074216308"><a name="p138074216308"></a><a name="p138074216308"></a>表示可选多个参数，至少选一个，如果选择多个参数，则参数之间用逗号分隔。</p>
</td>
</tr>
</tbody>
</table>