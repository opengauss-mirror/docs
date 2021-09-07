﻿# CREATE USER MAPPING
## 功能描述
定义一个用户到一个外部服务器的新映射。
## 语法格式
```
CREATE USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    [ OPTIONS ( option 'value' [ , ... ] ) ]
```

## 注意事项

-   当在OPTIONS中出现password选项时，需要保证openGauss每个节点的$GAUSSHOME/bin目录下存在usermapping.key.cipher和usermapping.key.rand文件，如果不存在这两个文件，请使用gs\_guc工具生成并使用gs\_ssh工具发布到openGauss每个节点的$GAUSSHOME/bin目录下。

## 参数说明

-   **user\_name**

    要映射到外部服务器的一个现有用户的名称。`CURRENT_USER`和`USER`匹配当前用户的名称。当`PUBLIC`被指定时，一个所谓的公共映射会被创建，当没有特定用户的映射可用时将会使用它。

-   **server\_name**

    将为其创建用户映射的现有服务器的名称。

-   **OPTIONS \(  \{ option\_name ' value '  \}  \[, ...\] \)**

    这个子句指定用户映射的选项。这些选项通常定义该映射实际的用户名和口令。选项名必须唯一。允许的选项名和值与该服务器的外部数据包装器有关。

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
    
    openGauss在后台会对用户输入的password加密以保证安全性。该加密所需密钥文件需要使用gs\_guc工具生成并使用gs\_ssh工具发布到openGauss每个节点的$GAUSSHOME/bin目录下。password不应当包含'encryptOpt'前缀，否则会被认为是加密后的密文。

相关链接

[ALTER USER MAPPING](ALTER-USER-MAPPING.md)，  [DROP USER MAPPING](DROP-USER-MAPPING.md)

