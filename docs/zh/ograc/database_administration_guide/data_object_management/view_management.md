# 视图管理

视图（`View`）是基于一个或多个表（或其他视图）的查询结果所构建的一个虚拟表。它不存储实际数据，而是在查询时动态执行其定义的 `SQL` 语句来返回数据。用户可以像操作普通表一样对视图进行 `SELECT` 操作，但不能直接插入、更新或删除数据。视图所承载的数据与其构建时的基表数据息息相关，若基表中的数据发生变化，从视图中查询的数据也随之改变。

用户可通过`CREATE VIEW VIEW_NAME AS`或者`CREATE OR REPLACE VIEW VIEW_NAME AS`创建视图，`AS`后跟随`SELECT`语句。

```sql
CREATE OR REPLACE VIEW USER_V1 AS SELECT ID, AGE, NAME FROM USERS WHERE AGE > 18;
```

用户可通过`DB_VIEWS`或`MY_VIEWS`以及`DESC`命令查询视图的相关信息。

```SQL
SQL> SELECT * FROM DB_VIEWS WHERE VIEW_NAME = 'USER_V1';

OWNER                                                            VIEW_NAME                                                        VIEW_TYPE COLUMN_COUNT TEXT                                                             TEXT_LENGTH  CREATED_TIME           LAST_DDL_TIME         
---------------------------------------------------------------- ---------------------------------------------------------------- --------- ------------ ---------------------------------------------------------------- ------------ ---------------------- ----------------------
SYS                                                              USER_V1                                                          NORMAL    3            SELECT ID, AGE, NAME FROM USERS WHERE AGE > 18                   46           2025-11-13 17:16:37    2025-11-13 17:16:37   

1 rows fetched.

SQL> desc USER_V1

Name                                Null?    Type                                
----------------------------------- -------- ------------------------------------
ID                                  NOT NULL BINARY_INTEGER                      
AGE                                          BINARY_INTEGER                      
NAME                                         VARCHAR(10 BYTE)                    
```

查询视图中的数据与查询表数据无差别，用户可通过`DROP VIEW`删除视图。

```sql
DROP VIEW USER_V1;
DROP VIEW IF EXISTS USER_V1;
```