# ALTER FOREIGN DATA WRAPPER

## 功能描述

修改外部数据包装器的定义。

## 语法格式

```
ALTER FOREIGN DATA WRAPPER name 
    [ HANDLER handler_function | NO HANDLER ]
    [ VALIDATOR validator_function | NO VALIDATOR ]
    [ OPTIONS ( [ ADD | SET | DROP ] option ['value'] [,...] ) ]
```

## 参数说明

-   **name**

    要修改的外部数据包装器名。

-   **HANDLER handler\_function**

    为外部数据包装器指定一个新的处理器函数。


-   **NO HANDLER**

    指定外部数据包装器不再具有处理器函数。

	>![](public_sys-resources/icon-notice.png) **须知：** 
    >
    > 不能访问使用没有处理器的外部数据包装器的外部表。

-   **VALIDATOR validator_function**

    为外部数据包装器指定一个新的验证器函数。

	>![](public_sys-resources/icon-notice.png) **须知：** 
    >
    > 在修改验证器函数后，外部数据包装器，服务器和用户映射的选项可能会失效。在使用外部数据包装器之前，用户应确保这些选项是正确的。


-   **NO VALIDATOR**

    指定外部数据包装器不再具有验证器函数。


-   **OPTIONS \( \[ ADD | SET | DROP \] option \['value'\] \[,...\] \)**

    外部数据包装器的修改选项。添加，设置和删除指定要执行的操作。如果未明确指定操作，则假定添加。选项名称不许是唯一的；如果有的话，使用外部数据包装器的验证器函数验证名称和值。


## 示例

```
--创建外部包装器dbi
openGauss=# CREATE FOREIGN DATA WRAPPER dbi OPTIONS (debug 'true');
--修改外部包装器dbi，添加选项foo，删除选项debug
openGauss=# ALTER FOREIGN DATA WRAPPER dbi OPTIONS (ADD foo '1', DROP debug);
--修改外部数据包装器dbi的验证器为myvalidator
openGauss=# ALTER FOREIGN DATA WRAPPER dbi VALIDATOR file_fdw_validator;
```
