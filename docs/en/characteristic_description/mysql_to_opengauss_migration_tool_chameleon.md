# MySQL-to-openGauss Migration Tool chameleon

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:19:37.413Z pushedAt=2026-09-22T11:12:32.669Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 3.0.0.

## Feature Overview<a name="section35020791"></a>

The chameleon tool is a Python-based real-time replication tool for replicating data from MySQL to openGauss. It provides initial full data replication and real-time incremental data replication, enabling data migration from MySQL to openGauss. For both full and incremental data migration, it supports the migration of various data types in MySQL. In addition, for floating-point data types in MySQL, including decimal, dec, numeric, float, float4, float8, real, double, double precision, and fixed, it ensures no precision loss after migration.

## Customer Benefits<a name="section46751668"></a>

By using the chameleon tool, data can be migrated from MySQL to the openGauss database.

## Feature Description<a name="section18111828"></a>

The chameleon tool provides full and incremental data replication, enabling data to be migrated from MySQL to the openGauss database. For full and incremental data migration, the chameleon tool stores the mapping between MySQL data types and openGauss data types, supporting the migration of various data types in MySQL. In particular, for floating-point data types in MySQL, including decimal, dec, numeric, float, float4, float8, real, double, double precision, and fixed, if the precision is explicitly specified or included by default in the data type, it is converted to the numeric\[p, s\] type in openGauss; if the precision is not explicitly specified, it is converted to the numeric data type in openGauss. In this way, no precision loss occurs after offline or online migration.

## Feature Enhancements<a name="section28788730"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

- Supports MySQL 5.7 and later versions.
- If incompatibility still exists after data type mapping, table data migration fails, but the subsequent offline data migration process is not terminated.

## Dependencies<a name="section57771982"></a>

None.
