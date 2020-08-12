# ALTER FOREIGN TABLE

## 功能描述

用于对外表进行修改。

## 语法格式

    ```
    ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
        OPTIONS ( {[ ADD | SET | DROP ] option ['value']}[, ... ]);
    ```

## 参数说明

-   **table\_name**

    需要修改的外表名称。

    取值范围：已存在的外表名。

-   **option**

    改变外部表或者外部表字段的选项。`ADD`, `SET`, 和`DROP`指定执行的操作。 如果没有显式设置操作，那么默认就是`ADD`。选项的名字不允许重复(尽管表选项和表字段选项可以有相同的名字)。 选项的名称和值也会通过外部数据封装器的类库库进行校验。
    
    oracle_fdw支持的options包括：

    -   **table**

        oracle server侧的表名。需要同oracle系统表中记录的表名完全一致，通常是由大写字符组成。

    - **schema**

        表所对应的schema（或owner）。需要同oracle系统表中记录的表名完全一致，通常是由大写字符组成。

    mysql_fdw支持的options包括：
    
    -   **dbname**

        MySQL的database名称。

    -   **table_name**

        MySQL侧的表名。


-   **value**

    option的新值。


## 相关链接

[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)，[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)