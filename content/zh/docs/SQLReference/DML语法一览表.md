# DML语法一览表<a name="ZH-CN_TOPIC_0289900948"></a>

DML（Data Manipulation Language数据操作语言），用于对数据库表中的数据进行操作。如：插入、更新、查询、删除。

## 插入数据<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_s56b39a8f9e8c41359c74613c637c93ba"></a>

插入数据是往数据库表中添加一条或多条记录，请参考[INSERT](INSERT.md)。

## 修改数据<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_sa635baff4808455daf4aa998456672ce"></a>

修改数据是修改数据库表中的一条或多条记录，请参考[UPDATE](UPDATE.md)。

## 查询数据<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_s1633132317ef42edba6e4afdbb2d6b46"></a>

数据库查询语句SELECT是用于在数据库中检索适合条件的信息，请参考[SELECT](SELECT.md)。

## 删除数据<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_s0dfc2748bba64d79b39e32e3c0d37324"></a>

openGauss提供了两种删除表数据的语句：删除表中指定条件的数据，请参考[DELETE](DELETE.md)；或删除表的所有数据，请参考[TRUNCATE](TRUNCATE.md)。

TRUNCATE快速地从表中删除所有行，它和在每个表上进行无条件的DELETE有同样的效果，不过因为它不做表扫描，因而快得多。在大表上最有用。

## 拷贝数据<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_sb955e5ed9d7d4b4eb0ac6198afa0a6ec"></a>

openGauss提供了在表和文件之间拷贝数据的语句，请参考[COPY](COPY.md)。

## 锁定表<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_sc96d73a125be4828991a058d852380fa"></a>

openGauss提供了多种锁模式用于控制对表中数据的并发访问，请参考[LOCK](LOCK-Sql.md)。

## 调用函数<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059778364_s04a7c8870a5f42c18aa48d11bde42b8c"></a>

openGauss提供了三个用于调用函数的语句，它们在语法结构上没有差别，请参考[CALL](CALL.md)。

## 操作会话<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_s9179d500d4a64533b55cb07c42415a2d"></a>

用户与数据库之间建立的连接称为会话，请参考[表1](#zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_t320d7e04ba33427cbe2132b994ef6cb2)。

**表 1**  会话相关SQL

<a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_t320d7e04ba33427cbe2132b994ef6cb2"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_raa93753707964fc48c28010ba35629f7"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aae792e6df01442e3902890ec9962853e"><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aae792e6df01442e3902890ec9962853e"></a><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aae792e6df01442e3902890ec9962853e"></a>功能</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_a1b64092554cc4570a4af64a5ae25aaaa"><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_a1b64092554cc4570a4af64a5ae25aaaa"></a><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_a1b64092554cc4570a4af64a5ae25aaaa"></a>相关SQL</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_re6db689558c64ec097aef4c5e3fce824"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aad123f99bacb4f659833fcae7c69eb20"><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aad123f99bacb4f659833fcae7c69eb20"></a><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aad123f99bacb4f659833fcae7c69eb20"></a>修改会话</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_a45e9e3aaeb984e0ca31e15e415e7acef"><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_a45e9e3aaeb984e0ca31e15e415e7acef"></a><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_a45e9e3aaeb984e0ca31e15e415e7acef"></a><a href="ALTER-SESSION.md">ALTER SESSION</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_rb2a050bcef0447a79646c9e2c7bc1fba"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_ab7746aa2be83487ea56ce11013c5db73"><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_ab7746aa2be83487ea56ce11013c5db73"></a><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_ab7746aa2be83487ea56ce11013c5db73"></a>结束会话</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aa1499fe4d47e41a49b1658627f3bac53"><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aa1499fe4d47e41a49b1658627f3bac53"></a><a name="zh-cn_topic_0283137022_zh-cn_topic_0237122050_zh-cn_topic_0059777960_aa1499fe4d47e41a49b1658627f3bac53"></a><a href="ALTER-SYSTEM-KILL-SESSION.md">ALTER SYSTEM KILL SESSION</a></p>
</td>
</tr>
</tbody>
</table>
