# Transaction Isolation<a name="EN-US_TOPIC_0242370299"></a>

openGauss manages transactions based on MVCC and two-phase locks, avoiding conflicts between read and write operations. SELECT is a read-only operation, whereas UPDATE and DELETE are read/write operations.

-   There is no conflict between read/write and read-only operations, or between read/write operations. Each concurrent transaction creates a snapshot when it starts. Concurrent transactions cannot detect updates made by each other.
    -   At the  **READ COMMITTED**  level, if transaction T1 is committed, transaction T2 can see changes made by T1.
    -   At the  **REPEATABLE READ**  level, if T2 starts before T1 is committed, T2 will not see changes made by T1 even after T1 is committed. The query results in a transaction are consistent and unaffected by other transactions.

-   Read/Write operations use row-level locks. Different transactions can concurrently update the same table but not the same row. A row update transaction will start only after the previous one is committed.
    -   **READ COMMITTED**: At this level, a transaction can access only committed data. This is the default level.
    -   **REPEATABLE READ**: Only data committed before transaction start is read. Uncommitted data or data committed in other concurrent transactions cannot be read.


