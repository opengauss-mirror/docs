---
description: 本文介绍 openGauss PyMySQL 连接示例 的相关内容，涵盖 准备工作、PyMySQL 项目搭建 等内容。
keywords: [openGauss, PyMySQL 连接示例, MySQL兼容, 准备工作, PyMySQL 项目搭建]
---

# PyMySQL 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 PyMySQL 库连接 openGauss B 兼容模式数据库。

## 准备工作

### 准备业务表结构

1. 通过 openGauss 命令行工具 gsql 连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

3. 创建 PyMySQL 连接串中指定的 database。在 B 库下，openGauss 的 schema 等价于 MySQL 的 database

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. 切换 schema，并创建业务表结构

   ```sql
   SET current_schema to mysql_test_db;

   CREATE TABLE `user` (
       `id`   INT AUTO_INCREMENT PRIMARY KEY,
       `name` VARCHAR(50)  NOT NULL COMMENT '用户名',
       `age`  INT COMMENT '年龄'
   ) DEFAULT CHARSET=utf8mb4;

   INSERT INTO `user` (`name`, `age`) VALUES
       ('张三', 18),
       ('李四', 19),
       ('王五', 20);
   ```

5. 退出 gsql 连接

   ```sql
   \q
   ```

### 准备连接用户

1. 通过 gsql 命令，重新连接 openGauss 数据库

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 创建与业务表所在 schema 同名的用户

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   ```

   > [!TIP]须知
   > 不要在 schema 所在 B 库下创建同名用户，会创建失败。

3. 切换至 MySQL 协议兼容配置的 B 库下

   ```sql
   \c proto_test_db
   ```

4. 新用户设置 MySQL native 密码

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   ```

5. 修改业务表所在 schema 的所属用户

   ```sql
   ALTER SCHEMA mysql_test_db OWNER TO mysql_test_db;
   ```

6. 赋予用户所有历史表的操作权限

   ```sql
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db TO mysql_test_db;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db TO mysql_test_db;
   ```

7. 退出 gsql 连接

   ```sql
   \q
   ```

### 配置客户端接入认证

openGauss 需配置客户端接入认证后，才允许通过指定用户远程连接数据库，否则连接会报错。配置方式如下：

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"

gs_om -t restart
```

更多详细内容请参考[配置客户端接入认证](https://docs.opengauss.org/zh/docs/7.0.0/database_administration_guide/configuring_client_access_authentication.html)。

## PyMySQL 项目搭建

### 安装 PyMySQL

```bash
pip install pymysql
```

### 项目目录参考

```
pymysql-connect-opengauss-b/
└── pymysql_connect_demo.py    # 主程序/示例代码
```

### 连接配置

PyMySQL 通过 dolphin 插件的 MySQL 协议端口（默认 3308）连接 openGauss B 兼容数据库：

```python
import pymysql

conn = pymysql.connect(
    host='127.0.0.1',
    port=3308,                  # dolphin MySQL 协议端口，非原生 5432
    user='mysql_test_db',
    password='******',
    database='mysql_test_db',   # 对应 openGauss 中的 schema 名
    charset='utf8mb4',
    init_command="SET sql_mode='NO_BACKSLASH_ESCAPES'"  # 必须：使反斜杠按字面字符处理，避免特殊字符写入异常
)
```

> [!TIP]须知
> `init_command` 用于连接建立后立即执行 `SET sql_mode='NO_BACKSLASH_ESCAPES'`，使字符串参数中的反斜杠（`\`）按字面字符处理，而不是作为转义符。若省略该参数，写入含反斜杠或单引号的字符串（如 Windows 路径、`O'Brien` 这类姓名）可能出现语法错误或内容被截断。

### 特殊字符往返示例

```python
import pymysql

conn = pymysql.connect(
    host='127.0.0.1', port=3308,
    user='mysql_test_db', password='******',
    database='mysql_test_db', charset='utf8mb4',
    init_command="SET sql_mode='NO_BACKSLASH_ESCAPES'"
)

with conn.cursor() as cur:
    special_str = "C:\\path\\to\\file O'Brien"
    cur.execute("INSERT INTO `user`(name, age) VALUES (%s, %s)", (special_str, 30))
    conn.commit()
    sid = cur.lastrowid
    cur.execute("SELECT name FROM `user` WHERE id=%s", (sid,))
    row = cur.fetchone()
    assert row[0] == special_str, f"特殊字符往返失败: {row[0]!r} != {special_str!r}"
    print(f"特殊字符往返验证通过：{row[0]}")

conn.close()
```

预期输出：

```
特殊字符往返验证通过：C:\path\to\file O'Brien
```

> [!TIP]须知
> PyMySQL 在拼接参数化 SQL 时，是否需要对字符串中的反斜杠做转义，取决于其连接对象内部缓存的 `server_status` 状态位（`SERVER_STATUS_NO_BACKSLASH_ESCAPES`），具体实现见 `pymysql.connections.Connection.escape_string()`。这个状态位由服务端在握手、认证成功、以及每次查询响应（OK/EOF 包）中返回，**由服务端决定，客户端无法单方面覆盖**。
>
> 示例中的 `init_command="SET sql_mode='NO_BACKSLASH_ESCAPES'"` 只是让服务端执行了这条 SQL、切换了 openGauss 的 `sql_mode`；PyMySQL 客户端要正确匹配这一行为（不再对反斜杠转义），还依赖 dolphin 插件在随后的协议包中把这个状态位如实同步回来。若 dolphin 插件存在 HandshakeV10、认证 OK、普通 OK、EOF 四类协议包 `server_status` 不同步的问题（对应 Plugin #2522 修复前的版本），PyMySQL 仍可能按“需要转义反斜杠”的旧状态处理参数，导致本示例中的特殊字符往返失败。
>
> 因此，**本示例正确工作依赖 Plugin #2522 中“统一四类协议包 `server_status` 状态位”的修复**：客户端设置的 `init_command` 与 Plugin 侧的状态位同步修复缺一不可。

## PyMySQL 数据库操作示例

### 示例代码

```python
import pymysql

conn = pymysql.connect(
    host='127.0.0.1',
    port=3308,
    user='mysql_test_db',
    password='******',
    database='mysql_test_db',
    charset='utf8mb4',
    init_command="SET sql_mode='NO_BACKSLASH_ESCAPES'"
)

try:
    with conn.cursor() as cur:
        # 查询所有用户
        print("=== 查询所有用户 ===")
        cur.execute("SELECT id, name, age FROM `user`")
        for row in cur.fetchall():
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

        # 新增用户
        print("=== 新增用户 ===")
        cur.execute(
            "INSERT INTO `user`(name, age) VALUES (%s, %s)",
            ('zhaoliu', 18)
        )
        conn.commit()
        uid = cur.lastrowid   # 立即保存本次新增记录的主键，后续操作全部以此为准
        print(f"新增行数：{cur.rowcount}，新增记录 id={uid}")

        # 模糊查询（仅用于展示/验证本次新增记录确实位于结果集中，不用于定位待操作记录）
        print("=== 模糊查询用户名包含zhao的用户 ===")
        cur.execute(
            "SELECT id, name, age FROM `user` WHERE name LIKE %s",
            ('%zhao%',)
        )
        zhao_users = cur.fetchall()
        for row in zhao_users:
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")
        assert uid in [row[0] for row in zhao_users], "新增记录未出现在模糊查询结果中"

        # 更新用户（严格按本次新增记录的 uid 执行，不依赖模糊查询结果）
        print("=== 更新用户信息 ===")
        cur.execute(
            "UPDATE `user` SET name=%s, age=%s WHERE id=%s",
            ('zhaoliuliuliu', 28, uid)
        )
        conn.commit()
        assert cur.rowcount == 1, f"预期更新 1 行，实际 {cur.rowcount} 行"
        print(f"更新行数：{cur.rowcount}")

        # 根据ID查询
        print("=== 根据ID查询用户 ===")
        cur.execute("SELECT id, name, age FROM `user` WHERE id=%s", (uid,))
        row = cur.fetchone()
        print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

        # 删除用户（同样严格按 uid 执行）
        print("=== 删除用户 ===")
        cur.execute("DELETE FROM `user` WHERE id=%s", (uid,))
        conn.commit()
        assert cur.rowcount == 1, f"预期删除 1 行，实际 {cur.rowcount} 行"
        print(f"删除行数：{cur.rowcount}")

        # 查询所有用户
        print("=== 查询所有用户 ===")
        cur.execute("SELECT id, name, age FROM `user`")
        for row in cur.fetchall():
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

finally:
    conn.close()
```

### 示例运行日志

```
=== 查询所有用户 ===
User{id=1, name='张三', age=18}
User{id=2, name='李四', age=19}
User{id=3, name='王五', age=20}
=== 新增用户 ===
新增行数：1，新增记录 id=4
=== 模糊查询用户名包含zhao的用户 ===
User{id=4, name='zhaoliu', age=18}
=== 更新用户信息 ===
更新行数：1
=== 根据ID查询用户 ===
User{id=4, name='zhaoliuliuliu', age=28}
=== 删除用户 ===
删除行数：1
=== 查询所有用户 ===
User{id=1, name='张三', age=18}
User{id=2, name='李四', age=19}
User{id=3, name='王五', age=20}
```
