---
description: This document describes Workload Replay Tool in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Workload Replay Tool, features, Availability, Feature Overview]
---

# Workload Replay Tool

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:35:32.883Z pushedAt=2026-09-22T11:12:32.723Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 6.0.0.

## Feature Overview<a name="section35020791"></a>

The workload replay tool is used to quickly mirror the business SQL traffic from the source database to the target database.

## Customer Benefits<a name="section46751668"></a>

By using the Workload Replay Tool, you can quickly mirror source database traffic to the openGauss database, enabling traffic stress testing and business compatibility checks on the openGauss database.

## Feature Description<a name="section18111828"></a>

The recording function of the workload replay tool can monitor the service network port of the source database, collect network traffic from the source database, and generate network packet files. The parsing function of the record and replay tool can parse business SQL information (including SQL statements, transaction order, concurrency, and SQL execution time) from the network packet files. The replay function of the record and replay tool can mirror the parsed SQL statements to the target database, keeping the transaction order and concurrency level consistent with the source. For query statements, the replay function also supports replaying at N times the source concurrency level to perform an N-times concurrent query stress test on the target database.

## Feature Enhancements<a name="section28788730"></a>

- The recording function currently supports MySQL and openGauss databases, and supports replay to openGauss-based databases.
- The recording methods include tcpdump and attach. The former obtains SQL by collecting and parsing network traffic, while the latter obtains SQL by performing dynamic instrumentation on the JDBC interface. For MySQL, the general recording method is also supported, which obtains SQL by querying the MySQL system table mysql.general_log.
- The replay function supports serial replay and parallel replay. During serial replay, the SQL execution order can be kept consistent with the source database. During parallel replay, the SQL execution order and concurrency level can be kept consistent with the source database.
- During replay, the execution time intervals between business SQL statements can be kept consistent with the source database.
- For query statements, the query result sets of the source database can be parsed during parsing, and the differences between the query result sets of the source and target databases can be compared during replay.
- Recording, parsing, and replay can be started simultaneously to implement streaming processing that records, parses, and replays at the same time.
- During replay, SQL statements that fail to execute, SQL statements that execute too slowly, and their execution plans on the target database can be output. The execution time of SQL statements on the source and target databases can be compared, and a comparison report can be output.

## Feature Constraints<a name="section06531946143616"></a>

- When tcpdump is used for recording, the tool must be deployed on the server where the source database resides, and only the root user or a sudo-privileged user can use this feature.
- When tcpdump is used for recording, SSL must be disabled on the source database client.
- When SQL statements are obtained by parsing network packets, only the business SQL executed by database sessions created after recording starts can be captured.
- When the attach method is used for recording, dynamic instrumentation is supported only for single-threaded JDBC Java applications, and Java 11 or later is required.
- When the recording method is attach or general, the replay function does not support comparing query result sets, does not support parallel replay, and does not support maintaining the same time intervals as the source database.

## Dependencies<a name="section57771982"></a>

When recording using the tcpdump method, it depends on the tcpdump tool.

## References<a name="section57771982"></a>

Open source community address: [transcribe-replay-tool](https://atomgit.com/opengauss/compatibility-assessment/tree/master/dynamic_sql_collection/transcribe-replay-tool)

For detailed reference documentation, see <a href="https://atomgit.com/opengauss/compatibility-assessment/tree/master/dynamic_sql_collection/transcribe-replay-tool#sql%E6%B5%81%E9%87%8F%E5%BD%95%E5%88%B6%E5%9B%9E%E6%94%BE%E5%B7%A5%E5%85%B7">README.md</a>
