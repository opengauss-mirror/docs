# CREATE PUBLICATION<a name="EN-US_TOPIC_0000001243437361"></a>

## Function<a name="section12584151914217"></a>

**CREATE PUBLICATION**  adds a new publication to the current database. The publication name must be different from the name of any existing publication in the current database. A publication is essentially the replication of data changes in a set of tables achieved by logical replication.

## Precautions<a name="section412011394429"></a>

-   If neither  **FOR TABLE**  nor  **FOR ALL TABLES**  is specified, a publication starts with a set of empty tables. Tables can be added later.
-   Creating a publication does not start replication. It defines only one group and filtering logic for future subscribers. To create a publication, the caller must have the  **CREATE**  permission on the current database. \(The system administrator does not need to perform a check on this.\)
-   To add a table to a publication, the caller must have ownership of the table. The  **FOR ALL TABLES**  clause requires that the caller be a user with the  **SYSADMIN**  permission.
-   Tables in the internal schemas of the database, including  **blockchain**,  **cstore**,  **db4ai**,  **dbe\_pldebugger**,  **dbe\_pldeveloper**,  **pkg\_service**,  **snapshot**, and  **sqladvisor**, are not published.
-   Tables added to a publication that publishes UPDATE or DELETE operations must already have  **REPLICA IDENTITY**  defined or have a primary key; otherwise, these operations will be prohibited in those tables.
-   The  **COPY... FROM**  command is used to publish INSERT operations. It cannot be used to publish TRUNCATE and DDL operations.

## Syntax<a name="section52689257424"></a>

```
CREATE PUBLICATION name 
    [ FOR TABLE table_name [, ...] 
      | FOR ALL TABLES ] 
    [ WITH ( publication_parameter [=value] [, ... ] ) ];
```

## Parameter Description<a name="section581153212424"></a>

-   **name**

    Specifies the name of a new publication.

-   **FOR TABLE**

    Specifies the list of tables to be added to a publication. Only persistent base tables can be published. Temporary tables, unlogged tables, foreign tables, MOTs, materialized views, and regular views cannot be published.

-   **FOR ALL TABLES**

    Marks a publication as replicating changes of all tables in the database, including tables to be created.

-   **WITH \( publication\_parameter \[= value\] \[, ... \] \)**

    Specifies the optional parameters for a publication. The following parameters are supported:

    -   **publish \(string\)**

        Specifies which DML operations can be published to subscribers. The value of this parameter is a list of operations separated by commas \(,\). The allowed operations are INSERT, UPDATE, and DELETE. If this parameter is not specified, all operations are published by default. The default value is  **'insert, update, delete'**.



## Examples<a name="section109371845154215"></a>

```
-- Create a publication to publish all changes in two tables.
CREATE PUBLICATION mypublication FOR TABLE users, departments;
-- Create a publication to publish all changes in all tables.
CREATE PUBLICATION alltables FOR ALL TABLES;
-- Create a publication to publish INSERT operations in only one table.
CREATE PUBLICATION insert_only FOR TABLE mydata WITH (publish = 'insert');
-- Modify publication operations.
ALTER PUBLICATION insert_only SET (publish='insert,update,delete');
-- Add a table to a publication.
ALTER PUBLICATION insert_only ADD TABLE mydata2;
-- Delete a publication.
DROP PUBLICATION insert_only;
```

## Helpful Links<a name="section871143685317"></a>

[ALTER PUBLICATION](alter-publication.md)  and  [DROP PUBLICATION](drop-publication.md)
