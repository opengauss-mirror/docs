# Peewee 连接示例

openGauss 完成 MySQL 协议兼容配置后，可以使用 Python ORM 框架 Peewee 配合 PyMySQL 驱动连接 openGauss B 兼容模式数据库。

## 准备工作

### 准备数据库和连接用户

1. 通过 gsql 连接 openGauss 数据库。

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. 创建 UTF8 编码的 B 兼容模式数据库。已存在符合要求的 B 库时可以跳过该步骤。

   ```sql
   CREATE DATABASE proto_test_db DBCOMPATIBILITY 'B' ENCODING 'UTF8';
   ```

3. 在非 B 库中创建连接用户，然后切换到 B 库。

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   \c proto_test_db
   ```

4. 创建与 PyMySQL `database` 参数对应的 schema，并将其所有者设置为连接用户。在 B 库中，openGauss 的 schema 等价于 MySQL 的 database。

   ```sql
   CREATE SCHEMA mysql_test_db AUTHORIZATION mysql_test_db;
   ```

5. 为连接用户设置 MySQL native 密码。MySQL native 密码用于 MySQL 协议认证，与 openGauss 登录密码用途不同。

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   ```

6. PyMySQL 默认使用反斜杠转义。为使服务端字符串解析方式与驱动一致，可以为连接用户设置以下参数，并在修改后重新建立连接。

   ```sql
   ALTER USER mysql_test_db SET standard_conforming_strings TO off;
   ```

7. 确认 Dolphin 扩展已加载。

   ```sql
   SELECT extname, extversion
   FROM pg_extension
   WHERE extname = 'dolphin';
   ```

8. 退出 gsql。

   ```sql
   \q
   ```

### 配置 MySQL 协议和客户端认证

按照[配置MySQL协议兼容](./mysql_protocol_compatibility_config.md)完成 Dolphin MySQL 协议配置，并确认：

- `enable_dolphin_proto` 已开启；
- `dolphin_server_port` 已设置为未被占用的端口，例如 3308；
- `dolphin.default_database_name` 指向 `proto_test_db`；
- 监听地址、防火墙和客户端认证规则允许应用主机接入。

配置客户端认证时应使用实际客户端地址，并尽量缩小网段范围。例如：

```bash
gs_guc set -D /opt/gauss/data/dn1 \
    -h "host proto_test_db mysql_test_db 192.168.1.10/32 sha256"
gs_ctl reload -D /opt/gauss/data/dn1
```

> [!NOTE]说明
> 数据目录和实例管理命令需要根据实际部署方式调整。请勿在生产环境中使用不受限制的 `0.0.0.0/0` 认证规则。

## 安装 Python 依赖

建议使用虚拟环境隔离项目依赖。以下示例使用 Python 3.10、Peewee 4.3.0 和 PyMySQL 1.2.0。

```bash
python -m venv .venv
```

Windows PowerShell：

```powershell
.\.venv\Scripts\Activate.ps1
python -m pip install peewee==4.3.0 PyMySQL==1.2.0
```

Linux：

```bash
source .venv/bin/activate
python -m pip install peewee==4.3.0 PyMySQL==1.2.0
```

## 配置连接参数

不要在代码或版本库中保存真实密码。可以通过环境变量传递连接信息。

Linux：

```bash
export OG_MYSQL_HOST=127.0.0.1
export OG_MYSQL_PORT=3308
export OG_MYSQL_DB=mysql_test_db
export OG_MYSQL_USER=mysql_test_db
read -s -p "MySQL native password: " OG_MYSQL_PASSWORD
export OG_MYSQL_PASSWORD
```

Windows PowerShell：

```powershell
$env:OG_MYSQL_HOST='127.0.0.1'
$env:OG_MYSQL_PORT='3308'
$env:OG_MYSQL_DB='mysql_test_db'
$env:OG_MYSQL_USER='mysql_test_db'
$securePassword=Read-Host 'MySQL native password' -AsSecureString
$env:OG_MYSQL_PASSWORD=[Net.NetworkCredential]::new('', $securePassword).Password
Remove-Variable securePassword
```

使用 Peewee 的 `MySQLDatabase` 建立连接：

```python
import os

from peewee import MySQLDatabase


required_variables = (
    'OG_MYSQL_HOST',
    'OG_MYSQL_PORT',
    'OG_MYSQL_DB',
    'OG_MYSQL_USER',
    'OG_MYSQL_PASSWORD',
)
missing = [name for name in required_variables if not os.environ.get(name)]
if missing:
    raise RuntimeError(f'缺少环境变量: {", ".join(missing)}')

db = MySQLDatabase(
    os.environ['OG_MYSQL_DB'],
    host=os.environ['OG_MYSQL_HOST'],
    port=int(os.environ['OG_MYSQL_PORT']),
    user=os.environ['OG_MYSQL_USER'],
    password=os.environ['OG_MYSQL_PASSWORD'],
    charset='utf8mb4',
    connect_timeout=10,
)
```

`OG_MYSQL_DB` 表示 B 兼容数据库中的业务 schema，不是 `dolphin.default_database_name` 指定的 openGauss 物理数据库。

## 定义模型

```python
from datetime import datetime
from decimal import Decimal

from peewee import (
    AutoField,
    CharField,
    DateTimeField,
    DecimalField,
    IntegerField,
    Model,
)


class BaseModel(Model):
    class Meta:
        database = db


class Account(BaseModel):
    id = AutoField()
    username = CharField(max_length=50, unique=True)
    age = IntegerField(default=0)
    balance = DecimalField(
        max_digits=10,
        decimal_places=2,
        default=Decimal('0.00'),
    )
    created_at = DateTimeField(default=datetime.now)

    class Meta:
        table_name = 'peewee_account'
```

常用字段映射如下：

| Peewee 字段 | openGauss B 兼容模式字段 |
|---|---|
| `AutoField` | 自增整型主键 |
| `CharField` | `varchar` |
| `TextField` | `text` |
| `IntegerField` | `integer` |
| `BigIntegerField` | `bigint` |
| `DecimalField` | `decimal(p,s)` |
| `BooleanField` | `boolean` |
| `DateTimeField` | `timestamp` |
| `BlobField` | 二进制大对象 |

## 执行数据库操作

### 创建表

```python
db.connect(reuse_if_open=True)
db.create_tables([Account])
```

### 插入数据

```python
alice = Account.create(
    username='alice',
    age=18,
    balance=Decimal('100.50'),
)
print(alice.id)

inserted = (
    Account
    .insert_many([
        {'username': 'bob', 'age': 20, 'balance': Decimal('80.00')},
        {'username': 'carol', 'age': 22, 'balance': Decimal('120.00')},
    ])
    .as_rowcount()
    .execute()
)
print(inserted)
```

Peewee 的 MySQL 后端默认可能返回最后插入的 ID。需要批量插入影响行数时，应使用 `.as_rowcount()`。

### 查询、更新和删除

```python
accounts = (
    Account
    .select()
    .where(Account.age >= 18)
    .order_by(Account.id)
)
for account in accounts:
    print(account.id, account.username, account.balance)

updated = (
    Account
    .update(balance=Decimal('110.00'))
    .where(Account.username == 'alice')
    .execute()
)
print(updated)

deleted = (
    Account
    .delete()
    .where(Account.username == 'carol')
    .execute()
)
print(deleted)
```

### 使用事务

```python
try:
    with db.atomic():
        Account.create(username='dave', age=25)
        Account.create(username='erin', age=26)
except Exception:
    # atomic 会在异常离开上下文时回滚事务。
    raise
```

也可以使用保存点：

```python
with db.atomic():
    Account.create(username='frank', age=30)
    with db.savepoint() as savepoint:
        Account.create(username='grace', age=31)
        savepoint.rollback()
```

## 处理重复键异常

MySQL 重复键错误码为 1062，SQLSTATE 为 23000。可以在 Peewee 层捕获 `IntegrityError`：

```python
from peewee import IntegrityError


try:
    Account.create(username='alice', age=19)
except IntegrityError as error:
    if error.args and error.args[0] == 1062:
        print('username 已存在')
    else:
        raise
```

不要通过捕获所有异常来判断重复键，否则认证错误、语法错误或连接错误也可能被错误处理。

## 检查表元数据

Peewee 可以通过 `get_columns()` 读取已有表的元数据：

```python
columns = {column.name: column for column in db.get_columns('peewee_account')}

id_column = columns['id']
balance_column = columns['balance']

print(id_column.primary_key)      # True
print(id_column.identity)         # True
print(balance_column.data_type)   # decimal
print(balance_column.full_type)   # decimal(10,2)
```

对应的 MySQL 协议元数据应满足：

```text
SHOW INDEX.Key_name = PRIMARY
information_schema.columns.extra = auto_increment
information_schema.columns.data_type = decimal
information_schema.columns.column_type = decimal(10,2)
```

## 验证结果

以上示例在如下环境中验证通过：

| 项目 | 实测值 |
|---|---|
| openGauss | 7.0.0 |
| Python | 3.10.21 |
| Peewee | 4.3.0 |
| PyMySQL | 1.2.0 |

执行示例后，验证结果如下：

- Peewee 可正常连接数据库并完成建表、插入、查询、更新和删除操作；
- 批量插入返回影响行数，事务和保存点可正常提交或回滚；
- `SHOW INDEX.Key_name = PRIMARY`；
- `information_schema.columns.extra = auto_increment`；
- `data_type = decimal`，`column_type = decimal(10,2)`；
- Peewee 识别 `primary_key=True`、`identity=True` 和 `full_type=decimal(10,2)`；
- 重复键返回 `ERROR 1062 (23000)`，并由 Peewee 映射为 `IntegrityError`。

## 完整退出

```python
if not db.is_closed():
    db.close()
```

## 常见问题

### 无法连接 MySQL 协议端口

检查 `enable_dolphin_proto`、`dolphin_server_port`、监听地址、防火墙及客户端认证规则。连接 Dolphin 时使用 MySQL 协议端口，不要误用 gsql 的原生协议端口。

### 认证失败

确认已经通过 `set_native_password` 设置 MySQL native 密码，并且应用使用的是该密码。还需要确认认证规则中的物理数据库、用户和客户端地址正确。

### 提示 database 不存在

确认 `dolphin.default_database_name` 指向正确的 B 兼容物理数据库，并且该数据库中存在与 `database` 参数同名的 schema。

### 中文或 emoji 乱码

创建 B 兼容物理数据库时使用 UTF8 编码，并在连接中设置 `charset='utf8mb4'`。

### 包含单引号或反斜杠的字符串写入失败

确认驱动与服务端使用相同的转义方式。使用 PyMySQL 默认转义方式时，设置连接用户的 `standard_conforming_strings=off` 并重新建立连接。

### `server_version` 与 `SELECT VERSION()` 不一致

`server_version` 来自 MySQL 协议握手兼容版本，`SELECT VERSION()` 返回 openGauss 实际版本。两者用途不同，不应当作同一版本字段比较。

## 参考资料

- [配置MySQL协议兼容](./mysql_protocol_compatibility_config.md)
- [Peewee 官方文档](https://docs.peewee-orm.com/)
- [PyMySQL 官方文档](https://pymysql.readthedocs.io/)
