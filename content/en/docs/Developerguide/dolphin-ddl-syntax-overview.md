# DDL Syntax Overview<a name="EN-US_TOPIC_0289900414"></a>

Data definition language (DDL) is used to define or modify an object in a database, such as a table, index, or view.

## Defining a Tablespace<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s21cf482a805644cbac9ae0704362a934"></a>

A tablespace is used to manage data objects and corresponds to a catalog on a disk. For details about the involved SQL statements, see [Table 1](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9).

**Table 1** SQL statements for defining a tablespace

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r116a50a786884aaab5f7b66680db1f6d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"></a>Related SQL Statements</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r316d1f6a86ad46cb9b4c6ff0b9f96b1a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"></a>Create a tablespace.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p934358210356"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p934358210356"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p934358210356"></a><a href="dolphin-CREATE-TABLESPACE.md">CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r615f74060d7a42349fba1c0c214f516b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a>Modify tablespace attributes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a href="dolphin-ALTER-TABLESPACE.md">ALTER TABLESPACE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r4fae0d4c84f04993b6c2284f09c8792f"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p630928210356"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p630928210356"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p630928210356"></a>Delete the tablespace.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a href="dolphin-DROP-TABLESPACE.md">DROP TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>


## Defining a Table<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

A table is a special data structure in a database and is used to store data objects and relationships between data objects. For details about the involved SQL statements, see [Table 2](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605).

**Table 2** SQL statements for defining a table

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>Related SQL Statements</p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a>Create a table.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-CREATE-TABLE.md">CREATE TABLE</a></p>
</td>
</tr>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a>Modify table attributes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-ALTER-TABLE.md">ALTER TABLE</a></p>
</td>
</tr>
</tr>
</tbody>
</table>

## Defining a Partitioned Table <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

A partitioned table is a special data structure in a database and is used to store data objects and the relationship between data objects. For details about the involved SQL statements, see [Table 3](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692).

**Table 3** SQL statements for defining a partitioned table

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r73caab0c0bba4d22ac5ceb66ff8d3796"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a>Related SQL Statements</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rebbe43e909a74dad9db795ec93be2bfe"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a>Create a partitioned table.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a href="dolphin-CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a></p>
</td>
</tr>
</tbody>
</table>

## Defining an Index <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

An index is the sequence of values in one or more columns in a database table. It is a data structure that improves the speed of data access to specific information in a database table. For details about the involved SQL statements, see [Table 4](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606).

**Table 4** SQL statements for defining an index
<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>Related SQL Statements</p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a>Define an index.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-CREATE-INDEX.md">CREATE INDEX</a></p>
</td>
</tr>
</tr>
</tbody>
</table>

## Defining a Partitioned Table <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

A partitioned table is a special data structure in a database and is used to store data objects and the relationship between data objects. For details about the involved SQL statements, see [Table 5](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692).

**Table 5** SQL statements for defining a partitioned table

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692"></a>

<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r73caab0c0bba4d22ac5ceb66ff8d3796"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a>Related SQL Statements</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rebbe43e909a74dad9db795ec93be2bfe"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a>Create a partitioned table.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a href="dolphin-CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r9223af2d14d34d238d8388d1ef83a674"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a>Create a partition.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a href="dolphin-ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rc1dc611978054eda8fd7c645d604483a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a>Modify the attributes of a partitioned table.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2517a72613cc435d90762683eeebbb23"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a href="dolphin-ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r22aa8dc406b34c21be9873553de4dda1"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a>Delete a partition. </p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a href="dolphin-ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Stored Procedure <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s3ca08bd6a23e4b8e951078ea5758f1c9"></a>

A stored procedure is a set of SQL statements for achieving specific functions and is stored in the database after compiling. Users can specify a name and provide parameters (if necessary) to execute the stored procedure. For details about the involved SQL statements, see [Table 9](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t0116270962694804b50796a5d6824f3b).

**Table 9** SQL statements for defining a stored procedure

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t0116270962694804b50796a5d6824f3b"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_re416e4c2eea34c93af0cae3159a920c1"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r84dff1033eba4434ac6e33ad0a95f2dc"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a>Create a stored procedure.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a href="dolphin-CREATE-PROCEDURE.md">CREATE PROCEDURE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rf194389b8b3449f1856055707d47c135"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a>Modify a stored procedure.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a href="dolphin-ALTER-PROCEDURE.md">ALTER PROCEDURE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Function<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s0eaa1519f8324492a526687889e5f356"></a>

In openGauss, a function is similar to a stored procedure, which is a set of SQL statements. The function and stored procedure are used the same. For details about the involved SQL statements, see [Table 10](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b).

**Table 10** SQL statements for defining a function

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r244b425944f9453cab63d4d47f42c881"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r2e24eb373a684c04a36282e82f32c84e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a>Create a function.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a href="dolphin-CREATE-FUNCTION.md">CREATE FUNCTION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r8adc8972f2324d37aca1a663dc41773c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a>Modify function attributes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a href="dolphin-ALTER-FUNCTION.md">ALTER FUNCTION</a></p>
</td>
</tr>
</tr>
</tbody>
</table>

## Calculating the Table Data Checksum <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_726c591645b6bb268663e85f5b5bd46dd5"></a>

The checksum is calculated for the visible data in the queried table at the query time. The checksum is irrelevant to the data sequence, storage location, and table name, and is only for the actual data. For details about the involved SQL statements, see [Table 11](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_83947b510399c96d25530915513295e3d8).

**Table 11** SQL statements for defining a function

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_83947b510399c96d25530915513295e3d8"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_5c57bfdd51d8e832ae507001ca55d7d189"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_cc5d7f7963415ac6ccc11994f21dc04439"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_cc5d7f7963415ac6ccc11994f21dc04439"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_cc5d7f7963415ac6ccc11994f21dc04439"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_fe26ef3e3a7c4db2ce5f4d8b12b0427dbf"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_fe26ef3e3a7c4db2ce5f4d8b12b0427dbf"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_fe26ef3e3a7c4db2ce5f4d8b12b0427dbf"></a>Related SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_81276653292d08668add24976dcd18a465"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_cead2ac9374149e2bed51c58f880350c22"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_cead2ac9374149e2bed51c58f880350c22"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_cead2ac9374149e2bed51c58f880350c22"></a>Calculate the table data checksum.</p>
</td>
<td class="cellrowborder" valign="top" width= "50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_94328d89eee2bb036117cb809fff43b454"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_94328d89eee2bb036117cb809fff43b454"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_94328d89eee2bb036117cb809fff43b454"></a><a href="../undefined">CHECKSUM TABLE</a></p>
</td>
</tr>

</tbody>
</table>
