# Optimizing Database I/O Parameter<a name="EN-US_TOPIC_0000001149231237"></a>

## I/O Parameters<a name="section181599115402"></a>

-   **pagewriter\_sleep**: controls the page flushing frequency of the backend write process pagewriter in incremental checkpoint mode. When the ratio of dirty pages to the value of  **shared\_buffers**  reaches the value of  **dirty\_page\_percent\_max**, the number of dirty pages in each batch is calculated based on the value of  **max\_io\_capacity**. The pagewriter thread is used to push the recovery point. If the pagewriter thread is set to a large value, the recovery point is pushed slowly, the system breaks down and starts for a long time, and Xlogs are stacked.

    To reduce the RTO and log bloat, you need to decrease the value of  **pagewriter\_sleep**  to accelerate disk flushing, promote the recovery point, and promote log recycling.

-   **bgwriter\_delay**: controls the page flushing frequency of the backend writer process bgwriter in incremental checkpoint mode. When the ratio of the number of idle buffer pages to the value of  **shared\_buffers**  is less than the value of  **candidate\_buf\_percent\_target**, the number of dirty pages in each batch is calculated based on the value of  **max\_io\_capacity**. The bgwriter thread flushes obsolete pages to disks to accelerate the slot occupation speed during service execution. If the time is too long, the performance will be affected.

    To improve service performance, set  **bgwriter\_delay**  to a smaller value.

-   **max\_io\_capacity**: specifies the I/O upper limit per second for the backend write processes \(pagewriter and bgwriter\) to flush pages in batches. Set this parameter based on the service scenario and disk I/O capability. If the RTO is short or the data volume is much larger than the shared memory, and the service access data volume is random, the value of this parameter cannot be too small. A small parameter value reduces the number of pages flushed by the backend write process. If a large number of pages are eliminated due to service triggering, the services are affected.

    **max\_io\_capacity**  must be set based on the optimal random write I/O capability.


