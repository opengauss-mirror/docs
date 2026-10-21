---
description: This document describes Resource Pooling Functions in openGauss.
keywords: [openGauss, Resource Pooling Functions, SQL]
---

# Resource Pooling Functions<a name="ZH-CN_TOPIC_0289900393"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:27:06.980Z -->

- ss_buffer_ctrl()

  Description: Displays the information recorded in the buf_ctrl corresponding to the buffer.

  Return type: record

  The returned fields are as follows:

  `bufferid`: Index of the buffer in the array.

  `is_remote_dirty`: Whether there is a remote dirty page, that is, whether nodes other than the current node hold an Early Dirty Page (EDP) version of this page. 0 indicates no remote dirty page, and 1 indicates a dirty page version exists.

  `lock_mode`: Distributed lock mode held by the local node on the page. 0 indicates no lock mode is held, 1 indicates the page is held in S lock mode, and 2 indicates the page is held in X lock mode.

  `is_edp`: Whether the page is an EDP page (Early Dirty Page). When a requester requests the page with an X lock and the current node, as the owner, transfers the page while it is still a dirty page, the local page becomes an EDP page after the transfer. 0 indicates the page is not an EDP page, and 1 indicates it is an EDP page.

  `force_request`: Whether it is a force request. 0 indicates it is not, and 1 indicates it is.

  `need_flush`: In the flush_copy phase of reform, marks pages that need to be flushed to disk. 0 indicates no flush is needed, and 1 indicates flush is needed.

  `buf_id`: Same as bufferid, the index of the buffer in the array.

  `state`: Used to record the status tag.

  `pblk_relno`: The relation ID of the physical block.

  `pblk_blkno`: The block ID of the physical block.

  `pblk_lsn`: LSN of the physical block

  `seg_fileno`: File ID in segment-page storage

  `seg_blockno`: Block ID in segment-page storage

  Example 1: Query the buf_ctrl information of a specific buffer

  ```sql
  openGauss=# select * from ss_buffer_ctrl() where bufferid = 20;
  bufferid | is_remote_dirty | lock_mode | is_edp | force_request | need_flush | buf_id | state | pblk_relno | pblk_blkno | pblk_lsn | seg_fileno | seg_blockno
  ----------+-----------------+-----------+--------+---------------+------------+--------+-------+------------+------------+----------+------------+-------------
  20 | 0 | 1 | 0 | 0 | 0 | 19 | 32 | 0 | 4294967295 | 0 | 2 | 4375
  (1 row)
  ```

  Example 2: Query the number of buffers whose DMS page distributed lock is not NULL

  ```sql
  openGauss=#  select count(*) from ss_buffer_ctrl() where lock_mode > 0;
  count
  -------
    258
   (1 row)
  ```

- ss_txnstatus_cache_stat()

    Description: Returns statistics related to transaction information caching and transaction information retrieval. Note: The related count statistics are not exact values. This statistical function is intended for performance tuning analysis rather than precise statistics.

    Return type: record

    `vcache_gets`: Number of times transaction information is obtained from the variable cache

    `hcache_gets`: Number of times transaction information is obtained from the hash cache

    `nio_gets`: Number of times transaction information is obtained from network I/O

    `avg_hcache_gettime_us`: Average time spent obtaining from the hash cache, in μs

    `avg_nio_gettime_us`: Average time spent obtaining from network I/O, in μs

    `cache_hit_rate`: Cache hit rate

    `hcache_eviction`: Cache eviction count

    `avg_eviction_refcnt`: Average number of references per cache entry before eviction

    Example: In a primary/standby TPCC write/read scenario, the standby queries the transaction information cache statistics.

    ```sql
    openGauss=# select * from ss_txnstatus_cache_stat();
    vcache_gets | hcache_gets | nio_gets | avg_hcache_gettime_us | avg_nio_gettime_us | cache_hit_rate | hcache_eviction | avg_eviction_refcnt
    -------------+-------------+----------+-----------------------+--------------------+-----------------+-----------------+---------------------
    263809 | 782159 | 275012 | 1.73883698838727 | 756.186410047562 | .79181213947221 | 0 | 0
    (1 row)
    ```

* query_node_reform_info()

    Description: Queries the reform statistics of the cluster.

    Return type: record

    `reform_node_id`: ID of the database node. Value range: [0, 63]

    `reform_type`: Type of reform that occurs in the cluster. Value range: [Normal reform, Failover, Switchover]

    `reform_start_time`: Time when reform started

    `reform_end_time`: Time when the reform ended.

    `is_reform_success`: Whether the reform is successful.

    `redo_start_time`: Time when log replay started.

    `redo_end_time`: Time when log replay ended.

    `xlog_total_bytes`: Total amount of xlog replayed.

    `hashmap_construct_time`: Time taken to construct the hashmap

    `action`: Action of the node. Value range: [kick off, join in, stable]

    Constraint: This function can only be queried on the database primary node. For standby node information in the query results, only reform_node_id and action are valid; other information is invalid.

    Example 1: A standby node exits the cluster

    ```sql
    openGauss=# select * from query_node_reform_info();
     reform_node_id |  reform_type  |    reform_start_time     |     reform_end_time      | is_reform_success | redo_start_time | redo_end_time | xlog_total_bytes | hashmap_construct_time |  action  
    ----------------+---------------+--------------------------+--------------------------+-------------------+-----------------+---------------+------------------+------------------------+----------
                  0 | Normal reform | 2023-09-21 16:37:06.520  | 2023-09-21 16:37:06.568  | t                 | -               | -             |               -1 | -                      | stable
                  1 | -             | -                        | -                        | t                 | -               | -             |               -1 | -                      | kick off
    (2 rows)
    ```

    Example 2: A standby node joins the cluster

    ```sql
    openGauss=# select * from query_node_reform_info();
     reform_node_id |  reform_type  |    reform_start_time     |     reform_end_time      | is_reform_success | redo_start_time | redo_end_time | xlog_total_bytes | hashmap_construct_time | action  
    ----------------+---------------+--------------------------+--------------------------+-------------------+-----------------+---------------+------------------+------------------------+---------
                  0 | Normal reform | 2023-09-21 16:37:46.414  | 2023-09-21 16:37:47.817  | t                 | -               | -             |               -1 | -                      | stable
                  1 | -             | -                        | -                        | t                 | -               | -             |               -1 | -                      | join in
    (2 rows)
    ```

    Example 3: Primary node failure, cluster failover

    ```sql
    openGauss=# select * from query_node_reform_info();
     reform_node_id | reform_type |    reform_start_time     |     reform_end_time      | is_reform_success |     redo_start_time      |      redo_end_time       | xlog_total_bytes |  hashmap_construct_time  |  action  
    ----------------+-------------+--------------------------+--------------------------+-------------------+--------------------------+--------------------------+------------------+--------------------------+----------
                  0 | -           | -                        | -                        | t                 | -                        | -                        |               -1 | -                        | kick off
                  1 | Failover    | 2023-09-21 16:56:45.893  | 2023-09-21 16:56:50.702  | t                 | 2023-09-21 16:56:50.282  | 2023-09-21 16:56:50.385  |              288 | 2023-09-21 16:56:50.385  | stable
    (2 rows)
    ```

    Example 4: Cluster actively performs switchover

    ```sql
    openGauss=# select * from query_node_reform_info();
     reform_node_id | reform_type |    reform_start_time     |     reform_end_time      | is_reform_success | redo_start_time | redo_end_time | xlog_total_bytes | hashmap_construct_time | action 
    ----------------+-------------+--------------------------+--------------------------+-------------------+-----------------+---------------+------------------+------------------------+--------
                  0 | Switchover  | 2023-09-21 16:59:25.646  | 2023-09-21 16:59:29.182  | t                 | -               | -             |               -1 | -                      | stable
                  1 | -           | -                        | -                        | t                 | -               | -             |               -1 | -                      | stable
    (2 rows)
    ```

* query_page_distribution_info(relname TEXT, forkNum INT4, blockNum INT4)

    Description: Queries the distribution information of a page in the cluster based on `relname + forkNum + blockNum`.

    Input parameter description:

    `relname`: Name of the table to be queried.

    `forkNum`: Name of the file to be queried. Value range: an int value in [0, 3], where 0 indicates the data file, 1 indicates the FSM file, 2 indicates the visibility map file, and 3 indicates the BCM file.

    `blockNum`: Number of the data page to be queried. Value range: an int value in [0, total_bolcks), where total_blocks is determined by the total number of pages in the corresponding file of the table.

    Return type: record

    `instance_id`: Database node ID. Value range: [0, 63].

    `is_master`: Whether the node is the page master

    `is_owner`: Whether the node is the page owner

    `is_copy`: Whether the node holds a copy

    `lock_mode`: Lock mode held by the node

    `mem_lsn`: LSN of the page in memory

    `disk_lsn`: LSN of the page on disk

    `is_dirty`: Whether the page in memory is a dirty page

    Constraint: This function can only be queried on the database primary node

    Example: Insert a row of data into a table, and then immediately query the distribution information of data pages

    ```sql
    openGauss=# create table tb(id int);
    CREATE TABLE
    openGauss=# insert into tb values(0); select * from query_page_distribution_info('tb', 0, 0);
    INSERT 0 1
     instance_id | is_master | is_owner | is_copy |   lock_mode    |  mem_lsn   |  disk_lsn  | is_dirty 
    -------------+-----------+----------+---------+----------------+------------+------------+----------
               0 | t         | t        | f       | Exclusive lock | 1975555208 | 1975555112 | t
    (1 row)
    ```

* dss_io_stat(duration INT4)

    Description: Collects statistics on I/O read/write speed and count within a given time interval. The time interval is specified by `duration`, in seconds.

    Return type: record

    `read_kilobyte_per_sec`: Speed at which DSS reads data within the given time interval, in KB/s.

    `write_kilobyte_per_sec`: Speed at which DSS writes data within the given time interval, in KB/s.

    `io_times`: Number of DSS I/O calls within the given time interval.

    Constraint: `duration < 60`

    Example: The primary node writes data to a table, and the DSS I/O statistics within 2 seconds are queried.

    ```sql
    openGauss=# select * from dss_io_stat(2);
     read_kilobyte_per_sec | write_kilobyte_per_sec | io_times 
    -----------------------+------------------------+----------
                       404 |                  25664 |     3158
    (1 row)
    ```

* query_node_reform_info_from_dms(round INT4)

    Description: Queries reform-related information of the cluster.

    Input parameter description:

    `round`: Indicates which round of reform is being queried. 0: The previous round of reform that has completed. 1: The current round of reform that is in progress. Other values are equivalent to 1.

    Return type: record

    `NAME`: TEXT

    `DESCRIPTION`: TEXT

    There are 27 types of NAME in total:

  | ID | Field Name            | Description                                      |
  | -- | --------------------- | ------------------------------------------------ |
  | 1  | INSTANCE_ID           | Instance ID                                      |
  | 2  | DMS_ROLE              | Instance role REFORMER/PARTNER                   |
  | 3  | PROC_STATUS           | Thread status RUNNING/FINISHED, displayed only when querying the ongoing current round of reform status |
  | 4  | REFORM_STATUS         | Execution progress WAITING/RUNNING/FINISHED      |
  | 5  | START_TIME            | Start timestamp                                  |
  | 6  | REFORM_TYPE           | Reform type                                      |
  | 7  | FULL_CLEAN            | Full clean flag TRUE/FALSE                       |
  | 8  | PROMOTE_ID            | Promoted primary instance ID, switchover type only, displayed only when querying the ongoing current round of reform status and the reform is of switchover type |
  | 9  | DEMOTE_ID             | Demoted standby instance ID, switchover type only, displayed only when querying the ongoing current round of reform status and the reform is of switchover type |
  | 10 | LAST_STEP             | Previous step                                    |
  | 11 | CURR_STEP             | Current step                                     |
  | 12 | NEXT_STEP             | Next step                                        |
  | 13 | CURR_STEP_ELASPED     | Current step elapsed time, displayed only when querying the ongoing current round of reform status |
  | 14 | DDL_ENABLE            | Whether DDL is allowed                           |
  | 15 | FILE_ENABLE           | Whether file operations are allowed              |
  | 16 | BITMAP_MES            | Instance bitmap for establishing MES             |
  | 17 | BITMAP_CONNECT        | Instance bitmap for allowed broadcast            |
  | 18 | BITMAP_STABLE         | Stable node bitmap                               |
  | 19 | BITMAP_ONLINE         | Online node bitmap                               |
  | 20 | BITMAP_RECONNECT      | Instance bitmap requiring reconnection           |
  | 21 | BITMAP_DISCONNECT     | Instance bitmap requiring disconnection          |
  | 22 | BITMAP_CLEAN          | Instance bitmap requiring information cleanup    |
  | 23 | BITMAP_RECOVERY       | Bitmap requiring log replay                      |
  | 24 | BITMAP_IN             | Bitmap corresponding to the stable node list     |
  | 25 | BITMAP_REBUILD        | Bitmap requiring rebuild                         |
  | 26 | BITMAP_WITHDRAW       | Instance bitmap requiring transaction information takeover |
  | 27 | BITMAP_ROLLBACK       | Instance bitmap requiring transaction information takeover by the reformer |

    Example 1: Query the information of the last completed reform round on the current node.

    ```sql
    openGauss=# select * from query_node_reform_info_from_dms(0);
        NAME        |       DESCRIPTION
    -------------------+-------------------------
    INSTANCE_ID       | 0
    DMS_ROLE          | REFORMER
    REFORM_STATUS     | FINISHED
    START_TIME        | 2024-01-02 20:29:04.376
    REFORM_TYPE       | OPENGAUSS_NORMAL
    FULL_CLEAN        | FALSE
    LAST_STEP         | PAGE_ACCESS
    CURR_STEP         | DONE_CHECK
    NEXT_STEP         | N/A
    DDL_ENABLE        | TRUE
    FILE_ENABLE       | TRUE
    BITMAP_MES        | 3
    BITMAP_CONNECT    | 1
    BITMAP_STABLE     | 0
    BITMAP_ONLINE     | 1
    BITMAP_RECONNECT  | 1
    BITMAP_DISCONNECT | 0
    BITMAP_CLEAN      | 0
    BITMAP_RECOVERY   | 1
    BITMAP_IN         | 0
    BITMAP_REBUILD    | 0
    BITMAP_WITHDRAW   | 0
    BITMAP_ROLLBACK   | 0
    (23 rows)
    ```

* query_all_drc_info(type INT4)

    Description: Queries all DRC-related information.

    Input parameter description:

    `type`: Type of DRC to query. 0: DRC for pages. 1: DRC for locks. Other values are equivalent to 1.

    Return type: record

    `resource_id`: Resource identifier. For pages, the format is `fileid-pageid`. For locks, the format is `type/uid/oid/index/part`.

    `master_id`: Node ID of the master.

    `copy_insts`: Bitmap of nodes holding copies.

    `claimed_owner`: ID of the node that holds the owner role

    `lock_mode`: Lock mode held. 0: NULL, 1: SHARED, 2: EXCLUSIVE

    `last_edp`: ID of the node that holds the most recent early dirty page

    `type`: Resource type. 1: page, 2: lock

    `in_recovery`: Whether the node is in the recovery phase

    `copy_promote`: Whether the DRC is promoted from replica to owner during reform

    `part_id`: ID of the DRC partition linked list to which it belongs

    `edp_map`: Bitmap of nodes holding EDP

    `lsn`: Maximum LSN among all EDPs of this page in the cluster

    `len`: Size of data cached by the DRC

    `recovery_skip`: Whether DRC skips replay during reform

    `recycling`: Whether DRC resources are being recycled

    `CONVERTING_INST_ID`: ID of the converting node

    `CONVERTING_CURR_MODE`: Lock mode currently held by the converting node: 0: NULL 1: SHARED 2: EXCLUSIVE

    `CONVERTING_REQ_MODE`: Lock mode requested by the converting node: 0: NULL 1: SHARED 2: EXCLUSIVE

    Constraint: When only the primary node is started, this function returns empty DRC lock information.

    Example 1: Query DRC information of a specific page.

    ```sql
    openGauss=# select * from query_all_drc_info(0) limit 1;
    RESOURCE_ID | MASTER_ID | COPY_INSTS | CLAIMED_OWNER | LOCK_MODE | LAST_EDP | TYPE | IN_RECOVERY | COPY_PROMOTE | PART_ID | EDP_MAP | LSN | LEN | RECOVERY_SK
    IP | RECYCLING | CONVERTING_INST_ID | CONVERTING_CURR_MODE | CONVERTING_REQ_MODE
    -------------------------+-----------+------------+---------------+-----------+----------+------+-------------+--------------+---------+---------+-----+-----+------------
    ---+-----------+--------------------+----------------------+---------------------
    1664/0/1/16384/0 0-4173 | 0 | 2 | 0 | 1 | 255 | 1 | 0 | 0 | 99 | 0 | 0 | 24 |
    0 | 0 | 255 | 0 | 0
    (1 row)
    
    openGauss=# select * from query_all_drc_info(0) where "RESOURCE_ID" = '1664/0/1/16384/0 0-4173';
    RESOURCE_ID | MASTER_ID | COPY_INSTS | CLAIMED_OWNER | LOCK_MODE | LAST_EDP | TYPE | IN_RECOVERY | COPY_PROMOTE | PART_ID | EDP_MAP | LSN | LEN | RECOVERY_SK
    IP | RECYCLING | CONVERTING_INST_ID | CONVERTING_CURR_MODE | CONVERTING_REQ_MODE
    -------------------------+-----------+------------+---------------+-----------+----------+------+-------------+--------------+---------+---------+-----+-----+------------
    ---+-----------+--------------------+----------------------+---------------------
    1664/0/1/16384/0 0-4173 | 0 | 2 | 0 | 1 | 255 | 1 | 0 | 0 | 99 | 0 | 0 | 24 |
    0 | 0 | 255 | 0 | 0
    (1 row)
    ```

* ondemand_recovery_status()*

    Description: Queries the on-demand replay status of the current resource pooling node.

    Return type: record

    `primary_checkpoint_redo_lsn`: The position of the primary redo point read by the current node. When the real-time build feature is not enabled, the value of this field is '0/0'.

    `realtime_build_replayed_lsn`: The primary log position at which the current node has completed the build. When the real-time build feature is not enabled, the value of this field is '0/0'.

    `hashmap_used_blocks`: The number of block-records currently stored in the hashmap.

    `hashmap_total_blocks`: The total number of block-records that can be stored in the hashmap.

    `trxn_queue_blocks`: The number of transaction logs currently stored. When the real-time build feature is not enabled, the value of this field is 0.

    `seg_queue_blocks`: Number of segment-page metadata logs currently stored. When the real-time build feature is not enabled, this field is 0.

    `in_ondemand_recovery`: Whether the current node is in on-demand replay. Value range: [t, f]. When the node is running normally, this field is 'f' regardless of whether the real-time build feature is enabled.

    `ondemand_recovery_status`: Cluster on-demand replay status. The value range and corresponding meanings are as follows:

    | ondemand_recovery_status | Cluster On-Demand Replay Status                                             |
    | ------------------------ | ------------------------------------------------------------ |
    | ONDEMAND_RECOVERY_BUILD  | The cluster is in on-demand replay, building the information required for replay, and does not provide external services temporarily. |
    | ONDEMAND_RECOVERY_REDO   | The cluster is in on-demand replay, providing external services while performing log replay in the background.     |
    | NORMAL                   | The cluster is running normally and is not performing on-demand replay.                           |

    `realtime_build_status`: Current node real-time build status. The value range and corresponding meanings are as follows:

    | realtime_build_status | Real-time build status of the current node                                         |
    | --------------------- | ------------------------------------------------------------ |
    | DISABLED              | The current node is not in real-time build status                                   |
    | BUILD_NORMAL          | The current node is in real-time build status, and the cluster status is normal                     |
    | READY_TO_BUILD        | The current node is starting real-time build                     |
    | BUILD_TO_DISABLED     | The current node is in real-time build status and is about to disable real-time build. This generally occurs on nodes that undergo switchover, normal reform, or failover without promotion to primary |
    | BUILD_TO_REDO         | The current node is in real-time build status and is about to be promoted to primary. This generally occurs on the node being promoted to primary during failover |

    `recovery_pause_status`: Real-time build pause status of the current node. The value range and corresponding meanings are as follows:

    | recovery_pause_status      | Real-time build pause status of the current node                               |
    | -------------------------- | ------------------------------------------------------ |
    | NOT PAUSE                  | Real-time build of the current node is not paused                                 |
    | PAUSE(for sync record)     | Real-time build of the current node is paused. The pause reason is that a DDL log was reached during build        |
    | PAUSE(for hashmap full)    | Real-time build of the current node is paused. The pause reason is that the HashMap space is full          |
    | PAUSE(for trxn queue full) | Real-time build of the current node is paused. The pause reason is that the transaction log queue is full         |
    | PAUSE(for seg queue full)  | Real-time build of the current node is paused. The pause reason is that the segment-page metadata log queue is full |

    `record_item_num`: Number of xlog-record memory blocks used by real-time build/on-demand replay of the current node.

    `record_item_mbytes`: Memory consumed by xlog-record memory blocks for real-time build/on-demand replay of the current node, in MB, rounded down.

    >[!TIP]Caution
    >
    >- When recovery_pause_status indicates that the current node is in the real-time build pause state, replay performance is severely affected and the RTO requirement cannot be guaranteed. Consider increasing ss_ondemand_recovery_mem_size and raising the primary node's page flushing and checkpoint frequency.
    >- This view can be queried only when the on-demand replay feature is enabled.

* `realtime_build_log_ctrl_status()`

    Description: When recovery_time_target > 0 is configured on the primary node and real-time build is enabled on the standby (ss_enable_ondemand_realtime_build = on) and is in progress, this function is queried on the primary node. The value range and meaning of each parameter are as follows:

    Return type: record

    | realtime_build_log_ctrl_status | Status of the real-time build flow control feature queried from the primary node for the standby |
    | -----------------------| ---------------------------------------------------- |     Data Type         |
    | ins_id                 |                  ID of the node                      |     INT4OID         |
    | currentRTO             |             Estimated recovery time of the node       |     INT8OID         |
    | prev_reply_time        |                    Timestamp of the node's last response               |     TIMESTAMPTZOID      |
    | prev_calculate_time    |                   Timestamp of the node's last calculation             |     TIMESTAMPTZOID      |
    | reply_time             |                     Timestamp of the node's current response           |     TIMESTAMPTZOID      |
    | period_total_build     |         Total log build amount of the node in the current period (unit: byte)       |     INT8OID         |
    | build_rate             |          Real-time build rate of the node (unit: byte/ms)       |     INT8OID         |
    | prev_build_ptr         |                     Log sequence number of the node's last build          |     INT8OID         |
    | realtime_build_ptr     |                   Log sequence number of the node's current build           |     TEXTOID         |
    | current_insert_ptr     |          Current log insert position of the node (log sequence number)          |     TEXTOID         |
    | sleep_time             |                     Sleep time of the node (microseconds)          |     INT4OID         |
    
