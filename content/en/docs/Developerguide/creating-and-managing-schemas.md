# Creating and Managing Schemas<a name="EN-US_TOPIC_0289900215"></a>

## Background<a name="en-us_topic_0283136693_en-us_topic_0237120306_en-us_topic_0059779372_sccec47ed8ad54f89b98b83caf9a0b4fd"></a>

Schemas function as models. Schema management allows multiple users to use the same database without mutual impacts, to organize database objects as manageable logical groups, and to add third-party applications to the same schema without causing conflicts. Schema management involves creating a schema, using a schema, deleting a schema, setting a search path for a schema, and setting schema permissions.

## Precautions<a name="en-us_topic_0283136693_en-us_topic_0237120306_en-us_topic_0059779372_sf39acabf4d3c4f199303910765daa0cd"></a>

-   openGauss contains one or more named databases. Users and user groups are shared within openGauss, but their data is not shared. Any user who has connected to a server can access only the database specified in the connection request.
-   A database can have one or more schemas, and a schema can contain tables and other data objects, such as data types, functions, and operators. One object name can be used in different schemas. For example, both  **schema1**  and  **schema2**  can have a table named  **mytable**.
-   Different from databases, schemas are not isolated. You can access the objects in a schema of the connected database if you have schema permissions. To manage schema permissions, you need to have knowledge about database permissions.
-   A schema named with the  **PG\_**  prefix cannot be created because this type of schema is reserved for the database system.
-   Each time a new user is created, the system creates a schema with the same name for the new user in the current database. In other databases, such a schema needs to be manually created.
-   To reference a table that is not modified with a schema name, the system uses  **search\_path**  to find the schema that the table belongs to.  **pg\_temp**  and  **pg\_catalog**  are always the first two schemas to be searched no matter whether or how they are specified in  **search\_path**.  **search\_path**  is a schema name list, and the first table detected in it is the target table. If no target table is found, an error will be reported. \(If a table exists but the schema it belongs to is not listed in  **search\_path**, the search fails as well.\) The first schema in  **search\_path**  is called "current schema". This schema is the first one to be searched. If no schema name is declared, newly created database objects are saved in this schema by default.
-   Each database has a  **pg\_catalog**  schema, which contains system catalogs and all embedded data types, functions, and operators.  **pg\_catalog**  is a part of the search path and has the second highest search priority. It is searched after the schema of temporary tables and before other schemas specified in  **search\_path**. This search order ensures that database built-in objects can be found. To use a custom object that has the same name as a built-in object, you can specify the schema of the custom object.

## Procedure<a name="en-us_topic_0283136693_en-us_topic_0237120306_en-us_topic_0059779372_sc91f8eff24b147da9ced875c4303f986"></a>

-   Manage users and their permissions.
    -   Run the following command to create a schema:

        ```
        postgres=# CREATE SCHEMA myschema;
        ```

        If the following information is displayed, the schema named  **myschema**  is successfully created:

        ```
        CREATE SCHEMA
        ```

        To create or access an object in the schema, the object name in the command should consist of the schema name and the object name, which are separated by a dot \(.\), for example,  **myschema.table**.

    -   Run the following command to create a schema and specify the owner:

        ```
        postgres=# CREATE SCHEMA myschema AUTHORIZATION omm;
        ```

        If the following information is displayed, the  **myschema**  schema that belongs to  **omm**  is created successfully:

        ```
        CREATE SCHEMA
        ```


-   Use a schema.

    If you want to create or access an object in a specified schema, the object name must contain the schema name. To be specific, the name consists of a schema name and an object name, which are separated by a dot \(.\).

    -   Run the following command to create the  **mytable**  table in  **myschema**:

        ```
        postgres=# CREATE TABLE myschema.mytable(id int, name varchar(20));
        CREATE TABLE
        ```

        To specify the location of an object, the object name must contain the schema name.

    -   Run the following command to query all data of the  **mytable**  table in  **myschema**:

        ```
        postgres=# SELECT * FROM myschema.mytable;
        id | name 
        ----+------
        (0 rows)
        ```


-   View  **search\_path**  of a schema.

    You can set  **search\_path**  to specify the sequence of schemas in which objects are searched. The first schema listed in  **search\_path**  will become the default schema. If no schema is specified during object creation, the object will be created in the default schema.

    -   Run the following command to view  **search\_path**:

        ```
        postgres=# SHOW SEARCH_PATH;
         search_path
        ----------------
         "$user",public
        (1 row)
        ```

    -   Run the following command to set  **search\_path**  to  **myschema**  and  **public**  \(**myschema**  will be searched first\):

        ```
        postgres=# SET SEARCH_PATH TO myschema, public;
        SET
        ```


-   Set permissions for a schema.

    By default, a user can only access database objects in their own schema. Only after a user is granted with the usage permission for a schema by the schema owner, the user can access the objects in the schema.

    By granting the  **CREATE**  permission for a schema to a user, the user can create objects in this schema. By default, all roles have the  **USAGE**  permission in the  **public**  schema, but common users do not have the  **CREATE**  permission in the  **public**  schema. It is insecure for a common user to connect to a specified database and create objects in its  **public**  schema. If the common user has the  **CREATE**  permission on the  **public**  schema, it is advised to:

    -   Run the following command to revoke  **PUBLIC**'s permission to create objects in the  **public**  schema.  **public**  indicates the schema and  **PUBLIC**  indicates all roles.

        ```
        postgres=# REVOKE CREATE ON SCHEMA public FROM PUBLIC;
        REVOKE
        ```

    -   Run the following command to view the current schema:

        ```
        postgres=# SELECT current_schema();
         current_schema 
        ----------------
         myschema
        (1 row)
        ```

    -   Run the following commands to create user  **jack**  and grant the  **usage**  permission for  **myschema**  to the user:

        ```
        postgres=# CREATE USER jack IDENTIFIED BY 'xxxxxxxxx';
        CREATE ROLE
        postgres=# GRANT USAGE ON schema myschema TO jack;
        GRANT
        ```

    -   Run the following command to revoke the usage permission for  **myschema**  from  **jack**:

        ```
        postgres=# REVOKE USAGE ON schema myschema FROM jack;
        REVOKE
        ```


-   Delete a schema.
    -   If a schema is empty, that is, it contains no database objects, you can execute the  **DROP SCHEMA**  command to delete it. For example, run the following command to delete an empty schema named  **nullschema**:

        ```
        postgres=# DROP SCHEMA IF EXISTS nullschema;
        DROP SCHEMA
        ```

    -   To delete a schema that is not null, use the keyword  **CASCADE**  to delete it and all its objects. For example, run the following command to delete  **myschema**  and all its objects in it:

        ```
        postgres=# DROP SCHEMA myschema CASCADE;
        DROP SCHEMA
        ```

    -   Run the following command to delete user  **jack**:

        ```
        postgres=# DROP USER jack;
        DROP ROLE
        ```



