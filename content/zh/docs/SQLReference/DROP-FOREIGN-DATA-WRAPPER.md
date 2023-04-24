# DROP FOREIGN DATA WRAPPER

## 功能描述

删除外部数据包装器。

## 语法格式

```
DROP FOREIGN DATA WRAPPER [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## 参数说明

-   **name**

    要删除的外部数据包装器名。

-   **CASCADE**

    自动删除依赖于外部数据包装器的对象（如服务器）。


-   **RESTRICT**

    如果有任何依赖于外部数据包装器，则拒绝删除外部数据包装器。此选项为默认选项。


## 示例

```
--创建外部数据包装器dbi
openGauss=# CREATE FOREIGN DATA WRAPPER dbi OPTIONS (debug 'true');
--删除外部数据包装器dbi
openGauss=# DROP FOREIGN DATA WRAPPER dbi;
```
