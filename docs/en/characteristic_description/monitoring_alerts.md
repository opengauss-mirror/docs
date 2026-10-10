# Monitoring and Alarms

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:19:33.993Z pushedAt=2026-09-22T11:12:32.671Z -->

## Availability<a name="section20250628202422"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section20250628202423"></a>

This feature collects the running status of database kernel background threads and the server system, analyzes and calculates whether the database has an exception, and writes the exception information to the alarm log. This feature helps us promptly detect potential issues, quickly locate the root cause, and efficiently resolve problems when using the openGauss database, greatly improving the efficiency and stability of database O&M.

## Customer Benefits<a name="section20250628202424"></a>

Currently, openGauss O&M relies mainly on manual troubleshooting and locating, lacking automatic detection and early warning capabilities. Manual O&M has drawbacks such as being time-consuming, difficult to locate, and poor real-time performance. This feature provides kernel-process-level and system-level monitoring capabilities, helping customers detect problems at the earliest moment when database exceptions occur and reducing the labor cost of database O&M.

## Feature Description<a name="section20250628202425"></a>

- Supports DN instance-level alarm monitoring, such as DN instance process exceptions, DN primary/standby switchover, database read-only, and database abnormal restart.
- Supports CM instance-level alarm monitoring, such as cm_server process exceptions, cm_agent process exceptions, and cm_server instance primary/standby switchover.
- Supports exception alarms generated during database user interaction, such as DN instance Build failure, DN instance Build timeout, Switchover timeout, database login/connection failure, and database account lockout.
- Supports system-level metric monitoring, such as disk faults, insufficient disk space, slow disks, disk hang, insufficient memory, high CPU load, and high IO load.

The supported alarm list is as follows.

| No. | Alarm Name | Alarm Type | CM Required |
|----|---------------------------|-------|--------|
| 1  | Database directory lost | Fault | No |
| 2  | Data instance connection count exceeded | Fault | No |
| 3  | Wal log segment missing | Fault | No |
| 4  | Data instance archiving exception | Fault | No |
| 5  | Data instance connection authentication method exception | Fault | No |
| 6  | Database connection count exceeded | Fault | No |
| 7  | Database user connection count exceeded | Fault | No |
| 8  | Data instance dual-node listening socket exception | Fault | No |
| 9  | Data instance file handle insufficient | Fault | No |
| 10 | Database login/connection failed | Event | No |
| 11 | User account locked | Fault | No |
| 12 | User account login failure exceeded | Fault | No |
| 13 | Deadlock | Event | No |
| 14 | xlog accumulation | Fault | No |
| 15 | DN instance exception | Fault | Yes |
| 16 | DN process exception | Fault | Yes |
| 17 | DN primary/standby switchover | Event | Yes |
| 18 | Database abnormal restart | Event | Yes |
| 19 | Database read-only | Fault | Yes |
| 20 | CM_AGENT process exception | Fault | Yes |
| 21 | CM_SERVER process exception | Fault | Yes |
| 22 | CM_AGENT failed to connect to database service | Fault | Yes |
| 23 | DN instance unresponsive exception | Fault | Yes |
| 24 | DN instance Build failed | Event | Yes |
| 25 | DN instance Build in progress | Event | Yes |
| 26 | DN forced Redo stop | Event | Yes |
| 27 | CM_SERVER instance primary/standby switchover | Event | Yes |
| 28 | switchover command timeout alarm | Event | Yes |
| 29 | build command timeout alarm | Event | Yes |
| 30 | Database file lost (undo/clog/csnlog) | Fault | Yes |
| 31 | Database file accumulation (undo/clog/csnlog) | Fault | Yes |
| 32 | Physical file read/write time too long | Fault | Yes |
| 33 | DN instance disk exception | Fault | Yes |
| 34 | DN failover | Event | Yes |
| 35 | Disaster recovery cluster DN disconnection | Fault | Yes |
| 36 | Insufficient disk space alarm | Event | Yes |
| 37 | Slow disk alarm | Fault | Yes |
| 38 | Disk fault | Fault | Yes |
| 39 | Disk hang | Fault | Yes |
| 40 | Insufficient memory | Event | Yes |
| 41 | High IO load | Event | Yes |
| 42 | High CPU load | Event | Yes |
| 43 | DN network isolation | Fault | Yes |
| 44 | Table not analyzed | Fault | Yes |
| 45 | Table not vacuumed | Fault | Yes |
| 46 | Data instance lock file already exists | Fault | No |
| 47 | Cluster balance state exception | Event | Yes |
| 48 | IP address listening failed | Event | No |

## Feature Enhancements<a name="section20250628202426"></a>

None.

## Feature Constraints<a name="section20250628202427"></a>

- The alarm reporting function requires the database to be installed using OM; otherwise, alarm information cannot be written to the alarm log file properly.
- Whether the alarm detection function is enabled is controlled by the `enable_alarm` parameter in `postgresql.conf`, and the default value is `on`.
- The alarm reporting interval is controlled by `alarm_report_interval`, and the default value is `10`, meaning that alarms are reported every 10 seconds.
- Alarm types are classified into fault occurrence (Fault), fault recovery (Resume), and event (Event). After a fault occurs, the system can automatically detect and confirm whether it has recovered; if it has recovered, a fault recovery alarm is reported. Event alarms are triggered by specific events and have no recovery state.
- Some alarm functions can be used only after the CM component is installed.

## Dependencies<a name="section20250628202428"></a>

None.
