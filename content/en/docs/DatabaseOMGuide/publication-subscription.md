# Publication-Subscription<a name="EN-US_TOPIC_0000001216402104"></a>


Publication-subscription is implemented based on logical replication, with one or more subscribers subscribing to one or more publications on a publisher node. The subscriber pulls data from the publication they subscribe to.

Changes on the publisher are sent to the subscriber as they occur in real time. The subscriber applies the data in the same order as the publisher, so that transactional consistency is guaranteed for publications within a single subscription. This method of data replication is sometimes called transactional replication.

The typical usage of publication-subscription is as follows:

-   Sending incremental changes in a database or a subset of a database to subscribers as they occur
-   Firing triggers when changes reach subscribers
-   Consolidating multiple databases into a single one \(for example, for analysis purposes\)

The subscriber database behaves in the same way as any other openGauss instance and can be used as a publisher for other databases by defining its own publications. When the subscriber is treated as read-only by an application, there will be no conflicts in a single subscription. On the other side, conflicts may occur if other write operations are performed by the application or by other subscribers in the same set of tables.
