---
description: This document describes Data Verification from Oracle to oGRAC in openGauss, covering topics such as Purpose, Preparations.
keywords: [openGauss, Data Verification from Oracle to oGRAC, data verification, Purpose, Preparations]
---

# Data Verification from Oracle to oGRAC

## Purpose

This document describes how to use the openGauss data verification tool (gs_datachecker) to verify data from Oracle to oGRAC, including how to install the tool and use it to verify data.

For full data verification, the tool extracts data from the source and destination databases through JDBC, temporarily stores the extraction results in Kafka, and the check service obtains the extraction results of specified tables from Kafka, builds Merkle trees for comparison, and implements table data verification. Finally, the verification results are output to files in the specified path.

Three service processes are involved:

| Service Process | Main Program | Default Port | Description |
| :------------------------ | :--------------------------------- | :------- | :---------------------------------- |
| Check service | datachecker-check-7.0.0.jar | 9000 | Schedules verification tasks, compares data on both ends, and outputs verification results |
| Source extract service | datachecker-extract-7.0.0.jar --source | 9001 | Extracts data from the Oracle source and pushes it to Kafka |
| Destination extract service | datachecker-extract-7.0.0.jar --sink | 9002 | Extracts data from the oGRAC destination and pushes it to Kafka |

The source and destination extract services share the same jar package and are distinguished by the startup parameters `--source` and `--sink`.

## Preparations

### Verification Precautions

- The Oracle version must be 19c.
- The time zone of the source database must be the same as that of the destination database. Otherwise, differences occur on time-type data.
- Tables without primary keys do not participate in verification: the tool automatically filters out tables without primary keys when obtaining the table list, and these tables do not appear in the verification results.
- Ensure that the table structures on the source and destination are the same (table names, column names, column count, column order, and types). Otherwise, the verification results are unreliable.
- The tool does not automatically detect table list differences between the two ends: full verification is based on the source table list. Tables that exist only on the destination do not participate in verification, and tables missing on the destination are reported as verification exceptions. Missing or excess tables are not reported as data differences. Manually confirm that the table lists on both ends are consistent before deployment.
- Only the jdbc data load mode (dataLoadMode) is supported for this link. The csv mode is not supported.
- Only full data verification is supported for this link: incremental verification is implemented by using Debezium to listen to data changes on the source, which currently supports only MySQL sources and is not applicable to Oracle sources.
- The current version supports only data verification, not table object verification.
- The tool does not automatically resume verification after an interruption (network failure, process kill, etc.). You need to start the verification again.

### Source Oracle Access Requirements

| Item | Requirement |
| ---- | ---- |
| Driver class | oracle.jdbc.OracleDriver (The Oracle driver is not released with the package. You need to put the ojdbc driver in the lib directory of the deployment path.) |
| URL template | jdbc:oracle:thin:@&lt;host&gt;:&lt;port&gt;/&lt;service_name&gt; |
| schema | The value of spring.extract.schema must be the same as the Oracle user that actually owns the tables to be verified. |

### Destination oGRAC Access Requirements

| Item | Requirement |
| ---- | ---- |
| Driver class | org.opengauss.Driver (The opengauss-jdbc driver is bundled with the release package, version 7.0.0-og. No additional installation is required.) |
| URL template | jdbc:oGRAC://&lt;host&gt;:&lt;port&gt;/&lt;database&gt; |
| Account permissions | The account must have the permission to read the system views ADM_TABLES, ADM_TAB_COLUMNS, and ADM_INDEXES, and the SELECT permission on all tables in the destination schema. |
| schema | The value of spring.extract.schema must be the same as the owner (user) that actually owns the tables to be verified in oGRAC. Only letters, digits, underscores, $, and # are allowed, and the length is 1 to 64. Otherwise, the service fails to start. |

## Installation Procedure

### Installation Environment Requirements

The tool is written in Java. Therefore, you need to install the Java runtime environment in advance. The version must be JDK 11 or later. In addition, the tool depends on Kafka to temporarily store intermediate verification data. Deploy Kafka (including Zookeeper) in advance. The minimum Confluent version is 5.5.1, and confluent-7.2.0 is recommended.

| Dependency | Version Requirement | Description |
| ---- | -------- | ---- |
| JDK | 11+ | Runtime environment of the tool |
| Kafka (including Zookeeper) | confluent 5.5.1+ | Stores extraction results. The Kafka addresses in the three configuration files must be the same. |
| Oracle | 19c | Source database |
| oGRAC | - | Destination database |

### Downloading the Installation Package

Download address: https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-DataCheck-7.0.0.tar.gz
where 7.0.0 indicates the current version.

```bash
wget https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/openGauss-DataCheck-7.0.0.tar.gz
```

### Extracting the Installation Package

After the download is complete, extract the package.

```
tar -zxvf openGauss-DataCheck-7.0.0.tar.gz
```

The extracted directory is as follows:

```text
openGauss-DataCheck-7.0.0/
├── datachecker-extract-7.0.0.jar    # Extract service main program (shared by source and destination)
├── datachecker-check-7.0.0.jar      # Check service main program
├── lib/                             # Dependency directory (place the Oracle driver here)
├── config/                          # Configuration directory (including the oracle2ograc template)
├── run.sh                           # Unified startup and stop script
├── extract-endpoints.sh             # Extract service startup and stop script
└── check-endpoint.sh                # Check service startup and stop script
```

### Preparing the Oracle Driver

The Oracle JDBC driver is not released with the package. Before starting the verification, obtain the ojdbc driver (for example, ojdbc8.jar) that matches Oracle 19c and put it in the lib directory of the deployment path. Otherwise, the source extract service fails to start.

The JDBC driver of the destination oGRAC (opengauss-jdbc, version 7.0.0-og) is bundled with the release package, and no additional installation is required.

## Configuration File Description

The dedicated configuration templates for the Oracle-to-oGRAC verification link are located in the config/oracle2ograc directory of the installation package. The directory contains three configuration files, which can be directly copied and modified based on the actual environment:

- application.yml: check service configuration
- application-source.yml: source Oracle extract service configuration
- application-sink.yml: destination oGRAC extract service configuration

The configuration files use YAML rules. Pay attention to alignment. Indentation indicates the layer relationship. Do not use the Tab key for indentation. Use spaces only. The number of indented spaces is not important, but elements of the same layer must be left-aligned. If a database password contains special characters, enclose it in quotation marks.

### Check Service Configuration

```yaml
server:
  port: 9000
logging:
  config: config/log4j2.xml
spring:
  kafka:
    bootstrap-servers: <host>:<port>          # Kafka address
  check:
    core-pool-size: 8                         # Core thread pool size for verification
    maximum-pool-size: 8                      # Maximum thread pool size for verification
    maximum-topic-size: 8                     # Number of verification topics
    sample:
      ratio: 1                                # Sampling verification ratio (0 to 1, 1 indicates full verification)
      threshold: 0                            # Sampling trigger threshold. Tables whose slice count is less than or equal to this value are fully checked. 0 indicates no threshold.
data:
  check:
    data-path: ./check_result                 # Output directory of verification results
    source-uri: http://127.0.0.1:9001         # Source extract service address, corresponding to server.port of the source
    sink-uri: http://127.0.0.1:9002           # Destination extract service address, corresponding to server.port of the destination
    auto-delete-topic: 1                      # Topic auto-deletion policy: 0 not deleted; 1 deleted after all verification is complete; 2 deleted after a table is verified
    increment-max-diff-count: 1000            # Maximum number of difference records processed in incremental verification
    create-repair-sql: false                  # Switch for outputting repair statements
    max-retry-times: 200                      # Maximum number of retries for environment check before verification starts
    diff-debug-log-enabled: false             # If enabled, the details of failed data differences can be viewed
rules:
  enable: false                               # Switch for filter rules
```

### Source Configuration

```yaml
server:
  port: 9001
logging:
  config: config/log4j2.xml
spring:
  check:
    server-uri: http://127.0.0.1:9000         # Check service address
    core-pool-size: 4                         # Core thread pool size
    maximum-pool-size: 4                      # Maximum thread pool size
    maximum-topic-size: 4                     # Number of topics, which determines the number of tables concurrently extracted
    maximum-table-slice-size: 5000            # Maximum number of rows per slice. Tables exceeding this row count are split into multiple slices. This value must be the same on both ends.
    extend-maximum-pool-size: 4               # Extended thread pool size for large table slice extraction
  extract:
    schema: <schema>                          # Oracle user owning the tables to be verified
    databaseType: O                           # Set to O when the source is Oracle
    query-dop: 8                              # Slice switch. Setting it to 1 disables slicing. A larger value occupies more database connections.
    dataLoadMode: jdbc                        # Data load mode. Only jdbc is supported for this link.
    memory-safe-watermark: 0.30               # Memory safe watermark (ratio of -Xmx), used to prevent memory overflow
    memory-min-concurrency: 1                 # Minimum number of concurrent slices
    debezium-enable: false                    # Incremental verification switch. Incremental verification is not supported for this link. Keep it false.
  jdbc:
    result-set:
      fetch-size: 1000                        # Upper limit of the number of fetched rows, which is automatically reduced at runtime based on the remaining heap memory
  kafka:
    bootstrap-servers: <host>:<port>          # Kafka address
  datasource:
    driver-class-name: oracle.jdbc.OracleDriver
    url: jdbc:oracle:thin:@<host>:<port>/<service_name>
    username: <schema>
    password: '<password>'                    # If the password contains special characters, enclose it in quotation marks.
    druid:
      max-active: 8                           # Maximum number of connections in the connection pool
      test-while-idle: true
      test-on-borrow: true
      validation-query: "SELECT 1 FROM DUAL"  # Keepalive query for Oracle
      validation-query-timeout: 10000
      connection-error-retry-attempts: 0
      break-after-acquire-failure: true
      max-wait: 600000
      keep-alive: true
      min-evictable-idle-time-millis: 600000
data:
  check:
    oracle2ograc:
      precision-mode: COMPATIBLE              # Precision mode, which must be the same as that of the destination
```

### Destination Configuration

```yaml
server:
  port: 9002
logging:
  config: config/log4j2.xml
spring:
  check:
    server-uri: http://127.0.0.1:9000         # Check service address
    core-pool-size: 4
    maximum-pool-size: 4
    maximum-topic-size: 4                     # Keep it consistent with the source
    maximum-table-slice-size: 5000            # Keep it consistent with the source
    extend-maximum-pool-size: 4
  extract:
    schema: <schema>                          # oGRAC user (owner) of the tables to be verified. Only letters, digits, underscores, $, and # are allowed, and the length is 1 to 64.
    databaseType: OGRAC                       # Set to OGRAC when the destination is oGRAC
    query-dop: 8                              # Keep it consistent with the source
    memory-safe-watermark: 0.30
    memory-min-concurrency: 1
  jdbc:
    result-set:
      fetch-size: 1000
  kafka:
    bootstrap-servers: <host>:<port>
  datasource:
    driver-class-name: org.opengauss.Driver
    url: jdbc:oGRAC://<host>:<port>/<database>
    username: <schema>
    password: '<password>'
    druid:
      max-active: 8
      test-while-idle: true
      test-on-borrow: true
      validation-query: "select 1"            # Keepalive query for oGRAC
      validation-query-timeout: 10000
      connection-error-retry-attempts: 0
      break-after-acquire-failure: true
      max-wait: 600000
      keep-alive: true
      min-evictable-idle-time-millis: 600000
data:
  check:
    oracle2ograc:
      precision-mode: COMPATIBLE              # Keep it consistent with the source
```

### Precision Mode Description

Oracle and oGRAC differ in how they represent time, floating-point, and other types. For this link, the tool provides the precision mode configuration item (configured in application-xxx.yml on the source and destination. If not configured, COMPATIBLE is used by default):

| Mode | Description | Scenario |
| ---- | ---- | -------- |
| COMPATIBLE | Compares data in the compatible representation of the database kernel. This is the default value. | Routine verification scenarios, recommended |
| STRICT | Compares literal values of intervals, floating-point numbers, and other types. | Scenarios with high precision requirements |

Note: **Both ends must be configured with the same value.** Otherwise, the same row of data is read differently on the two ends, causing verification differences.

The read and comparison modes of each type family in the two precision modes are as follows:

| Type Family | STRICT | COMPATIBLE (Default) |
| ------ | ------ | ------------------ |
| CHAR/VARCHAR2/NCHAR/NVARCHAR2/LONG | Mode independent. Both ends are normalized in the same way and then compared. | Same as left |
| NUMBER/INTEGER/INT/SMALLINT | Full-precision string comparison | 12 decimal places are reserved by default |
| FLOAT/BINARY_FLOAT/BINARY_DOUBLE/REAL | 64-bit floating-point comparison | 32-bit floating-point comparison (aligned with the oGRAC REAL type) |
| DATE | Full precision (no subsecond, consistent on both ends) | Same as left |
| TIMESTAMP | Subseconds are reserved. | Truncated to seconds |
| TIMESTAMP WITH TIME ZONE | Subseconds are reserved after time zone normalization. | Trailing zeros of subseconds are removed after time zone normalization. |
| TIMESTAMP WITH LOCAL TIME ZONE | Subseconds are reserved after time zone normalization. | Truncated to seconds after time zone normalization. |
| INTERVAL YEAR TO MONTH | Low-order bits are padded with zeros (same in both modes). | Same as left |
| INTERVAL DAY TO SECOND | Precision is retained as is. | Rounded to 6 decimal places |
| CLOB/NCLOB/XMLTYPE, BLOB/LONG RAW/RAW | Mode independent (read as character streams or hexadecimal) | Same as left |

### Detailed Configuration Parameters

#### Check Service Parameters

| Parameter | Type | Mandatory | Default Value | Description |
| :----- | :--- | :--- | :----- | :--- |
| `server.port` | Integer | No | 9000 | Web port of the check service |
| `spring.kafka.bootstrap-servers` | String | Yes | - | Kafka address, which must be the same as that configured for the extract services |
| `spring.check.core-pool-size` | Integer | No | - | Core thread pool size for verification |
| `spring.check.maximum-pool-size` | Integer | No | - | Maximum thread pool size for verification |
| `spring.check.maximum-topic-size` | Integer | No | - | Number of verification topics |
| `spring.check.sample.ratio` | Double | No | 1.0 | Sampling verification ratio (0 to 1, 1 indicates full verification). It takes effect only for tables whose slice count is greater than 1. |
| `spring.check.sample.threshold` | Integer | No | 0 | Sampling trigger threshold. Tables whose slice count is less than or equal to this value are fully verified. 0 indicates no lower limit. |
| `data.check.data-path` | String | No | ./check_result | Output directory of verification results |
| `data.check.source-uri` | String | Yes | - | Source extract service address |
| `data.check.sink-uri` | String | Yes | - | Destination extract service address |
| `data.check.auto-delete-topic` | Integer | No | - | Topic auto-deletion policy: 0 not deleted; 1 deleted after all verification is complete; 2 deleted after a table is verified |
| `data.check.increment-max-diff-count` | Integer | No | 1000 | Maximum number of difference records processed in incremental verification. Value range: [10,5000] |
| `data.check.create-repair-sql` | Boolean | No | false | Switch for outputting repair statements |
| `data.check.max-retry-times` | Integer | No | - | Maximum number of retries for the environment check before verification starts |
| `data.check.diff-debug-log-enabled` | Boolean | No | false | Switch for the details of failed data differences |
| `rules.enable` | Boolean | No | false | Switch for filter rules |

#### Extract Service Parameters

| Parameter | Type | Mandatory | Default Value | Description |
| :----- | :--- | :--- | :----- | :--- |
| `server.port` | Integer | No | 9001/9002 | Web port of the extract service. The default value is 9001 for the source and 9002 for the destination. |
| `spring.check.server-uri` | String | Yes | - | Check service address |
| `spring.check.core-pool-size` | Integer | No | - | Core thread pool size |
| `spring.check.maximum-pool-size` | Integer | No | - | Maximum thread pool size |
| `spring.check.maximum-topic-size` | Integer | Yes | - | Number of topics, which determines the number of tables concurrently extracted |
| `spring.check.maximum-table-slice-size` | Integer | Yes | - | Maximum number of rows per slice. The value must be the same on both ends. Otherwise, slices cannot be aligned. |
| `spring.check.extend-maximum-pool-size` | Integer | No | - | Extended thread pool size for large table slice extraction |
| `spring.extract.schema` | String | Yes | - | Verification schema. On the source, it is the Oracle user owning the tables to be verified. On the destination, it is the owner of the tables to be verified in oGRAC. |
| `spring.extract.databaseType` | String | Yes | - | Database type. Set it to O (Oracle) for the source and OGRAC for the destination. |
| `spring.extract.query-dop` | Integer | No | 8 | Slice switch. Setting it to 1 disables slicing, and setting it to a value greater than 1 enables slice extraction. |
| `spring.extract.dataLoadMode` | String | Yes | - | Data load mode. Only jdbc is supported for this link. |
| `spring.extract.memory-safe-watermark` | Double | No | 0.30 | Memory safe watermark (ratio of -Xmx) |
| `spring.extract.memory-min-concurrency` | Integer | No | 1 | Minimum number of concurrent slices |
| `spring.jdbc.result-set.fetch-size` | Integer | No | 1000 | Upper limit of the number of fetched rows, which is automatically reduced at runtime based on the remaining heap memory |
| `data.check.oracle2ograc.precision-mode` | String | No | COMPATIBLE | Precision mode: COMPATIBLE or STRICT. The value must be the same on both ends. |

#### Database Connection Parameters

| Parameter | Type | Mandatory | Default Value | Description |
| :----- | :--- | :--- | :----- | :--- |
| `spring.datasource.driver-class-name` | String | Yes | - | oracle.jdbc.OracleDriver for the source and org.opengauss.Driver for the destination |
| `spring.datasource.url` | String | Yes | - | jdbc:oracle:thin:@&lt;host&gt;:&lt;port&gt;/&lt;service_name&gt; for the source and jdbc:oGRAC://&lt;host&gt;:&lt;port&gt;/&lt;database&gt; for the destination |
| `spring.datasource.username` | String | Yes | - | Database username |
| `spring.datasource.password` | String | Yes | - | Database password. If the password contains special characters, enclose it in quotation marks. |
| `spring.datasource.druid.max-active` | Integer | No | 8 | Maximum number of connections in the connection pool. initial-size and min-idle are automatically equal to this value. |
| `spring.datasource.druid.validation-query` | String | Yes | - | Connection keepalive query. Set it to SELECT 1 FROM DUAL for the source and select 1 for the destination. |
| `spring.datasource.druid.validation-query-timeout` | Integer | No | 10000 | Timeout period of the keepalive query |
| `spring.datasource.druid.max-wait` | Integer | No | 600000 | Maximum waiting time for obtaining a connection (milliseconds) |
| `spring.datasource.druid.keep-alive` | Boolean | No | true | Connection keepalive switch |

### Filter Rule Configuration

The check service supports three types of filter rules: table-level, row-level, and column-level. They are configured in application.yml of the check service and controlled by the `rules.enable` switch, which is disabled by default.

- **Table-level rules**: filter tables to be verified by using blacklists and whitelists. The blacklist and whitelist are mutually exclusive. If both are configured, only the whitelist takes effect.
- **Row-level rules**: filter data in a specified range of a specified table in `[offset,count]` format, which is equivalent to `select * from table order by primary key asc limit offset,count`.
- **Column-level rules**: filter columns to be verified by using include (only the specified columns are verified) or exclude (the specified columns are not verified). The two modes are mutually exclusive. Primary key columns always participate in verification. In include mode, the primary key column is automatically added, and in exclude mode, the primary key column is automatically removed.

Table-level rules have the highest priority. After table filtering is complete, row-level and column-level rules are matched.

```yaml
rules:
  enable: true
  table:
    - name: white                 # white indicates a whitelist, and black indicates a blacklist.
      text: ^[a-z0-9_]+$          # Regular expression of table names
  row:
    - name: ^[a-zA-Z][a-zA-Z_]+$  # Regular expression used to match table names
      text: 10,100                # Row-level range [offset,count]
  column:
    - name: t_test_1              # Table name
      text: id,c_1,c_2,c_3        # Column name list
      attribute: include          # include or exclude
```

## Starting Verification

### Starting Zookeeper and Kafka

Verification depends on the Kafka environment. Start Zookeeper and Kafka first:

```bash
cd {path}/confluent-7.2.0

# Start Zookeeper
bin/zookeeper-server-start -daemon etc/kafka/zookeeper.properties

# Start Kafka
bin/kafka-server-start -daemon etc/kafka/server.properties
```

### Starting Verification Services

After the configuration files are configured, verification can start. Use the unified script run.sh to start all service processes at a time:

```bash
sh run.sh start    # Start the source extract, destination extract, and check services
sh run.sh status   # Check the running status of all services
sh run.sh stop     # Stop all running service processes
sh run.sh restart  # Restart all services
```

You can also use the extract service and check service scripts separately:

```bash
sh extract-endpoints.sh start   # Start the source and destination extract services
sh check-endpoint.sh start      # Start the check service
```

Alternatively, use the java background commands to manually start the services. Start the two extract services first, and then start the check service:

```bash
nohup java -jar datachecker-extract-7.0.0.jar --source >/dev/null 2>&1 &
nohup java -jar datachecker-extract-7.0.0.jar --sink >/dev/null 2>&1 &
nohup java -jar datachecker-check-7.0.0.jar >/dev/null 2>&1 &
```

Note:

- After the check service is fully started, verification is automatically initiated. No manual trigger is required.
- After full verification is complete, the tool automatically exits the current process.
- After an extract service starts, it automatically loads table information from the database. Loading takes a long time when the data volume is large. The check service checks whether table information loading on the extract end is complete after it starts. If loading is not complete within the timeout period, the check service exits. In this case, view the loading progress in logs or restart the check service.

### Parallel Verification of Multiple Instances

For a single instance, use the run.sh script to start services. To verify multiple links in parallel, copy the deployment directory, reconfigure it, and use the java background commands to start them separately.

## Verification Result Description

### Verification Report Composition

After verification is complete, the results are output to the directory configured by `data.check.data-path` of the check service (./check_result by default). The results consist of the following files:

| Name | Description |
| ---- | ---- |
| Progress log | progress.log, which records the overall verification progress |
| Verification summary log | summary.log, which records the summary statistics of verification |
| Success detail log | success.log, which records the details of successfully verified tables |
| Failure detail log | failed.log, which records the details of failed tables and difference primary keys |
| Repair report | repair_*.txt, which records the repair SQL of failed tables. It is not output by default. |

The verification result file name consists of a prefix, schema, table name, table letter, and partition number. The table letter is encoded based on the case of English letters in the table name: lowercase letters are marked as 0 and uppercase letters as 1. The binary string consisting of the prefix 0 and the table name encoding is converted into a hexadecimal value. For example, the letter of the table name T_test_SOME_032 is 10f.

### Progress Log Description

Fields in progress.log:

| Name | Description |
| ---- | ---- |
| mode | Verification mode: FULL \| INCREMENT |
| status | Current verification status: 1 not started \| 2 in progress \| 3 complete |
| tableCount | Total number of tables to be verified |
| completeCount | Number of tables that have been verified |
| total | Total number of records of verified tables |
| rows | Number of records of newly verified tables |
| avgSpeed | Average verification speed (tps/s) |
| cost | Current elapsed time (seconds) |
| startTime | Verification start time (yyyy-MM-dd HH:mm:ss) |
| endTime | Verification end time (yyyy-MM-dd HH:mm:ss) |
| currentTime | Current progress time (yyyy-MM-dd HH:mm:ss) |

### Verification Summary Log Description

Fields in summary.log:

| Name | Sub-item | Description |
| ---- | -------- | ---- |
| mode | | FULL \| INCREMENT |
| tableCount | | Total number of tables to be verified |
| successCount | | Total number of successfully verified tables |
| failedCount | | Total number of failed tables |
| rowCount | | Total number of records |
| missTable | | Information about tables missing on the source or destination |
| | sinkLoss | Number of tables missing on the destination |
| | sinkExcess | Number of excess tables on the destination |
| | miss | Number of missing tables to be verified |
| | lossTables | List of missing tables |
| | excessTables | List of excess tables |
| | sourceTableTotalSize | Total number of tables on the source |
| | sinkTableTotalSize | Total number of tables on the destination |
| cost | | Total verification duration (seconds) |
| startTime | | Verification start time (yyyy-MM-dd HH:mm:ss) |
| endTime | | Verification end time (yyyy-MM-dd HH:mm:ss) |

### Success Detail Log Description

Fields in success.log:

| Name | Description |
| ---- | ---- |
| process | Current process ID |
| schema | Current verification schema |
| tableName | Table name |
| topic | Topic |
| partition | Partition number |
| rowCount | Reserved |
| cost | Total verification duration (milliseconds) |
| startTime | Verification start time (yyyy-MM-dd HH:mm:ss.SSS) |
| endTime | Verification end time (yyyy-MM-dd HH:mm:ss.SSS) |
| message | Verification success message |

### Failure Detail Log Description

Fields in failed.log:

| Name | Description |
| ---- | ---- |
| process | Current process ID |
| schema | Current verification schema |
| tableName | Table name |
| topic | Topic |
| partition | Partition number |
| beginOffset | Offset of incremental verification |
| diffCount | Number of difference records |
| cost | Total verification duration (milliseconds) |
| startTime | Verification start time (yyyy-MM-dd HH:mm:ss.SSS) |
| endTime | Verification end time (yyyy-MM-dd HH:mm:ss.SSS) |
| message | Verification failure message |
| keyInsertSet | Primary key set of rows missing on the destination |
| keyUpdateSet | Primary key set of rows with inconsistent data on the destination |
| keyDeleteSet | Primary key set of excess rows on the destination |

keyInsertSet, keyUpdateSet, and keyDeleteSet locate differences at the primary key level, which can be used to identify missing, inconsistent, and excess rows on the destination. To view the details of failed data differences, set `diff-debug-log-enabled` to true in the check service configuration.

### Repair Report Description

The repair report is repair SQL content in plain text and is not output by default. To output the report, set `create-repair-sql` to true in the check service configuration:

```yaml
data:
  check:
    create-repair-sql: true
```

## Verification Suggestions

### Server Configuration Requirements

Reference configuration for high-performance verification scenarios (for example, verification of large tables or massive data):

| Item | Requirement | Description |
| ------ | -------- | ---- |
| Number of servers | 3 | 2 database servers (Oracle and oGRAC), 1 server for the check service and Kafka |
| CPU | 128 cores | Concurrent extraction and verification capabilities |
| Memory | 512 GB or more | Memory for databases and verification services |
| Disk | 4 NVMe disks, each 1 TB or more | Data storage and Kafka data |
| Network | Gigabit NICs, interconnected by optical fibers | Network bandwidth between the source and destination |

openEuler-20.03-LTS is recommended as the operating system. For routine data volume verification, the configuration can be reduced, and ensure that the memory of the server where the check service is deployed meets the running requirements of the JVM and Kafka.

In the scenario of 50 tables with 10 million records each, the verification speed can reach 200,000 records per second.

### Concurrency and Connection Pool Configuration

Data verification is mainly time-consuming in the data extraction phase. Adjust the following configurations on the extract end to improve verification performance:

| Parameter | Recommended Value | Description |
| ---- | ------ | ---- |
| spring.check.maximum-topic-size | 3 | Number of topics for table-level concurrent extraction. Increasing the value improves concurrency but occupies more memory and database connections. |
| spring.check.maximum-table-slice-size | 100000 | Table slice size. Increasing the value reduces database connection consumption and improves throughput but increases memory usage. |
| spring.check.extend-maximum-pool-size | 10 | Maximum number of threads in the thread pool for table-level slice extraction |
| spring.check.core-pool-size | 10 | Minimum number of core threads for concurrent tasks |

Dependencies between key configuration items:

1. The number of concurrent slice connections is approximately query-dop × maximum-topic-size, which must be smaller than druid.max-active. Otherwise, extract tasks wait for database connections.
2. The values of the slice alignment configurations on the source and destination (maximum-table-slice-size, query-dop, and maximum-topic-size) must be the same. Otherwise, slices cannot be aligned.
3. maximum-table-slice-size, sample.ratio, and sample.threshold jointly determine the slice granularity and sampling quantity of sampling verification.

### JVM Parameter Tuning

Java virtual machine parameters can be used to improve verification performance. Reference configuration:

```bash
-Xmx5G -Xms5G -XX:MaxMetaspaceSize=1G -XX:MetaspaceSize=1G -XX:+UseG1GC
```

Adjust the values based on the available memory of the server and the data volume.

### Kafka Tuning Configuration

| Parameter | Recommended Value | Description |
| ---- | ------ | ---- |
| num.network.threads | 128 | Number of network I/O threads of the broker, which has a great impact in network bottleneck scenarios |
| num.io.threads | 65 | Number of disk I/O threads of the broker |
| delete.topic.enable | true | Enable topic deletion to clean up historical data of topics after verification. |

The extract services support compression algorithm configuration when sending data to Kafka (`spring.kafka.properties.compression.type` in application-xxx.yml on the source and destination):

| Compression Algorithm | Supported | Description |
| -------- | -------- | ---- |
| none | Yes | Default value, no compression |
| gzip | Yes | High compression ratio, relatively high CPU usage |
| snappy | Yes | Fast compression and decompression, recommended when bandwidth or disk is limited |
| lz4 | No | The dependencies required by lz4 are not built in the current release package. An error is reported when messages are sent if lz4 is configured. |

Compression takes effect only in the transmission and storage phases when the extract services send data to Kafka. The check service automatically decompresses messages and the compression does not affect the correctness of verification results. This configuration is a sender parameter. It takes effect independently on the source and destination, and the values on the two ends do not need to be the same.
