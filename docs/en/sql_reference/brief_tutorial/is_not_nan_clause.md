---
description: This document describes IS [NOT] NAN in openGauss, covering topics such as IS NAN, IS NOT NAN.
keywords: [openGauss, "IS [NOT] NAN", SQL, IS NAN, IS NOT NAN]
---

# IS [NOT] NAN<a name="ZH-CN_TOPIC_0000001210141893"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-28T03:10:44.648Z pushedAt=2026-07-28T03:33:13.587Z -->

Used in `SELECT` and `WHERE` clauses to determine whether an input value is `NaN` (Not a Number). If the input is non-numeric, it is converted to a number. If the conversion fails, an error is reported.

The following special cases apply:

- `NULL`: For an input of `NULL`, `NULL` is returned.

- The string `NaN` (case-insensitive): It can be converted to the numeric value `NaN`, but when evaluated in an expression as non-`NaN`, an error is reported.

## IS NAN<a name="section829464952513"></a>

If the input value is `NaN`, `true` is returned; otherwise, `false` is returned. For the input `NULL`, `NULL` is returned.

Examples:

```sql
openGauss=# create table t_nantest (c_id int, c_number float4, c_txt text);
CREATE TABLE
openGauss=# insert into t_nantest values (1, 3.14, '3.14');
INSERT 0 1
openGauss=# insert into t_nantest values (2, 'NaN'::float4, 'FM95.28');
INSERT 0 1
openGauss=# insert into t_nantest values (3, NULL, 'NaN');
INSERT 0 1
openGauss=# select c_number is nan from t_nantest order by c_id;
 ?column?
----------
 f
 t

(3 rows)

openGauss=# select * from t_nantest where c_id = 1 and c_txt is nan;
 c_id | c_number | c_txt
------+----------+-------
(0 rows)

openGauss=# select * from t_nantest where c_id = 2 and c_txt is nan;
ERROR:  invalid input syntax for type double precision: "FM95.28"
openGauss=# select * from t_nantest where c_id = 3 and c_txt is nan;
ERROR:  invalid input for IS [NOT] NAN
```

## IS NOT NAN<a name="section842917114268"></a>

If the input value is `NaN`, `false` is returned; otherwise, `true` is returned. For the input `NULL`, `NULL` is returned.

Examples:

```sql
openGauss=# select c_number is not nan from t_nantest order by c_id;
 ?column?
----------
 t
 f

(3 rows)

openGauss=# select * from t_nantest where c_id = 1 and c_txt is not nan;
 c_id | c_number | c_txt
------+----------+-------
    1 |     3.14 | 3.14
(1 row)

openGauss=# select * from t_nantest where c_id = 2 and c_txt is not nan;
ERROR:  invalid input syntax for type double precision: "FM95.28"
openGauss=# select * from t_nantest where c_id = 3 and c_txt is not nan;
ERROR:  invalid input for IS [NOT] NAN
```
