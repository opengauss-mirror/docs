# KILL

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

终止指定连接或该连接下执行的SQL语句。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   KILL语法在非线程池模式和线程池模式下均有效。
-   一般结合SHOW PROCESSSLIST的查询结果Id字段使用。
-   也可以结合select sessionid from pg_stat_activity where (过滤条件) 使用


## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
KILL [CONNECTION | QUERY] processlist_id
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **CONNECTION**

    使用CONNECTION关键字修饰KILL语句时，效果等价于KILL processlist_id，终止当前连接。

- **QUERY**
  
    使用QUERY关键字修饰KILL语句时，终止当前连接执行的SQL语句，连接本身不受影响。

- **processlist_id**
  
    连接Id。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--查看当前连接
openGauss=# show processlist;
       Id        |       Pid       |      QueryId      | UniqueSqlId |   User    | Host |    db    |        Command         |
      BackendStart          |           XactStart           |  Time  | State  |                  Info
-----------------+-----------------+-------------------+-------------+-----------+------+----------+------------------------+---
----------------------------+-------------------------------+--------+--------+----------------------------------------
 139653370304256 | 139653370304256 |                 0 |           0 | opengauss |      | postgres | ApplyLauncher          | 20
22-06-21 16:46:19.656076+08 |                               |        |        |
 139653319255808 | 139653319255808 |                 0 |           0 | opengauss |      | postgres | Asp                    | 20
22-06-21 16:46:19.728521+08 |                               |      1 | active |
 139653336483584 | 139653336483584 |                 0 |           0 | opengauss |      | postgres | PercentileJob          | 20
22-06-21 16:46:19.728527+08 |                               |      8 | active |
 139653302175488 | 139653302175488 |                 0 |           0 | opengauss |      | postgres | statement flush thread | 20
22-06-21 16:46:19.728558+08 |                               | 508507 | idle   |
 139653198239488 | 139653198239488 |                 0 |           0 | opengauss |      | postgres | WorkloadMonitor        | 20
22-06-21 16:46:19.750133+08 |                               |        |        |
 139653181298432 | 139653181298432 |                 0 |           0 | opengauss |      | postgres | WLMArbiter             | 20
22-06-21 16:46:19.750976+08 |                               |        |        |
 139653215110912 | 139653215110912 |                 0 |           0 | opengauss |      | postgres | workload               | 20
22-06-21 16:46:19.754504+08 | 2022-06-21 16:46:19.769585+08 | 508507 | active | WLM fetch collect info from data nodes
 139653421840128 | 139653421840128 |                 0 |           0 | opengauss |      | postgres | JobScheduler           | 20
22-06-27 10:00:54.754007+08 |                               |      0 | active |
 139653044328192 | 139653044328192 | 48976645947655327 |  1772643515 | opengauss | -1   | dolphin  | gsql                   | 20
22-06-27 14:00:53.163338+08 | 2022-06-27 14:01:26.794658+08 |      0 | active | show processlist;
 139653027546880 | 139653027546880 | 48976645947655326 |  1775585557 | opengauss | -1   | postgres | gsql                   | 20
22-06-27 14:01:03.969962+08 | 2022-06-27 14:01:19.967521+08 |      7 | active | select pg_sleep(100);
(10 rows)

--终止139653027546880连接执行的SQL语句
openGauss=# kill query 139653027546880;
 result
--------
 t
(1 row)

--查看processlist的139653027546880连接状态，已经变为idle
openGauss=# show processlist;
       Id        |       Pid       |      QueryId      | UniqueSqlId |   User    | Host |    db    |        Command         |
      BackendStart          |           XactStart           |  Time  | State  |                  Info
-----------------+-----------------+-------------------+-------------+-----------+------+----------+------------------------+---
----------------------------+-------------------------------+--------+--------+----------------------------------------
 139653370304256 | 139653370304256 |                 0 |           0 | opengauss |      | postgres | ApplyLauncher          | 20
22-06-21 16:46:19.656076+08 |                               |        |        |
 139653319255808 | 139653319255808 |                 0 |           0 | opengauss |      | postgres | Asp                    | 20
22-06-21 16:46:19.728521+08 |                               |      0 | active |
 139653336483584 | 139653336483584 |                 0 |           0 | opengauss |      | postgres | PercentileJob          | 20
22-06-21 16:46:19.728527+08 |                               |      5 | active |
 139653302175488 | 139653302175488 |                 0 |           0 | opengauss |      | postgres | statement flush thread | 20
22-06-21 16:46:19.728558+08 |                               | 508573 | idle   |
 139653198239488 | 139653198239488 |                 0 |           0 | opengauss |      | postgres | WorkloadMonitor        | 20
22-06-21 16:46:19.750133+08 |                               |        |        |
 139653181298432 | 139653181298432 |                 0 |           0 | opengauss |      | postgres | WLMArbiter             | 20
22-06-21 16:46:19.750976+08 |                               |        |        |
 139653215110912 | 139653215110912 |                 0 |           0 | opengauss |      | postgres | workload               | 20
22-06-21 16:46:19.754504+08 | 2022-06-21 16:46:19.769585+08 | 508573 | active | WLM fetch collect info from data nodes
 139653421840128 | 139653421840128 |                 0 |           0 | opengauss |      | postgres | JobScheduler           | 20
22-06-27 10:00:54.754007+08 |                               |      1 | active |
 139653044328192 | 139653044328192 | 48976645947655329 |  1772643515 | opengauss | -1   | dolphin  | gsql                   | 20
22-06-27 14:00:53.163338+08 | 2022-06-27 14:02:33.180256+08 |      0 | active | show processlist;
 139653027546880 | 139653027546880 |                 0 |           0 | opengauss | -1   | postgres | gsql                   | 20
22-06-27 14:01:03.969962+08 |                               |     11 | idle   | select pg_sleep(100);
(10 rows)

--终止139653027546880连接
openGauss=# kill 139653027546880;
 result
--------
 t
(1 row)

--或

openGauss=# kill connection 139653027546880;
 result
--------
 t
(1 row)

--查看processlist中已经不存在该连接
openGauss=# show processlist;
       Id        |       Pid       |      QueryId      | UniqueSqlId |   User    | Host |    db    |        Command         |
      BackendStart          |           XactStart           |  Time  | State  |                  Info
-----------------+-----------------+-------------------+-------------+-----------+------+----------+------------------------+---
----------------------------+-------------------------------+--------+--------+----------------------------------------
 139653370304256 | 139653370304256 |                 0 |           0 | opengauss |      | postgres | ApplyLauncher          | 20
22-06-21 16:46:19.656076+08 |                               |        |        |
 139653319255808 | 139653319255808 |                 0 |           0 | opengauss |      | postgres | Asp                    | 20
22-06-21 16:46:19.728521+08 |                               |      1 | active |
 139653336483584 | 139653336483584 |                 0 |           0 | opengauss |      | postgres | PercentileJob          | 20
22-06-21 16:46:19.728527+08 |                               |      7 | active |
 139653302175488 | 139653302175488 |                 0 |           0 | opengauss |      | postgres | statement flush thread | 20
22-06-21 16:46:19.728558+08 |                               | 508696 | idle   |
 139653198239488 | 139653198239488 |                 0 |           0 | opengauss |      | postgres | WorkloadMonitor        | 20
22-06-21 16:46:19.750133+08 |                               |        |        |
 139653181298432 | 139653181298432 |                 0 |           0 | opengauss |      | postgres | WLMArbiter             | 20
22-06-21 16:46:19.750976+08 |                               |        |        |
 139653215110912 | 139653215110912 |                 0 |           0 | opengauss |      | postgres | workload               | 20
22-06-21 16:46:19.754504+08 | 2022-06-21 16:46:19.769585+08 | 508696 | active | WLM fetch collect info from data nodes
 139653421840128 | 139653421840128 |                 0 |           0 | opengauss |      | postgres | JobScheduler           | 20
22-06-27 10:00:54.754007+08 |                               |      1 | active |
 139653044328192 | 139653044328192 | 48976645947655331 |  1772643515 | opengauss | -1   | dolphin  | gsql                   | 20
22-06-27 14:00:53.163338+08 | 2022-06-27 14:04:35.418518+08 |      0 | active | show processlist;
(9 rows)
```

