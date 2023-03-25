# JSON/JSONB Functions and Operators<a name="EN-US_TOPIC_0289900983"></a>

For details about the JSON/JSONB data type, see  [JSON/JSONB Types](json-jsonb-types.md).

**Table  1**  JSON/JSONB common operators

<a name="table152706135103"></a>
<table><thead align="left"><tr id="row6819513111011"><th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.1"><p id="p1181971318103"><a name="p1181971318103"></a><a name="p1181971318103"></a>Operator</p>
</th>
<th class="cellrowborder" valign="top" width="14.581632653061222%" id="mcps1.2.8.1.2"><p id="p481971341013"><a name="p481971341013"></a><a name="p481971341013"></a>Left Operand Type</p>
</th>
<th class="cellrowborder" valign="top" width="13.989795918367346%" id="mcps1.2.8.1.3"><p id="p7820413151012"><a name="p7820413151012"></a><a name="p7820413151012"></a>Right Operand Type</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.4"><p id="p14820171331017"><a name="p14820171331017"></a><a name="p14820171331017"></a>Return Type</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.5"><p id="p8820191310104"><a name="p8820191310104"></a><a name="p8820191310104"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.6"><p id="p14820171318104"><a name="p14820171318104"></a><a name="p14820171318104"></a>Example</p>
</th>
<th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.7"><p id="p982018136103"><a name="p982018136103"></a><a name="p982018136103"></a>Example Result</p>
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
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p178201913141017"><a name="p178201913141017"></a><a name="p178201913141017"></a>Obtains the <strong id="b8143185923510"><a name="b8143185923510"></a><a name="b8143185923510"></a>array-json</strong> element. If the subscript does not exist, <strong id="b11733147163511"><a name="b11733147163511"></a><a name="b11733147163511"></a>NULL</strong> is returned.</p>
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
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p68202013131016"><a name="p68202013131016"></a><a name="p68202013131016"></a>Obtains the value by a key. If no record is found, <strong id="b18646105193711"><a name="b18646105193711"></a><a name="b18646105193711"></a>NULL</strong> is returned.</p>
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
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1382120137101"><a name="p1382120137101"></a><a name="p1382120137101"></a>Obtains the JSON array element. If the subscript does not exist, <strong id="b8393142603713"><a name="b8393142603713"></a><a name="b8393142603713"></a>NULL</strong> is returned.</p>
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
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p3821413131016"><a name="p3821413131016"></a><a name="p3821413131016"></a>Obtains the value by a key. If no record is found, <strong id="b82317394393"><a name="b82317394393"></a><a name="b82317394393"></a>NULL</strong> is returned.</p>
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
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p28221613181013"><a name="p28221613181013"></a><a name="p28221613181013"></a>Obtains the JSON object in the specified path. If the path does not exist, <strong id="b697470194019"><a name="b697470194019"></a><a name="b697470194019"></a>NULL</strong> is returned.</p>
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
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1822713131018"><a name="p1822713131018"></a><a name="p1822713131018"></a>Obtains the JSON object in the specified path. If the path does not exist, <strong id="b64091917401"><a name="b64091917401"></a><a name="b64091917401"></a>NULL</strong> is returned.</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p148225132105"><a name="p148225132105"></a><a name="p148225132105"></a>'{"a":[1,2,3],"b":[4,5,6]}'::json #&gt;&gt;'{a,2}'</p>
</td>
<td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p9822171310104"><a name="p9822171310104"></a><a name="p9822171310104"></a>3</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>For the  **\#\>**  and  **\#\>\>**  operators, if no data can be found in the specified path, no error is reported and a  **NULL**  value is returned.

**Table  2**  Additional JSONB support for operators

<a name="table10297813151018"></a>
<table><thead align="left"><tr id="row118231413101011"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1182321381014"><a name="p1182321381014"></a><a name="p1182321381014"></a>Operator</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p582301310108"><a name="p582301310108"></a><a name="p582301310108"></a>Right Operand Type</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p98231013191017"><a name="p98231013191017"></a><a name="p98231013191017"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p0823313171017"><a name="p0823313171017"></a><a name="p0823313171017"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="row3823613181013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p582313132105"><a name="p582313132105"></a><a name="p582313132105"></a>@&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10823121312101"><a name="p10823121312101"></a><a name="p10823121312101"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p16823191341012"><a name="p16823191341012"></a><a name="p16823191341012"></a>Whether the top layer of the JSON on the left contains all items of the top layer of the JSON on the right.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18823181315102"><a name="p18823181315102"></a><a name="p18823181315102"></a>'{"a":1, "b":2}'::jsonb @&gt; '{"b":2}'::jsonb</p>
</td>
</tr>
<tr id="row15823191311016"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p382419139101"><a name="p382419139101"></a><a name="p382419139101"></a>&lt;@</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p482412138103"><a name="p482412138103"></a><a name="p482412138103"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p188241313141010"><a name="p188241313141010"></a><a name="p188241313141010"></a>Whether all items in the JSON file on the left exist at the top layer of the JSON file on the right.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6824613151016"><a name="p6824613151016"></a><a name="p6824613151016"></a>'{"b":2}'::jsonb &lt;@ '{"a":1, "b":2}'::jsonb</p>
</td>
</tr>
<tr id="row128241513141013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1082420132107"><a name="p1082420132107"></a><a name="p1082420132107"></a>?</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p0824101312106"><a name="p0824101312106"></a><a name="p0824101312106"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1782441313107"><a name="p1782441313107"></a><a name="p1782441313107"></a>Whether the string of the key or element exists at the top layer of the JSON value.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p882491318103"><a name="p882491318103"></a><a name="p882491318103"></a>'{"a":1, "b":2}'::jsonb ? 'b'</p>
</td>
</tr>
<tr id="row19824213101018"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p17824121314100"><a name="p17824121314100"></a><a name="p17824121314100"></a>?|</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p138241513101015"><a name="p138241513101015"></a><a name="p138241513101015"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p682411341020"><a name="p682411341020"></a><a name="p682411341020"></a>Whether any of these array strings exists as top-layer keys.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p682491319106"><a name="p682491319106"></a><a name="p682491319106"></a>'{"a":1, "b":2, "c":3}'::jsonb ?| array['b', 'c']</p>
</td>
</tr>
<tr id="row5824151311013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p48247138107"><a name="p48247138107"></a><a name="p48247138107"></a>?&amp;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1282431319101"><a name="p1282431319101"></a><a name="p1282431319101"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13824713201018"><a name="p13824713201018"></a><a name="p13824713201018"></a>Whether all these array strings exist as top-layer keys.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p5825191313105"><a name="p5825191313105"></a><a name="p5825191313105"></a>'["a", "b"]'::jsonb ?&amp; array['a', 'b']</p>
</td>
</tr>
<tr id="row982511317105"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1982516133106"><a name="p1982516133106"></a><a name="p1982516133106"></a>=</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p88251813181015"><a name="p88251813181015"></a><a name="p88251813181015"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p682511311016"><a name="p682511311016"></a><a name="p682511311016"></a>Determines the size between two <strong id="b143316526431"><a name="b143316526431"></a><a name="b143316526431"></a>JSONB</strong> files, which is the same as the <strong id="b91971158184315"><a name="b91971158184315"></a><a name="b91971158184315"></a>jsonb_eq</strong> function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p38255137103"><a name="p38255137103"></a><a name="p38255137103"></a>/</p>
</td>
</tr>
<tr id="row9825313151014"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p5825161310102"><a name="p5825161310102"></a><a name="p5825161310102"></a>&lt;&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17825141321018"><a name="p17825141321018"></a><a name="p17825141321018"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p5825171317109"><a name="p5825171317109"></a><a name="p5825171317109"></a>Determines the size between two <strong id="b9296215114410"><a name="b9296215114410"></a><a name="b9296215114410"></a>JSONB</strong> files, which is the same as the <strong id="b1729721511448"><a name="b1729721511448"></a><a name="b1729721511448"></a>jsonb_ne</strong> function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p198255136105"><a name="p198255136105"></a><a name="p198255136105"></a>/</p>
</td>
</tr>
<tr id="row19825113121010"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18825141371018"><a name="p18825141371018"></a><a name="p18825141371018"></a>&lt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3825131311103"><a name="p3825131311103"></a><a name="p3825131311103"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p882512132107"><a name="p882512132107"></a><a name="p882512132107"></a>Determines the size between two <strong id="b71921133124512"><a name="b71921133124512"></a><a name="b71921133124512"></a>JSONB</strong> files, which is the same as the <strong id="b121933333453"><a name="b121933333453"></a><a name="b121933333453"></a>jsonb_lt</strong> function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14825151321016"><a name="p14825151321016"></a><a name="p14825151321016"></a>/</p>
</td>
</tr>
<tr id="row7825141391010"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p7825191319108"><a name="p7825191319108"></a><a name="p7825191319108"></a>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p9826151361017"><a name="p9826151361017"></a><a name="p9826151361017"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p6826101313104"><a name="p6826101313104"></a><a name="p6826101313104"></a>Determines the size between two <strong id="b10581351124511"><a name="b10581351124511"></a><a name="b10581351124511"></a>JSONB</strong> files, which is the same as the <strong id="b145815511452"><a name="b145815511452"></a><a name="b145815511452"></a>jsonb_gt</strong> function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p38267131106"><a name="p38267131106"></a><a name="p38267131106"></a>/</p>
</td>
</tr>
<tr id="row282661316101"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p10826111311012"><a name="p10826111311012"></a><a name="p10826111311012"></a>&lt;=</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p168262133102"><a name="p168262133102"></a><a name="p168262133102"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p19826161321018"><a name="p19826161321018"></a><a name="p19826161321018"></a>Determines the size between two <strong id="b782127204610"><a name="b782127204610"></a><a name="b782127204610"></a>JSONB</strong> files, which is the same as the <strong id="b28814716464"><a name="b28814716464"></a><a name="b28814716464"></a>jsonb_le</strong> function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p082616130106"><a name="p082616130106"></a><a name="p082616130106"></a>/</p>
</td>
</tr>
<tr id="row1482631313106"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13826141318107"><a name="p13826141318107"></a><a name="p13826141318107"></a>&gt;=</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p2826813141014"><a name="p2826813141014"></a><a name="p2826813141014"></a>jsonb</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1082661341014"><a name="p1082661341014"></a><a name="p1082661341014"></a>Determines the size between two <strong id="b20900420134613"><a name="b20900420134613"></a><a name="b20900420134613"></a>JSONB</strong> files, which is the same as the <strong id="b209061820134619"><a name="b209061820134619"></a><a name="b209061820134619"></a>jsonb_ge</strong> function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1182661311019"><a name="p1182661311019"></a><a name="p1182661311019"></a>/</p>
</td>
</tr>
</tbody>
</table>

## **Functions Supported by JSON/JSONB**<a name="section845725420151"></a>

-   array\\\_to\\\_json\\\(anyarray \\\[, pretty\\\_bool\\\]\\\)

    Description: Returns an array as JSON. A multi-dimensional array becomes a JSON array of arrays. If the value of  **pretty\\\_bool**  is  **true**, a newline character is added between one-dimensional elements.

    Return type: json

    For example:

    ```
    openGauss=# SELECT array_to_json('{{1,5},{99,100}}'::int[]);
        array_to_json
        ------------------
        [[1,5],[99,100]]
        (1 row)
    ```

-   row\\\_to\\\_json\\\(record \\\[, pretty\\\_bool\\\]\\\)

    Description: Returns a row as JSON. If the value of  **preretty\\\_bool**  is  **true**, a newline character is added between one-dimensional elements.

    Return type: json

    For example:

    ```
    openGauss=# SELECT row_to_json(row(1,'foo'));
             row_to_json     
        ---------------------
         {"f1":1,"f2":"foo"}    (1 row)
    ```


-   json\_array\_element\(array-json, integer\), jsonb\_array\_element\(array-jsonb, integer\)

    Description: Same as the operator  **\`-\>\`**, which returns the element with the specified subscript in the array.

    Return type: json, jsonb

    For example:

    ```
    openGauss=# select json_array_element('[1,true,[1,[2,3
    ]],null]',2);
      json_array_element
      --------------------
      [1,[2,3]]
      (1 row)
    ```


-   json\_array\_element\_text\(array-json, integer\), jsonb\_array\_element\_text\(array-jsonb, integer\)

    Description: Same as the operator  **\`-\>\>\`**, which returns the element with the specified subscript in the array.

    Return type: text, text

    For example:

    ```
    openGauss=# select json_array_element_text('[1,true,[1,[2,3]],null]',2);
    json_array_element_text
    -----------------------
      [1,[2,3]]
      (1 row)
    ```


-   json\_object\_field\(object-json, text\), jsonb\_object\_field\(object-jsonb, text\)

    Description: Same as the operator  **\`-\>\`**, which returns the value of a specified key in an object.

    Return type: json, json

    For example:

    ```
     openGauss=# select json_object_field('{"a": {"b":"foo"}}','a');
      json_object_field
      -------------------
      {"b":"foo"}
      (1 row)
    ```

-   json\_object\_field\_text\(object-json, text\), jsonb\_object\_field\_text\(object-jsonb, text\)

    Description: Same as the operator  **\`-\>\`**, which returns the value of a specified key in an object.

    Return type: text, text

    For example:

    ```
     openGauss=# select json_object_field_text('{"a": {"b":"foo"}}','a');
      json_object_field_text
      ----------------------
      {"b":"foo"}
      (1 row)
    ```


-   json\_extract\_path\(json, VARIADIC text\[\]\), jsonb\_extract\_path\(\(jsonb, VARIADIC text\[\]\)

    Description: Equivalent to the operator  **\`\#\>\`**  searches for JSON based on the path specified by  _$2_  and returns the result.

    Return type: json, jsonb

    For example:

    ```
     openGauss=# select json_extract_path('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
       json_extract_path
      -------------------
       "stringy"
      (1 row)
    ```


-   json\_extract\_path\_op\(json, text\[\]\), jsonb\_extract\_path\_op\(jsonb, text\[\]\)

    Description: Same as the operator  **\`\#\>\`**, searches for JSON based on the path specified by  _$2_  and returns the result.

    Return type: json, jsonb

    For example:

    ```
      openGauss=# select json_extract_path_op('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
       json_extract_path_op
      ---------------------
       "stringy"
      (1 row)
    ```


-   json\_extract\_path\_text\(json, VARIADIC text\[\]\), jsonb\_extract\_path\_text\(\(jsonb, VARIADIC text\[\]\)

    Description: Equivalent to the operator  **\`\#\>\`**, searches for JSON based on the path specified by $2 and return the result.

    Return type: text, text

    For example:

    ```
     openGauss=# select json_extract_path_text('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
       json_extract_path_text
      -----------------------
       "stringy"
      (1 row)
    ```


-   json\_extract\_path\_text\_op\(json, text\[\]\), jsonb\_extract\_path\_text\_op\(jsonb, text\[\]\)

    Description: Same as the operator  **\`\#\>\`**, searches for JSON based on the path specified by  _$2_  and returns the result.

    Return type: text, text

    For example:

    ```
     openGauss=# select json_extract_path_text_op('{"f2":{"f3":1},"f4":{"f5":99,"f6":"stringy"}}', 'f4','f6');
       json_extract_path_text_op
      --------------------------
       "stringy"
      (1 row)
    ```


-   Json\_array\_elements\(array-json\), jsonb\_array\_elements\(array-jsonb\)

    Description: Splits an array. Each element returns a row.

    Return type: json, jsonb

    For example:

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


-   Json\_array\_elements\_text\(array-json\), jsonb\_array\_elements\_text\(array-jsonb\)

    Description: Splits an array. Each element returns a row.

    Return type: text, text

    For example:

    ```
    openGauss=# select * from  json_array_elements_text('[1,true,[1,[2,3]],null]');
         value
      -----------
       1
       true
       [1,[2,3]]
    
      (4 rows)
    ```


-   json\_array\_length\(array-json\), jsonb\_array\_length\(array-jsonb\)

    Description: Returns the array length.

    Return type: integer

    For example:

    ```
      openGauss=# SELECT json_array_length('[1,2,3,{"f1":1,"f2":[5,6]},4,null]');
       json_array_length
      -------------------
                       6
      (1 row)
    ```


-   json\_each\(object-json\), jsonb\_each\(object-jsonb\)

    Description: Splits each key-value pair of an object into one row and two columns.

    Return type: setof\(key text, value json\), setof\(key text, value jsonb\)

    For example:

    ```
     openGauss=# select * from  json_each('{"f1":[1,2,3],"f2":{"f3":1},"f4":null}');
       key |  value
      -----+----------
       f1  | [1,2,3]
       f2  | {"f3":1}
       f4  | null
      (3 rows)
    ```


-   json\_each\_text\(object-json\), jsonb\_each\_text\(object-jsonb\)

    Description: Splits each key-value pair of an object into one row and two columns.

    Return type: setof\(key text, value text\), setof\(key text, value text\)

    For example:

    ```
     openGauss=# select * from  json_each_text('{"f1":[1,2,3],"f2":{"f3":1},"f4":null}');
       key |  value
      -----+----------
       f1  | [1,2,3]
       f2  | {"f3":1}
       f4  |
      (3 rows)
    ```


-   json\_object\_keys\(object-json\), jsonb\_object\_keys\(object-jsonb\)

    Description: Returns all keys at the top layer of the object.

    Return type: SETOF text

    For example:

    ```
      openGauss=# select json_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}, "f1":"abcd"}');
       json_object_keys
      ------------------
       f1
       f2
       f1
      (3 rows)
    ```


-   JSONB deduplication operations:

    ```
      openGauss=# select jsonb_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}, "f1":"abcd"}');
       jsonb_object_keys
      -------------------
       f1
       f2
      (2 rows)
    ```


-   json\_populate\_record\(anyelement, object-json \[, bool\]\), jsonb\_populate\_record\(anyelement, object-jsonb \[, bool\]\)

    Description:  _$1_  must be a compound parameter. Each key-value in the  **object-json**  file is split. The key is used as the column name to match the column name in  _$1_  and fill in the  _$1_  format.

    Return type: anyelement, anyelement

    For example:

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


-   json\_populate\_record\_set\(anyelement, array-json \[, bool\]\), jsonb\_populate\_record\_set\(anyelement, array-jsonb \[, bool\]\)

    Description: Performs the preceding operations on each element in the  _$2_  array by referring to the  **json\_populate\_record**  and  **jsonb\_populate\_record**  functions. Therefore, each element in the  _$2_  array must be of the  **object-json**  type.

    Return type: setof anyelement, setof anyelement

    For example:

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


-   json\_typeof\(json\), jsonb\_typeof\(jsonb\)

    Description: Checks the JSON type.

    Return type: text, text

    For example:

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

    Description: Constructs a JSON array from a variable parameter list.

    Return type: array-json

    For example:

    ```
     openGauss=# select json_build_array('a',1,'b',1.2,'c',true,'d',null,'e',json '{"x": 3, "y": [1,2,3]}','');
                                   json_build_array
      ---------------------------------------------------------------------------
       ["a", 1, "b", 1.2, "c", true, "d", null, "e", {"x": 3, "y": [1,2,3]}, ""]
      (1 row)
    ```


-   json\_build\_object\( \[VARIADIC "any"\] \)

    Description: Constructs a JSON object from a variable parameter list. The number of input parameters must be an even number. Every two input parameters form a key-value pair. Note that the value of a key cannot be null.

    Return type: object-json

    For example:

    ```
     openGauss=# select json_build_object(1,2);
       json_build_object
      -------------------
       {"1" : 2}
      (1 row)
    ```


-   json\_to\_record\(object-json, bool\)

    Description: Like all functions that return  **record**, the caller must explicitly define the structure of the record with an AS clause. The key-value pair of  **object-json**  is split and reassembled. The key is used as a column name to match and fill in the structure of the specified record.

    Return type: record

    For example:

    ```
    openGauss=# select * from json_to_record('{"a":1,"b":"foo","c":"bar"}',true) as x(a int, b text, d text);
       a |  b  | d
      ---+-----+---
       1 | foo |
      (1 row)
    ```


-   json\_to\_recordset\(array-json, bool\)

    Description: Executes the preceding function on each element in the array by referring to the** json\_to\_record**  function. Therefore, each element in the array must be  **object-json**.

    Return type: SETOF record

    For example:

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


-   json\_object\(text\[\]\), json\_object\(text\[\], text\[\]\)

    Description: Constructs an  **object-json**  from a text array. This is an overloaded function. When the input parameter is a text array, the array length must be an even number, and members are considered as alternate key-value pairs. When two text arrays are used, the first array is considered as a key, and the second array a value. The lengths of the two arrays must be the same. Note that the value of a key cannot be null.

    Return type: object-json

    For example:

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

    Description: Aggregates values into a JSON array.

    Return type: array-json

    For example:

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

    Description: Aggregates values into a JSON object.

    Return type: object-json

    For example:

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


-   jsonb\_contained\(jsonb, jsonb\)

    Description: Same as the operator  **\`<@\`**, determines whether all elements in_ $1_  exist at the top layer of  _$2_.

    Return type: Boolean

    For example:

    ```
     openGauss=# select jsonb_contained('[1,2,3]', '[1,2,3,4]');
       jsonb_contained
      -----------------
       t
      (1 row)
    ```


-   jsonb\_contains\(jsonb, jsonb\)

    Description: Same as the operator  **\`@\>\`**, checks whether all top-layer elements in  _$1_  are contained in  _$2_.

    Return type: Boolean

    For example:

    ```
     openGauss=# select jsonb_contains('[1,2,3,4]', '[1,2,3]');
       jsonb_contains
      ----------------
       t
      (1 row)
    ```


-   jsonb\_exists\(jsonb, text\)

    Description: Same as the operator  **\`?\`**, determines whether all elements in the string array  _$2_  exist at the top layer of  _$1_  in the form of  **key\\elem\\scalar**.

    Return type: Boolean

    For example:

    ```
      openGauss=# select jsonb_exists('["1",2,3]', '1');
       jsonb_exists
      --------------
       t
      (1 row)
    ```


-   jsonb\_exists\_all\(jsonb, text\[\]\)

    Description: Same as the operator  **\`?&\`**, checks whether all elements in the string array  _$2_  exist at the top layer of  _$1_  in the form of  **key\\elem\\scalar**.

    Return type: Boolean

    For example:

    ```
      openGauss=# select jsonb_exists_all('["1","2",3]', '{1, 2}');
       jsonb_exists_all
      ------------------
       t
      (1 row)
    ```


-   jsonb\_exists\_any\(jsonb, text\[\]\)

    Description: Same as the operator  **\`?|\`**, checks whether all elements in the string array  _$2_  exist at the top layer of  _$1_  in the form of  **key\\elem\\scalar**.

    Return type: Boolean

    For example:

    ```
      openGauss=# select jsonb_exists_any('["1","2",3]', '{1, 2, 4}');
       jsonb_exists_any
      ------------------
       t
      (1 row)
    ```


-   jsonb\_cmp\(jsonb, jsonb\)

    Description: Compares values. A positive value indicates greater than, a negative value indicates less than, and  **0**  indicates equal.

    Return type: integer

    For example:

    ```
    openGauss=# select jsonb_cmp('["a", "b"]', '{"a":1, "b":2}');
       jsonb_cmp
      -----------
              -1
      (1 row)
    ```


-   jsonb\_eq\(jsonb, jsonb\)

    Description: Same as the operator  **\`=\`**, compares two values.

    Return type: Boolean

    For example:

    ```
      openGauss=# select jsonb_eq('["a", "b"]', '{"a":1, "b":2}');
       jsonb_eq
      ----------
       f
      (1 row)
    ```


-   jsonb\_ne\(jsonb, jsonb\)

    Description: Same as the operator  **\`<\>\`**, compares two values.

    Return type: Boolean

    For example:

    ```
      openGauss=# select jsonb_ne('["a", "b"]', '{"a":1, "b":2}');
       jsonb_ne
      ----------
       t
      (1 row)
    ```


-   jsonb\_gt\(jsonb, jsonb\)

    Description: Same as the operator  **\`\>\`**, compares two values.

    Return type: Boolean

    For example:

    ```
     openGauss=# select jsonb_gt('["a", "b"]', '{"a":1, "b":2}');
       jsonb_gt
      ----------
       f
      (1 row)
    ```


-   jsonb\_ge\(jsonb, jsonb\)

    Description: Same as the operator  **\`\>=\`**, compares two values.

    Return type: Boolean

    For example:

    ```
     openGauss=# select jsonb_ge('["a", "b"]', '{"a":1, "b":2}');
       jsonb_ge
      ----------
       f
      (1 row)
    ```


-   jsonb\_lt\(jsonb, jsonb\)

    Description: Same as the operator  **\`<\`**, compares two values.

    Return type: Boolean

    For example:

    ```
     openGauss=# select jsonb_lt('["a", "b"]', '{"a":1, "b":2}');
       jsonb_lt
      ----------
       t
      (1 row)
    ```


-   jsonb\_le\(jsonb, jsonb\)

    Description: Same as the operator  **\`<=\`**, compares two values.

    Return type: Boolean

    For example:

    ```
     openGauss=# select jsonb_le('["a", "b"]', '{"a":1, "b":2}');
       jsonb_le
      ----------
       t
      (1 row)
    ```


-   to\_json\(anyelement\)

    Description: Converts parameters to  **\`json\`**.

    Return type: json

    For example:

    ```
     openGauss=# select to_json('{1,5}'::text[]);
        to_json
      -----------
       ["1","5"]
      (1 row)
    ```

-   jsonb\_hash\(jsonb\)

    Description: Performs the hash operation on JSONB.

    Return type: integer

    For example:

    ```
    openGauss=# select jsonb_hash('[1,2,3]');
     jsonb_hash
    ------------
     -559968547
    (1 row)
    ```

-   Other functions

    Description: Internal functions used by GIN indexes and JSON\\JSONB aggregate functions.

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


