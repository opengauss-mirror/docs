# shark-系统常用函数

本章节只包含shark插件新增的系统常用函数。

- rand()

    描述：0.0到1.0之间的随机数。等价于random。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT rand();
            rand
    -------------------
    0.254671605769545
    (1 row)
    ```

- rand(seed int)

    描述：根据入参设置随机数种子，随后生成 0.0 到 1.0 之间的随机数。等价于 `setseed` + `random`。种子的有效值范围为 [-2 ^ 31, 2 ^ 31 - 1]。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT rand(1);
            rand
    -------------------
    0.0416303444653749
    (1 row)
    ```

- day(timestamp)

    描述：获取日期/时间值中天数的值。

    返回值类型：double precision

    示例：

    ```
    openGauss=# SELECT day(timestamp '2001-02-16 20:38:40');
    day
    -----------
        16
    (1 row)

    openGauss=# SELECT day('2002-4-25'::date);
    day
    -----------
        25
    (1 row)

    openGauss=# SELECT day('2025-02-28 00:00:01'::timestamp(0) without time zone);
    day
    -----------
        28
    (1 row)
    ```

- ident_current(table_or_view)

    描述：返回为指定的表或视图生成的最后一个标识值。所生成的最有一个标识值可以针对任何会话和任何作用域。

    参数类型: table_or_view为表或视图的名称，类型为nvarchar(128)。

    返回值类型：numeric(38, 0)

    示例：
    
    ```
    openGauss=# CREATE TABLE employees(id int identity, name varchar(100) NOT NULL);
    CREATE TABLE
    
    -- 包含identity列的表，还未插入数据
    sqlserver=# SELECT ident_current('employees');
    ident_current 
    ---------------
                1
    (1 row)

    -- 包含identity列的表，更新了序列值
    openGauss=# INSERT INTO employees(name) VALUES('alice');
    INSERT 0 1
    openGauss=# INSERT INTO employees(name) VALUES('bob');
    INSERT 0 1
    openGauss=# SELECT ident_current('employees');
    ident_current 
    ---------------
                2
    (1 row)
    ```