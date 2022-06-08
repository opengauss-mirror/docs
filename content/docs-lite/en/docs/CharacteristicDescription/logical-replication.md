# Logical Replication<a name="EN-US_TOPIC_0000001152275215"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section740615433477"></a>

openGauss provides the logical decoding function to reversely parse physical logs to logical logs. Logical replication tools such as DRS convert logical logs to SQL statements and replay the SQL statements in the peer database. In this way, data can be synchronized between heterogeneous databases. Currently, unidirectional and bidirectional logical replication between openGauss and the MySQL or Oracle database is supported.

## Benefits<a name="section13406743164715"></a>

Logical replication is applicable to real-time database data migration, dual-database active-active system, and rolling upgrades.

## Description<a name="section16406154310471"></a>

DNs reversely parse physical logs to logical logs. Logical replication tools such as DRS extract logical logs from DNs, convert the logs to SQL statements, and replay the SQL statements in MySQL. Logical replication tools also extract logical logs from the MySQL database, reversely parse the logs to SQL statements, and replay the SQL statements in openGauss. In this way, data can be synchronized between heterogeneous databases.

## Enhancements<a name="section1340684315478"></a>

-   openGauss logic decoding supports the extraction of logs from full and incremental logs.
-   openGauss supports logical decoding on a standby node.

## Constraints<a name="section06531946143616"></a>

Column-store replication and DDL replication are not supported.

## Dependencies<a name="section8406643144716"></a>

It depends on logical replication tools that decode logical logs.

