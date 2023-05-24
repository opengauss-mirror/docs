# ALTER SERVER

## 功能描述<a name="zh-cn_topic_0283136932_section7100616165720"></a>

增加、修改和删除一个现有server的参数。已有server可以从pg\_foreign\_server系统表中查询。

## 注意事项<a name="zh-cn_topic_0283136932_section1175222145715"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
-   相比于原始的openGauss，dolphin对于```ALTER SERVER```语法的修改主要为：
    1. 对于修改的server其fdw_name为mysql_fdw时，增加可选OPTIONS：DATABASE, USER, PASSWORD, SOCKET, OWNER。
    2. 对于修改的server其fdw_name为mysql_fdw时，若option未指定执行动作，且server的option已存在，则将本次语句的动作更改为SET。

## 语法格式<a name="zh-cn_topic_0283136932_section19393201035713"></a>

-   修改外部服务的参数。

```
 ALTER SERVER server_name [ VERSION 'new_version' ]   
      [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
```

-   修改外部服务的名称。

    ```
    ALTER SERVER server_name     
       RENAME TO new_name;
    ```


## 参数说明<a name="zh-cn_topic_0283136932_section284720213578"></a>

-   **OPTIONS**

    更改该服务器的选项。ADD、SET和 DROP指定要执行的动作。如果没有显式地指定操作， 将会假定为ADD。选项名称必须唯一，名称和值也会使用该服务器的外部数据包装器库进行验证。

    -   mysql\_fdw支持的options包括：
        -   **host**  （默认值为 127.0.0.1）

            MySQL Server/MariaDB的地址。

        -   **port**  （默认值为 3306）

            MySQL Server/MariaDB侦听的端口号。

        -   **user**  （默认为空）

            MySQL Server/MariaDB用于连接的用户名。若OPTIONS指定此选项，且不存在当前用户到给定server的用户映射，openGauss将自动创建当前用户到新建server的用户映射；若OPTIONS指定此选项，且已存在当前用户到给定server的用户映射，openGauss将修改该用户映射的对应option值。

        -   **password**  （默认为空）

            MySQL Server/MariaDB用于连接的用户密码。若OPTIONS指定此选项，且不存在当前用户到给定server的用户映射，openGauss将自动创建当前用户到新建server的用户映射；若OPTIONS指定此选项，且已存在当前用户到给定server的用户映射，openGauss将修改该用户映射的对应option值。

        -   **database**  （默认为空）

            无实际意义，仅做语法兼容。指定MySQL Server/MariaDB连接的数据库请在[CREATE FOREIGN TABLE](../SQLReference/CREATE-FOREIGN-TABLE.md)或[ALTER FOREIGN TABLE](../SQLReference/ALTER-FOREIGN-TABLE.md)中完成。

        -   **owner**  （默认为空）

            无实际意义，仅做语法兼容。

        -   **socket**  （默认为空）

            无实际意义，仅做语法兼容。

## 示例<a name="section6372437377"></a>

修改server。

```
-- 当前用户到给定server的用户映射不存在时
openGauss=# alter server server_test options(user 'my_user', password 'mypassword');
WARNING:  USER MAPPING for current user to server server_test created.
ALTER SERVER

-- 当前用户到给定server的用户映射已存在时
openGauss=# alter server server_test options(port '3308', user 'my_user');
WARNING:  USER MAPPING for current user to server server_test altered.
ALTER SERVER
```


## 相关链接<a name="zh-cn_topic_0283136932_section13898752175613"></a>

[CREATE SERVER ](dolphin-CREATE-SERVER.md)，[DROP SERVER](DROP-SERVER.md)

