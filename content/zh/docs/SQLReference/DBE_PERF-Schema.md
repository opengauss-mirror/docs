# DBE\_PERF Schema

DBE\_PERF Schema内视图主要用来诊断性能问题，也是WDR Snapshot的数据来源。数据库安装后，默认只有初始用户具有模式dbe\_perf的权限。若是由旧版本升级而来，为保持权限的前向兼容，模式dbe\_perf的权限与旧版本保持一致。从OS、Instance、Memory等多个维度划分组织视图，并且符合如下命名规范：

-   GLOBAL\_开头的视图，代表从数据库节点请求数据，并将数据追加对外返回，不会处理数据。
-   SUMMARY\_开头的视图，代表是将openGauss内的数据概述，多数情况下是返回数据库节点（有时只有数据库主节点的）的数据，会对数据进行加工和汇聚。
-   非这两者开头的视图，一般代表本地视图，不会向其它数据库节点请求数据。

DBE\_PERF Schema内视图如下：

-   **[OS](OS.md)**  
-   **[Instance](Instance.md)**  
-   **[Memory](Memory.md)**  
-   **[File](File.md)**  
-   **[Object](Object.md)**  
-   **[Workload](Workload.md)**  
-   **[Session/Thread](Session-Thread.md)**  
-   **[Transaction](Transaction.md)**  
-   **[Query](Query.md)**  
-   **[Cache/IO](Cache-IO.md)**  
-   **[Utility](Utility.md)**  
-   **[Lock](LOCK.md)**  
-   **[Wait Events](Wait-Events.md)**  
-   **[Configuration](Configuration.md)**  
-   **[Operator](Operator.md)**  
-   **[Workload Manager](Workload-Manager.md)**  

