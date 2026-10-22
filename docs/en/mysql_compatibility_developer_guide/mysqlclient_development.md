# mysqlclient Connection Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T01:59:38.658Z pushedAt=2026-10-19T02:34:05.792Z -->

This document describes the basic method of connecting to an openGauss B-compatible database through the Dolphin MySQL protocol using the Python `mysqlclient` driver. The example usage employs a standalone B-compatible database, schema, connection user, and business table, so that the environment can be prepared and the connection verified in sequence.

## Preparation

### Configuring MySQL Protocol Compatibility

First read and execute [Configuring MySQL Protocol Compatibility](./mysql_protocol_compatibility_config.md) in this directory to complete the Dolphin configuration and prepare the MySQL protocol listener. The listener port used in this document is `3308`; if another port is used in the actual configuration, replace the connection parameters in the following sections accordingly.

### Preparing the Database, Schema, and Connection User

The following steps are executed from `postgres` or another non-target B-compatible database. The example uses the following common object names:

| Object | Name | Purpose |
| --- | --- | --- |
| B-compatible database | `proto_test_db` | The database actually created in openGauss |
| Schema | `mysql_test_db` | The schema in the B database, which is also the `database` in the MySQL connection parameters |
| Connection user | `mysql_test_user` | The user authenticated through MySQL native password |
| Business table | `mysql_test_table` | The test table used in the subsequent Python examples |

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

`<runtime-secret>` represents only a runtime secret. Do not save the real password to documents, code, or Git. Explicitly specify `UTF8` when creating the database to support the Chinese and emoji examples later in this document.

If you have already created a B-compatible database that meets the requirements by following [Configuring MySQL Protocol Compatibility](./mysql_protocol_compatibility_config.md), you can skip `CREATE DATABASE` and proceed to connect to the database and create the schema.

### Creating the Example Business Table and Initial Data

After switching to the business schema, create the tables used in subsequent examples:

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

The database, user, schema, and table are one-time initialization objects. When objects with the same names already exist, do not directly execute `CREATE DATABASE`, `CREATE USER`, or `CREATE SCHEMA` again. To rebuild the test table, please confirm first that the current connection is to the dedicated test database, and then drop and recreate `mysql_test_table`.

### Configuring User Compatibility Parameters

mysqlclient uses MySQL-style backslash escaping for parameter binding. To make Dolphin sessions parse strings according to compatibility semantics, you can configure this only for users dedicated to MySQL protocol access:

```sql
ALTER USER mysql_test_user SET standard_conforming_strings TO off;
```

This is a user-level setting. It does not modify global database settings, and it affects all sessions created by that user. After the modification, close existing connections and re-establish them so that the new setting takes effect. It is recommended to configure this only for users dedicated to mysqlclient or other MySQL protocol-compatible access. After applying this setting, do not manually escape strings, and do not use `value.replace(...)` as a substitute for parameter binding.

## Python Environment

mysqlclient 2.2.8 requires Python 3.10 or later. Create an isolated environment with Python 3.11:

```bash
sudo dnf install -y mariadb-connector-c-devel
python3.11 -m venv .venv
. .venv/bin/activate
python -m pip install mysqlclient==2.2.8
```

`mariadb-connector-c-devel` provides the MariaDB Connector/C development headers and libraries required to compile mysqlclient. Install this package from a trusted software repository of the operating system. If the package is not available in the system repository, configure the corresponding openEuler software repository first.

## Configuring Connection Parameters

Before running the Python example, set the connection parameters according to the actual environment. The variable sets for the Linux shell and Windows PowerShell must be consistent.

Linux/bash:

```bash
export OG_MYSQL_HOST=127.0.0.1
export OG_MYSQL_PORT=3308
export OG_MYSQL_DB=mysql_test_db
export OG_MYSQL_USER=mysql_test_user
export OG_MYSQL_PASSWORD='<runtime-secret>'
```

Windows PowerShell:

```powershell
$env:OG_MYSQL_HOST = "127.0.0.1"
$env:OG_MYSQL_PORT = "3308"
$env:OG_MYSQL_DB = "mysql_test_db"
$env:OG_MYSQL_USER = "mysql_test_user"
$env:OG_MYSQL_PASSWORD = "<runtime-secret>"
```

## Establishing a Connection

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

## Parameter Binding and Query

Always use the DB-API `%s` placeholder:

```python
with connection.cursor() as cursor:
    cursor.execute(
        "SELECT value FROM mysql_test_table WHERE id = %s",
        (1,),
    )
    row = cursor.fetchone()
```

Values containing apostrophes should also be passed directly as parameters:

```python
with connection.cursor() as cursor:
    cursor.execute(
        "INSERT INTO mysql_test_table(value) VALUES (%s)",
        ("O'Brien",),
    )
connection.commit()
```

Do not concatenate user input, and do not manually replace quotes.

## INSERT, UPDATE, DELETE, and executemany

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

## Transaction Commit and Rollback

To ensure clear transaction commit and rollback semantics, this example explicitly disables autocommit. Successful operations explicitly call `commit()`; the exception path calls `rollback()`.

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

In addition to the ordinary `Cursor`, mysqlclient provides `DictCursor`; some versions also provide `SSCursor` and `SSDictCursor`. They are DB-API cursor types and are not equivalent to JDBC server-side cursors.

```python
with connection.cursor(MySQLdb.cursors.DictCursor) as cursor:
    cursor.execute("SELECT 1 AS value")
    assert cursor.fetchone()["value"] == 1
```

## Character Sets, Types, and Exceptions

Use `charset="utf8mb4"` when connecting, and it is recommended to perform round-trip tests on values such as Chinese characters, emoji, newline, tab, backslash, and percent. Reasonably cover integer, floating-point, Decimal, character, binary, and date-time types.

mysqlclient exceptions come from the `MySQLdb.Error` hierarchy. The errno or specific subclasses returned by Dolphin may differ from those of Oracle MySQL; applications should handle them based on the exception type and business scenario, and should not hardcode all Oracle errno values.

## Closing Resources

Use `try/finally` or context management to close the cursor first and then the connection:

```python
try:
    with connection.cursor() as cursor:
        cursor.execute("SELECT 1")
finally:
    connection.close()
```

## Verifying Results

After completing the preparation, dependency installation, and connection parameter configuration, you can run the connection, query, parameter binding, CRUD, `executemany`, transaction, and cursor examples in sequence to confirm the following results:

- `mysql_test_user` can connect to `mysql_test_db` through the MySQL protocol.
- Chinese characters, emoji, and parameters containing apostrophes can be written and read through parameter binding.
- The results of `commit()` and `rollback()` meet expectations.
- `DictCursor` can read query results by column name.

| Project | Measured Value |
| --- | --- |
| openGauss | 7.0.0-RC3 |
| Python | 3.11.9 |
| mysqlclient | 2.2.8 |

## FAQs

- If the connection fails, please confirm first that the Dolphin MySQL protocol listener is started and that the host, port, user, password, and `database` parameters are consistent with the actual configuration.
- If the old behavior still occurs after the user sets `standard_conforming_strings=off`, close the existing connection and re-establish the connection.
- If header files or libraries cannot be found during the mysqlclient installation, please confirm first that `mariadb-connector-c-devel` is installed and check whether the openEuler software repository is available.
- If the initialization SQL is executed repeatedly, please confirm first whether the object already exists to avoid creating the database, user, or schema repeatedly.
- Capabilities such as stored procedure invocation may be limited by the current Dolphin compatibility scope. Verify them based on the actual version before use.

## References

- [Configuring MySQL Protocol Compatibility](./mysql_protocol_compatibility_config.md)
- [mysqlclient Official Documentation](https://mysqlclient.readthedocs.io/)
- [Python DB-API 2.0](https://peps.python.org/pep-0249/)
