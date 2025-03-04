# 逻辑复制支持DDL操作

## 功能描述

openGauss在逻辑复制过程中支持如下DDL操作：

- CREATE/DROP/ALTER/TRUNCATE/RENAME TABLE | TABLE PARTITION | TABLE SUBPARTITION
- CREATE/ALTER/DROP INDEX
- CREATE/ALTER/DROP VIEW
- CREATE/ALTER/DROP [INCREMENTAL] MATERIALIZED VIEW
- CREATE/ALTER/DROP TYPE
- CREATE/ALTER/DROP FUNCTION
- CREATE/ALTER/DROP TRIGGER
- CREATE/DROP SCHEMA
- CREATE/DROP SEQUENCE
- COMMENT


## 注意事项

- 只支持行存表的DDL操作。
- TYPE仅支持复合类型和枚举类型。
- 不支持列存，Ustore存储引擎。
- 在订阅端手动删除表会导致DDL同步失败，发布订阅阻塞。
- 不支持在对表进行相关的表结构操作中调用VOLATILE函数。

    >在为表增加一个字段并指定默认值中执行了VOLATILE函数，而这个函数中进行了创建表的DDL操作，这样在新增字段并为其计算默认值的过程中会因为调用VOLATILE函数写入其他DDL日志，导致后续在解码时读取到这个DDL日志时进行了重复的操作。

- 在逻辑复制中使用ALTER TABLE时会有如下限制：
    - 当ALTER TABLE修改表字段类型，使用USING子句设置字段值时，要求表上必须有replication identity字段，并且USING子句修改的表字段不为该标识符字段。
    - 当ALTER TABLE修改或新增表字段为AUTO_INCREMENT自增列时，要求表上必须有replication identity字段，并且USING子句修改的表字段不为该标识符字段。
    - 当ALTER TABLE新增表字段，并且表字段类型不为内置类型，即需要每个元组都重新计算其默认值，要求表上必须设置replication identity。

## 语法格式

```sql
CREATE PUBLICATION pub_name FOR ALL TABLES with(publish='insert,update,delete,truncate',ddl='table');
```


## 参数说明

- **pub_name**

    创建的发布名称。

- **ddl='table'**

    `ddl='table'`为语法扩充，表示支持TABLE相关的DDL语法。如果需要其他DDL语法，则设置`ddl='all'`。在设置`ddl='all'`时，只允许`FOR ALL TABLES`选项。


## 示例

**前置步骤：** 搭建逻辑复制环境。

1、修改配置文件`$PGDATA/postgresql.conf`（发布端和订阅端都要修改）。

```sql
wal_level=logical
```

2、在`$PGDATA/pg_hba.conf`配置文件中添加如下配置参数（发布端和订阅端都要修改）。

```sql
host replication all 0.0.0.0/0 md5
```


3、在发布端创建数据库dzy_soudb。

```sql
CREATE DATABASE dzy_soudb;
\c dzy_soudb
```

4、在订阅端执行加密操作。

```sql
gs_guc generate -S Aa123456 -D $GAUSSHOME/bin -o subscription
```

5、在订阅端创建数据库dzy_desdb。

```sql
CREATE DATABASE dzy_desdb;
\c dzy_desdb
```

**功能使用示例：** 对创建发布之前的表进行`alter table`操作。

1、创建测试表（发布端和订阅端都要创建）。

```sql
CREATE TABLE logical_tb1_中文名(col1 boolean[],col2 boolean);
```

2、在主库创建发布pub1。

```sql
CREATE PUBLICATION pub1 FOR ALL TABLES with(publish='insert,update,delete,truncate',ddl='all');
```

3、查询系统表PG_PUBLICATION。

```sql
SELECT * FROM pg_publication;
```

返回结果为：

```sql
 pubname | pubowner | puballtables | pubinsert | pubupdate | pubdelete | pubtruncate | pubddl
---------+----------+--------------+-----------+-----------+-----------+-------------+--------
 pub1    |       10 | t            | t         | t         | t         | t           |     -1
(1 row)
```

4、在从库创建订阅(一定要保证先创建发布端)。

创建订阅时指定的端口应为主库端口+1。用户应该对连接信息做相应修改。

```sql
CREATE SUBSCRIPTION sub1 CONNECTION 'host=xxx.xx.xxx.xxx port=xxxx user=vbadmin dbname=dzy_soudb password=xxxxxx' PUBLICATION pub1;
```

5、查询系统表PG_SUBSCRIPTION。

```sql
SELECT * FROM pg_subscription;
```

返回结果为：

```sql
 subdbid | subname | subowner | subenabled |                                                                   subconninfo
                                                     | subslotname | subsynccommit | subpublications | subbinary | submatchddlowner
---------+---------+----------+------------+---------------------------------------------------------------------------------------------
-----------------------------------------------------+-------------+---------------+-----------------+-----------+------------------
   18797 | sub1    |       10 | t          | host=xxx.xx.xxx.xxx port=xxxx user=vbadmin dbname=dzy_soudb password=encryptOpt+BKUB13sXBzye
v0xiJw2EC+kcKn+Ei+hgvT2psOYfbzje8ptkXS/GkzStq9v3uFz  | sub1        | off           | {pub1}          | f         | t
(1 row)
```

6、在订阅端刷新订阅。

```sql
ALTER SUBSCRIPTION sub1 REFRESH PUBLICATION;  
```

7、在发布端进行数据插入。

```sql
insert into logical_tb1_中文名 values ('{true,true,true}',false),('{true,false,true}',false),('{true,true,true}',true),('{false,true,true}',false),('{false,true,true}',true);
```

8、在发布端执行`ALTER TABLE`删除列操作。

```sql
ALTER TABLE logical_tb1_中文名 drop COLUMN col2;
```

9、订阅端查询结果。

```sql
select * from logical_tb1_中文名;
```

返回结果为：

```sql
  col1
---------
 {t,t,t}
 {t,f,t}
 {t,t,t}
 {f,t,t}
 {f,t,t}
(5 rows)
```

