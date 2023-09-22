# ndpplugin 查看视图

ndpplugin视图用于查看查询语句下推详细统计信息，帮助用户判断语句下推情况。

```
openGauss=# select * from pushdown_statics();
 query | total_pushdown_page | back_to_gauss | received_scan | received_agg | failed_backend_handle | failed_sendback 
-------+---------------------+---------------+---------------+--------------+-----------------------+-----------------
     0 |                   0 |             0 |             0 |            0 |                     0 |               0
(1 row)
```