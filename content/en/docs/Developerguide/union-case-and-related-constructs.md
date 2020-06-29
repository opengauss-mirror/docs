# UNION, CASE, and Related Constructs<a name="EN-US_TOPIC_0242370475"></a>

SQL  **UNION**  constructs must match up possibly dissimilar types to become a single result set. The resolution algorithm is applied separately to each output column of a union query. The  **INTERSECT**  and  **EXCEPT**  construct resolve dissimilar types in the same way as  **UNION**. The  **CASE**,  **ARRAY**,  **VALUES**,  **GREATEST**  and  **LEAST**  constructs use the identical algorithm to match up their component expressions and select a result data type.

## Type Resolution for UNION, CASE, and Related Constructs<a name="en-us_topic_0237122011_en-us_topic_0059779260_s4d37d0d92a7e4067a51798614b044fb4"></a>

-   If all inputs are of the same type, and it is not  **unknown**, resolve as that type.
-   If all inputs are of type  **unknown**, resolve as type  **text**  \(the preferred type of the string category\). Otherwise,  **unknown**  inputs are ignored.
-   If the inputs are not all of the same type category, a failure will be resulted. \(Type  **unknown**  is not included in this case.\)
-   If the inputs are all of the same type category, choose the top preferred type in that category. \(Exception: The UNION operation regards the type of the first branch as the selected type.\)

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >**typcategory**  in the  **pg\_type**  system catalog indicates the data type category.  **typispreferred**  indicates whether a type is preferred in  **typcategory**.  

-   Convert all inputs to the selected type. \(Retain the original lengths of strings\). Fail if there is not an implicit conversion from a given input to the selected type.
-   If the input contains the json, txid\_snapshot, sys\_refcursor, or geometry type,  **UNION**  cannot be performed.

## Type Resolution for CASE and COALESCE in TD Compatibility Type<a name="en-us_topic_0237122011_en-us_topic_0059779260_sa6bf47fa5cdb4d2caabf956bb11c7649"></a>

-   If all inputs are of the same type, and it is not  **unknown**, resolve as that type.
-   If all inputs are of type  **unknown**, resolve as type  **text**.
-   If inputs are of the string type \(including  **unknown**  which is resolved as type  **text**\) and digit type, resolve as the string type. If the inputs are not of the two types, an error will be reported.
-   If the inputs are all of the same type category, choose the top preferred type in that category.
-   Convert all inputs to the selected type. Fail if there is not an implicit conversion from a given input to the selected type.

## Example<a name="en-us_topic_0237122011_en-us_topic_0059779260_sb48a6ac8819342588bbdeeb006db477e"></a>

Example 1: Use type resolution with underspecified types in a union as the first example. Here, the unknown-type literal  **'b'**  will be resolved to type  **text**.

```
postgres=# SELECT text 'a' AS "text" UNION SELECT 'b';
 text
------
 a
 b
(2 rows)
```

Example 2: Use type resolution in a simple union as the second example. The literal  **1.2**  is of type  **numeric**, and the  **integer**  value  **1**  can be cast implicitly to  **numeric**, so that type is used.

```
postgres=# SELECT 1.2 AS "numeric" UNION SELECT 1;
 numeric
---------
       1
     1.2
(2 rows)
```

Example 3: Use type resolution in a transposed union as the third example. Since type  **real**  cannot be implicitly cast to  **integer**, but  **integer**  can be implicitly cast to  **real**, the union result type is resolved as  **real**.

```
postgres=# SELECT 1 AS "real" UNION SELECT CAST('2.2' AS REAL);
 real
------
    1
  2.2
(2 rows)
```

Example 4: In the  **TD**  type, if input parameters for  **COALESCE**  are of  **int**  and  **varchar**  types, resolve as type  **varchar**. In the  **ORA**  type, an error is reported.

```
-- In the A type, create the a_1 database compatible with A:
postgres=# CREATE DATABASE a_1 dbcompatibility = 'A';

-- Switch to the a_1 database:
postgres=# \c a_1

-- Create the t1 table.
a_1=# CREATE TABLE t1(a int, b varchar(10));

-- Show the execution plan of a statement for querying the types int and varchar of input parameters for COALESCE:
a_1=# EXPLAIN SELECT coalesce(a, b) FROM t1;
ERROR:  COALESCE types integer and character varying cannot be matched
LINE 1: EXPLAIN SELECT coalesce(a, b) FROM t1;
                                   ^
CONTEXT:  referenced column: coalesce

-- Delete the table:
a_1=# DROP TABLE t1;

-- Switch to the postgres database:
a_1=# \c postgres

-- In the TD type, create the td_1 database compatible with Teradata:
postgres=# CREATE DATABASE td_1 dbcompatibility = 'C';

-- Switch to the td_1 database:
postgres=# \c td_1

-- Create the t2 table:
td_1=# CREATE TABLE t2(a int, b varchar(10));

-- Show the execution plan of a statement for querying the types int and varchar of input parameters for COALESCE:
td_1=# EXPLAIN VERBOSE select coalesce(a, b) from t2;
                                      QUERY PLAN
---------------------------------------------------------------------------------------
 Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
   Output: (COALESCE((t2.a)::character varying, t2.b))
   Node/s: All dbnodes
   Remote query: SELECT COALESCE(a::character varying, b) AS "coalesce" FROM public.t2
(4 rows)

-- Delete the table:
td_1=# DROP TABLE t2;

-- Switch to the postgres database:
td_1=# \c postgres

-- Delete databases in A and TD mode:
postgres=# DROP DATABASE a_1;
postgres=# DROP DATABASE td_1;
```

