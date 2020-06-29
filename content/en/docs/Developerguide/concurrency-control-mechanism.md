# Concurrency Control Mechanism<a name="EN-US_TOPIC_0257867427"></a>

After investing extensive research to find the best concurrency control mechanism, we concluded that SILO[\[9\]](en-us_topic_0257713290.md#_ftn9)-based on OCC is the best ACID-compliant OCC algorithm for MOT. SILO provides the best foundation for MOT’s challenging requirements.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>MOT is fully Atomicity, Consistency, Isolation, Durability \(ACID\)-compliant, as described in the ++ section.  

## Local and Global MOT Memory<a name="en-us_topic_0257713290_section116201353712"></a>

SILO manages both a local memory and a global memory, as shown in -[Global and Local](memory-planning.md#en-us_topic_0257713337_section31231454125312).

-   **Global**  memory is long-term shared memory is shared by all cores and is used primarily to store all the table data and indexes

-   **Local**  memory is short-term memory that is used primarily by sessions for handling transactions and store data changes in a primate to transaction memory until the commit phase.

When a transaction change is required, SILO handles the copying of all that transaction’s data from the global memory into the local memory. Minimal locks are placed on the global memory according to the OCC approach, so that the contention time in the global shared memory is extremely minimal. After the transaction’ change has been completed, this data is pushed back from the local memory to the global memory.

The basic interactive transactional flow with our SILO-enhanced concurrency control is shown in the figure below.

**Figure  1**  Private \(Local\) Memory \(for each transaction\) and a Global Memory \(for all the transactions of all the cores\)<a name="en-us_topic_0257713290_fig711218135584"></a>  
![](figures/private-(local)-memory-(for-each-transaction)-and-a-global-memory-(for-all-the-transactions-of-all-t.png "private-(local)-memory-(for-each-transaction)-and-a-global-memory-(for-all-the-transactions-of-all-t")

For more details, refer to the vldb document.

H. Avni at al. Industrial-Strength OLTP Using Main Memory and Many-cores, VLDB 2020.

## SILO Enhancements for MOT<a name="en-us_topic_0257713290_section1537993443715"></a>

SILO in its basic algorithm flow outperformed many other ACID-compliant OCCs that we tested in our research experiments. However, in order to make it a product-grade mechanism, we had to enhance it with many essential functionalities that were missing in the original design, such as:

-   Added support for interactive mode transactions, where transactions are running SQL by SQL from the client side and not as a single step on the server side
-   Added optimistic inserts
-   Added support for non-unique indexes
-   Added support for read-after-write in-transaction so users can see their own changes before they are committed
-   Added support for lockless cooperative garbage collection
-   Added support for lockless checkpoints
-   Added support for fast recovery
-   Added support for two-phase commit in a distributed deployment

Adding these enhancements without breaking the scalable characteristic of the original SILO was very challenging.

-   **[Isolation Levels](isolation-levels.md)**  

-   **[Optimistic Concurrency Control](optimistic-concurrency-control.md)**  

-   **[OCC vs 2PL differences by example](occ-vs-2pl-differences-by-example.md)**  


