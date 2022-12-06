# MOT SILO Enhancements<a name="EN-US_TOPIC_0270171517"></a>

SILO  in its basic algorithm flow outperformed many other ACID-compliant OCCs that we tested in our research experiments. However, in order to make it a product-grade mechanism, we had to enhance it with many essential functionalities that were missing in the original design, such as –

-   Added support for interactive mode transactions, where transactions are running SQL by SQL from the client side and not as a single step on the server side
-   Added optimistic inserts
-   Added support for non-unique indexes
-   Added support for read-after-write in transactions so that users can see their own changes before they are committed 
-   Added support for lockless cooperative garbage collection
-   Added support for lockless checkpoints
-   Added support for fast recovery
-   Multi Version Concurrency Control (MVCC) support was added (openGauss 5.0).

Adding these enhancements without breaking the scalable characteristic of the original SILO was very challenging.

