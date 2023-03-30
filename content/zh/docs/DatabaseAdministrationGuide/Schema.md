# Schema<a name="ZH-CN_TOPIC_0289900181"></a>

Schema又称作模式。通过管理Schema，允许多个用户使用同一数据库而不相互干扰，可以将数据库对象组织成易于管理的逻辑组，同时便于将第三方应用添加到相应的Schema下而不引起冲突。

每个数据库包含一个或多个Schema。数据库中的每个Schema包含表和其他类型的对象。数据库创建初始，默认具有一个名为public的Schema，且所有用户都拥有此Schema的usage权限，只有系统管理员和初始化用户可以在public Schema下创建普通函数、聚合函数、存储过程和同义词对象，只有初始化用户可以在public Schema下创建操作符，其他用户即使赋予create权限后也不可以创建上述五种对象。可以通过Schema分组数据库对象。Schema类似于操作系统目录，但Schema不能嵌套。默认只有初始化用户可以在pg_catalog模式下创建对象。

相同的数据库对象名称可以应用在同一数据库的不同Schema中，而没有冲突。例如，a\_schema和b\_schema都可以包含名为mytable的表。具有所需权限的用户可以访问数据库的多个Schema中的对象。

CREATE USER创建用户的同时，系统会在执行该命令的数据库中，为该用户创建一个同名的SCHEMA。

数据库对象是创建在数据库搜索路径中的第一个Schema内的。有关默认情况下的第一个Schema情况及如何变更Schema顺序等更多信息，请参见[搜索路径](#zh-cn_topic_0283137084_zh-cn_topic_0237121104_zh-cn_topic_0156599225_section03655314403)。

## 创建、修改和删除Schema<a name="zh-cn_topic_0283137084_zh-cn_topic_0237121104_zh-cn_topic_0156599225_section0594124724510"></a>

-   要创建Schema，请使用[CREATE SCHEMA](../SQLReference/CREATE-SCHEMA.md)。默认初始用户和系统管理员可以创建Schema，其他用户需要具备数据库的CREATE权限才可以在该数据库中创建Schema，赋权方式请参考[GRANT](GRANT.md)中将数据库的访问权限赋予指定的用户或角色中的语法。
-   要更改Schema名称或者所有者，请使用[ALTER SCHEMA](../SQLReference/ALTER-SCHEMA.md)。Schema所有者可以更改Schema。
-   要删除Schema及其对象，请使用[DROP SCHEMA](../SQLReference/DROP-SCHEMA.md)。Schema所有者可以删除Schema。
-   要在Schema内创建表，请以schema\_name.table\_name格式创建表。不指定schema\_name时，对象默认创建到[搜索路径](#zh-cn_topic_0283137084_zh-cn_topic_0237121104_zh-cn_topic_0156599225_section03655314403)中的第一个Schema内。
-   要查看Schema所有者，请对系统表PG\_NAMESPACE和PG\_USER执行如下关联查询。语句中的schema\_name请替换为实际要查找的Schema名称。

    ```
    openGauss=# SELECT s.nspname,u.usename AS nspowner FROM pg_namespace s, pg_user u WHERE nspname='schema_name' AND s.nspowner = u.usesysid;
    ```

-   要查看所有Schema的列表，请查询PG\_NAMESPACE系统表。

    ```
    openGauss=# SELECT * FROM pg_namespace;
    ```

-   要查看属于某Schema下的表列表，请查询系统视图PG\_TABLES。例如，以下查询会返回Schema PG\_CATALOG中的表列表。

    ```
    openGauss=# SELECT distinct(tablename),schemaname from pg_tables where schemaname = 'pg_catalog';
    ```


## 搜索路径<a name="zh-cn_topic_0283137084_zh-cn_topic_0237121104_zh-cn_topic_0156599225_section03655314403"></a>

搜索路径定义在[search\_path](语句行为.html#zh-cn_topic_0237124732_zh-cn_topic_0059779117_s304b0a206e2e4ca782210ffb66cbc4b0)参数中，参数取值形式为采用逗号分隔的Schema名称列表。如果创建对象时未指定目标Schema，则该对象会被添加到搜索路径中列出的第一个Schema中。当不同Schema中存在同名的对象时，查询对象未指定Schema的情况下，将从搜索路径中包含该对象的第一个Schema中返回对象。

-   要查看当前搜索路径，请使用[SHOW](../SQLReference/SHOW.md)。

    ```
    openGauss=# SHOW SEARCH_PATH;
     search_path
    ----------------
     "$user",public
    (1 row)
    ```

    search\_path参数的默认值为：“$user”,public。$user表示与当前会话用户名同名的Schema名，如果这样的模式不存在，$user将被忽略。所以默认情况下，用户连接数据库后，如果数据库下存在同名Schema，则对象会添加到同名Schema下，否则对象被添加到Public Schema下。

-   要更改当前会话的默认Schema，请使用SET命令。

    执行如下命令将搜索路径设置为myschema、public，首先搜索myschema。

    ```
    openGauss=# SET SEARCH_PATH TO myschema, public;
    SET
    ```


