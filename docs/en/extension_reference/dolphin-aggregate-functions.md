# Dolphin Aggregate Functions<a name="EN-US_TOPIC_0289900330"></a>

-   any_value\(expression\)

    Description: Any expression in all input lines (the first expression by default)

    Argument types: any set, numeric, string, or date/time type

    Return type: same as the argument data type

    Example:

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
