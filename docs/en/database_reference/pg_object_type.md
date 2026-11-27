---
description: This document describes PG\_OBJECT\_TYPE in openGauss.
keywords: [openGauss, PG\_OBJECT\_TYPE, database reference]
---

# PG\_OBJECT\_TYPE

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:47:32.152Z -->

The PG\_OBJECT\_TYPE system table records all object types.

**Table 1**  PG\_OBJECT\_TYPE columns

<a name="table87711029252"></a>
<table><thead align="left"><tr id="row19771162919518"><th class="cellrowborder" valign="top" width="22.31223122312231%" id="mcps1.2.4.1.1"><p id="p1977111293511"><a name="p1977111293511"></a><a name="p1977111293511"></a>Name</p></th>
<th class="cellrowborder" valign="top" width="25.36253625362536%" id="mcps1.2.4.1.2"><p id="p18771229953"><a name="p18771229953"></a><a name="p18771229953"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="52.32523252325233%" id="mcps1.2.4.1.3"><p id="p197711229258"><a name="p197711229258"></a><a name="p197711229258"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>typoid</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>Unique identifier of the type.</p></td>
</tr>
<tr id="row1377118292512"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p117710299515"><a name="p117710299515"></a><a name="p117710299515"></a>supertypeoid</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p177718296517"><a name="p177718296517"></a><a name="p177718296517"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1077115291520"><a name="p1077115291520"></a><a name="p1077115291520"></a>OID of the parent type.</p></td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>isfinal</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>Whether inheritance is allowed.</p></td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>isinstantiable</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>Whether instantiation is allowed.</p></td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>ispersistable</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>Whether persistence is allowed.</p></td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>isbodydefined</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>Whether the type body is defined.</p></td>
</tr>
<tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>mapmethod</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>OID of the map function.</p></td>
</tr>
<tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>ordermethod</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>OID of the order function.</p></td>
</tr>
<tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>objectrelid</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>OID of the object table.</p></td>
</tr>
<tr id="row1277112913514"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p147712291756"><a name="p147712291756"></a><a name="p147712291756"></a>objectoptions</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p57713291553"><a name="p57713291553"></a><a name="p57713291553"></a>int4</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p8771829754"><a name="p8771829754"></a><a name="p8771829754"></a>Reserved encoding bits.</p></td>
</tr>
<tr id="row6771729654"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1077111291516"><a name="p1077111291516"></a><a name="p1077111291516"></a>typespecsrc</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p15772192916512"><a name="p15772192916512"></a><a name="p15772192916512"></a>text</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p577219298514"><a name="p577219298514"></a><a name="p577219298514"></a>Content of the type specification.</p></td>
</tr>
<tr id="row207721329253"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p57721829656"><a name="p57721829656"></a><a name="p57721829656"></a>typebodydeclsrc</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p4772142911511"><a name="p4772142911511"></a><a name="p4772142911511"></a>text</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1377211297517"><a name="p1377211297517"></a><a name="p1377211297517"></a>Content of the type body.</p></td>
</tr>
<tr id="row207721329253"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p57721829656"><a name="p57721829656"></a><a name="p57721829656"></a>objectextensions</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p4772142911511"><a name="p4772142911511"></a><a name="p4772142911511"></a>text[]</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1377211297517"><a name="p1377211297517"></a><a name="p1377211297517"></a>Reserved text array.</p></td>
</tr>
</tbody>
</table>
