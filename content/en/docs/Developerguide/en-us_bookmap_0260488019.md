# openGauss MOT Engine User Manual - 3

-   [Introducing MOT](introducing-mot.md)
    -   [MOT Introduction](mot-introduction.md)
    -   [Features and Benefits](features-and-benefits.md)
    -   [MOT Key Technologies](mot-key-technologies.md)
    -   [Usage Scenarios](usage-scenarios.md)
    -   [Performance Benchmarks](performance-benchmarks.md)
        -   [Hardware](hardware.md)
        -   [Results – Summary](results-summary.md)
        -   [High Throughput](high-throughput.md)
            -   [ARM/Kunpeng 2-Socket 128 Cores](arm-kunpeng-2-socket-128-cores.md)
            -   [ARM/Kunpeng 4-Socket 256 Cores](arm-kunpeng-4-socket-256-cores.md)
            -   [x86-based servers](x86-based-servers.md)

        -   [Low Latency](low-latency.md)
        -   [Recovery / Cold-Start Time](recovery-cold-start-time.md)
        -   [Resource Utilization](resource-utilization.md)
        -   [Data Ingestion Speed](data-ingestion-speed.md)


-   [Using MOT](using-mot.md)
    -   [Overview](overview.md)
    -   [Preparation](preparation.md)
        -   [Prerequisites](prerequisites.md)
        -   [Memory and Storage Planning](memory-and-storage-planning.md)
            -   [Memory Planning](memory-planning.md)
            -   [Storage IO](storage-io.md)


    -   [Deployment](deployment.md)
        -   [Server Optimization – x86](server-optimization-x86.md)
        -   [Server Optimization – ARM Huawei Taishan 2P/4P](server-optimization-arm-huawei-taishan-2p-4p.md)
        -   [MOT Configuration Settings](mot-configuration-settings.md)
            -   [General Guidelines](general-guidelines.md)
            -   [REDO LOG \(MOT\)](redo-log-(mot).md)
            -   [CHECKPOINT \(MOT\)](checkpoint-(mot).md)
            -   [RECOVERY \(MOT\)](recovery-(mot).md)
            -   [STATISTICS \(MOT\)](statistics-(mot).md)
            -   [ERROR LOG \(MOT\)](error-log-(mot).md)
            -   [MEMORY \(MOT\)](memory-(mot).md)
            -   [GARBAGE COLLECTION \(MOT\)](garbage-collection-(mot).md)
            -   [JIT \(MOT\)](jit-(mot).md)
            -   [STORAGE \(MOT\)](storage-(mot).md)
            -   [Default MOT.conf](default-mot-conf.md)


    -   [Usage](usage.md)
        -   [Workflow Overview](workflow-overview.md)
        -   [Granting User Permissions](granting-user-permissions.md)
        -   [Creating/Dropping a MOT Table](creating-dropping-a-mot-table.md)
        -   [Creating an Index for MOT Table](creating-an-index-for-mot-table.md)
        -   [Converting a Disk Table into a MOT Table](converting-a-disk-table-into-a-mot-table.md)
            -   [Prerequisite Check](prerequisite-check.md)
            -   [Converting](converting.md)
            -   [Conversion Example](conversion-example.md)
            -   [Query Native Compilation](query-native-compilation.md)

        -   [Retrying an Aborted Transaction](retrying-an-aborted-transaction.md)
        -   [External Support Tools](external-support-tools.md)
            -   [gs\_ctl \(Full and Incremental\)](gs_ctl-(full-and-incremental).md)
            -   [gs\_basebackup](gs_basebackup.md)
            -   [gs\_dump](gs_dump.md)
            -   [gs\_restore](gs_restore.md)

        -   [SQL Coverage and Limitations](sql-coverage-and-limitations.md)
            -   [Unsupported Features](unsupported-features.md)
            -   [MOT Table Limitations](mot-table-limitations.md)
            -   [Unsupported Table DDLs](unsupported-table-ddls.md)
            -   [Unsupported Data Types](unsupported-data-types.md)
            -   [Unsupported Index DDLs and Index](unsupported-index-ddls-and-index.md)
            -   [Unsupported DMLs](unsupported-dmls.md)
            -   [Unsupported Queries for Native Compilation and Lite Execution](unsupported-queries-for-native-compilation-and-lite-execution.md)


    -   [Administration](administration.md)
    -   [Durability](durability.md)
        -   [Configuring Durability](configuring-durability.md)
        -   [Logging – WAL Redo Log](logging-wal-redo-log.md)
            -   [Logging Types](logging-types.md)
            -   [Configuring Logging](configuring-logging.md)

        -   [Checkpoints](checkpoints.md)
        -   [Recovery](recovery.md)
        -   [Replication and High Availability](replication-and-high-availability.md)
        -   [Memory Management](memory-management.md)
        -   [Vacuum](vacuum.md)
        -   [Statistics](statistics.md)
        -   [Monitoring](monitoring.md)
        -   [Error Messages](error-messages.md)
            -   [Errors Written the Log File](errors-written-the-log-file.md)
            -   [Errors Returned to the User](errors-returned-to-the-user.md)


    -   [Sample Workloads](sample-workloads.md)
        -   [TPC-C Benchmark](tpc-c-benchmark.md)
            -   [TPC-C Introduction](tpc-c-introduction.md)
            -   [System-Level Optimization](system-level-optimization.md)
            -   [BenchmarkSQL – An Open-Source TPC-C Tool](benchmarksql-an-open-source-tpc-c-tool.md)
            -   [Results Report](results-report.md)



-   [Concepts of MOT](concepts-of-mot.md)
    -   [Scale-up Architecture](scale-up-architecture.md)
        -   [Technical Requirements](technical-requirements.md)
        -   [Design Principles](design-principles.md)
        -   [Integration using Foreign Data Wrappers \(FDW\)](integration-using-foreign-data-wrappers-(fdw).md)
        -   [Result – Linear Scale-up](result-linear-scale-up.md)

    -   [Concurrency Control Mechanism](concurrency-control-mechanism.md)
        -   [Local and Global MOT Memory](local-and-global-mot-memory.md)
        -   [SILO Enhancements for MOT](silo-enhancements-for-mot.md)
        -   [Isolation Levels](isolation-levels.md)
        -   [Optimistic Concurrency Control](optimistic-concurrency-control.md)
            -   [Optimistic OCC vs. Pessimistic 2PL](optimistic-occ-vs-pessimistic-2pl.md)

        -   [OCC vs 2PL Differences by Example](occ-vs-2pl-differences-by-example.md)
            -   [Pessimistic Approach – Used in Disk-based Tables](pessimistic-approach-used-in-disk-based-tables.md)
            -   [Optimistic Approach – Used in MOT](optimistic-approach-used-in-mot.md)


    -   [Extended FDW and Other openGauss Features](extended-fdw-and-other-opengauss-features.md)
    -   [NUMA Awareness Allocation and Affinity](numa-awareness-allocation-and-affinity.md)
    -   [Indexes](indexes.md)
        -   [Secondary Index Support](secondary-index-support.md)
        -   [Non-unique Indexes](non-unique-indexes.md)

    -   [Durability](durability-0.md)
        -   [Exception Handling](exception-handling.md)
        -   [Logging](logging.md)
            -   [Overall Architecture](overall-architecture.md)

        -   [Checkpoint](checkpoint.md)
            -   [CALC Checkpoint algorithm: low overhead in memory and compute](calc-checkpoint-algorithm-low-overhead-in-memory-and-compute.md)
            -   [Checkpoint Activation](checkpoint-activation.md)


    -   [Recovery](recovery-1.md)
    -   [Query Native Compilation \(JIT\)](query-native-compilation-(jit).md)
    -   [Comparison – Disk vs. MOT](comparison-disk-vs-mot.md)


