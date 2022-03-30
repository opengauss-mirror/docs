# Publication-Subscription<a name="EN-US_TOPIC_0000001220693680"></a>

## Availability<a name="section1076382216287"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section732915401281"></a>

Publication-subscription is implemented based on logical replication, with one or more subscribers subscribing to one or more publications on a publisher node. The subscriber pulls data from the publications they subscribe to. Data across database clusters can be synchronized in real time.

## Benefits<a name="section103921852122817"></a>

The typical application scenarios of publication-subscription are as follows:

-   Sending incremental changes in a database or a subset of a database to subscribers as they occur
-   Firing triggers when changes reach subscribers
-   Consolidating multiple databases into a single one \(for example, for analysis purposes\)

## Description<a name="section811017719290"></a>

Changes on the publisher are sent to the subscriber as they occur in real time. The subscriber applies the published data in the same order as the publisher, so that transactional consistency is guaranteed for publications within a single subscription. This method of data replication is sometimes called transactional replication.

The subscriber database behaves in the same way as any other openGauss instance and can be used as a publisher for other databases by defining its own publications. When the subscriber is treated as read-only by an application, there will be no conflicts in a single subscription. On the other side, conflicts may occur if other write operations are performed by the application or by other subscribers in the same set of tables.

## Enhancements<a name="section1359382119297"></a>

None.

## Constraints<a name="section13355203802911"></a>

Publication-subscription is implemented based on logical replication and inherits all restrictions of logical replication. In addition, publication-subscription has the following additional restrictions or missing functions.

-   Database schemas and DDL commands are not replicated. Initial schemas can be manually copied by using  **pg\_dump --schema-only**. Subsequent schema changes need to be manually synchronized.
-   Sequence data is not replicated. The data in serial or identifier columns backed by the sequence in the background will be replicated as part of the table, but the sequence itself will still display the start value on the subscriber. If the subscriber is used as a read-only database, this is usually not a problem. However, if some kind of switchover or failover to the subscriber database is intended, the sequence needs to be updated to the latest value, either by copying the current data from the publisher \(perhaps using  **pg\_dump**\) or by determining a sufficiently large value from the tables themselves.
-   Only tables, including partitioned tables, can be replicated. Attempts to replicate other types of relations, such as views, materialized views, or foreign tables, will result in errors.
-   Multiple subscriptions in the same database cannot subscribe to the same publication \(that is, the same published table\). Otherwise, duplicate data or primary key conflicts may occur.
-   If a published table contains data types that do not support B-tree or hash indexes \(such as the geography types\), the table must have a primary key so that UPDATE and DELETE operations can be successfully replicated to the subscription side. Otherwise, the replication will fail, and the message "FATAL: could not identify an equality operator for type xx" will be displayed on the subscription side.

## Dependencies<a name="section101449415302"></a>

Publication-subscription depends on the logical replication function.

