# System Information Functions<a name="EN-US_TOPIC_0289899824"></a>

## Session Information Functions<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_seb0ac642d9594cfe9a06d3d304c6dc75"></a>

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

    Note:  **current\_user**  is the user identifier that is applicable for permission checking. Normally it is equal to the session user, but it can be changed with  [SET ROLE](en-us_topic_0283137642.md). It also changes during the execution of functions with the attribute  **SECURITY DEFINER**.

-   definer\_current\_user

    Description: User name of current execution context

    Return type: name

    Example:

    ```
    postgres=# SELECT definer_current_user();
     definer_current_user
    ----------------------
     omm
    (1 row)
    ```

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

-   pg\_current\_sessid

    Description: Session ID of current execution context

    Return type: text

    Example:

    ```
    postgres=# select pg_current_sessid();
    pg_current_sessid
    -------------------
    140308875015936
    (1 row)
    ```

    Note: In thread pool mode, the session ID of the current session is obtained. In non-thread pool mode, the background thread ID of the current session is obtained.

-   pg\_current\_userid

    Description: Current user ID.

    Return type: text

    ```
    postgres=# SELECT pg_current_userid();
    pg_current_userid
    -------------------
    10
    (1 row)
    ```

-   tablespace\_oid\_name\(\)

    Description: Queries the tablespace name based on the tablespace OID.

    Return type: text

    Example:

    ```
    postgres=# select tablespace_oid_name(1663);
     tablespace_oid_name
    ---------------------
     pg_default
    (1 row)
    ```

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

    Return type: SETOF text

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

-   sessionid2pid\(\)

    Description: Obtains PID information from a session ID \(for example, the  **sessid**  column in  **pv\_session\_stat**\).

    Return type: int8

    Example:

    ```
    postgres=# select sessionid2pid(sessid::cstring) from pv_session_stat limit 2;
      sessionid2pid
    -----------------
     139973107902208
     139973107902208
    (2 rows)
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

    Note:  **session\_user**  is usually the user who initiated the current database connection, but administrators can change this setting with  [SET SESSION AUTHORIZATION](en-us_topic_0283137463.md).

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

-   get\_shard\_oids\_byname

    Description: Returns the OID of the node when the node name is entered.

    Return type: oid

    Example:

    ```
    postgres=# select get_shard_oids_byname('datanode1');
     get_shard_oids_byname
    -----------------------
     {16385}
    (1 row)
    ```

-   getpgusername\(\)

    Description: Obtains the database username.

    Return type: name

    Example:

    ```
    postgres=# select getpgusername();
     getpgusername 
    ---------------
     GaussDB_userna
    (1 row)
    ```

-   getdatabaseencoding\(\)

    Description: Obtains the database encoding mode.

    Return type: name

    Example:

    ```
    postgres=# select getdatabaseencoding();
     getdatabaseencoding 
    ---------------------
     SQL_ASCII
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
     PostgreSQL 9.2.4 (openGauss-1.0.0 build 66e54e4d) compiled at 2020-01-02 13:02:26 commit 7218 last mr 10175  on x86_64-unknown-linux-gnu, compiled by g++ (GCC) 8.2.0, 64-bit
    
    (1 row)
    ```


-   get\_hostname\(\)

    Description: Returns the hostname of the current node.

    Return type: text

    Example:

    ```
    postgres=# SELECT get_hostname();
     get_hostname
    --------------
     linux-user
    (1 row)
    ```


-   get\_nodename\(\)

    Description: Returns the name of the current node.

    Return type: text

    Example:

    ```
    postgres=# SELECT get_nodename();
     get_nodename
    --------------
     coordinator1
    (1 row)
    ```


-   get\_schema\_oid\(cstring\)

    Description: Returns the OID of the queried schema.

    Return type: oid

    Example:

    ```
    postgres=# SELECT get_schema_oid('public');
     get_schema_oid
    ----------------
               2200
    (1 row)
    ```


-   pgxc\_parse\_clog\(OUT xid int8, OUT nodename text, OUT status text\)

    Description: Returns the status of all transactions in the current cluster.

    Return type: SETOF record

    Example:

    ```
    postgres=# SELECT pgxc_parse_clog();
     pgxc_parse_clog
    ----------------
    (0,dn_6004_6005_6006,INPROGRESS)
    (1,dn_6004_6005_6006,COMMITTED)
    (2,dn_6004_6005_6006,INPROGRESS)
    (3 row)
    ```


-   pgxc\_prepared\_xact\(\)

    Description: Returns the list of transaction GIDs at the prepared stage in the cluster.

    Return type: SETOF text

    Example:

    ```
    postgres=# SELECT pgxc_prepared_xact();
     pgxc_prepared_xact
    --------------------          
    (0 row)
    ```


-   pgxc\_xacts\_iscommitted\(\)

    Description: Returns the status of the transaction with the specified XID in the cluster.  **t**  indicates committed,  **f**  indicates aborted, and  **null**  indicates others.

    Return type: SETOF record

    Example:

    ```
    postgres=# SELECT pgxc_xacts_iscommitted(1);
     pgxc_xacts_iscommitted
    --------------------    
    (dn_6004_6005_6006,t)
    (cn_5001,t)
    (cn_5002,t)
    (dn_6001_6002_6003,t)      
    (4 row)
    ```


-   pgxc\_total\_memory\_detail\(\)

    Description: Displays the memory usage in the cluster.

    Return type: set of pv\_total\_memory\_detail

    Example:

    ```
    postgres=# SELECT pgxc_total_memory_detail();
    pgxc_total_memory_detail
    --------------------    
    (dn_6004_6005_6006,max_process_memory,81920)
    (dn_6004_6005_6006,process_used_memory,72747)
    (dn_6004_6005_6006,max_dynamic_memory,12096)
    (dn_6004_6005_6006,dynamic_used_memory,1530)      
    (4 row)
    ```


## Access privilege inquiry function<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_s8be48efddaf84c7fb405513993705867"></a>

-   has\_any\_column\_privilege\(user, table, privilege\)

    Description: Queries whether a specified user has permission for any column of table.

    **Table  1**  Parameter type description

    <a name="en-us_topic_0283136950_table933075917538"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row18330459145314"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p1330959165317"><a name="en-us_topic_0283136950_p1330959165317"></a><a name="en-us_topic_0283136950_p1330959165317"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p12330195918535"><a name="en-us_topic_0283136950_p12330195918535"></a><a name="en-us_topic_0283136950_p12330195918535"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row103301559105319"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p4330125975313"><a name="en-us_topic_0283136950_p4330125975313"></a><a name="en-us_topic_0283136950_p4330125975313"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p20331195911536"><a name="en-us_topic_0283136950_p20331195911536"></a><a name="en-us_topic_0283136950_p20331195911536"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row12331125915316"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p143311459135313"><a name="en-us_topic_0283136950_p143311459135313"></a><a name="en-us_topic_0283136950_p143311459135313"></a>table</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p84064434544"><a name="en-us_topic_0283136950_p84064434544"></a><a name="en-us_topic_0283136950_p84064434544"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row233120592532"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p733155975310"><a name="en-us_topic_0283136950_p733155975310"></a><a name="en-us_topic_0283136950_p733155975310"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p1133175910535"><a name="en-us_topic_0283136950_p1133175910535"></a><a name="en-us_topic_0283136950_p1133175910535"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_any\_column\_privilege\(table, privilege\)

    Description: Queries whether the current user has permission to access any column of table. For details about the valid parameter types, see  [Table 1](#en-us_topic_0283136950_table933075917538).

    Return type: Boolean

    **has\_any\_column\_privilege**  checks whether a user can access any column of a table in a particular way. Its parameter possibilities are analogous to  **has\_table\_privilege**, except that the desired access permission type must be some combination of SELECT, INSERT, UPDATE, or REFERENCES.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Note that having any of these permissions at the table level implicitly grants it for each column of the table, so  **has\_any\_column\_privilege**  will always return  **true**  if  **has\_table\_privilege**  does for the same parameters. But  **has\_any\_column\_privilege**  also succeeds if there is a column-level grant of the permission for at least one column.

-   has\_column\_privilege\(user, table, column, privilege\)

    Description: Queries whether a specified user has permission for column.

    **Table  2**  Parameter type description

    <a name="en-us_topic_0283136950_table9581157145120"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row5581479519"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p258157165118"><a name="en-us_topic_0283136950_p258157165118"></a><a name="en-us_topic_0283136950_p258157165118"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p15581167185116"><a name="en-us_topic_0283136950_p15581167185116"></a><a name="en-us_topic_0283136950_p15581167185116"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row85827717511"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p1458257115112"><a name="en-us_topic_0283136950_p1458257115112"></a><a name="en-us_topic_0283136950_p1458257115112"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p1258213711512"><a name="en-us_topic_0283136950_p1258213711512"></a><a name="en-us_topic_0283136950_p1258213711512"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row158214775111"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p458213795118"><a name="en-us_topic_0283136950_p458213795118"></a><a name="en-us_topic_0283136950_p458213795118"></a>table</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p45822795116"><a name="en-us_topic_0283136950_p45822795116"></a><a name="en-us_topic_0283136950_p45822795116"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row5582274510"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p158212725115"><a name="en-us_topic_0283136950_p158212725115"></a><a name="en-us_topic_0283136950_p158212725115"></a>column</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p1498115610519"><a name="en-us_topic_0283136950_p1498115610519"></a><a name="en-us_topic_0283136950_p1498115610519"></a>text, smallint</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row17582147105110"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p55825717512"><a name="en-us_topic_0283136950_p55825717512"></a><a name="en-us_topic_0283136950_p55825717512"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p758217195119"><a name="en-us_topic_0283136950_p758217195119"></a><a name="en-us_topic_0283136950_p758217195119"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_column\_privilege\(table, column, privilege\)

    Description: Queries whether the current user has permission to access columns. For details about the valid parameter types, see  [Table 2](#en-us_topic_0283136950_table9581157145120).

    Return type: Boolean

    **has\_column\_privilege**  checks whether a user can access a column in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**, with the addition that the column can be specified either by name or attribute number. The desired access permission type must evaluate to some combination of  **SELECT**,  **INSERT**,  **UPDATE**, or  **REFERENCES**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Note that having any of these permissions at the table level implicitly grants it for each column of the table.

-   has\_database\_privilege\(user, database, privilege\)

    Description: Queries whether a specified user has permission for database.

    **Table  3**  Parameter type description

    <a name="en-us_topic_0283136950_table111152337017"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row9116173319014"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p101166338014"><a name="en-us_topic_0283136950_p101166338014"></a><a name="en-us_topic_0283136950_p101166338014"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p311653312014"><a name="en-us_topic_0283136950_p311653312014"></a><a name="en-us_topic_0283136950_p311653312014"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row611617338015"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p161167336013"><a name="en-us_topic_0283136950_p161167336013"></a><a name="en-us_topic_0283136950_p161167336013"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p911613311017"><a name="en-us_topic_0283136950_p911613311017"></a><a name="en-us_topic_0283136950_p911613311017"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row91161733301"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p511614331601"><a name="en-us_topic_0283136950_p511614331601"></a><a name="en-us_topic_0283136950_p511614331601"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p911612333012"><a name="en-us_topic_0283136950_p911612333012"></a><a name="en-us_topic_0283136950_p911612333012"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row18116203312011"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p1311614333014"><a name="en-us_topic_0283136950_p1311614333014"></a><a name="en-us_topic_0283136950_p1311614333014"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p12116233409"><a name="en-us_topic_0283136950_p12116233409"></a><a name="en-us_topic_0283136950_p12116233409"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_database\_privilege\(database, privilege\)

    Description: Queries whether the current user has permission to access a database. For details about the valid parameter types, see  [Table 3](#en-us_topic_0283136950_table111152337017).

    Return type: Boolean

    Note:  **has\_database\_privilege**  checks whether a user can access a database in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to some combination of  **CREATE**,  **CONNECT**,  **TEMPORARY**, or  **TEMP**  \(which is equivalent to  **TEMPORARY**\).

-   has\_directory\_privilege\(user, database, privilege\)

    Description: Queries whether a specified user has permission for directory.

    **Table  4**  Parameter type description

    <a name="en-us_topic_0283136950_table111483362025"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row1814813361023"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p11493369214"><a name="en-us_topic_0283136950_p11493369214"></a><a name="en-us_topic_0283136950_p11493369214"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p1714916361229"><a name="en-us_topic_0283136950_p1714916361229"></a><a name="en-us_topic_0283136950_p1714916361229"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row914916360215"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p2149153610217"><a name="en-us_topic_0283136950_p2149153610217"></a><a name="en-us_topic_0283136950_p2149153610217"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p01491436721"><a name="en-us_topic_0283136950_p01491436721"></a><a name="en-us_topic_0283136950_p01491436721"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row514912361722"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p16149163614220"><a name="en-us_topic_0283136950_p16149163614220"></a><a name="en-us_topic_0283136950_p16149163614220"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p151491036623"><a name="en-us_topic_0283136950_p151491036623"></a><a name="en-us_topic_0283136950_p151491036623"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row214917361025"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p2014911369219"><a name="en-us_topic_0283136950_p2014911369219"></a><a name="en-us_topic_0283136950_p2014911369219"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p71491536927"><a name="en-us_topic_0283136950_p71491536927"></a><a name="en-us_topic_0283136950_p71491536927"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_directory\_privilege\(database, privilege\)

    Description: Queries whether the current user has permission to access a directory. For details about the valid parameter types, see  [Table 4](#en-us_topic_0283136950_table111483362025).

    Return type: Boolean

-   has\_foreign\_data\_wrapper\_privilege\(user, fdw, privilege\)

    Description: Queries whether a specified user has permission for foreign-data wrapper.

    **Table  5**  Parameter type description

    <a name="en-us_topic_0283136950_table3176631131"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row617614310319"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p117717314310"><a name="en-us_topic_0283136950_p117717314310"></a><a name="en-us_topic_0283136950_p117717314310"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p1517717318312"><a name="en-us_topic_0283136950_p1517717318312"></a><a name="en-us_topic_0283136950_p1517717318312"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row51771231530"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p417717312313"><a name="en-us_topic_0283136950_p417717312313"></a><a name="en-us_topic_0283136950_p417717312313"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p2177031838"><a name="en-us_topic_0283136950_p2177031838"></a><a name="en-us_topic_0283136950_p2177031838"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row20177131833"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p101779311137"><a name="en-us_topic_0283136950_p101779311137"></a><a name="en-us_topic_0283136950_p101779311137"></a>fdw</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p15177331334"><a name="en-us_topic_0283136950_p15177331334"></a><a name="en-us_topic_0283136950_p15177331334"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row21779315317"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p12177113117314"><a name="en-us_topic_0283136950_p12177113117314"></a><a name="en-us_topic_0283136950_p12177113117314"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p9177531636"><a name="en-us_topic_0283136950_p9177531636"></a><a name="en-us_topic_0283136950_p9177531636"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_foreign\_data\_wrapper\_privilege\(fdw, privilege\)

    Description: Queries whether the current user has permission for foreign-data wrapper. For details about valid parameter types, see  [Table 5](#en-us_topic_0283136950_table3176631131).

    Return type: Boolean

    Note:  **has\_foreign\_data\_wrapper\_privilege**  checks whether a user can access a foreign-data wrapper in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to  **USAGE**.

-   has\_function\_privilege\(user, function, privilege\)

    Description: Queries whether a specified user has permission for function.

    **Table  6**  Parameter type description

    <a name="en-us_topic_0283136950_table169651367619"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row139663361263"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p996613361562"><a name="en-us_topic_0283136950_p996613361562"></a><a name="en-us_topic_0283136950_p996613361562"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p159665367616"><a name="en-us_topic_0283136950_p159665367616"></a><a name="en-us_topic_0283136950_p159665367616"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row119661436869"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p59661136369"><a name="en-us_topic_0283136950_p59661136369"></a><a name="en-us_topic_0283136950_p59661136369"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p11966436264"><a name="en-us_topic_0283136950_p11966436264"></a><a name="en-us_topic_0283136950_p11966436264"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row18966173614613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p169678368619"><a name="en-us_topic_0283136950_p169678368619"></a><a name="en-us_topic_0283136950_p169678368619"></a>function</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p89670364619"><a name="en-us_topic_0283136950_p89670364619"></a><a name="en-us_topic_0283136950_p89670364619"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row99679368617"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p796710361269"><a name="en-us_topic_0283136950_p796710361269"></a><a name="en-us_topic_0283136950_p796710361269"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p3967133611611"><a name="en-us_topic_0283136950_p3967133611611"></a><a name="en-us_topic_0283136950_p3967133611611"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_function\_privilege\(function, privilege\)

    Description: Queries whether the current user has permission for function. For details about valid parameter types, see  [Table 6](#en-us_topic_0283136950_table169651367619).

    Return type: Boolean

    Note:  **has\_function\_privilege**  checks whether a user can access a function in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. When a function is specified by a text string rather than by OID, the allowed input is the same as that for the  **regprocedure**  data type \(see  [Object Identifier Types](en-us_topic_0283136600.md)\). The desired access permission type must evaluate to  **EXECUTE**.

-   has\_language\_privilege\(user, language, privilege\)

    Description: Queries whether a specified user has permission for language.

    **Table  7**  Parameter type description

    <a name="en-us_topic_0283136950_table7622265910"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row2622661694"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p116221062095"><a name="en-us_topic_0283136950_p116221062095"></a><a name="en-us_topic_0283136950_p116221062095"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p062212619919"><a name="en-us_topic_0283136950_p062212619919"></a><a name="en-us_topic_0283136950_p062212619919"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row196223615919"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p46231461492"><a name="en-us_topic_0283136950_p46231461492"></a><a name="en-us_topic_0283136950_p46231461492"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p16623669916"><a name="en-us_topic_0283136950_p16623669916"></a><a name="en-us_topic_0283136950_p16623669916"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row1362316795"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p19623126498"><a name="en-us_topic_0283136950_p19623126498"></a><a name="en-us_topic_0283136950_p19623126498"></a>language</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p7623116199"><a name="en-us_topic_0283136950_p7623116199"></a><a name="en-us_topic_0283136950_p7623116199"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row36231261594"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p26231661392"><a name="en-us_topic_0283136950_p26231661392"></a><a name="en-us_topic_0283136950_p26231661392"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p206231761199"><a name="en-us_topic_0283136950_p206231761199"></a><a name="en-us_topic_0283136950_p206231761199"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

    Return type: Boolean

-   has\_language\_privilege\(language, privilege\)

    Description: Queries whether the current user has permission for language. For details about valid parameter types, see  [Table 7](#en-us_topic_0283136950_table7622265910).

    Return type: Boolean

    Note:  **has\_language\_privilege**  checks whether a user can access a procedural language in a particular way. Its argument possibilities are analogous to  **has\_table\_privilege**. The desired access permission type must evaluate to  **USAGE**.

-   has\_nodegroup\_privilege \(user, nodegroup, privilege\)

    Description: Checks whether a user has permission to access a cluster node.

    Return type: Boolean

    **Table  8**  Parameter type description

    <a name="en-us_topic_0283136950_table027552114349"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_row18276321113412"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_p1927692120344"><a name="en-us_topic_0283136950_p1927692120344"></a><a name="en-us_topic_0283136950_p1927692120344"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_p327618211348"><a name="en-us_topic_0283136950_p327618211348"></a><a name="en-us_topic_0283136950_p327618211348"></a>Valid Input Parameter Type</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_row1090216523461"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p1990295244614"><a name="en-us_topic_0283136950_p1990295244614"></a><a name="en-us_topic_0283136950_p1990295244614"></a>user</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p452820174713"><a name="en-us_topic_0283136950_p452820174713"></a><a name="en-us_topic_0283136950_p452820174713"></a>name, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row327611214344"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p12771213349"><a name="en-us_topic_0283136950_p12771213349"></a><a name="en-us_topic_0283136950_p12771213349"></a>nodegroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p32771621183413"><a name="en-us_topic_0283136950_p32771621183413"></a><a name="en-us_topic_0283136950_p32771621183413"></a>text, oid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_row1277152117348"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_p132775212348"><a name="en-us_topic_0283136950_p132775212348"></a><a name="en-us_topic_0283136950_p132775212348"></a>privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_p14277721163414"><a name="en-us_topic_0283136950_p14277721163414"></a><a name="en-us_topic_0283136950_p14277721163414"></a>text</p>
    </td>
    </tr>
    </tbody>
    </table>

-   has\_nodegroup\_privilege \(nodegroup, privilege\)

    Description: Checks whether a user has permission to access a cluster node.

    Return type: Boolean

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


## Schema Visibility Inquiry Functions<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_s8c676f27906a4d0babc4ed2bca955536"></a>

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


## System Catalog Information Functions<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_s36b999f626b14c599c6350642521a34e"></a>

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

    Example:

    ```
    postgres=# select pg_check_authid(1);
    pg_check_authid
    -----------------
    f
    (1 row)
    ```

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

    Example:

    ```
    postgres=# select * from pg_get_functiondef(598);
     headerlines |                     definition                     
    -------------+----------------------------------------------------
               4 | CREATE OR REPLACE FUNCTION pg_catalog.abbrev(inet)+
                 |  RETURNS text                                     +
                 |  LANGUAGE internal                                +
                 |  IMMUTABLE STRICT NOT FENCED NOT SHIPPABLE        +
                 | AS $function$inet_abbrev$function$                +
                 | 
    (1 row)
    ```

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

    Example:

    ```
    postgres=# select * from pg_get_indexdef(16416);
                                 pg_get_indexdef                             
    -------------------------------------------------------------------------
     CREATE INDEX test3_b_idx ON test3 USING btree (b) TABLESPACE pg_default
    (1 row)
    ```

-   pg\_get\_indexdef\(index\_oid, column\_no, pretty\_bool\)

    Description: Gets  **CREATE INDEX**  command for index, or definition of just one index column when  **column\_no**  is not zero.

    Example:

    ```
    postgres=# select * from pg_get_indexdef(16416, 0, false);
                                 pg_get_indexdef                             
    -------------------------------------------------------------------------
     CREATE INDEX test3_b_idx ON test3 USING btree (b) TABLESPACE pg_default
    (1 row)
    postgres=# select * from pg_get_indexdef(16416, 1, false);
     pg_get_indexdef 
    -----------------
     b
    (1 row)
    ```

    Return type: text

    Note:  **pg\_get\_functiondef**  returns a complete  **CREATE OR REPLACE FUNCTION**  statement for a function.

-   pg\_get\_keywords\(\)

    Description: Gets list of SQL keywords and their categories.

    Return type: SETOF record

    Note:  **pg\_get\_keywords**  returns a set of records describing the SQL keywords recognized by the server. The  **word**  column contains the keyword. The  **catcode**  column contains a category code:  **U**  for unreserved,  **C**  for column name,  **T**  for type or function name, or  **R**  for reserved. The  **catdesc**  column contains a possibly-localized string describing the category.

-   pg\_get\_userbyid\(role\_oid\)

    Description: Gets role name with given OID.

    Return type: name

    Note:  **pg\_get\_userbyid**  extracts a role's name given its OID.

-   pg\_check\_authid\(role\_id\)

    Description: Checks whether a user exists based on  **role\_id**.

    Return type: text

    Example:

    ```
    postgres=# select pg_check_authid(20);
    pg_check_authid
    -----------------
    f
    (1 row)
    ```

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

    Example:

    ```
    postgres=# select * from pg_get_tabledef(16384);
                        pg_get_tabledef                    
    -------------------------------------------------------
     SET search_path = public;                            +
     CREATE  TABLE t1 (                                   +
             c1 bigint DEFAULT nextval('serial'::regclass)+
     )                                                    +
     WITH (orientation=row, compression=no)               +
     DISTRIBUTE BY HASH(c1)                               +
     TO GROUP group1;
    (1 row)
    ```

    Return type: text

-   pg\_get\_tabledef\(table\_name\)

    Description: Obtains a table definition based on  **table\_name**.

    Example:

    ```
    postgres=# select * from pg_get_tabledef('t1');
                        pg_get_tabledef                    
    -------------------------------------------------------
     SET search_path = public;                            +
     CREATE  TABLE t1 (                                   +
             c1 bigint DEFAULT nextval('serial'::regclass)+
     )                                                    +
     WITH (orientation=row, compression=no)               +
     DISTRIBUTE BY HASH(c1)                               +
     TO GROUP group1;
    (1 row)
    ```

    Return type: text

    Remarks:  **pg\_get\_tabledef**  reconstructs the  **CREATE**  statement of the table definition, including the table definition, index information, and comments. Users need to create the dependent objects of the table, such as groups, schemas, tablespaces, and servers. The table definition does not include the statements for creating these dependent objects.

-   pg\_options\_to\_table\(reloptions\)

    Description: Gets the set of storage option name/value pairs.

    Return type: SETOF record

    Note:  **pg\_options\_to\_table**  returns the set of storage option name/value pairs \(**option\_name**/**option\_value**\) when passed  **pg\_class.reloptions**  or  **pg\_attribute.attoptions**.

-   pg\_tablespace\_databases\(tablespace\_oid\)

    Description: Gets the set of database OIDs that have objects in the specified tablespace.

    Return type: SETOF oid

    Note:  **pg\_tablespace\_databases**  allows a tablespace to be examined. It returns the set of OIDs of databases that have objects stored in the tablespace. If this function returns any rows, the tablespace is not empty and cannot be dropped. To display the specific objects populating the tablespace, you will need to connect to the databases identified by  **pg\_tablespace\_databases**  and query their  **pg\_class**  catalogs.

-   pg\_tablespace\_location\(tablespace\_oid\)

    Description: Gets the path in the file system that this tablespace is located in.

    Return type: text

-   pg\_typeof\(any\)

    Description: Gets the data type of any value.

    Return type: regtype

    Note:  **pg\_typeof**  returns the OID of the data type of the value that is passed to it. This can be helpful for troubleshooting or dynamically constructing SQL queries. The function is declared as returning  **regtype**, which is an OID alias type \(see  [Object Identifier Types](en-us_topic_0283136600.md)\). This means that it is the same as an OID for comparison purposes but displays as a type name.

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

    Note: The expression  **collation for**  returns the collation of the value that is passed to it.

    Example:

    ```
    postgres=# SELECT collation for (description) FROM pg_description LIMIT 1;
     pg_collation_for 
    ------------------
     "default"
    (1 row)
    ```

    The value might be quoted and schema-qualified. If no collation is derived for the argument expression, then a null value is returned. If the parameter is not of a collectable data type, then an error is thrown.

-   getdistributekey\(table\_name\)

    Description: Obtains a distribution key for a hash table.

    Return type: text

    Example:

    ```
    postgres=# SELECT getdistributekey('item');
     getdistributekey 
    ------------------
     i_item_sk
    (1 row)
    ```

-   pg\_extension\_update\_paths\(name\)

    Description: Returns the version update path of the specified extension.

    Return type: text\(source text\), text\(path text\), text\(target text\)

-   pg\_get\_serial\_sequence\(tablename, colname\)

    Description: Obtains the sequence of the corresponding table name and column name.

    Return type: text

    Example:

    ```
    postgres=# select * from pg_get_serial_sequence('t1', 'c1');
     pg_get_serial_sequence 
    ------------------------
     public.serial
    (1 row)
    ```

-   pg\_sequence\_parameters\(sequence\_oid\)

    Description: Obtains the parameters of a specified sequence, including the start value, minimum value, maximum value, and incremental value.

    Return type: bigint, bigint, bigint, bigint, Boolean

    Example:

    ```
    postgres=# select * from pg_sequence_parameters(16420);
     start_value | minimum_value |    maximum_value    | increment | cycle_option 
    -------------+---------------+---------------------+-----------+--------------
             101 |             1 | 9223372036854775807 |         1 | f
    (1 row)
    ```

-   pgxc\_get\_variable\_info\(\)

    Description: Obtains variable values on the node, including  **nodeName**,  **nextOid**,  **nextXid**,  **oldestXid**,  **xidVacLimit**,  **oldestXidDB**,  **lastExtendCSNLogpage**,  **startExtendCSNLogpage**,  **nextCommitSeqNo**,  **latestCompleteXid**, and  **startupMaxXid**.

    Return type: set of pg\_variable\_info

    Example:

    ```
    postgres=# select pgxc_get_variable_info( );
                          pgxc_get_variable_info
    -------------------------------------------------------------------------
    (dn_6004_6005_6006,25617,141396349,2073,20000002073,15808,138111,0,127154152,141396348,104433004)
    (1 row)
    ```


## Comment Information Functions<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_s088c996ec385478daa38d9aa9f991d58"></a>

-   col\_description\(table\_oid, column\_number\)

    Description: Gets comment for a table column.

    Return type: text

    Note:  **col\_description**  returns the comment for a table column, which is specified by the OID of its table and its column number.

-   obj\_description\(object\_oid, catalog\_name\)

    Description: Gets comment for a database object.

    Return type: text

    Note: The two-parameter form of  **obj\_description**  returns the comment for a database object specified by its OID and the name of the containing system catalog. For example,  **obj\_description\(123456,'pg\_class'\)**  would retrieve the comment for the table with OID 123456. The one-parameter form of  **obj\_description**  requires only the object OID.

    **obj\_description**  cannot be used for table columns since columns do not have OIDs of their own.

-   obj\_description\(object\_oid\)

    Description: Gets comment for a database object.

    Return type: text

-   shobj\_description\(object\_oid, catalog\_name\)

    Description: Gets comment for a shared database object.

    Return type: text

    Note:  **shobj\_description**  is used just like  **obj\_description**  except the former is used for retrieving comments on shared objects. Some system catalogs are global to all databases in openGauss, and the comments for objects in them are stored globally as well.


## Transaction IDs and Snapshots<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_s13629462b1e147b2a9e93634a69e54e7"></a>

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

    **Table  9**  pgxc\_stat\_get\_wal\_senders\_status output parameters

    <a name="en-us_topic_0283136950_en-us_topic_0237121987_table1142941263918"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136950_en-us_topic_0237121987_row4429181263917"><th class="cellrowborder" valign="top" width="38.42%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_en-us_topic_0237121987_p142931233911"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p142931233911"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p142931233911"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.58%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_en-us_topic_0237121987_p443081253910"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p443081253910"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p443081253910"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136950_en-us_topic_0237121987_row144301712113911"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p44301512103915"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p44301512103915"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p44301512103915"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p143021218391"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p143021218391"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p143021218391"></a>Name of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row04301312163918"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p15430912113911"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p15430912113911"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p15430912113911"></a>source_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1943061223913"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1943061223913"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1943061223913"></a>IP address of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row7430171212397"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p84309129399"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p84309129399"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p84309129399"></a>source_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p12430612183919"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p12430612183919"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p12430612183919"></a>Port of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row13430712163915"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p34301412173917"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p34301412173917"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p34301412173917"></a>dest_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p10430612163919"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p10430612163919"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p10430612163919"></a>IP address of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row12430191253911"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p11430101213910"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p11430101213910"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p11430101213910"></a>dest_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p194301112193913"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p194301112193913"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p194301112193913"></a>Port of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row117041722411"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1970416217411"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1970416217411"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1970416217411"></a>sender_pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p37040215413"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p37040215413"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p37040215413"></a>PID of the sending thread</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row8782159204112"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p778215917413"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p778215917413"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p778215917413"></a>local_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1278219114110"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1278219114110"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1278219114110"></a>Type of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row17990131711413"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p3990191711417"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p3990191711417"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p3990191711417"></a>peer_role</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1499061718411"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1499061718411"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1499061718411"></a>Type of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row122101336194111"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p521043664116"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p521043664116"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p521043664116"></a>peer_state</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1821010361416"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1821010361416"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1821010361416"></a>Status of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row3692114817416"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p106921948184113"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p106921948184113"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p106921948184113"></a>state</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p116921048114110"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p116921048114110"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p116921048114110"></a>WAL sender status</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row2632165424110"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p156321854184119"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p156321854184119"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p156321854184119"></a>sender_sent_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p18632125464119"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p18632125464119"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p18632125464119"></a>Sending position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row679812620423"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p679842624214"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p679842624214"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p679842624214"></a>sender_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p73147242443"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p73147242443"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p73147242443"></a>Writing position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row114841429134216"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p124841729184217"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p124841729184217"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p124841729184217"></a>sender_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p47843242441"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p47843242441"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p47843242441"></a>Redo position of the primary node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row980313214212"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p3803632174216"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p3803632174216"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p3803632174216"></a>receiver_received_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p48031632164215"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p48031632164215"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p48031632164215"></a>Receiving position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row1320173610429"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p9320163634216"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p9320163634216"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p9320163634216"></a>receiver_write_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1523144811441"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1523144811441"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1523144811441"></a>Writing position of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row192831349104213"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1283949174211"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1283949174211"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1283949174211"></a>receiver_flush_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p1257511486441"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1257511486441"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p1257511486441"></a>Flushing location of the standby node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136950_en-us_topic_0237121987_row143313420450"><td class="cellrowborder" valign="top" width="38.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p23334204511"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p23334204511"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p23334204511"></a>receiver_replay_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_p83311484514"><a name="en-us_topic_0283136950_en-us_topic_0237121987_p83311484514"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_p83311484514"></a>Redo location of the standby node</p>
    </td>
    </tr>
    </tbody>
    </table>


The internal transaction ID type \(**xid**\) is 32 bits wide and wraps around every 4 billion transactions.  **txid\_snapshot**, the data type used by these functions, stores information about transaction ID visibility at a particular moment in time.  [Table 10](#en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_t537e765e3f164cdeb9ca75f865e3aa0d)  describes its components.

**Table  10**  Snapshot components

<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_t537e765e3f164cdeb9ca75f865e3aa0d"></a>
<table><thead align="left"><tr id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_rff0daa55919a489da9225a223f21b3fd"><th class="cellrowborder" valign="top" width="12.42%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p442620521898"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p442620521898"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p442620521898"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="87.58%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_a89130c7ca03545e8a74ba67675059af4"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_a89130c7ca03545e8a74ba67675059af4"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_a89130c7ca03545e8a74ba67675059af4"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_r5e9bee6140e5494e801e951823e54da9"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p54263521293"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p54263521293"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p54263521293"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="87.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p114265521693"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p114265521693"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p114265521693"></a>Earliest transaction ID (txid) that is still active. All earlier transactions will either be committed and visible, or rolled back.</p>
</td>
</tr>
<tr id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_rb57b3b18232b440681b3a1f991fa2a3a"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p18426252396"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p18426252396"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p18426252396"></a>xmax</p>
</td>
<td class="cellrowborder" valign="top" width="87.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_abf4101861d574691903a3e16ee380e35"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_abf4101861d574691903a3e16ee380e35"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_abf4101861d574691903a3e16ee380e35"></a>First as-yet-unassigned txid. All txids greater than or equal to this are not yet started as of the time of the snapshot, so they are invisible.</p>
</td>
</tr>
<tr id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_r2def97a3e61c4109adfd6ae3e61474c6"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p84261652990"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p84261652990"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p84261652990"></a>xip_list</p>
</td>
<td class="cellrowborder" valign="top" width="87.58%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p24271152991"><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p24271152991"></a><a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_en-us_topic_0058965770_p24271152991"></a>Active txids at the time of the snapshot. The list includes only those active txids between <strong>xmin</strong> and <strong>xmax</strong>; there might be active txids higher than <strong>xmax</strong>. A txid that is <strong>xmin &lt;= txid &lt; xmax</strong> and not in this list was already completed at the time of the snapshot, and is either visible or dead according to its commit status. The list does not include txids of subtransactions.</p>
</td>
</tr>
</tbody>
</table>

**txid\_snapshot**'s textual representation is  **xmin:xmax:xip\_list**.

For example,  **10:20:10,14,15**  means  **xmin=10, xmax=20, xip\_list=10, 14, 15**.

-   slice\(hstore, text\[\]\)

    Description: Extracts the subset of the hstore type.

    Return type: hstore

    Example:

    ```
    postgres=# select slice('a=>1,b=>2,c=>3'::hstore, ARRAY['b','c','x']);
           slice
    --------------------
     "b"=>"2", "c"=>"3"
    (1 row)
    ```

-   slice\_array\(hstore, text\[\]\)

    Description: Extracts the set of hstore values.

    Return type: value array

    Example:

    ```
    postgres=# select slice_array('a=>1,b=>2,c=>3'::hstore, ARRAY['b','c','x']);
     slice_array
    -------------
     {2,3,NULL}
    (1 row)
    ```

-   skeys\(hstore\)

    Description: Returns a set of all keys of the hstore type.

    Return type: a set of keys

    Example:

    ```
    postgres=# select skeys('a=>1,b=>2');
     skeys
    -------
     a
     b
    (2 rows)
    ```

-   simsearch\_lib\_load\_status\(\)

    Description: Queries the dynamic library loading status \(success or failure\).

    Return type: SETOF record

-   simsearch\_gpu\_vector\_status\(\)

    Description: Queries whether there is a vector in the status of searchlet.

    Return type: SETOF record


