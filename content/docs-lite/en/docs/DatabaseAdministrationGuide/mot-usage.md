# MOT Usage<a name="EN-US_TOPIC_0289899990"></a>

Using MOT tables is quite simple and is described in the few short sections below.

openGauss enables an application to use of MOT tables and standard disk-based tables. You can use MOT tables for your most active, high-contention and throughput-sensitive application tables or you can use MOT tables for all your application's tables.

The following commands describe how to create MOT tables and how to convert existing disk-based tables into MOT tables in order to accelerate an application's database-related performance. MOT is especially beneficial when applied to tables that have proven to be bottlenecks.

Workflow Overview

The following is a simple overview of the tasks related to working with MOT tables –

![](figures/en-us_image_0289899953.png)

-   [Granting User Permissions](granting-user-permissions.md)
-   [Creating/Deleting an MOT](creating-deleting-an-mot.md)
-   **Creating an Index for an MOT Table**
-   This section also describes how to perform various additional MOT-related tasks, as well as  [MOT SQL Coverage and Limitations](mot-sql-coverage-and-limitations.md)  –

-   **[Granting User Permissions](granting-user-permissions.md)**  

-   **[Creating/Deleting an MOT](creating-deleting-an-mot.md)**  

-   **[Creating an Index for an MOT](creating-an-index-for-an-mot.md)**  

-   **[Converting a Disk Table into an MOT](converting-a-disk-table-into-an-mot.md)**  

-   **[Query Native Compilation](query-native-compilation.md)**  

-   **[Retrying an Aborted Transaction](retrying-an-aborted-transaction.md)**  

-   **[MOT External Support Tools](mot-external-support-tools.md)**  

-   **[MOT SQL Coverage and Limitations](mot-sql-coverage-and-limitations.md)**  


