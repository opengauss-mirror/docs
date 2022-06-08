# MOT Configuration Settings<a name="EN-US_TOPIC_0289899989"></a>

MOT is provided preconfigured to creating working MOT Tables. For the optimal results, it is advised to customize the MOT configuration \(defined in the file named  **mot.conf**\) according to your application's specific requirements and your preferences.

This file is read-only upon server startup. If you edit this file while the system is running, then the server must be reloaded in order for the changes to take effect.

The  **mot.conf**  file and the  **postgres.conf**  file are in the same folder.

In primary/standby deployment mode, the  **mot.conf**  files on the primary and standby nodes must be the same. Otherwise, the system behavior is unclear.

Read the  [General Guidelines](#en-us_topic_0283136588_en-us_topic_0280525130_section14452102715206)  section and then review and configure the following sections of the  **mot.conf**  file, as needed.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The topics listed above describe each of the setting sections in the  **mot.conf**  file. In addition to the above topics, for an overview of all the aspects of a specific MOT feature \(such as Recovery\), you may refer to the relevant topic of this user manual. For example, the  **mot.conf**  file has a Recovery section that contains settings that affect MOT recovery and this is described in the  [MOT Recovery](mot-recovery.md)  section that is listed above. Also, for a complete description of recovery, see  [MOT Recovery](mot-recovery.md). Reference links are also provided in each relevant section of the descriptions below.

The following topics describe each section in the  **mot.conf **file and the settings that it contains, as well as the default value of each.

## General Guidelines<a name="en-us_topic_0283136588_en-us_topic_0280525130_section14452102715206"></a>

The following are general guidelines for editing the  **mot.conf**  file.

-   Each setting appears with its default value as follows:

    ```
    # name = value
    ```

-   Blank/white space is acceptable.
-   Comments are indicated by placing a number sign \(\#\) anywhere on a line.
-   The default values of each setting appear as a comment throughout this file.
-   In case a parameter is uncommented and a new value is placed, the new setting is defined.
-   Changes to the  **mot.conf**  file are applied only at the start or reload of the database server.

Memory Units are represented as follows:

-   KB: Kilobytes
-   MB: Megabytes
-   GB: Gigabytes
-   TB: Terabytes

Some memory units are represented as a percentage of the  **max\_process\_memory**  setting that is configured in  **postgresql.conf**. For example:  **20%**.

Time units are represented as follows:

-   us: microsecond
-   ms: millisecond
-   s: second
-   min: minute
-   h: hour
-   d: day

## Redo Log \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section361563811235"></a>

-   **enable\_redo\_log = true**

    Specifies whether to use the Redo Log for durability. See  [MOT Logging – WAL Redo Log](mot-durability.md#en-us_topic_0283136668_en-us_topic_0280525142_section129831140121218)  for more information about redo logs.

-   **enable\_group\_commit = false**

    Specifies whether to use group commit.

    This option is only relevant when openGauss is configured to use synchronous commit, meaning only when the synchronization\_commit setting in  **postgresql.conf**  is configured to any value other than off.

    You may refer to  [MOT Logging – WAL Redo Log](mot-durability.md#en-us_topic_0283136668_en-us_topic_0280525142_section129831140121218)  for more information about the WAL Redo Log.

-   **group\_commit\_size = 16**
-   **group\_commit\_timeout = 10 ms**

    This option is only relevant when the MOT engine has been configured to  **Synchronous Group Commit**  logging. This means that the synchronization\_commit setting in  **postgresql.conf**  is configured to True and the enable\_group\_commit parameter in the  **mot.conf**  configuration file is configured to True.

    Defines which of the following determines when a group of transactions is recorded in the WAL Redo Log:

    group\_commit\_size: The quantity of committed transactions in a group. For example,  **16**  means that when 16 transactions in the same group have been committed by their client application, then an entry is written to disk in the WAL Redo Log for each of the 16 transactions.

    group\_commit\_timeout: A timeout period in ms. For example,  **10**  means that after 10 ms, an entry is written to disk in the WAL Redo Log for each of the transactions in the same group that have been committed by their client application in the lats 10 ms.

    A commit group is closed after either the configured number of transactions has arrived or after the configured timeout period since the group was opened. After the group is closed, all the transactions in the group wait for a group flush to complete execution and then notify the client that each transaction has ended.

    You may refer to the  [MOT Logging Types](mot-durability.md#en-us_topic_0283136668_en-us_topic_0280525142_section125771537134)  section for more information about synchronous group commit logging.


## Checkpoint \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section8719101152712"></a>

-   **enable\_checkpoint = true**

    Specifies whether to use periodic checkpoint.

-   **checkpoint\_dir =**

    Specifies the directory in which checkpoint data is to be stored. The default location is in the data folder of each data node.

-   **checkpoint\_segsize = 16 MB**

    Specifies the segment size used during checkpoint. Checkpoint is performed in segments. When a segment is full, it is serialized to disk and a new segment is opened for the subsequent checkpoint data.

-   **checkpoint\_workers = 3**

    Specifies the number of workers to use during checkpoint.

    Checkpoint is performed in parallel by several MOT engine workers. The quantity of workers may substantially affect the overall performance of the entire checkpoint operation, as well as the operation of other running transactions. To achieve a shorter checkpoint duration, a larger number of workers should be used, up to the optimal number \(which varies based on the hardware and workload\). However, be aware that if this number is too large, it may negatively impact the execution time of other running transactions. Keep this number as low as possible to minimize the effect on the runtime of other running transactions. When this number is too high, longer checkpoint durations occur.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>You may refer to  [MOT Checkpoints](mot-durability.md#en-us_topic_0283136668_en-us_topic_0280525142_section182761535131617)  for more information about configuration settings.

## Recovery \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section7442447103115"></a>

-   **checkpoint\_recovery\_workers = 3**

    Specifies the number of workers \(threads\) to use during checkpoint data recovery. Each MOT engine worker runs on its own core and can process a different table in parallel by reading it into memory. For example, while the default is three-course, you might prefer to set this parameter to them number of cores that are available for processing. After recovery, these threads are stopped and killed.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>You may refer to  [MOT Recovery](mot-recovery.md)  for more information about configuration settings.

## Statistics \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section659861612477"></a>

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


## Error Log \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section28451692"></a>

-   **log\_level = INFO**

    Configures the log level of messages issued by the MOT engine and recorded in the Error log of the database server. Valid values are PANIC, ERROR, WARN, INFO, TRACE, DEBUG, DIAG1 and DIAG2.

-   **Log/COMPONENT/LOGGER=LOG\_LEVEL**

    Configures specific loggers using the syntax described below.

    For example, to configure the TRACE log level for the ThreadIdPool logger in system component, use the following syntax:

    ```
    Log/System/ThreadIdPool=TRACE
    ```

    To configure the log level for all loggers under some component, use the following syntax:

    ```
    Log/COMPONENT=LOG_LEVEL
    ```

    For example:

    ```
    Log/System=DEBUG
    ```


## Memory \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section1223551495"></a>

-   **enable\_numa = true**

    Specifies whether to use the memory that can identify NUMA.

    When this parameter is disabled, all affinity configurations are disabled. The MOT engine assumes that all available NUMA nodes have memory. If the computer has some special configuration and some NUMA nodes do not have memory, the MOT engine initialization will fail and the database server will fail to start. On such computers, it is recommended that this parameter be set to  **false **to prevent startup failures and ensure that the MOT engine runs properly without using the memory that can identify NUMA.

-   **affinity\_mode = fill-physical-first**

    Configures the affinity mode of threads for the user session and internal MOT tasks.

    When a thread pool is used, this value is ignored for user sessions, as their affinity is governed by the thread pool. However, it is still used for internal MOT tasks.

    Valid values are  **fill-socket-first**,  **equal-per-socket**,  **fill-physical-first**  and  **none**.

    -   **Fill-socket-first**  attaches threads to cores in the same socket until the socket is full and then moves to the next socket.
    -   **Equal-per-socket**  spreads threads evenly among all sockets.
    -   **Fill-physical-first**  attaches threads to physical cores in the same socket until all physical cores are employed and then moves to the next socket. When all physical cores are used, then the process begins again with hyper-threaded cores.
    -   **None**  disables any affinity configuration and lets the system scheduler determine on which core each thread is scheduled to run.

-   **lazy\_load\_chunk\_directory = true**

    Configures the chunk directory mode that is used for memory chunk lookup.

    **Lazy**  mode configures the chunk directory to load parts of it on demand, thus reducing the initial memory footprint \(from 1 GB to 1 MB approximately\). However, this may result in minor performance penalties and errors in extreme conditions of memory distress. In contrast, using a  **non-lazy**  chunk directory allocates an additional 1 GB of initial memory, produces slightly higher performance and ensures that chunk directory errors are avoided during memory distress.

-   **reserve\_memory\_mode = virtual**

    Configures the memory reservation mode \(either  **physical**  or  **virtual**\).

    Whenever memory is allocated from the kernel, this configuration value is consulted to determine whether the allocated memory is to be resident \(**physical**\) or not \(**virtual**\). This relates primarily to preallocation, but may also affect runtime allocations. For  **physical**  reservation mode, the entire allocated memory region is made resident by forcing page faults on all pages spanned by the memory region. Configuring  **virtual**  memory reservation may result in faster memory allocation \(particularly during preallocation\), but may result in page faults during the initial access \(and thus may result in a slight performance hit\) and more server errors when physical memory is unavailable. In contrast, physical memory allocation is slower, but later access is both faster and guaranteed.

-   **store\_memory\_policy = compact**

    Configures the memory storage policy \(**compact**  or  **expanding**\).

    When  **compact**  policy is defined, unused memory is released back to the kernel, until the lower memory limit is reached \(see  **min\_mot\_memory**  below\). In  **expanding**  policy, unused memory is stored in the MOT engine for later reuse. A  **compact**  storage policy reduces the memory footprint of the MOT engine, but may occasionally result in minor performance degradation. In addition, it may result in unavailable memory during memory distress. In contrast,  **expanding**  mode uses more memory, but results in faster memory allocation and provides a greater guarantee that memory can be re-allocated after being de-allocated.

-   **chunk\_alloc\_policy = auto**

    Configures the chunk allocation policy for global memory.

    MOT memory is organized in chunks of 2 MB each. The source NUMA node and the memory layout of each chunk affect the spread of table data among NUMA nodes, and therefore can significantly affect the data access time. When allocating a chunk on a specific NUMA node, the allocation policy is consulted.

    Available values are  **auto**,  **local**,  **page-interleaved**,  **chunk-interleaved**  and  **native**.

    -   **Auto**  policy selects a chunk allocation policy based on the current hardware.
    -   **Local**  policy allocates each chunk on its respective NUMA node.
    -   **Page-interleaved**  policy allocates chunks that are composed of interleaved memory 4-kilobyte pages from all NUMA nodes.
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

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    Typically, sessions in the MOT engine can allocate as much local memory as needed, so long as the local memory limit is not exceeded. To prevent a single session from taking too much memory, and thereby denying memory from other sessions, this configuration item is used to restrict small session-local memory allocations \(up to 1022 KB\).

    Make sure that this configuration item does not affect large or huge session-local memory allocations.

    A value of zero denotes no restriction on any session-local small allocations per session, except for the restriction arising from the local memory allocation limit configured by  **max\_mot\_local\_memory**.

-   **min\_mot\_session\_memory = 0 MB**

    Configures the minimum memory reservation for a single session in the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    This value is used to preallocate memory during session creation, as well as to ensure that a minimum amount of memory is available for the session to perform its normal operation.

-   **high\_red\_mark\_percent = 90**

    Configures the high red mark for memory allocations.

    This is calculated as a percentage of the maximum for the MOT engine, as configured by  **max\_mot\_memory**. The default is 90, meaning 90%. When total memory usage by MOT reaches this level, only destructive operations are permitted. All other operations report an error to the user.

-   **session\_large\_buffer\_store\_size = 0 MB**

    Configures the large buffer store for sessions.

    When a user session executes a query that requires a lot of memory \(for example, when using many rows\), the large buffer store is used to increase the certainty level that such memory is available and to serve this memory request more quickly. Any memory allocation for a session exceeding 1022 KB is considered as a large memory allocation. If the large buffer store is not used or is depleted, such allocations are treated as huge allocations that are served directly from the kernel.

-   **session\_large\_buffer\_store\_max\_object\_size = 0 MB**

    Configures the maximum object size in the large allocation buffer store for sessions.

    Internally, the large buffer store is divided into objects of varying sizes. This value is used to set an upper limit on objects originating from the large buffer store, as well as to determine the internal division of the buffer store into objects of various sizes.

    This size cannot exceed 1/8 of the  **session\_large\_buffer\_store\_size**. If it does, it is adjusted to the maximum possible value.

-   **session\_max\_huge\_object\_size = 1 GB**

    Configures the maximum size of a single huge memory allocation made by a session.

    Huge allocations are served directly from the kernel and therefore are not guaranteed to succeed.

    This value also pertains to global \(meaning not session-related\) memory allocations.


## Garbage Collector \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section22885696"></a>

-   **enable\_gc = true**

    Specifies whether to use the Garbage Collector \(GC\).

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


## JIT \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section4644675"></a>

-   **enable\_mot\_codegen = true**

    Specifies whether to use JIT query compilation and execution for planned queries.

    JIT query execution enables JIT-compiled code to be prepared for a prepared query during its planning phase. The resulting JIT-compiled function is executed whenever the prepared query is invoked. JIT compilation usually takes place in the form of LLVM. On platforms where LLVM is not natively supported, MOT provides a software-based fallback called Tiny Virtual Machine \(TVM\).

-   **force\_mot\_pseudo\_codegen = false**

    Specifies whether to use TVM \(pseudo-LLVM\) even though LLVM is supported on the current platform.

    On platforms where LLVM is not natively supported, MOT automatically defaults to TVM.

    On platforms where LLVM is natively supported, LLVM is used by default. This configuration item enables the use of TVM for JIT compilation and execution on platforms on which LLVM is supported.

-   **enable\_mot\_codegen\_print = false**

    Specifies whether to print emitted LLVM/TVM IR code for JIT-compiled queries.

-   **mot\_codegen\_limit = 100**

    Limits the number of JIT queries allowed per user session.


## Storage \(MOT\)<a name="en-us_topic_0283136588_en-us_topic_0280525130_section16572933681"></a>

**allow\_index\_on\_nullable\_column = true**

Specifies whether it is permitted to define an index over a nullable column.

## Default MOT.conf File<a name="en-us_topic_0283136588_en-us_topic_0280525130_section40674409"></a>

The minimum settings and configuration point the  **Postgresql.conf**  file to the location of the  **MOT.conf**  file:

```
Postgresql.conf  
```

```
mot_config_file = '/tmp/gauss/ MOT.conf'
```

Ensure that the value of the max\_process\_memory setting is sufficient to include the global \(data and index\) and local \(sessions\) memory of MOT tables.

The default content of  **MOT.conf**  is sufficient to get started. The settings can be optimized later.

