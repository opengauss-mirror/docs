# REVOKE<a name="ZH-CN_TOPIC_0289900263"></a>

## 功能描述<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_sda1d739a0a8c460c93bc099fb8208944"></a>

REVOKE用于撤销一个或多个角色的权限。

## 注意事项<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_sf1580b93b5664a7db2c08cf69806faa5"></a>

非对象所有者试图在对象上REVOKE权限，命令按照以下规则执行：

-   如果授权用户没有该对象上的权限，则命令立即失败。
-   如果授权用户有部分权限，则只撤销那些有授权选项的权限。
-   如果授权用户没有授权选项，REVOKE ALL PRIVILEGES形式将发出一个错误信息，而对于其他形式的命令而言，如果是命令中指定名称的权限没有相应的授权选项，该命令将发出一个警告。
-   不允许对表分区进行REVOKE操作，对分区表进行REVOKE操作会引起告警。

## 语法格式<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s5eb0513470714ccbbd425944c1d73c8e"></a>

-   回收指定表或视图上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM }[, ...] 
        | ALL [ PRIVILEGES ] }
        ON { [ TABLE ] table_name [, ...]
           | ALL TABLES IN SCHEMA schema_name [, ...] }
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收表上指定字段权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )}[, ...] 
        | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
        ON [ TABLE ] table_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定序列上权限，LARGE字段属性可选，回收语句不区分序列是否为LARGE。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | UPDATE | ALTER | DROP | COMMENT }[, ...] 
        | ALL [ PRIVILEGES ] }
        ON { [ [ LARGE ] SEQUENCE ] sequence_name [, ...]
           | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定数据库上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...] 
        | ALL [ PRIVILEGES ] }
        ON DATABASE database_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定域上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { USAGE | ALL [ PRIVILEGES ] }
        ON DOMAIN domain_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定客户端加密主密钥上的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [PRIVILEGES] }
        ON CLIENT_MASTER_KEYS client_master_keys_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >轻量版场景下，openGauss提供此语法，但密态数据库相关功能不可用。

-   回收指定列加密密钥上的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | DROP } [, ...] | ALL [PRIVILEGES]}
        ON COLUMN_ENCRYPTION_KEYS column_encryption_keys_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >轻量版场景下，openGauss提供此语法，但密态数据库相关功能不可用。

-   回收指定目录上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { READ | WRITE | ALTER | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON DIRECTORY directory_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定外部数据源上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
       { USAGE | ALL [ PRIVILEGES ] }
        ON FOREIGN DATA WRAPPER fdw_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定外部服务器上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FOREIGN SERVER server_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定函数上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定存储过程上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { PROCEDURE {proc_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL PROCEDURE IN SCHEMA schema_name [, ...] }
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定过程语言上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
       { USAGE | ALL [ PRIVILEGES ] }
        ON LANGUAGE lang_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定大对象上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
        ON LARGE OBJECT loid [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定模式上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON SCHEMA schema_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定表空间上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
        { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TABLESPACE tablespace_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收指定类型上权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
       { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPE type_name [, ...]
        FROM { [ GROUP ] role_name | PUBLIC } [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收Data Source对象上的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
       { USAGE | ALL [PRIVILEGES] }
        ON DATA SOURCE src_name [, ...]
        FROM {[GROUP] role_name | PUBLIC} [, ...]
       [ CASCADE | RESTRICT ];
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >轻量版场景下，openGauss提供此语法，但SQL on Anywhere不可用。

-   回收package对象的权限。

    ```
    REVOKE [ GRANT OPTION FOR ]
       { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [PRIVILEGES] }
       ON PACKAGE package_name [, ...]
       FROM {[GROUP] role_name | PUBLIC} [, ...]
       [ CASCADE | RESTRICT ];
    ```

-   按角色回收角色上的权限。

    ```
    REVOKE [ ADMIN OPTION FOR ]
        role_name [, ...] FROM role_name [, ...]
        [ CASCADE | RESTRICT ];
    ```

-   回收角色上的sysadmin权限。

    ```
    REVOKE ALL { PRIVILEGES | PRIVILEGE } FROM role_name;
    ```


-   回收ANY权限。

    ```
    REVOKE [ ADMIN OPTION FOR ]
      { CREATE ANY TABLE | ALTER ANY TABLE | DROP ANY TABLE | SELECT ANY TABLE | INSERT ANY TABLE | UPDATE ANY TABLE |
      DELETE ANY TABLE | CREATE ANY SEQUENCE | CREATE ANY INDEX | CREATE ANY FUNCTION | EXECUTE ANY FUNCTION |
      CREATE ANY PACKAGE | EXECUTE ANY PACKAGE | CREATE ANY TYPE } [, ...]
      FROM [ GROUP ] role_name [, ...];
    ```


## 参数说明<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s54fe58f3f55f4965a6b9370f9edebfdf"></a>

关键字PUBLIC表示一个隐式定义的拥有所有角色的组。

权限类别和参数说明，请参见GRANT的[参数说明](GRANT.md#zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s3557d45c54124d86bc3f619358d806f8)。

任何特定角色拥有的特权包括直接授予该角色的特权、从该角色作为其成员的角色中得到的权限以及授予给PUBLIC的权限。因此，从PUBLIC收回SELECT特权并不一定会意味着所有角色都会失去在该对象上的SELECT特权，那些直接被授予的或者通过另一个角色被授予的角色仍然会拥有它。类似地，从一个用户收回SELECT后，如果PUBLIC仍有SELECT权限，该用户还是可以使用SELECT。

指定GRANT OPTION FOR时，只撤销对该权限授权的权力，而不撤销该权限本身。

如用户A拥有某个表的UPDATE权限，及WITH GRANT OPTION选项，同时A把这个权限赋予了用户B，则用户B持有的权限称为依赖性权限。当用户A持有的权限或者授权选项被撤销时，必须声明CASCADE，将所有依赖性权限都撤销。

一个用户只能撤销由它自己直接赋予的权限。例如，如果用户A被指定授权（WITH ADMIN OPTION）选项，且把一个权限赋予了用户B，然后用户B又赋予了用户C，则用户A不能直接将C的权限撤销。但是，用户A可以撤销用户B的授权选项，并且使用CASCADE。这样，用户C的权限就会自动被撤销。另外一个例子：如果A和B都赋予了C同样的权限，则A可以撤销他自己的授权选项，但是不能撤销B的，因此C仍然拥有该权限。

如果执行REVOKE的角色持有的权限是通过多层成员关系获得的，则具体是哪个包含的角色执行的该命令是不确定的。在这种场合下，最好的方法是使用SET ROLE成为特定角色，然后执行REVOKE，否则可能导致删除了不想删除的权限，或者是任何权限都没有删除。

## 示例<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s82ec0652acdd4e6091abc851b909926d"></a>

请参考GRANT的[示例](GRANT.md#zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447)。

## 相关链接<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s865f60db543c4043bd5fa9b678295c5a"></a>

[GRANT](GRANT.md)

