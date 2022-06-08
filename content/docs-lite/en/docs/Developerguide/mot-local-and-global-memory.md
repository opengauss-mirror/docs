# MOT Local and Global Memory<a name="EN-US_TOPIC_0289900476"></a>

SILO manages both a local memory and a global memory, as shown in.

-   Global memory is long-term shared memory is shared by all cores and is used primarily to store all the table data and indexes
-   Local memory is short-term memory that is used primarily by sessions for handling transactions and store data changes in a primate to transaction memory until the commit phase.

When a transaction change is required, SILO handles the copying of all that transaction's data from the global memory into the local memory. Minimal locks are placed on the global memory according to the OCC approach, so that the contention time in the global shared memory is extremely minimal. After the transaction change has been completed, this data is pushed back from the local memory to the global memory.

The basic interactive transactional flow with our SILO-enhanced concurrency control is shown in the figure below:

**Figure  1**  Private \(Local\) Memory \(for each transaction\) and a Global Memory \(for all the transactions of all the cores\)<a name="en-us_topic_0283136457_en-us_topic_0280525155_fig18716015"></a>  
![](figures/private-(local)-memory-(for-each-transaction)-and-a-global-memory-(for-all-the-transactions-of-all-t.png "private-(local)-memory-(for-each-transaction)-and-a-global-memory-(for-all-the-transactions-of-all-t")

For more details, refer to the Industrial-Strength OLTP Using Main Memory and Many-cores document<sup>\[</sup>[Comparison: Disk vs. MOT](comparison-disk-vs-mot.md)<sup>\]</sup>.

