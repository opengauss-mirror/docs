# 伪类型

openGauss数据类型中包含一系列特殊用途的类型，这些类型按照类别被称为伪类型。伪类型不能作为字段的数据类型，但是可以用于声明函数的参数或者结果类型。

当一个函数不仅是简单地接受并返回某种SQL数据类型的情况下伪类型是很有用的。[表1](#表1)列出了所有的伪类型。

**表 1**  伪类型<a id="表1"></a>

| 名称<br>               | 描述<br>                              |
|----------------------|-------------------------------------|
| any<br>              | 表示函数接受任何输入数据类型。<br>                 |
| anyelement<br>       | 表示函数接受任何数据类型。<br>                   |
| anyarray<br>         | 表示函数接受任意数组数据类型。<br>                 |
| anynonarray<br>      | 表示函数接受任意非数组数据类型。<br>                |
| anyenum<br>          | 表示函数接受任意枚举数据类型。<br>                 |
| anyrange<br>         | 表示函数接受任意范围数据类型。<br>                 |
| cstring<br>          | 表示函数接受或者返回一个空结尾的C字符串。<br>           |
| internal<br>         | 表示函数接受或者返回一种服务器内部的数据类型。<br>         |
| language_handler<br> | 声明一个过程语言调用句柄返回language_handler。<br> |
| fdw_handler<br>      | 声明一个外部数据封装器返回fdw_handler。<br>       |
| record<br>           | 标识函数返回一个未声明的行类型。<br>                |
| trigger<br>          | 声明一个触发器函数返回trigger。<br>             |
| event_trigger<br>    | 声明一个事件触发器函数返回event_trigger。<br>     |
| void<br>             | 表示函数不返回数值。<br>                      |
| opaque<br>           | 一个已经过时的类型，以前用于所有上面这些用途。<br>         |

声明用C编写的函数（不管是内置的还是动态装载的）都可以接受或者返回任何这样的伪数据类型。当伪类型作为参数类型使用时，用户需要保证函数的正常运行。

用过程语言编写的函数只能使用实现语言允许的伪类型。目前，过程语言都不允许使用作为参数类型的伪类型，并且只允许使用void和record作为结果类型。一些多态的函数还支持使用anyelement、anyarray、anynonarray anyenum和anyrange类型。

每一个被声明为anyelement的位置（参数或返回值）被允许具有任意特定的实际数据类型，但是再任何给定的查询中他们必须全部是相同的实际类型。

伪类型internal用于声明那种只能在数据库系统内部调用的函数，他们不能直接在SQL查询里调用。如果函数至少有一个internal类型的参数，则不能从SQL里调用他。建议不要创建任何声明返回internal的函数，除非他至少有一个internal类型的参数。

示例：

```
--创建表
openGauss=# create table t1 (a int);

--插入两条数据
openGauss=# insert into t1 values(1),(2);

--创建函数showall()。
openGauss=# CREATE OR REPLACE FUNCTION showall() RETURNS SETOF record
AS $$ SELECT count(*) from t1; $$
LANGUAGE SQL;

--调用函数showall()。
openGauss=# SELECT showall();
 showall 
---------
 (2)
(1 row)

--删除函数。
openGauss=# DROP FUNCTION showall();

--删除表
openGauss=# drop table t1;
```
