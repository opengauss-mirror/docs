# Unsupported Features<a name="EN-US_TOPIC_0257867393"></a>

The following features are not supported by MOT:

-   Engine Interop  **–**  No cross-engine \(Disk+MOT\) queries, views or transactions. Planned for 2021.
-   MVCC, Isolation – No snapshot/serializable isolation. Planned for 2021.
-   Native Compilation – Limited SQL coverage for PREPARED statements.
-   LOCAL memory is limited to 1 GB. A transaction can only change data of less than 1 GB.
-   Capacity \(Data+Index\) is limited to available memory. Anti-caching + Data Tiering will be available in the future.
-   No full-text search index.
-   General limitations \(see below\).

