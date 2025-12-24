# REVOKE

## 功能说明

从被授权主体处回收系统权限或角色。

## 使用须知

-- 系统权限回收的执行者权限要求：
   执行 REVOKE 操作回收系统权限时，操作者需满足以下任一条件：
    曾授予对方待回收的系统权限，且授权操作附带 WITH ADMIN OPTION 属性；
    自身拥有 GRANT ANY PRIVILEGE 系统权限。

-- 角色回收的执行者权限要求：
   执行 REVOKE 操作回收角色时，操作者需满足以下任一条件：
    曾被授予该角色，且授权操作附带 WITH ADMIN OPTION 属性；
    自身拥有 GRANT ANY ROLE 系统权限；
    是该待回收角色的创建者。

-- 权限存在性校验：
   若待回收的权限或角色并未授予目标被授权主体，执行回收操作时系统会触发错误提示。

-- DBA 角色权限限制：
   DBA 角色的权限不允许回收。该角色的初始权限在数据库创建阶段即已确定，后续可新增授予权限，但已赋予的权限无法执行回收操作。

## 语法结构

-- 回收系统权限：
   REVOKE { ALL [ PRIVILEGES ] | { system_privilege_name | role_name } [ , ... ] } FROM revokee
   revokee 子句：{ user_name | role_name } [ , ... ]

-- 回收对象权限：
   回收目录对象权限：REVOKE { READ } ON DIRECTORY dir_name FROM revokee
     revokee 子句：{ user_name | role_name } [ , ... ]
   回收其他对象权限：REVOKE { ALL [ PRIVILEGES ]|{ object_privilege_name [, ...] ON [object_type] [schema_name.]object_name } } FROM revokee
     object_privilege_name子句：{ SELECT | UPDATE | DELETE | INSERT | ALTER | INDEX | EXECUTE | READ | REFERENCES } [, ... ]
     object_type子句：[ TABLE | VIEW | SEQUENCE | PACKAGE | PROCEDURE | FUNCTION ]
     revokee 子句：{ user_name | role_name } [ , ... ]

-- 回收用户INHERIT PRIVILEGES权限：
   REVOKE INHERIT PRIVILEGES ON USER user_name FROM revokee
   revokee 子句：{ user_name } [ , ... ]

### 参数解释

-- system_privilege_name：系统权限名称。当前系统支持的所有系统权限。

-- role_name：角色名称。参考 ROLE 语句的相关说明，当从用户或其他角色处回收该角色时，意味着删除被回收者（revokee）名下归属于该角色的所有权限。

-- ALL [ PRIVILEGES ]：代表全部系统权限，其中 PRIVILEGES 关键字可省略。

-- object_privilege_name：对象权限名称。

-- object_type：对象类型名称。若未指定该参数，系统将按以下优先级顺序查找对象：表、视图、序列、高级包、存储过程、函数。

-- ALL [ PRIVILEGES ]：代表全部对象权限，其中 PRIVILEGES 关键字可省略。

-- [ schema_name. ]：用户名。未指定该参数时，默认使用当前登录的用户。

-- revokee：被授权者（权限的回收对象），可以是用户或角色；单次操作可指定多个被授权者，但数量不超过 63 个。

-- user_name：被回收权限的目标用户名。

## 样例

### 将系统权限从用户wangwu收回

--删除用户wangwu

DROP USER wangwu CASCADE;

--创建用户wangwu

CREATE USER wangwu IDENTIFIED BY "8fgybjjFGgh";

--将系统权限CREATE SESSION、CREATE TABLE、CREATE ANY INDEX、CREATE USER授予用户wangwu

GRANT CREATE SESSION, CREATE TABLE, CREATE ANY INDEX, CREATE USER TO wangwu;

--从受权用户wangwu上回收系统权限CREATE USER

REVOKE CREATE USER FROM wangwu;

### 将角色从用户zhangfei收回

--删除角色role_test

DROP ROLE role_test;

--创建角色role_test

CREATE ROLE role_test;

--删除用户zhangfei

DROP USER zhangfei CASCADE;

--创建用户zhangfei，密码是"2GHjkGHyv"

CREATE USER zhangfei IDENTIFIED BY "2GHjkGHyv";

--删除用户lvbu

DROP USER lvbu CASCADE;

--创建用户lvbu

CREATE USER lvbu IDENTIFIED BY "fhghj78DC";

--将系统权限CREATE SESSION、CREATE USER、CREATE ROLE、CREATE TABLE、CREATE ANY TABLE、
CREATE ANY INDEX、DROP USER、DROP ANY ROLE、DROP ANY TABLE、DROP ANY INDEX授予角色role_test

GRANT CREATE SESSION, CREATE USER, CREATE ROLE, CREATE TABLE, CREATE ANY TABLE, CREATE
ANY INDEX, DROP USER, DROP ANY ROLE, DROP ANY TABLE, DROP ANY INDEX TO role_test;

--将角色role_test授予用户zhangfei和用户lvbu

GRANT role_test TO zhangfei, lvbu;

--从受权用户zhangfei上回收角色role_test

REVOKE role_test FROM zhangfei;