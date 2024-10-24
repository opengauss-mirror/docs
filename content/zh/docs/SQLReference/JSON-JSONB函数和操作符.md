# JSON/JSONB函数和操作符

JSON/JSONB数据类型参考[JSON/JSONB类型](JSON-JSONB类型.md)。

**表 1**  JSON/JSONB通用操作符

<a name="table152706135103"></a>
<table><thead align="left"><tr id="row6819513111011"><th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.1"><p id="p1181971318103"><a name="p1181971318103"></a><a name="p1181971318103"></a>操作符</p>
</th>
<th class="cellrowborder" valign="top" width="14.581632653061222%" id="mcps1.2.8.1.2"><p id="p481971341013"><a name="p481971341013"></a><a name="p481971341013"></a>左操作数类型</p>
</th>
<th class="cellrowborder" valign="top" width="13.989795918367346%" id="mcps1.2.8.1.3"><p id="p7820413151012"><a name="p7820413151012"></a><a name="p7820413151012"></a>右操作数类型</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.4"><p id="p14820171331017"><a name="p14820171331017"></a><a name="p14820171331017"></a>返回类型</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.5"><p id="p8820191310104"><a name="p8820191310104"></a><a name="p8820191310104"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.6"><p id="p14820171318104"><a name="p14820171318104"></a><a name="p14820171318104"></a>例子</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.7"><p id="p982018136103"><a name="p982018136103"></a><a name="p982018136103"></a>例子结果</p>
</th>
</tr>
</thead>
<tbody><tr id="row12820413111013"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p78209136106"><a name="p78209136106"></a><a name="p78209136106"></a>-&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="14.581632653061222%" headers="mcps1.2.8.1.2 "><p id="p3820191391019"><a name="p3820191391019"></a><a name="p3820191391019"></a>Array-json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="13.989795918367346%" headers="mcps1.2.8.1.3 "><p id="p58201613141017"><a name="p58201613141017"></a><a name="p58201613141017"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.4 "><p id="p882071321020"><a name="p882071321020"></a><a name="p882071321020"></a>json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p178201913141017"><a name="p178201913141017"></a><a name="p178201913141017"></a>获得array-json元素。下标不存在返回空。</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p78205137105"><a name="p78205137105"></a><a name="p78205137105"></a>'[{"a":"foo"},{"b":"bar"},{"c":"baz"}]'::json-&gt;2</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p382041319105"><a name="p382041319105"></a><a name="p382041319105"></a>{"c":"baz"}</p>
</td>
</tr>
<tr id="row98201113171020"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p582017139108"><a name="p582017139108"></a><a name="p582017139108"></a>-&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="14.581632653061222%" headers="mcps1.2.8.1.2 "><p id="p13820813101019"><a name="p13820813101019"></a><a name="p13820813101019"></a>object-json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="13.989795918367346%" headers="mcps1.2.8.1.3 "><p id="p9820181315106"><a name="p9820181315106"></a><a name="p9820181315106"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.4 "><p id="p082021314102"><a name="p082021314102"></a><a name="p082021314102"></a>json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p68202013131016"><a name="p68202013131016"></a><a name="p68202013131016"></a>通过键获得值。不存在则返回空。</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p13821213131018"><a name="p13821213131018"></a><a name="p13821213131018"></a>'{"a": {"b":"foo"}}'::json-&gt;'a'</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p5821141318103"><a name="p5821141318103"></a><a name="p5821141318103"></a>{"b":"foo"}</p>
</td>
</tr>
<tr id="row148211137108"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1682119136104"><a name="p1682119136104"></a><a name="p1682119136104"></a>-&gt;&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="14.581632653061222%" headers="mcps1.2.8.1.2 "><p id="p6821201311013"><a name="p6821201311013"></a><a name="p6821201311013"></a>Array-json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="13.989795918367346%" headers="mcps1.2.8.1.3 "><p id="p19821181331017"><a name="p19821181331017"></a><a name="p19821181331017"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.4 "><p id="p1682131311100"><a name="p1682131311100"></a><a name="p1682131311100"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1382120137101"><a name="p1382120137101"></a><a name="p1382120137101"></a>获得 JSON 数组元素。下标不存在返回空。</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1382171317105"><a name="p1382171317105"></a><a name="p1382171317105"></a>'[1,2,3]'::json-&gt;&gt;2</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p0821113191015"><a name="p0821113191015"></a><a name="p0821113191015"></a>3</p>
</td>
</tr>
<tr id="row2821161381012"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1182111361016"><a name="p1182111361016"></a><a name="p1182111361016"></a>-&gt;&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="14.581632653061222%" headers="mcps1.2.8.1.2 "><p id="p382171381014"><a name="p382171381014"></a><a name="p382171381014"></a>object-json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="13.989795918367346%" headers="mcps1.2.8.1.3 "><p id="p19821913111015"><a name="p19821913111015"></a><a name="p19821913111015"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.4 "><p id="p13821151371017"><a name="p13821151371017"></a><a name="p13821151371017"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p3821413131016"><a name="p3821413131016"></a><a name="p3821413131016"></a>通过键获得值。不存在则返回空。</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1482191341014"><a name="p1482191341014"></a><a name="p1482191341014"></a>'{"a":1,"b":2}'::json-&gt;&gt;'b'</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p482161321010"><a name="p482161321010"></a><a name="p482161321010"></a>2</p>
</td>
</tr>
<tr id="row7821131318105"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p8822101310101"><a name="p8822101310101"></a><a name="p8822101310101"></a>#&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="14.581632653061222%" headers="mcps1.2.8.1.2 "><p id="p5822171391016"><a name="p5822171391016"></a><a name="p5822171391016"></a>container-json (b)</p>
</td>
<td class="cellrowborder" valign="top" width="13.989795918367346%" headers="mcps1.2.8.1.3 "><p id="p1282261371015"><a name="p1282261371015"></a><a name="p1282261371015"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.4 "><p id="p1782201301019"><a name="p1782201301019"></a><a name="p1782201301019"></a>json(b)</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p28221613181013"><a name="p28221613181013"></a><a name="p28221613181013"></a>获取在指定路径的 JSON 对象，路径不存在则返回空。</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p168221913171011"><a name="p168221913171011"></a><a name="p168221913171011"></a>'{"a": {"b":{"c": "foo"}}}'::json #&gt;'{a,b}'</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p782212138106"><a name="p782212138106"></a><a name="p782212138106"></a>{"c": "foo"}</p>
</td>
</tr>
<tr id="row6822513151012"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p19822191341014"><a name="p19822191341014"></a><a name="p19822191341014"></a>#&gt;&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="14.581632653061222%" headers="mcps1.2.8.1.2 "><p id="p382281351018"><a name="p382281351018"></a><a name="p382281351018"></a>container-json (b)</p>
</td>
<td class="cellrowborder" valign="top" width="13.989795918367346%" headers="mcps1.2.8.1.3 "><p id="p6822101311108"><a name="p6822101311108"></a><a name="p6822101311108"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.4 "><p id="p1682220133108"><a name="p1682220133108"></a><a name="p1682220133108"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1822713131018"><a name="p1822713131018"></a><a name="p1822713131018"></a>获取在指定路径的 JSON 对象，路径不存在则返回空。</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p148225132105"><a name="p148225132105"></a><a name="p148225132105"></a>'{"a":[1,2,3],"b":[4,5,6]}'::json #&gt;&gt;'{a,2}'</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p9822171310104"><a name="p9822171310104"></a><a name="p9822171310104"></a>3</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-caution.png) **注意：** 
>对于 \#\> 和 \#\>\> 操作符，当给出的路径无法查找到数据时，不会报错，会返回空。

**表 2** **JSONB额外支持操作符**

<a name="table10297813151018"></a>
<table><thead align="left"><tr id="row118231413101011"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1182321381014"><a name="p1182321381014"></a><a name="p1182321381014"></a>操作符</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p582301310108"><a name="p582301310108"></a><a name="p582301310108"></a>右操作数类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p98231013191017"><a name="p98231013191017"></a><a name="p98231013191017"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p0823313171017"><a name="p0823313171017"></a><a name="p0823313171017"></a>例子</p>
</th>
</tr>
</thead>
<tbody><tr id="row3823613181013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p582313132105"><a name="p582313132105"></a><a name="p582313132105"></a>@&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10823121312101"><a name="p10823121312101"></a><a name="p10823121312101"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p16823191341012"><a name="p16823191341012"></a><a name="p16823191341012"></a>左边的 JSON的顶层是否包含右边JSON的顶层所有项。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18823181315102"><a name="p18823181315102"></a><a name="p18823181315102"></a>'{"a":1, "b":2}'::jsonb @&gt; '{"b":2}'::jsonb</p>
</td>
</tr>
<tr id="row15823191311016"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p382419139101"><a name="p382419139101"></a><a name="p382419139101"></a>&lt;@</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p482412138103"><a name="p482412138103"></a><a name="p482412138103"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p188241313141010"><a name="p188241313141010"></a><a name="p188241313141010"></a>左边的 JSON的所有项是否全部存在于右边JSON的顶层。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6824613151016"><a name="p6824613151016"></a><a name="p6824613151016"></a>'{"b":2}'::jsonb &lt;@ '{"a":1, "b":2}'::jsonb</p>
</td>
</tr>
<tr id="row128241513141013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1082420132107"><a name="p1082420132107"></a><a name="p1082420132107"></a>?</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p0824101312106"><a name="p0824101312106"></a><a name="p0824101312106"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1782441313107"><a name="p1782441313107"></a><a name="p1782441313107"></a>键/元素的字符串是否存在于 JSON 值的顶层。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p882491318103"><a name="p882491318103"></a><a name="p882491318103"></a>'{"a":1, "b":2}'::jsonb ? 'b'</p>
</td>
</tr>
<tr id="row19824213101018"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p17824121314100"><a name="p17824121314100"></a><a name="p17824121314100"></a>?|</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p138241513101015"><a name="p138241513101015"></a><a name="p138241513101015"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p682411341020"><a name="p682411341020"></a><a name="p682411341020"></a>这些数组字符串中的任何一个是否做为顶层键存在。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p682491319106"><a name="p682491319106"></a><a name="p682491319106"></a>'{"a":1, "b":2, "c":3}'::jsonb ?| array['b', 'c']</p>
</td>
</tr>
<tr id="row5824151311013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p48247138107"><a name="p48247138107"></a><a name="p48247138107"></a>?&amp;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1282431319101"><a name="p1282431319101"></a><a name="p1282431319101"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13824713201018"><a name="p13824713201018"></a><a name="p13824713201018"></a>是否所有这些数组字符串都作为顶层键存在。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p5825191313105"><a name="p5825191313105"></a><a name="p5825191313105"></a>'["a", "b"]'::jsonb ?&amp; array['a', 'b']</p>
</td>
</tr>
<tr id="row982511317105"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1982516133106"><a name="p1982516133106"></a><a name="p1982516133106"></a>=</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p88251813181015"><a name="p88251813181015"></a><a name="p88251813181015"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p682511311016"><a name="p682511311016"></a><a name="p682511311016"></a>判断两个jsonb的大小关系，同函数jsonb_eq。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p38255137103"><a name="p38255137103"></a><a name="p38255137103"></a>/</p>
</td>
</tr>
<tr id="row9825313151014"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p5825161310102"><a name="p5825161310102"></a><a name="p5825161310102"></a>&lt;&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17825141321018"><a name="p17825141321018"></a><a name="p17825141321018"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p5825171317109"><a name="p5825171317109"></a><a name="p5825171317109"></a>判断两个jsonb的大小关系，同函数jsonb_ne。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p198255136105"><a name="p198255136105"></a><a name="p198255136105"></a>/</p>
</td>
</tr>
<tr id="row19825113121010"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18825141371018"><a name="p18825141371018"></a><a name="p18825141371018"></a>&lt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3825131311103"><a name="p3825131311103"></a><a name="p3825131311103"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p882512132107"><a name="p882512132107"></a><a name="p882512132107"></a>判断两个jsonb的大小关系，同函数jsonb_lt。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14825151321016"><a name="p14825151321016"></a><a name="p14825151321016"></a>/</p>
</td>
</tr>
<tr id="row7825141391010"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p7825191319108"><a name="p7825191319108"></a><a name="p7825191319108"></a>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p9826151361017"><a name="p9826151361017"></a><a name="p9826151361017"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p6826101313104"><a name="p6826101313104"></a><a name="p6826101313104"></a>判断两个jsonb的大小关系，同函数jsonb_gt。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p38267131106"><a name="p38267131106"></a><a name="p38267131106"></a>/</p>
</td>
</tr>
<tr id="row282661316101"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p10826111311012"><a name="p10826111311012"></a><a name="p10826111311012"></a>&lt;=</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p168262133102"><a name="p168262133102"></a><a name="p168262133102"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p19826161321018"><a name="p19826161321018"></a><a name="p19826161321018"></a>判断两个jsonb的大小关系，同函数jsonb_le。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p082616130106"><a name="p082616130106"></a><a name="p082616130106"></a>/</p>
</td>
</tr>
<tr id="row1482631313106"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13826141318107"><a name="p13826141318107"></a><a name="p13826141318107"></a>&gt;=</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p2826813141014"><a name="p2826813141014"></a><a name="p2826813141014"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1082661341014"><a name="p1082661341014"></a><a name="p1082661341014"></a>判断两个jsonb的大小关系，同函数jsonb_ge。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1182661311019"><a name="p1182661311019"></a><a name="p1182661311019"></a>/</p>
</td>
</tr>
<tr id="row1482631313106"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13826141318107"><a name="p13826141318107"></a><a name="p13826141318107"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p2826813141014"><a name="p2826813141014"></a><a name="p2826813141014"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1082661341014"><a name="p1082661341014"></a><a name="p1082661341014"></a>删除JSONB对象中指定路径的键和对应的值,同函数jsonb_delete。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1182661311019"><a name="p1182661311019"></a><a name="p1182661311019"></a>/</p>
</td>
</tr>
</tbody>
</table>


## **JSON/JSONB支持的函数**<a name="section845725420151"></a>

-   array\_to\_json\(anyarray \[, pretty\_bool\]\)

    描述：返回JSON类型的数组。一个多维数组成为一个JSON数组的数组。如果pretty\_bool为true，将在一维元素之间添加换行符。

    返回类型：json

    示例：

    ```
    openGauss=# SELECT array_to_json('{{1,5},{99,100}}'::int[]);
        array_to_json
        ------------------
        [[1,5],[99,100]]
        (1 row)
    ```

-   row\_to\_json\(record \[, pretty\_bool\]\)

    描述：返回JSON类型的行。如果pretty\_bool为true，将在第一级元素之间添加换行符。

    返回类型：json

    示例：

    ```
    openGauss=# SELECT row_to_json(row(1,'foo'));
             row_to_json     
        ---------------------
         {"f1":1,"f2":"foo"}    (1 row)
    ```


-   json\_array\_element\(array-json, integer\)、jsonb\_array\_element\(array-jsonb, integer\)

    描述：同操作符\`-\>\`, 返回数组中指定下标的元素。

    返回类型：json、jsonb

    示例：

    ```
    openGauss=# select json_array_element('[1,true,[1,[2,3]],null]',2);
      json_array_element
      --------------------
      [1,[2,3]]
      (1 row)
    ```


-   json\_array\_element\_text\(array-json, integer\)、jsonb\_array\_element\_text\(array-jsonb, integer\)

    描述：同操作符\`-\>\>\`, 返回数组中指定下标的元素。

    返回类型：text、text

    示例：

    ```
    openGauss=# select json_array_element_text('[1,true,[1,[2,3]],null]',2);
    json_array_element_text
    -----------------------
      [1,[2,3]]
      (1 row)
    ```


-   json\_object\_field\(object-json, text\)、jsonb\_object\_field\(object-jsonb, text\)

    描述：同操作符\`-\>\`, 返回对象中指定键对应的值。

    返回类型：json、json

    示例：

    ```
     openGauss=# select json_object_field('{"a": {"b":"foo"}}','a');
      json_object_field
      -------------------
      {"b":"foo"}
      (1 row)
    ```

-   json\_object\_field\_text\(object-json, text\)、jsonb\_object\_field\_text\(object-jsonb, text\)

    描述：同操作符\`-\>\>\`, 返回对象中指定键对应的值。

    返回类型：text、text

    示例：

    ```
     openGauss=# select json_object_field_text('{"a": {"b":"foo"}}','a');
      json_object_field_text
      ----------------------
      {"b":"foo"}
      (1 row)
    ```


-   json\_extract\_path\(json, VARIADIC text\[\]\)、jsonb\_extract\_path\(\(jsonb, VARIADIC text\[\]\)

    描述：等价于操作符\`\#\>\`。根据$2所指的路径，查找json，并返回。

    返回类型：json、jsonb

    示例：

    ```
     openGauss=# select json_extract_path('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
       json_extract_path
      -------------------
       "stringy"
      (1 row)
    ```


-   json\_extract\_path\_op\(json, text\[\]\)、jsonb\_extract\_path\_op\(jsonb, text\[\]\)

    描述：同操作符\`\#\>\`。根据$2所指的路径，查找json，并返回。

    返回类型：json、jsonb

    示例：

    ```
      openGauss=# select json_extract_path_op('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', ARRAY['f4','f6']);
       json_extract_path_op
      ---------------------
       "stringy"
      (1 row)
    ```


-   json\_extract\_path\_text\(json, VARIADIC text\[\]\)、jsonb\_extract\_path\_text\(\(jsonb, VARIADIC text\[\]\)

    描述：等价于操作符\`\#\>\>\`。根据$2所指的路径，查找json，并返回。

    返回类型：text、text

    示例：

    ```
     openGauss=# select json_extract_path_text('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
       json_extract_path_text
      -----------------------
       "stringy"
      (1 row)
    ```


-   json\_extract\_path\_text\_op\(json, text\[\]\)、jsonb\_extract\_path\_text\_op\(jsonb, text\[\]\)

    描述：同操作符\`\#\>\>\`。根据$2所指的路径，查找json，并返回。

    返回类型：text、text

    示例：

    ```
     openGauss=# select json_extract_path_text_op('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', ARRAY['f4','f6']);
       json_extract_path_text_op
      --------------------------
       "stringy"
      (1 row)
    ```


-   json\_array\_elements\(array-json\)、jsonb\_array\_elements\(array-jsonb\)

    描述：拆分数组，每一个元素返回一行。

    返回类型：json、jsonb

    示例：

    ```
     openGauss=# select json_array_elements('[1,true,[1,[2,3]],null]');
       json_array_elements
      ---------------------
       1
       true
       [1,[2,3]]
       null
      (4 rows)
    ```


-   json\_array\_elements\_text\(array-json\)、jsonb\_array\_elements\_text\(array-jsonb\)

    描述：拆分数组，每一个元素返回一行。

    返回类型：text、text

    示例：

    ```
    openGauss=# select * from  json_array_elements_text('[1,true,[1,[2,3]],null]');
         value
      -----------
       1
       true
       [1,[2,3]]
    
      (4 rows)
    ```


-   json\_array\_length\(array-json\)、jsonb\_array\_length\(array-jsonb\)

    描述：返回数组长度。

    返回类型：integer

    示例：

    ```
      openGauss=# SELECT json_array_length('[1,2,3,{"f1":1,"f2":[5,6]},4,null]');
       json_array_length
      -------------------
                       6
      (1 row)
    ```


-   json\_each\(object-json\)、jsonb\_each\(object-jsonb\)

    描述：将对象的每个键值对拆分转换成一行两列。

    返回类型：setof\(key text, value json\)、setof\(key text, value jsonb\)

    示例：

    ```
     openGauss=# select * from  json_each('{"f1":[1,2,3],"f2":{"f3":1},"f4":null}');
       key |  value
      -----+----------
       f1  | [1,2,3]
       f2  | {"f3":1}
       f4  | null
      (3 rows)
    ```


-   json\_each\_text\(object-json\)、jsonb\_each\_text\(object-jsonb\)

    描述：将对象的每个键值对拆分转换成一行两列。

    返回类型：setof\(key text, value text\)、setof\(key text, value text\)

    示例：

    ```
     openGauss=# select * from  json_each_text('{"f1":[1,2,3],"f2":{"f3":1},"f4":null}');
       key |  value
      -----+----------
       f1  | [1,2,3]
       f2  | {"f3":1}
       f4  |
      (3 rows)
    ```


-   json\_object\_keys\(object-json\)、jsonb\_object\_keys\(object-jsonb\)

    描述：返回对象中顶层的所有键。

    返回类型：SETOF text

    示例：

    ```
      openGauss=# select json_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}, "f1":"abcd"}');
       json_object_keys
      ------------------
       f1
       f2
       f1
      (3 rows)
    ```


-   jsonb中会有去重操作

    ```
      openGauss=# select jsonb_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}, "f1":"abcd"}');
       jsonb_object_keys
      -------------------
       f1
       f2
      (2 rows)
    ```


-   json\_populate\_record\(anyelement, object-json \[, bool\]\)、jsonb\_populate\_record\(anyelement, object-jsonb \[, bool\]\)

    描述：$1必须是一个复合类型的参数。将会把object-json里的每个对键值进行拆分，以键当做列名，与$1中的列名进行匹配查找，并填充到$1的格式中。

    返回类型：anyelement、anyelement

    示例：

    ```
      openGauss=# create type jpop as (a text, b int, c bool);
      CREATE TYPE
      postgres=# select * from json_populate_record(null::jpop,'{"a":"blurfl","x":43.2}');
         a    | b | c
      --------+---+---
       blurfl |   |
      (1 row)
    ```

    ```
    openGauss=# select * from json_populate_record((1,1,null)::jpop,'{"a":"blurfl","x":43.2}');
         a    | b | c
      --------+---+---
       blurfl | 1 |
      (1 row)
    ```


-   json\_populate\_record\_set\(anyelement, array-json \[, bool\]\)、jsonb\_populate\_record\_set\(anyelement, array-jsonb \[, bool\]\)

    描述：参考上述函数json\_populate\_record、jsonb\_populate\_record，对$2数组的每一个元素进行上述参数函数的操作，因此这也要求$2数组的每个元素都是object-json类型的。

    返回类型：setof anyelement、setof anyelement

    示例：

    ```
     openGauss=# create type jpop as (a text, b int, c bool);
      CREATE TYPE
      postgres=# select * from json_populate_recordset(null::jpop, '[{"a":1,"b":2},{"a":3,"b":4}]');
       a | b | c
      ---+---+---
       1 | 2 |
       3 | 4 |
      (2 rows)
    ```


-   json\_typeof\(json\)、jsonb\_typeof\(jsonb\)

    描述：检测json类型

    返回类型：text、text

    示例：

    ```
     openGauss=# select value, json_typeof(value)
      postgres-# from (values (json '123.4'), (json '"foo"'), (json 'true'), (json 'null'), (json '[1, 2, 3]'), (json '{"x":"foo", "y":123}'), (NULL::json))  as data(value);
              value         | json_typeof
      ----------------------+-------------
       123.4                | number
       "foo"                | string
       true                 | boolean
       null                 | null
       [1, 2, 3]            | array
       {"x":"foo", "y":123} | object
                            |
      (7 rows)
    ```


-   json\_build\_array\( \[VARIADIC "any"\] \)

    描述：从一个可变参数列表构造出一个JSON数组。

    返回类型：array-json

    示例：

    ```
     openGauss=# select json_build_array('a',1,'b',1.2,'c',true,'d',null,'e',json '{"x": 3, "y": [1,2,3]}','');
                                   json_build_array
      ---------------------------------------------------------------------------
       ["a", 1, "b", 1.2, "c", true, "d", null, "e", {"x": 3, "y": [1,2,3]}, ""]
      (1 row)
    ```


-   json\_build\_object\( \[VARIADIC "any"\] \)

    描述：从一个可变参数列表构造出一个JSON对象，其入参必须为偶数个，两两一组组成键值对。注意键不可为null。

    返回类型：object-json

    示例：

    ```
     openGauss=# select json_build_object(1,2);
       json_build_object
      -------------------
       {"1" : 2}
      (1 row)
    ```


-   json\_to\_record\(object-json, bool\)

    描述：正如所有返回record 的函数一样，调用者必须用一个AS子句显式地定义记录的结构。会将object-json的键值对进行拆分重组，把键当做列名，去匹配填充as显示指定的记录的结构。

    返回类型：record

    示例：

    ```
    openGauss=# select * from json_to_record('{"a":1,"b":"foo","c":"bar"}',true) as x(a int, b text, d text);
       a |  b  | d
      ---+-----+---
       1 | foo |
      (1 row)
    ```


-   json\_to\_recordset\(array-json, bool\)

    描述：参考函数json\_to\_record，对数组内个每个元素，执行上述函数的操作，因此这要求数组内的每个元素都得是object-json。

    返回类型：setof record

    示例：

    ```
     openGauss=# select * from json_to_recordset(
      openGauss(#   '[{"a":1,"b":"foo","d":false},{"a":2,"b":"bar","c":true}]',
     openGauss(#   false
     openGauss(# ) as x(a int, b text, c boolean);
       a |  b  | c
      ---+-----+---
       1 | foo |
       2 | bar | t
      (2 rows)
    ```


-   json\_object\(text\[\]\)、json\_object\(text\[\], text\[\]\)

    描述：从一个文本数组构造一个object-json。这是个重载函数，当入参为一个文本数组的时候，其数组长度必须为偶数，成员被当做交替出现的键/值对。两个文本数组的时候，第一个数组认为是键，第二个认为是值，两个数组长度必须相等。键不可为null。

    返回类型：object-json

    示例：

    ```
    openGauss=# select json_object('{a,1,b,2,3,NULL,"d e f","a b c"}');
                            json_object
      -------------------------------------------------------
       {"a" : "1", "b" : "2", "3" : null, "d e f" : "a b c"}
      (1 row)
    ```

    ```
      postgres=# select json_object('{a,b,"a b c"}', '{a,1,1}');
                    json_object
      ---------------------------------------
       {"a" : "a", "b" : "1", "a b c" : "1"}
      (1 row)
    ```


-   json\_agg\(any\)

    描述：将值聚集为json数组。

    返回类型：array-json

    示例：

    ```
     openGauss=# select * from classes;
      name | score
      -----+-------
      A    |     2
      A    |     3
      D    |     5
      D    |
      (4 rows)
    ```

    ```
      openGauss=# select name, json_agg(score) score from classes group by name order by name;
      name |      score
      -----+-----------------
      A    | [2, 3]
      D    | [5, null]
           | [null]
      (3 rows)
    ```


-   json\_object\_agg\(any, any\)

    描述：将值聚集为json对象。

    返回类型：object-json

    示例：

    ```
      openGauss=# select * from classes;
      name | score
      -----+-------
      A    |     2
      A    |     3
      D    |     5
      D    |
      (4 rows)
    ```

    ```
      openGauss=# select json_object_agg(name, score) from classes group by name order by name;
           json_object_agg
      -------------------------
       { "A" : 2, "A" : 3 }
       { "D" : 5, "D" : null }
      (2 rows)
    ```


- jsonb\_contained\(jsonb, jsonb\)

  描述：同操作符 \`<@\`, 判断$1中的所有元素是否在$2的顶层存在。

  返回类型：bool

  示例：

  ```
   openGauss=# select jsonb_contained('[1,2,3]', '[1,2,3,4]');
     jsonb_contained
    -----------------
     t
    (1 row)
  ```


- jsonb\_contains\(jsonb, jsonb\)

  描述：同操作符 \`@\>\`, 判断$1中的顶层所有元素是否包含在$2的所有元素。

  返回类型：bool

  示例：

  ```
   openGauss=# select jsonb_contains('[1,2,3,4]', '[1,2,3]');
     jsonb_contains
    ----------------
     t
    (1 row)
  ```


- jsonb\_exists\(jsonb, text\)

  描述：同操作符 \`?\`,  字符串$2是否存在$1的顶层以key\\elem\\scalar的形式存在。

  返回类型：bool

  示例：

  ```
    openGauss=# select jsonb_exists('["1",2,3]', '1');
     jsonb_exists
    --------------
     t
    (1 row)
  ```


- jsonb\_exists\_all\(jsonb, text\[\]\)

  描述：同操作符 \`?&\`,  字符串数组$2里面，是否所有的元素，都在$1的顶层以key\\elem\\scalar的形式存在。

  返回类型：bool

  示例：

  ```
    openGauss=# select jsonb_exists_all('["1","2",3]', '{1, 2}');
     jsonb_exists_all
    ------------------
     t
    (1 row)
  ```


- jsonb\_exists\_any\(jsonb, text\[\]\)

  描述：同操作符 \`?|\`,  字符串数组$2里面，是否存在的元素，在$1的顶层以key\\elem\\scalar的形式存在。

  返回类型：bool

  示例：

  ```
    openGauss=# select jsonb_exists_any('["1","2",3]', '{1, 2, 4}');
     jsonb_exists_any
    ------------------
     t
    (1 row)
  ```


- jsonb\_cmp\(jsonb, jsonb\)

  描述：比较大小，正数代表大于，负数代表小于，0表示相等。

  返回类型：integer

  示例：

  ```
  openGauss=# select jsonb_cmp('["a", "b"]', '{"a":1, "b":2}');
     jsonb_cmp
    -----------
            -1
    (1 row)
  ```


- jsonb\_eq\(jsonb, jsonb\)

  描述：同操作符 \`=\`, 比较两个值的大小。

  返回类型：bool

  示例：

  ```
    openGauss=# select jsonb_eq('["a", "b"]', '{"a":1, "b":2}');
     jsonb_eq
    ----------
     f
    (1 row)
  ```


- jsonb\_ne\(jsonb, jsonb\)

  描述：同操作符 \`<\>\`, 比较两个值的大小。

  返回类型：bool

  示例：

  ```
    openGauss=# select jsonb_ne('["a", "b"]', '{"a":1, "b":2}');
     jsonb_ne
    ----------
     t
    (1 row)
  ```


- jsonb\_gt\(jsonb, jsonb\)

  描述：同操作符 \`\>\`, 比较两个值的大小。

  返回类型：bool

  示例：

  ```
   openGauss=# select jsonb_gt('["a", "b"]', '{"a":1, "b":2}');
     jsonb_gt
    ----------
     f
    (1 row)
  ```


- jsonb\_ge\(jsonb, jsonb\)

  描述：同操作符 \`\>=\`, 比较两个值的大小。

  返回类型：bool

  示例：

  ```
   openGauss=# select jsonb_ge('["a", "b"]', '{"a":1, "b":2}');
     jsonb_ge
    ----------
     f
    (1 row)
  ```


- jsonb\_lt\(jsonb, jsonb\)

  描述：同操作符 \`<\`, 比较两个值的大小。

  返回类型：bool

  示例：

  ```
   openGauss=# select jsonb_lt('["a", "b"]', '{"a":1, "b":2}');
     jsonb_lt
    ----------
     t
    (1 row)
  ```


- jsonb\_le\(jsonb, jsonb\)

  描述：同操作符 \`<=\`, 比较两个值的大小。

  返回类型：bool

  示例：

  ```
   openGauss=# select jsonb_le('["a", "b"]', '{"a":1, "b":2}');
     jsonb_le
    ----------
     t
    (1 row)
  ```


- to\_json\(anyelement\)

  描述：把参数转换为\`json\`。

  返回类型：json

  示例：

  ```
   openGauss=# select to_json('{1,5}'::text[]);
      to_json
    -----------
     ["1","5"]
    (1 row)
  ```

- jsonb\_hash\(jsonb\)

  描述：对jsonb进行hash运算。

  返回类型：integer

  示例：

  ```
  openGauss=# select jsonb_hash('[1,2,3]');
   jsonb_hash
  ------------
   -559968547
  (1 row)
  ```

- jsonb_insert\(target jsonb, path jsonpath, new_value jsonb, skip_existing boolean DEFAULT false)

  描述：JSONB_INSERT函数用于将一个新值插入到JSONB值中的指定路径位置。函数返回在给定路径上插入了指定新值后的JSONB值。

  - target：要插入对象的目标JSONB值。
  - path：指定要插入对象的路径。可以是一个JSONPath表达式，也可以是一个由键组成的数组。例如，'{hobbies, -1}'表示在名为hobbies的数组中的最后一个位置插入对象。
  - new_value：要插入的新对象。
  - skip_existing：可选参数，表示如果插入的对象已经存在，则是否跳过插入操作。默认值为false，表示不跳过插入。
  
  返回类型：jsonb
  
  注意事项：

  - 路径中的所有前值都必须存在，否则将原封不动地返回target（原JSONB值）。 
  - 如果最后一个路径值是超出范围的数组索引，则新值将添加到数组的开头（如果索引为负）或数组的末尾（如果索引为正）。

  示例：
  
  ```
  openGauss=# select jsonb_insert('{"a": [0,1,2]}', '{a, 1}', '"new_value"');
           jsonb_insert          
  -------------------------------
   {"a": [0, "new_value", 1, 2]}
  (1 row)
  ```
  
- jsonb_delete\(jsonb, text[])

  描述：该函数接受两个参数：要删除字段的 JSONB 对象和要删除的字段路径。这个函数返回一个新的 JSONB 对象，其中指定的字段已被删除。

  返回类型：jsonb
  
  示例：
  
  ```
  openGauss=# select jsonb_delete('{"a":1 , "b":2, "c":3}'::jsonb, 'a'::text);
     jsonb_delete   
  ------------------
   {"b": 2, "c": 3}
  (1 row)
  ```
  
- jsonb_set\(target jsonb, path text[], new_value jsonb[, create_missing boolean]\)

  描述：用于修改 JSONB 类型的值。它可以用于更新 JSONB 对象中的指定路径上的值，或者在指定路径上插入新的键值对。

  - target：要修改的JSONB值。
  - path：指定要修改的路径，以数组形式表示。每个数组元素都是一个键或索引，用于定位 JSONB 值的位置。例如，[‘a’, ‘b’, ‘c’] 表示要修改的路径为 target->‘a’->‘b’->‘c’。
  - new_value：要设置的新值，必须是一个合法的 JSONB 值。
  - create_missing：可选参数，指定是否在路径上创建缺失的键。默认情况下，如果路径上的键不存在，则不会创建缺失的键。如果设置为 true，则会创建缺失的键。
  
  返回类型：integer

  注意事项：

  - 路径中的所有前值都必须存在，否则将不加改变地返回target。 
  - 出现在路径中的负整数从从JSON数组的path末尾开始计数。
  - 如果最后一个路径步骤是超出范围的数组索引，并且create_missing为真，则新值将添加到数组的开头（如果索引为负），或添加到数组的结尾（如果索引为正）。
  
  示例：
  
  ```
  openGauss=# select jsonb_set('{"n":null, "a":1, "b":[1,2], "c":{"1":2}, "d":{"1":[2,3]}}'::jsonb, '{n}', '[1,2,3]');
                          jsonb_set                         
  ----------------------------------------------------------
   {"a": 1, "b": [1, 2], "c": {"1": 2}, "d": {"1": [2, 3]}}
  (1 row)
  ```
  
- json_exists\(text, text \[ \{TRUE | FALSE | ERROR\} ON ERROR \]\)

  描述：用于判断一个json数据的特定路径下是否存在值，是则返回真，否则返回假。ON ERROR 语法用于指定$1不是格式化的json数据时json_exists的表现：声明 TRUE ON ERROR 时，这种情况下json_exists返回真；声明 FALSE ON ERROR 时，json_exists返回假；声明 ERROR ON ERROR 时，json_exists抛出错误。未声明 ON ERROR 时，json_exists默认在$1不是格式化的json数据时返回假。

  返回类型：bool

  注意事项：

  - $2必须为符合json路径表达式语法的文本，且不能为空，否则将抛出错误。
  - 当前json路径表达式语法仅支持通过下标取值和通过键名取值。

  示例：

  ```
  openGauss=# select json_exists('[{"first":"John"}, {"middle":"Mark"}, {"last":"Smith"}]', '$[0, 1].first');
  json_exists
  -------------
  t
  (1 row)
  
  openGauss=# select json_exists('[{"first":"John"}, {"middle":"Mark"}, {"last":"Smith"}]', '$[3 to 5].*');
  json_exists
  -------------
  f
  (1 row)

  openGauss=# select json_exists('This is not well-formed JSON data', '$[*].first' FALSE ON ERROR);
  json_exists
  -------------
  f
  (1 row)

  openGauss=# select json_exists('This is not well-formed JSON data', '$[0].first' TRUE ON ERROR);
  json_exists
  -------------
  t
  (1 row)

  openGauss=# select json_exists('This is not well-formed JSON data', '$[0].first' ERROR ON ERROR);
  ERROR:  the input is not a well-formed json data
  CONTEXT:  referenced column: json_exists
  ```
  
- json_textcontains\(json text, path text, target cstring\)

  描述：用于判断一个json数据的特定路径下是否包含特定值，可同时判断多个值，多个值之间以逗号分隔。多个值之间若至少有一个包含在json数据中则返回真，否则返回假。当$1不是一个格式化的json数据时，函数返回假。

  - json: 用于判断的json数据。
  - path: json路径表达式。
  - target: 需要判断是否包含在json数据中的值。

  返回类型：bool

  注意事项：

  - path必须为符合json路径表达式语法的文本，且不能为空，否则将抛出错误。
  - 当前json路径表达式语法仅支持通过下标取值或通过键名取值。
  - 匹配包含的过程大小写不敏感。

  示例：

  ```
  openGauss=# SELECT JSON_TEXTCONTAINS('{"family" : {"id":12, "ages":[25,23], "address" : {"street" : "300 Oak Street", "apt" : 10}}}', '$.family', 'oak, 10');
  json_textcontains
  -------------------
  t
  (1 row)

  openGauss=# SELECT JSON_TEXTCONTAINS('{"family" : {"id":12, "ages":[25,23], "address" : {"street" : "300 Oak Street", "apt" : 10}}}', '$.family', '12 25 23 300 OAK');
  json_textcontains
  -------------------
  t
  (1 row)

  openGauss=# SELECT JSON_TEXTCONTAINS('This is not well-formed JSON data', '$.family', 'data');
  json_textcontains
  -------------------
  f
  (1 row)
  ```

- 其他函数

  描述：gin索引以及json\\jsonb聚集函数所用到的内部函数，功能不过多赘述。

  ```
   gin_compare_jsonb
   gin_consistent_jsonb
   gin_consistent_jsonb_hash
   gin_extract_jsonb
   gin_extract_jsonb_hash
   gin_extract_jsonb_query
   gin_extract_jsonb_query_hash
   gin_triconsistent_jsonb
   gin_triconsistent_jsonb_hash
   
   json_agg_transfn
   json_agg_finalfn
   json_object_agg_transfn
   json_object_agg_finalfn
  ```

