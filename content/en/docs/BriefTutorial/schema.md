# SCHEMA<a name="EN-US_TOPIC_0000001225258423"></a>

Schemas function as models. Schema management allows multiple users to use the same database without mutual impacts, to organize database objects as manageable logical groups, and to add third-party applications to the same schema without causing conflicts.

Each database has one or more schemas. Each schema contains tables and other types of objects. When a database is initially created, it has a public schema by default, and all users have the usage permission on the schema. Only the system administrator and initial users can create common functions, aggregate functions, stored procedures, and synonym objects in the public schema. Only the initial users can create operators in the public schema. Other users cannot create the preceding five types of objects even if they are granted the create permission. You can group database objects by schema. A schema is similar to an OS directory but cannot be nested.

The same database object name can be used in different schemas of the same database without causing conflicts. For example, both  **a\_schema**  and  **b\_schema**  can contain a table named  **mytable**. Users with required permissions can access objects across multiple schemas of the same database.

When you execute the CREATE USER statement to create a user, the system creates a schema with the same name as the user in the database where the statement is executed.

## Syntax<a name="section10988202911187"></a>

-   Create a schema.

    ```
    CREATE SCHEMA schema_name 
        [ AUTHORIZATION user_name ] ;
    ```

-   Modify a schema.
    -   Rename a schema.

        ```
        ALTER SCHEMA schema_name 
            RENAME TO new_name;
        ```

    -   Change the owner of a schema.

        ```
        ALTER SCHEMA schema_name 
            OWNER TO new_owner;
        ```


-   Delete a schema and its objects.

    ```
    DROP SCHEMA  schema_name;
    ```

    Schemas beginning with  **pg\_temp**  or  **pg\_toast\_temp**  are for internal use. Do not delete them. Otherwise, unexpected consequences may be incurred.


## Parameter Description<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_s9930d6a2a74b406980e00129b1f4fe2c"></a>

-   **schema\_name**

    Specifies the schema name.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >The name must be unique. 
    >The schema name cannot start with  **pg\_**.

    Value range: a string. It must comply with the identifier naming convention.

-   **AUTHORIZATION user\_name**

    Specifies the owner of a schema. If  **schema\_name**  is not specified,  **user\_name**  will be used as the schema name. In this case,  **user\_name**  can only be a role name.

    Value range: an existing username or role name

-   **schema\_element**

    Specifies an SQL statement defining an object to be created within a schema. Currently, only the  **CREATE TABLE**,  **CREATE VIEW**,  **CREATE INDEX**,  **CREATE PARTITION**,  **CREATE SEQUENCE**,  **CREATE TRIGGER**  and  **GRANT**  clauses are supported.

    Objects created by sub-commands are owned by the user specified by  **AUTHORIZATION**.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If objects in the schema on the current search path are with the same name, specify the schemas for different objects. You can run the SHOW SEARCH\_PATH statement to check the schemas on the current search path.

## Examples<a name="en-us_topic_0283136607_en-us_topic_0237122070_en-us_topic_0059779037_sd7a0dca78f6844d79a0ec70fb4213769"></a>

-   Create a schema for the  **user1**  user.

    Create the  **user1**  user.

    ```
    openGauss=# CREATE USER user1 IDENTIFIED BY 'XXXXXXXX';
    CREATE ROLE
    ```

    Create a schema based on the username.

    ```
    openGauss=# CREATE SCHEMA test AUTHORIZATION user1;
    CREATE SCHEMA
    ```

-   Change the name of the  **test**  schema to  **test1**.

    ```
    openGauss=# ALTER SCHEMA test RENAME TO test1;
    ALTER SCHEMA
    ```

-   Change the owner of the schema.

    Create the  **user2**  user.

    ```
    openGauss=# CREATE USER user2 IDENTIFIED BY 'XXXXXXXXX';
    CREATE ROLE
    ```

    Change the owner of the  **test1**  schema to  **user2**.

    ```
    openGauss=# ALTER SCHEMA test1  OWNER TO user2;
    ALTER SCHEMA
    ```

-   Check the current search path.

    ```
    openGauss=# SHOW SEARCH_PATH;
      search_path
    ----------------
     "$user",public
    (1 row)
    ```

-   Change the default schema of the current session.

    ```
    openGauss=# SET SEARCH_PATH TO test1, public;
    SET
    ```

-   Delete the schema and its objects.

    ```
    openGauss=# DROP SCHEMA test1;
    DROP SCHEMA
    ```
