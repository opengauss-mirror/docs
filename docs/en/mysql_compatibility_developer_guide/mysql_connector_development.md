# mysql-connector-python Connection Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T01:59:20.099Z pushedAt=2026-10-19T02:55:51.376Z -->

After openGauss completes the MySQL protocol compatibility configuration, you can use the mysql-connector-python library to connect to an openGauss B-compatible mode database.

## Preparation

### Preparing the Business Table Structure

1. Connect to the openGauss database using the openGauss command-line tool gsql.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Switch to the B database configured with MySQL protocol compatibility.

   ```sql
   \c proto_test_db
   ```

3. Create the database specified in the mysql-connector-python connection string. In the B database, an openGauss schema is equivalent to a MySQL database.

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. Switch the schema and create the business table structure.

   ```sql
   SET current_schema to mysql_test_db;

   CREATE TABLE `user` (
       `id`   INT AUTO_INCREMENT PRIMARY KEY,
       `name` VARCHAR(50)  NOT NULL COMMENT 'User name',
       `age`  INT COMMENT 'Age'
   ) DEFAULT CHARSET=utf8mb4;

   INSERT INTO `user` (`name`, `age`) VALUES
       ('Zhang San', 18),
       ('Li Si', 19),
       ('Wang Wu', 20);
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

2. Create a user with the same name as the schema where the business table resides.

   ```sql
   CREATE USER mysql_test_db WITH PASSWORD '******';
   ```

   > [!TIP]Tip
   > Do not create a user with the same name in the B database where the schema resides, as the creation will fail.

3. Switch to the B database configured for MySQL protocol compatibility.

   ```sql
   \c proto_test_db
   ```

4. Set a MySQL native password for the new user.

   ```sql
   SELECT set_native_password('mysql_test_db', '******', '');
   ```

5. Change the owner of the schema where the business table resides.

   ```sql
   ALTER SCHEMA mysql_test_db OWNER TO mysql_test_db;
   ```

6. Grant the user operation privileges on all historical tables.

   ```sql
   GRANT ALL ON ALL TABLES IN SCHEMA mysql_test_db TO mysql_test_db;
   GRANT ALL ON ALL SEQUENCES IN SCHEMA mysql_test_db TO mysql_test_db;
   ```

7. Exit the gsql connection.

   ```sql
   \q
   ```

### Configuring Client Access Authentication

openGauss requires client access authentication to be configured before a specified user can remotely connect to the database; otherwise, the connection fails. The configuration method is as follows:

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"

gs_om -t restart
```

For more details, see [Configuring Client Access Authentication](https://docs.opengauss.org/en/docs/latest/database_administration_guide/configuring_client_access_authentication.html).

## mysql-connector-python Project Setup

### Installing mysql-connector-python

```bash
pip install mysql-connector-python==8.0.33
```

> [!TIP]Tip
> It is recommended to use version 8.0.x. mysql-connector-python 9.x corresponds to MySQL 9.0, which removes the `mysql_native_password` authentication plugin and has compatibility issues with the openGauss dolphin plugin.

### Project Directory Reference

```
mysql-connector-connect-opengauss-b/
└── connector_connect_demo.py    # Main program/sample code
```

### Connection Configuration

Compared with a standard MySQL connection, the following four parameters must be additionally specified when connecting to the openGauss dolphin plugin:

```python
import mysql.connector

conn = mysql.connector.connect(
    host='127.0.0.1',
    port=3308,                            # Dolphin MySQL protocol port, not the native 5432
    user='mysql_test_db',
    password='******',
    database='mysql_test_db',             # Corresponds to the schema name in openGauss
    charset='utf8mb4',
    collation='utf8mb4_general_ci',       # Must be specified; openGauss does not support the default utf8mb4_0900_ai_ci
    auth_plugin='mysql_native_password',  # Must be specified; caching_sha2_password is not supported
    use_pure=True,                        # Must be specified; the C extension is incompatible with dolphin authentication
    sql_mode='NO_BACKSLASH_ESCAPES',      # Must be specified; openGauss does not treat backslashes as escape characters, so this must match the client-side escaping behavior
)
```

> [!TIP]Tip
> The four parameters `collation`, `auth_plugin`, `use_pure`, and `sql_mode` are all mandatory. Otherwise, the connection will fail or escaping inconsistencies will occur.

## mysql-connector-python Database Operation Example

### Sample Code

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
        # Query all users
        print("=== Query all users ===")
        cur.execute("SELECT id, name, age FROM `user`")
        for row in cur.fetchall():
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

        # Add a user
        print("=== Add a user ===")
        cur.execute(
            "INSERT INTO `user`(name, age) VALUES (%s, %s)",
            ('zhaoliu', 18)
        )
        conn.commit()
        uid = cur.lastrowid  # Save the real primary key of the inserted record. Subsequent operations strictly follow this ID.
        print(f"Rows added: {cur.rowcount}, new record id={uid}")

        # Fuzzy query (for demonstration only, not for locating records)
        print("=== Fuzzy query for users whose name contains zhao ===")
        cur.execute(
            "SELECT id, name, age FROM `user` WHERE name LIKE %s",
            ('%zhao%',)
        )
        zhao_users = cur.fetchall()
        for row in zhao_users:
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")
        assert uid in {row[0] for row in zhao_users}, "The newly added record does not appear in the fuzzy query results"

        # Update the user (strictly by the uid of the newly inserted record)
        print("=== Update user information ===")
        cur.execute(
            "UPDATE `user` SET name=%s, age=%s WHERE id=%s",
            ('zhaoliuliuliu', 28, uid)
        )
        conn.commit()
        assert cur.rowcount == 1, f"Expected to update 1 row, but actually updated {cur.rowcount} rows"
        print(f"Rows updated: {cur.rowcount}")

        # Query by ID
        print("=== Query user by ID ===")
        cur.execute("SELECT id, name, age FROM `user` WHERE id=%s", (uid,))
        row = cur.fetchone()
        print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

        # Delete the user (also strictly by uid)
        print("=== Delete user ===")
        cur.execute("DELETE FROM `user` WHERE id=%s", (uid,))
        conn.commit()
        assert cur.rowcount == 1, f"Expected to delete 1 row, but actually deleted {cur.rowcount} rows"
        print(f"Rows deleted: {cur.rowcount}")

        # Round-trip validation of special character parameters (depends on sql_mode='NO_BACKSLASH_ESCAPES' in the connection configuration above)
        print("=== Special Character Round-Trip Validation ===")
        special_name = "O'Brien\\Test"  # Contains a single quote and a backslash
        cur.execute(
            "INSERT INTO `user`(name, age) VALUES (%s, %s)",
            (special_name, 30)
        )
        conn.commit()
        special_uid = cur.lastrowid

        cur.execute("SELECT name FROM `user` WHERE id=%s", (special_uid,))
        row = cur.fetchone()
        assert row[0] == special_name, f"Round-trip read mismatch: expected {special_name!r}, actual {row[0]!r}"
        print(f"Round-trip validation passed: {row[0]!r}")

        cur.execute("DELETE FROM `user` WHERE id=%s", (special_uid,))
        conn.commit()

        # Query all users
        print("=== Query All Users ===")
        cur.execute("SELECT id, name, age FROM `user`")
        for row in cur.fetchall():
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

finally:
    conn.close()
```

### Example Run Log

> [!TIP]Tip
> The following log assumes that the table initially contains three records with IDs 1 to 3, and that this run adds a user with ID=4 and a special-character validation record with ID=5 (deleted after validation). Use the log generated in your actual environment as the reference; do not copy it directly.

```
=== Query all users ===
User{id=1, name='Zhang San', age=18}
User{id=2, name='Li Si', age=19}
User{id=3, name='Wang Wu', age=20}
=== Add a user ===
Rows added: 1, new record id=4
=== Fuzzy query for users whose name contains zhao ===
User{id=4, name='zhaoliu', age=18}
=== Update user information ===
Updated rows: 1
=== Query user by ID ===
User{id=4, name='zhaoliuliuliu', age=28}
=== Delete user ===
Deleted rows: 1
=== Special character round-trip validation ===
Round-trip validation passed: 'O\'Brien\\Test'
=== Query all users ===
User{id=1, name='Zhang San', age=18}
User{id=2, name='Li Si', age=19}
User{id=3, name='Wang Wu', age=20}
```
