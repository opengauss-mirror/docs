# Creating an Index Online<a name="EN-US_TOPIC_0000001138285643"></a>

## Availability<a name="section5309649"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section47786844"></a>

Uses the CREATE INDEX CONCURRENTLY syntax to create indexes online without blocking DML.

## Benefits<a name="section27428414"></a>

When creating an index, you can specify the CONCURRENTLY keyword to ensure that the DML and online services are not blocked during the index creation.

## Description<a name="section45529136"></a>

A normal CREATE INDEX acquires exclusive lock on the table on which the index depends, blocking other accesses until the index drop can be completed. If the CONCURRENTLY keyword is specified, the ShareUpdateExclusiveLock lock is added to the table so that DML is not blocked during the creation.

This keyword is specified when an index is created online. The entire table needs to be scanned twice and built. When the table is scanned for the first time, an index is created and the read and write operations are not blocked. During the second scan, changes that have occurred since the first scan are merged and updated. The table needs to be scanned and built twice, and all existing transactions that may modify the table must be completed. This means that the creation of the index takes a longer time than normal. In addition, the CPU and I/O consumption also affects other services.

## Enhancements<a name="section7109043"></a>

None

## Constraints<a name="section06531946143616"></a>

-   Only one index name can be specified when an index is created online.
-   The CREATE INDEX statement can be run within a transaction, but CREATE INDEX CONCURRENTLY cannot.
-   Column-store tables, partitioned tables, and temporary tables do not support CREATE INDEX CONCURRENTLY.

## Dependencies<a name="section63981393"></a>

None

