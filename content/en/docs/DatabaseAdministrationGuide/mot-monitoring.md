# MOT Monitoring<a name="EN-US_TOPIC_0270642718"></a>

All syntax for monitoring of PG-based FDW tables is supported. This includes Table or Index sizes \(as described below\). In addition, special functions exist for monitoring MOT memory consumption, including MOT Global Memory, MOT Local Memory and a single client session.

## Table and Index Sizes<a name="section14735111418215"></a>

The size of tables and indexes can be monitored by querying pg\_relation\_size.

For example

**Data Size**

```
select pg_relation_size('customer');
```

**Index**

```
select pg_relation_size('customer_pkey');
```

## MOT GLOBAL Memory Details<a name="section992516266216"></a>

Check the size of MOT global memory, which includes primarily the data and indexes.

```
select * from mot_global_memory_detail();
```

Result –

```
numa_node  | reserved_size        | used_size
----------------+----------------+-------------
-1            | 194716368896      | 25908215808
0             | 446693376         | 446693376
1             | 452984832         | 452984832
2             | 452984832         | 452984832
3             | 452984832         | 452984832
4             | 452984832         | 452984832
5             | 364904448         | 364904448
6             | 301989888         | 301989888
7             | 301989888         | 301989888
```

Where –

-   -1 is the total memory.

-   0..7 are NUMA memory nodes.

## MOT LOCAL Memory Details<a name="section229193717315"></a>

Check the size of MOT local memory, which includes session memory.

```
select * from mot_local_memory_detail();
```

Result –

```
numa_node  | reserved_size      | used_size   
----------------+----------------+-------------
-1            | 144703488       | 144703488
0             | 25165824        | 25165824
1             | 25165824        | 25165824
2             | 18874368        | 18874368
3             | 18874368        | 18874368
4             | 18874368        | 18874368
5             | 12582912        | 12582912
6             | 12582912        | 12582912
7             | 12582912        | 12582912
```

Where –

-   -1 is the total memory.
-   0..7 are NUMA memory nodes.

## Session Memory<a name="section106911232543"></a>

Memory for session management is taken from the MOT local memory.

Memory usage by all active sessions \(connections\) is possible using the following query –

```
select * from mot_session_memory_detail();
```

Result –

```
sessid                   | total_size | free_size | used_size
---------------------------------––––––-+-----------+----------+----------
1591175063.139755603855104 | 6291456    | 1800704   | 4490752
 
```

Legend –

-   **total\_size –**  is allocated for the session
-   **free\_size –**  not in use
-   **used\_size –**  In actual use

The following query enables a DBA to determine the state of local memory used by the current session –

```
select * from mot_session_memory_detail() 
 where sessid = pg_current_sessionid();
```

Result –

![](figures/en-us_image_0270643558.png)

