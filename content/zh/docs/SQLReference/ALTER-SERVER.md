# ALTER SERVER<a name="ZH-CN_TOPIC_0289900400"></a>

## 功能描述<a name="zh-cn_topic_0283136932_section7100616165720"></a>

增加、修改和删除一个现有server的参数。已有server可以从pg\_foreign\_server系统表中查询。

## 注意事项<a name="zh-cn_topic_0283136932_section1175222145715"></a>

只有SERVER的所有者或者被授予了SERVER的ALTER权限的用户才可以执行ALTER SERVER命令，系统管理员默认拥有该权限。但要修改SERVER的所有者，当前用户必须是该SERVER的所有者或者系统管理员，且该用户是新所有者角色的成员。

## 语法格式<a name="zh-cn_topic_0283136932_section19393201035713"></a>

-   修改外部服务的参数。

```
 ALTER SERVER server_name [ VERSION 'new_version' ]   
      [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
```

    在OPTIONS选项里，ADD、SET和DROP指定要执行的操作，未指定时默认为ADD操作。option和value为对应操作的参数。


-   修改外部服务的名称。

    ```
    ALTER SERVER server_name     
       RENAME TO new_name;
    ```


## 参数说明<a name="zh-cn_topic_0283136932_section284720213578"></a>

-   **server\_name**

    所修改的server的名称。

-   **new\_version**

    修改后server的新版本名称。

-   **OPTIONS**

    更改该服务器的选项。ADD、SET和 DROP指定要执行的动作。如果没有显式地指定操作， 将会假定为ADD。选项名称必须唯一，名称和值也会使用该服务器的外部数据包装器库进行验证。

    -   oracle\_fdw支持的options包括：
        -   **dbserver**

            远端oracle数据库的连接字符串。

        -   **isolation\_level**  （默认值为serializable）

            oracle数据库的事务隔离级别。

            取值范围：serializable、 read\_committed 、 read\_only

    -   mysql\_fdw支持的options包括：
        -   **host**  （默认值为 127.0.0.1）

            MySQL Server/MariaDB的地址。

        -   **port**  （默认值为 3306）

            MySQL Server/MariaDB侦听的端口号。

    -   postgres\_fdw支持的options同libpq支持的连接参数一致，可参考[链接参数](../DeveloperGuide/链接参数.md)。需要注意的是，以下几个options不支持修改：
        -   **user**和**password**

            用户名和密码将在创建user mapping时指定。

        -   **client\_encoding**

            将自动获取本地server的编码方式并设置该值。

        -   **application\_name**

            总是设置成postgres\_fdw。


    除了libpq支持的连接参数外，还额外提供3个options：

    -   **use\_remote\_estimate**

        控制postgres\_fdw是否发出EXPLAIN命令以获取运行消耗估算。默认值为false。

    -   **fdw\_startup\_cost**

        执行一个外表扫描时的启动耗时估算。这个值通常包含建立连接、远端对请求的分析和生成计划的耗时。默认值为100。

    -   **fdw\_typle\_cost**

        在远端服务器上对每一个元组进行扫描时的额外消耗。这个值通常表示数据在server间传输的额外消耗。默认值为0.01。



-   **new\_name**

    修改后server的新名称。


## 相关链接<a name="zh-cn_topic_0283136932_section13898752175613"></a>

[CREATE SERVER ](CREATE-SERVER.md)，[DROP SERVER](DROP-SERVER.md)

