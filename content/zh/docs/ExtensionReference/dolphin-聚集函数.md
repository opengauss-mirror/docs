# dolphin-聚集函数

-   any_value\(expression\)

    描述：所有输入行的任意一条expression(默认第一条)。

    参数类型：任意set、数值、字符串、日期/时间类型等。

    返回类型：与参数数据类型相同

    示例：

    ```
    openGauss=# create table test_any_value(a int, b int);
    CREATE TABLE
    openGauss=# insert into test_any_value values(1,1),(2,1),(3,2),(4,2);
    INSERT 0 4
    openGauss=# select any_value(a), b from test_any_value group by b;
    any_value | b
    -----------+---
            1 | 1
            3 | 2
    (2 rows)
    ```

-   default\(column_name\)

    描述：获取表字段的默认值输出。

    返回类型：text

    示例：

    ```sql
    openGauss=# create database test dbcompatibility 'B';
    CREATE DATABASE
    openGauss=# \c test
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    You are now connected to database "test" as user "test".
    test=# CREATE TABLE TEST(id int default 100, stime timestamp default now());
    CREATE TABLE
    test=# insert into test values(1, now());
    INSERT 0 1
    test=# select default(id) from test;
    mode_b_default
    ----------------
                100
    (1 row)

    test=# select default(stime) from test;
    mode_b_default
    ----------------

    (1 row)

    test=# insert into test values(default(id) + 10);
    INSERT 0 1
    test=# update test set id = default(id) - 10;
    UPDATE 2
    test=# delete from test where id = default(id) - 10;
    DELETE 2
    ```

-       字段中默认值为函数时，则default函数返回空。
-       default函数只用于dml语句中。