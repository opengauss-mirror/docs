# 普通表

在当前数据库中创建一个新的空白表，该表由命令执行者所有。在不同的数据库中可以存放相同的表。您可以使用CREATE TABLE语句创建表。

## 语法格式<a name="section145481618144118"></a>

```
CREATE TABLE table_name 
    (column_name data_type [, ... ]);
```

## 参数说明<a name="section932010594419"></a>

-   **table\_name**

    要创建的表名。

-   **column\_name**

    新表中要创建的字段名。

-   **data\_type**

    字段的数据类型。


## 示例<a name="section199331334134317"></a>

执行如下命令创建一个表，表名为customer\_t1，表字段为c\_customer\_sk 、c\_customer\_id、c\_first\_name和c\_last\_name，每个表字段对应的数据类型为integer、char\(5\)、char\(6\)和char\(8\)。

```
openGauss=# CREATE TABLE customer_t1
(
    c_customer_sk             integer,
    c_customer_id             char(5),
    c_first_name              char(6),
    c_last_name               char(8),
    Amount                    integer
);
```

当结果显示为如下信息，则表示创建成功。

```
 CREATE TABLE
```

