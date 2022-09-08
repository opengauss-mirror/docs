# DCL语法一览表<a name="ZH-CN_TOPIC_0289900059"></a>

DCL（Data Control Language数据控制语言），是用来创建用户角色、设置或更改数据库用户或角色权限的语句。

## SHOW<a name="zh-cn_topic_0283136632_section153781731062"></a>

openGauss支持使用SHOW命令展示各种对象信息。所涉及的SQL语句，请参考[表1](#zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f11)。

**表 1**  SHOW语句相关SQL
<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f11"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示索引信息</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-INDEX.md">SHOW INDEX</a></p>
</td>
</tr>
</tbody>
</table>

## GRANT<a name="zh-cn_topic_0283136632_section153781731062"></a>

openGauss支持使用GRANT命令授予各种权限。所涉及的SQL语句，请参考[表2](#zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f12)。

**表 2**  GRANT语句相关SQL

<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f12"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许新建索引的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT INDEX</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许对function和procedure进行修改的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许新建function和procedure的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许创建临时表的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许当前用户新建用户的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE USER</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许创建新的表空间的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-GRANT.md">GRANT CREATE TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>

## REVOKE<a name="zh-cn_topic_0283136632_section153781731062"></a>

openGauss支持使用REVOKE命令撤销各种权限。所涉及的SQL语句，请参考[表2](#zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f13)。

**表 3**  REVOKE语句相关SQL

<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f13"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许新建索引的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE INDEX</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许对function和procedure进行修改的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许新建function和procedure的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许创建临时表的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许当前用户新建用户的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE USER</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>允许创建新的表空间的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>
