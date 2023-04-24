# CREATE FUNCTION DATA WRAPPER

## 功能描述

定义一个新的外部数据包装器。

## 语法格式

```
CREATE FOREIGN DATA WRAPPER name
    [ HANDLER handler_function | NO HANDLER ]
    [ VALIDATOR validator_function | NO VALIDATOR ]
    [ OPTIONS ( option 'value' [,...] ) ]
```

## 参数说明

-   **name**

    要创建的外部数据包装器名。

-   **HANDLER handler\_function**

    handler_function是先前注册的函数的名称，该函数将被调用以检索外部表的执行函数。处理器函数不能带任何参数，其返回类型必须是fdw_handler。


-   **VALIDATOR validator\_function**

    validator_function是先前注册的函数的名称，该函数将被调用以检查给定给外部数据包装器的通用选项，以及使用外部数据包装器的外部服务器和用户映射的选项。如果未指定验证器函数或未指定validator，则在创建时不会检查选项。（外部数据包装器可能会在运行时忽略或拒绝无效的选项规范，具体取决于实现。）验证器函数必须接受两个参数：一个类型为text[]，它将包含存储在系统目录中的选项数组，另一个类型是oid，它将是包含选项的系统目录的oid。忽略返回类型；该函数应该使用ereport（ERROR）函数报告无效选项。


-   **OPTIONS \(option 'value' \[,...\]\)**

    该子句指定新外部数据包装器的选项。允许的选项名称和值特定于每个外部数据包装器，并使用外部数据包装器的验证器函数进行验证。选项名称必须唯一。


## 示例

```
--创建一个无用的外部数据包装器dummy。
openGauss=# CREATE FOREIGN DATA WRAPPER dummy;

--使用处理器函数file_fdw_handler创建外部数据包装器file。
openGauss=# CREATE FOREIGN DATA WRAPPER file HANDLER file_fdw_handler;

--创建外部数据包装器mywrapper
openGauss=# CREATE FOREIGN DATA WRAPPER mywrapper OPTIONS (debug 'true');
```
