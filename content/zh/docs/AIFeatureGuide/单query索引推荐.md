# 单query索引推荐<a name="ZH-CN_TOPIC_0000002294471321"></a>

单query索引推荐功能支持用户在数据库中直接进行操作，本功能基于查询语句的语义信息和数据库的统计信息，对用户输入的单条查询语句生成推荐的索引。本功能涉及的函数接口如下。

**表 1**  单query索引推荐功能的接口

<a name="zh-cn_topic_0000001714828981_table6447142414557"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714828981_row544732413559"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714828981_p1644752411553"><a name="zh-cn_topic_0000001714828981_p1644752411553"></a><a name="zh-cn_topic_0000001714828981_p1644752411553"></a>函数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714828981_p34471524185517"><a name="zh-cn_topic_0000001714828981_p34471524185517"></a><a name="zh-cn_topic_0000001714828981_p34471524185517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714828981_p124475241559"><a name="zh-cn_topic_0000001714828981_p124475241559"></a><a name="zh-cn_topic_0000001714828981_p124475241559"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714828981_row94473249558"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714828981_p344762435510"><a name="zh-cn_topic_0000001714828981_p344762435510"></a><a name="zh-cn_topic_0000001714828981_p344762435510"></a>gs_index_advise</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714828981_p1444782419553"><a name="zh-cn_topic_0000001714828981_p1444782419553"></a><a name="zh-cn_topic_0000001714828981_p1444782419553"></a>SQL语句字符串。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714828981_p1544816249557"><a name="zh-cn_topic_0000001714828981_p1544816249557"></a><a name="zh-cn_topic_0000001714828981_p1544816249557"></a>针对单条查询语句生成推荐索引。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：** 
>-   本功能仅支持单条SELECT、INSERT、DELETE、UPDATE类型的语句，不支持其他类型的SQL语句。
>-   本功能使用优化器采样结果，用户需要保证最近对相关表执行过analyze语句，否则优化器结果不准确。
>-   本功能暂不支持段页式表、普通视图、物化视图、全局临时表、二级分区表以及密态数据库。
>-   如果对ustore表相关语句进行索引推荐，本功能可能无法保证结果的准确性。

## 使用方法<a name="zh-cn_topic_0000001714828981_section54321094535"></a>

使用上述函数，获取针对该query生成的推荐索引，推荐结果由索引的表名和列名组成。

例如：

```
opengauss=# SELECT "table", "column" FROM gs_index_advise('SELECT c_discount FROM bmsql_customer WHERE c_w_id = 10');
     table      |  column  
----------------+----------
 bmsql_customer | c_w_id
(1 row)
```

上述结果表明，应该在表bmsql\_customer的c\_w\_id列上创建索引，例如可以通过下述SQL语句创建索引：

```
opengauss=# CREATE INDEX idx ON bmsql_customer(c_w_id);
```

某些SQL语句，也可能被推荐创建联合索引，例如：

```
opengauss=# SELECT "table", "column" FROM gs_index_advise('SELECT name, age, gender FROM t1 WHERE age >= 18 AND age < 35 AND gender = ''f'';');
 table | column
-------+------------
 t1    | age, gender
(1 row)
```

上述结果表明，应该在表t1上创建一个联合索引\(age, gender\)，例如可以通过下述SQL语句创建索引：

```
opengauss=# CREATE INDEX idx1 ON t1(age, gender);
```

针对分区表可推荐具体索引类型，例如：

```
opengauss=# SELECT "table", "column", "indextype" FROM gs_index_advise('SELECT name, age, gender FROM range_table WHERE age = 20;');
 table | column | indextype
-------+--------+-----------
 t1    | age    | global
(1 row)
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>系统函数gs\_index\_advise\(\)的参数是文本型，如果参数中存在如单引号（'）等特殊字符，可以使用单引号（'）进行转义，可参考上述示例。

