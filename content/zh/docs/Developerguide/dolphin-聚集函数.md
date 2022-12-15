# dolphin-聚集函数<a name="ZH-CN_TOPIC_0289900330"></a>

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
