# Publication-Subscription<a name="EN-US_TOPIC_0000001208298901"></a>

## Availability<a name="section3104013"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section27936123"></a>

Publication-subscription is implemented based on logical replication, with one or more subscribers subscribing to one or more publications on a publisher node. The subscriber pulls data from the publication they subscribe to. Data can be synchronized between clusters in real time.

## Benefits<a name="section50098520"></a>

The typical application scenarios of publication-subscription are as follows:

- Sending incremental changes in a database or a subset of a database to subscribers as they occur

- Firing triggers when changes reach subscribers

- Consolidating multiple databases into a single one (for example, for analysis purposes)

## Description<a name="section48233501"></a>

Changes on the publisher are sent to the subscriber as they occur in real time. The subscriber applies the data in the same order as the publisher, so that transaction consistency is guaranteed for publications within a single subscription. This method of data replication is sometimes called transactional replication.

The subscriber database behaves in the same way as any other openGauss instance and can be used as a publisher for other databases by defining its own publications. When the subscriber is treated as read-only by an application, there will be no conflicts in a single subscription. On the other side, conflicts may occur if other write operations are performed by the application or by other subscribers in the same set of tables.

## Enhancements<a name="section31448332"></a>

None

## Constraints<a name="section06531946143616"></a>

Publication-subscription is implemented based on logical replication and inherits all restrictions of logical replication. In addition, publication-subscription has the following additional restrictions or missing functions.

- Database schemas and DDL commands are not replicated. Initial schemas can be manually copied by using **pg_dump --schema-only**. Subsequent schema changes need to be manually synchronized.

- Sequence data is not replicated. The data in the serial or identifier columns backed by sequences will be replicated as part of the table, but the sequences themselves on the subscriber have no change. If the subscriber is used as a read-only database, this is usually not a problem. However, if some kind of switchover or failover to the subscriber database is intended, the sequences need to be updated, either by copying the current data from the publisher (perhaps using **pg_dump**) or by specifying the sequence values from the table on the subscriber.

- Only tables, including partitioned tables, can be replicated. Attempts to replicate other types of relations, such as views, materialized views, or foreign tables, will result in errors.

- Multiple subscriptions in the same database cannot subscribe to the same publication (that is, the same published table). Otherwise, duplicate data or primary key conflicts may occur.

- If a published table contains data types that do not support B-tree or hash indexes (such as the geography types), the table must have a primary key so that UPDATE and DELETE operations can be successfully replicated to the subscription side. Otherwise, the replication will fail, and the message "FATAL: could not identify an equality operator for type xx" will be displayed on the subscription side.

## Dependencies<a name="section14599532"></a>

Publication-subscription depends on the logical replication function.
