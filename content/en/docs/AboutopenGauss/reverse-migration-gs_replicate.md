# Reverse Migration<a name="EN-US_TOPIC_0000001220761098"></a>

## Introduction<a name="section740615433477"></a>

The incremental data can be migrated from openGauss to MySQL online.

## Benefits<a name="section13406743164715"></a>

Reverse migration allows you to migrate data from the source database to the target database, switch applications to the target database, and then migrate new data from the target database to the source database. Reverse migration meets users' requirements for service migration survival. It ensures that the source and target databases run concurrently. If the target database is faulty, applications can be switched back to the source database in time.

## Description<a name="section16406154310471"></a>

The source end of the debezium opengauss connector monitors openGauss xlogs and writes DML operations to Kafka in AVRO format.

The sink end of the debezium opengauss connector reads data in AVRO format from Kafka and plays back the data by table on MySQL. In this way, DML operations are migrated from openGauss to MySQL online.

## Enhancements<a name="section1340684315478"></a>

None.

## Constraints<a name="section06531946143616"></a>

1.  The value of the GUC parameter **wal\_level** must be set to **logical**.
2.  This operation can be performed only by users who can perform logical replication.
3.  DDL operations cannot be migrated.
4.  If the SSL connection is required, the GUC parameter **ssl** must be set to **on**.
5.  Multiple databases cannot use the same logical replication slot.
6.  Do not perform operations on the replication slot on other nodes when the logical replication slot is being used. You can use the **slot.drop.on.stop** parameter to determine whether to delete the logical replication slot when the tool exits.

## Dependencies<a name="section8406643144716"></a>

It depends on logical replication and publication-subscription.
