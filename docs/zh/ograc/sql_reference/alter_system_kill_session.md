# ALTER SYSTEM KILL SESSION

#### 功能描述

终止指定数据库会话连接。

#### 注意事项

- **权限要求**：执行此操作需要拥有 `ALTER SYSTEM` 系统权限。

- **限制**：
  
  - 无法终止当前登录的自身会话。
  
  - 无法终止系统保留的核心会话。

#### 使用格式

```
ALTER SYSTEM KILL SESSION 'session_id,serial#';
```

#### 参数说明

| 参数           | 说明         |
| ------------ | ---------- |
| `session_id` | 会话标识符（SID） |
| `serial#`    | 会话序列号      |

#### 示例

准备工作：

```
-- 删除用户（如果存在）
DROP USER DDMUSER CASCADE;

-- 创建用户
CREATE USER DDMUSER IDENTIFIED BY password;

-- 授予基本权限
GRANT CONNECT, RESOURCE TO DDMUSER;

-- 授予会话查看权限
GRANT SELECT ON DV_SESSIONS TO DDMUSER;

-- 授予会话终止权限
GRANT ALTER SYSTEM TO DDMUSER;
```

连接数据库进程：

```
-- 使用DDMUSER连接数据库
conn DDMUSER/password@127.0.0.1:1611

-- 查询DDMUSER用户的会话信息
SELECT SID, SPID, SERIAL#, USERNAME, CLIENT_IP FROM DV_SESSIONS WHERE USERNAME = 'DDMUSER';
SID          SPID        SERIAL#      USERNAME                                                         CLIENT_IP                                                       
------------ ----------- ------------ ---------------------------------------------------------------- ----------------------------------------------------------------
130          639782      185          DDMUSER                                                          127.0.0.1                                                       
174          637288      184          DDMUSER                                                          127.0.0.1                                                       

2 rows fetched.
```

终止指定的非当前会话：

```
ALTER system kill session '174,184';
```

如果尝试执行结束当前会话会失败，错误信息：The current session cannot be killed。
