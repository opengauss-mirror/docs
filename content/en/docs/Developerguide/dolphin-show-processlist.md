# SHOW PROCESSLIST

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Queries information about the current external connection (or internal thread).

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   The Id column corresponds to sessionid in the pg\_stat\_activity view.
-   The Info column records the last SQL statement executed by the connection, which is different from that in B-compatible databases (B-compatible databases display the SQL statement that is being executed). However, you can check whether the SQL statement is being executed based on the State column. If the State column is active, the SQL statement corresponding to the Info column is being executed.


## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [FULL] PROCESSLIST
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **FULL**

       Do not use the FULL option. The Info column displays only the SQL statement whose length does not exceed 100.

       If the FULL option is used, the Info column can display SQL statements whose length does not exceed 1024 characters. If the length of an SQL statement exceeds 1024 characters, the part beyond 1024 characters will be truncated.


## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Method 1
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

--Method 2
openGauss=# show full processlist;
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
```
## Helpful Links<a name="section156744489391"></a>

N/A
