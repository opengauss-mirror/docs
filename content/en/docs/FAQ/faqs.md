# FAQs<a name="EN-US_TOPIC_0000001087566096"></a>

**1. What is the relationship among ultimate RTO, parallel recovery, and standby node readability?**

**Answer:**

-   Ultimate RTO:  **recovery\_parse\_workers**  indicates the number of Xlog threads parsed during parallel recovery.  **recovery\_parallelism**  indicates the actual number of Xlog threads during parallel recovery. When  **recovery\_parse\_workers**  is greater than 1, ultimate RTO recovery is implemented. Only when both  **recovery\_parse\_workers**  and  **recovery\_parallelism**  are set to a value greater than 1, can parallel recovery be implemented.
-   Parallel recovery:  **recovery\_max\_workers**  specifies the maximum number of threads for parallel recovery.  **recovery\_parallelism**  specifies the actual number of threads for parallel recovery. If the value of  **recovery\_max\_workers**  is greater than 1, parallel recovery is configured. However, only when  **recovery\_max\_workers**  and  **recovery\_parallelism**  are set to a value greater than 1, can parallel recovery be implemented.
-   Standby node readability:  **hot\_standby**  indicates that a hot standby node can be read during recovery. If the value of  **hot\_standby**  is  **true**, the standby node can be read.

Parallel recovery is a file-level parallel redo, and the ultimate RTO is a data block-level parallel recovery. Parallel recovery is compatible with standby node readability, but ultimate RTO is incompatible with standby node readability. During parameter configuration, code check \(with  **CheckExtremeRtoGUCConflicts**\) is performed. If  **recovery\_parse\_workers**  is set to a value greater than 1 and  **hot\_standby**  is set to  **true**, an error will be reported.

**2. How can I select a candidate primary node for primary/standby switchover when the standby node cannot be read in the ultimate RTO scenario?**

**Answer:**

The standby node cannot be read only when the RTO is ultimate. In serial recovery and parallel recovery, the standby node can be read. If the ultimate RTO is used, only the synchronous mode can be configured, and a random host can be selected as the primary node. \(After the synchronization mode is configured, the data on all nodes is the same.\)

