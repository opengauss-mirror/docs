# Logical Replication Support for DDL Operations

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:32.176Z -->

## Feature Description

openGauss supports the following DDL operations during logical replication:

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

## Precautions

- Only DDL operations on row-store tables are supported.

- For TYPE, only composite types and enumerated types are supported.

- Column-store tables and the Ustore storage engine are not supported.

- Manually dropping a table on the subscriber side will cause DDL synchronization to fail and block the publication-subscription relationship.

- Calling VOLATILE functions during table-structure-related operations is not supported.

    >When adding a column with a default value that invokes a VOLATILE function, and that function performs a CREATE TABLE DDL operation internally, the VOLATILE function writes additional DDL logs while computing the default value for the new column. This leads to duplicate operations when the decoder subsequently reads those DDL logs.

- The following restrictions apply when using ALTER TABLE in logical replication:

    - When ALTER TABLE modifies a column type and uses the USING clause to set the column value, the table must have a replication identity, and the column modified by the USING clause must not be the identity column.

    - When ALTER TABLE modifies or adds a column as an AUTO_INCREMENT column, the table must have a replication identity, and the column modified by the USING clause must not be the identity column.

    - When ALTER TABLE adds a new column whose type is not a built-in type (that is, the default value must be recomputed per tuple), the table must have a replication identity set.

## Syntax

```sql
CREATE PUBLICATION pub_name FOR ALL TABLES with(publish='insert,update,delete,truncate',ddl='table');
```

## Parameter Description

- **pub_name**

    Name of the publication to be created.

- **ddl='table'**

    `ddl='table'` is a syntax extension indicating that TABLE-related DDL syntax is supported. To enable other DDL syntaxes, set d`dl='all'`. When `ddl='all'` is set, only the `FOR ALL TABLES` option is allowed.

## Examples

**Prerequisites:** Set up the logical replication environment.

1. Modify the configuration file `$PGDATA/postgresql.conf` (required on both the publisher and the subscriber).

```sql
wal_level=logical
```

2. Add the following configuration to `$PGDATA/pg_hba.conf` (if using an IPv6 address, replace `0.0.0.0/0` with `::/0`; required on both the publisher and the subscriber).

```sql
host replication all 0.0.0.0/0 md5
```

3. Create the database `dzy_soudb` on the publisher.

```sql
CREATE DATABASE dzy_soudb;
\c dzy_soudb
```

4. Perform encryption operations on the subscriber.

```sql
gs_guc generate Aa123456 -D $GAUSSHOME/bin -o subscription
```

5. Create database `dzy_desdb` on the subscriber.

```sql
CREATE DATABASE dzy_desdb;
\c dzy_desdb
```

**Usage example:** Perform an `alter table` operation on a table created before the publication.

1. Create a test table (on both the publisher and the subscriber).

```sql
CREATE TABLE logical_tb1_name(col1 boolean[],col2 boolean);
```

2. Create publication pub1 on the primary.

```sql
CREATE PUBLICATION pub1 FOR ALL TABLES with(publish='insert,update,delete,truncate',ddl='all');
```

3. Query the system catalog PG_PUBLICATION.

```sql
SELECT * FROM pg_publication;
```

Result:

```sql
 pubname | pubowner | puballtables | pubinsert | pubupdate | pubdelete | pubtruncate | pubddl
---------+----------+--------------+-----------+-----------+-----------+-------------+--------
 pub1    |       10 | t            | t         | t         | t         | t           |     -1
(1 row)
```

4. Create a subscription on the standby (ensure that the publisher is created first).

The port specified when creating the subscription should be the primary port plus 1. Adjust the connection information accordingly.

```sql
CREATE SUBSCRIPTION sub1 CONNECTION 'host=xxx.xx.xxx.xxx port=xxxx user=vbadmin dbname=dzy_soudb password=xxxxxx' PUBLICATION pub1;
```

5. Query the system catalog PG_SUBSCRIPTION.

```sql
SELECT * FROM pg_subscription;
```

Result:

```sql
 subdbid | subname | subowner | subenabled |                                                                   subconninfo
                                                     | subslotname | subsynccommit | subpublications | subbinary | submatchddlowner
---------+---------+----------+------------+---------------------------------------------------------------------------------------------
-----------------------------------------------------+-------------+---------------+-----------------+-----------+------------------
   18797 | sub1    |       10 | t          | host=xxx.xx.xxx.xxx port=xxxx user=vbadmin dbname=dzy_soudb password=xxxxxx
v0xiJw2EC+kcKn+Ei+hgvT2psOYfbzje8ptkXS/GkzStq9v3uFz  | sub1        | off           | {pub1}          | f         | t
(1 row)
```

6. Refresh the subscription on the subscriber.

```sql
ALTER SUBSCRIPTION sub1 REFRESH PUBLICATION;  
```

7. Insert data on the publisher.

```sql
insert into logical_tb1_中文名 values ('{true,true,true}',false),('{true,false,true}',false),('{true,true,true}',true),('{false,true,true}',false),('{false,true,true}',true);
```

8. Execute `ALTER TABLE` to drop a column on the publisher.

```sql
ALTER TABLE logical_tb1_中文名 drop COLUMN col2;
```

9. Query the result on the subscriber.

```sql
select * from logical_tb1_name;
```

Result:

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