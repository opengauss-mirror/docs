# Optimistic Concurrency Control<a name="EN-US_TOPIC_0257867429"></a>

The Concurrency Control Module \(CC Module for short\) provides all the transactional requirements for the Main Memory Engine. The primary objective of the CC Module is to provide the Main Memory Engine with support for various isolation levels.

## Optimistic OCC vs. Pessimistic 2PL<a name="en-us_topic_0257713296_section145553430410"></a>

The functional differences of Pessimistic 2PL \(2-Phase Locking\) vs. Optimistic Concurrency Control \(OCC\) involve pessimistic versus optimistic approaches to transaction integrity.

Disk-based tables use a pessimistic approach, which is the most commonly used database method. The MOT Engine use the optimistic approach.

The primary functional difference between the pessimistic approach and the optimistic approach is that if a conflict occurs –

-   The pessimistic approach causes the client to wait

-   The optimistic approach causes one of the transactions to fail so that the transaction must be retried by the client.

## Optimistic Concurrency Control Approach<a name="en-us_topic_0257713296_section140311241537"></a>

The** Optimistic Concurrency Control \(OCC\)**  approach detects conflicts as they occur, and performs validation checks at commit time.

The optimistic approach has less overhead and is usually more efficient, partly because transaction conflicts are uncommon in most applications.

The functional differences between these two approaches is larger when the REPEATABLE READ isolation level is enforced and is largest for the SERIALIZABLE isolation level.

## Pessimistic Approaches \(Not used by MOT\)<a name="en-us_topic_0257713296_section14827544433"></a>

The** Pessimistic Concurrency Control **\(2PL or 2-Phase Locking\) approach uses locks to block potential conflicts before they occur. A Lock is applied when a statement is executed and released when the transaction is committed. Disk-based row‑store uses this approach \(with the addition of Multi-version Concurrency Control \(MVCC\)\).

In 2PL algorithms, if one transaction is writing a row, no other transaction can access it, and if a row is being read, no transaction is allowed to write it. A row is locked at access time for read and for write; and the lock is released at commit time. These algorithms require a scheme for handling and avoiding deadlock. Deadlock can be detected by calculating cycles in a wait-for graph. Deadlock can be avoided by keeping time ordering in TSO[\[10\]](en-us_topic_0257713296.md#_ftn10)  or by some kind of back-off scheme.

Another approach is  **Encounter Time Locking \(ETL\)**. In ETL, reads are handled in an optimistic manner, but writers lock the data that they access. As a result, writers from different ETL transactions see each other and can decide to abort. It has been empirically verified[\[11\]](en-us_topic_0257713296.md#_ftn11)  that ETL improves the performance of OCC in two ways.

-   First, they detect conflicts early and often increase the transaction throughput because transactions do not perform useless operations, because conflicts discovered at commit time \(in general\) cannot be solved without aborting at least one transaction.
-   Second, encounter-time locking Reads-After-Writes \(RAW\) to be handled efficiently without requiring expensive or complex mechanisms.

OCC is the fastest option for most workloads[\[12\]](en-us_topic_0257713296.md#_ftn12)[\[13\]](en-us_topic_0257713296.md#_ftn13). This finding has also been observed in our preliminary research phase. One reason is that when every core executes multiple threads, a lock is likely to be held by a swapped thread, especially in interactive mode. In addition, pessimistic algorithms involve deadlock detection \(which introduces overhead\) and usually uses read-write locks \(which are less efficient than standard spin-locks\). We have chosen Silo[\[14\]](en-us_topic_0257713296.md#_ftn14)  because it was simpler than other existing options, such as TicToc[\[15\]](en-us_topic_0257713296.md#_ftn15), while maintaining the same performance for most workloads. ETL is sometimes faster than OCC, but it introduces spurious aborts which may confuse a user, in contrast to OCC which aborts only at commit.

