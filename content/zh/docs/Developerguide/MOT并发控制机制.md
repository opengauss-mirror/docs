# MOT并发控制机制<a name="ZH-CN_TOPIC_0280525154"></a>

通过大量研究，我们找到了最佳的并发控制机制，结论为：基于SILO的OCC算法是MOT中最符合ACID特性的OCC算法。SILO为满足MOT的挑战性需求提供了最好的基础。

随着openGauss 5.0的发布，MOT现已支持MVCC，其中包括减少了读取和更新事务之间的争用，从而减少了OCC方法导致的事务中止。

>![](public_sys-resources/icon-note.gif) **说明：** 
>MOT完全符合原子性、一致性、隔离性、持久性（ACID）特性，如[MOT简介](MOT简介.md)所述。

下面介绍MOT的并发控制机制。

-   **[MOT本地内存和全局内存](MOT本地内存和全局内存.md)**  

-   **[MOT SILO增强特性](MOT-SILO增强特性.md)**  

-   **[MOT隔离级别](MOT隔离级别.md)**  

-   **[MOT乐观并发控制](MOT乐观并发控制.md)**  


