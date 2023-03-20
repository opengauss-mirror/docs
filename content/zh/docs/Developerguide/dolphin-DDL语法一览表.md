# DDL语法一览表<a name="ZH-CN_TOPIC_0289900414"></a>

DDL（Data Definition Language数据定义语言），用于定义或修改数据库中的对象。如：表、索引、视图等。

## 定义数据库<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s57baeef469e24cc39dd5a38b4c53b6ab"></a>

数据库是组织、存储和管理数据的仓库，而数据库定义主要包括：创建数据库、修改数据库属性以及删除数据库。所涉及的SQL语句，请参考[表1](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t986073679146430a8bce8bf0ea8f3607)。

**表 1**  数据库定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t986073679146430a8bce8bf0ea8f3607"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r308f318a9df94cf195e1fecbda1d66a0"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4d4880369d7b430aa530690470423269"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4d4880369d7b430aa530690470423269"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4d4880369d7b430aa530690470423269"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rb622349a34a848e596c807c0ec44263b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"></a>创建数据库</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"></a><a href="dolphin-CREATE-DATABASE.md">CREATE DATABASE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ra82187da297c4ab088f6bc3dfb588c72"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"></a>修改数据库属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"></a><a href="dolphin-ALTER-DATABASE.md">ALTER DATABASE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r49f9c2a36cab4d92b9acf1f60ee88add"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"></a>删除数据库</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p624643615931"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p624643615931"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p624643615931"></a><a href="dolphin-DROP-DATABASE.md">DROP DATABASE</a></p>
</td>
</tr>
</tbody>
</table>


## 定义表空间<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s21cf482a805644cbac9ae0704362a934"></a>

表空间用于管理数据对象，与磁盘上的一个目录对应。所涉及的SQL语句，请参考[表2](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9)。

**表 2**  表空间定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r116a50a786884aaab5f7b66680db1f6d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa1af675bb68e41978797820f63f9eebb"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab4e861e8f1eb4664bdea39f051ef27c1"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r316d1f6a86ad46cb9b4c6ff0b9f96b1a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a299b6c17a3b64c0cbcfdf0849c2d58be"></a>创建表空间</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p934358210356"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p934358210356"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p934358210356"></a><a href="dolphin-CREATE-TABLESPACE.md">CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r615f74060d7a42349fba1c0c214f516b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a>修改表空间属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a href="dolphin-ALTER-TABLESPACE.md">ALTER TABLESPACE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r4fae0d4c84f04993b6c2284f09c8792f"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p630928210356"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p630928210356"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p630928210356"></a>删除表空间</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a href="dolphin-DROP-TABLESPACE.md">DROP TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>


## 定义表<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

表是数据库中的一种特殊数据结构，用于存储数据对象以及对象之间的关系。所涉及的SQL语句，请参考[表3](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605)。

**表 3**  表定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>创建表</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-CREATE-TABLE.md">CREATE TABLE</a></p>
</td>
</tr>

<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>修改表属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-ALTER-TABLE.md">ALTER TABLE</a></p>
</td>
</tr>

</tbody>
</table>

## 定义分区表<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

分区表是一种逻辑表，数据是由普通表存储的，主要用于提升查询性能。所涉及的SQL语句，请参考[表4](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t3ec179079c524dbaae801012f990a692)。

**表 4**  分区表定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t3ec179079c524dbaae801012f990a692"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r73caab0c0bba4d22ac5ceb66ff8d3796"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a59ed9e698a0f4f63ae139bb6330c6d28"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9fe601ce9e63434fab860ec5f84a50dd"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rebbe43e909a74dad9db795ec93be2bfe"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af97b346a4eb2414f968c5ff174fd3654"></a>创建分区表</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a href="dolphin-CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r9223af2d14d34d238d8388d1ef83a674"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a>创建分区</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a href="dolphin-ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rc1dc611978054eda8fd7c645d604483a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a>修改分区表属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2517a72613cc435d90762683eeebbb23"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a href="dolphin-ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r22aa8dc406b34c21be9873553de4dda1"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a>删除分区</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a href="dolphin-ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
</tbody>
</table>

## 定义索引<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。所涉及的SQL语句，请参考[表5](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606)。

**表 5**  索引定义相关SQL
<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>定义索引</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-CREATE-INDEX.md">CREATE INDEX</a></p>
</td>
<tr>
<td>删除索引</td>
<td><a href="dolphin-DROP-INDEX.md">DROP INDEX</a></td>
</tr>
</tbody>
</table>

## 定义存储过程<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s3ca08bd6a23e4b8e951078ea5758f1c9"></a>

存储过程是一组为了完成特定功能的SQL语句集，经编译后存储在数据库中，用户通过指定存储过程的名称并给出参数（如果该存储过程带有参数）来执行它。所涉及的SQL语句，请参考[表6](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t0116270962694804b50796a5d6824f3b)。

**表 6**  存储过程定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t0116270962694804b50796a5d6824f3b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_re416e4c2eea34c93af0cae3159a920c1"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r84dff1033eba4434ac6e33ad0a95f2dc"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a>创建存储过程</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a href="dolphin-CREATE-PROCEDURE.md">CREATE PROCEDURE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rf194389b8b3449f1856055707d47c135"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a>修改存储过程</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a href="dolphin-ALTER-PROCEDURE.md">ALTER PROCEDURE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义函数<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s0eaa1519f8324492a526687889e5f356"></a>

在openGauss中，它和存储过程类似，也是一组SQL语句集，使用上没有差别。所涉及的SQL语句，请参考[表7](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b)。

**表 7**  函数定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r244b425944f9453cab63d4d47f42c881"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r2e24eb373a684c04a36282e82f32c84e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a>创建函数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a href="dolphin-CREATE-FUNCTION.md">CREATE FUNCTION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r8adc8972f2324d37aca1a663dc41773c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a>修改函数属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a href="dolphin-ALTER-FUNCTION.md">ALTER FUNCTION</a></p>
</td>
</tr>

</tbody>
</table>

## 计算表数据校验和<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_726c591645b6bb268663e85f5b5bd46dd5"></a>

针对查询时刻对所查询表的可见的数据的校验和计算，该校验和与数据的先后顺序、存入位置、表名等无关，仅仅针对实际数据。所涉及的SQL语句，请参考[表8](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_83947b510399c96d25530915513295e3d8)。

**表 8**  函数定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_83947b510399c96d25530915513295e3d8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_5c57bfdd51d8e832ae507001ca55d7d189"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_cc5d7f7963415ac6ccc11994f21dc04439"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_cc5d7f7963415ac6ccc11994f21dc04439"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_cc5d7f7963415ac6ccc11994f21dc04439"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_fe26ef3e3a7c4db2ce5f4d8b12b0427dbf"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_fe26ef3e3a7c4db2ce5f4d8b12b0427dbf"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_fe26ef3e3a7c4db2ce5f4d8b12b0427dbf"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_81276653292d08668add24976dcd18a465"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_cead2ac9374149e2bed51c58f880350c22"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_cead2ac9374149e2bed51c58f880350c22"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_cead2ac9374149e2bed51c58f880350c22"></a>计算表数据校验和</p>
</td>
<td class="cellrowborder" valign="top" width= "50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_94328d89eee2bb036117cb809fff43b454"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_94328d89eee2bb036117cb809fff43b454"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_94328d89eee2bb036117cb809fff43b454"></a><a href="dolphin-CHECKSUM-TABLE.md">CHECKSUM TABLE</a></p>
</td>
</tr>

</tbody>
</table>

## 定义视图

视图是从一个或几个基本表中导出的虚表，可用于控制用户对数据访问，请参考[表9](#dolphin_ddl_list_t12)。

**表 9** 视图定义相关SQL
<a id="dolphin_ddl_list_t12"></a>

<table>
<tr>
    <th align="left">功能</th>
    <th align="left">相关SQL</th>
</tr>

<tr>
    <td>创建视图</td>
    <td><a href="dolphin-CREATE-VIEW.md">CREATE VIEW</a></td>
</tr>

<tr>
    <td>修改视图</td>
    <td><a href="dolphin-ALTER-VIEW.md">ALTER VIEW</a></td>
</tr>
</table>
