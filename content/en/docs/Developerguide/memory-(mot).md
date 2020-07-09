# MEMORY \(MOT\)<a name="EN-US_TOPIC_0260488251"></a>

-   max\_threads = 1024

    Configures the maximum number of threads allowed to run in the MOT engine.

    When not using a thread pool, this value restricts the number of sessions that can interact concurrently with MOT tables. This value does not restrict non-MOT sessions.

    When using a thread pool, this value restricts the number of worker threads that can interact concurrently with MOT tables.

-   max\_connections = 1024

    Configures the maximum number of connections allowed to run in the MOT engine.

    This value restricts the number of sessions that can interact concurrently with MOT tables, regardless of the thread-pool configuration. This value does not restrict non-MOT sessions.

-   affinity\_mode = fill-physical-first

    Configures the affinity mode of threads for the user session and internal MOT tasks.

    When a thread pool is used, this value is ignored for user sessions, as their affinity is governed by the thread pool. However, it is still used for internal MOT tasks.

    Valid values are  **fill-socket-first**,  **equal-per-socket**,  **fill-physical-first**  and  **none**

    -   **Fill-socket-first** attaches threads to cores in the same socket until the socket is full and then moves to the next socket.
    -   **Equal-per-socket** spreads threads evenly among all sockets.
    -   **Fill-physical-first**  attaches threads to physical cores in the same socket until all physical cores are employed and then moves to the next socket. When all physical cores are used, then the process begins again with hyper-threaded cores.
    -   **None**  disables any affinity configuration and lets the system scheduler determine on which core each thread is scheduled to run.

-   lazy\_load\_chunk\_directory = true

    Configures the chunk directory mode that is used for memory chunk lookup.

    **Lazy**  mode configures the chunk directory to load parts of it on demand, thus reducing the initial memory footprint \(from 1 GB to 1 MB approximately\). However, this may result in minor performance penalties and errors in extreme conditions of memory distress. In contrast, using a  **non-lazy**  chunk directory allocates an additional 1 GB of initial memory, produces slightly higher performance and ensures that chunk directory errors are avoided during memory distress.

-   reserve\_memory\_mode = virtual

    Configures the memory reservation mode \(either  **physical**  or  **virtual**\).

    Whenever memory is allocated from the kernel, this configuration value is consulted to determine whether the allocated memory is to be resident \(**physical**\) or not \(**virtual**\). This relates primarily to preallocation, but may also affect runtime allocations. For  **physical**  reservation mode, the entire allocated memory region is made resident by forcing page faults on all pages spanned by the memory region. Configuring  **virtual**  memory reservation may result in faster memory allocation \(particularly during preallocation\), but may result in page faults during the initial access \(and thus may result in a slight performance hit\) and more sever errors when physical memory is unavailable. In contrast, physical memory allocation is slower, but later access is both faster and guaranteed.

-   store\_memory\_policy = compact

    Configures the memory storage policy \(**compact** or  **expanding**\).

    When  **compact**  policy is defined, unused memory is released back to the kernel, until the lower memory limit is reached \(see  **min\_mot\_memory**  below\). In  **expanding**  policy, unused memory is stored in the MOT engine for later reuse. A  **compact**  storage policy reduces the memory footprint of the MOT engine, but may occasionally result in minor performance degradation. In addition, it may result in unavailable memory during memory distress. In contrast,  **expanding**  mode uses more memory, but results in faster memory allocation and provides a greater guarantee that memory can be re-allocated after being de-allocated.

-   chunk\_alloc\_policy = auto

    Configures the chunk allocation policy for global memory.

    MOT memory is organized in chunks of 2 MB each. The source NUMA node and the memory layout of each chunk affect the spread of table data among NUMA nodes, and therefore can significantly affect the data access time. When allocating a chunk on a specific NUMA node, the allocation policy is consulted.

    Available values are  **auto**,  **local**,  **page-interleaved**,  **chunk-interleaved** and  **native**

    -   **Auto** policy selects a chunk allocation policy based on the current hardware.
    -   **Local** policy allocates each chunk on its respective NUMA node.
    -   **Page-interleaved**  policy allocates chunks that are composed of interleaved memory 4‑kilobyte pages from all NUMA nodes.
    -   **Chunk-interleaved** policy allocates chunks in a round robin fashion from all NUMA nodes.
    -   **Native**  policy allocates chunks by calling the native system memory allocator.

-   chunk\_prealloc\_worker\_count = 8

    Configures the number of workers per NUMA node participating in memory preallocation.

-   max\_mot\_global\_memory = 80%

    Configures the maximum memory limit for the global memory of the MOT engine.

    Specifying a percentage value relates to the total defined by  **max\_process\_memory**  configured in  **postgresql.conf**.

    The MOT engine memory is divided into global \(long-term\) memory that is mainly used to store user data and local \(short-term\) memory that is mainly used by user sessions for local needs.

    Any attempt to allocate memory beyond this limit is denied and an error is reported to the user. Ensure that the sum of  **max\_mot\_global\_memory**  and  **max\_mot\_local\_memory**  do not exceed the  **max\_process\_memory**  configured in  **postgresql.conf**.

-   min\_mot\_global\_memory = 0 MB

    Configures the minimum memory limit for the global memory of the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory** configured in  **postgresql.conf**.

    This value is used for the preallocation of memory during startup, as well as to ensure that a minimum amount of memory is available for the MOT engine during its normal operation. When using  **compact**  storage policy \(see  **store\_memory\_policy**  above\), this value designates the lower limit under which memory is not released back to the kernel, but rather kept in the MOT engine for later reuse.

-   max\_mot\_local\_memory = 15%

    Configures the maximum memory limit for the local memory of the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    MOT engine memory is divided into global \(long-term\) memory that is mainly used to store user data and local \(short-term\) memory that is mainly used by user session for local needs.

    Any attempt to allocate memory beyond this limit is denied and an error is reported to the user. Ensure that the sum of  **max\_mot\_global\_memory**  and  **max\_mot\_local\_memory**  do not exceed the  **max\_process\_memory**  configured in  **postgresql.conf**.

-   min\_mot\_local\_memory = 0 MB

    Configures the minimum memory limit for the local memory of the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    This value is used for preallocation of memory during startup, as well as to ensure that a minimum amount of memory is available for the MOT engine during its normal operation. When using compact storage policy \(see  **store\_memory\_policy**  above\), this value designates the lower limit under which memory is not released back to the kernel, but rather kept in the MOT engine for later reuse.

-   max\_mot\_session\_memory = 0 MB

    Configures the maximum memory limit for a single session in the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    Typically, sessions in the MOT engine can allocate as much local memory as needed, so long as the local memory limit is not exceeded. To prevent a single session from taking too much memory, and thereby denying memory from other sessions, this configuration item is used to restrict small session-local memory allocations \(up to 1,022 KB\).

    Make sure that this configuration item does not affect large or huge session-local memory allocations.

    A value of zero denotes no restriction on any session-local small allocations per session, except for the restriction arising from the local memory allocation limit configured by  **max\_mot\_local\_memory**.

-   min\_mot\_session\_memory = 0 MB

    Configures the minimum memory reservation for a single session in the MOT engine.

    Specifying a percentage value relates to the total defined by the  **max\_process\_memory**  configured in  **postgresql.conf**.

    This value is used to preallocate memory during session creation, as well as to ensure that a minimum amount of memory is available for the session to perform its normal operation.

-   high\_red\_mark\_percent = 90

    Configures the high red mark for memory allocations.

    This is calculated as a percentage of the maximum for the MOT engine, as configured by  **max\_mot\_memory**. The default is 90, meaning 90%. When total memory usage by MOT reaches this level, only destructive operations are permitted. All other operations report an error to the user.

-   session\_large\_buffer\_store\_size = 0 MB

    Configures the large buffer store for sessions.

    When a user session executes a query that requires a lot of memory \(for example, when using many rows\), the large buffer store is used to increase the certainty level that such memory is available and to serve this memory request more quickly. Any memory allocation for a session exceeding 1,022 KB is considered as a large memory allocation. If the large buffer store is not used or is depleted, such allocations are treated as huge allocations that are served directly from the kernel.

-   session\_large\_buffer\_store\_max\_object\_size = 0 MB

    Configures the maximum object size in the large allocation buffer store for sessions.

    Internally, the large buffer store is divided into objects of varying sizes. This value is used to set an upper limit on objects originating from the large buffer store, as well as to determine the internal division of the buffer store into objects of various size.

    This size cannot exceed 1/8 of the  **session\_large\_buffer\_store\_size**. If it does, it is adjusted to the maximum possible.

-   session\_max\_huge\_object\_size = 1 GB

    Configures the maximum size of a single huge memory allocation made by a session.

    Huge allocations are served directly from the kernel and therefore are not guaranteed to succeed.

    This value also pertains to global \(meaning not session-related\) memory allocations.


