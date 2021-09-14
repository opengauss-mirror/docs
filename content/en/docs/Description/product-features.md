# Product Features<a name="EN-US_TOPIC_0294809831"></a>

openGauss features high performance, availability, security, and maintainability.

-   High performance

    Achieves second-level response to queries of tens of billions of data through key technologies, such as the column-store, vectorized executor, and fusion engine.

-   High availability \(HA\)

    Intra-city cross-AZ DR ensures zero data loss and minute-level recovery. 

-   High security

    Supports security features such as access control, encryption authentication, database audit, and dynamic data masking to provide comprehensive end-to-end data security protection.

-   High reliability

    -   TIMECAPSULE and RECYCLEBIN

    Generally, it is difficult to recover table data that is updated, deleted, truncated, or dropped by mistake. In some cases, you can restore data to the time point before the mistaken operation, which is called point-in-time recovery \(PITR\). However, the restoration may make the entire database unavailable, and some table operations that users do not want to undo will also be undone. openGauss supports TIMECAPSULE and RECYCLEBIN. You can perform a flashback query or flash back a table based on timestamps to restore the data that is deleted or updated by mistake. By flashing back truncated or dropped table objects from RECYCLEBIN, you can restore table data to the state before the mistaken operation, which greatly improves the reliability of user data.

-   Good maintainability

    Supports multiple maintenance methods, such as workload analysis report \(WDR\), slow SQL diagnosis, and session diagnosis, to accurately and quickly locate faults.  It also provides the AI4DB capability and uses AI algorithms to implement database self-tuning, self-monitoring, and self-diagnosis.


