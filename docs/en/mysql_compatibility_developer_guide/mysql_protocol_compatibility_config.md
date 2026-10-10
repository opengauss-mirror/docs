# Configuring MySQL Protocol Compatibility

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T06:38:50.250Z pushedAt=2026-07-17T06:42:53.909Z -->

## Introduction to MySQL Protocol Compatibility

openGauss implements MySQL protocol compatibility through the dolphin plugin via an abstract protocol layer. Once you set the relevant parameters, you can connect directly to openGauss in B‑compatible mode using the MySQL JDBC driver.


For more details, see [MySQL Protocol Compatibility](https://docs.opengauss.org/en/docs/latest/extension_reference/dolphin_mysql_protocol_compatibility.html).

## MySQL Protocol Compatibility Configuration

openGauss supports two authentication methods for MySQL protocol compatibility: `mysql_native_password` and `caching_sha2_password`. The following steps use `mysql_native_password` as an example.


### mysql_native_password

1. Connect to openGauss using the openGauss command-line tool `gsql`.

   ```bash
   gsql -d postgres -p 5432 -r
   ```

2. Create a B-compatible database.

   ```sql
   CREATE DATABASE proto_test_db WITH DBCOMPATIBILITY 'B' ENCODING 'UTF8';
   ```

3. Switch to the newly created B‑compatible database.

   ```sql
   \c proto_test_db
   ```

4. Create a user and set the MySQL native password. If needed, grant privileges to this user using the [GRANT](https://docs.opengauss.org/en/docs/latest/sql_reference/grant.html) command.

   ```sql
   CREATE USER proto_test WITH PASSWORD '******';
   
   SELECT set_native_password('proto_test', '******', '');
   -- Parameters:
   -- 	1st: username;
   -- 	2nd: MySQL connection password;
   -- 	3rd: old MySQL connection password (if any). For first-time setup, this can be empty or any value. When changing the password or switching authentication methods, you must provide the old password for verification.
   ```

5. Set the openGauss GUC parameter [enable_dolphin_proto](https://docs.opengauss.org/en/docs/latest/database_reference/connection_settings.html#enable_dolphin_proto) to `on`. This requires a restart. In this sample, we restart after completing the next steps.

   ```sql
   ALTER SYSTEM SET enable_dolphin_proto TO on;
   ```

6. Set the MySQL protocol listening port [dolphin_server_port](https://docs.opengauss.org/en/docs/latest/database_reference/connection_settings.html#dolphin_server_port). Make sure this port is different from openGauss's own listening port. This also requires a restart (do it after completing the next steps).

   ```sql
   ALTER SYSTEM SET dolphin_server_port TO 3308;
   ```

7. Exit `gsql`.

   ```sql
   \q
   ```

8. Restart the database to apply the changes. The command below is for the enterprise edition.


   ```bash
   gs_om -t restart
   ```

9. Reconnect to openGauss via `gsql` and switch to the newly created B-compatible database.

   ```sql
   gsql -d postgres -p 5432 -r
   
   \c proto_test_db
   ```

10. Set the default connected database name to the newly created B-compatible database name, using [dolphin.default_database_name](https://docs.opengauss.org/en/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphindefault_database_name).

    ```sql
    ALTER SYSTEM SET dolphin.default_database_name TO proto_test_db;
    ```

11. Once these settings are in place, MySQL protocol compatibility is configured. You can now connect to the openGauss B‑compatible database using a MySQL client with the corresponding username and password.

## Additional Information

### dolphin.sql_mode

openGauss provides the GUC parameter [dolphin.sql_mode](https://docs.opengauss.org/en/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinsql_mode) as an equivalent to MySQL's `sql_mode` options.

### dolphin.lower_case_table_names

The GUC parameter [dolphin.lower_case_table_names](https://docs.opengauss.org/en/docs/latest/extension_reference/dolphin_guc_parameters.html#dolphinlower_case_table_names) controls case sensitivity for usernames, table names, view names, and schema names.