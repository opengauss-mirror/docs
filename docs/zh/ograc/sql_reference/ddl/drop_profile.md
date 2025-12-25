# DROP PROFILE 使用文档

## 1. 功能概述

`DROP PROFILE` 语句用于删除数据库中已存在的配置文件（Profile）。配置文件是用于管理数据库用户资源限制和密码策略的集合。

## 2. 语法格式

```sql
DROP PROFILE profile_name [CASCADE];
```

## 3. 参数说明

| 参数名 | 说明 |
|--------|------|
| profile_name | 要删除的配置文件名称。 |
| CASCADE | 可选参数。如果配置文件正在被用户使用，使用此选项会将这些用户的配置文件重置为默认配置文件，然后删除该配置文件。如果不指定此选项且配置文件正在被使用，则删除操作会失败。 |

## 4. 使用示例

### 示例 1：删除未被使用的配置文件

```sql
DROP PROFILE APP_USER_PROFILE;
```

### 示例 2：使用 CASCADE 删除正在被使用的配置文件

```sql
DROP PROFILE APP_USER_PROFILE CASCADE;
```