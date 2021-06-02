# ALTER USER MAPPING

## 功能描述

更改一个用户映射的定义。

## 注意事项

-   当在OPTIONS中出现password选项时，需要保证openGauss每个节点的$GAUSSHOME/bin目录下存在usermapping.key.cipher和usermapping.key.rand文件，如果不存在这两个文件，请使用gs\_guc工具生成并使用gs\_ssh工具发布到每个节点的$GAUSSHOME/bin目录下。

## 语法格式

```
ALTER USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )
```

在OPTIONS选项里，`ADD`、`SET`和`DROP`指定要执行的操作，未指定时默认为`ADD`操作。option和value为对应操作的参数。

## 参数说明

-   **user\_name**

    该映射的用户名。`CURRENT_USER`和`USER`匹配当前 用户的名称。`PUBLIC`被用来匹配系统中所有当前以及未来的用户名。

-   **server\_name**

    该用户映射的服务器名。

-   修改server所支持的**OPTIONS**如下所示：
    为该用户映射更改选项。新选项会覆盖任何之前指定的选项。`ADD`、 `SET`和`DROP`指定要被执行的动作。如果没有显式地指定操作，将假定为`ADD`。选项名称必须为唯一，该服务器的外部数据包装器也会验证选项。

    oracle_fdw支持的options包括：

    -   **user**

        oracle server的用户名。

    - **password**

        oracle用户对应的密码。

    mysql_fdw支持的options包括：
    
    -   **username**

        MySQL Server/MariaDB的用户名。

    -   **password**

        MySQL Server/MariaDB用户对应的密码。

    postgres_fdw支持的options包括：
    
    -   **user**

        远端openGauss的用户名。

    -   **password**

        远端openGauss用户对应的密码。


## 相关链接

[CREATE USER MAPPING](CREATE-USER-MAPPING.md)，[DROP USER MAPPING](DROP-USER-MAPPING.md)

