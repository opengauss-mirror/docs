# Primary and Standby Database Bad Block Repair

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:22:56.494Z pushedAt=2026-09-22T11:12:32.686Z -->

During database operation, disk data may be corrupted due to certain disk issues (for example, accidental data overwrite), which affects the normal running of the database. To address such issues, openGauss provides the primary and standby database bad block repair feature to resolve bad block problems on the primary and standby databases. In this way, bad block problems on the primary and standby databases can be resolved, ensuring database availability.

- Standby repairs the primary:
openGauss currently supports repairing bad blocks on the primary through the standby during data reads. When the primary reads data, it needs to scan pages from the disk into memory. When a data page is found to be corrupted, the primary, in the page read function, remotely connects to the standby and returns the normal data page from the standby to the primary and then to the upper layer, so that the occurrence of the bad block is not perceived. In this scenario, the primary does not actually repair the bad block; instead, it returns data from the standby upward. Therefore, strictly speaking, this only avoids the bad block problem on the primary and does not resolve it.

- Primary repairs the standby:
Unlike the standby repairing the primary, when the standby finds a corrupted data page, it obtains data from the primary and performs a repair. However, this repair is a real repair that overwrites the underlying data page. Due to version differences between the standby and the primary, the standby can repair pages only during replay. In addition, this method requires a connection to be established between the primary and the standby, so the network between the primary and the standby must be normal.

The overall logic and process are roughly as follows:

1. During normal replay of services on the standby, if the replay thread encounters a bad block, it attempts to obtain the page from the primary through `remote read`, that is, to read the physical page from the primary;
2. After obtaining the page from the primary, the standby checks the page version. If the version is newer, it records the page and waits until the LSN is replayed to that point, without performing a repair at this time;
3. If the page is needed during subsequent replay, it is sought from the record. If the page is indeed the one currently being replayed, it is directly regarded as replay-complete and is normally marked dirty and flushed to disk;

Through the above process, even if a business thread scans a bad block, replay can still ensure that the standby node data is consistent with the primary node, avoiding the risk that the bad block cannot be repaired.

For this repair feature, the constraint is that it only supports user data repair on standby nodes in a single cluster, does not support compressed tables or column store tables, only supports repair during replay, and does not support repair for standby read operations.
