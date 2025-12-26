# ogsql使用说明

## 概述

ogsql是OpenGauss oGRAC引擎提供的SQL开发者命令行工具，用于连接数据库、执行SQL语句和脚本，以及管理数据库对象。本工具支持交互式和非交互式两种使用模式。

## 命令行语法

### 基本语法

ogsql支持三种主要的使用方式：

```bash
# 方式1：显示帮助或版本信息
ogsql -h
ogsql -v

# 方式2：进入交互式模式
ogsql

# 方式3：指定登录信息和选项，可以以非交互模式执行sql语句
ogsql [ <logon> [<options>] [<start>] ]
```

### 登录信息格式

ogsql支持以下登录格式：

```
[ user [ /password ] @{host:port}[,...] ] [as sysdba]
```

以及特殊的管理员登录格式：

```
/ as { sysdba} [ host:port ]
```

其中各参数含义如下：

- **user**: 登录用户名
- **password**: 登录用户密码。如果不提供，将进入交互式输入模式（推荐出于安全考虑使用交互式输入）
- **host**: 数据库服务器IP地址，支持IPv4和IPv6
- **port**: 数据库服务器端口号
- **sysdba**: 数据库管理员身份

### 选项参数

ogsql支持以下可选选项参数：

```
[-q] [-w <timeout>] [-a] [-D "data_home_path"]
```

各选项含义：

- **-q**: 取消SSL登录认证
- **-w \<timeout>**: 客户端连接数据库的超时时间（单位：秒）
  - 默认值为60秒
  - 特殊值-1表示无限超时
  - 特殊值0表示不等待
- **-a**: 打印已执行的SQL语句
  - 可与-f参数一起使用，表示打印并执行SQL脚本文件中的SQL语句
- **-D**: 指定数据数据目录路径

### 启动选项

ogsql支持以下启动选项（同一时间只能使用其中一种）：

```
[-c "execute-sql-command"] | [-f "execute-sql-file"] | [-s "destination-file"]
```

各选项含义：

- **-c**: 执行指定的SQL语句
- **-f**: 执行指定的SQL脚本文件
- **-s**: 将命令提示符和输出重定向到指定文件

## 示例用法

### 基本登录

```bash
# 以管理员身份无密码登录
ogsql / as sysdba

# 通过IP地址和端口以指定用户登录
ogsql user/user_pwd@127.0.0.1:1611
```

### 执行SQL语句

```bash
# 登录后执行单个SQL语句\ nogsql user/user_pwd@127.0.0.1:1611 -c "SELECT 1 FROM SYS_DUMMY"

# 执行SQL脚本文件
ogsql user/user_pwd@127.0.0.1:1611 -f "/home/user/example.sql"

# 打印并执行SQL脚本文件中的语句
ogsql user/user_pwd@127.0.0.1:1611 -a -f "/home/user/example.sql"
```

### 设置连接超时

```bash
# 设置连接超时为30秒
ogsql user/user_pwd@127.0.0.1:1611 -w 30

# 设置无限超时
ogsql user/user_pwd@127.0.0.1:1611 -w -1
```

## 交互式命令

在ogsql交互式模式下，可以使用以下命令：

| 命令 | 描述 | 示例 |
|------|------|------|
| CONN | 连接到数据库 | `CONN user/password@host:port` |
| EXIT/QUIT | 退出ogsql | `EXIT` |
| SHOW | 显示系统信息 | `SHOW PARAMETERS` |
| DESC | 描述数据库对象 | `DESC table_name` |
| @file | 执行SQL脚本文件 | `@/home/user/example.sql` |
| @@file | 执行嵌套SQL脚本文件 | `@@/home/user/include.sql` |
| SPOOL | 将输出保存到文件 | `SPOOL output.txt` |
| CLEAR | 清除屏幕 | `CLEAR` |
| SET | 设置ogsql环境变量 | `SET TIMING ON` |
| COLUMN | 设置列显示格式 | `COLUMN column_name FORMAT A20` |
| WHENEVER | 错误处理设置 | `WHENEVER SQLERROR EXIT` |
| PROMPT | 显示提示信息 | `PROMPT '开始执行脚本'` |

## 参数绑定

ogsql支持在SQL语句中使用参数绑定，格式为`:参数名`。执行包含参数的SQL语句时，ogsql会提示用户输入参数值。

示例：

```sql
SELECT * FROM employees WHERE department_id = :dept_id;
```

执行时，ogsql会提示用户输入dept_id的值。

## 环境变量设置

使用SET命令可以配置ogsql的运行环境：

```sql
-- 启用执行时间统计
SET TIMING ON;

-- 启用SQL语句显示
SET ECHO ON;
```

## 输出重定向

使用SPOOL命令可以将ogsql的输出重定向到文件：

```sql
-- 开始将输出保存到文件
SPOOL output.txt;

-- 执行SQL语句
SELECT * FROM employees;

-- 停止输出重定向
SPOOL OFF;
```

## 错误处理

使用WHENEVER命令可以设置ogsql在遇到错误时的行为：

```sql
-- 遇到SQL错误时退出
WHENEVER SQLERROR EXIT;

-- 遇到SQL错误时继续执行但显示错误
WHENEVER SQLERROR CONTINUE;
```

## 元数据查询示例

以下是一些常用的元数据查询示例：

```sql
-- 查看所有用户
SELECT * FROM ADM_USERS;

-- 查看所有表
SELECT * FROM ADM_TABLES;

-- 查看表结构
DESC table_name;

-- 查看系统参数
SHOW PARAMETERS;
```
