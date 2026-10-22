# Django Connection Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T01:58:58.735Z pushedAt=2026-10-16T03:06:00.957Z -->

After openGauss completes the MySQL protocol compatibility configuration, Django ORM can be used with the MySQL Python driver to connect to an openGauss B-compatible mode database.

## Preparation

> ### Prerequisites: MySQL Protocol Compatibility Configuration Completed
> First complete the server-side preparation by referring to *[Configuring MySQL Protocol Compatibility](mysql_protocol_compatibility_config.md)*, and then continue with the subsequent steps in this document. At least the following are required:
> 1. Enable `enable_dolphin_proto` and configure `dolphin_server_port` (`3308` in the examples in this document).
> 2. Create a B-compatible physical database (`proto_test_db` in the examples in this document).
> 3. Set `dolphin.default_database_name` to the name of this B database. When this parameter is empty, the Dolphin handshake directly rejects the connection, and Django / PyMySQL cannot establish a session.
>
> Note: The `NAME` in the PyMySQL / Django configuration corresponds to the **schema** under the physical B database (`mysql_test_db` in the examples in this document), not the physical database name pointed to by `dolphin.default_database_name`.

### Preparing the Business Table Structure

1. Connect to the openGauss database using the openGauss command-line tool gsql.

```bash
gsql -d postgres -p 5432 -r
```

2. Switch to the B-compatible database configured for MySQL protocol compatibility.

```sql
\c proto_test_db
```

3. Create the database specified in the MySQL connection string. Under the B database, an openGauss schema is equivalent to a MySQL database.

```sql
CREATE SCHEMA mysql_test_db;
```

4. Switch the schema and create the business table structure.

```sql
SET current_schema to mysql_test_db;

CREATE TABLE `user` (
    `id`      INT AUTO_INCREMENT PRIMARY KEY,
    `name`    VARCHAR(50)  NOT NULL COMMENT 'username',
    `age`     INT COMMENT 'age'
) DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`name`, `age`) VALUES
    ('Zhang San',  18),
    ('Li Si',  19),
    ('Wang Wu',  20);
```

5. Exit the gsql connection.

```sql
\q
```

### Preparing the User for Connection

1. Reconnect to the openGauss database using the gsql command.

```bash
gsql -d postgres -p 5432 -r
```

2. Create a user with the same name as the schema where the business tables reside.

```sql
CREATE USER mysql_test_db WITH PASSWORD '******';
```

> [!TIP]Note
> Do not create a user with the same name under the B database where the schema resides; the creation will fail.

3. Switch to the B-compatible database configured with MySQL protocol compatibility.

```sql
\c proto_test_db
```

4. Set a MySQL native password for the new user.

```sql
SELECT set_native_password('mysql_test_db', '******', '');
```

5. Change the owner of the schema where the business tables reside.

```sql
alter schema mysql_test_db owner to mysql_test_db;
```

6. Grant the user operation privileges on all historical tables.

```sql
GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db to mysql_test_db;
GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db to mysql_test_db;
```

7. Exit the gsql connection.

```sql
\q
```

### Configuring Client Access Authentication

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"
gs_om -t restart
```

In a standalone simpleInstall scenario, you can directly edit the `pg_hba.conf` file in the data directory and then execute `gs_ctl reload`.

### Dolphin Parameter Configuration

1. Confirm the default physical B database used for the handshake. If it has not been set in the protocol compatibility configuration, execute the following first (after the change, restart or follow the official instructions to make the GUC take effect):

```sql
ALTER SYSTEM SET dolphin.default_database_name TO proto_test_db;
```

`dolphin.default_database_name` must point to the actual B-compatible physical database name. If it is empty, the Dolphin handshake fails, and the client cannot connect before entering Django initialization.

2. When Django connects, it queries system tables to obtain information such as table structures. It is recommended to also set the following for the business user:

```sql
\c proto_test_db
alter user mysql_test_db set dolphin.sql_mode = 'sql_mode_strict,no_zero_date,block_return_multi_results,error_for_division_by_zero,escape_quotes,disable_escape_bytea';
alter user mysql_test_db set dolphin.lower_case_table_names = 1;
```

## Setting Up a Django Project

### Creating a Virtual Environment and Installing Dependencies

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install "Django>=4.2,<5.1" PyMySQL cryptography
# Optional: pip install mysqlclient
```

### Project Directory Reference

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

### Registering PyMySQL (If PyMySQL Is Used)

Create `pymysql_bootstrap.py` (consistent with the examples project, including openGauss `VERSION()` compatibility):

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

Load this module (`import pymysql_bootstrap`) before importing `manage.py` / `settings.py`. Django 4.2/5.0 executes `SELECT VERSION()` and parses the version from the beginning of the returned string. When Dolphin returns the openGauss banner, the bootstrap described above is required; otherwise, connection initialization fails.

### Configuring settings.py

It is recommended to use the native Django MySQL backend:

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
            # Must be consistent with Dolphin string parsing to prevent PyMySQL from encoding single quotes as \' and causing syntax errors
            "sql_mode": "NO_BACKSLASH_ESCAPES",
        },
    }
}
```

Note:

- Set `NAME` to the schema under the B database (for example, `mysql_test_db`). The physical database is determined by the server-side `dolphin.default_database_name` (for example, `proto_test_db`). Do not mix the two.
- openGauss has no real MySQL storage engine. The server always returns `InnoDB` for `@@default_storage_engine` (only `InnoDB` is allowed to be SET), so that Django initialization detection passes.
- Set `NO_BACKSLASH_ESCAPES` in `OPTIONS.sql_mode` to stay consistent with Dolphin string parsing and avoid write failures for strings containing single quotes or backslashes.

### Creating a Model

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

## Django Database Operation Examples

```python
from demo_app.models import User

print("=== Query all users ===")
for u in User.objects.all().order_by("id"):
    print(u)

print("=== Add a user ===")
created = User(name="zhaoliu", age=18)
created.save()

print("=== Special character read/write ===")
special = User(name="O'Brien\\test", age=99)
special.save()
assert User.objects.get(pk=special.pk).name == special.name

print("=== Fuzzy query ===")
qs = User.objects.filter(name__icontains="zhao")
for x in qs:
    print(x)
assert qs.filter(pk=created.pk).exists(), "The record created this time should appear in the icontains results"

created.name = "zhaoliuliuliu"
created.age = 28
created.save()
assert User.objects.get(pk=created.pk).name == "zhaoliuliuliu"
deleted, _ = User.objects.filter(pk=created.pk).delete()
assert deleted == 1 and not User.objects.filter(pk=created.pk).exists()
User.objects.filter(pk=special.pk).delete()

print("=== Query all users ===")
for u in User.objects.all().order_by("id"):
    print(u)
```

### Example Run Log

```text
=== Query all users ===
User{id=1, name='Zhang San', age=18}
User{id=2, name='Li Si', age=19}
User{id=3, name='Wang Wu', age=20}
=== Add a user ===
...
=== Delete a user ===
...
=== Query all users ===
User{id=1, name='Zhang San', age=18}
User{id=2, name='Li Si', age=19}
User{id=3, name='Wang Wu', age=20}
```

## Notes

1. You must use the dolphin MySQL protocol port, not the default openGauss port.
2. You must set `dolphin.default_database_name` to the actual B-compatible physical database name; `DATABASES.NAME` is still the schema under the library.
3. Stored procedures are not supported; avoid relying on server-side cursors.
4. SSL: The client must support TLS 1.2, or disable SSL.
5. This is a different path from `django_opengauss` (PostgreSQL protocol); do not confuse them.
