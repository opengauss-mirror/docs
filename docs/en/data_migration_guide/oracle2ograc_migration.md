---
description: This document describes Migration from Oracle to oGRAC in openGauss, covering topics such as Purpose, Preparations.
keywords: [openGauss, Migration from Oracle to oGRAC, data migration, Purpose, Preparations]
---

#  Migration from Oracle to oGRAC
## Purpose

This document describes how to use openGauss-FullReplicate to migrate data from Oracle to oGRAC, including how to install the tool and use it to migrate data. This tool can migrate all data and objects from Oracle to oGRAC. During the full data migration, multiple tables are migrated concurrently. During the full object migration, tables, constraints, indexes, foreign keys, views, functions, triggers, stored procedures, and sequences can be migrated.

## Preparations
### Migration Precautions
- When creating the oGRAC destination database, you need to specify the database encoding format to be the same as that of the source database and ensure that the time zone of the source database is the same as that of the destination database.
- The Oracle version must be 19.
- Virtual columns are automatically filtered out and are not migrated to the destination.
- Reference partitioned tables (partitioned based on foreign key relationships) cannot be migrated.
- System partitioned tables (application-controlled partitioning) cannot be migrated.
- Partitioned tables based on virtual columns cannot be migrated.
- Function-based indexes support only certain function expressions.
- Data of geometry and geography types cannot be migrated.
- Currently, views, functions, triggers, and stored procedures can only be migrated. After successful migration, you need adaptation for syntax compatibility.
- Oracle materialized views cannot be migrated.

### Updating Oracle Table Statistics

To ensure the efficiency and accuracy of the migration, you are advised to perform the following operations before the migration:

1. Updating Oracle table statistics: Run the following commands to update the table statistics of the specified schema. This helps DataX generate a better execution plan.

   ```sql
   EXEC DBMS_STATS.GATHER_SCHEMA_STATS('YOUR_SCHEMA_NAME', cascade=>TRUE);
   SELECT table_name, num_rows, last_analyzed FROM user_tables;
   ```

   `YOUR_SCHEMA_NAME` indicates the name of the Oracle schema to be migrated.

2. Checking the tablespace usage: Ensure that the destination oGRAC database has sufficient tablespace for the migration.
### Description of certain temporary files generated during the migration
   During the migration, the tool records the migration progress. After the migration is complete, the tool generates multiple JSON files in the `process/` directory to record the migration progress and details of each type of object.

   File list in the `process/` directory:
   - datax_table.json - table migration progress
   - primarykey.json - primary key migration progress
   - foreignkey.json - foreign key migration progress
   - index.json - index migration progress
   - constraint.json - constraint migration progress
   - view.json - view migration progress
   - function.json - function migration progress
   - trigger.json - trigger migration progress
   - procedure.json - stored procedure migration progress
   - sequence.json - sequence migration progress
   - migration_error.log - migration error log

   The exception of the progress itself does not affect the overall migration process. In addition, the migration error log file `migration_error.log` does not distinguish object types. All object migration errors are recorded in this file.

## Installation Procedure

### Installation Environment Requirements

The tool is written in Java. Therefore, you need to install the Java runtime environment (JRE) in advance. The version must be Java 17 or later.

### Downloading the Installation Package

Download the installation package [here](https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-FullReplicate-7.0.0-RC3.tar.gz).
`7.0.0-RC3` indicates the current version number.

```bash
wget https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-FullReplicate-7.0.0-RC3.tar.gz
```

### Decompressing the installation package

After the download is complete, decompress the package.

```
tar -zxvf openGauss-FullReplicate-7.0.0-RC3.tar.gz
```

The directories after decompression are as follows:

```text
openGauss-FullReplicate/
openGauss-FullReplicate/config/
openGauss-FullReplicate/config/config.yml
openGauss-FullReplicate/build_commit_id.log
openGauss-FullReplicate/openGauss-FullReplicate-7.0.0-RC3.jar
```

`openGauss-FullReplicate-7.0.0-RC3.jar` is the main program of the tool, and the `config` folder contains the configuration file template.

## Configuration File Description
The configuration file is configured using the YAML file rules. Pay special attention to the alignment. The indentation indicates the hierarchy. Use only spaces, not the `Tab` key, for indentation. The number of spaces for indentation is not important, but the elements at the same level must be aligned on the left.
The database username is in uppercase.

```yaml
# global settings
# Whether to record the progress
isDumpJson: true
# Progress file location
statusDir: ./process
# Type of the destination database, for example, opengauss or ograc
targetType: ograc
# Destination database configuration
ogConn:
  host: "192.168.0.2"
  port: 1611
  # OGRAC username, in uppercase
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
  # Thread queue capacity
  threadQueueCapacity: 20000
  # Source database connection information
  dbConn:
    host: "192.168.0.1"
    port: "1521"
    # Oracle username, in uppercase
    user: "SCOTT"
    password: "password"
    database: "ORCL"
    charset: 'utf8'
    connectTimeout: 10
  # Schema mapping
  schemaMappings:
    SCOTT: ogtest
datax:
  dataxHome: datax
  enableKeepDataXTemporaryConfig: true
  enableOutputDataxLogs: false
```
### Parameter Details

#### Global configuration parameters

| Parameter        | Type   | Mandatory| Default Value| Description                                |
| :------------- | :------ | :--- | :----- | :----------------------------------- |
| isDumpJson   | Boolean | Yes  | -      | Whether to record the progress.                        |
| statusDir    | String  | No  | -      | Progress file location.                        |
| targetType   | String  | No  | -      | Target database type, for example, `opengauss` or `ograc`.|
| ogConn       | Object  | Yes  | -      | oGRAC database connection configuration.                 |
| sourceConfig | Object  | Yes  | -      | Source database configuration.                        |
| datax        | Object  | No  | -      | DataX configuration.                           |

#### Database connection configuration (DatabaseConfig)

| Parameter          | Type   | Mandatory| Default Value| Description              |
| :--------------- | :------ | :--- | :----- | :----------------- |
| host           | String  | Yes  | -      | Host address of the database.    |
| port           | Integer | Yes  | -      | Database port.        |
| user           | String  | Yes  | -      | Database username.      |
| password       | String  | Yes  | -      | Database password.        |
| database       | String  | Yes  | -      | Database name.        |
| charset        | String  | No  | -      | Character set.            |
| connectTimeout | Integer | No  | -      | Connection timeout interval (s).|
| params         | Object  | No  | -      | Other connection parameters.      |

#### Source database configuration (SourceConfig)

| Parameter               | Type   | Mandatory| Default Value| Description              |
| :-------------------- | :------ | :--- | :----- | :----------------- |
| readerNum           | Integer | Yes  | -      | Number of threads for querying tables.    |
| writerNum           | Integer | Yes  | -      | Number of threads for writing tables.      |
| threadQueueCapacity | Integer | No  | -      | Thread queue capacity      |
| dbConn              | Object  | Yes  | -      | Source database connection information.|
| schemaMappings      | Object  | Yes  | -      | Schema mapping.    |

#### DataX configuration (DataXParamConfig)

| Parameter                          | Type   | Mandatory| Default Value| Description                 |
| :------------------------------- | :------ | :--- | :----- | :-------------------- |
| dataxHome                      | String  | No  | -      | DataX home directory.          |
| readerName                     | String  | No  | -      | Reader name.           |
| writerName                     | String  | No  | -      | Writer name.           |
| channel                        | Integer | No  | -      | Number of channels.               |
| errorRecordLimit               | Integer | No  | -      | Error record limit.         |
| errorPercentageLimit           | Double  | No  | -      | Error percentage limit.       |
| readBatchSize                  | Integer | No  | -      | Read batch size.           |
| readTimeout                    | Integer | No  | -      | Read timeout.             |
| writeBatchSize                 | Integer | No  | -      | Write batch size.           |
| writeTimeout                   | Integer | No  | -      | Write timeout.             |
| enableBatchWrite               | Boolean | No  | -      | Whether to enable batch writing.       |
| enablePrepareStatement         | Boolean | No  | -      | Whether to enable prepared statements.   |
| batchWriteSize                 | Integer | No  | -      | Batch write size.           |
| retryTimes                     | Integer | No  | -      | Retry times.             |
| retryInterval                  | Integer | No  | -      | Retry interval.             |
| enableKeepDataXTemporaryConfig | Boolean | No  | false  | Whether to retain the temporary DataX configuration.|
| enableOutputDataxLogs          | Boolean | No  | false  | Whether to output DataX logs.    |

## Migration Commands

After the configuration file is configured, you can start the migration. The migration commands are as follows:

`--start` indicates the type of the object to be migrated, `--source` indicates the source database type, which can be `oracle`, and `--config` indicates the path of the configuration file.

Migration commands cannot be executed concurrently. (Migration commands for tables and indexes cannot be executed at the same time.)

```bash
# Migrating tables
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start datax_table --source oracle --config /**/**/config.yml

# Migrating primary keys
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start primarykey --source oracle --config /**/**/config.yml

# Migrating foreign keys
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start foreignkey --source oracle --config /**/**/config.yml

# Migrating indexes
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start index --source oracle --config /**/**/config.yml

# Migrating constraints
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start constraint --source oracle --config /**/**/config.yml

# Migrating views
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start view --source oracle --config /**/**/config.yml

# Migrating functions
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start function --source oracle --config /**/**/config.yml

# Migrating triggers
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start trigger --source oracle --config /**/**/config.yml

# Migrating stored procedures
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start procedure --source oracle --config /**/**/config.yml

# Migrating sequences
java -jar openGauss-FullReplicate-7.0.0-RC3.jar --start sequence --source oracle --config /**/**/config.yml
```

## Default Type Conversion Rules

### Column type conversion

| Oracle                            | oGRAC                             | Remarks                                                |
| :-------------------------------- | :-------------------------------- | :--------------------------------------------------- |
| Numeric types                     |                                   |                                                      |
| NUMBER                            | NUMBER                            | Precision retained.                                            |
| NUMBER                            | BIGINT                            | Auto-increment type.                                            |
| NUMBER(p)                         | NUMBER(p)                         | Precision retained.                                            |
| NUMBER(p,s)                       | NUMBER(p,s)                       | Precision and decimal places retained.                                    |
| FLOAT                             | DOUBLE PRECISION                  | Converted to DOUBLE PRECISION.                              |
| FLOAT(n)                          | DECIMAL(38, 12)                   | Converted to DECIMAL(38, 12).                               |
| BINARY_FLOAT                      | BINARY_FLOAT                      | The type names are the same.                                        |
| BINARY_DOUBLE                     | BINARY_DOUBLE                     | The type names are the same.                                        |
| DOUBLE PRECISION                  | DOUBLE PRECISION                  | The type names are the same.                                        |
| String types                   |                                   |                                                      |
| CHAR(n)                           | CHAR(n)                           | Length retained. Defaults to `BYTE`.                                |
| CHAR(n CHAR)                      | CHAR(n CHAR)                      | The original type and CHAR semantics retained.                            |
| VARCHAR2(n)                       | VARCHAR2(n BYTE)                  | Length retained. Defaults to `BYTE`.                                |
| VARCHAR2(n CHAR)                  | VARCHAR2(n CHAR)                  | CHAR semantics retained.                                        |
| NCHAR(n)                          | NCHAR(n)                          | No change.                                            |
| NVARCHAR2(n CHAR)                 | NVARCHAR2(n CHAR)                 | No change.                                            |
| CLOB                              | CLOB                              | The type names are the same.                                        |
| NCLOB                             | CLOB                              | Converted to CLOB.                                          |
| Large object types                   |                                   |                                                      |
| BLOB                              | BLOB                              | The type names are the same.                                        |
| NBLOB                             | BLOB                              | Converted to BLOB.                                          |
| RAW(n)                            | RAW(n)                            | The original type is retained, including the length information.                            |
| LONG RAW                          | BLOB                              | Converted to BLOB.                                          |
| BFILE                             |                                   | Incompatible. An exception is thrown.                                    |
| Date and time types                 |                                   |                                                      |
| DATE                              | DATETIME                          | Type conversion                                            |
| TIMESTAMP                         | TIMESTAMP                         | The type names are the same.                                        |
| TIMESTAMP(p)                      | TIMESTAMP(p)                      | If the precision is less than or equal to 6, the original type is retained.                               |
| TIMESTAMP(p)                      | TIMESTAMP(6)                      | Converted to TIMESTAMP(6) when the precision is greater than 6.                        |
| TIMESTAMP WITH TIME ZONE          | TIMESTAMP WITH TIME ZONE          | The type names are the same.                                        |
| TIMESTAMP(p) WITH TIME ZONE       | TIMESTAMP(p) WITH TIME ZONE       | If the precision is less than or equal to 6, the original type is retained.                               |
| TIMESTAMP(p) WITH TIME ZONE       | TIMESTAMP(6) WITH TIME ZONE       | Converted to TIMESTAMP(6) WITH TIME ZONE when the precision is greater than 6.         |
| TIMESTAMP WITH LOCAL TIME ZONE    | TIMESTAMP WITH LOCAL TIME ZONE    | The type names are the same.                                        |
| TIMESTAMP(p) WITH LOCAL TIME ZONE | TIMESTAMP(p) WITH LOCAL TIME ZONE | If the precision is less than or equal to 6, the original type is retained.                               |
| TIMESTAMP(p) WITH LOCAL TIME ZONE | TIMESTAMP(6) WITH LOCAL TIME ZONE | Converted to TIMESTAMP(6) WITH LOCAL TIME ZONE when the precision is greater than 6.   |
| INTERVAL YEAR TO MONTH            | INTERVAL YEAR TO MONTH            | The type names are the same.                                        |
| INTERVAL YEAR(n) TO MONTH         | INTERVAL YEAR(4) TO MONTH         | Converted to INTERVAL YEAR(4) TO MONTH when the length is greater than 4.           |
| INTERVAL DAY TO SECOND            | INTERVAL DAY TO SECOND            | The type names are the same.                                        |
| INTERVAL DAY(n) TO SECOND(m)      | INTERVAL DAY(n) TO SECOND(m)      | If the length is less than or equal to 6 and the precision is less than or equal to 6, the original type is retained.                      |
| INTERVAL DAY(n) TO SECOND(m)      | INTERVAL DAY(6) TO SECOND(6)      | Converted to INTERVAL DAY(6) TO SECOND(6) when the length or precision is greater than 6.|
| Special types                     |                                   |                                                      |
| XMLTYPE                           |                                   | Converted to CLOB.                                          |
| JSON                              |                                   | Incompatible. An exception is thrown.                                    |
| ANYDATA                           |                                   | Incompatible. An exception is thrown.                                    |

### Index type conversion

| Oracle               | oGRAC           | Remarks                          |
| :------------------- | :-------------- | :----------------------------- |
| Standard indexes        |                 |                                |
| B-tree Index         | B-tree Index    | Fully compatible                      |
| Unique Index         | Unique Index    | Fully compatible                      |
| Non-Unique Index     | B-tree Index    | Fully compatible                      |
| Special indexes        |                 |                                |
| Reverse Key Index    | B-tree Index    | Fully compatible                      |
| Function-based Index | Function Index  | Partially compatible. Only specific functions are supported.      |
| Composite Index      | Composite Index | Fully compatible. A composite index supports a maximum of 16 columns.|
| Bitmap Index         | B-tree Index    | Converted to a common index.                  |
| Unsupported indexes    |                 |                                |
| Full-Text Index      | -               | Incompatible. Oracle Text index.       |
| Domain Index         | -               | Incompatible, for example, CTXSYS.CONTEXT.      |
| Spatial Index        | Gist Index      | Not compatible                        |
| XML Index            | -               | Not compatible                        |
| Filtered Index       | Partial Index   | Not compatible                        |


#### Functions supported by function-based indexes

oGRAC function-based indexes support only the following function expressions:

| Function       | Description              | Example                                                  |
| :------------ | :----------------- | :----------------------------------------------------- |
| ABS           | Absolute value            | ABS(num_col)                                           |
| CHARTOROWID   | String to ROWID     | CHARTOROWID(rowid_str_col)                             |
| DECODE        | Condition judgment          | DECODE(int_col, 0, 'ZERO', 1, 'ONE', 'OTHER')          |
| LOWER         | Conversion to lowercase            | LOWER(char_col)                                        |
| NVL           | Null value replacement          | NVL(nullable_col, 0)                                   |
| NVL2          | Null value condition replacement      | NVL2(nullable_col, 1, 0)                               |
| REGEXP_INSTR  | Regular expression matching position| REGEXP_INSTR(text_col, 'word')                         |
| REGEXP_SUBSTR | Substring extraction using regular expression| REGEXP_SUBSTR(text_col, '[a-zA-Z]+')                   |
| REVERSE       | String reversal        | REVERSE(char_col)                                      |
| SUBSTR        | String truncation        | SUBSTR(text_col, 1, 20)                                |
| SUBSTRB       | Byte truncation          | SUBSTRB(text_col, 1, 20)                               |
| TO_CHAR       | Conversion to string          | TO_CHAR(date_col)                                      |
| TO_DATE       | Conversion to date            | TO_DATE(TO_CHAR(date_col, 'yyyy-mm-dd'), 'yyyy-mm-dd') |
| TO_NUMBER     | Conversion to number            | TO_NUMBER(TO_CHAR(num_col))                            |
| TRIM          | Space removal          | TRIM(text_col)                                         |
| TRUNC         | Number truncation          | TRUNC(num_col)                                         |
| TRUNC         | Date truncation          | TRUNC(date_col, 'yyyy')                                |
| UPPER         | Conversion to uppercase            | UPPER(char_col)                                        |

#### Functions Not Supported by Function-based Indexes

oGRAC function-based indexes do not support the following function expressions:

| Function               | Description          | Cause            |
| :-------------------- | :------------- | :--------------- |
| upper('constant')   | Conversion of constants to uppercase    | Constant expressions are not supported.|
| nvl(c_text,c_test2) | Multi-parameter null value replacement| Not supported currently        |
| upper(c_json_lob)   | JSON LOB conversion to uppercase| The LOB type is not supported.   |
| nvm(c_arr,c_arr)    | Array null value replacement  | The array type is not supported.  |

#### Primary Key Migration Description

##### Migration of common primary keys
Common primary keys (non-auto-increment primary keys) can be directly migrated to the oGRAC database, and the original data types and constraint definitions are retained.

#####  Migration of Oracle auto-increment primary keys

The rules for migrating Oracle auto-increment primary keys (IDENTITY columns) to oGRAC are as follows:

Data type conversion:
- Auto-increment columns of Oracle NUMBER type is converted to the oGRAC BIGINT type.

Conversion of the IDENTITY mode:

| Oracle Definition                                                 | oGRAC Conversion Result                                      | Description                              |
| ------------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------- |
| colName NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY    | colName BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY | The ALWAYS mode is converted to AUTO_INCREMENT.    |
| colName NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY | colName BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY | The BY DEFAULT mode is converted to AUTO_INCREMENT.|

Constraints on oGRAC auto-increment keys:
- The auto-increment columns must be of an integer type (INT/BIGINT).
- The auto-increment columns must be defined as the primary key or unique key.

Type mapping:
- oGRAC SERIAL PRIMARY KEY / AUTO_INCREMENT NOT NULL PRIMARY KEY corresponds to Oracle GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY.

Important notes:
- The oGRAC auto-increment type does not support the ALWAYS mode of the Oracle IDENTITY columns. Instead, it is converted to AUTO_INCREMENT.
- The attributes such as the start value and step of the auto-increment columns are retained during migration.

####  Migrating Partitioned Tables
   During partitioned table migration, the tablespace of the partition and subpartition is mapped based on the tablespace name. If a tablespace with the same name exists on the destination, the tablespace is used. If no tablespace with the same name exists, the system automatically removes the TABLESPACE clause and uses the default tablespace of the current user. You do not need to manually create the tablespace corresponding to the partition.
#### Handling Issues Involving Chinese Character Encoding and Garbled Characters

#####  Encoding requirements

To ensure that data in Chinese can be correctly migrated, the source Oracle database and the destination oGRAC database must meet the following encoding requirements:

| Database| Encoding Requirement     | Recommended Character Set   |
| ------ | ------------- | ------------- |
| oGRAC  | Must be UTF-8.  | UTF-8 (default)|
| Oracle | Must support UTF-8.| AL32UTF8      |

#####  Checking the Oracle Database Character Set

Run the following SQL statement to check the Oracle database character set:

```sql
SELECT USERENV('language') FROM DUAL;
```

Expected output:
```
AMERICAN_AMERICA.AL32UTF8
```

AL32UTF8 is the complete UTF-8 implementation of Oracle and supports all Unicode characters.

#####  Garbled Character Troubleshooting

Common causes:
1. Incorrect NLS_LANG setting on the client: The character set on the client is inconsistent with that on the server.
2. Data corruption: Data inserted using an incorrect encoding may be permanently damaged.
3. Incorrect JDBC connection encoding: The driver connection parameters `encoding` and `nencoding` are incorrectly set.

#####  Checking Data Damage

Run the following command to check whether the data is damaged:

```sql
SELECT DUMP(column_name, 1016) FROM table_name WHERE condition;
```

Determination result:
- If 3F (ASCII code of the question mark) is returned, the data is damaged and needs to be inserted again.
- If valid UTF-8 bytes are returned (for example, `e4 b8 ad e6 96 87` indicates Chinese), the data is intact, and the problem is only a display issue.

#####  Configuring the Environment

Setting Shell environment variables

```bash
export LANG=C.UTF-8
export LC_ALL=C.UTF-8
echo "export LANG=C.UTF-8" >> ~/.bashrc
echo "export LC_ALL=C.UTF-8" >> ~/.bashrc
```

Setting NLS_LANG on the Oracle client

```bash
export NLS_LANG=AMERICAN_AMERICA.AL32UTF8
echo "export NLS_LANG=AMERICAN_AMERICA.AL32UTF8" >> ~/.bashrc
```

Verifying the environment
```sql
SQL> SELECT '测试中文' FROM DUAL;

'测试中文'
------------
测试中文
```
##### Precautions

- When creating the oGRAC destination database, you must specify the UTF-8 encoding.
- Ensure that the time zone of the source database is the same as that of the destination database.
- DataX uses the UTF-8 encoding by default. However, ensure that the JVM environment variables are correctly set.
- If the data is damaged (displayed as question marks), import the data from the original data source again.

##  Migration Suggestions

###  Configuration Requirements for the Execution Machine

To ensure the normal running and optimal performance of the migration tool, the execution machine must meet the following configuration requirements:

####  Hardware

| Item  | Minimum| Recommended   | Description                               |
| -------- | -------- | ----------- | ----------------------------------- |
| CPU      | 4 cores     | 8 cores or more  | Concurrency processing capability, which affects the speed of concurrent migration of multiple tables. |
| Memory    | 8 GB     | 16 GB or more | Used for JVM running and DataX processing.             |
| Disk space| 50GB     | 100 GB or more| Used to store tools, DataX, temporary files, and logs.|

####  Memory size constraints

Based on the amount of data to be migrated and the table size, the execution machine must have sufficient memory to support the running of JVM and DataX.

1. JVM memory constraints:
   - The tool itself requires at least 2 GB memory.
   - DataX automatically adjusts JVM parameters based on the table size. A maximum of 4 GB memory may be required.
   - The memory requirement increases when multiple large tables are concurrently migrated.

2. Memory usage estimation:
   - Small data volume migration (< 1 million rows): 8 GB memory is sufficient.
   - Medium data volume migration (1 million to 10 million rows): 16 GB memory is recommended.
   - Large data volume migration (> 10 million rows): 32 GB memory is recommended.

3. Memory configuration suggestions:
   - When running the migration command, you can use `-Xmx` to adjust the maximum JVM memory.
   - Example: java -Xmx8g -jar openGauss-FullReplicate-7.0.0-RC3.jar --start datax_table --source oracle --config config.yml
   - Ensure that the execution machine has sufficient physical memory and avoid using too much swap space.

####  OS Requirements

- OS: Linux (recommended) or Windows
- File system: SSD storage is recommended to improve the read and write speed of temporary files.
- Network: The network bandwidth between the source and destination databases must be at least 1 Gbit/s, and the latency must be less than 10 ms.

###  Concurrency Configuration

By default, the current configuration file specifies four threads to query tables and another four to write tables.

- Number of threads for querying tables (readerNum): 4
- Number of threads for writing tables (writerNum): 4

These configurations determine the number of tables that can be processed at the same time during the migration, affecting the overall migration speed and system resource usage.

###  DataX Configuration

The migration tool uses GeneralDataXConfigStrategy as the DataX configuration strategy, which features the following:

#### Dynamic channels

The number of DataX channels is automatically adjusted based on the table size.

| Number of Rows in a Table           | Number of Channels                 |
| ----------------- | -------------------------- |
| ≤ 10,000           | 1                          |
| 10,000-100,000    | 2                          |
| 100,000-1,000,000 | 4                          |
| > 1,000,000        | A maximum of 8, or half of the number of CPU cores|

####  JVM parameters

JVM parameters are automatically adjusted based on the table size.

| Number of Rows in a Table              | JVM Parameters          |
| -------------------- | ----------------- |
| ≤ 10,000              | -Xms512m -Xmx512m |
| 10,000-1,000,000     | -Xms1g -Xmx1g     |
| 1,000,000-10,000,000 | -Xms2g -Xmx2g     |
| > 10,000,000          | -Xms4g -Xmx4g     |

####  Batch processing size

The batch processing size is automatically adjusted based on the table size.

| Number of Rows in a Table              | Batch Size|
| -------------------- | ---------- |
| ≤ 10,000              | 500        |
| 10,000-1,000,000     | 1,000      |
| 1,000,000-10,000,000 | 2,000      |
| > 10,000,000          | 4,000      |

####  Sharding Policy

- Tables with a single primary key: The primary key is used as the sharding key.
- Tables with no primary key or with multiple primary keys: The default sharding policy of DataX-OracleReader is used. The number of shards is automatically adjusted based on the table size.

####  Estimating the Memory Usage of the Migration Tool Based on the Maximum Table Size and Concurrency

Estimating the memory size of the migration tool

1. Basic memory requirements
   - Migration tool: at least 2 GB

2. DataX task memory requirements
   - According to the concurrency parameter (writerNum: 4), a maximum of four DataX tasks can be executed at the same time. The memory required for each task is as follows:
   
   | Table Size                | Memory of a Single DataX Task| Max. Memory of Four Tasks|
   | ---------------------- | ----------------- | --------------- |
   | ≤ 10,000 rows             | 512 MB            | 2 GB            |
   | 10,000–1,000,000 rows    | 1 GB              | 4 GB            |
   | 1,000,000–10,000,000 rows| 2 GB              | 8 GB            |
   | > 10,000,000 rows         | 4 GB              | 16 GB           |

3. Total memory requirement
   - Minimum estimation: Tool itself (2 GB) + 4 small tables (2 GB) = 4 GB
   - Medium estimation: Tool itself (2 GB) + 4 medium tables (4 GB) = 6 GB
   - Maximum estimation: Tool itself (2 GB) + 4 ultra-large tables (16 GB) = 18 GB

4. Recommended configurations
   - Small data volume migration (small tables): 8 GB memory is sufficient.
   - Medium data volume migration (including medium tables): 16 GB memory is recommended.
   - Large data volume migration (including large tables or ultra-large tables): 32 GB memory is recommended.

The estimations are based on the configuration parameters of the migration tool. In practice, you should adjust the memory size based on the actual table size distribution and server resources.
