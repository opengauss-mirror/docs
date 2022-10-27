# DDL Syntax Overview<a name="EN-US_TOPIC_0289900414"></a>

Data definition language (DDL) is used to define or modify an object in a database, such as a table, index, or view.

## Defining a Tablespace<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s21cf482a805644cbac9ae0704362a934"></a>

A tablespace is used to manage data objects and corresponds to a catalog on a disk. For details about the involved SQL statements, see [Table 5](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9).

**Table 5** SQL statements for defining a tablespace

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
</tbody>
</table>


## Defining a Table<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

A table is a special data structure in a database and is used to store data objects and relationships between data objects. For details about the involved SQL statements, see [Table 1](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605).

**Table 1** SQL statements for defining a table

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>Function </p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>Related SQL Statements</p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a>Modify table attributes.</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-ALTER-TABLE.md">ALTER TABLE</a></p>
</td>
</tr>
</tr>
</tbody>
</table>

## Define a Partitioned Table <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

A partitioned table is a special data structure in a database and is used to store data objects and the relationship between data objects. For details about the involved SQL statements, see [Table 7](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692).

**Table 7** SQL statements for defining a partitioned table

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

## Define an Index <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

An index is the sequence of values in one or more columns in a database table. It is a data structure that improves the speed of data access to specific information in a database table. For details about the involved SQL statements, see [Table 2](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606).

**Table 2** SQL statements for defining an index
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

## Define a Partitioned Table <a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

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
