# Checking the Number of Application Connections<a name="EN-US_TOPIC_0242215068"></a>

If the number of connections between applications and the database exceeds the maximum value, new connections cannot be established. You are advised to daily check the number of connections, release idle connections in time, or increase the allowed maximum number of connections.

## Procedure<a name="en-us_topic_0237088809_en-us_topic_0059777858_s8aaa4c4f54fe4b97b5bf3a874789aad6"></a>

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

3.  Run the following SQL statement to check the number of connections:

    ```
    postgres=# SELECT count(*) FROM (SELECT pg_stat_get_backend_idset() AS backendid) AS s;
    ```

    Information similar to the following is displayed.  **2**  indicates that two applications are connected to the database.

    ```
    count
    -------
         2
    (1 row)
    ```

4.  View the allowed maximum connections.

    ```
    postgres=# SHOW max_connections;
    ```

    Information similar to the following is displayed.  **200**  indicates the currently allowed maximum number of connections.

    ```
     max_connections 
    -----------------
     200
    (1 row)
    ```


## Exception Handling<a name="en-us_topic_0237088809_en-us_topic_0059777858_sd21b84e4719d479daa8c2a0a7bef2589"></a>

If the number of connections in the command output is close to the value of  **max\_connections**  of the database, delete existing connections or change the upper limit based on site requirements.

1.  Run the following SQL statement to view information about connections whose  **state**  is set to  **idle**, and  **state\_change**  column is not updated for a long time.

    ```
    postgres=# SELECT * FROM pg_stat_activity where state='idle' order by state_change;
    ```

    Information similar to the following is displayed:

    ```
     datid | datname  |       pid       | usesysid | usename  | application_name |  client_addr  
     | client_hostname | client_port |         backend_start         | xact_start |          quer
    y_start          |         state_change          | waiting | enqueue | state | resource_pool 
    |                    query                     
    -------+----------+-----------------+----------+----------+------------------+---------------
    -+-----------------+-------------+-------------------------------+------------+--------------
    -----------------+-------------------------------+---------+---------+-------+---------------
    +----------------------------------------------
     13626 | postgres | 140390162233104 |       10 | gaussdba |                  |               
     |                 |          -1 | 2016-07-15 14:08:59.474118+08 |            | 2016-07-15 14
    :09:04.496769+08 | 2016-07-15 14:09:04.496975+08 | f       |         | idle  | default_pool  
    | select count(group_name) from pgxc_group;
     13626 | postgres | 140390132872976 |       10 | gaussdba | cn_5002          | 10.180.123.163
     |                 |       48614 | 2016-07-15 14:11:16.014871+08 |            | 2016-07-15 14
    :21:17.346045+08 | 2016-07-15 14:21:17.346095+08 | f       |         | idle  | default_pool  
    | SET SESSION AUTHORIZATION DEFAULT;RESET ALL;
    (2 rows)
    ```

2.  Release idle connections.

    Check each connection and release them after obtaining approval from the users of the connections. Run the following SQL command to release a connection using  **pid**  obtained in the previous step:

    ```
    postgres=# SELECT pg_terminate_backend(140390132872976);
    ```

    Information similar to the following is displayed:

    ```
    postgres=# SELECT pg_terminate_backend(140390132872976);
     pg_terminate_backend 
    ----------------------
     t
    (1 row)
    ```

    If no connections can be released, go to the next step.

3.  Increase the maximum number of connections.

    ```
    gs_guc set -D /gaussdb/data/dbnode -c "max_connections= 800"
    ```

    **800**  is the new maximum value.

4.  Restart database services to make the new settings take effect.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The restart results in operation interruption. Properly plan the restart to avoid affecting users.  

    ```
    gs_om -t stop && gs_om -t start
    ```


