# CREATE ROLE

## 功能说明

该语句主要用来创建数据库角色。

角色是一组权限的集合，包括对象权限和系统权限。数据库初始化完成后，系统会自动创建一组预定义角色，这些角色本质上是权限的集合，具体角色如下：

**DBA**
该角色不可删除，且具有所有的系统权限。

**RESOURCE**
拥有创建表、序列、存储过程、函数、触发器的权限。

**CONNECT**
拥有连接数据库的权限。

## 使用须知

-- 相关用户需要被授予CREATE ROLE的系统权限才可以执行本语句。
-- 角色名称不允许和数据库中已有的角色名称、用户名称重复，否则会报错。

## 语法结构

CREATE ROLE role_name [ IDENTIFIED BY password [ ENCRYPTED ]]

### 参数解释

role_name：如果角色名称包括#$_以外的空格或者特殊字符，那么角色名称应使用反引号（``）或双引号（""）括起来。
IDENTIFIED BY：创建的角色使用密码。IDENTIFIED BY后面为具体的密码内容。
password：暂未使用的预留属性。
ENCRYPTED：标识指定的密码是否为密文，如果为密文则不需要校验密码规范。
           使用ENCRYPTED创建的角色需要使用明文密码登录，因此不建议采用该种方式创建角色。

## 样例

--删除角色role_explorer。

DROP ROLE role_explorer;

--创建角色role_explorer。

CREATE ROLE role_explorer;