# IS [NOT] INFINITE<a name="ZH-CN_TOPIC_0000001210141894"></a>

在`SELECT`和`WHERE`子句中使用，判断输入数值是否为`Infinity`。若为非数字，则会转换为数字，若转换失败，则报错。

存在以下特殊情形：

- `NULL`：对于输入为`NULL`，返回`NULL`
- 字符串`Infinity`（忽略大小写）：可以转换为数值`Infinity`，但在表达式中判断为非`Infinity`，报错。



## IS INFINITE<a name="section829464952514"></a>

如果输入数值为`Infinity`，则返回`true`，否则返回`false`。对于输入`NULL`，返回`NULL`。

示例：

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

如果输入数值为`Infinity`，则返回`false`，否则返回`true`。对于输入`NULL`，返回`NULL`。

示例：

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

