# ALTER USER MAPPING<a name="ZH-CN_TOPIC_0289900415"></a>

## 功能描述<a name="zh-cn_topic_0283137333_section38351127909"></a>

更改一个用户映射的定义。

## 注意事项<a name="section1017451134717"></a>

当在OPTIONS中出现password选项时，需要保证openGauss每个节点的$GAUSSHOME/bin目录下存在usermapping.key.cipher和usermapping.key.rand文件，如果不存在这两个文件，请使用gs\\\_guc工具生成并使用gs\\\_ssh工具发布到每个节点的$GAUSSHOME/bin目录下。

## 语法格式<a name="zh-cn_topic_0283137333_section191931133103"></a>

```
ALTER USER MAPPING FOR { user_name | USER | CURRENT_USER | PUBLIC }
    SERVER server_name
    OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )
```

在OPTIONS选项里，ADD、SET和DROP指定要执行的操作，未指定时默认为ADD操作。option和value为对应操作的参数及参数值。

## 参数说明<a name="zh-cn_topic_0283137333_section116361638401"></a>

-   **user\_name**

    该映射的用户名。

    CURRENT\_USER和USER匹配当前用户的名称。PUBLIC被用来匹配系统中所有当前以及未来的用户名。

-   **server\_name**

    该用户映射的服务器名。

-   **OPTIONS**

    为该用户映射更改选项。新选项会覆盖任何之前指定的选项。ADD、 SET和DROP指定要被执行的动作。如果没有显式地指定操作，将假定为ADD。选项名称必须为唯一，该服务器的外部数据包装器也会验证选项。

    -   oracle\_fdw支持的options包括：
        -   **user**

            oracle server的用户名。

        -   **password**

            oracle用户对应的密码。

    -   mysql\_fdw支持的options包括：
        -   **username**

            MySQL Server/MariaDB的用户名。

        -   **password**

            MySQL Server/MariaDB用户对应的密码。

    -   postgres\_fdw支持的options包括：
        -   **user**

            远端openGauss数据库用户的用户名。

        -   **password**

            远端openGauss数据库用户对应的密码。




## 相关链接<a name="zh-cn_topic_0283137333_section9697148408"></a>

[CREATE USER MAPPING](CREATE-USER-MAPPING.md)，[DROP USER MAPPING](DROP-USER-MAPPING.md)

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss提供此语法，但USER MAPPING功能不可用。

