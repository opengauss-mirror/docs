# KILL<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Terminates a specified connection or an SQL statement executed under the connection.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   The KILL syntax is valid in both non-thread pool mode and thread pool mode.
-   Generally, this parameter is used together with the Id column in the query result of SHOW PROCESSSLIST.
-   It can also be used together with SELECT sessionid from pg\_stat\_activity WHERE (filtering condition).


## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
KILL [CONNECTION | QUERY] processlist_id
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **CONNECTION**

    When the CONNECTION keyword is used to modify the KILL statement, the effect is the same as that of KILL processlist\_id, and the current connection is terminated.

- **QUERY**
  
    When the QUERY keyword is used to modify the KILL statement, the SQL statement executed by the current connection is terminated, and the connection itself is not affected.

- **processlist_id**
  
    Connection ID.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Check the current connection.
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

--SQL statement for terminating the 139653027546880 connection
openGauss=# kill query 139653027546880;
 result
--------
 t
(1 row)

--The connection status of 139653027546880 in the processlist is changed to idle.
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

--Terminate the connection to 139653027546880.
openGauss=# kill 139653027546880;
 result
--------
 t
(1 row)

--Alternatively, run the following command:

openGauss=# kill connection 139653027546880;
 result
--------
 t
(1 row)

--The connection does not exist in the processlist.
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
