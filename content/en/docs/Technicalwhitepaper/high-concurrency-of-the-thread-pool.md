# High Concurrency of the Thread Pool<a name="EN-US_CONCEPT_0252569369"></a>

In the OLTP field, a database needs to process a large quantity of client connections. Therefore, the processing capability in high-concurrency scenarios is one of the important capabilities of the database.

The simplest processing mode for external connections is the per-thread-per-connection mode, in which a user connection generates a thread. This mode features simple processing thanks to its architecture. However, in high-concurrency scenarios, there are too many threads, causing heavy workload in thread switchover and large conflict between the lightweight lock areas of the database. As a result, the performance \(throughput\) deteriorates sharply and the SLA of user performance cannot be met.

Therefore, a thread resource pooling and reuse technology needs to be used to resolve this problem. The overall design idea of the thread pool technology is to pool thread resources and reuse them among different connections. After the system is started, a fixed number of working threads are started based on the current number of cores or user configuration. A working thread serves one or more connection sessions. In this way, the session and thread are decoupled. The number of worker threads is fixed. Therefore, frequent thread switchover does not occur in case of high concurrency. The database layer schedules and manages sessions.

