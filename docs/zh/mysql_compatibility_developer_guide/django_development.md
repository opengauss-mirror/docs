---
description: 本文介绍 openGauss Django 连接示例 的相关内容，涵盖 准备工作、Django 项目搭建 等内容。
keywords: [openGauss, Django 连接示例, MySQL兼容, 准备工作, Django 项目搭建]
---

# Django 连接示例

openGauss 完成 MySQL 协议兼容配置后，即可使用 Django ORM 配合 MySQL Python 驱动连接 openGauss B 兼容模式数据库。

## 准备工作

> ### 前置条件：已完成 MySQL 协议兼容配置
> 请先参考《[配置 MySQL 协议兼容](mysql_protocol_compatibility_config.md)》完成服务端准备，再继续本文后续步骤，至少包括：
> 1. 开启 `enable_dolphin_proto`，配置 `dolphin_server_port`（本文示例为 `3308`）；
> 2. 创建 B 兼容物理数据库（本文示例为 `proto_test_db`）；
> 3. 设置 `dolphin.default_database_name` 为该 B 库名。该参数为空时，Dolphin 握手会直接拒绝连接，Django / PyMySQL 无法建立会话。
>
> 说明：PyMySQL / Django 配置中的 `NAME` 对应的是上述物理 B 库中的 **schema**（本文示例为 `mysql_test_db`），不是 `dolphin.default_database_name` 指向的物理库名。

### 准备业务表结构

1. 通过 openGauss 命令行工具 gsql 连接 openGauss 数据库

```bash
gsql -d postgres -p 5432 -r
```

2. 切换至 MySQL 协议兼容配置的 B 库下

```sql
\c proto_test_db
```

3. 创建 MySQL 连接串中指定的 database。在 B 库下，openGauss 的 schema 等价于 MySQL 的 database

```sql
CREATE SCHEMA mysql_test_db;
```

4. 切换 schema，并创建业务表结构

```sql
SET current_schema to mysql_test_db;

CREATE TABLE `user` (
    `id`      INT AUTO_INCREMENT PRIMARY KEY,
    `name`    VARCHAR(50)  NOT NULL COMMENT '用户名',
    `age`     INT COMMENT '年龄'
) DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`name`, `age`) VALUES
    ('张三',  18),
    ('李四',  19),
    ('王五',  20);
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
alter schema mysql_test_db owner to mysql_test_db;
```

6. 赋予用户所有历史表的操作权限

```sql
GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db to mysql_test_db;
GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db to mysql_test_db;
```

7. 退出 gsql 连接

```sql
\q
```

### 配置客户端接入认证

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"
gs_om -t restart
```

单机 simpleInstall 场景可直接编辑数据目录下 `pg_hba.conf` 后执行 `gs_ctl reload`。

### Dolphin 参数配置

1. 确认握手使用的默认物理 B 库。若尚未在协议兼容配置中设置，请先执行（改完后需重启或按官方说明使 GUC 生效）：

```sql
ALTER SYSTEM SET dolphin.default_database_name TO proto_test_db;
```

`dolphin.default_database_name` 必须指向实际 B 兼容物理数据库名；为空时 Dolphin 握手失败，客户端在进入 Django 初始化前就会连不上。

2. Django 连接时会查询系统表获取表结构等信息，建议再为业务用户设置：

```sql
\c proto_test_db
alter user mysql_test_db set dolphin.sql_mode = 'sql_mode_strict,no_zero_date,block_return_multi_results,error_for_division_by_zero,escape_quotes,disable_escape_bytea';
alter user mysql_test_db set dolphin.lower_case_table_names = 1;
```

## Django 项目搭建

### 创建虚拟环境并安装依赖

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install "Django>=4.2,<5.1" PyMySQL cryptography
# 可选：pip install mysqlclient
```

### 项目目录参考

```text
django-connect-opengauss-b
├── manage.py
├── pymysql_bootstrap.py
├── requirements.txt
├── config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── demo_app
│   ├── models.py
│   └── apps.py
└── scripts
    └── run_demo.py
```

### 注册 PyMySQL（若使用 PyMySQL）

创建 `pymysql_bootstrap.py`（与 examples 工程一致，含 openGauss `VERSION()` 兼容）：

```python
import pymysql

pymysql.install_as_MySQLdb()

# Handshake version used by dolphin (plugin_protocol/dqformat.cpp).
_OPENGAUSS_MYSQL_VERSION = (8, 0, 28)


def _install_opengauss_version_compat():
    try:
        from django.db.backends.mysql.base import DatabaseWrapper
        from django.utils.functional import cached_property
    except Exception:
        return

    orig = DatabaseWrapper.mysql_version.func

    def mysql_version(self):
        try:
            return orig(self)
        except Exception:
            info = getattr(self, "mysql_server_info", "") or ""
            if "opengauss" in info.lower():
                return _OPENGAUSS_MYSQL_VERSION
            raise

    DatabaseWrapper.mysql_version = cached_property(mysql_version)
    DatabaseWrapper.mysql_version.__set_name__(DatabaseWrapper, "mysql_version")


_install_opengauss_version_compat()
```

在 `manage.py` / `settings.py` 导入前加载该模块（`import pymysql_bootstrap`）。Django 4.2/5.0 会执行 `SELECT VERSION()` 并从返回串开头解析版本；Dolphin 返回 openGauss banner 时需上述 bootstrap，否则连接初始化会失败。

### 配置 settings.py

推荐使用原生 Django MySQL Backend：

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "mysql_test_db",
        "USER": "mysql_test_db",
        "PASSWORD": "******",
        "HOST": "127.0.0.1",
        "PORT": "3308",  # dolphin_server_port
        "OPTIONS": {
            "charset": "utf8mb4",
            # 与 Dolphin 字符串解析一致，避免 PyMySQL 将单引号编码为 \' 导致语法错误
            "sql_mode": "NO_BACKSLASH_ESCAPES",
        },
    }
}
```

说明：

- `NAME` 填写 B 库中的 schema（示例 `mysql_test_db`）；物理库由服务端 `dolphin.default_database_name`（示例 `proto_test_db`）决定，二者不要混用。
- openGauss 无真实 MySQL 存储引擎；服务端对 `@@default_storage_engine` 固定返回 `InnoDB`（仅允许 SET 为 `InnoDB`），以便 Django 初始化探测通过。
- `OPTIONS.sql_mode` 需设置 `NO_BACKSLASH_ESCAPES`，与 Dolphin 字符串解析保持一致，避免含单引号/反斜杠的业务字符串写入失败。

### 创建模型

```python
from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    age = models.IntegerField(null=True, blank=True)

    class Meta:
        db_table = "user"
        managed = False
```

## Django 数据库操作示例

```python
from demo_app.models import User

print("=== 查询所有用户 ===")
for u in User.objects.all().order_by("id"):
    print(u)

print("=== 新增用户 ===")
created = User(name="zhaoliu", age=18)
created.save()

print("=== 特殊字符读写 ===")
special = User(name="O'Brien\\test", age=99)
special.save()
assert User.objects.get(pk=special.pk).name == special.name

print("=== 模糊查询 ===")
qs = User.objects.filter(name__icontains="zhao")
for x in qs:
    print(x)
assert qs.filter(pk=created.pk).exists(), "本次创建记录应出现在 icontains 结果中"

created.name = "zhaoliuliuliu"
created.age = 28
created.save()
assert User.objects.get(pk=created.pk).name == "zhaoliuliuliu"
deleted, _ = User.objects.filter(pk=created.pk).delete()
assert deleted == 1 and not User.objects.filter(pk=created.pk).exists()
User.objects.filter(pk=special.pk).delete()

print("=== 查询所有用户 ===")
for u in User.objects.all().order_by("id"):
    print(u)
```

### 示例运行日志

```text
=== 查询所有用户 ===
User{id=1, name='张三', age=18}
User{id=2, name='李四', age=19}
User{id=3, name='王五', age=20}
=== 新增用户 ===
...
=== 删除用户 ===
...
=== 查询所有用户 ===
User{id=1, name='张三', age=18}
User{id=2, name='李四', age=19}
User{id=3, name='王五', age=20}
```

## 注意事项

1. 必须使用 dolphin MySQL 协议端口，不是 openGauss 默认 port。
2. 必须设置 `dolphin.default_database_name` 为实际 B 兼容物理库名；`DATABASES.NAME` 仍为该库中的 schema。
3. 不支持存储过程；避免依赖 server-side cursor。
4. SSL：客户端需支持 TLS 1.2，或关闭 SSL。
5. 与 `django_opengauss`（PostgreSQL 协议）是不同路径，勿混淆。
