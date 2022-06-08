# Optimizing Database Memory Parameters<a name="EN-US_TOPIC_0289900947"></a>

The performance of complex query statements strongly depends on the configuration parameters of the database memory. The database memory parameters include the control parameters for logical memory management and parameters determining whether execution operators are spilled to disks.

## Parameter for Logical Memory Management<a name="en-us_topic_0283136881_en-us_topic_0237121495_en-us_topic_0073253552_en-us_topic_0062863366_section6641095815423"></a>

**max\_process\_memory**  is a parameter used for logical memory management. It specifies the maximum available memory on each database node. Set this parameter by referring to  [max\_process\_memory](memory-35.md#en-us_topic_0283136786_en-us_topic_0237124699_en-us_topic_0059777577_sbebcee7acf2042dc8824982f22a2b4a8).

Use the following formula to calculate the available memory for job execution:

**max\_process\_memory**  – Shared memory \(including  **shared\_buffers**\) –  **cstore\_buffers**

Therefore, the memory available to job execution depends on  **shared\_buffers**  and  **cstore\_buffers**.

Views for logical memory management are provided to display the used memory and peak information in each database block. You can connect to a database node and run  **pg\_total\_memory\_detail **to query information about the memory usage on this database node.

When the specified physical memory is insufficient,  **work\_mem**  determines whether to write additional operator calculation data into temporary tables based on query characteristics and concurrency. This reduces performance by five to 10 times and prolongs the query response time from seconds to minutes.

-   For complex serial queries, each query requires five to ten associated operations. Set  **work\_mem**  using the following formula:  **work\_mem**  = 50% of the memory/10.
-   For simple serial queries, each query requires two to five associated operations. Set  **work\_mem**  using the following formula:  **work\_mem**  = 50% of the memory/5.
-   For concurrent queries, set  **work\_mem**  using the following formula:  **work\_mem**  =  **work\_mem**  for serial queries/Number of concurrent SQL statements.

## Parameter Determining Whether to Spill Execution Operators to Disks<a name="en-us_topic_0283136881_en-us_topic_0237121495_en-us_topic_0073253552_en-us_topic_0062863366_section14594953151011"></a>

**work\_mem**  sets the used memory threshold. Execution operators that can be spilled to disks will be written when the used memory exceeds the threshold. Such execution operators include Hash\(VecHashJoin\), Agg\(VecAgg\), Sort\(VecSort\), Material\(VecMaterial\), SetOp\(VecSetOp\), and WindowAgg\(VecWindowAgg\). They can be vectorized or non-vectorized. This parameter ensures concurrent throughput and the performance of a single query job. Therefore, you need to optimize the parameter based on the output of  **Explain Performance**.

