# 将磁盘表转换为MOT<a name="ZH-CN_TOPIC_0280525135"></a>

磁盘表直接转换为MOT尚不能实现，这意味着尚不存在将基于磁盘的表转换为MOT的ALTER TABLE语句。

下面介绍如何手动将基于磁盘的表转换为MOT，如何使用gs\_dump工具导出数据，以及如何使用gs\_restore工具导入数据。

## 前置条件检查<a name="section7473422"></a>

检查待转换为MOT的磁盘表的模式是否包含所有需要的列。

检查架构是否包含任何不支持的列数据类型，具体参见“不支持的数据类型”章节。

如果不支持特定列，则建议首先创建一个更新了模式的备磁盘表。此模式与原始表相同，只是所有不支持的类型都已转换为支持的类型。

使用以下脚本导出该备磁盘表，然后导入到MOT中。

## 转换<a name="section151935"></a>

要将基于磁盘的表转换为MOT，请执行以下步骤：

1.  暂停应用程序活动。
2.  使用gs\_dump工具将表数据转储到磁盘的物理文件中。请确保使用data only。
3.  重命名原始基于磁盘的表。
4.  创建同名同模式的MOT。请确保使用创建FOREIGN关键字指定该表为MOT。
5.  使用gs\_restore将磁盘文件的数据加载/恢复到数据库表中。
6.  浏览或手动验证所有原始数据是否正确导入到新的MOT中。下面将举例说明。
7.  恢复应用程序活动。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>由于表名称保持不变，应用程序查询和相关数据库存储过程将能够无缝访问新的MOT，而无需更改代码。请注意，MOT目前不支持跨引擎多表查询（如使用Join、Union和子查询）和跨引擎多表事务。因此，如果在多表查询、存储过程或事务中访问原始表，则必须将所有相关的磁盘表转换为MOT，或者更改应用程序或数据库中的相关代码。

## 转换示例<a name="section1367417"></a>

假设要将数据库benchmarksql中一个基于磁盘的表customer迁移到MOT中。

将customer表迁移到MOT，操作步骤如下：

1.  检查源表列类型。验证MOT支持所有类型，详情请参阅“不支持的数据类型”章节。

    ```
    benchmarksql-# \d+ customer 
                           Table "public.customer" 
     Column |  Type   | Modifiers | Storage | Stats target | Description 
    --------+---------+-----------+---------+--------------+------------- 
     x      | integer |           | plain   |              | 
     y      | integer |           | plain   |              | 
    Has OIDs: no 
    Options: orientation=row, compression=no
    ```

2.  请检查源表数据。

    ```
    benchmarksql=# select * from customer; 
     x | y 
    ---+--- 
     1 | 2 
     3 | 4 
    (2 rows)
    ```

3.  只能使用gs\_dump转储表数据。

    ```
    $ gs_dump -Fc benchmarksql -a --table customer -f customer.dump -p 16000
    gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: dump database benchmarksql successfully 
    gs_dump[port='15500'][benchmarksql][2020-06-04 16:45:38]: total time: 332  ms
    ```

4.  重命名源表。

    ```
    benchmarksql=# alter table customer rename to customer_bk; 
    ALTER TABLE
    ```

5.  创建与源表完全相同的MOT。

    ```
    benchmarksql=# create foreign table customer (x int, y int); 
    CREATE FOREIGN TABLE 
    benchmarksql=# select * from customer; 
     x | y 
    ---+--- 
    (0 rows)
    ```

6.  将源转储数据导入到新MOT中。

    ```
    $ gs_restore -C -d benchmarksql customer.dump -p 16000
    restore operation successful 
    total time: 24  ms 
    Check that the data was imported successfully. 
    benchmarksql=# select * from customer; 
     x | y 
    ---+--- 
     1 | 2 
     3 | 4 
    (2 rows) 
      
    benchmarksql=# \d 
                                    List of relations 
     Schema |    Name     |     Type      | Owner  |             Storage 
    --------+-------------+---------------+--------+---------------------------------- 
     public | customer    | foreign table | aharon | 
     public | customer_bk | table         | aharon | {orientation=row,compression=no} 
    (2 rows)
    ```


