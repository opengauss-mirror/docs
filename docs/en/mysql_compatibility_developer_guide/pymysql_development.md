# PyMySQL Connection Example

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T02:01:22.120Z pushedAt=2026-10-19T09:58:13.695Z -->

After openGauss completes the MySQL protocol compatibility configuration, you can use the PyMySQL library to connect to an openGauss B-compatible mode database.

## Preparation

### Preparing the Business Table Structure

1. Connect to the openGauss database using the openGauss command-line tool gsql.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Switch to database B configured with MySQL protocol compatibility.

   ```sql
   \c proto_test_db
   ```

3. Create the database specified in the PyMySQL connection string. In database B, a schema in openGauss is equivalent to a database in MySQL.

   ```sql
   CREATE SCHEMA mysql_test_db;
   ```

4. Switch the schema and create the business table structure.

   ```sql
   SET current_schema to mysql_test_db;

   CREATE TABLE `user` (
       `id`   INT AUTO_INCREMENT PRIMARY KEY,
       `name` VARCHAR(50)  NOT NULL COMMENT 'username',
       `age`  INT COMMENT 'age'
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

2. Create a user with the same name as the schema where the business tables reside.

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

5. Change the owner of the schema where the business tables reside.

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

openGauss allows a specified user to remotely connect to the database only after client access authentication is configured; otherwise, the connection fails. The configuration method is as follows:

```bash
gs_guc set -N all -I all -h "host all mysql_test_db 0.0.0.0/0 sha256"

gs_om -t restart
```

For more details, see [Configuring Client Access Authentication](https://docs.opengauss.org/en/docs/latest/database_administration_guide/configuring_client_access_authentication.html).

## PyMySQL Project Setup

### Installing PyMySQL

```bash
pip install pymysql
```

### Project Directory Reference

```
pymysql-connect-opengauss-b/
└── pymysql_connect_demo.py    # Main program/sample code
```

### Connection Configuration

PyMySQL connects to the openGauss B-compatible database through the MySQL protocol port (default 3308) of the dolphin plugin:

```python
import pymysql

conn = pymysql.connect(
    host='127.0.0.1',
    port=3308,                  # Dolphin MySQL protocol port, not the native 5432
    user='mysql_test_db',
    password='******',
    database='mysql_test_db',   # Corresponds to the schema name in openGauss
    charset='utf8mb4',
    init_command="SET sql_mode='NO_BACKSLASH_ESCAPES'"  # Backslashes must be treated as literal characters to avoid exceptions when writing special characters
)
```

> [!TIP]Tip
> `init_command` is used to execute `SET sql_mode='NO_BACKSLASH_ESCAPES'` immediately after the connection is established, so that backslashes (`\`) in string parameters are treated as literal characters instead of escape characters. If this parameter is omitted, writing strings containing backslashes or single quotes (such as Windows paths or names like `O'Brien`) may cause syntax errors or truncated content.

### Special Character Round-Trip Example

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
    assert row[0] == special_str, f"Special character round-trip failed: {row[0]!r} != {special_str!r}"
    print(f"Special character round-trip verification passed: {row[0]}")

conn.close()
```

Expected output:

```
Special character round-trip verification passed: C:\path\to\file O'Brien
```

> [!TIP]Tip
> When PyMySQL concatenates parameterized SQL, whether the backslash in a string parameter needs to be escaped depends on the `server_status` status bit (`SERVER_STATUS_NO_BACKSLASH_ESCAPES`) cached inside its connection object. For the specific implementation, see `pymysql.connections.Connection.escape_string()`. This status bit is returned by the server in the handshake, upon successful authentication, and in each query response (OK/EOF packet). **It is determined by the server and cannot be unilaterally overridden by the client.**
>
> In the example, `init_command="SET sql_mode='NO_BACKSLASH_ESCAPES'"` only makes the server execute this SQL statement and switch the `sql_mode` of openGauss. For the PyMySQL client to correctly match this behavior (no longer escaping backslashes), it also relies on the dolphin plugin faithfully synchronizing this status bit back in the subsequent protocol packets. If the dolphin plugin has the problem of not synchronizing `server_status` across the four types of protocol packets (HandshakeV10, authentication OK, ordinary OK, and EOF), which corresponds to versions before the fix in Plugin #2522, PyMySQL may still process parameters according to the old "backslash needs escaping" state, causing the special character round-trip in this example to fail.
>
> Therefore, **the correct operation of this example depends on the fix in Plugin #2522 that "unifies the `server_status` status bit across the four types of protocol packets"**: both the `init_command` set by the client and the status bit synchronization fix on the Plugin side are indispensable.

## PyMySQL Database Operation Examples

### Sample Code

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
        uid = cur.lastrowid   # Save the primary key of the newly added record immediately; all subsequent operations are based on it.
        print(f"Rows added: {cur.rowcount}, new record id={uid}")

        # Fuzzy query (only used to display/verify that the newly added record is indeed in the result set, not to locate the record to be operated on)
        print("=== Fuzzy query for users whose username contains zhao ===")
        cur.execute(
            "SELECT id, name, age FROM `user` WHERE name LIKE %s",
            ('%zhao%',)
        )
        zhao_users = cur.fetchall()
        for row in zhao_users:
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")
        assert uid in [row[0] for row in zhao_users], "The newly added record does not appear in the fuzzy query result"

        # Update the user (strictly by the uid of the newly inserted record, not relying on fuzzy query results)
        print("=== Update user information ===")
        cur.execute(
            "UPDATE `user` SET name=%s, age=%s WHERE id=%s",
            ('zhaoliuliuliu', 28, uid)
        )
        conn.commit()
        assert cur.rowcount == 1, f"Expected to update 1 row, but actually updated {cur.rowcount} rows"
        print(f"Updated rows: {cur.rowcount}")

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
        print(f"Deleted rows: {cur.rowcount}")

        # Query all users
        print("=== Query all users ===")
        cur.execute("SELECT id, name, age FROM `user`")
        for row in cur.fetchall():
            print(f"User{{id={row[0]}, name='{row[1]}', age={row[2]}}}")

finally:
    conn.close()
```

### Run Log Example

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
Rows updated: 1
=== Query user by ID ===
User{id=4, name='zhaoliuliuliu', age=28}
=== Delete user ===
Deleted rows: 1
=== Query all users ===
User{id=1, name='Zhang San', age=18}
User{id=2, name='Li Si', age=19}
User{id=3, name='Wang Wu', age=20}
```
