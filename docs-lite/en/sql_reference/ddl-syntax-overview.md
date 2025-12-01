# DDL Syntax Overview<a name="EN-US_TOPIC_0289900414"></a>

Data definition language \(DDL\) is used to define or modify an object in a database, such as a table, an index, or a view.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>openGauss does not support DDL when the primary node of the database is incomplete. For example, if the primary node of the database in openGauss is faulty, creating a database or a table will fail.

## Defining a Database<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s57baeef469e24cc39dd5a38b4c53b6ab"></a>

A database is the warehouse for organizing, storing, and managing data. Defining a database includes creating a database, altering the database attributes, and deleting the database. For details about related SQL statements, see  [Table 1](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t986073679146430a8bce8bf0ea8f3607).

**Table  1**  SQL statements for defining a database

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t986073679146430a8bce8bf0ea8f3607"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r308f318a9df94cf195e1fecbda1d66a0"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4d4880369d7b430aa530690470423269"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4d4880369d7b430aa530690470423269"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4d4880369d7b430aa530690470423269"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rb622349a34a848e596c807c0ec44263b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"></a>Creating a database</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"></a><a href="create-database.md">CREATE DATABASE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ra82187da297c4ab088f6bc3dfb588c72"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"></a>Altering database attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"></a><a href="alter-database.md">ALTER DATABASE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r49f9c2a36cab4d92b9acf1f60ee88add"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"></a>Deleting a database</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p624643615931"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p624643615931"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p624643615931"></a><a href="drop-database.md">DROP DATABASE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a schema<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s5c384f8bb8634c348ae2ca36282a895e"></a>

A schema is the set of a group of database objects and is used to control the access to the database objects. For details about related SQL statements, see  [Table 2](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t02977f28a9564837881f110b305d7509).

**Table  2**  SQL statements for defining a schema

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t02977f28a9564837881f110b305d7509"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rf601f80c068b470c9385daea5868acce"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a90acab0ecac64d3c8e1fc47ed067f1b3"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a90acab0ecac64d3c8e1fc47ed067f1b3"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a90acab0ecac64d3c8e1fc47ed067f1b3"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a71712d4ccf8a4947a5f72d973a8aef80"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a71712d4ccf8a4947a5f72d973a8aef80"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a71712d4ccf8a4947a5f72d973a8aef80"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rbc35e8a17de84809aa4a82e48a87b1c9"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a56af102681fe4e66b7a85e1cdb14b943"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a56af102681fe4e66b7a85e1cdb14b943"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a56af102681fe4e66b7a85e1cdb14b943"></a>Creating a schema</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae2e374809ed64721bb1e396c6cd434b8"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae2e374809ed64721bb1e396c6cd434b8"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae2e374809ed64721bb1e396c6cd434b8"></a><a href="create-schema.md">CREATE SCHEMA</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rcca2efeaba2e4e6b819311f2ec926d77"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae896737506694336a82bc7bee4f9669d"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae896737506694336a82bc7bee4f9669d"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae896737506694336a82bc7bee4f9669d"></a>Altering schema attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae77a46ced97f4c0384a60ada9840949f"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae77a46ced97f4c0384a60ada9840949f"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ae77a46ced97f4c0384a60ada9840949f"></a><a href="alter-schema.md">ALTER SCHEMA</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r9c6fc59d27f14fb292d7a603c51911dd"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad467d3e891824294acc7f8bd1b6a3aa8"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad467d3e891824294acc7f8bd1b6a3aa8"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad467d3e891824294acc7f8bd1b6a3aa8"></a>Deleting a schema</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p966994310554"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p966994310554"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p966994310554"></a><a href="drop-schema.md">DROP SCHEMA</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Tablespace<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s21cf482a805644cbac9ae0704362a934"></a>

A tablespace is used to manage data objects and corresponds to a catalog on a disk. For details about related SQL statements, see  [Table 3](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9).

**Table  3**  SQL statements for defining a tablespace

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r116a50a786884aaab5f7b66680db1f6d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r316d1f6a86ad46cb9b4c6ff0b9f96b1a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"></a>Creating a tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p934358210356"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p934358210356"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p934358210356"></a><a href="create-tablespace.md">CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r615f74060d7a42349fba1c0c214f516b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a>Altering tablespace attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a href="alter-tablespace.md">ALTER TABLESPACE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r4fae0d4c84f04993b6c2284f09c8792f"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p630928210356"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p630928210356"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p630928210356"></a>Deleting a tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a href="drop-tablespace.md">DROP TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Table<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

A table is a special data structure in a database and is used to store data objects and relationship between data objects. For details about related SQL statements, see  [Table 4](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605).

**Table  4**  SQL statements for defining a table

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r9e51298494934eb9bd5b07116c60ec6c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1388923dd1f147f1822bf1c33883a95c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1388923dd1f147f1822bf1c33883a95c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1388923dd1f147f1822bf1c33883a95c"></a>Creating a table</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a62e37c66e8b64f3db41cb8b82eaa0d11"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a62e37c66e8b64f3db41cb8b82eaa0d11"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a62e37c66e8b64f3db41cb8b82eaa0d11"></a><a href="create-table.md">CREATE TABLE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p938501610638"></a>Altering table attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="alter-table.md">ALTER TABLE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r7a2aa55d44634eb1a5fd806ba5c7e91c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7f4436462cce48cc8f5ad272b2207b65"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7f4436462cce48cc8f5ad272b2207b65"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7f4436462cce48cc8f5ad272b2207b65"></a>Deleting a table</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9c6b94f27717489fb039d834fcc1b62b"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9c6b94f27717489fb039d834fcc1b62b"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9c6b94f27717489fb039d834fcc1b62b"></a><a href="drop-table.md">DROP TABLE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Partitioned Table<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

A partitioned table is a logical table used to improve query performance and does not store data \(data is stored in common tables\). For details about related SQL statements, see  [Table 5](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692).

**Table  5**  SQL statements for defining a partitioned table

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t3ec179079c524dbaae801012f990a692"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r73caab0c0bba4d22ac5ceb66ff8d3796"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rebbe43e909a74dad9db795ec93be2bfe"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a>Creating a partitioned table</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a href="create-table-partition.md">CREATE TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r9223af2d14d34d238d8388d1ef83a674"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a>Creating a partition</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a href="alter-table-partition.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rc1dc611978054eda8fd7c645d604483a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a>Altering partitioned table attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2517a72613cc435d90762683eeebbb23"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a href="alter-table-partition.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r22aa8dc406b34c21be9873553de4dda1"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a>Deleting a partition</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a href="alter-table-partition.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r409aa8908e324a2ba716f0a9deada0dc"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a724ce738ec554df5baa1f9b468e06751"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a724ce738ec554df5baa1f9b468e06751"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a724ce738ec554df5baa1f9b468e06751"></a>Deleting a partitioned table</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_acda41206dde44fa698d5230e8a2008f8"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_acda41206dde44fa698d5230e8a2008f8"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_acda41206dde44fa698d5230e8a2008f8"></a><a href="drop-table.md">DROP TABLE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining an Index<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

An index indicates the sequence of values in one or more columns in a database table. It is a data structure that improves the speed of data access to specific information in a database table. For details about related SQL statements, see  [Table 6](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_te79920e4b7b849b7a64fb71029436d48).

**Table  6**  SQL statements for defining an index

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_te79920e4b7b849b7a64fb71029436d48"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r268315ba29e3475c817a89fdcd821f68"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_afa18af00d6e941b9a6dc87783366cc3b"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_afa18af00d6e941b9a6dc87783366cc3b"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_afa18af00d6e941b9a6dc87783366cc3b"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a109d6faaaef1481092394cc0a368e495"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a109d6faaaef1481092394cc0a368e495"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a109d6faaaef1481092394cc0a368e495"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r4c9e69dd7eaa485f8c12349fd9c3fa88"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0c987317c328433fa15534a4c18e89ca"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0c987317c328433fa15534a4c18e89ca"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a0c987317c328433fa15534a4c18e89ca"></a>Creating an index</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1a7aef8d83154f698cb1b57b9ff404ba"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1a7aef8d83154f698cb1b57b9ff404ba"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a1a7aef8d83154f698cb1b57b9ff404ba"></a><a href="create-index.md">CREATE INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r2c67e1c1546042ba9410bd07594844ed"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2bc7e4a3e0be4136858a91e8ec95f145"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2bc7e4a3e0be4136858a91e8ec95f145"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2bc7e4a3e0be4136858a91e8ec95f145"></a>Altering index attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac7a24ac8e0f24d7ba3c07319fc2d87b0"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac7a24ac8e0f24d7ba3c07319fc2d87b0"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac7a24ac8e0f24d7ba3c07319fc2d87b0"></a><a href="alter-index.md">ALTER INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r2e2bb26792954e6598a1a75b55a9a111"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a77cb9a63ee734c4e91d27faf3147b580"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a77cb9a63ee734c4e91d27faf3147b580"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a77cb9a63ee734c4e91d27faf3147b580"></a>Deleting an index</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4ead1d9672274bd1842283f34b1587e7"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4ead1d9672274bd1842283f34b1587e7"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4ead1d9672274bd1842283f34b1587e7"></a><a href="drop-index.md">DROP INDEX</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ra8f723d34d33452e9a22ce9fbd46b663"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p546564010305"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p546564010305"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_en-us_topic_0058966187_p546564010305"></a>Rebuilding an index</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a60c0aa0e04544d61ad2bbf3d795499ae"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a60c0aa0e04544d61ad2bbf3d795499ae"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a60c0aa0e04544d61ad2bbf3d795499ae"></a><a href="reindex.md">REINDEX</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Stored Procedure<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s3ca08bd6a23e4b8e951078ea5758f1c9"></a>

A stored procedure is a set of SQL statements for achieving specific functions and is stored in the database after compiling. Users can specify a name and provide parameters \(if necessary\) to execute the stored procedure. For details about related SQL statements, see  [Table 7](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t0116270962694804b50796a5d6824f3b).

**Table  7**  SQL statements for defining a stored procedure

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t0116270962694804b50796a5d6824f3b"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_re416e4c2eea34c93af0cae3159a920c1"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r84dff1033eba4434ac6e33ad0a95f2dc"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a>Creating a stored procedure</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a href="create-procedure.md">CREATE PROCEDURE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rf194389b8b3449f1856055707d47c135"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a>Deleting a stored procedure</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a href="drop-procedure.md">DROP PROCEDURE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Function<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s0eaa1519f8324492a526687889e5f356"></a>

In openGauss, a function is similar to a stored procedure, which is a set of SQL statements. The function and stored procedure are used the same. For details about related SQL statements, see  [Table 8](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b).

**Table  8**  SQL statements for defining a function

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r244b425944f9453cab63d4d47f42c881"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r2e24eb373a684c04a36282e82f32c84e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a>Creating a function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a href="create-function.md">CREATE FUNCTION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r8adc8972f2324d37aca1a663dc41773c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a>Altering function attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a href="alter-function.md">ALTER FUNCTION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rae1abe6702344a25b03183e0e7593aaa"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a586cd77ffc284f5cb9b9df451e9380bf"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a586cd77ffc284f5cb9b9df451e9380bf"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a586cd77ffc284f5cb9b9df451e9380bf"></a>Deleting a function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac30dc4b7b00b4b95969cc12ce0ed16d8"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac30dc4b7b00b4b95969cc12ce0ed16d8"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac30dc4b7b00b4b95969cc12ce0ed16d8"></a><a href="drop-function.md">DROP FUNCTION</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Package<a name="section25515055414"></a>

A package consists of the package specification and package body. It is used to manage stored procedures and functions by class, which is similar to classes in languages such as Java and C++.

**Table  9**  SQL statements for defining a package

<a name="table114371041185613"></a>
<table><thead align="left"><tr id="row2615356124218"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p11615135614429"><a name="p11615135614429"></a><a name="p11615135614429"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p2615195616420"><a name="p2615195616420"></a><a name="p2615195616420"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row104381941145612"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16438741115613"><a name="p16438741115613"></a><a name="p16438741115613"></a>Creating a package</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13303183220388"><a name="p13303183220388"></a><a name="p13303183220388"></a><a href="create-package.md">CREATE PACKAGE</a></p>
</td>
</tr>
<tr id="row1843804116562"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p243884111569"><a name="p243884111569"></a><a name="p243884111569"></a>Deleting a package</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1543804185613"><a name="p1543804185613"></a><a name="p1543804185613"></a><a href="drop-package.md">DROP PACKAGE</a></p>
</td>
</tr>
<tr id="row11091148878"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p7109184817716"><a name="p7109184817716"></a><a name="p7109184817716"></a>Altering package attributes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1610911481715"><a name="p1610911481715"></a><a name="p1610911481715"></a><a href="alter-package.md">ALTER PACKAGE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a View<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_sdd4e8594bca54006b11d6f9daf7ccfa8"></a>

A view is a virtual table exported from one or more basic tables. It is used to control data accesses of users.  [Table 10](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_td65563e06b1c491892dbad9b57f3b96d)  lists the related SQL statements.

**Table  10**  SQL statements for defining a view

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_td65563e06b1c491892dbad9b57f3b96d"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ree8dabb9a0bf4667b0b9ceb11de7a2e0"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad7caef20f748424c8d1fe563f23014e4"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad7caef20f748424c8d1fe563f23014e4"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ad7caef20f748424c8d1fe563f23014e4"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ada80bc63929b4dcfb79c0f21f9e9aef1"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ada80bc63929b4dcfb79c0f21f9e9aef1"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ada80bc63929b4dcfb79c0f21f9e9aef1"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rb524e7c40285415aa5ae02866c6a7e9c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_acfdfeb8b4641417d83b00a3d4143da7c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_acfdfeb8b4641417d83b00a3d4143da7c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_acfdfeb8b4641417d83b00a3d4143da7c"></a>Creating a view</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_afc9667b512f34daeb468afd06f852b92"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_afc9667b512f34daeb468afd06f852b92"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_afc9667b512f34daeb468afd06f852b92"></a><a href="create-view.md">CREATE VIEW</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rb0ea1d0b0a424b1ba1b4c6bdf3aed129"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a02176940352a45a6bc52c1142c32149c"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a02176940352a45a6bc52c1142c32149c"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a02176940352a45a6bc52c1142c32149c"></a>Deleting a view</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aefe6621371b94ca49901fc1c815aa39a"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aefe6621371b94ca49901fc1c815aa39a"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_aefe6621371b94ca49901fc1c815aa39a"></a><a href="drop-view.md">DROP VIEW</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Cursor<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_s4d20cf566ab745e39cb56ab99b0e13c6"></a>

To process SQL statements, the stored procedure process assigns a memory segment to store context association. Cursors are handles or pointers to context regions. With a cursor, the stored procedure can control alterations in context areas. For details, see  [Table 11](#en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t191f977ebe0a4ab5b1348c888403e3b4).

**Table  11**  SQL statements for defining a cursor

<a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_t191f977ebe0a4ab5b1348c888403e3b4"></a>
<table><thead align="left"><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r77bad4c4ab644db499e221862f72a941"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2cfc7b04dbb44b8fb76b94927365a1ff"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2cfc7b04dbb44b8fb76b94927365a1ff"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a2cfc7b04dbb44b8fb76b94927365a1ff"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8f01a89e573348a0b1c739c57db997ff"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8f01a89e573348a0b1c739c57db997ff"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a8f01a89e573348a0b1c739c57db997ff"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r23fae7784e304eeb8e68b9ec97893e3b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4789ad511cc8484bb2ab71b745f3b816"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4789ad511cc8484bb2ab71b745f3b816"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a4789ad511cc8484bb2ab71b745f3b816"></a>Creating a cursor</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ceb4513780a48829f055aabe36672ca"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ceb4513780a48829f055aabe36672ca"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a6ceb4513780a48829f055aabe36672ca"></a><a href="cursor.md">CURSOR</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_r229f932eab55405c921e039a5cde8681"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7a462c064b0142388856a3328bd9a118"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7a462c064b0142388856a3328bd9a118"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a7a462c064b0142388856a3328bd9a118"></a>Moving a cursor</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a33cc54ca58ab486abc7ce4ee36dfa1c5"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a33cc54ca58ab486abc7ce4ee36dfa1c5"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a33cc54ca58ab486abc7ce4ee36dfa1c5"></a><a href="move.md">MOVE</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ra737a90e12f04be2987da168664683d7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a422cb95ad5e74e7aa6270cb69fe03404"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a422cb95ad5e74e7aa6270cb69fe03404"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a422cb95ad5e74e7aa6270cb69fe03404"></a>Fetching data from a cursor</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab29fe04a046e43efb10d4170d5dfca6a"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab29fe04a046e43efb10d4170d5dfca6a"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ab29fe04a046e43efb10d4170d5dfca6a"></a><a href="fetch.md">FETCH</a></p>
</td>
</tr>
<tr id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_rb0c93b92b8e849bf851cc8b8d617d9eb"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac975fe527038478b87085c1dfc86c826"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac975fe527038478b87085c1dfc86c826"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_ac975fe527038478b87085c1dfc86c826"></a>Closing a cursor</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a86498e78187b4afd8d95bdfcff078323"><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a86498e78187b4afd8d95bdfcff078323"></a><a name="en-us_topic_0283136643_en-us_topic_0237122049_en-us_topic_0059777960_a86498e78187b4afd8d95bdfcff078323"></a><a href="close.md">CLOSE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining an Aggregate Function<a name="section1549704621914"></a>

**Table  12**  SQL statements for defining an aggregate function

<a name="table119221839112015"></a>
<table><thead align="left"><tr id="row16923173911203"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1792343912209"><a name="p1792343912209"></a><a name="p1792343912209"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p129234396201"><a name="p129234396201"></a><a name="p129234396201"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row2923143922014"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1092320395206"><a name="p1092320395206"></a><a name="p1092320395206"></a>Creating an aggregate function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1792353902011"><a name="p1792353902011"></a><a name="p1792353902011"></a><a href="create-aggregate.md">CREATE AGGREGATE</a></p>
</td>
</tr>
<tr id="row16923939162016"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p139234397209"><a name="p139234397209"></a><a name="p139234397209"></a>Modifying an aggregate function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p492363912206"><a name="p492363912206"></a><a name="p492363912206"></a><a href="alter-aggregate.md">ALTER AGGREGATE</a></p>
</td>
</tr>
<tr id="row17923153922010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p169237393201"><a name="p169237393201"></a><a name="p169237393201"></a>Deleting an aggregate function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13923339102016"><a name="p13923339102016"></a><a name="p13923339102016"></a><a href="drop-aggregate.md">DROP AGGREGATE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining Data Type Conversion<a name="section539185001914"></a>

**Table  13**  SQL statements for defining a data type

<a name="table1482412519216"></a>
<table><thead align="left"><tr id="row7824251217"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p48242532117"><a name="p48242532117"></a><a name="p48242532117"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p882412510216"><a name="p882412510216"></a><a name="p882412510216"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row28242517214"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18824175152113"><a name="p18824175152113"></a><a name="p18824175152113"></a>Creating user-defined data type conversion</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19109257453"><a name="p19109257453"></a><a name="p19109257453"></a><a href="create-cast.md">CREATE CAST</a></p>
</td>
</tr>
<tr id="row782495162119"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1182485102113"><a name="p1182485102113"></a><a name="p1182485102113"></a>Deleting user-defined data type conversion</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p998552414457"><a name="p998552414457"></a><a name="p998552414457"></a><a href="drop-cast.md">DROP CAST</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Plug-in Extension<a name="section5770115241915"></a>

**Table  14**  SQL statements for defining a plug-in extension

<a name="table14794538112111"></a>
<table><thead align="left"><tr id="row11794203892119"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p27951138202113"><a name="p27951138202113"></a><a name="p27951138202113"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p279523892112"><a name="p279523892112"></a><a name="p279523892112"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row1179553872111"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2795143815211"><a name="p2795143815211"></a><a name="p2795143815211"></a>Creating a plug-in extension</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p979553862118"><a name="p979553862118"></a><a name="p979553862118"></a><a href="create-extension.md">CREATE EXTENSION</a></p>
</td>
</tr>
<tr id="row147951638182114"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p107951338122110"><a name="p107951338122110"></a><a name="p107951338122110"></a>Modifying a plug-in extension</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4795163811210"><a name="p4795163811210"></a><a name="p4795163811210"></a><a href="alter-extension.md">ALTER EXTENSION</a></p>
</td>
</tr>
<tr id="row2079513802114"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p27951384218"><a name="p27951384218"></a><a name="p27951384218"></a>Deleting a plug-in extension</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p137959389213"><a name="p137959389213"></a><a name="p137959389213"></a><a href="drop-extension.md">DROP EXTENSION</a></p>
</td>
</tr>
</tbody>
</table>

## Defining an Operator<a name="section10275056141918"></a>

**Table  15**  SQL statements for defining an operator

<a name="table1673375910218"></a>
<table><thead align="left"><tr id="row97331259122110"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1073365919214"><a name="p1073365919214"></a><a name="p1073365919214"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1773385962114"><a name="p1773385962114"></a><a name="p1773385962114"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row9733195942110"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p0733175917217"><a name="p0733175917217"></a><a name="p0733175917217"></a>Creating an operator</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p673365915210"><a name="p673365915210"></a><a name="p673365915210"></a><a href="create-operator.md">CREATE OPERATOR</a></p>
</td>
</tr>
<tr id="row9733159102119"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p97331159192115"><a name="p97331159192115"></a><a name="p97331159192115"></a>Modifying an operator</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17331559192112"><a name="p17331559192112"></a><a name="p17331559192112"></a><a href="alter-operator.md">ALTER OPERATOR</a></p>
</td>
</tr>
<tr id="row127339590217"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8733359102115"><a name="p8733359102115"></a><a name="p8733359102115"></a>Deleting an operator</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p107331359172118"><a name="p107331359172118"></a><a name="p107331359172118"></a><a href="drop-operator.md">DROP OPERATOR</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Procedural Language<a name="section36251059111916"></a>

**Table  16**  SQL statements for defining a procedural language

<a name="table17164814221"></a>
<table><thead align="left"><tr id="row111618812214"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p201613818227"><a name="p201613818227"></a><a name="p201613818227"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p111618852217"><a name="p111618852217"></a><a name="p111618852217"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row18161582229"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8161681229"><a name="p8161681229"></a><a name="p8161681229"></a>Creating a procedural language</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p91668182217"><a name="p91668182217"></a><a name="p91668182217"></a><a href="create-language.md">CREATE LANGUAGE</a></p>
</td>
</tr>
<tr id="row117108102212"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p14174892211"><a name="p14174892211"></a><a name="p14174892211"></a>Changing a procedural language</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p111715811225"><a name="p111715811225"></a><a name="p111715811225"></a><a href="alter-language.md">ALTER LANGUAGE</a></p>
</td>
</tr>
<tr id="row71715812212"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p151711852210"><a name="p151711852210"></a><a name="p151711852210"></a>Deleting a procedural language</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4173872215"><a name="p4173872215"></a><a name="p4173872215"></a><a href="drop-language.md">DROP LANGUAGE</a></p>
</td>
</tr>
</tbody>
</table>

## Defining a Data Type<a name="section256114132018"></a>

**Table  17**  SQL statements for defining a data type

<a name="table351719132218"></a>
<table><thead align="left"><tr id="row10511919172210"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p115131972213"><a name="p115131972213"></a><a name="p115131972213"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3511819192210"><a name="p3511819192210"></a><a name="p3511819192210"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="row15151962218"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16511419162212"><a name="p16511419162212"></a><a name="p16511419162212"></a>Creating a data type</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p482414522117"><a name="p482414522117"></a><a name="p482414522117"></a><a href="create-type.md">CREATE TYPE</a></p>
</td>
</tr>
<tr id="row95151910227"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p75113195221"><a name="p75113195221"></a><a name="p75113195221"></a>Modifying a data type</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p128243502119"><a name="p128243502119"></a><a name="p128243502119"></a><a href="alter-type.md">ALTER TYPE</a></p>
</td>
</tr>
<tr id="row1251619192217"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p452111962212"><a name="p452111962212"></a><a name="p452111962212"></a>Deleting a data type</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p178251754212"><a name="p178251754212"></a><a name="p178251754212"></a><a href="drop-type.md">DROP TYPE</a></p>
</td>
</tr>
</tbody>
</table>

