# ALTER SYSTEM KILL SESSION

## 功能描述<a name="zh-cn_topic_0283137036_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s40bbf40e12d1487aaca3ddd1b9bb55e0"></a>

ALTER SYSTEM KILL SESSION命令用于结束一个会话。

## 注意事项<a name="zh-cn_topic_0283137036_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s16279beb536e4281b8403ab11195cb3a"></a>

无。

## 语法格式<a name="zh-cn_topic_0283137036_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s3b7743fa7cab42718575f7194d1112ba"></a>

```
ALTER SYSTEM KILL SESSION 'thread_id, session_id' [ IMMEDIATE ];
```

## 参数说明<a name="zh-cn_topic_0283137036_zh-cn_topic_0237122075_zh-cn_topic_0059778605_sa834b01395fd4366a5dce7a64ad867b6"></a>

-   **thread_id, session_id**

    会话对应的的线程ID和会话的SID

-   **IMMEDIATE**

    表明会话将在命令执行后立即结束。

## 示例<a name="zh-cn_topic_0283137036_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s731ce019d40848b1aa9b394fd2484a33"></a>

```
-- 查询当前是否开启线程池模式
openGauss=# show enable_thread_pool;
 enable_thread_pool
--------------------
 off
(1 row)

-- 查询会话信息。
openGauss=# select pid, sessionid, usename, application_name from pg_stat_activity where usename = 'omm';
       pid       |    sessionid    | usename  |    application_name
-----------------+-----------------+----------+------------------------
 140114517817088 | 140114517817088 | omm      | gsql
 140114743260928 | 140114743260928 | omm      | WLMArbiter
 140114791495424 | 140114791495424 | omm      | workload
 140114766329600 | 140114766329600 | omm      | WorkloadMonitor
 140115301627648 | 140115301627648 | omm      | CfsShrinker
 140115220821760 | 140115220821760 | omm      | statement flush thread
 140115240285952 | 140115240285952 | omm      | Asp
 140115336230656 | 140115336230656 | omm      | TxnSnapCapturer
 140115460486912 | 140115460486912 | omm      | JobScheduler
 140115380795136 | 140115380795136 | omm      | ApplyLauncher
 140115266434816 | 140115266434816 | omm      | PercentileJob
(11 rows)

-- 结束当前gsql连接会话，当前会话会断开并重新连接
openGauss=# ALTER SYSTEM KILL SESSION '140114517817088, 140114517817088';
FATAL:  terminating connection due to administrator command
FATAL:  terminating connection due to administrator command
The connection to the server was lost. Attempting reset: Succeeded.
```

