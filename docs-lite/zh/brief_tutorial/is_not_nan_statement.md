# IS [NOT] NAN<a name="ZH-CN_TOPIC_0000001210141893"></a>

在`SELECT`和`WHERE`子句中使用，判断输入数值是否为`NaN（Not a Number）`。若为非数字，则会转换为数字，若转换失败，则报错。

存在以下特殊情形：

- `NULL`：对于输入为`NULL`，返回`NULL`
- 字符串`NaN`（忽略大小写）：可以转换为数值`NaN`，但在表达式中判断为非`NaN`，报错。



## IS NAN<a name="section829464952513"></a>

如果输入数值为`NaN`，则返回`true`，否则返回`false`。对于输入`NULL`，返回`NULL`。

示例：

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

如果输入数值为`NaN`，则返回`false`，否则返回`true`。对于输入`NULL`，返回`NULL`。

示例：

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

