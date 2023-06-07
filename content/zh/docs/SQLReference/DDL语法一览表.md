# DDL语法一览表

DDL（Data Definition Language数据定义语言），用于定义或修改数据库中的对象。如：表、索引、视图等。

>![](public_sys-resources/icon-note.png) **说明：** 
>
>openGauss不支持数据库主节点不完整时进行DDL操作。例如：openGauss中有1个数据库主节点故障时执行新建数据库、表等操作都会失败。

## 定义客户端加密主密钥<a name="section5329378516"></a>

客户端加密主密钥主要用于密态数据库特性，用来加密列加密密钥\(cek\)。客户端加密主密钥定义主要包括创建客户端加密主密钥以及删除客户端加密主密钥。所涉及的SQL语句，请参考[表1](#table1932183717514)。

**表 1**  客户端加密主密钥定义相关SQL

<a name="table1932183717514"></a>
<table><thead align="left"><tr id="row53212371856"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1732193714512"><a name="p1732193714512"></a><a name="p1732193714512"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p73233717510"><a name="p73233717510"></a><a name="p73233717510"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row153213373514"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p7321937459"><a name="p7321937459"></a><a name="p7321937459"></a>创建客户端加密主密钥</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1632637158"><a name="p1632637158"></a><a name="p1632637158"></a><a href="CREATE-CLIENT-MASTER-KEY.md">CREATE CLIENT MASTER KEY</a></p>
</td>
</tr>
<tr id="row183210377513"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12322370516"><a name="p12322370516"></a><a name="p12322370516"></a>删除客户端加密主密钥</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p193220371656"><a name="p193220371656"></a><a name="p193220371656"></a><a href="DROP-CLIENT-MASTER-KEY.md">DROP CLIENT MASTER KEY</a></p>
</td>
</tr>
</tbody>
</table>

## 定义列加密密钥<a name="section10435926966"></a>

列加密密钥主要用于密态数据库特性中，用来加密数据。列加密密钥定义主要包括创建列加密密钥以及删除列加密密钥。所涉及的SQL语句，请参考[表2](#table1932183717514)。

**表 2**  列加密密钥定义相关SQL

<a name="table143619266612"></a>
<table><thead align="left"><tr id="row1243617261264"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p74367261563"><a name="p74367261563"></a><a name="p74367261563"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p14361726568"><a name="p14361726568"></a><a name="p14361726568"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row94361626765"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1143610269614"><a name="p1143610269614"></a><a name="p1143610269614"></a>创建列加密密钥</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1543612263611"><a name="p1543612263611"></a><a name="p1543612263611"></a><a href="CREATE-COLUMN-ENCRYPTION-KEY.md">CREATE COLUMN ENCRYPTION KEY</a></p>
</td>
</tr>
<tr id="row18436162611612"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p943622612613"><a name="p943622612613"></a><a name="p943622612613"></a>删列加密密钥</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1943613269618"><a name="p1943613269618"></a><a name="p1943613269618"></a><a href="DROP-COLUMN-ENCRYPTION-KEY.md">DROP COLUMN ENCRYPTION KEY</a></p>
</td>
</tr>
</tbody>
</table>

## 定义数据库<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s57baeef469e24cc39dd5a38b4c53b6ab"></a>

数据库是组织、存储和管理数据的仓库，而数据库定义主要包括：创建数据库、修改数据库属性以及删除数据库。所涉及的SQL语句，请参考[表3](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t986073679146430a8bce8bf0ea8f3607)。

**表 3**  数据库定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t986073679146430a8bce8bf0ea8f3607"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r308f318a9df94cf195e1fecbda1d66a0"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_add0a46096ab945669cf0995fdd87ec94"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4d4880369d7b430aa530690470423269"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4d4880369d7b430aa530690470423269"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4d4880369d7b430aa530690470423269"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rb622349a34a848e596c807c0ec44263b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a40fb455a146a4edfb7dc2d0d9180009d"></a>创建数据库</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1bb47e211fd84cbd825efe2105e75952"></a><a href="CREATE-DATABASE.md">CREATE DATABASE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ra82187da297c4ab088f6bc3dfb588c72"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a54bfbcecacdb477086a1802333a760fd"></a>修改数据库属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad913609021bf4f2b9ba52419f57ab6f9"></a><a href="ALTER-DATABASE.md">ALTER DATABASE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r49f9c2a36cab4d92b9acf1f60ee88add"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aea8e4f95c718486db2ac0b555b16f6d0"></a>删除数据库</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p624643615931"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p624643615931"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p624643615931"></a><a href="DROP-DATABASE.md">DROP DATABASE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义模式<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s5c384f8bb8634c348ae2ca36282a895e"></a>

模式是一组数据库对象的集合，主要用于控制对数据库对象的访问。所涉及的SQL语句，请参考[表4](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t02977f28a9564837881f110b305d7509)。

**表 4**  模式定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t02977f28a9564837881f110b305d7509"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rf601f80c068b470c9385daea5868acce"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a90acab0ecac64d3c8e1fc47ed067f1b3"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a90acab0ecac64d3c8e1fc47ed067f1b3"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a90acab0ecac64d3c8e1fc47ed067f1b3"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a71712d4ccf8a4947a5f72d973a8aef80"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a71712d4ccf8a4947a5f72d973a8aef80"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a71712d4ccf8a4947a5f72d973a8aef80"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rbc35e8a17de84809aa4a82e48a87b1c9"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a56af102681fe4e66b7a85e1cdb14b943"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a56af102681fe4e66b7a85e1cdb14b943"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a56af102681fe4e66b7a85e1cdb14b943"></a>创建模式</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae2e374809ed64721bb1e396c6cd434b8"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae2e374809ed64721bb1e396c6cd434b8"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae2e374809ed64721bb1e396c6cd434b8"></a><a href="CREATE-SCHEMA.md">CREATE SCHEMA</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rcca2efeaba2e4e6b819311f2ec926d77"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae896737506694336a82bc7bee4f9669d"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae896737506694336a82bc7bee4f9669d"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae896737506694336a82bc7bee4f9669d"></a>修改模式属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae77a46ced97f4c0384a60ada9840949f"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae77a46ced97f4c0384a60ada9840949f"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ae77a46ced97f4c0384a60ada9840949f"></a><a href="ALTER-SCHEMA.md">ALTER SCHEMA</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r9c6fc59d27f14fb292d7a603c51911dd"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad467d3e891824294acc7f8bd1b6a3aa8"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad467d3e891824294acc7f8bd1b6a3aa8"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad467d3e891824294acc7f8bd1b6a3aa8"></a>删除模式</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p966994310554"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p966994310554"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p966994310554"></a><a href="DROP-SCHEMA.md">DROP SCHEMA</a></p>
</td>
</tr>
</tbody>
</table>

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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p934358210356"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p934358210356"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p934358210356"></a><a href="CREATE-TABLESPACE.md">CREATE TABLESPACE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r615f74060d7a42349fba1c0c214f516b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a68dd428ed4e842c688bbc37418c5b9bf"></a>修改表空间属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab9a096f53df64ceaa63175384deaeb4c"></a><a href="ALTER-TABLESPACE.md">ALTER TABLESPACE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r4fae0d4c84f04993b6c2284f09c8792f"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p630928210356"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p630928210356"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p630928210356"></a>删除表空间</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8aabc54a1ec24a81be38ac38d0a989cb"></a><a href="DROP-TABLESPACE.md">DROP TABLESPACE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义表<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s54aadbaf84da45868daf6cd4a1bf5578"></a>

表是数据库中的一种特殊数据结构，用于存储数据对象以及对象之间的关系。所涉及的SQL语句，请参考[表6](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605)。

**表 6**  表定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tcd92dbef720d4b7eaa5bf7a290b98605"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r12329afceae448a6aab45528238e816d"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a876ed18fdfc44491ab7e489609b4339c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa6cfe9f1b2654f1594774d56971ee559"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r9e51298494934eb9bd5b07116c60ec6c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1388923dd1f147f1822bf1c33883a95c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1388923dd1f147f1822bf1c33883a95c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1388923dd1f147f1822bf1c33883a95c"></a>创建表</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a62e37c66e8b64f3db41cb8b82eaa0d11"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a62e37c66e8b64f3db41cb8b82eaa0d11"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a62e37c66e8b64f3db41cb8b82eaa0d11"></a><a href="CREATE-TABLE.md">CREATE TABLE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r3df8acf5f17e4ceca9a8d1d8de519731"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p938501610638"></a>修改表属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a495999d1ab684352825e3030c76e84de"></a><a href="ALTER-TABLE.md">ALTER TABLE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r7a2aa55d44634eb1a5fd806ba5c7e91c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7f4436462cce48cc8f5ad272b2207b65"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7f4436462cce48cc8f5ad272b2207b65"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7f4436462cce48cc8f5ad272b2207b65"></a>删除表</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9c6b94f27717489fb039d834fcc1b62b"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9c6b94f27717489fb039d834fcc1b62b"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9c6b94f27717489fb039d834fcc1b62b"></a><a href="DROP-TABLE.md">DROP TABLE</a></p>
</td>
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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a65b277a7026b4bfd9268e84d98788d24"></a><a href="CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r9223af2d14d34d238d8388d1ef83a674"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a338e0d88a45645218de09f941f31a3bb"></a>创建分区</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0d9f12c3d33a486d867259bf2c2b0f72"></a><a href="ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rc1dc611978054eda8fd7c645d604483a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ec67a13eaf64af29b6e25316ef9c70c"></a>修改分区表属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2517a72613cc435d90762683eeebbb23"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2517a72613cc435d90762683eeebbb23"></a><a href="ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r22aa8dc406b34c21be9873553de4dda1"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_abdf5a083630d44289b59208c4fc5196c"></a>删除分区</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_af1b94b0493974762a5ed25b23f32b695"></a><a href="ALTER-TABLE-PARTITION.md">ALTER TABLE PARTITION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r409aa8908e324a2ba716f0a9deada0dc"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a724ce738ec554df5baa1f9b468e06751"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a724ce738ec554df5baa1f9b468e06751"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a724ce738ec554df5baa1f9b468e06751"></a>删除分区表</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_acda41206dde44fa698d5230e8a2008f8"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_acda41206dde44fa698d5230e8a2008f8"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_acda41206dde44fa698d5230e8a2008f8"></a><a href="DROP-TABLE.md">DROP TABLE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义索引<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_sf6e8445dd2c64c3dbe3b9119097fba86"></a>

索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。所涉及的SQL语句，请参考[表8](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_te79920e4b7b849b7a64fb71029436d48)。

**表 8**  索引定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_te79920e4b7b849b7a64fb71029436d48"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r268315ba29e3475c817a89fdcd821f68"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_afa18af00d6e941b9a6dc87783366cc3b"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_afa18af00d6e941b9a6dc87783366cc3b"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_afa18af00d6e941b9a6dc87783366cc3b"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a109d6faaaef1481092394cc0a368e495"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a109d6faaaef1481092394cc0a368e495"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a109d6faaaef1481092394cc0a368e495"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r4c9e69dd7eaa485f8c12349fd9c3fa88"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0c987317c328433fa15534a4c18e89ca"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0c987317c328433fa15534a4c18e89ca"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a0c987317c328433fa15534a4c18e89ca"></a>创建索引</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1a7aef8d83154f698cb1b57b9ff404ba"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1a7aef8d83154f698cb1b57b9ff404ba"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a1a7aef8d83154f698cb1b57b9ff404ba"></a><a href="CREATE-INDEX.md">CREATE INDEX</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r2c67e1c1546042ba9410bd07594844ed"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2bc7e4a3e0be4136858a91e8ec95f145"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2bc7e4a3e0be4136858a91e8ec95f145"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2bc7e4a3e0be4136858a91e8ec95f145"></a>修改索引属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac7a24ac8e0f24d7ba3c07319fc2d87b0"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac7a24ac8e0f24d7ba3c07319fc2d87b0"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac7a24ac8e0f24d7ba3c07319fc2d87b0"></a><a href="ALTER-INDEX.md">ALTER INDEX</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r2e2bb26792954e6598a1a75b55a9a111"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a77cb9a63ee734c4e91d27faf3147b580"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a77cb9a63ee734c4e91d27faf3147b580"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a77cb9a63ee734c4e91d27faf3147b580"></a>删除索引</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4ead1d9672274bd1842283f34b1587e7"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4ead1d9672274bd1842283f34b1587e7"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4ead1d9672274bd1842283f34b1587e7"></a><a href="DROP-INDEX.md">DROP INDEX</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ra8f723d34d33452e9a22ce9fbd46b663"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p546564010305"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p546564010305"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_zh-cn_topic_0058966187_p546564010305"></a>重建索引</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a60c0aa0e04544d61ad2bbf3d795499ae"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a60c0aa0e04544d61ad2bbf3d795499ae"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a60c0aa0e04544d61ad2bbf3d795499ae"></a><a href="REINDEX.md">REINDEX</a></p>
</td>
</tr>
</tbody>
</table>

## 定义存储过程<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s3ca08bd6a23e4b8e951078ea5758f1c9"></a>

存储过程是一组为了完成特定功能的SQL语句集，经编译后存储在数据库中，用户通过指定存储过程的名称并给出参数（如果该存储过程带有参数）来执行它。所涉及的SQL语句，请参考[表9](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t0116270962694804b50796a5d6824f3b)。

**表 9**  存储过程定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t0116270962694804b50796a5d6824f3b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_re416e4c2eea34c93af0cae3159a920c1"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac745eff7ebdd47ed882325a119f5186f"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a9a8a2606041245bf96d888fa4a701bcb"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r84dff1033eba4434ac6e33ad0a95f2dc"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a3cf3bf6c0f5948b0849ecd6c398e9a6f"></a>创建存储过程</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7906bfbfafcb44338acf040e26b5ddac"></a><a href="CREATE-PROCEDURE.md">CREATE PROCEDURE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rf194389b8b3449f1856055707d47c135"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aad3710f4891e4d27be97bbfbaaf72174"></a>删除存储过程</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aa201dcc5819a4d519e7abdcf9eaae459"></a><a href="DROP-PROCEDURE.md">DROP PROCEDURE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义函数<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s0eaa1519f8324492a526687889e5f356"></a>

在openGauss中，它和存储过程类似，也是一组SQL语句集，使用上没有差别。所涉及的SQL语句，请参考[表10](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b)。

**表 10**  函数定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_tde31d523c25742e2aecc5ae8a17d561b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r244b425944f9453cab63d4d47f42c881"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad395838458ae4ae6b9b1a72de0a1383c"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8004d4ac4fb943fabc4ff6f6c1319b47"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r2e24eb373a684c04a36282e82f32c84e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a449f7e4649cc46f1b5d469b0833d18c2"></a>创建函数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f801a605df04cf298cd8705d9be9b71"></a><a href="CREATE-FUNCTION.md">CREATE FUNCTION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r8adc8972f2324d37aca1a663dc41773c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aebb95ab4fc084f64b04e5386181b98a2"></a>修改函数属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aff1c2db7ebb24eda8c6cbca6c9a1a677"></a><a href="ALTER-FUNCTION.md">ALTER FUNCTION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rae1abe6702344a25b03183e0e7593aaa"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a586cd77ffc284f5cb9b9df451e9380bf"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a586cd77ffc284f5cb9b9df451e9380bf"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a586cd77ffc284f5cb9b9df451e9380bf"></a>删除函数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac30dc4b7b00b4b95969cc12ce0ed16d8"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac30dc4b7b00b4b95969cc12ce0ed16d8"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac30dc4b7b00b4b95969cc12ce0ed16d8"></a><a href="DROP-FUNCTION.md">DROP FUNCTION</a></p>
</td>
</tr>
</tbody>
</table>

## 定义包<a name="section25515055414"></a>

包是模块化的思想，由包头（package specification）和包体\(package body\)组成，用来分类管理存储过程和函数，类似于Java、C++等语言中的类。

**表 11**  包定义相关SQL

<a name="table114371041185613"></a>
<table><thead align="left"><tr id="row2615356124218"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p11615135614429"><a name="p11615135614429"></a><a name="p11615135614429"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p2615195616420"><a name="p2615195616420"></a><a name="p2615195616420"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row104381941145612"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16438741115613"><a name="p16438741115613"></a><a name="p16438741115613"></a>创建包</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13303183220388"><a name="p13303183220388"></a><a name="p13303183220388"></a><a href="CREATE-PACKAGE.md">CREATE PACKAGE</a></p>
</td>
</tr>
<tr id="row1843804116562"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p243884111569"><a name="p243884111569"></a><a name="p243884111569"></a>删除包</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1543804185613"><a name="p1543804185613"></a><a name="p1543804185613"></a><a href="DROP-PACKAGE.md">DROP PACKAGE</a></p>
</td>
</tr>
<tr id="row11091148878"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p7109184817716"><a name="p7109184817716"></a><a name="p7109184817716"></a>修改包属性</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1610911481715"><a name="p1610911481715"></a><a name="p1610911481715"></a><a href="ALTER-PACKAGE.md">ALTER PACKAGE</a></p>
</td>
</tr>
</tbody>
</table>


## 定义视图<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_sdd4e8594bca54006b11d6f9daf7ccfa8"></a>

视图是从一个或几个基本表中导出的虚表，可用于控制用户对数据访问，请参考[表12](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_td65563e06b1c491892dbad9b57f3b96d)。

**表 12**  视图定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_td65563e06b1c491892dbad9b57f3b96d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ree8dabb9a0bf4667b0b9ceb11de7a2e0"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad7caef20f748424c8d1fe563f23014e4"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad7caef20f748424c8d1fe563f23014e4"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ad7caef20f748424c8d1fe563f23014e4"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ada80bc63929b4dcfb79c0f21f9e9aef1"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ada80bc63929b4dcfb79c0f21f9e9aef1"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ada80bc63929b4dcfb79c0f21f9e9aef1"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rb524e7c40285415aa5ae02866c6a7e9c"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_acfdfeb8b4641417d83b00a3d4143da7c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_acfdfeb8b4641417d83b00a3d4143da7c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_acfdfeb8b4641417d83b00a3d4143da7c"></a>创建视图</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_afc9667b512f34daeb468afd06f852b92"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_afc9667b512f34daeb468afd06f852b92"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_afc9667b512f34daeb468afd06f852b92"></a><a href="CREATE-VIEW.md">CREATE VIEW</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rb0ea1d0b0a424b1ba1b4c6bdf3aed129"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a02176940352a45a6bc52c1142c32149c"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a02176940352a45a6bc52c1142c32149c"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a02176940352a45a6bc52c1142c32149c"></a>删除视图</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aefe6621371b94ca49901fc1c815aa39a"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aefe6621371b94ca49901fc1c815aa39a"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_aefe6621371b94ca49901fc1c815aa39a"></a><a href="DROP-VIEW.md">DROP VIEW</a></p>
</td>
</tr>
</tbody>
</table>

## 定义游标<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_s4d20cf566ab745e39cb56ab99b0e13c6"></a>

为了处理SQL语句，存储过程进程分配一段内存区域来保存上下文联系。游标是指向上下文区域的句柄或指针。借助游标，存储过程可以控制上下文区域的变化，请参考[表13](#zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t191f977ebe0a4ab5b1348c888403e3b4)。

**表 13**  游标定义相关SQL

<a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_t191f977ebe0a4ab5b1348c888403e3b4"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r77bad4c4ab644db499e221862f72a941"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2cfc7b04dbb44b8fb76b94927365a1ff"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2cfc7b04dbb44b8fb76b94927365a1ff"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a2cfc7b04dbb44b8fb76b94927365a1ff"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f01a89e573348a0b1c739c57db997ff"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f01a89e573348a0b1c739c57db997ff"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a8f01a89e573348a0b1c739c57db997ff"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r23fae7784e304eeb8e68b9ec97893e3b"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4789ad511cc8484bb2ab71b745f3b816"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4789ad511cc8484bb2ab71b745f3b816"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a4789ad511cc8484bb2ab71b745f3b816"></a>创建游标</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ceb4513780a48829f055aabe36672ca"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ceb4513780a48829f055aabe36672ca"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a6ceb4513780a48829f055aabe36672ca"></a><a href="CURSOR.md">CURSOR</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_r229f932eab55405c921e039a5cde8681"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7a462c064b0142388856a3328bd9a118"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7a462c064b0142388856a3328bd9a118"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a7a462c064b0142388856a3328bd9a118"></a>移动游标</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a33cc54ca58ab486abc7ce4ee36dfa1c5"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a33cc54ca58ab486abc7ce4ee36dfa1c5"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a33cc54ca58ab486abc7ce4ee36dfa1c5"></a><a href="MOVE.md">MOVE</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ra737a90e12f04be2987da168664683d7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a422cb95ad5e74e7aa6270cb69fe03404"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a422cb95ad5e74e7aa6270cb69fe03404"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a422cb95ad5e74e7aa6270cb69fe03404"></a>从游标中提取数据</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab29fe04a046e43efb10d4170d5dfca6a"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab29fe04a046e43efb10d4170d5dfca6a"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ab29fe04a046e43efb10d4170d5dfca6a"></a><a href="FETCH.md">FETCH</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_rb0c93b92b8e849bf851cc8b8d617d9eb"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac975fe527038478b87085c1dfc86c826"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac975fe527038478b87085c1dfc86c826"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_ac975fe527038478b87085c1dfc86c826"></a>关闭游标</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a86498e78187b4afd8d95bdfcff078323"><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a86498e78187b4afd8d95bdfcff078323"></a><a name="zh-cn_topic_0283136643_zh-cn_topic_0237122049_zh-cn_topic_0059777960_a86498e78187b4afd8d95bdfcff078323"></a><a href="CLOSE.md">CLOSE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义聚合函数<a name="section1549704621914"></a>

**表 14**  聚合函数定义相关SQL

<a name="table119221839112015"></a>
<table><thead align="left"><tr id="row16923173911203"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1792343912209"><a name="p1792343912209"></a><a name="p1792343912209"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p129234396201"><a name="p129234396201"></a><a name="p129234396201"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row2923143922014"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1092320395206"><a name="p1092320395206"></a><a name="p1092320395206"></a>创建一个新的聚合函数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1792353902011"><a name="p1792353902011"></a><a name="p1792353902011"></a><a href="CREATE-AGGREGATE.md">CREATE AGGREGATE</a></p>
</td>
</tr>
<tr id="row16923939162016"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p139234397209"><a name="p139234397209"></a><a name="p139234397209"></a>修改聚合函数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p492363912206"><a name="p492363912206"></a><a name="p492363912206"></a><a href="ALTER-AGGREGATE.md">ALTER AGGREGATE</a></p>
</td>
</tr>
<tr id="row17923153922010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p169237393201"><a name="p169237393201"></a><a name="p169237393201"></a>删除聚合函数</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13923339102016"><a name="p13923339102016"></a><a name="p13923339102016"></a><a href="DROP-AGGREGATE.md">DROP AGGREGATE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义数据类型转换<a name="section539185001914"></a>

**表 15**  数据类型定义相关SQL

<a name="table1482412519216"></a>
<table><thead align="left"><tr id="row7824251217"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p48242532117"><a name="p48242532117"></a><a name="p48242532117"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p882412510216"><a name="p882412510216"></a><a name="p882412510216"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row28242517214"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18824175152113"><a name="p18824175152113"></a><a name="p18824175152113"></a>创建一个新的用户自定义数据类型转换</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19109257453"><a name="p19109257453"></a><a name="p19109257453"></a><a href="CREATE-CAST.md">CREATE CAST</a></p>
</td>
</tr>
<tr id="row782495162119"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1182485102113"><a name="p1182485102113"></a><a name="p1182485102113"></a>删除用户自定义数据类型转换</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p998552414457"><a name="p998552414457"></a><a name="p998552414457"></a><a href="DROP-CAST.md">DROP CAST</a></p>
</td>
</tr>
</tbody>
</table>

## 定义插件扩展<a name="section5770115241915"></a>

**表 16**  插件扩展定义相关SQL

<a name="table14794538112111"></a>
<table><thead align="left"><tr id="row11794203892119"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p27951138202113"><a name="p27951138202113"></a><a name="p27951138202113"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p279523892112"><a name="p279523892112"></a><a name="p279523892112"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row1179553872111"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2795143815211"><a name="p2795143815211"></a><a name="p2795143815211"></a>创建一个新的插件扩展</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p979553862118"><a name="p979553862118"></a><a name="p979553862118"></a><a href="CREATE-EXTENSION.md">CREATE Extension</a></p>
</td>
</tr>
<tr id="row147951638182114"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p107951338122110"><a name="p107951338122110"></a><a name="p107951338122110"></a>修改插件扩展</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4795163811210"><a name="p4795163811210"></a><a name="p4795163811210"></a><a href="ALTER-EXTENSION.md">ALTER Extension</a></p>
</td>
</tr>
<tr id="row2079513802114"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p27951384218"><a name="p27951384218"></a><a name="p27951384218"></a>删除插件扩展</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p137959389213"><a name="p137959389213"></a><a name="p137959389213"></a><a href="DROP-EXTENSION.md">DROP Extension</a></p>
</td>
</tr>
</tbody>
</table>

## 定义操作符<a name="section10275056141918"></a>

**表 17**  操作符定义相关SQL

<a name="table1673375910218"></a>
<table><thead align="left"><tr id="row97331259122110"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1073365919214"><a name="p1073365919214"></a><a name="p1073365919214"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1773385962114"><a name="p1773385962114"></a><a name="p1773385962114"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row9733195942110"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p0733175917217"><a name="p0733175917217"></a><a name="p0733175917217"></a>创建一个新的操作符</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p673365915210"><a name="p673365915210"></a><a name="p673365915210"></a><a href="CREATE-OPERATOR.md">CREATE OPERATOR</a></p>
</td>
</tr>
<tr id="row9733159102119"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p97331159192115"><a name="p97331159192115"></a><a name="p97331159192115"></a>修改操作符</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17331559192112"><a name="p17331559192112"></a><a name="p17331559192112"></a><a href="ALTER-OPERATOR.md">ALTER OPERATOR</a></p>
</td>
</tr>
<tr id="row127339590217"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8733359102115"><a name="p8733359102115"></a><a name="p8733359102115"></a>删除操作符</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p107331359172118"><a name="p107331359172118"></a><a name="p107331359172118"></a><a href="DROP-OPERATOR.md">DROP OPERATOR</a></p>
</td>
</tr>
</tbody>
</table>

## 定义过程语言<a name="section36251059111916"></a>

**表 18**  过程语言定义相关SQL

<a name="table17164814221"></a>
<table><thead align="left"><tr id="row111618812214"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p201613818227"><a name="p201613818227"></a><a name="p201613818227"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p111618852217"><a name="p111618852217"></a><a name="p111618852217"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row18161582229"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8161681229"><a name="p8161681229"></a><a name="p8161681229"></a>创建一个新的过程语言</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p91668182217"><a name="p91668182217"></a><a name="p91668182217"></a><a href="CREATE-LANGUAGE.md">CREATE LANGUAGE</a></p>
</td>
</tr>
<tr id="row117108102212"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p14174892211"><a name="p14174892211"></a><a name="p14174892211"></a>修改过程语言</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p111715811225"><a name="p111715811225"></a><a name="p111715811225"></a><a href="ALTER-LANGUAGE.md">ALTER LANGUAGE</a></p>
</td>
</tr>
<tr id="row71715812212"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p151711852210"><a name="p151711852210"></a><a name="p151711852210"></a>删除过程语言</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4173872215"><a name="p4173872215"></a><a name="p4173872215"></a><a href="DROP-LANGUAGE.md">DROP LANGUAGE</a></p>
</td>
</tr>
</tbody>
</table>

## 定义数据类型<a name="section256114132018"></a>

**表 19**  数据类型定义相关SQL

<a name="table351719132218"></a>
<table><thead align="left"><tr id="row10511919172210"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p115131972213"><a name="p115131972213"></a><a name="p115131972213"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3511819192210"><a name="p3511819192210"></a><a name="p3511819192210"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="row15151962218"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p16511419162212"><a name="p16511419162212"></a><a name="p16511419162212"></a>创建一个新的数据类型</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p482414522117"><a name="p482414522117"></a><a name="p482414522117"></a><a href="CREATE-TYPE.md">CREATE TYPE</a></p>
</td>
</tr>
<tr id="row95151910227"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p75113195221"><a name="p75113195221"></a><a name="p75113195221"></a>修改数据类型</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p128243502119"><a name="p128243502119"></a><a name="p128243502119"></a><a href="ALTER-TYPE.md">ALTER TYPE</a></p>
</td>
</tr>
<tr id="row1251619192217"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p452111962212"><a name="p452111962212"></a><a name="p452111962212"></a>删除数据类型</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p178251754212"><a name="p178251754212"></a><a name="p178251754212"></a><a href="DROP-TYPE.md">DROP TYPE</a></p>
</td>
</tr>
</tbody>
</table>

