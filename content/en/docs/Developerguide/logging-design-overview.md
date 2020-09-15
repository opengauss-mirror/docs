# Logging Design Overview<a name="EN-US_TOPIC_0276133416"></a>

Write-Ahead Logging \(WAL\) is a standard method for ensuring data durability. WAL's central concept is that changes to data files \(where tables and indexes reside\) are only written after those changes have been logged, meaning after the log records that describe these changes have been flushed to permanent storage.

In the In-Memory Engine we use the existing openGauss logging facilities and have not develop a low level logging API from scratch in order to reduce development time and to enable it to be used for replication purposes as well.

