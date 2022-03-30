# 慢SQL诊断<a name="ZH-CN_TOPIC_0290917654"></a>

## 背景信息<a name="section11436171655914"></a>

在SQL语句执行性能不符合预期时，可以查看SQL语句执行信息，便于事后分析SQL语句执行时的行为，从而诊断SQL语句执行出现的相关问题。

## 前提条件<a name="section18794625615"></a>

-   数据库实例运行正常。
-   查询SQL语句信息，需要正确设置GUC参数track\_stmt\_stat\_level。
-   只能用系统管理员和监控管理员权限进行操作。

```
执行命令查看数据库实例中SQL语句执行信息
gsql> select * from dbe_perf.get_global_full_sql_by_timestamp(start_timestamp, end_timestamp); 
执行命令查看数据库实例中慢SQL语句执行信息
gsql> select * from dbe_perf.get_global_slow_sql_by_timestamp(start_timestamp, end_timestamp);
查看当前节点SQL语句执行信息
gsql> select * from statement_history;
```

