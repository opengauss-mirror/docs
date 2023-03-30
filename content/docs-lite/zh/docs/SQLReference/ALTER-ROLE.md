# ALTER ROLE<a name="ZH-CN_TOPIC_0289900826"></a>

## 功能描述<a name="zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_sa4ec5e4feca4419193486c30e3c50708"></a>

修改角色属性。

## 注意事项<a name="zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_sa559bf9874634b91a97ecb349a5b4c5b"></a>

无。

## 语法格式<a name="zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_sad868fc15480446b8c29a37a152b5fc5"></a>

-   修改角色的权限。

    ```
    ALTER ROLE role_name [ [ WITH ] option [ ... ] ];
    ```

    其中权限项子句option为。

    ```
    {CREATEDB | NOCREATEDB}
        | {CREATEROLE | NOCREATEROLE}
        | {INHERIT | NOINHERIT}
        | {AUDITADMIN | NOAUDITADMIN}
        | {SYSADMIN | NOSYSADMIN}
        | {MONADMIN | NOMONADMIN}
        | {OPRADMIN | NOOPRADMIN}
        | {POLADMIN | NOPOLADMIN}
        | {USEFT | NOUSEFT}
        | {LOGIN | NOLOGIN}
        | {REPLICATION | NOREPLICATION}
        | {INDEPENDENT | NOINDEPENDENT}
        | {VCADMIN | NOVCADMIN}
        | {PERSISTENCE | NOPERSISTENCE}
        | CONNECTION LIMIT connlimit
        | [ ENCRYPTED | UNENCRYPTED ] PASSWORD 'password' [EXPIRED]
        | [ ENCRYPTED | UNENCRYPTED ] IDENTIFIED BY 'password' [ REPLACE 'old_password' | EXPIRED ]
        | [ ENCRYPTED | UNENCRYPTED ] PASSWORD { 'password' | DISABLE | EXPIRED }
        | [ ENCRYPTED | UNENCRYPTED ] IDENTIFIED BY { 'password' [ REPLACE 'old_password' ] | DISABLE }
        | VALID BEGIN 'timestamp'
        | VALID UNTIL 'timestamp'
        | RESOURCE POOL 'respool'
        | PERM SPACE 'spacelimit'
        | PGUSER
    ```

-   修改角色的名称。

    ```
    ALTER ROLE role_name 
        RENAME TO new_name;
    ```

-   锁定或解锁。

    ```
    ALTER ROLE role_name 
        ACCOUNT { LOCK | UNLOCK };
    ```

-   设置角色的配置参数。

    ```
    ALTER ROLE role_name [ IN DATABASE database_name ]
        SET configuration_parameter {{ TO | = } { value | DEFAULT } | FROM CURRENT};
    ```

-   重置角色的配置参数。

    ```
    ALTER ROLE role_name
        [ IN DATABASE database_name ] RESET {configuration_parameter|ALL};
    ```


## 参数说明<a name="zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_s50961af6143d4aafaf8fa02febbbf331"></a>

-   **role\_name**

    现有角色名。

    取值范围：已存在的用户名。

-   **IN DATABASE database\_name**

    表示修改角色在指定数据库上的参数。

-   **SET configuration\_parameter**

    设置角色的参数。ALTER ROLE中修改的会话参数只针对指定的角色，且在下一次该角色启动的会话中有效。

    取值范围：

    configuration\_parameter和value的取值请参见[SET](SET.md)。

    DEFAULT：表示清除configuration\_parameter参数的值，configuration\_parameter参数的值将继承本角色新产生的SESSION的默认值。

    FROM CURRENT：取当前会话中的值设置为configuration\_parameter参数的值。

-   **RESET configuration\_parameter/ALL**

    清除configuration\_parameter参数的值。与SET configuration\_parameter TO DEFAULT的效果相同。

    取值范围：ALL表示清除所有参数的值。

-   **ACCOUNT LOCK | ACCOUNT UNLOCK**
    -   ACCOUNT LOCK：锁定帐户，禁止登录数据库。
    -   ACCOUNT UNLOCK：解锁帐户，允许登录数据库。

-   **PGUSER**

    当前版本不允许修改角色的PGUSER属性

-   **PASSWORD/IDENTIFIED BY **'password'

    重置或修改用户密码。除了初始用户外其他管理员或普通用户修改自己的密码需要输入正确的旧密码。只有初始用户、系统管理员（sysadmin）或拥有创建用户（CREATEROLE）权限的用户才可以重置普通用户密码，无需输入旧密码。初始用户可以重置系统管理员的密码，系统管理员不允许重置其他系统管理员的密码。

-   **EXPIRED**

    设置密码失效。只有初始用户、系统管理员（sysadmin）或拥有创建用户（CREATEROLE）权限的用户才可以设置用户密码失效，其中系统管理员也可以设置自己或其他系统管理员密码失效。任何用户都不允许设置初始用户密码失效。

    密码失效的用户可以登录数据库但不能执行查询操作，只有修改密码或由管理员重置密码后才可以恢复正常查询操作。


其他参数请参见CREATE ROLE的[参数说明](CREATE-ROLE.md#zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s5a43ec5742a742089e2c302063de7fe4)。

## 示例<a name="zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_s961f01774f174a5aa4e6f59dea50381a"></a>

请参见CREATE ROLE的[示例](CREATE-ROLE.md#zh-cn_topic_0283136858_zh-cn_topic_0237122112_zh-cn_topic_0059778189_s0dea2f90b8474387aff0ab3f366a611e)。

## 相关链接<a name="zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_sb24012e0cec94bc3ba5c2c0e8997d052"></a>

[CREATE ROLE](CREATE-ROLE.md)，[DROP ROLE](DROP-ROLE.md)，[SET](SET.md)

