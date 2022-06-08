# 创建和管理schema<a name="ZH-CN_TOPIC_0289900215"></a>

## 背景信息<a name="zh-cn_topic_0283136693_zh-cn_topic_0237120306_zh-cn_topic_0059779372_sccec47ed8ad54f89b98b83caf9a0b4fd"></a>

schema又称作模式。通过管理schema，允许多个用户使用同一数据库而不相互干扰，可以将数据库对象组织成易于管理的逻辑组，同时便于将第三方应用添加到相应的schema下而不引起冲突。 管理schema包括：创建schema、使用schema、删除schema、设置schema的搜索路径以及schema的权限控制。

## 注意事项<a name="zh-cn_topic_0283136693_zh-cn_topic_0237120306_zh-cn_topic_0059779372_sf39acabf4d3c4f199303910765daa0cd"></a>

-   openGauss包含一个或多个已命名数据库。用户和用户组在openGauss范围内是共享的，但是其数据并不共享。任何与服务器连接的用户都只能访问连接请求里声明的那个数据库。
-   一个数据库可以包含一个或多个已命名的schema，schema又包含表及其他数据库对象，包括数据类型、函数、操作符等。同一对象名可以在不同的schema中使用而不会引起冲突。例如，schema1和schema2都可以包含一个名为mytable的表。
-   和数据库不同，schema不是严格分离的。用户根据其对schema的权限，可以访问所连接数据库的schema中的对象。进行schema权限管理首先需要对数据库的权限控制进行了解。
-   不能创建以PG\_为前缀的schema名，该类schema为数据库系统预留的。
-   在每次创建新用户时，系统会在当前登录的数据库中为新用户创建一个同名Schema。对于其他数据库，若需要同名Schema，则需要用户手动创建。
-   通过未修饰的表名（名称中只含有表名，没有“schema名”）引用表时，系统会通过search\_path（搜索路径）来判断该表是哪个schema下的表。pg\_temp和pg\_catalog始终会作为搜索路径顺序中的前两位，无论二者是否出现在search\_path中，或者出现在search\_path中的任何位置。search\_path（搜索路径）是一个schema名列表，在其中找到的第一个表就是目标表，如果没有找到则报错。（某个表即使存在，如果它的schema不在search\_path中，依然会查找失败）在搜索路径中的第一个schema叫做"当前schema"。它是搜索时查询的第一个schema，同时在没有声明schema名时，新创建的数据库对象会默认存放在该schema下。
-   每个数据库都包含一个pg\_catalog schema，它包含系统表和所有内置数据类型、函数、操作符。pg\_catalog是搜索路径中的一部分，始终在临时表所属的模式后面，并在search\_path中所有模式的前面，即具有第二搜索优先级。这样确保可以搜索到数据库内置对象。如果用户需要使用和系统内置对象重名的自定义对象时，可以在操作自定义对象时带上自己的模式。

## 操作步骤<a name="zh-cn_topic_0283136693_zh-cn_topic_0237120306_zh-cn_topic_0059779372_sc91f8eff24b147da9ced875c4303f986"></a>

-   创建管理用户及权限schema
    -   执行如下命令来创建一个schema。

        ```
        openGauss=# CREATE SCHEMA myschema;
        ```

        当结果显示为如下信息，则表示成功创建一个名为myschema的schema。

        ```
        CREATE SCHEMA
        ```

        如果需要在模式中创建或者访问对象，其完整的对象名称由模式名称和具体的对象名称组成。中间由符号“.”隔开。例如：myschema.table。

    -   执行如下命令在创建schema时指定owner。

        ```
        openGauss=# CREATE SCHEMA myschema AUTHORIZATION omm;
        ```

        当结果显示为如下信息，则表示成功创建一个属于omm用户，名为myschema的schema。

        ```
        CREATE SCHEMA
        ```


-   使用schema

    在特定schema下创建对象或者访问特定schema下的对象，需要使用有schema修饰的对象名。该名称包含schema名以及对象名，他们之间用“.”号分开。

    -   执行如下命令在myschema下创建mytable表。

        ```
        openGauss=# CREATE TABLE myschema.mytable(id int, name varchar(20));
        CREATE TABLE
        ```

        如果在数据库中指定对象的位置，就需要使用有schema修饰的对象名称。

    -   执行如下命令查询myschema下mytable表的所有数据。

        ```
        openGauss=# SELECT * FROM myschema.mytable;
        id | name 
        ----+------
        (0 rows)
        ```


-   schema的搜索路径

    可以设置search\_path配置参数指定寻找对象可用schema的顺序。在搜索路径列出的第一个schema会变成默认的schema。如果在创建对象时不指定schema，则会创建在默认的schema中。

    -   执行如下命令查看搜索路径。

        ```
        openGauss=# SHOW SEARCH_PATH;
         search_path
        ----------------
         "$user",public
        (1 row)
        ```

    -   执行如下命令将搜索路径设置为myschema、public，首先搜索myschema。

        ```
        openGauss=# SET SEARCH_PATH TO myschema, public;
        SET
        ```


-   schema的权限控制

    默认情况下，用户只能访问属于自己的schema中的数据库对象。如果需要访问其他schema的对象，则该schema的所有者应该赋予他对该schema的usage权限。

    通过将模式的CREATE权限授予某用户，被授权用户就可以在此模式中创建对象。注意默认情况下，所有角色都拥有在public模式上的USAGE权限，但是普通用户没有在public模式上的CREATE权限。普通用户能够连接到一个指定数据库并在它的public模式中创建对象是不安全的，如果普通用户具有在public模式上的CREATE权限则建议通过如下语句撤销该权限。

    -   撤销PUBLIC在public模式下创建对象的权限，下面语句中第一个“public”是模式，第二个“PUBLIC”指的是所有角色。

        ```
        openGauss=# REVOKE CREATE ON SCHEMA public FROM PUBLIC;
        REVOKE
        ```

    -   使用以下命令查看现有的schema：

        ```
        openGauss=# SELECT current_schema();
         current_schema 
        ----------------
         myschema
        (1 row)
        ```

    -   执行如下命令创建用户jack，并将myschema的usage权限赋给用户jack。

        ```
        openGauss=# CREATE USER jack IDENTIFIED BY 'xxxxxxxxx';
        CREATE ROLE
        openGauss=# GRANT USAGE ON schema myschema TO jack;
        GRANT
        ```

    -   将用户jack对于myschema的usage权限收回。

        ```
        openGauss=# REVOKE USAGE ON schema myschema FROM jack;
        REVOKE
        ```


-   删除schema
    -   当schema为空时，即该schema下没有数据库对象，使用DROP SCHEMA命令进行删除。例如删除名为nullschema的空schema。

        ```
        openGauss=# DROP SCHEMA IF EXISTS nullschema;
        DROP SCHEMA
        ```

    -   当schema非空时，如果要删除一个schema及其包含的所有对象，需要使用CASCADE关键字。例如删除myschema及该schema下的所有对象。

        ```
        openGauss=# DROP SCHEMA myschema CASCADE;
        DROP SCHEMA
        ```

    -   执行如下命令删除用户jack。

        ```
        openGauss=# DROP USER jack;
        DROP ROLE
        ```



