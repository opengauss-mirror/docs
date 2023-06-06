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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-index.md">SHOW INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_296621ec293a14518ed0a26f8991c196d"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_98879ab521de11553a0e799f3d76ab421"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_98879ab521de11553a0e799f3d76ab421"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_98879ab521de11553a0e799f3d76ab421"></a>Display the current permission information list.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_42cfe769bc0303e12ab7926322f857cfb"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_42cfe769bc0303e12ab7926322f857cfb"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_42cfe769bc0303e12ab7926322f857cfb"></a><a href="dolphin-show-processlist.md">SHOW PRIVILEGES</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Query the information about the current external connection (or internal thread).</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-processlist.md">SHOW PROCESSLIST</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display the statement for creating a table.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-create-table.md">SHOW-CREATE-TABLE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display the statement for creating a function.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-create-function.md">SHOW-CREATE-FUNCTION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display the statement for creating a stored procedure.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-create-procedure.md">SHOW-CREATE-PROCEDURE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display the statement for creating a database.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-create-database.md">SHOW-CREATE-DATABASE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display the statement for creating a trigger.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-create-trigger.md">SHOW-CREATE-TRIGGER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Display the statement for creating a view.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-create-view.md">SHOW-CREATE-VIEW</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Query GUC parameters. </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-show-variables.md">SHOW-VARIABLES</a></p>
</td></tr>
<tr><td><p>Display the user permission information in openGauss.</p></td><td><p><a href="dolphin-show-grants.md">SHOW GRANTS</a></p></td></tr>
<tr><td><p>Display information about storage functions. </p></td><td><p><a href="dolphin-show-function-status.md">SHOW FUNCTION STATUS</a></p></td></tr>
<tr><td><p>Display the information about the stored procedure. </p></td><td><p><a href="dolphin-show-procedure-status.md">SHOW PROCEDURE STATUS</a></p></td></tr>
<tr><td><p>Display information about the trigger. </p></td><td><p><a href="dolphin-show-triggers.md">SHOW TIRRGER</a></p></td>
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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-grant.md">GRANT INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to modify functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-grant.md">GRANT ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-grant.md">GRANT CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create temporary tables. </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-grant.md">GRANT CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Gran permission to the current user to create a user.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-grant.md">GRANT CREATE USER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Grant permission to create tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-grant.md">GRANT CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a05852c742a4dd98ece08701b9dd96945a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_b0ba1177437559c76bcc1cd6127cc462f6"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_b0ba1177437559c76bcc1cd6127cc462f6"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_b0ba1177437559c76bcc1cd6127cc462f6"></a>Grant the proxy permission.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_4b1a04ac717679e536e2a6f9c751b2921c"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_4b1a04ac717679e536e2a6f9c751b2921c"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_4b1a04ac717679e536e2a6f9c751b2921c"></a><a href="dolphin-grant-revoke-proxy.md">GRANT PROXY</a></p>
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
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Revoke permission to create indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-revoke.md">REVOKE INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Revoke permission to modify functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-revoke.md">REVOKE ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Revoke permission to create functions and procedures.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-revoke.md">REVOKE CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Revoke permission to create temporary tables. </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-revoke.md">REVOKE CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Revoke permission to the current user to create a user.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-revoke.md">REVOKE CREATE USER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Revoke permission to create tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-revoke.md">REVOKE CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_e6a4b114348a6fc29442f570890d0d1930"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_fb90643b4fa0c442c807ceb382f51000c4"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_fb90643b4fa0c442c807ceb382f51000c4"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_fb90643b4fa0c442c807ceb382f51000c4"></a>Revoke the proxy permission.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_56fd6b825588cb7108647eeeae6dd8c9c8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_56fd6b825588cb7108647eeeae6dd8c9c8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_56fd6b825588cb7108647eeeae6dd8c9c8"></a><a href="dolphin-grant-revoke-proxy">REVOKE PROXY</a></p>
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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-kill.md">KILL</a></p>
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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-set-password.md">SET PASSWORD</a></p>
</td>
</tbody>
</table>
