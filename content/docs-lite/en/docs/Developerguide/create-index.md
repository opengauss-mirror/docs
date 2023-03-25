# CREATE INDEX<a name="EN-US_TOPIC_0289900160"></a>

## Function<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s10bd477b6f0a4b4687123335b61aa981"></a>

**CREATE INDEX-bak**  defines a new index.

Indexes are primarily used to enhance database performance \(though inappropriate use can result in database performance deterioration\). You are advised to create indexes on:

-   Columns that are often queried
-   Join conditions. For a query on joined columns, you are advised to create a composite index on the columns, For example, for  **select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b**, you can create a composite index on columns  **a**  and  **b**  in table  **t1**.
-   Columns having filter criteria \(especially scope criteria\) of a  **where**  clause
-   Columns that appear after  **order by**,  **group by**, and  **distinct**

The partitioned table does not support partial index creation. 

## Precautions<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s31780559299b4f62bec935a2c4679b84"></a>

-   Indexes consume storage and computing resources. Creating too many indexes has negative impact on database performance \(especially the performance of data import. Therefore, you are advised to import the data before creating indexes\). Therefore, create indexes only when they are necessary.
-   All functions and operators used in an index definition must be immutable, that is, their results must depend only on their parameters and never on any outside influence \(such as the contents of another table or the current time\). This restriction ensures that the behavior of the index is well-defined. To use a customized function in an index expression or  **WHERE**  clause, remember to mark the function  **immutable**  when you create it.
-   Partitioned table indexes are classified into LOCAL indexes and GLOBAL indexes. A LOCAL index binds to a specific partition, and a GLOBAL index corresponds to the entire partitioned table.
-   If the two indexes are used, you cannot create expression and partial indexes. If the PSORT index is used, you cannot create unique indexes. If the B-tree index is used, you can create unique indexes.
-   Column-store tables support GIN indexes, rather than partial indexes and unique indexes. If GIN indexes are used, you can create expression indexes. However, an expression in this situation cannot contain empty splitters, empty columns, or multiple columns.
-   Currently, only row-store table indexes, temporary table indexes, and local indexes of partitioned tables can be used as hash indexes. Multi-column indexes are not supported.
-   A user granted with the  **CREATE ANY INDEX**  permission can create indexes in both the public and user schemas.
-   If a user-defined function is called in the expression index, the expression index function is executed based on the permission of the function creator.

## Syntax<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_sa24c1a88574742bcb5427f58f5abb732"></a>

-   Create an index on a table.

    ```
    CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ [schema_name.]index_name ] ON table_name [ USING method ]
        ({ { column_name [ ( length ) ] | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
        [ INCLUDE ( column_name [, ...] )]
        [ WITH ( {storage_parameter = value} [, ... ] ) ]
        [ TABLESPACE tablespace_name ]
        [ COMMENT text ]
        [ WHERE predicate ];
    ```

-   Create an index on a partitioned table.

    ```
    CREATE [ UNIQUE ] INDEX [ [schema_name.]index_name ] ON table_name [ USING method ]
        ( {{ column_name [ ( length ) ] | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
        [ LOCAL [ ( { PARTITION index_partition_name | SUBPARTITION index_subpartition_name [ TABLESPACE index_partition_tablespace ] } [, ...] ) ] | GLOBAL ]
        [ INCLUDE ( column_name [, ...] )]
        [ WITH ( { storage_parameter = value } [, ...] ) ]
        [ TABLESPACE tablespace_name ]
        [ COMMENT text ];
    ```


## Parameter Description<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s82e47e35c54c477094dcafdc90e5d85a"></a>

-   **UNIQUE**

    Creates a unique index. In this way, the system checks whether new values are unique in the index column. Attempts to insert or update data which would result in duplicate entries will generate an error.

    Currently, only B-tree and UB-tree indexes support unique indexes.

-   **CONCURRENTLY**

    Create an index \(with ShareUpdateExclusiveLock\) in non-blocking DML mode. A normal  **CREATE INDEX**  acquires exclusive lock on the table on which the index depends, blocking other accesses until the index drop can be completed. If this keyword is specified, DML is not blocked during the creation.

    -   This option can only specify a name of one index.
    -   The  **CREATE INDEX**  statement can be run within a transaction, but  **CREATE INDEX CONCURRENTLY**  cannot.
    -   Column-store tables, partitioned tables, and temporary tables do not support  **CREATE INDEX CONCURRENTLY**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   This keyword is specified when an index is created. The entire table needs to be scanned twice and built. When the table is scanned for the first time, an index is created and the read and write operations are not blocked. During the second scan, changes that have occurred since the first scan are merged and updated.
    >-   The table needs to be scanned and built twice, and all existing transactions that may modify the table must be completed. This means that the creation of the index takes a longer time than normal. In addition, the CPU and I/O consumption also affects other services.
    >-   If an index build fails, it leaves an "unusable" index. This index is ignored by the query, but it still consumes the update overhead. In this case, you are advised to delete the index and try  **CREATE INDEX CONCURRENTLY**  again.
    >-   After the second scan, index creation must wait for any transaction that holds a snapshot earlier than the snapshot taken by the second scan to terminate. In addition, the ShareUpdateExclusiveLock \(level 4\) added during index creation conflicts with a lock whose level is greater than or equal to 4. Therefore, when such an index is created, the system is prone to hang or deadlock. For example:
    >    -   If two sessions create an index concurrently for the same table, a deadlock occurs.
    >    -   If a session creates an index concurrently for a table and another session drops a table, a deadlock occurs.
    >    -   There are three sessions. Session 1 locks table  **a**  and does not commit it. Session 2 creates an index concurrently for table  **b**. Session 3 writes data to table  **a**. Before the transaction of session 1 is committed, session 2 is blocked.
    >    -   The transaction isolation level is set to repeatable read \(read committed by default\). Two sessions are started. Session 1 writes data to table  **a**  and does not commit it. Session 2 creates an index concurrently for table  **b**. Before the transaction of session 1 is committed, session 2 is blocked.

-   **schema\_name**

    Specifies the schema name.

    Value range: an existing schema name

-   **index\_name**

    Specifies the name of the index to be created. The schema of the index is the same as that of the table.

    Value range: a string. It must comply with the identifier naming convention.

-   **table\_name**

    Specifies the name of the table to be indexed \(optionally schema-qualified\).

    Value range: an existing table name

-   **USING method**

    Specifies the name of the index method to be used.

    Value range:

    -   **btree**: B-tree indexes store key values of data in a B+ tree structure. This structure helps users to quickly search for indexes. B-tree indexes support comparison queries with ranges specified.
    -   **hash**: Hash indexes use hash functions to hash index keywords. Only simple equivalence comparison can be processed. This value is applicable to scenarios where index values are long.
    -   **gin**: GIN indexes are reverse indexes and can process values that contain multiple keys \(for example, arrays\).
    -   **gist**: GiST indexes are suitable for the set data type and multidimensional data types, such as geometric and geographic data types. The following data types are supported: box, point, poly, circle, tsvector, tsquery, and range.
    -   **Psort**: psort index. It is used to perform partial sort on column-store tables.
    -   **ubtree**: Multi-version B-tree index used only for Ustore tables. The index page contains transaction information and can be recycled. By default, the INSERTPT function is enabled for UBtree indexes.

    Row-store tables \(Astore storage engine\) support the following index types:  **btree**  \(default\),  **hash**,  **gin**, and  **gist**. Row-store tables \(Ustore storage engine\) support the following index type:  **ubtree**. Column-store tables support the following index types:  **Psort**  \(default\),  **btree**, and  **gin**. Global temporary tables do not support GIN and GiST indexes.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Column-store tables support GIN indexes only for the tsvector type. That is, the input parameter for creating a column-store GIN index must be the return value of the  **to\_tsvector**  function. This method is commonly used for GIN indexes.

-   **column\_name**

    Specifies the name of the column on which an index is to be created.

    Multiple columns can be specified if the index method supports multi-column indexes. A global index supports a maximum of 31 columns, and other indexes support a maximum of 32 columns.

-   **column\_name ( length )**

    Creates a prefix key index based on a column in the table. **column\_name** indicates the column name of the prefix key, and **length** indicates the prefix length.

    The prefix key uses the prefix of the specified column data as the index key value, which reduces the storage space occupied by the index. Indexes can be used for filter and join conditions that contain prefix key columns.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-  This syntax is valid only when **sql\_compatibility** is set to **B**. If **sql\_compatibility** is set to other values, this clause is regarded as the function expression key.
    >-  The prefix key supports the following index methods: btree and ubtree.
    >-  The data type of the prefix key column must be binary or character (excluding special characters).
    >-  The prefix length must be a positive integer that does not exceed 2676 and cannot exceed the maximum length of the column. For the binary type, the prefix length is measured in bytes. For non-binary character types, the prefix length is measured in characters. The actual length of the key value is restricted by the internal page. If a column contains multi-byte characters or an index has multiple keys, the length of the index line may exceed the upper limit. As a result, an error is reported. Consider this situation when setting a long prefix length.
    >-  In the CREATE INDEX syntax, the following keywords cannot be used as prefix keys for column names: COALESCE, EXTRACT, GREATEST, LEAST, NULLIF, NVARCHAR, NVL, OVERLAY, POSITION, SUBSTRING, TIMESTAMPDIFF, TREAT, TRIM, XMLCONCAT, XMLELEMENT, XMLEXISTS, XMLFOREST, XMLPARSE, XMLPI, XMLROOT, and XMLSERIALIZE.

-   **expression**

    Specifies an expression based on one or more columns of the table. The expression usually must be written with surrounding parentheses, as shown in the syntax. However, the parentheses can be omitted if the expression has the form of a function call.

    Expression can be used to obtain fast access to data based on some transformation of the basic data. For example, an index computed on  **upper\(col\)**  would allow the clause  **WHERE upper\(col\) = 'JIM'**  to use an index.

    If an expression contains  **IS NULL**, the index for this expression is invalid. In this case, you are advised to create a partial index.

-   **COLLATE collation**

    Assigns a collation to the column \(which must be of a collatable data type\). If no collation is specified, the default collation is used. You can run the  **select \* from pg\_collation**  command to query collation rules from the  **pg\_collation**  system catalog. The default collation rule is the row starting with  **default**  in the query result.

-   **opclass**

    Specifies the name of an operator class. An operator class can be specified for each column of an index. The operator class identifies the operators to be used by the index for that column. For example, a B-tree index on the type int4 would use the  **int4\_ops**  class; this operator class includes comparison functions for values of type int4. In practice, the default operator class for the column's data type is sufficient. The operator class applies to data with multiple sorts. For example, users might want to sort a complex-number data type either by absolute value or by real part. They could do this by defining two operator classes for the data type and then selecting the proper class when making an index.

-   **ASC**

    Specifies an ascending \(default\) sort order.

-   **DESC**

    Specifies a descending sort order.

-   **NULLS FIRST**

    Specifies that null values appear before non-null values in the sort ordering. This is the default when  **DESC**  is specified.

-   **NULLS LAST**

    Specifies that null values appear after non-null values in the sort ordering. This is the default when  **DESC**  is not specified.

-   **LOCAL**

    Specifies that the partitioned index to be created is a LOCAL index.

-   **GLOBAL**

    Specifies the partitioned index to be created as a GLOBAL index. If no keyword is specified, a GLOBAL index is created by default.

-   **INCLUDE  \( column\_name \[, ...\]**  \)

    The optional  **INCLUDE**  clause specifies that some non-key columns are included in indexes. Non-key columns cannot be used as search criteria for accelerating index scans, and they are omitted when the unique constraints of the indexes are checked.

    An index-only scan can directly return content in the non-key columns without accessing the heap table corresponding to the indexes.

    Exercise caution when adding non-key columns as  **INCLUDE**  columns, especially for wide columns. If the size of an index tuple exceeds the maximum size allowed by the index type, data insertion fails. Note that in any case, adding non-key columns to an index increases the space occupied by the index, which may slow down the search speed.

    Currently, only UBtree indexes access mode supports this feature. Non-key columns are stored in the index leaf tuple corresponding to the heap tuple and are not included in the tuple on the upper-layer index page.

-   **WITH \( \{storage\_parameter = value\} \[, ... \] \)**

    Specifies the storage parameter used for an index.

    Value range:

    Only index GIN supports parameters  **FASTUPDATE**  and  **GIN\_PENDING\_LIST\_LIMIT**. Indexes other than GIN and psort support the  **FILLFACTOR**  parameter. Only UBtree indexes support  **INDEXSPLIT**.

    -   FILLFACTOR

        The fill factor of an index is a percentage from 10 to 100.

        Value range: 10–100

    -   FASTUPDATE

        Specifies whether fast update is enabled for the GIN index.

        Value range: :  **ON**  and  **OFF**

        Default value:  **ON**

    -   GIN\_PENDING\_LIST\_LIMIT

        Specifies the maximum capacity of the pending list of the GIN index when fast update is enabled for the GIN index.

        Value range: 64–*INT\*MAX_. The unit is KB.

        Default value: The default value of  **gin\_pending\_list\_limit**  depends on  **gin\_pending\_list\_limit**  specified in GUC parameters. By default, the value is  **4**.

    -   INDEXSPLIT

        Specifies the splitting policy of UBtree indexes. The  **DEFAULT**  policy is the same as the splitting policy of UBtree indexes. The  **INSERTPT**  policy can significantly reduce the index space usage in some scenarios.

        Value range:  **INSERTPT**  and  **DEFAULT**

        Default value:  **INSERTPT**


-   **TABLESPACE tablespace\_name**

    Specifies the tablespace for an index. If no tablespace is specified, the default tablespace is used.

    Value range: an existing table name

-   **COMMENT text**

    Specifies the comment of an index. If no comment is specified, the comment is empty.

-   **WHERE predicate**

    Creates a partial index. A partial index is an index that contains entries for only a portion of a table, usually a portion that is more useful for indexing than the rest of the table. For example, if you have a table that contains both billed and unbilled orders where the unbilled orders take up a small fraction of the total table and yet that is an often used portion, you can improve performance by creating an index on just that portion. In addition,  **WHERE**  with  **UNIQUE**  can be used to enforce uniqueness over a subset for a table.

    Value range: The  **predicate**  expression can only refer to columns of the underlying table, but it can use all columns, not just the ones being indexed. Currently, subqueries and aggregate expressions are forbidden in  **WHERE**. You are not advised to use numeric types such as int for  **predicate**, because such types can be implicitly converted to bool values \(non-zero values are implicitly converted to  **true**  and  **0**  is implicitly converted to  **false**\), which may cause unexpected results.

-   **PARTITION index\_partition\_name**

    Specifies the name of an index partition.

    Value range: a string. It must comply with the identifier naming convention.

-   **SUBPARTITION index\_subpartition\_name**

    Specifies the name of an level-2 index partition.

    Value range: a string. It must comply with the identifier naming convention.

-   **TABLESPACE index\_partition\_tablespace**

    Specifies the tablespace of an index partition.

    Value range: If this parameter is not specified, the value of  **index\_tablespace**  is used.

-   **COMPRESSTYPE**

    Sets the index compression algorithm. The value  **1**  indicates the PGLZ algorithm, and the value  **2**  indicates the ZSTD algorithm. By default, indexes are not compressed. \(Only B-tree indexes are supported.\)

    Value range: 0 to 2. The default value is  **0**.

-   **COMPRESS\_LEVEL**

    Sets the index compression algorithm level. This parameter is valid only when  **COMPRESSTYPE**  is set to  **2**. A higher compression level indicates a better index compression effect and a slower index access speed. \(Only B-tree indexes are supported.\)

    Value range: –31 to 31. The default value is  **0**.

-   **COMPRESS\_CHUNK\_SIZE**

    Specifies the size of an index compression chunk. A smaller chunk size indicates a better compression effect, and a larger data dispersion degree indicates a slower index access speed. This parameter cannot be modified after it takes effect. \(Only B-tree indexes are supported.\)

    Value range: subject to the page size. When the page size is 8 KB, the value can be  **512**,  **1024**,  **2048**, or  **4096**.

    Default value:  **4096**

-   **COMPRESS\_PREALLOC\_CHUNKS**

    Specifies the number of pre-allocated index compression chunks. A larger number of pre-allocated chunks indicates a lower index compression ratio, and a smaller data dispersion degree indicates a better access performance. \(Only B-tree indexes are supported.\)

    Value range: 0 to 7. The default value is  **0**.

    - The maximum value of this parameter is **7** when **COMPRESS\_CHUNK_SIZE** is set to **512** or **1024**.
    - The maximum value of this parameter is **3** when **COMPRESS\_CHUNK_SIZE** is set to **2048**.
    - The maximum value of this parameter is **1** when **COMPRESS\_CHUNK_SIZE** is set to **4096**.
    
-   **COMPRESS\_BYTE\_CONVERT**

    Sets the preprocessing of index compression byte conversion. In some scenarios, the compression effect can be improved, but the performance deteriorates.

    Value range: Boolean value. By default, this function is disabled.

-   **COMPRESS\_DIFF\_CONVERT**

    Sets the pre-processing of index compression differentiation. This parameter can be used together only with  **COMPRESS\_BYTE\_CONVERT**. In some scenarios, the compression effect can be improved, but the performance deteriorates.

    Value range: Boolean value. By default, this function is disabled.


## Examples<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_s985289833081489e9d77c485755bd362"></a>

```
-- Create the tpcds.ship_mode_t1 table.
openGauss=# create schema tpcds;
openGauss=# CREATE TABLE tpcds.ship_mode_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
) 
;

-- Create a common unique index on the SM_SHIP_MODE_SK column in the tpcds.ship_mode_t1 table.
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index1 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK);

-- Create a B-tree index on the SM_SHIP_MODE_SK column in the tpcds.ship_mode_t1 table.
openGauss=# CREATE INDEX ds_ship_mode_t1_index4 ON tpcds.ship_mode_t1 USING btree(SM_SHIP_MODE_SK);

-- Create an expression index on the SM_CODE column in the tpcds.ship_mode_t1 table:
openGauss=# CREATE INDEX ds_ship_mode_t1_index2 ON tpcds.ship_mode_t1(SUBSTR(SM_CODE,1 ,4));

-- Create a partial index on the SM_SHIP_MODE_SK column where SM_SHIP_MODE_SK is greater than 10 in the tpcds.ship_mode_t1 table.
openGauss=# CREATE UNIQUE INDEX ds_ship_mode_t1_index3 ON tpcds.ship_mode_t1(SM_SHIP_MODE_SK) WHERE SM_SHIP_MODE_SK>10;

-- Rename an existing index.
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index1 RENAME TO ds_ship_mode_t1_index5;

-- Set the index as unusable.
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 UNUSABLE;

-- Rebuild an index.
openGauss=# ALTER INDEX tpcds.ds_ship_mode_t1_index2 REBUILD;

-- Delete an existing index.
openGauss=# DROP INDEX tpcds.ds_ship_mode_t1_index2;

-- Delete the table.
openGauss=# DROP TABLE tpcds.ship_mode_t1;

-- Create a tablespace.
openGauss=# CREATE TABLESPACE example1 RELATIVE LOCATION 'tablespace1/tablespace_1';
openGauss=# CREATE TABLESPACE example2 RELATIVE LOCATION 'tablespace2/tablespace_2';
openGauss=# CREATE TABLESPACE example3 RELATIVE LOCATION 'tablespace3/tablespace_3';
openGauss=# CREATE TABLESPACE example4 RELATIVE LOCATION 'tablespace4/tablespace_4';
-- Create the tpcds.customer_address_p1 table.
openGauss=# CREATE TABLE tpcds.customer_address_p1
(
    CA_ADDRESS_SK             INTEGER               NOT NULL,
    CA_ADDRESS_ID             CHAR(16)              NOT NULL,
    CA_STREET_NUMBER          CHAR(10)                      ,
    CA_STREET_NAME            VARCHAR(60)                   ,
    CA_STREET_TYPE            CHAR(15)                      ,
    CA_SUITE_NUMBER           CHAR(10)                      ,
    CA_CITY                   VARCHAR(60)                   ,
    CA_COUNTY                 VARCHAR(30)                   ,
    CA_STATE                  CHAR(2)                       ,
    CA_ZIP                    CHAR(10)                      ,
    CA_COUNTRY                VARCHAR(20)                   ,
    CA_GMT_OFFSET             DECIMAL(5,2)                  ,
    CA_LOCATION_TYPE          CHAR(20)
)
TABLESPACE example1
PARTITION BY RANGE(CA_ADDRESS_SK)
( 
   PARTITION p1 VALUES LESS THAN (3000),
   PARTITION p2 VALUES LESS THAN (5000) TABLESPACE example1,
   PARTITION p3 VALUES LESS THAN (MAXVALUE) TABLESPACE example2
)
ENABLE ROW MOVEMENT;
-- Create the partitioned table index ds_customer_address_p1_index1 without specifying the index partition name.
openGauss=# CREATE INDEX ds_customer_address_p1_index1 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL; 
-- Create the partitioned table index ds_customer_address_p1_index2 with the name of the index partition specified.
openGauss=# CREATE INDEX ds_customer_address_p1_index2 ON tpcds.customer_address_p1(CA_ADDRESS_SK) LOCAL
(
    PARTITION CA_ADDRESS_SK_index1,
    PARTITION CA_ADDRESS_SK_index2 TABLESPACE example3,
    PARTITION CA_ADDRESS_SK_index3 TABLESPACE example4
) 
TABLESPACE example2;

-- Create a GLOBAL partitioned index.
openGauss=CREATE INDEX ds_customer_address_p1_index3 ON tpcds.customer_address_p1(CA_ADDRESS_ID) GLOBAL;

-- If no keyword is specified, a GLOBAL partitioned index is created by default.
openGauss=CREATE INDEX ds_customer_address_p1_index4 ON tpcds.customer_address_p1(CA_ADDRESS_ID);

-- Change the tablespace of the partitioned table index CA_ADDRESS_SK_index2 to example1.
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index2 TABLESPACE example1;

-- Change the tablespace of the partitioned table index CA_ADDRESS_SK_index3 to example2.
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 MOVE PARTITION CA_ADDRESS_SK_index3 TABLESPACE example2;

-- Rename a partitioned table index.
openGauss=# ALTER INDEX tpcds.ds_customer_address_p1_index2 RENAME PARTITION CA_ADDRESS_SK_index1 TO CA_ADDRESS_SK_index4;

-- Delete the created indexes and the partitioned table.
openGauss=# DROP INDEX tpcds.ds_customer_address_p1_index1;
openGauss=# DROP INDEX tpcds.ds_customer_address_p1_index2;
openGauss=# DROP TABLE tpcds.customer_address_p1;
-- Delete the tablespace.
openGauss=# DROP TABLESPACE example1;
openGauss=# DROP TABLESPACE example2;
openGauss=# DROP TABLESPACE example3;
openGauss=# DROP TABLESPACE example4;

-- Create a column-store table and its GIN index:
openGauss=# create table cgin_create_test(a int, b text) with (orientation = column);
CREATE TABLE
openGauss=# create index cgin_test on cgin_create_test using gin(to_tsvector('ngram', b));
CREATE INDEX
```

## Helpful Links<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_sa839a210de6a48efa3945de3e1d661fc"></a>

[ALTER INDEX](alter-index.md)  and  [DROP INDEX](drop-index.md)

## Suggestions<a name="en-us_topic_0283136578_en-us_topic_0237122106_en-us_topic_0059777455_section3814797010859"></a>

-   create index

    You are advised to create indexes on:

    -   Columns that are often queried
    -   Join conditions. For a query on joined columns, you are advised to create a composite index on the columns, For example, for  **select \* from t1 join t2 on t1.a=t2.a and t1.b=t2.b**, you can create a composite index on columns  **a**  and  **b**  in table  **t1**.
    -   Columns having filter criteria \(especially scope criteria\) of a  **where**  clause
    -   Columns that appear after  **order by**,  **group by**, and  **distinct**

    Constraints:

    -   Partial indexes cannot be created in a partitioned table.

    -   When a GLOBAL index is created on a partitioned table, the following constraints apply:
        -   Expression indexes and partial indexes are not supported.
        -   Row-store tables are not supported.
        -   Only B-tree indexes are supported.

    -   In the same attribute column, the LOCAL index and GLOBAL index of a partition cannot coexist.
    -   GLOBAL index supports a maximum of 31 columns.
    -   If the  **ALTER**  statement does not contain  **UPDATE GLOBAL INDEX**, the original GLOBAL index is invalid. In this case, other indexes are used for query. If the ALTER statement contains UPDATE GLOBAL INDEX, the original GLOBAL index is still valid and the index function is correct.
