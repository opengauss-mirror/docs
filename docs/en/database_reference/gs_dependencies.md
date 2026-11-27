---
description: This document describes GS\_DEPENDENCIES in openGauss.
keywords: [openGauss, GS\_DEPENDENCIES, database reference]
---

# GS\_DEPENDENCIES

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:41:45.791Z -->

The GS\_DEPENDENCIES system table records the dependency information between stored procedures/packages and referenced objects. Unlike the existing PG\_DEPEND system table that records dependency information, the GS\_DEPENDENCIES system table allows recording the dependency relationship between stored procedure/package objects and referenced objects that have not yet been defined. The information about referenced objects is recorded in the GS\_DEPENDENCIES\_OBJ system table, and the refobjoid field records the OID of the referenced object in the GS\_DEPENDENCIES\_OBJ system table. To record dependency relationships in the GS\_DEPENDENCIES system table, set the GUC parameter `behavior_compat_options='plpgsql_dependency'`.

**Table 1**  GS\_DEPENDENCIES columns

<a name="table87711029252"></a>
<table><thead align="left"><tr id="row19771162919518"><th class="cellrowborder" valign="top" width="22.31223122312231%" id="mcps1.2.4.1.1"><p id="p1977111293511"><a name="p1977111293511"></a><a name="p1977111293511"></a>Name</p></th>
<th class="cellrowborder" valign="top" width="25.36253625362536%" id="mcps1.2.4.1.2"><p id="p18771229953"><a name="p18771229953"></a><a name="p18771229953"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="52.32523252325233%" id="mcps1.2.4.1.3"><p id="p197711229258"><a name="p197711229258"></a><a name="p197711229258"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row1373110353415"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13731935847"><a name="p13731935847"></a><a name="p13731935847"></a>schemaname</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p11732735646"><a name="p11732735646"></a><a name="p11732735646"></a>name</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p273243512414"><a name="p273243512414"></a><a name="p273243512414"></a>Name of the schema to which the dependent object belongs.</p></td>
</tr>
<tr id="row1377118292512"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p117710299515"><a name="p117710299515"></a><a name="p117710299515"></a>packagename</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p177718296517"><a name="p177718296517"></a><a name="p177718296517"></a>name</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1077115291520"><a name="p1077115291520"></a><a name="p1077115291520"></a>Name of the package to which the dependent object belongs.</p></td>
</tr>
<tr id="row1177172911511"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p13771829951"><a name="p13771829951"></a><a name="p13771829951"></a>refobjpos</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p137714291759"><a name="p137714291759"></a><a name="p137714291759"></a>int8</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p1577172917515"><a name="p1577172917515"></a><a name="p1577172917515"></a>Position information of the referenced object in the dependent object. It includes the position in a type (field value 1, the same below), the package specification (2), the function header (4), the function body (8), and the package body (16).</p></td>
</tr>
<tr id="row1277112913514"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p147712291756"><a name="p147712291756"></a><a name="p147712291756"></a>refobjoid</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p57713291553"><a name="p57713291553"></a><a name="p57713291553"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p8771829754"><a name="p8771829754"></a><a name="p8771829754"></a>OID of the referenced object in the GS_DEPENDENCIES_OBJ system table.</p></td>
</tr>
<tr id="row6771729654"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1077111291516"><a name="p1077111291516"></a><a name="p1077111291516"></a>objectname</p></td>
<td class="cellrowborder" valign="top" width="25.36253625362536%" headers="mcps1.2.4.1.2 "><p id="p15772192916512"><a name="p15772192916512"></a><a name="p15772192916512"></a>text</p></td>
<td class="cellrowborder" valign="top" width="52.32523252325233%" headers="mcps1.2.4.1.3 "><p id="p577219298514"><a name="p577219298514"></a><a name="p577219298514"></a>Name of the dependent object.</p></td>
</tr>
</tbody>
</table>
