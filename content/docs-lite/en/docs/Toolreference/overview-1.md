# Overview<a name="EN-US_TOPIC_0294749014"></a>

## Background<a name="en-us_topic_0059779348_section840612614118"></a>

When a database is initialized using  **gs\_initdb**, a database directory is created, a system catalog is generated, and a default database and a template database are created.

## System Catalogs<a name="en-us_topic_0059779348_sb69920e012c84bbbb55593eaa5778652"></a>

A large number of system catalogs and views are generated when a database is initialized, many of which allow access from any database user.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Permissions on  **pg\_user\_status**  and  **pg\_auth\_history**  system catalogs are granted only to initialization users and  **sysadmin**  users.

## Generated Databases<a name="en-us_topic_0059779348_sbaf982cf2e9549fa8e083844774de07b"></a>

-   **template1**: A template database. When you create a database, all content in the  **template1**  database is copied. The settings of  **template1**  are determined by the parameters of  **gs\_initdb**.
-   **template0**: The most initial backup database provided by openGauss.  **template0**  can be used to generate an empty database if necessary.
-   **postgres**: A default database provided for users, tools, and third-party applications.

