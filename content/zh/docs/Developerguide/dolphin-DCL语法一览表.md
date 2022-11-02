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
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>查当前外部连接（或内部线程）相关信息</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-PROCESSLIST.md">SHOW PROCESSLIST</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示创建表语句</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-CREATE-TABLE.md">SHOW-CREATE-TABLE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示创建函数语句</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-CREATE-FUNCTION.md">SHOW-CREATE-FUNCTION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示创建存储过程语句</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-CREATE-PROCEDURE.md">SHOW-CREATE-PROCEDURE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示创建数据库语句</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-CREATE-DATABASE.md">SHOW-CREATE-DATABASE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示创建触发器语句</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-CREATE-TRIGGER.md">SHOW-CREATE-TRIGGER</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>展示创建视图语句</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-CREATE-VIEW.md">SHOW-CREATE-VIEW</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>查询guc参数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SHOW-VARIABLES.md">SHOW-VARIABLES</a></p>
</td></tr>
<tr><td><p>显示openGauss中对用户的权限信息</p></td><td><p><a href="dolphin-SHOW-GRANTS.md">SHOW GRANTS</a></p></td></tr>
<tr><td><p>显示有关存储函数的信息</p></td><td><p><a href="dolphin-SHOW-FUNCTION-STATUS.md">SHOW FUNCTION STATUS</a></p></td></tr>
<tr><td><p>显示有关存储过程的信息</p></td><td><p><a href="dolphin-SHOW-PROCEDURE-STATUS.md">SHOW PROCEDURE STATUS</a></p></td></tr>
<tr><td><p>显示有关触发器的信息</p></td><td><p><a href="dolphin-SHOW-TRIGGERS.md">SHOW TIRRGER</a></p></td>
<tr><td><p>显示支持的字符集的信息</p></td><td><p><a href="dolphin-SHOW-CHARACTER-SET.md">SHOW CHARACTER SET、SHOW CHARSET</a></p></td>
<tr><td><p>显示支持的字符序的信息</p></td><td><p><a href="dolphin-SHOW-COLLATION.md">SHOW COLLATION</a></p></td>
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
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a05852c742a4dd98ece08701b9dd96945a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_b0ba1177437559c76bcc1cd6127cc462f6"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_b0ba1177437559c76bcc1cd6127cc462f6"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_b0ba1177437559c76bcc1cd6127cc462f6"></a>授予代理者权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_4b1a04ac717679e536e2a6f9c751b2921c"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_4b1a04ac717679e536e2a6f9c751b2921c"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_4b1a04ac717679e536e2a6f9c751b2921c"></a><a href="../undefined">GRANT PROXY</a></p>
</td>
</tr>
</tbody>
</table>

## REVOKE<a name="zh-cn_topic_0283136632_section153781731062"></a>

openGauss支持使用REVOKE命令撤销各种权限。所涉及的SQL语句，请参考[表3](#zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f13)。

**表 3**  REVOKE语句相关SQL

<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f13"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>撤消新建索引的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE INDEX</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>撤消对function和procedure进行修改的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE ALTER ROUTINE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>撤消新建function和procedure的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE ROUTINE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>撤消创建临时表的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE TEMPORARY TABLES</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>撤消当前用户新建用户的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE USER</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>撤消创建新的表空间的权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-REVOKE.md">REVOKE CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_e6a4b114348a6fc29442f570890d0d1930"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_fb90643b4fa0c442c807ceb382f51000c4"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_fb90643b4fa0c442c807ceb382f51000c4"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_fb90643b4fa0c442c807ceb382f51000c4"></a>召回代理者权限</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_56fd6b825588cb7108647eeeae6dd8c9c8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_56fd6b825588cb7108647eeeae6dd8c9c8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_56fd6b825588cb7108647eeeae6dd8c9c8"></a><a href="../undefined">REVOKE PROXY</a></p>
</td>
</tr>
</tbody>
</table>


## KILL<a name="zh-cn_topic_0283136632_section153781731062"></a>

openGauss支持使用KILL命令终止指定连接或该连接下执行的SQL语句。所涉及的SQL语句，请参考表4

**表 4**  KILL语句相关SQL

<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>终止指定连接或该连接下执行的SQL语句。</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-KILL.md">KILL</a></p>
</td>
</tbody>
</table>

## SET PASSWORD

openGauss支持使用SET PASSWORD命令修改用户密码。所涉及的SQL语句，请参考表5

**表 5** SET PASSWORD语句相关SQL

<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>修改用户密码。</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="dolphin-SET-PASSWORD.md">SET PASSWORD</a></p>
</td>
</tbody>
</table>