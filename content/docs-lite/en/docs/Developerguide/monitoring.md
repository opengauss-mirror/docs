# Monitoring<a name="EN-US_TOPIC_0289900926"></a>

Because logical replication is based on an architecture similar to physical streaming replication, monitoring on a publication node is similar to monitoring on a primary physical replication node.

Monitoring information about subscriptions is available in the pg\_stat\_subscription view. This view contains one row for every subscription worker. A subscription can have zero or more active subscription workers depending on its state.

Normally, a single apply process runs for an enabled subscription. A disabled or crashed subscription does not have rows in this view. If data synchronization of any table is in progress, there will be additional workers for the tables being synchronized.
