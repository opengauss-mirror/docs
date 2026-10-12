# IS [NOT] INFINITE<a name="ZH-CN_TOPIC_0000001210141894"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-28T03:10:47.968Z pushedAt=2026-07-28T03:31:56.801Z -->

Used in `SELECT` and `WHERE` clauses to determine whether an input value is `Infinity`. If the input is non-numeric, it is converted to a number. If the conversion fails, an error is reported.

The following special cases apply:

- `NULL`: For a `NULL` input, `NULL` is returned.

- String `Infinity` (case-insensitive): It can be converted to the numeric value `Infinity`, but when evaluated in an expression, it is determined as non-`Infinity` and an error is reported.

## IS INFINITE<a name="section829464952514"></a>

If the input value is `Infinity`, `true` is returned; otherwise, `false` is returned. For the input `NULL`, `NULL` is returned.

Examples:

```sql
openGauss=# create table t_infinitetest (c_id int, c_number float4, c_txt text);
CREATE TABLE
openGauss=# insert into t_infinitetest values (1, 3.14, '3.14');
INSERT 0 1
openGauss=# insert into t_infinitetest values (2, 'Infinity'::float4, 'FM95.28');
INSERT 0 1
openGauss=# insert into t_infinitetest values (3, NULL, 'Infinity');
INSERT 0 1
openGauss=# select c_number is infinite from t_infinitetest order by c_id;
 ?column?
----------
 f
 t

(3 rows)

openGauss=# select * from t_infinitetest where c_id = 1 and c_txt is infinite;
 c_id | c_number | c_txt
------+----------+-------
(0 rows)

openGauss=# select * from t_infinitetest where c_id = 2 and c_txt is infinite;
ERROR:  invalid input syntax for type double precision: "FM95.28"
openGauss=# select * from t_infinitetest where c_id = 3 and c_txt is infinite;
ERROR:  invalid input for IS [NOT] INFINITE
```

## IS NOT INFINITE<a name="section8429171142670"></a>

If the input value is `Infinity`, `false` is returned; otherwise, `true` is returned. For the input `NULL`, `NULL` is returned.

Examples:

```sql
openGauss=# select c_number is not infinite from t_infinitetest order by c_id;
 ?column?
----------
 t
 f

(3 rows)

openGauss=# select * from t_infinitetest where c_id = 1 and c_txt is not infinite;
 c_id | c_number | c_txt
------+----------+-------
    1 |     3.14 | 3.14
(1 row)

openGauss=# select * from t_infinitetest where c_id = 2 and c_txt is not infinite;
ERROR:  invalid input syntax for type double precision: "FM95.28"
openGauss=# select * from t_infinitetest where c_id = 3 and c_txt is not infinite;
ERROR:  invalid input for IS [NOT] INFINITE
```
