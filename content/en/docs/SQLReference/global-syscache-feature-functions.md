# Global SysCache Feature Functions<a name="EN-US_TOPIC_0000001242498033"></a>

-   gs\_gsc\_table\_detail\(database\_id dafault NULL, rel\_id default NULL\)

    Description: Queries global system cache table metadata in a database. The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter: Specifies the database and table whose global system cache is to be queried. The default value of  **database\_id**  is  **NULL**  or  **–1**, indicating all databases. The value  **0**  indicates a shared table. Other values indicate the specified database and shared table.  **rel\_id**  indicates the OID of the specified table. The default value  **NULL**  or  **–1**  indicates all tables. Other values indicate the specified table. If **database_id** does not exist, an error is reported. If **rel_id** does not exist, the result is empty.

    Return type: Tuple

    Example:

    ```
    select * from gs_gsc_table_detail(-1) limit 1;
    database_oid | database_name | reloid |         relname         | relnamespace | reltype | reloftype | relowner | relam | relfilenode | reltablespace | relhasindex | relisshared | relkind | relnatts | relhasoids | relhaspkey | parttype | tdhasuids | attnames  | extinfo
    --------------+---------------+--------+-------------------------+--------------+---------+-----------+----------+-------+-------------+---------------+-------------+-------------+---------+----------+------------+------------+----------+-----------+-----------+---------
    0 |               |   2676 | pg_authid_rolname_index |           11 |       0 |         0 |       10 |   403 |           0 |          1664 | f           | t           | i       |        1 | f          | f          | n        | f         | 'rolname' |
    (1 row)
    ```


-   gs\_gsc\_catalog\_detail\(database\_id dafault NULL, rel\_id default NULL\)

    Description: Queries the system table row information cached in the global system in a database. The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter: Specifies the database and table whose global system cache is to be queried. The default value of  **database\_id**  is  **NULL**  or  **–1**, indicating all databases. The value  **0**  indicates a shared table. Other values indicate the specified database and shared table.  **rel\_id**  indicates the ID of the specified table, including all system tables that have system caches, the default value  **NULL**  or  **–1**  indicates all tables. Other values indicate the specified table. If **database_id** does not exist, an error is reported. If **rel_id** does not exist, the result is empty.
    Return type: Tuple

    Example:

    ```
    openGauss=# 
    select * from gs_gsc_catalog_detail(16574, 1260);
     database_id | database_name | rel_id | rel_name  | cache_id |  self  |  ctid  | infomask | infomask2 | hash_value | refcount
    -------------+---------------+--------+-----------+----------+--------+--------+----------+-----------+------------+----------
               0 |               |   1260 | pg_authid |       10 | (0, 9) | (0, 9) |    10507 |        26 |  531311568 |       10
               0 |               |   1260 | pg_authid |       11 | (0, 4) | (0, 4) |     2313 |        26 |  365368336 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 9) | (0, 9) |    10507 |        26 | 3911517328 |       10
               0 |               |   1260 | pg_authid |       11 | (0, 7) | (0, 7) |     2313 |        26 | 1317799983 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 5) | (0, 5) |     2313 |        26 | 3664347448 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 1) | (0, 1) |     2313 |        26 |  276477273 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 3) | (0, 3) |     2313 |        26 | 2465837659 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 8) | (0, 8) |     2313 |        26 | 3205288035 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 6) | (0, 6) |     2313 |        26 |  131811687 |        1
               0 |               |   1260 | pg_authid |       11 | (0, 2) | (0, 2) |     2313 |        26 | 1226484587 |        1
    (10 rows)
    ```


-   gs\_gsc\_clean\(database\_id dafault NULL\)

    Description: Clears the global syscache cache. Note that data in use will not be cleared. The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter: Specifies the database whose global system cache needs to be cleared. The default value  **NULL**  or  **–1**  indicates that the global system cache of all databases is cleared. The value **0** indicates that only the global system cache of the shared table is cleared. Other values indicate that the global system cache of the specified database and shared table is cleared. If **database_id** does not exist, an error is reported.

    Return type: Boolean

    Example:

    ```
    openGauss=# select * from gs_gsc_clean();
    gs_gsc_clean
    --------------
    t
    (1 row)
    ```


-   gs\_gsc\_dbstat\_info\(database\_id default NULL\)

    Description: Obtains GSC memory statistics on the local node, including cache query, hit, loading, expiration, and occupied space information of tuples, relationships, and partitions, database-level elimination information, thread reference information, and memory usage information. This parameter can be used to locate performance problems. For example, if the value of the hits/searches array is far less than 1, the value of  **global\_syscache\_threshold**  may be too small. As a result, the query hit ratio decreases. The user who calls this function must have the  **SYSADMIN**  permission.

    Parameter: Specifies the global system cache statistics of the database to be queried.  **NULL**  or  **–1**  indicates that all databases are queried.  **0**  indicates that only the information about the shared table is queried. Other values indicate that the information about the specified database and shared table is queried. Invalid input value. If **databse_id** does not exist, an error is reported.

    Return type: Tuple

    Example:

    ```
    openGauss=# select * from gs_gsc_dbstat_info();
    database_id | database_name | tup_searches | tup_hits | tup_miss | tup_count | tup_dead | tup_memory | rel_searches | rel_hits | rel_mis
    s | rel_count | rel_dead | rel_memory | part_searches | part_hits | part_miss | part_count | part_dead | part_memory | total_memory | swa
    pout_count | refcount
    -------------+---------------+--------------+----------+----------+-----------+----------+------------+--------------+----------+--------
    --+-----------+----------+------------+---------------+-----------+-----------+------------+-----------+-------------+--------------+----
    -----------+----------
               0 |               |          300 |      235 |       31 |        22 |        2 |       9752 |          598 |      108 |       1
    8 |        18 |        0 |      77720 |             0 |         0 |         0 |          0 |         0 |           0 |       752912 |
             0 |        0
           16574 | postgres      |         3368 |     2289 |      329 |       273 |        0 |      92593 |         1113 |      524 |       4
    8 |        48 |        0 |     340456 |             0 |         0 |         0 |          0 |         0 |           0 |      4124792 |
             0 |       10
    (2 rows)
    ```
