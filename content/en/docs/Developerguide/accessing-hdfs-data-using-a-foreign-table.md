# Accessing HDFS Data Using a Foreign Table<a name="EN-US_TOPIC_0311524273"></a>

The data type of the HDFS foreign table created by the openGauss must match that of the structured table definition created through the Hadoop Hive in the HDFS. For the definition of the Hadoop structured data table in HDFS, see the Hive official documents.

The HDFS foreign table created in openGauss must support the ROUND ROBIN and replication data distribution modes used by the HDFS native data table.

## Managing Foreign Data Servers<a name="section1485280104511"></a>

As described in  [Interconnection Configuration](interconnection-configuration.md), the connection finally requires  **[CREATE SERVER](CREATE-SERVER.md)**  to define foreign servers to store HDFS database instance information.

To modify the information about a foreign server, use  **[ALTER SERVER](ALTER-SERVER.md)**.

To delete a foreign server, use  **[DROP SERVER](DROP-SERVER.md)**.

## Managing Foreign Tables<a name="section135985217459"></a>

-   After the interconnection configuration is complete, use  **CREATE SERVER**  to define foreign servers to store HDFS database instance information. In this case, you can create a foreign table and use it to read data from the remote HDFS database instance. For details about the syntax for creating a foreign table, see  [CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md).
    -   You need to specify  **server\_name**  of the HDFS server where the foreign table is located, and the storage file list or storage directory of the foreign table on the HDFS database instance server. An HDFS foreign table can correspond to multiple HDFS storage files or one file storage directory. If the HDFS file storage directory is specified, all the files in this directory and its subdirectory are data files of this table by default.
    -   The database engine can access data tables in ORC 0.11 and 0.12 formats in HDFS, and allows ORC files to be compressed in SNAPPY, ZLIB, or NO mode.
    -   The database engine can access data tables in Parquet 1.0 and 2.0 formats in HDFS, and allows Parquet files to be compressed in SNAPPY or NO mode.
    -   The definition of the foreign table needs to match the Hive table type defined when data is imported to the HDFS. For details about the corresponding relationship of data types, see  [Data Types](data-types.md).
    -   The data is imported to the HDFS database instance file system by the external tool, and stored to the HDFS native format data table on the Hadoop. The default HDFS data distribution mode between nodes is that data is distributed on all the HDFS data nodes randomly. The supported HDFS foreign table must specify the ROUNDROBIN distribution mode.
    -   The column attribute can be set to  **NULL**  by default. When you select  **NOT NULL**, the database will not perform the consistency check and you need to ensure that there is no null value using the application.

-   For details about how to modify a foreign table, see  [ALTER FOREIGN TABLE](ALTER-FOREIGN-TABLE.md).
-   For details about how to delete a foreign table, see  [DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md).
-   View a foreign table. After a foreign table is created, you can use  **SELECT**  to query foreign table data. For details, see  [Foreign Table Usage](foreign-table-usage.md).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Statements used for creating HDFS foreign tables do not support column constraints or table constraints.
>-   Index creation is not supported. Inheritance is not supported. View creation is supported.
>-   **enable\_hdfs\_predicate\_pushdown**: the GUC parameter of the bool type, indicating whether the function of the predicate pushdown to the native data layer is enabled. The default setting is  **true**.
>-   The directory or file specified by the HDFS foreign table must be accessible to the user who connects to FusionInsight HD. Otherwise, an error is reported, indicating that the file does not exist.
>-   When you access HDFS data, data can be encrypted for transmission with the following restrictions:
>    -   If data transmission encryption is enabled \(**dfs.encrypt.data.transfer**  is set to  **true**\),  **hadoop.rpc.protection**  must be set to  **privacy**.
>    -   The HDFS data transmission encryption parameter  **dfs.encrypt.data.transfer.algorithm**  can be set only to  **3des**.  **3DES**  is not recommended because it is an insecure encryption algorithm and may cause network security risks.
>    -   The HDFS data transmission encryption parameter  **dfs.encrypt.data.transfer.cipher.key.bitlength**  can be set only to  **128**. The default value of this parameter for FusionInsight HD is  **192**. Change this default value to  **128**  if data transmission encryption is enabled.
>    -   The HDFS data transmission encryption parameter  **dfs.encrypt.data.transfer.cipher.suites**  can be set only to  **AES**,  **CTR**, or  **NoPadding**.

