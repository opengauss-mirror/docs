# Querying Audit Results<a name="EN-US_TOPIC_0246507972"></a>

## Prerequisites<a name="en-us_topic_0237121113_en-us_topic_0059778013_sfe45a1031ec347ba820649c0cec52027"></a>

-   Audit has been enabled.
-   Audit of required items has been enabled.
-   The database is running properly and a series of addition, modification, deletion, and query operations have been executed in the database. Otherwise, no audit result is generated.
-   Audit logs are separately recorded on the database nodes.

## Background<a name="en-us_topic_0237121113_en-us_topic_0059778013_s15667753cb2542158661ae3f96cab067"></a>

-   Only users with the  **AUDITADMIN**  permission can view audit records. For details about database users and how to create users, see  [Users](users.md).
-   The SQL function  **pg\_query\_audit**  is provided by the database for audit query. Its syntax is as follows:

    ```
    pg_query_audit(timestamptz startime,timestamptz endtime,audit_log)
    ```

    **startime**  and  **endtime**  indicate the start time and end time of the audit record, respectively.  **audit\_log**  indicates the physical file path of the queried audit logs. If  **audit\_log**  is not specified, the audit log information of the current instance is queried.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The difference between the values of the  **startime**  and  **endtime**  parameters indicates the query period, which can be any value ranging from 00:00:00 of the  **startime**  parameter to 23:59:9 of the  **endtime**  parameter. Therefore, the  **startime**  and  **endtime**  parameters must be properly set to ensure that the required audit information is displayed.  


## Procedure<a name="en-us_topic_0237121113_en-us_topic_0059778013_s342f3000e10f4c079735155bb32a56a2"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss 1.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

3.  Run the following command to query the audit record:

    ```
    postgres=# SELECT * FROM pg_query_audit('2015-07-15 08:00:00','2015-07-15 09:47:33');
    ```

    The command output is similar to the following:

    ```
              time          |     type      | result | username |    database    | client_conninfo |  object_name   |                          detail_info                | node_name |            thread_id            | local_port | remote_port
    ------------------------+---------------+--------+----------+----------------+-----------------+----------------+---------------------------------------------------------------+-----------+---------------------------------+------------+-------------
     2015-07-15 08:03:55+08 | login_success | ok     | omm | postgres       | gs_clean@::1    | postgres       | login db(postgres) success,the current user is:omm       | cn_5003   | 139808902997776@490233835920483 | 9000       | 55805
    ```

    This audit record indicates that user  **omm**  logged in to the  **postgres**  database at 08:03:55+08 on July 15, 2015. After the host specified by  **log\_hostname**  is started and a client is connected to its IP address, the host name found by reverse DNS resolution is displayed following the at sign \(@\) in the value of  **client\_conninfo**.


