# UNION，CASE和相关构造<a name="ZH-CN_TOPIC_0289900690"></a>

SQL UNION构造必须把那些可能不太相似的类型匹配起来成为一个结果集。解析算法分别应用于联合查询的每个输出字段。INTERSECT和EXCEPT构造对不相同的类型使用和UNION相同的算法进行解析。CASE、ARRAY、VALUES、GREATEST和LEAST构造也使用同样的算法匹配它的部件表达式并且选择一个结果数据类型。

## UNION，CASE和相关构造解析<a name="zh-cn_topic_0283136625_zh-cn_topic_0237122011_zh-cn_topic_0059779260_s4d37d0d92a7e4067a51798614b044fb4"></a>

-   如果所有输入都是相同的类型，并且不是unknown类型，那么解析成这种类型。
-   如果所有输入都是unknown类型则解析成text类型（字符串类型范畴的首选类型）。否则，忽略unknown输入。
-   如果输入不属于同一个类型范畴，失败。（unknown类型除外）
-   如果输入类型是同一个类型范畴，则选择该类型范畴的首选类型。（例外：union操作会选择第一个分支的类型作为所选类型。）

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >系统表pg\_type中typcategory表示数据类型范畴，typispreferred表示是否是typcategory分类中的首选类型。

-   把所有输入转换为所选的类型（对于字符串保持原有长度）。如果从给定的输入到所选的类型没有隐式转换则失败。
-   若输入中含json、txid\_snapshot、sys\_refcursor或几何类型，则不能进行union。

## 对于case和coalesce，在TD兼容模式下的处理<a name="zh-cn_topic_0283136625_zh-cn_topic_0237122011_zh-cn_topic_0059779260_sa6bf47fa5cdb4d2caabf956bb11c7649"></a>

-   如果所有输入都是相同的类型，并且不是unknown类型，那么解析成这种类型。
-   如果所有输入都是unknown类型则解析成text类型。
-   如果输入字符串（包括unknown，unknown当text来处理）和数字类型，那么解析成字符串类型，如果是其他不同的类型范畴，则报错。
-   如果输入类型是同一个类型范畴，则选择该类型的优先级较高的类型。
-   把所有输入转换为所选的类型。如果从给定的输入到所选的类型没有隐式转换则失败。

## 示例<a name="zh-cn_topic_0283136625_zh-cn_topic_0237122011_zh-cn_topic_0059779260_sb48a6ac8819342588bbdeeb006db477e"></a>

示例1：Union中的待定类型解析。这里，unknown类型文本'b'将被解析成text类型。

```
openGauss=# SELECT text 'a' AS "text" UNION SELECT 'b';
 text
------
 a
 b
(2 rows)
```

示例2：简单Union中的类型解析。文本1.2的类型为numeric，而且integer类型的1可以隐含地转换为numeric，因此使用这个类型。

```
openGauss=# SELECT 1.2 AS "numeric" UNION SELECT 1;
 numeric
---------
       1
     1.2
(2 rows)
```

示例3：转置Union中的类型解析。这里，因为类型real不能被隐含转换成integer，但是integer可以隐含转换成real，那么联合的结果类型将是real。

```
openGauss=# SELECT 1 AS "real" UNION SELECT CAST('2.2' AS REAL);
 real
------
    1
  2.2
(2 rows)
```

示例4：TD模式下，coalesce参数输入int和varchar类型，那么解析成varchar类型。A模式下会报错。

```
--在A模式下，创建A兼容模式的数据库a_1。
openGauss=# CREATE DATABASE a_1 dbcompatibility = 'A';

--切换数据库为a_1。
openGauss=# \c a_1

--创建表t1。
a_1=# CREATE TABLE t1(a int, b varchar(10));

--查看coalesce参数输入int和varchar类型的查询语句的执行计划。                 
a_1=# EXPLAIN SELECT coalesce(a, b) FROM t1;
ERROR:  COALESCE types integer and character varying cannot be matched
LINE 1: EXPLAIN SELECT coalesce(a, b) FROM t1;
                                   ^
CONTEXT:  referenced column: coalesce

--删除表。
a_1=# DROP TABLE t1;

--切换数据库为openGauss。
a_1=# \c openGauss

--在TD模式下，创建TD兼容模式的数据库td_1。
openGauss=# CREATE DATABASE td_1 dbcompatibility = 'C';

--切换数据库为td_1。
openGauss=# \c td_1

--创建表t2。
td_1=# CREATE TABLE t2(a int, b varchar(10));

--查看coalesce参数输入int和varchar类型的查询语句的执行计划。
td_1=# EXPLAIN VERBOSE select coalesce(a, b) from t2;
                                      QUERY PLAN
---------------------------------------------------------------------------------------
 Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
   Output: (COALESCE((t2.a)::character varying, t2.b))
   Node/s: All dbnodes
   Remote query: SELECT COALESCE(a::character varying, b) AS "coalesce" FROM public.t2
(4 rows)

--删除表。
td_1=# DROP TABLE t2;

--切换数据库为openGauss。
td_1=# \c openGauss

--删除A和TD模式的数据库。
openGauss=# DROP DATABASE a_1;
openGauss=# DROP DATABASE td_1;
```

