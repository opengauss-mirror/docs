# CREATE PROFILE 使用文档

## 功能概述

CREATE PROFILE 语句用于创建用户配置文件，用于管理数据库用户的资源限制和密码策略。配置文件可以被多个用户共享，便于统一管理用户的安全和资源使用策略。

## 语法格式

```sql
CREATE PROFILE profile_name [REPLACE] LIMIT
{
    parameter1 [ { UNLIMITED | DEFAULT | value } ]
    [ parameter2 [ { UNLIMITED | DEFAULT | value } ] ]
    ...
}
```

## 参数说明

### 基本参数

| 参数名 | 说明 |
| ------ | ---- |
| profile_name | 配置文件的名称 |
| REPLACE | 可选参数，如果指定的配置文件已存在，则替换该配置文件 |

### 参数值选项

| 选项 | 说明 |
| ---- | ---- |
| UNLIMITED | 表示无限制 |
| DEFAULT | 使用系统默认值 |
| value | 具体的数值 |

### 可配置参数列表

| 参数名 | 类型 | 默认值 | 单位 | 说明 |
| ------ | ---- | ------ | ---- | ---- |
| FAILED_LOGIN_ATTEMPTS | 整数 | 10 | 次 | 指定用户登录失败的最大尝试次数，超过该次数后账户将被锁定 |
| PASSWORD_LIFE_TIME | 整数 | 15552000 | 秒 | 指定密码的有效期，超过该时间后密码将过期，用户需要修改密码才能登录 |
| PASSWORD_REUSE_TIME | 整数 | UNLIMITED | 秒 | 指定密码重用前必须经过的天数，如果设置为整数，则必须将 PASSWORD_REUSE_MAX 设置为 UNLIMITED |
| PASSWORD_REUSE_MAX | 整数 | UNLIMITED | 次 | 指定密码重用前必须更改的次数，如果设置为整数，则必须将 PASSWORD_REUSE_TIME 设置为 UNLIMITED |
| PASSWORD_LOCK_TIME | 整数 | 86400 | 秒 | 指定账户锁定的时间长度 |
| PASSWORD_GRACE_TIME | 整数 | 604800 | 秒 | 指定密码过期后的宽限期，在此期间登录会收到警告但仍可登录 |
| SESSIONS_PER_USER | 整数 | UNLIMITED | 个 | 指定每个用户允许的最大并发会话数 |
| PASSWORD_MIN_LEN | 整数 | 8 | 字符 | 指定密码的最小长度 |

## 使用示例

### 创建基本配置文件

```sql
CREATE PROFILE app_user_profile LIMIT
    FAILED_LOGIN_ATTEMPTS 5;
```

### 替换现有配置文件

```sql
CREATE OR REPLACE PROFILE app_user_profile LIMIT
    FAILED_LOGIN_ATTEMPTS 20;
```

### 使用默认值创建配置文件

```sql
CREATE PROFILE default_profile LIMIT
    FAILED_LOGIN_ATTEMPTS DEFAULT;
```

### 创建无限制的配置文件

```sql
CREATE PROFILE unlimited_profile LIMIT
    PASSWORD_LIFE_TIME UNLIMITED;
```
