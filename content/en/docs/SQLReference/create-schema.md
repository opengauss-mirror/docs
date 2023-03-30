# CREATE SCHEMA<a name="EN-US_TOPIC_0289901000"></a>

## Function<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_s8496918cf41f499098fc49523f02b0d8"></a>

**CREATE SCHEMA**  creates a schema.

Named objects are accessed either by "qualifying" their names with the schema name as a prefix, or by setting a search path that includes the desired schema. When creating named objects, you can also use the schema name as a prefix.

Optionally,  **CREATE SCHEMA**  can include sub-commands to create objects within the new schema. The sub-commands are treated essentially the same as separate commands issued after creating the schema. If the  **AUTHORIZATION**  clause is used, all the created objects are owned by this user.

## Precautions<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_s438fd9a3c5b84d16b7810533d50c71b9"></a>

-   Only a user with the  **CREATE**  permission on the current database can perform this operation.
-   The owner of an object created by a system administrator in a schema with the same name as a common user is the common user, not the system administrator.

## Syntax<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_sf8fcd5db414748bcaa6b2f79f6247377"></a>

-   Create a schema based on a specified name.

    ```
    CREATE SCHEMA schema_name 
        [ AUTHORIZATION user_name ] [WITH BLOCKCHAIN] [ schema_element [ ... ] ];
    ```

-   Create a schema based on a username.

    ```
    CREATE SCHEMA AUTHORIZATION user_name [ schema_element [ ... ] ];
    ```


## Parameter Description<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_s9930d6a2a74b406980e00129b1f4fe2c"></a>

-   **schema\_name**

    Specifies the schema name.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >The name must be unique. 
    >The schema name cannot start with  **pg\_**.

    Value range: a string. It must comply with the naming convention rule.

-   **AUTHORIZATION user\_name**

    Specifies the owner of a schema. If  **schema\_name**  is not specified,  **user\_name**  will be used as the schema name. In this case,  **user\_name**  can only be a role name.

    Value range: an existing username or role name

-   **WITH BLOCKCHAIN**

    Specifies the tamper-proof attribute of a schema. In this mode, a row-store common user table is automatically extended to tamper-proof user table.

-   **schema\_element**

    Specifies an SQL statement defining an object to be created within the schema. Currently, only the  **CREATE TABLE**,  **CREATE VIEW**,  **CREATE INDEX**,  **CREATE PARTITION**,  **CREATE SEQUENCE**,  **CREATE TRIGGER**  and  **GRANT**  clauses are supported.

    Objects created by sub-commands are owned by the user specified by  **AUTHORIZATION**.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If objects in the schema on the current search path are with the same name, specify the schemas for different objects. You can run  **SHOW SEARCH\_PATH**  to check the schemas on the current search path.

## Examples<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_s05e72232af5e4507aad1511c025d7617"></a>

```
-- Create the role1 role.
openGauss=# CREATE ROLE role1 IDENTIFIED BY 'xxxxxxxxx';

-- Create a schema named role1 for the role1 role. The owner of the films and winners tables created by the clause is role1.
openGauss=# CREATE SCHEMA AUTHORIZATION role1
     CREATE TABLE films (title text, release date, awards text[])      
     CREATE VIEW winners AS         
     SELECT title, release FROM films WHERE awards IS NOT NULL;

-- Delete the schema.
openGauss=# DROP SCHEMA role1 CASCADE;
-- Delete the user.
openGauss=# DROP USER role1 CASCADE;
```

## Helpful Links<a name="en-us_topic_0283137491_en-us_topic_0237122113_en-us_topic_0059777945_sf210cb55e4884955b9809f27c7c55ce9"></a>

[ALTER SCHEMA](alter-schema.md)  and  [DROP SCHEMA](drop-schema.md)
