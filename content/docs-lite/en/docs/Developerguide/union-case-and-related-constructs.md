# UNION, CASE, and Related Constructs<a name="EN-US_TOPIC_0289900690"></a>

SQL  **UNION**  constructs must match up possibly dissimilar types to become a single result set. The resolution algorithm is applied separately to each output column of a union query. The  **INTERSECT**  and  **EXCEPT**  construct resolve dissimilar types in the same way as  **UNION**. The  **CASE**,  **ARRAY**,  **VALUES**,  **GREATEST**  and  **LEAST**  constructs use the identical algorithm to match up their component expressions and select a result data type.

## Type Resolution for UNION, CASE, and Related Constructs<a name="en-us_topic_0283136625_en-us_topic_0237122011_en-us_topic_0059779260_s4d37d0d92a7e4067a51798614b044fb4"></a>

-   If all inputs are of the same type, and it is not  **unknown**, resolve as that type.
-   If all inputs are of type  **unknown**, resolve as type  **text**  \(the preferred type of the string category\). Otherwise,  **unknown**  inputs are ignored.
-   If the inputs are not all of the same type category, a failure will be resulted. \(Type  **unknown**  is not included in this case.\)
-   If the inputs are all of the same type category, choose the top preferred type in that category. \(Exception: The UNION operation regards the type of the first branch as the selected type.\)

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**typcategory**  in the  **pg\_type**  system catalog indicates the data type category.  **typispreferred**  indicates whether a type is preferred in  **typcategory**.

-   Convert all inputs to the selected type. \(Retain the original lengths of strings\). Fail if there is not an implicit conversion from a given input to the selected type.
-   If the input contains the json, txid\_snapshot, sys\_refcursor, or geometry type,  **UNION**  cannot be performed.

## Type Resolution for CASE and COALESCE in TD Compatibility Type<a name="en-us_topic_0283136625_en-us_topic_0237122011_en-us_topic_0059779260_sa6bf47fa5cdb4d2caabf956bb11c7649"></a>

-   If all inputs are of the same type, and it is not  **unknown**, resolve as that type.
-   If all inputs are of type  **unknown**, resolve as type  **text**.
-   If inputs are of the string type \(including  **unknown**  which is resolved as type  **text**\) and digit type, resolve as the string type. If the inputs are not of the two types, an error will be reported.
-   If the inputs are all of the same type category, choose the top preferred type in that category.
-   Convert all inputs to the selected type. Fail if there is not an implicit conversion from a given input to the selected type.

## Type Resolution for CASE in ORA Compatibility Type<a name="section20337194392613"></a>

**decode\(expr, search1, result1, search2, result2, ..., defresult\)**, that is,  **case expr when search1 then result1 when search2 then result2 else defresult end;**. In ORA compatibility mode,it defines the final return value type of the entire expression as the data type of result1 or a higher-precision data type that has the same type as result1. \(For example, numeric and int are both numeric data types, but numeric has higher precision and priority than int.\)

-   Set the data type of result1 to the final return value type preferType, which belongs to preferCategory.
-   Consider the data types of result2, result3, and defresult in sequence. If the type category is also preferCategory, that is, the type category of result1 is the same as that of result1, check whether the precision \(priority\) of result1 is higher than that of preferType. If yes, update preferType to a data type with a higher precision. If the data type is not preferCategory, check whether the data type can be implicitly converted to preferType. If not, an error is reported.
-   Uses the data type recorded by preferType as the return value type of the expression. The expression result is implicitly converted to this data type.

Note:

To be compatible with a special case in which the character type of a super-large number is converted to the numeric type, for example,  **select decode\(1, 2, 2, "53465465676465454657567678676"\)**, the large number exceeds the range of bigint and double. Therefore, if the type of result1 is numeric, the type of the return value is set to numeric to be compatible with this special case.

Note 2:

Priority of the numeric types: numeric \> float8 \> float4 \> int8 \> int4 \> int2 \> int1

Priority of the character types: text \> varchar = nvarchar2 \> bpchar \> char

Priority of date types: timestamptz \> timestamp \> smalldatetime \> date \> abstime \> timetz \> time

Priority of date span types: interval \> tinterval \> reltime.

Note 3:

The following figure shows the supported implicit type conversions when the  **set sql\_beta\_feature = 'a\_style\_coerce';**  parameter is enabled in ORA compatibility mode.**\\**  indicates that conversion is not required,  **yes**  indicates that conversion is supported, and blank indicates that conversion is not supported.

![](figures/decode_type.png)

## Examples<a name="en-us_topic_0283136625_en-us_topic_0237122011_en-us_topic_0059779260_sb48a6ac8819342588bbdeeb006db477e"></a>

Example 1: Use type resolution with underspecified types in a union as the first example. Here, the unknown-type literal  **'b'**  will be resolved to type  **text**.

```
openGauss=# SELECT text 'a' AS "text" UNION SELECT 'b';
 text
------
 a
 b
(2 rows)
```

Example 2: Use type resolution in a simple union as the second example. The literal  **1.2**  is of type  **numeric**, and the  **integer**  value  **1**  can be cast implicitly to  **numeric**, so that type is used.

```
openGauss=# SELECT 1.2 AS "numeric" UNION SELECT 1;
 numeric
---------
       1
     1.2
(2 rows)
```

Example 3: Use type resolution in a transposed union as the third example. Since type  **real**  cannot be implicitly cast to  **integer**, but  **integer**  can be implicitly cast to  **real**, the union result type is resolved as  **real**.

```
openGauss=# SELECT 1 AS "real" UNION SELECT CAST('2.2' AS REAL);
 real
------
    1
  2.2
(2 rows)
```

Example 4: In the  **TD**  type, if input parameters for  **COALESCE**  are of  **int**  and  **varchar**  types, resolve as type  **varchar**. In the  **A**  type, an error is reported.

```
-- In the A type, create the a_1 database compatible with A.
openGauss=# CREATE DATABASE a_1 dbcompatibility = 'A';

-- Switch to the a_1 database.
openGauss=# \c a_1

-- Create the t1 table.
a_1=# CREATE TABLE t1(a int, b varchar(10));

-- Show the execution plan of a statement for querying the types int and varchar of input parameters for COALESCE.
a_1=# EXPLAIN SELECT coalesce(a, b) FROM t1;
ERROR:  COALESCE types integer and character varying cannot be matched
LINE 1: EXPLAIN SELECT coalesce(a, b) FROM t1;
                                   ^
CONTEXT:  referenced column: coalesce

-- Delete the table.
a_1=# DROP TABLE t1;

-- Switch to openGauss.
a_1=# \c openGauss

-- In the TD type, create the td_1 database compatible with Teradata.
openGauss=# CREATE DATABASE td_1 dbcompatibility = 'C';

-- Switch to the td_1 database.
openGauss=# \c td_1

-- Create the t2 table.
td_1=# CREATE TABLE t2(a int, b varchar(10));

-- Show the execution plan of a statement for querying the types int and varchar of input parameters for COALESCE.
td_1=# EXPLAIN VERBOSE select coalesce(a, b) from t2;
                                      QUERY PLAN
---------------------------------------------------------------------------------------
 Data Node Scan  (cost=0.00..0.00 rows=0 width=0)
   Output: (COALESCE((t2.a)::character varying, t2.b))
   Node/s: All dbnodes
   Remote query: SELECT COALESCE(a::character varying, b) AS "coalesce" FROM public.t2
(4 rows)

-- Delete the table.
td_1=# DROP TABLE t2;

-- Switch to openGauss.
td_1=# \c openGauss

-- Delete databases in A and TD types.
openGauss=# DROP DATABASE a_1;
openGauss=# DROP DATABASE td_1;
```

Example 5: In ORA mode, set the final return value type of the expression to the data type of result1 or a higher-precision data type that is of the same type as result1.

```
-- In the ORA type, create the ora_1 database compatible with ORA.
openGauss=# CREATE DATABASE ora_1 dbcompatibility = 'A';

-- Switch to the ora_1 database.
openGauss=# \c ora_1

-- Enable the Decode compatibility parameter.
set sql_beta_feature='a_style_coerce';

-- Create the t1 table.
ora_1=# CREATE TABLE t1(c_int int, c_float8 float8, c_char char(10), c_text text, c_date date);

-- Insert data.
ora_1=# INSERT INTO t1 VALUES(1, 2, '3', '4', date '12-10-2010');

-- The type of result1 is char, and the type of defresult is text. The precision of text is higher, and the type of the return value is changed from char to text.
ora_1=# SELECT decode(1, 2, c_char, c_text) AS result, pg_typeof(result) FROM t1;
 result | pg_typeof 
--------+-----------
 4      | text
(1 row)

-- The type of result1 is int, which is a numeric type. The type of the return value is set to numeric.
ora_1=# SELECT decode(1, 2, c_int, c_float8) AS result, pg_typeof(result) FROM t1;
 result | pg_typeof 
--------+-----------
      2 | numeric
(1 row)

-- The implicit conversion from the defresult data type to the result1 data type does not exist. An error is reported.
ora_1=# SELECT decode(1, 2, c_int, c_date) FROM t1;
ERROR:  CASE types integer and timestamp without time zone cannot be matched
LINE 1: SELECT decode(1, 2, c_int, c_date) FROM t1;
                                   ^
CONTEXT:  referenced column: c_date

-- Disable the Decode compatibility parameter.
set sql_beta_feature='none';

-- Delete the table.
ora_1=# DROP TABLE t1;
DROP TABLE

-- Switch to the postgres database:
ora_1=# \c postgres

-- Delete the database in ORA mode.
openGauss=# DROP DATABASE ora_1;
DROP DATABASE
```

