# ALTER DEFAULT PRIVILEGES<a name="ZH-CN_TOPIC_0289900961"></a>

## 功能描述<a name="zh-cn_topic_0283136687_zh-cn_topic_0237122057_zh-cn_topic_0059778935_sb6d50f1fe847446bb5943799163d59fb"></a>

设置应用于将来创建的对象的权限（这不会影响分配到已有对象中的权限）。

## 注意事项<a name="zh-cn_topic_0283136687_zh-cn_topic_0237122057_zh-cn_topic_0059778935_s4737e0edf6af464282c48f14a9d9c0f4"></a>

目前只支持表（包括视图）、序列、函数、类型、密态数据库客户端主密钥和列加密密钥的权限更改。

## 语法格式<a name="zh-cn_topic_0283136687_zh-cn_topic_0237122057_zh-cn_topic_0059778935_s760a84be01534119a13af50d2ff535aa"></a>

```
ALTER DEFAULT PRIVILEGES
    [ FOR { ROLE | USER } target_role [, ...] ]
    [ IN SCHEMA schema_name [, ...] ]
    abbreviated_grant_or_revoke;
```

-   其中abbreviated\_grant\_or\_revoke子句用于指定对哪些对象进行授权或回收权限。

    ```
    grant_on_tables_clause
      | grant_on_sequences_clause
      | grant_on_functions_clause
      | grant_on_types_clause
      | grant_on_client_master_keys_clause
      | grant_on_column_encryption_keys_clause
      | revoke_on_tables_clause
      | revoke_on_sequences_clause
      | revoke_on_functions_clause
      | revoke_on_types_clause
      | revoke_on_client_master_keys_clause
      | revoke_on_column_encryption_keys_clause
    ```


-   其中grant\_on\_tables\_clause子句用于对表授权。

    ```
    GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON TABLES 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   其中grant\_on\_sequences\_clause子句用于对序列授权。

    ```
    GRANT { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON SEQUENCES 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   其中grant\_on\_functions\_clause子句用于对函数授权。

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FUNCTIONS 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   其中grant\_on\_types\_clause子句用于对类型授权。

    ```
    GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPES 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   其中grant\_on\_client\_master\_keys\_clause子句用于对客户端主密钥授权。

    ```
    GRANT { { USAGE  | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON CLIENT_MASTER_KEYS
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   其中grant\_on\_column\_encryption\_keys\_clause子句用于对列加密密钥授权。

    ```
    GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON COLUMN_ENCRYPTION_KEYS 
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ]
    ```

-   其中revoke\_on\_tables\_clause子句用于回收表对象的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON TABLES 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   其中revoke\_on\_sequences\_clause子句用于回收序列的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } 
        [, ...] | ALL [ PRIVILEGES ] }
        ON SEQUENCES
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   其中revoke\_on\_functions\_clause子句用于回收函数的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { {EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FUNCTIONS 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   其中revoke\_on\_types\_clause子句用于回收类型的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPES 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```


-   其中revoke\_on\_client\_master\_keys\_clause子句用于回收客户端主密钥的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON CLIENT_MASTER_KEYS 
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```

-   其中revoke\_on\_column\_encryption\_keys\_clause子句用于回收列加密密钥的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON COLUMN_ENCRYPTION_KEYS
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
    ```


## 参数说明<a name="zh-cn_topic_0283136687_zh-cn_topic_0237122057_zh-cn_topic_0059778935_sb713f37e7b9a40ad936d0bbba0449eb1"></a>

-   **target\_role**

    已有角色的名称。如果省略FOR ROLE/USER，则缺省值为当前角色/用户。

    取值范围：已有角色的名称。

-   **schema\_name**

    现有模式的名称。

    target\_role必须有schema\_name的CREATE权限。

    取值范围：现有模式的名称。

-   **role\_name**

    被授予或者取消权限角色的名称。

    取值范围：已存在的角色名称。


>![](public_sys-resources/icon-notice.png) **须知：** 
>如果想删除一个被赋予了默认权限的角色，有必要恢复改变的缺省权限或者使用DROP OWNED BY来为角色脱离缺省的权限记录。

## 示例<a name="zh-cn_topic_0283136687_zh-cn_topic_0237122057_zh-cn_topic_0059778935_s64b82734f0054e559da974687a61e6bf"></a>

```
--将创建在模式tpcds里的所有表（和视图）的SELECT权限授予每一个用户。
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds GRANT SELECT ON TABLES TO PUBLIC;

--创建用户普通用户jack。
openGauss=# CREATE USER jack PASSWORD 'xxxxxxxxx';

--将tpcds下的所有表的插入权限授予用户jack。
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds GRANT INSERT ON TABLES TO jack;

--撤销上述权限。
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds REVOKE SELECT ON TABLES FROM PUBLIC; 
openGauss=# ALTER DEFAULT PRIVILEGES IN SCHEMA tpcds REVOKE INSERT ON TABLES FROM jack;

--删除用户jack。
openGauss=# DROP USER jack;
```

## 相关链接<a name="zh-cn_topic_0283136687_zh-cn_topic_0237122057_zh-cn_topic_0059778935_s802a1dc228084944b989677194792353"></a>

[GRANT](GRANT.md)，[REVOKE](REVOKE.md)

