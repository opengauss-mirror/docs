# SELECT

## 功能描述<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s65596fb5f1d44a428e41dd508d2044a7"></a>

SELECT用于从表或视图中取出数据。

SELECT语句就像叠加在数据库表上的过滤器，利用SQL关键字从数据表中过滤出用户需要的数据。

## 注意事项<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_s42c37979749545719ac9114594f45d93"></a>

-   本章节只包含shark新增的语法，原openGauss的语法未做删除和修改。
-   新增支持TOP子句。

## 语法格式<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sb7329222602d46fe944bf6c300931dd2"></a>

-   查询数据

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [/*+ plan_hint */] [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
[ top_clause ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ into_option ]
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ [ START WITH condition ] CONNECT BY [NOCYCLE] condition [ ORDER SIBLINGS BY expression ] ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ WINDOW {window_name AS ( window_definition )} [, ...] ]
[ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
[ OFFSET start [ ROW | ROWS ] ]
[ FETCH { FIRST | NEXT } [ count ] [PERCENT] { ROW | ROWS } { ONLY | WITH TIES } ]
[ into_option ]
[ {FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF table_name [, ...] ] [ NOWAIT | WAIT N]} [...] ]
[ into_option ];
```

-   其中TOP子句top\_clause为：

    ```
    TOP (expression) [ PERCENT ] [ WITH TIES ]
    ```


## 参数说明<a name="zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc"></a>

-   **TOP (expression) [ PERCENT ] [ WITH TIES ]**

    TOP子句限制查询结果集中返回指定的行数或行数的百分比。将 TOP 子句与 ORDER BY 子句一起使用时，结果集被限制为有序的指定行数，否则TOP子句按未定义的顺序返回指定行数。使用PERCENT关键字可以指定返回的行数为查询结果集的百分比。WITH TIES关键字表示返回指定的行数以及结果集有序情况下所有与最后一行相同的值。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >-   兼容D库中，使用PERCENT关键字时，PERCENT值的范围为[0,100]，超范围报错。
    >-   兼容D库中，指定的百分比数和结果集总数相乘后不为整数时，向上取整到最接近的整数值。指定的行数不为整数时，四舍五入到最接近的整数值。
    >-   兼容D库中，WITH TIES必须和ORDER BY 子句一起使用，否则报错。这一规则适用于TOP子句和FETCH子句。 
    >-   兼容D库中，TOP子句和LIMIT子句以及FETCH子句不能同时使用。


## TOP子句示例<a name="zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s985289833081489e9d77c485755bd362"></a>

```sql
opengauss=# CREATE TABLE Products(QtyAvailable smallint, UnitPrice money, InventoryValue AS (QtyAvailable * UnitPrice) PERSISTED);
CREATE TABLE
opengauss=# INSERT INTO Products(QtyAvailable, UnitPrice) VALUES (25, 2.00), (10, 1.5), (25, 2.00), (10, 1.5), (10, 1.5);
INSERT 0 5
opengauss=# select * from Products ;
 qtyavailable | unitprice | inventoryvalue 
--------------+-----------+----------------
           25 |     $2.00 |         $50.00
           10 |     $1.50 |         $15.00
           25 |     $2.00 |         $50.00
           10 |     $1.50 |         $15.00
           10 |     $1.50 |         $15.00
(5 rows)

opengauss=# select TOP 4 * from Products ORDER BY qtyavailable;
 qtyavailable | unitprice | inventoryvalue 
--------------+-----------+----------------
           10 |     $1.50 |         $15.00
           10 |     $1.50 |         $15.00
           10 |     $1.50 |         $15.00
           25 |     $2.00 |         $50.00
(4 rows)

opengauss=# select TOP 2 PERCENT * from Products ORDER BY qtyavailable;
 qtyavailable | unitprice | inventoryvalue 
--------------+-----------+----------------
           10 |     $1.50 |         $15.00
(1 row)

opengauss=# select TOP 2 PERCENT WITH TIES * from Products ORDER BY qtyavailable;
 qtyavailable | unitprice | inventoryvalue 
--------------+-----------+----------------
           10 |     $1.50 |         $15.00
           10 |     $1.50 |         $15.00
           10 |     $1.50 |         $15.00
(3 rows)

```

## 相关链接<a name="section156744489391"></a>

[SELECT](../SQLReference/SELECT.md)