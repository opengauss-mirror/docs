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
    
- dateadd(datepart , number , date)

    描述：返回将number添加到date的datepart部分后得到的时间。

    参数说明：

    - datepart：

      要增加number的日期部分。
    
      | *datepart*  | **缩写形式** |
      | ----------- | ------------ |
      | year        | yy, yyyy     |
      | quarter     | qq, q        |
      | month       | mm, m        |
      | dayofyear   | dy, y        |
      | day         | dd, d        |
      | week        | wk, ww       |
      | weekday     | dw, w        |
      | hour        | hh           |
      | minute      | mi, n        |
      | second      | ss, s        |
      | millisecond | ms           |
      | microsecond | mcs          |
      | nanosecond  | ns           |
    
    - number：
    
      要增加的数量。
    
    - date：
    
      合法的日期，指定起始时间。支持数据类型：date、time、timetz、timestamp和timestamptz。
    
    示例：
    
    ```
    select dateadd(hh,1,timestamp'1997-12-31 23:59:59');
             dateadd          
    --------------------------
     Thu Jan 01 00:59:59 1998
    (1 row)
    
    select dateadd(dd,1,timestamp'1997-12-31 23:59:59');
             dateadd          
    --------------------------
     Thu Jan 01 23:59:59 1998
    (1 row)
    ```
    
- datepart(datepart , date)

    描述：返回表示 date 的指定 datepart 的整数。

    参数说明：

    - datepart：

      指定返回的特定部分。
    
      | *datepart*  | **缩写形式** |
      | ----------- | ------------ |
      | year        | yy, yyyy     |
      | quarter     | qq, q        |
      | month       | mm, m        |
      | dayofyear   | dy, y        |
      | day         | dd, d        |
      | week        | wk, ww       |
      | weekday     | dw, w        |
      | hour        | hh           |
      | minute      | mi, n        |
      | second      | ss, s        |
      | millisecond | ms           |
      | microsecond | mcs          |
      | nanosecond  | ns           |
      | TZoffset    | tz           |
      | ISO_WEEK    | ISOWK, ISOWW |
    
    - date：
    
      合法的日期，指定时间。支持数据类型：date、time、timetz、timestamp和timestamptz。
    
    示例：
    
    ```
    SELECT DATEPART(year,timestamp'2007-10-30 12:15:32.1234567');
     datepart 
    ----------
         2007
    (1 row)
    
    SELECT DATEPART(quarter,timestamp'2007-10-30 12:15:32.1234567');
     datepart 
    ----------
            4
    (1 row)
    ```
    
- datename（datepart , date）

    描述：返回表示 date 的指定 datepart 的字符串。

    参数：

    - datepart ：

      指定返回的特定部分。
    
      | *datepart*  | **缩写形式** |
      | ----------- | ------------ |
      | year        | yy, yyyy     |
      | quarter     | qq, q        |
      | month       | mm, m        |
      | dayofyear   | dy, y        |
      | day         | dd, d        |
      | week        | wk, ww       |
      | weekday     | dw, w        |
      | hour        | hh           |
      | minute      | mi, n        |
      | second      | ss, s        |
      | millisecond | ms           |
      | microsecond | mcs          |
      | nanosecond  | ns           |
      | TZoffset    | tz           |
      | ISO_WEEK    | ISOWK, ISOWW |
    
    - date：
    
      合法的日期，指定起始时间。支持数据类型：date、time、timetz、timestamp和timestamptz。
    
    示例：
    
    ```
    SELECT DATENAME(mm,timestamp'2007-1-30 12:15:32.1234567');
     datename 
    ----------
     January
    (1 row)
    
    SELECT DATENAME(m,timestamp'2007-2-28 12:15:32.1234567');
     datename 
    ----------
     February
    (1 row)
    ```
    
- getdate()

    描述：获取当前系统时间。

    示例：

    ```
    select getdate();
             getdate
    -------------------------
     2025-08-22 06:05:14.853
    (1 row)
    ```
    
- len(expr)

    描述：返回数据长度。

    示例：

    ```
    SELECT LEN('abc');
     len 
    -----
       3
    (1 row)
    ```

