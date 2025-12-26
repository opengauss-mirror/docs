# ALTER INDEX

## 功能描述

ALTER INDEX用于修改现有索引的定义。

## 注意事项

索引的所有者或者被授予了ALTER ANY INDEX权限的用户有权限执行此命令，普通用户不可以修改系统用户对象。

## 语法格式

- 重命名表索引的名称。

    ```
    ALTER INDEX [ schema_name.]index_name ON [ schema_name.]table_name
        RENAME TO [ schema_name.]new_name;
    ```

- 重建表索引或索引分区。

    ```
    ALTER INDEX [ schema_name.]index_name ON [ schema_name.]table_name
        REBUILD [ PARTITION part_name[,...] | SUBPARTITION subpart_name[,...] ] 
        [ PARALLEL n | PCTFREE n | TABLESPACE tablespace_name ] [,...] ;
    ```

- 索引空页回收。

    ```
    ALTER INDEX [ schema_name.]index_name ON [ schema_name.]table_name
        COALESCE
    ```

- 设置失效索引。

    ```
    ALTER INDEX [ schema_name.]index_name ON [ schema_name.]table_name
        UNUSABLE
    ```

- 修改索引初始数据页面上事务槽的个数。

    ```
    ALTER INDEX [ schema_name.]index_name ON [ schema_name.]table_name
        INITRANS integer
    ```

- 修改特定分区或二级分区索引。

    ```
    ALTER INDEX [ schema_name.]index_name ON [ schema_name.]table_name
        MODIFY [ PARTITION part_name { COALESCE | UNUSABLE | INITRANS integer }
                 | SUBPARTITION subpart_name { COALESCE | UNUSABLE } ]
    ```

## 参数说明

- **schema_name**

    模式名

- **index_name**

    要修改的索引名

- **table_name**

    索引所在的表名

- **new_name**

    新的索引名

- **part_name**

    分区名

- **subpart_name**

    二级分区名

- **PARALLEL n**

    指定重建索引时的并行度。

    - n的取值范围为[1, 64]。
    - 函数索引不支持并行重建。

- **PCTFREE n**

    指定为索引数据块保留的空间百分比。当数据块的可用空间低于该空间百分比时，只能更新该数据块的数据，不能向该数据块插入数据。

    - n的取值范围为[0, 80]，默认值是8。

- **tablespace_name**

    表空间名，支持重建索引到其他表空间。

- **INITRANS n**

    修改索引初始数据页面上事务槽的个数。

    - n的取值范围为[1, 255]。
    - 修改后的新值只对新分配的页面有效，对已经分配的老页面无效。
    - 对于分区索引，会同步修改索引分区及子分区的INITRANS属性。

示例：

```
SQL> CREATE TABLE alter_index_test(id INT) PARTITION BY RANGE(id)
    (PARTITION p1 VALUES LESS THAN (100), PARTITION p2 VALUES LESS THAN (200));

-- 创建分区索引
SQL> CREATE INDEX idx ON alter_index_test(id) LOCAL;

-- 重命名索引
SQL> ALTER INDEX idx ON alter_index_test RENAME TO new_idx ;

-- 失效索引
SQL> ALTER INDEX new_idx ON alter_index_test UNUSABLE;

-- 重建索引
SQL> ALTER INDEX new_idx ON alter_index_test REBUILD PCTFREE 50;

-- 重建索引分区，指定并行度
SQL> ALTER INDEX new_idx ON alter_index_test REBUILD PARTITION p2 PARALLEL 2;

-- 指定分区p1的INITRANS
SQL> ALTER INDEX new_idx ON alter_index_test MODIFY PARTITION p1 INITRANS 200;

SQL> DROP TABLE alter_index_test;
```
