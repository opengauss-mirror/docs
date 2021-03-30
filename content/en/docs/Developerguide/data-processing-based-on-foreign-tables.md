# Data Processing Based on Foreign Tables<a name="EN-US_TOPIC_0311524283"></a>

## Function<a name="en-us_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

You can create foreign tables in database instances to implement associated query among multiple database instances and import data.

## Application Scenarios<a name="section3206325195115"></a>

-   Import data from a database instance to another database instance.
-   Perform associated query among multiple database instances.

## Precautions<a name="section116519262516"></a>

-   The created foreign table must be of the same type and have the same columns as its corresponding remote table, which can only be a row-store, column-store, hash, or replication table.
-   If the associated table in another database instance is a replication table or has data skew, the query performance may be poor.
-   The status of the two database instances must be  **Normal**.
-   Both database instances must have the foreign table-based SQL on openGauss data processing function.
-   You are advised to configure LVS. If it is not configured, you are advised to use multiple DNs as the server addresses. Do not write the DN addresses of multiple database instances together.
-   Ensure that the two databases have the same encoding. Otherwise, an error may occur or the received data may be garbled characters.
-   If statistics has been collected on the remote table, you can run  **ANALYZE**  on the foreign table to obtain a better execution plan.

## Preparations<a name="section14555122745119"></a>

Ensure that the two database instances can be connected. To configure the connection, perform the following steps:

1.  Set the listening IP address of the remote database instance.

    Add the IP addresses or host names \(separated by commas\) of the NICs providing external services to the listening list on all the DNs receiving remote services \(assume that the host name is  **Linux-235**  and the IP address is  **10.11.12.16**  for a DN\). Generally, the IP addresses are local. If they already exist in the list, you do not need to set them again. Run the following command:

    ```
    gs_guc reload -Z datanode -N Linux-235 -I all -c "listen_addresses='localhost,10.11.12.16'"
    ```

    For details, see  [5](configuring-a-data-source-in-the-linux-os.md#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059779273_li36737057205239)  and  [6](configuring-a-data-source-in-the-linux-os.md#en-us_topic_0283136654_li1724551081815).

2.  Set the authentication mode on the DN of the remote database instance.

    Assume that IP addresses of nodes of the local openGauss database instance is  **10.11.12.13**,  **10.11.12.14**, and  **10.11.12.15**. To set the SHA-256 connection authentication mode, perform the following operations on each DN of the remote openGauss database instance:

    ```
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.13/32 sha256"
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.14/32 sha256"
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.15/32 sha256"
    ```

    If the local openGauss database instance has multiple nodes and the IP addresses of the nodes are consecutive and in the same network segment, you can set the IP addresses in batches. For example:

    ```
    #Allow accesses from hosts with the IP address 10.11.12.x:
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.12.0/24 sha256"
    #Allow accesses from hosts with the IP address 10.11.x.x:
    gs_guc reload -Z datanode -N all -I all -h "host all all 10.11.0.0/16 sha256"
    ```

    If there are many nodes in the local openGauss database instance and their IP addresses are inconsecutive or in different network segments, you can use a script to set the nodes in batches. For details, see  [4](data-processing-based-on-extension-connector.md#li118501793551)  in "Data Processing Based on Extension Connector."

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The remote database instance must be configured on all hosts where the DN instance is deployed.
    >-   If the capacity of the local database instance is expanded or a DN is added, you need to configure the new IP address on all hosts where the DN instance is deployed in the remote database instance.
    >-   SSL connections are supported. If the local database instance and remote database instance are in different untrusted domains, you are advised to configure two-way SSL authentication. For details, see  [Establishing Secure TCP/IP Connections in SSL Mode](establishing-secure-tcp-ip-connections-in-ssl-mode.md).

3.  Restart the remote database instance.

    ```
    gs_om -t stop
    gs_om -t start
    ```


## Procedure<a name="section653132835118"></a>

1.  Create a server.

    ```
    postgres=# CREATE SERVER server_remote FOREIGN DATA WRAPPER GC_FDW OPTIONS 
       (address '10.146.187.231:8000,10.180.157.130:8000' ,
      dbname 'test', 
      username 'test', 
      password 'xxxxxxxx'
    );
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **server\_remote**  is the server name used for the foreign table.
    >-   **address**  specifies the IP addresses and port numbers of DNs in the remote database instance. If LVS is configured, you are advised to enter only one LVS address. If LVS is not configured, you are advised to set multiple DNs as server addresses.
    >-   **dbname**  indicates the database name of the remote database instance.
    >-   **username**  is the username used for connecting to the remote database instance. You are not advised to use the system administrator account.
    >-   **password**  indicates the password of the user for connecting to the remote database instance.

2.  Create a foreign table.

    ```
    postgres=# CREATE FOREIGN TABLE region
    (
        R_REGIONKEY INT4,
        R_NAME TEXT,
        R_COMMENT TEXT
    )
    SERVER
        server_remote
    OPTIONS
    (
        schema_name 'test',
        table_name 'region',
        encoding 'gbk'
    );
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Foreign table columns cannot contain any constraints.
    >-   The column names and types of the foreign table must be the same as those of the table corresponding to the remote database instance.
    >-   **schema\_name**  specifies the schema of the foreign table corresponding to the remote database instance. If this parameter is not specified, the default schema is used.
    >-   **table\_name**  specifies the name of the foreign table corresponding to the remote database instance. If this parameter is not specified, the default foreign table name is used.
    >-   **encoding**  indicates the encoding of the remote database instance. If this option is omitted, the default encoding of the remote database instance database is used.

3.  View the created foreign table.

    ```
    postgres=# \d+ region
    
                                  Foreign table "public.region"
       Column    |  Type   | Modifiers | FDW Options | Storage  | Stats target | Description
    -------------+---------+-----------+-------------+----------+--------------+-------------
     r_regionkey | integer |           |             | plain    |              |
     r_name      | text    |           |             | extended |              |
     r_comment   | text    |           |             | extended |              |
    Server: server_remote
    FDW Options: (schema_name 'test', table_name 'region', encoding 'gbk')
    FDW permition: read only
    Has OIDs: no
    Distribute By: ROUND ROBIN
    Location Nodes: ALL DATANODES
    ```

4.  Use the foreign table to import data or perform join queries.
    -   Import data.

        ```
        postgres=# CREATE TABLE local_region
        (
            R_REGIONKEY INT4,
            R_NAME TEXT,
            R_COMMENT TEXT
        );
        postgres=# INSERT INTO local_region SELECT * FROM region;
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   If a connection failure is reported, check the server information and ensure that the specified two database instances are interconnected.
        >-   If an error is reported, indicating that a table does not exist, check whether the parameter information of the foreign table is correct.
        >-   If a column mismatch error is reported, check whether the column information of the foreign table is consistent with that of the corresponding table in the remote database instance.
        >-   If a version inconsistency error is reported, upgrade the database instance of the earlier version and try again.
        >-   If garbled characters are displayed, check the encoding format of the source data, recreate a foreign table, and specify the correct coding format if necessary.

    -   Perform a join query.

        ```
        postgres=# SELECT local_region * FROM region, local_region WHERE local_region.R_NAME = region.R_NAME;
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   A foreign table can be used as a local table to perform complex jobs.
        >-   If statistics has been collected on the remote database instance, run  **ANALYZE**  on the foreign table to obtain a better execution plan.
        >-   If the number of DNs of the local database instance is less than that of the remote database instance, the local database instance needs to use SMP for better performance.


5.  Delete the foreign table.

    ```
    postgres=# DROP FOREIGN TABLE region;
    DROP FOREIGN TABLE 
    ```


