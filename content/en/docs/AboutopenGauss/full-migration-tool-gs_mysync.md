# Full Migration Tool gs\_mysync<a name="EN-US_TOPIC_0000001264707837"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 5.0.0.

## Introduction<a name="section35020791"></a>

gs\_mysync is a Python-based tool that supports replication from MySQL to openGauss. This tool provides the capability of replicating initial full data and objects (views, triggers, functions, and stored procedures) to migrate data and objects from MySQL to openGauss. It supports full migration of various data types in MySQL, and maintains the precision of floating-point data after migration, including the decimal, dec, numeric, float, float4, float8, real, double, double precision, and fixed types.

## Benefits<a name="section46751668"></a>

You can use gs\_mysync to migrate data from the MySQL database to the openGauss database.

## Description<a name="section18111828"></a>

gs\_mysync provides the full data replication function to migrate data from the MySQL database to the openGauss database. gs\_mysync stores the mappings between MySQL and openGauss data types and supports migration of various data types in MySQL. Specifically, floating-point data in MySQL, including decimal, dec, numeric, float, float4, float8, real, double, double precision and fixed, will be converted to the number[p, s\] type in openGauss if the precision is specified or contained by default. If the precision is not specified, the data will be converted to the number data type in openGauss. In this way, the data precision remains unchanged after offline and online migration.

## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   MySQL 5.7 is supported.

## Dependencies<a name="section57771982"></a>

gs\_mysync depends on the MySQL migration tool gs\_rep\_portal.
