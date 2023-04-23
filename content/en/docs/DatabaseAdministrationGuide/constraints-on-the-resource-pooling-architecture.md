# Constraints on the Resource Pooling Architecture

## Description

openGauss resource pooling is a new cluster architecture launched by openGauss. The DMS and DSS components are used to implement underlying shared storage among multiple nodes in a cluster and real-time memory sharing among nodes. In this way, underlying storage resources are saved, write-once-read-many is supported in a cluster, and real-time consistent read is supported.
This document describes the constraints on the resource pooling architecture.

## Current Constraints
- **Note that these are temporary constraints and the features may be supported in the future.**
  
| No.|  Constraint| Remarks|
|:--:|:--|:--|
| 1 | Only segment-page storage is supported. Page-based storage is not supported.| The table creation statement must contain **with (segment = on, xxx)**.|
| 2 | Row-store tables are not supported.| None|
| 3 | FDW is not supported.| None|
| 4 | Unlogged tables are not supported.| None|
| 5 | Local temporary tables and global temporary tables are not supported.| None|
| 6 | Features with compression are not supported.| None|
| 7 | Materialized views are not supported.| None|
| 8 | The standby node does not support the operation of starting a transaction.| None|
| 9 | XA transactions are not supported.| None|
| 10 | When the OM is used for installation, only disk array deployment is supported. Ceph and virtual storage pools are not supported.| None|
| 11 | Publication and subscription are not supported.| None|
| 12 | The traditional primary/standby architecture cannot be deployed at the same time.| That is, a cluster cannot use both the resource pooling primary/standby mode and the traditional primary/standby mode. That is, the **replconninfo** or **hot\_standby** parameter is not supported.|
| 13 | Ustore is not supported.| Flashback is not supported because flashback supports only Ustore.|
| 14 | The size of a single Xlog file is changed from 16 MB to 1 GB.| The recycling mechanism is also adapted to 1 GB, and the pg\_xlogdump tool is also adapted.|
| 15 | You are not advised to disable Global SysCache.| This function is enabled by default and can be disabled through a configuration item. After this function is disabled, the connection may slow down in the case of high concurrency.|
