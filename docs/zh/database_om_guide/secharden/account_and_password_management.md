# 账号口令管理

## 确保开启密码复杂度校验

### 说明

为了保证数据库的使用安全，确保开启密码复杂度校验，在创建用户或者修改密码时校验密码复杂度。密码复杂度过低容易被猜解或暴力破解，为了密码安全性考虑，请开启密码复杂度校验。

### 实现

**检查方法:**

检查`password_policy`参数值是否为1，如果不为1则失败。

```sql
openGauss=# show password_policy;
 password_policy
-----------------
 1
(1 row)
```

**修复方法:**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_policy=1"
```

## 确保密码加密方式配置正确

### 说明

参数`password_encryption_type`用于配置数据库采用何种加密方式对用户密码进行加密存储。参数支持3种配置方式：

- 0：采用md5方式对密码加密
- 1：采用sha256和md5两种方式分别对密码加密
- 2：采用sha256方式对密码加密

md5方式已经证明不安全，不应该配置，保留仅为兼容开源第三方工具。应该配置为sha256方式（默认配置）。

### 实现

**检查方法:**

检查`password_encryption_type`参数配置，如果为0或1则失败。

```sql
openGauss=# show password_encryption_type;
 password_encryption_type
--------------------------
 2
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_encryption_type=2"
```

## 确保密码不可重用天数配置正确

### 说明

在使用`ALTER USER`或者`ALTER ROLE`修改用户密码时，参数`password_reuse_time`指定是否对新密码进行可重用天数检查。配置此参数后，密码只有超过此设置的时间后才允许被重用。在数据库使用过程中，推荐配置用户密码不可重用天数，以避免用户反复使用相同的密码导致密码被破解。

### 实现

**检查方法：**

检查`password_reuse_time`参数配置，如果值为0则失败。

```sql
openGauss=# show password_reuse_time;
 password_reuse_time
---------------------
 60
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_reuse_time=60"
```

## 确保账户自动解锁时间配置正确

### 说明

参数`password_lock_time`用于指定帐户被锁定后自动解锁的时间。参数单位为天，支持浮点数据类型，整数部分表示天数，小数部分可以换算成时、分、秒。参数值为0表示密码验证失败时，自动锁定功能不生效。为防止口令被尝试暴力破解，要求此参数设置为非0值。

### 实现

**检查方法：**

检视`password_lock_time`参数配置，如果值为0则失败。

```sql
openGauss=# show password_lock_time;
 password_lock_time
--------------------
 1d
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_lock_time=1"
```

## 确保首次登陆时修改初始用户的密码

### 说明

初始用户是权限最高、id为10的系统管理员。如果在安装数据库时未指定初始用户的密码，则默认密码为空。安装完成后首次登陆时需要修改初始用户的密码。如果初始用户密码为空并且没有被及时修改，容易引起低成本的攻击事件，也容易引起外界质疑，带来安全风险。

### 实现

**检查方法:**

执行如下SQL语句，如果显示`rolpassword`字段为空则表明检查失败。

```sql
SELECT rolpassword FROM pg_authid WHERE rolsuper=true;
```

**修复方法:**

执行如下SQL语句修改初始用户的密码。

```sql
ALTER ROLE 'rolename' PASSWORD 'xxxxxxxx';
```

## 确保配置用户的有效期限

### 说明

创建用户或角色时，使用`VALID BEGIN`关键字设置用户的有效开始时间，`VALID UNTIL`关键字设置用户的有效结束时间。如果忽略这两个关键字，则用户或角色将长期有效。数据库服务端各节点的用户过期时间以各节点操作系统的时钟为依据。为确保服务端各节点的时间一致性，建议在安装部署数据库时使用NTP（网络时间协议）。若忽略这一配置，可能存在各节点登录帐户过期时间不一致的风险。因此，建议根据业务需要合理地配置用户或角色的有效期，并及时清理无用的过期用户或角色。

### 实现

**检查方法：**

通过如下SQL语句检查是否存在未配置有效期的用户，其中，`WHERE`条件中`rolsuper=true`时表示初始用户，无需配置有效期限；以`gs_role`开头的为数据库内置角色，也无需配置有效期限。

```sql
SELECT rolname, rolvalidbegin, rolvaliduntil 
FROM pg_roles 
WHERE rolsuper=false 
AND rolname NOT LIKE 'gs_role%' 
AND (rolvalidbegin IS NULL OR rolvaliduntil IS NULL);
```

**修复方法:**

```sql
ALTER ROLE <role_name> VALID BEGIN 'yyyy-mm-dd' VALID UNTIL 'yyyy-mm-dd';
```

## 确保配置密码的有效期限

### 说明

通过`password_effect_time`参数可以配置用户登录密码的有效期，而`password_notify_time`参数则用于配置密码到期前多少天进行提醒。一旦密码达到过期提醒的时间，系统会在用户登录数据库时提示用户修改密码。建议用户定期更新密码，提升密码使用的安全性。

### 实现

**检查方法：**

检查`password_effect_time`参数配置，如果值为0则失败。

```sql
openGauss=# show password_effect_time;
 password_effect_time
----------------------
 90
(1 row)
```

**修复方法：**

```bash
gs_guc reload -Z datanode -N all -I all -c "password_effect_time=90"
```
