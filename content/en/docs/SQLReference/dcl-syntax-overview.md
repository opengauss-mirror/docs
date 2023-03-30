# DCL Syntax Overview<a name="EN-US_TOPIC_0289900059"></a>

Data control language \(DCL\) is used to create users and roles and set or modify database users or role rights.

## Defining a Role<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_s0c1bba1b7b44472f9e944a7a0a05844b"></a>

A role is used to manage permissions. For database security, management and operation permissions can be granted to different roles. For details about related SQL statements, see  [Table 1](#en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f11).

**Table  1**  SQL statements for defining a role

<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_tf1770f1724d84240998305bfca259f11"></a>
<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a26391d47924f35bac29320b4b28f71"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a8fd4608983b14f0bac547cd20509e81e"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a6d6f857aed5c41f3a8df387b5d0227d8"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r1e01fd5954b8406db272bb20e836b348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3fdb3703e8c540498286e0f04724b78d"></a>Creating a role</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a59d57072ed9040daaf876aa3b5017935"></a><a href="create-role.md">CREATE ROLE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r6a6a1e2305bf47f8a5b8748360e46ed5"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_abcbf432a100640d693def53b0f0c4752"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_abcbf432a100640d693def53b0f0c4752"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_abcbf432a100640d693def53b0f0c4752"></a>Altering role attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ac5191fbbf29a4bafa3078c2e88a0853c"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ac5191fbbf29a4bafa3078c2e88a0853c"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ac5191fbbf29a4bafa3078c2e88a0853c"></a><a href="alter-role.md">ALTER ROLE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r715692b15fa244b2ace99e632c9b37a0"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ab04d86df3f8340e6aed616e31c1ff7d2"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ab04d86df3f8340e6aed616e31c1ff7d2"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ab04d86df3f8340e6aed616e31c1ff7d2"></a>Dropping a role</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3abbf4fb11b14fc39097f99fe7bc59f9"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3abbf4fb11b14fc39097f99fe7bc59f9"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a3abbf4fb11b14fc39097f99fe7bc59f9"></a><a href="drop-role.md">DROP ROLE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a User<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_sc5e6a9242cb7408d8195ab3614dfc2fd"></a>

A user is used to log in to a database. Different permissions can be granted to users for managing data accesses and operations of the users. For details about related SQL statements, see  [Table 2](#en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_t52a128d57b274569b95a3b35f6871348).

**Table  2**  SQL statements for defining a user

<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_t52a128d57b274569b95a3b35f6871348"></a>
<table><thead align="left"><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r50f10a8659a345909505fd5a097bf665"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a2cd0122f416e444c8847d273c0ac314c"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a2cd0122f416e444c8847d273c0ac314c"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a2cd0122f416e444c8847d273c0ac314c"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_afe09923faa7c46d6b179cdb06ff6ce55"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_afe09923faa7c46d6b179cdb06ff6ce55"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_afe09923faa7c46d6b179cdb06ff6ce55"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_ref106bd33c714ffabe214781f13990d6"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a08b5b8294e614b44b7a2f6267b812eab"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a08b5b8294e614b44b7a2f6267b812eab"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a08b5b8294e614b44b7a2f6267b812eab"></a>Creating a User</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_afd7d4b5b91e048ba9405cd01d202fa90"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_afd7d4b5b91e048ba9405cd01d202fa90"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_afd7d4b5b91e048ba9405cd01d202fa90"></a><a href="create-user.md">CREATE USER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r999a8824fae14b139d941293c391ef8b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_af16f0fb459e64e749e574bbac1d8d7f7"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_af16f0fb459e64e749e574bbac1d8d7f7"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_af16f0fb459e64e749e574bbac1d8d7f7"></a>Altering user attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a5b24e04ee8e146ceaf05f44d509e6577"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a5b24e04ee8e146ceaf05f44d509e6577"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a5b24e04ee8e146ceaf05f44d509e6577"></a><a href="alter-user.md">ALTER USER</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_r8b8beb645e1d44b9bddce610a7530036"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a336f427eb5914009917f0466daebc374"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a336f427eb5914009917f0466daebc374"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_a336f427eb5914009917f0466daebc374"></a>Dropping a user</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_en-us_topic_0058966187_p766852103429"><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_en-us_topic_0058966187_p766852103429"></a><a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059777960_en-us_topic_0058966187_p766852103429"></a><a href="drop-user.md">DROP USER</a></p>
</td>
</tr>
</tbody>
</table>

## Granting Rights<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059778670_s372f95d7fc554f2181b8ce8f2095e8f8"></a>

openGauss provides a statement for granting rights to data objects and roles. For details, see  [GRANT](grant.md).

## Revoking Rights<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059778670_s2560fc1e38394aeeae7fc2a8b7231a43"></a>

openGauss provides a statement for revoking rights. For details, see  [REVOKE](revoke.md).

## Setting Default Rights<a name="en-us_topic_0283136632_en-us_topic_0237122051_en-us_topic_0059778670_s8133f68ab7684b3aaf5afb52fa8be7e7"></a>

openGauss allows users to set rights for objects that will be created. For details, see .[ALTER DEFAULT PRIVILEGES](alter-default-privileges.md)

## Shutting Down The Current Node<a name="en-us_topic_0283136632_section153781731062"></a>

openGauss allows users to run the  **shutdown**  command to shut down the current database node. For details, see  [SHUTDOWN](shutdown.md).

