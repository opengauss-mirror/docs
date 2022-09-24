# Restrictions<a name="EN-US_TOPIC_0289900926"></a>

Publication-subscription is implemented based on logical replication and inherits all restrictions of logical replication. In addition, publication-subscription has the following additional restrictions or missing functions.

- Database schemas and DDL commands are not replicated. Database schemas and DDL commands are not replicated. Initial schemas can be manually copied by using **gs\_dump --schema-only**. Subsequent schema changes need to be manually synchronized.

- Sequence data is not replicated. The data in the serial or identifier columns backed by sequences will be replicated as part of the table, but the sequences themselves on the subscriber have no change. If the subscriber is used as a read-only database, this is usually not a problem. However, if some kind of switchover or failover to the subscriber database is intended, the sequences need to be updated, either by copying the current data from the publisher (perhaps using **pg\_dump**) or by specifying the sequence values from the table on the subscriber.

- Only tables, including partitioned tables, can be replicated. Attempts to replicate other types of relations, such as views, materialized views, or foreign tables, will result in errors.

- Multiple subscriptions in the same database cannot subscribe to the same publication (that is, the same published table). Otherwise, duplicate data or primary key conflicts may occur.

- If a published table contains data types that do not support B-tree or hash indexes (such as the geography types), the table must have a primary key so that UPDATE and DELETE operations can be successfully replicated to the subscription. Otherwise, the replication will fail, and the message "FATAL: could not identify an equality operator for type xx" will be displayed on the subscription.

- Currently, gs\_probackup can be used to back up logical replication slots for publication and subscription. Therefore, you can use gs\_probackup or gs\_basebackup to back up the publisher. When data is restored not to the latest time point, the value of **remote\_lsn** recorded by the replication source at the subscriber may be greater than the value of current WAL insertion point at the publisher. Therefore, transactions committed during this period cannot be decoded and replicated, and only transactions committed after **remote\_lsn** are decoded.
