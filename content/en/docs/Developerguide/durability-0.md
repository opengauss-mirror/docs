# Durability<a name="EN-US_TOPIC_0260488163"></a>

Write-Ahead Logging \(WAL\) is a standard method for ensuring data durability. WAL's central concept is that changes to data files \(where tables and indexes reside\) must be written only after those changes have been logged, that is, after log records describing the changes have been flushed to permanent storage.

The MOT is fully integrated with the envelope openGauss logging facilities. Besides durability and additional benefit of this method is being able to use it for replication purposes as well.

Three logging methods are supported, two standard “Synchronous” and “Asynchronous” which are also supported by the standard disk-engine. In addition, in the MOT a new “Group-Commit” with special NUMA-Awareness optimization is introduced. The Group-Commit provides the top performance while maintaining ACID properties.

-   **[Exception Handling](exception-handling.md)**  

-   **[Logging](logging.md)**  

-   **[Checkpoint](checkpoint.md)**  


