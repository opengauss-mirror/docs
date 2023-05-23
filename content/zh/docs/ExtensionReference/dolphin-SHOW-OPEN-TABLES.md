# SHOW OPEN TABLES 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

列出所有table缓存中打开的表。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  b数据库的show open tables结果中Database字段是库名，openGauss中是表所在的模式名。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW OPEN TABLES
    [{FROM | IN} schema_name]
    [LIKE 'pattern' | WHERE expr]
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[{FROM | IN} schema_name]**

       两者是等价的。

- **[LIKE 'pattern' | WHERE expr]**

       pattern支持like语法，可以是schema_name的全称或者一部分，用于模糊查询；expr支持任意表达式，通常的用法是：
       show open tables where Database = 'schema_name'; 
       show open tables where "Table" = 'table_name';

## 字段说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **Database**

       表所在的模式名。

- **Table**

       表名。

- **In_use**

       表的锁或锁请求数。例如，如果一个客户端使用LOCK TABLE t1 WRITE获取 表锁，则In_use将为1。如果另一个客户端该表保持锁定状态时发出LOCK TABLE t1 WRITE，则客户端将进入锁等待，此时In_use为2。如果计数为零，则表已打开但当前未使用。

- **Name_locked**

       表是否被ACCESS EXCLUSIVE锁定。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
testdb_m=# show open tables;
  Database  |         Table         | In_use | Name_locked 
------------+-----------------------+--------+-------------
 pg_catalog | pg_type               |      0 |           0
 pg_catalog | pg_statistic          |      0 |           0
 pg_catalog | pg_settings           |      0 |           0
 pg_catalog | pg_subscription       |      0 |           0
 pg_catalog | pg_attribute          |      0 |           0
 pg_catalog | pg_proc               |      0 |           0
 pg_catalog | pg_class              |      0 |           0
 pg_catalog | gs_package            |      0 |           0
 pg_catalog | pg_authid             |      0 |           0
 pg_catalog | pg_index              |      0 |           0
 pg_catalog | pg_operator           |      0 |           0
 pg_catalog | pg_opclass            |      0 |           0
 pg_catalog | pg_amop               |      0 |           0
 pg_catalog | pg_amproc             |      0 |           0
 pg_catalog | pg_rewrite            |      0 |           0
 pg_catalog | pg_cast               |      0 |           0
 pg_catalog | pg_namespace          |      0 |           0
 pg_catalog | pg_database           |      0 |           0
 pg_catalog | pg_db_role_setting    |      0 |           0
 pg_catalog | pg_tablespace         |      0 |           0
 pg_catalog | pg_auth_members       |      0 |           0
 pg_catalog | pg_extension          |      0 |           0
 pg_catalog | pgxc_node             |      0 |           0
 pg_catalog | pgxc_group            |      0 |           0
 pg_catalog | pg_resource_pool      |      0 |           0
 pg_catalog | pg_default_acl        |      0 |           0
 pg_catalog | gs_client_global_keys |      0 |           0
 pg_catalog | pg_job                |      0 |           0
 pg_catalog | pg_synonym            |      0 |           0
 pg_catalog | gs_txn_snapshot       |      0 |           0
 pg_catalog | gs_sql_patch          |      0 |           0
 pg_catalog | pg_user_status        |      0 |           0
 pg_catalog | pg_auth_history       |      0 |           0
(33 rows)

testdb_m=# show open tables in show_open_tables_scm;
       Database       |          Table          | In_use | Name_locked 
----------------------+-------------------------+--------+-------------
 show_open_tables_scm | show_open_tables_test_1 |      0 |           0
 show_open_tables_scm | show_open_tables_test_2 |      0 |           0
(2 rows)

testdb_m=# show open tables like 'show%';
       Database       |          Table          | In_use | Name_locked 
----------------------+-------------------------+--------+-------------
 show_open_tables_scm | show_open_tables_test_1 |      0 |           0
 show_open_tables_scm | show_open_tables_test_2 |      0 |           0
(2 rows)

testdb_m=# show open tables where "Table" = 'show_open_tables_test_1';
       Database       |          Table          | In_use | Name_locked 
----------------------+-------------------------+--------+-------------
 show_open_tables_scm | show_open_tables_test_1 |      0 |           0
(1 row)

testdb_m=# show open tables where Database = 'show_open_tables_scm';
       Database       |          Table          | In_use | Name_locked 
----------------------+-------------------------+--------+-------------
 show_open_tables_scm | show_open_tables_test_1 |      0 |           0
 show_open_tables_scm | show_open_tables_test_2 |      0 |           0
(2 rows)

testdb_m=# lock tables show_open_tables_test_1 read;
LOCK TABLE
testdb_m=# show open tables where In_use > 0;
       Database       |          Table          | In_use | Name_locked 
----------------------+-------------------------+--------+-------------
 show_open_tables_scm | show_open_tables_test_1 |      1 |           0
(1 row)

testdb_m=# unlock tables;
COMMIT
```
