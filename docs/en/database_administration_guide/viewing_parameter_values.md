# Viewing Parameter Values<a name="EN-US_TOPIC_0242370405"></a>

openGauss uses a set of default running parameters after it is installed. You can modify the parameters to better fit the current service scenarios and data volume.

## Procedure<a name="en-us_topic_0237121561_en-us_topic_0059778552_s188c1b9187954573b5701cc6013c78e8"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss x.x.x build 290d125f) compiled at 2020-12-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

3.  View the parameter values in the database.
    -   Method 1: Run the  **SHOW**  command.
        -   Run the following command to view the value of a certain parameter:

            ```
            SHOW server_version;
            ```

            _server\_version_  indicates the database version.

        -   Run the following command to view values of all parameters:

            ```
            SHOW ALL;
            ```


    -   Method 2: Query the  **pg\_settings**  view.
        -   Run the following command to view the value of a certain parameter:
    
            ```
            SELECT * FROM pg_settings WHERE NAME='server_version';
            ```
    
        -   Run the following command to view values of all parameters:
    
            ```
            SELECT * FROM pg_settings;
            ```




## Example<a name="en-us_topic_0237121561_en-us_topic_0059778552_se13d2a46521a4500881363a56a68d6cf"></a>

View the server version.

```
postgres=# SHOW server_version;
 server_version 
----------------
 9.2.4
(1 row)
```

