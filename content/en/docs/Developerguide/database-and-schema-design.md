# Database and Schema Design<a name="EN-US_TOPIC_0000001102948064"></a>

In openGauss, services can be isolated by databases and schemas. Databases share little resources and cannot directly access each other. Connections to and permissions on them are also isolated. Schemas share more resources than databases do. User permissions on schemas and subordinate objects can be controlled using the  **GRANT**  and  **REVOKE**  syntax.

-   You are advised to use schemas to isolate services for convenience and resource sharing.
-   It is recommended that system administrators create schemas and databases and then assign required permissions to users.

## Database Design<a name="en-us_topic_0097078336_section6542627416593"></a>

-   \[Rule\] Create databases as required by your service. Do not use the default  **postgres**  database of a database instance.
-   \[Proposal\] Create a maximum of three user-defined databases in a database instance.
-   \[Proposal\] To make your database compatible with most characters, you are advised to use the UTF-8 encoding when creating a database.
-   \[Notice\] When you create a database, exercise caution when you set  **ENCODING**  and  **DBCOMPATIBILITY**  configuration items. openGauss supports the A, B, C, and PG compatibility modes, which are compatible with the Oracle syntax, MySQL syntax, Teradata syntax, and Postgres syntax, respectively. The syntax behavior varies according to the compatibility mode. By default, the A compatibility mode is used.
-   \[Notice\] By default, a database owner has all permissions for all objects in the database, including the deletion permission. Exercise caution when deleting a permission.

## Schema Design<a name="en-us_topic_0097078336_section11591445165916"></a>

-   \[Notice\] To let a user access an object in a schema, assign the usage permission and the permissions for the object to the user, unless the user has the  **sysadmin**  permission or is the schema owner.
-   \[Notice\] To let a user create an object in the schema, grant the create permission for the schema to the user.
-   \[Notice\] By default, a schema owner has all permissions for all objects in the schema, including the deletion permission. Exercise caution when deleting a permission.

