---
description: 本文介绍 openGauss mysqlclient 连接示例 的相关内容，涵盖 准备工作、Python 环境 等内容。
keywords: [openGauss, mysqlclient 连接示例, MySQL兼容, 准备工作, Python 环境]
---

# mysqlclient 连接示例

本文介绍使用 Python `mysqlclient` 驱动，通过 Dolphin MySQL protocol 连接 openGauss B 兼容数据库的基本方法。示例使用一个独立的 B 兼容数据库、schema、连接用户和业务表，便于按顺序准备环境并验证连接。

## 准备工作

### 配置 MySQL 协议兼容

请先阅读并执行本目录的[配置MySQL协议兼容](./mysql_protocol_compatibility_config.md)，完成 Dolphin 配置和 MySQL protocol listener 准备。本文使用的 listener 端口为 `3308`；如果实际配置使用其他端口，请同步替换后文的连接参数。

### 准备数据库、schema 和连接用户

以下步骤从 `postgres` 或其他非目标 B 兼容数据库执行。示例使用以下通用对象名：

| 对象 | 名称 | 用途 |
| --- | --- | --- |
| B 兼容数据库 | `proto_test_db` | openGauss 中实际创建的数据库 |
| schema | `mysql_test_db` | B 数据库中的 schema，也是 MySQL 连接参数中的 `database` |
| 连接用户 | `mysql_test_user` | 通过 MySQL native password 认证的用户 |
| 业务表 | `mysql_test_table` | 后续 Python 示例使用的测试表 |

```bash
gsql -d postgres -p 5432 -r
```

```sql
CREATE DATABASE proto_test_db DBCOMPATIBILITY 'B' ENCODING 'UTF8';
\c proto_test_db
CREATE SCHEMA mysql_test_db;
\c postgres
CREATE USER mysql_test_user WITH PASSWORD '<runtime-secret>';
\c proto_test_db
SELECT set_native_password('mysql_test_user', '<runtime-secret>', '');
ALTER SCHEMA mysql_test_db OWNER TO mysql_test_user;
```

`<runtime-secret>` 只代表运行时秘密，不要把真实密码保存到文档、代码或 Git。数据库创建时显式指定 `UTF8`，用于支持后文的中文和 emoji 示例。

如果已经按照 [配置MySQL协议兼容](./mysql_protocol_compatibility_config.md) 创建了符合要求的 B 兼容数据库，可以跳过 `CREATE DATABASE`，继续连接数据库并创建 schema。

### 创建示例业务表和初始数据

切换到业务 schema 后创建后续示例使用的表：

```sql
\c proto_test_db
SET current_schema TO mysql_test_db;
CREATE TABLE mysql_test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value TEXT,
    amount DECIMAL(8, 2),
    day DATE
);
ALTER TABLE mysql_test_table OWNER TO mysql_test_user;
INSERT INTO mysql_test_table (value, amount, day)
VALUES ('initial', 0.00, DATE '2024-01-01');
```

数据库、用户、schema 和表是一次性初始化对象。同名对象已经存在时，不要直接重复执行 `CREATE DATABASE`、`CREATE USER` 或 `CREATE SCHEMA`。如需重建测试表，请先确认当前连接的是专用测试数据库，再删除并重新创建 `mysql_test_table`。

### 配置用户兼容参数

mysqlclient 的参数绑定使用 MySQL 风格的反斜杠转义。为了让 Dolphin 会话按兼容语义解析字符串，可以只对专用于 MySQL protocol 访问的用户设置：

```sql
ALTER USER mysql_test_user SET standard_conforming_strings TO off;
```

该设置是用户级设置，不会修改全局数据库设置，并且会影响该用户创建的所有会话。修改后请关闭已有连接并重新建立连接，新的连接才会应用该设置。建议仅对专用于 mysqlclient 或其他 MySQL protocol 兼容访问的用户设置。应用该设置后，不要手工转义字符串，也不要使用 `value.replace(...)` 代替参数绑定。

## Python 环境

mysqlclient 2.2.8 需要 Python 3.10 或更高版本。以 Python 3.11 创建隔离环境：

```bash
sudo dnf install -y mariadb-connector-c-devel
python3.11 -m venv .venv
. .venv/bin/activate
python -m pip install mysqlclient==2.2.8
```

`mariadb-connector-c-devel` 提供编译 mysqlclient 所需的 MariaDB Connector/C 开发头文件和库。请从操作系统可信软件源安装该软件包；如果系统软件源没有该包，请先配置对应的 openEuler 软件源。

## 配置连接参数

在运行 Python 示例前，先根据实际环境设置连接参数。Linux shell 和 Windows PowerShell 的变量集合应保持一致。

Linux/bash：

```bash
export OG_MYSQL_HOST=127.0.0.1
export OG_MYSQL_PORT=3308
export OG_MYSQL_DB=mysql_test_db
export OG_MYSQL_USER=mysql_test_user
export OG_MYSQL_PASSWORD='<runtime-secret>'
```

Windows PowerShell：

```powershell
$env:OG_MYSQL_HOST = "127.0.0.1"
$env:OG_MYSQL_PORT = "3308"
$env:OG_MYSQL_DB = "mysql_test_db"
$env:OG_MYSQL_USER = "mysql_test_user"
$env:OG_MYSQL_PASSWORD = "<runtime-secret>"
```

## 建立连接

```python
import os
import MySQLdb

connection = MySQLdb.connect(
    host=os.environ["OG_MYSQL_HOST"],
    port=int(os.environ["OG_MYSQL_PORT"]),
    user=os.environ["OG_MYSQL_USER"],
    passwd=os.environ["OG_MYSQL_PASSWORD"],
    db=os.environ["OG_MYSQL_DB"],
    charset="utf8mb4",
)
connection.autocommit(False)
```

## 参数绑定与查询

始终使用 DB-API `%s` 占位符：

```python
with connection.cursor() as cursor:
    cursor.execute(
        "SELECT value FROM mysql_test_table WHERE id = %s",
        (1,),
    )
    row = cursor.fetchone()
```

包含 apostrophe 的值也应直接作为参数传入：

```python
with connection.cursor() as cursor:
    cursor.execute(
        "INSERT INTO mysql_test_table(value) VALUES (%s)",
        ("O'Brien",),
    )
connection.commit()
```

不要拼接用户输入，也不要手工替换引号。

## INSERT、UPDATE、DELETE 和 executemany

```python
with connection.cursor() as cursor:
    cursor.execute(
        "INSERT INTO mysql_test_table(value) VALUES (%s)",
        ("中文😀",),
    )
    cursor.execute(
        "UPDATE mysql_test_table SET value=%s WHERE id=%s",
        ("updated", 1),
    )
    cursor.execute("DELETE FROM mysql_test_table WHERE id=%s", (1,))
    cursor.executemany(
        "INSERT INTO mysql_test_table(value) VALUES (%s)",
        [("one",), ("two",)],
    )
connection.commit()
```

## 事务提交与回滚

为保证事务提交和回滚语义明确，本示例显式关闭自动提交。成功的工作显式调用 `commit()`；异常路径调用 `rollback()`。

```python
import uuid

transaction_marker = f"transaction-{uuid.uuid4().hex}"
try:
    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO mysql_test_table(value) VALUES (%s)",
            (transaction_marker,),
        )
        cursor.execute(
            "SELECT id FROM mysql_test_table WHERE value=%s",
            (transaction_marker,),
        )
        transaction_id = cursor.fetchone()[0]
        cursor.execute(
            "UPDATE mysql_test_table SET value=%s WHERE id=%s",
            ("new", transaction_id),
        )
        assert cursor.rowcount == 1
    connection.commit()
except MySQLdb.Error:
    connection.rollback()
    raise
```

## Cursor / DictCursor

除普通 `Cursor` 外，mysqlclient 提供 `DictCursor`；部分版本还提供 `SSCursor` 和 `SSDictCursor`。它们是 DB-API cursor 类型，不等同于 JDBC server-side cursor。

```python
with connection.cursor(MySQLdb.cursors.DictCursor) as cursor:
    cursor.execute("SELECT 1 AS value")
    assert cursor.fetchone()["value"] == 1
```

## 字符集、类型与异常

连接时使用 `charset="utf8mb4"`，并建议对中文、emoji、newline、tab、backslash 和 percent 等值做 round-trip 测试。合理覆盖整数、浮点、Decimal、字符、二进制和日期时间类型。

mysqlclient 异常来自 `MySQLdb.Error` 层次。Dolphin 返回的 errno 或具体子类可能与 Oracle MySQL 不同；应用应按异常类型和业务场景处理，不要硬编码所有 Oracle errno。

## 关闭资源

使用 `try/finally` 或上下文管理，先关闭 cursor，再关闭 connection：

```python
try:
    with connection.cursor() as cursor:
        cursor.execute("SELECT 1")
finally:
    connection.close()
```

## 验证结果

完成准备工作、依赖安装和连接参数配置后，可以依次执行连接、查询、参数绑定、CRUD、`executemany`、事务和 cursor 示例，确认以下结果：

- 使用 `mysql_test_user` 可以通过 MySQL protocol 连接到 `mysql_test_db`。
- 中文、emoji 和包含 apostrophe 的参数可以通过参数绑定写入并读取。
- `commit()` 和 `rollback()` 的结果符合预期。
- `DictCursor` 可以按列名读取查询结果。

| 项目 | 实测值 |
| --- | --- |
| openGauss | 7.0.0-RC3 |
| Python | 3.11.9 |
| mysqlclient | 2.2.8 |

## 常见问题

- 如果连接失败，请先确认 Dolphin MySQL protocol listener 已启动，主机、端口、用户、密码和 `database` 参数与实际配置一致。
- 如果用户设置了 `standard_conforming_strings=off` 后仍出现旧行为，请关闭已有连接并重新建立连接。
- 如果 mysqlclient 安装阶段找不到头文件或库，请确认已安装 `mariadb-connector-c-devel`，并检查 openEuler 软件源是否可用。
- 如果重复执行初始化 SQL，请先确认对象是否已经存在，避免重复创建数据库、用户或 schema。
- 存储过程调用等能力可能受 Dolphin 当前兼容范围限制，使用前请根据实际版本验证。

## 参考资料

- [配置MySQL协议兼容](./mysql_protocol_compatibility_config.md)
- [mysqlclient 官方文档](https://mysqlclient.readthedocs.io/)
- [Python DB-API 2.0](https://peps.python.org/pep-0249/)
