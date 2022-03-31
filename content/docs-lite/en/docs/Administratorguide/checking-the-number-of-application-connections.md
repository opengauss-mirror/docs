# Checking the Number of Application Connections<a name="EN-US_TOPIC_0289897019"></a>

If the number of connections between applications and the database exceeds the maximum value, new connections cannot be established. You are advised to daily check the number of connections, release idle connections in time, or increase the allowed maximum number of connections.

## Procedure<a name="en-us_topic_0283140579_en-us_topic_0237088809_en-us_topic_0059777858_s8aaa4c4f54fe4b97b5bf3a874789aad6"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  Run the following SQL statement to check the number of connections:

    ```
    openGauss=# SELECT count(*) FROM (SELECT pg_stat_get_backend_idset() AS backendid) AS s;
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
    openGauss=# SHOW max_connections;
    ```

    Information similar to the following is displayed.  **200**  indicates the currently allowed maximum number of connections.

    ```
     max_connections 
    -----------------
     200
    (1 row)
    ```


## Exception Handling<a name="en-us_topic_0283140579_en-us_topic_0237088809_en-us_topic_0059777858_sd21b84e4719d479daa8c2a0a7bef2589"></a>

If the number of connections in the command output is close to the value of  **max\_connections**  of the database, delete existing connections or change the upper limit based on site requirements.

1.  Run the following SQL statement to view information about connections whose  **state**  is set to  **idle**, and  **state\_change**  column is not updated for a long time.

    ```
    openGauss=# SELECT * FROM pg_stat_activity where state='idle' order by state_change;
    ```

    Information similar to the following is displayed:

    ```
    datid | datname  |       pid       |    sessionid    | usesysid | usename |    application_name    | client_addr | client_hostname | client_port |         backend_start         | xact_start |          query
    _start          |         state_change          | waiting | enqueue | state | resource_pool | query_id |                          query                           | connection_info | unique_sql_id
    -------+----------+-----------------+-----------------+----------+---------+------------------------+-------------+-----------------+-------------+-------------------------------+------------+---------------
    ----------------+-------------------------------+---------+---------+-------+---------------+----------+----------------------------------------------------------+-----------------+---------------
     16200 | postgres | 140556276659968 | 140556276659968 |       10 | omm     | statement flush thread |             |                 |             | 2022-01-10 20:31:19.679721+08 |            |
                    | 2022-01-10 20:31:19.679741+08 | f       |         | idle  | default_pool  |        0 |                                                          |                 |             0
     16200 | postgres | 140556569540352 | 140556569540352 |       10 | omm     | cm_agent               | 10.244.2.24 |                 |       50522 | 2022-01-10 20:31:15.582877+08 |            | 2022-01-10 20:
    31:20.612987+08 | 2022-01-10 20:31:20.616886+08 | f       |         | idle  | default_pool  |        0 | select * from disable_conn('polling_connection', '', 0); |                 |             0
     16200 | postgres | 140556602111744 | 140556602111744 |       10 | omm     | cm_agent               | 10.244.2.24 |                 |       50476 | 2022-01-10 20:31:09.92659+08  |            | 2022-03-09 10:
    47:40.948749+08 | 2022-03-09 10:47:40.948891+08 | f       |         | idle  | default_pool  |        0 | show synchronous_standby_names;                          |                 |             0
     16200 | postgres | 140556637828864 | 140556637828864 |       10 | omm     | cm_agent               | 10.244.2.24 |                 |       50472 | 2022-01-10 20:31:08.921173+08 |            | 2022-03-09 10:
    47:41.131224+08 | 2022-03-09 10:47:41.13128+08  | f       |         | idle  | default_pool  |        0 | show most_available_sync;                                |                 |             0
    (4 rows)
    ```

2.  Release idle connections.

    Check each connection and free them up after obtaining approval from the user of the connection. Run the following SQL command to free up the connection using the  **pid**  obtained in the previous step:

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
    ```

    Information similar to the following is displayed:

    ```
    openGauss=# SELECT pg_terminate_backend(140390132872976);
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
    >Restarting openGauss results in operation interruption. Properly plan the restart to avoid affecting users.

    ```
    gs_ctl restart -D /gaussdb/data/dbnode
    ```


