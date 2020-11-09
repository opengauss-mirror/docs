# Durability<a name="EN-US_TOPIC_0257867440"></a>

NIR

Write-Ahead Logging \(WAL\) is a standard method for ensuring data durability. WAL's central concept is that changes to data files \(where tables and indexes reside\) must be written only after those changes have been logged, that is, after log records describing the changes have been flushed to permanent storage.

The MOT is fully integrated with the envelope openGauss/GaussDB logging facilities. Besides durability and additional benefit of this method is being able to use it for replication purposes as well.

Three logging methods are supported, two standard “Synchronous” and “Asynchronous” which are also supported by the standard disk-engine. In addition, in the MOT a new “Group-Commit” with special NUMA-Awareness optimization is introduced. The Group-Commit provides the top performance while maintaining ACID properties.

Vladi / Eli: Text text text …a paragraph about the state of the art checkpoint module….

-   **[Exception Handling](exception-handling.md)**  

-   **[Logging](logging-21.md)**  

-   **[Checkpoint](checkpoint-22.md)**  


