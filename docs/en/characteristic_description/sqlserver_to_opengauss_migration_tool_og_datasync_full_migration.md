---
description: This document describes SQL Server-to-openGauss Migration Tool oG_datasync_full_migr in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, SQL Server-to-openGauss Migration Tool oG_datasync_full_migr, features, Availability, Feature Overview]
---

# SQL Server-to-openGauss Migration Tool oG_datasync_full_migration

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:31:57.360Z pushedAt=2026-09-22T11:12:32.709Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section35020791"></a>

The oG_datasync_full_migration tool is a Java-based data replication tool that provides the capability to replicate initial full data and objects (views, triggers, functions, stored procedures, and sequences), enabling data and objects to be migrated from SQL Server, PostgreSQL, and openGauss to openGauss.

## Customer Benefits<a name="section46751668"></a>

By using the oG_datasync_full_migration tool, you can migrate data from SQL Server to the openGauss database.

## Feature Description<a name="section18111828"></a>

The oG_datasync_full_migration tool provides full data replication, enabling data to be migrated from SQL Server to the openGauss database. For data type mapping, see the reference document.

oG_datasync_full_migration is a Java-based tool that supports fully offline installation and deployment on the specified CentOS 7 and openEuler 20.03/22.03/24.03 systems (x86_64 and aarch64 architectures), without requiring any external network connection.

The oG_datasync_full_migration tool adopts a producer-consumer architecture. During full migration, the producer queries the table structure of the specified schema in the SQL Server database and exports the table data to CSV files, while the consumer creates tables in openGauss based on the table structure and imports the CSV files into the openGauss database.

## Feature Constraints<a name="section06531946143616"></a>

Supports SQL Server 2016 and later versions.

## Dependencies<a name="section57771982"></a>

The oG_datasync_full_migration tool requires JDK 11 or later.

## References<a name="section57771982"></a>

For detailed descriptions and usage documentation of oG_datasync_full_migration, see [SQL Server Full Migration Guide](https://atomgit.com/opengauss/debezium/blob/master/migration-tool/README.md).
