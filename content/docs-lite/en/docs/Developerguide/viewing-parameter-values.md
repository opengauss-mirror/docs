# Viewing Parameter Values<a name="EN-US_TOPIC_0289900197"></a>

openGauss uses a set of default running parameters after it is installed. You can modify the parameters to better fit the current service scenarios and data volume.

## Procedure<a name="en-us_topic_0283136797_en-us_topic_0237121561_en-us_topic_0059778552_s188c1b9187954573b5701cc6013c78e8"></a>

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

3.  View the parameter values in the database.
    -   Method 1: Run the  **SHOW**  command.
        -   Run the following command to view the value of a certain parameter:

            ```
            openGauss=# SHOW server_version;
            ```

            _server\_version_  indicates the database version.

        -   Run the following command to view values of all parameters:

            ```
            openGauss=#  SHOW ALL;
            ```


    -   Method 2: Query the  **pg\_settings**  view.
        -   Run the following command to view the value of a certain parameter:

            ```
            openGauss=# SELECT * FROM pg_settings WHERE NAME='server_version';
            ```

        -   Run the following command to view values of all parameters:

            ```
            openGauss=# SELECT * FROM pg_settings;
            ```




## Example<a name="en-us_topic_0283136797_en-us_topic_0237121561_en-us_topic_0059778552_se13d2a46521a4500881363a56a68d6cf"></a>

View the server version.

```
openGauss=# SHOW server_version;
 server_version 
----------------
 9.2.4
(1 row)
```

