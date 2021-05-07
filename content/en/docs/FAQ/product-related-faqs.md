# Product-related FAQs<a name="EN-US_TOPIC_0000001150665011"></a>

**1. What is the relationship between ultimate RTO, parallel recovery, and standby node readability?**

**Answer:**

The configurations of ultimate RTO, parallel recovery, and standby node readability are as follows:

-   Ultimate RTO:  **recovery\_parse\_workers**  indicates the number of Xlog threads parsed during parallel recovery.  **recovery\_parallelism**  indicates the actual number of Xlog threads during parallel recovery. When  **recovery\_parse\_workers**  is greater than 1, ultimate RTO recovery is implemented. Only when both  **recovery\_parse\_workers**  and  **recovery\_parallelism**  are set to a value greater than 1, can parallel recovery be implemented.
-   Parallel recovery:  **recovery\_max\_workers**  specifies the maximum number of threads for parallel recovery.  **recovery\_parallelism**  specifies the actual number of threads for parallel recovery. If the value of  **recovery\_max\_workers**  is greater than 1, parallel recovery is configured. However, only when  **recovery\_max\_workers**  and  **recovery\_parallelism**  are set to a value greater than 1, can parallel recovery be implemented.
-   Standby node readability:  **hot\_standby**  indicates that a hot standby node can be read during recovery. If the value of  **hot\_standby**  is  **true**, the standby node can be read.

Parallel recovery is a file-level parallel redo, and the ultimate RTO is a data block-level parallel recovery. Parallel recovery is compatible with standby node readability, but ultimate RTO is incompatible with standby node readability. During configuration of preceding parameters, code check \(with  **CheckExtremeRtoGUCConflicts**\) is performed. If  **recovery\_parse\_workers**  is set to a value greater than 1 and  **hot\_standby**  is set to  **true**, an error will be reported.

**2. How can I select a candidate primary node for primary/standby switchover when the standby node cannot be read in the ultimate RTO scenario?**

**Answer:**

The standby node cannot be read only when the RTO is ultimate. In serial recovery and parallel recovery, the standby node can be read. If the ultimate RTO is used, only the synchronous mode can be configured, and a node is selected randomly as the primary. After the synchronous mode is used, the data on all nodes is the same.

**3. What is the function of the template database? Which tables are contained in the template database?**

**Answer:**

The template database provides a method of quickly creating a database. When creating a database, you can specify the  **TEMPLATE**  parameter to create a database by copying a template database.

The template database does not contain any user table. You can view the attributes of the template database in the  **PG\_DATABASE**  system catalog.

**4. When openGauss supports physical replication, does the standby node replay logs by page in parallel mode?**

**Answer:**

openGauss supports two parallel recovery modes: file-level recovery and page-level recovery.

