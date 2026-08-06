# GS\_DEPENDENCIES

GS\_DEPENDENCIES系统表记录存储过程/包与被引用对象的依赖信息。与现有记录依赖信息的PG\_DEPEND系统表不同的是，GS\_DEPENDENCIES系统表允许记录存储过程/包对象与当前尚未定义的引用对象之间的依赖关系。引用对象的信息记录在GS\_DEPENDENCIES\_OBJ系统表中，refobjoid字段记录了引用对象在GS\_DEPENDENCIES\_OBJ系统表中的OID。在GS\_DEPENDENCIES系统表记录依赖关系需要设置guc参数behavior\_compat\_options='plpgsql\_dependency'。

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
<tbody><tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>依赖对象所属的schema名字。</p>
</td>
</tr>
<tr id="row1377118292512"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p117710299515"><a name="p117710299515"></a><a name="p117710299515"></a>packagename</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p177718296517"><a name="p177718296517"></a><a name="p177718296517"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1077115291520"><a name="p1077115291520"></a><a name="p1077115291520"></a>依赖对象所属的package名字。</p>
</td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>refobjpos</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>引用对象在依赖对象中的位置信息。包括位于类型中(字段值为1，下同)，package的specification(2)，函数头(4)，函数体(8)和package的body(16)。</p>
</td>
</tr>
<tr id="row1277112913514"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p147712291756"><a name="p147712291756"></a><a name="p147712291756"></a>refobjoid</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p57713291553"><a name="p57713291553"></a><a name="p57713291553"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p8771829754"><a name="p8771829754"></a><a name="p8771829754"></a>引用对象在GS_DEPENDENCIES_OBJ系统表中的OID。</p>
</td>
</tr>
<tr id="row6771729654"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1077111291516"><a name="p1077111291516"></a><a name="p1077111291516"></a>objectname</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p15772192916512"><a name="p15772192916512"></a><a name="p15772192916512"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p577219298514"><a name="p577219298514"></a><a name="p577219298514"></a>依赖对象的名字。</p>
</td>
</tr>
</tbody>
</table>
