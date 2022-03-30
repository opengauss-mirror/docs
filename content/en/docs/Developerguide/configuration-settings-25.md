# Configuration Settings<a name="EN-US_TOPIC_0000001261761887"></a>

Publication-subscription requires some configuration options to be set.

-   On the publisher,  **wal\_level**  must be set to  **logical**, and the value of  **max\_replication\_slots**  must be at least the minimum number of subscriptions expected to be connected.  **max\_wal\_senders**  should be set to at least the value of  **max\_replication\_slots**  plus the number of physical replicas that are connected at the same time.
-   **max\_replication\_slots**  must also be set on the subscriber. It must be set to at least the number of subscriptions that will be added to the subscriber.  **max\_logical\_replication\_workers**  must be set to at least the minimum number of subscriptions.

