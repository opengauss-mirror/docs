# DBE\_PLDEBUGGER.info\_code<a name="ZH-CN_TOPIC_0000001162605975"></a>

debug端调试过程中，调用info\_code，查看指定存储过程的源语句和各行对应的行号，行号从函数体开始，函数头部分行号为空。

**表 1**  info\_code入参和返回值列表

<a name="table8940114934019"></a>
<table><thead align="left"><tr id="row1294094911409"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p4771101912150"><a name="p4771101912150"></a><a name="p4771101912150"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p18771111913151"><a name="p18771111913151"></a><a name="p18771111913151"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p5771121911514"><a name="p5771121911514"></a><a name="p5771121911514"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row988215715717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1550610482005"><a name="p1550610482005"></a><a name="p1550610482005"></a>funcoid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1388347165712"><a name="p1388347165712"></a><a name="p1388347165712"></a>IN <span id="ph208431342184511"><a name="ph208431342184511"></a><a name="ph208431342184511"></a>oid</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1088367115715"><a name="p1088367115715"></a><a name="p1088367115715"></a>函数<span id="ph91417369456"><a name="ph91417369456"></a><a name="ph91417369456"></a>ID。</span></p>
</td>
</tr>
<tr id="row19940249184016"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1649115594012"><a name="p1649115594012"></a><a name="p1649115594012"></a>lineno</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p894044912405"><a name="p894044912405"></a><a name="p894044912405"></a>OUT integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p894094914016"><a name="p894094914016"></a><a name="p894094914016"></a>行号。</p>
</td>
</tr>
<tr id="row29401490408"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p694014964011"><a name="p694014964011"></a><a name="p694014964011"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p49401449144013"><a name="p49401449144013"></a><a name="p49401449144013"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p294084914012"><a name="p294084914012"></a><a name="p294084914012"></a>源语句。</p>
</td>
</tr>
<tr id="row125254589283"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p185253584287"><a name="p185253584287"></a><a name="p185253584287"></a><span id="ph1313721882915"><a name="ph1313721882915"></a><a name="ph1313721882915"></a>canbreak</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p145256585288"><a name="p145256585288"></a><a name="p145256585288"></a><span id="ph17442122182912"><a name="ph17442122182912"></a><a name="ph17442122182912"></a>OUT bool</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p205251158122816"><a name="p205251158122816"></a><a name="p205251158122816"></a><span id="ph23415284295"><a name="ph23415284295"></a><a name="ph23415284295"></a>当前行是否支持断点。</span></p>
</td>
</tr>
</tbody>
</table>
