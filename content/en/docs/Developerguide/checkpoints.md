# Checkpoints<a name="EN-US_TOPIC_0260488105"></a>

A Checkpoint is the point in time at which all the data of a table's rows is saved in files on persistent storage in order to create a full durable database image. It is a snapshot of the data at a specific point in time.

A Checkpoint is required in order to reduce a database's recovery time by shortening the quantity of WAL \(Redo Log\) entries that must be replayed in order to ensure durability. Checkpoint's also reduce the storage space required to keep all the log entries.

If there were no Checkpoints, then in order to recover a database, all the WAL redo entries would have to be replayed from the beginning of time, which could take days/weeks depending on the quantity of records in the database. Checkpoints record the current state of the database and enable old redo entries to be discarded.

Checkpoints are essential during recovery scenarios \(especially for a cold start\). First, the data is loaded from the last known or a specific Checkpoint; and then the WAL is used to complete the data changes that occurred since then.

For example – If the same table row is modified 100 times, then 100 entries are recorded in the log. When Checkpoints are used, then even if a specific table row was modified 100 times, it is recorded in the Checkpoint a single time. After the recording of a Checkpoint, recovery can be performed on the basis of that Checkpoint and only the WAL Redo Log entries that occurred since the Checkpoint need be played.

## Configuring Checkpoints<a name="section76216248432"></a>

Checkpoint configuration is performed in the CHECKPOINT; section of the mot.conf file. You may refer to the  [CHECKPOINT \(MOT\)](checkpoint_mot.md)section of this user manual for a description of these configuration parameters.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>In a production deployment, the value must be TRUE  \#enable\_Checkpoint = true. A FALSE value can only be used for testing.  

