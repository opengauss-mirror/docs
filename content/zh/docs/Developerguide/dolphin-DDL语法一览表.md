# DDL语法一览表<a name="ZH-CN_TOPIC_0289900414"></a>

DDL（Data Definition Language数据定义语言），用于定义或修改数据库中的对象。如：表、索引、视图等。

## 定义表空间<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s21cf482a805644cbac9ae0704362a934"></a>

表空间用于管理数据对象，与磁盘上的一个目录对应。所涉及的SQL语句，请参考[表5](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t9b028195c0d143f6b8fc7065af1ce2f9)。

**表 5**  表空间定义相关SQL

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
</tbody>
</table>


## 定义表<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

表是数据库中的一种特殊数据结构，用于存储数据对象以及对象之间的关系。所涉及的SQL语句，请参考[表1](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605)。

**表 1**  表定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>修改表属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="dolphin-ALTER-TABLE.md">ALTER TABLE</a></p>
</td>
</tr>
</tr>
</tbody>
</table>

## 定义分区表<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_se22f4e70f4f0488681bde0820f1fd69a"></a>

分区表是一种逻辑表，数据是由普通表存储的，主要用于提升查询性能。所涉及的SQL语句，请参考[表7](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t3ec179079c524dbaae801012f990a692)。

**表 7**  分区表定义相关SQL

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
</tbody>
</table>

## 定义索引<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。所涉及的SQL语句，请参考[表2](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98606)。

**表 2**  索引定义相关SQL
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
</tr>
</tr>
</tbody>
</table>