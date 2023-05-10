# SCHEMA

SCHEMA又称作模式。通过管理SCHEMA，允许多个用户使用同一数据库而不相互干扰，可以将数据库对象组织成易于管理的逻辑组，同时便于将第三方应用添加到相应的SCHEMA下而不引起冲突。

每个数据库包含一个或多个SCHEMA。数据库中的每个SCHEMA包含表和其他类型的对象。数据库创建初始，默认具有一个名为PUBLIC的SCHEMA，且所有用户都拥有此SCHEMA的USAGE权限，只有系统管理员和初始化用户可以在public Schema下创建普通函数、聚合函数、存储过程和同义词对象，只有初始化用户可以在public Schema下创建操作符，其他用户即使赋予create权限后也不可以创建上述五种对象。可以通过SCHEMA分组数据库对象。SCHEMA类似于操作系统目录，但SCHEMA不能嵌套。

相同的数据库对象名称可以应用在同一数据库的不同SCHEMA中，而没有冲突。例如，a\_schema和b\_schema都可以包含名为mytable的表。具有所需权限的用户可以访问数据库的多个SCHEMA中的对象。

通过CREATE USER创建用户的同时，系统会在执行该命令的数据库中，为该用户创建一个同名的SCHEMA。

## 语法格式<a name="section10988202911187"></a>

-   创建SCHEMA

    ```
    CREATE SCHEMA schema_name 
        [ AUTHORIZATION user_name ] ;
    ```

-   修改SCHEMA
    -   修改模式的名称。

        ```
        ALTER SCHEMA schema_name 
            RENAME TO new_name;
        ```

    -   修改模式的所有者。

        ```
        ALTER SCHEMA schema_name 
            OWNER TO new_owner;
        ```


-   删除SCHEMA及其对象。

    ```
    DROP SCHEMA  schema_name;
    ```

    不要随意删除pg\_temp或pg\_toast\_temp开头的模式，这些模式是系统内部使用的，如果删除，可能导致无法预知的结果。


## 参数说明<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s9930d6a2a74b406980e00129b1f4fe2c"></a>

-   **schema\_name**

    模式名称。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >模式名不能和当前数据库里其他的模式重名。
    >模式的名称不可以“pg\_”开头。

    取值范围：字符串，要符合标识符的命名规范。

-   **AUTHORIZATION user\_name**

    指定模式的所有者。当不指定schema\_name时，把user\_name当作模式名，此时user\_name只能是角色名。

    取值范围：已存在的用户名/角色名。

-   **schema\_element**

    在模式里创建对象的SQL语句。目前仅支持CREATE TABLE、CREATE VIEW、CREATE INDEX、CREATE PARTITION、CREATE SEQUENCE、CREATE TRIGGER、GRANT子句。

    子命令所创建的对象都被AUTHORIZATION子句指定的用户所拥有。


>![](public_sys-resources/icon-note.png) **说明：** 
>如果当前搜索路径上的模式中存在同名对象时，需要明确指定引用对象所在的模式。可以通过命令SHOW SEARCH\_PATH来查看当前搜索路径上的模式。

## 示例<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_sd7a0dca78f6844d79a0ec70fb4213769"></a>

-   创建一个属于用户user1的模式。

    创建一个用户user1。

    ```
    openGauss=# CREATE USER user1 IDENTIFIED BY 'XXXXXXXX';
    CREATE ROLE
    ```

    根据用户名创建模式。

    ```
    openGauss=# CREATE SCHEMA test AUTHORIZATION user1;
    CREATE SCHEMA
    ```

-   修改模式test的名称为test1。

    ```
    openGauss=# ALTER SCHEMA test RENAME TO test1;
    ALTER SCHEMA
    ```

-   修改模式的所有者。

    创建一个用户user2。

    ```
    openGauss=# CREATE USER user2 IDENTIFIED BY 'XXXXXXXXX';
    CREATE ROLE
    ```

    修改模式 test1的所有者为user2。

    ```
    openGauss=# ALTER SCHEMA test1  OWNER TO user2;
    ALTER SCHEMA
    ```

-   查看当前搜索路径

    ```
    openGauss=# SHOW SEARCH_PATH;
      search_path
    ----------------
     "$user",public
    (1 row)
    ```

-   更改当前会话的默认Schema。

    ```
    openGauss=# SET SEARCH_PATH TO test1, public;
    SET
    ```

-   删除SCHEMA及其对象。

    ```
    openGauss=# DROP SCHEMA test1;
    DROP SCHEMA
    ```


