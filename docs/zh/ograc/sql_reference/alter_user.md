# ALTER USER 使用说明

## 功能描述

`ALTER USER` 用于对**已存在的数据库用户**进行属性调整，包括但不限于：

- 登录密码修改
- 用户账户锁定 / 解锁
- Profile 绑定变更
- 默认表空间设置

## 使用条件与限制

### 权限要求

- 修改**其他用户**的属性：需要系统权限 `ALTER USER`
- 仅修改**自身密码**：不需要该权限

### 权限生效范围

- **普通用户（具备 `ALTER USER`）**
  - 可修改非 `DBA` 角色、非 `SYS` 用户的密码
- **具备 `DBA` 角色的用户**
  - 可修改除 `SYS` 之外的所有用户密码
- **`SYS` 用户**
  - 不受限制，可修改任意用户

### 其他约束

- 目标用户不存在时，返回错误：user \<name> does not exist
- 数据库处于**重启回滚阶段**时，不支持执行该语句
- 审计日志中，SQL 语句里的密码字段将以 `*` 进行脱敏记录

## 语法格式

```sql
ALTER USER user_name
{
  IDENTIFIED BY newPassword [REPLACE oldPassword]
| PASSWORD EXPIRE
| ACCOUNT { LOCK | UNLOCK }
| PROFILE profileName
| DEFAULT TABLESPACE tableSpaceName
}
[ , ... ];
```

## 参数说明

### 用户名

- **userName**
  - 必须是数据库中已存在的用户

### 密码相关参数

- **IDENTIFIED BY**
  - 用于为用户设置新密码。

- **newPassword** 
需满足以下规则：
  - **长度要求**
    不小于所属 Profile 的 `PASSWORD_MIN_LEN`
    最大不超过 64 个字符

  - **Profile 同步校验**
    若同时修改 `PASSWORD_MIN_LEN`，以修改后的值为准

  - **字符规则**
    未使用单引号时，首字符必须为字母、`#` 或 `_`
    不得与用户名或其倒序相同（忽略大小写）

  - **复杂度要求**
    至少满足以下 **3 类**字符：
      - 数字
      - 小写字母
      - 大写字母
      - 空格或特殊字符

  - **特殊字符处理**
    含空格或 `_`、`#`、`$` 以外的特殊字符时，需使用单引号

  - **新旧密码差异**
    新密码与旧密码至少有 **2 个字符位不同**

  - **ctsql 特殊说明**
    密码中包含 `$` 时，需使用 `\` 转义

- **REPLACE oldPassword**

  - **未指定 `REPLACE`**
    不校验旧密码

  - **指定 `REPLACE`**
    必须提供正确的旧密码

  - **参数限制**
    当 `REPLACE_PASSWORD_VERIFY=TRUE` 时，普通用户修改密码必须使用 `REPLACE`

### 账户与属性控制

- **PASSWORD EXPIRE**
  - 将用户密码设置为过期状态
  - 用户下次登录时需修改密码（ctsql 会提示）

- **ACCOUNT LOCK**
  - 锁定用户账户，禁止登录

- **ACCOUNT UNLOCK**
  - 解锁用户账户，恢复登录能力

- **PROFILE profileName**
  - 为用户指定一个已存在的 Profile

- **DEFAULT TABLESPACE tableSpaceName**
  - 设置用户默认表空间

## 可用特殊字符列表

- **常用符号**  
  `` ` ~ ! @ # $ % ^ ``

- **运算与连接符**  
  `` & * ( ) - _ = + ``

- **分隔与结构符**  
  `` [ ] { } | : ' " ``

- **比较与路径符**  
  `` < > . , / ? ``

---

## 示例

### 创建用户并指定初始密码

```sql
CREATE USER userName IDENTIFIED BY oldPassword;
```

### 修改密码并校验旧密码

```sql
ALTER USER userName IDENTIFIED BY newPassword REPLACE oldPassword;
```

### 锁定用户

```sql
ALTER USER userName ACCOUNT LOCK;
```

### 解锁用户

```sql
ALTER USER userName ACCOUNT UNLOCK;
```

### 设置密码过期

```sql
ALTER USER userName PASSWORD EXPIRE;
```
