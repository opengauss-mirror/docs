# openGauss-to-openGauss Migration

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:21:08.034Z pushedAt=2026-09-22T11:12:32.676Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC3.

## Feature Overview

This feature implements openGauss-to-openGauss data migration capability in the openGauss-FullReplicate tool.

## Customer Benefits

This feature primarily addresses the problem that users cannot retain data from an older database version when openGauss has upgrade restrictions. With this feature, users can migrate data from an older version to a newer version to upgrade the database. It also addresses the problem of migrating data between a traditional primary/standby database and a resource pooling architecture database.

## Feature Description

This feature supports migrating data from an openGauss database to a new openGauss database instance, including tables, indexes, sequences, views, functions, triggers, and stored procedures.

## Feature Constraints

- The tool is written in Java 17, so the migration environment must have a Java 17+ runtime.
- The source openGauss version must be 5.0.0+, and the target version must not be lower than the source version.
- Currently, only databases in the a and b compatibility modes are supported for migration, and the source and target must use the same compatibility mode.
- Foreign tables are not supported for migration.
- The openGauss resource pooling parameter `enable_segment` defaults to on, while the traditional primary/standby `enable_segment` defaults to off. When migrating from traditional primary/standby to resource pooling, the destination table automatically gains the `segment=on` attribute.

## Dependencies

None.

## References

To use this feature for openGauss migration, see [openGauss-FullReplicate Tool Usage Guide](https://atomgit.com/opengauss/debezium/tree/master/migration-tool).
