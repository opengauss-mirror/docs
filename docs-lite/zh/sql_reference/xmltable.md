# XMLTABLE

## 功能描述

`XMLTABLE` 用于将 XML 文档按指定行路径展开为关系表结果，并通过 `COLUMNS` 子句将节点、属性或表达式映射为输出列。该语法在 `FROM` 子句中作为表函数使用。

## 语法格式

```sql
XMLTABLE ( row_expression PASSING document_expression
           COLUMNS column_definition [, ...] )

XMLTABLE ( XMLNAMESPACES ( namespace_uri AS prefix | DEFAULT namespace_uri [, ...] )
           , row_expression PASSING document_expression
           COLUMNS column_definition [, ...] )
```

其中列定义支持如下形式：

```sql
column_name type_name
column_name type_name PATH path_expression
column_name type_name PATH path_expression DEFAULT default_expression
column_name type_name PATH path_expression [ NOT NULL | NULL ]
column_name FOR ORDINALITY
```

## 参数说明

- `row_expression`

  指定行路径表达式，用于从输入 XML 文档中定位每一行对应的节点集。

- `PASSING document_expression`

  指定待解析的 XML 文档表达式。

- `XMLNAMESPACES`

  指定命名空间映射。可以声明带前缀命名空间，也可以声明默认命名空间。

- `COLUMNS`

  定义输出列。

  - `column_name type_name`

    定义普通输出列。

  - `PATH path_expression`

    指定当前列的取值路径。

  - `DEFAULT default_expression`

    当路径取值为空时返回默认值。

  - `NOT NULL | NULL`

    指定列是否允许为空。当列声明为 `NOT NULL` 且实际结果为空时，语句报错。

  - `FOR ORDINALITY`

    生成序号列。一个 `XMLTABLE` 中仅允许定义一个 `FOR ORDINALITY` 列。

## 注意事项

- `XMLTABLE` 只能在 `FROM` 子句中作为表函数使用。
- `PASSING` 的输入应为合法 XML 文档。
- `PATH` 和 `DEFAULT` 表达式均参与语义分析和类型转换。
- `FOR ORDINALITY` 列返回 `int4` 类型序号。
- 默认命名空间语法可以被解析，但当前实现不支持默认命名空间，执行时会报错。
- 当列路径返回多值，而目标列需要单值时，语句会报错。

## 示例

### 基本用法

```sql
CREATE TABLE xmldata(data xml);
INSERT INTO xmldata VALUES('<ROWS>
<ROW id="1">
  <COUNTRY_ID>AU</COUNTRY_ID>
  <COUNTRY_NAME>Australia</COUNTRY_NAME>
  <REGION_ID>3</REGION_ID>
</ROW>
<ROW id="2">
  <COUNTRY_ID>CN</COUNTRY_ID>
  <COUNTRY_NAME>China</COUNTRY_NAME>
  <REGION_ID>3</REGION_ID>
</ROW>
<ROW id="3">
  <COUNTRY_ID>HK</COUNTRY_ID>
  <COUNTRY_NAME>HongKong</COUNTRY_NAME>
  <REGION_ID>3</REGION_ID>
</ROW>
<ROW id="4">
  <COUNTRY_ID>IN</COUNTRY_ID>
  <COUNTRY_NAME>India</COUNTRY_NAME>
  <REGION_ID>3</REGION_ID>
</ROW>
<ROW id="5">
  <COUNTRY_ID>JP</COUNTRY_ID>
  <COUNTRY_NAME>Japan</COUNTRY_NAME>
  <REGION_ID>3</REGION_ID><PREMIER_NAME>Sinzo Abe</PREMIER_NAME>
</ROW>
<ROW id="6">
  <COUNTRY_ID>SG</COUNTRY_ID>
  <COUNTRY_NAME>Singapore</COUNTRY_NAME>
  <REGION_ID>3</REGION_ID><SIZE unit="km">791</SIZE>
</ROW>
</ROWS>');

SELECT xmltable.*
   FROM (SELECT data FROM xmldata) x,
        XMLTABLE('/ROWS/ROW'
                 PASSING data
                 COLUMNS id int PATH '@id',
                         _id FOR ORDINALITY,
                         country_name text PATH 'COUNTRY_NAME/text()' NOT NULL,
                         country_id text PATH 'COUNTRY_ID',
                         region_id int PATH 'REGION_ID',
                         size float PATH 'SIZE',
                         unit text PATH 'SIZE/@unit',
                         premier_name text PATH 'PREMIER_NAME' DEFAULT 'not specified');
```

返回结果如下：

```sql
 id | _id | country_name | country_id | region_id | size | unit | premier_name
----+-----+--------------+------------+-----------+------+------+---------------
  1 |   1 | Australia    | AU         |         3 |      |      | not specified
  2 |   2 | China        | CN         |         3 |      |      | not specified
  3 |   3 | HongKong     | HK         |         3 |      |      | not specified
  4 |   4 | India        | IN         |         3 |      |      | not specified
  5 |   5 | Japan        | JP         |         3 |      |      | Sinzo Abe
  6 |   6 | Singapore    | SG         |         3 |  791 | km   | not specified
(6 rows)
```

### 命名空间用法

```sql
SELECT * FROM XMLTABLE(XMLNAMESPACES('http://x.y' AS zz),
                      '/zz:rows/zz:row'
                      PASSING '<rows xmlns="http://x.y"><row><a>10</a></row></rows>'
                      COLUMNS a int PATH 'zz:a');
```

返回结果如下：

```sql
 a
----
 10
(1 row)
```

默认命名空间当前不支持，示例如下：

```sql
SELECT * FROM XMLTABLE(XMLNAMESPACES(DEFAULT 'http://x.y'),
                      '/rows/row'
                      PASSING '<rows xmlns="http://x.y"><row><a>10</a></row></rows>'
                      COLUMNS a int PATH 'a');
```

返回结果如下：

```sql
ERROR:  DEFAULT namespace is not supported
```

### 动态路径与默认值

```sql
CREATE TABLE xmltest2(x xml, _path text);

INSERT INTO xmltest2 VALUES('<d><r><ac>1</ac></r></d>', 'A');
INSERT INTO xmltest2 VALUES('<d><r><bc>2</bc></r></d>', 'B');
INSERT INTO xmltest2 VALUES('<d><r><cc>3</cc></r></d>', 'C');
INSERT INTO xmltest2 VALUES('<d><r><dc>2</dc></r></d>', 'D');

SELECT xmltable.* FROM xmltest2, xmltable('/d/r' PASSING x COLUMNS a int PATH '' || lower(_path) || 'c');

SELECT xmltable.* FROM xmltest2, xmltable(('/d/r/' || lower(_path) || 'c') PASSING x COLUMNS a int PATH '.');

SELECT xmltable.* FROM xmltest2, xmltable(('/d/r/' || lower(_path) || 'c') PASSING x COLUMNS a int PATH 'x' DEFAULT ascii(_path) - 54);
```

最后一个查询返回结果如下：

```sql
 a
----
 11
 12
 13
 14
(4 rows)
```

### 条件过滤

```sql
INSERT INTO xmldata VALUES('<ROWS>
<ROW id="10">
  <COUNTRY_ID>CZ</COUNTRY_ID>
  <COUNTRY_NAME>Czech Republic</COUNTRY_NAME>
  <REGION_ID>2</REGION_ID><PREMIER_NAME>Milos Zeman</PREMIER_NAME>
</ROW>
<ROW id="11">
  <COUNTRY_ID>DE</COUNTRY_ID>
  <COUNTRY_NAME>Germany</COUNTRY_NAME>
  <REGION_ID>2</REGION_ID>
</ROW>
<ROW id="12">
  <COUNTRY_ID>FR</COUNTRY_ID>
  <COUNTRY_NAME>France</COUNTRY_NAME>
  <REGION_ID>2</REGION_ID>
</ROW>
</ROWS>');

INSERT INTO xmldata VALUES('<ROWS>
<ROW id="20">
  <COUNTRY_ID>EG</COUNTRY_ID>
  <COUNTRY_NAME>Egypt</COUNTRY_NAME>
  <REGION_ID>1</REGION_ID>
</ROW>
<ROW id="21">
  <COUNTRY_ID>SD</COUNTRY_ID>
  <COUNTRY_NAME>Sudan</COUNTRY_NAME>
  <REGION_ID>1</REGION_ID>
</ROW>
</ROWS>');

SELECT xmltable.*
   FROM (SELECT data FROM xmldata) x,
        XMLTABLE('/ROWS/ROW'
                 PASSING data
                 COLUMNS id int PATH '@id',
                         _id FOR ORDINALITY,
                         country_name text PATH 'COUNTRY_NAME' NOT NULL,
                         country_id text PATH 'COUNTRY_ID',
                         region_id int PATH 'REGION_ID',
                         size float PATH 'SIZE',
                         unit text PATH 'SIZE/@unit',
                         premier_name text PATH 'PREMIER_NAME' DEFAULT 'not specified')
  WHERE region_id = 2;
```

返回结果如下：

```sql
 id | _id |  country_name  | country_id | region_id | size | unit | premier_name
----+-----+----------------+------------+-----------+------+------+---------------
 10 |   1 | Czech Republic | CZ         |         2 |      |      | Milos Zeman
 11 |   2 | Germany        | DE         |         2 |      |      | not specified
 12 |   3 | France         | FR         |         2 |      |      | not specified
(3 rows)
```

### 执行计划

```sql
EXPLAIN (VERBOSE, COSTS OFF)
SELECT f.* FROM xmldata, xmltable('/ROWS/ROW[COUNTRY_NAME="Japan" or COUNTRY_NAME="India"]' PASSING data COLUMNS "COUNTRY_NAME" text, "REGION_ID" int) AS f WHERE "COUNTRY_NAME" = 'Japan';
```

返回结果如下：

```sql
 Nested Loop
   Output: f."COUNTRY_NAME", f."REGION_ID"
   ->  Seq Scan on public.xmldata
         Output: xmldata.data
   ->  Table Function Scan on "xmltable" f
         Output: f."COUNTRY_NAME", f."REGION_ID"
         Table Function Call: XMLTABLE(('/ROWS/ROW[COUNTRY_NAME="Japan" or COUNTRY_NAME="India"]'::text) PASSING (xmldata.data) COLUMNS "COUNTRY_NAME" text, "REGION_ID" integer)
         Filter: (f."COUNTRY_NAME" = 'Japan'::text)
(8 rows)
```

### `NOT NULL` 约束报错

```sql
SELECT xmltable.*
   FROM (SELECT data FROM xmldata) x,
        XMLTABLE('/ROWS/ROW'
                 PASSING data
                 COLUMNS id int PATH '@id',
                         _id FOR ORDINALITY,
                         country_name text PATH 'COUNTRY_NAME' NOT NULL,
                         country_id text PATH 'COUNTRY_ID',
                         region_id int PATH 'REGION_ID',
                         size float PATH 'SIZE' NOT NULL,
                         unit text PATH 'SIZE/@unit',
                         premier_name text PATH 'PREMIER_NAME' DEFAULT 'not specified');
```

返回结果如下：

```sql
ERROR:  null is not allowed in column "size"
```

### 路径返回多值时报错

```sql
SELECT * FROM xmltable('/root' passing '<root><element>a1a<!-- aaaa -->a2a<?aaaaa?> <!--z-->  bbbb<x>xxx</x>cccc</element></root>' COLUMNS element text PATH 'element/text()');
```

返回结果如下：

```sql
ERROR:  more than one value returned by column XPath expression
```

### CDATA 与 XML 实体

```sql
select * from xmltable('d/r' passing '<d><r><c><![CDATA[<hello> &"<>!<a>foo</a>]]></c></r><r><c>2</c></r></d>' columns c text);

SELECT * FROM xmltable('/x/a' PASSING '<x><a><ent>&apos;</ent></a><a><ent>&quot;</ent></a><a><ent>&amp;</ent></a><a><ent>&lt;</ent></a><a><ent>&gt;</ent></a></x>' COLUMNS ent text);

SELECT * FROM xmltable('/x/a' PASSING '<x><a><ent>&apos;</ent></a><a><ent>&quot;</ent></a><a><ent>&amp;</ent></a><a><ent>&lt;</ent></a><a><ent>&gt;</ent></a></x>' COLUMNS ent xml);
```

其中部分返回结果如下：

```sql
select * from xmltable('d/r' passing '<d><r><c><![CDATA[<hello> &"<>!<a>foo</a>]]></c></r><r><c>2</c></r></d>' columns c text);
 c
---
(0 rows)

SELECT * FROM xmltable('/x/a' PASSING '<x><a><ent>&apos;</ent></a><a><ent>&quot;</ent></a><a><ent>&amp;</ent></a><a><ent>&lt;</ent></a><a><ent>&gt;</ent></a></x>' COLUMNS ent text);
 ent
-----
 '
 "
 &
 <
 >
(5 rows)
```
