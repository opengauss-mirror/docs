---
description: This document describes PostgreSQL-to-openGauss Migration Tool debezium-connector-po in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, PostgreSQL-to-openGauss Migration Tool debezium-connector-po, features, Availability, Feature Overview]
---

# PostgreSQL-to-openGauss Migration Tool debezium-connector-postgres

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:22:34.880Z pushedAt=2026-09-22T11:12:32.684Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview<a name="section35020791"></a>

The debezium-connector-postgres tool is a Java-based replication tool for migrating data from Postgresql to openGauss. It provides the capability to replicate initial full data and objects (views, triggers, functions, and stored procedures) as well as incremental data (DML), enabling data and objects to be migrated from Postgresql to openGauss. For full data migration, it supports the migration of various data types in Postgresql. For floating-point data types in Postgresql, including decimal, numeric, double precision, and real, it ensures that data precision is not lost after migration. For incremental data migration, it can migrate the data generated during the Postgresql data migration period (including full and incremental migration) to the openGauss side.

## Customer Benefits<a name="section46751668"></a>

By using the debezium-connector-postgres tool, data can be migrated from PostgreSQL to the openGauss database. Based on the sysbench test model, with 2-way Kunpeng 920 CPUs and the openEuler operating system, when a PostgreSQL database has 20 tables (without indexes) and each table contains more than 5 million rows, gs_mysync migrates data to openGauss with 20 concurrent connections, and the overall full migration performance can reach more than 300M/s. Incremental migration is replayed table by table. For mixed IUD scenarios with 50 tables and 50 threads (30 insert threads, 10 update threads, and 10 delete threads), the performance can reach 30,000 TPS.

## Feature Description<a name="section18111828"></a>

The debezium-connector-postgres tool provides full and incremental data replication, allowing data to be migrated from Postgresql to the openGauss database. The debezium-connector-postgres tool stores the mapping between Postgresql data types and openGauss data types, supporting the migration of various data types in Postgresql.

The debezium-connector-postgres tool supports offline installation on systems with specified versions and architectures (including CentOS7, openEuler20.03, and openEuler22.03 system versions, and x86_64 and aarch64 architectures), without requiring an external network connection.

The debezium-connector-postgres tool adopts the debezium connector structure. During full migration, the source uses the pgjdbc driver to query the postgresql database and export data to csv files, while the sink uses the ogjdbc driver to import the csv files into the openGauss database. During incremental migration, the source pushes data to a specified topic, while the sink configures topics as the merged topic to extract data from kafka, thereby ensuring transaction ordering. During data replication, the debezium-connector-postgres tool performs corresponding conversions for different types.

## Feature Constraints<a name="section06531946143616"></a>

- Supports PostgreSQL 9.4 or later.

## Dependencies<a name="section57771982"></a>

The debezium-connector-postgres tool depends on the third-party components kafka, zookeeper, and schema-registry.

## References<a name="section57771982"></a>

For detailed description and usage documentation of debezium-connector-postgres, see [PostgreSQL Migration Guide](https://atomgit.com/opengauss/debezium/blob/master/README.md#debezium-postgres-connector-1).
