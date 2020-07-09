# Memory Planning<a name="EN-US_TOPIC_0260488185"></a>

MOT belongs to the in-memory database class \(IMDB\) in which all tables and indexes reside entirely in memory.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Memory storage is volatile, meaning that it requires power to maintain the stored information. Disk storage is persistent, meaning that it is written to disk, which is non-volatile storage. MOT uses both, having all data in memory, while persisting \(by WAL logging\) transactional changes to disk with strict consistency \(in synchronous logging mode\).  

Sufficient physical memory must exist on the server in order to maintain the tables in their initial state, as well as to accommodate the related workload and growth of data. All this is in addition to the memory that is required for the traditional disk-based engine, tables and sessions that support the workload of disk-based tables. Therefore, planning ahead for enough memory to contain them all is essential.

Even so, you can get started with whatever amount of memory you have and perform basic tasks and evaluation tests. Later, when you are ready for production, the following issues should be addressed.

## Memory Configuration Settings<a name="section4814161734512"></a>

Similar to standard PG , the memory of the openGauss database process is controlled by the upper limit in its  **max\_process\_memory**  setting, which is defined in the** postgres.conf**  file. The MOT engine and all its components and threads, reside within the openGauss process. Therefore, the memory allocated to MOT also operates within the upper boundary defined by  **max\_process\_memory**  for the entire openGauss database process.

The amount of memory that MOT can reserve for itself is defined as a portion of  **max\_process\_memory**. It is either a percentage of it or an absolute value that is less than it. This portion is defined in the  **mot.conf** configuration file by the  **<min / max\>\_mot\_<global / local\>\_memory**  settings.

The portion of  **max\_process\_memory**  that can be used by MOT must still leave at least 2 GB available for the PG \(openGauss\) envelope. Therefore, in order to ensure this, MOT verifies the following during database startup.

```
(max_mot_global_memory + max_mot_local_memory) + 2GB < max_process_memory
```

If this limit is breached, then MOT memory internal limits are adjusted  in order to provide the maximum possible within the limitations described above. This adjustment is performed during startup and calculates the value of  **MOT max memory** accordingly.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>**MOT max memory**  is a logically calculated value of either the configured settings or their adjusted values of  **\(max\_mot\_global\_memory + max\_mot\_local\_memory\)**.  

In this case, a warning is issued to the server log, as shown below.

## Warning Examples<a name="section1393654114461"></a>

Two messages are reported – the problem and the solution.

The following is an example of a warning message reporting the problem.

```
[WARNING] <Configuration> MOT engine maximum memory definitions (global: 9830 MB, local: 1843 MB, session large store: 0 MB, total: 11673 MB) breach GaussDB maximum process memory restriction (12288 MB) and/or total system memory (64243 MB). MOT values shall be adjusted accordingly to preserve required gap (2048 MB). 
```

The following is an example of a warning message indicating that MOT is automatically adjusting the memory limits.

```
[WARNING] <Configuration> Adjusting MOT memory limits: global = 8623 MB, local = 1617 MB, session large store = 0 MB, total = 10240 MB 
```

This is the only place that shows the new memory limits.

Additionally, MOT does not allow the insertion of additional data when the total memory usage approaches the chosen memory limits. The threshold for determining when additional data insertions are no longer allowed, is defined as a percentage of  **MOT\_max\_memory**  \(which is a calculated value, as described above\). The percentage of  **MOT\_max\_memory**  is configured in the  **high\_red\_mark\_percent**  setting of the  **mot.conf**  file. The default is 90, meaning 90%. Attempting to add additional data over this threshold returns an error to the user and is also registered in the database log file.

## Minimum and Maximum<a name="section16947208104711"></a>

In order to secure memory for future operations, MOT pre-allocates memory based on the minimum global and local settings. The database administrator should specify the minimum amount of memory required for the MOT tables and sessions to sustain their workload. This ensures that this minimal memory is allocated to MOT even if another excessive memory‑consuming application runs on the same server as the database and competes with the database for memory resources. The maximum values are used to limit memory growth.

## Global and Local<a name="section132801922184716"></a>

The memory used by MOT is comprised of two parts：

-   **Global Memory**  – Global memory is a long-term memory pool that contains the data and indexes of MOT tables. It is evenly distributed across NUMA-nodes and is shared by all CPU cores.

-   **Local Memory**  – Local memory is a memory pool used for short-term objects. Its primary consumers are sessions handling transactions. These sessions are storing data changes in the part of the memory dedicated to the relevant specific transaction \(known as  _transaction private memory_\). Data changes are moved to the global memory at the commit phase. Memory object allocation is performed in NUMA-local manner in order to achieve the lowest possible latency.

Deallocated objects are put back in the relevant memory pools. Minimal use of operating system memory allocation \(malloc\) functions during transactions circumvents unnecessary locks and latches.

The allocation of these two memory parts is controlled by the dedicated  **min/max\_mot\_global\_memory**  and  **min/max\_mot\_local\_memory**  settings. If MOT global memory usage gets too close to this defined maximum, then MOT protects itself and does not accept new data. Attempts to allocate memory beyond this limit are denied and an error is reported to the user.

**Minimum Memory Requirements**

To get started and perform a minimal evaluation of MOT performance, there are a few requirements.

Make sure that the  **max\_process\_memory**  \(as defined in  **postgres.conf**\) has sufficient capacity for MOT tables and sessions \(configured by  **mix/max\_mot\_global\_memory**  and  **mix/max\_mot\_local\_memory**\), in addition to the disk tables buffer and extra memory. For simple tests, the default  **mot.conf**  settings can be used.

## Actual Memory Requirements During Production<a name="section152044155487"></a>

In a typical OLTP workload, with 80:20 read:write ratio on average, MOT memory usage per table is 60% higher than in disk-based tables \(this includes both the data and the indexes\). This is due to use of more optimal data structures and algorithms, allowing faster access, with CPU-cache awareness and memory-prefetching.

The actual memory requirement for a specific application depends on the quantity of data, the expected workload and especially on the data growth.

**Max Global Memory Planning – Data + Index Size**

-   To plan for maximum global memory –

1.  Determine the size of a specific disk table \(including both its data and all its indexes\). The following statistical query can be used to determine the data size of the  **customer**  table and the  **customer\_pkey**  index size:
    -   **Data size**

        ```
        select pg_relation_size(‘customer');
        ```

    -   **Index**

        ```
        select pg_relation_size('customer_pkey');
        ```

2.  Add 60%, which is the common requirement in MOT relative to the current size of the disk-based data and index.
3.  Add an additional percentage for the expected growth of data. For example:

    5% monthly growth = 80% yearly growth \(1.05^12\). Thus, in order to sustain a year's growth, allocate 80% more memory than is currently used by the tables.


This completes the estimation and planning of the  **max\_mot\_global\_memory**  value. The actual setting can be defined either as an absolute value or a percentage of the Postgres  **max\_process\_memory**. The exact value is typically finetuned during deployment.

**Max Local Memory Planning – Concurrent Session Support**

Local memory needs are primarily a function of the quantity of concurrent sessions. The typical OLTP workload of an average session uses up to 8 MB. This should be multiplied by the quantity of sessions and then a little bit extra should be added.

A memory calculation can be performed in this manner and then finetuned, as follows:

```
SESSION_COUNT * SESSION_SIZE (8 MB) + SOME_EXTRA (100MB should be enough)
```

The default specifies 15% of Postgres's  **max\_process\_memory**, which by default is 12 GB. This equals 1.8 GB, which is sufficient for 230 sessions, which is the requirement for the  **max\_mot\_local** **memory**. The actual setting can be defined either in absolute values or as a percentage of the Postgres  **max\_process\_memory**. The exact value is typically finetuned during deployment.

**Unusually Large Transactions**

Some transactions are unusually large because they apply changes to a large number of rows. This may increase a single session's local memory up to the maximum allowed limit, which is 1 GB. For example –

```
delete from SOME_VERY_LARGE_TABLE;
```

Take this scenario into consideration when configuring the  **max\_mot\_local\_memory**  setting, as well as during application development. 

