# Configuration Settings<a name="EN-US_TOPIC_0289900926"></a>

Publication-subscription requires some configuration options to be set.

On the publisher, **wal\_level** must be set to **logical**, and the value of **max\_replication\_slots** must be at least the number of subscriptions expected to be connected plus the number of connections reserved for table synchronization. Value of **max\_wal\_senders** ≥ Value of **max\_replication\_slots** + Number of physical replication slots that are connected at the same time + 1

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If a subscriber is activated and subscribes to a publication, a temporary connection to the publisher needs to be established to check whether the publication subscribed to by the subscriber exists on the publisher. The publisher creates a temporary WAL sender. After the temporary connection is used up, it is disconnected and released immediately.


**max\_replication\_slots** must also be set on the subscriber. It must be set to at least the number of subscriptions that will be added to the subscriber. **max\_logical\_replication\_workers** must be set to at least the number of subscriptions plus the number of connections reserved for table synchronization.
