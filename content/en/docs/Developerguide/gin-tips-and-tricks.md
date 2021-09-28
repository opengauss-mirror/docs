# GIN Tips and Tricks<a name="EN-US_TOPIC_0289900456"></a>

Create vs. Insert

Insertion into a GIN index can be slow due to the likelihood of many keys being inserted for each item. So, for bulk insertions into a table it is advisable to drop the GIN index and recreate it after finishing bulk insertion. GUC parameters related to GIN index creation and query performance as follows:

-   maintenance\_work\_mem

    Build time for a GIN index is very sensitive to the  **maintenance\_work\_mem**  setting.

-   work\_mem

    During a series of insertions into an existing GIN index that has  **FASTUPDATE**  enabled, the system will clean up the pending-entry list whenever the list grows larger than  **work\_mem**. To avoid fluctuations in observed response time, it is desirable to have pending-list cleanup occur in the background \(that is, via autovacuum\). Foreground cleanup operations can be avoided by increasing  **work\_mem**  or making  **autovacuum**  more aggressive. However, increasing  **work\_mem**  means that if a foreground cleanup occurs, it will take even longer.

-   gin\_fuzzy\_search\_limit

    The primary goal of developing GIN indexes was to support highly scalable full-text search in openGauss. A full-text search often returns a very large set of results. This often happens when the query contains very frequent words, so that the large result set is not even useful. Since reading many tuples from the disk and sorting them could take a lot of time, this is unacceptable for production. To facilitate controlled execution of such queries, GIN has a configurable soft upper limit on the number of rows returned: the  **gin\_fuzzy\_search\_limit**  configuration parameter. The default value  **0**  indicates that there is no limit on the returned set. If a non-zero limit is set, then the returned set is a subset of the whole result set, chosen at random.  **Soft upper limit**  means that the actual number of returned results may deviate from the specified limit, depending on the quality of the query and the system random number generator.


