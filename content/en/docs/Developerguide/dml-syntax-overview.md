# DML Syntax Overview<a name="EN-US_TOPIC_0289900948"></a>

Data manipulation language (DML) is used to perform operations on data in database tables, such as inserting, updating, querying, or deleting data.

## Inserting Data<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_s56b39a8f9e8c41359c74613c637c93ba"></a>

Inserting data refers to adding one or multiple records to a database table. For details, see [INSERT](insert.md).

## Updating Data<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_sa635baff4808455daf4aa998456672ce"></a>

Updating data refers to modifying one or multiple records in a database table. For details, see [UPDATE](update.md).

## Querying Data<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_s1633132317ef42edba6e4afdbb2d6b46"></a>

The database query statement SELECT is used to search for required information in a database. For details, see [SELECT](select.md).

## Deleting Data<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_s0dfc2748bba64d79b39e32e3c0d37324"></a>

openGauss provides two statements for deleting data from database tables. To delete data meeting specified conditions from a database table, see [DELETE](delete.md). To delete all data from a database table, see [TRUNCATE](truncate.md).

**TRUNCATE** can quickly delete all data from a database table, which achieves the effect same as that running **DELETE** to delete data without specifying conditions from each table. Deletion efficiency using **TRUNCATE** is faster because **TRUNCATE** does not scan tables. Therefore, **TRUNCATE** is useful in large tables.

## Copying Data<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_sb955e5ed9d7d4b4eb0ac6198afa0a6ec"></a>

openGauss provides a statement for copying data between tables and files. For details, see [COPY](copy.md).

## Locking a Table<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_sc96d73a125be4828991a058d852380fa"></a>

openGauss provides multiple lock modes to control concurrent accesses to table data. For details, see LOCK](lock-1.md).

## Calling a Function<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059778364_s04a7c8870a5f42c18aa48d11bde42b8c"></a>

openGauss provides three statements for invoking functions. These statements are the same in the syntax structure. For details, see [CALL](call.md).

## Session Management<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_s9179d500d4a64533b55cb07c42415a2d"></a>

A session is a connection established between the user and the database. [Table 1](#en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_t320d7e04ba33427cbe2132b994ef6cb2) lists the related SQL statements.

**Table 1** SQL statements related to sessions

<a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_t320d7e04ba33427cbe2132b994ef6cb2"></a>
<table><thead align="left"><tr id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_raa93753707964fc48c28010ba35629f7"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aae792e6df01442e3902890ec9962853e"><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aae792e6df01442e3902890ec9962853e"></a><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aae792e6df01442e3902890ec9962853e"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_a1b64092554cc4570a4af64a5ae25aaaa"><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_a1b64092554cc4570a4af64a5ae25aaaa"></a><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_a1b64092554cc4570a4af64a5ae25aaaa"></a>SQL Statement</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_re6db689558c64ec097aef4c5e3fce824"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aad123f99bacb4f659833fcae7c69eb20"><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aad123f99bacb4f659833fcae7c69eb20"></a><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aad123f99bacb4f659833fcae7c69eb20"></a>Altering a session</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_a45e9e3aaeb984e0ca31e15e415e7acef"><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_a45e9e3aaeb984e0ca31e15e415e7acef"></a><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_a45e9e3aaeb984e0ca31e15e415e7acef"></a><a href="alter-session.md">ALTER SESSION</a></p>
</td>
</tr>
<tr id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_rb2a050bcef0447a79646c9e2c7bc1fba"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_ab7746aa2be83487ea56ce11013c5db73"><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_ab7746aa2be83487ea56ce11013c5db73"></a><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_ab7746aa2be83487ea56ce11013c5db73"></a>Killing a session</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aa1499fe4d47e41a49b1658627f3bac53"><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aa1499fe4d47e41a49b1658627f3bac53"></a><a name="en-us_topic_0283137022_en-us_topic_0237122050_en-us_topic_0059777960_aa1499fe4d47e41a49b1658627f3bac53"></a><a href="alter-system-kill-session.md">ALTER SYSTEM KILL SESSION</a></p>
</td>
</tr>
</tbody>
</table>
