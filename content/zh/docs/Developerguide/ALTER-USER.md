# ALTER USER<a name="ZH-CN_TOPIC_0289900744"></a>

## 功能描述<a name="zh-cn_topic_0283136971_zh-cn_topic_0237122083_zh-cn_topic_0059777461_s46f3e0aac3a84502bc20eee219bef9cf"></a>

修改数据库用户的属性。

## 注意事项<a name="zh-cn_topic_0283136971_zh-cn_topic_0237122083_zh-cn_topic_0059777461_sfefe5f38da29449aba061ba83566257d"></a>

ALTER USER中修改的会话参数只针对指定的用户，且在下一次会话中有效。

## 语法格式<a name="zh-cn_topic_0283136971_zh-cn_topic_0237122083_zh-cn_topic_0059777461_s700b45dab05a43e4ac8959c5824223be"></a>

- 修改用户的权限等信息。

  ```
  ALTER USER [IF EXISTS] user_name [ [ WITH ] option [ ... ] ];
  ```

  其中option子句为：

  ```
  { CREATEDB | NOCREATEDB }
      | { CREATEROLE | NOCREATEROLE }
      | { INHERIT | NOINHERIT }
      | { AUDITADMIN | NOAUDITADMIN }
      | { SYSADMIN | NOSYSADMIN }
      | {MONADMIN | NOMONADMIN}
      | {OPRADMIN | NOOPRADMIN}
      | {POLADMIN | NOPOLADMIN}
      | { USEFT | NOUSEFT }
      | { LOGIN | NOLOGIN }
      | { REPLICATION | NOREPLICATION }
      | {INDEPENDENT | NOINDEPENDENT}
      | {VCADMIN | NOVCADMIN}
      | {PERSISTENCE | NOPERSISTENCE}
      | CONNECTION LIMIT connlimit
      | [ ENCRYPTED | UNENCRYPTED ] PASSWORD { 'password' [EXPIRED] | DISABLE | EXPIRED }
      | [ ENCRYPTED | UNENCRYPTED ] IDENTIFIED BY { 'password' [ REPLACE 'old_password' | EXPIRED ] | DISABLE }
      | VALID BEGIN 'timestamp'
      | VALID UNTIL 'timestamp'
      | RESOURCE POOL 'respool'
      | PERM SPACE 'spacelimit'
      | PGUSER
  ```

-   修改用户名。

    ```
    ALTER USER user_name 
        RENAME TO new_name;
    ```

-   锁定或解锁。

    ```
    ALTER USER user_name
        ACCOUNT { LOCK | UNLOCK };
    ```

- 修改与用户关联的指定会话参数值。

  ```
  ALTER USER user_name 
      SET configuration_parameter { { TO | = } { value | DEFAULT } | FROM CURRENT };
  ```

-   重置与用户关联的指定会话参数值。

    ```
    ALTER USER user_name 
        RESET { configuration_parameter | ALL };
    ```


## 参数说明<a name="zh-cn_topic_0283136971_zh-cn_topic_0237122083_zh-cn_topic_0059777461_s28f32bbb70f648b680f66e994ccb96f4"></a>

-   **user\_name**

    现有用户名。

    取值范围：已存在的用户名。

-   **new\_password**

    新密码。

    密码规则如下：

    -   不能与当前密码相同。
    -   密码默认不少于8个字符。
    -   不能与用户名及用户名倒序相同。
    -   至少包含大写字母（A-Z）、小写字母（a-z）、数字（0-9）、非字母数字字符（限定为\~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?）四类字符中的三类字符。

    取值范围：字符串。

-   **old\_password**

    旧密码。

-   **ACCOUNT LOCK | ACCOUNT UNLOCK**
    -   ACCOUNT LOCK：锁定帐户，禁止登录数据库。
    -   ACCOUNT UNLOCK：解锁帐户，允许登录数据库。

-   **PGUSER**

    当前版本不允许修改用户的PGUSER属性。


其他参数请参见[CREATE ROLE](CREATE-ROLE.md)和[ALTER ROLE](ALTER-ROLE.md)的参数说明。

## 示例<a name="zh-cn_topic_0283136971_zh-cn_topic_0237122083_zh-cn_topic_0059777461_sf9c8ea511e3c47b98d77fc0ab56e9d07"></a>

请参考CREATE USER的[示例](CREATE-USER.md#zh-cn_topic_0283136891_zh-cn_topic_0237122125_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa)。

## 相关链接<a name="zh-cn_topic_0283136971_zh-cn_topic_0237122083_zh-cn_topic_0059777461_sfe6a005c6e5b4a98b94be3d6521f4840"></a>

[CREATE ROLE](CREATE-ROLE.md)，[CREATE USER](CREATE-USER.md)，[DROP USER](DROP-USER.md)

