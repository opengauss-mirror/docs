# SHOW STATUS<a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

SHOW STATUS 显示系统当前统计状态所有值的数据。 该语句不需要任何特权。它仅需要连接到服务器的能力。


## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW STATUS;
```


## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```sql
test=# show status;
            name             |             value
-----------------------------+-------------------------------
 apply_counter               | 0
 apply_total_dur             | 0
 avgiotim                    | 0
 bg_commit_counter           | 31
 bg_resp_avg                 | 9131424
 bg_resp_max                 | 21055938
 bg_resp_min                 | 136
 bg_resp_total               | 283074150
 bg_rollback_counter         | 0
 blk_read_time               | 0
 blks_hit                    | 503787
 blks_read                   | 1842
 blk_write_time              | 0
 buffers_alloc               | 0
 buffers_backend             | 0
 buffers_backend_fsync       | 0
 buffers_checkpoint          | 0
 buffers_clean               | 0
 checkpoints_req             | 6
 checkpoints_timed           | 28
 checkpoint_sync_time        | 6420
 checkpoint_write_time       | 0
 ckpt_clog_flush_num         | 0
 ckpt_csnlog_flush_num       | 0
 ckpt_multixact_flush_num    | 0
 ckpt_predicate_flush_num    | 0
 ckpt_redo_point             | 0/288ABC0
 ckpt_twophase_flush_num     | 0
 commit_counter              | 6
 confl_bufferpin             | 0
 confl_deadlock              | 0
 conflicts                   | 0
 confl_lock                  | 0
 confl_snapshot              | 0
 confl_tablespace            | 0
 curr_dwn                    | 0
 current_xlog_insert_lsn     | 0/288AC60
 curr_start_page             | 1563
 curr_time                   | 1
 datid                       | 16384
 datname                     | test
 dcl_count                   | 0
 ddl_count                   | 0
 deadlocks                   | 0
 delete_count                | 0
 dml_count                   | 9
 file_id                     | 0
 file_reset_num              | 0
 file_trunc_num              | 0
 global_instance_time_count  | 10
 high_threshold_pages        | 0
 high_threshold_writes       | 0
 insert_count                | 0
 last_replayed_read_ptr      | 0
 local_max_ptr               | 0
 locks_count                 | 44
 login_counter               | 3
 logout_counter              | 2
 low_threshold_pages         | 0
 low_threshold_writes        | 0
 lstiotim                    | 0
 maxiowtm                    | 0
 maxwritten_clean            | 0
 miniotim                    | 0
 min_recovery_point          | 0
 n1-backend_used_memory      | 1
 n1-cstore_used_memory       | 0
 n1-dynamic_peak_memory      | 572
 n1-dynamic_peak_shrctx      | 181
 n1-dynamic_used_memory      | 561
 n1-dynamic_used_shrctx      | 181
 n1-gpu_dynamic_peak_memory  | 0
 n1-gpu_dynamic_used_memory  | 0
 n1-gpu_max_dynamic_memory   | 0
 n1-max_backend_memory       | 348
 n1-max_cstore_memory        | 512
 n1-max_dynamic_memory       | 8142
 n1-max_process_memory       | 12288
 n1-max_sctpcomm_memory      | 0
 n1-max_shared_memory        | 3285
 n1-other_used_memory        | 0
 n1-pooler_conn_memory       | 0
 n1-pooler_freeconn_memory   | 0
 n1-process_used_memory      | 795
 n1-sctpcomm_peak_memory     | 0
 n1-sctpcomm_used_memory     | 0
 n1-shared_used_memory       | 214
 n1-storage_compress_memory  | 0
 n1-udf_reserved_memory      | 0
 node_name                   | n1
 numbackends                 | 1
 os_runtime_count            | 19
 os_threads_count            | 23
 p80                         | 6409
 p95                         | 9563
 pgwr_actual_flush_total_num | 0
 pgwr_last_flush_num         | 0
 phyblkrd                    | 519
 phyblkwrt                   | 0
 phyrds                      | 519
 phywrts                     | 0
 primary_flush_ptr           | 42511456
 process_pending_counter     | 0
 process_pending_total_dur   | 0
 queue_head_page_rec_lsn     | 0/0
 queue_rec_lsn               | 0/288ABC0
 read_data_io_counter        | 0
 read_data_io_total_dur      | 0
 read_ptr                    | 42511296
 read_xlog_io_counter        | 2
 read_xlog_io_total_dur      | 331
 recovery_done_ptr           | 0
 redo_done_time              | 0
 redo_start_ptr              | 42511296
 redo_start_time             | 730780334577316
 remain_dirty_page_num       | 0
 resp_avg                    | 45750
 resp_max                    | 257318
 resp_min                    | 124
 resp_total                  | 274502
 rollback_counter            | 0
 select_count                | 6
 speed                       | 0
 stats_reset                 | 2023-02-24 16:50:53.070211+08
 stats_reset                 | 2023-02-24 16:50:40.980548+08
 summary_file_iostat_count   | 65
 temp_bytes                  | 0
 temp_files                  | 0
 total_pages                 | 0
 total_writes                | 0
 tup_deleted                 | 60
 tup_fetched                 | 70424
 tup_inserted                | 9698
 tup_returned                | 57943
 tup_updated                 | 303
 update_count                | 0
 user_id                     | 10
 user_name                   | hlv
 wait_events_count           | 399
 worker_info                 | no redo worker
 workload                    | default_pool
 write_data_io_counter       | 0
 write_data_io_total_dur     | 0
 writetim                    | 0
 xact_commit                 | 1358
 xact_rollback               | 1
(146 rows)
```
