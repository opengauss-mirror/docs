# MOT Configuration Settings<a name="EN-US_TOPIC_0270171581"></a>

MOT is provided preconfigured to creating working MOT Tables. For best results, it is recommended to customize the MOT configuration \(defined in the file named mot.conf\) according to your application's specific requirements and your preferences.

This file is read-only upon server startup. If you edit this file while the system is running, then the server must be reloaded in order for the changes to take effect.

The mot.conf file is located in the same folder as the postgres.conf configuration file.

In primary/standby deployment mode, mot.conf file should be exactly same in both primary and standby nodes. Otherwise, the system behavior is undefined.

Read the  [General Guidelines](#section14452102715206)  section and then review and configure the following sections of the mot.conf file, as needed.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The topics listed above describe each of the setting sections in the mot.conf file. In addition to the above topics, for an overview of all the aspects of a specific MOT feature \(such as Recovery\), you may refer to the relevant topic of this user manual. For example, the mot.conf file has a Recovery section that contains settings that affect MOT recovery and this is described in the  [MOT Recovery](mot-recovery.md)  section that is listed above. In addition, for a full description of all aspects of Recovery, you may refer to the  [MOT Recovery](mot-recovery.md)  section of the Administration chapter of this user manual. Reference links are also provided in each relevant section of the descriptions below.

The following topics describe each section in the mot.conf file and the settings that it contains, as well as the default value of each.

## General Guidelines<a name="section14452102715206"></a>

The following are general guidelines for editing the mot.conf file.

-   Each setting appears with its default value as follows –

    ```
    # name = value
    ```

-   Blank/white space is acceptable.
-   Comments are indicated by placing a number sign \(\#\) anywhere on a line.
-   The default values of each setting appear as a comment throughout this file.
-   In case a parameter is uncommented and a new value is placed, the new setting is defined.
-   Changes to the mot.conf file are applied only at the start or reload of the database server.

Memory Units are represented as follows –

-   KB – Kilobytes
-   MB – Megabytes
-   GB – Gigabytes
-   TB – Terabytes

If no memory units are specified, then bytes are assumed.

Some memory units are represented as a percentage of the  **max\_process\_memory**  setting that is configured in  **postgresql.conf**. For example –  **20%**.

Time units are represented as follows –

-   us – microseconds \(or micros\)
-   ms – milliseconds \(or millis\)
-   s – seconds \(or secs\)
-   min – minutes \(or mins\)
-   h – hours
-   d – days

If no time units are specified, then microseconds are assumed.

## REDO LOG \(MOT\)<a name="section361563811235"></a>

-   **enable\_group\_commit = false**

    Specifies whether to use group commit.

    This option is only relevant when openGauss is configured to use synchronous commit, meaning only when the synchronous\_commit setting in postgresql.conf is configured to any value other than off.

-   **group\_commit\_size = 16**
-   **group\_commit\_timeout = 10 ms**

    This option is only relevant when the MOT engine has been configured to  **Synchronous Group Commit**  logging. This means that the synchronous\_commit setting in postgresql.conf is configured to True and the enable\_group\_commit parameter in the mot.conf configuration file is configured to True.

    Defines which of the following determines when a group of transactions is recorded in the WAL Redo Log –

    **group\_commit\_size**  –  The quantity of committed transactions in a group. For example,  **16**  means that when 16 transactions in the same group have been committed by their client application, then an entry is written to disk in the WAL Redo Log for each of the 16 transactions.

    **group\_commit\_timeout**  –  A timeout period in ms. For example,  **10**  means that after 10 ms, an entry is written to disk in the WAL Redo Log for each of the transactions in the same group that have been committed by their client application in the lats 10 ms.

    A commit group is closed after either the configured number of transactions has arrived or after the configured timeout period since the group was opened. After the group is closed, all the transactions in the group wait for a group flush to complete execution and then notify the client that each transaction has ended.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    You may refer to  [MOT Logging – WAL Redo Log](mot-durability.md#section129831140121218)  section for more information about the WAL Redo Log and synchronous group commit logging.


## CHECKPOINT \(MOT\)<a name="section8719101152712"></a>

-   **checkpoint\_dir =**

    Specifies the directory in which checkpoint data is to be stored. The default location is in the data folder of each data node.


-   **checkpoint\_segsize = 16 MB**

    Specifies the segment size used during checkpoint. Checkpoint is performed in segments. When a segment is full, it is serialized to disk and a new segment is opened for the subsequent checkpoint data.


-   **checkpoint\_workers = 3**

    Specifies the number of workers to use during checkpoint.

    Checkpoint is performed in parallel by several MOT engine workers. The quantity of workers may substantially affect the overall performance of the entire checkpoint operation, as well as the operation of other running transactions. To achieve a shorter checkpoint duration, a larger number of workers should be used, up to the optimal number \(which varies based on the hardware and workload\). However, be aware that if this number is too large, it may negatively impact the execution time of other running transactions. Keep this number as low as possible to minimize the effect on the runtime of other running transactions, but at the cost of longer checkpoint duration.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You may refer to the  [MOT Checkpoints](mot-durability.md#section182761535131617)  section for more information about configuration settings.


## RECOVERY \(MOT\)<a name="section7442447103115"></a>

-   **checkpoint\_recovery\_workers = 3**

    Specifies the number of workers \(threads\) to use during checkpoint data recovery. Each MOT engine worker runs on its own core and can process a different table in parallel by reading it into memory. For example, while the default is three-course, you might prefer to set this parameter to the number of cores that are available for processing. After recovery these threads are stopped and killed.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You may refer to the  [MOT Recovery](mot-recovery.md)  section for more information about configuration settings.

-   **parallel\_recovery\_workers = 5**
    Specifies the number of workers to use during redo recovery/replay.

-   **parallel\_recovery\_queue\_size = 512**
    Specifies the size of the queue used during recovery to hold redo log segments. This parameter also limits the maximum number of transactions that can be active (in progress) during parallel recovery. If this limit is reached, redo replay will wait for some of the transactions to commit before processing the redo log for new transactions.

## STATISTICS \(MOT\)<a name="section659861612477"></a>

-   **enable\_stats = false**

    Configures periodic statistics for printing.


-   **print\_stats\_period = 10 minute**

    Configures the time period for printing a summary statistics report.


-   **print\_full\_stats\_period = 1 hours**

    Configures the time period for printing a full statistics report.

    The following settings configure the various sections included in the periodic statistics report. If none of them are configured, then the statistics report is suppressed.


-   **enable\_log\_recovery\_stats = false**

    Log recovery statistics contain various Redo Log recovery metrics.


-   **enable\_db\_session\_stats = false**

    Database session statistics contain transaction events, such commits, rollbacks and so on.


-   **enable\_network\_stats = false**

    Network statistics contain connection/disconnection events.


-   **enable\_log\_stats = false**

    Log statistics contain details regarding the Redo Log.


-   **enable\_memory\_stats = false**

    Memory statistics contain memory-layer details.


-   **enable\_process\_stats = false**

    Process statistics contain total memory and CPU consumption for the current process.


-   **enable\_system\_stats = false**

    System statistics contain total memory and CPU consumption for the entire system.


-   **enable\_jit\_stats = false**

    JIT statistics contain information regarding JIT query compilation and execution.


## ERROR LOG \(MOT\)<a name="section17071540194810"></a>

-   **log\_level = INFO**

    Configures the log level of messages issued by the MOT engine and recorded in the Error log of the database server. Valid values are PANIC, ERROR, WARN, INFO, TRACE, DEBUG, DIAG1 and DIAG2.

-   **Log.COMPONENT.LOGGER.log\_level=LOG\_LEVEL**

    Configures specific loggers using the syntax described below.

    For example, to configure the TRACE log level for the ThreadIdPool logger in system component, use the following syntax –

    ```
    Log.System.ThreadIdPool.log_level=TRACE
    ```

    To configure the log level for all loggers under some component, use the following syntax –

    ```
    Log.COMPONENT.log_level=LOG_LEVEL
    ```

    For example –

    ```
    Log.System.log_level=DEBUG
    ```


## MEMORY \(MOT\)<a name="section1223551495"></a>

-   **enable\_numa = true**

    Specifies whether to use NUMA-aware memory allocation.

    When disabled, all affinity configurations are disabled as well.

    MOT engine assumes that all the available NUMA nodes have memory. If the machine has some special configuration in which some of the NUMA nodes have no memory, then the MOT engine initialization and hence the database server startup will fail. In such machines, it is recommended that this configuration value be set to false, in order to prevent startup failures and let the MOT engine to function normally without using NUMA-aware memory allocation.


-   **affinity\_mode = equal-per-socket**

    Configures the affinity mode of threads for the user session and internal MOT tasks.

    When a thread pool is used, this value is ignored for user sessions, as their affinity is governed by the thread pool. However, it is still used for internal MOT tasks.

    Valid values are  **fill-socket-first**,  **equal-per-socket**,  **fill-physical-first**  and  **none**  –

    -   **Fill-socket-first**  attaches threads to cores in the same socket until the socket is full and then moves to the next socket.
    -   **Equal-per-socket**  spreads threads evenly among all sockets.
    -   **Fill-physical-first**  attaches threads to physical cores in the same socket until all physical cores are employed and then moves to the next socket. When all physical cores are used, then the process begins again with hyper-threaded cores.
    -   **None**  disables any affinity configuration and lets the system scheduler determine on which core each thread is scheduled to run.

-   **lazy\_load\_chunk\_directory = true**

    Configures the chunk directory mode that is used for memory chunk lookup.

    **Lazy**  mode configures the chunk directory to load parts of it on demand, thus reducing the initial memory footprint \(from 1 GB to 1 MB approximately\). However, this may result in minor performance penalties and errors in extreme conditions of memory distress. In contrast, using a  **non-lazy**  chunk directory allocates an additional 1 GB of initial memory, produces slightly higher performance and ensures that chunk directory errors are avoided during memory distress.

-   **reserve\_memory\_mode = virtual**

    Configures the memory reservation mode \(either  **physical**  or  **virtual**\).

    Whenever memory is allocated from the kernel, this configuration value is consulted to determine whether the allocated memory is to be resident \(**physical**\) or not \(**virtual**\). This relates primarily to preallocation, but may also affect runtime allocations. For  **physical**  reservation mode, the entire allocated memory region is made resident by forcing page faults on all pages spanned by the memory region. Configuring  **virtual**  memory reservation may result in faster memory allocation \(particularly during preallocation\), but may result in page faults during the initial access \(and thus may result in a slight performance hit\) and more sever errors when physical memory is unavailable. In contrast, physical memory allocation is slower, but later access is both faster and guaranteed.

-   **store\_memory\_policy = compact**

    Configures the memory storage policy \(**compact**  or  **expanding**\).

    When  **compact**  policy is defined, unused memory is released back to the kernel, until the lower memory limit is reached \(see  **min\_mot\_memory**  below\). In  **expanding**  policy, unused memory is stored in the MOT engine for later reuse. A  **compact**  storage policy reduces the memory footprint of the MOT engine, but may occasionally result in minor performance degradation. In addition, it may result in unavailable memory during memory distress. In contrast,  **expanding**  mode uses more memory, but results in faster memory allocation and provides a greater guarantee that memory can be re-allocated after being de-allocated.

-   **chunk\_alloc\_policy = auto**

    Configures the chunk allocation policy for global memory.

    MOT memory is organized in chunks of 2 MB each. The source NUMA node and the memory layout of each chunk affect the spread of table data among NUMA nodes, and therefore can significantly affect the data access time. When allocating a chunk on a specific NUMA node, the allocation policy is consulted.

    Available values are  **auto**,  **local**,  **page-interleaved**,  **chunk-interleaved**  and  **native**  –

    -   **Auto**  policy selects a chunk allocation policy based on the current hardware.
    -   **Local**  policy allocates each chunk on its respective NUMA node.
    -   **Page-interleaved**  policy allocates chunks that are composed of interleaved memory 4‑kilobyte pages from all NUMA nodes.
    -   **Chunk-interleaved**  policy allocates chunks in a round robin fashion from all NUMA nodes.
    -   **Native**  policy allocates chunks by calling the native system memory allocator.

-   **chunk\_prealloc\_worker\_count = 8**

    Configures the number of workers per NUMA node participating in memory preallocation.

-   **max\_mot\_global\_memory = 80%**

    Configures the maximum memory limit for the global memory of the MOT engine.

    Specifying a percentage value relates to the total defined by  **max\_process\_memory**  configured in  **postgresql.conf**.

    The MOT engine memory is divided into global \(long-term\) memory that is mainly used to store user data and local \(short-term\) memory that is mainly used by user sessions for local needs.

    Any attempt to allocate memory beyond this limit is denied and an error is reported to the user. Ensure that the sum of  **max\_mot\_global\_memory**  and  **max\_mot\_local\_memory**  do not exceed the  **max\_process\_memory**  configured in  **postgresql.conf**.

-   **min\_mot\_global\_memory = 0 MB**

    Configures the minimum memory limit for the global memory of the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    This value is used for the preallocation of memory during startup, as well as to ensure that a minimum amount of memory is available for the MOT engine during its normal operation. When using  **compact**  storage policy \(see  **store\_memory\_policy**  above\), this value designates the lower limit under which memory is not released back to the kernel, but rather kept in the MOT engine for later reuse.

-   **max\_mot\_local\_memory = 15%**

    Configures the maximum memory limit for the local memory of the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    MOT engine memory is divided into global \(long-term\) memory that is mainly used to store user data and local \(short-term\) memory that is mainly used by user session for local needs.

    Any attempt to allocate memory beyond this limit is denied and an error is reported to the user. Ensure that the sum of  **max\_mot\_global\_memory**  and  **max\_mot\_local\_memory**  do not exceed the  **max\_process\_memory**  configured in  **postgresql.conf**.

-   **min\_mot\_local\_memory = 0 MB**

    Configures the minimum memory limit for the local memory of the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    This value is used for preallocation of memory during startup, as well as to ensure that a minimum amount of memory is available for the MOT engine during its normal operation. When using compact storage policy \(see  **store\_memory\_policy**  above\), this value designates the lower limit under which memory is not released back to the kernel, but rather kept in the MOT engine for later reuse.

-   **max\_mot\_session\_memory = 0 MB**

    Configures the maximum memory limit for a single session in the MOT engine.

    Typically, sessions in the MOT engine can allocate as much local memory as needed, so long as the local memory limit is not exceeded. To prevent a single session from taking too much memory, and thereby denying memory from other sessions, this configuration item is used to restrict small session-local memory allocations \(up to 1,022 KB\).

    Make sure that this configuration item does not affect large or huge session-local memory allocations.

    A value of zero denotes no restriction on any session-local small allocations per session, except for the restriction arising from the local memory allocation limit configured by  **max\_mot\_local\_memory**.

    Note: Percentage values cannot be set for this configuration item.


-   **min\_mot\_session\_memory = 0 MB**

    Configures the minimum memory reservation for a single session in the MOT engine.

    This value is used to preallocate memory during session creation, as well as to ensure that a minimum amount of memory is available for the session to perform its normal operation.

    Note: Percentage values cannot be set for this configuration item.


-   **session\_large\_buffer\_store\_size = 0 MB**

    Configures the large buffer store for sessions.

    When a user session executes a query that requires a lot of memory \(for example, when using many rows\), the large buffer store is used to increase the certainty level that such memory is available and to serve this memory request more quickly. Any memory allocation for a session exceeding 1,022 KB is considered as a large memory allocation. If the large buffer store is not used or is depleted, such allocations are treated as huge allocations that are served directly from the kernel.

    Note: Percentage values cannot be set for this configuration item.


-   **session\_large\_buffer\_store\_max\_object\_size = 0 MB**

    Configures the maximum object size in the large allocation buffer store for sessions.

    Internally, the large buffer store is divided into objects of varying sizes. This value is used to set an upper limit on objects originating from the large buffer store, as well as to determine the internal division of the buffer store into objects of various size.

    This size cannot exceed 1/8 of the  **session\_large\_buffer\_store\_size**. If it does, it is adjusted to the maximum possible.

    Note: Percentage values cannot be set for this configuration item.


-   **session\_max\_huge\_object\_size = 1 GB**

    Configures the maximum size of a single huge memory allocation made by a session.

    Huge allocations are served directly from the kernel and therefore are not guaranteed to succeed.

    This value also pertains to global \(meaning not session-related\) memory allocations.

    Note: Percentage values cannot be set for this configuration item.


## GARBAGE COLLECTION \(MOT\)<a name="section82711330317"></a>

-   **reclaim\_threshold = 512 KB**

    Configures the memory threshold for the garbage collector.

    Each session manages its own list of to-be-reclaimed objects and performs its own garbage collection during transaction commitment. This value determines the total memory threshold of objects waiting to be reclaimed, above which garbage collection is triggered for a session.

    In general, the trade-off here is between un-reclaimed objects vs garbage collection frequency. Setting a low value keeps low levels of un-reclaimed memory, but causes frequent garbage collection that may affect performance. Setting a high value triggers garbage collection less frequently, but results in higher levels of un-reclaimed memory. This setting is dependent upon the overall workload.

-   **reclaim\_batch\_size = 8000**

    Configures the batch size for garbage collection.

    The garbage collector reclaims memory from objects in batches, in order to restrict the number of objects being reclaimed in a single garbage collection pass. The intent of this approach is to minimize the operation time of a single garbage collection pass.


-   **high\_reclaim\_threshold = 8 MB**

    Configures the high memory threshold for garbage collection.

    Because garbage collection works in batches, it is possible that a session may have many objects that can be reclaimed, but which were not. In such situations, in order to prevent garbage collection lists from becoming too bloated, this value is used to continue reclaiming objects within a single pass, even though that batch size limit has been reached, until the total size of the still-waiting-to-be-reclaimed objects is less than this threshold, or there are no more objects eligible for reclamation.


## JIT \(MOT\)<a name="section179836383210"></a>

-   **enable\_mot\_codegen = false**

    Specifies whether to use JIT query compilation and execution for planned queries.

    JIT query execution enables JIT-compiled code to be prepared for a prepared query during its planning phase. The resulting JIT-compiled function is executed whenever the prepared query is invoked. JIT compilation usually takes place in the form of LLVM.

-   **enable\_mot\_codegen\_print = false**

    Specifies whether to print emitted LLVM code for JIT-compiled queries.

-   **mot\_codegen\_limit = 50000**

    Limits the number of JIT queries allowed per user session.

-   **enable_mot_query_codegen = true**

    Specifies whether to use JIT query compilation and execution for planned queries. JIT query execution allows preparing Just-In-Time compiled code for a prepared query during its planning phase. The resulting JIT-compiled function is executed whenever the prepared query is invoked. JIT compilation takes place in the form of LLVM.

-   **enable_mot_sp_codegen = true**

    Specifies whether to use JIT query compilation and execution for stored procedures. JIT query execution allows preparing Just-In-Time compiled code for a stored procedure during its compilation phase. The resulting JIT-compiled function is executed whenever the stored procedure is invoked.

-   **enable_mot_codegen_profile = true**

    Specifies whether to use JIT profiling. When using this option, the mot_jit_profile() function can be used to obtain run-time profile data for jitted stored procedures and queries.


## Default mot.conf<a name="section1973591616715"></a>

The minimum settings and configuration specify to point the  **postgresql.conf**  file to the location of the  **mot.conf**  file –

```
postgresql.conf 
mot_config_file = '/tmp/gauss/mot.conf'
```

Ensure that the value of the max\_process\_memory setting is sufficient to include the global \(data and index\) and local \(sessions\) memory of MOT tables.

The default content of  **mot.conf**  is sufficient to get started. The settings can be optimized later.

