# 权限管理

## 禁止PUBLIC角色拥有pg_authid系统表的权限

### 说明

`pg_catalog`模式下的`pg_authid`系统表中包含了数据库中所有的角色信息。由于所有用户会继承`PUBLIC`角色的权限，为了防止敏感信息泄露或被更改，`PUBLIC`角色不允许拥有`pg_authid`系统表的任何权限。

### 实现

**检查方法：**

执行如下SQL语句，如果查询结果显示不为空则失败。

```sql
SELECT relname,relacl FROM pg_class WHERE relname = 'pg_authid' AND CAST(relacl AS TEXT) LIKE '%,=%}';
```

**修复方法：**

```sql
REVOKE ALL ON pg_authid FROM PUBLIC;
```

## 禁止PUBLIC角色在public模式下拥有CREATE权限

### 说明

如果PUBLIC角色在public模式下拥有CREATE权限，则任何用户都可以在public模式下创建表或者其他数据库对象，这可能导致安全风险，因为其他用户也可以查看和修改这些表和数据库对象。此外，为了解决CVE-2018-1058漏洞问题，应禁止PUBLIC角色在public模式下拥有CREATE权限。

### 实现

**检查方法：**

通过如下语句检查PUBLIC角色在public模式下是否拥有CREATE权限，如果返回`true`则表示配置失败。

```sql
SELECT CAST(has_schema_privilege('public','public','CREATE') AS TEXT);
has_schema_privilege
----------------------
false
(1 row)
```

**修复方法：**

```sql
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
```

## 禁止将对象的所有权限授予PUBLIC角色

### 说明

PUBLIC角色属于任何用户，如果将对象的所有权限授予PUBLIC角色，则任意用户都会继承此对象的所有权限，违背权限最小化原则。为了保障数据库数据的安全，此角色应该拥有尽可能少的权限，应禁止将对象的所有权限授予PUBLIC角色。

### 实现

**检查方法：**

通过如下语句检查表或视图的所有权限是否授予PUBLIC角色，如果结果不为空则失败。

```sql
SELECT relname,relacl FROM pg_class 
WHERE (CAST(relacl AS TEXT) LIKE '%,=arwdDxt/%}' OR CAST(relacl AS TEXT) LIKE '{=arwdDxt/%}') 
AND (CAST(relacl AS TEXT) LIKE '%,=APmiv/%}' OR CAST(relacl AS TEXT) LIKE '{=APmiv/%}');
```

通过如下语句检查模式的所有权限是否授予PUBLIC角色，如果结果不为空则失败。

```sql
SELECT nspname,nspacl FROM pg_namespace 
WHERE (CAST(nspacl AS TEXT) LIKE '%,=UC/%}' OR CAST(nspacl AS TEXT) LIKE '{=UC/%}') 
AND (CAST(nspacl AS TEXT) LIKE '%,=APm/%}' OR CAST(nspacl AS TEXT) LIKE '{=APm/%}');
```

通过如下语句检查函数的所有权限是否授予PUBLIC角色，如果结果不为空则失败。

```sql
SELECT proname,proacl FROM pg_proc 
WHERE (CAST(proacl AS TEXT) LIKE '%,=X/%}' OR CAST(proacl AS TEXT) LIKE '{=X/%}') 
AND (CAST(proacl AS TEXT) LIKE '%,=APm/%}' OR CAST(proacl AS TEXT) LIKE '{=APm/%}');
```

其他数据库对象的权限检查可以参考上述命令进行排查。ACL权限参数说明如下表所示。

| 参数 | 参数说明 |
| --- | --- |
| r | SELECT |
| w | UPDATE |
| a | INSERT |
| d | DELETE |
| D | TRUNCATE |
| x | REFERENCES |
| t | TRIGGER |
| X | EXECUTE |
| U | USAGE |
| C | CREATE |
| c | CONNECT |
| T | TEMPORARY |
| A | ALTER |
| P | DROP |
| m | COMMENT |
| i | INDEX |
| v | VACUUM |
| * | 给前面权限的授权选项 |

**修复方法：**

撤销PUBLIC角色拥有的表或视图的所有权限

```sql
REVOKE ALL ON <OBJECT_NAME> FROM PUBLIC;
```

撤销PUBLIC角色拥有的模式的所有权限

```sql
REVOKE ALL ON SCHEMA <OBJECT_NAME> FROM PUBLIC;
```

撤销PUBLIC角色拥有的函数的所有权限（注意函数对象名称需要包含参数）

```sql
REVOKE ALL ON FUNCTION function_name([arg_type][, ...]) FROM PUBLIC;
```

## 禁止将初始用户用于执行普通业务操作

### 说明

数据库初始用户具有数据库的最高权限，并且具有所有的系统权限和对象权限。应仅将初始用户作为DBA管理用途，禁止用于执行普通业务操作。使用初始用户执行普通业务操作，违背权限最小化原则，同时可能带来安全风险。

### 实现

**检查方法：**

通过如下语句查询初始用户当前的作业，排查是否存在非系统自动触发的普通业务操作。

```sql
SELECT s.* 
FROM pg_stat_activity as s, pg_roles as t 
WHERE s.usename = t.rolname and t.rolsuper = true;
```

**修复方法：**

检查初始用户是否用于执行普通业务操作。业务用户权限最小化，禁止使用初始用户执行普通业务操作。

## 确保使用非系统管理员执行普通业务操作

### 说明

数据库系统管理员拥有较高的数据库权限，使用系统管理员执行普通业务操作，违背权限最小化原则，同时可能带来安全风险。不要使用系统管理员执行普通业务操作。

### 实现

**检查方法：**

通过如下语句查询系统管理员当前的作业，排查是否存在非系统自动触发的普通业务操作。

```sql
SELECT s.* 
FROM pg_stat_activity as s, pg_roles as t 
WHERE s.usename = t.rolname 
AND t.rolsystemadmin = true;
```

**修复方法：**

业务用户权限最小化，创建非管理员用户并用于执行普通业务操作。

## 确保撤销普通用户非必须的管理权限

### 说明

普通用户指用于执行普通业务操作的非管理员用户。作为普通用户，不应该拥有超出其正常权限范围的管理权限，例如创建角色权限（CREATEROLE）、创建数据库权限（CREATEDB）、审计权限（AUDITADMIN）、监控权限（MONADMIN）、运维权限（OPRADMIN）、安全策略权限（POLADMIN）等。在满足正常业务需求的前提下，为了确保普通用户权限最小化，应撤销普通用户非必须的管理权限。

### 实现

**检查方法：**

以下列举的是常用的管理权限，其他管理权限的检查方法类似，请根据需要进行排查。

检查拥有CREATEROLE权限的普通用户

```sql
SELECT rolname FROM pg_roles WHERE rolcreaterole = true AND rolsuper = false;
```

检查拥有CREATEDB权限的普通用户

```sql
SELECT rolname FROM pg_roles WHERE rolcreatedb = true AND rolsuper = false;
```

检查拥有AUDITADMIN权限的普通用户

```sql
SELECT rolname FROM pg_roles WHERE rolauditadmin = true AND rolsuper = false;
```

检查拥有MONADMIN权限的普通用户

```sql
SELECT rolname FROM pg_roles WHERE rolmonitoradmin = true AND rolsuper = false;
```

检查拥有OPRADMIN权限的普通用户

```sql
SELECT rolname FROM pg_roles WHERE roloperatoradmin = true AND rolsuper = false;
```

检查拥有POLADMIN权限的普通用户

```sql
SELECT rolname FROM pg_roles WHERE rolpolicyadmin = true AND rolsuper = false;
```

**修复方法：**

撤销CREATEROLE权限

```sql
ALTER ROLE <role_name> NOCREATEROLE;
```

撤销CREATEDB权限

```sql
ALTER ROLE <role_name> NOCREATEDB;
```

撤销AUDITADMIN权限

```sql
ALTER ROLE <role_name> NOAUDITADMIN;
```

撤销MONADMIN权限

```sql
ALTER ROLE <role_name> NOMONADMIN;
```

撤销OPRADMIN权限

```sql
ALTER ROLE <role_name> NOOPRADMIN;
```

撤销POLADMIN权限

```sql
ALTER ROLE <role_name> NOPOLADMIN;
```

## 禁止PUBLIC角色执行SECURITY DEFINER类型的函数

### 说明

在创建函数时声明`SECURITY DEFINER`表示函数以创建它的用户权限执行，如果使用不当会导致函数执行者借助创建者的权限执行越权操作，所以一定确保这样的函数不被滥用。为了安全考虑，禁止`PUBLIC`角色执行`SECURITY DEFINER`类型的函数。另外需要说明的是，`SECURITY DEFINER`和`AUTHID DEFINER`的功能相同。

### 实现

**检查方法：**

执行如下SQL语句，查询非在`pg_catalog`模式下定位为`SECURITY DEFINER`类型的函数。

```sql
SELECT a.proname, b.nspname 
FROM pg_proc a, pg_namespace b 
WHERE a.pronamespace=b.oid 
AND b.nspname <> 'pg_catalog' 
AND a.prosecdef='t';
```

如果上述语句返回非空，则执行下面的SQL语句检查`PUBLIC`角色是否拥有此函数的执行权限，其中函数需要明确参数类型，必要时还需要在函数名前添加所在模式名前缀。如果返回`true`表示`PUBLIC`角色拥有此函数的执行权限，则检查结果失败。

```sql
SELECT CAST(has_function_privilege('public', 'function_name([arg_type][, ...])', 'EXECUTE') AS TEXT);
```

**修复方法：**

执行如下SQL语句撤销`PUBLIC`角色执行函数的权限，其中函数需要明确参数类型，必要时还需要在函数名前添加所在模式名前缀。

```sql
REVOKE EXECUTE ON FUNCTION function_name([arg_type][, ...]) FROM PUBLIC;
```

## 确保SECURITY INVOKER类型的函数定义符合预期

### 说明

`SECURITY INVOKER`函数是以调用它的用户的权限来执行，使用不当会导致函数创建者借助执行者的权限执行越权操作，所以在调用非自身创建的这类函数时，一定要先检查函数执行内容，避免造成函数创建者借助执行者的权限执行了越权的操作。

### 实现

**检查方法：**

1、检查普通用户或管理员执行非自身创建的`SECURITY INVOKER`函数，其中`function_name`为被检查函数名称。

```sql
SELECT prosrc FROM pg_proc WHERE proname = 'function_name' AND prosecdef = false;
```

2、检查普通用户或管理员对非自身创建的含有触发器的表执行INSERT/UPDATE/DELETE/TRUNCATE操作，其中table_name为被检查表名。

```sql
SELECT a.prosrc 
FROM pg_proc a 
INNER JOIN PG_TRIGGER c ON a.oid = c.tgfoid 
INNER JOIN PG_CLASS b ON b.oid = c.tgrelid AND b.relname = 'table_name' 
WHERE a.prosecdef = false;
```

**修复方法:**

执行函数前，检查函数执行内容，避免造成函数创建者借助执行者的权限执行了越权的操作。

## 确保开启三权分立配置

### 说明

设置参数`enableSeparationOfDuty`为`on`会开启三权分立配置，限制系统管理员的权限，系统管理员不再拥有创建用户或更改用户配置权限，并且不再拥有查看和维护数据库审计日志的权限。当开启三权分立时，建议用户关闭GUC参数`enable_copy_server_files`来控制系统管理员的copy权限，防止系统管理员通过copy命令读取或者修改用户配置文件。三权分立特性的详细说明请 参见相关产品文档。

### 实现

**检查方法：**

检查`enableSeparationOfDuty`参数值是否为`on`，如果不为on则失败。

```sql
openGauss=# show enableSeparationOfDuty;
 enableSeparationOfDuty
------------------------
on
(1 row)
```

**修复方法：**

修改参数`enableSeparationOfDuty`为`on`，然后重启数据库。修改命令如下：

```bash
gs_guc set -Z datanode -N all -I all -c "enableSeparationOfDuty = on"
gs_om -t stop && gs_om -t start
```

## 确保取消系统管理员服务端文件COPY权限

### 说明

参数`enable_copy_server_files`允许系统管理员用户执行服务端文件的COPY操作，但远程COPY操作存在越权查看或修改敏感文件的风险。在生产环境下的数据库中，通常不建议打开该配置。该参数的默认值为`off`，表示只允许初始用户执行`COPY FROM FILENAME`或`COPY TO FILENAME`语句。

### 实现

**检查方法：**

检查`enable_copy_server_files`参数值是否为`off`，如果不为off则失败。

```sql
openGauss=# show enable_copy_server_files;
 enable_copy_server_files
--------------------------
off
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "enable_copy_server_files=off"
```
