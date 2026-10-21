---
description: This document describes XMLTABLE in openGauss, covering topics such as Description, Syntax.
keywords: [openGauss, XMLTABLE, SQL, Description, Syntax]
---

# XMLTABLE

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:29:09.791Z -->

## Description

`XMLTABLE` expands an XML document into relational table results based on a specified row expression, and maps nodes, attributes, or expressions to output columns through the COLUMNS clause. This syntax can be used as a table function in the FROM clause.

This feature is introduced by the current `xmltable` patch, with full pipeline support including parsing, optimization, execution, and EXPLAIN display.

## Syntax

```sql
XMLTABLE ( row_expression PASSING document_expression
           COLUMNS column_definition [, ...] )

XMLTABLE ( XMLNAMESPACES ( namespace_uri AS prefix | DEFAULT namespace_uri [, ...] )
           , row_expression PASSING document_expression
           COLUMNS column_definition [, ...] )
```

The column definition supports the following forms:

```sql
column_name type_name
column_name type_name PATH path_expression
column_name type_name PATH path_expression DEFAULT default_expression
column_name type_name PATH path_expression [ NOT NULL | NULL ]
column_name FOR ORDINALITY
```

## Parameter Description

- `row_expression`

  Specifies the row expression used to locate the node set corresponding to each row from the input XML document.

- `PASSING document_expression`

  Specifies the XML document expression to be parsed.

- `XMLNAMESPACES`

  Specifies namespace mapping. Both prefixed namespaces and default namespaces can be declared.

- `COLUMNS`

  Defines output columns.

  - `column_name type_name`

     Defines a regular output column.

  - `PATH path_expression`

    Specifies the value path for the current column.

  - `DEFAULT default_expression`

    Returns the default value when the path value is empty.

  - `NOT NULL | NULL`

    Whether the column allows null values. If the column is declared as NOT NULL and the actual result is null, an error is reported.

  - `FOR ORDINALITY`

    Generates an ordinality column. Only one FOR ORDINALITY column is allowed in an `XMLTABLE`.

## Notes

- `XMLTABLE` can only be used as a table function in the FROM clause.
- The input to PASSING should be a valid XML document.
- Both PATH and DEFAULT expressions participate in semantic analysis and type conversion.
- The FOR ORDINALITY column returns an `int4` type ordinal number.
- The default namespace syntax can be parsed, but the current implementation does not support default namespaces, and an error is reported during execution.
- When a column path returns multiple values but the target column requires a single value, the statement reports an error.

## Examples

### Basic Usage

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

The return result is as follows:

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

### Namespace Usage

```sql
SELECT * FROM XMLTABLE(XMLNAMESPACES('http://x.y' AS zz),
                      '/zz:rows/zz:row'
                      PASSING '<rows xmlns="http://x.y"><row><a>10</a></row></rows>'
                      COLUMNS a int PATH 'zz:a');
```

The return result is as follows:

```sql
 a
----
 10
(1 row)
```

The default namespace is currently not supported. The example is as follows:

```sql
SELECT * FROM XMLTABLE(XMLNAMESPACES(DEFAULT 'http://x.y'),
                      '/rows/row'
                      PASSING '<rows xmlns="http://x.y"><row><a>10</a></row></rows>'
                      COLUMNS a int PATH 'a');
```

The return result is as follows:

```sql
ERROR:  DEFAULT namespace is not supported
```

### Dynamic Path and Default Value

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

The return result of the last query is as follows:

```sql
 a
----
 11
 12
 13
 14
(4 rows)
```

### Conditional Filtering

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

The return result is as follows:

```sql
 id | _id |  country_name  | country_id | region_id | size | unit | premier_name
----+-----+----------------+------------+-----------+------+------+---------------
 10 |   1 | Czech Republic | CZ         |         2 |      |      | Milos Zeman
 11 |   2 | Germany        | DE         |         2 |      |      | not specified
 12 |   3 | France         | FR         |         2 |      |      | not specified
(3 rows)
```

### Execution Plan

```sql
EXPLAIN (VERBOSE, COSTS OFF)
SELECT f.* FROM xmldata, xmltable('/ROWS/ROW[COUNTRY_NAME="Japan" or COUNTRY_NAME="India"]' PASSING data COLUMNS "COUNTRY_NAME" text, "REGION_ID" int) AS f WHERE "COUNTRY_NAME" = 'Japan';
```

The return result is as follows:

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

### NOT NULL Constraint Error

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

The return result is as follows:

```sql
ERROR:  null is not allowed in column "size"
```

### Error When Path Returns Multiple Values

```sql
SELECT * FROM xmltable('/root' passing '<root><element>a1a<!-- aaaa -->a2a<?aaaaa?> <!--z-->  bbbb<x>xxx</x>cccc</element></root>' COLUMNS element text PATH 'element/text()');
```

The return result is as follows:

```sql
ERROR:  more than one value returned by column XPath expression
```

### CDATA and XML Entities

```sql
select * from xmltable('d/r' passing '<d><r><c><![CDATA[<hello> &"<>!<a>foo</a>]]></c></r><r><c>2</c></r></d>' columns c text);

SELECT * FROM xmltable('/x/a' PASSING '<x><a><ent>&apos;</ent></a><a><ent>&quot;</ent></a><a><ent>&amp;</ent></a><a><ent>&lt;</ent></a><a><ent>&gt;</ent></a></x>' COLUMNS ent text);

SELECT * FROM xmltable('/x/a' PASSING '<x><a><ent>&apos;</ent></a><a><ent>&quot;</ent></a><a><ent>&amp;</ent></a><a><ent>&lt;</ent></a><a><ent>&gt;</ent></a></x>' COLUMNS ent xml);
```

Part of the return results are as follows:

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
