# 单query索引推荐

单query索引推荐功能支持用户在数据库中直接进行操作，本功能基于查询语句的语义信息和数据库的统计信息，对用户输入的单条查询语句生成推荐的索引。本功能涉及的函数接口如下。

**表 1**  单query索引推荐功能的接口

<a name="table6447142414557"></a>
<table><thead align="left"><tr id="row544732413559"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1644752411553"><a name="p1644752411553"></a><a name="p1644752411553"></a>函数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p34471524185517"><a name="p34471524185517"></a><a name="p34471524185517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p124475241559"><a name="p124475241559"></a><a name="p124475241559"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="row94473249558"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p344762435510"><a name="p344762435510"></a><a name="p344762435510"></a>gs_index_advise</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1444782419553"><a name="p1444782419553"></a><a name="p1444782419553"></a>SQL语句字符串</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1544816249557"><a name="p1544816249557"></a><a name="p1544816249557"></a>针对单条查询语句生成推荐索引。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.png) **说明：** 

>-   本功能仅支持单条SELECT类型的语句，不支持其他类型的SQL语句。  
>-   本功能暂不支持列存表、段页式表、普通视图、物化视图、全局临时表以及密态数据库。  

## 使用方法<a name="section54321094535"></a>

使用上述函数，获取针对该query生成的推荐索引，推荐结果由索引的表名和列名组成。

例如：

```
openGauss=> select "table", "column" from gs_index_advise('SELECT c_discount from bmsql_customer where c_w_id = 10');
     table      |  column  
----------------+----------
 bmsql_customer | c_w_id
(1 row)
```

上述结果表明：应当在 bmsql\_customer 的 c\_w\_id 列上创建索引，例如可以通过下述SQL语句创建索引：

```
CREATE INDEX idx on bmsql_customer(c_w_id);
```

某些SQL语句，也可能被推荐创建联合索引，例如：

```
openGauss=# select "table", "column" from gs_index_advise('select name, age, sex from t1 where age >= 18 and age < 35 and sex = ''f'';');
 table | column
-------+------------
 t1    | age, sex
(1 row)
```

则上述语句表明应该在表 t1 上创建一个联合索引 \(age, sex\)， 则可以通过下述命令创建：

```
CREATE INDEX idx1 on t1(age, sex);
```

针对分区表可推荐具体索引类型，例如：

```
openGauss=# select "table", "column", "indextype" from gs_index_advise('select name, age, sex from range_table where age = 20;');
 table | column | indextype
-------+--------+-----------
 t1    | age    | global
(1 row)
```

>![](public_sys-resources/icon-note.png) **说明：** 
>系统函数gs\_index\_advise\(\)的参数是文本型，如果参数中存在如单引号（'）等特殊字符，可以使用单引号（'）进行转义，可参考上述示例。

