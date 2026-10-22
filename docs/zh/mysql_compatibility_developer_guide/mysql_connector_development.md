---
description: 本文介绍 openGauss mysql-connector-python 连接示例 的相关内容，涵盖 准备工作、mysql-connector-python 项目搭建 等内容。
keywords: [openGauss, mysql-connector-python 连接示例, MySQL兼容, 准备工作, mysql-connector-python 项目搭建]
---

# mysql-connector-python 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 mysql-connector-python 库连接 openGauss B 兼容模式数据库。

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

3. 创建 mysql-connector-python 连接串中指定的 database。在 B 库下，openGauss 的 schema 等价于 MySQL 的 database

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

更多详细内容请参考[配置客户端接入认证](https://docs.opengauss.org/zh/docs/latest/database_administration_guide/configuring_client_access_authentication.html)。

## mysql-connector-python 项目搭建

### 安装 mysql-connector-python

```bash
pip install mysql-connector-python==8.0.33
```

> [!TIP]须知
> 推荐使用 8.0.x 版本。mysql-connector-python 9.x 对应 MySQL 9.0，该版本移除了 `mysql_native_password` 认证插件，与 openGauss dolphin 插件存在兼容性问题。

### 项目目录参考

```
mysql-connector-connect-opengauss-b/
└── connector_connect_demo.py    # 主程序/示例代码
```

### 连接配置

与标准 MySQL 连接相比，连接 openGauss dolphin 插件时须额外指定以下四个参数：

```python
import mysql.connector

conn = mysql.connector.connect(
    host='127.0.0.1',
    port=3308,                            # dolphin MySQL 协议端口，非原生 5432
    user='mysql_test_db',
    password='******',
    database='mysql_test_db',             # 对应 openGauss 中的 schema 名
    charset='utf8mb4',
    collation='utf8mb4_general_ci',       # 必须指定，openGauss 不支持默认的 utf8mb4_0900_ai_ci
    auth_plugin='mysql_native_password',  # 必须指定，不支持 caching_sha2_password
    use_pure=True,                        # 必须指定，C 扩展与 dolphin 认证不兼容
    sql_mode='NO_BACKSLASH_ESCAPES',      # 必须指定，openGauss 反斜杠不作转义字符，需与客户端转义方式保持一致
)
```

> [!TIP]须知
> `collation`、`auth_plugin`、`use_pure`、`sql_mode` 四个参数缺一不可，否则连接将失败或出现转义不一致问题。

## mysql-connector-python 数据库操作示例

### 示例代码

```python
import mysql.connector

conn = mysql.connector.connect(
    host='127.0.0.1',
    port=3308,
    user='mysql_test_db',
    password='******',
    database='mysql_test_db',
    charset='utf8mb4',
    collation='utf8mb4_general_ci',
    auth_plugin='mysql_native_password',
    use_pure=True,
    sql_mode='NO_BACKSLASH_ESCAPES',
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
        uid = cur.lastrowid  # 保存本次插入记录的真实主键，后续操作严格按该 ID 执行
        print(f"新增行数：{cur.rowcount}，新增记录 id={uid}")

        # 模糊查询（仅用于展示，不用于定位记录）
        print("=== 模糊查询用户名包含zhao的用户 ===")
        cur.execute(
            "SELECT id, name, age FROM `user` WHERE name LIKE %s",
            ('%zhao%',)
        )
        zhao_users = cur.fetchall()
        for row in zhao_users:
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")
        assert uid in {row[0] for row in zhao_users}, "本次新增记录未出现在模糊查询结果中"

        # 更新用户（严格按本次新增记录的 uid 执行）
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

        # 特殊字符参数往返校验（依赖上方连接配置里的 sql_mode='NO_BACKSLASH_ESCAPES'）
        print("=== 特殊字符往返校验 ===")
        special_name = "O'Brien\\Test"  # 含单引号和反斜杠
        cur.execute(
            "INSERT INTO `user`(name, age) VALUES (%s, %s)",
            (special_name, 30)
        )
        conn.commit()
        special_uid = cur.lastrowid

        cur.execute("SELECT name FROM `user` WHERE id=%s", (special_uid,))
        row = cur.fetchone()
        assert row[0] == special_name, f"往返读取不一致：期望 {special_name!r}，实际 {row[0]!r}"
        print(f"往返校验通过：{row[0]!r}")

        cur.execute("DELETE FROM `user` WHERE id=%s", (special_uid,))
        conn.commit()

        # 查询所有用户
        print("=== 查询所有用户 ===")
        cur.execute("SELECT id, name, age FROM `user`")
        for row in cur.fetchall():
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

finally:
    conn.close()
```

### 示例运行日志

> [!TIP]须知
> 以下日志假设表中初始为 id 1~3 三条记录，本次新增用户 id=4、特殊字符校验记录 id=5（校验后已删除）。请以实际环境跑出来的日志为准，不要直接照抄。

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
=== 特殊字符往返校验 ===
往返校验通过：'O\'Brien\\Test'
=== 查询所有用户 ===
User{id=1, name='张三', age=18}
User{id=2, name='李四', age=19}
User{id=3, name='王五', age=20}
```
