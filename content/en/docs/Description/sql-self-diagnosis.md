# SQL Self-Diagnosis<a name="EN-US_TOPIC_0241663032"></a>

To locate performance issues of a query, you can use  **EXPLAIN PERFORMANCE**  to query its execution plan. However, this method outputs many logs, requires the modification of service logic, and depends on expertise to locate problems. SQL self-diagnosis enables users to locate performance issues more efficiently.

Before running a job, set the GUC parameters  **resource\_track\_level**  and  **resource\_track\_cost**, and view the related system view and possible performance issues after job execution. The system view describes the possible causes of performance issues. To optimize low-performance jobs, see "Performance Tuning \> SQL Tuning \> Typical SQL Optimization Methods \> Optimizing SQL Self-Diagnosis" in the  _Developer Guide_.

SQL self-diagnosis helps users locate and optimize performance issues without affecting operations or modifying service logic.

