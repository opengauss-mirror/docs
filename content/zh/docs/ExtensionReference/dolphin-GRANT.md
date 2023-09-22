# GRANT

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

GRANT用于授予一个或多个角色的权限。

## 注意事项<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_sf1580b93b5664a7db2c08cf69806faa5"></a>

   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。
   增加ALTER ROUTINE、CRAETE ROUTINE、CREATE TEMPORARY TABLES、CREATE USER、CREATE TABLESPACE、INDEX权限。增加USAGE语法。
## 语法格式<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s5eb0513470714ccbbd425944c1d73c8e"></a>

-   新增```ALTER ROUTINE```权限

与function和procedure的alter权限基本一致

修改后的语法说明为：

```
GRANT { { EXECUTE | ALTER ROUTINE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
ON {FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} | PROCEDURE {proc_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...] | ALL FUNCTIONS IN SCHEMA schema_name [, ...] | ALL PROCEDURE IN SCHEMA schema_name [, ...] | schema_name.*}
TO { [ GROUP ] role_name | PUBLIC } [, ...]
[ WITH GRANT OPTION ];
```
-   新增```CREATE ROUTINE```权限

与CREATE ANY FUNCTION权限基本一致

修改后的语法说明为：

```
GRANT { CREATE ANY TABLE | ALTER ANY TABLE | DROP ANY TABLE | SELECT ANY TABLE | INSERT ANY TABLE | UPDATE ANY TABLE |
  DELETE ANY TABLE | CREATE ANY SEQUENCE | CREATE ANY INDEX | CREATE ANY FUNCTION | CREATE ROUTINE | EXECUTE ANY FUNCTION |
  CREATE ANY PACKAGE | EXECUTE ANY PACKAGE | CREATE ANY TYPE } [, ...]
  [ON *.*]
  TO [ GROUP ] role_name [, ...]
  [ WITH ADMIN OPTION ];
  ```

-   新增```CREATE TEMPORARY TABLES```权限

与TEMPORARY权限基本一致

修改后的语法说明为：
```
GRANT { { CREATE | CONNECT | CREATE TEMPORARY TABLES | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...]
    | ALL [ PRIVILEGES ] }
    ON { DATABASE database_name [, ...] | database_name.* }
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
  ```

-   新增```CREATE USER```权限

控制用户创建新用户的权限，与用户的CREATEROLE和 NOCREATEROLE权限基本一致

新增的语法说明为：
```
GRANT CREATE USER ON *.* TO ROLE_NAME;
```

-   新增```CREATE TABLESPACE```权限

控制用户创建新表空间的权限

新增的语法说明为：
```
GRANT CREATE TABLESPACE ON *.* TO ROLE_NAME;
```
-   新增```INDEX```权限

与CREATE ANY INDEX权限基本一致

修改后的语法说明为：
```
GRANT INDEX 
  ON *.* 
  TO [ GROUP ] role_name [, ...]
  [ WITH ADMIN OPTION ];
```
-   新增```USAGE```语法

当用户不存在时，GRANT USAGE会创建用户；当用户存在时，GRANT USAGE会修改用户的密码。创建/修改用户密码的权限要求和直接使用CREATE USER/ALTER USER时一致。

修改后的语法说明为：
```
GRANT USAGE 
  ON *.* TO role_name
  IDENTIFIED BY [PASSWORD] password_string;
```
## 参数说明<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s54fe58f3f55f4965a6b9370f9edebfdf"></a>

N/A

## 示例<a name="zh-cn_topic_0283137669_zh-cn_topic_0237122179_zh-cn_topic_0059779274_s82ec0652acdd4e6091abc851b909926d"></a>

```
GRANT ALTER ROUTINE ON FUNCTION TEST TO USER_TESTER;
```

```
GRANT CREATE ANY FUNCTION TO USER_TESTER;
```

```
GRANT CREATE TEMPORARY TABLES ON DATABASE DATABASE_TEST TO USER_TESTER; 
```

```
GRANT CREATE USER ON *.* TO USER_TESTER;
```

```
GRANT CREATE TABLESPACE ON *.* TO USER_TESTER;
```

```
GRANT INDEX TO TEST_USER;
```

```
openGauss=# GRANT USAGE ON *.* TO new_user IDENTIFIED BY 'test-1234';
WARNING:  Using GRANT for creating new user is deprecatedand will be removed in future release. Create new user with CREATE USER statement.
ALTER ROLE
openGauss=# GRANT USAGE ON *.* TO new_user IDENTIFIED BY 'new_password-1234';
WARNING:  Using GRANT statement to modify existing user's password is deprecated and will be removed in future release. Use ALTER USER statement for this operation.
ALTER ROLE
```

## 相关链接<a name="section156744489391"></a>

[GRANT](../SQLReference/GRANT.md)


