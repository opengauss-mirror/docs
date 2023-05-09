# GS\_PACKAGE

GS\_PACKAGE系统表记录PACKAGE内的信息。

**表 1**  GS\_PACKAGE字段

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
<tr id="row1377118292512"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p117710299515"><a name="p117710299515"></a><a name="p117710299515"></a>pkgnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p177718296517"><a name="p177718296517"></a><a name="p177718296517"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1077115291520"><a name="p1077115291520"></a><a name="p1077115291520"></a>package所属schema。</p>
</td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>pkgowner</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>package的所属者。</p>
</td>
</tr>
<tr id="row1277112913514"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p147712291756"><a name="p147712291756"></a><a name="p147712291756"></a>pkgname</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p57713291553"><a name="p57713291553"></a><a name="p57713291553"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p8771829754"><a name="p8771829754"></a><a name="p8771829754"></a>package的名字。</p>
</td>
</tr>
<tr id="row6771729654"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1077111291516"><a name="p1077111291516"></a><a name="p1077111291516"></a>pkgspecsrc</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p15772192916512"><a name="p15772192916512"></a><a name="p15772192916512"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p577219298514"><a name="p577219298514"></a><a name="p577219298514"></a>package specification的内容。</p>
</td>
</tr>
<tr id="row207721329253"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p57721829656"><a name="p57721829656"></a><a name="p57721829656"></a>pkgbodydeclsrc</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p4772142911511"><a name="p4772142911511"></a><a name="p4772142911511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1377211297517"><a name="p1377211297517"></a><a name="p1377211297517"></a>package body的内容。</p>
</td>
</tr>
<tr id="row157723291058"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1877213292056"><a name="p1877213292056"></a><a name="p1877213292056"></a>pkgbodyinitsrc</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p157723291155"><a name="p157723291155"></a><a name="p157723291155"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1077252910512"><a name="p1077252910512"></a><a name="p1077252910512"></a>package init的内容。</p>
</td>
</tr>
<tr id="row1077217291059"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p47725291355"><a name="p47725291355"></a><a name="p47725291355"></a>pkgacl</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p1772182920513"><a name="p1772182920513"></a><a name="p1772182920513"></a>aclitem</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p17721229655"><a name="p17721229655"></a><a name="p17721229655"></a>访问权限。</p>
</td>
</tr>
    <tr id="row1077217291059"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p47725291355"><a name="p47725291355"></a><a name="p47725291355"></a>pkgsecdef</p>
</td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p1772182920513"><a name="p1772182920513"></a><a name="p1772182920513"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p17721229655"><a name="p17721229655"></a><a name="p17721229655"></a>package是否是定义者权限。</p>
</td>
</tr>
</tbody>
</table>


