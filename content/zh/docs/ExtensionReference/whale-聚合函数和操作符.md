# 聚合函数和操作符

-   median(col)

    描述： 计算一组数字的中值。col必须为数字的集合。

    返回值：如果数字为REAL类型，则返回值的数据类型将为REAL；如果指定了任何其他类型，则为DOUBLE PRECISION。

    示例：

    ```
    openGauss=# CREATE TABLE median_test (salary real);
    CREATE TABLE
    openGauss=# INSERT INTO median_test VALUES (4500);
    INSERT 0 1
    openGauss=# INSERT INTO median_test VALUES (NULL);
    INSERT 0 1
    openGauss=# INSERT INTO median_test VALUES (2100);
    INSERT 0 1
    openGauss=# INSERT INTO median_test VALUES (3600);
    INSERT 0 1
    openGauss=# INSERT INTO median_test VALUES (4000);
    INSERT 0 1
    openGauss=# SELECT median(salary) from median_test;
    median
    --------
    3800
    (1 row)

    openGauss=# DROP TABLE median_test;
    DROP TABLE

    ```
