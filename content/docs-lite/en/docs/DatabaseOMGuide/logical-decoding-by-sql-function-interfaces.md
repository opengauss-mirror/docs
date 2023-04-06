# Logical Decoding by SQL Function Interfaces<a name="EN-US_TOPIC_0289900929"></a>

In openGauss, you can call SQL functions to create, delete, and push logical replication slots, as well as obtain decoded transaction logs.

## Prerequisites<a name="en-us_topic_0283137322_en-us_topic_0237121453_section1288315272236"></a>

-   Currently, logical logs are extracted from host nodes. To perform logical replication, the GUC parameter  **[ssl](../DataBaseReference/security-and-authentication_postgresql-conf.md#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa)**  must be set to  **on**  on host nodes.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >For security purposes, ensure that SSL connections are enabled.


-   The GUC parameter  **[wal\_level](../DataBaseReference/settings.md#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s2c76f5957066407a959191148f2c780f)**  is set to  **logical**.
-   The GUC parameter  **[max\_replication\_slots](../DataBaseReference/sending-server.md#en-us_topic_0283137693_section7322161612568)**  is set to a value greater than or equal to the number of physical streaming replication slots and logical replication slots required by each node.

    Physical streaming replication slots provide an automatic method to ensure that Xlogs are not removed from a primary node before they are received by all the standby nodes and secondary nodes. That is, physical replication slots are used to support primary/standby HA. The number of physical replication slots required by a database is equal to the ratio of standby and secondary nodes to the primary node. If an HA cluster has one primary node and three standby nodes, the number of required physical replication slots will be 3.

    Plan the number of logical replication slots as follows:

    -   A logical replication slot can carry changes of only one database for decoding. If multiple databases are involved, create multiple logical replication slots.
    -   If logical replication is needed by multiple target databases, create multiple logical replication slots in the source database. Each logical replication slot corresponds to one logical replication link.

-   Only initial users and users with the  **REPLICATION**  permission can perform this operation. When separation of duties is disabled, database administrators can perform logical replication operations. When separation of duties is enabled, database administrators are not allowed to perform logical replication operations.
-   Currently, primary/standby/secondary deployment is not supported by default.

## Procedure<a name="en-us_topic_0283137322_en-us_topic_0237121453_section14821441121619"></a>

1.  Log in to the primary node of the openGauss database as the database installation user.
2.  Run the following command to connect to the default database  **postgres**:

    ```
    gsql -d postgres -p 16000 -r
    ```

    In this command,  **16000**  is the database port number. It can be replaced by an actual port number.

3.  Create a logical replication slot named  **slot1**.

    ```
    openGauss=# SELECT * FROM pg_create_logical_replication_slot('slot1', 'mppdb_decoding');
    slotname | xlog_position
    ----------+---------------
    slot1    | 0/601C150
    (1 row)
    ```

4.  Create a table  **t**  in the database and insert data into it.

    ```
    openGauss=# CREATE TABLE t(a int PRIMARY KEY, b int);
    openGauss=# INSERT INTO t VALUES(3,3);
    ```

5.  Read the decoding result of  **slot1**. The number of decoded records is 4096.

    ```
    openGauss=# SELECT * FROM pg_logical_slot_peek_changes('slot1', NULL, 4096);
    location  |  xid  | data                                                                                         
    -----------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------
    -------------------------------------------
     0/601C188 | 1010023 | BEGIN 1010023
     0/601ED60 | 1010023 | COMMIT 1010023 CSN 1010022
     0/601ED60 | 1010024 | BEGIN 1010024
     0/601ED60 | 1010024 | {"table_name":"public.t","op_type":"INSERT","columns_name":["a","b"],"columns_type":["integer","integer"],"columns_val":["3","3"],"old_keys_name":[],"old_keys_type":[],"old_keys_val":[]}
     0/601EED8 | 1010024 | COMMIT 1010024 CSN 1010023
    (5 rows)
    ```

6.  Delete the logical replication slot  **slot1**.

    ```
    openGauss=#  SELECT * FROM pg_drop_replication_slot('slot1');
     pg_drop_replication_slot
    --------------------------
    
    (1 row)
    ```


