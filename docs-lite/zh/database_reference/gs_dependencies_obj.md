# GS\_DEPENDENCIES\_OBJ

GS\_DEPENDENCIES\_OBJ系统表记录被存储过程/包/类型所引用的对象信息。信息允许记录当前尚未定义的引用对象，并在引用对象创建/更改/删除时修改表中记录的对象信息。在GS\_DEPENDENCIES\_OBJ系统表记录引用对象信息需要设置guc参数behavior\_compat\_options='plpgsql\_dependency'。

**表 1**  GS\_DEPENDENCIES字段

<a name="table87711029252"></a>
<table><thead align="left"><tr id="row19771162919518"><th class="cellrowborder" valign="top" width="22.31223122312231%" id="mcps1.2.4.1.1"><p id="p1977111293511"><a name="p1977111293511"></a><a name="p1977111293511"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="25.36253625362536%" id="mcps1.2.4.1.2"><p id="p18771229953"><a name="p18771229953"></a><a name="p18771229953"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="52.32523252325233%" id="mcps1.2.4.1.3"><p id="p197711229258"><a name="p197711229258"></a><a name="p197711229258"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>引用对象所属的schema名字。</p>
</td>
</tr>
<tr id="row1377118292512"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p117710299515"><a name="p117710299515"></a><a name="p117710299515"></a>packagename</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p177718296517"><a name="p177718296517"></a><a name="p177718296517"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1077115291520"><a name="p1077115291520"></a><a name="p1077115291520"></a>引用对象所属的package名字。</p>
</td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>引用对象的类型信息。包括未定义(字段值为1，下同)，变量(2)，类型(3)，函数(4)，函数头(5)，包头(6)和包体(7)。</p>
</td>
</tr>
<tr id="row1277112913514"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p147712291756"><a name="p147712291756"></a><a name="p147712291756"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p57713291553"><a name="p57713291553"></a><a name="p57713291553"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p8771829754"><a name="p8771829754"></a><a name="p8771829754"></a>引用对象的名字。</p>
</td>
</tr>
<tr id="row6771729654"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1077111291516"><a name="p1077111291516"></a><a name="p1077111291516"></a>objnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p15772192916512"><a name="p15772192916512"></a><a name="p15772192916512"></a>pg_node_tree</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p577219298514"><a name="p577219298514"></a><a name="p577219298514"></a>引用对象的Node信息。包括未定义Node(标识为Undefined，不记录任何信息)，类型Node(记录类型分类，字段信息等)，变量Node(记录变量类型名等)和函数头Node(记录函数名，参数列表等)。</p>
</td>
</tr>
</tbody>
</table>
