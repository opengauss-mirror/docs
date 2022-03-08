# Schemas<a name="EN-US_TOPIC_0289900181"></a>

Schemas allow multiple users to use the same database without interference. In this way, database objects can be organized into logical groups that are easy to manage, and third-party applications can be added to corresponding schemas without causing conflicts.

Each database has one or more schemas. Each schema contains tables and other types of objects. When a database is initially created, it has a schema named  **public**  by default, and all users have the usage permission on the schema. Only the system administrator and initial users can create functions, stored procedures, and synonyms in the public schema. Other users cannot create the three types of objects even if they have the create permission. You can group database objects by schema. A schema is similar to an OS directory but cannot be nested.By default only the initializing user can create objects in pg_catalog mode.

The same database object name can be used in different schemas of the same database without causing conflicts. For example, both  **a\_schema**  and  **b\_schema**  can contain a table named  **mytable**. Users with required permissions can access objects across multiple schemas of the same database.

When you run the  **CREATE USER**  command to create a user, the system creates a schema with the same name as the user in the database where the command is executed.

Database objects are generally created in the first schema in a database search path. For details about the first schema and how to change the schema order, see  [Search Path](#en-us_topic_0283137084_en-us_topic_0237121104_en-us_topic_0156599225_section03655314403).

## Creating, Modifying, and Deleting Schemas<a name="en-us_topic_0283137084_en-us_topic_0237121104_en-us_topic_0156599225_section0594124724510"></a>

-   To create a schema, use  **[CREATE SCHEMA](en-us_topic_0289901000.md)**. By default, the initial user and system administrator can create schemas. Other users can create schemas in the database only when they have the CREATE permission on the database. For details about how to grant the permission, see the syntax in  [GRANT](en-us_topic_0289900312.md).
-   To change the name or owner of a schema, use  **[ALTER SCHEMA](en-us_topic_0289900025.md)**. The schema owner can change the schema.
-   To delete a schema and its objects, use  [DROP SCHEMA](en-us_topic_0289900224.md). Schema owners can delete schemas.
-   To create a table in a schema, use the  _schema\_name_**.**_table\_name_  format to specify the table. If  _schema\_name_  is not specified, the table will be created in the first schema in  [search path](#en-us_topic_0283137084_en-us_topic_0237121104_en-us_topic_0156599225_section03655314403).
-   To view the owner of a schema, perform the following join query on the system catalogs  **PG\_NAMESPACE**  and  **PG\_USER**. Replace  _schema\_name_  in the statement with the name of the schema to be queried.

    ```
    openGauss=# SELECT s.nspname,u.usename AS nspowner FROM pg_namespace s, pg_user u WHERE nspname='schema_name' AND s.nspowner = u.usesysid;
    ```

-   To view a list of all schemas, query the system catalog  **PG\_NAMESPACE**.

    ```
    openGauss=# SELECT * FROM pg_namespace;
    ```

-   To view a list of tables in a schema, query the system catalog  **PG\_TABLES**. For example, the following query will return a table list from  **PG\_CATALOG**  in the schema.

    ```
    openGauss=# SELECT distinct(tablename),schemaname from pg_tables where schemaname = 'pg_catalog';
    ```


## Search Path<a name="en-us_topic_0283137084_en-us_topic_0237121104_en-us_topic_0156599225_section03655314403"></a>

A search path is defined in the  **[search\_path](en-us_topic_0283136752.md#en-us_topic_0237124732_en-us_topic_0059779117_s304b0a206e2e4ca782210ffb66cbc4b0)**  parameter. The parameter value is a list of schema names separated by commas \(,\). If no target schema is specified during object creation, the object is added to the first schema listed in the search path. If there are objects with the same name across different schemas and no schema is specified for an object query, the object will be returned from the first schema containing the object in the search path.

-   To view the current search path, use  [SHOW](en-us_topic_0289900662.md).

    ```
    openGauss=# SHOW SEARCH_PATH;
     search_path
    ----------------
     "$user",public
    (1 row)
    ```

    The default value of  **search\_path**  is  **"_$user_",public**.  _$user_  indicates the name of the schema with the same name as the current session user. If the schema does not exist,  _$user_  will be ignored. By default, after a user connects to a database that has schemas with the same name, objects will be added to all the schemas. If there are no such schemas, objects will be added only to the  **public**  schema.

-   To change the default schema of the current session, run the  **SET**  statement.

    Run the following command to set  **search\_path**  to  **myschema**  and  **public**  \(**myschema**  will be searched first\):

    ```
    openGauss=# SET SEARCH_PATH TO myschema, public;
    SET
    ```


