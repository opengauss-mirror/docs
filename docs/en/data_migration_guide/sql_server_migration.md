---
description: This document describes SQL Server Full Migration in openGauss, covering topics such as oG_datasync_full_migration Tool Introduction, Notes.
keywords: [openGauss, SQL Server Full Migration, data migration, oG_datasync_full_migration Tool Introduction, Notes]
---

# SQL Server Full Migration

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-16T08:10:09.553Z -->

## oG_datasync_full_migration Tool Introduction

oG_datasync_full_migration is an offline migration tool written in Java for migrating from SQL Server to openGauss. It provides replication of full data and objects. Full data replication uses multi-table parallel replication, and full object replication supports tables, constraints, indexes, foreign keys, views, functions, triggers, stored procedures, and sequences.

## Notes

### General Restrictions

- The tool supports SQL Server 2016+ and openGauss 7.0.0+.

- When creating the openGauss migration database, the encoding format must be specified to be consistent with that of SQL Server.

- Columnstore indexes, full-text indexes, XML indexes, included column indexes, and index fill factors are not yet supported for migration.

- The default precision of time, datetime2, and datetimeoffset in SQL Server is 7, while openGauss only supports 0–6. Whether to accept precision loss is controlled via the isTimeMigrate parameter in the configuration file.

- The money and smallmoney data types in SQL Server are accurate to one ten-thousandth of the monetary unit they represent, while the money type in openGauss is accurate to one hundredth of the monetary unit it represents. This parameter controls whether to migrate monetary types.

- Migration of table and column comments is not yet supported.

- Geometric types (geometry and geography) are not yet supported for migration.

- The real type (4 bytes) in SQL Server has a precision of approximately 7 decimal digits, and the float type (8 bytes) has approximately 15 to 16 decimal digits, whereas openGauss supports 6 and 15 digits respectively. There may be slight differences before and after the migration.

- Since SQL Server partitioned tables are all implemented based on Range partitioning at the underlying level, they are currently migrated to openGauss as Range type only.

- Views, functions, triggers, and stored procedures currently only support the migration process; successful migration also requires syntax compatibility.

### Object Migration Restrictions

- As kernel compatibility is continuously being enhanced, object migration follows the principle of pass-through first and then translation. Specifically, object creation statements are first passed through directly and executed on the openGauss side. If execution fails, the open-source third-party component druid is then used for translation.

## Usage Guide

### Installation Method

Download address of the installation package: <https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/full-oG_datasync_full_migration-7.0.0rc2.tar.gz>
7.0.0rc2 here indicates the current version number.
After the download is complete, decompress the archive.

```
tar -zxvf oG_datasync_full_migration-7.0.0rc2.tar.gz
```

The decompressed oG_datasync_full_migration folder contains a config folder and a JAR package. The config folder stores configuration file templates.

### Configuration File Description

The configuration file follows YAML rules. Special attention must be paid to alignment, as indentation indicates hierarchical relationships. The Tab key is not allowed for indentation; only spaces can be used. The number of spaces for indentation is not critical, but elements at the same level must be left-aligned.

```
# Global settings
# Whether to log progress
isDumpJson: true
# Whether to delete CSV files after successful migration
isDeleteCsv: true
# Whether to retain the original schema
isKeepExistingSchema: false
# Target database configuration
ogConn:
host: "192.168.0.2"
port: 5432
user: "username"
password: "password"
database: "database"
charset: "utf8"
params:
sourceConfig:
# Number of threads for querying tables
readerNum: 4
# Number of threads for writing tables
writerNum: 4
# Full data file size splitting configuration, supports K, M, G size units; if no unit is specified, defaults to M. Default value is 2M
fileSize: 2M
# Source database connection information
dbConn:
host: "192.168.0.1"
port: "1433"
user: "username"
password: "password"
database: "database"
charset: 'utf8'
connectTimeout: 10
# Schema mapping relationships
schemaMappings:
test: ogtest
# Table whitelist for replication; if not configured, all tables are replicated
limitTables:
- test.Students
# Table blacklist for replication
skipTables:
# Add WITH (SEGMENT=ON) option when creating tables on the target side; when migrating from openGauss to openGauss, if the source table has WITH (SEGMENT=ON), it will be added by default during migration
addSegmentTables:
csvDir: /**/**
# For SQL Server, the precision of time, datetime2, and datetimeoffset types ranges from 0 to 7, while the corresponding types in openGauss have a precision range of 0 to 6, which may result in precision loss. This parameter controls whether to migrate these three types
isTimeMigrate: true
# In SQL Server, the money and smallmoney data types are precise to one-ten-thousandth of the currency unit they represent, whereas the openGauss money type is precise to one-hundredth of the currency unit. This parameter controls whether to migrate monetary types
isMoneyMigrate: true
# Whether to migrate default values from the source database to openGauss
isMigrateDefaultValue: Yes
# Whether to record snapshots
isRecordSnapshot: No
```

### Migration Commands

- Migrate tables

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start table --source sqlserver --config /**/**/config.yml`

- Migrate primary keys

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start primarykey --source sqlserver --config /**/**/config.yml`

- Migrate foreign keys

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start foreignkey --source sqlserver --config /**/**/config.yml`

- Migrate indexes

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start index --source sqlserver --config /**/**/config.yml`

- Migrate views

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start view --source sqlserver --config /**/**/config.yml`

- Migrate functions

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start function --source sqlserver --config /**/**/config.yml`

- Migrate triggers

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start trigger --source sqlserver --config /**/**/config.yml`

- Migrate stored procedures

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start procedure --source sqlserver --config /**/**/config.yml`

- Migrate sequences

  `java -jar oG_datasync_full_migration-7.0.0rc2.jar --start sequence --source sqlserver --config /**/**/config.yml`

## Default Type Conversion Rules

### Column Type Conversion

| SQL Server       | openGauss                      | Remarks                                                                    |
|:-----------------|:-------------------------------|:----------------------------------------------------------------------|
| tinyint          | tinyint                        | Compatible                                                                    |
| smallint         | smallint                       | Compatible                                                                    |
| int              | int                            | Compatible                                                                    |
| bigint           | bigint                         | Compatible                                                                    |
| bit              | boolean                        | Compatible                                                                    |
| decimal          | decimal                        | Compatible                                                                    |
| numeric          | numeric                        | Compatible                                                                    |
| money            | money                          | Compatible                                                                    |
| smallmoney       | money                          | Compatible                                                                    |
| float            | float                          | Compatible. float(24) is migrated as the real type.                                                |
| real             | real                           | Compatible, equivalent to float(24).                                                       |
| double precision | float                          | Compatible, equivalent to float(53).                                                       |
| char             | char                           | Compatible                                                                    |
| varchar          | varchar                        | Compatible                                                                    |
| nchar            | nchar                          | Compatible                                                                    |
| nvarchar         | nvarchar                       | Compatible                                                                    |
| ntext            | text                           | Compatible                                                                    |
| binary           | bytea                          | Compatible. If no length is specified, the default maximum size is 1 GB - 8,203 bytes.                                            |
| varbinary        | bytea                          | Compatible. If no length is specified, the default maximum size is 1 GB - 8,203 bytes.                                           |
| image            | text                           | The longtext type is not yet supported; subsequent compatibility adaptation is planned. Out-of-range text will cause an error.                                      |
| text             | text                           | The longtext type is not yet supported; subsequent compatibility adaptation is planned. Out-of-range text will cause an error.                                      |
| date             | date                           | Compatible                                                                    |
| datetime         | timestamp                      | Compatible                                                                    |
| smalldatetime    | timestamp                      | Compatible                                                                    |
| time             | time[(p)][without time zone]   | SQL Server precision ranges from 0 to 7, with a default of 7. openGauss only supports 0 to 6. Whether to accept the precision loss is controlled by the isTimeMigrate parameter in the configuration file.  |
| datetime2        | timestamp                      | SQL Server precision ranges from 0 to 7, with a default of 7. openGauss only supports 0 to 6. Whether to accept the precision loss is controlled by the isTimeMigrate parameter in the configuration file.  |
| datetimeoffset   | timestamp[(p)][with time zone] | SQL Server precision ranges from 0 to 7, with a default of 7. openGauss only supports 0 to 6. Whether to accept the precision loss is controlled by the isTimeMigrate parameter in the configuration file.  |
| hierarchyid      | nvarchar(4000)                 | Incompatible                                                                   |
| json             | jsonb                          | The underlying type of the SQL Server json type is nvarchar.                                           |
| rowversion       | timestamp                      | This type is queried as timestamp via JDBC.                                                   |
| sql_variant      |                                | Not yet supported; subsequent compatibility adaptation is planned.                                                          |
| uniqueidentifier | uuid                           | Compatible                                                                    |
| xml              | xml                            | Compatible                                                                    |

### Index Type Conversion

| SQL Server          | openGauss    | Remarks             |
|:--------------------|:-------------|:---------------|
| Clustered Index     | B-tree Index | Compatibility support pending.         |
| Non-Clustered Index | B-tree Index | Compatibility support pending.         |
| Unique Index        | Unique Index | Compatibility support pending.         |
| Full-Text Index     |              | Incompatible            |
| Spatial Index       | Gist Index   | Compatible             |
| XML Index           |              | Incompatible            |
| Filtered Index      | Index including columns | Only supported for Ustore type databases |
