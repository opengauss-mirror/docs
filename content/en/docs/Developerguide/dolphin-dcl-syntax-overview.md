# DCL Syntax Overview<a name="EN-US_TOPIC_0289900059"></a>

Data control language (DCL) is used to create users and roles and set or modify database users or role rights.

## SHOW<a name="en-us_topic_0283136632_section153781731062"></a>

openGauss can use the SHOW command to display various object information. For details about the involved SQL statements, see [Table 1](#en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f11).

**Table 1** SQL statements related to SHOW
<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f11"></a>
<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display index information.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-INDEX.md">SHOW INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Query the information about the current external connection (or internal thread).</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-PROCESSLIST.md">SHOW PROCESSLIST</a></p>
</td>
</tr>
</tbody>
</table>

## GRANT<a name="en-us_topic_0283136632_section153781731062"></a>

The openGauss allows you to run the GRANT command to grant various permissions. For details about the involved SQL statements, see [Table 2](#en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f12).

**Table 2** SQL statements related to GRANT

<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f12"></a>
<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to modify functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create temporary tables. </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Gran permission to the current user to create a user.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE USER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>

## REVOKE<a name="en-us_topic_0283136632_section153781731062"></a>

openGauss allows you to run the REVOKE command to revoke various permissions. For details about the involved SQL statements, see [Table 3](#en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f13).

**Table 3** SQL statements related to REVOKE

<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f13"></a>
<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to modify functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create temporary tables. </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Gran permission to the current user to create a user.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE USER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>

## KILL<a name="en-us_topic_0283136632_section153781731062"></a>

openGauss allows you to run the KILL command to terminate a specified connection or SQL statements executed under the connection. The following table lists the related SQL statements.

**Table 4** SQL statements related to KILL

<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Terminate a specified connection or an SQL statement executed under the connection.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-KILL.md">KILL</a></p>
</td>
</tbody>
</table>

## SET PASSWORD

openGauss allows you to run the SET PASSWORD command to change the user password. The following table lists the related SQL statements.

**Table 5** SQL statements related to SET PASSWORD

<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Change the user password.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SET-PASSWORD.md">SET PASSWORD</a></p>
</td>
</tbody>
</table>
