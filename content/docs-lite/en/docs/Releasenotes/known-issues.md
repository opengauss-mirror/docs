# Known Issues<a name="EN-US_TOPIC_0289899194"></a>

-   openGauss Lite cannot monitor storage space, file permission, and slow disks. When the storage space is full or the file permission is abnormal, the database exits and the corresponding information is recorded in logs. On a slow disk, the response to database operations is slower than usual.
-   openGauss Lite has only database kernel capabilities and does not support primary/standby monitoring or switchovers. If the primary and standby nodes are disconnected and their logs do not match, the HA cluster needs to be rebuilt.
-   By default, the OM starts the primary and standby databases based on the initial primary/standby relationship. If an application performs a primary/standby switchover on the databases, the application needs to notify the OM of the new primary/standby relationship to prevent the HA cluster from being rebuilt due to incorrect primary/standby relationship.
-   The read-only mode of the standby node and cascaded standby node is incompatible with the ultimate RTO feature. If the ultimate RTO feature is enabled, disable the read-only mode of the standby node and cascaded standby node.

