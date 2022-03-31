# MySQL to openGauss Migration Tool Chameleon<a name="EN-US_TOPIC_0000001264707837"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section35020791"></a>

Chameleon is Python-based. It supports real-time data replication from MySQL to openGauss. The tool can replicate initial full data and incremental data in real time to migrate them from MySQL to openGauss. It supports migration of various data types in MySQL, and maintains the precision of floating-point data, including decimal, dec, numeric, float, float4, float8, real, double, double precision and fixed after migration.

## Benefits<a name="section46751668"></a>

You can use Chameleon to migrate data from the MySQL database to the openGauss database.

## Description<a name="section18111828"></a>

Chameleon provides full and incremental data replication functions to migrate data from the MySQL database to the openGauss database. Chameleon stores the mappings between MySQL and openGauss data types and supports migration of various data types in MySQL. Specifically, floating-point data in MySQL, including decimal, dec, numeric, float, float4, float8, real, double, double precision and fixed, will be converted to the numeric\[p, s\] type in openGauss if the precision is specified or contained by default. If the precision is not specified, the data will be converted to the numeric data type in openGauss. In this way, the data precision remains unchanged after offline and online migration.

## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   MySQL 5.7 is supported.
-   If incompatibility still exists after data type mapping, table data migration fails, but the subsequent offline data migration process does not terminate.

## Dependencies<a name="section57771982"></a>

None.

