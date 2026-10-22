# Peewee Connection Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:00:36.600Z pushedAt=2026-10-19T08:41:50.659Z -->

After openGauss completes the MySQL protocol compatibility configuration, you can use the Python ORM framework Peewee together with the PyMySQL driver to connect to an openGauss B-compatible mode database.

## Preparation

### Preparing the Database and Connection User

1. Connect to the openGauss database through gsql.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Create a UTF8-encoded B-compatible mode database. You can skip this step if a B database that meets the requirements already exists.

   ```sql
   CREATE DATABASE proto_test_db DBCOMPATIBILITY 'B' ENCODING 'UTF8';
   ```

3. Create a connection user in a non-B database, and then switch to the B database.

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   \c proto_test_db
   ```

4. Create a schema corresponding to the PyMySQL `database` parameter, and set its owner to the connection user. In a B database, a schema in openGauss is equivalent to a database in MySQL.

   ```sql
   CREATE SCHEMA mysql_test_db AUTHORIZATION mysql_test_db;
   ```

5. Set a MySQL native password for the user. The MySQL native password is used for MySQL protocol authentication and serves a different purpose from the openGauss login password.

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   ```

6. PyMySQL uses backslash escaping by default. To make the server-side string parsing consistent with the driver, set the following parameters for the connection user, and re-establish the connection after the modification.

   ```sql
   ALTER USER mysql_test_db SET standard_conforming_strings TO off;
   ```

7. Confirm that the Dolphin extension has been loaded.

   ```sql
   SELECT extname, extversion
   FROM pg_extension
   WHERE extname = 'dolphin';
   ```

8. Exit gsql.

   ```sql
   \q
   ```

### Configuring MySQL Protocol and Client Authentication

Complete the Dolphin MySQL protocol configuration by following [Configuring MySQL Protocol Compatibility](./mysql_protocol_compatibility_config.md), and confirm the following:

- `enable_dolphin_proto` is enabled;
- `dolphin_server_port` is set to an unused port, for example, 3308;
- `dolphin.default_database_name` points to `proto_test_db`;
- The listening address, firewall, and client authentication rules allow the application host to connect.

When configuring client authentication, use the actual client address and narrow the network segment range as much as possible. For example:

```bash
gs_guc set -D /opt/gauss/data/dn1 \
    -h "host proto_test_db mysql_test_db 192.168.1.10/32 sha256"
gs_ctl reload -D /opt/gauss/data/dn1
```

> [!NOTE]Note
> The data directory and instance management commands need to be adjusted according to the actual deployment method. Do not use the unrestricted `0.0.0.0/0` authentication rule in a production environment.

## Installing Python Dependencies

It is recommended to use a virtual environment to isolate project dependencies. The following example uses Python 3.10, Peewee 4.3.0, and PyMySQL 1.2.0.

```bash
python -m venv .venv
```

Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
python -m pip install peewee==4.3.0 PyMySQL==1.2.0
```

Linux:

```bash
source .venv/bin/activate
python -m pip install peewee==4.3.0 PyMySQL==1.2.0
```

## Configuring Connection Parameters

Do not save real passwords in code or version control repositories. You can pass connection information through environment variables.

Linux:

```bash
export OG_MYSQL_HOST=127.0.0.1
export OG_MYSQL_PORT=3308
export OG_MYSQL_DB=mysql_test_db
export OG_MYSQL_USER=mysql_test_db
read -s -p "MySQL native password: " OG_MYSQL_PASSWORD
export OG_MYSQL_PASSWORD
```

Windows PowerShell:

```powershell
$env:OG_MYSQL_HOST='127.0.0.1'
$env:OG_MYSQL_PORT='3308'
$env:OG_MYSQL_DB='mysql_test_db'
$env:OG_MYSQL_USER='mysql_test_db'
$securePassword=Read-Host 'MySQL native password' -AsSecureString
$env:OG_MYSQL_PASSWORD=[Net.NetworkCredential]::new('', $securePassword).Password
Remove-Variable securePassword
```

Use Peewee's `MySQLDatabase` to establish a connection:

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
    raise RuntimeError(f'Missing environment variables: {", ".join(missing)}')

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

`OG_MYSQL_DB` represents the business schema in the B-compatible database, not the openGauss physical database specified by `dolphin.default_database_name`.

## Defining Models

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

Common field mappings are as follows:

| Peewee Field | openGauss B-Compatible Mode Field |
|---|---|
| `AutoField` | Auto-increment integer primary key |
| `CharField` | `varchar` |
| `TextField` | `text` |
| `IntegerField` | `integer` |
| `BigIntegerField` | `bigint` |
| `DecimalField` | `decimal(p,s)` |
| `BooleanField` | `boolean` |
| `DateTimeField` | `timestamp` |
| `BlobField` | Binary large object |

## Execute Database Operations

### Creating a Table

```python
db.connect(reuse_if_open=True)
db.create_tables([Account])
```

### Inserting Data

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

The MySQL backend of Peewee may return the last inserted ID by default. When the affected row count of a batch insert is required, use `.as_rowcount()`.

### Query, Update, and Delete

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

### Using Transactions

```python
try:
    with db.atomic():
        Account.create(username='dave', age=25)
        Account.create(username='erin', age=26)
except Exception:
    # atomic rolls back the transaction when an exception leaves the context.
    raise
```

You can also use a savepoint:

```python
with db.atomic():
    Account.create(username='frank', age=30)
    with db.savepoint() as savepoint:
        Account.create(username='grace', age=31)
        savepoint.rollback()
```

## Handling Duplicate Key Exceptions

The MySQL duplicate key error code is 1062, and the SQLSTATE is 23000. You can catch `IntegrityError` at the Peewee layer:

```python
from peewee import IntegrityError


try:
    Account.create(username='alice', age=19)
except IntegrityError as error:
    if error.args and error.args[0] == 1062:
        print('username already exists')
    else:
        raise
```

Do not determine duplicate keys by catching all exceptions; otherwise, authentication errors, syntax errors, or connection errors may also be handled incorrectly.

## Checking Table Metadata

Peewee can read the metadata of an existing table through `get_columns()`:

```python
columns = {column.name: column for column in db.get_columns('peewee_account')}

id_column = columns['id']
balance_column = columns['balance']

print(id_column.primary_key)      # True
print(id_column.identity)         # True
print(balance_column.data_type)   # decimal
print(balance_column.full_type)   # decimal(10,2)
```

The corresponding MySQL protocol metadata should satisfy the following:

```text
SHOW INDEX.Key_name = PRIMARY
information_schema.columns.extra = auto_increment
information_schema.columns.data_type = decimal
information_schema.columns.column_type = decimal(10,2)
```

## Verifying Results

The preceding examples were verified in the following environment:

| Item | Measured Value |
|---|---|
| openGauss | 7.0.0 |
| Python | 3.10.21 |
| Peewee | 4.3.0 |
| PyMySQL | 1.2.0 |

After the examples are executed, the verification results are as follows:

- Peewee can connect to the database normally and complete table creation, insertion, query, update, and deletion operations;
- Batch insertion returns the number of affected rows, and transactions and savepoints can be committed or rolled back normally;
- `SHOW INDEX.Key_name = PRIMARY`;
- `information_schema.columns.extra = auto_increment`;
- `data_type = decimal`, `column_type = decimal(10,2)`;
- Peewee recognizes `primary_key=True`, `identity=True`, and `full_type=decimal(10,2)`;
- Duplicate keys return `ERROR 1062 (23000)`, which Peewee maps to `IntegrityError`.

## Complete Exit

```python
if not db.is_closed():
    db.close()
```

## FAQs

### Unable to Connect to the MySQL Protocol Port

Check `enable_dolphin_proto`, `dolphin_server_port`, the listening address, the firewall, and the client authentication rules. When connecting to Dolphin, use the MySQL protocol port instead of the native protocol port of gsql.

### Authentication Failure

Confirm that the MySQL native password has been set through `set_native_password` and that the application uses this password. Also confirm that the physical database, user, and client address in the authentication rules are correct.

### Database Does Not Exist

Confirm that `dolphin.default_database_name` points to the correct B-compatible physical database, and that a schema with the same name as the `database` parameter exists in that database.

### Chinese or Emoji Garbled Characters

Use UTF8 encoding when creating the B-compatible physical database, and set `charset='utf8mb4'` in the connection.

### Write Failure for Strings with Single Quotes or Backslashes

Ensure that the driver and the server use the same escaping method. When using the default PyMySQL escaping method, set `standard_conforming_strings=off` for the connection user and re-establish the connection.

### `server_version` and `SELECT VERSION()` Are Inconsistent

`server_version` comes from the MySQL protocol handshake compatibility version, while `SELECT VERSION()` returns the actual openGauss version. They serve different purposes and should not be compared as the same version field.

## References

- [Configuring MySQL Protocol Compatibility](./mysql_protocol_compatibility_config.md)
- [Peewee Official Documentation](https://docs.peewee-orm.com/)
- [PyMySQL Official Documentation](https://pymysql.readthedocs.io/)
