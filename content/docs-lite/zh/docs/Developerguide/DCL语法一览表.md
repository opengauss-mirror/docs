# DCL语法一览表<a name="ZH-CN_TOPIC_0289900059"></a>

DCL（Data Control Language数据控制语言），是用来创建用户角色、设置或更改数据库用户或角色权限的语句。

## 定义角色<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_s0c1bba1b7b44472f9e944a7a0a05844b"></a>

角色是用来管理权限的，从数据库安全的角度考虑，可以把所有的管理和操作权限划分到不同的角色上。所涉及的SQL语句，请参考[表1](#zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f11)。

**表 1**  角色定义相关SQL

<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_tf1770f1724d84240998305bfca259f11"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>创建角色</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="CREATE-ROLE.md">CREATE ROLE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r6a6a1e2305bf47f8a5b8748360e46ed5"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_abcbf432a100640d693def53b0f0c4752"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_abcbf432a100640d693def53b0f0c4752"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_abcbf432a100640d693def53b0f0c4752"></a>修改角色属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ac5191fbbf29a4bafa3078c2e88a0853c"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ac5191fbbf29a4bafa3078c2e88a0853c"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ac5191fbbf29a4bafa3078c2e88a0853c"></a><a href="ALTER-ROLE.md">ALTER ROLE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r715692b15fa244b2ace99e632c9b37a0"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ab04d86df3f8340e6aed616e31c1ff7d2"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ab04d86df3f8340e6aed616e31c1ff7d2"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ab04d86df3f8340e6aed616e31c1ff7d2"></a>删除角色</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3abbf4fb11b14fc39097f99fe7bc59f9"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3abbf4fb11b14fc39097f99fe7bc59f9"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a3abbf4fb11b14fc39097f99fe7bc59f9"></a><a href="DROP-ROLE.md">DROP ROLE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义用户<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_sc5e6a9242cb7408d8195ab3614dfc2fd"></a>

用户是用来登录数据库的，通过对用户赋予不同的权限，可以方便地管理用户对数据库的访问及操作。所涉及的SQL语句，请参考[表2](#zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_t52a128d57b274569b95a3b35f6871348)。

**表 2**  用户定义相关SQL

<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_t52a128d57b274569b95a3b35f6871348"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r50f10a8659a345909505fd5a097bf665"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a2cd0122f416e444c8847d273c0ac314c"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a2cd0122f416e444c8847d273c0ac314c"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a2cd0122f416e444c8847d273c0ac314c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_afe09923faa7c46d6b179cdb06ff6ce55"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_afe09923faa7c46d6b179cdb06ff6ce55"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_afe09923faa7c46d6b179cdb06ff6ce55"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_ref106bd33c714ffabe214781f13990d6"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a08b5b8294e614b44b7a2f6267b812eab"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a08b5b8294e614b44b7a2f6267b812eab"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a08b5b8294e614b44b7a2f6267b812eab"></a>创建用户</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_afd7d4b5b91e048ba9405cd01d202fa90"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_afd7d4b5b91e048ba9405cd01d202fa90"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_afd7d4b5b91e048ba9405cd01d202fa90"></a><a href="CREATE-USER.md">CREATE USER</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r999a8824fae14b139d941293c391ef8b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_af16f0fb459e64e749e574bbac1d8d7f7"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_af16f0fb459e64e749e574bbac1d8d7f7"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_af16f0fb459e64e749e574bbac1d8d7f7"></a>修改用户属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a5b24e04ee8e146ceaf05f44d509e6577"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a5b24e04ee8e146ceaf05f44d509e6577"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a5b24e04ee8e146ceaf05f44d509e6577"></a><a href="ALTER-USER.md">ALTER USER</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_r8b8beb645e1d44b9bddce610a7530036"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a336f427eb5914009917f0466daebc374"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a336f427eb5914009917f0466daebc374"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_a336f427eb5914009917f0466daebc374"></a>删除用户</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p766852103429"><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p766852103429"></a><a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p766852103429"></a><a href="DROP-USER.md">DROP USER</a></p>
</td>
</tr>
</tbody>
</table>

## 授权<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059778670_s372f95d7fc554f2181b8ce8f2095e8f8"></a>

openGauss提供了针对数据对象和角色授权的语句，请参考[GRANT](GRANT.md)。

## 收回权限<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059778670_s2560fc1e38394aeeae7fc2a8b7231a43"></a>

openGauss提供了收回权限的语句，请参考[REVOKE](REVOKE.md)。

## 设置默认权限<a name="zh-cn_topic_0283136632_zh-cn_topic_0237122051_zh-cn_topic_0059778670_s8133f68ab7684b3aaf5afb52fa8be7e7"></a>

openGauss允许设置应用于将来创建的对象的权限，请参考[ALTER DEFAULT PRIVILEGES](ALTER-DEFAULT-PRIVILEGES.md)。

## 关闭当前节点<a name="zh-cn_topic_0283136632_section153781731062"></a>

openGauss支持使用shutdown命令关闭当前数据库节点，请参考[SHUTDOWN](SHUTDOWN.md)。

