# Global SysCache特性函数<a name="ZH-CN_TOPIC_0000001242498033"></a>

-   gs\_gsc\_table\_detail\(database\_id default NULL, rel\_id default NULL\)

    描述：查看数据库里全局系统缓存的表元数据。调用该函数的用户需要具有SYSADMIN权限。

    参数：指定需要查看全局系统缓存的数据库和表，database\_id默认值NULL或者-1表示所有的数据库，0表示共享表，其他数字表示指定数据库及共享表，rel\_id表示指定表的oid，默认值NULL或者-1表示所有的表，其他值表示指定的表，database_id不存在会报错，rel_id不存在结果为空。

    返回值类型：Tuple

    示例:

    ```
    select * from gs_gsc_table_detail(-1) limit 1;
    database_oid | database_name | reloid |         relname         | relnamespace | reltype | reloftype | relowner | relam | relfilenode | reltablespace | relhasindex | relisshared | relkind | relnatts | relhasoids | relhaspkey | parttype | tdhasuids | attnames  | extinfo
    --------------+---------------+--------+-------------------------+--------------+---------+-----------+----------+-------+-------------+---------------+-------------+-------------+---------+----------+------------+------------+----------+-----------+-----------+---------
    0 |               |   2676 | pg_authid_rolname_index |           11 |       0 |         0 |       10 |   403 |           0 |          1664 | f           | t           | i       |        1 | f          | f          | n        | f         | 'rolname' |
    (1 row)
    ```


-   gs\_gsc\_catalog\_detail\(database\_id default NULL, rel\_id default NULL\)

    描述：查看数据库里全局系统缓存的系统表行信息。调用该函数的用户需要具有SYSADMIN权限。

    参数：指定需要查看全局系统缓存的数据库和表，database\_id 默认值NULL或者-1表示所有的数据库，0表示共享表，其他数字表示指定数据库及共享表， rel\_id表示指定表的id，仅包含所有有系统缓存的系统表，默认值NULL或者-1表示所有的表，database_id不存在会报错，rel_id不存在结果为空。

    返回值类型：Tuple

    示例：

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


-   gs\_gsc\_clean\(database\_id default NULL\)

    描述：清理global syscache的缓存，需要注意，正在使用中的数据不会被清理。调用该函数的用户需要具有SYSADMIN权限。

    参数：指定需要清理全局系统缓存的数据库，默认值NULL或者-1表示清理所有的数据库全局系统缓存，0表示只淘汰共享表的全局系统缓存，其他数字表示淘汰清理指定数据库以及共享表的全局系统缓存，database_id不存在会报错。

    返回值类型：bool

    示例：

    ```
    openGauss=# select * from gs_gsc_clean();
    gs_gsc_clean
    --------------
    t
    (1 row)
    ```


-   gs\_gsc\_dbstat\_info\(database\_id default NULL\)

    描述：获取本地节点的GSC的内存统计信息，包括tuple、relation、partition的缓存查询，命中，加载、失效、占用空间信息，DB级别的淘汰信息，线程引用信息，内存占用信息。可以用于定位性能问题，例如当发现hits/searches数组远小于1时，可能是global\_syscache\_threshold设置太小，导致查询命中率下降。调用该函数的用户需要具有SYSADMIN权限。

    参数：指定需要查看的数据库全局系统缓存统计信息，NULL或者-1表示查看所有的数据库，0表示只查看共享表信息，其他数字表示查看指定的数据库和共享表的信息。不合法的输入值，databse_id不存在会报错。

    返回值类型：Tuple

    示例：

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


