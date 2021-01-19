# System Information Functions<a name="EN-US_TOPIC_0242370451"></a>

## Session Information Functions<a name="en-us_topic_0237121987_en-us_topic_0059777618_seb0ac642d9594cfe9a06d3d304c6dc75"></a>

-   current\_catalog

    Description: Name of the current database \(called "catalog" in the SQL standard\)

    Return type: name

    Example:

    ```
    postgres=# SELECT current_catalog;
     current_database
    ------------------
     postgres
    (1 row)
    ```

-   current\_database\(\)

    Description: Name of the current database

    Return type: name

    Example:

    ```
    postgres=# SELECT current_database();
     current_database
    ------------------
     postgres
    (1 row)
    ```

-   current\_query\(\)

    Description: Text of the currently executing query, as submitted by the client \(might contain more than one statement\)

    Return type: text

    Example:

    ```
    postgres=# SELECT current_query();
          current_query
    -------------------------
     SELECT current_query();
    (1 row)
    ```

-   current\_schema\[\(\)\]

    Description: Name of current schema

    Return type: name

    Example:

    ```
    postgres=# SELECT current_schema();
     current_schema
    ----------------
     public
    (1 row)
    ```

    Remarks:  **current\_schema**  returns the first valid schema name in the search path. \(If the search path is empty or contains no valid schema name,  **NULL**  is returned.\) This is the schema that will be used for any tables or other named objects that are created without specifying a target schema.

-   current\_schemas\(Boolean\)

    Description: Names of schemas in search path

    Return type: name\[\]

    Example:

    ```
    postgres=# SELECT current_schemas(true);
       current_schemas
    ---------------------
     {pg_catalog,public}
    (1 row)
    ```

    Note:

    **current\_schemas\(Boolean\)**  returns an array of the names of all schemas presently in the search path. The Boolean option determines whether implicitly included system schemas such as  **pg\_catalog**  are included in the returned search path.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The search path can be altered at run time by running the following command:  
    >```  
    >SET search_path TO schema [, schema, ...]  
    >```

-   current\_user

    Description: User name of current execution context

    Return type: name

    Example:

    ```
    postgres=# SELECT current_user;
     current_user
    --------------
     omm
    (1 row)
    ```

    Note:  **current\_user**  is the user identifier that is applicable for permission checking. Normally it is equal to the session user, but it can be changed with  [SET ROLE](set-role.md). It also changes during the execution of functions with the attribute  **SECURITY DEFINER**.

-   pg\_current\_sessionid\(\)

    Description: Session ID of current execution context

    Return type: text

    Example:

    ```
    postgres=# SELECT pg_current_sessionid();
        pg_current_sessionid
    ----------------------------
     1579228402.140190434944768
    (1 row)
    ```

    Note:  **pg\_current\_sessionid\(\)**  is used to obtain the session ID in the current execution context. The structure of the value is  _Timestamp. Session ID_. When  **enable\_thread\_pool**  is set to  **off**, the actual session ID is the thread ID.

-   inet\_client\_addr\(\)

    Description: Remote connection address.  **inet\_client\_addr**  returns the IP address of the current client.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >It is available only in remote connection mode.  

    Return type: inet

    Example:

    ```
    postgres=# SELECT inet_client_addr();
     inet_client_addr
    ------------------
     10.10.0.50
    (1 row)
    ```

-   inet\_client\_port\(\)

    Description: Remote connection port. And  **inet\_client\_port**  returns the port number of the current client.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >It is available only in remote connection mode.  

    Return type: int

    Example:

    ```
    postgres=# SELECT inet_client_port();
     inet_client_port
    ------------------
                33143
    (1 row)
    ```

-   inet\_server\_addr\(\)

    Description: Local connection address.  **inet\_server\_addr**  returns the IP address on which the server accepted the current connection.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >It is available only in remote connection mode.  

    Return type: inet

    Example:

    ```
    postgres=# SELECT inet_server_addr();
     inet_server_addr
    ------------------
     10.10.0.13
    (1 row)
    ```

-   inet\_server\_port\(\)

    Description: Local connection port.  **inet\_server\_port**  returns the port number. All these functions return NULL if the current connection is via a Unix-domain socket. 

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >It is available only in remote connection mode.  

    Return type: int

    Example:

    ```
    postgres=# SELECT inet_server_port();
     inet_server_port
    ------------------
                 8000
    (1 row)
    ```

-   pg\_backend\_pid\(\)

    Description: Process ID of the server process attached to the current session

    Return type: int

    Example:

    ```
    postgres=# SELECT pg_backend_pid();
     pg_backend_pid
    -----------------
     140229352617744
    (1 row)
    ```

-   pg\_conf\_load\_time\(\)

    Description: Configures load time.  **pg\_conf\_load\_time**  returns the timestamp with time zone when the server configuration files were last loaded.

    Return type: timestamp with time zone

    Example:

    ```
    postgres=# SELECT pg_conf_load_time();
          pg_conf_load_time       
    ------------------------------
     2017-09-01 16:05:23.89868+08
    (1 row)
    ```

-   pg\_my\_temp\_schema\(\)

    Description: OID of the temporary schema of a session. The value is 0 if the OID does not exist.

    Return type: oid

    Example:

    ```
    postgres=# SELECT pg_my_temp_schema();
     pg_my_temp_schema 
    -------------------
                     0
    (1 row)
    ```

    Note:  **pg\_my\_temp\_schema**  returns the OID of the current session's temporary schema, or zero if it has none \(because it has not created any temporary tables\).  **pg\_is\_other\_temp\_schema**  returns true if the given OID is the OID of another session's temporary schema.

-   pg\_is\_other\_temp\_schema\(oid\)

    Description: Whether the schema is the temporary schema of another session.

    Return type: Boolean

    Example:

    ```
    postgres=# SELECT pg_is_other_temp_schema(25356);
     pg_is_other_temp_schema
    -------------------------
     f
    (1 row)
    ```

-   pg\_listening\_channels\(\)

    Description: Channel names that the session is currently listening on

    Return type: setof text

    Example:

    ```
    postgres=# SELECT pg_listening_channels();
     pg_listening_channels
    -----------------------
    (0 rows)
    ```

    Note:  **pg\_listening\_channels**  returns a set of names of channels that the current session is listening to.

-   pg\_postmaster\_start\_time\(\)

    Description: Server start time  **pg\_postmaster\_start\_time**  returns the  **timestamp with time zone**  when the server started.

    Return type: timestamp with time zone

    Example:

    ```
    postgres=# SELECT pg_postmaster_start_time();
       pg_postmaster_start_time   
    ------------------------------
     2017-08-30 16:02:54.99854+08
    (1 row)
    ```

-   pg\_trigger\_depth\(\)

    Description: Current nesting level of triggers

    Return type: int

    Example:

    ```
    postgres=# SELECT pg_trigger_depth();
     pg_trigger_depth 
    ------------------
                    0
    (1 row)
    ```

-   pgxc\_version\(\)

    Description: Postgres-XC version information

    Return type: text

    Example:

    ```
    postgres=# SELECT pgxc_version();
                                                    pgxc_version                                                 
    -------------------------------------------------------------------------------------------------------------
     Postgres-XC 1.1 on x86_64-unknown-linux-gnu, based on PostgreSQL 9.2.4, compiled by g++ (GCC) 5.4.0, 64-bit
    (1 row)
    ```

-   session\_user

    Description: Session user name

    Return type: name

    Example:

    ```
    postgres=# SELECT session_user;
     session_user
    --------------
     omm
    (1 row)
    ```

    Note:  **session\_user**  is usually the user who initiated the current database connection, but administrators can change this setting with  [SET SESSION AUTHORIZATION](set-session-authorization.md).

-   user

    Description: Equivalent to  **current\_user**.

    Return type: name

    Example:

    ```
    postgres=# SELECT user;
     current_user
    --------------
     omm
    (1 row)
    ```

-   version\(\)

    Description: version information.  **version**  returns a string describing a server's version.

    Return type: text

    Example:

    ```
    postgres=# SELECT version();
                                                                    version                                                                
    ---------------------------------------------------------------------------------------------------------------------------------------
     PostgreSQL 9.2.4 (openGauss-x.x.x build 66e54e4d) compiled at 2020-12-02 13:02:26 commit 7218 last mr 10175  on x86_64-unknown-linux-gnu, compiled by g++ (GCC) 8.2.0, 64-bit
    
    (1 row)
    ```


## Access privilege inquiry function<a name="en-us_topic_0237121987_en-us_topic_0059777618_s8be48efddaf84c7fb405513993705867"></a>

-   has\_any\_column\_privilege\(user, table, privilege\)

    Description: Queries whether a specified user has permission for any column of table.

    Return type: Boolean

-   has\_any\_column\_privilege\(table, privilege\)

    Description: Queries whether the current user has permission for any column of table.

    Return type: Boolean

    **has\_any\_column\_privilege**  checks whether a user can access any column of a table in a particular way. Its parameter possibilities are analogous to  **has\_table\_privilege**, except that the desired access permission type must be some combination of SELECT, INSERT, UPDATE, or REFERENCES.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Note that having any of these permissions at the table level implicitly grants it for each column of the table, so  **has\_any\_column\_privilege**  will always return  **true**  if  **has\_table\_privilege**  does for the same parameters. But  **has\_any\_column\_privilege**  also succeeds if there is a column-level grant of the permission for at least one column.  

-   has\_column\_privilege\(user, table, column, privilege\)

    Description: Queries whether a specified user has permission for column.

    Return type: Boolean

-   has\_column\_privilege\(table, column, privilege\)

    Description: Queries whether the current user has permission for column.

    Return type: Boolean

    **has\_column\_privilege**  checks whether a user can access a column in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**, with the addition that the column can be specified either by name or attribute number. The desired access permission type must evaluate to some combination of  **SELECT**,  **INSERT**,  **UPDATE**, or  **REFERENCES**.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Note that having any of these permissions at the table level implicitly grants it for each column of the table.  

-   has\_database\_privilege\(user, database, privilege\)

    Description: Queries whether a specified user has permission for database.

    Return type: Boolean

-   has\_database\_privilege\(database, privilege\)

    Description: Queries whether the current user has permission for database.

    Return type: Boolean

    Note:  **has\_database\_privilege**  checks whether a user can access a database in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to some combination of  **CREATE**,  **CONNECT**,  **TEMPORARY**, or  **TEMP**  \(which is equivalent to  **TEMPORARY**\).

-   has\_directory\_privilege\(user, database, privilege\)

    Description: Queries whether a specified user has permission for directory.

    Return type: Boolean

-   has\_directory\_privilege\(database, privilege\)

    Description: Queries whether the current user has permission for directory.

    Return type: Boolean

-   has\_foreign\_data\_wrapper\_privilege\(user, fdw, privilege\)

    Description: Queries whether a specified user has permission for foreign-data wrapper.

    Return type: Boolean

-   has\_foreign\_data\_wrapper\_privilege\(fdw, privilege\)

    Description: Queries whether the current user has permission for foreign-data wrapper.

    Return type: Boolean

    Note:  **has\_foreign\_data\_wrapper\_privilege**  checks whether a user can access a foreign-data wrapper in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to  **USAGE**.

-   has\_function\_privilege\(user, function, privilege\)

    Description: Queries whether a specified user has permission for function.

    Return type: Boolean

-   has\_function\_privilege\(function, privilege\)

    Description: Queries whether the current user has permission for function.

    Return type: Boolean

    Note:  **has\_function\_privilege**  checks whether a user can access a function in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. When a function is specified by a text string rather than by OID, the allowed input is the same as that for the  **regprocedure**  data type \(see  [Object Identifier Types](object-identifier-types.md)\). The desired access permission type must evaluate to  **EXECUTE**.

-   has\_language\_privilege\(user, language, privilege\)

    Description: Queries whether a specified user has permission for language.

    Return type: Boolean

-   has\_language\_privilege\(language, privilege\)

    Description: Queries whether the current user has permission for language.

    Return type: Boolean

    Note:  **has\_language\_privilege**  checks whether a user can access a procedural language in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to  **USAGE**.

-   has\_schema\_privilege\(user, schema, privilege\)

    Description: Queries whether a specified user has permission for schema.

    Return type: Boolean

-   has\_schema\_privilege\(schema, privilege\)

    Description: Queries whether the current user has permission for schema.

    Return type: Boolean

    Note:  **has\_schema\_privilege**  checks whether a user can access a schema in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to some combination of  **CREATE**  or  **USAGE**.

-   has\_server\_privilege\(user, server, privilege\)

    Description: Queries whether a specified user has permission for foreign server.

    Return type: Boolean

-   has\_server\_privilege\(server, privilege\)

    Description: Queries whether the current user has permission for foreign server.

    Return type: Boolean

    Note:  **has\_server\_privilege**  checks whether a user can access a foreign server in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to  **USAGE**.

-   has\_table\_privilege\(user, table, privilege\)

    Description: Queries whether a specified user has permission for table.

    Return type: Boolean

-   has\_table\_privilege\(table, privilege\)

    Description: Queries whether the current user has permission for table.

    Return type: Boolean

    **has\_table\_privilege**  checks whether a user can access a table in a particular way. The user can be specified by name, by OID \(**pg\_authid.oid**\),  **public**  to indicate the PUBLIC pseudo-role, or if the argument is omitted  **current\_user**  is assumed. The table can be specified by name or by OID. When specifying by name, the name can be schema-qualified if necessary. The desired access permission type is specified by a text string, which must be one of the values  **SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**,  **TRUNCATE**,  **REFERENCES**, or  **TRIGGER**. Optionally,  **WITH GRANT OPTION**  can be added to a permission type to test whether the permission is held with grant option. Also, multiple permission types can be listed separated by commas, in which case the result will be  **true**  if any of the listed permissions is held.

    Example:

    ```
    postgres=# SELECT has_table_privilege('tpcds.web_site', 'select');
     has_table_privilege  
    --------------------- 
     t 
    (1 row)
    
    postgres=# SELECT has_table_privilege('omm', 'tpcds.web_site', 'select,INSERT WITH GRANT OPTION ');
     has_table_privilege  
    --------------------- 
     t 
    (1 row) 
    ```

-   has\_tablespace\_privilege\(user, tablespace, privilege\)

    Description: Queries whether a specified user has permission for tablespace.

    Return type: Boolean

-   has\_tablespace\_privilege\(tablespace, privilege\)

    Description: Queries whether the current user has permission for tablespace.

    Return type: Boolean

    Note:  **has\_tablespace\_privilege**  checks whether a user can access a tablespace in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to  **CREATE**.

-   pg\_has\_role\(user, role, privilege\)

    Description: Queries whether a specified user has permission for role.

    Return type: Boolean

-   pg\_has\_role\(role, privilege\)

    Description: Specifies whether the current user has permission for role.

    Return type: Boolean

    Note:  **pg\_has\_role**  checks whether a user can access a role in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**, except that  **public**  is not allowed as a user name. The desired access permission type must evaluate to some combination of  **MEMBER**  or  **USAGE**.  **MEMBER**  denotes direct or indirect membership in the role \(that is, the right to do  **SET ROLE**\), while  **USAGE**  denotes the permissions of the role are available without doing  **SET ROLE**.


## Schema Visibility Inquiry Functions<a name="en-us_topic_0237121987_en-us_topic_0059777618_s8c676f27906a4d0babc4ed2bca955536"></a>

Each function performs the visibility check for one type of database object. For functions and operators, an object in the search path is visible if there is no object of the same name and argument data type\(s\) earlier in the path. For operator classes, both name and associated index access method are considered.

All these functions require object OIDs to identify the object to be checked. If you want to test an object by name, it is convenient to use the OID alias types \(**regclass**,  **regtype**,  **regprocedure**,  **regoperator**,  **regconfig**, or  **regdictionary**\).

For example, a table is said to be visible if its containing schema is in the search path and no table of the same name appears earlier in the search path. This is equivalent to the statement that the table can be referenced by name without explicit schema qualification. For example, to list the names of all visible tables:

```
postgres=# SELECT relname FROM pg_class WHERE pg_table_is_visible(oid);
```

-   pg\_collation\_is\_visible\(collation\_oid\)

    Description: Queries whether the collation is visible in search path.

    Return type: Boolean

-   pg\_conversion\_is\_visible\(conversion\_oid\)

    Description: Queries whether the conversion is visible in search path.

    Return type: Boolean

-   pg\_function\_is\_visible\(function\_oid\)

    Description: Queries whether the function is visible in search path.

    Return type: Boolean

-   pg\_opclass\_is\_visible\(opclass\_oid\)

    Description: Queries whether the operator class is visible in search path.

    Return type: Boolean

-   pg\_operator\_is\_visible\(operator\_oid\)

    Description: Queries whether the operator is visible in search path.

    Return type: Boolean

-   pg\_opfamily\_is\_visible\(opclass\_oid\)

    Description: Queries whether the operator family is visible in search path.

    Return type: Boolean

-   pg\_table\_is\_visible\(table\_oid\)

    Description: Queries whether the table is visible in search path.

    Return type: Boolean

-   pg\_ts\_config\_is\_visible\(config\_oid\)

    Description: Queries whether the text search configuration is visible in search path.

    Return type: Boolean

-   pg\_ts\_dict\_is\_visible\(dict\_oid\)

    Description: Queries whether the text search dictionary is visible in search path.

    Return type: Boolean

-   pg\_ts\_parser\_is\_visible\(parser\_oid\)

    Description: Queries whether the text search parser is visible in search path.

    Return type: Boolean

-   pg\_ts\_template\_is\_visible\(template\_oid\)

    Description: Queries whether the text search template is visible in search path.

    Return type: Boolean

-   pg\_type\_is\_visible\(type\_oid\)

    Description: Queries whether the type \(or domain\) is visible in search path.

    Return type: Boolean


## System Catalog Information Functions<a name="en-us_topic_0237121987_en-us_topic_0059777618_s36b999f626b14c599c6350642521a34e"></a>

-   format\_type\(type\_oid, typemod\)

    Description: Gets SQL name of a data type.

    Return type: text

    Note:  **format\_type**  returns the SQL name of a data type that is identified by its type OID and possibly a type modifier. Pass NULL for the type modifier if no specific modifier is known. Certain type modifiers are passed for data types with length limitations. The SQL name returned from  **format\_type**  contains the length of the data type, which can be calculated by taking sizeof\(int32\) from actual storage length \[actual storage len - sizeof\(int32\)\] in the unit of bytes. 32-bit space is required to store the customized length set by users. So the actual storage length contains 4 bytes more than the customized length. In the following example, the SQL name returned from  **format\_type**  is character varying\(6\), indicating the length of varchar type is 6 bytes. So the actual storage length of varchar type is 10 bytes.

    ```
    postgres=# SELECT format_type((SELECT oid FROM pg_type WHERE typname='varchar'), 10);
         format_type      
    ----------------------
     character varying(6)
    (1 row)
    ```

-   pg\_check\_authid\(role\_oid\)

    Description: Check whether a role name with given OID exists.

    Return type: bool

-   pg\_describe\_object\(catalog\_id, object\_id, object\_sub\_id\)

    Description: Gets description of a database object.

    Return type: text

    Note:  **pg\_describe\_object**  returns a description of a database object specified by catalog OID, object OID and a \(possibly zero\) sub-object ID. This is useful to determine the identity of an object as stored in the  **pg\_depend**  catalog.

-   pg\_get\_constraintdef\(constraint\_oid\)

    Description: Gets definition of a constraint.

    Return type: text

-   pg\_get\_constraintdef\(constraint\_oid, pretty\_bool\)

    Description: Gets definition of a constraint.

    Return type: text

    Note:  **pg\_get\_constraintdef**  and  **pg\_get\_indexdef**  respectively reconstruct the creating command for a constraint and an index. 

-   pg\_get\_expr\(pg\_node\_tree, relation\_oid\)

    Description: Decompiles internal form of an expression, assuming that any Vars in it refer to the relationship indicated by the second parameter.

    Return type: text

-   pg\_get\_expr\(pg\_node\_tree, relation\_oid, pretty\_bool\)

    Description: Decompiles internal form of an expression, assuming that any Vars in it refer to the relationship indicated by the second parameter.

    Return type: text

    Note:  **pg\_get\_expr**  decompiles the internal form of an individual expression, such as the default value for a column. It can be useful when examining the contents of system catalogs. If the expression might contain Vars, specify the OID of the relationship they refer to as the second parameter; if no Vars are expected, zero is sufficient.

-   pg\_get\_functiondef\(func\_oid\)

    Description: Gets definition of a function.

    Return type: text

-   pg\_get\_function\_arguments\(func\_oid\)

    Description: Gets argument list of function's definition \(with default values\).

    Return type: text

    Note:  **pg\_get\_function\_arguments**  returns the argument list of a function, in the form it would need to appear in within  **CREATE FUNCTION**.

-   pg\_get\_function\_identity\_arguments\(func\_oid\)

    Description: Gets argument list to identify a function \(without default values\).

    Return type: text

    Note:  **pg\_get\_function\_identity\_arguments**  returns the argument list necessary to identify a function, in the form it would need to appear in within  **ALTER FUNCTION**. This form omits default values.

-   pg\_get\_function\_result\(func\_oid\)

    Description: Gets  **RETURNS**  clause for function.

    Return type: text

    Note:  **pg\_get\_function\_result**  returns the appropriate  **RETURNS**  clause for the function.

-   pg\_get\_indexdef\(index\_oid\)

    Description: Gets  **CREATE INDEX**  command for index.

    Return type: text

-   pg\_get\_indexdef\(index\_oid, column\_no, pretty\_bool\)

    Description: Gets  **CREATE INDEX**  command for index, or definition of just one index column when  **column\_no**  is not zero.

    Return type: text

    Note:  **pg\_get\_functiondef**  returns a complete  **CREATE OR REPLACE FUNCTION**  statement for a function.

-   pg\_get\_keywords\(\)

    Description: Gets list of SQL keywords and their categories.

    Return type: setof record

    Note:  **pg\_get\_keywords**  returns a set of records describing the SQL keywords recognized by the server. The  **word**  column contains the keyword. The  **catcode**  column contains a category code:  **U**  for unreserved,  **C**  for column name,  **T**  for type or function name, or  **R**  for reserved. The  **catdesc**  column contains a possibly-localized string describing the category.

-   pg\_get\_userbyid\(role\_oid\)

    Description: Gets role name with given OID.

    Return type: name

    Note:  **pg\_get\_userbyid**  extracts a role's name given its OID.

-   pg\_get\_viewdef\(view\_name\)

    Description: Gets underlying SELECT command for view.

    Return type: text

-   pg\_get\_viewdef\(view\_name, pretty\_bool\)

    Description: Gets underlying  **SELECT**  command for view, lines with columns are wrapped to 80 columns if  **pretty\_bool**  is true.

    Return type: text

    Note:  **pg\_get\_viewdef**  reconstructs the  **SELECT**  query that defines a view. Most of these functions come in two variants. When the function has the parameter  **pretty\_bool**  and the value is true, it can optionally "pretty-print" the result. The pretty-printed format is more readable. The other one is default format which is more likely to be interpreted the same way by future versions of PostgreSQL. Avoid using pretty-printed output for dump purposes. Passing  **false**  for the pretty-print parameter yields the same result as the variant that does not have the parameter at all.

-   pg\_get\_viewdef\(view\_oid\)

    Description: Gets underlying SELECT command for view.

    Return type: text

-   pg\_get\_viewdef\(view\_oid, pretty\_bool\)

    Description: Gets underlying  **SELECT**  command for view, lines with columns are wrapped to 80 columns if  **pretty\_bool**  is true.

    Return type: text

-   pg\_get\_viewdef\(view\_oid, wrap\_column\_int\)

    Description: Gets underlying SELECT command for view, wrapping lines with columns as specified, printing is implied.

    Return type: text

-   pg\_get\_tabledef\(table\_oid\)

    Description: Obtains a table definition based on  **table\_oid**.

    Return type: text

-   pg\_get\_tabledef\(table\_name\)

    Description: Obtains a table definition based on  **table\_name**.

    Return type: text

    Remarks:  **pg\_get\_tabledef**  reconstructs the  **CREATE**  statement of the table definition, including the table definition, index information, and comments. Users need to create the dependent objects of the table, such as groups, schemas, tablespaces, and servers. The table definition does not include the statements for creating these dependent objects.

-   pg\_options\_to\_table\(reloptions\)

    Description: Gets the set of storage option name/value pairs.

    Return type: setof record

    Note:  **pg\_options\_to\_table**  returns the set of storage option name/value pairs \(**option\_name**/**option\_value**\) when passed  **pg\_class.reloptions**  or  **pg\_attribute.attoptions**.

-   pg\_tablespace\_databases\(tablespace\_oid\)

    Description: Gets the set of database OIDs that have objects in the specified tablespace.

    Return type: setof oid

    Note:  **pg\_tablespace\_databases**  allows a tablespace to be examined. It returns the set of OIDs of databases that have objects stored in the tablespace. If this function returns any rows, the tablespace is not empty and cannot be dropped. To display the specific objects populating the tablespace, you will need to connect to the databases identified by  **pg\_tablespace\_databases**  and query their  **pg\_class**  catalogs.

-   pg\_tablespace\_location\(tablespace\_oid\)

    Description: Gets the path in the file system that this tablespace is located in.

    Return type: text

-   pg\_typeof\(any\)

    Description: Gets the data type of any value.

    Return type: regtype

    Note:  **pg\_typeof**  returns the OID of the data type of the value that is passed to it. This can be helpful for troubleshooting or dynamically constructing SQL queries. The function is declared as returning  **regtype**, which is an OID alias type \(see  [Object Identifier Types](object-identifier-types.md)\). This means that it is the same as an OID for comparison purposes but displays as a type name.

    Example:

    ```
    postgres=# SELECT pg_typeof(33);
     pg_typeof 
    -----------
     integer
    (1 row)
    
    postgres=# SELECT typlen FROM pg_type WHERE oid = pg_typeof(33);
     typlen 
    --------
          4
    (1 row)
    ```

-   collation for \(any\)

    Description: Gets the collation of the parameter.

    Return type: text

    Note: The expression  **collation for**  returns the collation of the value that is passed to it. Example:

    ```
    postgres=# SELECT collation for (description) FROM pg_description LIMIT 1;
     pg_collation_for 
    ------------------
     "default"
    (1 row)
    ```

    The value might be quoted and schema-qualified. If no collation is derived for the argument expression, then a null value is returned. If the parameter is not of a collectable data type, then an error is thrown.

-   getdistributekey\(table\_name\)

    Description: Gets a distribution key for a hash table.

    Return type: text

    Example:

    ```
    postgres=# SELECT getdistributekey('item');
     getdistributekey 
    ------------------
     i_item_sk
    (1 row)
    ```


## Comment Information Functions<a name="en-us_topic_0237121987_en-us_topic_0059777618_s088c996ec385478daa38d9aa9f991d58"></a>

-   col\_description\(table\_oid, column\_number\)

    Description: Gets comment for a table column.

    Return type: text

    Note:  **col\_description**  returns the comment for a table column, which is specified by the OID of its table and its column number.

-   obj\_description\(object\_oid, catalog\_name\)

    Description: Gets comment for a shared database object.

    Return type: text

    Note: The two-parameter form of  **obj\_description**  returns the comment for a database object specified by its OID and the name of the containing system catalog. For example,  **obj\_description\(123456,'pg\_class'\)**  would retrieve the comment for the table with OID 123456. The one-parameter form of  **obj\_description**  requires only the object OID.

    **obj\_description**  cannot be used for table columns since columns do not have OIDs of their own.

-   obj\_description\(object\_oid\)

    Description: Gets comment for a shared database object.

    Return type: text

-   shobj\_description\(object\_oid, catalog\_name\)

    Description: Gets comment for a shared database object.

    Return type: text

    Note:  **shobj\_description**  is used just like  **obj\_description**  except the former is used for retrieving comments on shared objects. Some system catalogs are global to all databases in openGauss, and the comments for objects in them are stored globally as well.


## Transaction IDs and Snapshots<a name="en-us_topic_0237121987_en-us_topic_0059777618_s13629462b1e147b2a9e93634a69e54e7"></a>

The following functions provide server transaction information in an exportable form. The main use of these functions is to determine which transactions were committed between two snapshots.

-   pgxc\_is\_committed\(transaction\_id\)

    Description: Determines whether the given XID is committed or ignored. NULL indicates the unknown status \(such as running, preparing, and freezing\).

    Return type: bool

-   txid\_current\(\)

    Description: Gets current transaction ID.

    Return type: bigint

-   txid\_current\_snapshot\(\)

    Description: Gets current snapshot.

    Return type: txid\_snapshot

-   txid\_snapshot\_xip\(txid\_snapshot\)

    Description: Gets in-progress transaction IDs in snapshot.

    Return type: setof bigint

-   txid\_snapshot\_xmax\(txid\_snapshot\)

    Description: Gets  **xmax**  of snapshot.

    Return type: bigint

-   txid\_snapshot\_xmin\(txid\_snapshot\)

    Description: Gets  **xmin**  of snapshot.

    Return type: bigint

-   txid\_visible\_in\_snapshot\(bigint, txid\_snapshot\)

    Description: Queries whether the transaction ID is visible in snapshot. \(do not use with subtransaction ids\)

    Return type: Boolean

-   get\_local\_prepared\_xact\(\)

    Description: Obtains the two-phase residual transaction information of the current node, including the transaction ID, GID the two-phase transaction, prepared time, owner OID, database OID, and name of the current node.

    Return type: xid, text, timestamptz, oid, oid, text

-   get\_remote\_prepared\_xacts\(\)

    Description: Obtains the two-phase residual transaction information of all remote nodes, including the transaction ID, GID the two-phase transaction, prepared time, owner name, database name, and node name.

    Return type: xid, text, timestamptz, name, name, text

-   global\_clean\_prepared\_xacts\(text, text\)

    Description: Concurrently cleans two-phase residual transactions. Only the  **gs\_clean**  tool can call this function for the cleaning. In other situations,  **false**  is returned.

    Return type: Boolean

-   pgxc\_stat\_get\_wal\_senders\_status\(\)

    Description: Returns the reception status of the standby node for node transaction logs.

    After the command is executed, the following result is output:

    **Table  1**  Output parameters:

    <a name="en-us_topic_0237121987_table1142941263918"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121987_row4429181263917"><th class="cellrowborder" valign="top" width="38.42%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237121987_p142931233911"><a name="en-us_topic_0237121987_p142931233911"></a><a name="en-us_topic_0237121987_p142931233911"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.58%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237121987_p443081253910"><a name="en-us_topic_0237121987_p443081253910"></a><a name="en-us_topic_0237121987_p443081253910"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121987_row144301712113911"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p44301512103915"><a name="en-us_topic_0237121987_p44301512103915"></a><a name="en-us_topic_0237121987_p44301512103915"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p143021218391"><a name="en-us_topic_0237121987_p143021218391"></a><a name="en-us_topic_0237121987_p143021218391"></a>Name of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row04301312163918"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p15430912113911"><a name="en-us_topic_0237121987_p15430912113911"></a><a name="en-us_topic_0237121987_p15430912113911"></a>source_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p1943061223913"><a name="en-us_topic_0237121987_p1943061223913"></a><a name="en-us_topic_0237121987_p1943061223913"></a>IP address of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row7430171212397"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p84309129399"><a name="en-us_topic_0237121987_p84309129399"></a><a name="en-us_topic_0237121987_p84309129399"></a>source_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p12430612183919"><a name="en-us_topic_0237121987_p12430612183919"></a><a name="en-us_topic_0237121987_p12430612183919"></a>Port of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row13430712163915"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p34301412173917"><a name="en-us_topic_0237121987_p34301412173917"></a><a name="en-us_topic_0237121987_p34301412173917"></a>dest_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p10430612163919"><a name="en-us_topic_0237121987_p10430612163919"></a><a name="en-us_topic_0237121987_p10430612163919"></a>IP address of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row12430191253911"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p11430101213910"><a name="en-us_topic_0237121987_p11430101213910"></a><a name="en-us_topic_0237121987_p11430101213910"></a>dest_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p194301112193913"><a name="en-us_topic_0237121987_p194301112193913"></a><a name="en-us_topic_0237121987_p194301112193913"></a>Port of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row117041722411"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p1970416217411"><a name="en-us_topic_0237121987_p1970416217411"></a><a name="en-us_topic_0237121987_p1970416217411"></a>sender_pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p37040215413"><a name="en-us_topic_0237121987_p37040215413"></a><a name="en-us_topic_0237121987_p37040215413"></a>PID of the sending thread</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row8782159204112"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p778215917413"><a name="en-us_topic_0237121987_p778215917413"></a><a name="en-us_topic_0237121987_p778215917413"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p1278219114110"><a name="en-us_topic_0237121987_p1278219114110"></a><a name="en-us_topic_0237121987_p1278219114110"></a>Type of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row17990131711413"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p3990191711417"><a name="en-us_topic_0237121987_p3990191711417"></a><a name="en-us_topic_0237121987_p3990191711417"></a>peer_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p1499061718411"><a name="en-us_topic_0237121987_p1499061718411"></a><a name="en-us_topic_0237121987_p1499061718411"></a>Type of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row122101336194111"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p521043664116"><a name="en-us_topic_0237121987_p521043664116"></a><a name="en-us_topic_0237121987_p521043664116"></a>peer_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p1821010361416"><a name="en-us_topic_0237121987_p1821010361416"></a><a name="en-us_topic_0237121987_p1821010361416"></a>Status of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row3692114817416"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p106921948184113"><a name="en-us_topic_0237121987_p106921948184113"></a><a name="en-us_topic_0237121987_p106921948184113"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p116921048114110"><a name="en-us_topic_0237121987_p116921048114110"></a><a name="en-us_topic_0237121987_p116921048114110"></a>WAL sender status</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row2632165424110"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p156321854184119"><a name="en-us_topic_0237121987_p156321854184119"></a><a name="en-us_topic_0237121987_p156321854184119"></a>sender_sent_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p18632125464119"><a name="en-us_topic_0237121987_p18632125464119"></a><a name="en-us_topic_0237121987_p18632125464119"></a>Sending position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row679812620423"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p679842624214"><a name="en-us_topic_0237121987_p679842624214"></a><a name="en-us_topic_0237121987_p679842624214"></a>sender_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p73147242443"><a name="en-us_topic_0237121987_p73147242443"></a><a name="en-us_topic_0237121987_p73147242443"></a>Writing position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row114841429134216"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p124841729184217"><a name="en-us_topic_0237121987_p124841729184217"></a><a name="en-us_topic_0237121987_p124841729184217"></a>sender_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p47843242441"><a name="en-us_topic_0237121987_p47843242441"></a><a name="en-us_topic_0237121987_p47843242441"></a>Redo position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row980313214212"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p3803632174216"><a name="en-us_topic_0237121987_p3803632174216"></a><a name="en-us_topic_0237121987_p3803632174216"></a>receiver_received_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p48031632164215"><a name="en-us_topic_0237121987_p48031632164215"></a><a name="en-us_topic_0237121987_p48031632164215"></a>Receiving position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row1320173610429"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p9320163634216"><a name="en-us_topic_0237121987_p9320163634216"></a><a name="en-us_topic_0237121987_p9320163634216"></a>receiver_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p1523144811441"><a name="en-us_topic_0237121987_p1523144811441"></a><a name="en-us_topic_0237121987_p1523144811441"></a>Writing position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row192831349104213"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p1283949174211"><a name="en-us_topic_0237121987_p1283949174211"></a><a name="en-us_topic_0237121987_p1283949174211"></a>receiver_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p1257511486441"><a name="en-us_topic_0237121987_p1257511486441"></a><a name="en-us_topic_0237121987_p1257511486441"></a>Flushing location of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121987_row143313420450"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_p23334204511"><a name="en-us_topic_0237121987_p23334204511"></a><a name="en-us_topic_0237121987_p23334204511"></a>receiver_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_p83311484514"><a name="en-us_topic_0237121987_p83311484514"></a><a name="en-us_topic_0237121987_p83311484514"></a>Redo location of the standby node</p>
    </td>
    </tr>
    </tbody>
    </table>


The internal transaction ID type \(**xid**\) is 32 bits wide and wraps around every 4 billion transactions.  **txid\_snapshot**, the data type used by these functions, stores information about transaction ID visibility at a particular moment in time.  [Table 2](#en-us_topic_0237121987_en-us_topic_0059777618_t537e765e3f164cdeb9ca75f865e3aa0d)  describes its components.

**Table  2**  Snapshot components

<a name="en-us_topic_0237121987_en-us_topic_0059777618_t537e765e3f164cdeb9ca75f865e3aa0d"></a>
<table><thead align="left"><tr id="en-us_topic_0237121987_en-us_topic_0059777618_rff0daa55919a489da9225a223f21b3fd"><th class="cellrowborder" valign="top" width="12.42%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p442620521898"><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p442620521898"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p442620521898"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="87.58%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237121987_en-us_topic_0059777618_a89130c7ca03545e8a74ba67675059af4"><a name="en-us_topic_0237121987_en-us_topic_0059777618_a89130c7ca03545e8a74ba67675059af4"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_a89130c7ca03545e8a74ba67675059af4"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121987_en-us_topic_0059777618_r5e9bee6140e5494e801e951823e54da9"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p54263521293"><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p54263521293"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p54263521293"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="87.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p114265521693"><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p114265521693"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p114265521693"></a>Earliest transaction ID (txid) that is still active. All earlier transactions will either be committed and visible, or rolled back.</p>
</td>
</tr>
<tr id="en-us_topic_0237121987_en-us_topic_0059777618_rb57b3b18232b440681b3a1f991fa2a3a"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p18426252396"><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p18426252396"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p18426252396"></a>xmax</p>
</td>
<td class="cellrowborder" valign="top" width="87.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_en-us_topic_0059777618_abf4101861d574691903a3e16ee380e35"><a name="en-us_topic_0237121987_en-us_topic_0059777618_abf4101861d574691903a3e16ee380e35"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_abf4101861d574691903a3e16ee380e35"></a>First as-yet-unassigned txid. All txids greater than or equal to this are not yet started as of the time of the snapshot, so they are invisible.</p>
</td>
</tr>
<tr id="en-us_topic_0237121987_en-us_topic_0059777618_r2def97a3e61c4109adfd6ae3e61474c6"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p84261652990"><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p84261652990"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p84261652990"></a>xip_list</p>
</td>
<td class="cellrowborder" valign="top" width="87.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p24271152991"><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p24271152991"></a><a name="en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p24271152991"></a>Active txids at the time of the snapshot. The list includes only those active txids between <strong>xmin</strong> and <strong>xmax</strong>; there might be active txids higher than <strong>xmax</strong>. A txid that is <strong>xmin &lt;= txid &lt; xmax</strong> and not in this list was already completed at the time of the snapshot, and is either visible or dead according to its commit status. The list does not include txids of subtransactions.</p>
</td>
</tr>
</tbody>
</table>

**txid\_snapshot**'s textual representation is  **xmin:xmax:xip\_list**.

For example:  **10:20:10,14,15**  means  **xmin=10, xmax=20, xip\_list=10, 14, 15**.

