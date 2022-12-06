# MOT Concurrency Control Mechanism<a name="EN-US_TOPIC_0270171515"></a>

After investing extensive research to find the best concurrency control mechanism, we concluded that SILO based on OCC is the best ACID-compliant OCC algorithm for MOT. SILO provides the best foundation for MOT's challenging requirements.

With the release of openGauss 5.0 the MOT now includes support for MVCC, which among other benefits reduces the contention between read and update transactions thus reducing transaction aborts that come with OCC method.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>MOT is fully Atomicity, Consistency, Isolation, Durability \(ACID\)-compliant, as described in the  [MOT Introduction](mot-introduction.md)  section.

The following topics describe MOT's concurrency control mechanism –

-   **[MOT Local and Global Memory](mot-local-and-global-memory.md)**  

-   **[MOT SILO Enhancements](mot-silo-enhancements.md)**  

-   **[MOT Isolation Levels](mot-isolation-levels.md)**  

-   **[MOT Optimistic Concurrency Control](mot-optimistic-concurrency-control.md)**  


