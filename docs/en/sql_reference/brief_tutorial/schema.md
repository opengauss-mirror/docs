# SCHEMA

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-28T11:06:15.579Z pushedAt=2026-07-29T03:34:22.757Z -->

A schema allows multiple users to use the same database without interfering with each other. By managing schemas, database objects can be organized into logical groups that are easy to manage, and third-party applications can be added to the corresponding schemas without causing conflicts.

Each database contains one or more schemas. Each schema in a database contains tables and other types of objects. When a database is created, it has a default schema named `PUBLIC`, and all users have the `USAGE` privilege on this schema. Only the system administrator and the initialization user can create ordinary functions, aggregate functions, stored procedures, and synonym objects in the `public` schema. Only the initialization user can create operators in the `public` schema. Other users cannot create the above five types of objects even after being granted the `CREATE` privilege. Database objects can be grouped by schemas. A schema is similar to an operating system directory, but schemas cannot be nested.

The same database object name can be used in different schemas of the same database without conflicts. For example, both `a_schema` and `b_schema` can contain a table named `mytable`. Users with the required privileges can access objects in multiple schemas of the database.

When a user is created using `CREATE USER`, a schema with the same name is automatically created for that user in the database where the command is executed.

## Syntax<a name="section10988202911187"></a>

- Creating a SCHEMA

    ```
    CREATE SCHEMA schema_name 
        [ AUTHORIZATION user_name ] ;
    ```

- Modifying a SCHEMA

    - Renaming a schema.

        ```
        ALTER SCHEMA schema_name 
            RENAME TO new_name;
        ```

    - Changing the owner of a schema.

        ```
        ALTER SCHEMA schema_name 
            OWNER TO new_owner;
        ```

- Dropping a schema and its objects

    ```
    DROP SCHEMA  schema_name;
    ```

    Do not drop schemas starting with `pg_temp` or `pg_toast_temp`. These schemas are used internally by the system. Dropping them may lead to unpredictable results.

## Parameter Description<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s9930d6a2a74b406980e00129b1f4fe2c"></a>

- **schema_name**

    Name of the schema.

    >[!TIP]Caution
    >A schema name cannot be the same as any other schema name in the current database.
    >The schema name cannot start with `pg_`. After the `support_extended_features` parameter is set to `on`, the name can start with `pg_temp_` or `pg_toast_temp_`, but this is not recommended because it may cause temporary tables to not be cleaned up properly.

    Value range: a string that complies with identifier naming conventions.

- **AUTHORIZATION user\_name**

    Specifies the owner of the schema. When `schema_name` is not specified, `user_name` is used as the schema name, and in this case `user_name` can only be a role name.

    Value range: an existing user name or role name.

- **schema\_element**

    An SQL statement that creates an object in the schema. Currently, only `CREATE TABLE`, `CREATE VIEW`, `CREATE INDEX`, `CREATE PARTITION`, `CREATE SEQUENCE`, `CREATE TRIGGER`, and `GRANT` clauses are supported.

    Objects created by the subcommand are owned by the user specified in the AUTHORIZATION clause.

>[!NOTE] Note
>If an object with the same name exists in a schema on the current search path, the schema where the referenced object resides must be explicitly specified. The schemas on the current search path can be viewed by running the `SHOW SEARCH_PATH` command.

## Examples<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_sd7a0dca78f6844d79a0ec70fb4213769"></a>

- Create a schema owned by user `user1`.

    Create a user named `user1`.

    ```
    openGauss=# CREATE USER user1 IDENTIFIED BY 'XXXXXXXX';
    CREATE ROLE
    ```

    Create a schema based on the username.

    ```
    openGauss=# CREATE SCHEMA test AUTHORIZATION user1;
    CREATE SCHEMA
    ```

- Rename schema `test` to `test1`.

    ```
    openGauss=# ALTER SCHEMA test RENAME TO test1;
    ALTER SCHEMA
    ```

- Modify the schema owner.

    Create a user named `user2`.

    ```
    openGauss=# CREATE USER user2 IDENTIFIED BY 'XXXXXXXXX';
    CREATE ROLE
    ```

    Modify the owner of schema from `test1` to `user2`.

    ```
    openGauss=# ALTER SCHEMA test1  OWNER TO user2;
    ALTER SCHEMA
    ```

- View the current search path.

    ```
    openGauss=# SHOW SEARCH_PATH;
      search_path
    ----------------
     "$user",public
    (1 row)
    ```

- Change the default schema for the current session.

    ```
    openGauss=# SET SEARCH_PATH TO test1, public;
    SET
    ```

- Drop the schema and its objects.

    ```
    openGauss=# DROP SCHEMA test1;
    DROP SCHEMA
    ```
